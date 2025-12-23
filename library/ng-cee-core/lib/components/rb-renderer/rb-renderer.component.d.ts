import { Renderer2, OnInit, ChangeDetectorRef, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { AppData } from '../../models/app-data/app-data.model';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { RBUtil } from './rb-util';
import { RBCurrentIndexUtil } from './rb-current-index-util';
import * as i0 from "@angular/core";
export declare class RBRendererComponent implements OnInit, OnDestroy, OnChanges {
    userDataHandlerService: UserDataHandlerService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    internalCEEEmitter: CEEInternalEmitterService;
    sharedEventsService: SharedEventsServiceService;
    snackBar: MatSnackBar;
    wfeStepLoaderService: WfeStepLoaderService;
    router: Router;
    private cdr;
    _ceeApiService?: CeeApiService;
    private renderer?;
    stepId: any;
    fieldData: any;
    templateId: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    rootData: any;
    parentPosition: any;
    rowData: any;
    parentBlock: any;
    blockRenderedData: any;
    childArr: any[];
    additionalParameter: {};
    counter: any;
    childCounter: any;
    maxBlocksCount: number;
    checkedItems: Array<any>;
    type: string;
    hideActionButton: boolean;
    appData: AppData;
    variableObj: {};
    responseMap: {};
    isEditable: boolean;
    buttonEditable: boolean;
    isVisible: boolean;
    isMandatory: boolean;
    blockId: string;
    flatten: FlatUnflat;
    conditionalUtil: ConditionalUtil;
    isApiResponse: boolean;
    is_bootstrap: boolean;
    commonUtil: CommonUtil;
    apiKeyUtil: APIKeyUtil;
    rbCurrentIndexUtil: RBCurrentIndexUtil;
    rbUtil: RBUtil;
    lazyInterval: any;
    counterTemp: any[];
    presetData: any;
    setApiCallBackDataUtil: SetAPICallbackData;
    repeatebleFieldsRows: any[];
    reapeatableLoading: boolean;
    sectionCustomClass: {};
    skipLoader: boolean;
    delimiter: string;
    addRowByDefault: any;
    enableDeleteLastRow: any;
    storeBlockIdIfNull: any;
    setDynamicLabelUtil: DynamicLabelUtil;
    dummyBlocks: {};
    resetIndexOnAddOrRemove: boolean;
    activeBlocksCount: number;
    disableAddButton: boolean;
    focusChildView: boolean;
    constructor(userDataHandlerService: UserDataHandlerService, appDataService: AppDataService, apiDataService: ApiDataService, internalCEEEmitter: CEEInternalEmitterService, sharedEventsService: SharedEventsServiceService, snackBar: MatSnackBar, wfeStepLoaderService: WfeStepLoaderService, router: Router, cdr: ChangeDetectorRef, _ceeApiService?: CeeApiService, renderer?: Renderer2);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    trackByIdBlock(index: number, item: any): string;
    trackByIdCounter(index: number, item: any): number;
    countActiveBlocks(): void;
    initAppDataModel(): void;
    ngOnInit(): Promise<void>;
    init: () => Promise<boolean>;
    lazyLoading(): void;
    getRowDataList(i: any): {};
    private processRowData;
    generateRowData(arrayPos: any, fieldTemp: any, type?: string): any;
    processEventList(rowData: any, uniqueIds: any): void;
    isChildBlock(): boolean;
    updateSectionCustomClass(counts: any, value: string): void;
    private onFieldDataUpdated;
    private conditionCheck;
    /**
     * Sets the mandatory condition for all fields in the block when the block is not visible.
     * This ensures that if the block is hidden, any fields that were mandatory are set to non-mandatory.
     */
    setMandatoryConditionForBlockFields(): void;
    protected checkFieldVisibility(field: any, rowData: any): any;
    private getMaxIndex;
    private checkIfResHasBlankData;
    private checkIfResHasRepeatedData;
    updateFieldState(appData: any): void;
    /**
     * function that returns field label or the value of the label
     * @param fieldTemp field Data
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    private returnFieldDataForLabel;
    /**
     * function that returns value in respect ot the api key based on the
     * condition if it uses single or multiple api key
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    private returnFieldValue;
    /**
     * returns the multiple api keys based on the type of the key
     * @param type the type of the key
     * @param key the api key
     */
    private returnRequestOrResponseApiKeys;
    /**
     * function returns the last index of the api key
     */
    private returnAPIKeyForMultipleApiKeys;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RBRendererComponent, "rb-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "parentPosition": { "alias": "parentPosition"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "parentBlock": { "alias": "parentBlock"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=rb-renderer.component.d.ts.map