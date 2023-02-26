import { Provincia } from "./provincia.model";

/*
export class Localidad {
    id?: number;
    cp:number;
    nombre: String;
    provincia: Provincia;
    constructor(id:number, cp:number, nombre:String, provincia:Provincia)    {
this.id=id;
this.cp=cp;
this.nombre=nombre;
this.provincia=provincia;

    }

    verProvincia():Provincia{
        return this.provincia;
    }

    verNombreProvincia():String{
        return this.provincia.nombre;
    }
    

}*/

export interface Localidad{

id?: number,
cp:number,
nombre: String,
province: Provincia,


}