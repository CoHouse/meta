"use strict"

var objChallenge = require("../models/challenges.model.js");
var dateformat = require('dateformat');

/* Modificadores de intreso/tipo de usuario*/
var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

/* GET */


/* Asegurar que el formulario envíe los datos en el formato: aaaa/mm/dd */
function showValidChallenge( req, res ){
  objChallenge.find( ( error, showChallenges ) => {
    if( error || showChallenges.length <= 0 ){
       // Hacer algo
    }else{
      for ( let i in showChallenges ){
        console.log("------------ Datos antes del isoDateTime --------------");
        console.log("startDate ", showChallenges.startDate, " endDate ", showChallenges.endDate);
        console.log("--------------------------------------------------");

        var startDate = dateformat( i.startDate, "isoDateTime" );
        var endDate = dateformat( i.endDate , "isoDateTime");
        var today = dateformat( new Date( ), "isoDateTime" );

        console.log("------------ Datos después del isoDateTime --------------");
        console.log("startDate ",startDate, " endDate ", endDate, " today ",today);
        console.log("--------------------------------------------------");

        if ( startDate <= today && endDate >= today ){
          // console.log("Esto vale i: ", i );
          console.log("VIGENTE");
          // res.status( 200 ).send( { i } );
        } else {
          console.log("NO VIGENTE");
          // res.status( 500 ).send( { message: "No hay reto válido: [validChallenge]" } );
        }

      }
    }
  });

}

function showChallenges( req, res ){
  objChallenge.find( ( error, showChallenges ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar los retos: [showChallenges]" } );
    }else{
      res.status( 200 ).send( { showChallenges } );
    }
  });
}

/* POST */
function saveChallenge( req, res){
  var challenge = new objChallenge();
  var params = req.body;
  challenge.image = params.image
  challenge.title = params.title
  challenge.text = params.text
  challenge.startDate = params.startDate
  challenge.ndDate = params.endDate
  challenge.userSucess = params.userSucess

  post.save( ( error, guardado ) => {
    if( error ){
      res.status( 500 ).send({ msg: "Error al guardar un post [savePost]"})
    }else{
      res.status( 200 ).send( guardado )
    }
  });
}

module.exports = {
  showValidChallenge,
  showChallenges,
  saveChallenge
}
