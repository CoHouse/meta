"use strict"

var mongoose = require("mongoose");

/* Permite guardar en una colección concreta y en un documento  concreto dentro de esa colección */
var schema = mongoose.Schema;

/* Crear el esquema con sus atributos */

/**
 * - phase (fase) = 1, 2, 3, 4
 * 1 - pierna
 * 2 - abdomen
 * 3 - brazo
 * 4 - trote
 *
 * classification - 1, 2, 3
 * 1 - ligerp
 * 2 - intermedio
 * 3 - vigoroso
 */

var excerciseSchema = schema({
  idArray: String,
  name: String,
  text: String,
  phase: String,
  classification: String
});

 module.exports = mongoose.model('exercises', excerciseSchema);

