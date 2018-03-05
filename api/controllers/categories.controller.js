"use strict"

var objCategory = require("../models/categories.model.js");

var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

var blogTypeModifier = "G";
var videoTypeModifier = "I";
var forumTypeModifier = "F";

/* GET */
function showBlogCategories( req, res ){
  objCategory.find( ( error, showBlogCategories ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showBlogCategories]" } );
    }else{
      res.status( 200 ).send( { showBlogCategories } );
    }
  }).where('type').equals( blogTypeModifier );
}

function showVideoCategories( req, res ){
  objCategory.find( ( error, showVideoCategories ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showVideoCategories]" } );
    }else{
      res.status( 200 ).send( { showVideoCategories } );
    }
  }).where('type').equals( videoTypeModifier );
}

function showForumCategories( req, res ){
  objCategory.find( ( error, showForumCategories ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showForumCategories]" } );
    }else{
      res.status( 200 ).send( { showForumCategories } );
    }
  }).where('type').equals( forumTypeModifier );
}

module.exports = {
  showBlogCategories,
  showVideoCategories,
  showForumCategories
}
