import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
jugador : Jugador;
Mensaje : string;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.jugador = new Jugador();
    }


  ngOnInit() {
  }
  Juego(tipo: string) {
    if(localStorage.length == 0)
      {
        this.router.navigate(['']);
      }
    else
    {
      switch (tipo) {
        case 'Adivina':
            this.router.navigate(['/Juegos/Adivina']);
          break;
        case 'Agilidad':
            this.router.navigate(['/Juegos/Agilidad']);
          break;
        case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
          break;
        case 'Mezclador':
          this.router.navigate(['/Juegos/MezcladorDeColores']);
          break;
        case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
          break;
        case 'ppt':
          this.router.navigate(['Juegos/PiedraPapelTijera']);
          break;
      }
    }
  }
}
