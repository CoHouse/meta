import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';
import { ChangerGuardService } from '../services/changer-guard.service';

@Injectable()
export class BlogService {

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

  public url :string;
  public profile;

  constructor( public _http:HttpClient,
               public _auth:AuthService,
               public _changer:ChangerGuardService ) {
    this.getCategories();
  }

  getCategories(){
    this.url = Ruta.url + "getBlogCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

  getPosts(){
    if ( this._auth.isAuthenticated() && this._changer.isChanger() ){
      console.log("Esto trae isChanger cuando eres changer", this._changer.isChanger());
      this.url = Ruta.url + "getChangerPosts";
      return this._http.get( this.url ).map( resChanger => resChanger );
    } else if ( this._auth.isAuthenticated() && !this._changer.isChanger() ){
      console.log("Esto trae isChanger cuando eres registrado", this._changer.isChanger());
    this.url = Ruta.url + "getRegisteredPosts";
    return this._http.get( this.url ).map( resChanger => resChanger );
    } else {
      console.log("Esto trae isChanger cuando eres visitante", this._changer.isChanger());
    this.url = Ruta.url + "getPublicPosts";
    return this._http.get( this.url ).map( resChanger => resChanger );
    }
  }

}
