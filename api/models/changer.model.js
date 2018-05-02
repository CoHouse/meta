"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var changerSchema = schema({
  email: String,
  user: String,
  startDate:String,
  endDate:String,
  pAlimenticio:String,
  pEjercicio:String
});

 module.exports = mongoose.model( 'changerguards', changerSchema );
