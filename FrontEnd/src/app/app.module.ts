import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudiosCursadosComponent } from './componentes/estudios-cursados/estudios-cursados.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BotonNavComponent } from './componentes/boton-nav/boton-nav.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PortadaComponent,
    DatosPersonalesComponent,
    ExperienciaLaboralComponent,
    EstudiosCursadosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    BotonNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
