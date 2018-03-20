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

api.get("/getVolumePublicPosts", postsController.showVolumePublicPosts );
api.get("/getVolumeRegisteredPosts", postsController.showVolumeRegisteredPosts );
api.get("/getVolumeChangerPosts", postsController.showVolumeChangerPosts );

api.get("/getNutritionPublicPosts", postsController.showNutritionPublicPosts );
api.get("/getNutritionRegisteredPosts", postsController.showNutritionRegisteredPosts );
api.get("/getNutritionChangerPosts", postsController.showNutritionChangerPosts );

api.get("/getExercisesPublicPosts", postsController.showExercisesPublicPosts );
api.get("/getExercisesRegisteredPosts", postsController.showExercisesRegisteredPosts );
api.get("/getExercisesChangerPosts", postsController.showExercisesChangerPosts );

api.get("/getSuplementsPublicPosts", postsController.showSuplementsPublicPosts );
api.get("/getSuplementsRegisteredPosts", postsController.showSuplementsRegisteredPosts );
api.get("/getSuplementsChangerPosts", postsController.showSuplementsChangerPosts );

/* Métodos POST */
api.post("/savePost", postsController.savePost );

module.exports = api;
