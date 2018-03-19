import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  public url :string;
  public localStorageItems = 4;

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

  constructor( public _http:HttpClient ) {

    this.getCategories();
    this.getPosts( );
  }

  getCategories(){
    this.url = Ruta.url + "getBlogCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

  getPosts(  ){

    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getPublicPosts";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getRegisteredPosts";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getChangerPosts";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }
}
