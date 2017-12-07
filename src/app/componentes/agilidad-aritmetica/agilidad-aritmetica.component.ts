import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
 
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  gano:boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;
  private subscription: Subscription;
  mostrarParaResolver:boolean  = false;
  mostrarJugarBtn:boolean = true;
  perdioPorTiempo:boolean;
  mostrarFinalBtnGuardar:boolean = false;
  mostrarFinalBtnReiniciar:boolean = false;
  mensajeResultado:string;
  puntajesParaTabla:any;
  
  
  ngOnInit() {
  
  }
  
  constructor() {
     this.ocultarVerificar = true;
     this.Tiempo=5; 
     this.nuevoJuego = new JuegoAgilidad();
     this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAgilidad"));
     console.info("Inicio agilidad");  
  }
  
  NuevoJuego() {

    this.mostrarJugarBtn = false;
    this.mostrarParaResolver  =true;
    
    this.ocultarVerificar = false;
    this.nuevoJuego.GenerarJuego();
    
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      
      //Aca perdio.
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.perdioPorTiempo = true;
        this.Tiempo=5;
      }
      }, 1000);

  }

  verificar()
  {
     this.gano = this.nuevoJuego.Verificar();
     this.ocultarVerificar=false;
     clearInterval(this.repetidor); 

     if(this.gano == true)
     {
        this.MostarMensaje("Cooooooorectoooooo!",true);
        this.TerminarJuegoParaPuntaje();
     }
     else
     {
        if(this.perdioPorTiempo)
        {
          this.MostarMensaje("No has ganado ni sumado puntos. Vuelve a intentarlo!",false);
          this.TerminarJuegoPerdedor();
        }
        else
          this.MostarMensaje("No has acertado. Vuelve a intentarlo!",false);
          this.TerminarJuegoPerdedor();
     }
  }

  TerminarJuegoPerdedor()
  {
    this.mensajeResultado = "Perdiste";
    this.mostrarParaResolver = false;
    this.perdioPorTiempo = false;
    this.mostrarFinalBtnGuardar= false;
    this.mostrarFinalBtnReiniciar = true;
    
  }

  TerminarJuegoParaPuntaje()
  {
    this.mostrarParaResolver = false;
    this.perdioPorTiempo = false;
    this.mostrarFinalBtnGuardar = true;
    this.mostrarFinalBtnReiniciar = true;
    this.nuevoJuego.TerminarJuegoGanador(this.Tiempo);
    this.mensajeResultado = "Ganaste tu puntaje es " + this.nuevoJuego.puntajeFinal;
  }

  MostarMensaje(mensaje:string,ganador:boolean=false) {
    this.Mensajes=mensaje;    
    
    var x = document.getElementById("snackbar");
    
    if(ganador)
    {
      x.className = "show Ganador";
    }
    else
    {
      x.className = "show Perdedor";
    }
    
    var modelo=this;
    
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  

   Reiniciar()
   {
    this.mostrarFinalBtnGuardar = false;
    this.mostrarFinalBtnReiniciar = false;
    this.Tiempo=5; 
    this.nuevoJuego.numeroIngresando = null;
    this.NuevoJuego();
   }

   GuardarPuntaje()
   {
      var puntajes = JSON.parse(localStorage.getItem("PuntajesAgilidad"));

      var usuario = localStorage.getItem("usuario");
      console.log("puntajes recien traidos" + puntajes);

      if(usuario === null)
      usuario  = "Invitado";

      console.log(this.Tiempo);
      var tiempo  = 5 - this.Tiempo;
      
      puntajes["puntajes"].push({"usuario":usuario,"tiempo":tiempo,"puntaje":this.nuevoJuego.puntajeFinal});
      localStorage.setItem("PuntajesAgilidad",JSON.stringify(puntajes));
      this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAgilidad"));


      this.nuevoJuego.numeroIngresando = null;
      this.Reiniciar();
   }

}
