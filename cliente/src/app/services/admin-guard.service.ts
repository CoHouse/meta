import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import { Admin } from '../interfaces/admin.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminGuardService implements CanActivate {

  url = Ruta.url;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      if( this._auth.isAuthenticated() && this.isInAdminList() ){
        return true;
      }else{
        return false;
      }
  }

  isInAdminList( admin?:Admin ):boolean{
    if( this.isAdmin( admin ) ){
      return true;
    }else{
      return false;
    }
  }

  isAdmin( admin:Admin ){
    this.url = Ruta.url + "getAdmin/";
    let body = JSON.stringify( admin );
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
