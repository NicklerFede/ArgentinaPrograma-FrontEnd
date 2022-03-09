import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AcercaDeUsuarioComponent,
    CabeceraUsuarioComponent,
    EducacionUsuarioComponent,
    ExperienciaUsuarioComponent,
    HeaderUsuarioComponent,
    ProyectoUsuarioComponent,
    SkillsUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
