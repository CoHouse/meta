"use strict"

var express = require("express");
var userController = require("../controllers/user.controller.js");
var api = express.Router();

/* Métodos GET */
api.get("/getUser", userController.getUser );

/* Métodos POST */
api.post("/saveUser", userController.saveUser );

/* Métodos PUT */
api.put("/updateUser/:id", userController.updateUser );
api.put("/upload/lab/:id", userController.updateUserF );

module.exports = api;
