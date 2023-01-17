import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/productos/catalogo.service';
import { AutorizacionUsuarioService } from '../../services/autorizaciones/autorizacion-usuario.service';
import { Productos } from '../../modelos/catalogo/productos'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  private token: string | undefined = '';
  public datosproductos!: Productos;

  constructor(public servicio: CatalogoService, public seruser: AutorizacionUsuarioService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.token = this.seruser.obtenertoken();
    this.servicio.obtenerprod(this.token);


  }
  ionViewDidEnter() {
    this.datosproductos = this.servicio.traerprod();
    console.log(this.datosproductos.products)
  }

}
