import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosResumenComponent } from './gastos-resumen.component';

describe('GastosResumenComponent', () => {
  let component: GastosResumenComponent;
  let fixture: ComponentFixture<GastosResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
