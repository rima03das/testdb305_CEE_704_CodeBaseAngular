import { OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { Router } from '@angular/router';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ApplicationStateStoreUtil } from '../../utils/application-state-store-util';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { FileUploadService } from '../../services/file-upload-service.service';
import * as i0 from "@angular/core";
/**
 * CeeButtonComponent - Smart Button with Validation Control
 *
 * Enhanced Force Disable Section Parameter Support:
 * The 'Force Disable Section' parameter now supports multiple section IDs
 * separated by pipe (|) character for comprehensive validation control.
 *
 * Examples:
 * - Single section: "17_34596_contact_view"
 * - Multiple sections: "17_34596_contact_view|0_34596_contact_view"
 * - Complex scenarios: "section1|section2|section3"
 *
 * The button will be disabled if ANY of the specified sections have:
 * - Missing mandatory field values
 * - Invalid field values with validation errors
 *
 * @enhanced Multi-section validation support for Force Disable Section parameter
 */
export declare class CeeButtonComponent extends BaseView implements OnInit, OnDestroy, OnChanges {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    ceeApiService: CeeApiService;
    router: Router;
    sharedEventsServices: SharedEventsServiceService;
    wfeStepLoaderService: WfeStepLoaderService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    fileUploadService: FileUploadService;
    private cdr;
    private storageService;
    stepId: any;
    fieldData: any;
    primaryKeyIndex: any;
    keepState: boolean;
    rowData: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    buttonLabel: string;
    html_id: string;
    labelEmitter: Subscription;
    appConfigData: {};
    validationPassed: boolean;
    sessionKeyUtil: SessionKeyUtil;
    $buttonValidationEmitter: Subscription;
    applicationStateStore: ApplicationStateStoreUtil;
    checkBlockSection: string;
    fieldLabels: any[];
    eventFlag: boolean;
    pdfUrl: string;
    private labelUpdateTimeout;
    private validationTimeout;
    private buttonListnerTimeout;
    private subscriptions;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, ceeApiService: CeeApiService, router: Router, sharedEventsServices: SharedEventsServiceService, wfeStepLoaderService: WfeStepLoaderService, appDataService: AppDataService, apiDataService: ApiDataService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, fileUploadService: FileUploadService, cdr: ChangeDetectorRef, storageService: UserDataHandlerService);
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    unsubscribe(): void;
    onViewDataInit(): void;
    getDynamicLabel(data?: any): void;
    onAPICallback(data: any): void;
    onSetSessionData(apiKey: string, value: any): void;
    buttonClickListener(): void;
    private listener;
    concatData(): void;
    buttonClick(): void;
    nextClick(): void;
    previousClick(): void;
    submitClick(): void;
    executeEvent(moveTo: any): void;
    setProgressBarStepStatus(): Promise<unknown>;
    private setNextDependentProgressBarStepStatus;
    returnMandatoryCheck(moveTo?: string): void;
    getValueBetweenDollars(input: any): any;
    replacePlaceholder(prefix: string, placeholder: string, index: number, subIndex?: number): string;
    /**
     * Utility method to validate and parse Force Disable Section parameter values
     * Ensures proper handling of pipe-separated section IDs
     *
     * @param {string} sectionParam - The Force Disable Section parameter value
     * @returns {string[]} Array of cleaned section IDs
     */
    private parseSectionIds;
    /**
     * Enhanced validation method for Force Disable Section parameter
     * Now supports multiple section IDs separated by pipe (|) character
     *
     * @param {Object} options - Validation options
     * @param {boolean} options.mandatory - Check for mandatory field violations
     * @param {boolean} options.valid - Check for field validation errors
     * @param {string} sectionId - Single section ID or multiple IDs separated by pipe (|)
     * @returns {string[]} Array of field IDs that have validation issues
     *
     * @example
     * // Single section
     * checkValidateANDCheckMandatoryFieldsForSection({mandatory: true, valid: true}, "17_34596_contact_view")
     *
     * @example
     * // Multiple sections
     * checkValidateANDCheckMandatoryFieldsForSection({mandatory: true, valid: true}, "17_34596_contact_view|0_34596_contact_view")
     */
    private checkValidateANDCheckMandatoryFieldsForSection;
    private checkValidateANDCheckMandatoryFieldsForBlock;
    private checkValidateANDCheckMandatoryFields;
    private forceDisableButtonForBlock;
    private forceDisableButtonForSection;
    private forceDisableButton;
    onEmptySession(data: any): void;
    handleCustomFunction(getData: any): void;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    toggleLanguage(data: object): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * function checks for the condition that comes on the init as well as on the on change
     * @param editableCondition the editable condition
     * @param visibleCondition  the visible condition
     * @param mandatoryCondition the mandatory condition
     */
    checkConditionOnInit(editableCondition?: any, visibleCondition?: any, mandatoryCondition?: any): void;
    onContextMenu(event: MouseEvent): void;
    downloadPdf(pdfUrlLocal: string): Promise<void>;
    generateFilename(extension?: string): string;
    private padZero;
    openPdfPreviewFromUrl(url: string): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeButtonComponent, "app-cee-button", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-button.component.d.ts.map