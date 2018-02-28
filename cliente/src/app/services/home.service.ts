import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../global_route';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  posts:any = [];

  constructor( public httpObj:HttpClient ) { }

  getHomePosts(){
    let url = Ruta.url + "getPostsHome";
    return this.httpObj.get( url ).map( res => res );
  }

  // getHomeVideos(){
  //   let url = Ruta.url + "getVideosHome";
  //   return this.httpObj.get( url ).map( res => {
  //     console.log(res);
  //   } );
  // }

}
