import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { PiedrapapeltijeraComponent } from '../componentes/piedrapapeltijera/piedrapapeltijera.component';
import { AdivinaElPaisComponent } from '../componentes/adivina-el-pais/adivina-el-pais.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: LoginComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},

{ path: 'Juegos' ,
  component: JuegosComponent ,
  children:
     [{path: '' , component: MenuCardComponent},
      {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'PPT' , component: PiedrapapeltijeraComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'AdivinaPais' , component: AdivinaElPaisComponent},
      {path: 'Anagrama' , component: AnagramaComponent}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
