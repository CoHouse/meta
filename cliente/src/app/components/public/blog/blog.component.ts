import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { ChangerGuardService } from '../../../services/changer-guard.service';
import { AuthService } from '../../../services/auth.service';
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

  profile: any;

  constructor( public _blog:BlogService, public _changer:ChangerGuardService, public auth:AuthService ) {

    this._blog.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    // get user profile
      if ( this.auth.userProfile ) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile( ( err, profile ) => {
          this.profile = profile;

          this._changer.isChanger( this.profile.email ).subscribe( result => {
            this.isChangerFlag = result['message'];
          }, error => {
            var errorMessage = <any>error;
          });
        });
      }

  }

  ngOnInit(){ }

}
