import { Juego } from './juego';
import { Jugador } from './jugador';

export class JuegoAgilidadAritmetica extends Juego{
    numero1: number;
    operador: string;
    numero2: number;
    resultado: number;
    needCalculo: boolean = true;
    respuesta: any;
    calculo: string;
    victoria: string;
    temporizador: any;
    nombre : string;
    Jugador: string;
    verifica: boolean = false;

    constructor(nombre?: string, gano?: boolean) {
        super("Agilidad Aritmética",gano); 
      }
      
        public GenerarCalculo():void{
        this.verifica = false;
          this.gano =false;
          this.resultado = 0;
          this.respuesta = '';
          this.numero1 = Math.floor(Math.random()*10+1);
          this.numero2 = Math.floor(Math.random()*10+1);
          let operadorN = Math.floor((Math.random()*4)+1);

          if(operadorN == 4)
          {
              while(this.numero1%this.numero2 != 0)
              {
                this.numero1 = Math.floor(Math.random()*10+1);
                this.numero2 = Math.floor(Math.random()*10+1);
              }
          }
          switch (operadorN) {
              case 1:
                this.operador = '+';
                this.resultado = (this.numero1 + this.numero2);
                break;
              case 2:
                this.operador = '-';
                this.resultado = this.numero1 - this.numero2;
                break;
              case 3:
                this.operador = 'x';
                this.resultado = this.numero1 * this.numero2;
                break;
              case 4:
                this.operador = '/';
                this.resultado = Math.round(this.numero1 / this.numero2);
                break;
          }
          //console.log(this.numero1, this.operador, this.numero2, this.resultado);
          this.needCalculo = false;
          
        }

    public verificar():boolean {
        this.calculo = this.numero1 + " " + this.operador + " " + this.numero2 + " = " + this.resultado;
        
        if(this.resultado == this.respuesta)
        {
            this.victoria = "Ganaste";
            this.gano = true;
            this.needCalculo = true;
            clearTimeout(this.temporizador);
            
        }
        else
        {
            this.victoria = "Perdiste";
            this.gano = false;
            this.needCalculo = false;
        }
        
        return this.gano; 
    }
}