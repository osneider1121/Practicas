import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(private http:HttpClient) { }
  Url='http://localhost:9898/personas';
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.idPersona,persona);
  }
  updatePersona2(persona:Persona){
    return this.http.put<Persona>(this.Url,persona);
  }
}
