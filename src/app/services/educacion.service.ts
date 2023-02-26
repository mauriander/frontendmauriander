import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 
  //private apiUrl="https://backendargprogprueba.herokuapp.com/";
 // private apiUrl='https://backendargprogprueba.herokuapp.com/';
 
 //private apiUrl='http://localhost:8080/';
 private apiUrl='https://backendmauriander.onrender.com/';

 // private apiServerUrl = environment.urlBase;
  //private apiUrl='

  constructor(private http:HttpClient) { }


  getEducaciones():Observable<Educacion[]>{
     return this.http.get<Educacion[]>(this.apiUrl+"ver/educations");
  }

  addEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.apiUrl+"new/education",educacion,httpOptions);
  }

    deleteEducacion(educacion: Educacion):Observable<Educacion> { 
      const y=educacion.id;
      const url=this.apiUrl+"eliminar/education/"+y;
      return this.http.delete<Educacion>(url); 
}
  editEducacion(educacion: Educacion):Observable<Educacion> {
    alert("Llego a servicio de editar education"+ educacion.id + "y su nombre "+educacion.nombre);
const y=educacion.id;
  return this.http.put<Educacion>(this.apiUrl+"editar/education/"+y,educacion,httpOptions);}

 edit2Educacion(educacion: Educacion):Observable<Educacion> {
   alert("Llego a servicio de editar 2 educacion"+ educacion.id + "y su nombre "+educacion.nombre);
  
  return this.http.put<Educacion>(this.apiUrl+"edit/education/",educacion,httpOptions);
}



}
