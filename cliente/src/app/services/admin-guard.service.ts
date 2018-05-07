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
  flag = false;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
    console.log("En isAuthenticated: ", this._auth.isAuthenticated());
    console.log("En isInAdminList: ", this.isInAdminList());

      if( this._auth.isAuthenticated() && this.isInAdminList() ){
        console.log("pasó el admin guard en true");
        return true;
      }else{
        console.log("pasó el admin guard en false");
        return false;
      }
  }

  isInAdminList( admin?:Admin ):boolean{

    this._auth.getProfile( ( err, profile ) => {
      let userProfile = profile;

      admin = {
        email: userProfile['email'],
        startDate:null,
        endDate: null
      }

      if( this.isAdmin( admin ) ){
        console.log("Esto vale this.flag en TRUE", this.flag);
        this.flag = true;
      }else{
        console.log("Esto vale this.flag en FALSE", this.flag);
        this.flag = false;
      }

  });

  console.log("esto vale this.flag justo antes de retornar: ", this.flag);
  return this.flag;

  }

  isAdmin( admin:Admin ):any{
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
