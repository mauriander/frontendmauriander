import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaEducacion } from '../model/personaeducacion.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaeducacionService {
  //private apiUrl='https://backendargprogprueba.herokuapp.com/';
  //private apiUrl='http://localhost:8080/persona/9';
  //private apiUrl='http://backendmauriander/persona/9';
  private apiUrl='https://backendmauriander.onrender.com/oersona/9';

  constructor(private http:HttpClient) { }


  getPersonaEducaciones():Observable<PersonaEducacion[]>{
     return this.http.get<PersonaEducacion[]>(this.apiUrl+"ver/personaeducaciones");
  }

}
