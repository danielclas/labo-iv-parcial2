import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfesoresComponent } from './select-profesores.component';

describe('SelectProfesoresComponent', () => {
  let component: SelectProfesoresComponent;
  let fixture: ComponentFixture<SelectProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
