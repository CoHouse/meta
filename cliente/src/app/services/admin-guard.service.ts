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
  flagGen:boolean;
  userProfile: any;
  admin:Admin;

  constructor( private _auth:AuthService, public _http:HttpClient ) {
    this.flagGen = this.isAdmin();
  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      if( this.flagGen ){
        console.log("esto trae this.isAdmin dentro del if: ", this.isAdmin() );
        return true;
      }else{
        console.log("Entró al else.");
        return false;
      }
  }


  isAdmin(){
    this.getIfIsAdmin().subscribe( result => {

      console.log("ya entró a ejecutar el getIfIsAdmin desde isAdmin");

      console.log("esto vale result dentro del result: ", result);
    flag = <boolean>result;
    }, error => {
      var errorMessage = <any>error;
    });

    console.log("esto vale flag justo antes de retornar: ", flag);
    return flag;
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
