import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { Proyecto } from '../model/proyecto.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
//private apiUrl='http://localhost:5000/projects/';
//private apiUrl='https://backendargprogprueba.herokuapp.com/';
//private apiUrl='http://localhost:8080/';
private apiUrl='https://backendmauriander.onrender.com/';

//URL="https://backendargprogprueba.herokuapp.com/";
  constructor(private http:HttpClient) { }


  getProjects():Observable<Proyecto[]>{
     return this.http.get<Proyecto[]>(this.apiUrl+"ver/proyectos");
  }

  addProject(project: Proyecto):Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl+"new/proyecto",project, httpOptions)
  }

    deleteProject(project: Proyecto):Observable<Proyecto> { 
      const y=project.id;
      const url=this.apiUrl+"eliminar/proyecto/"+y;
      return this.http.delete<Proyecto>(url);

    }

    editProject(project: Proyecto):Observable<Proyecto> {
      alert("Llego a servicio de editar proyecto"+ project.id + "y su nombre "+project.nombre);
  const y=project.id;
    return this.http.put<Proyecto>(this.apiUrl+"editar/proyecto/"+y,project,httpOptions);}

    
  
}
