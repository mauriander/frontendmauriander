import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoEducacion } from 'src/app/model/tipoeducacion.model';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-tipoeducacion',
  templateUrl: './add-tipoeducacion.component.html',
  styleUrls: ['./add-tipoeducacion.component.css']
})
export class AddTipoeducacionComponent implements OnInit {

  @Output() btnClick= new EventEmitter;
  @Output() onAddTipoEducacion: EventEmitter<TipoEducacion>= new EventEmitter();
  

  mostrarFormTE: boolean=false;
  form: FormGroup;
 
  
  


  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      id:[],
      nombre:[""],
      fechaini:[""],
      fechafin:[""],
      
    });
    


  }


  ngOnInit(): void {
   
   
   }
  
/*
  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
      console.log(res); 
      this.persona=res;
    })
  }
 */
    toogleForm(){
      this.mostrarFormTE=!this.mostrarFormTE;
    }

    onClick(){  this.btnClick.emit();}
/*
    setSkill(tipoeducacion: TipoEducacion) {
      this.form.patchValue({
        id:this.id,
        nombre:this.nombre,
      fechaini:this.fechaini,
        fechafin:this.fechafin,
       
      });
      this.mostrarFormTE = true;
    }
*/


    onSubmit(event:Event){
   
     event.preventDefault;
		if (this.form.valid) {
      
			this.onAddTipoEducacion.emit(this.form.value);
			this.form.reset();
			this.mostrarFormTE = false;
      //alert("VALIDO   ID"+this.id+"   NOMBRE"+this.nombre+"   FECHA FIN"+this.fechafin+"   ");
		} else {
			//alert("form no valido   "+this.id+"   "+this.nombre+"   "+this.fechafin+"   ");
		}
     
    
      /*const newPw={
        id:this.id,
        nombre:this.nombre,
        fechaIni:'20/12/2012',
        fechaFin:'20/12/2012',
      };
      
           

      this.onAddTipoEducacion.emit();
        //this.form.reset();
        this.mostrarFormTE=false;
     */
    }


}
