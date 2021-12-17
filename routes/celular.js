'use strict'

var express = require('express');
var CelularController = require('../controllers/celular');


var router = express.Router();

// RUTAS PARA MARCA
router.get('/celular/list', CelularController.listar);
router.get('/celular/form/:id', CelularController.form);// ABRIR FORMULARIO
router.post('/celular/save', CelularController.save);// GUARDAR


module.exports = router;