import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  @Input()onSessionedu!:boolean;
  
  @Input() educacion!: Educacion;

  @Input() botonactua!: String;
  
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();
  
  @Output() onToggleEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onEditarEducacion: EventEmitter<Educacion> = new EventEmitter();
  form: FormGroup=new FormGroup({});
  submitted = false;
  closeResult="";
  faTimes=faTimes;
  educ!: Educacion
  constructor(private educacionService: EducacionService,private formBuilder: FormBuilder,public modal:NgbModal, public activeModal: NgbActiveModal) { 
    this.form=this.formBuilder.group({
      id:[0],
      nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      nivel:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      institucion:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      fechaini:[""],
      fechafin:[""],
      
    });
  }

  ngOnInit(): void {
    console.log("Educacion")
  
  }

  
  onDeleteEdu():void{
    //alert("deleteado"+project.text);
    this.onDeleteEducacion.emit(this.educacion);

  }



/*
  onEditEdu(educ: Educacion){
    alert("edicion de edit educacion abrir formulario agegar persona "+educ.nombre);
    this.form=this.formBuilder.group({
      id:educ.id,
      nombre:[educ.nombre,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      nivel:[educ.nivel,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      institucion:[educ.institucion,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      fechaini:[""],
      fechafin:[""],
    });

    
   
    //const pnew=this.educacion;
    //console.log(this.educacion.id+"   "+this.educacion.nombre);
    //this.onEditarEducacion.emit(this.educacion);

    //this.educacionService.editEducacion(this.educacion).subscribe
    

  }
  */
  

  onToggleEdu(educa: Educacion){
    this.onToggleEducacion.emit(educa);
   this.educ=educa;
  /* this.form=this.formBuilder.group({
    id:this.educ.id,
    nombre:[this.educ.nombre,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    nivel:[this.educ.nivel,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    institucion:[this.educ.institucion,[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    fechaini:[this.educ.fechaini],
    fechafin:[this.educ.fechafin],
  });*/
    
    
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
    this.submitted=true;
    this.form.patchValue({
     id:this.educ.id,
    });
    alert("VALIDO id"+this.form.value.id+ "nombre que necesito que cambie formulario"+this.form.value.nombre);
      console.log(this.form.value);
      //this.form.patchValue({id:this.id});
     //  event.preventDefault;
		if (this.form.valid) {
         console.log(this.form.value);
     // console.log(newPj);
     
    	this.onEditarEducacion.emit(this.form.value);
      
		//	this.form.reset();
			//this.mostrarForm = false;

      console.log(this.form.value);
		} else {
			alert("form no valido   ");
		}
     
} 



}
