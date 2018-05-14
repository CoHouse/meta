import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { User } from '../interfaces/user.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class UserGuardService implements CanActivate {

  url = Ruta.url;
  userProfile: any;
  user:User;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Promise<boolean>{
    return new Promise( resolve => {

      this.getIfIsUser().subscribe( result => {
        if ( <boolean>result ){
          resolve( true );
        }else{
          resolve( false );
        }
      }, error => {
        var errorMessage = <any>error;
        resolve( false );
      });
    });
  }

  getIfIsUser( ){

    this.user = {
      inquest: {
        generals:{
          userName: null,
          age: null,
          email: localStorage.getItem("email"),
          completedFlag: null
        },
        background:{
          completedFlag: null
        },
        anthropometric:{
          completedFlag: null
        },
        biochemicals:{
          completedFlag: null
        },
        clinical:{
          completedFlag: null
        },
        dietetics:{
          completedFlag: null
        }
      },
      completedInquestFlag:null,
      plan:{
        alimentary:{
          sendByDietist: null
        },
        exercise:{
          sendByPlanner: null
        }
      }
    }

    this.url = Ruta.url + "getUser/";
    let body = JSON.stringify( this.user );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( flag => flag );
  }

}
