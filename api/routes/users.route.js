"use strict"

var express = require("express");
var usersController = require("../controllers/users.controller.js");
var api = express.Router();

/* Métodos GET */
api.get("/getUser", usersController.getUser );

/* Métodos POST */
api.get("/saveUser", usersController.saveUser );

module.exports = api;
