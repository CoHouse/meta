export interface User {
  inquest: {
    generals:{
      userName: string,
      age: string,
      email: string,
      completedFlag: boolean
    },
    alimentary:{
      question1?: string,
      question2?: string,
      question3?: string,
      question4?: string,
      question5?: string,
      question6?: string,

      question7A?: string,
      question7B?: string,
      question7C?: string,
      question7D?: string,

      question8A?: string,
      question8B?: string,
      question8C?: string,
      question8D?: string,

      question9?: string,
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
  completedInquestFlag?:boolean,
  aPlan?:boolean,
  ePlan?:boolean,
  plan:{
    alimentary:{
      sendByDietist: boolean
    },
    exercise:{
      sendByPlanner: boolean
    }
  }
}
