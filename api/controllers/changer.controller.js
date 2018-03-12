"use strict"

var objChanger = require("../models/changer.model.js");
var bcrypt = require("bcrypt-nodejs");

/* GET */
function getChanger( req, res ){
  console.log(req);
}

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

    bcrypt.hash( params.startDate, null, null, function( error, hashSD ){
      changer.startDate = hashSD
    });

    bcrypt.hash( params.endDate, null, null, function( error, hashED ){
      changer.endDate = hashED
    });

    changer.save( ( error, save ) => {
      if( error ){
        res.status( 500 ).send({ message: "Error al guardar el usuario [saveChanger]"});
      }else{
        res.status( 200 ).send( save ); // Develop
        // res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });

    });
  }else{
    res.status( 500 ).send({ message: "Alguno de los datos viene vacío [saveChanger]"});
  }
}

module.exports = {
  saveChanger,
  getChanger
}
