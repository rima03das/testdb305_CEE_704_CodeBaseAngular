import { OnInit, OnDestroy } from '@angular/core';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
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
import { FlatUnflat } from '../../utils/flat-unflat-json';
import * as i0 from "@angular/core";
export declare class DynamicFormComponent implements OnInit, OnDestroy {
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
    sectionData: any;
    stepId: any;
    templateId: any;
    rowData: any;
    rootData: any;
    childList: any;
    type: any;
    displayValues: any;
    displayValuesLazy: any;
    lazyInterval: any;
    searchData: MatTableDataSource<any, import("@angular/material/paginator").MatPaginator>;
    showLoading: boolean;
    noDataFound: boolean;
    showSkeletonLoader: boolean;
    listElements: any;
    showErrorOnNext: boolean;
    messages: any[];
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
    isVisible: boolean;
    fieldValue: any;
    checkEmpty: EmptyUtil;
    setDynamicLabelUtil: DynamicLabelUtil;
    noDataFoundLabel: string;
    flatAndNestUtil: FlatUnflat;
    html_id: string;
    fieldList: any[];
    hideLabel: boolean;
    allowedFieldTypes: string[];
    constructor(sharedEventsServiceService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, apiDataService: ApiDataService, appDataService: AppDataService, wfeStepLoaderService: WfeStepLoaderService, ceeApiService: CeeApiService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, router: Router);
    ngOnInit(): Promise<void>;
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    private setListData;
    private propParseRecurs;
    /**
     * function that generate field JSON
     * @param result api response or the response of possible values
     */
    private renderFieldJson;
    private hasDynamicKey;
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
    isHTML(value: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormComponent, "app-dynamic-form", never, { "sectionData": { "alias": "sectionData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "childList": { "alias": "childList"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=dynamic-form.component.d.ts.map