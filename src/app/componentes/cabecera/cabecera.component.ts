import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Jugador } from '../../clases/jugador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  jugador : Jugador;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.jugador = new Jugador();
    this.jugador.Traer();
  }

  ngOnInit() {
  }
  
  LogOut()
  {
    this.jugador.Clear();
  }

  @Output() queListado:EventEmitter<any> = new EventEmitter<any>();
  irA(num:number){
    this.queListado.emit(num);
    this.router.navigate(['/Listados']);
  }
}
