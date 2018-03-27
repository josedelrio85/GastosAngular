import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosMesActualComponent } from './gastos-mes-actual.component';

describe('GastosMesActualComponent', () => {
  let component: GastosMesActualComponent;
  let fixture: ComponentFixture<GastosMesActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosMesActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosMesActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
