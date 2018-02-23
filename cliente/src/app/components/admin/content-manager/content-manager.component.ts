import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styles: []
})
export class ContentManagerComponent implements OnInit {

  rows:string[] = ["1"];
  counter:number=1;

  constructor() { }

  ngOnInit() { }

  addRow(){
    this.rows.push( (this.counter + 1).toString() );
    this.counter++;
  }

  delRow(){
    this.rows.pop();
    this.counter--;
  }

  savePayments( form:NgForm ){
    console.log(form);
  }

}
