import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContrasenaComponent } from './components/routes/contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './components/routes/cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './components/routes/usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './components/routes/proyectos-admin/proyectos-admin.component';
import { LandingComponent } from './components/routes/landing/landing.component';
import { EditarUsuarioComponent } from './components/routes/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './components/routes/crear-usuario/crear-usuario.component';
import { RecuperarContraseniaComponent } from './components/routes/recuperar-contrasenia/recuperar-contrasenia.component';
import { LoginComponent } from './components/routes/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
},

{
  path: 'modificar-clave',
  component: ContrasenaComponent
},
{
  path: 'cambio-contraseña',
  component: CambiarContrasenaComponent
},
{
  path: 'usuario-admin',
  canActivate: [AuthGuard],
  component: UsuarioAdminComponent
},
{
  path: 'proyectos-admin',
  component: ProyectosAdminComponent
},
{
  path: 'recuperar-contraseña',
  component: RecuperarContraseniaComponent
},
{
  path: 'crear-usuario',
  component: CrearUsuarioComponent
},
{
  path: '',
  component: LandingComponent
},
{
  path: 'editar-usuario',
  component: EditarUsuarioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
