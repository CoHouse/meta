"use strict"

var objQuestion = require("../models/question.model.js");

var answer;

/* GET */
function showAnsweredQuestions( req, res ){
  objCategory.find( ( error, showAnsweredQuestions ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showAnsweredQuestions]" } );
    }else{
      res.status( 200 ).send( { showAnsweredQuestions } );
    }
  }).where('answer').equals( "S" );
}

function showNotAnsweredQuestions( req, res ){
  objCategory.find( ( error, showNotAnsweredQuestions ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showNotAnsweredQuestions]" } );
    }else{
      res.status( 200 ).send( { showNotAnsweredQuestions } );
    }
  }).where('answer').equals( "N" );
}

/* POST */
function saveQuestion( req, res ){
  var question = new objQuestion();
  var params = req.body;

  changer.email = params.email;
  changer.startDate = params.startDate;
  changer.endDate = params.endDate;

  if ( params.email != null && params.startDate != null && params.endDate != null ){

    bcrypt.hash( params.email, null, null, function( error, hash ){

      changer.email = hash;

      changer.save( ( error, save ) => {
        if( error ){
          res.status( 500 ).send({ message: "Error al guardar el usuario [saveChanger]"});
        }else{
          res.status( 200 ).send( save ); // Develop
           //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

    });
  }else{
    res.status( 500 ).send({ message: "Alguno de los datos viene vacío [saveChanger]"});
  }
}

module.exports = {
  showAnsweredQuestions,
  showNotAnsweredQuestions
}
