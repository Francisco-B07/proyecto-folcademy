import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModificarPassword } from 'src/app/interfaces/modificarPassword';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css'],
})
export class ContrasenaComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  modificarPassword() {
    const USUARIO: ModificarPassword = {
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
      newpassword: this.usuarioForm.get('newPassword')?.value,
    };
    const repetirContraseña = this.usuarioForm.get('repetirPassword')?.value;
    if (USUARIO.newpassword == repetirContraseña) {
      this._authService.modificarPassword(USUARIO).subscribe((data) => {
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: '¡La contraseña se ha guardado exitosamente!',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        this.router.navigate(['/login']);
      });
    } else {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'No repitió correctamente la nueva contraseña',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
