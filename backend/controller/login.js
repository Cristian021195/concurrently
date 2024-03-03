//const sequelize = require('../config/db.js');
const Usuarios = require('../models/usuarios.js');
const bcrypt = require("bcrypt");
const sign = require('jsonwebtoken/sign.js');
const { userTokenStatus } = require('../helpers/index.js');


async function login(req, res){
    const {mail, password} = req.body;
    try {
        //const notas = await Usuarios.findAll();
        const usuarios = await Usuarios.findOne({ where: { mail } });
        if (usuarios != null){
            if(bcrypt.compareSync(password, usuarios?.password)){

                let token = sign({exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,data: {mail: usuarios.mail}},process.env.SIGN);
                if(token){
                    res.send({msg:'login ok', token});
                }else{
                    throw new Error("Error al generar token");
                }
                
            }else{
                res.status(403).send({msg:' user or password not match'});
            }
        }else{
            res.status(404).send({msg:'user not found, check mail address'})
        }        
    } catch (error) {
        res.status(500).send({msg:'error: '+error.message});
    }
}

async function checkTokenUser(req, res){
    try {
      if (userTokenStatus(req.headers["x-token"], process.env.SIGN)) {
        res.status(200).json({ mensaje: "token valido", error:false });
      } else {
        res
          .status(401)
          .json({ mensaje: "token invalido / error al decodificar token", error:true });
      }
    } catch (err) {
      res.status(500).json({ mensaje: "error interno / token invalido: " + err ,error:true});
    }
  };

module.exports = {
    login,
    checkTokenUser
}