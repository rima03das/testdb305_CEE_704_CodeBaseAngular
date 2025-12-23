import { AppData } from "../models/app-data/app-data.model";
import { AppDataService } from "../models/app-data/app-data.service";
import * as i0 from "@angular/core";
export declare class ApplicationStateStoreUtil {
    private appDataService;
    appData: AppData;
    private apiKeyUtil;
    constructor(appDataService: AppDataService);
    private setState;
    /**
     * set any state
     * @param progressBarId
     * @param stepId
     * @param type
     */
    setAnyState(progressBarId: any, stepId: any, type: any): void;
    /**
     * function that sets progress bar
     * @param progressBarId
     * @param stepId
     */
    setProgressStatusOnLastSavedState(progressBarId: any, stepId: any, progressBarMap: any): void;
    /**
     * set active state active to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setActive(progressBarId: any, stepId: any): void;
    /**
     * set active state active to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setPending(progressBarId: any, stepId: any): void;
    /**
     * set active state incomplete to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setIncomplete(progressBarId: any, stepId: any): void;
    /**
     * set active state complete to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setComplete(progressBarId: any, stepId: any): void;
    /**
     * get current step state
     * @param progressBarId
     * @param stepId
     */
    getStepState(progressBarId: any, stepId: any): any;
    /**
     * set active state pending to a step in progress bar
     * @param progressBlock
     * @param stepId
     */
    setDefaultState(progressBlock: any, stepId: any): void;
    /**
     * set state value set to a progress bar
     * @param progressBarId
     * @param value
     */
    setStateValue(progressBarId: any, value: any): void;
    private setStepMap;
    private getStepMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationStateStoreUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApplicationStateStoreUtil>;
}
//# sourceMappingURL=application-state-store-util.d.ts.map