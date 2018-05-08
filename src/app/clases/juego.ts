import { Jugador } from './jugador';

export abstract class Juego {
  public juego = 'Sin Nombre';
  public jugador: Jugador;
  public gano = false;
  public aux: Date;
  public fecha:string;

  constructor(juego?: string, gano?: boolean,jugador?:Jugador) {
    this.juego = juego;
    this.gano = gano;
    this.jugador=jugador;
    this.fecha = this.aux.getDate() + "-" + this.aux.getMonth + "-" + this.aux.getFullYear();
    
  }

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
