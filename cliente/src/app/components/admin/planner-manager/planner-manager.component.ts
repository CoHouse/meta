import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { ChangerGuardService } from '../../../services/changer-guard.service';
declare var $:any;


@Component({
  selector: 'app-planner-manager',
  templateUrl: './planner-manager.component.html',
  styles: []
})
export class PlannerManagerComponent implements OnInit {

  public userList;
  public pendientes = 10;

  public _id;
  public plannsPending;

  constructor( public _planns:ChangerGuardService, public _activatedRoute:ActivatedRoute ) {
    this._planns.getPendingPlans().subscribe( result => {
      this.plannsPending = result;
    }, error => {
      var errorMessage = <any>error;
    });
  }

  ngOnInit() {
  }

}
