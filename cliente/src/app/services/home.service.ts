import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  public url :string;

  posts:any = [];

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
