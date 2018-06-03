import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/post.interface';
import { ChangerGuardService } from '../../../services/changer-guard.service';
import { PostService } from '../../../services/post.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pmdetail',
  templateUrl: './pmdetail.component.html',
  styles: []
})
export class PmdetailComponent implements OnInit {

  public _id;
  public plann;

  constructor( public _activatedRoute:ActivatedRoute, public _plann:ChangerGuardService ) {
    this._activatedRoute.params.subscribe( params => {
      this._id = params['_id'];
    });

    this._plann.getPlann( this._id ).subscribe( result => {
      this.plann = result;
    });

  }

  ngOnInit() {
  }

  createPlann(){
    /* Comment */
  }

}
