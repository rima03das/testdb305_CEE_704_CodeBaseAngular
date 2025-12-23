import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'home'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('home');
  });


});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { Router, NavigationStart } from '@angular/router';
// import { CeeInitServiceService, DynamicComponentHandlerService, ApiDataService, AppDataService } from '@ng/cee-core';
// import { CeeLoaderComponent } from './cee-loader/cee-loader.component';
// import { Subject } from 'rxjs';

// describe('AppComponent', () => {
//   let fixture: ComponentFixture<AppComponent>;
//   let component: AppComponent;
//   let routerEvents$: Subject<any>;
//   let routerSpy: any;
//   let appDataServiceSpy: any;
//   let apiDataServiceSpy: any;
//   let dynamicHandlerServiceSpy: any;

//   beforeEach(async () => {
//     routerEvents$ = new Subject();
//     routerSpy = {
//       events: routerEvents$.asObservable(),
//       navigateByUrl: jasmine.createSpy('navigateByUrl')
//     };
//     appDataServiceSpy = jasmine.createSpyObj('AppDataService', ['removeAllAppData']);
//     apiDataServiceSpy = jasmine.createSpyObj('ApiDataService', ['removeAllApiData']);
//     dynamicHandlerServiceSpy = jasmine.createSpyObj('DynamicComponentHandlerService', ['registerComponent']);

//     await TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [
//         { provide: CeeInitServiceService, useValue: {} },
//         { provide: Router, useValue: routerSpy },
//         { provide: AppDataService, useValue: appDataServiceSpy },
//         { provide: ApiDataService, useValue: apiDataServiceSpy },
//         { provide: DynamicComponentHandlerService, useValue: dynamicHandlerServiceSpy }
//       ]
//     }).compileComponents();

//     // Mock window.location and sessionStorage
//     // const spy = spyOnProperty(person, 'fullName').and.callThrough();
//     spyOnProperty(window, 'location', 'get').and.returnValue({
//       pathname: '/',
//       href: '/',
//       assign: jasmine.createSpy('assign')
//     } as any);
//     spyOn(window.sessionStorage, 'clear').and.callFake(() => {});

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//   });

//   fit('should create the app', () => {
//     expect(component).toBeTruthy();
//   });

//   fit('should register the CEE_LOADER component', () => {
//     expect(dynamicHandlerServiceSpy.registerComponent).toHaveBeenCalledWith('CEE_LOADER', CeeLoaderComponent);
//   });

//   fit('should clear storage and redirect on NavigationStart "/"', () => {
//     routerEvents$.next(new NavigationStart(1, '/'));
//     expect(window.location.href).toBe('/');
//     expect(window.sessionStorage.clear).toHaveBeenCalled();
//   });

//   fit('should clear app/api data and sessionStorage and navigate if pathname is "/"', () => {
//     expect(appDataServiceSpy.removeAllAppData).toHaveBeenCalled();
//     expect(apiDataServiceSpy.removeAllApiData).toHaveBeenCalled();
//     expect(window.sessionStorage.clear).toHaveBeenCalled();
//     expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('home', { skipLocationChange: true });
//   });
// });

// function spyOnProperty(object: any, property: string, accessType: 'get' | 'set' = 'get') {
//   return spyOnPropertyHelper(object, property, accessType);
// }

// // Helper for spyOnProperty to support Jasmine <4 and >=4
// function spyOnPropertyHelper(object: any, property: string, accessType: 'get' | 'set') {
//   if ((jasmine as any).spyOnProperty) {
//     return (jasmine as any).spyOnProperty(object, property, accessType);
//   }
//   // Jasmine <4 fallback
//   const descriptor = Object.getOwnPropertyDescriptor(object, property);
//   if (!descriptor) {
//     throw new Error(`Property ${property} does not exist on the provided object.`);
//   }
//   const spy = jasmine.createSpy(`${property}:${accessType}`);
//   Object.defineProperty(object, property, {
//     ...descriptor,
//     [accessType]: spy
//   });
//   return spy;
// }
