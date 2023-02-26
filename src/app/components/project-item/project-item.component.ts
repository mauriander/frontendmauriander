import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faFileImport, faImagePortrait, faTimes } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProjectService } from 'src/app/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/persona.model';



@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Proyecto;
@Output() onDeleteProject: EventEmitter<Proyecto> = new EventEmitter();

@Output() onToggleProject: EventEmitter<Proyecto> = new EventEmitter();
@Output() onEditProject: EventEmitter<Proyecto> = new EventEmitter();
@Input()onSessionpro!:boolean;
faTimes=faTimes;
form: FormGroup=new FormGroup({});
submitted = false;
closeResult="";
proye!: Proyecto;
perso!:Persona;

nombre:string="";
descripcion:string="";
url:string="";
tipotec:string="";

constructor(private projectoService: ProjectService,private formBuilder: FormBuilder,public modal:NgbModal, public activeModal: NgbActiveModal,private servicio:PersonaService)  { 
  this.form=this.formBuilder.group({
    id:[0],
    nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    descripcion:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    url:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
    tipotec:[""],
  persona:{id:0}
  });




}

  ngOnInit(): void {
    console.log("Inicializo projectos");
    this.getPersona();
  }




  onDelete():void{
    //alert("deleteado"+project.text);
    this.onDeleteProject.emit(this.project);

  }

  onToggle(project: Proyecto){
    this.onToggleProject.emit(project);
    this.proye=project;
  }



  getPersona(): void{
    this.servicio.getPersona().subscribe(res=>{
     // console.log(res); 
      this.perso=res;
      //this.ide=res.id;
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
    //console.log("Entro al enter de submit")
    this.submitted=true;
    this.form.patchValue({
      id:this.proye.id,
     });

     this.form.patchValue({      persona:{id:this.perso.id}    });
    alert("VALIDO id"+this.form.value.id+ "nombre que necesito que cambie formulario"+this.form.value.nombre);
    console.log(this.form.value);
  
		if (this.form.valid) {
         console.log(this.form.value);  
    	this.onEditProject.emit(this.form.value);    
	      console.log(this.form.value);
      
		} 
    else {
			alert("form no valido   ");
		}
     
} 



}
