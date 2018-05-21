import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-manager',
  templateUrl: './planner-manager.component.html',
  styles: []
})
export class PlannerManagerComponent implements OnInit {

  public userList;
  public pendientes = 10;

  constructor() { }

  ngOnInit() {
  }

}
