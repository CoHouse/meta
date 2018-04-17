import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  public url :string;

  constructor( public _http:HttpClient ){ }

  sendUser( user:User ){
    this.url = Ruta.url + "saveUser/";
    let body = JSON.stringify( user );
     
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

  updateUser( user:User, _id:string ){

    this.url = Ruta.url + "updateUser/" + _id;
    console.log("El valor del id en updateuser servicio", _id)
    console.log("la url con todo y id", this.url)

    let body = JSON.stringify( user );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.put( this.url, body, { headers } ).map( res => res );
  }

}
