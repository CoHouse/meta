"use strict"

var objComment = require("../models/comments.model.js");

/* POST */
function saveComment( req, res ){
  var comment = new objComment();
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

function getComments( req, res ){
  objComment.find( ( error, showComments )=>{
    if( error ){
      res.status(500).send( { message: "Error en la petición: [getComments()]"} );
    }else{
        res.status(200).send( { showComments } );
    }
  } ).where('idTopic').equals( req.params._id );
}

module.exports = {
  saveComment,
  getComments
}
