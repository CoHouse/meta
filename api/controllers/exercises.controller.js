"use strict"

var objExercise = require("../models/exercise.model.js");

var bcrypt = require("bcrypt-nodejs");

/* GET */

function getExercise( req, res ){
  objExercise.find( ( error, showExercises ) => {
    if( error || showExercises.length <= 0 ){
       return res.status( 404 ).send( { message: "[getExcersise exerciseController]" } );
    }else{
      return res.status( 200 ).send( showExercises );
    }
  });
}

/* POST */
function saveExercise( req, res ){
  // var admin = new objAdmin();
  // var params = req.body;
  //
  // admin.email = params.email;
  // admin.startDate = params.startDate;
  // admin.endDate = params.endDate;
  //
  // if ( params.email != null && params.startDate != null && params.endDate != null ){
  //
  //   bcrypt.hash( params.email, null, null, function( error, hash ){
  //
  //     admin.email = hash;
  //
  //     admin.save( ( error, save ) => {
  //       if( error ){
  //         res.status( 500 ).send({ message: "Error al guardar el usuario [saveExcersise]"});
  //       }else{
  //         res.status( 201 ).send( save ); // Develop
  //          //res.status( 201 ).send( { message: "Guardado con éxito." } ); // Production
  //       }
  //     });
  //
  //   });
  // }else{
  //   res.status( 400 ).send({ message: "Alguno de los datos viene vacío [saveExcersise]"});
  // }
}

module.exports = {
  saveExercise,
  getExercise
}
