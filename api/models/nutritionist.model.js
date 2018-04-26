"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var nutritionistSchema = schema({
  email: String,
  startDate:String,
  endDate:String
});

 module.exports = mongoose.model( 'nutritionistguard', nutritionistSchema );
