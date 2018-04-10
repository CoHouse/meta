import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

  public url:string;

  constructor( public _httpClient:HttpClient ) { }

  /* GET */
  getComments( _id:string ){
    this.url = Ruta.url + "getComments/" + _id;
    return this._httpClient.get( this.url ).map( res => res );
  }


  /* POST */
  sendComment( comment:any ){
    this.url = Ruta.url + "saveComment/";
    let body = JSON.stringify( comment );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( res => res );
  }

}
