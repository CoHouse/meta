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
  var params = req.body;
  var user = new objUser();

  if( params.inquest.alimentary.completedFlag && !params.inquest.anthropometric.completedFlag ){
    console.log("Entra a la condición pero no guarda, WTF!");
    // Llenar con el formulario de alimentación
    var updatePack = {
      "objUser.inquest.alimentary.question1": params.inquest.alimentary.question1,
      "objUser.inquest.alimentary.question2": params.inquest.alimentary.question2,
      "objUser.inquest.alimentary.question3": params.inquest.alimentary.question3,
      "objUser.inquest.alimentary.question4": params.inquest.alimentary.question4,
      "objUser.inquest.alimentary.question5": params.inquest.alimentary.question5,
      "objUser.inquest.alimentary.question6": params.inquest.alimentary.question6,

      "objUser.inquest.alimentary.question7A": params.inquest.alimentary.question7A,
      "objUser.inquest.alimentary.question7B": params.inquest.alimentary.question7B,
      "objUser.inquest.alimentary.question7C": params.inquest.alimentary.question7C,
      "objUser.inquest.alimentary.question7D": params.inquest.alimentary.question7D,

      "objUser.inquest.alimentary.question8A": params.inquest.alimentary.question8A,
      "objUser.inquest.alimentary.question8B": params.inquest.alimentary.question8B,
      "objUser.inquest.alimentary.question8C": params.inquest.alimentary.question8C,
      "objUser.inquest.alimentary.question8D": params.inquest.alimentary.question8D,

      "objUser.inquest.alimentary.question9": params.inquest.alimentary.question9,
      "objUser.inquest.alimentary.completedFlag": params.inquest.alimentary.completedFlag
    }


    console.log("Esto trae el updatePack: ", updatePack);

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{

      console.log("dentro del findByIdAndUpdate, id:", req.params.id);

      if( error ){
        res.status( 500 ).send({ message: "Error al guardar el usuario [updateUser]"});
      }else{
        return res.status( 200 ).send( console.log("respuesta de la api: ", updatedUser) ); // Develop
        //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });

  }else if( params.inquest.anthropometric.completedFlag && !params.inquest.biochemicals.completedFlag ){
    // Llenar con el formulario de alimentación
    console.log("Entra en la segunda condición, ID: ", req.params.id );
    console.log("params: : ", req.params );
    var updatePack = {
      "objUser.inquest.alimentary.question1": params.inquest.alimentary.question1,
      "objUser.inquest.alimentary.attached": params.inquest.alimentary.attached,
      "objUser.inquest.alimentary.completedFlag": params.inquest.alimentary.completedFlag
    }

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
      if( error ){
        res.status( 500 ).send({ message: "Error al guardar el usuario [updateUser]"});
      }else{
        return res.status( 200 ).send( console.log("respuesta de la api: ", updatedUser) ); // Develop

        //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });
  }




}

// todavía no se usa
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
  updateUser,
  getUser
}
