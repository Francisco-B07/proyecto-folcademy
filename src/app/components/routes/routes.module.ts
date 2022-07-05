import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
})
export class RoutesModule {}
