import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VistaBuscadorComponent } from './components/vista-buscador/vista-buscador.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cervezas/:cervezaNombre', component: VistaBuscadorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
