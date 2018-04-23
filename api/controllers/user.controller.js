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

  user.inquest.alimentary.completedFlag = params.inquest.alimentary.completedFlag;
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
  if( params.inquest.alimentary.completedFlag && !params.inquest.anthropometric.completedFlag ){

    var updatePack = {
        "inquest.alimentary.question1": params.inquest.alimentary.question1,
        "inquest.alimentary.question2": params.inquest.alimentary.question2,
        "inquest.alimentary.question3": params.inquest.alimentary.question3,
        "inquest.alimentary.question4": params.inquest.alimentary.question4,
        "inquest.alimentary.question5": params.inquest.alimentary.question5,
        "inquest.alimentary.question6": params.inquest.alimentary.question6,

        "inquest.alimentary.question7A": params.inquest.alimentary.question7A,
        "inquest.alimentary.question7B": params.inquest.alimentary.question7B,
        "inquest.alimentary.question7C": params.inquest.alimentary.question7C,
        "inquest.alimentary.question7D": params.inquest.alimentary.question7D,

        "inquest.alimentary.question8A": params.inquest.alimentary.question8A,
        "inquest.alimentary.question8B": params.inquest.alimentary.question8B,
        "inquest.alimentary.question8C": params.inquest.alimentary.question8C,
        "inquest.alimentary.question8D": params.inquest.alimentary.question8D,

        "inquest.alimentary.question9": params.inquest.alimentary.question9,
        "inquest.alimentary.completedFlag": params.inquest.alimentary.completedFlag
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

    // var updatePack = {
    //   "inquest.biochemicals.question1": params.inquest.biochemicals.question1,
    //   "inquest.biochemicals.completedFlag": params.inquest.biochemicals.completedFlag
    // }
    //
    // if( !req.files ){
    //   res.status( 400 ).send({ message: "No se ha seleccionado ningún archivo para subir [updateUser Biochemicals]"});
    // }
    //
    // //Validaciones al archivo subido
    // var file = req.files.attached;
    // var splitName = file.name.split('.');
    // var fileExtension = splitName[ splitName.length -1 ];
    //
    // // Extensiones permitidas
    // var validExtentions = [ 'png', 'jpg', 'jpeg', 'pdf' ];
    //
    // // Validarque el archivo sea permitido
    // if( validExtentions.indexOf( fileExtension ) < 0 ){
    //   res.status( 400 ).send({ message: "Extensión inválida [updateUser Biochemicals]"});
    // }
    //
    // // Cambiar el nombre del archivo
    // var userId = req.params.id;
    // var fileName = `${ userId }-${ new Date().getMiliseconds() }.${ fileExtension }`;
    //
    // //Mover el archivo a un directorio en el servidor (publicación o node?)
    // var path = `./uploads/${ fileName }`;
    //
    // file.mv( path, err =>{
    //   if( err ){
    //     //Cambiar mensaje de error
    //     res.status( 400 ).send({ message: "Error al mover el archivo al servidor [updateUser Biochemicals]"});
    //   }
    //
    //   // Actualización de datos luego del guardado delarchivo
    //   objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
    //     if( error ){
    //       res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Biochemicals]"});
    //     }else{
    //       return res.status( 200 ).send( updatedUser ); // Develop
    //       //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
    //     }
    //   });
    //
    //
    // });


  } else if ( params.inquest.clinical.completedFlag && !params.inquest.dietetics.completedFlag ) {

  // Guardar datos Clínicos
  } else if ( params.inquest.clinical.completedFlag && !params.inquest.dietetics.completedFlag ) {

  // Guardar datos dietéticos
  }else if ( params.inquest.dietetics.completedFlag) {

  // Has llegado al final del formulario
  }else{
    return null;
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

function updateUserF( req, res ){
  var params = req.body;

  console.log("Entra a updateUserF");
  console.log("Esto trae req.body: ", req.body );

  if( !req.files ){
    console.log("Entra a NO HAY ARCHIVO");
    return res.status( 400 ).send({ message: "No se ha seleccionado ningún archivo para subir [updateUser Biochemicals]"});

    var updatePack = {
      "inquest.biochemicals.question1": params.inquest.biochemicals.question1,
      "inquest.biochemicals.attached": "sin archivo",
      "inquest.biochemicals.completedFlag": params.inquest.biochemicals.completedFlag
    }

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
      if( error ){
        return res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Anthropometric]"});
      }else{
        return res.status( 200 ).send( updatedUser ); // Develop
        //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });

  }else{
    console.log("Entra a SI HAY ARCHIVO");
    //Validaciones al archivo subido
    var file = req.files.attached;
    var splitName = file.name.split('.');
    var fileExtension = splitName[ splitName.length -1 ];
    var userId = req.params.id;

    // Extensiones permitidas
    var validExtentions = [ 'png', 'jpg', 'jpeg', 'pdf' ];

    // Cambiar el nombre del archivo
    var fileName = `${ userId }-${ new Date().getMilliseconds() }.${ fileExtension }`;

    //Mover el archivo a un directorio en el servidor node
    var path = `./uploads/dir/${ fileName }`;

    var updatePack = {
      "inquest.biochemicals.question1": params.inquest.biochemicals.question1,
      "inquest.biochemicals.attached": fileName,
      "inquest.biochemicals.completedFlag": params.inquest.biochemicals.completedFlag
    }

    objUser.findByIdAndUpdate( req.params.id, updatePack, ( error, updatedUser )=>{
      if( error ){
        return res.status( 500 ).send({ message: "Error al actualizar el usuario [updateUser Anthropometric]"});
      }else{

        // Validar que el archivo sea permitido
        if( validExtentions.indexOf( fileExtension ) < 0 ){
          return res.status( 400 ).send({ message: "Extensión inválida [updateUser Biochemicals]"});
        }

        file.mv( path, err =>{
          if( err ){
            return res.status( 500 ).send({ message: "Error al mover el archivo al servidor [updateUser Biochemicals]"});
          }else{
            return res.status( 200 ).send({ message: "Registro actualizado exitosamente con archivo."});
            //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
          }
        });
      }
    });
  }
}


// Respaldo del método que guarda

// function updateUserF( req, res ){
//
//   if( !req.files ){
//     return res.status( 400 ).send({ message: "No se ha seleccionado ningún archivo para subir [updateUser Biochemicals]"});
//   }
//
//     //Validaciones al archivo subido
//     var file = req.files.attached;
//     var splitName = file.name.split('.');
//     var fileExtension = splitName[ splitName.length -1 ];
//     var userId = req.params.id;
//
//     // Extensiones permitidas
//     var validExtentions = [ 'png', 'jpg', 'jpeg', 'pdf' ];
//
//     // Validar que el archivo sea permitido
//     if( validExtentions.indexOf( fileExtension ) < 0 ){
//       return res.status( 400 ).send({ message: "Extensión inválida [updateUser Biochemicals]"});
//     }
//
//     // Cambiar el nombre del archivo
//     var fileName = `${ userId }-${ new Date().getMilliseconds() }.${ fileExtension }`;
//
//     //Mover el archivo a un directorio en el servidor node
//     var path = `./uploads/${ fileName }`;
//
//     file.mv( path, err =>{
//       if( err ){
//         return res.status( 500 ).send({ message: "Error al mover el archivo al servidor [updateUser Biochemicals]"});
//       }else{
//         return res.status( 200 ).send({ message: "Archivo subido exitosamente"});
//       }
//     });
// }

module.exports = {
  saveUser,
  updateUser,
  updateUserF,
  getUser
}
