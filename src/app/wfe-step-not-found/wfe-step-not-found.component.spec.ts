import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WfeStepNotFoundComponent } from './wfe-step-not-found.component';

describe('WfeStepNotFoundComponent', () => {
  let component: WfeStepNotFoundComponent;
  let fixture: ComponentFixture<WfeStepNotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WfeStepNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfeStepNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
