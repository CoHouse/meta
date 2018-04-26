"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var adminSchema = schema({
  email: String,
  startDate:String,
  endDate:String
});

 module.exports = mongoose.model( 'adminguard', adminSchema );
