import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { PostService } from '../../../services/post.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  public categories;
  public _id;
  public blogPost:Post = {
    _id:"",
    title: "title",
    subtitle: "subtitle",
    image: "/assets/img/f.jpg",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "Ejercicios",
    text: "text"
  }

  // constructor( private _postService:PostService, private _activatedRoute:ActivatedRoute ){  }
  constructor( public _post:PostService, public _activatedRoute:ActivatedRoute ){

  this._activatedRoute.params.subscribe( params => {
    this._id = params['_id'];
  });

    this._post.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._post.getPost( this._id ).subscribe( result => {
      this.blogPost = result['showPost'];
    });

 }

  ngOnInit() {
    this._post.getPost( this._id ).subscribe( result => {
      this.blogPost = result['showPost'];
    });


  }

}
