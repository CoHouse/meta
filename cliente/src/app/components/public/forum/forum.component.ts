import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../../services/forum.service';
import { Http, Response } from "@angular/http";
import { Changer } from '../../../interfaces/changer.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  public categories;
  public category;

  constructor( public _forum:ForumService, public _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.category = params['category'];
    });

    this._forum.getCategories().subscribe( result => {
      this.categories = result['showForumCategories'];
    }, error => {
      var errorMessage = <any>error;
    });


    /*
      getLength x categoría
      getCommentsLength x categoría
      getLastTopic x categoría
    */

  }

  ngOnInit() { }

}
