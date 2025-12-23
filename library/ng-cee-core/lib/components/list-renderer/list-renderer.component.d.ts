import { OnInit, OnDestroy } from '@angular/core';
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
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CeeApiService } from '../../services/cee-api-service.service';
import { Router } from '@angular/router';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { EmptyUtil } from '../../utils/empty-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { PageEvent } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export declare class ListRendererComponent implements OnInit, OnDestroy {
    private sharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    private apiDataService;
    private appDataService;
    private wfeStepLoaderService;
    ceeApiService: CeeApiService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    private http;
    router: Router;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    sectionData: any;
    stepId: any;
    templateId: any;
    type: string;
    rowData: any;
    rootData: any;
    childList: any;
    pagination: {
        pageItems: number[];
        currentItemCount: number;
        showNext: boolean;
        showPrevious: boolean;
        currentPage: number;
        pageCount: number;
        itemCount: number;
        startIndex: number;
        endIndex: number;
        paginationRange: number;
    };
    showPagination: boolean;
    autoPagination: boolean;
    showFilter: boolean;
    filterPlaceholderText: string;
    canRefresh: boolean;
    displayValues: any;
    displayValuesLazy: any;
    lazyInterval: any;
    searchData: MatTableDataSource<any, import("@angular/material/paginator").MatPaginator>;
    showLoading: boolean;
    noDataFound: boolean;
    showSkeletonLoader: boolean;
    listElements: any;
    radioValue: any;
    checkedItems: any;
    storeData: any;
    primaryKeyVal: string;
    showErrorOnNext: boolean;
    private cdRef;
    hasEmittedCompletion: boolean;
    messages: any[];
    listCellAppData: AppData;
    appData: AppData;
    totalCountAppData: AppData;
    chipsArray: any;
    chipsDisplay: boolean;
    chipsApiKeyToDisplay: any;
    contextArray: any;
    fieldIdMapApiKey: object;
    additionalParameters: {};
    setAPIKeyUtil: SetAPICallbackData;
    eventListHandler: WFEEventListHandler;
    apiKeyUtil: APIKeyUtil;
    variableObj: {};
    conditionalUtil: ConditionalUtil;
    fieldData: any;
    isMandatory: boolean;
    is_bootstrap: boolean;
    blockRenderedData: any;
    commonUtil: CommonUtil;
    filterKeys: string[];
    filterAPIKey: string;
    paginationShowingResultHint: string;
    hidenRows: string;
    expandedElement: any;
    expandTitle: string;
    collapseTitle: string;
    filterTxt: string;
    isVisible: boolean;
    paginationNextLabel: string;
    paginationPreviousLabel: string;
    paginationStyle: string;
    pages: string[];
    fieldValue: any;
    serverPagination: boolean;
    serverPaginationKeys: any[];
    checkEmpty: EmptyUtil;
    setDynamicLabelUtil: DynamicLabelUtil;
    selectedObj: {
        radio: any;
        checkbox: any;
    };
    noDataFoundLabel: string;
    expandableData: any;
    isListCell: boolean;
    listCellEventConfig: any[];
    displayedUniqueIds: any[];
    listInternalApiData: any;
    listLoading: boolean;
    resultCountAPIKey: string;
    ShowMore: boolean;
    btnShowMoreName: string;
    ShowMoreHide: boolean;
    paginationFirstLabel: string;
    paginationLastLabel: string;
    selectedRowIndex: number;
    tabIndexValue: number;
    rowDataShown: any;
    iRowData: number;
    itemPerPage: number;
    hasRowConditionField: any;
    html_id: any;
    componentList: {};
    componentMap: {
        label: import("rxjs").Observable<unknown>;
        Textfield: import("rxjs").Observable<unknown>;
        Menu: import("rxjs").Observable<unknown>;
        Image: import("rxjs").Observable<unknown>;
        Picker: import("rxjs").Observable<unknown>;
        Button: import("rxjs").Observable<unknown>;
        Link: import("rxjs").Observable<unknown>;
        Video: import("rxjs").Observable<unknown>;
        Table: import("rxjs").Observable<unknown>;
        Accordion: import("rxjs").Observable<unknown>;
        DynamicForm: import("rxjs").Observable<unknown>;
        Attachments: import("rxjs").Observable<unknown>;
    };
    pageItems: any;
    setFromStore: boolean;
    constructor(sharedEventsServiceService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, apiDataService: ApiDataService, appDataService: AppDataService, wfeStepLoaderService: WfeStepLoaderService, ceeApiService: CeeApiService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, router: Router);
    ngOnInit(): Promise<void>;
    setShownData(): void;
    previous(): void;
    next(): void;
    retrieveBlockFields(): Promise<void>;
    /**
     * function that maps static possible values
     * @param possibleValues the field possible Values
     */
    private mapPossibleValues;
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    private setListData;
    private checkRowVisibility;
    private setTotalCountAppData;
    private onFieldDataUpdated;
    /**
     * function that performs the filtering
     */
    applyFilter(): void;
    setPrimaryKey: (data: any) => void;
    /**
     * function that performs the pagination previous
     */
    paginationPrevious(): void;
    /**
     * function that performs the pagination next
     */
    paginationNext(): void;
    isValidPageNumber(num: any): boolean;
    /**
     * function that performs the pagination page number
     */
    setCurrent(num: any): void;
    /**
     * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
     *
     * @param i
     * @param currentPage
     * @param paginationRange
     * @param totalPages
     * @returns '{*}'
     */
    calculatePageNumber(i: any, currentPage: any, paginationRange: any, totalPages: any): any;
    /**
     * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
     * links used in pagination
     *
     * @param currentPage
     * @param rowsPerPage
     * @param paginationRange
     * @param collectionLength
     * @returns '{Array}'
     */
    generatePagesArray(currentPage: any, totalPages: any, paginationRange: any): any[];
    /**
     * function that sets the pagination count
     * @param 0 wont reset the count because in server side pagination
     * page Number comes from the api
     */
    onPaginationCountChange(flag?: number): void;
    showMore(flag?: number): void;
    setPaginationCount(): void;
    /**
     * set the values of the selected items in case of List-Single-Select
     */
    showSelectedRadioValues(): void;
    /**
     * function that set the number of checked items when the list type is List-Multi-Select
     */
    checkCheckedValues(): void;
    /**
     * function to set pagination api store
     * @param name pagination api keys
     * @param value the value of the api key
     */
    setPaginationStore(name: any, value: any): void;
    /**
     * function that performs the pagination
     */
    performPagination(): void;
    sortList(properties: any): any;
    lazyLoading(): void;
    setFieldProperties(displayValues: any): any;
    /**
     * returns the message object from the message code
     * @param messageCode the message code as configured in validation_messages message_code
     */
    returnMessageData(messageCode: any): any;
    /**
     * function that shows an error message on the basis of the configured validation_messages
     */
    showErrorMessage(): void;
    /**
     * function that opens a material dialog bar
     * @param data the message that is configure in the CEE Message
     */
    openDialog(data: any): void;
    /**
     * function that opens a material snack bar
     * @param message the message that is configure in the CEE Message
     */
    openSnackBar(message: any): void;
    /**
     * function that gets triggered when there is a event(HTML event) triggered
     * in the case of List-Single-Select or List-Multi-Select
     * @param data the current data of the row
     * @param isChecked if the value is checked or not
     * @param context the position of the selected row
     */
    list_change(data: any, isChecked: boolean, context?: any, internal?: boolean): void;
    /**
     * function that stores the value of the list single select and list multi select or set the value on load of a list
     * @param type type can be only ON_LOAD so that the value is already set in
     * the list on the load of the page is the user has already selected that
     */
    storePrimaryKey(type?: any, checked?: boolean): void;
    /**
     * returns the primary key from the additional parameter PrimaryKeyName
     * @param key the value of additional parameter PrimaryKeyName
     */
    getPrimaryKey(key: string): string;
    /**
     * returns the main api key from the given api key
     * @param key the key that is provided as an additional parameter
     */
    getValueFromKey(key: any): any;
    /**
     * function that displays chips if the additional parameter is set to checkbox chips
     */
    checkboxChips: () => void;
    /**
     * function that removes the chips from the top of the list when some of the items are unchecked
     */
    deleteChips: (chipData: any) => void;
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
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name: string): void;
    get isSingleAPIKey(): boolean;
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data: any, pos: number): void;
    get getRangeLabel(): string;
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy(): void;
    onMaterialPageChange(event: PageEvent): void;
    isHTML(value: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListRendererComponent, "app-list-renderer", never, { "sectionData": { "alias": "sectionData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "type": { "alias": "type"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "childList": { "alias": "childList"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=list-renderer.component.d.ts.map