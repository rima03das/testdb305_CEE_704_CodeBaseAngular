import { QueryEntity } from '@datorama/akita';
import { AppData } from './app-data.model';
import { AppDataStore, AppDataState } from './app-data.store';
import * as i0 from "@angular/core";
export declare class AppDataQuery extends QueryEntity<AppDataState, AppData> {
    protected store: AppDataStore;
    constructor(store: AppDataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<AppDataQuery, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppDataQuery>;
}
//# sourceMappingURL=app-data.query.d.ts.map