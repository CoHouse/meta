export interface User {
  inquest: {
    generals:{
      userName: string,
      age: string,
      email: string
    },
    alimentary:{
      question1?: string,
      question2?: string,
      question3?: string,
      question4?: string,
      question5?: string,
      question6?: string,
      question7?: string,
      question8?: string,
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
      question2?: string,
      question3?: string,
      question4?: string,
      question5?: string,
      question6?: string,
      question7?: string,
      question8?: string,
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
