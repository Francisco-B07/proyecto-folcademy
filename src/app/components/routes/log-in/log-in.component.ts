import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserI } from 'src/app/interfaces/user.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
loginForm: FormGroup
  constructor( private fb: FormBuilder) { 

    
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
        // this.a.loginByEmail(USUARIO).subscribe(data => {console.log(data)})
      }
    
    }
