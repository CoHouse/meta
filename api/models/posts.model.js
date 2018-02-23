"use strict"

var mongoose = require("mongoose");

/* Permite guardar en una colección concreta y en un documento  concreto dentro de esa colección */
var schema = mongoose.Schema;

/* Crear el esquema con sus atributos */
var postSchema = schema({
  title: String,
  subtitle: String,
  image: String,
  date: String,
  author: String,
  visibleLevel: String
});

 module.exports = mongoose.model('posts', postSchema);
