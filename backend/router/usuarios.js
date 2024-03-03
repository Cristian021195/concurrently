const express = require('express')
const {createUsuarios} = require('../controller/usuarios.js');
const usuarios_router = express.Router()
//import { crearTurno, obtenerTurnos, obtenerTurno, editarTurno, borrarTurno } from "../controllers/turno.controllers";
//import validacionTurnos from "../helpers/validacionTurnos";

//router.route('/').get(obtenerTurnos).post(validacionTurnos,crearTurno);
usuarios_router.route('/').post(createUsuarios);


module.exports = usuarios_router;