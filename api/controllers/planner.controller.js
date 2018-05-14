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
       return res.status( 404 ).send( { message: "[getPlanner plannerController]" } );
    }else{
      for( let i in showPlanners ){

        if( bcrypt.compareSync( params.email, showPlanners[i].email ) ){
          var today = new Date( ).getTime( );
          var startDate = new Date( showPlanners[i].startDate ).getTime( );
          var endDate = new Date( showPlanners[i].endDate ).getTime( );

          if( startDate <= today && endDate >= today ){
            return res.status( 200 ).send( true );
          } else {
            return res.status( 200 ).send( false );
          }
        }else{
          if( parseInt(i) + 1 == showPlanners.length ){
            return res.status( 200 ).send( false );
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
