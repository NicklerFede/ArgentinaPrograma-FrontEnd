import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent} from './componentes/cabecera/cabecera.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AcercaDeUsuarioComponent } from './componentes/acerca-de-usuario/acerca-de-usuario.component';
import { CabeceraUsuarioComponent } from './componentes/cabecera-usuario/cabecera-usuario.component';
import { EducacionUsuarioComponent } from './componentes/educacion-usuario/educacion-usuario.component';
import { ExperienciaUsuarioComponent } from './componentes/experiencia-usuario/experiencia-usuario.component';
import { HeaderUsuarioComponent } from './componentes/header-usuario/header-usuario.component';
import { ProyectoUsuarioComponent } from './componentes/proyecto-usuario/proyecto-usuario.component';
import { SkillsUsuarioComponent } from './componentes/skills-usuario/skills-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    PortfolioComponent,
    UsuarioComponent,
    AcercaDeUsuarioComponent,
    CabeceraUsuarioComponent,
    EducacionUsuarioComponent,
    ExperienciaUsuarioComponent,
    HeaderUsuarioComponent,
    ProyectoUsuarioComponent,
    SkillsUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
