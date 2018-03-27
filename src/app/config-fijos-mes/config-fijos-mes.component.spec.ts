import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFijosMesComponent } from './config-fijos-mes.component';

describe('ConfigFijosMesComponent', () => {
  let component: ConfigFijosMesComponent;
  let fixture: ComponentFixture<ConfigFijosMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFijosMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFijosMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
