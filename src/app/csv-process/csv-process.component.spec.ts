import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvProcessComponent } from './csv-process.component';

describe('CsvProcessComponent', () => {
  let component: CsvProcessComponent;
  let fixture: ComponentFixture<CsvProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
