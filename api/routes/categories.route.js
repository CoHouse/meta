"use strict"

var express = require("express");
var categoriesController = require("../controllers/categories.controller.js");
var api = express.Router();

/* Métodos GET */
api.get("/getBlogCategories", categoriesController.showBlogCategories );
api.get("/getVideoCategories", categoriesController.showVideoCategories );
api.get("/getForumCategories", categoriesController.showForumCategories );

module.exports = api;
