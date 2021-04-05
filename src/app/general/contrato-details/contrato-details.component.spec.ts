import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoDetailsComponent } from './contrato-details.component';

describe('ContratoDetailsComponent', () => {
  let component: ContratoDetailsComponent;
  let fixture: ComponentFixture<ContratoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
