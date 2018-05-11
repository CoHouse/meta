import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Admin } from '../interfaces/admin.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminGuardService implements CanActivate {

  url = Ruta.url;
  userProfile: any;
  admin:Admin;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
    return new Promise( resolve => {

      this.getIfIsAdmin().subscribe( result => {
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

  getIfIsAdmin( ){
    this.admin = {
      email : localStorage.getItem("email"),
      startDate: null,
      endDate: null
    }

    this.url = Ruta.url + "getAdmin/";
    let body = JSON.stringify( this.admin );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( flag => flag );
  }

  sendAdmin( admin:Admin ){
    this.url = Ruta.url + "saveAdmin/";
    let body = JSON.stringify( admin );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }

}
