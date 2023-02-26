import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EducacionService } from 'src/app/services/educacion.service'; 
import { Educacion } from 'src/app/model/educacion.model';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { AddEducacionComponent } from '../add-educacion/add-educacion.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //@ViewChild("addEducacion") addEducacio!: AddEducacionComponent;
  @Input()onSession!:boolean;
  onSessionedu!:boolean;
  educaciones: Educacion[]=[];
  constructor(private educacionService: EducacionService,private ruta:Router) {}
  @Output() btnClick= new EventEmitter;

  ngOnInit(): void {this.getEducaciones(); this.onSessionedu=false; }

  getEducaciones(){
  this.educacionService
    .getEducaciones().subscribe(res=>{
      //console.log(res); 
      this.educaciones=res;

  })
}

  clickme():void{
    alert("Entramos en edicion"); 
   if(this.onSessionedu===true)
   {this.onSessionedu=false;}
   else{this.onSessionedu=true;}
    
    //console.log('Redirigir despues del click1');
    //this.ngOnInit();
   // console.log('Redirigir despues del click2');
    
  }
/*
    addTipoEducacion(tipoeducacion: TipoEducacion) {
    
      this.tipoeducacionService
        .addTipoEducacion(tipoeducacion)
        .subscribe((addtipoeducacion) => {this.tipoeducaciones.push(addtipoeducacion);   this.ngOnInit();});
  
      
    }
*/
   
  addEducacion(education: Educacion) {
    
      this.educacionService
      .addEducacion(education)
      .subscribe((addeducacion) => {this.educaciones.push(addeducacion);   this.ngOnInit();});

    
  }
  
  editEducacion(education: Educacion) {
 /* alert("Editicion en componente");
  this.educacionService.editEducacion(education).subscribe((educacionEditada) => {
    this.buscaEdu(educacionEditada);
  });  */
  alert("Hize push qui"+education.nombre);
  this.educacionService
     .editEducacion(education)
    .subscribe((editeducacion) => {this.educaciones.push(editeducacion);  });
    
   // this.addEducacion.setEducacion(education);
  }
 

  drop2(event: CdkDragDrop<Educacion[]>) {
  
    moveItemInArray(this.educaciones, event.previousIndex, event.currentIndex);
  }

  deleteEducacion(educacion: Educacion) {
  this.educacionService.deleteEducacion(educacion).subscribe(
      () =>
        (this.educaciones = this.educaciones.filter((t) => {
          return t.id !== educacion.id;
        }))
    );
  }
/*
  private buscaEdu(educacion: Educacion) {
		for (let index = 0; index < this.educaciones.length; index++) {
			if (this.educaciones[index].id === educacion.id) {
				this.educaciones[index] = educacion;

				break;
			}
		}
	}*/

}
