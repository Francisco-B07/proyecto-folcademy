import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/routes/landing/landing.component';
import { ProyectoComponent } from './components/routes/proyecto/proyecto.component';
import { RecuperarContraseniaComponent } from './components/routes/recuperar-contrasenia/recuperar-contrasenia.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'Proyecto',
    component: ProyectoComponent,
  },
  {
    path: 'recuperarContrasenia',
    component: RecuperarContraseniaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
