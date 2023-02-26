import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfololioComponent } from './components/portfololio/portfololio.component';
import { GuardGuard } from './services/guard.guard';


// canActivate:[GuardGuard] protegemos la ruta mi portfolio con guard

const routes: Routes = [{path:'portfolio', component:PortfololioComponent, canActivate:[GuardGuard]},
{path:'iniciar-sesion', component:IniciarSesionComponent}
,
{path:'',redirectTo:'iniciar-sesion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
