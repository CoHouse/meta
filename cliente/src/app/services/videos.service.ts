import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {

  public url :string;
  public localStorageItems = 4;

  /*
    type:
    G = blog
    I = video
    F = foro

    modifier - dato por categoría:
    L = Legs
    S = straigtharms
    A = stretcharms
    C = chest
    O = Core
    G = gymnast
  */

  constructor( private _http:HttpClient ) {
    this.getCategories();
    this.getVideos();
  }

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
        this.url = Ruta.url + "/getRegistredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getPrivateVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getLegsVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getLegsPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getLegsRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getLegsChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getStraigtharmsVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getStraigtharmsPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getStraigtharmsRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getStraigtharmsChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getStretcharmsVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getStretcharmsPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getStretcharmsRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getStretcharmsChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getChestVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getChestPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getChestRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getChestChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getCoreVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getCorePublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getCoreRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getCoreChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

  getGymnastVideos( ){
    if ( localStorage.length < this.localStorageItems ){
      this.url = Ruta.url + "/getGymnastPublicVideos";
      return this._http.get( this.url ).map( resV => resV );
    }else{
      let subs = localStorage.getItem( 'about' ).substring( 10, 17 );

      if ( parseInt( subs ) === 160318 ){
        this.url = Ruta.url + "/getGymnastRegisteredVideos";
        return this._http.get( this.url ).map( resV => resV );
      }else{
        this.url = Ruta.url + "/getGymnastChangerVideos";
        return this._http.get( this.url ).map( resV => resV );
      }
    }
  }

}
