"use strict"

var objVideo = require("../models/videos.model.js");

var numberOfHomeVideos = 3;

var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

var categoryLegs = 'L';
var categoryStraigtharms = 'S';
var categoryStretcharms = 'A';
var categoryChest = 'C';
var categoryCore = 'O';
var categoryGymnast = 'G';

/* GET */
function showVideo( req, res ){
  objVideo.find( ( error, showVideo )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [showVideo()]"} );
    }else{
      res.status(200).send( { showVideo } );
    }
  } ).where('_id').equals( req.params._id );

}

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

function showPublicVideos ( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier );
}

function showRegistredVideos ( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] );
}

function showPrivateVideos ( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] );
}

function showLegsPublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryLegs );
}

function showLegsRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryLegs );
}

function showLegsChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryLegs );
}

function showStraigtharmsPublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryStraigtharms );
}

function showStraigtharmsRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryStraigtharms );
}

function showStraigtharmsChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryStraigtharms );
}

function showStretcharmsPublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryStretcharms );
}

function showStretcharmsRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryStretcharms );
}

function showStretcharmsChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryStretcharms );
}

function showChestPublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryChest );
}

function showChestRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryChest );
}

function showChestChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryChest );
}

function showCorePublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryCore );
}

function showCoreRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryCore );
}

function showCoreChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryCore );
}

function showGymnastPublicVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).where( 'category' ).equals( categoryGymnast );
}

function showGymnastRegisteredVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] ).where( 'category' ).equals( categoryGymnast );
}

function showGymnastChangerVideos( req, res ){
  objVideo.find( ( error, showVideos )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showVideos } );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] ).where( 'category' ).equals( categoryGymnast );
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
  showVideo,
  saveVideo,
  showVideos,
  showHomeVideos,
  showPublicVideos,
  showRegistredVideos,
  showPrivateVideos,
  showLegsPublicVideos,
  showLegsRegisteredVideos,
  showLegsChangerVideos,
  showStraigtharmsPublicVideos,
  showStraigtharmsRegisteredVideos,
  showStraigtharmsChangerVideos,
  showStretcharmsPublicVideos,
  showStretcharmsRegisteredVideos,
  showStretcharmsChangerVideos,
  showChestPublicVideos,
  showChestRegisteredVideos,
  showChestChangerVideos,
  showCorePublicVideos,
  showCoreRegisteredVideos,
  showCoreChangerVideos,
  showGymnastPublicVideos,
  showGymnastRegisteredVideos,
  showGymnastChangerVideos
}
