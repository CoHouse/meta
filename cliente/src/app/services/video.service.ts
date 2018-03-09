import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  public url :string;

  constructor( private _http:HttpClient ) { }

  getCategories(){
    this.url = Ruta.url + "getVideoCategories";
    return this._http.get( this.url ).map( resV => resV );
  }

  getVideo( _id:string ){
    this.url = Ruta.url + "getVideo/" + _id;
    return this._http.get( this.url ).map( res => res );
  }

}
