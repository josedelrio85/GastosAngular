import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosNewReactiveFormComponent } from './gastos-new-reactive-form.component';

describe('GastosNewReactiveFormComponent', () => {
  let component: GastosNewReactiveFormComponent;
  let fixture: ComponentFixture<GastosNewReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosNewReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosNewReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
