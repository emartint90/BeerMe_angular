import { Injectable } from '@angular/core';
import { Cerveza } from './models/cerveza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/cervezas'
  }

  getByName(pNombre): Promise<Cerveza[]> {
    console.log(pNombre);
    return this.httpClient.get<Cerveza[]>(this.baseUrl + '/' + pNombre).toPromise();
  }


}
