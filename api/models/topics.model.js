"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var TopicSchema = schema({
  title: String,
  author:  String,
  text:  String,
  category: String,
  date: String
});

 module.exports = mongoose.model( 'topics', TopicSchema );
