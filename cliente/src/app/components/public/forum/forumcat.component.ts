import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { ForumService } from '../../../services/forum.service';
import { TopicService } from '../../../services/topic.service';
import { Topic } from '../../../interfaces/topic.interface';

@Component({
  selector: 'app-forumcat',
  templateUrl: './forumcat.component.html',
  styles: []
})
export class ForumcatComponent implements OnInit {

  topic:Topic = {
    title: "",
    author:"",
    text: "",
    category: "",
    date:""
  }

  public category;
  public topics;

  public saveSucess = false;
  public newTopicFlag = false;

  constructor( public _activatedRoute:ActivatedRoute, public _forum:ForumService, public _topic:TopicService ) {
    this._activatedRoute.params.subscribe( params => {
      switch( params['category'] ) {
          case "presentations":
          this.category = "Presentaciones";

          this._forum.getPresentationsTopics().subscribe( result => {
            this.topics = result['showPresentationTopics'];
          }, error => {
            var errorMessage = <any>error;
          });

          break;

          case "pdoubdts":
          this.category = "Dudas con la Plataforma";
          this._forum.getDoubdtsPlattformTopics().subscribe( result => {
            this.topics = result['showDoubtsPlattformTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "transformations":
          this.category = "Transformaciones";
          this._forum.getTransformationsTopics().subscribe( result => {
            this.topics = result['showTransformationsTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "epdoubdts":
          this.category = "Dudas con tu programa de Ejercicio";
          this._forum.getExerciseProgramTopics().subscribe( result => {
            this.topics = result['showExerciseProgramTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          default:
          this.category = "Dudas con tu programa Alimenticio";
          this._forum.getAlimentationProgramTopics().subscribe( result => {
            this.topics = result['showAlimentationProgramTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
      }
    });
  }

  ngOnInit() { }

  saveTopic( form:NgForm ){
    this.topic = {
      title: form['value']['title'],
      author: form['value']['author'],
      text: form['value']['text'],
      category: form['value']['category'],
      date: form['value']['date']
    }

    this._topic.sendTopic( this.topic ).subscribe( data => {
      this.saveSucess = !this.saveSucess;
      form.reset();

      setTimeout( function(){
        var x = document.getElementById("alertSucess");
        this.saveSucess = false;
        x.remove();
      }, 2000);

    }, error => console.error( error ) );
  }

}
