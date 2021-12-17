'use strict'

var express = require('express');
var LogeoController = require('../controllers/Logeo');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/logeo/list', LogeoController.listar);
router.get('/logeo/form/:id', LogeoController.form);// ABRIR FORMULARIO
router.post('/logeo/save', LogeoController.save);// GUARDAR


module.exports = router;