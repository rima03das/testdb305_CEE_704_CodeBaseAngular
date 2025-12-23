import { OnInit, OnDestroy, SimpleChanges, OnChanges, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { MatSelect as MatSelect } from '@angular/material/select';
import * as i0 from "@angular/core";
export declare class CeePickerComponent extends BaseView implements OnInit, OnDestroy, OnChanges {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    ceeApiService: CeeApiService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    router: Router;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    private cdRef;
    fieldName: NgModel;
    selectField: MatSelect;
    ang2SelectField: ElementRef;
    stepId: any;
    fieldData: any;
    keepState: boolean;
    primaryKeyIndex: any;
    rowData: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    rootData: any;
    dependentSubscriber$: Subscription;
    pickerValues: any[];
    html_id: string;
    modalGenericCssClass: string;
    custom_class_name: string[];
    optionsAriaLabel: any;
    dropdownList: any[];
    selectedItems: any[];
    dropdownSettings: {};
    primaryKeyVal: any;
    labelKeyVal: any;
    classList: any;
    multiselectTooltip: any;
    noneditablePlaceholder: string;
    fieldPlaceholder: any;
    isValidDataStore: boolean;
    isValueSetFromRowData: boolean;
    private timeoutIds;
    private isApiSearchEnabled;
    private searchMinCharacters;
    private searchDebounceTime;
    private searchSubject;
    private destroy$;
    requestApiKeyForSearch: string;
    private searchInputElement;
    private boundOnSearchInput;
    private limitForSearch;
    private limitForSearchApplicable;
    private apiKeyForDisplayValue;
    private fieldDisplayValue;
    private clearButton;
    private internalAPIResponseEmitter;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, ceeApiService: CeeApiService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, router: Router, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    private initializeApiSearchSettings;
    private setupSearchLimitConfig;
    private setLimitApiData;
    get cssClasses(): string;
    /**
     * Retrieves a value (primary key or label key) from the `externalApiOptionValue` parameter.
     *
     * @param {number} i - The index to determine which value to retrieve:
     *                     0 for the primary key, 1 for the label key.
     * @returns {string | undefined} - The extracted value from the `externalApiOptionValue` parameter,
     *                                  or `undefined` if the value is not found or invalid.
     *
     * The `externalApiOptionValue` is expected to be a string in the format:
     * "key1.key2||key3.key4", where `||` separates the primary key and label key,
     * and `.` separates nested keys.
     *
     * Example:
     * If `externalApiOptionValue` is "data.id||data.name":
     * - Calling `getValueFromExpternalApi(0)` will return "id".
     * - Calling `getValueFromExpternalApi(1)` will return "name".
     */
    getValueFromExpternalApi(i?: number): any;
    processPickerSetting(value?: boolean): void;
    onMultiselectClicked(event: any): void;
    onItemSelect(item: any): void;
    OnItemDeSelect(item: any): void;
    onSelectAll(items: any): void;
    onDeSelectAll(items: any): void;
    changeStoreValues(): void;
    onDestroy(): void;
    concatData(): void;
    ngOnDestroy(): void;
    onViewDataInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    private initSelectPicker;
    setValueFromRowData(): void;
    setValueFromDefaultValue(defaultValue: string, data: any): void;
    assignPickerOptionValues(): void;
    onAPICallback(data: any): void;
    getPickerArrOfObject(pickerValues: any): any[];
    onEmptySession(get_data: any): void;
    handleCustomFunction(get_data: any): void;
    onSetSessionData(apiKey: string, value: any): void;
    getUpdatedValue(): void;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    toggleLanguage(data: object): void;
    toggleModalCssClass(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkIfFieldValueIsExist(): void;
    performSearch(searchTerm: string): void;
    private updateDataOnChange;
    private handleDropdownToggleClick;
    onDropdownClick(event: MouseEvent): void;
    private setupSearchInput;
    private removeSearchEventListeners;
    private onSearchInput;
    onClearClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeePickerComponent, "app-cee-picker", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-picker.component.d.ts.map