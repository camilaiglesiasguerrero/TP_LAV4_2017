import { Component, OnInit , Inject, Input,Output,EventEmitter } from '@angular/core';
import { JuegoAgilidadAritmetica } from '../../clases/juego-agilidad-aritmetica';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RankingService  } from '../../servicios/ranking.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  Mensajes: string;
  display : boolean = false;
  rankingS: RankingService;
  
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidadAritmetica;
  ocultarVerificar: boolean;
  repetidor: any;
  segundos: number = 0;
  milisegundos: number = 0;
  cronometro: string;
  cronoMili: string;
  finDelJuego: boolean = false;
  
  private subscription: Subscription;
  ngOnInit() {
  }
  
  constructor(private route: ActivatedRoute,
    private router: Router, private servicioRanking:RankingService) { 
     this.ocultarVerificar=true;
    this.nuevoJuego = new JuegoAgilidadAritmetica(); 
    this.cronometro = '00:10.';
    this.cronoMili = '00';
    this.rankingS = servicioRanking;
  }
  
  showDialog() {
    this.display = true;
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }

  
  NuevoJuego() {    
    this.finDelJuego = false;
    this.nuevoJuego.GenerarCalculo();
    this.ocultarVerificar=false;
    this.segundos = 10;
    this.milisegundos = 100;
    clearInterval(this.repetidor);

    this.repetidor = setInterval( ()=> { 
      this.cronometro = '00:' + (this.segundos <= 9 ? '0' + this.segundos.toString() : this.segundos.toString()) + '.';
      this.cronoMili = this.milisegundos <= 9 ? '0' + this.milisegundos.toString() : this.milisegundos.toString();
      this.milisegundos-=1;
      if( this.milisegundos == 0)
      {
        this.milisegundos = 99;
        if(this.segundos != 0)
        {  
          this.segundos -=1;
          if(this.segundos == 5)
          {
            var x = document.getElementById("timer");
            x.className = "pocoTiempo";
          }
        }
        else
        {
          this.cronoMili = '00';
          var x = document.getElementById("timer");
          clearInterval(this.repetidor);
          this.verificar();
        }
      }
    }
      , 10);

  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.verificar();
    }
  }

  rendirse()
  {
    this.nuevoJuego.respuesta = -99;
    this.verificar();
  }

  verificar()
  {
    this.nuevoJuego.verifica = true;
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
    this.nuevoJuego.gano = this.nuevoJuego.verificar();
    console.info(this.nuevoJuego);
    this.rankingS.GuardarDatos(this.nuevoJuego);
    this.ocultarVerificar = true;    
  }  
}

