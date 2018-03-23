import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styles: []
})
export class AskComponent implements OnInit {

  question:Question = {
    name: "String",
    email: "String",
    question: "String",
    text: "String",
    answer: "N"
  }

  public questions;

  saveSucess = false;

  constructor( public _question:QuestionService ) {
    this._question.getPageQuestions().subscribe( result => {
      this.questions = result['showPageQuestions'];
    }, error => {
      var errorMessage = <any>error;
    });
  }

  ngOnInit() { }

  questionRegister( form:NgForm ){
    this.question = {

      name: form['value']['name'],
      email: form['value']['email'],
      question: form['value']['question'],
      text: form['value']['text'],
      answer: "N"
    }

    this._question.sendQuestion( this.question ).subscribe( data => {
      this.saveSucess = !this.saveSucess;
      form.reset();

      setTimeout( ( )=>{
        var x = document.getElementById("alertSucess");
        this.saveSucess = false;
        x.remove();
      }, 5000);

    }, error => console.error( error ) );

  }




}
