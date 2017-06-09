import { Component, OnInit } from '@angular/core';
import {forgotpassModel} from 'app/_models/forgotpass.model';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
    email: string;
    forgotpassModel = new forgotpassModel();

  constructor() { }
  submitEmail() {
        alert(JSON.stringify(this.forgotpassModel));
  }

  ngOnInit() {
  }

}
