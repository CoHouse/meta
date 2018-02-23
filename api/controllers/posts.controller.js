"use strict"

var objPost = require("../models/posts.model.js");

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

// function showPublicPosts(){}
//
// function showRegistredPosts(){}
//
// function showPrivatePosts(){}

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
  post.visibleLevel = params.visibleLevel;

  post.save( ( error, guardado ) => {
    if(error){
      res.status(500).send({ msg: "error"})
    }else{
      res.status(200).send( guardado )
    }
  });

}

/* Exportar los metodos del módulo, cada uno devolverá algo diferente o hará una función distinta */
module.exports = {
  savePost,
  showPosts
}
