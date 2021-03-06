import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { Juego } from '../../clases/juego';
import { RankingService } from '../../servicios/ranking.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  rankingS:RankingService;
  display: boolean = false;
  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  ocultarVerificar:boolean;
  seRindio: boolean = false;
  gano: boolean = false;
  enJuego:boolean = false;
  elJuego: Juego;

  constructor(private route: ActivatedRoute,
    private router: Router, private servicioRanking:RankingService) { 
    this.nuevoJuego = new JuegoAdivina();
    //console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=true;
    this.rankingS = servicioRanking;
  }

  showDialog(){
    this.display = true;
  }

  irA(){
    this.router.navigate(['/Juegos']);
  }

  generarNumero() {
    this.enJuego = true;
    this.seRindio = false;
    this.gano = false;
    this.enJuego = true;
    
    this.nuevoJuego.generarnumero();
    this.ocultarVerificar = false;
    this.nuevoJuego.contadorPistas = 0;
  }

  verificar()
  {
    while(this.nuevoJuego.arriesga.length > 0)
      this.nuevoJuego.arriesga.pop(); 

      for(var i=0;i<this.nuevoJuego.numeroIngresado.toString().length;i++) 
      {
        this.nuevoJuego.arriesga.push(parseInt(this.nuevoJuego.numeroIngresado[i]));
      }
      
    if(this.nuevoJuego.numeroIngresado.toString().length != 4 )
    {
      this.MostrarMensaje("Recordá que debés seleccionar cuatro dígitos distintos");
    }else if(this.nuevoJuego.arriesga[0] == this.nuevoJuego.arriesga[1] 
       || this.nuevoJuego.arriesga[0] == this.nuevoJuego.arriesga[2]
       || this.nuevoJuego.arriesga[0] == this.nuevoJuego.arriesga[3]
       || this.nuevoJuego.arriesga[0] == this.nuevoJuego.arriesga[4]
       || this.nuevoJuego.arriesga[1] == this.nuevoJuego.arriesga[2]
       || this.nuevoJuego.arriesga[1] == this.nuevoJuego.arriesga[3]
       || this.nuevoJuego.arriesga[1] == this.nuevoJuego.arriesga[4]
       || this.nuevoJuego.arriesga[2] == this.nuevoJuego.arriesga[3]
       || this.nuevoJuego.arriesga[2] == this.nuevoJuego.arriesga[4]
       || this.nuevoJuego.arriesga[3] == this.nuevoJuego.arriesga[4]
      )
      this.MostrarMensaje("Recordá que debés seleccionar cuatro dígitos distintos");
  else
  {
    
    if (this.nuevoJuego.verificar()){      
      this.gano = true;
      this.nuevoJuego.numeroSecreto=0;
      this.enJuego = false;
      this.nuevoJuego.gano = true;
      
      this.rankingS.GuardarDatos(this.nuevoJuego);
    }else{
      if(this.nuevoJuego.contadorIntentos == 10)
      {
        this.seRindio = true;
        this.enJuego = false;
        this.nuevoJuego.gano = false;
        //console.info(this.nuevoJuego);
        this.rankingS.GuardarDatos(this.nuevoJuego);
      } 
    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }
}  

  Rendirse()
  {
    this.seRindio = true;
    this.nuevoJuego.gano = false;
    this.enJuego = false;
    this.nuevoJuego.gano = false;
    console.info(this.nuevoJuego);
    this.rankingS.GuardarDatos(this.nuevoJuego);
  }
  
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.verificar();
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
   // console.info("objeto",x);
   }  
  ngOnInit() {
  }

}
