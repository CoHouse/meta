import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  public url :string;
  public regClass = "active";
  public ariaSelected = true;

  constructor( public _http:HttpClient ) {
    this.getCategories();
  }

  getCategories(){
    this.url = Ruta.url + "getBlogCategories";
    return this._http.get( this.url ).map( resB => resB );
  }

}
