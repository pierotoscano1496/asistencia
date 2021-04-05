import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoDetailsComponent } from './reclamo-details.component';

describe('ReclamoDetailsComponent', () => {
  let component: ReclamoDetailsComponent;
  let fixture: ComponentFixture<ReclamoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
