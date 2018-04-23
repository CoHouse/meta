"use strict"

var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = schema({
  inquest: {
    generals:{
      userName: String,
      age: String,
      email: {type:String, unique:true},
      completedFlag: String
    },
    alimentary:{
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6: String,
      question7A: String,
      question7B: String,
      question7C: String,
      question7D: String,
      question8A: String,
      question8B: String,
      question8C: String,
      question8D: String,
      question9: String,
      completedFlag: String
    },
    anthropometric:{
      height: String,
      weight: String,
      fatPercent: String,
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