import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LandingComponent } from './landing/landing.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

@NgModule({
  declarations: [
    LoginComponent,
    ContrasenaComponent,
    CambiarContrasenaComponent,
    UsuarioAdminComponent,
    ProyectosAdminComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    SharedModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    RouterModule,
  ],
  exports: [
    LandingComponent,
    ProyectoComponent,
    RecuperarContraseniaComponent,
    LoginComponent,
    ContrasenaComponent,
  ],
})
export class RoutesModule {}
