import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultanteComponent } from './resultante.component';

describe('ResultanteComponent', () => {
  let component: ResultanteComponent;
  let fixture: ComponentFixture<ResultanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
