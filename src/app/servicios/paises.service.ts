import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 
@Injectable()
export class PaisesService {

  constructor(public miHttp: MiHttpService ) { }


  public listarTodos():Promise<Array<any>> {
       return   this.miHttp.httpGetP("all")
          .then( data => {
            console.log( data );
            return data;
          })
          .catch( err => {
            console.log( err );
            return null;
          });
          //return null;
    }
  public listarUno(cual: string):Promise<Array<any>> {
      return   this.miHttp.httpGetP("name/" + cual)
         .then( data => {
           console.log( data );
           return data;
         })
         .catch( err => {
           console.log( err );
           return null;
         });
         //return null;
   }
}
