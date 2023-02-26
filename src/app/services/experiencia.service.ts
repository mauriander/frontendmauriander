
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
//  private apiUrl="https://backendargprogprueba.herokuapp.com/";
//private apiUrl='http://localhost:8080/';
private apiUrl='https://backendmauriander.onrender.com/';

  constructor(private http:HttpClient) { }


  getExperiences():Observable<Experiencia[]>{
     return this.http.get<Experiencia[]>(this.apiUrl+"ver/experiencias");
  }

  addExperience(experiencia: Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl+"new/experiencia",experiencia, httpOptions)
  }

    deleteExperience(experiencia: Experiencia):Observable<Experiencia> { 
      const y=experiencia.id;
      const url=this.apiUrl+"eliminar/experiencia/"+y;
      return this.http.delete<Experiencia>(url);

    }
    editExperience(experiencia: Experiencia):Observable<Experiencia> {
      alert("Llego a servicio de editar educacion"+ experiencia.id + "y su trabjo es  "+experiencia.actual);
  const y=experiencia.id;
    return this.http.put<Experiencia>(this.apiUrl+"editar/experiencia/"+y,experiencia);}

}
