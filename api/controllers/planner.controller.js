"use strict"

var objPlanner = require("../models/planner.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');

/* GET */

/* POST */
function savePlanner( req, res ){
  var planner = new objPlanner();
  var params = req.body;

  planner.email = params.email;
  planner.startDate = params.startDate;
  planner.endDate = params.endDate;

  if ( params.email != null && params.startDate != null && params.endDate != null ){

    bcrypt.hash( params.email, null, null, function( error, hash ){

      planner.email = hash;

      planner.save( ( error, save ) => {
        if( error ){
          res.status( 400 ).send({ message: "Error al guardar el usuario [savePlanner]"});
        }else{
          res.status( 201 ).send( save ); // Develop
           //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

    });
  }else{
    res.status( 500 ).send({ message: "Alguno de los datos viene vacío [savePlanner]"});
  }
}

function getPlanner( req, res ){
  var params = req.body;

  objPlanner.find( ( error, showPlanners ) => {
    if( error || showPlanners.length <= 0 ){
       return res.status( 404 ).send( { message: "No existen planners [getPlanner plannerController]" } );
    }else{
      for ( let i in showPlanners ){
        if( !bcrypt.compareSync( params.email, showPlanners[i].email ) ){
          /* hacer algo */
        }else{
          var today = dateformat( new Date(), "dd-mm-yyyy" );
          var endDate = dateformat( showPlanners[i].endDate, "dd-mm-yyyy" );

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
  savePlanner,
  getPlanner
}
