import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-uso-servicios',
  templateUrl: './uso-servicios.component.html',
  styleUrls: ['./uso-servicios.component.css']
})
export class UsoServiciosComponent implements OnInit {
  paises : any; 
  cual: any;
  constructor(private servPais : PaisesService) { 
    
  }

  ngOnInit() {
  }

  traerTodos(){
    var respuesta =  this.servPais.listarTodos().then(datos=>{
      //console.info("listado de paises",datos);
      
      this.paises= datos;
    });    
  }

  traerUno(cual:string){
    var respuesta =  this.servPais.listarUno(cual).then(datos=>{
      //console.info("listado de paises",datos);
      
      this.paises= datos;
    }); 
  }

}
