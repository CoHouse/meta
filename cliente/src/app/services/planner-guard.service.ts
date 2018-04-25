import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class PlannerGuardService implements CanActivate {

  constructor( public _auth:AuthService ) { }

  isInPlannerList():boolean{
    return true;
  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
      if( this._auth.isAuthenticated() && this.isInPlannerList() ){
        return true;
      }else{
        return false;
      }
  }

}
