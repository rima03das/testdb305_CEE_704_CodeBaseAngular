import { OnInit, SimpleChanges, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { CeeApiService } from '../../services/cee-api-service.service';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { CeeInitServiceService } from '../../services/cee-init-service.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Title, Meta } from '@angular/platform-browser';
import { AppDataService } from '../../models/app-data/app-data.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Location, LocationStrategy } from '@angular/common';
import { CommonUtil } from '../../utils/common-util';
import { SidemenuUtil } from '../../utils/sidemenu-util';
import ExternalRequestResponseUtil from '../../utils/external-request-response.util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { EmptyUtil } from '../../utils/empty-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { RedirectionUtil } from '../../utils/redirection-util';
import { LoaderService } from '../../services/loader-service';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { SocketioService } from '../../services/socketio.service';
import { EventResponseHandlerService } from '../../services/event-response-handler.service';
import { DrawerComponent } from '../drawer-renderer/drawer-renderer.component';
import { AccordionService } from '../../services/accordian-services';
import { WFEConditionalExecuter } from '../../utils/wfe-conditional-query-executer-util';
import * as i0 from "@angular/core";
export declare class StepRendererComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private router;
    private location;
    private route;
    private ceeApiService;
    private sharedEventsService;
    private storageService;
    private accordionService;
    private titleService;
    idle: Idle;
    keepalive: Keepalive;
    wfeStepLoaderService: WfeStepLoaderService;
    private appDataService;
    private apiDataService;
    http: HttpClient;
    private dialog;
    private snackBar;
    private locationStrategy;
    private loaderService;
    private interCEEEmitter;
    private metaService;
    socketService: SocketioService;
    private eventResponseHandler;
    ceeInitService: CeeInitServiceService;
    wfeConditionalExecuter: WFEConditionalExecuter;
    keyValueMap: Map<string, string>;
    borrowerIdMap: Map<string, number>;
    stepId: any;
    startSession?: any;
    drawerComponent: DrawerComponent;
    templateId: string;
    stepDataBody: object;
    blockJsonData: object;
    drawerRenderer: {
        data: {
            stepId: string;
        };
    };
    stepData: any;
    blocksData: Array<any>;
    headerBlocksData: Array<any>;
    hamburgermenuBlockData: any;
    hamburgermenuBlockAdditionalParameter: any;
    footerBlocksData: Array<any>;
    sequenceData: any;
    updatedSeqData: any;
    showLoading: boolean;
    defaultStepId: any;
    visible: boolean;
    stepIsComplete: boolean;
    seqArray: any[];
    modalStepId: string;
    modalIds: string[];
    rootData: any;
    additionalParameter: any;
    globalParameters: any;
    variableObj: any;
    globalPath: string;
    configBlockPath: string;
    private sessionTimeoutUtil;
    private esbRequestBodyUtil;
    private flatUnflat;
    private wfeEventListHandler;
    private applicationStateStore;
    overrideBackButtonValue: string;
    navigateStepName: boolean;
    navigateStepNameOnly: boolean;
    is_bootstrap: boolean;
    hasOnLeaveEvent: boolean;
    container_type: string;
    commonUtil: CommonUtil;
    sidemenuUtil: SidemenuUtil;
    conditionalUtil: ConditionalUtil;
    externalRequestResponseUtil: ExternalRequestResponseUtil;
    setApiCallBackUtil: SetAPICallbackData;
    apiConfigPath: string;
    checkEmpty: EmptyUtil;
    redirectionUtil: RedirectionUtil;
    progressBlock: {};
    loader: {
        name: string;
        showSection: boolean;
    };
    showStepLoader: boolean;
    stepLoaderTimeout: any;
    rbs: any[];
    lastRBRendered: any;
    isReloadPage: boolean;
    modalGenericCssClass: string;
    warnOnMultiTabsMsg: any;
    intervalId: any;
    stopCacheLoader: () => void;
    enableSubdomainHandling: boolean;
    sideBarData: any;
    responseResult: any;
    constructor(router: Router, location: Location, route: ActivatedRoute, ceeApiService: CeeApiService, sharedEventsService: SharedEventsServiceService, storageService: UserDataHandlerService, accordionService: AccordionService, titleService: Title, idle: Idle, keepalive: Keepalive, wfeStepLoaderService: WfeStepLoaderService, appDataService: AppDataService, apiDataService: ApiDataService, http: HttpClient, dialog: MatDialog, snackBar: MatSnackBar, locationStrategy: LocationStrategy, loaderService: LoaderService, interCEEEmitter: CEEInternalEmitterService, metaService: Meta, socketService: SocketioService, eventResponseHandler: EventResponseHandlerService, ceeInitService: CeeInitServiceService, wfeConditionalExecuter: WFEConditionalExecuter);
    setCookie(name: string, value: string, daysToExpire?: number): void;
    getCookie(name: string): string | null;
    deleteCookie(name: string, path?: string, domain?: string): void;
    runAutoSaveProcess(apiConfigData: any): void;
    /**
   * function that emits back the api response for a particular api
   * @param response the response object
   * @param res the response
   * @param isEvent if the handler is called from an event
   * @param success if the api res is success
   */
    private emitDataToCee;
    /**
   * CEE internal API Service that hits the api
   * @param apiConfigData the api config data for the handler
   * via internal libraries of CEE
   */
    private ceeApiCallingService;
    private formRequestBody;
    get hasUnsavedData(): boolean;
    get modalOnPageLeave(): string | false;
    unloadNotification($event: any): boolean;
    handleKeyboardEvent(event: KeyboardEvent): void;
    openDialog(data: any): void;
    onPopState(event: any): void;
    onBackButton(): void;
    slugify(value: string): string;
    getSubdomain(url: string): string;
    getAgentName(): void;
    ngOnInit(): void;
    sideBarDataProcess(): void;
    recusivelyCheckMenuDependency(menuData: any): any;
    checkMenuDependency(dependencyCondition: any): any;
    trackBySection(index: number, item: any): number;
    extractAfterFirstSegment(url: string): string | null;
    /**
     * Traverses the step data tree and builds a hierarchical object representing
     * the structure: step_name -> section_name -> (nested sections) -> fields.
     * While traversing, it also collects all linked_block_id values of fields
     * with field_type "Repeatable Block" into the `rbs` array.
     *
     * @param stepData The step data object containing sections and fields.
     * @returns An object representing the hierarchical tree of the step.
    */
    private traverseStepTree;
    checkurlPresent(inputString: string): boolean;
    private proceessStepData;
    get pageLeaveStepId(): string | false;
    displayModal(handler: any): void;
    private isToShowStepLoader;
    private setAdditionalParameterOnStepLoad;
    /**
     * function to fetch Header Footer
     * @param lang have language of application
     * @param blockId block id that need to load
     */
    fetchHeaderFooter(lang: any, blockId: any): Promise<any>;
    /**
     * function to get class name of template
     * @param classNamePart class name part
     * @param columnType single_column/two_column
     */
    generateTemplateClass(classNamePart: any, columnType: any): string;
    /**
     * function to emit the if the loading is needed to not
     * @param handlerName event handler or external api or api_information
     * @param loading true or false
     */
    private showOrHideLoader;
    handleUrlParameters(urlParameters: Array<any>): void;
    closeModal(id: string): void;
    scrollToSection(blockName: string): void;
    ngAfterViewInit(): void;
    loadBlockAndScrollToField(uniqueId: string, apiKey: string, isFieldLevelWithParent: boolean, borrowerIndex: number): void;
    scrollWithRetryParent(elementId: string, borrowerIndex: number, retries?: number, delay?: number): void;
    scrollWithRetry(elementId: string, retries?: number, delay?: number): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setInitData;
    private returnStepId;
    getSequenceIdAndSetData(stepID: any): void;
    setSequenceAndStepId(paramValue: any, value: any): void;
    executeSequenceData(): void;
    handleStepAction(): Promise<void>;
    /**
     * function that sets the global parameters to default value or api response
     * @param res api response if present
     */
    setGlobalConstantsOnDataEmit(res?: any): void;
    setApiData(key: any, val: any): void;
    /**
     * function returns values from api data store and if not present sends the response back
     * @param values the api key
     * @param res the values  from api data store or if not present sends the response back
     */
    private getValues;
    /**
     * to support event list that is configured in the step
     * only supports onLoad Event
     */
    handleStepEvent(eventName: any): void;
    setTemplates(): void;
    private checkValidateANDCheckMandatory;
    setProgressBlockStateOnDataEmit(res: any): void;
    onDestroy(): void;
    ngOnDestroy(): void;
    toggleModalCssClass(): void;
    get fixLayout(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepRendererComponent, "app-step-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "startSession": { "alias": "startSession"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=step-renderer.component.d.ts.map