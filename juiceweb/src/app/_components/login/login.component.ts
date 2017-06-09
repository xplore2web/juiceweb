import {Component, OnInit} from '@angular/core';
import {kEmailRegex} from 'app/_constants/constants';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {loginModel} from 'app/_models/login.model';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    email: string;
    password: string;
    loginModel = new loginModel();
    constructor(fb: FormBuilder, public router: Router) {
        this.loginForm = fb.group({
            'email': [null, Validators.compose([<any> Validators.required, <any> Validators.pattern(kEmailRegex)])],
            'password': [null, Validators.compose([<any> Validators.required])]
        });
    }
    submitLogin() {
        alert(JSON.stringify(this.loginModel));
        
        //this.router.navigate(['/home']);
    }
    ngOnInit() {
    }

}
