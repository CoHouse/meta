"use strict"

var objChanger = require("../models/changer.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');

/* GET */

/* POST */
function saveChanger( req, res ){
  var changer = new objChanger();
  var params = req.body;

  changer.email = params.email;
  changer.user = params.user;
  changer.startDate = params.startDate;
  changer.endDate = params.endDate;
  changer.pAlimenticio = params. pAlimenticio;
  changer.pEjercicio = params. pEjercicio;

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

module.exports = {
  saveChanger,
  getChanger
}
