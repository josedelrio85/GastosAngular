import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDetailComponent } from './tipos-detail.component';

describe('TiposDetailComponent', () => {
  let component: TiposDetailComponent;
  let fixture: ComponentFixture<TiposDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
