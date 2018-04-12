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
  successUsers;

  constructor( public _challenge:ChallengeService ) {

    this.validChallenge = _challenge.getValidChallenge().subscribe( challenge => {

      this.validChallenge = challenge;
      this.successUsers = this.validChallenge.challenge.userSucess;

      console.log("Usuarios que lo terminaron", this.successUsers);
      console.log("Usuarios que lo terminaron length", this.successUsers.length);

    });

    _challenge.getChallenges().subscribe( challenges => {
      this.challenges = challenges['showChallenges'];
    });

  }

  ngOnInit() { }

}
