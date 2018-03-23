"use strict"

var express = require("express");
var questionsController = require("../controllers/questions.controller.js");
var api = express.Router();

/* Métodos GET */
api.get( "/getAnsweredQuestions", questionsController.showAnsweredQuestions );
api.get( "/getNotAnsweredQuestions", questionsController.showNotAnsweredQuestions );
api.get( "/getPageQuestions", questionsController.showPageQuestions );
// api.get( "/getAnswer/:_id", questionsController.showAnswer );

/* Métodos POST */
api.post( "/saveQuestion", questionsController.saveQuestion );

module.exports = api;
