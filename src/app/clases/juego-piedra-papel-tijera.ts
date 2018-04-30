import { Juego } from "./juego";

export class JuegoPiedraPapelTijera extends Juego{
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("PiedraPapelTijera",gano,jugador);
      }
    
    public verificar() {
        if (1==1) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
}
