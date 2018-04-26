import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import { Nutritionist } from '../interfaces/nutritionist.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class NutritionistGuardService {

  url = Ruta.url;

  constructor( public _http:HttpClient ) { }

  sendNutritionist( nutritionist:Nutritionist ){
    this.url = Ruta.url + "saveNutritionist/";
    let body = JSON.stringify( nutritionist );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

}
