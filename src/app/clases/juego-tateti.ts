import { Juego } from "./juego";
import { Jugador } from "./jugador";
import { forEach } from "@angular/router/src/utils/collection";

export class JuegoTateti extends Juego{
    constructor(nombre?: string, gano?: boolean, jugador?:Jugador) {
        super("TaTeTi",gano,jugador);
        this.gano = false;
        this.grilla = new Array<any>();
        this.grilla.push({'celda':'0','valor':'','conValor':'false'});
        this.grilla.push({'celda':'1','valor':'','conValor':'false'});
        this.grilla.push({'celda':'2','valor':'','conValor':'false'});
        this.grilla.push({'celda':'3','valor':'','conValor':'false'});
        this.grilla.push({'celda':'4','valor':'','conValor':'false'});
        this.grilla.push({'celda':'5','valor':'','conValor':'false'});
        this.grilla.push({'celda':'6','valor':'','conValor':'false'});
        this.grilla.push({'celda':'7','valor':'','conValor':'false'});
        this.grilla.push({'celda':'8','valor':'','conValor':'false'});
      }
    
    turno: boolean = true;
    grilla: Array<any>;
    
    public verificar() {
        console.info(this);
        if(this.grilla[0].valor != '' && this.grilla[0].conValor == 'true')
        {
           if(this.grilla[1].valor != '' && this.grilla[1].conValor=='true' && this.grilla[1].valor == this.grilla[0].valor)
           {
            if(this.grilla[2].valor != '' && this.grilla[2].conValor=='true' && this.grilla[2].valor == this.grilla[1].valor )
            {
               return this.gano = true;
            }
           }

           else if(this.grilla[4].valor != '' && this.grilla[4].conValor=='true' && this.grilla[4].valor == this.grilla[0].valor )
           {
            if(this.grilla[8].valor != '' && this.grilla[8].conValor=='true'  && this.grilla[8].valor == this.grilla[4].valor)
            {
                return this.gano = true;
             }
           }

           else if(this.grilla[3].valor != '' && this.grilla[3].conValor=='true'  && this.grilla[0].valor == this.grilla[3].valor)
           {
            if(this.grilla[6].valor != '' && this.grilla[6].conValor=='true'  && this.grilla[6].valor == this.grilla[3].valor)
            {
                return this.gano = true;
             }
           }
        }

        if(this.grilla[2].valor != '' && this.grilla[2].conValor == 'true')
        {
           if(this.grilla[4].valor != '' && this.grilla[4].conValor=='true' && this.grilla[4].valor == this.grilla[2].valor )
           {
            if(this.grilla[6].valor != '' && this.grilla[6].conValor=='true'  && this.grilla[6].valor == this.grilla[4].valor)
            {
                return this.gano = true;
             }
           }

           else if(this.grilla[5].valor != '' && this.grilla[5].conValor=='true'  && this.grilla[2].valor == this.grilla[5].valor)
           {
            if(this.grilla[8].valor != '' && this.grilla[8].conValor=='true'  && this.grilla[8].valor == this.grilla[5].valor)
            {
                return this.gano = true;
             }
           }
        }
        else if(this.grilla[1].valor != '' && this.grilla[1].conValor == 'true')
        {
           if(this.grilla[4].valor != '' && this.grilla[4].conValor=='true' && this.grilla[4].valor == this.grilla[1].valor )
           {
            if(this.grilla[7].valor != '' && this.grilla[7].conValor=='true'  && this.grilla[7].valor == this.grilla[4].valor)
            {
                return this.gano = true;
             }
           }
        }
        else if(this.grilla[3].valor != '' && this.grilla[3].conValor == 'true')
        {
           if(this.grilla[4].valor != '' && this.grilla[4].conValor=='true' && this.grilla[4].valor == this.grilla[3].valor )
           {
            if(this.grilla[5].valor != '' && this.grilla[5].conValor=='true'  && this.grilla[5].valor == this.grilla[4].valor)
            {
                return this.gano = true;
             }
           }
        }
        else if(this.grilla[6].valor != '' && this.grilla[6].conValor == 'true')
        {
            console.info("6 Ok");
           if(this.grilla[7].valor != '' && this.grilla[7].conValor=='true' && this.grilla[7].valor == this.grilla[6].valor )
           {
            console.info("6 y 7 Ok");
            if(this.grilla[8].valor != '' && this.grilla[8].conValor=='true'  && this.grilla[8].valor == this.grilla[7].valor)
            {
                console.info("6, 7,8 Ok");
                return this.gano = true;
             }
           }
        }
        else
        {
           return this.gano = false;
        }
            
    }

    Jugada(num){
        if(this.grilla[num].conValor == 'false')
        {
            if(this.turno)
            {
                this.grilla[num].valor = 'X';
                this.grilla[num].conValor = 'true';
                this.turno = false;     
            }
            else
            {
                this.grilla[num].valor = 'O';
                this.grilla[num].conValor = 'true';
                this.turno = true;
            }
                this.verificar();        
        }
    }

    Limpiar(){
        for (let index = 0; index < 9; index++) {
            this.grilla[index].valor = '';
            this.grilla[index].conValor = 'false';
            this.gano = false;
            this.turno = true;    
        }
        
    }
    
}
