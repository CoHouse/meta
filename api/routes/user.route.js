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

// Método de prueba para guardar cosass
api.put("/upload/:id", userController.update );

module.exports = api;
