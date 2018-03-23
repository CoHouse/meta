"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var questionSchema = schema({
  name: String,
  email: String,
  question: String,
  text: String,
  answer: String
});

module.exports = mongoose.model( 'questions', questionSchema );
