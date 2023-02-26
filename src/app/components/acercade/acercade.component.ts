import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Acercade } from 'src/app/model/acercade';
import { Localidad } from 'src/app/model/localidad.model';
import { Persona } from 'src/app/model/persona.model';
import { Provincia } from 'src/app/model/provincia.model';
import { AcercadeService } from 'src/app/services/acercade.service';
import { LocalidadService } from 'src/app/services/localidad.service';

import { PersonaService } from 'src/app/services/persona.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css'],
})
export class AcercadeComponent implements OnInit {
  //persona: Persona | undefined;
  mostrarForm: boolean = false;
  @Input() onSession!: boolean;
  @Input() onSessionacerca!: boolean;
  @Input() onSessionacerca2!: boolean;
  @Input() persona!: Persona;
  @Output() onTogglePersona: EventEmitter<Persona> = new EventEmitter();
contact:String="";
  acercade: String = 'Mauricio A. Argentina programa';
  nombre: String = '';
  apellido: String='';
  developer: String = 'FullStack Developer';
  ubicacion: String = '';
  ubicacionl: String = '';
  ubicacionp: String = '';
  localidad!: Localidad;
  province!:Provincia;
  provinciaElegida!:Provincia;
  urlimagenElegida: String = '';
  localidades:Localidad[]=[];
  acercades:Acercade[]=[];
  acerca!:Acercade;
  ade!:Acercade;
  provincias:Provincia[]=[];
fenac: Date = new Date();
idpersona:any;
idacercade:any;
descripcionacercade:String="";
  
  imagen: String = 'assets/images/perfil.jpg';
  urlimage: String = 'assets/images/perfil.jpg';
  fechanac: Date = new Date();
  email: String = 'andermattenmauricio@gmail.com';
  ubicacionProvincia:String='';
  //form!: FormGroup;
  form: FormGroup = new FormGroup({});
  forma: FormGroup = new FormGroup({});
  perso!: Persona;
  personas: Persona[] = [];

  submitted = false;
  submittedimg = false;
  closeResult = '';
  confirma = '';
  //constructor(private servicio: PersonaService) {}
  @ViewChild('myNameElem')
  myNameElem!: ElementRef;

  @ViewChild('myNameElemb')
  myNameElemb!: ElementRef;
  @ViewChild('myNameElemc')
  myNameElemc!: ElementRef;
  /*
  @ViewChild('myNameElemd')
  myNameElemd!: ElementRef;
  @ViewChild('myNameEleme')
  myNameEleme!: ElementRef;
  @ViewChild('myNameElemf')
  myNameElemf!: ElementRef;
  */
  @ViewChild('myNameElemg')
  myNameElemg!: ElementRef;
  /*
  @ViewChild('myNameElemdb')
  myNameElemdb!: ElementRef;
  @ViewChild('myNameElemeb')
  myNameElemeb!: ElementRef;
  @ViewChild('myNameElemfb')
  myNameElemfb!: ElementRef;
  */
  @ViewChild('myNameElemgb')
  myNameElemgb!: ElementRef;
  @ViewChild('myNameElemgs')
  myNameElemgs!: ElementRef;
  

  /*
  getValue2() {
    this.nombre = this.myNameElemd.nativeElement.value;
    alert(this.acercade);
  }
  getValue3() {
    this.developer = this.myNameEleme.nativeElement.value;
  }
  getValue4() {
    this.ubicacion = this.myNameElemf.nativeElement.value;
  }
  */
  getValueimg(event :Event) {
    this.imagen = this.myNameElemg.nativeElement.value;
    this.urlimage= this.myNameElemg.nativeElement.value;
    this.form.patchValue({
      id:this.idpersona,
     });
    this.form.patchValue({
      urlimage:this.urlimage,
     });
     alert(this.form.value.nombre);
     this.editPersona(this.form.value);
  }

  getValue(event: Event) {
    
    //alert('Entro al editar persona');
    this.submittedimg = true;
    console.log("valores del formulario "+ this.form.value);
    this.forma.patchValue({
     id:this.idacercade
     });
    this.acercade = this.myNameElem.nativeElement.value;
    //this.myNameElem.nativeElement.style.display = 'none';
    //this.myNameElemb.nativeElement.style.display = 'none';
    //this.myNameElemc.nativeElement.style.display = 'none';
   
    alert(this.acercade);
    this.editarAcercade(this.forma.value);
  }

  //EDITOR DE IMAGEN
  clickme2() {
    if (this.onSessionacerca2 === true) {
      this.onSessionacerca2 = false;
      /*  this.myNameElem.nativeElement.style.display = 'none';
        this.myNameElemb.nativeElement.style.display = 'none';
        this.myNameElemc.nativeElement.style.display = 'none'; */
      //  this.myNameElemd.nativeElement.style.display = 'none';
      // this.myNameEleme.nativeElement.style.display = 'none';
      //this.myNameElemf.nativeElement.style.display = 'none';
      this.myNameElemg.nativeElement.style.display = 'none';
      //this.myNameElemdb.nativeElement.style.display = 'none';
      //this.myNameElemeb.nativeElement.style.display = 'none';
      //this.myNameElemfb.nativeElement.style.display = 'none';
      this.myNameElemgb.nativeElement.style.display = 'none';
     // this.myNameElemgs.nativeElement.style.display = 'none';
    } else {
      this.onSessionacerca2 = true;
      /*   this.myNameElem.nativeElement.style.display = 'block';
        this.myNameElemb.nativeElement.style.display = 'block';
        this.myNameElemc.nativeElement.style.display = 'block'; */
      //this.myNameElemdb.nativeElement.style.display = 'block';
      //this.myNameElemeb.nativeElement.style.display = 'block';
      //this.myNameElemfb.nativeElement.style.display = 'block';
      this.myNameElemgb.nativeElement.style.display = 'block';
      //this.myNameElemd.nativeElement.style.display = 'block';
      //this.myNameEleme.nativeElement.style.display = 'block';
      //this.myNameElemf.nativeElement.style.display = 'block';
      this.myNameElemg.nativeElement.style.display = 'block';
      //this.myNameElemgs.nativeElement.style.display = 'block';
    }
    //alert(this.acercade);}
  }

  //EDITOR DE ARCHIVO
  clickme() {
    //console.log(this.acercade);
    if (this.onSessionacerca === true) {
      this.onSessionacerca = false;
      this.myNameElem.nativeElement.style.display = 'none';
      this.myNameElemb.nativeElement.style.display = 'none';
      this.myNameElemc.nativeElement.style.display = 'none';
      /*     this.myNameElemd.nativeElement.style.display = 'none';
      this.myNameEleme.nativeElement.style.display = 'none';
      this.myNameElemf.nativeElement.style.display = 'none'; 
      this.myNameElemg.nativeElement.style.display = 'none';  */
    } else {
      this.onSessionacerca = true;
      this.myNameElem.nativeElement.style.display = 'block';
      this.myNameElemb.nativeElement.style.display = 'block';
      this.myNameElemc.nativeElement.style.display = 'block';
      /*  this.myNameElemd.nativeElement.style.display = 'block';
      this.myNameEleme.nativeElement.style.display = 'block';
      this.myNameElemf.nativeElement.style.display = 'block'; 
      this.myNameElemg.nativeElement.style.display = 'block';  */

      //alert(this.acercade);
    }
  }

  cargar_archivo(event: any) {
    let file1 = event.target.value;
    let file = event.target.files[0];
    let x = '';
    // alert(file+"   "+file1 )
    console.log(file1); // in this case we only get fakepath same as we get in ngModel.
    console.table(file); // in this case we get object with data like, name, lastModified, lastModifiedDate, size and type.
    //alert(`file name: ${file.name}`);
    // alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.onload = () => {
      //this.confirma = reader.result as string;
      this.myNameElem.nativeElement.value = <string>reader.result;
    };
    reader.readAsText(file);
    //alert("confirma1"+this.confirma);
    //reader.onload = function () {
    //console.log(reader.result);
    //alert(reader.result);
    //alert(reader.result);
    //this.acercade=reader.result
    //};

    reader.onerror = function () {
      console.log(reader.error);
    };
    //alert("confirmat"+this.confirma);
  }

  cargar_imagen(event: any) {
    let file1 = event.target.value;
    let file = event.target.files[0];
    let x = '';
    // alert(file+"   "+file1 )
    console.log(file1); // in this case we only get fakepath same as we get in ngModel.
    console.table(file); // in this case we get object with data like, name, lastModified, lastModifiedDate, size and type.
    //alert(`file name: ${file.name}`);
    // alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.onload = () => {
      //this.confirma = reader.result as string;
      this.myNameElemg.nativeElement.value = <string>reader.result;
      this.urlimage = <string>reader.result;
    };
    reader.readAsDataURL(file);
    //alert("confirma1"+this.confirma);
    //reader.onload = function () {
    //console.log(reader.result);
    //alert(reader.result);
    //alert(reader.result);
    //this.acercade=reader.result
    //};

    reader.onerror = function () {
      console.log(reader.error);
    };
    //alert("confirmat"+this.confirma);
  }

  get f() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    public modal: NgbModal,
    public activeModal: NgbActiveModal,
    private servicio: PersonaService,
    private localidadService: LocalidadService,
    private provinciaService:ProvinciaService,
    private acercadeService:AcercadeService
  ) {
    this.form = this.formBuilder.group({
      id: [0],
      nombre: [        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      fenac: [''],
      urlimage: [''
    ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      localidad: { id: [0,[Validators.required],] , province: { id: [0,[Validators.required],] } },
      
    });

    this.forma = this.formBuilder.group({
      id: [0],
      descripcion: ['']});


  }
  ngOnInit(): void {
    this.getPersona();
    this.verLocalidades();
    this.verProvincias();
    this.verAcercades();  
   // this.buscarAcercade(this.idacercade);
    console.log('Acerca de '+this.idacercade+ ' ' + this.descripcionacercade)
  }

  verAcercades(){
    this.acercadeService.verAcercades().subscribe((res)=>{
      this.acercades=res;
    this.idacercade=JSON.stringify(res[0].id);
    console.log(JSON.stringify('Acercade 0 '+res[0].id+ '  '+res[0].descripcion))
    //console.log(this.idacercade);
    this.descripcionacercade=JSON.stringify(res[0].descripcion);
   })

  }

  buscarAcercade(id:any){
this.acercadeService.buscarAcercde(id).subscribe((res)=>{
this.acerca=res;
this.descripcionacercade=this.acerca.descripcion;
})
  }

  editarAcercade(acercade: Acercade){
      this.acercadeService.editarAcercade(acercade).subscribe((editacercade) => {
      this.acercades.push(editacercade);
      this.ngOnInit();
    });
  }

verProvincias(){
  this.provinciaService.verProvincias().subscribe((res)=>{
    this.provincias=res;
  })    
  }

verLocalidades(){
this.localidadService.verLocalidades().subscribe((res)=>{
  this.localidades=res;});
}
 
  getPersona() {
    this.servicio.getPersona().subscribe((res) => {
      // console.log(res);
      //this.acercade = 'Mauricio A. Argentina programa';
      this.perso=res;
      this.idpersona=res.id;

      this.nombre = res.apellido;
      this.apellido= res.nombre;
      this.fenac = res.fenac;
      this.email = res.email;
      
      this.province=res.localidad.province;
      this.localidad=res.localidad;
     
      this.urlimage = res.urlimage;
      this.ubicacionl = res.localidad.nombre;
      this.ubicacionp= res.localidad.province.nombre;
      this.contact="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+res.email;
   
    });
  }

  open(content: any) {
    this.modal
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  toogleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onToggleP(persona: Persona){
    this.onTogglePersona.emit(persona);
     this.perso=persona;
     //this.inputa=experiencia.actual;
  }


  editPersona(persona: Persona) {
    alert('Hize push qui' + persona.nombre);
    this.servicio.editPersona(persona).subscribe((editpersona) => {
      this.personas.push(editpersona);
      this.ngOnInit();
    });
    
  }

  editImagen(persona: Persona) {
    alert('Hize push qui' + persona.nombre);
    this.servicio.editPersona(persona).subscribe((editpersona) => {
      this.personas.push(editpersona);
      this.ngOnInit();
    });
  }

  // onClick(){  this.btnClick.emit();}

  onSubmit(event: Event) {
    alert('Entro al editar persona');
    this.submitted = true;
    console.log("valores del formulario "+ this.form.value);
    this.form.patchValue({
      id:this.idpersona,
     });

     this.form.patchValue({
      urlimage:this.urlimage,
     });
   
     alert(this.form.value.id+"id  y nombre localidad"+this.form.value.localidad.nombre);
    
    if (this.form.valid) {
      console.log(this.form.value);

      alert(this.form.value);
      this.submitted = true;
      this.editPersona(this.form.value);
      this.mostrarForm = false;
      alert('VALIDO id');
      //console.log(this.form.value);
    } else {
      alert('form no valido   ');
      alert(this.form.value);
    }
  }
  onSubmitimg(event: Event) {
    
    //alert('Entro al editar persona');
    this.submittedimg = true;
    console.log("valores del formulario "+ this.form.value);
    this.form.patchValue({
     id:this.idpersona,
      nombre:this.nombre,
      apellido:this.apellido,
      email:this.email,
      
      fecac:this.fenac,
      localida:this.localidad,
     });

   
     alert(this.form.valid)
    
    if (this.form.valid) {
      console.log(this.form.value.urlimage);
      
      //alert(this.form.value);
      this.submittedimg = true;
      this.editPersona(this.form.value);
      this.mostrarForm = false;
    } else {
      alert('form no valido   ');
      
    }
  }
}
