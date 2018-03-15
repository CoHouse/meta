import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ChangerGuardService } from '../../../services/changer-guard.service';
import { Changer } from '../../../interfaces/changer.interface';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styles: []
})
export class ContentManagerComponent implements OnInit {

  vActivaAdmin = false;
  vActivaNutri = false;
  vActivaPlane = false;
  saveSucess = false;

  changer:Changer = {
    email: "",
    startDate:"",
    endDate: ""
  }

  admin:Changer = {
    email: "",
    startDate:"",
    endDate: ""
  };

  constructor( public _changer:ChangerGuardService ) { }

  ngOnInit() { }

  adminRegister( form:NgForm ){
    this.admin = {
      email: form['value']['adminEmail'],
      startDate:form['value']['adminStartDate'],
      endDate: form['value']['adminEndDate']
    }

    this._changer.sendChanger( this.changer ).subscribe( data => {
      this.saveSucess = !this.saveSucess;
      form.reset();
    }, error => console.error( error ) );
  }

  changerRegister( form:NgForm ){
    this.changer = {
      email: form['value']['paymentEmail'],
      startDate:form['value']['paymentStartDate'],
      endDate: form['value']['paymentEndDate']
    }

    this._changer.sendChanger( this.changer ).subscribe( data => {
      this.saveSucess = !this.saveSucess;
      form.reset();

      // setTimeout( function(){
      //   var x = document.getElementById("alertSucess");
      //   this.saveSucess = false;
      //   x.remove();
      // }, 2000);

    }, error => console.error( error ) );
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

}
