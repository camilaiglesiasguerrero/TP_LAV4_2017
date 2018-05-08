import { Juego } from '../clases/juego';
import { Jugador } from './jugador';

export class MezcladorDeColores extends Juego {
    redSecreto: number;
    greenSecreto: number;
    blueSecreto: number;
    elColorSecreto:string;

    redRespuesta: number;
    greenRespuesta: number;
    blueRespuesta: number;
    elColorRespuesta: string;
    
    redTopeSuma: boolean = false;
    redTopeResta: boolean = true;
    greenTopeSuma: boolean = false;
    greenTopeResta: boolean = true;
    blueTopeSuma: boolean = false;
    blueTopeResta: boolean = true;

    constructor(nombre?: string, gano?: boolean) {
        super("Mezclador de Colores",gano);
        
      }

    generarColor(){
        //hexString = yourNumber.toString(16);
        this.restaurarValores(1);
        this.gano = false;
        while(this.redSecreto % 51 != 0 || this.greenSecreto % 51 != 0 || this.blueSecreto % 51 != 0)
        {
            this.redSecreto = (Math.floor((Math.random() * 255) + 1));
            this.greenSecreto = (Math.floor((Math.random() * 255) + 1));
            this.blueSecreto = (Math.floor((Math.random() * 255) + 1));
        }
 
        this.elColorSecreto = '#' + this.redSecreto.toString(16) + this.greenSecreto.toString(16) + this.blueSecreto.toString(16);
        console.info('EL COLOR SECRETO ES R:' + this.redSecreto + '; G: ' + this.greenSecreto + '; B:' + this.blueSecreto);
    }

    Agregar(botonApretado: number){
        switch(botonApretado)
        {
            case 1:
                this.redRespuesta += this.redRespuesta < 255 ?  51 : 0;
                this.redTopeResta = this.redRespuesta == 0 ? true : false;
                this.redTopeSuma = this.redRespuesta == 255 ? true : false;
                break;
            case 2:
                this.greenRespuesta += this.greenRespuesta < 255 ? 51 : 0;
                this.greenTopeResta = this.greenRespuesta == 0 ? true : false;
                this.greenTopeSuma = this.greenRespuesta == 255 ? true : false;
                break;
            case 3:
                this.blueRespuesta += this.blueRespuesta < 255 ? 51 : 0;
                this.blueTopeResta = this.blueRespuesta == 0 ? true : false;
                this.blueTopeSuma = this.blueRespuesta == 255 ? true : false;
                break;
            case 4: 
                this.redRespuesta -= this.redRespuesta > 0 ? 51 : 0;  
                this.redTopeResta = this.redRespuesta == 0 ? true : false;
                this.redTopeSuma = this.redRespuesta == 255 ? true : false;
                break;
            case 5:
                this.greenRespuesta -= this.greenRespuesta > 0 ? 51 : 0;
                this.greenTopeResta = this.greenRespuesta == 0 ? true : false;
                this.greenTopeSuma = this.greenRespuesta == 255 ? true : false;
                break;
            case 6:
                this.blueRespuesta -= this.blueRespuesta > 0 ? 51 : 0;
                this.blueTopeResta = this.blueRespuesta == 0 ? true : false;
                this.blueTopeSuma = this.blueRespuesta == 255 ? true : false;
                break;
        }
        
        this.elColorRespuesta = '#' + this.fill(this.redRespuesta.toString(16)) + this.fill(this.greenRespuesta.toString(16)) + this.fill(this.blueRespuesta.toString(16));
        //console.info('R:' + this.redRespuesta + '; G: ' + this.greenRespuesta + '; B:' + this.blueRespuesta);
    }

    fill(n) {
        while(n.length < 2)
             n = "0" + n;
        return n;
    }
    
    public verificar () : boolean{
        if(this.redSecreto == this.redRespuesta && this.blueSecreto == this.blueRespuesta && this.blueSecreto == this.blueRespuesta)
            this.gano = true;
        
        return this.gano;
    }

    restaurarValores(cuales:number){
        if(cuales == 1) //juego nuevo
        {
            this.redSecreto = 5;
            this.greenSecreto = 5;
            this.blueSecreto =  5;
        }
        
            this.blueTopeResta = true;
            this.redTopeResta = true;    
            this.greenTopeResta = true;
            this.blueTopeSuma = false;
            this.redTopeSuma = false;    
            this.greenTopeSuma = false;
            this.redRespuesta = 0;
            this.greenRespuesta = 0;
            this.blueRespuesta = 0;
            this.elColorRespuesta = '#000000';
        

    }
}
