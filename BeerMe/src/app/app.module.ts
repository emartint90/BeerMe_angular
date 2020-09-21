import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VistaBuscadorComponent } from './components/vista-buscador/vista-buscador.component';
import { RegistroUsuariosComponent } from './components/usuarios/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { VistaUsuarioComponent } from './components/usuarios/vista-usuario/vista-usuario.component';
import { RegistroCervezaComponent } from './components/usuarios/registro-cerveza/registro-cerveza.component';
import { VistaPaisComponent } from './components/vista-pais/vista-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    FooterComponent,
    BuscadorComponent,
    VistaBuscadorComponent,
    RegistroUsuariosComponent,
    LoginComponent,
    VistaUsuarioComponent,
    RegistroCervezaComponent,
    VistaPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
