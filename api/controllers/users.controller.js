"use strict"

var objUser = require("../models/users.model.js");

/* POST */
function saveUser( req, res ){
  var comment = new objUser();
  var params = req.body;

  comment.idTopic = params.idTopic;
  comment.text = params.text;
  comment.date = params.date;

  if ( params.idTopic != null && params.text != null ){
    comment.save( ( error, save ) => {
      if( error ){
        res.status( 500 ).send({ message: "Error al guardar el usuario [saveChanger]"});
      }else{
        res.status( 200 ).send( save ); // Develop
         //res.status( 200 ).send( { message: "Guardado con éxito." } ); // Production
      }
    });
  }else{
    res.status( 500 ).send({ message: "Alguno de los datos viene vacío [saveComment]"});
  }
}

function getUser( req, res ){
  objUser.find( ( error, showUser )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [getUser()]"} );
    }else{
        res.status(200).send( { showUser } );
    }
  } ).where('idTopic').equals( req.params._id );
}

module.exports = {
  saveUser,
  getUser
}
