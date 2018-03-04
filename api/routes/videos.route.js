"use strict"

var express = require("express");

/* Carga del módulo */
var videosController = require("../controllers/videos.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */
api.get("/getVideos", videosController.showVideos );
api.get("/getVideosHome", videosController.showHomeVideos );

/* Métodos POST */
api.post("/saveVideo", videosController.saveVideo );

api.get( "/pruebaVid", function( error, response ){
    response.status( 200 ).send( { message: 'Tienes el body', otro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' } );
} );

module.exports = api;
