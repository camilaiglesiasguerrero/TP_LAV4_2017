import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  display: boolean = false;
  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  seRindio: boolean = false;
 
  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.nuevoJuego = new JuegoAdivina();
    //console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=true;
  }

  showDialog(){
    this.display = true;
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }

  generarNumero() {
    this.nuevoJuego.generarnumero();
    this.ocultarVerificar = false;
    this.contador=0;
    this.nuevoJuego.contadorPistas = 0;
  }

  verificar()
  {
    if(this.nuevoJuego.contadorIntentos == 5)
      this.ocultarVerificar = true;

    this.contador++;
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostrarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;

    }else{
      
    
    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  Rendirse()
  {
    this.seRindio = true;
    this.verificar();
    this.nuevoJuego.gano = false;
  }
  PedirPista()
  {
    if(this.contador == 0 )
      this.MostrarMensaje("Todavía no podés pedir pista. Jugá al menos una vez",false);
    else
    {
      this.nuevoJuego.contadorPistas ++;
      if(this.nuevoJuego.contadorPistas < 4)
        this.MostrarMensaje(this.Mensajes = this.nuevoJuego.retornarAyuda(), false);
      else
        this.MostrarMensaje("¡No te quedan más pistas!",false);
    }
  }

  MostrarMensaje(mensaje:string="¡No te quedan más pistas!",ganador:boolean=false) {
    this.Mensajes = mensaje;
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  ngOnInit() {
  }

}
