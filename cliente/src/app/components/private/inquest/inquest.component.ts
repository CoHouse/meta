import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-inquest',
  templateUrl: './inquest.component.html'
})
export class InquestComponent implements OnInit {


  constructor() { }

  ngOnInit(){ }

  saveDataAlimenticios( form:NgForm ){
    // Guardar el formulario

    //Hacer Tab Anterior Inaccesible

    //Ir al siguiente Tab
    $('.nav-tabs a[href="#antropometricos"]').tab('show');
  }

  saveDataAntropometricos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataBioquimicos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataClinicos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }

  saveDataDieteticos( form:NgForm ){
    console.log( 'Formulario Posteado' );
    console.log( form );
    // console.log( form.alimentacionPregunta3.value );
  }



}
