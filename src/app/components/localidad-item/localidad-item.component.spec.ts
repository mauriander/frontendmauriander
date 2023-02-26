import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadItemComponent } from './localidad-item.component';

describe('LocalidadItemComponent', () => {
  let component: LocalidadItemComponent;
  let fixture: ComponentFixture<LocalidadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalidadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
