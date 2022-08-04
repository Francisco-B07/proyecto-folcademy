import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserI } from 'src/app/interfaces/user.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  token: string = ''
  constructor(private authSvc: AuthService, private fb: FormBuilder, private route: Router, private localstorage: LocalstorageService) { 
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
    
    this.localstorage.set('email', USUARIO.email)
    console.log (this.localstorage.get('email')) 
    this.authSvc.loginByEmail(USUARIO).subscribe(data => {
      console.log('esta es la data', data.token)
      console.log('esta es la data', data.bearer)

      this.token = data.bearer + ' ' + data.token
      console.log('este es el token', this.token)
      
      if(this.token != ''){
        this.route.navigate(['/usuario-admin'])
        
      }
    })
  }

}
