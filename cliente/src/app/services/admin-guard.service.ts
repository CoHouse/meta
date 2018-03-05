import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor( ) { }

  getAdmins(){ }

  isInAdminList():boolean{
    return true;
  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      if( this.isInAdminList() ){
        return true;
      }else{
        return false;
      }
  }

}
