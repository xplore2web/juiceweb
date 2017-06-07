import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    getData : string;
    postDatar: string;
//  constructor(private _httpService: HttpTestService) { }
//
//    onGetRequest(){
//        this._httpService.getCurrentTime().subscribe(
//            data => this.getData = JSON.stringify(data),
//            error => alert("Error: "+error),
//            () => alert("finished")
//            );
//        
//    }
    
  ngOnInit() {
  }

}
