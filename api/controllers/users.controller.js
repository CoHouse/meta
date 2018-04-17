"use strict"

var objUser = require("../models/users.model.js");

/* POST */
function saveUser( req, res ){
  var user = new objUser();
  var params = req.body;

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
  var _id = req.params._id;
  var params = req.body;

  console.log("El ID que tengo en la API: ", _id);

  if( params.inquest.alimentary.completedFlag ){
    // Llenar con el formulario de alimentación
    var updatePack = {
      "user.inquest.alimentary.question1": params.inquest.alimentary.question1,
      "user.inquest.alimentary.question2": params.inquest.alimentary.question2,
      "user.inquest.alimentary.question3": params.inquest.alimentary.question3,
      "user.inquest.alimentary.question4": params.inquest.alimentary.question4,
      "user.inquest.alimentary.question5": params.inquest.alimentary.question5,
      "user.inquest.alimentary.question6": params.inquest.alimentary.question6,

      "user.inquest.alimentary.question7A": params.inquest.alimentary.question7A,
      "user.inquest.alimentary.question7B": params.inquest.alimentary.question7B,
      "user.inquest.alimentary.question7C": params.inquest.alimentary.question7C,
      "user.inquest.alimentary.question7D": params.inquest.alimentary.question7D,

      "user.inquest.alimentary.question8A": params.inquest.alimentary.question8A,
      "user.inquest.alimentary.question8B": params.inquest.alimentary.question8B,
      "user.inquest.alimentary.question8C": params.inquest.alimentary.question8C,
      "user.inquest.alimentary.question8D": params.inquest.alimentary.question8D,

      "user.inquest.alimentary.question9": params.inquest.alimentary.question9,
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


  objUser.findByIdAndUpdate( _id, updatePack, ( error, updatedUser )=>{
    if( error ){
      res.status( 500 ).send({ message: "Error al guardar el usuario [updateUser]"});
    }else{
      console.log("Entro al else, por lo que supongo guardó los datos");
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
