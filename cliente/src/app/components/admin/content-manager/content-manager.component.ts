import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styles: []
})
export class ContentManagerComponent implements OnInit {

  rows:string[] = ["1"];
  counter:number=1;
  vActivaAdmin = false;
  vActivaNutri = false;
  vActivaPlane = false;

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

  activaAdmin(){
    this.vActivaAdmin = !this.vActivaAdmin;
  }

  activaNutritionist(){
    this.vActivaNutri = !this.vActivaNutri;
  }

  activaPlanner(){
    this.vActivaPlane = !this.vActivaPlane;
  }

  adminRegister( form:NgForm ){
    console.log(form);
  }

  savePayments( form:NgForm ){
    console.log(form['value']);
  }

}
