import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/perfiles/usuarios.service';
import {perfildato} from '../../modelos/usuarios/datosusuarioss'
import {AutorizacionUsuarioService} from '../../services/autorizaciones/autorizacion-usuario.service';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
public usuarios!:perfildato;
private token: string | undefined = '';
  constructor(private serv:UsuariosService, private servuser:AutorizacionUsuarioService) { }

  ngOnInit() {
  }

ionViewWillEnter(){
  this.token = this.servuser.obtenertoken();
  this.serv.obteneruser(this.token);

}

ionViewDidEnter() {  this.usuarios = this.serv.traerperfiles()
  console.log(this.usuarios.perfiles)}

}
