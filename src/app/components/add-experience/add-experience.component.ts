import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPersonPraying } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia.model';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  
  
  @Output() btnClick= new EventEmitter;
  //funcion boton que va a interacuar con la interface 
  @Output() onAddExperience: EventEmitter<Experiencia>= new EventEmitter();
 // id: number=0;
  //nombre:string='';
  //valor:number=0;

  //este formulario posiblemente quede en deshuso
  mostrarForm: boolean=false;
  //formulario para inicialzar
  form: FormGroup;
 opcion:any;
  //descripcion: string='';
  //actual:number=0 ;
  //fechaFin:Date =new Date();
  //fechaIni:Date=new Date();
  //creo la persona para almacenarle los datos
  perso!: Persona;
  //verifico el estado submitted
  submitted = false;
  //clausuta necesario para cerrar el modal
  closeResult="";
  //constructor inicializo los valores con los cuales voy a trabjar
  constructor(private servicio:PersonaService,private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal) { 
      this.form=this.formBuilder.group({
      id:[0],
      nombre:[""],
      descripcion:[""],
      fechaIni:[""],
      fechaFin:[""],
      actual:[""],
      persona:[""],
        });
    }


    ngOnInit(): void {this.getPersona();}
    
    //abrir modal
    open(content:any) {
      this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    //cerrar modal
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    //Seleccionar el item y mostar form para abrir el formulario sin modal
    toogleForm(){
      this.mostrarForm=!this.mostrarForm;
    }

    onClick(){  this.btnClick.emit();}


    //tomo la persona con la que estoy trabajando, podria dejarse vacio pero es mejor tener mas datos que menos
    getPersona(){
      this.servicio.getPersona().subscribe(res=>{
       // console.log(res); 
        this.perso=res;
        //this.ide=res.id;
      })
    }

    //persiono enter en el boton de agregar
    onSubmit(event:Event){
      this.submitted=true;
      this.form.patchValue({
        persona:{id:this.perso.id,}
      });
   
     event.preventDefault;
		if (this.form.valid) {
     // console.log(this.form.value);
      
     // console.log(this.form.value.persona);
			this.onAddExperience.emit(this.form.value);
			this.form.reset();
			this.mostrarForm= false;
		} else {
		//	alert("form no valido   "+this.actual+"   "+this.id+"   "+this.nombre+"   "+this.descripcion+"   "+this.fechaFin+"   "+this.persona.id);
		}
     
    /*
      const newPw={
       id:this.id,
      nombre:this.nombre,
      descipcion:this.descripcion,
      fechaIni:this.fechaIni,
      fechaFin:this.fechaFin,
      actual:this.actual,
      persona:{id:9, localidad:{id:6}}
      };
      
           

        this.onAddExperience.emit(newPw);
        //this.form.reset();
        this.mostrarForm=false;
     */
    }


  



}
