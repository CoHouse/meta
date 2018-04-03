"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var challengeSchema = schema({
  image: String,
  title: String,
  text: String,
  startDate: String,
  endDate: String,
  userSucess: String
});

module.exports = mongoose.model( 'challenges', challengeSchema );
