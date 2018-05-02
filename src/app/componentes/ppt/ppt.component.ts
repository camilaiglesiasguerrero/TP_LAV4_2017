import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
ppt : JuegoPiedraPapelTijera;

  constructor() { 
    this.ppt = new JuegoPiedraPapelTijera();
  }

  ngOnInit() {
  }

  Elegir(num : number){
    this.ppt.Elegir(num);
    if(this.ppt.gano)
      alert("ganaste");
    else
      alert("perdiste");
  }

  
}
