import { ID } from '@datorama/akita';
import { ApiDataStore } from './api-data.store';
import { ApiDataQuery } from './api-data.query';
import { ApiData } from './api-data.model';
import { Observable } from 'rxjs';
import { CommonUtil } from '../../utils/common-util';
import * as i0 from "@angular/core";
export declare class ApiDataService {
    private apiDataStore;
    private apiDataQuery;
    sessionDataAddedCallback: any;
    sessionDataUpdatedCallback: any;
    sessionDataRemovedCallback: any;
    commonUtil: CommonUtil;
    logoutAllTabChannel: BroadcastChannel;
    constructor(apiDataStore: ApiDataStore, apiDataQuery: ApiDataQuery);
    topLargestEntities(n: number): {
        key: string;
        sizeKB: string;
    }[];
    setSessionDataAddedCallback(callback: any): void;
    setSessionDataUpdatedCallback(callback: any): void;
    setSessionDataRemovedCallback(callback: any): void;
    setApiData(appData: ApiData): void;
    setApiDataByApiUrl(appData: ApiData): void;
    addApiData(apiData: ApiData, isMultiTab?: boolean): void;
    updateApiData(appData: ApiData): void;
    deleteApiData(id: ID): void;
    deleteMultipleApiData(ids: ID[], fromStep?: boolean): void;
    removeAllApiData(): void;
    destroyAllApiData(): void;
    private deleteAPIDataUsingApiKeyAndApiHandler;
    private returnMatchedKeys;
    /**
     * function that filters the key value pair from the given array of keys
     * @param storeData the value of the handler
     * @param keys keys that needs to be removed
     * @param handlerName handlerName
     */
    private returnFilteredValues;
    getApiKeyValueByKeyString(concatenatedApiKeys: string, separator: string): any[];
    getAPIKeyValueByArray(concatenatedApiKeys: string, separator: string): any[];
    extractValuesOfArrayFromHandler(input: any): {};
    getApiKeyValueByApiKey(apiKey: string): any;
    /**
     * function that return role value from the api
     * @param roleId the api key for UserRole
     */
    getUserRoleValue(roleId: string): any;
    getApiDataByApiKey(name: string): ApiData;
    getApiDataByHandler(name: string): ApiData;
    getAllApiStoreData(): any[];
    getAllApiData(): Observable<ApiData[]>;
    listenForClearData(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiDataService>;
}
//# sourceMappingURL=api-data.service.d.ts.map