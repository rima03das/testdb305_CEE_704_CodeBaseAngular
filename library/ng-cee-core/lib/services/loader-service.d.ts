import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderService {
    skipLoading: boolean;
    loadingStack: number;
    isLoading: BehaviorSubject<boolean>;
    loader: import("rxjs").Observable<boolean>;
    loadingTextSet: BehaviorSubject<string>;
    loadingTextGet: import("rxjs").Observable<string>;
    isLoading$: BehaviorSubject<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderService>;
}
//# sourceMappingURL=loader-service.d.ts.map