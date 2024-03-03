//const sequelize = require('../config/db.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = require('../config/db.js');
const Notas = require('../models/notas.js');
async function getNotas(req, res){
    const {mail} = req.body;
    try {
        const notas = await Notas.findAll({where:{UsuarioMail:mail}});
        res.send({data:notas});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function getArchivedNotas(req, res){
    const {mail} = req.body;
    try {
        const notas = await Notas.findAll({
            where:{
                UsuarioMail:mail,
                archived:true
            }});
        res.send({data:notas});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function getUnarchivedNotas(req, res){
    const {mail} = req.body;
    try {
        const notas = await Notas.findAll({
            where:{
                UsuarioMail:mail,
                archived:false
            }});
        res.send({data:notas});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function getNota(req, res){
    const {mail} = req.body;
    const id = req.params.id;
    console.log(id);
    try {
        const nota = await Notas.findOne({where:{
            id,
            UsuarioMail:mail
        }});
        nota === null ? res.status(404).send({msg:"not found"}) : res.send({data:nota});        
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function deleteNota(req, res){
    const {mail} = req.body;
    const id = req.params.id;
    console.log(id);
    try {
        const nota = await Notas.destroy({where:{
            id,
            UsuarioMail:mail
        }});
        nota === null ? res.status(404).send({msg:"not found"}) : res.send({data:nota});        
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function createNota(req, res){
    const {title, content, category, mail} = req.body;
    try {        
        if(mail != "" || mail != undefined){
            const not = await Notas.create({ title, content, category, UsuarioMail:mail });
            console.log({cat: not.category, ar: not.archived}); // Nota #1
            res.send({msg:'creada'});
        }else{
            throw new Error("solicitud sin mail");
        }        
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}


async function updateNota(req, res){
    const {title, content, category, mail} = req.body;
    const id = req.params.id;
    console.log(id);
    try {
        const nota = await Notas.update({
            title: title ? title : null,
            content: content ? content : null,
            category: category ? category : null
        },
        {
            where:{
                id,
                UsuarioMail:mail
        }});
        nota === null ? res.status(404).send({msg:"not found"}) : res.send({data:nota});        
    } catch (error) {
        res.status(500).send({msg:'not updated, err: '+error.message});
    }
}

async function archiveNota(req, res){
    const {mail} = req.body;
    const id = req.params.id;
    try {
        const nota = await Notas.update({
            archived: true
        },
        {
            where:{
                id,
                UsuarioMail:mail
        }});
        nota === null ? res.status(404).send({msg:"not found"}) : res.send({data:nota});        
    } catch (error) {
        res.status(500).send({msg:'not updated, err: '+error.message});
    }
}

async function unarchiveNota(req, res){
    const {mail} = req.body;
    const id = req.params.id;
    try {
        const nota = await Notas.update({
            archived: false
        },
        {
            where:{
                id,
                UsuarioMail:mail
        }});
        nota === null ? res.status(404).send({msg:"not found"}) : res.send({data:nota});        
    } catch (error) {
        res.status(500).send({msg:'not updated, err: '+error.message});
    }
}

async function getNotasByCategory(req,res){
    const {mail} = req.body;
    const type = req.params.type;
    try {
        const notas = await Notas.findAll({
            where:{
                UsuarioMail:mail,
                categories: {
                    [Op.like] : `%${type}%`
                }
            }});
        res.send({data:notas});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function addCategory(req,res){
    const t = await sequelize.transaction();
    const id = req.params.id;
    const {mail, category} = req.body;

    try { 
        const nota = await Notas.findOne({where:{
            id,
            UsuarioMail:mail
        }}, {
            transaction: t
        })
        let note_categories = nota.categories+", "+category;
        const edited = await Notas.update({
            categories: note_categories
        }, {
            where: {
                id:id
            },
            transaction:t
        })
        // If the execution reaches this line, no errors were thrown.
        // We commit the transaction.
        await t.commit();
        res.send({msg:'category added'})
      
      } catch (error) {
      
        // If the execution reaches this line, an error was thrown.
        // We rollback the transaction.
        await t.rollback();
        res.status(401).send({msg:'category not added'})
    }

}

module.exports = {
    getNotas,
    createNota,
    getNota,
    deleteNota,
    updateNota,
    archiveNota,
    unarchiveNota,
    getArchivedNotas,
    getUnarchivedNotas,
    getNotasByCategory,
    addCategory
}