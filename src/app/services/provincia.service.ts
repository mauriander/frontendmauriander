import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Provincia } from '../model/provincia.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  //URL="https://backendargprogprueba.herokuapp.com/";;
 // private apiUrl='https://backendargprogprueba.herokuapp.com/';
  //private apiUrl='http://localhost:8080/';
  private apiUrl='https://backendmauriander.onrender.com/';
    constructor(private http: HttpClient) { }
  
    nuevaProvincia(provincia: Provincia):Observable<Provincia>{
  return this.http.post<Provincia>(this.apiUrl+"new/provincia",provincia,httpOptions);
      
  
    }
    buscarProvincia(id: number):Observable<Provincia>{
      const y=id;
        return this.http.get<Provincia>(this.apiUrl + "buscar/provincia/"+y);
          }

          
    borrarProvincia(provincia: Provincia): Observable<Provincia> {
      const y=provincia.id;
      
      const urle=this.apiUrl+"eliminar/provincia/"+y;
      return this.http.delete<Provincia>(urle); 
    }
  
    verProvincias():Observable<Provincia[]>{
      
      return this.http.get<Provincia[]>(this.apiUrl + "ver/provincias");
    }
  
    editarProvincia(provincia: Provincia): Observable<Provincia> {
      const y=provincia.id;
      return this.http.put<Provincia>(this.apiUrl + "editar/provincia/"+y, provincia,httpOptions);
    }
  
  }