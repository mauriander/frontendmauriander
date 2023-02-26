import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Experiencia } from 'src/app/model/experiencia.model';
import { Persona } from 'src/app/model/persona.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experiencia!: Experiencia;
  @Output() onDeleteExperience: EventEmitter<Experiencia> = new EventEmitter();
 // @Input() puedeeditarex: boolean | undefined;

  @Input() puedeeditarex!: boolean ;
  @Output() onToggleExperience: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onEditExperience: EventEmitter<Experiencia> = new EventEmitter();
  @Input()onSessionexp!:boolean;
  opcion:any;
  
  @Input() botonactua!: String;
  botona="Trabajo Actual";
  inputa="";
  faTimes=faTimes;
  form: FormGroup=new FormGroup({});
  submitted = false;
  closeResult="";
  ppe=false;
  expe!: Experiencia;
  perso!:Persona;
  p_id:any;
  constructor(private experienciaService: ExperienciaService,private formBuilder: FormBuilder,public modal:NgbModal, public activeModal: NgbActiveModal,private servicio:PersonaService) { 
    this.form=this.formBuilder.group({
      id:[0],
      nombre:[""],
      descripcion:[""],
      fechaIni:[""],
      fechaFin:[""],
      actual:[""],
      persona:{id:[0]},
      
        });

  }

  ngOnInit(): void {
    console.log("Inicializo experiencia");
    this.getPersona();
   
    

  }

  /*
  onDeleteE():void{
    alert("deleteado experiencia");
    this.onDeleteExperience.emit(this.experiencia);
  
  }
*/

  onDeleteEx():void{
    alert("deleteado presiono boton de emision");
    this.onDeleteExperience.emit(this.experiencia);

  }

    onToggleE(experiencia: Experiencia){
    this.onToggleExperience.emit(experiencia);
     this.expe=experiencia;
    // this.inputa=experiencia.actual;
  }
  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
    //  console.log(res); 
      this.perso=res;
      this.p_id=this.perso.id;
      console.log("persona id "+this.p_id);
    })
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


  onSubmit(event:Event){
    console.log("Entro al enter de submit")
    this.submitted=true;
    this.form.patchValue({
      id:this.expe.id,
     });

     this.form.patchValue({
      persona:{id:this.perso.id}

    });
   // alert("VALIDO id"+this.form.value.id+ "nombre que necesito que cambie formulario"+this.form.value.nombre);
    console.log(this.form.value);
  
		if (this.form.valid) {
        
    	this.onEditExperience.emit(this.form.value);    
	      console.log(this.form.value);
       
		} 
    else {
			alert("form no valido   ");
		}
     
} 


}





