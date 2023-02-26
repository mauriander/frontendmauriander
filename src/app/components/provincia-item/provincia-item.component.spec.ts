import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaItemComponent } from './provincia-item.component';

describe('ProvinciaItemComponent', () => {
  let component: ProvinciaItemComponent;
  let fixture: ComponentFixture<ProvinciaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
