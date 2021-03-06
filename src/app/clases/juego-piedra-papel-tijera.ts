import { Juego } from "./juego";
import { Jugador } from "./jugador";
export class JuegoPiedraPapelTijera extends Juego{
  resultado: string;
  eleccion:number;
  eleccionMaq : number;

    constructor(nombre?: string, gano?: boolean) {
        super("Piedra Papel o Tijera",gano);
        this.eleccion = 0;
      }
    
    public verificar() {
      this.eleccionMaq = Math.floor(Math.random()*3)+1;
      
      if(this.eleccion == 0)
      {
        return this.gano = false;
      }
      if(this.eleccion == 1 && this.eleccionMaq == 3 || this.eleccion == 2 && this.eleccionMaq == 1 || this.eleccion == 3 && this.eleccionMaq == 2 )
      { 
        return this.gano = true; 
      }
      else if(this.eleccion == 1 && this.eleccionMaq == 1 || this.eleccion ==2 && this.eleccionMaq == 2 || this.eleccion == 3 && this.eleccionMaq == 3)
      {
        return this.gano = null;
      }
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
