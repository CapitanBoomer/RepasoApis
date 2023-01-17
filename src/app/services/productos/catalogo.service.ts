import { Injectable } from '@angular/core';
import {Productos} from './../../modelos/catalogo/productos';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {



  constructor(private http:HttpClient) { }
  private urlprod: string ='https://dummyjson.com/auth/products';
  public datosProductos!:Productos;

  public obtenerprod(token: string | undefined){
    this.http.get(this.urlprod,{
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    }).subscribe(datos =>{
      this.datosProductos = datos as Productos;
    })
  }

  public traerprod(){
  return this.datosProductos
}
}
