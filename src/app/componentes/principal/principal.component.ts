import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {  MatIconModule } from '@angular/material';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  selectedIndex:number=0;
  mje: string;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit() {
  }

  irA(donde: number)
  {
    switch(donde)
    {
      case 0:
        this.selectedIndex=0;
        break;
      case 1:
        this.selectedIndex=1;
        break;
    }
  }

  Alertar(i: number)
  {
    if(i==0)
    {
      this.mje="¡Debés ingresar email válido y clave para poder entrar a jugar!";
      var x = document.getElementById("snackbar");
      x.className = "show Perdedor";
      setTimeout(function(){ 
        x.className = x.className.replace("show", "");
    }, 3000);
  }
}

}
