import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { ForumService } from '../../../services/forum.service';
import { TopicService } from '../../../services/topic.service';
import { Topic } from '../../../interfaces/topic.interface';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styles: []
})
export class TopicComponent implements OnInit {

  public category;
  public _id;
  public response = false;
  public ref;

  public topic:Topic = {
    title: "title",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "P",
    text: "text"
  }

  constructor( public _activatedRoute:ActivatedRoute, public _forum:ForumService, public _topic:TopicService ) {
    this._activatedRoute.params.subscribe( params => {
      this.ref = params['category'];
      switch( this.ref ) {
          case "presentations":
          this.category = "Presentaciones";

          this._forum.getPresentationsTopics().subscribe( result => {
            this._id = params['topic'];
            this._topic.getTopic( this._id ).subscribe( result => {
              this.topic = result['showTopic'][0];
            });
          }, error => {
            var errorMessage = <any>error;
          });

          break;

          case "pdoubdts":
          this.category = "Dudas con la Plataforma";
          this._forum.getDoubdtsPlattformTopics().subscribe( result => {
            this._id = params['topic'];
            this._topic.getTopic( this._id ).subscribe( result => {
              this.topic = result['showTopic'][0];
            });
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "transformations":
          this.category = "Transformaciones";
          this._forum.getTransformationsTopics().subscribe( result => {
            this._id = params['topic'];
            this._topic.getTopic( this._id ).subscribe( result => {
              this.topic = result['showTopic'][0];
            });
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "epdoubdts":
          this.category = "Dudas con tu programa de Ejercicio";
          this._forum.getExerciseProgramTopics().subscribe( result => {
            this._id = params['topic'];
            this._topic.getTopic( this._id ).subscribe( result => {
              this.topic = result['showTopic'][0];
            });
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          default:
          this.category = "Dudas con tu programa Alimenticio";
          this._forum.getAlimentationProgramTopics().subscribe( result => {
            this._id = params['topic'];
            this._topic.getTopic( this._id ).subscribe( result => {
              this.topic = result['showTopic'][0];
            });
          }, error => {
            var errorMessage = <any>error;
          });
      }

    });
  }

  ngOnInit() { }

}
