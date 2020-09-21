import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuarios: FormGroup;

  constructor(

    private UsuariosService: UsuariosService,
    private router: Router,

  ) {

    this.loginUsuarios = new FormGroup({
      email: new FormControl(),
      password: new FormControl()

    });

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.UsuariosService.login(this.loginUsuarios.value);
    if (response['success']) {
      localStorage.setItem('token', response['token']);
      // localStorage.setItem('idUsuario', response['idUser']);
      alert('Welcome to BeerMe Comunity');
      this.router.navigate(['/perfil']);
    }
  }

}
