import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { C as CalculationUtil } from './ng-cee-core-calculation-BbHcUYtr.mjs';
import * as i1 from '@angular/platform-browser';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'rxjs';
import 'ngx-toastr';
import '@angular/forms';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import 'ngx-image-zoom';
import 'moment-timezone';
import 'crypto-js';
import 'lodash';
import '@ng-idle/core';
import 'jquery';
import '@angular/cdk/tree';
import '@ng-idle/keepalive';
import 'ngx-socket-io';
import 'xlsx';
import 'html2canvas';
import 'html2pdf.js';
import 'jspdf';
import 'ts-md5/dist/md5';
import 'js-sha256';
import '@angular/platform-browser/animations';
import 'ngx-ui-switch';
import 'ng2-charts';
import 'ng2-google-charts';
import '@angular/material/core';
import '@angular/material/datepicker';
import '@angular/material/menu';
import '@angular/material/slide-toggle';
import '@angular/material/checkbox';
import '@angular/material/paginator';
import '@angular/material/radio';
import '@angular/material/sort';
import '@angular/material/table';
import '@angular/material/autocomplete';
import '@angular/material/tabs';
import '@angular/material/button';
import '@angular/material/select';
import '@ng-bootstrap/ng-bootstrap';
import '@angular/material/chips';
import '@angular/material/progress-bar';
import 'ngx-material-timepicker';
import 'angular-oauth2-oidc';
import 'ngx-webcam';
import '@eisberg-labs/ngx-barcode-scanner';
import '@angular/cdk/menu';
import '@angular-material-components/datetime-picker';
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';
import '@angular/cdk/portal';
import '@angular/cdk/overlay';

function CeeTickerComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "iframe", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.iframeLabel, i0.ɵɵsanitizeResourceUrl);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 10);
    i0.ɵɵlistener("click", function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.onComponentEvent("OnClick")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r3)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fieldLabel_r3, " ");
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 11);
    i0.ɵɵlistener("click", function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.onComponentEvent("OnClick")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", ctx_r0.checkIfIframe(fieldLabel_r3), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r3)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.counter.text);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template, 2, 6, "label", 7)(2, CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template, 1, 6, "label", 8)(3, CeeTickerComponent_div_0_ng_container_3_ng_container_1_div_3_Template, 3, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(fieldLabel_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(fieldLabel_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.counter && ctx_r0.counter.text);
} }
function CeeTickerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTickerComponent_div_0_ng_container_3_ng_container_1_Template, 4, 3, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r3 && fieldLabel_r3 != "" && fieldLabel_r3 != " ");
} }
function CeeTickerComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.tooltipText);
} }
function CeeTickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, CeeTickerComponent_div_0_ng_container_2_Template, 2, 1, "ng-container", 3)(3, CeeTickerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 4)(4, CeeTickerComponent_div_0_button_4_Template, 2, 2, "button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.iframeLabel && ctx_r0.iframeLabel != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldLabels);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
} }
class CeeTickerComponent extends BaseView {
    sanitizer;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    html_id = '';
    fieldLabels = [];
    labelEmitter;
    iframeLabel;
    AdditionalParameter = {};
    tooltipText = "";
    flatUnflat;
    counter = { min: 0, sec: 0 };
    intervalId;
    emitKey = {};
    currrentDateTime = new Date().getTime();
    calculationUtil;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.flatUnflat = new FlatUnflat(appDataService);
        this.calculationUtil = new CalculationUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        // ############## Auto Start Ticker ################
        // if(this.AdditionalParameter['AutoStart'] && this.AdditionalParameter['AutoStart'].toLowerCase() == 'true' && fieldData && fieldData['minTimestamp'] && fieldData['maxTimestamp'] && new Date().getTime() >= fieldData['minTimestamp'] && new Date().getTime() <= fieldData['maxTimestamp']) {
        if (this.AdditionalParameter['AutoStart'] && this.AdditionalParameter['AutoStart'].toLowerCase() == 'true') {
            setTimeout(() => {
                // console.log("id: ",this.stepId)
                this.startTimer();
            }, 2000);
        }
        // ############## Auto Start Ticker ###############
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
        clearInterval(this.intervalId);
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
        clearInterval(this.intervalId);
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
        for (const key in this.emitKey) {
            if (this.emitKey[key]) {
                this.emitKey[key].unsubscribe();
            }
        }
    }
    concatData() { }
    onViewDataInit() {
        // For unique html id
        // console.log(this.rowData);
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.fieldData.field_label); // OLD Implementation
        // this.getValue(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || this.fieldData.field_label.includes('((dynamic))')) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
            }
            else if (this.fieldValue !== undefined && this.fieldValue !== null) {
                this.fieldLabels = [];
                this.fieldValue = this.fieldValue ? this.getDataFormattedValue(this.fieldValue) : this.fieldValue;
                this.fieldLabels.push(this.fieldValue);
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
            });
        }
        if (this.additionalParameter['iframe']) {
            this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
        }
        this.emitKey['startTickerEmitter'] = this.sharedEventsService.startTickerEmitter.subscribe(res => {
            if (res) {
                // console.log(res);
                if (this.fieldData.unique_id == res) {
                    this.startTimer();
                }
            }
        });
        this.emitKey['stopTickerEmitter'] = this.sharedEventsService.stopTickerEmitter.subscribe(res => {
            if (res) {
                // console.log("unique_id: ",this.fieldData.unique_id, "res: ",res);
                if (this.fieldData.unique_id == res) {
                    this.stopTimer();
                }
            }
        });
        this.emitKey['pauseTickerEmitter'] = this.sharedEventsService.pauseTickerEmitter.subscribe(res => {
            if (res) {
                // console.log("unique_id: ",this.fieldData.unique_id, "res: ",res);
                if (this.fieldData.unique_id == res) {
                    this.pauseTimer();
                }
            }
        });
    }
    onAPICallback(data) {
        if (!this.rowData) {
            data = this.flatUnflat.createNestedObject(data);
            this.getDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                // console.log("LINE-133",this.fieldData.unique_id, resData);
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.AdditionalParameter['Data Format']) {
                const formats = this.AdditionalParameter['Data Format'].split('||').map(str => str && str.trim());
                return this.setDynamicLabelUtil.returnFormattedValue(data, formats.shift(), formats);
                // switch (formats[0].toLowerCase()) {
                //     case 'currency':
                //         return `${getCurrencySymbol(formats[1].trim(), 'narrow')}` +
                //             `${Number(data).toFixed(Number(formats[2].trim())).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                //     case 'time':
                //         return moment(Number(data)).format(formats[1].trim());
                //     case 'date':
                //         return moment(data).format(formats[1].trim());
                //     default:
                //         return data;
                // }
            }
        }
        catch (error) {
            console.error(`Something went wrong while transforming data !!!: ${error}`);
        }
        return data;
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    /**
     * function returns a map with possible value id to the value
     * @param values api response data
     */
    returnLabelsMapPossibleValues(values) {
        let data = values;
        for (const val of values) {
            if (this.fieldData.possible_values.length > 0) {
                data = this.fieldData.possible_values.map(pv => {
                    if (this.commonUtil.getPossibleId(pv) == val) {
                        return this.commonUtil.getPossibleValue(pv);
                    }
                });
            }
        }
        return data;
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldLabels = [get_data[unique_id_value]];
            // this.inputValue = get_data[unique_id_value];
            // this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    checkIfIframe(value) {
        if (value.includes('iframe')) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }
        else {
            return this.getDataFormattedValue(value);
        }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    getTimestampInSeconds() {
        return Math.floor(Date.now() / 1000);
    }
    getCalculatedMaxMinTime(value) {
        var calculatedValue = 0;
        if (value.includes('##')) {
            let apiStoreData = this.apiDataService.getApiDataByHandler(value.split('##')[0]) ? this.apiDataService.getApiDataByHandler(value.split('##')[0]).value : {};
            // console.log("api value: ", apiStoreData[value])
            if (apiStoreData[value]) {
                calculatedValue = new Date(apiStoreData[value]).getTime();
            }
            else {
                calculatedValue = new Date().getTime();
            }
        }
        else if (value.includes("CURR_TIME")) {
            let currTimestamp = new Date().getTime();
            // var calString = value.split('+')[1];
            value = value.replace("CURR_TIME", String(currTimestamp));
            if (value.includes("s")) {
                value = value.replace("s", "*1000");
            }
            if (value.includes("m")) {
                value = value.replace("m", "*60*1000");
            }
            if (value.includes("h")) {
                value = value.replace("h", "*60*60*1000");
            }
            if (value.includes("d")) {
                value = value.replace("d", "*24*60*60*1000");
            }
            if (value.includes("M")) {
                value = value.replace("M", "*30*24*60*60*1000");
            }
            if (value.includes("Y")) {
                value = value.replace("Y", "*365*24*60*60*1000");
            }
            calculatedValue = this.calculationUtil.calculate(value);
        }
        else {
            calculatedValue = new Date(value).getTime();
        }
        return calculatedValue;
    }
    setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat = '{{d}} days {{h}} hours {{m}} minutes {{s}} seconds') {
        var timeDiff = 0;
        // console.log("status: ",this.counter['status']);
        if (this.counter['status'] != 'paused') {
            if (this.AdditionalParameter['TickerType'] != 'increasing') {
                timeDiff = maxCalculatedValue - minCalculatedValue;
            }
            else {
                timeDiff = new Date().getTime() - minCalculatedValue;
            }
        }
        else {
            timeDiff = this.counter.timeDiffrence;
        }
        // console.log("timeDiff: ",timeDiff)
        const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365) % 365) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365) % 365) : 0;
        const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30) % 12) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30) % 12) : 0;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24) % 30) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24) % 30) : 0;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60) % 24) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60) % 24) : 0;
        const minutes = Math.floor(timeDiff / (1000 * 60) % 60) >= 1 ? Math.floor(timeDiff / (1000 * 60) % 60) : 0;
        const seconds = Math.ceil(timeDiff / (1000) % 60) >= 1 ? Math.ceil(timeDiff / (1000) % 60) : 0;
        // console.log("months: ", months, " days: ", days, " hours: ", hours, " minutes: ", minutes, " seconds: ", seconds);
        let timerText = '';
        if (years > 0) {
            timerText = timerText + String(years) + ' years ';
        }
        if (months > 0) {
            timerText = timerText + String(months) + ' months ';
        }
        if (days > 0) {
            timerText = timerText + String(days) + ' days ';
        }
        if (hours > 0) {
            timerText = timerText + String(hours) + ' hours ';
        }
        if (minutes > 0) {
            timerText = timerText + String(minutes) + ' minutes ';
        }
        if (seconds > 0) {
            timerText = timerText + String(seconds) + ' seconds ';
        }
        timerText = timerText.trim();
        this.counter = {
            intervalId: '',
            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
            maxTimestamp: maxCalculatedValue,
            minTimestamp: minCalculatedValue,
            timeDiffrence: timeDiff,
            year: years,
            month: months,
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
            text: tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(years)).replace("{{M}}", String(months)).replace("{{d}}", String(days)).replace("{{h}}", String(hours)).replace("{{m}}", String(minutes)).replace("{{s}}", String(seconds)),
            status: ''
        };
        this.updateFieldData({
            intervalId: '',
            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
            maxTimestamp: maxCalculatedValue,
            minTimestamp: minCalculatedValue,
            timeDiffrence: timeDiff,
            year: years,
            month: months,
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
            text: tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(years)).replace("{{M}}", String(months)).replace("{{d}}", String(days)).replace("{{h}}", String(hours)).replace("{{m}}", String(minutes)).replace("{{s}}", String(seconds)),
            status: ''
        });
        this.callOnTickerStart();
    }
    updateCounter(tickerFormat) {
        this.counter['years'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 365) % 365) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 365) % 365) : 0;
        this.counter['months'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 30) % 12) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 30) % 12) : 0;
        this.counter['days'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24) % 30) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24) % 30) : 0;
        this.counter['hours'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60) % 24) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60) % 24) : 0;
        this.counter['minutes'] = Math.floor(this.counter.timeDiffrence / (1000 * 60) % 60) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60) % 60) : 0;
        this.counter['seconds'] = Math.ceil(this.counter.timeDiffrence / (1000) % 60) >= 1 ? Math.ceil(this.counter.timeDiffrence / (1000) % 60) : 0;
        let timerText = '';
        if (this.counter['years'] > 0) {
            timerText = timerText + String(this.counter['years']) + ' years ';
        }
        if (this.counter['months'] > 0) {
            timerText = timerText + String(this.counter['months']) + ' months ';
        }
        if (this.counter['days'] > 0) {
            timerText = timerText + String(this.counter['days']) + ' days ';
        }
        if (this.counter['hours'] > 0) {
            timerText = timerText + String(this.counter['hours']) + ' hours ';
        }
        if (this.counter['minutes'] > 0) {
            timerText = timerText + String(this.counter['minutes']) + ' minutes ';
        }
        if (this.counter['seconds'] > 0) {
            timerText = timerText + String(this.counter['seconds']) + ' seconds ';
        }
        timerText = timerText.trim();
        this.counter['text'] = tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(this.counter['years'])).replace("{{M}}", String(this.counter['months'])).replace("{{d}}", String(this.counter['days'])).replace("{{h}}", String(this.counter['hours'])).replace("{{m}}", String(this.counter['minutes'])).replace("{{s}}", String(this.counter['seconds']));
    }
    startTimer() {
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        // console.log("fieldData: ",fieldData)
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var tickerFormat = this.AdditionalParameter['TickerFormat'] ? this.AdditionalParameter['TickerFormat'] : '{{d}} days {{h}} hours {{m}} minutes {{s}} seconds';
        var maxValue = this.AdditionalParameter['MaxValue'] ? this.AdditionalParameter['MaxValue'] : (this.AdditionalParameter['TickerType'] == 'increasing' ? 'CURR_TIME+10m' : 'CURR_TIME');
        var minValue = this.AdditionalParameter['MinValue'] ? this.AdditionalParameter['MinValue'] : (this.AdditionalParameter['TickerType'] == 'increasing' ? 'CURR_TIME' : 'CURR_TIME+10m');
        var maxCalculatedValue = this.getCalculatedMaxMinTime(maxValue);
        var minCalculatedValue = this.getCalculatedMaxMinTime(minValue);
        // console.log("maxValue: ", maxValue, " minValue: ", minValue);
        // console.log("maxCalculatedValue: ", maxCalculatedValue, " minCalculatedValue: ", minCalculatedValue);
        // if(new Date().getTime() < minValue || new Date().getTime() > maxCalculatedValue || this.counter['status'] == 'paused') {
        if (new Date().getTime() < minValue || new Date().getTime() > maxCalculatedValue || this.counter['status'] == 'started') {
            // console.log("true0")
            return;
        }
        else {
            if (tickerType == 'increasing') {
                if (fieldData && fieldData['minTimestamp'] && new Date().getTime() >= minCalculatedValue) {
                    // console.log("true1")
                    this.setCounter(fieldData['maxTimestamp'], fieldData['minTimestamp'], tickerFormat);
                }
                else {
                    // console.log("false1")
                    this.setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat);
                }
            }
            else {
                if (fieldData && fieldData['minTimestamp'] && new Date().getTime() >= minCalculatedValue) {
                    // console.log("true2",fieldData['maxTimestamp']," --- ",new Date().getTime())
                    this.setCounter(fieldData['maxTimestamp'], new Date().getTime(), tickerFormat);
                }
                else {
                    // console.log("false2")
                    this.setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat);
                }
            }
        }
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        if (tickerType == 'increasing') {
            this.intervalId = setInterval(() => {
                // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                // if((this.counter.timeDiffrence + 1000) < (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                if (this.counter.timeDiffrence < (this.counter.maxTimestamp - this.counter.minTimestamp) && this.counter['status'] != 'paused') {
                    this.counter.timeDiffrence += 1000;
                    // console.log(this.counter.maxTimestamp," - ",this.counter.minTimestamp, " ###### timeDiffrence ",this.counter.timeDiffrence)
                    // console.log("intervalId: ",this.intervalId)
                    this.counter['intervalId'] = this.intervalId;
                    this.counter['status'] = 'started';
                    this.updateCounter(tickerFormat);
                    var apiStoreData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
                    // console.log("intervalId: ",this.counter['intervalId'], " intervalId: ", apiStoreData['intervalId'])
                    if (!apiStoreData['intervalId']) {
                        this.updateFieldData({
                            intervalId: this.counter['intervalId'],
                            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
                            maxTimestamp: this.counter['maxTimestamp'],
                            minTimestamp: this.counter['minTimestamp'],
                            timeDiffrence: this.counter['timeDiffrence'],
                            year: this.counter['year'],
                            month: this.counter['month'],
                            day: this.counter['day'],
                            hour: this.counter['hour'],
                            minute: this.counter['minute'],
                            second: this.counter['second'],
                            text: this.counter['text'],
                            status: 'started'
                        });
                    }
                    // console.log("###### text",this.counter.text);
                }
                if ((this.counter.timeDiffrence + 1000) >= (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                    // if (this.counter.timeDiffrence >= (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                    clearInterval(this.intervalId);
                    this.callOnTickerStop();
                }
            }, 1000);
        }
        else {
            this.intervalId = setInterval(() => {
                // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                if (this.counter.timeDiffrence > 0 && this.counter['status'] != 'paused') {
                    this.counter.timeDiffrence -= 1000;
                    // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                    // console.log("intervalId: ",this.intervalId)
                    this.counter['intervalId'] = this.intervalId;
                    this.counter['status'] = 'started';
                    this.updateCounter(tickerFormat);
                    var apiStoreData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
                    // console.log("intervalId: ",this.counter['intervalId'], " intervalId: ", apiStoreData['intervalId'])
                    if (!apiStoreData['intervalId']) {
                        this.updateFieldData({
                            intervalId: this.counter['intervalId'],
                            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
                            maxTimestamp: this.counter['maxTimestamp'],
                            minTimestamp: this.counter['minTimestamp'],
                            timeDiffrence: this.counter['timeDiffrence'],
                            year: this.counter['year'],
                            month: this.counter['month'],
                            day: this.counter['day'],
                            hour: this.counter['hour'],
                            minute: this.counter['minute'],
                            second: this.counter['second'],
                            text: this.counter['text'],
                            status: 'started',
                        });
                    }
                    // console.log("###### text",this.counter.text);
                }
                if (this.counter.timeDiffrence <= 0) {
                    clearInterval(this.intervalId);
                    this.callOnTickerStop();
                }
            }, 1000);
        }
    }
    stopTimer() {
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        this.stopTimerUpdateFieldData(tickerType, fieldData);
    }
    stopTimerUpdateFieldData(tickerType, fieldData) {
        this.counter['maxTimestamp'] = (tickerType == 'increasing') ? new Date().getTime() : fieldData['maxTimestamp'];
        this.counter['minTimestamp'] = (tickerType != 'increasing') ? new Date().getTime() : fieldData['minTimestamp'];
        this.counter['status'] = 'stoped';
        this.updateFieldData('');
        clearInterval(fieldData['intervalId']);
        this.callOnTickerStop();
    }
    pauseTimer() {
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        this.pauseTimerUpdateFieldData(tickerType, fieldData);
    }
    pauseTimerUpdateFieldData(tickerType, fieldData) {
        this.counter['maxTimestamp'] = (tickerType == 'increasing') ? new Date().getTime() : fieldData['maxTimestamp'];
        this.counter['minTimestamp'] = (tickerType != 'increasing') ? new Date().getTime() : fieldData['minTimestamp'];
        // this.counter['timeDiffrence'] = this.counter['maxTimestamp'] - this.counter['minTimestamp'];
        this.counter['status'] = 'paused';
        this.updateFieldData({
            intervalId: fieldData['intervalId'],
            tickerType: tickerType,
            maxTimestamp: fieldData['maxTimestamp'],
            minTimestamp: fieldData['minTimestamp'],
            timeDiffrence: fieldData['timeDiffrence'],
            year: fieldData['year'],
            month: fieldData['month'],
            day: fieldData['day'],
            hour: fieldData['hour'],
            minute: fieldData['minute'],
            second: fieldData['second'],
            text: fieldData['text'],
            status: 'paused'
        });
        clearInterval(fieldData['intervalId']);
        this.callOnTickerPause();
    }
    callOnTickerStop() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerStop');
        });
    }
    callPerticularEvent(data, eventName = 'OnTickerStop') {
        let eventList = data.event_list.filter(event => event.event_name === eventName);
        if (eventList.length > 0) {
            for (const event of JSON.parse(JSON.stringify(eventList))) {
                // console.log("event event: ",event)
                let tickerID = event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'TickerID'; }).length > 0 ? event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'TickerID'; })[0].value : '';
                if (event.isDefault === true && tickerID === this.fieldData.unique_id) {
                    // console.log("event event: ",event)
                    this.wfeEventListHandler.switchEventDisplayType(event, eventList, {}, true);
                }
            }
        }
    }
    callOnTickerStart() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerStart');
        });
    }
    callOnTickerPause() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerPause');
        });
    }
    ngOnChanges(changes) {
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        }
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                    }
                }
            }
            else {
                // setTimeout(() => { // OLD Implementation
                this.fieldLabels = [changes.rowData.currentValue.value];
                // }, 0); // OLD Implementation
            }
        }
    }
    static ɵfac = function CeeTickerComponent_Factory(t) { return new (t || CeeTickerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTickerComponent, selectors: [["app-cee-ticker"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-label"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["title", "label-component", "width", "100%", "height", "100%", "allow", "autoplay; encrypted-media", "allowfullscreen", "", 3, "src"], [3, "class", "click", 4, "ngIf"], [3, "innerHTML", "class", "click", 4, "ngIf"], ["class", "form-field", 4, "ngIf"], [3, "click"], [3, "click", "innerHTML"], [1, "form-field"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"]], template: function CeeTickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTickerComponent_div_0_Template, 5, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i13.NgForOf, i13.NgIf, TooltipModule, TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-ticker', standalone: true, imports: [MatTooltipModule, CustomTooltipDirective, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-label\">\r\n\t\t<ng-container *ngIf=\"iframeLabel && iframeLabel != ''\">\r\n\t\t\t<iframe title=\"label-component\" width=\"100%\" height=\"100%\" [src]=\"iframeLabel\" allow=\"autoplay; encrypted-media\"\r\n\t\t\t\tallowfullscreen></iframe>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngFor=\"let fieldLabel of fieldLabels\">\r\n\t\t\t<ng-container *ngIf=\"fieldLabel && fieldLabel !='' && fieldLabel !=' '\">\r\n\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"!isHTML(fieldLabel)\" (click)=\"onComponentEvent('OnClick')\" class=\"\r\n\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t{{fieldLabel}}\r\n\t\t\t\t</label>\r\n\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"isHTML(fieldLabel)\" [innerHTML]=\"checkIfIframe(fieldLabel)\"\r\n\t\t\t\t\t(click)=\"onComponentEvent('OnClick')\"\r\n\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t<div class=\"form-field\" *ngIf=\"counter && counter.text\">\r\n\t\t\t\t\t<span>{{counter.text}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n\t\t[tooltip]=\"fieldData.tooltip\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText \">i</button>\r\n\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n\t\t\tclass=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText\" [customTooltip]=\"tooltipTemplate\"\r\n\t\t\t[tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n\t\t\ti\r\n\t\t</button> -->\r\n\r\n\t\t<!-- Tooltip Template -->\r\n\t\t<!-- <ng-template #tooltipTemplate>\r\n\t\t\t<div class=\"tooltip_container\">\r\n\t\t\t\t<span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n\t\t\t</div>\r\n\t\t</ng-template> -->\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTickerComponent, { className: "CeeTickerComponent", filePath: "lib\\field-components\\cee-ticker\\cee-ticker.component.ts", lineNumber: 32 }); })();

export { CeeTickerComponent };
//# sourceMappingURL=ng-cee-core-cee-ticker.component-mdNev-Pb.mjs.map
