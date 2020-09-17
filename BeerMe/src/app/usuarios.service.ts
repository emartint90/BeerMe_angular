import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }

  signUp(formsValues): Promise<any> {
    // return this.httpClient.post<any>(this.baseUrl + '/registro' + formsValues).toPromise();
    return this.httpClient.post<any>(`${this.baseUrl}/registro`, formsValues).toPromise();
  }

  login(formsValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, formsValues).toPromise();
  }
}
