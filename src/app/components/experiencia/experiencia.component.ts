import { Component, EventEmitter, OnInit, Output, enableProdMode, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Persona } from 'src/app/model/persona.model';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiences: Experiencia[]=[];
  @Output() puedeeditarex=false;
  constructor(private experienceService: ExperienciaService) {}
  @Output() btnClick= new EventEmitter;
  @Input()onSession!:boolean;
  @Input()onSessionexp!:boolean;
  
  //this.onSessionexp=false;
   
  per!:Persona;
  pruebadedatos:any;
  pers:any;
  ngOnInit(): void {this.getExperiences();
   }

  getExperiences(){
    this.experienceService
    .getExperiences().subscribe(res=>{
      
      //console.log("res "+JSON.parse()); 
      
      this.experiences=res;
      
      
      
  })
  
 
  
  

}


getEdicionex():boolean{
  return this.puedeeditarex;
}

  clickme():void {
   //alert("Entramos en edicion"); 
  if(this.onSessionexp===true)
  {this.onSessionexp=false;}
  else{this.onSessionexp=true;}
  
  }
   


  addExperience(experience: Experiencia) {
   
    this.experienceService
      .addExperience(experience)
      .subscribe((addexperience) => {this.experiences.push(addexperience);   this.ngOnInit();});
    
    
    
  }

  drop2(event: CdkDragDrop<Experiencia[]>) {
  
    moveItemInArray(this.experiences, event.previousIndex, event.currentIndex);
  }

  deleteExperience(experience: Experiencia) {
    alert("deleteado2");
    
    this.experienceService.deleteExperience(experience).subscribe(
      () =>
        (this.experiences = this.experiences.filter((t) => {
          return t.id !== experience.id;
        }))
    );
     
  }

  editExperience(experience: Experiencia) {
       alert("Hize push qui"+experience.nombre);
     this.experienceService
        .editExperience(experience)
       .subscribe((editexperience) => {this.experiences.push(editexperience);  this.ngOnInit();  });
       
      // this.addEducacion.setEducacion(education);
     }






}
