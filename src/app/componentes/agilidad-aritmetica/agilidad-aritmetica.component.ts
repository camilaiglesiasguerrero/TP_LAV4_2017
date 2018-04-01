import { Component, OnInit , Inject, Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {ReglasDeJuegosComponent} from '../reglas-de-juegos/reglas-de-juegos.component';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  Mensajes: string;
  
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  finDelJuego: boolean = false;
  private subscription: Subscription;
  ngOnInit() {
  }
  
   constructor(public dialog: MatDialog) {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReglasDeJuegosComponent, {
      height: '250px',
      width: '600px',
      position: {top: '80%', left: '30%'}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  NuevoJuego() {    
    this.finDelJuego = false;
    this.nuevoJuego.GenerarCalculo();
    this.ocultarVerificar=false;
    this.Tiempo = 5;
  
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      
      //console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        //this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }

  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
    if (this.nuevoJuego.Verificar()){
      //console.log("estoy verificando en agilidad component");
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostrarMensaje("Ganaste",true);
    }
    else{
      this.MostrarMensaje("No ganaste, intentalo de nuevo",false);
    }
  }  

  MostrarMensaje(mensaje:string="mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    //var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show","");
      //modelo.ocultarVerificar=true;
     }, 5000);
    console.info("objeto",x);
    this.finDelJuego = true;
   }
}

