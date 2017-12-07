import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  mostrarSalir:Boolean = false;
  mostrarIR:boolean = true;

  constructor(public router:Router) { 
      if(localStorage.getItem('usuario') !== null){
          this.mostrarIR = false;
          this.mostrarSalir = true;
      }
    }
  ngOnInit() {
  }

  Salir()
  {
    localStorage.removeItem("usuario");
    this.router.navigate(['/Principal']);
  }

}
