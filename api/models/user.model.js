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
    background:{
      question1: String,
      question2: String,
      question3: String,
      question4: String,
      question5: String,
      question6A: String,
      question6B: String,
      question6C: String,
      question6D: String,
      question7A: String,
      question7B: String,
      question7C: String,
      question7D: String,
      question8: String,
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
      detailQuestion1: String,
      question2: String,
      detailQuestion2: String,
      question3: String,
      detailQuestion3: String,
      question4: String,
      detailQuestion4: String,
      question5: String,
      detailQuestion5: String,
      question6: String,
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
  },
  completedInquestFlag:String,
  aPlan:String,
  ePlan:String
});

module.exports = mongoose.model( 'users', userSchema );
