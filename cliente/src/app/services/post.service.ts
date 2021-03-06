import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    public url :string;

  constructor( private _http:HttpClient ) { }

  getCategories(){
    this.url = Ruta.url + "getBlogCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

  getPost( _id:string ){
    this.url = Ruta.url + "getPost/" + _id;
    return this._http.get( this.url ).map( res => res );
  }


}
