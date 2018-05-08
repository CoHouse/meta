import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import { Changer } from '../interfaces/changer.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangerGuardService {

  url = Ruta.url;

  constructor( public _httpClient:HttpClient ) { }

  isChanger( changer:Changer ){
    this.url = Ruta.url + "getChanger/";
    let body = JSON.stringify( changer );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( flag => flag );
  }

  sendChanger( changer:Changer ){
    this.url = Ruta.url + "saveChanger/";
    let body = JSON.stringify( changer );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( res => res );
  }

}
