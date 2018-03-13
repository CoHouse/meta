import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
// import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangerGuardService {

  /*
  Campos en la base datos:
    email: String,
    startDate: Date,
    endDate, Date
   */

  url = Ruta.url;

  constructor( public _auth:AuthService, public _http:HttpClient ) { }

  isChanger( ){
    this.url = Ruta.url + "getChanger/";
    return this._http.get( this.url ).map( flag => flag );
  }

}
