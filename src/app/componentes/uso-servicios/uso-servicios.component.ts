import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-uso-servicios',
  templateUrl: './uso-servicios.component.html',
  styleUrls: ['./uso-servicios.component.css']
})
export class UsoServiciosComponent implements OnInit {
  paises : any; 
  cual: any;
  jugador: Jugador;
  constructor(private jugadorServ : JugadoresService) { 
    this.jugador = new Jugador();
  }

  ngOnInit() {
  }
/*
  traerTodos(){
    var respuesta =  this.jugadorServ.traertodos().then(datos=>{
      //console.info("listado",datos);
      
      this.paises= datos;
    });    
  }
*/
  traerUno(){
      var respuesta =  this.jugadorServ.traerJugador("'example@example.com'").then(datos=>{
      //console.info("listado de paises",datos);
      
      
      this.paises= datos;
    });
  }

}
