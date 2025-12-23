import { QueryEntity } from '@datorama/akita';
import { ApiData } from './api-data.model';
import { ApiDataStore, ApiDataState } from './api-data.store';
import * as i0 from "@angular/core";
export declare class ApiDataQuery extends QueryEntity<ApiDataState, ApiData> {
    protected store: ApiDataStore;
    constructor(store: ApiDataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiDataQuery, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiDataQuery>;
}
//# sourceMappingURL=api-data.query.d.ts.map