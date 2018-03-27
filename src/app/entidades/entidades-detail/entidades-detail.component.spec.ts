import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesDetailComponent } from './entidades-detail.component';

describe('EntidadesDetailComponent', () => {
  let component: EntidadesDetailComponent;
  let fixture: ComponentFixture<EntidadesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
