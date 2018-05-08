import { Component, OnInit } from '@angular/core';
import { Jugador } from './clases/jugador';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  p : Jugador;
  ngOnInit(){
    this.p = new Jugador();
    this.p.Clear();
  }
}
