import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cerveza } from '../../models/cerveza.model';
import { CervezasService } from '../../cervezas.service';
import { UtilitiesService } from 'src/app/utilities.service';

@Component({
  selector: 'app-vista-pais',
  templateUrl: './vista-pais.component.html',
  styleUrls: ['./vista-pais.component.css']
})
export class VistaPaisComponent implements OnInit {

  nombre: string;
  cervezas: Cerveza[];
  errores: any[];

  constructor(
    private cervezasService: CervezasService,
    private activatedroute: ActivatedRoute,
    private utilitiesServices: UtilitiesService,
    private Router: Router

  ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(async params => {
      const nombrePais = this.utilitiesServices.capitalize(params.pais);
      console.log(params.cervezaNombre);
      console.log(nombrePais);
      this.cervezas = await this.cervezasService.getByPais(nombrePais);
      this.cervezas.forEach(cer => {
        if (!cer.imagen) {
          cer.imagen = "sirviendoCerveza.jpg";
        }
      });
      console.log(this.cervezas);
    });


  }
  async onClick(pIdCerveza) {
    // const existeFav = await this.cervezasService.getFav(pIdCerveza);
    // console.log(existeFav);
    // if (!existeFav) alert('Esta cerveza ya está entre sus favoritas');
    const response = await this.cervezasService.postFav(pIdCerveza);
    if (response['success']) {
      alert('Ha sido añadida a tus favoritas')
    } else {
      this.errores = response;
    }

  }
  // this.idCerveza = pIdCerveza;
  //const favorito = new Array[this.idCerveza, this.utilitiesServices.obtenerIdUsuario()];

}
