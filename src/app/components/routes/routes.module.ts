import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component';



@NgModule({
  declarations: [LoginComponent, ContrasenaComponent, CambiarContrasenaComponent, UsuarioAdminComponent, ProyectosAdminComponent],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [LoginComponent, ContrasenaComponent]
=======
import { LandingComponent } from './landing/landing.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '../shared/shared.module';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RouterModule } from '@angular/router';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    LandingComponent,
    ProyectoComponent,
    RecuperarContraseniaComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    SharedModule,
    ModalModule.forRoot(),
  ],
  exports: [
    LandingComponent,
    ProyectoComponent,
    RouterModule,
    RecuperarContraseniaComponent,
  ],
>>>>>>> b4df42132572d40b419ae58e55e92d038fade78f
})
export class RoutesModule {}
