import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStateReclamoComponent } from './update-state-reclamo.component';

describe('UpdateStateReclamoComponent', () => {
  let component: UpdateStateReclamoComponent;
  let fixture: ComponentFixture<UpdateStateReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStateReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStateReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
