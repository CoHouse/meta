import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Ruta } from '../global_route';

@Injectable()
export class HomeService {

  respuesta: any;

  constructor( public httpObj:HttpClient ) { }

  getPosts(){
    let url = Ruta.url + "getPosts";
    return this.httpObj.get( url ).map( res => {
      this.respuesta = res;
      return this.respuesta;
      console.log(this.respuesta);
    });
  }

}

export interface Post{
  id:number;
  title:string;
  subtitle:string;
  image:string;
  date:string;
  author:string;
  visibleLevel:string;
}
