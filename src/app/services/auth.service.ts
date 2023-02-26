import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private URL ='http://localhost:8080';
  
 
 private authURL='https://backendmauriander.onrender.com/auth/';
  //private authURL ='http://localhost:8080/auth/';
  currentUserubject: BehaviorSubject<any> ;
  constructor(private httpClient:HttpClient) { 

    this.currentUserubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  signin(user1:any){    
    return this.httpClient.post(`${this.authURL}usuario/login`, user1);  
  }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+ 'login',loginUsuario)
  }
  get UsuarioAutenticado() {
    console.log('usaurio autenticado ' + this.currentUserubject.value);
    return this.currentUserubject.value;
  }



  
}
