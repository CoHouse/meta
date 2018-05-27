"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var changerSchema = schema({
  email: String,
  user: String,
  startDate:String,
  endDate:String,
  pAlimentary:String,
  pExercise:String 
});

 module.exports = mongoose.model( 'changerguards', changerSchema );
