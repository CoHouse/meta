"use strict"

var express = require("express");
var challengesController = require("../controllers/challenges.controller.js");
var api = express.Router();

/* Métodos GET */
api.get("/getChallenges", challengesController.showChallenges );
api.get("/getChallenge/:_id", challengesController.showChallenge );

/* Métodos POST */
api.get("/getValidChallenge", challengesController.showValidChallenge );

module.exports = api;
