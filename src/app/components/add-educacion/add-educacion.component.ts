import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  mostrarForm: boolean=false;
 // @Input() educacion: Educacion | undefined;
  @Output() btnClick= new EventEmitter;
 @Output() onAddEducacion: EventEmitter<Educacion>= new EventEmitter();
  //id:number=0;
  //id:number=0;
  form!: FormGroup;
  
  id: number = 0;
  //Form Validables 
 
  submitted = false;
  closeResult="";
  /*id: number=0;
  nombre:string='';
  nivel:string='';
  institucion:string='';
  fechaini:Date=new Date();
  fechafin:Date=new Date();
  */
  
get f(){return this.form.controls;}

  constructor(private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal) { 
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
  }

/*
  setEducacion(educacion: Educacion) {
		this.form.patchValue({
			id: educacion.id,
			nombre: educacion.nombre,
			nivel: educacion.nivel,
      institucion:educacion.institucion,
      fechaini:educacion.fechafin,
      fechafin:educacion.fechaini,
		});
		//this.mostrarForm = true;
	}*/

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
  





    toogleForm(){
      this.mostrarForm=!this.mostrarForm;
      
    }

    onClick(){  this.btnClick.emit();}
    
    

/*
  onSubmit2(){
    this.submitted=true;
    if (this.form.invalid) {
      return;
  }
    if (this.submitted) {
      this.onAddEducacion.emit(this.form.value); 
      this.activeModal.close(this.form.value);       
    }else{ this.activeModal.close(this.form.value);     }

} }*/

    onSubmit(event:Event){
    this.submitted=true;

      console.log(this.form.value);
      //this.form.patchValue({id:this.id});
     //  event.preventDefault;
		if (this.form.valid) {
         console.log(this.form.value);
     // console.log(newPj);
    	this.onAddEducacion.emit(this.form.value);
      
		//	this.form.reset();
			this.mostrarForm = false;

      alert("VALIDO id");
      console.log(this.form.value);
		} else {
			alert("form no valido   ");
		}
     
} 


onSubmit2(){
  console.log("Form was submitted!");
  this.activeModal.close("Submit");
}


}	
		