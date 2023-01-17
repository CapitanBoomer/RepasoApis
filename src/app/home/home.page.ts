import { Component } from '@angular/core';
import {AutorizacionUsuarioService} from '../services/autorizaciones/autorizacion-usuario.service';
import {Datosusuarioss} from '../modelos/usuarios/datosusuarioss'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public serv:AutorizacionUsuarioService) {}
ionViewWillEnter(){

}
}
