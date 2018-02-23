import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styles: []
})
export class TrainingComponent implements OnInit {

  constructor( private auth:AuthService ) { }

  ngOnInit() {
  }

}
