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

  objChanger.findOne( { "_id": req.params._id }, ( error, showUser )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [getPlann()]" } );
    }else{
      var email = showUser["email"];

      objUser.find( ( error, showUsers ) => {

        for( let i in showUsers ){

          if( bcrypt.compareSync( showUsers[i]["inquest"]["generals"].email, email ) ){

            // console.log("Respuesta pregunta 1: ", showUsers[i]["inquest"]["background"].question1);

            // clasificar
            switch( showUsers[i]["inquest"]["background"].question1 ) {
              case "A":

              // Clasificar y Generar plan de ejercicios
              let ejercicios = generarEjerciciosLigeros( 7, 5, 7, 1, 1 );


              console.log("Ejercicios: ", ejercicios);
              //Actualizar el registro de usuario con el plan de ejercicios

              // retornar estatus final
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
              return res.status(200).send( console.log("Entró al default") );
            }
          }else{
            if( parseInt(i) + 1 == showUsers.length ){
              return res.status( 200 ).send( { message: "Este usuario no ha respondido su encuesta" } );
            }
          }
        }
      });
    }
  });

}

function generarEjerciciosLigeros( cantidadEjerciciosFU, cantidadEjerciciosFD, cantidadEjerciciosFT, cantidadEjerciciosFC, cantidadEjerciciosFCin ){

  var changer = new objChanger();

  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];

  var cantidadEjerciciosGFU = cantidadEjerciciosFU;
  var cantidadEjerciciosGFD = cantidadEjerciciosFD;
  var cantidadEjerciciosGFT = cantidadEjerciciosFT;
  var cantidadEjerciciosGFC = cantidadEjerciciosFC;
  var cantidadEjerciciosGFCin = cantidadEjerciciosFCin;

  var limiteF1 = 19;
  var limiteF2 = 20;
  var limiteF3 = 19;
  var limiteF4 = 2;
  var limiteF5 = 2;

  var ejerciciosFase1 = {};

  /*=============================================>>>>>
  = Generación ejercicios fase 1 - Pierna =
  ===============================================>>>>>*/
  function generarFaseUno(a){
    var v = Math.floor( Math.random() * limiteF1 );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr1.length < cantidadEjerciciosGFU && cantidadEjerciciosGFU < limiteF1 ){
    generarFaseUno( arr1 );
  }

  getExercisesPhaseOne( arr1 ).then( ejercicios =>{
    // console.log("Ejercicios Generados Fase 1: ", ejercicios );
    return ejercicios;
  },  error =>{
    console.log(error);
  });
  /*= End of Generación ejercicios fase 1 - Pierna =*/
  /*=============================================<<<<<*/


  /*=============================================>>>>>
  = Generación ejercicios fase 2 - Abdomen =
  ===============================================>>>>>*/
  function generarFaseDos(a){
    var v = Math.floor( Math.random() * limiteF2 );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr2.length < cantidadEjerciciosGFD && cantidadEjerciciosGFD < limiteF2 ){
    generarFaseDos( arr2 );
  }

  getExercisesPhaseTwo( arr2 ).then( ejercicios =>{
    // console.log("Ejercicios Generados Fase 2: ", ejercicios );


    /*=============================================>>>>>
    = Actualizar usuario con los ejercicios de la fase 1 =
    ===============================================>>>>>*/
    // function updateExcersisePlanPhase1( req, res ){
    //   var user = new objUser();
    //
    //   /* Llenado los primeros ejercicios - Método POST */
    //   var updatePack = {
    //     "plan.exercise.phaseOne.e1" : ejercicios[0]["name"],
    //     "plan.exercise.phaseOne.e2" : ejercicios[1]["name"],
    //     "plan.exercise.phaseOne.e3" : ejercicios[2]["name"],
    //     "plan.exercise.phaseOne.e4" : ejercicios[3]["name"],
    //     "plan.exercise.phaseOne.e5" : ejercicios[4]["name"],
    //     "plan.exercise.phaseOne.e6" : ejercicios[5]["name"],
    //     "plan.exercise.phaseOne.e7" : ejercicios[6]["name"]
    //   }
    //
    //   console.log("dentro de la fase 2 en el update");
    //
    //   user.findByIdAndUpdate( showUsers[i][_id], updatePack, ( error, updatedUser )=>{
    //     if( error ){
    //       return res.status( 500 ).send( {  message: "Error al actualizar el plan de ejercicios del usuario [getExercisesPhaseTwo]" } );
    //     }else{
    //       return res.status( 200 ).send( updatedUser ); // Develop
    //       //res.status( 200 ).send( { message: "Actualizado con éxito." } ); // Production
    //     }
    //   });
    //
    // }
    /*= End of Actualizar usuario con los ejercicios de la fase 1 =*/
    /*=============================================<<<<<*/

    return ejericios;

    // console.log(this.ejerciciosPhaseOne);
  }, ( error )=>{
    console.log(error);
  });
  /*= end of Generación ejercicios fase 2 - Abdomen =*/
  /*=============================================<<<<<*/


  /*=============================================>>>>>
  = Generación ejercicios fase 3 - Brazo =
  ===============================================>>>>>*/
  function generarFaseTres(a){
    var v = Math.floor( Math.random() * limiteF3 );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr3.length < cantidadEjerciciosGFT && cantidadEjerciciosGFT < limiteF3 ){
    generarFaseTres( arr3 );
  }

  getExercisesPhaseThree( arr3 ).then( ejercicios =>{
    // console.log("Ejercicios Generados Fase 3: ", ejercicios );

    return ejericios;

  }, ( error )=>{
    console.log(error);
  });
  /*= end of Generación ejercicios fase 3 - Brazo =*/
  /*=============================================<<<<<*/


  /*=============================================>>>>>
  = Generación ejercicios fase 4 - Trote =
  ===============================================>>>>>*/
  function generarFaseCuatro(a){
    var v = Math.floor( Math.random() * limiteF4 );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr4.length < cantidadEjerciciosGFC && cantidadEjerciciosGFC < limiteF4 ){
    generarFaseCuatro( arr4 );
  }

  getExercisesPhaseFour( arr4 ).then( ejercicios =>{
    // console.log("Ejercicios Generados Fase 4: ", ejercicios );

    return ejercicios;
  }, ( error )=>{
    console.log(error);
  });
  /*= end of Generación ejercicios fase 4 - Trote =*/
  /*=============================================<<<<<*/


  /*=============================================>>>>>
  = Generación ejercicios fase 5 - Estiramiento =
  ===============================================>>>>>*/
  function generarFaseCinco(a){
    var v = Math.floor( Math.random() * limiteF5 );
    if( !a.some( function(e){ return e == v } ) ){
      a.push(v);
    }
  }

  while( arr5.length < cantidadEjerciciosGFCin && cantidadEjerciciosGFCin < limiteF5 ){
    generarFaseCinco( arr5 );
  }

  getExercisesPhaseFive( arr5 ).then( ejercicios =>{
    // console.log("Ejercicios Generados Fase 5: ", ejercicios );

    return ejercicios;
  }, ( error )=>{
    console.log(error);
  });
  /*= end of Generación ejercicios fase 5 - Estiramiento =*/
  /*=============================================<<<<<*/

  // console.log("Esto trae ejercicios fase 1: ", this.ejerciciosFase1);

}

function generarEjerciciosModerados(  ){}

function generarEjerciciosVigorosos(  ){}

function generarEjerciciosCardiovasculares(  ){}

let getExercisesPhaseOne = (arr) => {
  return new Promise( ( resolve, reject ) =>{
    let ejercicios = objEjercicios.find( { classification: '1', phase:'1', idArray: { $in: arr } } );

    if(!ejercicios){
      reject("No existen ejercicios, favor de validar manualmente");
    }else{
      resolve( ejercicios );
    }

  });
}

let getExercisesPhaseTwo = (arr) =>{
  return new Promise( ( resolve, reject ) =>{
    let ejercicios = objEjercicios.find( { classification: '1', phase:'2', idArray: { $in: arr } } );

    if(!ejercicios){
      reject("No existen ejercicios, favor de validar manualmente");
    }else{
      resolve(ejercicios);
    }

  });
}

let getExercisesPhaseThree = (arr) =>{
  return new Promise( ( resolve, reject ) =>{
    let ejercicios = objEjercicios.find( { classification: '1', phase:'3', idArray: { $in: arr } } );

    if(!ejercicios){
      reject("No existen ejercicios, favor de validar manualmente");
    }else{
      resolve(ejercicios);
    }

  });
}

let getExercisesPhaseFour = (arr) =>{
  return new Promise( ( resolve, reject ) =>{
    let ejercicios = objEjercicios.find( { classification: '1', phase:'4', idArray: { $in: arr } } );

    if(!ejercicios){
      reject("No existen ejercicios, favor de validar manualmente");
    }else{
      resolve(ejercicios);
    }

  });
}

let getExercisesPhaseFive = (arr) =>{
  return new Promise( ( resolve, reject ) =>{
    let ejercicios = objEjercicios.find( { classification: '1', phase:'5', idArray: { $in: arr } } );

    if( ejercicios.length <= 0 ){
      reject("No existen ejercicios, favor de validar manualmente");
    }else{
      resolve(ejercicios);
    }

  });
}

module.exports = {
  saveChanger,
  getChanger,
  getPlann,
  getPendingPlans
}
