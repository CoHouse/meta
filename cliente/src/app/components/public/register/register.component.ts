import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  formRegister:FormGroup;

  constructor() {
    this.formRegister = new FormGroup({
      'name':new FormControl( '', Validators.required ),
      'lastname':new FormControl( '', Validators.required ),
      'gender':new FormControl(  ),
      'email':new FormControl( '', [Validators.required, Validators.email ] ),
      'password':new FormControl( '', Validators.required ),
      'password-confirm':new FormControl( '', Validators.required ),
      'terms':new FormControl( '', Validators.required )
    })
  }

  ngOnInit() {
  }

  guardarRegistro(){
    console.log( this.formRegister.value );
    console.log( this.formRegister );
  }

}
