import { OnInit, OnDestroy, ElementRef, Renderer2, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
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
import dayjs, { Dayjs } from "dayjs";
import * as i0 from "@angular/core";
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CeeDateComponent extends BaseView implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    datepipe: DatePipe;
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    private elementRef;
    private renderer;
    private document;
    datePicker: NgModel;
    stepId: any;
    fieldData: any;
    rowData: any;
    keepState: boolean;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    minDatex: Date;
    maxDatex: Date;
    isValid: boolean;
    showCross: boolean;
    inputValue: Date;
    inputDateRangeValue: any;
    entryFields: string[];
    inputValueDay: any;
    inputValueMonth: any;
    inputValueYear: any;
    dayFormatError: boolean;
    monthFormatError: boolean;
    yearFormatError: boolean;
    dayError: boolean;
    monthError: boolean;
    yearError: boolean;
    nowDate: Date;
    dayBoxState: {
        touched: boolean;
        dirty: boolean;
    };
    monthBoxState: {
        touched: boolean;
        dirty: boolean;
    };
    yearBoxState: {
        touched: boolean;
        dirty: boolean;
    };
    datePickerState: {
        touched: boolean;
        dirty: boolean;
    };
    entryFieldsPossibleValues: {
        date: any[];
        month: any[];
        year: any[];
    };
    numberError: boolean;
    allowManualEntry: boolean;
    invalidDate: boolean;
    dateFormat: string;
    apiDateFormat: string;
    modalGenericCssClass: string;
    maskString: string;
    autocomplete: boolean;
    withTime: boolean;
    timeConfig: {
        hour: number;
        minute: number;
        second: number;
    };
    enableMeridian: boolean;
    start: any;
    end: any;
    dateRangeStartPlaceholder: any;
    dateRangeEndPlaceholder: any;
    startDateRangeDisp: any;
    endDateRangeDisp: any;
    dropsDown: string;
    dropsUp: string;
    opensRight: string;
    opensCenter: string;
    opensLeft: string;
    selectedRangeCalendarCenter: any;
    maxDate?: dayjs.Dayjs;
    minDate?: dayjs.Dayjs;
    invalidDates: dayjs.Dayjs[];
    ranges: any;
    locale: {
        firstDay: number;
        startDate: dayjs.Dayjs;
        endDate: dayjs.Dayjs;
        format: string;
        applyLabel: string;
        cancelLabel: string;
        fromLabel: string;
        toLabel: string;
    };
    localeSet: any;
    tooltips: {
        date: dayjs.Dayjs;
        text: string;
    }[];
    noneditablePlaceholder: string;
    fieldPlaceholder: any;
    private overlayContainer;
    hide: boolean;
    dateMaskFormat: string;
    dataTimeout: any;
    constructor(datepipe: DatePipe, userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, elementRef: ElementRef, renderer: Renderer2, document: Document);
    get isFutureDate(): boolean;
    get shadowValue(): string;
    get redactedValue(): string;
    set shadowValue(v: string);
    get shadowStartValue(): string;
    set shadowStartValue(v: string);
    get shadowEndValue(): string;
    set shadowEndValue(v: string);
    get currDate(): Date;
    get maskInputValue(): Date;
    set maskInputValue(v: Date);
    ngOnInit(): void;
    isInvalidDate: (m: dayjs.Dayjs) => boolean;
    isCustomDate: (date: dayjs.Dayjs) => false | "mycustomdate";
    isTooltipDate: (m: dayjs.Dayjs) => string | false;
    datesUpdatedRange($event: Object): void;
    ngOnDestroy(): void;
    onViewDataInit(): void;
    setDateRanges(ranges: any): void;
    setDateValRanges(type: any, number: any): {
        name: any;
        value: any;
    };
    dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement): void;
    getMaskedInputValue(): string;
    dateOnly(event: any): boolean;
    onDateChange(): void;
    getRedactedDate(date: any): string;
    onDateInput(val: string, change?: boolean): void;
    onBlurDP(val: string): void;
    onBlurDPSetState(val: string, dateField: NgModel): void;
    setBoxDate(): void;
    boxKeyUp(boxType: string, valueState: any, inputBoxesState: any): void;
    setDateRangeValue(value: any, inputBoxesState: any): void;
    setState(value: any, inputBoxesState: any): void;
    concatData(): void;
    isValidDate(d: any): boolean;
    onSessionDataUpdated(date: any): void;
    onSessionDateRangeDataUpdated(date: any): void;
    validateDateRangeMinMax(dt: any): boolean;
    validateMinMaxRange(): boolean;
    onAPICallback(data: any): void;
    onSetSessionData(apiKey: string, value: any): void;
    setMinandMaxValue(): void;
    setDefaultValue(): void;
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
    setEmptyUIType(): void;
    handleCustomFunction(get_data: any): void;
    clearDate(event: any): void;
    onNoDateSelection(): void;
    clearDateRange(event: any): void;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    setInputFilter(textbox: any, inputFilter: any): void;
    toggleLanguage(data: object): void;
    toggleModalCssClass(): void;
    ngAfterViewInit(): void;
    setHiddenOverlay(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeDateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeDateComponent, "app-cee-date", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-date.component.d.ts.map