import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Localidad } from 'src/app/model/localidad.model';
import { Persona } from 'src/app/model/persona.model';
import { Provincia } from 'src/app/model/provincia.model';
import { HeaderService } from 'src/app/services/header.service';
import { LocalidadService } from 'src/app/services/localidad.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  provincias: Provincia[]=[];
  localidades: Localidad[]=[];
    @Input()onSession!:boolean;
  @Input()onSessionheader!:boolean;
  personas: Persona[]=[];
  submitted = false;
  closeResult="";
  confirma = '';
  
  clickme() {
    
    //console.log(this.acercade); 
    if(this.onSessionheader===true)
    {this.onSessionheader=false;
      //this.myNameElem.nativeElement.style.display = 'none';
      //this.myNameElemb.nativeElement.style.display = 'none';
      //this.myNameElemc.nativeElement.style.display = 'none'; 
     }
    else{this.onSessionheader=true;
      //this.myNameElem.nativeElement.style.display = 'block';
      //this.myNameElemb.nativeElement.style.display = 'block';
      //this.myNameElemc.nativeElement.style.display = 'block';
    }
    //alert(this.acercade);
  }


  nombre : string = "";
  apellido : string = "";
  loca!: Localidad;
  localidad!: Localidad;

  provin!:Provincia;
  provincia2!:Provincia;
  fenac : Date= new Date();
  email: string = "";
  urlimage : string = "";
 id:any;
 nombreLocalidad:String="";
 nombreProvincia:String="";
 idProvincia:any;
 idl:any;
 idbuscar:any;
perso!:Persona;  
  formPersona: FormGroup;

  //constructor(private servicioHeader:HeaderService ) {  
    constructor(private formBuilder: FormBuilder, public modal:NgbModal, public activeModal: NgbActiveModal,private servicioHeader:PersonaService,public provinciaService:ProvinciaService, public localidadService: LocalidadService) {  

    this.formPersona = this.formBuilder.group({
      id:[0],
      nombre:[""],
      apellido:[""],
      fenac:[""],
      email:[""],
      urlimage:[""],
      localidad:{id:[0]},
      provincia:{id:[0]},
        });
      
  }
  getLocalidad(idb:any){
    
    this.localidadService.buscarLocalidad(idb).subscribe(res=>{
    
      //this.provin=this.localidad.provincia;
      //this.nombreProvincia=this.provin.nombre;
      

      
    })}

    getPersona(){
    this.servicioHeader.getPersona().subscribe(res=>{
      //  console.log(res); 
        this.perso=res;
        this.id=res.localidad.id;
        console.log(this.id);
        this.getLocalidad(this.id);

      })

  }
      ngOnInit(): void {
    this.getPersona();
    console.log(this.id);
   


    
    
  }
  
    
/*

 verProvincias(){
   this.provinciaService.verProvincias().subscribe(res=>{
     
     console.log("Provincias "+JSON.stringify(res)); 
     this.provincias=res;  
 })}

Loca!:Localidad;

verLocalidades(){
  this.localidadService.verLocalidades().subscribe(res=>{
    
    console.log("Localidades "+JSON.stringify(res)); 
    
    this.localidades=res;
    
})}
*/


  actualizarForm (){
    this.formPersona.setValue({
      nombre : this.nombre,
      apellido : this.apellido,
      localidad : this.localidad,
      fenac : this.fenac,
      email : this.email,
      urlimage : this.urlimage
    }) 
  }

  editPersona(persona: Persona) {
    alert("Hize push qui"+persona.nombre);
  this.servicioHeader
     .editPersona(persona)
    .subscribe((editpersona) => {this.personas.push(editpersona);   this.ngOnInit();});
    
 
  }



  onSubmit(event:Event) {

    this.submitted = true;

    this.formPersona.patchValue({
      id: this.id,
    });

    
    this.editPersona(this.formPersona.value);
    
   /* this.servicioHeader.updatePerfil(this.formPersona.value.nombre, this.formPersona.value.apellido, this.formPersona.value.ubicacion, 
      this.formPersona.value.fechaNac, this.formPersona.value.email, this.formPersona.value.urlFoto,  this.id)
    .subscribe(data => {this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ubicacion = data.ubicacion;
      this.fechaNac = data.fechaNac;
      this.email = data.email;
      this.urlFoto = data.url_foto; } );*/
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
  
/*
    toogleForm(){
      this.mostrarForm=!this.mostrarForm;
      
    }*/


    
  get Apellido(): any {
    return this.formPersona.get("apellido");
  }

  get Nombre(): any {
    return this.formPersona.get("nombre");
  }

  get Fenac(): any {
    return this.formPersona.get("fechaNac");
  }

  get Ubicacion(): any {
    return this.formPersona.get("ubicacion");
  }

  get Email(): any {
    return this.formPersona.get("email");
  }

  get UrlImage(): any {
    return this.formPersona.get("urlFoto");
  }


}
