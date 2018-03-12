import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
// import { AuthGuardService } from '../../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  //profile:any;

  constructor( private auth:AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit(){
    // if (this.auth.userProfile) {
    //   this.profile = this.auth.userProfile;
    //   console.log("Dentro del IF", this.profile);
    // } else {
    //   this.auth.getProfile((err, profile) => {
    //     this.profile = profile;
    //     console.log("Dentro del ELSE", this.profile);
    //   });
    // }
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
