import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ChallengeService } from '../../../services/challenge.service';
import { Changer } from '../../../interfaces/changer.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styles: []
})
export class ChallengeComponent implements OnInit {

  validChallenge;
  challenges;

  constructor( public _challenge:ChallengeService ) {
    this.validChallenge = _challenge.getValidChallenge().subscribe( showValidChallenge => {
      this.validChallenge = showValidChallenge['showValidChallenge'][0];
    });

    _challenge.getChallenges().subscribe( challenges => {
      this.challenges = challenges['showChallenges'][0];
    });

  }

  ngOnInit() { }



}
