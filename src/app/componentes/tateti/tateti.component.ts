import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
ganador1: boolean = false;
ganador2: boolean = false;
display: boolean = false;
tateti : JuegoTateti;
Mensaje : string;
yaJugo: boolean = false;
contador: number;

constructor(private route: ActivatedRoute,
  private router: Router) { 
  this.tateti = new JuegoTateti();
  this.yaJugo = false;
  this.contador = 0;
 }

  ngOnInit() {
  }

LimpiarGrilla(){
  for (let index = 0; index < 9; index++) {
    var x = document.getElementById(index.toString());
    if(x.className != '')
      x.className = '';
  }
  this.contador = 0;
  this.ganador1 = false;
  this.ganador2 = false;
  this.tateti.Limpiar();
}
Cargar(num){
  this.contador++;
  this.yaJugo = true;
  if(this.tateti.grilla[num].conValor == "false")
  {
    this.tateti.Jugada(num);
    var x = document.getElementById(num.toString());
    if(this.tateti.turno)
      {
        x.className = "O";
      }else{
        x.className = "X";
      }
  }
  else
  {
    this.Mensaje="La celda ya tiene un valor";    
        var x = document.getElementById("snackbar");
        x.className = "show Perdedor";
     setTimeout(function(){ 
        x.className = x.className.replace("show", "");
     }, 3000);
  }

  if(this.tateti.gano)
    if(!this.tateti.turno)
    {
        this.ganador1 = true;
    }
    else
    {
      this.ganador2 = true;
    }
    if(this.contador==9 && (this.ganador1==false && this.ganador2 == false))
    {
      this.ganador1 = true;
      this.ganador2 = true;
    }  
}

  irA(){
    this.router.navigate(['/Juegos']);
  }
  
  showDialog() {
    this.display = true;
  }
}
