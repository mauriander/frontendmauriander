import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEducacion } from '../model/tipoeducacion.model';


const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TipoeducacionService {
 //private apiUrl="http://localhost:8080/";
 private apiUrl='https://backendmauriander.onrender.com/';
 //private apiUrl='https://backendargprogprueba.herokuapp.com/';
 //private apiUrl='https://backendargprogprueba.herokuapp.com/';
  constructor(private http:HttpClient) { }


  getTipoEducaciones():Observable<TipoEducacion[]>{
     return this.http.get<TipoEducacion[]>(this.apiUrl+"ver/tipoeducaciones");
  }

  addTipoEducacion(tipoeducacion: TipoEducacion):Observable<TipoEducacion> {
    return this.http.post<TipoEducacion>(this.apiUrl+"new/tipoeducacion",tipoeducacion, httpOptions)
  }

    deleteTipoEducacion(tipoeducacion: TipoEducacion):Observable<TipoEducacion> { 
      const y=tipoeducacion.id;
      const url=this.apiUrl+"eliminar/tipoeducacion/"+y;
      return this.http.delete<TipoEducacion>(url);

    }
}

