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

  public post:Post = {
    title: "title",
    subtitle: "subtitle",
    image: "/assets/img/cube.jpg",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "E",
    text: "text"
  }

  displayDate = new Date().toLocaleDateString();

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
      this.post = result['showPost'][0];
    });

 }

  ngOnInit() { }

}
