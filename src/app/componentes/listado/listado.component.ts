import { Component, OnInit } from '@angular/core';
import { RankingService } from '../../servicios/ranking.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Jugador } from '../../clases/jugador';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  rankingS:RankingService;
  jugadorActual: Jugador;
  todos:boolean = false; 

  constructor(private servicioRanking: RankingService) {
      this.rankingS=servicioRanking;
      this.jugadorActual = new Jugador();
      this.jugadorActual.Traer();
      this.listadoParaCompartir = new Array<any>();
    }
  
  ngOnInit() {
    
  }

  Mostrar(cual:number){
    while(this.listadoParaCompartir.length > 0){
      this.listadoParaCompartir.pop();
    }
    
    switch (cual) {
      case 0:
        console.info(this.listadoParaCompartir);
        this.todos = false;
        this.rankingS.TraerDatos()
        .then(datos=>{
          for (let index = 0; index < datos.length; index++) {
            if(datos[index].jugador == this.jugadorActual.email )
            {
              this.listadoParaCompartir.push(datos[index]);
            }
          }
        });    
      break;
      case 1:
        this.todos = true;
        this.rankingS.TraerDatos()
        .then(datos=>{
              this.listadoParaCompartir=datos;
        });
      break;
      default:
        break;
    }

  }


/*  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }*/
}
