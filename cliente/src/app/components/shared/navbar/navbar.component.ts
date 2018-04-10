import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
// import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( public auth:AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit(){ }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

  isChanger(){
    if( localStorage.length > 0 && parseInt( localStorage.getItem( 'about' ).substring( 10, 17 ) ) === 190318 ){
      return true;
    } else {
      return false;
    }
  }

}
