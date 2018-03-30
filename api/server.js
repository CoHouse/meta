var app = require('./app'); // this is your express app
var http = require('http'); // 3. HTTP server
var mongoose = require("mongoose");

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT; // 2. Using process.env.PORT
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/* Conexión a base de datos */
// mongoose.connect("mongodb://mbchanger:5al1x9SP45EDus3Ac5@ds259768.mlab.com:59768/metadb", (error, response) => {
//   if( error ){
//     throw error;
//   } else {
//     server.listen( port, function(){
//       console.log("Server Online");
//     })
//   }
// } );

/**
* Listen on provided port, on all network interfaces.
*/
// server.listen(port);
