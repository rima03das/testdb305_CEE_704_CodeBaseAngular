import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../models/app-data/app-data.service';
import { Observable } from 'rxjs';
import { ApiDataService } from '../models/api-data/api-data.service';
import * as i0 from "@angular/core";
export declare class CeeApiService {
    private http;
    private appDataService;
    private apiDataService;
    requestMappingData: any;
    configurationData: any;
    fileData: any;
    downloadData: boolean;
    downloadZip: boolean;
    environment: object;
    stepId: string;
    adminStepIds: any[];
    private flatUnflat;
    constructor(http: HttpClient, appDataService: AppDataService, apiDataService: ApiDataService);
    setStepId(id: string): void;
    ESBRequestHandler(url: string, body?: object, apiConfig?: object): Observable<Object>;
    ExternalAPIHandler(apiConfig: object): Observable<import("@angular/common/http").HttpResponse<Object>>;
    /**
     * function returns teh formatted body if the requestBody key in the
     * api config object has a length > 0
     * @param bodyObj
     * @param apiConfigBodyArr
     */
    returnFormattedRequestBody(bodyObj: any, apiConfigBodyArr: any): any;
    /**
     * function that will hit the api
     * Note: for now only application/json type is supported
     */
    ceeApiService(url: string, method: string, body: object, urlParams: Array<any>, queryParams: Array<any>, headerParams: Array<any>, apiConfigRequestBody: Array<any>): Observable<import("@angular/common/http").HttpResponse<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CeeApiService>;
}
//# sourceMappingURL=cee-api-service.service.d.ts.map