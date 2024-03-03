const express = require('express');
const {login} = require('../controller/login.js');
const login_router = express.Router();
//import { crearTurno, obtenerTurnos, obtenerTurno, editarTurno, borrarTurno } from "../controllers/turno.controllers";
//import validacionTurnos from "../helpers/validacionTurnos";

//router.route('/').get(obtenerTurnos).post(validacionTurnos,crearTurno);
login_router.route('/').post(login);


module.exports = login_router;