import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { ChangerGuardService } from '../../../services/changer-guard.service';
import { AdminGuardService } from '../../../services/admin-guard.service';
import { PlannerGuardService } from '../../../services/planner-guard.service';
import { NutritionistGuardService } from '../../../services/nutritionist-guard.service';

import { Changer } from '../../../interfaces/changer.interface';
import { Admin } from '../../../interfaces/admin.interface';
import { Planner } from '../../../interfaces/planner.interface';
import { Nutritionist } from '../../../interfaces/nutritionist.interface';
// import * as swal from 'sweetalert';
import 'sweetalert';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styles: []
})

export class ContentManagerComponent implements OnInit {

  vActivaAdmin = false;
  vActivaNutri = false;
  vActivaPlane = false;
  today = new Date();

  changer:Changer = {
    email: "",
    user:"",
    startDate:"",
    endDate: "",
    pAlimenticio: "",
    pEjercicio: ""
  }

  admin:Admin = {
    email: "",
    startDate:"",
    endDate: ""
  };

  planner:Planner = {
    email: "",
    startDate:"",
    endDate: ""
  };

  nutritionist:Nutritionist = {
    email: "",
    startDate:"",
    endDate: ""
  };

  constructor(
    public _changer:ChangerGuardService,
    public _admin:AdminGuardService,
    public _planner:PlannerGuardService,
    public _nutritionist:NutritionistGuardService
   ) { }

  ngOnInit() { }

  changerRegister( form:NgForm ){

    let splitEmail = form['value']['paymentEmail'].split('@');
    let userSp = splitEmail[0];

    let endDate = new Date(form['value']['paymentEndDate']).toString();

    this.changer = {
      email: form['value']['paymentEmail'],
      user: userSp,
      startDate: this.today.toString(),
      endDate: endDate,
      pAlimenticio: form['value']['pAlimenticio'],
      pEjercicio: form['value']['pEjercicio']
    }

    this._changer.sendChanger( this.changer ).subscribe( data => {
      swal("Registro Exitoso", "Changer dado de alta correctamente", "success");
      form.reset();
      this.activaAdmin();
    }, error => console.error( error ) );
  }

  adminRegister( form:NgForm ){

    this.admin = {
      email: form['value']['email'],
      startDate:form['value']['startDate'],
      endDate: form['value']['endDate']
    }

    this._admin.sendAdmin( this.admin ).subscribe( data => {
      swal("Registro Exitoso", "Administrador dado de alta correctamente", "success");
      form.reset();
      this.activaAdmin();
    }, error => console.error( error ) );
  }

  plannerRegister( form:NgForm ){
    this.planner = {
      email: form['value']['email'],
      startDate:form['value']['startDate'],
      endDate: form['value']['endDate']
    }

    this._planner.sendPlanner( this.planner ).subscribe( data => {
      swal("Registro Exitoso", "Planner dado de alta correctamente", "success");
      form.reset();
      this.activaPlanner();
    }, error => console.error( error ) );
  }

  nutritionistRegister( form:NgForm ){

    console.log(form);

    this.nutritionist = {
      email: form['value']['email'],
      startDate:form['value']['startDate'],
      endDate: form['value']['endDate']
    }

    this._nutritionist.sendNutritionist( this.nutritionist ).subscribe( data => {
      swal("Registro Exitoso", "Nutricionista dado de alta correctamente", "success");
      form.reset();
      this.activaNutritionist();
    }, error => console.error( error ) );
  }

  activaAdmin(){
    this.vActivaAdmin = !this.vActivaAdmin;
  }

  activaPlanner(){
    this.vActivaPlane = !this.vActivaPlane;
  }

  activaNutritionist(){
    this.vActivaNutri = !this.vActivaNutri;
  }

}
