import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WfeAccessDeniedComponent } from './wfe-access-denied.component';

describe('WfeAccessDeniedComponent', () => {
  let component: WfeAccessDeniedComponent;
  let fixture: ComponentFixture<WfeAccessDeniedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WfeAccessDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfeAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
