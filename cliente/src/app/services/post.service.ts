import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor( private http:HttpClient ) { }

  getPost( $key:string ){
    let url = Ruta.url + "getPost";
    return this.http.get( url ).map( res => {
      console.log(res);
    } );
  }

}

export interface Post{
  title: String,
  subtitle: String,
  image: String,
  date: String,
  author: String,
  category: String,
  visibleLevel: String,
  text: String
}
