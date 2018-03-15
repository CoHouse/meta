"use strict"

var objPost = require("../models/posts.model.js");
var numberOfHomePosts = 3;
var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

/* GET */
function showPost( req, res ){

  objPost.find( ( error, showPost )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [showPost()]"} );
    }else{
      res.status(200).send( { showPost } );
    }
  } ).where('_id').equals( req.params._id );

}

function showPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [showposts()]"} );
    }else{
      res.status(200).send( { showPosts } );
    }
  } );
}

function showHomePosts( req, res ){
  objPost.find( ( error, homePosts ) => {
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { homePosts } );
    }
  } ).where('visibleLevel').equals( visitorModifier ).limit( numberOfHomePosts );
}

function showPublicPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( visitorModifier );
}

function showRegistredPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier ] );
}

function showPrivatePosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( [ visitorModifier, registerModifier, changerModifier ] );
}

function showPostByCategory( req, res, category ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('category').equals( category );
}

/* POST */
function savePost( req, res ){

  var post = new objPost();
  var params = req.body;

  post.title = params.title;
  post.subtitle = params.subtitle;
  post.image = params.image;
  post.date = params.date;
  post.author = params.author;
  post.category = params.category;
  post.visibleLevel = params.visibleLevel;
  post.text = params.text;

  post.save( ( error, guardado ) => {
    if( error ){
      res.status( 500 ).send({ msg: "Error al guardar un post [savePost]"})
    }else{
      res.status( 200 ).send( guardado )
    }
  });

}

module.exports = {
  showPost,
  showPosts,
  showHomePosts,
  showPublicPosts,
  showRegistredPosts,
  showPrivatePosts,
  showPostByCategory,
  savePost
}
