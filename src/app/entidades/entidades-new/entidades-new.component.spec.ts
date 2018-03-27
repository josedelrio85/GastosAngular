import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesNewComponent } from './entidades-new.component';

describe('EntidadesNewComponent', () => {
  let component: EntidadesNewComponent;
  let fixture: ComponentFixture<EntidadesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
