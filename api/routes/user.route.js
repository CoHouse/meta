"use strict"

var express = require("express");
var userController = require("../controllers/user.controller.js");
var api = express.Router();

/* Métodos GET */
api.post("/getUser", userController.getUser );

/* Métodos POST */
api.post("/saveUser", userController.saveUser );

/* Métodos PUT */
api.put("/updateUser/:id", userController.updateUser );
api.put("/upload/:tipo/:id", userController.saveFileUser );

module.exports = api;
