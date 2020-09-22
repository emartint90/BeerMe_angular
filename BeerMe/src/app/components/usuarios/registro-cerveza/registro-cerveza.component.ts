import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CervezasService } from 'src/app/cervezas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-cerveza',
  templateUrl: './registro-cerveza.component.html',
  styleUrls: ['./registro-cerveza.component.css']
})
export class RegistroCervezaComponent implements OnInit {

  formularioCerveza: FormGroup;

  constructor(
    private cervezasService: CervezasService,
    private router: Router
  ) {
    this.formularioCerveza = new FormGroup({
      nombre: new FormControl(),
      cervecera: new FormControl(),
      pais: new FormControl(),
      tipo: new FormControl(),
      graduacion_alcohol: new FormControl(),
      descripcion: new FormControl(),



    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    // console.log(this.formularioCerveza);

    const response = await this.cervezasService.createCerveza(this.formularioCerveza.value);
    if (response['success']) {
      alert('Su cerveza ha sido registrada con éxito');
      this.router.navigate(['/perfil']);

      // } else (response['error']) {
      //   alert ('Su cerveza no ha sido registrada')
      // }
    } else if (response['error']) {
      alert('La cerveza ya exite');
    }
  }
}


