'use strict'

var express = require('express');
var EquipoController = require('../controllers/equipo');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/equipo/list', EquipoController.listar);
router.get('/equipo/form/:id', EquipoController.form);// ABRIR FORMULARIO
router.post('/equipo/save', EquipoController.save);// GUARDAR


module.exports = router;