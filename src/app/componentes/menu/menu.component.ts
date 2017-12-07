import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarSalir:Boolean = false;
  mostrarIngresar:boolean = true;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
      if(localStorage.getItem('usuario') !== null){
          this.mostrarIngresar = false;
          this.mostrarSalir = true;
      }
    }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'AdivinaPais':
        this.router.navigate(['/Juegos/AdivinaPais']);
      break;
      case 'PPT':
        this.router.navigate(['/Juegos/PPT']);
      break;
      case 'Anagrama':
      this.router.navigate(['/Juegos/Anagrama']);
      break;        
    }
  }

  Salir()
  {
    localStorage.removeItem("usuario");
    this.router.navigate(['/Principal']);
  }

}
