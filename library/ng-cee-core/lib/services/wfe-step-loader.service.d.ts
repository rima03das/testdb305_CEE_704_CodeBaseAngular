import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationStateStoreUtil } from '../utils/application-state-store-util';
import { CeeInitServiceService } from './cee-init-service.service';
import { AppDataService } from '../models/app-data/app-data.service';
import { LoaderService } from './loader-service';
import { ToastrService } from 'ngx-toastr';
import { SharedEventsServiceService } from './shared-events-service.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { SetAPICallbackData } from '../utils/set-api-callback-data-util';
import { CommonUtil } from '../utils/common-util';
import * as i0 from "@angular/core";
export declare class WfeStepLoaderService {
    private http;
    private ceeInitService;
    private apiDataService;
    private appDataService;
    loaderService: LoaderService;
    sharedEventsService: SharedEventsServiceService;
    toastr: ToastrService;
    globalPath: string;
    fieldIdMapBasePath: string;
    configBasePath: string;
    configApplicationPath: string;
    configBlockPath: string;
    customErrorMessages: any;
    progressBarMap: any;
    progressBarSequenceMap: any;
    userRoleDataMap: any[];
    sequenceDataMap: any[];
    messagesDataMap: any;
    menuDataMap: any[];
    additionalParameters: any;
    stepNameAndIdDataMap: any;
    stepData: {};
    fieldStepData: {};
    blocksData: any[];
    baseJSONData: any;
    currentSequenceId: string;
    currentSequencePointer: number;
    applicationStateStoreUtil: ApplicationStateStoreUtil;
    defaultLang: string;
    rootData: any;
    lastStepRootData: any;
    stepDataStore: {};
    blockDataStore: {};
    setAPIKeyUtil: SetAPICallbackData;
    commonUtil: CommonUtil;
    constructor(http: HttpClient, ceeInitService: CeeInitServiceService, apiDataService: ApiDataService, appDataService: AppDataService, loaderService: LoaderService, sharedEventsService: SharedEventsServiceService, toastr: ToastrService);
    processBaseJSON(data: any): void;
    /**
     * the api data that is set to dynamic message
     * @param data then api call back data
     */
    setDynamicMessage(data: any): void;
    extractAPIKeyValue(message: any): string;
    /**
     * the api key that is set to dynamic
     * @param apiKey the api key string
     * @param data then api call back data
     */
    private returnKeyValue;
    reloadPage(): void;
    /**
     * pre fetch the base wfe json so that it gets loaded once when a step is loaded
     * and the additional parameters get mapped before the step is loaded
     */
    prefetchBaseJSON(): Promise<void>;
    getDefaultStep(sequence_id?: string): any;
    /**
     * Load step configuration and supporting information
     * @param roleId: string
     * @param stepId: string
     * @param callback: string
     */
    getWFEStepData(roleId: string, stepId: string, callback: any): void;
    /**
     * Get user step access information based on role id.
     * @param roleId: string
     * @param stepData: any
     * @param blocksData: any
     * @param callback: any
     */
    checkUserRoleAccess(roleId: string, stepData: any, callback: any): void;
    /**
     * Get default step by user role id.
     * @param roleId: string
     */
    getDefaultStepByRole(roleId: string): any;
    /**
     * Map base.json data for access.
     * @param roleId : User role ID
     * @param stepData : WFE Step data
     * @param callback : Data loaded callback
     */
    mapData(roleId: string, stepData: any[], callback: any): void;
    /**
     * method loads a step when the function
     * is called based on the step Id
     * @param stepId: string
     */
    loadOnLangChange(stepId: string, lang: string): Observable<[Object, Object]>;
    private setAdditionalParameters;
    getListOfStepIdsByWorkflow(workflowIds: any): any[];
    /**
     * function that sets the progress block step to pending
     * @param sequenceId the sequence id
     */
    setSequenceProgressInit(sequenceId: string): void;
    /**
     *
     * @param sequenceArray
     */
    private getAllStepIdFromSequenceArray;
    /**
     * Get messages based on message id
     * @param code
     */
    getMessage(code: string): any;
    /**
     * Returns the whole WFE Base JSON Data
     */
    loadWFEUniqueIdJSON(): Observable<Object>;
    /**
     * save the step data in cache
     * @param stepName
     */
    setStepDataInCache(stepName: any, data: any): void;
    /**
     * fetch the step data from cache
     * @param stepName
     */
    getStepDataFromCache(stepName: any): any;
    /**
     * Returns the step data according to the step name
     * @param stepName
     */
    loadStepByName(stepName: any): Observable<unknown>;
    /**
     * Returns the step data according to the step name
     * @param stepId
     */
    loadStepById(stepId: any): Observable<unknown>;
    /**
     * returns sequence name and index of the current step
     */
    getWorkflowSequenceIndexFromStep(stepId: string): {
        sequence: string;
        singleSequenceIndex: string;
    };
    getNextStepInCurrentSequence(currentStepId: string): any;
    getPreviousStepInCurrentSequence(currentStepId: string): any;
    getFirstSequenceInSequenceArray(sequenceArray: Array<any>): any;
    getFirstStepInSquence(stepArray: Array<any>): any;
    getSequenceDefaultStepIdBySequenceId(sequenceId: any): any;
    /**
     * Returns the block data according to the block name
     * @param blockName
     */
    searchBlockDataFromCache(blockName: any): any;
    /**
     * Returns the block data according to the block name
     * @param blockName
     */
    loadBlockByName(blockName: any): Observable<Object>;
    setBlockDataInCache(blockName: any, data: any): void;
    /**
     * Returns workflow details from step id
     * @param stepId
     */
    getWorkflowDetails(stepId: any): any;
    openToster(msgObj: any): void;
    manipulateString(type: any, value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<WfeStepLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WfeStepLoaderService>;
}
//# sourceMappingURL=wfe-step-loader.service.d.ts.map