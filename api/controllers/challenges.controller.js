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

        if ( dateformat( i.startDate, "isoDateTime" ) <= dateformat( new Date( ), "isoDateTime" ) && dateformat( i.endDate , "isoDateTime") >= dateformat( new Date( ), "isoDateTime" ) ){

          console.log("VIGENTE");

          let challenge = showChallenges[i];

          return res.status( 200 ).send( { challenge } );
        } else {
          //Hacer algo
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
  }).where('visibleLevel').equals('V');
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
      res.status( 500 ).send({ msg: "Error al guardar un challenge [saveChallenge]"})
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
