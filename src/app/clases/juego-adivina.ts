import { Juego } from '../clases/juego'
import { Jugador } from './jugador';
import { empty } from 'rxjs/observable/empty';
import { forEach } from '@angular/router/src/utils/collection';
import { Input } from '@angular/core';

export class JuegoAdivina extends Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    nombre: string;
    contadorPistas:number;
    ingresados : Array<any>;
    contadorIntentos:number;
    pista: string;
    num1 : number;
    num2 : number;
    num3 : number;
    num4 : number;
    arriesga : Array<number>;
    ubicado: number;
    desubicado: number;
    incorrecto:number;

    constructor(nombre?: string, gano?: boolean) {
        super("Adivina el número"); 
        this.contadorPistas = 0;
        this.contadorIntentos = 0;
        this.ingresados = new Array<any>();
        this.arriesga = new Array<number>();
      }

public verificar() {
      this.contadorIntentos ++;
      this.ubicado = 0;
      this.desubicado = 0;
      this.incorrecto = 0;
      
        this.ingresados.push({'numero':this.numeroIngresado,'intentos':this.contadorIntentos, 'pista':' '});
        if (this.numeroIngresado == this.numeroSecreto) {
          return this.gano = true;
        }
        else 
        {
          if(this.arriesga[0] == this.num1)
            this.ubicado ++;
          else if(this.arriesga[0] == this.num2 || this.arriesga[0] == this.num3 || this.arriesga[0] == this.num4)
            this.desubicado ++;
          else{
            this.incorrecto++;
          }

          if(this.arriesga[1] == this.num2)
            this.ubicado ++;
          else if(this.arriesga[1] == this.num1 || this.arriesga[1] == this.num3 || this.arriesga[1] == this.num4)
            this.desubicado ++;
          else{
            this.incorrecto++;
          }

          if(this.arriesga[2] == this.num3)
            this.ubicado++;
          else if(this.arriesga[2] == this.num1 || this.arriesga[2] == this.num2 || this.arriesga[2] == this.num4)
            this.desubicado++;
          else{
            this.incorrecto ++;
          }

          if(this.arriesga[3] == this.num4)
            this.ubicado++;
          else if(this.arriesga[3] == this.num1 || this.arriesga[3] == this.num2 || this.arriesga[3] == this.num3)
            this.desubicado++;
          else{
            this.incorrecto++;
          }
        } 
         
        this.retornarAyuda();
        
     }

     public generarnumero() {
      while(this.ingresados.length > 0)
      {
        this.ingresados.pop();
        console.log(this.ingresados);
      }
      this.contadorIntentos = 0;
      this.numeroIngresado = 0;
      this.num1 = Math.floor((Math.random() * 10));
      this.num2 = Math.floor((Math.random() * 10));
      while(this.num1 == this.num2)
        this.num2 = Math.floor((Math.random() * 10));

      this.num3 = Math.floor((Math.random() * 10));
      while(this.num1 == this.num3 || this.num2 == this.num3)
        this.num3 = Math.floor((Math.random() * 10));
      
      this.num4 = Math.floor((Math.random() * 10));
      while(this.num1 == this.num4 || this.num2 == this.num4 || this.num3 == this.num4)
        this.num4 = Math.floor((Math.random() * 10));
      
      this.numeroSecreto = this.num1*1000 + this.num2*100 + this.num3*10 + this.num4;
    
        console.info('numero Secreto:' + this.numeroSecreto);

        this.gano = false;
      }

      public retornarAyuda():string {
          this.pista = "Bien: " + this.ubicado + " - Regular: " + this.desubicado + " - Mal: " + this.incorrecto;
          this.ingresados[this.contadorIntentos-1].pista = this.pista; 
        
        return "";
      }
}
