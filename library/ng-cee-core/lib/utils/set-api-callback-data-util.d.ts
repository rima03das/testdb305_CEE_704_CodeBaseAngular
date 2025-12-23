import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import * as i0 from "@angular/core";
export declare class SetAPICallbackData {
    apiDataService: ApiDataService;
    appDataService?: AppDataService;
    private apiKeyUtil;
    private flatAndNestUtil;
    private commonUtil;
    constructor(apiDataService: ApiDataService, appDataService?: AppDataService);
    setApiCallBackData(fieldData: any, data: any): any;
    /**
     * function that returns the value according to the api key
     * @param data the data from the api
     * @param apiKey the key from where the data is retrieved
     */
    private getAPIData;
    getArrayWithIndex(apiData: any, apiKey: any): any;
    /**
     * function the data in the api store using the handler name
     * @param keyName can be a string
     */
    returnValueFromApiStoreUsingHandlerName(keyName: any): any;
    get isSingleApiKey(): boolean;
    get isHashedApiKey(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetAPICallbackData, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetAPICallbackData>;
}
//# sourceMappingURL=set-api-callback-data-util.d.ts.map