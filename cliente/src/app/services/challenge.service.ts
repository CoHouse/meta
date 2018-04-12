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

  getChallenges(){
    this.url = Ruta.url + "/getChallenges";
    return this._http.get( this.url ).map( resV => resV );
  }

  getChallenge( _id:string ){
    this.url = Ruta.url + "getChallenge/" + _id;
    return this._http.get( this.url ).map( res => res );
  }

}
