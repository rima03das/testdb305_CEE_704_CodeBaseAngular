import { EntityState, EntityStore } from '@datorama/akita';
import { AppData } from './app-data.model';
import * as i0 from "@angular/core";
export interface AppDataState extends EntityState<AppData> {
}
export declare class AppDataStore extends EntityStore<AppDataState, AppData> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AppDataStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppDataStore>;
}
//# sourceMappingURL=app-data.store.d.ts.map