import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Jugador } from '../../clases/jugador';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

flag: boolean = false;
jugador: Jugador;
Mensaje: string;
@Output() enviarDato:EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.jugador = new Jugador();      
    }

  ngOnInit() {
  }

  Juego(tipo: string) {   
    if(this.jugador.Traer() == null)
    {
      this.enviarDato.emit(0);
    }
    else{
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'MezcladorDeColores':
          this.router.navigate(['/Juegos/MezcladorDeColores']);
          break;
    }
  }
}

}
