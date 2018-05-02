import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  
  display : boolean = false;
  anagrama : JuegoAnagrama;
  empiezaElJuego : boolean = false;
  minutos: number = 0;
  segundos: number = 0;
  milisegundos: number = 0;
  timer: any;
  cronometro: string;
  cronoMili: string;
  verifica: boolean = false;
  resultado: string;
  val:number;
  seRindio: boolean = false;
  laPalabra: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.anagrama = new JuegoAnagrama();
    this.cronometro = '00:00.';
    this.cronoMili = '0';
   }

  ngOnInit() {
  }
  
  showDialog() {
    this.display = true;
}
  generarPalabra(){
    this.anagrama.palabraResultado = null;
    this.verifica = false;
    this.seRindio = false;
    this.anagrama.GenerarPalabra();    
    this.empiezaElJuego = true;
    this.segundos = 0;
    this.milisegundos = 0;
    this.minutos = 0;
    this.laPalabra = this.anagrama.arrayOrdenado[this.anagrama.palabraSecreta].palabra;
    clearInterval(this.timer);
    this.timer = setInterval( ()=> { 
      this.milisegundos += 1;
      this.cronometro = (this.minutos <= 9 ? '0' + this.minutos.toString() : this.minutos.toString()) + ':' + (this.segundos <= 9 ? '0' + this.segundos.toString() : this.segundos.toString()) + '.';
      this.cronoMili = this.milisegundos <= 9 ? '0' + this.milisegundos.toString() : this.milisegundos.toString();
      if( this.milisegundos == 99)
      {
        this.milisegundos = 0;
        this.segundos +=1;
      }
          if(this.segundos == 59)
          {
            this.segundos = 0;
            this.minutos +=1;
          }
    }
      , 10);
    
    
  }

  Verificar(){
    clearInterval(this.timer);
  if(!this.anagrama.verificar())
    this.seRindio = true;
  }

  Rendirse(){
    clearInterval(this.timer);
    this.seRindio = true;
  }
  Mezclar(){
    this.anagrama.Mezclar(this.anagrama.arrayOrdenado, this.anagrama.palabraSecreta);
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }
}
