/**
 * This is a util file that contains function that will be called when the api type is EXTERNAL.
 * This file reads the api config json gets the json for the specific event handler and forms the
 * header, requestBody, queryParameters, urlParameters.
 * Note:// When the type of api config is set to the EXTERNAL it will automatically use the hashed API KEY concept.
 */
import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { FlatUnflat } from './flat-unflat-json';
import { CommonUtil } from './common-util';
import * as i0 from "@angular/core";
export default class InternalResponseUtil {
    http: HttpClient;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    constructor(http: HttpClient, appDataService: AppDataService, apiDataService: ApiDataService);
    flatAndNestUtil: FlatUnflat;
    commonUtil: CommonUtil;
    /**
     * this function save field data on response handler
     * so that can consume on field load
     * @required @param handler WFE Event handler
     */
    saveResponseData(stepId: any): void;
    /**
     * function returns an object which is the mapping of the  apiKey and the value in a field.
     */
    private getAppData;
    private checkForDateOrTimePicker;
    private saveApiData;
    static ɵfac: i0.ɵɵFactoryDeclaration<InternalResponseUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InternalResponseUtil>;
}
//# sourceMappingURL=internal-response.util.d.ts.map