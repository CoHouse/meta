import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Planner } from '../interfaces/planner.interface';

@Injectable()
export class PlannerGuardService implements CanActivate {

    url = Ruta.url;

  constructor( public _auth:AuthService, public _http:HttpClient ) { }

  isInPlannerList( planner:Planner ){
    let variable:boolean;
    this.url = Ruta.url + "getPlanner/";
    let body = JSON.stringify( planner );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( flag => flag );

  }


  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      // if( this._auth.isAuthenticated() && this.isInPlannerList( ) ){
      //   return true;
      // }else{
      //   return false;
      // }
      return true;
  }

  sendPlanner( planner:Planner ){
    this.url = Ruta.url + "savePlanner/";
    let body = JSON.stringify( planner );

    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._http.post( this.url, body, { headers } ).map( res => res );
  }



}
