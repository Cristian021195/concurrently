const express = require('express')
const {getNotas, createNota, getNota, deleteNota, updateNota, archiveNota, unarchiveNota,
    getArchivedNotas, getUnarchivedNotas, getNotasByCategory, addCategory, deleteCategory} = require('../controller/notas.js');
const { sessionMiddleware } = require('../middleware/index.js');
const notas_router = express.Router()
//import { crearTurno, obtenerTurnos, obtenerTurno, editarTurno, borrarTurno } from "../controllers/turno.controllers";
//import validacionTurnos from "../helpers/validacionTurnos";

//router.route('/').get(obtenerTurnos).post(validacionTurnos,crearTurno);
notas_router.route('/').get(sessionMiddleware, getNotas).post(sessionMiddleware,createNota);
notas_router.route('/:id').get(sessionMiddleware, getNota).delete(sessionMiddleware, deleteNota).put(sessionMiddleware, updateNota);
notas_router.route('/archive/:id').put(sessionMiddleware, archiveNota);
notas_router.route('/unarchive/:id').put(sessionMiddleware, unarchiveNota);
notas_router.route('/archived').get(sessionMiddleware, getArchivedNotas);
notas_router.route('/unarchived').get(sessionMiddleware, getUnarchivedNotas);
notas_router.route('/category/:type').get(sessionMiddleware, getNotasByCategory)
notas_router.route('/category/:id').post(sessionMiddleware, addCategory);
notas_router.route('/:id/category/:name').delete(sessionMiddleware, deleteCategory);



module.exports = notas_router;