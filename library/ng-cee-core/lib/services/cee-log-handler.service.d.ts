import { HttpClient } from '@angular/common/http';
import { CeeInitServiceService } from './cee-init-service.service';
import * as i0 from "@angular/core";
export declare class CeeLogHandlerService {
    private httpClient;
    private ceeInitService;
    baseURL: string;
    token: string;
    applicationId: string;
    private platform;
    private applicationName;
    private logData;
    private environment;
    constructor(httpClient: HttpClient, ceeInitService: CeeInitServiceService);
    e(tag: any, data: any): void;
    i(tag: any, data: any): void;
    w(tag: any, data: any): void;
    d(tag: any, data: any): void;
    log(tag: any, data: any): void;
    private uploadLogData;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeLogHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CeeLogHandlerService>;
}
//# sourceMappingURL=cee-log-handler.service.d.ts.map