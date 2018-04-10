import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import { Topic } from '../interfaces/topic.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {

  public url :string;

  constructor( public _http:HttpClient ){ }

  getTopic( _id:string ){
    this.url = Ruta.url + "getTopic/" + _id;
    return this._http.get( this.url ).map( res => res );
  }

  sendTopic( topic:Topic ){
    this.url = Ruta.url + "saveTopic/";
    let body = JSON.stringify( topic );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

  getComments( _id:string ){

  }

}
