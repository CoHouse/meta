import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
import * as swal from 'sweetalert';

@Component({
  selector: 'app-inquest',
  templateUrl: './inquest.component.html'
})
export class InquestComponent implements OnInit {

  public profile;
  public _id;
  attachFile: File;

  public user:User = {
    inquest:{
      generals: {
        userName: null,
        age: null,
        email:null,
        completedFlag: true
      },
      alimentary:{
        completedFlag:false
      },
      anthropometric:{
        completedFlag:false
      },
      biochemicals:{
        completedFlag:false
      },
      clinical:{
        completedFlag:false
      },
      dietetics:{
        completedFlag: false
      }
    },
    plan:{
      alimentary:{
        sendByDietist:false
      },
      exercise:{
        sendByPlanner: false
      }
    }
  }

  constructor( public _auth:AuthService, public _user:UserService, public _activatedRoute:ActivatedRoute, public router:Router ) {
    this._activatedRoute.params.subscribe( params => {
      this._id = params['_id'];
    });
  }

  ngOnInit(){
    if ( this._auth.userProfile ) {
      this.profile = this._auth.userProfile;
    } else {
      this._auth.getProfile( ( err, profile ) => {
        this.profile = profile;
      });
    }
  }

  saveDataGenerales( form:NgForm ){
    // 1. Guardar el formulario
    this.user = {
      inquest:{
        generals: {
          userName: form['value']['userName'],
          age: form['value']['age'],
          email: this.profile.email,
          completedFlag: true
        },
        alimentary:{
          completedFlag:false
        },
        anthropometric:{
          completedFlag:false
        },
        biochemicals:{
          completedFlag:false
        },
        clinical:{
          completedFlag:false
        },
        dietetics:{
          completedFlag: false
        }
      },
      plan:{
        alimentary:{
          sendByDietist:false
        },
        exercise:{
          sendByPlanner: false
        }
      }
    }

    this._user.sendUser( this.user ).subscribe( data => {

      // 1. Obtener el ID del registro guardado
      this._id = data['_id'];

      // 2. Hacer Tab Anterior Inaccesible
      $('.nav-tabs a[href="#generales"]').removeClass('active').addClass('disabled');

      // 3. Enviar id de usuario (ya existe) a la url
      this.router.navigate(['/inquest', this._id ]);
      // 4. Ir al siguiente Tab
      $('.nav-tabs a[href="#antecedentes"]').removeClass('disabled').tab('show');


    }, error => console.error( error ) );
  }

  saveDataAntecedentes( form:NgForm ){
    // Llenar los datos a enviar
    this.user = {
      inquest:{
        generals: {
          userName: null,
          age: null,
          email: null,
          completedFlag: true
        },
        alimentary:{
          question1: form['value']['antecedentesPregunta1'],
          question2: form['value']['antecedentesPregunta2'],
          question3: form['value']['antecedentesPregunta3'],
          question4: form['value']['antecedentesPregunta4'],
          question5: form['value']['antecedentesPregunta5'],
          question6: form['value']['antecedentesPregunta6'],
          question7A: form['value']['antecedentesPregunta7A'],
          question7B: form['value']['antecedentesPregunta7B'],
          question7C: form['value']['antecedentesPregunta7C'],
          question7D: form['value']['antecedentesPregunta7D'],
          question8A: form['value']['antecedentesPregunta8A'],
          question8B: form['value']['antecedentesPregunta8B'],
          question8C: form['value']['antecedentesPregunta8C'],
          question8D: form['value']['antecedentesPregunta8D'],
          question9: form['value']['antecedentesPregunta9'],
          completedFlag:true
        },
        anthropometric:{
          completedFlag:false
        },
        biochemicals:{
          completedFlag:false
        },
        clinical:{
          completedFlag:false
        },
        dietetics:{
          completedFlag: false
        }
      },
      plan:{
        alimentary:{
          sendByDietist:false
        },
        exercise:{
          sendByPlanner: false
        }
      }
    }

    // Hacer actualización
    this._user.updateUser( this.user, this._id ).subscribe( data => {
      //Hacer Tab Inaccesible
      $('.nav-tabs a[href="#antecedentes"]').removeClass('active').addClass('disabled');
      //Pasar al siguiente formulario
      $('.nav-tabs a[href="#antropometricos"]').removeClass('disabled').tab('show');
    });
  }

  saveDataAntropometricos( form:NgForm ){
    // Llenar los datos a enviar
    this.user = {
      inquest:{
        generals: {
          userName: null,
          age: null,
          email: null,
          completedFlag: true
        },
        alimentary:{
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          question5: null,
          question6: null,
          question7A: null,
          question7B: null,
          question7C: null,
          question7D: null,
          question8A: null,
          question8B: null,
          question8C: null,
          question8D: null,
          question9: null,
          completedFlag:true
        },
        anthropometric:{
          question1: form['value']['height'],
          question2: form['value']['weight'],
          question3: form['value']['fatPercent'],
          completedFlag:true
        },
        biochemicals:{
          completedFlag:false
        },
        clinical:{
          completedFlag:false
        },
        dietetics:{
          completedFlag: false
        }
      },
      plan:{
        alimentary:{
          sendByDietist:false
        },
        exercise:{
          sendByPlanner: false
        }
      }
    }

    this._user.updateUser( this.user, this._id ).subscribe( data => {
      //Hacer Tab Inaccesible
      $('.nav-tabs a[href="#antropometricos"]').removeClass('active').addClass('disabled');
      //Pasar al siguiente formulario
      $('.nav-tabs a[href="#bioquimicos"]').removeClass('disabled').tab('show');
    });

  }

  saveDataBioquimicos( form:NgForm ){

    if( !this.attachFile ){
      this.user = {
        inquest:{
          generals: {
            userName: null,
            age: null,
            email: null,
            completedFlag: true
          },
          alimentary:{
            question1: null,
            question2: null,
            question3: null,
            question4: null,
            question5: null,
            question6: null,
            question7A: null,
            question7B: null,
            question7C: null,
            question7D: null,
            question8A: null,
            question8B: null,
            question8C: null,
            question8D: null,
            question9: null,
            completedFlag:true
          },
          anthropometric:{
            question1: null,
            question2: null,
            question3: null,
            completedFlag:true
          },
          biochemicals:{
            question1: form['value']['bioquimicosPregunta1'],
            attached: "sin archivo",
            completedFlag: true
          },
          clinical:{
            completedFlag:false
          },
          dietetics:{
            completedFlag: false
          }
        },
        plan:{
          alimentary:{
            sendByDietist:false
          },
          exercise:{
            sendByPlanner: false
          }
        }
      }
      this._user.updateUser( this.user, this._id ).subscribe( data => {
        // Hacer Tab Inaccesible
        $('.nav-tabs a[href="#bioquimicos"]').removeClass('active').addClass('disabled');
        // Pasar al siguiente formulario
        $('.nav-tabs a[href="#clinicos"]').removeClass('disabled').tab('show');
      });
    }else{
      var splitName = this.attachFile.name.split('.');
      var fileExtension = splitName[ splitName.length -1 ];
      var fileName = `${ this._id }-${ new Date().getMilliseconds() }.${ fileExtension }`;

      this.user = {
        inquest:{
          generals: {
            userName: null,
            age: null,
            email: null,
            completedFlag: true
          },
          alimentary:{
            question1: null,
            question2: null,
            question3: null,
            question4: null,
            question5: null,
            question6: null,
            question7A: null,
            question7B: null,
            question7C: null,
            question7D: null,
            question8A: null,
            question8B: null,
            question8C: null,
            question8D: null,
            question9: null,
            completedFlag:true
          },
          anthropometric:{
            question1: null,
            question2: null,
            question3: null,
            completedFlag:true
          },
          biochemicals:{
            question1: form['value']['bioquimicosPregunta1'],
            attached: fileName,
            completedFlag: true
          },
          clinical:{
            completedFlag:false
          },
          dietetics:{
            completedFlag: false
          }
        },
        plan:{
          alimentary:{
            sendByDietist:false
          },
          exercise:{
            sendByPlanner: false
          }
        }
      }
      this._user.updateUser( this.user, this._id ).subscribe( data => {

        this._user.saveFileUser( this.attachFile, this._id, this.user.inquest.biochemicals.attached );

        // Hacer Tab Inaccesible
        $('.nav-tabs a[href="#bioquimicos"]').removeClass('active').addClass('disabled');
        // Pasar al siguiente formulario
        $('.nav-tabs a[href="#clinicos"]').removeClass('disabled').tab('show');
      });
    }

  }

  saveDataClinicos( form:NgForm ){

    this.user = {
      inquest:{
        generals: {
          userName: null,
          age: null,
          email: null,
          completedFlag: true
        },
        alimentary:{
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          question5: null,
          question6: null,
          question7A: null,
          question7B: null,
          question7C: null,
          question7D: null,
          question8A: null,
          question8B: null,
          question8C: null,
          question8D: null,
          question9: null,
          completedFlag:true
        },
        anthropometric:{
          question1: null,
          question2: null,
          question3: null,
          completedFlag:true
        },
        biochemicals:{
          question1: null,
          attached: null,
          completedFlag: true
        },
        clinical:{
          question1: form['value']['clinicosPregunta1'],
          detailQuestion1: form['value']['detailQuestion1'],
          question2: form['value']['clinicosPregunta2'],
          detailQuestion2: form['value']['detailQuestion2'],
          question3: form['value']['clinicosPregunta3'],
          detailQuestion3: form['value']['detailQuestion3'],
          question4: form['value']['clinicosPregunta4'],
          detailQuestion4: form['value']['detailQuestion4'],
          question5: form['value']['clinicosPregunta5'],
          detailQuestion5: form['value']['detailQuestion5'],
          question6: form['value']['clinicosPregunta6'],
          completedFlag:true
        },
        dietetics:{
          completedFlag: false
        }
      },
      plan:{
        alimentary:{
          sendByDietist:false
        },
        exercise:{
          sendByPlanner: false
        }
      }
    }

    this._user.updateUser( this.user, this._id ).subscribe( data => {
      //Hacer Tab Inaccesible
      $('.nav-tabs a[href="#clinicos"]').removeClass('active').addClass('disabled');
      //Pasar al siguiente formulario
      $('.nav-tabs a[href="#dieteticos"]').removeClass('disabled').tab('show');
    });

  }

  saveDataDieteticos( form:NgForm ){
    console.log( 'Formulario Posteado', form );

    this.user = {
      inquest:{
        generals: {
          userName: null,
          age: null,
          email: null,
          completedFlag: true
        },
        alimentary:{
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          question5: null,
          question6: null,
          question7A: null,
          question7B: null,
          question7C: null,
          question7D: null,
          question8A: null,
          question8B: null,
          question8C: null,
          question8D: null,
          question9: null,
          completedFlag:true
        },
        anthropometric:{
          question1: null,
          question2: null,
          question3: null,
          completedFlag:true
        },
        biochemicals:{
          completedFlag:true
        },
        clinical:{
          completedFlag:true
        },
        dietetics:{
          question1: form['value']['dieteticosPregunta1'],
          question2: form['value']['dieteticosPregunta2'],
          question3: form['value']['dieteticosPregunta3'],
          question4: form['value']['dieteticosPregunta4'],
          question5: form['value']['dieteticosPregunta5'],
          question6: form['value']['dieteticosPregunta6'],
          question7: form['value']['dieteticosPregunta7'],
          completedFlag: true
        }
      },
      plan:{
        alimentary:{
          sendByDietist:false
        },
        exercise:{
          sendByPlanner: false
        }
      }
    }

    this._user.updateUser( this.user, this._id ).subscribe( data => {
      //Hacer Tab Inaccesible
      $('.nav-tabs a[href="#dieteticos"]').removeClass('active').addClass('disabled');
      // Enviar a pantalla de confirmación
      this.router.navigate(['/youchanger', this._id ]);
    });

  }

  selectFile( file:File ){
    if( !file ){
      this.attachFile = null;
      return;
    }
    return this.attachFile = file;
  }

}
