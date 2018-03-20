import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { ChangerGuardService } from '../../../services/changer-guard.service';
import { AuthService } from '../../../services/auth.service';
import { Changer } from '../../../interfaces/changer.interface';

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

  profile: any;

  constructor( public _blog:BlogService ) {

    this._blog.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });


    this._blog.getPosts().subscribe( result => {
      this.posts = result['showPosts'];
      console.log( "esto trae this.posts dentro del ngoninit", this.posts );
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
