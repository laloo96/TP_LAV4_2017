import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {LoginService} from '../../servicios/login.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  email = '';
  password= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  respuestaSV:any;
  mostrarError:Boolean;
  repetidor:any;
  flagi:boolean = false;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private route: ActivatedRoute,private router: Router, private mihttp:LoginService) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
  }

  ngOnInit() {
  }

  Entrar() {
    
    if (this.email != '' && this.password != '') {

      var usuarios = JSON.parse(localStorage.getItem("USP"));

      usuarios["misUsuarios"].forEach(user => {
        
        if(user["email"] == this.email && user["password"] == this.password)
        {
          this.flagi = true;
          this.solucion();
        }
        
      });

      if(!this.flagi)
        this.mostrarError;
      

    }
    else
      this.MostrarError();
  }

  

  solucion()
  {
      let usuarioXmail = this.email.split("@",1);
      localStorage.setItem("usuario", usuarioXmail[0]);
      this.router.navigate(['/Juegos']);
  }

  MostrarError()
  {
      this.mostrarError = true;
      let g= 3;
      
      this.repetidor = setInterval(()=>{ 
        
        g--;
  
        if(g==0 ) {
          clearInterval(this.repetidor);
          this.mostrarError = false;
        }
      
      }, 1000);
  }
  /*
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }*/

}
