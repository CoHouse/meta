"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var fileUpload = require('express-fileupload');

/* Variable que sirve como motor de la aplicación, recibe peticiones http, crea controladores, rutas, etc. */
var app = express();

/* Se usa para poder subir archivos al servidor */
app.use( fileUpload( ) );

/*=============================================>>>>>
= Convertir a JSON los datos que lleguen vía las peticiones http =
===============================================>>>>>*/
app.use( bodyParser.urlencoded( { extended:false } ) );
app.use( bodyParser.json( ) );

/*=============================================>>>>>
= Configuración de cabeceras HTTP =
===============================================>>>>>*/
app.use( ( req, res, next )=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

/*=============================================>>>>>
= Cargar Rutas =
===============================================>>>>>*/
var routePosts = require("./routes/posts.route.js");
var routeVideos = require("./routes/videos.route.js");
var routeCategories = require("./routes/categories.route.js");
var routeChanger = require("./routes/changer.route.js");
var routeAdmin = require("./routes/admin.route.js");
var routePlanner = require("./routes/planner.route.js");
var routeNutritionist = require("./routes/nutritionist.route.js");
var routeQuestion = require("./routes/questions.route.js");
var routeTopic = require("./routes/topics.route.js");
var routeChallenge = require("./routes/challenges.route.js");
var routeComment = require("./routes/comments.route.js");
var routeUser = require("./routes/user.route.js");
var routeExercise = require("./routes/exercises.route.js");

/*=============================================>>>>>
= Rutas Base de la aplicación =
===============================================>>>>>*/
app.use( "/api", routePosts );
app.use( "/api", routeVideos );
app.use( "/api", routeCategories );
app.use( "/api", routeChanger );
app.use( "/api", routeAdmin );
app.use( "/api", routePlanner );
app.use( "/api", routeNutritionist );
app.use( "/api", routeQuestion );
app.use( "/api", routeTopic );
app.use( "/api", routeChallenge );
app.use( "/api", routeComment );
app.use( "/api", routeUser );
app.use( "/api", routeExercise );

module.exports = app;
