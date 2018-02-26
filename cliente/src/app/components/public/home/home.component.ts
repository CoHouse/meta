import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  posts:any[] = [];

  constructor( private homeService:HomeService ) { }

  ngOnInit() {
    // this.posts = this.homeService.getPosts( );
    // console.log( this.posts );
  }

}
