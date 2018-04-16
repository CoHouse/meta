"use strict"

var objUser = require("../models/users.model.js");

/* POST */
function saveUser( req, res ){
  var user = new objUser();
  var params = req.body;
  var updatePack;

  /* Llenado del TAB Generales - Método POST */
  user.inquest.generals.userName = params.inquest.generals.userName;
  user.inquest.generals.age = params.inquest.generals.age;
  user.inquest.generals.email = params.inquest.generals.email;
  user.inquest.generals.completedFlag = params.inquest.generals.completedFlag;

  user.inquest.alimentary.completedFlag = params.inquest.alimentary.completedFlag;
  user.inquest.anthropometric.completedFlag = params.inquest.anthropometric.completedFlag;
  user.inquest.biochemicals.completedFlag = params.inquest.biochemicals.completedFlag;
  user.inquest.clinical.completedFlag = params.inquest.clinical.completedFlag;
  user.inquest.dietetics.completedFlag = params.inquest.dietetics.completedFlag;

  user.plan.alimentary.sendByDietist = params.plan.alimentary.sendByDietist;
  user.plan.exercise.sendByPlanner = params.plan.exercise.sendByPlanner;

  user.save( ( error, save ) => {
    if( error ){
      res.status( 500 ).send({ message: "Error al guardar el usuario [saveChanger]"});
    }else{
      res.status( 200 ).send( save ); // Develop
      //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
    }
  });
}

/* UPDATE */

function updateUser( req, res ){
  var user = new objUser();
  var id = req.params._id;
  var params = req.body;

  console.log("Esto viene en la bandera: ", params.inquest.alimentary.completedFlag);

  if( params.inquest.alimentary.completedFlag ){
    // Llenar con el formulario de alimentación
    var updatePack = {
      "user.inquest.alimentary.question1": params.inquest.alimentary.alimentacionPregunta1,
      "user.inquest.alimentary.question2": params.inquest.alimentary.alimentacionPregunta2,
      "user.inquest.alimentary.question3": params.inquest.alimentary.alimentacionPregunta3,
      "user.inquest.alimentary.question4": params.inquest.alimentary.alimentacionPregunta4,
      "user.inquest.alimentary.question5": params.inquest.alimentary.alimentacionPregunta5,
      "user.inquest.alimentary.question6": params.inquest.alimentary.alimentacionPregunta6,

      "user.inquest.alimentary.question7": params.inquest.alimentary.alimentacionPregunta7A,
      "user.inquest.alimentary.question7": params.inquest.alimentary.alimentacionPregunta7B,
      "user.inquest.alimentary.question7": params.inquest.alimentary.alimentacionPregunta7C,
      "user.inquest.alimentary.question7": params.inquest.alimentary.alimentacionPregunta7D,

      "user.inquest.alimentary.question8": params.inquest.alimentary.alimentacionPregunta8A,
      "user.inquest.alimentary.question8": params.inquest.alimentary.alimentacionPregunta8B,
      "user.inquest.alimentary.question8": params.inquest.alimentary.alimentacionPregunta8C,
      "user.inquest.alimentary.question8": params.inquest.alimentary.alimentacionPregunta8D,

      "user.inquest.alimentary.question9": params.inquest.alimentary.alimentacionPregunta9,
      "user.inquest.alimentary.completedFlag": params.inquest.alimentary.completedFlag
    }
  }
  // else if(params.inquest.alimentary.completedFlag && !params.inquest.anthropometric.completedFlag ){
  //   var updatePack = {
  //     "campo";valor
  //   }
  // }

  // var updatePack = {
  //   "campo";valor
  // }

  user.findByIdAndUpdate( id, updatePack, ( error, updatedUser )=>{
    if( error ){
      res.status( 500 ).send({ message: "Error al guardar el usuario [updateUser]"});
    }else{
      res.status( 200 ).send( updatedUser ); // Develop
      //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
    }
  });
}


/**

this.user = {
  inquest:{
    generals: {
      userName: form['userName'],
      age: form['age'],
      email: this.profile.email,
      completedFlag: true
    },
    alimentary:{
      completedFlag:false
    },
    anthropometric:{
      completedFlag:false
    },
    biochemicals:{
      completedFlag:false
    },
    clinical:{
      completedFlag:false
    },
    dietetics:{
      completedFlag: false
    }
  },
  plan:{
    alimentary:{
      sendByDietist:false
    },
    exercise:{
      sendByPlanner: false
    }
  }
}

*/

function getUser( req, res ){
  objUser.find( ( error, showUser )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [getUser()]"} );
    }else{
        res.status(200).send( { showUser } );
    }
  } ).where('email').equals( req.params._id );
}

module.exports = {
  saveUser,
  getUser,
  updateUser
}
