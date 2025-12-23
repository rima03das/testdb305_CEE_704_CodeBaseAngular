import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingRendererComponent } from './loading-renderer.component';
import { LoaderService, SharedEventsServiceService } from '@ng/cee-core';
import { BehaviorSubject } from 'rxjs';

describe('LoadingRendererComponent', () => {
  let component: LoadingRendererComponent;
  let fixture: ComponentFixture<LoadingRendererComponent>;
  let loaderServiceMock: any;
  let sharedEventServiceMock: any;

  beforeEach(async () => {
    loaderServiceMock = { loader: new BehaviorSubject<boolean>(false) };
    sharedEventServiceMock = { modelEmitter: new BehaviorSubject<any>({}) };

    await TestBed.configureTestingModule({
      imports: [LoadingRendererComponent],
      providers: [
        { provide: LoaderService, useValue: loaderServiceMock },
        { provide: SharedEventsServiceService, useValue: sharedEventServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update loading state on loaderService change', () => {
    loaderServiceMock.loader.next(true);
    expect(component.loading).toBeTrue();
    loaderServiceMock.loader.next(false);
    expect(component.loading).toBeFalse();
  });

  it('should call resetLoader when modelEmitter emits without id', () => {
    spyOn(component, 'resetLoader');
    sharedEventServiceMock.modelEmitter.next({});
    expect(component.resetLoader).toHaveBeenCalled();
  });
   it('getStepModalDialogIfExist should return dialog with id containing "stepModal-"', () => {
    const dialog = document.createElement('dialog');
    dialog.id = 'stepModal-123';
    document.body.appendChild(dialog);
    expect(component.getStepModalDialogIfExist()).toBe(dialog);
    document.body.removeChild(dialog);
  });

  it('getStepModalDialogIfExist should return undefined if no dialog found', () => {
    expect(component.getStepModalDialogIfExist()).toBeUndefined();
  });

  it('moveLoaderInDOMIfModelExists should not move loader if stepModal does not exist', () => {
    spyOn(component, 'getStepModalDialogIfExist').and.returnValue(undefined);
    expect(component.moveLoaderInDOMIfModelExists(true)).toBeUndefined();
  });

  it('moveLoaderInDOMIfModelExists should not move loader if loader does not exist', () => {
    spyOn(component, 'getStepModalDialogIfExist').and.returnValue(document.createElement('dialog'));
    expect(component.moveLoaderInDOMIfModelExists(true)).toBeUndefined();
  });

  // it('moveLoaderInDOMIfModelExists should move loader when v is true and loader exists', () => {
  //   const dialog = document.createElement('dialog');
  //   document.body.appendChild(dialog);
  //   const loader = document.createElement('div');
  //   loader.className = 'progress-loader';
  //   document.body.appendChild(loader);

  //   spyOn(component, 'getStepModalDialogIfExist').and.returnValue(dialog);
  //   component.isMoved = false;
  //   component.moveLoaderInDOMIfModelExists(true);
  //   expect(dialog.contains(loader)).toBeTrue();

  //   document.body.removeChild(dialog);
  //   document.body.removeChild(loader);
  // });

  // it('moveLoaderInDOMIfModelExists should revert loader when v is false and isMoved is true', () => {
  //   const dialog = document.createElement('dialog');
  //   document.body.appendChild(dialog);
  //   const loader = document.createElement('div');
  //   loader.className = 'progress-loader';
  //   dialog.appendChild(loader);

  //   const loadingRenderer = document.createElement('app-loading-renderer');
  //   document.body.appendChild(loadingRenderer);

  //   spyOn(component, 'getStepModalDialogIfExist').and.returnValue(dialog);
  //   component.isMoved = true;
  //   component.moveLoaderInDOMIfModelExists(false);
  //   expect(loadingRenderer.contains(loader)).toBeTrue();

  //   document.body.removeChild(dialog);
  //   document.body.removeChild(loadingRenderer);
  // });

  it('resetLoader should set isMoved to true and call moveLoaderInDOMIfModelExists', () => {
    spyOn(component, 'moveLoaderInDOMIfModelExists');
    component.isMoved = false;
    component.resetLoader();
    expect(component.isMoved).toBeTrue();
    expect(component.moveLoaderInDOMIfModelExists).toHaveBeenCalledWith(false);
  });
});