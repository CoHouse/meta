import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { BlogService } from '../../../services/blog.service';
import { Changer } from '../../../interfaces/changer.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styles: []
})
export class ChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }



}
