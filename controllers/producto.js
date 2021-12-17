'use strict'

var client = require("../database/db");
var db = client.db("catalogobd");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("productos").find().toArray()
            .then(
                productos => {
                    res.render('producto_list', { dataProductos: productos });
                }
            ).catch(
                error => console.log(error)
            )
    }
}
module.exports = controller;