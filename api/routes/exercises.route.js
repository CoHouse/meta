"use strict"

var express = require("express");

/* Carga del módulo */
var excerciseController = require("../controllers/exercises.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */
api.get("/getExercise", excerciseController.getExercise );

/* Métodos POST */
api.post("/saveExercise", excerciseController.saveExercise );

module.exports = api;
