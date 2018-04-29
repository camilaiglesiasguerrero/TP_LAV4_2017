import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  jugador : Jugador;

  constructor() { 
    this.jugador = new Jugador();
    this.jugador.Traer();
  }

  ngOnInit() {
  }
  
  LogOut()
  {
    this.jugador.Clear();
  }
}
