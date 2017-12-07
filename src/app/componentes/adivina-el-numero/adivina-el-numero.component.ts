
import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {


  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  mostrarJuego:boolean = true;
  mostrarBTNjugar:boolean;
  puntajesParaTabla:any;
  resultadoJuego:boolean;
 
  constructor() { 
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
    this.mostrarBTNjugar = true;
    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAdivina"));
  }
  
  
  
  generarnumero() {
    this.mostrarBTNjugar = false;
    this.nuevoJuego.generarnumero();
    this.contador=0;
  }
  
  
  
  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    
    this.resultadoJuego = this.nuevoJuego.verificar();

    if (this.resultadoJuego){

      this.MostarMensaje("Sos un Genio!!!",true);
      this.guardarPuntaje();
      this.nuevoJuego.numeroSecreto=0;

    }
    else
    {

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  guardarPuntaje()
  {
    var puntajes = JSON.parse(localStorage.getItem("PuntajesAdivina"));
    var usuario = localStorage.getItem("usuario");

    if(usuario === null)
      usuario  = "Invitado";

    
      puntajes["puntajes"].push({"usuario":usuario,"intentos":this.contador});
    localStorage.setItem("PuntajesAdivina",JSON.stringify(puntajes));

    this.puntajesParaTabla = JSON.parse(localStorage.getItem("PuntajesAdivina"));

  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    
    this.Mensajes=mensaje;    
    
    var x = document.getElementById("snackbar");
    
    if(ganador)
      x.className = "show Ganador";  
    else
      x.className = "show Perdedor";
    
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  
  
   ngOnInit() {
  }

}
