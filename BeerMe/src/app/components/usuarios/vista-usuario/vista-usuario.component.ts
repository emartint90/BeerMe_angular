import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CervezasService } from '../../../cervezas.service';
import { Cerveza } from '../../../models/cerveza.model';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {

  arrayCervezasFav: Cerveza[];

  constructor(
    private navegacion: Router,
    private cervezasService: CervezasService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { this.arrayCervezasFav = [] }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(async params => {
      this.arrayCervezasFav = await this.cervezasService.getByFav();
      this.arrayCervezasFav.forEach(cerFav => {
        if (!cerFav.imagen) {
          cerFav.imagen = "sirviendoCerveza.jpg";
        }
      });
      console.log(this.arrayCervezasFav);
    });

  }
  onClick(pRuta) {
    this.navegacion.navigate([pRuta]);
  }


  async onClick2(pCervezaFav) {

    const eliminar = await this.cervezasService.deleteCervezaFav(pCervezaFav);
    this.ngOnInit();
    //this.router.rel .navigate(['/perfil']);
  }
}
