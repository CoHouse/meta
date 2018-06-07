"use strict"

var objChanger = require("../models/changer.model.js");
var bcrypt = require("bcrypt-nodejs");
var dateformat = require('dateformat');
var objUser = require("../models/user.model.js");
var objEjercicios = require("../models/exercise.model.js");

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
      var email = showUser["email"];

      objUser.find( ( error, showUsers ) => {

        for( let i in showUsers ){

          if( bcrypt.compareSync( showUsers[i]["inquest"]["generals"].email, email ) ){

            console.log("Respuesta pregunta 1: ", showUsers[i]["inquest"]["background"].question1);

            // clasificar
            switch( showUsers[i]["inquest"]["background"].question1 ) {
              case "A":

                  // Clasificar y Generar plan de ejercicios
                  generarEjerciciosLigeros( );

                  return res.status(200).send( console.log("Usuario ligero") );
                  // return res.status(200).send( showUsers[i] );
                  break;
              case "B":

                  // Clasificar usuario - Moderado
                  // return res.status(200).send( console.log("Usuario moderado") );
                  break;
              case "C":
                  // Usuario Vigoroso
                  return res.status(200).send( console.log("Usuario Vigoroso") );
                  break;
              case "D":
                  // Usuario Cardiovascular
                  return res.status(200).send( console.log("Usuario Cardiovascular") );
                  break;
              default:
                  // code block
                  return res.status(200).send( console.log("Entró al default") );
            }
          }else{
            if( parseInt(i) + 1 == showUsers.length ){
              // return res.status(200).send( showUsers[i] );
              return res.status( 200 ).send( {message: "Este usuario no ha respondido su encuesta"} );
            }
          }
        }
      });
    }
  });

}


function generarEjerciciosLigeros( ){
  var changer = new objChanger();
  var arr = [];
  var cantidadNumeros = 7;
  var hasta = 10;

  changer.userType = "ligero";


  // Obtener los ejercicios de fase 1 - pierna
  function llenarFaseUno(a){
    var v = Math.floor( Math.random() * hasta );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr.length < cantidadNumeros && cantidadNumeros < hasta ){
    llenarFaseUno(arr);
  }

  // Obtener los ejercicios de fase 2 - abdomen
  // Obtener los ejercicios de fase 3 - brazo
  // Obtener los ejercicios de fase 4 - trote

console.log(arr);




  // changer.email = params.email;
  // changer.user = params.user;
  // changer.startDate = params.startDate;
  // changer.endDate = params.endDate;
  // changer.pAlimentary = params. pAlimentary;
  // changer.pExercise = params. pExercise;
  //
  // if ( params.email != null && params.user != null && params.startDate != null && params.endDate != null ){
  //
  //   bcrypt.hash( params.email, null, null, function( error, hash ){
  //
  //     changer.email = hash;
  //
  //     changer.save( ( error, save ) => {
  //       if( error ){
  //         res.status( 500 ).send( { message: "Error al guardar el usuario [saveChanger]" } );
  //       }else{
  //         res.status( 201 ).send( save ); // Develop
  //          //res.status( 201 ).send( { message: "Registro guardado con éxito." } ); // Production
  //       }
  //     });
  //
  //   });
  // }else{
  //   res.status( 500 ).send( { message: "Alguno de los datos viene vacío [saveChanger]"} );
  // }
}

function generarEjerciciosModerados(){}

function generarEjerciciosVigorosos(){}

function generarEjerciciosCardiovasculares(){}


module.exports = {
  saveChanger,
  getChanger,
  getPlann,
  getPendingPlans
}
