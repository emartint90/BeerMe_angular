import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../../usuarios.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UtilitiesService } from '../../../utilities.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  formularioUsuarios: FormGroup;


  constructor(
    private usuariosService: UsuariosService,
    private utilitiesService: UtilitiesService,
    private router: Router
  ) {
    this.formularioUsuarios = new FormGroup({

      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),

      fecha_nacimiento: new FormControl('',
        [
          this.birthValidator.bind(this)
        ]),

      password: new FormControl('', [
        Validators.pattern(/^([a-zA-Z0-9@*#]{8,15})$/)
      ]),

      repeat_password: new FormControl(),

      //función para validar que ambas contraseñas son iguales
    }, [this.passwordValidator]);

  }

  ngOnInit(): void {

  }

  async onSubmit() {
    console.log(this.formularioUsuarios);
    //se ven los datos :)!
    const response = await this.usuariosService.signUp(this.formularioUsuarios.value);
    if (response['success']) {
      this.router.navigate(['usuarios/login']);

    } else {
      // this.errores = response;
    }
  }

  //función para validar que ambas contraseñas son iguales

  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const repeat_passwordValue = form.controls.repeat_password.value;
    if (passwordValue === repeat_passwordValue) {
      return null;
    } else {
      return { passwordValidator: 'Ambos campos deben ser iguales ¡prueba otra vez!' };
    }
  }

  //función para validar la fecha de nacimiento

  birthValidator(control) {
    if (control.value == '') {
      return ({ birthValidator: 'Para registrarte tienes que ser mayor de edad. ¡Te esperamos proximamente!' })
    }
    const value = this.utilitiesService.edad(control.value);

    if (value >= 18) {
      return null;
    } else {
      return ({ birthValidator: 'Para registrarte tienes que ser mayor de edad. ¡Te esperamos proximamente!' })
    }
  }


}
