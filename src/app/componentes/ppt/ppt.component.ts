import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
ppt : JuegoPiedraPapelTijera;
display: boolean = false;
cronometro: number;
repetidor:any;
cartel: string;
empiezaJuego: boolean = false;
Mensaje: string;
bloquea: boolean = false;
contador: number;
jug: number;
maq: number; 
eleccion0 : boolean = false;
eleccion1 : boolean = false;
eleccion2 : boolean = false;
eleccion3 : boolean = false;
eleccionM1 : boolean = false;
eleccionM2 : boolean = false;
eleccionM3 : boolean = false;
jugar: boolean = true;
k:number;
elNum: number;
fin: any;
enJuego: boolean = false;


  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.ppt = new JuegoPiedraPapelTijera();
    this.cronometro = 5;
    this.contador = 0;
    this.jug = 0;
    this.maq = 0;
    this.k = 0;
    
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }

  Comenzar(flag?:number){
      this.eleccion0 = false;
      this.eleccion1 = false;
      this.eleccion2 = false;
      this.eleccion3 = false;
      this.eleccionM1 = false;
      this.eleccionM2 = false;
      this.eleccionM3 = false;

    if(this.k == 0 || flag == 0)
    {
      this.enJuego = true;
      this.empiezaJuego = true;
      this.maq = 0;
      this.jug = 0;
    }  
    else
      this.k++;
    clearInterval(this.fin);
    this.ppt.eleccion = 0;
      this.bloquea = false;
      this.repetidor = setInterval(()=>{ 
        this.cronometro--;
        switch (this.cronometro) {
          case 4:
            this.cartel = "Piedra";
            break;
          case 3:
            this.cartel = "Papel";
            break;
          case 2:
            this.cartel = "o";
            break;
          case 1:
            this.cartel = "Tijera";
            break;
          case 0:
            this.cartel = "¡Tiempo!";
          default:
            break;
        }
        if(this.cronometro==0 ) {
          clearInterval(this.repetidor);
          this.Elegir(0);
          this.bloquea = true;
        }
        }, 900);
  }

  Elegir(num : number){
    if(this.contador == 0)
    {  
      this.elNum = num;
      this.contador++;
    }
    
    switch (this.elNum) {
      case 0:
        this.eleccion0 = true;
        break;
      case 1:
        this.eleccion1 = true;
        break;
      case 2: 
        this.eleccion2 = true;
        break;
      case 3: 
        this.eleccion3 = true;
        break;
      default:
        break;
    }
    if(this.empiezaJuego)
    {
      if(!this.bloquea)
        {
          if(this.cronometro == 0)
            {
              this.jugar = false;
              this.ppt.Elegir(this.elNum);
              switch (this.ppt.eleccionMaq){
                case 1:
                  this.eleccionM1 = true;
                  break;
              case 2:
                this.eleccionM2 = true;
                break;
              case 3:
                this.eleccionM3 = true;
                default:
                  break;
              }
              if(this.ppt.gano)
              {
                this.cronometro = 5;
                this.jug++;
                this.k++;
              }
              else if(this.ppt.gano == null)
              {
                this.cronometro = 5;
                this.k ++;               
              }
              else 
              {
                this.cronometro = 5;
                this.maq++;
                this.k++;
              }
              this.fin = setInterval(()=>{  
                this.jugar = true;
                this.contador = 0;
                if(this.jug < 2 && this.maq < 2)
                  this.Comenzar();
                else if(this.jug == 2)
                {
                  this.cartel = "¡Ganaste!";
                  this.jug = 0;
                  this.maq = 0;
                  this.empiezaJuego = false;
                  clearInterval(this.repetidor);
                  clearInterval(this.fin);
                  this.enJuego = false;
                }
                else
                { 
                  this.cartel = "¡Perdiste!"
                  this.jug = 0;
                  this.maq = 0;
                  this.eleccion0 = false;
                  this.empiezaJuego = false;
                  clearInterval(this.repetidor);
                  clearInterval(this.fin);
                  this.enJuego = false;
                  
                }
            }, 3000)};
      }
    }
    else{
      this.Mensaje="Hacé clic en comenzar primero";    
        var x = document.getElementById("snackbar");
        x.className = "show Perdedor";
     setTimeout(function(){ 
        x.className = x.className.replace("show", "");
     }, 3000);
    }

  }

  
}
