import { CeeApiService } from '../services/cee-api-service.service';
import { SharedEventsServiceService } from '../services/shared-events-service.service';
import { WfeStepLoaderService } from '../services/wfe-step-loader.service';
import { Router } from '@angular/router';
import { EventList } from '../models/events_model/event_list';
import { EventResponse } from '../models/events_model/event_response';
import { Event } from '../models/events_model/event';
import { EventConfig } from '../models/events_model/event_config';
import { Condition } from '../models/events_model/event_condition';
import { InvokeEventAdditionalParamters } from '../models/events_model/invoke_event_additional_params';
import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CommonUtil } from './common-util';
import { UndoRedo } from './undo-redo.util';
import { AssociatedMapUtil } from './associated-map-utils';
import ExternalRequestResponseUtil from './external-request-response.util';
import InternalResponseUtil from './internal-response.util';
import { AppData } from '../models/app-data/app-data.model';
import { FileUploadService } from '../services/file-upload-service.service';
import { CEEInternalEmitterService } from '../services/internal-cee-emitter-service.service';
import { InBuildFunctionsUtil } from './inbuild-functions-util';
import { jsPDF } from "jspdf";
import { SetAPICallbackData } from './set-api-callback-data-util';
import * as i0 from "@angular/core";
export declare class WFEEventListHandler {
    private ceeApiService;
    private router;
    private sharedEventsServices;
    internalCEEEmitter: CEEInternalEmitterService;
    private wfeStepLoaderService;
    private appDataService;
    private apiDataService;
    private dialog;
    private snackBar;
    http: HttpClient;
    private fileUploadService?;
    event_list: EventList[];
    inputDetails: object;
    success: EventResponse[];
    failure: EventResponse[];
    response: EventResponse[];
    exception: EventResponse[];
    commonUtil: CommonUtil;
    undoRedoUtil: UndoRedo;
    associatedMaputil: AssociatedMapUtil;
    externalRequestResponseUtil: ExternalRequestResponseUtil;
    internalResponseUtil: InternalResponseUtil;
    additionalParameters: InvokeEventAdditionalParamters[];
    private esbRequestBodyUtil;
    private wfeConditionalQueryExecuter;
    private sessionKeyUtil;
    private repeatableBlockUtil;
    private emptyUtil;
    private redirectionUtil;
    private applicationStateStore;
    private apiKeyUtil;
    private downloadType;
    private workflowService;
    cellAppData: AppData;
    apiConfigPath: string;
    event: any;
    payLoad: any;
    modalGenericCssClass: string;
    fileDataArray: any;
    encriptedFileArray: any;
    fieldData: any;
    uniqueFields: any;
    inBuildFunctionsUtil: InBuildFunctionsUtil;
    modelValue: number;
    eventAdditionalParams: any;
    setAPIKeyUtil: SetAPICallbackData;
    handlerSaveData: any;
    isClear: boolean;
    constructor(ceeApiService: CeeApiService, router: Router, sharedEventsServices: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, wfeStepLoaderService: WfeStepLoaderService, appDataService: AppDataService, apiDataService: ApiDataService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, fileUploadService?: FileUploadService);
    switchEventDisplayType(event: any, eventList: EventList[], primaryData?: {}, payLoad?: any): void;
    private onFilter;
    private redirectToLastSavedStep;
    onComponentEventBatch(fieldData: any, presetData: any, stepId: any, type: string, primaryData?: any, isDefault?: boolean, payLoad?: any, displayType?: string): void;
    setNextStepId(event: any, stepId: any): void;
    onStartRepeatableWorkflowEvent(event: any): void;
    onExitRepeatableWorkflowEvent(event: any): void;
    onWorkflowEvent(event: any): void;
    onFrameworkEvent(event: Event, primaryData?: any): void;
    onStepEvent(event: Event): void;
    eventCondition(conditionArray: Condition[]): boolean;
    downloadFromS3(event: any): Promise<void>;
    convertHeaderToImageFixedHeight(element: HTMLElement): Promise<{
        dataUrl: string;
        width: number;
        height: number;
    }>;
    loadFontForPDF(doc: jsPDF): Promise<void>;
    generatePDF(event: any, elementOrId: string | string, filename?: string, printUpload?: boolean): Promise<void>;
    transformInputsToLabelsAndWrapContent(element: HTMLElement): HTMLElement;
    casePdfGenerate(event: any): void;
    adjustTextareasForPDF(sourceElementId: string): HTMLElement | null;
    private processLabelWrappers;
    wrapPartialLabelText(container: HTMLElement): void;
    private transformSignaturesToTable;
    private mainBorrowerListPadding;
    applyPageBreakStylesAfterTable(containerMain: HTMLElement): void;
    private setMarginForElements;
    private replaceOnlyRadioAppViewRenderers;
    private applyResolutionSpecificFixes;
    rebuildMaterialTablesInRepeatable(container: HTMLElement): void;
    rebuildMaterialTables(container: HTMLElement): void;
    private removeCheckboxUnderline;
    private adjustDollerPrepend;
    private adjustPercentageSuffix;
    private boldAndColorInLabel;
    private removeAddButton;
    private fixStepLabelOverlapping;
    private fixOverlappingBulletPoints;
    private fixNestedLabelStructures;
    findLabelText(inputElement: HTMLInputElement): string;
    getCurrentTimestamp(format: string): string;
    getTimestampedFilename(filename: string, format: string): string;
    printAndDownload(event: any): void;
    /**
    * method returns the name based on the configuration
    * @param originalName the original name from where
    * @param fileName the file name of the file
    * @param regex the regex from which the dynamic variables needs to be extracted
    * @returns the result name
    */
    getFileName(originalName: string, fileName: string, regex: RegExp): string;
    unflattenJSON(flatObj: {
        [key: string]: any;
    }): any;
    printUpload(blobObject: any, fileName: any, success: any, failure: any): void;
    private uploads3pdf;
    stripHtml(html: string): string;
    eventConfig(config: EventConfig, handler: any, primaryData?: any): void;
    getAkitaDataFromHandler(handler: any): any;
    returnNestedData(data: any): any;
    stepRedirection(handler: any): void;
    openDrawer(data: any): void;
    private getFileFetchURL;
    private createZip;
    private processStepRedirection;
    private redirectWithParams;
    onDeleteData(deleteWorningMessage: any, handler: any, primaryData: any): void;
    deleteLocalDataProcess(handler: any, primaryData: any, responseData?: {}): void;
    cancelLocalDataProcess(handler: any, primaryData: any): void;
    saveLocalDataProcess(handler: any, primaryData: any, responseData?: {}): any;
    calculateYearlyIncome(data: any): number;
    calculateTotalAndCount(data: any, key: any): {
        totalIncome: any;
        recordCount: any;
    };
    updateLocalDataProcess(handler: any, primaryData: any, responseData?: {}): void;
    getApiKeyValuePair(apiDatas: any): any[];
    getRepetableBlockDataFromBlockId(blockId: any): any[];
    getRepetableBlockDataFromBlockIdwithResponseKey(blockId: any, resKey: any): any[];
    emitLoginStateDataToStore(handler: any, res: any): void;
    emitUpdatedDataToStore(handler: any, res: any): void;
    skipLoaderCheck(): void;
    private setLanguage;
    stateModified(handler: any): void;
    historyBack(): void;
    openDialog(data: any): void;
    openAlert(data: any): void;
    getBase64(file: any): void;
    eventHandler(handler: any, primaryData: any): Promise<void>;
    updateMortageSubjectPropertyData(): void;
    /**
     * method acts on each and every file action
     * @param extraConfigData: api config data
     * @param handler: the event handler
     * @param success: the success event
     * @param failure: the failure event
     * @returns void
     */
    private actOnFileAction;
    /**
     * Redirect to logout when the response is to logout the user
     */
    private OIDCLogout;
    saveData(key: string, url: string, apiValue: any): void;
    processCallbackBlock(res: any, failureBlocks: any): any;
    processCallbackBlocks2(res: any, failureBlocks: any): any;
    processCallbackBlocks(res: any, failureBlocks: any): any[];
    checkResponseValues(res: any, callbackConfigBlock: any): any;
    getOnFailure(failureBlock?: any): void;
    /**
     *  get Response is executed every time there is an API Call
     *  be it ESB or Generic Mapper or Response Recieved for the Project End API Call
     */
    getOnResponse(responseBlock?: any): void;
    /**
     * Exception Block is only triggered when there is an exception in case of API calling
     * @param exceptionBlock
     */
    getOnException(exceptionBlock?: any): void;
    getOnSuccess(successBlock?: any): void;
    executeEventCallback(event: any): boolean;
    sessionEventHandler(handler: any, parameterType: string): {};
    displayModal(handler: any): void;
    toggleModalCssClass(): void;
    copyToClipboardEventHandler(handler: any): void;
    highlightMapMarker(handler: any): void;
    searchFilter(handler: any): void;
    mapCenter(handler: any): void;
    MapLayer(handler: any): void;
    toggleAccordion(handler: any): void;
    executeStepOnLoadEvents(): void;
    customFunctions(handler: any, parameter_type1: string, parameter_type2: string, primaryData: any): void;
    executeEvent(eventId: string): void;
    switchClearenceType(clearObject: any, handlerData: any, primaryData?: {}): Promise<void>;
    get OIDCinfo(): string | false;
    switchClearAkitaStore(clearObject: any, handlerData: any, primaryData?: any): Promise<void>;
    /**
     * function triggers success or failure based on the type
     * true for success and false for failure
     */
    private triggerSuccessOrFailure;
    switchMandatoryCheckType(clearObject: any, handlerData: any): Promise<void>;
    switchValidationCheckType(clearObject: any, handlerData: any): Promise<void>;
    switchCustomHandlerFunction(handler: any, variables: any[], targets: string[], primaryData: any): void;
    switchCopyToClipboardType(object: any): void;
    copyToClipboard(val: string): void;
    getSessionKeyByBlock(blockId: any, uniqueIdJSON: any): any[];
    getSessionKeyBySteps(stepIds: any, uniqueIdJSON: any): any[];
    getSessionKeyBySection(sectionId: any, uniqueIdJSON: any): any[];
    getAdditionalParameter(): {};
    setCellData(primaryData: any, handler: any): void;
    getListCellData(data: Array<any>): void;
    get hasUnsavedData(): boolean;
    get modalOnPageLeave(): string | false;
    get pageLeaveStepId(): string | false;
    get pageLeaveHref(): string | false;
    get pageLeaveHrefTarget(): string;
    get getOnPageLeaveCheckType(): string | false;
    redirectTo(stepId: string, ModalOnPageLeave?: string, target?: string): void;
    redirectToHref(link: string, ModalOnPageLeave?: string, target?: string): void;
    /**
     * function that emits the value of the field state event with the fields and the value
     * @param obj the type of the event can be block, section, field and the field ids
     * @param type the type of the state to be change like visibility, mandatory, editable
     */
    fieldStateChangeEvent(obj: any, type: any, readDataFromModal: boolean): Promise<void>;
    setValuesOnEvent(handler: any, primaryData?: any): void;
    eventSetValueFinished(handler: any): void;
    isCheckboxValueAsArray(): boolean;
    getLocation(globalParameters: any, handler: any): void;
    private detectBrowser;
    detectOperatingSystem(): "Windows" | "Mac OS" | "Linux" | "iOS" | "Android" | "Unknown operating system";
    private detectOperatingSystemVersion;
    private detectDeviceType;
    private saveDeviceInfo;
    private saveGeoLocation;
    emitData(response_api_key: any, data: any): void;
    contextMenu(handler: any, primaryData: any): void;
    extractEmailIds(event: any): void;
    private cleanUpMaterialFields;
    showLoader(message?: string): void;
    hideLoader(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WFEEventListHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WFEEventListHandler>;
}
//# sourceMappingURL=wfe-event-list-handler-util.d.ts.map