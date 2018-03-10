"use strict"

var express = require("express");

/* Carga del módulo */
var postsController = require("../controllers/posts.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */
api.get("/getPosts", postsController.showPosts );
api.get("/getPost/:_id", postsController.showPost );
api.get("/getPostsHome", postsController.showHomePosts );
api.get("/getPublicPosts", postsController.showPublicPosts );
api.get("/getRegisteredPosts", postsController.showRegistredPosts );
api.get("/getChangerPosts", postsController.showPrivatePosts );
// api.get("/getPostsByCategory:category", postsController.showPostByCategory );

/* Métodos POST */
api.post("/savePost", postsController.savePost );

module.exports = api;
