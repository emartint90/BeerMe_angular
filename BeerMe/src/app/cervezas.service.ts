import { Injectable } from '@angular/core';
import { Cerveza } from './models/cerveza.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  baseUrl: string;
  baseTwoUrl: string;
  arrayCervezaFav: Cerveza[];

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/cervezas/',

      this.baseTwoUrl = 'http://localhost:3000/favoritas/'
  }

  getByName(pNombre): Promise<Cerveza[]> {
    console.log(pNombre);
    return this.httpClient.get<Cerveza[]>(this.baseUrl + pNombre).toPromise();
  }

  getByPais(pPais): Promise<Cerveza[]> {
    console.log(pPais);
    return this.httpClient.get<Cerveza[]>(this.baseUrl + 'pais/' + pPais).toPromise();

  }

  postFav(pIdCerveza): Promise<any> {

    console.log(pIdCerveza);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.httpClient.get(this.baseTwoUrl + pIdCerveza, httpOptions).toPromise();
  }

  createCerveza(formsValues): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}registroCerveza`, formsValues).toPromise();
  }

  getByFav(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    return this.httpClient.get(`${this.baseTwoUrl}beerlist`, httpOptions).toPromise();

  }

  getFav(pIdCerveza): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }

    return this.httpClient.get(this.baseTwoUrl + 'beerlist/comprobacion/' + pIdCerveza, httpOptions).toPromise();

  }

  deleteCervezaFav(pIdCerveza) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.httpClient.get(this.baseTwoUrl + 'beerlist/delete/' + pIdCerveza, httpOptions).toPromise();

  }

}




