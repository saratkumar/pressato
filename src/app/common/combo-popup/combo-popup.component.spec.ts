import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPopupComponent } from './combo-popup.component';

describe('ComboPopupComponent', () => {
  let component: ComboPopupComponent;
  let fixture: ComponentFixture<ComboPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
