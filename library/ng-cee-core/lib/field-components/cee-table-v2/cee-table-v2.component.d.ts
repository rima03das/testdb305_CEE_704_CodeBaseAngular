import { OnInit, OnDestroy, ChangeDetectorRef, QueryList, AfterViewInit } from '@angular/core';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { Router } from '@angular/router';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { AppData } from '../../models/app-data/app-data.model';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { SortableHeaderDirective, SortEvent } from './cee-table-v2-sorting.directive';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export interface PeriodicElement {
}
export declare class CeeTableV2Component implements OnInit, OnDestroy, AfterViewInit {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    private cdRef;
    _ceeApiService?: CeeApiService;
    router?: Router;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    stepId: any;
    paginateValue: any;
    fieldData: any;
    sectionData: any;
    type: string;
    rowData: any;
    rootData: any;
    primaryKeyIndex: any;
    sortDirection: string;
    dataSourceLoading: any;
    dataSource: MatTableDataSource<any, MatPaginator>;
    displayedColumns: string[];
    headers: QueryList<SortableHeaderDirective>;
    hidenRows: string[];
    expandedElement: any;
    expandTitle: string;
    collapseTitle: string;
    SeemoreHide: boolean;
    pageItems: number[];
    paginator: MatPaginator;
    sort: MatSort;
    showPagination: string;
    showFilter: boolean;
    filterPlaceholderText: string;
    selection: SelectionModel<any>;
    showSkeletonLoader: boolean;
    apiData: any[];
    apiDataCopy: any[];
    displayValues: any;
    radioValue: any;
    checkedItems: any;
    nextPageIndex: number;
    storeData: any;
    primaryKeyVal: string;
    primaryKeyName: string;
    primaryKeyValue: string;
    primaryKeyRes: string;
    isVisible: boolean;
    extraTableCell: number;
    additionalParameters: {};
    setAPIKeyUtil: SetAPICallbackData;
    wfeEventListHandler: WFEEventListHandler;
    hidenRowsField: Object;
    tableHiddenGeneric: boolean;
    loaded: boolean;
    paginationNextLabel: string;
    paginationPreviousLabel: string;
    noDataFoundLabel: string;
    enableSort: string[];
    serverPagination: boolean;
    paginationApiKeys: string[];
    filterAPIKey: string;
    paginationShowingResultHint: string;
    is_bootstrap: boolean;
    bootstrap_class_name: string;
    blockRenderedData: any;
    filterKeys: string[];
    commonUtil: CommonUtil;
    apiKeyUtil: APIKeyUtil;
    responsive: boolean;
    isListCell: boolean;
    listCellEventConfig: any[];
    displayedFields: any[];
    dropList: CdkDropList;
    tableCellAppData: AppData;
    appData: AppData;
    paginationTotalCount: any;
    totalCountAppData: AppData;
    conditionalUtil: ConditionalUtil;
    setDynamicLabelUtil: DynamicLabelUtil;
    fieldIdMapApiKey: object;
    variableObject: {};
    filterValue: string;
    resultCountAPIKey: string;
    dynamicColumnWidth: any;
    paginationPageIndex: any;
    paginationPageSize: any;
    firstLoad: boolean;
    hasRowConditionField: any;
    hasRowConditionSelect: any;
    isSeletable: any;
    html_id: any;
    isCustomClass: boolean;
    additionalParametersfields: {};
    contextMenu: any;
    presetData: any;
    lazyInterval: any;
    rowDataLoading: boolean;
    tableData: object[];
    tableDataLazy: object[];
    serverSort: boolean;
    sortApiKeys: string[];
    freezeSort: boolean;
    sortApiValues: string[];
    stopPaginationEvent: boolean;
    tss: string;
    tms: string;
    searchFilterHeaderTextbox: any[];
    searchFilterHeaderDate: any[];
    filterSelectObj: any[];
    filterValues: {};
    filterDateandText: boolean;
    checkboxFilter: boolean;
    togglefilterBox: boolean;
    scrollToTop: boolean;
    task: any;
    allComplete: boolean;
    columnFilterType: string[];
    columnShowHideRearrange: any[];
    fieldDataBack: any[];
    filterErrorMsg: string;
    inlineEditStepId: string;
    selectedPrimaryKeyVal: string;
    startSession: any;
    dragDropTableRows: any;
    pageEvent: PageEvent;
    pageIndex: number;
    isShowMoreClicked: boolean;
    isMatSortClicked: boolean;
    componentList: {};
    paginationSeparator: string;
    componentMap: {
        label: import("rxjs").Observable<any>;
        Attachments: import("rxjs").Observable<any>;
        Menu: import("rxjs").Observable<any>;
        Image: import("rxjs").Observable<any>;
        Picker: import("rxjs").Observable<any>;
        Button: import("rxjs").Observable<any>;
        'List-V2': import("rxjs").Observable<any>;
        DynamicForm: import("rxjs").Observable<any>;
        ToggleButton: import("rxjs").Observable<any>;
        TreeView: import("rxjs").Observable<any>;
    };
    colSticky: string[];
    colStickyEnd: string[];
    blockData: any;
    fromStore: any;
    showSeeMore: boolean;
    disableRowValues: string;
    disableRowSelectionValues: string;
    private timeoutIds;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, cdRef: ChangeDetectorRef, _ceeApiService?: CeeApiService, router?: Router);
    ngAfterViewInit(): void;
    returnNestedData(data: any): any;
    updateColumnConfig(): void;
    dropRow(event: CdkDragDrop<string>): void;
    drop(event: CdkDragDrop<string[]>): void;
    resetRestructuring(): void;
    applyRestructuring(): void;
    showHideFilter(string: any, id: any): void;
    trackByunique_id(index: number, item: any): string;
    onSort({ column, direction }: SortEvent): void;
    triggerSeeMore(): void;
    matSortChange(sort: Sort): void;
    private sortChangeSetValue;
    ngAfterContentChecked(): void;
    onScroll(event: any): void;
    onScrollevent(type: string, primaryData?: any, isDefault?: boolean, payLoad?: any, displayType?: string): void;
    onResize(): void;
    ngOnInit(): void;
    processBlockData(data: any, fromStore: any, event_list: any, skipOnLoad?: boolean): void;
    private refreshColumnRowOnDataChange;
    private onFieldDataUpdated;
    setPrimaryKey: (data: any) => void;
    private setTotalCountAppData;
    getDisplayValues: () => Promise<unknown>;
    displayLogic: () => any;
    checkPromiseValue: (promiseValue: any) => void;
    getData: () => void;
    onAPICallback(res: any): void;
    private checkRowVisibility;
    private checkRowEditable;
    loadTableData(apiData: any): void;
    private setDefaultSort;
    ngAfterViewChecked(): void;
    getRowDataValue(data: any, field: any, list_pos: any): {
        unique_id: any;
        html_id: string;
        fromField: string;
        visible: any;
        editable: any;
        value: string;
        data: {};
    } | {
        unique_id: any;
        html_id: string;
        fromField: string;
        value: string;
        data: {};
    };
    lazyLoading(): void;
    appendDataOnSeeMoreClicked(newData: any[]): void;
    setSelection(): void;
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse: any): {};
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
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     */
    getConditionalClass(data: any, presentValue: any): any;
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey(): void;
    private returnFieldIdMapApiKeyValue;
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
    isSortingDisabled(column: any): boolean;
    ngOnDestroy(): void;
    checkCheckedValues(): void;
    list_change(data: any, isChecked: boolean): void;
    clearMultiSelectColumnMappings(): void;
    private debounceTimeout;
    storePrimaryKey(): void;
    private emitForFieldsSectionBlock;
    /**
     * trigger event if there has been an event triggered on the table
     * @param name the name of the event
     */
    onComponentEvent(name: string): void;
    getPrimaryKey(key: string): string;
    getValueformKey(key: any): any;
    applyFilter(): void;
    /** Whether one or more rows are selected. */
    isIndeterminateSelected(): boolean;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    onNexPageChange(event?: any): void;
    onNextPageChange(paginator: MatPaginator): void;
    onPaginationChange(event?: PageEvent): void;
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data: any, iscontextMenu?: boolean): void;
    /**
     * function returns the clearSession emit
     **/
    onEmptySession(get_data: any): void;
    get isSingleAPIKey(): boolean;
    updateAllComplete(): void;
    someComplete(): boolean;
    setAll(completed: boolean): void;
    toggleFilterBox(): void;
    getCheckboxfilterData(fields: any): void;
    createFilter(): (data: any, filter: string) => boolean;
    filterChange(f: any, value: any, type: any): void;
    isHTML(content: string): boolean;
    modifyFieldValue(i: number, obj: any, gBlockId: string): any;
    getNewFields(i: any, fields: any, gBlockId: any): any;
    transformString(i: number, input: string, gBlockId: string): string;
    private shouldDisableRowForAction;
    private compareValues;
    shouldDisableDragAndDropForRow(row: any): boolean;
    shouldDisableSelectionForRow(row: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeTableV2Component, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeTableV2Component, "app-cee-table-v2", never, { "stepId": { "alias": "stepId"; "required": false; }; "paginateValue": { "alias": "paginateValue"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "sectionData": { "alias": "sectionData"; "required": false; }; "type": { "alias": "type"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-table-v2.component.d.ts.map