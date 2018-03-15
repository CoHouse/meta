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

function getChanger( req, res ){
  var params = req.body;

  objChanger.find( ( error, showChangers ) => {
    if( error || showChangers.length <= 0 ){
      return res.status( 404 ).send( { message: "[getChanger changerController]" } );
    }else{
      for ( let i in showChangers ){
        if( !bcrypt.compareSync( params.email, showChangers[i].email ) ){
          return res.status( 200 ).send( { message: "false" } );
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

module.exports = {
  saveChanger,
  getChanger
}
