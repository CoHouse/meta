"use strict"

var express = require("express");

/* Carga del módulo */
var videosController = require("../controllers/videos.controller.js");

/* Carga de Router de ExpressJS para crear rutas en la API REST */
var api = express.Router();

/* Métodos GET */
api.get("/getVideos", videosController.showVideos );
api.get("/getVideosHome", videosController.showHomeVideos );
api.get("/getVideo/:_id", videosController.showVideo);

api.get("/getPublicVideos", videosController.showPublicVideos);
api.get("/getRegistredVideos", videosController.showRegistredVideos);
api.get("/getPrivateVideos", videosController.showPrivateVideos);
api.get("/getLegsPublicVideos", videosController.showLegsPublicVideos );
api.get("/getLegsRegisteredVideos", videosController.showLegsRegisteredVideos );
api.get("/getLegsChangerVideos", videosController.showLegsChangerVideos );
api.get("/getStraigtharmsPublicVideos", videosController.showStraigtharmsPublicVideos );
api.get("/getStraigtharmsRegisteredVideos", videosController.showStraigtharmsRegisteredVideos );
api.get("/getStraigtharmsChangerVideos", videosController.showStraigtharmsChangerVideos );
api.get("/getStretcharmsPublicVideos", videosController.showStretcharmsPublicVideos );
api.get("/getStretcharmsRegisteredVideos", videosController.showStretcharmsRegisteredVideos );
api.get("/getStretcharmsChangerVideos", videosController.showStretcharmsChangerVideos );
api.get("/getChestPublicVideos", videosController.showChestPublicVideos );
api.get("/getChestRegisteredVideos", videosController.showChestRegisteredVideos );
api.get("/getChestChangerVideos", videosController.showChestChangerVideos );
api.get("/getCorePublicVideos", videosController.showCorePublicVideos );
api.get("/getCoreRegisteredVideos", videosController.showCoreRegisteredVideos );
api.get("/getCoreChangerVideos", videosController.showCoreChangerVideos );
api.get("/getGymnastPublicVideos", videosController.showGymnastPublicVideos );
api.get("/getGymnastRegisteredVideos", videosController.showGymnastRegisteredVideos );
api.get("/getGymnastChangerVideos", videosController.showGymnastChangerVideos );

/* Métodos POST */
api.post("/saveVideo", videosController.saveVideo );

module.exports = api;
