import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cerveza } from '../../models/cerveza.model';
import { CervezasService } from '../../cervezas.service';
import { UtilitiesService } from 'src/app/utilities.service';


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
    private activatedroute: ActivatedRoute,
    private utilitiesServices: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(async params => {
      const nombreMay = this.utilitiesServices.capitalize(params.cervezaNombre);
      console.log(params.cervezaNombre);
      console.log(nombreMay);
      this.cervezas = await this.cervezasService.getByName(nombreMay);
      console.log(this.cervezas);
    });


  }


}
