import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Datosusuarioss, todoslosdatos } from './../../modelos/usuarios/datosusuarioss';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutorizacionUsuarioService {
  public url: string = 'https://dummyjson.com/auth/login'
  public datosUsuario: todoslosdatos | null | Observable<null> = null
  public cargando: boolean = false;
  public token?: string;

  constructor(private http: HttpClient, private router: Router) { }
  public obtenertoken() {
    return this.token
  }
  public validardatos({ username, password }: Datosusuarioss) {
    this.cargando = true;

    this.http.post<todoslosdatos>(this.url, { username, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).pipe(catchError(async (error: HttpErrorResponse) => { return null })
      )
      .subscribe(async (datos) => {
        this.cargando = false;
        if (datos && datos.token) {
          this.datosUsuario = datos;
            this.token = this.datosUsuario.token
            this.router.navigate(['/home'])
        }
      })
  }


}
