import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import { Question } from '../interfaces/question.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  url = Ruta.url;

  constructor( public _httpClient:HttpClient ) { }

  /* POST */
  sendQuestion( question:Question ){
    this.url = Ruta.url + "saveQuestion/";
    let body = JSON.stringify( question );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( res => res );
  }

  /* GET */
  getAnsweredQuestions( ){
    this.url = Ruta.url + "getAnsweredQuestions/";
    return this._httpClient.get( this.url ).map( res => res );
  }

  getNotAnsweredQuestions( ){
    this.url = Ruta.url + "getNotAnsweredQuestions/";
    return this._httpClient.get( this.url ).map( res => res );
  }

  getPageQuestions( ){
    this.url = Ruta.url + "getPageQuestions/";
    return this._httpClient.get( this.url ).map( res => res );
  }

}
