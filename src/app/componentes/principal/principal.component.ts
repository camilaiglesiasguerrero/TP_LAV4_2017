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
    console.info("estoy en ir a y quiero ir a " + donde);
    switch(donde)
    {
      case 'iniciarSesion':
          this.router.navigate(['/LogIn']);
        break;
      case 'registrarme':
        this.router.navigate(['/Registro']);
        break;
      case 'jugarInvitado':
        this.router.navigate(['/Invitado']);        
        break;
    }
  }

}
