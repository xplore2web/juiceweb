import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchisehp',
  templateUrl: './franchisehp.component.html',
  styleUrls: ['./franchisehp.component.css']
})
export class FranchisehpComponent implements OnInit {
    juiceType:any[];
    availability:any[];

  constructor() { }

  ngOnInit() {
      this.juiceType=[{type:"shakes"},{type:"vegy"},{type:"fruit"},{type:"special"}];
      this.availability=[{avail:"seasonal"},{avail:"unseasonal"}];
  }

}
