import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposNewComponent } from './tipos-new.component';

describe('TiposNewComponent', () => {
  let component: TiposNewComponent;
  let fixture: ComponentFixture<TiposNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
