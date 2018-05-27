import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from '../global_route';
import { NgForm, FormsModule } from '@angular/forms';
import { Changer } from '../interfaces/changer.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangerGuardService implements CanActivate {

  url = Ruta.url;

  constructor( public _httpClient:HttpClient ) { }

  canActivate(){
    let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

    if( parseInt( subs ) === 190318 ){
      return true;
    }else{
      return false;
    }
  }

  isChanger( changer:Changer ){
    this.url = Ruta.url + "getChanger/";
    let body = JSON.stringify( changer );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( flag => flag );
  }

  getPendingPlans(){
    this.url = Ruta.url + "getPendingPlans/";
    return this._httpClient.get( this.url ).map( showPendingPlans => showPendingPlans );
  }

  getPlann( _id:string ){
    this.url = Ruta.url + "getPlann/" + _id;
    return this._httpClient.get( this.url ).map( res => res );
  }

  sendChanger( changer:Changer ){
    this.url = Ruta.url + "saveChanger/";
    let body = JSON.stringify( changer );
    let headers = new HttpHeaders( { 'Content-Type':'application/json' } );

    return this._httpClient.post( this.url, body, { headers } ).map( res => res );
  }

}
