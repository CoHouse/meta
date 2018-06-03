"use strict"

var objChanger = require("../models/changer.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');
var objUser = require("../models/user.model.js");

/* GET */

/* POST */
function saveChanger( req, res ){
  var changer = new objChanger();
  var params = req.body;

  changer.email = params.email;
  changer.user = params.user;
  changer.startDate = params.startDate;
  changer.endDate = params.endDate;
  changer.pAlimentary = params. pAlimentary;
  changer.pExercise = params. pExercise;

  if ( params.email != null && params.user != null && params.startDate != null && params.endDate != null ){

    bcrypt.hash( params.email, null, null, function( error, hash ){

      changer.email = hash;

      changer.save( ( error, save ) => {
        if( error ){
          res.status( 500 ).send( { message: "Error al guardar el usuario [saveChanger]" } );
        }else{
          res.status( 201 ).send( save ); // Develop
           //res.status( 201 ).send( { message: "Registro guardado con éxito." } ); // Production
        }
      });

    });
  }else{
    res.status( 500 ).send( { message: "Alguno de los datos viene vacío [saveChanger]"} );
  }
}

function getChanger( req, res ){

  var params = req.body;
  console.log("esto trae params dentro de getChanger: ", params);

  objChanger.find( ( error, showChangers ) => {
    if( error || showChangers.length <= 0 ){
       return res.status( 404 ).send( { message: "[getChanger changerController]" } );
    }else{
      for( let i in showChangers ){

        if( bcrypt.compareSync( params.email, showChangers[i].email ) ){
          var today = new Date( ).getTime( );
          var startDate = new Date( showChangers[i].startDate ).getTime( );
          var endDate = new Date( showChangers[i].endDate ).getTime( );

          if( startDate <= today && endDate >= today ){
            return res.status( 200 ).send( true );
          } else {
            return res.status( 200 ).send( false );
          }
        }else{
          if( parseInt(i) + 1 == showChangers.length ){
            return res.status( 200 ).send( false );
          }
        }
      }
    }
  });
}

function getPendingPlans( req, res ){
  objChanger.find( ( error, showPendingPlans )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [userController getPendingPlans()]"} );
    }else{
      res.status(200).send( showPendingPlans );
    }
  } ).where('pExercise').equals( "true" ).sort('_id');
}

function getPlann( req, res ){
  objChanger.findOne( { "_id": req.params._id }, (error, showUser )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [getPlann()]" } );
    }else{
      /* --------------------------------------------------- */

      var email = showUser["email"];

      objUser.find( ( error, showUsers ) => {

        for( let i in showUsers ){

          if( bcrypt.compareSync( showUsers[i]["inquest"]["generals"].email, email ) ){
            
            console.log("El usuario es: ",showUsers[i] );
            return res.status(200).send( showUsers[i] );
          }else{
            // console.log("error");
          }

        }
      });

      /* --------------------------------------------------- */


    }
  });

}

module.exports = {
  saveChanger,
  getChanger,
  getPlann,
  getPendingPlans
}
