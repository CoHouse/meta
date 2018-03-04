"use strict"

var objVideo = require("../models/videos.model.js");
var numberOfHomeVideos = 3;
var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

/* GET */

function showVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición [Videos - showVideos]"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } );
}

function showHomeVideos( req, res ){
  objVideo.find( ( error, homeVideos ) => {
    if( error ){
      res.status(500).send( { message: "Error en la petición [Videos - showHomeVideos]"} );
    }else{
      res.status(200).send( { homeVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).limit( numberOfHomeVideos );
}


/* POST */
function saveVideo( req, res ){

  var video = new objVideo();
  var params = req.body;

  video.title = params.title;
  video.image = params.image;
  video.date = params.date;
  video.author = params.author;
  video.category = params.category;
  video.visibleLevel = params.visibleLevel;
  video.text = params.text;

  video.save( ( error, videoGuardado ) => {
    if( error ){
      res.status( 500 ).send( { msg: "error"} )
    }else{
      res.status( 200 ).send( videoGuardado )
    }
  });

}

module.exports = {
  saveVideo,
  showVideos,
  showHomeVideos
}
