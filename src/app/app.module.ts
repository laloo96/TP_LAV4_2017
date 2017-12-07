import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

//**********************SERVICIOS************************//
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { JuegoServiceService } from './servicios/juego-service.service';
import { RegistroService } from './servicios/registro.service';
import { LoginService } from './servicios/login.service';

/************************COMPONENTES**************************/
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { LoginComponent } from './componentes/login/login.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';

/**********************MATERIAL****************************/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';



//ng build --prod --no-aot

import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { PiedrapapeltijeraComponent } from './componentes/piedrapapeltijera/piedrapapeltijera.component';
import { AdivinaElPaisComponent } from './componentes/adivina-el-pais/adivina-el-pais.component';


@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    PiedrapapeltijeraComponent,
    AdivinaElPaisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
    
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService,ArchivosJugadoresService,JugadoresService,RegistroService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }   
 