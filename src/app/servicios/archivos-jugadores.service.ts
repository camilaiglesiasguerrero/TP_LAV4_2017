import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class ArchivosJugadoresService {

  //api="http://localhost:8080/jugadoresarchivo/apirestjugadores/Jugadas/";
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    
  }


  public  traerJugadores() {
    return this.miHttp.httpGetO()
    .toPromise()
    .then( data => {
      //console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    }) 
  }

  public  traerJugador(param) {
    return this.miHttp.httpGetP(param)
    .then( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    }) 
  }

}
