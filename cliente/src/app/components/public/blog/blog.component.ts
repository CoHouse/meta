import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { ChangerGuardService } from '../../../services/changer-guard.service';
import { AuthService } from '../../../services/auth.service';
import { Changer } from '../../../interfaces/changer.interface';

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

  changer:Changer = {
    email: "",
    startDate:"",
    endDate: ""
  }

  constructor( public _blog:BlogService, public _changer:ChangerGuardService, public auth:AuthService ) {

    this._blog.getCategories().subscribe( result => {
      this.categories = result['showBlogCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

    // if( auth.isAuthenticated() ){
    //     // get user profile
    //     if ( this.auth.userProfile ) {
    //     this.profile = this.auth.userProfile;
    //   } else {
    //     this.auth.getProfile( ( err, profile ) => {
    //       this.profile = profile;
    //
    //       this.changer = {
    //         email: this.profile['email'],
    //         startDate:null,
    //         endDate: null
    //       }
    //
    //       this._changer.isChanger( this.changer ).subscribe( result => {
    //         this.isChangerFlag = result['message'];
    //       }, error => {
    //         var errorMessage = <any>error;
    //       });
    //     });
    //   }
    // }else{
    //   this.isChangerFlag = false;
    // }

  }

  ngOnInit(){

  setTimeout(this._blog.getPosts(), 1000);

  }

}
