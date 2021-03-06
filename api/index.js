"use strict"

/* Se utiliza mongoose como intermediario con la BdD */
var mongoose = require("mongoose");
var app = require("./app");

/* Establece la variable de entorno PORT (puerto http) */
var port = process.env.PORT || 2222; /* Puerto Desarrollo */

/* Conexión a base de datos */
mongoose.connect("mongodb://localhost:27017/metadb", (error, response) => {
  if( error ){
    throw error;
  } else {
    console.log("Conexión inicial en: " + Date());
    app.listen( port, function(){
      console.log("mongodb://localhost:"+port+"/metadb");
    })
  }
} );
