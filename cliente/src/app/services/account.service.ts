import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Ruta } from '../global_route';

@Injectable()
export class AccountService {

  respuesta:any={ };

  constructor( public httpObj:HttpClient ) { }

  getBodyHttp(){
    let url = Ruta.url + "prueba";
    return this.httpObj.get( url ).map( (res) => {
      this.respuesta = res;
      return this.respuesta;
    });
  }

}
