import { Component, OnInit } from '@angular/core';
import { MezcladorDeColores } from '../../clases/juego-mezclador-de-colores';
import { NgStyle } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mezclador-de-colores',
  templateUrl: './mezclador-de-colores.component.html',
  styleUrls: ['./mezclador-de-colores.component.css']
})
export class MezcladorDeColoresComponent implements OnInit {
  display: boolean = false;
  mezclador : MezcladorDeColores;
  empiezaElJuego : boolean = false;
  verifica: boolean = false;
  resultado: string;
  color: string;
  val:number;
  timer: any;
  minutos: number = 0;
  segundos: number = 0;
  milisegundos: number = 0;
  cronometro: string;
  cronoMili: string;

  constructor(private route: ActivatedRoute,
    private router: Router){
    this.mezclador = new MezcladorDeColores();
    this.mezclador.elColorSecreto = '#000000';
    this.mezclador.elColorRespuesta = '#000000';  
    this.cronometro = '00:00.';
    this.cronoMili = '0';
  }

  ngOnInit() {
  }
 
  generarColor(){
    this.verifica = false;
    this.mezclador.generarColor();
    this.empiezaElJuego = true;
    this.segundos = 0;
    this.milisegundos = 0;
    this.minutos = 0;
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

  agregar(cual: number){
    this.mezclador.Agregar(cual);
  }

  verificar(){
    this.verifica = true;
    this.mezclador.verificar();
    if(this.mezclador.gano)
    {
      if(this.segundos < 20)
        this.resultado = "¡Ganaste! ¡Sos muy bueno! Te llevó sólo " + this.cronometro + this.cronoMili;
      else
        this.resultado = "¡Ganaste! Pero podrías haberlo hecho en un tiempo menor a " + this.cronometro;    
      this.color = '#00FF00';
    }
    else
    {
      this.resultado = "Perdiste. Volvé a intentar la próxima. Veamos la diferencia: ";
      this.color = '#FF0000';
    }
    
  }

  restaurarValores(){
    this.mezclador.restaurarValores(2);
  }
  
  showDialog() {
    this.display = true;
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }
}

