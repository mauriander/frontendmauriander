import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeItemComponent } from './acercade-item.component';

describe('AcercadeItemComponent', () => {
  let component: AcercadeItemComponent;
  let fixture: ComponentFixture<AcercadeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
