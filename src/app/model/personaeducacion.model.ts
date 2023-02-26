import { Persona } from "./persona.model";
import { Educacion } from "./educacion.model";

export interface PersonaEducacion{
id?:number,
persona:Persona[],
educacion:Educacion[],

}