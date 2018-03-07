import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public posts;
  public videos;

  constructor(
    private _homeService:HomeService,
    private _activatedRoute:ActivatedRoute ) {

    this._homeService.getHomePosts().subscribe( result => {
      this.posts = result['homePosts'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._homeService.getHomeVideos().subscribe( result => {
      this.videos = result['homeVideos'];
    }, error => {
      var errorMessage = <any>error;
    } );

   }

  ngOnInit() { }

}
