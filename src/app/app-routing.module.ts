import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/routes/login/login.component';
import { ContrasenaComponent } from './components/routes/contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './components/routes/cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './components/routes/usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './components/routes/proyectos-admin/proyectos-admin.component';

const routes: Routes = [
  {
  path: 'admin',
  component: LoginComponent,
},
{
  path: 'contraseña',
  component: ContrasenaComponent
},
{
  path: 'cambio-contraseña',
  component: CambiarContrasenaComponent
},
{
  path: 'usuario-admin',
  component: UsuarioAdminComponent
},
{
  path: 'proyectos-admin',
  component: ProyectosAdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
