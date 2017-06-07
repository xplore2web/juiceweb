import {Component, OnInit} from '@angular/core';
import {kEmailRegex} from 'app/_constants/constants';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    email: string;
    password: string;
    constructor(fb: FormBuilder, public router: Router) {
        this.loginForm = fb.group({
            'email': [null, Validators.compose([<any> Validators.required, <any> Validators.pattern(kEmailRegex)])],
            'password': [null, Validators.compose([<any> Validators.required])]
        });
    }
    submitLogin() {
        this.router.navigate(['/home']);
    }
    ngOnInit() {
    }

}
