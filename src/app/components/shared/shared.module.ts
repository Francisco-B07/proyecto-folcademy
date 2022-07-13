import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProyectoComponent } from './card-proyecto/card-proyecto.component';
import { RouterModule } from '@angular/router';
import { CardSuscripcionComponent } from './card-suscripcion/card-suscripcion.component';

@NgModule({
  declarations: [CardProyectoComponent, CardSuscripcionComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardProyectoComponent, CardSuscripcionComponent],
})
export class SharedModule {}
