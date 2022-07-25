import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './proyectos-admin/proyectos-admin.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LandingComponent } from './landing/landing.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    ContrasenaComponent,
    CambiarContrasenaComponent,
    UsuarioAdminComponent,
    ProyectosAdminComponent,
    RecuperarContraseniaComponent,
    ErrorNotFoundComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    SharedModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    RouterModule,
    LayoutModule,
    FormsModule,
  ],
  exports: [
    LandingComponent,
    RecuperarContraseniaComponent,
    LoginComponent,
    ContrasenaComponent,
    CambiarContrasenaComponent,
    UsuarioAdminComponent,
    ProyectosAdminComponent,
  ],
})
export class RoutesModule {}
