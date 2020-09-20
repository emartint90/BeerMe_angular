import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }



  edad(pFechaNacimiento) {
    console.log(pFechaNacimiento);
    const fechaDeNacimiento = new Date(pFechaNacimiento)
    const today = new Date();
    const mili_dif = Math.abs(today.getTime() - fechaDeNacimiento.getTime());
    const age = (mili_dif / (1000 * 3600 * 24 * 365.25));
    return age;
    // if (age >= 18) {
    //   return true;
    // } else {
    //   return false;
    // }


  }


  capitalize(pCervezaNombre) {
    // Dividido el parametro que me llega (el nombre)  por el separador ' ' (espacio)
    const palabrasCerveza = pCervezaNombre.split(' ');
    let nuevaPalabra, resultado;
    console.log(palabrasCerveza);
    // Recorremos el array de palabras del nombre de la cerveza
    for (let i = 0; i < palabrasCerveza.length; i++) {
      // Recorremos todos los caracteres de cada uno de los string que hay en el  array del nombre de la cerveza
      for (let j = 0; j < palabrasCerveza[i].length; j++) {
        if (j == 0) {
          // Si es el primer caracter lo ponemos en mayúsculas, j le doy el valor 0
          nuevaPalabra = palabrasCerveza[i].charAt(j).toUpperCase();
          console.log(nuevaPalabra);
        } else {
          nuevaPalabra += palabrasCerveza[i].charAt(j);
        }
      }
      if (i == 0) {
        resultado = nuevaPalabra;
      } else {
        resultado += ' ' + nuevaPalabra;
      }
    }
    return resultado;
  }


  obtenerIdUsuario() {
    // utilizar token para obtener usuario?
    const idUser = localStorage.getItem('idUser')
    console.log(idUser);
    return idUser;
  }

}

