import { Component, OnInit,Input,Output } from '@angular/core';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
