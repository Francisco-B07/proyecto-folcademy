import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserI } from 'src/app/interfaces/user.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private authSvc: AuthService, private fb: FormBuilder) { 
    this.loginForm = this.fb.group ({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
          });
  }

  ngOnInit(): void {
  }

  onLogin() { 
    const USUARIO: UserI = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authSvc.loginByEmail(USUARIO).subscribe(data => {console.log(data)})
  }

}
