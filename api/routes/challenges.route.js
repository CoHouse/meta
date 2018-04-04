"use strict"

var express = require("express");
var challengesController = require("../controllers/challenges.controller.js");
var api = express.Router();

/* Métodos GET */
api.get("/getChallenges", challengesController.showChallenges );

/* Métodos POST */
api.post("/getValidChallenge", challengesController.showValidChallenge );

module.exports = api;
