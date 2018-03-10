import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangerGuardService {

  url = Ruta.url;
  today = new Date();

  constructor( public _auth:AuthService, public _http:HttpClient ) { }

  isChanger():boolean{

    if ( this._auth.isAuthenticated() ){
      //valida si su mail es changer y está vigente

      this.url = Ruta.url + "getChanger";
      this._http.get( this.url ).map( resB => resB );

      // sacar los datos del changer y ver si su mail está en la base y está vigente

      return true;
    }else{
      return false;
    }

  }

  isChangerValid():boolean{
    return false;
  }

}
