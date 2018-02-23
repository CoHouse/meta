import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
// import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private auth:AuthService ) {
    auth.handleAuthentication();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
