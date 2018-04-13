import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ForumService {

  public url :string;

  constructor( public _http:HttpClient, public _auth:AuthService ) {
    this.getCategories();
  }

isChanger(){
  if( !this._auth.isAuthenticated() ){
    return false;
  }else{
    if( localStorage.length > 0 && parseInt( localStorage.getItem( 'about' ).substring( 10, 17 ) ) === 190318 ){
      return true;
    }else{
      return false;
    }
  }
}

getCategories( ){
    this.url = Ruta.url + "getForumCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

  getPresentationsTopics( ){
    this.url = Ruta.url + "getPresentationsTopics";
    return this._http.get( this.url ).map( presTopics => presTopics );
  }

  getDoubdtsPlattformTopics( ){
    this.url = Ruta.url + "getDoubdtsPlattformTopics";
    return this._http.get( this.url ).map( doubdtsPlatTopics => doubdtsPlatTopics );
  }

  getTransformationsTopics( ){
    this.url = Ruta.url + "getTransformationsTopics";
    return this._http.get( this.url ).map( transformTopics => transformTopics );
  }

  getExerciseProgramTopics( ){
    this.url = Ruta.url + "getExerciseProgramTopics";
    return this._http.get( this.url ).map( exerciseProgramTopics => exerciseProgramTopics );
  }

  getAlimentationProgramTopics( ){
    this.url = Ruta.url + "getAlimentationProgramTopics";
    return this._http.get( this.url ).map( alimentationProgramTopics => alimentationProgramTopics );
  }

}
