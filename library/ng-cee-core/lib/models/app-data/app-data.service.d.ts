import { ID } from '@datorama/akita';
import { AppDataStore } from './app-data.store';
import { AppDataQuery } from './app-data.query';
import { AppData } from './app-data.model';
import { ApiDataService } from '../api-data/api-data.service';
import { RepeatableBlockData } from '../repeatable-block-data/repetableBlockData.util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AppDataService {
    private appDataStore;
    private appDataQuery;
    private apiDataService;
    repetableBlockUtil: RepeatableBlockData;
    apiKeyUtil: APIKeyUtil;
    private appDatasubscription;
    appDatacurrentValue: AppDataStore;
    logoutAllTabChannel: BroadcastChannel;
    constructor(appDataStore: AppDataStore, appDataQuery: AppDataQuery, apiDataService: ApiDataService);
    topLargestEntities(n: number): {
        key: string;
        sizeKB: string;
    }[];
    fetchappData(): void;
    currentValueChanges(): Observable<any>;
    ngOnDestroy(): void;
    addAppData(appData: AppData): void;
    updateMultipleAppData(data: any): void;
    getIndividualAppData(id: string): Observable<AppData[]>;
    updateAppData(appData: AppData): void;
    deleteAppData(id: ID): void;
    deleteMultipleAppData(ids: ID[]): void;
    removeAllAppData(): void;
    destroyAllAppData(): void;
    /**
     * function that updates appData to the akita store if the field is found
     * else adds the appData to the akita store
     * @param appData AppData model object
     */
    setAppData(appData: AppData): void;
    getFieldPropertiesByID(fieldId?: any): AppData;
    getAllAppStoreData(blockId?: any): any[];
    getAllAppData(): Observable<AppData[]>;
    getAllStepData(stepId: string): Observable<AppData[]>;
    getAllStepDataWithApiKey(stepId: string): Observable<AppData[]>;
    getAllStepDataWithRequestApiKey(stepId: string): Observable<any[]>;
    getAllStepDataByMandatory(stepId: string, isMandatory: boolean): Observable<AppData[]>;
    getAppDataByFieldId(fieldId: string): Observable<AppData>;
    getFieldDataByFieldIds(separatedFieldString: string, separator: string): any[];
    getFieldDataByFieldId(fieldId: string): any;
    returnIfRepeatedField(repeatedBlockFieldId: any): boolean;
    getFieldIdMapFieldValueByRepeatedBlockFieldId(repeatedBlockFieldId: any): {};
    /**
     * returns the field value of the basis of the type of the api key
     *
     * @param apiKey is tha api key that is required
     * @param type is bsically the type of the api key i.e request or response
     */
    getFieldDataByApiKey(apiKey: string, type?: string): string;
    /**
     * returns the app data on the basis of api key and
     *  the type of the apiKey
     *
     * @param apiKey is the api key
     * @param type can be of two types ex. request or response
     */
    getAppDataByApiKey(apiKey: string, type?: string): any;
    removeDataFromStep(stepId: string, callback: any): void;
    removeDataFromStepIds(stepIds: Array<any>, callback: any): void;
    getDataFromStepIds(stepIds: Array<any>, callback: any): void;
    /**
     * function to remove data for both request and response api keys
     * @param apiKeys
     * @param callback
     */
    removeDataUsingRequestAndResponseAPIKeys(apiKeys: Array<any>, callback: any): void;
    /**
     * function to remove data from either response or request api keys
     * @param apiKeys
     * @param callback
     */
    removeDataUsingAPIKeys(apiKeys: Array<any>, callback: any): void;
    /**
     * function to check delete an api key that is under response api keys or
     * reuest api keys or simply api an api key
     * @param apiKey
     * @param type type can be of request or response or simply
     * @param callback
     */
    removeDataUsingAPIKey(apiKey: string, type: string, callback: any): void;
    removeDataUsingResponseAndRequestAPIKey(apiKey: string, callback: any): void;
    removeDataUsingUniqueIds(fieldIds: Array<any>, callback: any): void;
    removeDataUsingUniqueId(fieldId: string, callback: any): void;
    clearDataUsingUniqueIds(fieldIds: Array<any>, callback: any): void;
    clearDataUsingApiKeys(apiKeys: Array<any>, callback: any): void;
    listenForClearData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppDataService>;
}
//# sourceMappingURL=app-data.service.d.ts.map