import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Nutritionist } from '../interfaces/nutritionist.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class NutritionistGuardService implements CanActivate {

  url = Ruta.url;
  userProfile: any;
  nutritionist:Nutritionist;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
    return new Promise( resolve => {

      this.getIfIsNutritionist().subscribe( result => {
        if ( <boolean>result ){
          resolve( true );
        }else{
          resolve( false );
        }
      }, error => {
        var errorMessage = <any>error;
        resolve( false );
      });
    });
  }

  getIfIsNutritionist( ){
    this.nutritionist = {
      email : localStorage.getItem("email"),
      startDate: null,
      endDate: null
    }

    this.url = Ruta.url + "getNutritionist/";
    let body = JSON.stringify( this.nutritionist );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( flag => flag );
  }

  sendNutritionist( nutritionist:Nutritionist ){
    this.url = Ruta.url + "saveNutritionist/";
    let body = JSON.stringify( nutritionist );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

}
