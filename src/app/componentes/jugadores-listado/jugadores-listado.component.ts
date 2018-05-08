import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JuegoServiceService
  
    constructor(serviceJugadores:JuegoServiceService) {
      console.log(serviceJugadores.listar());
      
    }
    
  ngOnInit() {
  }


  TraerTodos(){
    console.log("estoy en el traer todos los juegos del jugador del componente");
    console.log(this.miJugadoresServicio.listar());
    /*this.serviceJugadores.traerJugador("'example@examplo.com'").then(data=>{
      console.info("jugadores listado",(data));
      //this.listado= data;

    })*/
  }
  /*TraerGanadores(){
    this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    })
  }
  TraerPerdedores(){
    this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    })
  }
*/
}
