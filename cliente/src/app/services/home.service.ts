import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  public url :string;

  constructor( public _http:HttpClient ) {
    this.getHomePosts();
    this.getHomeVideos();
  }

  getHomePosts(){
    this.url = Ruta.url + "getPostsHome";
    return this._http.get( this.url ).map( resP => resP );
  }

  getHomeVideos(){
    this.url = Ruta.url + "getVideosHome";
    return this._http.get( this.url ).map( resV => resV );
  }

}
