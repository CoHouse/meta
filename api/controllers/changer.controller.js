"use strict"

var objChanger = require("../models/changer.model.js");
var bcrypt = require("bcrypt-nodejs");

var today = new Date();
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

/* GET */

function getChanger( req, res ){
  objChanger.find( ( error, showChangers ) => {
    if( error ){
        res.status( 500 ).send( { message: "Error al recuperar a los changers: [getChanger - Step 1]" } );
      }else{
        for ( let i in showChangers ){
          if( !bcrypt.compareSync("tsosa@gmail.com", showChangers[i].email ) ){
            if(showChangers.length >= i +1 ){
              res.status( 500 ).send( { message: "No existe registro" } );
            }
          }else{
            var endDate = new Date( showChangers[i].endDate );

            console.log("HOY: ",today.toLocaleDateString());
            console.log("ENDDATE", endDate.toLocaleString());

            if( endDate >= today.toLocaleDateString() ){
              res.status( 200 ).send( { message: "true " + showChangers[i].endDate } );
            } else {
              res.status( 200 ).send( { message: "false " + showChangers[i].endDate } );
            }
          }
        }
      }
  });
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
