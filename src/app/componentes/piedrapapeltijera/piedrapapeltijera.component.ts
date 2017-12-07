import { Component, OnInit } from '@angular/core';
import {JuegoPiedraPapelTijera} from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  mostrarParaResolver:boolean = false;
  juegoPPT:JuegoPiedraPapelTijera;
  resultado:string;
  mostrarEleccionMaquina:boolean  = false;
  interval:any;
  eleccionMaquina:string;
  cantidadDeJugadas:number;
  mostrarBotonesFinal:boolean = false;
  mostrarBtnJugar:boolean = true;
  mensajeSnack:string;
  puntaje:number;
  habilitarboton:boolean = false;
  puntajesParaTabla:any;


  constructor() { 
    this.juegoPPT = new JuegoPiedraPapelTijera;
    this.cantidadDeJugadas = 0;
    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesPPT"));
  }

  ngOnInit() {
  
  }

  comenzarJuego()
  {
    this.mostrarBtnJugar = false;
    this.mostrarParaResolver = true;
  }

  eleccionUsuario(eleccion:number)
  {
      this.cantidadDeJugadas ++;
      this.resultado = this.juegoPPT.evaluarResultado(eleccion);
      this.snackBar();
      this.eleccionMaquina = this.juegoPPT.maquinasPick;
      this.mostrarMensajePorTiempo();
      console.log(this.resultado);

      if(this.cantidadDeJugadas == 3)
      {
        this.habilitarboton = true;
        setTimeout(() => 
        {
            this.terminarJuego();
        },
        4000);
        
      }
  }

  snackBar()
  {
      if(this.resultado == "draw")
      {
        this.MostarMensaje(false);
        this.mensajeSnack = "Empate";
      }
      else if(this.resultado == "win")
      {
        this.MostarMensaje(true);
        this.mensajeSnack = "¡Ganaste!"
      }
      else
      {
        this.MostarMensaje(false);
        this.mensajeSnack = "Perdiste :(";
      }
  }

  terminarJuego()
  {
    this.mostrarParaResolver = false;
    this.mostrarBotonesFinal = true;
    this.puntaje  = this.juegoPPT.puntaje;
  }

  mostrarMensajePorTiempo()
  {
    this.mostrarEleccionMaquina = true;
    this.interval = setInterval(()=>{
      this.mostrarEleccionMaquina = false;
      }, 3000);
  }

  ReiniciarJuego()
  {
    this.juegoPPT.Reiniciar();
    this.cantidadDeJugadas = 0;
    this.habilitarboton = false;
    this.mostrarBotonesFinal=false;
    this.mostrarParaResolver = true;
    
  }

  GuardarPuntaje()
  {
    var puntajes = JSON.parse(localStorage.getItem("PuntajesPPT"));
    var usuario = localStorage.getItem("usuario");
    
    if(usuario === null)
      usuario  = "Invitado";


    puntajes["puntajes"].push({"usuario":usuario,"puntaje":this.puntaje});
    localStorage.setItem("PuntajesPPT",JSON.stringify(puntajes));

    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesPPT"));

    this.ReiniciarJuego();
  }

  MostarMensaje(ganador:boolean) {
    
    var x = document.getElementById("snackbar");
    
    if(ganador)
      x.className = "show Ganador";  
    else
      x.className = "show Perdedor";
    
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);

  
   }  

}
