import { OnInit, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { BaseView } from '../cee-base-class';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { MatCheckbox as MatCheckbox } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
export declare class CeeCheckboxComponent extends BaseView implements OnInit, OnDestroy, OnChanges {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    checkBoxControl: NgModel;
    checkField: MatCheckbox;
    stepId: any;
    fieldData: any;
    keepState: boolean;
    rowData: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    rootData: any;
    columns: number;
    inputValue: boolean;
    html_id: string;
    checkboxesDataList: object[];
    extraPossibleValueStatus: boolean;
    isHTMLContent: any;
    isSingleCheckboxChecked: boolean;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient);
    ngOnInit(): void;
    /**
     * function that unsubscribes all the events in base view when the component is unloaded
     * @param $event HTML event
     */
    private clearCheckboxData;
    ngOnDestroy(): void;
    /**
     * setting the data of the field when the key in the data matches the api key of the field
     * @param data api response data
     */
    onAPICallback(data: any): void;
    multipleCheckboxRender(data?: Array<any>): void;
    private maxValueCheck;
    /**
     * abstract method that gets loaded after the field has been initialized
     */
    onViewDataInit(): void;
    getMaskDataOnCheckBox(data: any[], fielData: boolean): void;
    /**
     * abstract method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
    onEmptySession(get_data: any): void;
    /**
     * abstract method called when any Custom Function event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that project needs to set specifically
     * by completing any operation on the project end.
     */
    handleCustomFunction(get_data: any): void;
    concatData(): void;
    onSetSessionData(apiKey: string, value: any): void;
    setValues(valArr: any): void;
    onEnter(event: any, item: any): void;
    storeLastClickedValue(clickedVal: any, eventTarget: any): void;
    checkedVal(eventTarget: any): void;
    /**
     * function that returns checked values
     * only works when the possible values are more than 1
     */
    returnCheckedValues(): any[];
    /**
     * function that returns checked values
     * only works when the possible values is 1 or not present
     */
    getCheckedValue(isChecked: boolean): any;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    toggleLanguage(data: object): void;
    ngOnChanges(changes: SimpleChanges): void;
    validateContaint(content: any): any;
    isCheckboxChecked(fieldValue: any): boolean;
    setInputValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeCheckboxComponent, "app-cee-checkbox", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-checkbox.component.d.ts.map