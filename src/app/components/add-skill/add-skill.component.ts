import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill.model';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
    mostrarForm: boolean=false;
    @Output() onNuevaSkill: EventEmitter<Skill> = new EventEmitter();
    @Output() btnClick= new EventEmitter;
   @Output() onAddSkill: EventEmitter<Skill>= new EventEmitter();
    //id: number=0;
//nombre:string='';
//valor:number=0;
submitted = false;
  closeResult="";
    persona!: Persona;
   // @Output() btnClick= new EventEmitter;
    form: FormGroup;
  validForm:boolean=true;
  ide:any;

    constructor(private servicio:PersonaService,private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal) { 
     this.form=this.formBuilder.group({
        id:[0],
        nombre:[""],
        valor:["", [Validators.required, Validators.min(1), Validators.max(100)]],
       persona:[""],

      });
      
  
  
    }


    open(content:any) {
      this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    


    ngOnInit(): void {this.getPersona();
     
     
     }

    getPersona(){
      this.servicio.getPersona().subscribe(res=>{
       // console.log(res); 
        this.persona=res;
        this.ide=res.id;
      })
    }
   /* setSkill(skill: Skill){
      this.form.patchValue({
        id: skill.id,
        nombre: skill.nombre,
        valor:skill.valor
        
  
      })  }
     */ 
      toogleForm(){
        this.mostrarForm=!this.mostrarForm;
      }

      onClick(){  this.btnClick.emit();}
  
  
      onSubmit(event:Event){
        this.submitted=true;
this.form.patchValue({persona:{id:this.ide}});
       
        console.log(this.form.value);
        //this.form.patchValue({id:this.id});
       //  event.preventDefault;
      if (this.form.valid) {
          console.log("Formato valido de skill");
       // console.log(newPj);
        //this.onNuevaSkill.emit(this.form.value);
        this.onAddSkill.emit(this.form.value);
      //	this.form.reset();
        this.mostrarForm = false;
      
      }
      else {
        alert("form no valido   ");
      }
        
      //	this.form.reset();
        //this.mostrarForm = false;

       
     
  //      const newPj={
    //      id:this.id,
      //    nombre:this.nombre.toUpperCase(),
        //  valor:this.valor,
          //persona:{id:9, localidad:{id:6}}     
       // };
        
      //  if(newPj.valor>100 || newPj.valor<0){
        //  alert("Ingrese un valor entre 1 y 100");
          //this.validForm=true;
       // }else{             
  
         // this.onAddSkill.emit(newPj);
          //this.form.reset();
          //this.mostrarForm=false;}
          //alert("Emitio y llamo addproject"+newPj.id+"\n"+newPj.nombre+"\n"+newPj.valor);
         

        //this.onNuevaSkill.emit(this.form.value);
        //this.onAddSkill.emit(newPj);
       // this.form.reset();
       //this.mostrarForm=false;
      
       /* event.preventDefault;
        if(this.form.valid){
          this.onNuevaSkill.emit(this.form.value);
          this.onAddSkill.emit(this.form.value);
          this.form.reset();
          this.mostrarForm=false;
          alert("ESTA GUARDANDO");
         }
         else{
           console.log("formato no valido");
         }*/
      }


    
  
}