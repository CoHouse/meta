"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = schema({
  name: String,
  age: String
});

module.exports = mongoose.model( 'users', userSchema );

// inquest: String{
//   generales: String[
//     respuestas: String[ name:String, age:String ] ],
//   alimenticios: String[
//     respuestas: String[ preg1:String, preg2:String, preg3:String, preg4:String, preg5:String, preg6:String, preg7:String, preg8:String, preg9:String ] ],
//   antropometricos: String[
//     respuestas: String[ preg1:String, preg2:String, preg3:String ] ],
//   bioquimicos: String[
//     respuestas: String[ preg1:String, examen:String ] ],
//   clinicos: String[
//     respuestas: String[ respuestas: String[ preg1:String, preg2:String, preg3:String, preg4:String, preg5:String, preg6:String, preg7:String, preg8:String ] ],
//   dieteticos: String[
//     respuestas: String[ respuestas: String[ preg1:String, preg2:String, preg3:String, preg4:String, preg5:String, preg6:String, preg7:String ] ]
// {,
//   plans:String[ ]

// myObj = {
//     "name":"Pepe",
//     "age":35,
//     "inquest": [
//         { "tab":"generales", "respuestas":[ "Pepe Sosa", "35" ] },
//         { "tab":"Alimenticios", "respuestas":[ "Fiesta", "Focus", "Mustang" ] },
//         { "tab":"Antropométricos", "respuestas":[ "320", "X3", "X5" ] },
//         { "tab":"Bioquímicos", "respuestas":[ "500", "Panda" ] }
//     ],
//     "plans": [
//       {""},
//       {""}
//     ]
//  }
