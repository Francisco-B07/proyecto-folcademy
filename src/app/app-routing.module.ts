import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/routes/login/login.component';
import { ContrasenaComponent } from './components/routes/contrasena/contrasena.component';
import { CambiarContrasenaComponent } from './components/routes/cambiar-contrasena/cambiar-contrasena.component';
import { UsuarioAdminComponent } from './components/routes/usuario-admin/usuario-admin.component';
import { ProyectosAdminComponent } from './components/routes/proyectos-admin/proyectos-admin.component';
import { RecuperarContraseniaComponent } from './components/routes/recuperar-contrasenia/recuperar-contrasenia.component';
import { CrearUsuarioComponent } from './components/routes/crear-usuario/crear-usuario.component';
import { LandingComponent } from './components/routes/landing/landing.component';


const routes: Routes = [
  {
  path: '',
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
  path: 'landing',
  component: LandingComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
