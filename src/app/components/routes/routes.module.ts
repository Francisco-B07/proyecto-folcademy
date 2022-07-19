import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    ContrasenaComponent,
    CambiarContrasenaComponent,
    UsuarioAdminComponent,
    ProyectosAdminComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LoginComponent, ContrasenaComponent],
})
export class RoutesModule {}
