"use strict"

var express = require("express");

/* Carga del módulo */
var adminController = require("../controllers/admin.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */

/* Métodos POST */
api.post("/getAdmin", adminController.getAdmin );
api.post("/saveAdmin", adminController.saveAdmin );

module.exports = api;
