import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';
import { ChangerGuardService } from '../services/changer-guard.service';
import { Changer } from '../interfaces/changer.interface';

@Injectable()
export class BlogService {

  public url :string;
  public profile;
  public isChangerFlag:boolean;

  changer:Changer = {
    email: "",
    startDate:"",
    endDate: ""
  }

  /*
    type:
    G = blog
    I = video
    F = foro

    modifier - dato por categoría:
    A = Todas las Entradas
    V = Volúmen e Intensidad
    N = Nutrición
    E = Ejercicios
    S = Suplementos
  */

  constructor( public _http:HttpClient,
               public _auth:AuthService,
               public _changer:ChangerGuardService ) {

    this.getCategories();
    // this.isChanger();

  }

  getCategories(){
    this.url = Ruta.url + "getBlogCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

  isChanger(){
    if( this._auth.isAuthenticated() ){
        // get user profile
        if ( this._auth.userProfile ) {
        this.profile = this._auth.userProfile;
      } else {
        this._auth.getProfile( ( err, profile ) => {
          this.profile = profile;

          this.changer = {
            email: this.profile['email'],
            startDate:null,
            endDate: null
          }

          this._changer.isChanger( this.changer ).subscribe( result => {
            return this.isChangerFlag = result['message'];
          }, error => {
            var errorMessage = <any>error;
          });
        });
      }
    }else{
      return this.isChangerFlag = false;
    }
  }

  getPosts(){

    this.isChanger();

    console.log( "Bandera antes de entrar al IF: ", this.isChangerFlag );
    if ( this.isChangerFlag ){
      console.log( "Es Changer" );
    }else{
      console.log( "NO Es Changer" );
    }
  }

}
