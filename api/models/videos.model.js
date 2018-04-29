"use strict"

var mongoose = require("mongoose");

var schema = mongoose.Schema;

var videoSchema = schema({
  title: String,
  image: String,
  date: String,
  author: String,
  category: String,
  visibleLevel: String,
  text: String,
  dominio:String,
  url: String
});

 module.exports = mongoose.model( 'videos', videoSchema );
