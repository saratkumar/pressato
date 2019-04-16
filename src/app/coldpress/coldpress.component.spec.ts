import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdpressComponent } from './coldpress.component';

describe('ColdpressComponent', () => {
  let component: ColdpressComponent;
  let fixture: ComponentFixture<ColdpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
