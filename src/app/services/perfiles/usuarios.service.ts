import { Injectable } from '@angular/core';
import {perfildato} from '../../modelos/usuarios/datosusuarioss';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
private urldatos:string ='https://dummyjson.com/users'
public datosperfiles!:perfildato
  constructor(private http:HttpClient) { }

  public obteneruser(token: string | undefined){
    this.http.get(this.urldatos,{
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    }).subscribe(datos=>{
   this.datosperfiles = datos as perfildato

  })
}




public traerperfiles(){
  return this.datosperfiles
}
}
