'use strict'
var express = require('express');
var AccesorioController = require ('../controllers/accesorio');
var router = express.Router();
router.get('/accesorio/list', AccesorioController.listar);
router.get('/accesorio/form/:id', AccesorioController.form);
router.post('/accesorio/save/', AccesorioController.save);
module.exports = router;