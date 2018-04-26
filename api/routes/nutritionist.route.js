"use strict"

var express = require("express");

/* Carga del módulo */
var nutritionistController = require("../controllers/nutritionist.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */

/* Métodos POST */
api.post("/getNutritionist", nutritionistController.getNutritionist );
api.post("/saveNutritionist", nutritionistController.saveNutritionist );

module.exports = api;
