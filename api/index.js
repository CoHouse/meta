"use strict"

/* Se utiliza mongoose como intermediario con la BdD */
var mongoose = require("mongoose");
var app = require("./app");

/* Establece la variable de entorno PORT (puerto http) */
var port = process.env.PORT || 2222; /* Puerto Desarrollo */
// var port = process.env.PORT || 59768; /* Puerto producción */

/* Conexión a base de datos */
mongoose.connect("mongodb://localhost:27017/metadb", (error, response) => {
  if( error ){
    throw error;
  } else {
    console.log("La conexión a la base es correcta");
    app.listen( port, function(){
      console.log("ds259768.mlab.com:59768/metadb -u <dbuser> -p <dbpassword>");
    })
  }
} );
