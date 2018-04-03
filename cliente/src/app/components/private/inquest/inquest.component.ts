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

  saveDataGenerales( form:NgForm ){
    // Guardar el formulario
    console.log( 'Formulario Posteado', form );
    //Hacer Tab Anterior Inaccesible
    $('.nav-tabs a[href="#generales"]').removeClass('active').addClass('disabled');
    $('.nav-tabs a[href="#alimenticios"]').removeClass('disabled').tab('show');
  }



  changerRegister( form:NgForm ){
    this.changer = {
      email: form['value']['paymentEmail'],
      startDate: form['value']['paymentStartDate'],
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


  saveDataAlimenticios( form:NgForm ){
    // Guardar el formulario
    console.log( 'Formulario Posteado', form );
    //Hacer Tab Anterior Inaccesible

    //Ir al siguiente Tab
    $('.nav-tabs a[href="#antropometricos"]').tab('show');
  }

  saveDataAntropometricos( form:NgForm ){
    console.log( 'Formulario Posteado', form );
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
