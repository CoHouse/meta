import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { VideoService } from '../../../services/video.service';
import { Changer } from '../../../interfaces/changer.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styles: []
})
export class VideosComponent implements OnInit {

  public categories;
  public videos;
  public category;

  constructor( public _video:VideoService, public _activatedRoute:ActivatedRoute ){
    this._activatedRoute.params.subscribe( params => {
      this.category = params['category'];
    });


    this._video.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    // this._blog.getPosts().subscribe( result => {
    //   this.posts = result['showPosts'];
    // }, error => {
    //   var errorMessage = <any>error;
    // });


  }

  ngOnInit() { }

}
