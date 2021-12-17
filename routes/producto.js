'use strict'

var express = require('express');
var ProductoController = require('../controllers/producto');


var router = express.Router();

// RUTAS PARA PRODUCTO
router.get('/producto/list', ProductoController.listar);


module.exports = router;