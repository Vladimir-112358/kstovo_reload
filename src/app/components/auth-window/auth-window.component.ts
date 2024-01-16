import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-auth-window',
    standalone: true,
    templateUrl: './auth-window.component.html',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
    styleUrl: './auth-window.component.scss'
})
export class AuthWindowComponent{
  myForm!: FormGroup;
  login!: string;
  password!: string;


    constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
        this.myForm = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    authorization(){
      if(this.myForm.valid){
        const {login, password} = this.myForm.value;
        if(login === 'admin' && password === '12345'){
            //this.authService.onLogin()
            this.router.navigate(["/main"])
        }
      } else
        window.alert(`login - ${this.login}, password - ${this.password}`)
  }
}
