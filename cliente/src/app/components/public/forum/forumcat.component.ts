import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { ForumService } from '../../../services/forum.service';
import { TopicService } from '../../../services/topic.service';
import { AuthService } from '../../../services/auth.service';
import { Topic } from '../../../interfaces/topic.interface';

import { ForumComponent } from './forum.component';

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
  public categoryModifier;

  public saveSucess = false;
  public newTopicFlag = false;

  moment = new Date();

  constructor( public _activatedRoute:ActivatedRoute, public _forum:ForumService, public _topic:TopicService, public _auth:AuthService ) {
    this._activatedRoute.params.subscribe( params => {
      switch( params['category'] ) {
          case "presentations":
          this.category = "Presentaciones";
          this.categoryModifier = "P";

          this._forum.getPresentationsTopics().subscribe( result => {
            this.topics = result['showPresentationTopics'];
          }, error => {
            var errorMessage = <any>error;
          });

          break;

          case "pdoubdts":
          this.category = "Dudas con la Plataforma";
          this.categoryModifier = "D";

          this._forum.getDoubdtsPlattformTopics().subscribe( result => {
            this.topics = result['showDoubtsPlattformTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "transformations":
          this.category = "Transformaciones";
          this.categoryModifier = "T";

          this._forum.getTransformationsTopics().subscribe( result => {
            this.topics = result['showTransformationsTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          case "epdoubdts":
          this.category = "Dudas con tu programa de Ejercicio";
          this.categoryModifier = "E";

          this._forum.getExerciseProgramTopics().subscribe( result => {
            this.topics = result['showExerciseProgramTopics'];
          }, error => {
            var errorMessage = <any>error;
          });
          break;

          default:
          this.category = "Dudas con tu programa Alimenticio";
          this.categoryModifier = "A";

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
      author: "TRAER DEL PERFIL",
      text: form['value']['text'],
      category: this.categoryModifier,
      date: this.moment.toString()
    }

    this._topic.sendTopic( this.topic ).subscribe( data => {
      this.saveSucess = !this.saveSucess;
      form.reset();

      setTimeout( function(){
        var x = document.getElementById("alertSucess");
        this.saveSucess = false;
        x.remove();
      }, 2000);

      setTimeout( function(){
        this._activatedRoute.navigate(['/forum']);
      }, 100 );


    }, error => console.error( error ) );
  }

}
