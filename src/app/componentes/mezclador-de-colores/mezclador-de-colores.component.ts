import { Component, OnInit } from '@angular/core';
import { MezcladorDeColores } from '../../clases/juego-mezclador-de-colores';
import { NgStyle } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MezcladorReglasComponent} from '../mezclador-reglas/mezclador-reglas.component';
import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'app-mezclador-de-colores',
  templateUrl: './mezclador-de-colores.component.html',
  styleUrls: ['./mezclador-de-colores.component.css']
})
export class MezcladorDeColoresComponent implements OnInit {
  
  mezclador : MezcladorDeColores;
  empiezaElJuego : boolean = false;
  timer: number = 0;
  verifica: boolean = false;
  resultado: string;
  color: string;
  val:number;

  constructor(public dialog: MatDialog){
    this.mezclador = new MezcladorDeColores();
    this.mezclador.elColorSecreto = '#000000';
    this.mezclador.elColorRespuesta = '#000000';  
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
    this.verifica = true;
    this.mezclador.Verificar();
    if(this.mezclador.gano)
    {
      if(this.timer < 20)
        this.resultado = "¡Ganaste! ¡Sos muy bueno! Te llevó sólo " + this.timer + " segundos.";
      else
        this.resultado = "¡Ganaste! Pero podrías haberlo hecho en un tiempo menor a 10 segundos. " + this.timer + " segundos es mucho!";    
      this.color = '#00FF00';
    }
    else
    {
      this.resultado = "Perdiste. Volvé a intentar la próxima. Veamos la diferencia.";
      this.color = '#FF0000';
    }
    
  }

  restaurarValores(){
    this.mezclador.restaurarValores(2);
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(MezcladorReglasComponent, {
      height: '250px',
      width: '600px',
    });
  }
}

