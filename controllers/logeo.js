'use strict'

var client = require("../database/db");
var db = client.db("catalogobd");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("Marketsoft").find().toArray()
            .then(
                Marketsoft => {
                    res.render('logeo_list', { dataMarketsoft: Marketsoft});
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
            var logeo = {}
            logeo.idLogeo = 0;
            logeo.descripcion = "";
            logeo.precio = "";
            res.render('logeo_form', { logeoForm: logeo });
        }

    },
    save: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if(req.body.idLogeo == 0){// CUANDO ES NUEVO
           
            db.collection("formulario").count().then( // OBTENER CUANTOS PRODUCTOS TENGO
                countMarketsoft => { // OBTENER CUANTOS PRODUCTOS EXISTEN
                    var logeo = {}
                    logeo.idMarketsoft = countMarketsoft + 1;// NUEVO ID AUMENTA EN 1
                    logeo.descripcion = req.body.descripcion; 
                    logeo.precio = req.body.precio;
                    console.log(logeo);
                    db.collection("Marketsoft").insertOne(logeo).then(
                        ()=>{
                            res.redirect('/logeo/list');
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