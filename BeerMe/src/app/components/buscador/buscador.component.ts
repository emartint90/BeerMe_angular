import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CervezasService } from '../../cervezas.service';
import { Cerveza } from '../../models/cerveza.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  nombre: string;
  cervezas: Cerveza[];

  constructor(
    // private cervezasService: CervezasService,
    // private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() { }

  // ngOnInit(): void {
  //   this.activatedroute.params.subscribe(async params => {
  //     this.cervezas = await this.cervezasService.getByName(params.cere)
  //   })
  // }

  onClick() {
    console.log(this.nombre);



    //  el valor del input recoger con ngModel - 

    //  const cervezaNombre = document.getElementById("buscadorNombre");
    //  this.nombre = elemento.nodeValue;


    // console.log(nombreCerveza);

    //capturar el nombre de html= input.value
    //comprobaciones

    //preguntar a cervezasService
    //se devuelve una cerveza
    //represento cerveza 
  }

}


