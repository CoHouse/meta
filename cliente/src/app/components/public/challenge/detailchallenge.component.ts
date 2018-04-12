import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../../services/challenge.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailchallenge',
  templateUrl: './detailchallenge.component.html',
  styles: []
})
export class DetailchallengeComponent implements OnInit {

  public _id;
  public challenge;

  constructor( public _activatedRoute:ActivatedRoute, public _challenge:ChallengeService ) {
    this._activatedRoute.params.subscribe( params => {
      this._id = params['_id'];
    });

    this._challenge.getChallenge( this._id ).subscribe( result => {
      this.challenge = result['showChallenge'][0];
    });
  }

  ngOnInit() { }

}
