import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  posts:any[] = [];

  constructor( private homeService:HomeService ) {

    this.homeService.getHomePosts().subscribe( homePosts => {

      for (let _id in homePosts){
        console.log(homePosts[_id]);
        this.posts.push(homePosts[_id]);
      }
     });

   }

  ngOnInit() { }

}
