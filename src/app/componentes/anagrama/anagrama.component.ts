import { Component, OnInit } from '@angular/core';
import {JuegoAnagrama} from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  mostrarJugarBtn:boolean=true;
  mostrarParaResolver:boolean=false;
  entradaUsuario:string;
  miAnagrama:JuegoAnagrama;
  wordToSort:string;
  numeroParaNoRepetir:number[]  = new Array;
  lastIndex:number;
  mostrarFinalBtn:boolean;
  mostrarToF:boolean;
  mensajeToF:string;
  interval:any;
  puntajesParaTabla:any;



  palabrasToSort;

  constructor() { 

     this.miAnagrama = new JuegoAnagrama();
     this.palabrasToSort = this.miAnagrama.misPalabras;
     this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAnagrama"));
     console.log(this.puntajesParaTabla);

  }

  ComenzarJuego()
  {
    this.mostrarJugarBtn = false;
    this.mostrarParaResolver=true;
    this.mostrarFinalBtn = false;
     
    this.lastIndex = this.randomIntFromInterval();  
    this.wordToSort = this.palabrasToSort[this.lastIndex].desordenada;
  }

  VerificarPalabra()
  { 
    if(this.entradaUsuario != '')
    {
        if(this.palabrasToSort[this.lastIndex].ordenada == this.entradaUsuario.toLowerCase())
        {
          
          console.log("Correcto");
          this.miAnagrama.cantidadAdivinadas++;
          this.miAnagrama.cantidadJugadas++;
          if(this.miAnagrama.cantidadJugadas == 5)
          { 
              this.TerminarJuego();
          }
          else
          {
            this.lastIndex = this.randomIntFromInterval();
            this.wordToSort = this.palabrasToSort[this.lastIndex].desordenada;
            this.mensajeToF = "Correcto";
            this.mostrarMensajePorTiempo();
            
          }

          
        }
        else
        {
          this.miAnagrama.cantidadErrores++;
          this.mensajeToF = "Incorrecto";
          this.mostrarMensajePorTiempo();
          console.log("Palabra incorrecta");
        }
    }
    else
    {
      //Hacer algo para cuando no ingresa nada
      console.log("escribi algo pa");
    }    
      this.entradaUsuario = '';
  }

  mostrarMensajePorTiempo()
  {
    this.mostrarToF = true;
    this.interval = setInterval(()=>{
        this.mostrarToF = false;
      }, 7000);
  }

  SiguientePalabra()
  {
    this.miAnagrama.cantidadErrores++;
    this.miAnagrama.cantidadJugadas++;
    
            if(this.miAnagrama.cantidadJugadas == 5)
            { 
                this.TerminarJuego();
            }
            else
            {
              this.lastIndex = this.randomIntFromInterval();
              this.wordToSort = this.palabrasToSort[this.lastIndex].desordenada;
              
            }
    this.entradaUsuario = '';
  }

  TerminarJuego()
  {
    this.numeroParaNoRepetir = [];
    this.miAnagrama.FinishGame();
    this.mostrarParaResolver = false;
    this.mostrarFinalBtn = true;
  }

  private randomIntFromInterval()
  {
    
     var minumero = Math.floor(Math.random()*(20-0+1)+0); 
     
    if(this.numeroParaNoRepetir.indexOf(minumero) == -1)
    {
      this.numeroParaNoRepetir.push(minumero);
      //console.log("No contiene el numero" + minumero);
      //console.log("mi array quedo asi" + this.numeroParaNoRepetir);
    }
    else
    {
      while (this.numeroParaNoRepetir.indexOf(minumero) != -1) {
        var minumero = Math.floor(Math.random()*(20-0+1)+0);      
      }
    }

    return minumero;

  }

  //Guardar puntajes
  GuardarPuntaje()
  {
    var puntajes = JSON.parse(localStorage.getItem("PuntajesAnagrama"));
    var usuario = localStorage.getItem("usuario");
    
    if(usuario === null)
    usuario  = "Invitado";

    

    puntajes["puntajes"].push({"usuario":usuario,"puntaje":this.miAnagrama.puntajeFinal});
    localStorage.setItem("PuntajesAnagrama",JSON.stringify(puntajes));

    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAnagrama"));

    this.ReiniciarJuego();
  }

  ReiniciarJuego()
  {
    this.miAnagrama.Reiniciar();
    this.ComenzarJuego();
  }



  ngOnInit() {
    
  }

}
