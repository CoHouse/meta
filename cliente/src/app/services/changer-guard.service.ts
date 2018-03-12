import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChangerGuardService {

  /*
  Campos en la base datos:
    email: String,
    startDate: Date,
    endDate, Date
   */

 //   var today = new Date();
 // var dd = today.getDate();
 // var mm = today.getMonth()+1; //January is 0!
 // var yyyy = today.getFullYear();
 //
 // if(dd<10) {
 //     dd = '0'+dd
 // }
 //
 // if(mm<10) {
 //     mm = '0'+mm
 // }
 //
 // today = mm + '/' + dd + '/' + yyyy;
 // document.write(today);


  url = Ruta.url;
  today = new Date();

  constructor( public _auth:AuthService, public _http:HttpClient ) { }

  isChanger():boolean{

    if ( this._auth.isAuthenticated() ){
      //valida si su mail es changer y está vigente
      this.url = Ruta.url + "getChanger";
      this._http.get( this.url ).map( resB => {
        if ( resB['email'] != null && resB['endDate'] >= this.today ){
          console.log("esto trae el resultado de la llamada", resB)
          return true;
        }
      });
    }else{
      console.log("esto trae el resultado de la llamada", resB)
      return false;
    }

  }

  isChangerValid():boolean{
    return false;
  }

}
