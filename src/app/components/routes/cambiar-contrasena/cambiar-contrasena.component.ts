import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModificarPassword } from 'src/app/interfaces/modificarPassword';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css'],
})
export class CambiarContrasenaComponent implements OnInit {
  usuarioForm: FormGroup;
  email: string = '';
  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private localstorage: LocalstorageService
  ) {
    this.usuarioForm = this.fb.group({
      newPassword: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  cambiarPassword() {
    this.email = this.localstorage.get('email');
    const USUARIO: ModificarPassword = {
      email: this.email,
      newpassword: this.usuarioForm.get('newPassword')?.value,
    };
    const repetirContraseña = this.usuarioForm.get('repetirPassword')?.value;
    if (USUARIO.newpassword == repetirContraseña) {
      this._authService.cambiarPassword(USUARIO).subscribe((data) => {
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
