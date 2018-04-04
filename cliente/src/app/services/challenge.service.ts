import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {

  public url;

  constructor( public _http:HttpClient ) { }

  getValidChallenge(){
    this.url = Ruta.url + "/getValidChallenge";
    return this._http.get( this.url ).map( resV => resV );
  }

  getchallenges(){
    this.url = Ruta.url + "/getChallenges";
    return this._http.get( this.url ).map( resV => resV );
  }

  getPosts( ){
    if ( localStorage.length < 4 ){
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
