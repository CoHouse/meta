"use strict"

var objNutritionist = require("../models/nutritionist.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');

/* GET */

/* POST */
function saveNutritionist( req, res ){
  var nutritionist = new objNutritionist();
  var params = req.body;

  console.log(params);

  nutritionist.email = params.email;
  nutritionist.startDate = params.startDate;
  nutritionist.endDate = params.endDate;

  if ( params.email != null && params.startDate != null && params.endDate != null ){

    bcrypt.hash( params.email, null, null, function( error, hash ){

      nutritionist.email = hash;

      nutritionist.save( ( error, save ) => {
        if( error ){
          res.status( 500 ).send({ message: "Error al guardar el usuario [saveNutritionist]"});
        }else{
          res.status( 201 ).send( save ); // Develop
           //res.status( 201 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

    });
  }else{
    res.status( 400 ).send({ message: "Alguno de los datos viene vacío [saveNutritionist]"});
  }
}

function getNutritionist( req, res ){
  var params = req.body;

  objNutritionist.find( ( error, showNutritionists ) => {
    if( error || showNutritionists.length <= 0 ){
       return res.status( 404 ).send( { message: "[getNutritionist nutritionistController]" } );
    }else{
      for ( let i in showNutritionists ){
        if( !bcrypt.compareSync( params.email, showNutritionists[i].email ) ){
          /* hacer algo */
        }else{
          var today = dateformat( new Date(), "dd-mm-yyyy" );
          var endDate = dateformat( showNutritionists[i].endDate, "dd-mm-yyyy" );

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
  saveNutritionist,
  getNutritionist
}
