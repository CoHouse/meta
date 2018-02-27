import { Component, OnInit } from '@angular/core';
import { Post } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  private post:Post = {
    title: "",
    subtitle: "",
    image: "",
    date: "",
    author: "",
    category: "",
    visibleLevel: "",
    text: ""
  }

  constructor( private postService:Post ) {  }

  ngOnInit() {
  }

}
