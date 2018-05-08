import { Component, OnInit, Inject, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { EventEmitter } from '@angular/core';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  Mensaje: string;
  jugador: Jugador;

  constructor(private _auth:AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
      this.jugador = new Jugador();
  }
  
  
  async Entrar() {
    if(this.jugador.email==null||this.jugador.clave==null||this.jugador.email==''||this.jugador.clave=='')
      {
        this.Mensaje="¡Debés ingresar email válido y clave para poder entrar a jugar!";    
        var x = document.getElementById("snackbar");
        x.className = "show Perdedor";
     setTimeout(function(){ 
        x.className = x.className.replace("show", "");
     }, 3000);

      }
      else{
        await this._auth.auth.signInWithEmailAndPassword(this.jugador.email,this.jugador.clave)
                        .then(result => {  
                          this.jugador.Guardar();
                          this.router.navigate(['/Juegos'])
                          ;})
                        .catch(error =>{ this.Mensaje= error.message })
                        var x = document.getElementById("snackbar");
                        x.className = "show Perdedor";
                     setTimeout(function(){ 
                        x.className = x.className.replace("show", "");
                     }, 3000);
      }  
  }

@Output() enviarDato:EventEmitter<any> = new EventEmitter<any>();

Registrarse(){
  this.enviarDato.emit(1);
}  

  ngOnInit() {
    
  }

  
  }
  /*MoverBarraDeProgreso() {
    
    this.logueando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }*/
