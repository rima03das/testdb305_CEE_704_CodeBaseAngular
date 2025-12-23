import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class CeeInitServiceService {
    private http;
    appConfigData: any;
    customErrors: any;
    apiConfigData: any;
    constructor(http: HttpClient);
    initConfigurationJSON(): Promise<any>;
    get getApiConfigData(): any;
    set setApiConfigData(data: any);
    get getAppConfigData(): any;
    set setAppConfigData(data: any);
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeInitServiceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CeeInitServiceService>;
}
//# sourceMappingURL=cee-init-service.service.d.ts.map