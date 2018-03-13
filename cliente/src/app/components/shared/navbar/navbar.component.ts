import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
// import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private auth:AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit(){ }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
