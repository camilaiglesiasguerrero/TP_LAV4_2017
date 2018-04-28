import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})

export class AnagramaComponent implements OnInit {

  miArrayPalabras:Array<any>;
  i:number;
  ocultaCorrecto:boolean;
  AciertosTXT:string;
  aciertos:number;
  Tiempo: number;
  intentoreal:number;
  Minuto:number;
  comenzo:boolean;
  repetidor:any;
  respuesta:string;
  gano:number;
  intentos:number;
  nuevoJuego: JuegoAnagrama;
  comienza:boolean;
  palabraMuestra:string;

  constructor(private route: ActivatedRoute,private router: Router) {
   const session = sessionStorage.getItem('user');
      if(session==null)
        {
          this.router.navigate(['/Principal']);
          sessionStorage.setItem("muestra","false");
        } 
        else
          {
            sessionStorage.setItem("muestra","true");
          }      
          this.inicializa();
    }

    inicializa()
    {
      this.intentoreal=0;
      this.intentos=3;
      this.nuevoJuego = new JuegoAnagrama("Adivina El juego",false,sessionStorage.getItem('user'));      
      this.aciertos=0;
      this.i=0;      
      this.miArrayPalabras=new Array<any>();
      this.miArrayPalabras.push({"mezcla":"palabra_gidooc","Ok":"palabra_codigo"});
      this.miArrayPalabras.push({"mezcla":"palabra_ablgua","Ok":"palabra_fabula"});
      this.miArrayPalabras.push({"mezcla":"palabra_saoad","Ok":"palabra_asado"});
      this.miArrayPalabras.push({"mezcla":"palabra_nicosoep","Ok":"palabra_opciones"});
      this.miArrayPalabras.push({"mezcla":"palabra_ruocla","Ok":"palabra_locura"});
      this.miArrayPalabras.push({"mezcla":"palabra_nigratecnoia","Ok":"palabra_integracion"});
      this.miArrayPalabras.push({"mezcla":"palabra_dalreida","Ok":"palabra_realidad"});
      this.miArrayPalabras.push({"mezcla":"palabra_dencoa","Ok":"palabra_condena"});
      this.miArrayPalabras.push({"mezcla":"palabra_daltnosiecn","Ok":"palabra_clandestino"});
      this.miArrayPalabras.push({"mezcla":"palabra_mdoorda","Ok":"palabra_domador"});
      this.palabraMuestra=this.miArrayPalabras[this.i].mezcla;
      this.ocultaCorrecto=true;
      this.Tiempo=0;
      this.Minuto=0;
      this.AciertosTXT="00/00";
      this.comienza=false;
    }
    
    ComenzarTimer()
    { 
    this.repetidor = setInterval(()=>{
      if(this.Tiempo==59)
      {
        this.Tiempo=0;
        this.Minuto++;
      } 
      else{
        this.Tiempo++;
        console.log(this.Tiempo);
      }     
      }, 1000);
      this.comenzo=true;
   }

    habilita()
    {
      this.gano=0;
      this.ComenzarTimer();
      this.Tiempo=0;
      this.Minuto=0;
      this.intentos=3;
      this.comienza=true;
    }
   async Verificar()
    {
      this.intentoreal++;
      this.respuesta=this.respuesta.toLocaleLowerCase();
      
        if(this.miArrayPalabras[this.i].Ok=="palabra_"+this.respuesta)
        {
          this.palabraMuestra=this.miArrayPalabras[this.i].Ok;
          this.respuesta=this.respuesta.toLocaleUpperCase();
            this.ocultaCorrecto=false;
            await this.delay(2000);
            this.ocultaCorrecto=true;
            this.respuesta="";
            this.i++;
            this.aciertos++;
            this.AciertosTXT="0"+this.aciertos+"/05";
            if(this.i>=this.miArrayPalabras.length)
            {
              this.ocultaCorrecto=true
              this.gano=10;
              this.nuevoJuego.gano=true;
              this.nuevoJuego.nombre="Anagrama"
              //this.nuevoJuego.minutos=this.Minuto;
              //this.nuevoJuego.intentos=this.intentoreal;
              //this.nuevoJuego.segundos=this.Tiempo;
              this.nuevoJuego.jugador=sessionStorage.getItem('user');;
              //this.nuevoJuego.Save();
        this.intentoreal=0;
             // this.nuevoJuego.gano=true;
             this.comienza=false; 
             this.intentos=0;
              this.TerminarTimer();
            }
            else
            {
              this.palabraMuestra=this.miArrayPalabras[this.i].mezcla;
            }
        }
      else
       {
        this.intentos--;
        if(this.intentos==0)
          {
            this.gano=0;
            this.nuevoJuego.gano=false;
            this.nuevoJuego.nombre="Anagrama"
            //this.nuevoJuego.minutos=this.Minuto;
            //this.nuevoJuego.segundos=this.Tiempo;
            //this.nuevoJuego.intentos=this.intentoreal;
            this.nuevoJuego.jugador=sessionStorage.getItem('user');;
            //this.nuevoJuego.Save();
            this.comienza=false;
          }
       }

    }

    delay(ms: number)
    {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  TerminarTimer()
  {
    clearInterval(this.repetidor);
    this.intentos=0;
  }

  ngOnInit() {
  }

}
