"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = schema({
  inquest: {
    generals:{
      userName: String,
      age: String,
      email: String
    },
    alimentary:{
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6: String,
      question7: String,
      question8: String,
      question9: String,
      completedFlag: String
    },
    anthropometric:{
      question1: String,
      question2: String,
      question3: String,
      completedFlag: String
    },
    biochemicals:{
      question1: String,
      attached: String,
      completedFlag: String
    },
    clinical:{
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6: String,
      question7: String,
      question8: String,
      completedFlag: String
    },
    dietetics:{
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6: String,
      question7: String,
      completedFlag: String
    }
  },
  plan:{
    alimentary:{
      sendByDietist: String
    },
    exercise:{
      sendByPlanner: String
    }
  }
});

module.exports = mongoose.model( 'users', userSchema );
