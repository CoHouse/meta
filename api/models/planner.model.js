"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var plannerSchema = schema({
  email: String,
  startDate:String,
  endDate:String
});

 module.exports = mongoose.model( 'plannerguard', plannerSchema );
