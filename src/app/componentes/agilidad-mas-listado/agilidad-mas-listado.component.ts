import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    console.info("en app",this.listadoParaCompartir);
  }
}
