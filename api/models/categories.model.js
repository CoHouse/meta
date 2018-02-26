"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var categorieSchema = schema({
  name: String,
  modifier: String,
  type: String
});

module.exports = mongoose.model( 'categories', categorieSchema );
