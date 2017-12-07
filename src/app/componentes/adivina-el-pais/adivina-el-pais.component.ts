import { Component, OnInit } from '@angular/core';
import {JuegoPais} from '../../clases/juego-pais';
import { AnimationGroupPlayer } from '@angular/animations/src/players/animation_group_player';
import { BaseRequestOptions } from '@angular/http/src/base_request_options';
import { BROWSER_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { createTimelineInstruction } from '@angular/animations/browser/src/dsl/animation_timeline_instruction';
import { ChildrenOutletContexts } from '@angular/router/src/router_outlet_context';

@Component({
  selector: 'app-adivina-el-pais',
  templateUrl: './adivina-el-pais.component.html',
  styleUrls: ['./adivina-el-pais.component.css']
})
export class AdivinaElPaisComponent implements OnInit {

  misPaises:any;
  mijuego:JuegoPais = new JuegoPais();
  elIndex:number = 32;
  mostrarParaResolver:boolean = false;
  mostrarBtnJugar:boolean = true;
  numeroParaNoRepetir:number[]  = new Array;
  lastIndex:number;
  opcionIngresada:any;
  cantidadMostrados:number = 0;
  mostrarBotonesFinal:boolean = false;
  mostrarToF:boolean=false;
  interval:any;
  mensajeToF:string;
  puntaje:number;
  puntajesParaTabla:any;

  constructor() { 
    this.misPaises = JSON.parse(this.mijuego.misPaises);
    console.log(this.misPaises);
    this.cantidadMostrados = 0;
    this.lastIndex = null;
    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesPais"));
  }

  ngOnInit() {
  }

  tomarRespuesta()
  {   
      if(this.mijuego.enviarInfo(this.opcionIngresada,this.misPaises["losPaises"][this.lastIndex].rta))
      {
        this.mensajeToF = "Correcto"
        this.mostrarMensajePorTiempo();
      }
      else
      {
        this.mensajeToF = "Incorrecto";
        this.mostrarMensajePorTiempo();
      }
      
      
      
      if(this.cantidadMostrados >= 4)
        this.terminarJuego();
      else
        this.lastIndex = this.randomIntFromInterval();

      this.opcionIngresada = "";
      this.cantidadMostrados++;
  }

  ReiniciarJuego()
  {
    this.mijuego.reiniciarJuego();
    this.cantidadMostrados = 0;
    this.lastIndex = 0;  
    this.numeroParaNoRepetir = [];
    this.opcionIngresada = "";
    this.mostrarBotonesFinal= false;
    this.mostrarParaResolver = true;
  }

  GuardarPuntaje()
  {
    var puntajes = JSON.parse(localStorage.getItem("PuntajesPais"));
    var usuario = localStorage.getItem("usuario");

    if(usuario === null)
    usuario  = "Invitado";

    
    puntajes["puntajes"].push({"usuario":usuario,"puntaje":this.puntaje});
    localStorage.setItem("PuntajesPais",JSON.stringify(puntajes));

    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesPais"));

    this.ReiniciarJuego();
  }

  terminarJuego()
  {
    
    this.puntaje = this.mijuego.PuntajeFinal();
    this.mostrarParaResolver = false;
    this.mostrarBotonesFinal = true;

  }

  mostrarMensajePorTiempo()
  { 
    this.mostrarToF = true;
    this.interval = setInterval(()=>{
        this.mostrarToF = false;
      }, 3000);
  }

  private randomIntFromInterval()
  {
    
     var minumero = Math.floor(Math.random()*(47+1)); 
     
    if(this.numeroParaNoRepetir.indexOf(minumero) == -1)
    {
      this.numeroParaNoRepetir.push(minumero);
      //console.log("No contiene el numero" + minumero);
      //console.log("mi array quedo asi" + this.numeroParaNoRepetir);
    }
    else
    {
      while (this.numeroParaNoRepetir.indexOf(minumero) != -1) {
        var minumero = Math.floor(Math.random()*(47+1)+0);      
      }
    }

    return minumero;

  }

  comenzarJuego()
  {
    this.mostrarBtnJugar = false;
    this.mostrarParaResolver = true;
    this.lastIndex = this.randomIntFromInterval();
  }

}
