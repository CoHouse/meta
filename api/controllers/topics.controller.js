"use strict"

var objTopic = require("../models/topics.model.js");

/* Modificadores de intreso/tipo de usuario*/
var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

/* Modificadores de categoría */
var topicsPresentations = "P";
var topicsPlattformDoubts = "D";
var topicsTransformations = "T";
var topicsExercisesProgram = "E";
var topicsAlimentationProgram = "A";

/*
  type:
  G = blog
  I = video
  F = foro

  modifier - dato por categoría:
  P = Presentaciones
  D = Dudas con la Plataforma
  T = Transformaciones
  E = Dudas con tu programa de Ejercicio
  A = Dudas con tu programa Alimenticio
*/

/* GET */
function getPresentationsTopics( req, res ){
  objTopic.find( ( error, showPresentationTopics ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los topics: [getPresentationsTopics]" } );
    }else{
      res.status( 200 ).send( { showPresentationTopics } );
    }
  }).where('category').equals( topicsPresentations );
}

function getDoubdtsPlattformTopics( req, res ){
  objTopic.find( ( error, showDoubtsPlattformTopics ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los topics: [getDoubdtsPlattformTopics]" } );
    }else{
      res.status( 200 ).send( { showDoubtsPlattformTopics } );
    }
  }).where('category').equals( topicsPlattformDoubts );
}

function getTransformationsTopics( req, res ){
  objTopic.find( ( error, showTransformationsTopics ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los topics: [getTransformationsTopics]" } );
    }else{
      res.status( 200 ).send( { showTransformationsTopics } );
    }
  }).where('category').equals( topicsTransformations );
}

function getExerciseProgramTopics( req, res ){
  objTopic.find( ( error, showExerciseProgramTopics ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los topics: [getExerciseProgramTopics]" } );
    }else{
      res.status( 200 ).send( { showExerciseProgramTopics } );
    }
  }).where('category').equals( topicsExercisesProgram );
}

function getAlimentationProgramTopics( req, res ){
  objTopic.find( ( error, showAlimentationProgramTopics ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los topics: [getAlimentationProgramTopics]" } );
    }else{
      res.status( 200 ).send( { showAlimentationProgramTopics } );
    }
  }).where('category').equals( topicsAlimentationProgram );
}

/* POST */
function saveTopic( req, res ){
  var topic = new objTopic();
  var params = req.body;

  topic.title = params.title;
  topic.author = params.author;
  topic.text = params.text;
  topic.category = params.category;
  topic.date = params.date;

  topic.save( ( error, guardado ) => {
    if( error ){
      res.status( 500 ).send({ msg: "Error al guardar un topic [saveTopic]"})
    }else{
      res.status( 200 ).send( guardado )
    }
  });
}

module.exports = {
  getPresentationsTopics,
  getDoubdtsPlattformTopics,
  getTransformationsTopics,
  getExerciseProgramTopics,
  getAlimentationProgramTopics,
  saveTopic
}
