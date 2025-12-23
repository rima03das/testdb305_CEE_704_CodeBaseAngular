import { ApiData } from '../models/api-data/api-data.model';
import { ApiDataQuery } from '../models/api-data/api-data.query';
import { ApiDataStore } from '../models/api-data/api-data.store';
import { AppData } from '../models/app-data/app-data.model';
import { AppDataQuery } from '../models/app-data/app-data.query';
import { AppDataStore } from '../models/app-data/app-data.store';
import * as i0 from "@angular/core";
export declare class NgCEEStoreService {
    private appDataQuery;
    private appDataStore;
    private apiDataStore;
    private apiDataQuery;
    constructor(appDataQuery: AppDataQuery, appDataStore: AppDataStore, apiDataStore: ApiDataStore, apiDataQuery: ApiDataQuery);
    getAllAppData(): AppData[];
    getIndividualAppData(id: string): AppData[];
    getAllApiData(): ApiData[];
    getIndividualApiData(id: string): ApiData[];
    getAppStore(): import("@datorama/akita").HashMap<AppData>;
    getApiStore(): import("@datorama/akita").HashMap<ApiData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgCEEStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgCEEStoreService>;
}
//# sourceMappingURL=ng-cee-store-service.service.d.ts.map