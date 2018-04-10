import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../../services/forum.service';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  public categories;
  public category;

  public numberPresentations;
  public numberPlattaformDoubts;
  public numberTransformations;
  public numberExercisesDoubts;
  public numberAlimentationDoubts;

  public topicsPresentations;
  public topicsDubtsPlattform;
  public topicsTransformations;
  public topicsExercise;
  public topicsAlimentation;

  constructor( public _forum:ForumService, public _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.category = params['category'];
    });

    this._forum.getCategories().subscribe( result => {
      this.categories = result['showForumCategories'];
    }, error => {
      var errorMessage = <any>error;
    });

  }

  ngOnInit() {
    this._forum.getPresentationsTopics().subscribe( result => {
      this.numberPresentations = result['showPresentationTopics'].length;
      this.topicsPresentations = result['showPresentationTopics'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._forum.getDoubdtsPlattformTopics().subscribe( result => {
      this.numberPlattaformDoubts = result['showDoubtsPlattformTopics'].length;
      this.topicsDubtsPlattform = result['showDoubtsPlattformTopics'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._forum.getTransformationsTopics().subscribe( result => {
      this.numberTransformations = result['showTransformationsTopics'].length;
      this.topicsTransformations = result['showTransformationsTopics'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._forum.getExerciseProgramTopics().subscribe( result => {
      this.numberExercisesDoubts = result['showExerciseProgramTopics'].length;
      this.topicsExercise = result['showExerciseProgramTopics'];
    }, error => {
      var errorMessage = <any>error;
    });

    this._forum.getAlimentationProgramTopics().subscribe( result => {
      this.numberAlimentationDoubts = result['showAlimentationProgramTopics'].length;
      this.topicsAlimentation = result['showAlimentationProgramTopics'];
    }, error => {
      var errorMessage = <any>error;
    });
  }

}
