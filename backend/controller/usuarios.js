//const sequelize = require('../config/db.js');
const Usuarios = require('../models/usuarios.js');
const bcrypt = require('bcrypt');
async function getUsuarios(req, res){
    
    try {
        const usuarios = await Usuarios.findAll();
        res.send({msg:'creada', data:usuarios});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

async function createUsuarios(req, res){
    const {name, mail, password} = req.body;

    let salt = bcrypt.genSaltSync(10);
    let hashedpass = bcrypt.hashSync(password, salt);

    try {
        
        const not = await Usuarios.create({ name,mail,password:hashedpass });
        console.log({cat: not.category, ar: not.archived}); // Nota #1
        //console.log(not);
        //await not.save();
        res.send({msg:'creada'});
    } catch (error) {
        console.log("MI ERROR: ",error)
        res.status(500).send({msg:'no creada'});
    }
}

module.exports = {
    getUsuarios,
    createUsuarios
}