import { Component, OnInit } from '@angular/core';
import { MezcladorDeColores } from '../../clases/juego-mezclador-de-colores';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mezclador-de-colores',
  templateUrl: './mezclador-de-colores.component.html',
  styleUrls: ['./mezclador-de-colores.component.css']
})
export class MezcladorDeColoresComponent implements OnInit {
  
  mezclador : MezcladorDeColores;
  empiezaElJuego : boolean = false;

  constructor(){
    this.mezclador = new MezcladorDeColores();
    this.mezclador.elColorSecreto = '#000000';
  }

  ngOnInit() {
  }
 
  generarColor(){
    this.mezclador.generarColor();
    this.empiezaElJuego = true;
  }

  agregar(cual: number){
    this.mezclador.Agregar(cual);
  }

  verificar(){
    if(this.mezclador.Verificar())
      alert("CRACK VISUAL");
    else
      alert("hmm daltónico?");
  }

  restaurarValores(){
    this.mezclador.restaurarValores(2);
  }
}

  

