'use strict'

var client = require("../database/db");
var db = client.db("catalogobd");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("accesorios").find().toArray()
            .then(
                accesorios => {
                    res.render('accesorio_list', { dataAccesorios: accesorios });
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
            var accesorio = {}
            accesorio.idAccesorio = 0;
            accesorio.descripcion = "";
            accesorio.precio = "";
            res.render('accesorio_form', { accesorioForm: accesorio });
        }

    },
    save: function (req, res){
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if(req.body.idAccesorio == 0){
            db.collection("accesorios").count().then(
                countAccesorios => { // OBTENER CUANTOS PRODUCTOS EXISTEN
                    var accesorio = {}
                    accesorio.idAccesorio = countAccesorios + 1;// NUEVO ID AUMENTA EN 1
                    equipo.descripcion = req.body.descripcion; 
                    equipo.precio = req.body.precio;

                    console.log(accesorio);
                    db.collection("accesorios").insertOne(accesorio).then(
                        ()=>{
                            res.redirect('/accesorio/list');
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