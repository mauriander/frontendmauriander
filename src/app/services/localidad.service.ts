import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../model/localidad.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {




  //private apiUrl="https://backendargprogprueba.herokuapp.com/";
  //private apiUrl='http://localhost:8080/';
  private apiUrl='https://backendmauriander.onrender.com/';
 //private apiUrl='https://backendargprogprueba.herokuapp.com/';
    constructor(private http: HttpClient) { }
  
    nuevaLocalidad(localidad: Localidad):Observable<Localidad>{
  return this.http.post<Localidad>(this.apiUrl+"new/localidad",localidad,httpOptions);
          }
          
    buscarLocalidad(id: any):Observable<Localidad>{
      const y=id;
        return this.http.get<Localidad>(this.apiUrl + "buscar/localidad/"+y);
          }
          
         
          
    
    borrarLocalidad(localidad: Localidad): Observable<Localidad> {
      const y=localidad.id;
      
      const urle=this.apiUrl+"eliminar/localidad/"+y;
      return this.http.delete<Localidad>(urle); 
    }
  
    verLocalidades():Observable<Localidad[]>{
      
      return this.http.get<Localidad[]>(this.apiUrl + "ver/localidades");
    }
  
    editarLocalidad(localidad: Localidad): Observable<Localidad> {
      const y=localidad.id;
      return this.http.put<Localidad>(this.apiUrl + "editar/localidad/"+y, localidad,httpOptions);
    }
  

}
