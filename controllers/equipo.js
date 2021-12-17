'use strict'

var client = require("../database/db");
var db = client.db("catalogobd");// SELECCIONANDO LA BASE DE DATOS

var controller = {
    listar: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("equipos").find().toArray()
            .then(
                equipos => {
                    res.render('equipo_list', { dataEquipos: equipos });
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
            var equipo = {}
            equipo.idEquipo = 0;
            equipo.descripcion = "";
            equipo.precio = "";
            res.render('equipo_form', { equipoForm: equipo });
        }

    },
    save: function (req, res) {
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if(req.body.idEquipo == 0){// CUANDO ES NUEVO
           
            db.collection("equipos").count().then( // OBTENER CUANTOS PRODUCTOS TENGO
                countEquipos => { // OBTENER CUANTOS PRODUCTOS EXISTEN
                    var equipo = {}
                    equipo.idEquipo = countEquipos + 1;// NUEVO ID AUMENTA EN 1
                    equipo.descripcion = req.body.descripcion; 
                    equipo.precio = req.body.precio;
/*                     equipo.imagen = req.body.imagen; */
                    console.log(equipo);
                    db.collection("equipos").insertOne(equipo).then(
                        ()=>{
                            res.redirect('/equipo/list');
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