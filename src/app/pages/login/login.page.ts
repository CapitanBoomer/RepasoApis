import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms'
import {AutorizacionUsuarioService} from '../../services/autorizaciones/autorizacion-usuario.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public formulario: FormGroup
  constructor(public forms:FormBuilder, public servicio:AutorizacionUsuarioService) {this.formulario = forms.group({
    username: [''],
    password: ['']
  } ) }

  ngOnInit() {
  }
public ingresardatos(){
  this.servicio.validardatos({
    ...this.formulario.value
  })
}
}
