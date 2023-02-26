import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
//llamamos al servicio de autenticacion

constructor(private autenticacionServicio:AutenticacionService, private rutas:Router){}
/*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     console.log("TRUEEEEE");
   //  return true;
   //HARDCODEADO

    //si esta autenticado retorno true;

    let currentUser=this.autenticacionServicio.UsuarioAutenticado;
       


    //si existe y tiene un access token
   // if(currentUser && currentUser.accesToken){
    if(currentUser ){
      alert("true");
      console.log("TRUEEEEE");
      console.log(currentUser.accessToken);
      return true;
    }else{
      //lo redirigimos a inicar sesion
      alert("te voy a redirigin a iniciar sesion");
      this.rutas.navigate(['/iniciar-sesion']);
     alert("false");
     console.log("PIU FALASE"+currentUser+" VS "+currentUser.accesToken);
      return false;
    }
   
  }
*/

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    let currentUser=this.autenticacionServicio.UsuarioAutenticado;
   return true;
    if(currentUser && currentUser.accessToken){
      return true;
    }else{
      console.log("Entre por aca para ir a login");
      this.rutas.navigate(['/iniciar-sesion']);
     // this.rutas.navigate(['/portfolio']);
      return false;
    }
}



/*

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //si existe y tiene un access token

      let currentUser=this.autenticacionServicio.UsuarioAutenticado;
      return true;
      
     
  }
*/
  
}
