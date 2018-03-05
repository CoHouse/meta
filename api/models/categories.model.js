"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var categorieSchema = schema({
  name: String,
  ref: String,
  modifier: String,
  type: String
});

module.exports = mongoose.model( 'categories', categorieSchema );
