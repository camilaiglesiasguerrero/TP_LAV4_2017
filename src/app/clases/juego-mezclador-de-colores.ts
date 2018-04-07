export class MezcladorDeColores {
    redSecreto: number;
    greenSecreto: number;
    blueSecreto: number;
    elColorSecreto:string;

    redRespuesta: number;
    greenRespuesta: number;
    blueRespuesta: number;
    elColorRespuesta: string;
    
    gano: boolean = false;

    constructor(){
    }

    generarColor(){
        //hexString = yourNumber.toString(16);
        this.restaurarValores(1);
        
        while(this.redSecreto % 17 != 0 || this.greenSecreto % 17 != 0 || this.blueSecreto % 17 != 0)
        {
            this.redSecreto = (Math.floor((Math.random() * 255) + 1));
            this.greenSecreto = (Math.floor((Math.random() * 255) + 1));
            this.blueSecreto = (Math.floor((Math.random() * 255) + 1));
        }
 
        this.elColorSecreto = '#' + this.redSecreto.toString(16) + this.greenSecreto.toString(16) + this.blueSecreto.toString(16);
        console.info('R:' + this.redSecreto + '; G: ' + this.greenSecreto + '; B:' + this.blueSecreto);

        //this.gano = false;
    }

    Agregar(botonApretado: number){
        if(botonApretado == 1 && this.redRespuesta <= 255) 
        {
            this.redRespuesta+= 17;
        }
        else if(botonApretado == 2 && this.greenRespuesta <= 255)
        {
            this.greenRespuesta+=17;
        }
        else if(botonApretado == 3 && this.blueRespuesta <= 255)
        {
            this.blueRespuesta+=17;
        }
        else if(botonApretado == 4 && this.redRespuesta >= 0) 
        {
            this.redRespuesta-= 17;
        }
        else if(botonApretado == 5 && this.greenRespuesta >= 0)
        {
            this.greenRespuesta-=17;
        }
        else if(botonApretado == 6 && this.blueRespuesta >= 0)
        {
            this.blueRespuesta-=17;
        }
        this.elColorRespuesta = '#' + this.fill(this.redRespuesta.toString(16)) + this.fill(this.greenRespuesta.toString(16)) + this.fill(this.blueRespuesta.toString(16));
        console.info('R:' + this.redRespuesta + '; G: ' + this.greenRespuesta + '; B:' + this.blueRespuesta);
    }

    fill(n) {
        while(n.length < 2)
             n = "0" + n;
        return n;
    }
    
    Verificar(){
        if(this.redSecreto == this.redRespuesta && this.blueSecreto == this.blueRespuesta && this.blueSecreto == this.blueRespuesta)
            this.gano = true;
    }

    restaurarValores(cuales:number){
        if(cuales = 1) //juego nuevo
        {
            this.redSecreto = 13;
            this.greenSecreto = 13;
            this.blueSecreto =  13;
            this.redRespuesta = 0;
            this.greenRespuesta = 0;
            this.blueRespuesta = 0;
            this.elColorRespuesta = '#000000';
        }
        else if(cuales = 2)//resetea valores del juegador
        {
            this.redRespuesta = 0;
            this.greenRespuesta = 0;
            this.blueRespuesta = 0;
            this.elColorRespuesta = '#000000';
        }

    }
}
