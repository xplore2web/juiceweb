import { Component, OnInit } from '@angular/core';
//import {StudentModel} from 'app/student.model';
@Component({
  selector: 'app-my-new',
  templateUrl: './my-new.component.html',
  styleUrls: ['./my-new.component.css']
})
export class MyNewComponent implements OnInit {
//    student : StudentModel = new StudentModel();
  form :any = {email:"",psw:"",pswr:""};   

  constructor() { }

  ngOnInit() {
//      this.student.regno = 123;
//      this.student.name = "Arfath";
//      this.form.email = this.student.name;
  }
  submitForm(){
//        alert(JSON.stringify(this.form));
        
    }

}
