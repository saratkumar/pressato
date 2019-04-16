import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbioticsComponent } from './probiotics.component';

describe('ProbioticsComponent', () => {
  let component: ProbioticsComponent;
  let fixture: ComponentFixture<ProbioticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbioticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbioticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
