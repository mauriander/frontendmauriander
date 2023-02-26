import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from "ng-circle-progress";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeadComponent } from './components/head/head.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfololioComponent } from './components/portfololio/portfololio.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { TipoeducacionComponent } from './components/tipoeducacion/tipoeducacion.component';
import { TipoeducacionItemComponent } from './components/tipoeducacion-item/tipoeducacion-item.component';
import { AddTipoeducacionComponent } from './components/add-tipoeducacion/add-tipoeducacion.component';
import { AddEducacionComponent } from './components/add-educacion/add-educacion.component';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProvinciaItemComponent } from './components/provincia-item/provincia-item.component';
import { LocalidadItemComponent } from './components/localidad-item/localidad-item.component';
import { AcercadeItemComponent } from './components/acercade-item/acercade-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProjectsComponent,
    AddProjectComponent,
    ProjectItemComponent,
    HeadComponent,
    IniciarSesionComponent,
    PortfololioComponent,
    AddSkillComponent,
    SkillItemComponent,
    AddExperienceComponent,
    ExperienceItemComponent,
    TipoeducacionComponent,
    TipoeducacionItemComponent,
    AddTipoeducacionComponent,
    AddEducacionComponent,
    EducacionItemComponent,
    LoginComponent,
    ContactComponent,
    ProvinciaItemComponent,
    LocalidadItemComponent,
    AcercadeItemComponent,
    

   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    FontAwesomeModule,DragDropModule,
    NgCircleProgressModule.forRoot({}),
    NgbModule,
  ],
  providers: [ NgbActiveModal,PortfolioService,{provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
