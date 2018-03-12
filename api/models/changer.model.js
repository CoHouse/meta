"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var changerSchema = schema({
  email: String,
  startDate:String,
  endDate:String
});

 module.exports = mongoose.model( 'changerGuards', changerSchema );
