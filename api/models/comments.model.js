"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var commentSchema = schema({
  idTopic: String,
  text: String,
  date: String
});

module.exports = mongoose.model( 'comments', commentSchema );
