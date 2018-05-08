import { Jugador } from './jugador';
import { DatePipe } from '@angular/common';

export abstract class Juego {
  public juego = 'Sin Nombre';
  public jugador: Jugador;
  public gano = false;
  public aux: Date;
  public fecha:string;

  constructor(juego?: string, gano?: boolean) {
    this.juego = juego;
    
    this.gano = gano;
    
    this.jugador = new Jugador();
    this.jugador.Traer();
    
    this.aux = new Date();
    this.fecha = this.fill(this.aux.getDate().toString()) + '-' + this.fill(this.aux.getMonth().toString()) + '-' + this.aux.getFullYear();
  }

  fill(n) {
    while(n.length < 2)
         n = "0" + n;
    return n;
  }

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
