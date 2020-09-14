import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cerveza } from '../../models/cerveza.model';
import { CervezasService } from '../../cervezas.service';


@Component({
  selector: 'app-vista-buscador',
  templateUrl: './vista-buscador.component.html',
  styleUrls: ['./vista-buscador.component.css']
})
export class VistaBuscadorComponent implements OnInit {

  nombre: string;
  cervezas: Cerveza[];

  constructor(
    private cervezasService: CervezasService,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(async params => {
      console.log("hola");
      console.log(params.cervezaNombre);
      this.cervezas = await this.cervezasService.getByName(params.cervezaNombre)
      console.log(this.cervezas);
    })


  }


}
