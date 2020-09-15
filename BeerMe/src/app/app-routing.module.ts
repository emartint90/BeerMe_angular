import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VistaBuscadorComponent } from './components/vista-buscador/vista-buscador.component';
import { RegistroUsuariosComponent } from './components/usuarios/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cervezas/:cervezaNombre', component: VistaBuscadorComponent },
  { path: 'usuarios', component: RegistroUsuariosComponent },
  { path: 'cervezas/:cervezasPais', component: VistaBuscadorComponent },
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
