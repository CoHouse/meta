"use strict"

var express = require("express");

/* Carga del módulo */
var topicsController = require("../controllers/topics.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */
api.get("/getTopic/:_id", topicsController.getTopic );
api.get("/getPresentationsTopics", topicsController.getPresentationsTopics );
api.get("/getDoubdtsPlattformTopics", topicsController.getDoubdtsPlattformTopics );
api.get("/getTransformationsTopics", topicsController.getTransformationsTopics );
api.get("/getExerciseProgramTopics", topicsController.getExerciseProgramTopics );
api.get("/getAlimentationProgramTopics", topicsController.getAlimentationProgramTopics );

api.post("/saveTopic", topicsController.saveTopic );

module.exports = api;
