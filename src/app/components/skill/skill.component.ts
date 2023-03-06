import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  roles: Array<string>=[];
  rol: String="";
  rol2: String="";

 // @Input() skill!:Skill;
 //@Input()onSession!:boolean;
  skills: Skill[]=[];

  constructor(private skillService: SkillService, private tokenService:TokenService) {}
  @Output() btnClick= new EventEmitter;
  @Input()onSession!:boolean;
  onSessionski!:boolean;
  frol!:boolean;

  ngOnInit(): void {this.verSkills(); 
  this.roles=this.tokenService.getAuthorities();
  this.rol=this.roles[0];//user
  this.rol2=this.roles[1];//admin
  if(this.rol2=="ROLE_ADMIN"){
    this.frol=true; }
    else{this.frol=false;}
 
  }

  verSkills(){
    this.skillService
    .verSkills().subscribe(res=>{
      //console.log(res); 
      this.skills=res;

  })
}


clickme():void{
  
 // alert("Entramos en edicion"); 
 if(this.onSessionski===true)
 {this.onSessionski=false;}
 else{this.onSessionski=true;}
  
  //console.log('Redirigir despues del click1');
  //this.ngOnInit();
 // console.log('Redirigir despues del click2');
  
}
drop(event: CdkDragDrop<Skill[]>) {
  
  moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
}
/*
private actualizarSkill(skill: Skill) {
  for (let index = 0; index < this.skills.length; index++) {
    if (this.skills[index].id === skill.id) {
      this.skills[index] = skill;
      break;
    }
  }
}*/


nuevaSkill(skill: Skill){
  //return this.http.post<Skill>(this.URL+"new/skill",skill);
  this.skillService
  .nuevaSkill(skill)
  .subscribe((nuevaskill) => {this.skills.push(nuevaskill); this.ngOnInit(); });

  
 
    }

borrarSkill(skill: Skill) {
  //
 
  
  
  this.skillService.borrarSkill(skill).subscribe(
    () =>
      (this.skills = this.skills.filter((t) => {
        return t.id !== skill.id;
      }))
       );
       alert("Se elimino la Skill "+ skill.nombre);
      
}
editarSkill(skill: Skill) {
  /* alert("Editicion en componente");
   this.educacionService.editEducacion(education).subscribe((educacionEditada) => {
     this.buscaEdu(educacionEditada);
   });  */
  // alert("Hize push qui"+skill.nombre);
   this.skillService
      .editarSkill(skill)
     .subscribe((editskill) => {this.skills.push(editskill);  this.ngOnInit(); });
     
    // this.addEducacion.setEducacion(education);
   }


}
