import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  public url :string;
  public localStorageItems = 4;

  constructor( private _http:HttpClient ) { }

  getCategories(){
    this.url = Ruta.url + "getVideoCategories";
    return this._http.get( this.url ).map( resV => resV );
  }

  getVideos(){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getVideo( _id:string ){
    this.url = Ruta.url + "getVideo/" + _id;
    return this._http.get( this.url ).map( res => res );
  }

}
