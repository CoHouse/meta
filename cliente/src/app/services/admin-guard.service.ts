import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor( private _auth:AuthService ) { }

  getAdmins(){ }

  isInAdminList():boolean{
    return true;
  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      if( this._auth.isAuthenticated() && this.isInAdminList() ){
        return true;
      }else{
        return false;
      }
  }

}
