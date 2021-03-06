import { Component, OnInit } from '@angular/core';
import { Video } from '../../../interfaces/video.interface';
import { VideoService } from '../../../services/video.service';
// import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  public categories;
  public _id;

  public video:Video = {
    title: null,
    subtitle: null,
    image: null,
    date: null,
    author: null,
    category: null,
    text: null,
    domain:null,
    url:null
  }

  constructor( public _video:VideoService, public _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this._id = params['_id'];
    });

    this._video.getCategories().subscribe( result => {
      this.categories = result['showVideoCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._video.getVideo( this._id ).subscribe( result => {
      this.video = result['showVideo'][0];
    });

  }

  ngOnInit() { }

}
