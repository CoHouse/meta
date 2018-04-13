import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user.interface';
declare var $:any;

@Component({
  selector: 'app-inquest',
  templateUrl: './inquest.component.html'
})
export class InquestComponent implements OnInit {

  public user:User = {
    inquest:{
      generals: {
        userName: null,
        age: null,
        email:null
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
  public profile;
  constructor( public _auth:AuthService, public _user:UserService ) { }

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
          userName: form['userName'],
          age: form['age'],
          email: this.profile.email
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
    // 2. Hacer Tab Anterior Inaccesible
      $('.nav-tabs a[href="#generales"]').removeClass('active').addClass('disabled');
    // 3. Ir al siguiente Tab
      $('.nav-tabs a[href="#alimenticios"]').removeClass('disabled').tab('show');
    }, error => console.error( error ) );
  }

  saveDataAlimenticios( form:NgForm ){
    // Guardar el formulario
    console.log( 'Formulario Posteado', form );
    //Hacer Tab Anterior Inaccesible
    $('.nav-tabs a[href="#alimenticios"]').removeClass('active').addClass('disabled');
    $('.nav-tabs a[href="#antropometricos"]').removeClass('disabled').tab('show');
  }

  saveDataAntropometricos( form:NgForm ){
    console.log( 'Formulario Posteado', form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataBioquimicos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataClinicos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataDieteticos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

}
