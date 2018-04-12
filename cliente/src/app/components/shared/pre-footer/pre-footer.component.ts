import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styles: []
})
export class PreFooterComponent implements OnInit {

  constructor( public _auth:AuthService ) { }

  ngOnInit() {
  }

}
