export interface User {
  completedInquestFlag?:boolean,
  pAlimentary?:boolean,
  pExercise?:boolean,
  userType?:string,
  _id?:string,
  inquest: {
    generals:{
      userName: string,
      age: string,
      email: string,
      completedFlag: boolean
    },
    background:{
      question1?: string,
      question2?: string,
      question3?: string,
      question4?: string,
      question5?: string,

      question6A?: string,
      question6B?: string,
      question6C?: string,
      question6D?: string,

      question7A?: string,
      question7B?: string,
      question7C?: string,
      question7D?: string,

      question8?: string,
      completedFlag: boolean
    },
    anthropometric:{
      question1?: string,
      question2?: string,
      question3?: string,
      completedFlag: boolean
    },
    biochemicals:{
      question1?: string,
      attached?: string,
      completedFlag: boolean
    },
    clinical:{
      question1?: string,
      detailQuestion1?:string,
      question2?: string,
      detailQuestion2?:string,
      question3?: string,
      detailQuestion3?:string,
      question4?: string,
      detailQuestion4?:string,
      question5?: string,
      detailQuestion5?:string,
      question6?: string,
      completedFlag: boolean
    },
    dietetics:{
      question1?: string,
      question2?: string,
      question3?: string,
      question4?: string,
      question5?: string,
      question6?: string,
      question7?: string,
      completedFlag: boolean
    }
  },
  plan:{
    alimentary:{
      sendByDietist: boolean
    },
    exercise:{
      sendByPlanner: boolean
    }
  }
}
