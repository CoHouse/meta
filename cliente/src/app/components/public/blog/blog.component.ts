import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { ChangerGuardService } from '../../../services/changer-guard.service';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  public categories;
  public posts;
  public isChangerFlag:boolean;

  constructor( public _blog:BlogService, public _changer:ChangerGuardService ) {

    this._blog.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

  }

  ngOnInit(){

    this._changer.isChanger().subscribe( result => {
      this.isChangerFlag = result['message'];
    }, error => {
      var errorMessage = <any>error;
    });

  }

}
