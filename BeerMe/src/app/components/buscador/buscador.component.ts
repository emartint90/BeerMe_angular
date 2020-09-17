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
  pais: string;
  cervezas: Cerveza[];

  constructor() { }

  ngOnInit() { }


  // onClick() {
  //   console.log(this.nombre);
  //   console.log(this.pais)
  // }

}


