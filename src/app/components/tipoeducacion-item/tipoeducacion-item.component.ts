import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TipoEducacion } from 'src/app/model/tipoeducacion.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipoeducacion-item',
  templateUrl: './tipoeducacion-item.component.html',
  styleUrls: ['./tipoeducacion-item.component.css']
})
export class TipoeducacionItemComponent implements OnInit {

  @Input() tipoeducacion!: TipoEducacion;
  @Output() onDeleteTipoEducacion: EventEmitter<TipoEducacion> = new EventEmitter();
  
  @Output() onToggleTipoEducacion: EventEmitter<TipoEducacion> = new EventEmitter();
  @Output() onEditarTipoEducacion: EventEmitter<TipoEducacion> = new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  
  onDeleteTE():void{
    //alert("deleteado"+project.text);
    this.onDeleteTipoEducacion.emit(this.tipoeducacion);

  }

  onEditTE(tipoeducacion: TipoEducacion){
this.onEditarTipoEducacion.emit(tipoeducacion);

  }


  onToggleTE(tipoeducacion: TipoEducacion){
    this.onToggleTipoEducacion.emit(tipoeducacion);
  }

}
