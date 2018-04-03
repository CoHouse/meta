"use strict"

var objChallenge = require("../models/challenges.model.js");

/* Modificadores de intreso/tipo de usuario*/
var visitorModifier = 'V';
var registerModifier = 'R';
var changerModifier = 'B';

/* Modificadores de video por categoría */


/* GET */
function showValidChallenge( req, res ){
  objChallenge.find( ( error, showChallenges ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showBlogCategories]" } );
    }else{
      res.status( 200 ).send( { showChallenges } );
    }
  }).where('type').equals( blogTypeModifier );
}

function showChallenges( req, res ){
  objChallenge.find( ( error, showChallenges ) => {
    if( error ){
      res.status( 500 ).send( { message: "Error al recuperar las categorías: [showBlogCategories]" } );
    }else{
      res.status( 200 ).send( { showChallenges } );
    }
  });
}

function EJEMPLOVALIDAFECHAS( req, res ){
  var params = req.body;

  objChanger.find( ( error, showChangers ) => {
    if( error || showChangers.length <= 0 ){
       return res.status( 404 ).send( { message: "[getChanger changerController]" } );
    }else{
      for ( let i in showChangers ){
        if( !bcrypt.compareSync( params.email, showChangers[i].email ) ){
          /* hacer algo */
        }else{
          var today = dateformat( new Date(), "dd-mm-yyyy" );
          var endDate = dateformat( showChangers[i].endDate, "dd-mm-yyyy" );

          if( endDate >= today ){
              return res.status( 200 ).send( { message: "true" } );
            } else {
              return res.status( 200 ).send( { message: "false" } );
          }
        }
      }
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
