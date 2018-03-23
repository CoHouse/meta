import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { Changer } from '../../../interfaces/changer.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  public categories;
  public posts;
  public postsVolume;
  public postsNutrition;
  public postsExercises;
  public postsSuplements;

  public category;

  profile: any;

  constructor( public _blog:BlogService, public _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.category = params['category'];

      switch( this.category ) {
          case "volume":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-volume"]').tab('show');
            }, 50);
              break;

          case "nutrition":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-nutrition"]').tab('show');
            }, 50);
              break;

          case "exercices":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-exercices"]').tab('show');
            }, 50);
              break;

          case "suplements":
            setTimeout( ()=>{
              $('.nav-tabs a[href="#v-pills-suplements"]').tab('show');
            }, 50);
          break;

          default:
      }

    });

    this._blog.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._blog.getPosts().subscribe( result => {
      this.posts = result['showPosts'];
    }, error => {
      var errorMessage = <any>error;
    });
  }

  ngOnInit(){

    this._blog.getVolumePosts().subscribe( result => {
      this.postsVolume = result['showPosts'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._blog.getNutritionPosts().subscribe( result => {
      this.postsNutrition = result['showPosts'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._blog.getExercisesPosts().subscribe( result => {
      this.postsExercises = result['showPosts'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._blog.getSuplementsPosts().subscribe( result => {
      this.postsSuplements = result['showPosts'];
    }, error => {
      var errorMessage = <any>error;
    });

  }

}
