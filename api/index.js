"use strict"

/* Se utiliza mongoose como intermediario con la BdD */
var mongoose = require("mongoose");
var app = require("./app");

/* Establece la variable de entorno PORT (puerto http) */
var port = process.env.PORT || 2222;

/* Conexión a base de datos */
mongoose.connect("mongodb://localhost:27017/metadb", (error, response) => {
  if( error ){
    throw error;
  } else {
    console.log("La conexión a la base es correcta");
    app.listen( port, function(){
      console.log("servidor del api en http://localhost:" + port);
    })
  }
} );
