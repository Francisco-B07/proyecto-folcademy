import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css'],
  providers: [AuthService],
})
export class RecuperarContraseniaComponent implements OnInit {
  userEmail = new FormControl('');
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private authSvc:AuthService, private router:Router) {}

    // loginForm: FormGroup
  // token: string = ''
  // constructor(private authSvc: AuthService, private fb: FormBuilder, private route: Router) { 
  //   this.loginForm = this.fb.group ({
  //           email: new FormControl('', Validators.required),
  //           password: new FormControl('', Validators.required)
  //         });
  // }


  ngOnInit(): void {}

  async onReset() {

    let mailtofrom = {
        mailFrom: "bisblick2022@gmail.com",
        mailTo: this.userEmail.value,
        subjet: "hola, esta es una prueba",
        Name:"daniel",
        jwt: ''
    }
    // let UserI = {
    //   email: this.userEmail.value,
    //   password: "1234"
    // }

    try{
      this.authSvc.resetPassword(mailtofrom).subscribe(response => {console.log('Hola')});

      // this.router.navigate(['/cambio-contraseña'])
    }
    catch(error) {console.log(error)}

  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
