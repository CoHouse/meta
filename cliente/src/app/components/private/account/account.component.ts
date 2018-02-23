import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent {

  constructor( public accService:AccountService ){
    this.getAccountData();
  }

  getAccountData(){
    this.accService.getBodyHttp().subscribe( res => { } );
  }

}
