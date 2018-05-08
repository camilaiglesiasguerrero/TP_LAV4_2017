import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { MiHttpService } from './mi-http.service';
import { IfObservable } from 'rxjs/observable/IfObservable';


@Injectable()
export class RankingService {

  constructor(public miHttp: MiHttpService) { }

  public TraerDatos():Promise<Array<any>> {
    return  this.miHttp.httpGetP()
     .then( data => {
       //console.log( data );
       return data;
     })
     .catch( err => {
       console.log( err );
       return null;
     });
     //return null;
  }

  public GuardarDatos(juego: Juego,p1?:boolean,p2?:boolean)
  {
    this.miHttp.Insert(juego,p1,p2);
  }

}
