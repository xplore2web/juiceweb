import {Component, OnInit} from '@angular/core';
import {SignUpModel} from 'app/_models/signup.model';
@Component({
    selector: 'app-my-signup',
    templateUrl: './my-signup.component.html',
    styleUrls: ['./my-signup.component.css']
})
export class MySignupComponent implements OnInit {
    signUpModel = new SignUpModel();
    form: any = {uname: "Arfath", password: ""};
    constructor() {}

    ngOnInit() {
    }
    submitForm() {
        
        //        alert(JSON.stringify(this.form));
        alert(JSON.stringify(this.signUpModel));
    }
}
