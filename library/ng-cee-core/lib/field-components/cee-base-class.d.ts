import { ChangeDetectorRef } from '@angular/core';
import { SessionKeyUtil } from '../utils/session-key-util';
import { ConditionalValidator } from '../utils/wfe-conditional-validator';
import { WFEConditionalExecuter } from '../utils/wfe-conditional-query-executer-util';
import { WFEEventListHandler } from '../utils/wfe-event-list-handler-util';
import { SaveFieldValueUtil } from '../utils/save-field-value-util';
import { UserDataHandlerService } from '../services/user-data-handler.service';
import { WfeStepLoaderService } from '../services/wfe-step-loader.service';
import { SharedEventsServiceService } from '../services/shared-events-service.service';
import { CeeApiService } from '../services/cee-api-service.service';
import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { AppData } from '../models/app-data/app-data.model';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { APIKeyUtil } from '../utils/api-key-util';
import { CommonUtil } from '../utils/common-util';
import { ConditionalUtil } from '../utils/wfe-conditional-util';
import { HttpClient } from '@angular/common/http';
import { FlatUnflat } from '../utils/flat-unflat-json';
import { RepeatableBlockData } from '../models/repeatable-block-data/repetableBlockData.util';
import { RepetableBlockFieldModel } from '../models/repeatable-block-data/repeatableBlockFieldData.model';
import { AppDataQuery } from '../models/app-data/app-data.query';
import { SetAPICallbackData } from '../utils/set-api-callback-data-util';
import ExternalRequestResponseUtil from '../utils/external-request-response.util';
import { EmptyUtil } from '../utils/empty-util';
import { DynamicLabelUtil } from '../utils/dynamic-label-util';
import { ChildCondition } from './../models/childCondition.model';
import { CustomErrorsValidation } from '../static-codes/custom-errors-validation';
import { FileUploadService } from '../services/file-upload-service.service';
import { CEEInternalEmitterService } from '../services/internal-cee-emitter-service.service';
import * as i0 from "@angular/core";
export declare abstract class BaseView {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    _ceeApiService?: CeeApiService;
    router?: Router;
    fileUploadService?: FileUploadService;
    rootData: any;
    stepId: string;
    fieldData: any;
    hasInitialized: boolean;
    fieldData$: any;
    hasTooltip: boolean;
    tabIndexValue: number;
    isEditable: boolean;
    isVisible: boolean;
    isMandatory: boolean;
    isCustomClass: boolean;
    isSafariClass: boolean;
    hasComments: boolean;
    hasAttachments: boolean;
    fieldValue: any;
    apiValue: any;
    additionalParameter: {};
    event_handler: any;
    isOnSelect: boolean;
    selectedDataObj: any;
    dependentObj: any;
    manageState: boolean;
    fromField: any;
    messages: any[];
    modalMessages: any[];
    snackBarMessages: any[];
    multipleErrorMessage: boolean;
    errorMessageData: any;
    showErrorOnNext: boolean;
    showComparisonError: {};
    comparisonErrorMessageData: any;
    characterCount: {
        display: boolean;
        type: string;
    };
    characterCountMessageData: any;
    appDataQuery: AppDataQuery;
    appData: AppData;
    valid: boolean;
    repetableBlockModel: RepetableBlockFieldModel;
    changeDetectorRef: ChangeDetectorRef;
    presetData: any;
    repeatableDataPresent: boolean;
    variableObject: {};
    conditionObj: {};
    conditionalValidator: ConditionalValidator;
    sessionKeyUtil: SessionKeyUtil;
    wfeConditionalExecuter: WFEConditionalExecuter;
    wfeEventListHandler: WFEEventListHandler;
    apiKeyUtil: APIKeyUtil;
    commonUtil: CommonUtil;
    conditionalUtil: ConditionalUtil;
    saveFieldValueUtil: SaveFieldValueUtil;
    flattenUnflattenUtil: FlatUnflat;
    repeatableBlockDataUtil: RepeatableBlockData;
    setApiCallBackDataUtil: SetAPICallbackData;
    setDynamicLabelUtil: DynamicLabelUtil;
    externalRequestResponseUtil: ExternalRequestResponseUtil;
    apiConfigPath: string;
    bindKeyList: string[];
    checkEmpty: EmptyUtil;
    customErrorsValidation: CustomErrorsValidation;
    is_bootstrap: boolean;
    is_material: boolean;
    fieldStyle: any;
    isListView: boolean;
    isTableView: boolean;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, _ceeApiService?: CeeApiService, router?: Router, fileUploadService?: FileUploadService);
    updateStarWithPositionInFieldData(position: number): void;
    init(stepId: string, fieldData: any, manageState?: boolean, data?: any, ref?: ChangeDetectorRef): void;
    get isSafari(): boolean;
    get cssClasses(): string;
    private setMandatoryError;
    private createNewFieldState;
    private loadLastSavedState;
    private unsubscribeAndInit;
    abstract onViewDataInit(): void;
    abstract updateStateHistory(data: any): void;
    abstract onAPICallback(data: any): void;
    abstract concatData(data: any): void;
    abstract onEmptySession(data: any): void;
    abstract handleCustomFunction(data: any): void;
    abstract setFieldValueOnSetValuesEvent(data: object): void;
    abstract setFieldStateOnStateChangeEvent(data: object): void;
    abstract toggleLanguage(data: object): void;
    protected onViewUnload(): void;
    protected onViewLoaded(): void;
    /**
     * method sets message for the special
     * attachment data type
     */
    protected setAttachmentMessage(messageId: any): void;
    protected conditionCheck(value: any): void;
    protected onSetSessionData(apiKey: string, value: any): void;
    protected onDirty(): void;
    /**
     * function that only updates a single entity in the akita store
     * and does not update or emit any event
     * @param data the field value that needs to be updated
     */
    protected updateFieldEntity(data: any): void;
    /**
     * function that updates the attachment data in the akita store
     * special method that merges the new data with the existing data
     * or modifies the existing data based on the type or action
     * data
     */
    protected updateAttachments(type: any, fieldUniqueId: any, data?: any, attachmentId?: string, isReplace?: boolean): void;
    protected updateFieldData(data: any, isValid?: boolean): void;
    /**
    * Check if field is part of a repeatable block
    */
    private isRepeatable;
    /**
     * Get repeatable block info if field is repeatable
     */
    private getRepeatableInfo;
    private emitForFieldsSectionBlock;
    protected setSessionData(data: any): void;
    protected getSessionData(): void;
    conditionalErrorMessageCompareFields: (apiKey: string, fieldData: any, repeatedFieldId?: string, options?: {
        isSin?: boolean;
    }) => void;
    conditionalErrorMessageCompareFieldsSin: (apiKey: string, fieldData: any, repeatedFieldId?: string, isMessageDisplay?: boolean) => void;
    getMaskedInputValue(inputValue: any, mask: any): any;
    returnMessages(messageArray: any): any[];
    setData(): void;
    updateConditionField(fieldData: any, data: any): any;
    /**
     * function triggers the event list
     * @param type the event type
     * @param primaryData optional mainly the data that is stored in list or table
     * @param isDefault boolean flag to check the event by default it is set to true
     * @param payLoad optional data if required to pass to the event
     * @param displayType optional only required if display_type in the event needs to be matched default empty
     */
    onComponentEvent(type: string, primaryData?: any, isDefault?: boolean, payLoad?: any, displayType?: string): void;
    /**
     * function to set next step id for NavigatetoNextPage in onResponse
     * @param event the event
     */
    dependencyHandler: (type: any, payLoad?: any) => Promise<void>;
    comparisonError(): void;
    isHTML(value: string): boolean;
    setCharacterCountMessage(): void;
    openDialog(data: any, id?: any): void;
    openSanckBar(message: any, messageCode?: string): void;
    checkForArray(array: any, key: any): any[];
    checkForObject(data: any, key: any): any;
    getConcatenation: () => void;
    setFieldValue(): string;
    /**
     * function that returns value from set api callback util
     * @param keyName the api key name
     */
    returnValueFromCallback(keyName: any): any;
    returnMessageData(messageCode: any): any;
    /**
     * open popup or snackbar based on the configuration
     * @param fieldId unique id of the field
     * @param value the current value of the field
     */
    setModalorSanckBarMessage(fieldId: any, value: any, messageType?: string): void;
    setConditions(childConditions: ChildCondition, type: any): void;
    /**
     * get associated fields from the conditional mandatory, display, editable
     */
    getAssociatedFields(): any[];
    /**
     * function that returns the unique id
     */
    returnUniqueId(): string;
    /**
     * function that set primary key value that comes from cell
     * and returns the cellData
     * @param primaryKeyIndex an object
     */
    setPrimaryKey(primaryKeyIndex: any): {
        type: string;
        stepId: string;
        value: {};
    };
    /**
     * function returns an object with key and value where
     * key is the name of the field/parameter that needs to be
     * changed on language change and value is the data that needs to
     * be set for that param
     * @param value: string the key name that needs to be checked and set
     * @param data: object the current changes field data
     * @param changeMap: object a map that checks which value will change
     * for a specific field
     */
    switchLang(value: string, data: object, changeMap: object): ILangChange;
    /**
     * this function returns the external api option value for picker, menu,
     * @param value the api key from which the value of the picker should come
     * @param data the api data
     */
    getExternalApiOptionValue(value: string, data: any): any;
    get singleCondition(): boolean;
    get storeLabels(): boolean;
    get isSingleApiKey(): boolean;
    get hashApiKey(): boolean;
    get hasUnsavedData(): boolean;
    get modalOnPageLeave(): string | false;
    get customCheck(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseView, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseView, never, never, { "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, false, never>;
}
export interface ILangChange {
    key: string;
    val: string | number | Array<any>;
}
//# sourceMappingURL=cee-base-class.d.ts.map