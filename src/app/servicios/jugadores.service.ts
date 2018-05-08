import { Injectable } from '@angular/core';
//import { ArchivosJugadoresService}from './archivos-jugadores.service'
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class JugadoresService {

  //peticion:any;
  constructor( public miHttp: MiHttpService  ) {
    
   // this.peticion = this.miHttp.traerJugadores();
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }


filtrado:any;
/*
  traertodos() 
  {
    return this.miHttp.httpGetO().then(data=>{
      console.info("jugadores service",data);

      return data;

     let  ganador: boolean;
      if(filtro=="ganadores")
      {
        ganador= true;
      }
      else
      {
        ganador= false;
      }

      this.filtrado =this.filtrado.filter(
        data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
      )
      .catch(errror=>{console.log("error")
      
    return this.filtrado;
    });
  }
*/
  traerJugador(param) 
  {
    console.log("estoy en traer del servicio");
    return this.miHttp.httpGetP(param).then(data=>{
      console.info("jugadores service",data);

      this.filtrado=data;
      return data;
    });
  }

 
}
