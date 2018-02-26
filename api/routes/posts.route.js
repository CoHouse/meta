"use strict"

var express = require("express");

/* Carga del módulo */
var postsController = require("../controllers/posts.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos POST */
api.post("/savePost", postsController.savePost );

/* Métodos GET */
api.get("/getPosts", postsController.showPosts );
api.get("/getPostsHome", postsController.showHomePosts );
api.get("/getPublicPosts", postsController.showPublicPosts );
api.get("/getRegisteredPosts", postsController.showRegistredPosts );
api.get("/getUserPosts", postsController.showPrivatePosts );
// api.get("/getPostsByCategory:category", postsController.showPostByCategory );

api.get( "/prueba", function( error, response ){
    response.status( 200 ).send( { message: 'Tienes el body', otro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' } );
} );

module.exports = api;
