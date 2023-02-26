import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/model/persona.model';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
  @Input()onSessionski!:boolean;

  @Output() onToggleSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onEditarSkill: EventEmitter<Skill> = new EventEmitter();
  form: FormGroup = new FormGroup({});
  submitted = false;
  closeResult = '';
  faTimes = faTimes;
  sk!: Skill;
  perso!: Persona;
  constructor(
    private servicio: PersonaService,
    private formBuilder: FormBuilder,
    public modal: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.form = this.formBuilder.group({
      id: [0],
      nombre: [''],
      valor: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      persona: [''],
    });
  }
  ngOnInit(): void {
    this.getPersona();
  }
  getPersona() {
    this.servicio.getPersona().subscribe((res) => {
      //console.log(res);
      this.perso = res;
      //this.ide=res.id;
    });
  }

  onDeleteS():void {
    //alert("deleteado"+project.text);
    this.onDeleteSkill.emit(this.skill);
  }
  /*
  onEditarS(skill: Skill){
this.onEditarSkill.emit(skill);
this.sk=skill;

  }*/

  onToggleS(skill: Skill) {
    this.onToggleSkill.emit(skill);
    
    this.sk=skill;
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

  onSubmit(event: Event) {
    this.submitted = true;

    this.form.patchValue({
      id: this.sk.id,
    });
    this.form.patchValue({
      persona: { id: this.perso.id },
    });
    alert(
      'VALIDO id' +
        this.form.value.id +
        'nombre que necesito que cambie formulario' +
        this.form.value.nombre
    );
    console.log(this.form.value);
    //this.form.patchValue({id:this.id});
    //  event.preventDefault;
    if (this.form.valid) {
      console.log(this.form.value);
      // console.log(newPj);

      this.onEditarSkill.emit(this.form.value);

      //	this.form.reset();
      //this.mostrarForm = false;

      console.log(this.form.value);
    } else {
      alert('form no valido   ');
    }
  }
}
