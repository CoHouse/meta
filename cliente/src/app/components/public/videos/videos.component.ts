import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { VideosService } from '../../../services/videos.service';
import { Video } from '../../../interfaces/video.interface';
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
  public videosLegs;
  public videosStraigtharms;
  public videosStretcharms;
  public videosChest;
  public videosCore;
  public videosGymnast;

  public category;

  public video:Video = {
    title: "title",
    subtitle: "subtitle",
    image: "/assets/img/cube.jpg",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "Ejercicios",
    text: "text",
    url:"",
    domain:""
  }

  constructor( public _videos:VideosService, public _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.category = params['category'];

      switch( this.category ) {
          case "legs":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-legs"]').tab('show');
            }, 50);
              break;

          case "straigtharms":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-straigtharms"]').tab('show');
            }, 50);
              break;

          case "stretcharms":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-stretcharms"]').tab('show');
            }, 50);
              break;

          case "chest":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-chest"]').tab('show');
            }, 50);
          break;

          case "core":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-core"]').tab('show');
            }, 50);
          break;

          case "gymnast":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-gymnast"]').tab('show');
            }, 50);
          break;

          default:
      }

    });

    this._videos.getCategories().subscribe( result => {
      this.categories = result['showVideoCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getVideos().subscribe( result => {
      this.videos = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });
  }

  ngOnInit() {

    this._videos.getLegsVideos().subscribe( result => {
      this.videosLegs = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getStraigtharmsVideos().subscribe( result => {
      this.videosStraigtharms = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getStretcharmsVideos().subscribe( result => {
      this.videosStretcharms = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getChestVideos().subscribe( result => {
      this.videosChest = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getCoreVideos().subscribe( result => {
      this.videosCore = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._videos.getGymnastVideos().subscribe( result => {
      this.videosGymnast = result['showVideos'];
    }, error => {
      var errorMessage = <any>error;
    });
  }

}
