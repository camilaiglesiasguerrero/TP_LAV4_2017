import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

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

  constructor() {
    this.anagrama = new JuegoAnagrama();
   }

  ngOnInit() {
  }
  
  showDialog() {
    this.display = true;
}
  generarPalabra(){
    this.anagrama.GenerarPalabra();    
  }

  Verificar(){
    if(this.anagrama.verificar())
      alert("ben");
      else
      alert('mal');
  }
}
