import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

/** Validate user **/
import { Changer } from '..//interfaces/changer.interface';
import { ChangerGuardService } from './changer-guard.service';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '3IjzvyitIo8ItXYSaP5lv7C7jRGLYBGo',
    domain: 'personalplann.auth0.com',
    responseType: 'token id_token',
    audience: 'https://personalplann.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    // redirectUri: 'http://mbchanger.com/',
    scope: 'openid profile email'
  });

  userProfile: any;

  changer:Changer = {
    email: "",
    user: "",
    startDate:"",
    endDate: "",
    pAlimentary: "",
    pExercise: ""
  }

  constructor( public router: Router, public _changer:ChangerGuardService ) {
    if ( !this.isAuthenticated() ){
      this.logout();
    }
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.getProfile( ( err, profile ) => {
      this.userProfile = profile;

      this.changer = {
        email: this.userProfile['email'],
        user: null,
        startDate:null,
        endDate: null,
        pAlimentary: null,
        pExercise: null
      }

      this._changer.isChanger( this.changer ).subscribe( result => {
        if( !result ){
          localStorage.setItem('about', "2018 MBC / 160318");
          localStorage.setItem('email', this.changer['email'] );
        }else{
          localStorage.setItem('about', "2018 MBC / 190318");
          localStorage.setItem('email', this.changer['email'] );
        }
      }, error => {
        var errorMessage = <any>error;
      });
    });

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('about');
    localStorage.removeItem('email');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse( localStorage.getItem('expires_at') );
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo( accessToken, ( err, profile ) => {
      if ( profile ) {
        self.userProfile = profile;
      }
      cb( err, profile );
    });
  }

}
