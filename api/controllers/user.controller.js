"use strict"

var objUser = require("../models/user.model.js");

/* POST */
function saveUser( req, res ){
  var user = new objUser();
  var params = req.body;

  /* Llenado del TAB Generales - Método POST */
  user.inquest.generals.userName = params.inquest.generals.userName;
  user.inquest.generals.age = params.inquest.generals.age;
  user.inquest.generals.email = params.inquest.generals.email;
  user.inquest.generals.completedFlag = params.inquest.generals.completedFlag;

  user.inquest.background.completedFlag = params.inquest.background.completedFlag;
  user.inquest.anthropometric.completedFlag = params.inquest.anthropometric.completedFlag;
  user.inquest.biochemicals.completedFlag = params.inquest.biochemicals.completedFlag;
  user.inquest.clinical.completedFlag = params.inquest.clinical.completedFlag;
  user.inquest.dietetics.completedFlag = params.inquest.dietetics.completedFlag;

  user.plan.alimentary.sendByDietist = params.plan.alimentary.sendByDietist;
  user.plan.exercise.sendByPlanner = params.plan.exercise.sendByPlanner;

  user.save( ( error, save ) => {
    if( error ){
      res.status( 500 ).send({
        error: error,
        message: "Error al guardar el usuario [saveChanger]"});
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

  // Guardar tab Alimenticios
  if( params.inquest.background.completedFlag && !params.inquest.anthropometric.completedFlag ){

    var updatePack = {
        "inquest.background.question1": params.inquest.background.question1,
        "inquest.background.question2": params.inquest.background.question2,
        "inquest.background.question3": params.inquest.background.question3,
        "inquest.background.question4": params.inquest.background.question4,
        "inquest.background.question5": params.inquest.background.question5,

        "inquest.background.question6A": params.inquest.background.question6A,
        "inquest.background.question6B": params.inquest.background.question6B,
        "inquest.background.question6C": params.inquest.background.question6C,
        "inquest.background.question6D": params.inquest.background.question6D,

        "inquest.background.question7A": params.inquest.background.question7A,
        "inquest.background.question7B": params.inquest.background.question7B,
        "inquest.background.question7C": params.inquest.background.question7C,
        "inquest.background.question7D": params.inquest.background.question7D,

        "inquest.background.question8": params.inquest.background.question8,
        "inquest.background.completedFlag": params.inquest.background.completedFlag
    }

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
      if( error ){
        return res.status( 500 ).send( {  message: "Error al actualizar el usuario [updateUser Alimentary]" } );
      }else{
        return res.status( 200 ).send( updatedUser ); // Develop
        //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });

  }

  // Guardar tab Antropométricos
  else if( params.inquest.anthropometric.completedFlag && !params.inquest.biochemicals.completedFlag ){

    var updatePack = {
      "inquest.anthropometric.height": params.inquest.anthropometric.question1,
      "inquest.anthropometric.weight": params.inquest.anthropometric.question2,
      "inquest.anthropometric.fatPercent": params.inquest.anthropometric.question3,
      "inquest.anthropometric.completedFlag": params.inquest.anthropometric.completedFlag
    }

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
      if( error ){
        res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Anthropometric]"});
      }else{
        return res.status( 200 ).send( updatedUser ); // Develop
        //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });
  }

  // Guardar tab Bioquímicos
  else if ( params.inquest.biochemicals.completedFlag && !params.inquest.clinical.completedFlag ) {

    var updatePack = {
      "inquest.biochemicals.question1": params.inquest.biochemicals.question1,
      "inquest.biochemicals.attached": params.inquest.biochemicals.attached,
      "inquest.biochemicals.completedFlag": params.inquest.biochemicals.completedFlag
    }

      objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
        if( error ){
          res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Biochemicals]"});
        }else{
          return res.status( 200 ).send( updatedUser ); // Develop
          //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

  }

  //Guardar datos clínicos
  else if ( params.inquest.clinical.completedFlag && !params.inquest.dietetics.completedFlag ) {

    var updatePack = {
      "inquest.clinical.question1": params.inquest.clinical.question1,
      "inquest.clinical.detailQuestion1": params.inquest.clinical.detailQuestion1,
      "inquest.clinical.question2": params.inquest.clinical.question2,
      "inquest.clinical.detailQuestion2": params.inquest.clinical.detailQuestion2,
      "inquest.clinical.question3": params.inquest.clinical.question3,
      "inquest.clinical.detailQuestion3": params.inquest.clinical.detailQuestion3,
      "inquest.clinical.question4": params.inquest.clinical.question4,
      "inquest.clinical.detailQuestion4": params.inquest.clinical.detailQuestion4,
      "inquest.clinical.question5": params.inquest.clinical.question5,
      "inquest.clinical.detailQuestion5": params.inquest.clinical.detailQuestion5,
      "inquest.clinical.question6": params.inquest.clinical.question6,
      "inquest.clinical.completedFlag": params.inquest.clinical.completedFlag
    }

      objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
        if( error ){
          res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Clinical]"});
        }else{
          return res.status( 200 ).send( updatedUser ); // Develop
          //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

  // Guardar datos dietéticos
  } else if ( params.inquest.dietetics.completedFlag) {
    var updatePack = {
      "inquest.dietetics.question1": params.inquest.dietetics.question1,
      "inquest.dietetics.question2": params.inquest.dietetics.question2,
      "inquest.dietetics.question3": params.inquest.dietetics.question3,
      "inquest.dietetics.question4": params.inquest.dietetics.question4,
      "inquest.dietetics.question5": params.inquest.dietetics.question5,
      "inquest.dietetics.question6": params.inquest.dietetics.question6,
      "inquest.dietetics.question7": params.inquest.dietetics.question7,
      "inquest.dietetics.completedFlag": params.inquest.dietetics.completedFlag
    }

      objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
        if( error ){
          res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Biochemicals]"});
        }else{
          return res.status( 200 ).send( updatedUser ); // Develop
          //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
        }
      });

  }else{
    return null;
  }

}

// todavía no se usa
function getUser( req, res ){
  var params = req.body;

  objUser.findOne( { "inquest.generals.email": params.email }, ( error, user ) => {
    // if( error || showUsers.length <= 0 ){
    if( error ){
      return res.status( 404 ).send( { message: "[getUser UserController]" } );
    }else{
      if( user == null ){
        return res.status( 200 ).send( { message: "No existe el usuario." } );
      }else{
        return res.status( 200 ).send( user );
      }
    }
  });
}

function saveFileUser( req, res ){

    // //Validaciones al archivo subido
    var file = req.files.attached;
    var splitName = file.name.split('.');
    var fileExtension = splitName[ splitName.length -1 ].toLowerCase();
    var userId = req.params.id;

    // Extensiones permitidas
    var validExtentions = [ 'png', 'jpg', 'jpeg', 'pdf' ];

    // Validar que el archivo sea permitido
    if( validExtentions.indexOf( fileExtension ) < 0 ){
      return res.status( 400 ).send({ message: "Extensión inválida [saveFileUser userController]" });
    }

    //Mover el archivo a un directorio en el servidor node
    var path = `./uploads/${req.params.tipo}/${ file.name }`;

    file.mv( path, err =>{
      if( err ){
        return res.status( 500 ).send({ message: "Error al mover el archivo al servidor [saveFileUser userController]"});
      }else{
        return res.status( 200 ).send({ message: "Archivo subido exitosamente"});
      }
    });
}

module.exports = {
  saveUser,
  updateUser,
  saveFileUser,
  getUser
}
