import { Renderer2, OnInit, ChangeDetectorRef, NgZone, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { RepeatableBlockData } from '../../models/repeatable-block-data/repetableBlockData.util';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { AppData } from '../../models/app-data/app-data.model';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { AssociatedMapUtil } from '../../utils/associated-map-utils';
import { UndoRedo } from '../../utils/undo-redo.util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { ChildCondition } from '../../models/childCondition.model';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { WebworkerService } from '../../services/web-worker-service';
import { AccordionService } from '../../services/accordian-services';
import * as i0 from "@angular/core";
export declare class RepeatableBlockRendererComponent implements OnInit, OnDestroy, OnChanges {
    userDataHandlerService: UserDataHandlerService;
    private http;
    private appDataService;
    private apiDataService;
    internalCEEEmitter: CEEInternalEmitterService;
    sharedEventsService: SharedEventsServiceService;
    private dialog;
    snackBar: MatSnackBar;
    wfeStepLoaderService: WfeStepLoaderService;
    private accordionService;
    router: Router;
    private cdr;
    _ceeApiService?: CeeApiService;
    private ngZone?;
    private workerService?;
    private renderer?;
    autoPreviewConfigPath: string;
    configBlockPath: string;
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
    radioValue: string;
    checkedItems: Array<any>;
    storeData: any;
    type: string;
    private sectionSubscription;
    hideActionButton: boolean;
    appData: AppData;
    conditionObj: {};
    variableObj: {};
    dataMap: {};
    responseMap: {};
    isEditable: boolean;
    buttonEditable: boolean;
    isVisible: boolean;
    isMandatory: boolean;
    blockId: string;
    flatten: FlatUnflat;
    conditionalUtil: ConditionalUtil;
    repeatableBlockDataUtil: RepeatableBlockData;
    isApiResponse: boolean;
    add_more_field_label: string;
    remove_field_label: string;
    wfeEventListHandler: WFEEventListHandler;
    undoredoUtil: UndoRedo;
    associatedMapUtil: AssociatedMapUtil;
    is_bootstrap: boolean;
    commonUtil: CommonUtil;
    apiKeyUtil: APIKeyUtil;
    lazyInterval: any;
    counterTemp: any[];
    presetData: any;
    setApiCallBackDataUtil: SetAPICallbackData;
    repeatebleFieldsRows: any[];
    reapeatableLoading: boolean;
    sectionCustomClass: {};
    skipLoader: boolean;
    delimiter: string;
    noIds: boolean;
    addRowByDefault: any;
    enableDeleteLastRow: any;
    componentList: {};
    storeBlockIdIfNull: any;
    componentMap: {
        label: import("rxjs").Observable<unknown>;
        Textfield: import("rxjs").Observable<unknown>;
        'Autocomplete Textfield': import("rxjs").Observable<unknown>;
        Textarea: import("rxjs").Observable<unknown>;
        Date: import("rxjs").Observable<unknown>;
        radio: import("rxjs").Observable<unknown>;
        Menu: import("rxjs").Observable<unknown>;
        Checkbox: import("rxjs").Observable<unknown>;
        Timepicker: import("rxjs").Observable<unknown>;
        PhoneNumber: import("rxjs").Observable<unknown>;
        Picker: import("rxjs").Observable<unknown>;
        Button: import("rxjs").Observable<unknown>;
        Number: import("rxjs").Observable<unknown>;
        Attachments: import("rxjs").Observable<unknown>;
        Table: import("rxjs").Observable<unknown>;
        'Table-V2': import("rxjs").Observable<unknown>;
        List: import("rxjs").Observable<unknown>;
        Switch: import("rxjs").Observable<unknown>;
        Editor: import("rxjs").Observable<unknown>;
    };
    setDynamicLabelUtil: DynamicLabelUtil;
    dummyBlocks: {};
    resetIndexOnAddOrRemove: boolean;
    activeBlocksCount: number;
    disableAddButton: boolean;
    focusChildView: boolean;
    constructor(userDataHandlerService: UserDataHandlerService, http: HttpClient, appDataService: AppDataService, apiDataService: ApiDataService, internalCEEEmitter: CEEInternalEmitterService, sharedEventsService: SharedEventsServiceService, dialog: MatDialog, snackBar: MatSnackBar, wfeStepLoaderService: WfeStepLoaderService, accordionService: AccordionService, router: Router, cdr: ChangeDetectorRef, _ceeApiService?: CeeApiService, ngZone?: NgZone, workerService?: WebworkerService, renderer?: Renderer2);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    getTrackByFunction(param: any): (index: number, item: any) => any;
    trackByIdBlock(index: number, item: any): string;
    trackByIdCounter(index: number, item: any): number;
    trackByIndex(param: any): (index: number, item: any) => any;
    countActiveBlocks(): void;
    getCurrentBlockFields(): any;
    getFieldsForPosition(position: number): any[];
    getBlockInfo: () => {
        totalBlocks: number;
        activeBlocks: number;
        currentRows: number;
        blockId: string;
        isChildBlock: boolean;
        parentPosition: any;
    };
    setCurrBlockAppData(ids: any[], otherInfo: any): Promise<void>;
    ngOnInit(): boolean;
    openAccordionClickedNew(blockId: any, uniqueId: string, defaultValue: string, iCounter?: number): void;
    labelInfoCheck(data: any): void;
    /**
     * Render dummy blocks or info-blocks for newly added block having accordion
     */
    addDummyBlocksForNewlyAddedAccordion(): void;
    scrollToSection(fieldId: any, iCounter: any): void;
    onLoadRepeatBlock(gBlockId: any, position: any, iCounter?: number, fieldId?: string): void;
    createInputDataForDummyBlock(gBlockId: any, position: any): {
        blockId: any;
        position: any;
        show: boolean;
    };
    initialLoadingOfSubBlocks(field: any, position: any): void;
    processOutsideOfAngularZone(): void;
    scrollIntoChildView(index: any): void;
    lazyLoading(): void;
    transformString(i: number, input: string, gBlockId: string): string;
    modifyFieldValue2(i: number, obj: any, gBlockId: string): any;
    modifyFieldValue(i: number, obj: any, gBlockId: string): any;
    transformStringRb(i: number, input: string, gBlockId: string): string;
    modifyFieldValueRb(i: number, obj: any, gBlockId: string): any;
    getNewFields(i: any, fields: any, gBlockId: any, type: any): any[];
    getRowDataList(i: any, iCounter: any, gBlockId: any, existingRowData?: {}): {};
    getFooterFields(gBlock: any, footerFields: any[], counter: any): any[];
    private processRowData;
    checkAccordionVisibility(field: any, rowData: any, i: any): boolean;
    generateRowData(arrayPos: any, fieldTemp: any, type?: string): any;
    processEventList(rowData: any, uniqueIds: any): void;
    isChildBlock(): boolean;
    get counterData(): any;
    onBlockAdd(): void;
    /**
     * function to remove all the repetable blocks except the one with the index 0
     */
    onAllBlockRemove(repetableBlockFieldIds: any): void;
    onDeleteBlock(pos: number): void;
    private deleteBlock;
    resetSequenceOnAction(counterData: any): any;
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
    repeatableBlockChange(data: any, isChecked: boolean): void;
    storePrimaryKey(): void;
    validateState(appData: AppData): void;
    createNewFieldState(appData: any): void;
    updateFieldState(appData: any): void;
    disableRemoveBtnIfArrayEmpty(): boolean;
    setAssociatedMap(): void;
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
    get isSingleAPIKey(): boolean;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setConditions(childConditions: ChildCondition, type: any): void;
    isHTML(value: string): boolean;
    openAccordionClicked(field: any, i: number): void;
    displayAccordion(unique_id: string, i: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RepeatableBlockRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RepeatableBlockRendererComponent, "repeatable-block-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "parentPosition": { "alias": "parentPosition"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "parentBlock": { "alias": "parentBlock"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=repeatable-block-renderer.component.d.ts.map