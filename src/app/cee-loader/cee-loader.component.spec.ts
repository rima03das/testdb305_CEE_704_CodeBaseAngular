import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CeeLoaderComponent } from './cee-loader.component';

describe('CeeLoaderComponent', () => {
  let component: CeeLoaderComponent;
  let fixture: ComponentFixture<CeeLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports:[CeeLoaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
