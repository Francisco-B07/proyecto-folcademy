import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/service/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import Swal from 'sweetalert2';
import { ModificarPassword } from 'src/app/interfaces/modificarPassword';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css'],
  providers: [AuthService],
})
export class RecuperarContraseniaComponent implements OnInit {
  usuarioForm: FormGroup;
  email: string = '';

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private localstorage: LocalstorageService
  ) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  enviarEmail() {
    const USUARIO: ModificarPassword = {
      email: this.usuarioForm.get('email')?.value,
    };
    console.log('mailllll DESDE RECUPERAR', USUARIO);
    this.localstorage.set('email', USUARIO.email);
    this._authService.enviarEmail(USUARIO).subscribe((data) => {
      console.log(data);
    });
  }
  userEmail = new FormControl('');
  modalRef?: BsModalRef;

  // loginForm: FormGroup
  // token: string = ''
  // constructor(private _authService: AuthService, private fb: FormBuilder, private route: Router) {
  //   this.loginForm = this.fb.group ({
  //           email: new FormControl('', Validators.required),
  //           password: new FormControl('', Validators.required)
  //         });
  // }

  async onReset() {
    let mailtofrom = {
      mailFrom: 'bisblick2022@gmail.com',
      mailTo: this.userEmail.value,
      subjet: 'hola, esta es una prueba',
      Name: 'daniel',
      jwt: '',
    };
    // let UserI = {
    //   email: this.userEmail.value,
    //   password: "1234"
    // }

    try {
      this._authService.resetPassword(mailtofrom).subscribe((response) => {
        console.log('Hola');
      });

      // this.router.navigate(['/cambio-contraseña'])
    } catch (error) {
      console.log(error);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
