import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
//import{Project} from '../Project'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { Proyecto } from 'src/app/model/proyecto.model';
import { PersonaService } from 'src/app/services/persona.service';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  mostrarForm: boolean = false;
@Output() onAddProject: EventEmitter<Proyecto>= new EventEmitter();
@ViewChild('lcontent') 
lcontent!: ElementRef;

//id: number=0;
//nombre:string='';
//descripcion_proyecto:string='';
//url:string='';
//tipo_tecnologia:string='';
//id_localidad:number=0;
//id_persona: number=0;

 

 @Output() btnClick= new EventEmitter;
 submitted = false;
 closeResult="";
   persona!: Persona;
  // @Output() btnClick= new EventEmitter;
   form: FormGroup;
 validForm:boolean=true;
 ide:any;
 perso!:Persona;
   constructor(private servicio:PersonaService,private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal) { 
      this.form=this.formBuilder.group({
        id:[0],
        nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        descripcion:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        url:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        tipotec:[""],
        persona:{id:0}
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
        this.perso=res;
        this.ide=res.id;
      })

     

    }
    

  toogleForm(){
    this.mostrarForm=!this.mostrarForm;
  }

  onClick(){  this.btnClick.emit();
  }
 
  
  
    onSubmit(event:Event){
      this.submitted=true;

     
this.form.patchValue({      persona:{id:this.perso.id}    });
      console.log(this.form.value);
      //this.form.patchValue({id:this.id});
     //  event.preventDefault;
    if (this.form.valid) {
        console.log("Formato valido de skill");
         
    this.onAddProject.emit(this.form.value);
    this.form.reset();
    this.mostrarForm= false;
  } else {
  //	alert("form no valido   "+this.actual+"   "+this.id+"   "+this.nombre+"   "+this.descripcion+"   "+this.fechaFin+"   "+this.persona.id);
  }

  }
  

}
