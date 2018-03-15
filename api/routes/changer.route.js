"use strict"

var express = require("express");

/* Carga del módulo */
var changerController = require("../controllers/changer.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */

/* Métodos POST */
api.post("/getChanger", changerController.getChanger );
api.post("/saveChanger", changerController.saveChanger );

module.exports = api;
