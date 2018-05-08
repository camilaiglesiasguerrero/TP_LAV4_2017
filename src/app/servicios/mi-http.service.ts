import { Injectable } from '@angular/core';
import { log } from 'util';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Juego } from '../clases/juego';

import {Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MiHttpService {
  url = 'http://localhost:7070/jugadoresarchivo/apirestjugadores/Ranking/';
  headers: Headers;
  options: RequestOptions;

  constructor( public http: Http ) {     
      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' });
      this.options = new RequestOptions({ headers: this.headers });   
    }

  public httpGetPromise(url: string, objeto:any){
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

  public httpGetP ()
  {  
    
    return this.http
    .get( this.url)
    .toPromise()
    .then( this.extraerDatos )
    .catch( this.handleError );
  }

  Insert(juego:Juego){ 
    let data = new URLSearchParams();
    data.append('jugador',juego.jugador.email);
    data.append('juego', juego.juego);
    data.append('gano', juego.gano.toString());
    data.append('fecha', juego.fecha);
    
    //console.info(this.url, data);    
   return this.http
      .post(this.url, data)
        .subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error.json());
        });
  }

}
