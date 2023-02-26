import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
 /* constructor(private autenticacionServicio: AutenticacionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Capturamos, agregamos token
    //En authenticationsubjet que guarda los estados, retornamos los valores
    let currentUser = this.autenticacionServicio.UsuarioAutenticado;
  if (currentUser && currentUser.accessToken) {
    //if (currentUser)  {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        //Authorization: `$(currentUser.accessToken)`,
        },
      });
      

    }
    console.log("Interceptor esta corriendo..."+ JSON.stringify(currentUser))

    return next.handle(req);
  }*/


  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let intReq=req;
    const token= this.tokenService.getToken();
    if(token!=null){
      intReq = req.clone({
       headers: req.headers.set('Authorization','Bearer'+ token)
      });

    }
    
    return next.handle(intReq);
  }
}




  

 
