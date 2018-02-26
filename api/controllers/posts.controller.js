"use strict"

var objPost = require("../models/posts.model.js");
var homePosts = 3;
var publicModifier = 'V';
var registerModifier = 'R';
var userModifier = 'U';

/* GET */
function showPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } );
}

function showHomePosts( req, res ){
  objPost.find( ( error, homePosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { homePosts } );
    }
  } ).where('visibleLevel').equals( publicModifier ).limit( homePosts );
}

function showPublicPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( publicModifier );
}

function showRegistredPosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( registerModifier );
}

function showPrivatePosts( req, res ){
  objPost.find( ( error, showPosts )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición"} );
    }else{
      res.status(200).send( { showPosts } );
      console.log( showPosts );
    }
  } ).where('visibleLevel').equals( userModifier );
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

  console.log(post);
  console.log(params);

  post.title = params.title;
  post.subtitle = params.subtitle;
  post.image = params.image;
  post.date = params.date;
  post.author = params.author;
  post.category = params.category;
  post.visibleLevel = params.visibleLevel;

  post.save( ( error, guardado ) => {
    if( error ){
      res.status( 500 ).send({ msg: "error"})
    }else{
      res.status( 200 ).send( guardado )
    }
  });

}

module.exports = {
  savePost,
  showPosts,
  showHomePosts,
  showPublicPosts,
  showRegistredPosts,
  showPrivatePosts,
  showPostByCategory
}
