import { OnInit, OnDestroy, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BaseView } from '../cee-base-class';
import { NgModel } from '@angular/forms';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import * as i0 from "@angular/core";
export declare class CeeCalendarComponent extends BaseView implements OnInit, OnDestroy, OnChanges {
    datepipe: DatePipe;
    userDataHandlerService: UserDataHandlerService;
    internalCEEEmitter: CEEInternalEmitterService;
    sharedEventsService: SharedEventsServiceService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    private elementRef;
    datePicker: NgModel;
    stepId: any;
    fieldData: any;
    rowData: any;
    keepState: boolean;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    minDate: Date;
    maxDate: Date;
    isValid: boolean;
    inputValue: any;
    now: Date;
    nowDate: Date;
    datePickerState: {
        touched: boolean;
        dirty: boolean;
    };
    dayPickerIndex: Date;
    monthCaption: string;
    calendarDays: any[];
    dateData: {};
    allowManualEntry: boolean;
    invalidDate: boolean;
    previousDateInputValue: string;
    isUnavailableDate: boolean;
    dateFormat: string;
    apiDateFormat: string;
    defaultValue: any;
    typeWiseList: any[];
    weekArray: Array<any>;
    monthArray: Array<any>;
    yearArray: Array<any>;
    locale: string;
    captionData: any;
    view: any;
    private switchTimeout;
    private subscriptions;
    private jQueryCleanupElements;
    private momentInstances;
    constructor(datepipe: DatePipe, userDataHandlerService: UserDataHandlerService, internalCEEEmitter: CEEInternalEmitterService, sharedEventsService: SharedEventsServiceService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, elementRef: ElementRef);
    get currDate(): Date;
    updateMonthIndex(index: number): void;
    generateDayPicker(): void;
    checkIfUnavailableDate(dateValue: any): boolean;
    getSunday(d: any): Date;
    getSaturday(d: any): Date;
    ngOnInit(): void;
    ngOnDestroy(): void;
    get isFutureDate(): boolean;
    get shadowValue(): string;
    onViewDataInit(): void;
    setDefaultDateFromAPI(): void;
    private loadWeekList;
    setState(value: any, inputBoxesState: any): void;
    concatData(): void;
    onDateSelected(d: any): void;
    isValidDate(d: any): boolean;
    dateOnly(event: any): boolean;
    onDateInput(val: string): void;
    onBlurDP(val: string): void;
    onSessionDataUpdated(date: any): void;
    validateMinMaxRange(d: any): boolean;
    onAPICallback(data: any): void;
    processApiRes(apiValue: any): void;
    monthDiff(d1: any, d2: any): any;
    onSetSessionData(apiKey: string, value: any): void;
    setMinandMaxValue(): void;
    getDateOnType(parameterValue: any, type: any): Date;
    returnDateArrayWithType(parameterValue: any, type: any): {
        dates: any[];
        type: any;
    };
    returnDate(field: any): Date;
    /**
     * this function calculates date if max value or min value set as 1w or 1d or 1y or 1m or 1w 1d 1y 1m
     * @param type the type of the min or max value
     * @param currentDate the current from which it needs to be deducted or added
     * @param no the number of date month week or year
     * @param operator subtract or add to the current date
     */
    private calculateDate;
    onEmptySession(get_data: any): void;
    handleCustomFunction(get_data: any): void;
    clearDate(event: any): void;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    toggleLanguage(data: object): void;
    updateStateHistory(data: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadMonthList;
    private loadYearList;
    displayView(view?: string): void;
    setMonthData(month: any): void;
    setYearData(year: any): void;
    handleKeyDown(e: any): void;
    handleKeyDownCalendar(e: any): void;
    dViewTabFlag: boolean;
    OnDayViewFocus(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeCalendarComponent, "app-cee-calendar", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-calendar.component.d.ts.map