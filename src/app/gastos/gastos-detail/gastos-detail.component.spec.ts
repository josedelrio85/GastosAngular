import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosDetailComponent } from './gastos-detail.component';

describe('GastosDetailComponent', () => {
  let component: GastosDetailComponent;
  let fixture: ComponentFixture<GastosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
