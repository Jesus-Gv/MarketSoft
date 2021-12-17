'use strict'

var client = require("../database/db");
var db = client.db("catalogobd");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("celulares").find().toArray()
            .then(
                celulares => {
                    res.render('celular_list', { dataCelulares: celulares });
                }
            ).catch(
                error => console.log(error)
            )
    },
    form: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION FORM");
        console.log("id:" + req.params.id);
        if (req.params.id == 0) {
            console.log("ENTRANDO A LA FUNCION FORM NUEVO");
            var celular = {}
            celular.idCelular= 0;
            celular.descripcion = "";
            celular.precio = "";
            res.render('celular_form', { celularForm: celular });
        }

    },
    save: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if(req.body.idCelular == 0){// CUANDO ES NUEVO
           
            db.collection("celulares").count().then( // OBTENER CUANTOS PRODUCTOS TENGO
                countCelulares => { // OBTENER CUANTOS PRODUCTOS EXISTEN
                    var celular = {}
                    celular.idCelular = countCelulares + 1;// NUEVO ID AUMENTA EN 1
                    celular.descripcion = req.body.descripcion; 
                    celular.precio = req.body.precio;
/*                     equipo.imagen = req.body.imagen; */
                    console.log(celular);
                    db.collection("celulares").insertOne(celular).then(
                        ()=>{
                            res.redirect('/celular/list');
                        }
                    ).catch(
                        error => console.log(error)
                    )
                }
            );
        }
    }
}
module.exports = controller;