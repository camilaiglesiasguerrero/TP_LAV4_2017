import { Jugador } from './jugador';

export abstract class Juego {
  public juego = 'Sin Nombre';
  public jugador: Jugador;
  public gano = false;
  
  constructor(juego?: string, gano?: boolean,jugador?:Jugador) {
    this.juego = juego;
    this.gano = gano;
    this.jugador=jugador;
    
  }

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
