import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { AppData } from '../../models/app-data/app-data.model';
import { AppDataService } from '../../models/app-data/app-data.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CeeApiService } from '../../services/cee-api-service.service';
import { Router } from '@angular/router';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export interface StatusType {
    field_label: string;
    unique_id: string;
    position: any;
    showColumn: boolean;
    isMandatory: boolean;
    isVisible: boolean;
}
export declare class DragAndDropListComponent implements OnInit, OnDestroy {
    private sharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    private apiDataService;
    private appDataService;
    private wfeStepLoaderService;
    ceeApiService: CeeApiService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    private http;
    private cdRef;
    router: Router;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    fieldData: any;
    stepId: any;
    type: string;
    rootData: any;
    primaryKeyVal: string;
    statusKey: string;
    appData: AppData;
    additionalParameters: {};
    setAPIKeyUtil: SetAPICallbackData;
    eventListHandler: WFEEventListHandler;
    apiKeyUtil: APIKeyUtil;
    variableObj: {};
    conditionalUtil: ConditionalUtil;
    is_bootstrap: boolean;
    blockRenderedData: any;
    commonUtil: CommonUtil;
    isVisible: boolean;
    fieldValue: any;
    setDynamicLabelUtil: DynamicLabelUtil;
    html_id: any;
    statusList: StatusType[];
    displayData: any;
    fieldIdMapApiKey: object;
    columnFilterType: string[];
    columnShowHideRearrange: any[];
    fieldDataBack: any[];
    filterErrorMsg: string;
    constructor(sharedEventsServiceService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, apiDataService: ApiDataService, appDataService: AppDataService, wfeStepLoaderService: WfeStepLoaderService, ceeApiService: CeeApiService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, cdRef: ChangeDetectorRef, router: Router);
    ngOnInit(): Promise<void>;
    processPossibleValues(): void;
    getExternalApiOptionValue(value: string, data: any): any;
    updateColumnConfig(): void;
    dropFilterItem(event: CdkDragDrop<string[]>): void;
    resetRestructuring(hideSearchFlag?: boolean): void;
    applyRestructuring(hideSearchFlag?: boolean): void;
    showHideFilter(string: any, id: any): void;
    private setListData;
    private onFieldDataUpdated;
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name: string): void;
    get isSingleAPIKey(): boolean;
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy(): void;
    drop(event: CdkDragDrop<string[]>): void;
    proceedToDrop(event: any): void;
    storeUpdatedList(): void;
    isHTML(value: string): boolean;
    setFieldProperties(displayValues: any): any;
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowData(field: any, data: any, list_pos: any, expandable?: boolean): any;
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data: any, presentValue: any, field: any): any;
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data: any, presentValue: any, field: any): any;
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse: any): {};
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey(): void;
    private returnFieldIdMapApiKeyValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragAndDropListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragAndDropListComponent, "app-drag-and-drop-list", never, { "fieldData": { "alias": "fieldData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; "type": { "alias": "type"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=drag-and-drop-list.component.d.ts.map