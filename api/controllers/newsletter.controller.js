"use strict"

var objNewsletter = require("../models/newsletter.model.js");

function registerNL( req, res ){

  var newsletter = new objNewsletter();
  var params = req.body;

  newsletter.nlMail = params.nlMail;

  newsletter.save( ( error, success ) => {
    if( error ){
      res.status(500).send( { msg: "error" } )
    }else{
      res.status(200).send( success )
    }
  });

}

module.exports = {
  registerNL
}
