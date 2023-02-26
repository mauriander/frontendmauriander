import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
 url="http://localhost:4200";
  //url="http://bbftrj2bquu6c8redwr2-mysql.services.clever-cloud.com";
  //url="http://bac";
  
//url='https://backendargprogprueba.herokuapp.com/';
  currentUserubject: BehaviorSubject<any>;
  //currentUserubject: BehaviorSubject<any> | undefined;
  //constructor(private htttp:HttpClient,private cookies:CookieService) {
  constructor(private htttp: HttpClient, private router: Router) {
    console.log('el servicio de autentucacion al menos llega hasta aaca');
    this.currentUserubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
    console.log('usaurio autenticado ' + this.currentUserubject.value);
    //alert(    "el servicio de autentucacion al menos llega hasta aca");
  }

  IniciarSesion(credenciales: any): Observable<any> {
    //pipe encadena operadores...Cuando obtengo los datos puedo modificarlo y despues pasarlo a los componentes
    return this.htttp.post(this.url, credenciales).pipe(
      map((data) => {
        //storage almacena datos de forma local local storage y session storage...Indefinida y session minetras este abierta luego se borra
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        //llevamos al storage la data, es decir lo que nos devuelve la api, que va a ser el TOKKEN, QUE VAMOS A USAR PARA ACCERDER AL SERVIDOR
        this.currentUserubject.next(data);
        console.log('iniciar sesion de autentificacion');
        console.log(JSON.stringify(data));
        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    console.log('usaurio autenticado ' + this.currentUserubject.value);
    return this.currentUserubject.value;
  }
}
