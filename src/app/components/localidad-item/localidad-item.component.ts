import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Localidad } from 'src/app/model/localidad.model';
import { Provincia } from 'src/app/model/provincia.model';
import { LocalidadService } from 'src/app/services/localidad.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-localidad-item',
  templateUrl: './localidad-item.component.html',
  styleUrls: ['./localidad-item.component.css']
})
export class LocalidadItemComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  provincia!:Provincia;

  constructor(private localidadService: LocalidadService,private provinciaService:ProvinciaService,private formBuilder: FormBuilder)  { 
    this.form=this.formBuilder.group({
      id:[0],
      nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      cp:[0],
    provincia:{id:0}
    });
  }

  ngOnInit(): void {

  }
  

  onToggle(localidad: Localidad){

  }
  }

