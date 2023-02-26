import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { TipoeducacionService } from 'src/app/services/tipoeducacion.service';
import { TipoEducacion } from 'src/app/model/tipoeducacion.model';


@Component({
  selector: 'app-tipoeducacion',
  templateUrl: './tipoeducacion.component.html',
  styleUrls: ['./tipoeducacion.component.css']
})
export class TipoeducacionComponent implements OnInit {
  
  tipoeducaciones: TipoEducacion[]=[];
  constructor(private tipoeducacionService: TipoeducacionService) {}
  @Output() btnClick= new EventEmitter;

  ngOnInit(): void {this.getTipoEducaciones(); }

  getTipoEducaciones(){
  this.tipoeducacionService
    .getTipoEducaciones().subscribe(res=>{
      //console.log(res); 
      this.tipoeducaciones=res;

  })
}

  clickme() {
    alert("Entramos en edicion"); }


  addTipoEducacion(tipoeducacion: TipoEducacion) {
    
    this.tipoeducacionService
      .addTipoEducacion(tipoeducacion)
      .subscribe((addtipoeducacion) => {this.tipoeducaciones.push(addtipoeducacion);   this.ngOnInit();});

    
  }

  drop2(event: CdkDragDrop<TipoEducacion[]>) {
  
    moveItemInArray(this.tipoeducaciones, event.previousIndex, event.currentIndex);
  }

  deleteTipoEducacion(tipoeducacion: TipoEducacion) {
  this.tipoeducacionService.deleteTipoEducacion(tipoeducacion).subscribe(
      () =>
        (this.tipoeducaciones = this.tipoeducaciones.filter((t) => {
          return t.id !== tipoeducacion.id;
        }))
    );
  }
}
