"use strict"

var express = require("express");
var bodyParser = require("body-parser");

/* Variable que sirve como motor de la aplicación, recibe peticiones http, crea controladores, rutas, etc. */
var app = express();

/*=============================================>>>>>
= Convertir a JSON los datos que lleguen vía las peticiones http =
===============================================>>>>>*/
app.use( bodyParser.urlencoded( { extended:false } ) );
app.use( bodyParser.json( ) );

/*=============================================>>>>>
= Configuración de cabeceras HTTP =
===============================================>>>>>*/
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
})

/*=============================================>>>>>
= Cargar Rutas =
===============================================>>>>>*/
var routePosts = require("./routes/posts.route.js");
var routeVideos = require("./routes/videos.route.js");
var routeCategories = require("./routes/categories.route.js");
var routeChanger = require("./routes/changer.route.js");
var routeQuestion = require("./routes/questions.route.js");

/*=============================================>>>>>
= Rutas Base de la aplicación =
===============================================>>>>>*/
app.use( "/api", routePosts );
app.use( "/api", routeVideos );
app.use( "/api", routeCategories );
app.use( "/api", routeChanger );
app.use( "/api", routeQuestion );

module.exports = app;
