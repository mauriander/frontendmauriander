import { Skill } from "./skill.model";
import { Proyecto } from "./proyecto.model";
import { Experiencia } from "./experiencia.model";
import { Localidad } from "./localidad.model";
export interface Persona{
id?:number,
nombre: string,
skills:Skill[],
proyectos: Proyecto[],
experiences: Experiencia[],
apellido: string,
fenac: Date,
urlimage: string,
email: string,
localidad: Localidad,


}