import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataHandlerService } from './user-data-handler.service';
import * as i0 from "@angular/core";
export declare class BearerTokenServiceService implements HttpInterceptor {
    private storageService;
    tokenObj: Object;
    constructor(storageService: UserDataHandlerService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BearerTokenServiceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BearerTokenServiceService>;
}
//# sourceMappingURL=bearer-token-service.service.d.ts.map