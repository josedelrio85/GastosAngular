import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoEditComponent } from './gasto-edit.component';

describe('GastoEditComponent', () => {
  let component: GastoEditComponent;
  let fixture: ComponentFixture<GastoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
