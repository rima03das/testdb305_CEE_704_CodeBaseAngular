import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, o as UndoRedo, S as SetAPICallbackData, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { formatDate, NgStyle, CommonModule } from '@angular/common';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i11 from '@angular/router';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'rxjs';
import 'ngx-toastr';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import 'ngx-image-zoom';
import '@angular/platform-browser';
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

const _c0 = a0 => ({ "color": a0 });
function CeeTimeSlotsComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeTimeSlotsComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 16);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTimeSlotsComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 13)(2, CeeTimeSlotsComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeTimeSlotsComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTimeSlotsComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeTimeSlotsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.noDataFoundLabel);
} }
function CeeTimeSlotsComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 20, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_focus_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); })("blur", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); })("change", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.changedVal(); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("time-slot-container ", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.fieldData.unique_id, "", i_r5, "");
    i0.ɵɵpropertyInterpolate("name", ctx_r0.fieldData.unique_id);
    i0.ɵɵproperty("value", slot_r4["value"])("disabled", !slot_r4["available"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.fieldData.unique_id, "", i_r5, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(slot_r4["label"]);
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r0.returnMessageData(message_r6.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r6.code).message_text, " ");
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_Template, 2, 1, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) && message_r6.type == "Mandatory");
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_template_10_div_0_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimeSlotsComponent_div_0_ng_template_10_div_0_Template, 2, 1, "div", 22);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimeSlotsComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 23)(2, "div")(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeTimeSlotsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, CeeTimeSlotsComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 6)(4, CeeTimeSlotsComponent_div_0_span_4_Template, 2, 0, "span", 7)(5, CeeTimeSlotsComponent_div_0_button_5_Template, 2, 2, "button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵtemplate(7, CeeTimeSlotsComponent_div_0_div_7_Template, 2, 1, "div", 10)(8, CeeTimeSlotsComponent_div_0_ng_container_8_Template, 6, 15, "ng-container", 11)(9, CeeTimeSlotsComponent_div_0_ng_container_9_Template, 2, 1, "ng-container", 12)(10, CeeTimeSlotsComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(12, CeeTimeSlotsComponent_div_0_ng_container_12_Template, 5, 4, "ng-container", 11);
    i0.ɵɵpipe(13, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.slots.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.slots);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 11, ctx_r0.showComparisonError));
} }
class CeeTimeSlotsComponent extends BaseView {
    router;
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
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    now = new Date();
    nowDate = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
    selectedDateAPI = '';
    selectedDate = this.nowDate;
    slots = [];
    radioState = {
        touched: false,
        dirty: false
    };
    inputValue = '';
    undoRedoUtil;
    colorAvailable;
    colorNotAvailable;
    colorSelected;
    setAPIKeyUtil;
    noDataFoundLabel = 'no record found.';
    constructor(router, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.router = router;
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
        this.undoRedoUtil = new UndoRedo();
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
    }
    createDate(dateStr) {
        const dateArr = dateStr.split('/').map(str => +str);
        if (dateArr.length === 3) {
            return new Date(dateArr[2], (dateArr[1] - 1), dateArr[0]);
        }
        else {
            return this.nowDate;
        }
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    createTimeSlots() {
        this.slots = [];
        if (Array.isArray(this.fieldData.possible_values)) {
            for (const val of this.fieldData.possible_values) {
                const slot = {};
                const vData = val.split('|').map(str => str.trim());
                // slot['label'] = formatDate(new Date(formatDate(this.selectedDate, 'yyyy-MM-dd ', 'en-US', 'UTC') + vData[0] + ' UTC'), this.additionalParameter['time_format'] || 'HH:mm', 'en-US', this.additionalParameter['timezone'] || 'UTC')
                try {
                    slot['label'] = formatDate(new Date(formatDate(this.selectedDate, 'yyyy-MM-dd ', 'en-US', 'UTC') + vData[0] + ' UTC'), this.additionalParameter['time_format'] || 'HH:mm', 'en-US', this.additionalParameter['timezone'] || 'UTC');
                }
                catch (err) {
                    // console.log(moment("2000-03-24 11:15:34 UTC").format("HH:mm A"))
                    // slot['label'] = moment(moment(new Date(this.selectedDate)).format('yyyy-MM-dd') + ' ' + vData[0] + this.additionalParameter['timezone'] || 'UTC').format(this.additionalParameter['time_format'] || 'HH:mm');
                    let timeArr = vData[0].split(':');
                    slot['label'] = this.tConvert(timeArr[0] + ':' + timeArr[1]);
                }
                slot['value'] = vData[0];
                slot['available'] = (vData[1] && vData[1] === 'Y') ? true : false;
                this.slots.push(slot);
            }
        }
    }
    tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    setState(value) {
        this.radioState.touched !== value.touched && (this.radioState.touched = value.touched);
        this.radioState.dirty !== value.dirty && (this.radioState.dirty = value.dirty);
    }
    changedVal() {
        let value = this.inputValue;
        this.updateFieldData(value); // set the session value on checked
        // on click event on radio
        this.onComponentEvent('OnClick');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.fieldValue !== undefined && !Array.isArray(this.fieldValue)) {
            this.inputValue = this.fieldValue;
        }
        if (this.additionalParameter['default_date']) {
            const default_date = this.additionalParameter['default_date'].split('||').map(str => str.trim());
            this.selectedDateAPI = default_date[0];
            this.selectedDate = (default_date[1]) ? (default_date[1] === 'CURR_DATE') ? this.nowDate : this.createDate(default_date[1])
                : this.nowDate;
        }
        this.createTimeSlots();
        if (this.additionalParameter['default_color']) {
            this.additionalParameter['default_color'].split('||').map(str => str.trim()).forEach(colorCode => {
                if (!colorCode.includes('|')) {
                    this.colorSelected = colorCode;
                }
                else {
                    const colorCodeArr = colorCode.split('|').map(str => str.trim());
                    if (colorCodeArr[0] === 'Y') {
                        this.colorAvailable = colorCodeArr[1];
                    }
                    else {
                        this.colorNotAvailable = colorCodeArr[1];
                    }
                }
            });
        }
        if (this.additionalParameter['No Data Found Label']) {
            this.noDataFoundLabel = this.additionalParameter['No Data Found Label'];
        }
        /*----------  Dynamic style  ----------*/
        const style = document.createElement('style');
        style.innerHTML = `.radio {
            background: ${this.colorAvailable} !important;
        }
        input[type="radio"]:checked + .radio {
            background: ${this.colorSelected} !important;
          }
          input[type="radio"]:disabled + .radio {
            background: ${this.colorNotAvailable} !important;
          }
     `;
        document.body.appendChild(style);
        /*----------  Dynamic style END ----------*/
        this.processApiRes(this.apiValue);
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        this.processApiRes(apiValue);
    }
    processApiRes(apiValue) {
        if (apiValue && Array.isArray(apiValue)) {
            this.fieldData.possible_values = [];
            for (const apiDate of apiValue) {
                if (apiDate[this.additionalParameter['timeslot_slot']] && apiDate[this.additionalParameter['timeslot_status']]) {
                    this.fieldData.possible_values.push(apiDate[this.additionalParameter['timeslot_slot']] + '|' + apiDate[this.additionalParameter['timeslot_status']]);
                }
            }
            this.createTimeSlots();
        }
    }
    onEmptySession(get_data) {
        //throw new Error('Method not implemented.');
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.appData.id];
        }
        else {
            data = get_data.apiKeys;
            if (this.isSingleApiKey) {
                unique_id_value = [this.fieldData.api_key];
            }
            else {
                unique_id_value = [...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key))];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.inputValue = '';
                this.updateFieldData(this.inputValue);
            }
        });
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[*]': 'fieldData.possible_values'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        }
    }
    static ɵfac = function CeeTimeSlotsComponent_Factory(t) { return new (t || CeeTimeSlotsComponent)(i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTimeSlotsComponent, selectors: [["app-cee-time-slots"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["singleErrorMessage", ""], ["radioControl", "ngModel"], ["class", "field-wrapper", 3, "class", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], ["class", "no-data-info", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "no-data-info"], ["type", "radio", 3, "ngModelChange", "focus", "blur", "change", "id", "name", "value", "disabled", "ngModel"], [1, "radio", 3, "for"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeTimeSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTimeSlotsComponent_div_0_Template, 14, 13, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: [".radio[_ngcontent-%COMP%]{display:inline-block;position:relative;margin-bottom:12px;cursor:pointer;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #C0C4CA;text-align:center;width:100px;padding-top:5px;padding-bottom:5px}input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}input[type=radio][_ngcontent-%COMP%]:checked + .radio[_ngcontent-%COMP%]{background:#3974af;border-color:#d2e2ef;color:#fff}input[type=radio][_ngcontent-%COMP%]:disabled + .radio[_ngcontent-%COMP%]{background:#ddd;color:#737373;border-color:#f4f4f4}input[type=radio][_ngcontent-%COMP%]:focus-visible + .radio[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}.time-slot-container[_ngcontent-%COMP%]{display:inline;margin-right:10px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTimeSlotsComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-time-slots', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <div class=\"no-data-info\" *ngIf=\"slots.length === 0\">{{noDataFoundLabel}}</div>\r\n            <ng-container *ngFor=\"let slot of slots; index as i\">\r\n                <div\r\n                    class=\"time-slot-container {{ !inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                    <input id=\"{{fieldData.unique_id}}{{i}}\" type=\"radio\" name=\"{{fieldData.unique_id}}\"\r\n                        [value]=\"slot['value']\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                        [disabled]=\"!slot['available']\" [(ngModel)]=\"inputValue\" #radioControl=\"ngModel\"\r\n                        (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\"\r\n                        (change)=\"changedVal(); setState(radioControl)\">\r\n                    <label for=\"{{fieldData.unique_id}}{{i}}\" class=\"radio\">{{slot['label']}}</label>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                <ng-container *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                        <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                            {{returnMessageData(message.code).message_text}}\r\n                        </p>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #singleErrorMessage>\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                        {{errorMessageData.message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n", styles: [".radio{display:inline-block;position:relative;margin-bottom:12px;cursor:pointer;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #C0C4CA;text-align:center;width:100px;padding-top:5px;padding-bottom:5px}input{position:absolute;opacity:0;cursor:pointer}input[type=radio]:checked+.radio{background:#3974af;border-color:#d2e2ef;color:#fff}input[type=radio]:disabled+.radio{background:#ddd;color:#737373;border-color:#f4f4f4}input[type=radio]:focus-visible+.radio{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}.time-slot-container{display:inline;margin-right:10px}\n"] }]
    }], () => [{ type: i11.Router }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTimeSlotsComponent, { className: "CeeTimeSlotsComponent", filePath: "lib\\field-components\\cee-time-slots\\cee-time-slots.component.ts", lineNumber: 30 }); })();

export { CeeTimeSlotsComponent };
//# sourceMappingURL=ng-cee-core-cee-time-slots.component-katvb2F1.mjs.map
