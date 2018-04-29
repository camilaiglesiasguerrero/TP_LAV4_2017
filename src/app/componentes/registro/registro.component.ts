import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 usuario: string;
 clave: string;
 claveRep: string;
 mensaje: string;
 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  constructor(private route: ActivatedRoute,
    private router: Router, private _auth:AngularFireAuth) { }
    
    async Registrar()
    {
      if(this.usuario!= null && this.usuario!='')
      {
        if(this.clave!=null && this.clave != '' && this.clave.length>5)
        {
          if(this.clave==this.claveRep)
          {
            try{
                
              const result = await this._auth.auth.createUserWithEmailAndPassword(this.usuario,this.clave);
              this.mensaje = this.usuario + " ingresado exitosamente. Ya podés comenzar a jugar!";
              var x = document.getElementById("snackbar");
              x.className = "show Ganador";
              setTimeout(function(){ 
              x .className = x.className.replace("show", "");
              
              }, 3000);          
              
              this.router.navigate(['/Juegos']);
            }
            catch(e){
              console.info(e);
              if(e.message == "The email address is already in use by another account.")
                this.mensaje = "Usuario ya existente.";
              else
                this.mensaje = e;
            }
          }
          else
            this.mensaje = "Las claves no coinciden.";
        }
        else
          this.mensaje = "La clave debe tener al menos 6 caracteres";
      }
      else
        this.mensaje = "Email y clave son obligatorios.";
        
        var x = document.getElementById("snackbar");
          x.className = "show Perdedor";
          setTimeout(function(){ 
          x.className = x.className.replace("show", "");
          }, 3000);
      
          
  }
  

  ngOnInit() {
         
  }

  

}
