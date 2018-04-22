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

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit() {
  }

  irA(donde: string)
  {
    switch(donde)
    {
      case 'iniciarSesion':
        this.selectedIndex=0;
        break;
      case 'registrarme':
        this.selectedIndex=1;
        break;
      case 'jugarInvitado':
        this.router.navigate(['/Invitado']);        
        break;
    }
  }

}
