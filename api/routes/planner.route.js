"use strict"

var express = require("express");

/* Carga del módulo */
var changerController = require("../controllers/planner.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */

/* Métodos POST */
api.post("/getPlanner", changerController.getPlanner );
api.post("/savePlanner", changerController.savePlanner );

module.exports = api;
