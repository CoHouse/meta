import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  private blogPost:Post = {
    title: "",
    subtitle: "",
    image: "",
    date: "",
    author: "",
    category: "",
    visibleLevel: "",
    text: ""
  }

  constructor( ) {  }

  ngOnInit() {
  }

}
