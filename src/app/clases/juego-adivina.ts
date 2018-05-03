import { Juego } from '../clases/juego'
import { Jugador } from './jugador';

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    nombre: string;
    contadorPistas:number;
    ingresados : Array<any>;
    contadorIntentos:number;
    pista: string;
    
    constructor(nombre?: string, gano?: boolean, jugador?:Jugador) {
        super("Adivina el número",gano,jugador); 
        this.contadorPistas = 0;
        this.contadorIntentos = 0;
        this.ingresados = new Array<any>();
      }
      
    public verificar() {
      console.info(this);
      this.contadorIntentos ++;
        this.ingresados.push({'numero':this.numeroIngresado,'intentos':this.contadorIntentos, 'pista':' '});
        if (this.numeroIngresado == this.numeroSecreto) {
          return this.gano = true;
        }
     }
     public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
      }

      public retornarAyuda():string {
        let num = this.ingresados.length - 1;
        switch (this.contadorPistas) {
          case 1:
            if(this.numeroSecreto > 50)
            {
              this.pista = "El número es mayor a 50";
              this.ingresados[num].pista = this.pista;
            }
            else 
            {
              this.pista = "El número no es mayor a 50";
              this.ingresados[num].pista = this.pista;
            }
            break;
          case 2:
            if(this.numeroSecreto % 3 == 0 && this.numeroSecreto % 2 == 0)
            {
              this.pista = "El número es divisible por 6";
              this.ingresados[num].pista = " " + this.pista;
            } 
            else
            {
              this.pista = "El número no es divisible por 6";
              this.ingresados[num].pista = " " + this.pista;
            } 
            break;
          case 3:
            if(this.numeroSecreto % 2 == 0)
            {
              this.pista += "El número es par";
              this.ingresados[num].pista += " " + this.pista;
            }
            else 
            {
              this.pista += "El número es impar";
              this.ingresados[num].pista += " " + this.pista;
            } 
            break;
          default:
            break;
        }
        return this.pista;
      }
}
