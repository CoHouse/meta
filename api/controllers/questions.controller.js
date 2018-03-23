"use strict"

var objQuestion = require("../models/questions.model.js");

var answer;
var limitPageQuestions = 5;

/* GET */
function showAnsweredQuestions( req, res ){
  objQuestion.find( ( error, showAnsweredQuestions ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los registros: [showAnsweredQuestions]" } );
    }else{
      res.status( 200 ).send( { showAnsweredQuestions } );
    }
  }).nor( { answer: 'N' } );
}

function showNotAnsweredQuestions( req, res ){
  objQuestion.find( ( error, showNotAnsweredQuestions ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los registros: [showNotAnsweredQuestions]" } );
    }else{
      res.status( 200 ).send( { showNotAnsweredQuestions } );
    }
  }).where('answer').equals( "N" );
}

function showPageQuestions( req, res ){
  objQuestion.find( ( error, showPageQuestions ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los registros: [showPageQuestions]" } );
    }else{
      res.status( 200 ).send( { showPageQuestions } );
    }
  }).where('answer').equals( "N" ).limit( limitPageQuestions );
}

/* POST */
function saveQuestion( req, res ){
  var question = new objQuestion();
  var params = req.body;

  question.name = params.name;
  question.email = params.email;
  question.question = params.question;
  question.text = params.text;
  question.answer = params.answer;

  question.save( ( error, save ) => {
    if( error ){
      res.status( 500 ).send({ message: "Error al guardar el registro [saveQuestion]"});
    }else{
      res.status( 200 ).send( save ); // Develop
       //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
    }
  });
}

module.exports = {
  showAnsweredQuestions,
  showNotAnsweredQuestions,
  showPageQuestions,
  saveQuestion
}
