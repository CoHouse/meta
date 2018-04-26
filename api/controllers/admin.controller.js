"use strict"

var objAdmin = require("../models/admin.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');

/* GET */

/* POST */
function saveAdmin( req, res ){
  var admin = new objAdmin();
  var params = req.body;

  console.log(params);

  admin.email = params.email;
  admin.startDate = params.startDate;
  admin.endDate = params.endDate;

  if ( params.email != null && params.startDate != null && params.endDate != null ){

    bcrypt.hash( params.email, null, null, function( error, hash ){

      admin.email = hash;

      admin.save( ( error, save ) => {
        if( error ){
          res.status( 500 ).send({ message: "Error al guardar el usuario [saveAdmin]"});
        }else{
          res.status( 201 ).send( save ); // Develop
           //res.status( 201 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

    });
  }else{
    res.status( 400 ).send({ message: "Alguno de los datos viene vacío [saveAdmin]"});
  }
}

function getAdmin( req, res ){
  var params = req.body;

  objAdmin.find( ( error, showAdmins ) => {
    if( error || showAdmins.length <= 0 ){
       return res.status( 404 ).send( { message: "[getAdmin adminController]" } );
    }else{
      for ( let i in showAdmins ){
        if( !bcrypt.compareSync( params.email, showAdmins[i].email ) ){
          /* hacer algo */
        }else{
          var today = dateformat( new Date(), "dd-mm-yyyy" );
          var endDate = dateformat( showAdmins[i].endDate, "dd-mm-yyyy" );

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
  saveAdmin,
  getAdmin
}
