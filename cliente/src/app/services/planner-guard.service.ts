import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Planner } from '../interfaces/planner.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class PlannerGuardService implements CanActivate {

  url = Ruta.url;
  userProfile: any;
  planner:Planner;

  constructor( private _auth:AuthService, public _http:HttpClient ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Promise<boolean>{
    return new Promise( resolve => {

      this.getIfIsPlanner().subscribe( result => {
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

  getIfIsPlanner( ){
    this.planner = {
      email : localStorage.getItem("email"),
      startDate: null,
      endDate: null
    }

    this.url = Ruta.url + "getPlanner/";
    let body = JSON.stringify( this.planner );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( flag => flag );
  }


  sendPlanner( planner:Planner ){
    this.url = Ruta.url + "savePlanner/";
    let body = JSON.stringify( planner );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }



}
