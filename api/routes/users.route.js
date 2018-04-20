"use strict"

var express = require("express");
var usersController = require("../controllers/users.controller.js");
var api = express.Router();

var file = require('express-fileupload');

/* Métodos GET */
api.get("/getUser", usersController.getUser );

/* Métodos POST */
api.post("/saveUser", usersController.saveUser );

/* Métodos PUT */
api.put("/updateUser/:id", usersController.updateUser );

module.exports = api;
