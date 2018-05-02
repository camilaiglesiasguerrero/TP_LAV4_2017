import { Juego } from "./juego";
import { forEach } from "@angular/router/src/utils/collection";
import { Jugador } from "./jugador";

export class JuegoAnagrama extends Juego {
    arrayOrdenado: Array<any>;
    palabraSecreta: number;
    palabraAMostrar:Array<any>;
    palabraResultado: string;
    display: boolean = false;


    constructor(nombre?: string, gano?: boolean, jugador?:Jugador) {
        super("Anagrama",gano,jugador);
        this.arrayOrdenado = new Array<any>();
        this.arrayOrdenado.push({'palabra':'ESCEPTICO','letras':['E','S','C','E','P','T','I','C','O']});
        this.arrayOrdenado.push({'palabra':'DRAMATURGIA','letras':['D','R','A','M','A','T','U','R','G','I','A']});
        this.arrayOrdenado.push({'palabra':'BICICLETA','letras':['B','I','C','I','C','L','E','T','A']});
        //this.arrayOrdenado.push({'palabra':'RODANTE','letras':['R','O','D','A','N','T','E']}); se quita porque puede ser rodante o detonar
        this.arrayOrdenado.push({'palabra':'DETONACION','letras':['D','E','T','O','N','A','C','I','O','N']});
        this.arrayOrdenado.push({'palabra':'PROGRAMADOR','letras':['P','R','O','G','R','A','M','A','D','O','R']});
        this.arrayOrdenado.push({'palabra':'DISEÑO','letras':['D','I','S','E','Ñ','O']});
        this.arrayOrdenado.push({'palabra':'LIBERTINAJE','letras':['L','I','B','E','R','T','I','N','A','J','E']});
        this.arrayOrdenado.push({'palabra':'DOMADOR','letras':['D','O','M','A','D','O','R']});
        this.arrayOrdenado.push({'palabra':'PEREGRINO','letras':['P','E','R','E','G','R','I','N','O']});
        this.arrayOrdenado.push({'palabra':'ESPIONAJE','letras':['E','S','P','I','O','N','A','J','E']});
      }

      public verificar () : boolean{
        if(this.arrayOrdenado[this.palabraSecreta].palabra == this.palabraResultado.toUpperCase())
            return this.gano=true;
    }

    GenerarPalabra(){    
        this.gano = false;
        this.palabraSecreta = Math.floor(Math.random()*10);
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
