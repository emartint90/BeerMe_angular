import { Injectable } from '@angular/core';
import { Cerveza } from './models/cerveza.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  baseUrl: string;
  baseTwoUrl: string;
  arrayCervezaFav: any[];

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/cervezas',

      this.baseTwoUrl = 'http://localhost:3000/favoritas/'
  }

  getByName(pNombre): Promise<Cerveza[]> {
    console.log(pNombre);
    return this.httpClient.get<Cerveza[]>(this.baseUrl + '/' + pNombre).toPromise();
  }

  // getByPais(pPais): Promise<Cerveza[]> {
  //   console.log(pPais);
  //   return this.httpClient.get<Cerveza[]>(this.baseUrl + '/' + pPais).toPromise();

  // }

  postFav(pIdCerveza): Promise<any> {

    console.log(pIdCerveza);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    //return this.httpClient.get(`${this.baseTwoUrl} + ${pIdCerveza}`, httpOptions).toPromise();
    return this.httpClient.get(this.baseTwoUrl + pIdCerveza, httpOptions).toPromise();

    // //return this.httpClient.post(`${this.baseTwoUrl}/, pIdCerveza`).toPromise();
    // return this.httpClient.post(this.baseTwoUrl + '/:idCerveza').toPromise();
  }
}
