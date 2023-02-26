
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL='http://localhost:8080/persona/9';
  URL='https://backendmauriander.onrender.com/persona/9';
  //URL='https://backendargprogprueba.herokuapp.com/persona/9';
  
  //URL2='https://backendargprogprueba.herokuapp.com/';
  //URL2='http://localhost:8080/';
  
  URL2='https://backendmauriander.onrender.com/';
  constructor(private http: HttpClient) { }

  getPersona():Observable<Persona>{
    console.log("PERSONA"+ this.URL)

    return this.http.get<Persona>(this.URL);
     
  }
  obtenerDatos():Observable<any>{
    //console.log(this.URL);

    //return this.http.get("./assets/data/data.json");
    return this.http.get<any>(this.URL);
    
      }

   editPersona  (persona: Persona):Observable<Persona> {
        alert("Llego a servicio de editar proyecto"+ persona.id + "y su nombre "+persona.nombre);
        const y=persona.id;
      return this.http.put<Persona>(this.URL2+"editar/persona/"+y,persona,httpOptions);}
  
  
}




 