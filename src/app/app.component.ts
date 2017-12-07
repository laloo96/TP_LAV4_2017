import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  USP:string= '{"misUsuarios":[{"email":"admin@admin.com","password":"123456"},{"email":"user@mail.com","password":"123456"}]}';
  puntajesAnagrama:string = '{"puntajes":[{"usuario":"roberto","puntaje":3200},{"usuario":"martin","puntaje":2500}]}'
  puntajesAgilidad:string = '{"puntajes":[{"usuario":"roberto","tiempo":1,"puntaje":5000},{"usuario":"martin","tiempo":3,"puntaje":2000}]}';
  puntajesPais:string = '{"puntajes":[{"usuario":"roberto","puntaje":5000},{"usuario":"martin","puntaje":2000}]}';
  puntajesPPT:string = '{"puntajes":[{"usuario":"Alvaro","puntaje":5000},{"usuario":"Julio","puntaje":2000}]}';
  puntajesAdivina:string = '{"puntajes":[{"usuario":"Alvaro","intentos":"2"},{"usuario":"Julio","intentos":"3"}]}';
  
  ngOnInit()
  {
    localStorage.clear();
    localStorage.setItem("USP",this.USP);
    localStorage.setItem("PuntajesAnagrama",this.puntajesAnagrama);
    localStorage.setItem("PuntajesAgilidad",this.puntajesAgilidad);
    localStorage.setItem("PuntajesPais",this.puntajesPais);
    localStorage.setItem("PuntajesPPT",this.puntajesPPT);
    localStorage.setItem("PuntajesAdivina",this.puntajesAdivina);
  }
  



}
