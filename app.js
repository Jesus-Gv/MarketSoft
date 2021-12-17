'use strict'

// REQUIRES
var express = require('express');

// CARGAR ARCHIVOS DE RUTAS
var equipo_routes = require('./routes/equipo');
var producto_routes = require('./routes/producto');
var celular_routes = require('./routes/celular');
var accesorio_routes = require('./routes/accesorio');
var logeo_routes = require('./routes/logeo');


// EJECUTAR EXPRESS
var app = express();

// ASIGNO EJS A LAS VISTAS
app.set('view engine','ejs');

// DECODIFICACION DE ENVIOS FORM
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// REESCRIBIR RUTAS
app.use('/',equipo_routes);
app.use('/',producto_routes);
app.use('/',celular_routes);
app.use('/',accesorio_routes);
app.use('/',logeo_routes);


//EXPORTAR MODULE
module.exports = app;