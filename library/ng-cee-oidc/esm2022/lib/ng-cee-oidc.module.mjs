import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import * as i0 from "@angular/core";
import * as i1 from "angular-oauth2-oidc";
export class NgCeeOIDCModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, imports: [HttpClientModule,
            RouterModule, i1.OAuthModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, imports: [HttpClientModule,
            RouterModule,
            OAuthModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule,
                        RouterModule,
                        OAuthModule.forRoot()
                    ],
                    exports: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2VlLW9pZGMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY2VlLW9pZGMvc3JjL2xpYi9uZy1jZWUtb2lkYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLGVBQWU7d0dBQWYsZUFBZTt5R0FBZixlQUFlLFlBTnhCLGdCQUFnQjtZQUNoQixZQUFZO3lHQUtILGVBQWUsWUFOeEIsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixXQUFXLENBQUMsT0FBTyxFQUFFOzs0RkFJWixlQUFlO2tCQVQzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFdBQVcsQ0FBQyxPQUFPLEVBQUU7cUJBQ3RCO29CQUNELE9BQU8sRUFBRSxFQUFFO2lCQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT0F1dGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgT0F1dGhNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdDZWVPSURDTW9kdWxlIHsgfVxyXG4iXX0=