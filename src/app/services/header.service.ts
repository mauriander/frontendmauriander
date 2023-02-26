import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Este servicio no lo voy a usar 
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //private apiUrl='https://backendargprogprueba.herokuapp.com/';
   //private apiUrl='http://localhost:8080/';
   private apiUrl='https://backendmauriander.onrender.com/';
   //private apiUrl='';
  constructor(private http:HttpClient) { }


  updatePerfil(nombre:string, apellido: string, ubicacion: string, fechaNac: string, email:string, urlFoto:string, id : number):Observable<any> {
    return this.http.patch<any>(this.apiUrl + "modificar/" + id , 
    {'nombre':nombre, 'apellido':apellido, 'ubicacion':ubicacion, 'fechaNac':fechaNac, 'email':email, 'url_foto':urlFoto});
  }

 
}
