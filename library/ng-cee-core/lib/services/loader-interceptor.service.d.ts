import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader-service';
import { SharedEventsServiceService } from './shared-events-service.service';
import * as i0 from "@angular/core";
export declare class LoaderInterceptorService implements HttpInterceptor {
    private loaderService;
    private sharedEventsServices;
    private requests;
    configJSONVersion: string;
    skipJSONLoader: string;
    constructor(loaderService: LoaderService, sharedEventsServices: SharedEventsServiceService);
    removeRequest(req: HttpRequest<any>): void;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderInterceptorService>;
}
//# sourceMappingURL=loader-interceptor.service.d.ts.map