import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';
import { ChangerGuardService } from '../services/changer-guard.service';

@Injectable()
export class BlogService {

  public url :string;
  public regClass = "active";
  public ariaSelected = true;

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

    if ( this._auth.isAuthenticated() || this._changer.isChanger() ){
      // ver entradas exclusivas, de registrado y públicas
      this.url = Ruta.url + "getChangerPosts";
      return this._http.get( this.url ).map( resChanger => resChanger );
    } else if ( this._auth.isAuthenticated() ){
      // ver entradas de usuario registrado
    this.url = Ruta.url + "getRegistredPosts";
    return this._http.get( this.url ).map( resChanger => resChanger );
    } else {
      // ver entradas públicas
    this.url = Ruta.url + "getPublicPosts";
    return this._http.get( this.url ).map( resChanger => resChanger );
    }

  }

}
