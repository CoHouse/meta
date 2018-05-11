import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { ForumService } from '../../../services/forum.service';
import { TopicService } from '../../../services/topic.service';
import { CommentService } from '../../../services/comment.service';
import { Topic } from '../../../interfaces/topic.interface';
import 'sweetalert';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styles: []
})
export class TopicComponent implements OnInit {

  public category;
  public idTopic;
  public _id;
  public ref;
  public comments;
  public commentsSize;

  public response = false;

  public topic:Topic = {
    title: "title",
    date: "05/03/18 13:00",
    author: "MBC Crew",
    category: "P",
    text: "text"
  }

  public comment:any = {
    idTopic:null,
    text: null
  }

  constructor( public _activatedRoute:ActivatedRoute, public _forum:ForumService, public _topic:TopicService, public _comment:CommentService, public router:Router ) {
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

            this._topic.getComments( this._id ).subscribe( res => {
              this.comments = res['showComments'];
              this.commentsSize = res['showComments'].length;
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

            this._topic.getComments( this._id ).subscribe( res => {
              this.comments = res['showComments'];
              this.commentsSize = res['showComments'].length;
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

            this._topic.getComments( this._id ).subscribe( res => {
              this.comments = res['showComments'];
              this.commentsSize = res['showComments'].length;
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

            this._topic.getComments( this._id ).subscribe( res => {
              this.comments = res['showComments'];
              this.commentsSize = res['showComments'].length;
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

            this._topic.getComments( this._id ).subscribe( res => {
              this.comments = res['showComments'];
              this.commentsSize = res['showComments'].length;
            });

          }, error => {
            var errorMessage = <any>error;
          });
      }

    });
  }

  ngOnInit() { }

  commentRegister( form:NgForm ){
    this.comment = {
      idTopic: this._id,
      text: form['value']['text'],
      date: new Date()
    }

    this._comment.sendComment( this.comment ).subscribe( data => {
      this.response = !this.response
      form.reset();
      swal("Registro Exitoso", "Comentario Guardado Correctamente", "success");
      console.log(this.router.url);
      this.router.navigateByUrl(this.router.url);
    }, error => console.error( error ) );
  }


}
