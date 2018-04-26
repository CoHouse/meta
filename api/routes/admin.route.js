"use strict"

var express = require("express");

/* Carga del módulo */
var changerController = require("../controllers/admin.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */

/* Métodos POST */
api.post("/getAdmin", changerController.getAdmin );
api.post("/saveAdmin", changerController.saveAdmin );

module.exports = api;
