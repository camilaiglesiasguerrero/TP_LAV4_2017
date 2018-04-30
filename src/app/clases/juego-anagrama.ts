import { Juego } from "./juego";
import { forEach } from "@angular/router/src/utils/collection";

export class JuegoAnagrama extends Juego {
    arrayOrdenado: Array<any>;
    palabraSecreta: number;
    palabraAMostrar:Array<any>;
    palabraResultado: string;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
        this.arrayOrdenado = new Array<any>();
        this.arrayOrdenado.push({'palabra':'ESCEPTICO','letras':['E','S','C','E','P','T','I','C','O']});
        
      }

      public verificar () : boolean{
        if(this.arrayOrdenado[this.palabraSecreta].palabra == this.palabraResultado.toUpperCase())
            return this.gano=true;
    }

    GenerarPalabra(){    
        //this.palabraSecreta = Math.floor(Math.random()*10);
        this.palabraSecreta = 0;
        this.palabraAMostrar = this.Mezclar(this.arrayOrdenado,this.palabraSecreta);
        
    }
    
    Mezclar(array,num){
        let miarray: Array<string>;
        miarray = new Array<string>();
        miarray = array[num].letras;

        var currentIndex = miarray.length, temporaryValue, randomIndex;

        // Mientras queden elementos a mezclar...
        while (0 !== currentIndex) {
      
          // Seleccionar un elemento sin mezclar...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // E intercambiarlo con el elemento actual
          temporaryValue = miarray[currentIndex];
          miarray[currentIndex] = miarray[randomIndex];
          miarray[randomIndex] = temporaryValue;
        }
        //console.log(miarray);
        return miarray;
    }

}
