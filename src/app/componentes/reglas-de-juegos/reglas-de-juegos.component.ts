import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reglas-de-juegos',
  templateUrl: './reglas-de-juegos.component.html',
  styleUrls: ['./reglas-de-juegos.component.css']
})
export class ReglasDeJuegosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Regla: string; 
  Juego: string;
  display: boolean = false;

  public Cual(nombre: string){
    alert(nombre);
    console.log("Estoy en cuál regla");
    /*this.Juego = nombre;
    switch (nombre) {
      case "Anagrama":
        this.Regla = "El juego consiste en reordenar las letras para formar una palabra. Hacelo antes de que se termine el tiempo... <br>Para empezar a jugar hace clic en comenzar!";      
        this.showDialog();
        break;
    
      default:
        break;
    }*/

  }
  showDialog() {
    this.display = true;
}

}
