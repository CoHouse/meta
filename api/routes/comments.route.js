"use strict"

var express = require("express");
var commentController = require("../controllers/comments.controller.js");
var api = express.Router();


api.get("/getComments/:_id", commentController.getComments );

/* Métodos POST */
api.post("/saveComment", commentController.saveComment );

module.exports = api;
