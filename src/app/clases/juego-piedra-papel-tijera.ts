import { Juego } from "./juego";
import { Jugador } from "./jugador";
export class JuegoPiedraPapelTijera extends Juego{

  eleccion:number;
  eleccionMaq : number;

    constructor(nombre?: string, gano?: boolean, jugador?:Jugador) {
        super("Piedra Papel o Tijera",gano,jugador);
      }
    
    public verificar() {
      this.eleccionMaq = Math.floor(Math.random()*3)+1;
      console.log(this.eleccion + '-' + this.eleccionMaq);
      if(this.eleccion == 1 && this.eleccionMaq == 3 || this.eleccion == 2 && this.eleccionMaq == 1 || this.eleccion == 3 && this.eleccionMaq == 2 )
        return this.gano = true;  
      else 
        return this.gano = false;
        
     }
  
     Elegir(num: number)
     {
      switch (num) {
        case 1:
          this.eleccion = 1;
          break;
        case 2:
          this.eleccion = 2;
          break;
        case 3:
          this.eleccion = 3;
          break;
        default:
          break;
      }
      this.verificar();
     }
}
