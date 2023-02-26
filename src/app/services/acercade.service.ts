


import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import{Acercade} from '../model/acercade';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

 
 //private apiUrl='http://localho st:8080/';
 
 private apiUrl='https://backendmauriander.onrender.com/';
  constructor(private http:HttpClient) { }


  verAcercades():Observable<Acercade[]>{
     return this.http.get<Acercade[]>(this.apiUrl+"ver/acercades");
  }

  nuevoAcercade(project: Acercade):Observable<Acercade> {
    return this.http.post<Acercade>(this.apiUrl+"new/acercade",project, httpOptions)
  }

    eliminarAcercade(project: Acercade):Observable<Acercade> { 
      const y=project.id;
      const url=this.apiUrl+"eliminar/acercade/"+y;
      return this.http.delete<Acercade>(url);

    }

    buscarAcercde(id: any):Observable<Acercade>{
      const y=id;
        return this.http.get<Acercade>(this.apiUrl + "buscar/acercade/"+y);
          }

    editarAcercade(project: Acercade):Observable<Acercade> {
      alert("Llego a servicio de editar acercade"+ project.id);
  const y=project.id;
    return this.http.put<Acercade>(this.apiUrl+"editar/acercade/"+y,project,httpOptions);}

    
  

}
