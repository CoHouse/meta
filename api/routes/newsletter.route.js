"use strict"

var express = require("express");

/* Carga del módulo */
var newsletterController = require("../controllers/newsletter.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

api.post("/registerNl", newsletterController.registerNL );

module.exports = api;
