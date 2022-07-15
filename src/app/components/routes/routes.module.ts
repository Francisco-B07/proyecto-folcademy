import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { LandingComponent } from './landing/landing.component';






@NgModule({
  declarations: [LoginComponent, ContrasenaComponent, CambiarContrasenaComponent, UsuarioAdminComponent, ProyectosAdminComponent,RecuperarContraseniaComponent, CrearUsuarioComponent, EditarUsuarioComponent, LandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ModalModule.forRoot()

  ],
  exports: [LoginComponent, ContrasenaComponent, RecuperarContraseniaComponent]
})
export class RoutesModule {}
