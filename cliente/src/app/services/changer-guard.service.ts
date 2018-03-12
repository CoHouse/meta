import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
// import { Router, ActivatedRoute } from '@angular/router';
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

  constructor( public _auth:AuthService, public _http:HttpClient ) { }

  isChanger( ){ }

}
