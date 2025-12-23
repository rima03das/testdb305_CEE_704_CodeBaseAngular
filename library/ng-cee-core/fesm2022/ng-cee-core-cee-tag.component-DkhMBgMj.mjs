import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import * as i14 from '@angular/forms';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, a as CommonUtil, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { startWith, map, take } from 'rxjs/operators';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import * as i13$1 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import * as i15$1 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i15 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i13 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import * as i16 from '@angular/material/core';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'rxjs';
import 'ngx-toastr';
import '@angular/material/tree';
import 'ngx-image-zoom';
import '@angular/platform-browser';
import 'moment-timezone';
import 'crypto-js';
import '@angular/material/tooltip';
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
import '@angular/material/datepicker';
import '@angular/material/menu';
import '@angular/material/slide-toggle';
import '@angular/material/checkbox';
import '@angular/material/paginator';
import '@angular/material/radio';
import '@angular/material/sort';
import '@angular/material/table';
import '@angular/material/tabs';
import '@angular/material/button';
import '@angular/material/select';
import '@ng-bootstrap/ng-bootstrap';
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

const _c0 = ["fieldName"];
const _c1 = ["tabInput"];
const _c2 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c3 = a0 => ({ "color": a0 });
function CeeTagComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip pull-right ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTagComponent_div_0_mat_label_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTagComponent_div_0_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_mat_label_3_span_2_Template, 2, 0, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData.field_label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTagComponent_div_0_mat_chip_row_6_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 23)(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd()();
} }
function CeeTagComponent_div_0_mat_chip_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 21);
    i0.ɵɵlistener("removed", function CeeTagComponent_div_0_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() { const fruit_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.remove(fruit_r4.value, ctx_r1.tabCtrl)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_mat_chip_row_6_button_2_Template, 3, 0, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fruit_r4.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.canDeleteTagsFlag);
} }
function CeeTagComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function CeeTagComponent_div_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.add(ctx_r1.tabCtrl.value, ctx_r1.tabCtrl)); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} }
function CeeTagComponent_div_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r6.name, " ");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r7.type == "Mandatory");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext && !ctx_r1.isEditable || !ctx_r1.isValid);
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext && !ctx_r1.isEditable || !ctx_r1.isValid && (ctx_r1.fieldName && (ctx_r1.fieldName.dirty || ctx_r1.fieldName.touched) || ctx_r1.showErrorOnNext));
} }
function CeeTagComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTagComponent_div_0_ng_template_15_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessageData.message_text, "");
} }
function CeeTagComponent_div_0_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_template_15_div_0_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTagComponent_div_0_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_template_15_div_0_div_1_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isValid);
} }
function CeeTagComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTagComponent_div_0_ng_template_15_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isValid && (ctx_r1.fieldName && (ctx_r1.fieldName.dirty || ctx_r1.fieldName.touched) || ctx_r1.showErrorOnNext));
} }
function CeeTagComponent_div_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "div")(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeeTagComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32);
    i0.ɵɵtext(2, "Please hit enter after inserting the value to the tag");
    i0.ɵɵelementEnd()();
} }
function CeeTagComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 33)(2, "strong");
    i0.ɵɵtext(3, "Warning:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.infoMsg, "");
} }
function CeeTagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "mat-form-field", 6);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_button_2_Template, 2, 5, "button", 7)(3, CeeTagComponent_div_0_mat_label_3_Template, 3, 2, "mat-label", 8);
    i0.ɵɵelementStart(4, "mat-chip-grid", 9, 0);
    i0.ɵɵtemplate(6, CeeTagComponent_div_0_mat_chip_row_6_Template, 3, 2, "mat-chip-row", 10);
    i0.ɵɵelementStart(7, "input", 11, 1);
    i0.ɵɵlistener("click", function CeeTagComponent_div_0_Template_input_click_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTagClick($event)); })("ngModelChange", function CeeTagComponent_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("matChipInputTokenEnd", function CeeTagComponent_div_0_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.add($event, ctx_r1.tabCtrl)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeTagComponent_div_0_button_9_Template, 2, 0, "button", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-autocomplete", 13, 2);
    i0.ɵɵlistener("optionSelected", function CeeTagComponent_div_0_Template_mat_autocomplete_optionSelected_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selected($event, ctx_r1.tabCtrl)); });
    i0.ɵɵtemplate(12, CeeTagComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 14);
    i0.ɵɵpipe(13, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, CeeTagComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 15)(15, CeeTagComponent_div_0_ng_template_15_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(17, CeeTagComponent_div_0_ng_container_17_Template, 5, 4, "ng-container", 16);
    i0.ɵɵpipe(18, "keyvalue");
    i0.ɵɵelementContainerStart(19);
    i0.ɵɵtemplate(20, CeeTagComponent_div_0_div_20_Template, 3, 0, "div", 17)(21, CeeTagComponent_div_0_div_21_Template, 5, 1, "div", 17);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chipList_r9 = i0.ɵɵreference(5);
    const auto_r10 = i0.ɵɵreference(11);
    const singleErrorMessage_r11 = i0.ɵɵreference(16);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.possibleOptions);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.isValid && (ctx_r1.tabCtrl.dirty || ctx_r1.tabCtrl.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("ngStyle", i0.ɵɵpureFunction8(32, _c2, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("formControl", ctx_r1.tabCtrl)("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes);
    i0.ɵɵattribute("disabled", !ctx_r1.isEditable)("aria-label", "Select a " + ctx_r1.fieldData.field_label)("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.tabCtrl && ctx_r1.tabCtrl.value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 28, ctx_r1.filteredOptions));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(18, 30, ctx_r1.showComparisonError));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.tabCtrl && ctx_r1.tabCtrl.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.infoMsg != "");
} }
class CeeTagComponent extends BaseView {
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
    fieldName;
    tabInput;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    variableObject = {}; // variable object
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = [];
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    // When "Data Format" available
    mask = false;
    maskDirty = false;
    // When "API Data Format" available
    apiDataFormat = '';
    apiDataFormatMask = false;
    // $emitKeyDown: Subscription;
    timer = null;
    timer1 = null;
    html_id = '';
    autocomplete = false;
    showCross = false;
    AdditionalParameter = {};
    hide = false;
    oldFieldData = {};
    isSet = false;
    inputType = 'text';
    oldInputValue = '';
    canDeleteTagsFlag = true;
    canAddDuplicateTagsFlag = true;
    infoMsg = "";
    storeInternalValue = false;
    separatorKeysCodes = [ENTER, COMMA];
    tabCtrl = new UntypedFormControl();
    filteredOptions;
    possibleOptions = [];
    allOptions = [];
    custom_class_name;
    maxValue;
    minValue;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.filteredOptions = this.tabCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allOptions.slice())));
        // console.log("allOptions: ",this.allOptions);
    }
    add(event, state) {
        let elementValue = typeof (event) == 'string' ? event : event.value;
        this.setMaxMin();
        const new_value = (elementValue || '').trim();
        let result = this.possibleOptions.map(a => a.value);
        if (result.indexOf(new_value) !== -1 && !this.canAddDuplicateTagsFlag) {
            this.infoMsg = "Duplicate tags are not allowed!";
            return;
        }
        else {
            this.infoMsg = "";
        }
        if (this.maxValue) {
            if (this.possibleOptions.length < Number(this.maxValue ? this.maxValue : 0)) {
                this.infoMsg = "";
                if (!this.AdditionalParameter["onlyFromDropdown"] || (this.AdditionalParameter["onlyFromDropdown"] && this.AdditionalParameter["onlyFromDropdown"].toLowerCase() != "true")) {
                    // Add our fruit
                    // console.log("this.possibleOptions: ",this.possibleOptions)
                    if (new_value) {
                        this.possibleOptions.push({ value: new_value, name: new_value });
                    }
                    let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
                    // console.log("Value: ",this.possibleOptions[this.possibleOptions.length - 1]['value'])
                    // console.log("oldArr: ",oldArr,this.possibleOptions[this.possibleOptions.length - 1]['value'])
                    let newArr = oldArr ? [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']] : [this.possibleOptions[this.possibleOptions.length - 1]['value']];
                    this.onSessionDataUpdated(newArr, state);
                    // Clear the input value
                    // event.chipInput!.clear();
                    this.tabInput.nativeElement.value = '';
                    this.tabCtrl.setValue('');
                }
                else {
                    this.infoMsg = "Tags can be added from dropdown only!";
                }
            }
            else {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
        }
        else {
            if (new_value) {
                this.possibleOptions.push({ value: new_value, name: new_value });
            }
            let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            let newArr = oldArr ? [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']] : [this.possibleOptions[this.possibleOptions.length - 1]['value']];
            this.onSessionDataUpdated(newArr, state);
            this.tabInput.nativeElement.value = '';
            this.tabCtrl.setValue('');
        }
    }
    remove(fruit, state) {
        this.setMaxMin();
        if (this.canDeleteTagsFlag) {
            const index = this.possibleOptions.findIndex(p => p.value == fruit);
            if (index >= 0) {
                this.possibleOptions.splice(index, 1);
            }
            // Remove from App Data
            var oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            var newArr = oldArr.filter(function (item) {
                return item !== fruit;
            });
            this.onSessionDataUpdated(newArr, state);
            this.infoMsg = "";
        }
        if (this.minValue) {
            if (this.possibleOptions.length <= Number(this.minValue ? this.minValue : 1)) {
                this.infoMsg = "Minimum " + this.minValue + " tags needed!";
                // return;
            }
            else {
                this.infoMsg = "";
            }
        }
    }
    selected(event, state) {
        if (event && event.option && event.option.value && this.possibleOptions.indexOf(event.option.value) !== -1 && !this.canAddDuplicateTagsFlag) {
            this.infoMsg = "Duplicate tags are not allowed!";
            return;
        }
        else {
            this.infoMsg = "";
        }
        if (this.maxValue) {
            if (this.possibleOptions.length < Number(this.maxValue ? this.maxValue : 0) && event && event.option && event.option.value) {
                this.infoMsg = "";
                this.possibleOptions.push(event.option.value);
            }
            else {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
        }
        else {
            this.possibleOptions.push(event.option.value);
        }
        this.tabInput.nativeElement.value = '';
        this.tabCtrl.setValue('');
        let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        let newArr = [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']];
        this.onSessionDataUpdated(newArr, state);
        // console.log("multipleErrorMessage: ", this.tabCtrl)
    }
    updateWarning() {
        if (this.maxValue) {
            if (this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 0)) {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
            else {
                this.infoMsg = "";
            }
        }
        if (this.minValue) {
            if (this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) {
                this.infoMsg = "Minimum " + this.minValue + " tags needed!";
            }
            else if (!this.maxValue || (this.maxValue && this.possibleOptions.length <= Number(this.maxValue ? this.maxValue : 0))) {
                this.infoMsg = "";
            }
        }
        // console.log("html_id: ",this.fieldData.html_id)
        let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldArr = oldArr ? oldArr : [];
        // console.log("oldArr: ",oldArr)
        this.isValid = (this.isMandatory && this.possibleOptions.length == 0) || (this.minValue && this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) || (this.maxValue && this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 1)) ? false : true;
        // console.log("isValid: ",this.isValid)
        this.updateTagFieldData([...oldArr], this.isValid);
    }
    updateTagFieldData(data, isValid = true) {
        // check if the validation is custom validation page
        if (this.customCheck && data != '') {
            isValid = this.customErrorsValidation.getMessages(this.appData.id, data).length ? false : isValid;
        }
        this.valid = isValid; // assign passed or failed
        this.fieldValue = data;
        this.appData = Object.assign({}, this.appData, { isValid });
        if (this.manageState) {
            this.appDataService.updateAppData(Object.assign({}, this.appData, {
                visible: this.isVisible,
                editable: this.isEditable, mandatory: this.isMandatory, isValid, value: this.fieldValue
            }));
        }
    }
    _filter(value) {
        if (!value) {
            return this.allOptions;
        }
        const filterValue = value && typeof value == "string" ? value.toLowerCase() : (value['name'] && typeof value['name'] == "string" ? value['name'].toLowerCase() : '');
        return this.allOptions.filter(fruit => fruit['name'].toLowerCase().includes(filterValue));
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        if (this.AdditionalParameter["canDeleteTags"]) {
            this.canDeleteTagsFlag = this.AdditionalParameter["canDeleteTags"].toLowerCase() == "true" ? true : false;
        }
        if (!this.isEditable) {
            this.canDeleteTagsFlag = false;
        }
        if (this.AdditionalParameter["canAddDuplicateTags"]) {
            this.canAddDuplicateTagsFlag = this.AdditionalParameter["canAddDuplicateTags"].toLowerCase() == "true" ? true : false;
        }
        if (this.AdditionalParameter["StoreInternalValue"]) {
            this.storeInternalValue = this.AdditionalParameter["StoreInternalValue"].toLowerCase() == "true" ? true : false;
        }
        this.setMaxMin();
        this.variableObject['emitOnButtonValidation_' + this.fieldData.html_id] = this.sharedEventsService.validateButtonForTagEmitter.subscribe(() => {
            this.setMaxMin();
            this.updateWarning();
        });
    }
    setMaxMin() {
        if (this.AdditionalParameter["MaxValue"] && this.AdditionalParameter["MaxValue"] != '') {
            if (this.AdditionalParameter["MaxValue"] && !isNaN(this.AdditionalParameter["MaxValue"])) {
                this.maxValue = Number(this.AdditionalParameter["MaxValue"]);
            }
            else if (this.AdditionalParameter["MaxValue"].includes('##')) {
                const values = this.AdditionalParameter["MaxValue"].match(new RegExp(/[^{}]+/g));
                const key = values ? values[0] : this.AdditionalParameter["MaxValue"];
                const handlerData = this.apiDataService.getApiDataByHandler(this.AdditionalParameter["MaxValue"].split('##')[0]);
                this.maxValue = handlerData ? handlerData.value[key] : '';
            }
            else {
                this.maxValue = this.appDataService.getFieldDataByFieldId(this.AdditionalParameter["MaxValue"]);
            }
            // console.log("maxValue: ", this.maxValue);
        }
        if (this.AdditionalParameter["MinValue"] && this.AdditionalParameter["MinValue"] != '') {
            if (this.AdditionalParameter["MinValue"] && !isNaN(this.AdditionalParameter["MinValue"])) {
                this.minValue = Number(this.AdditionalParameter["MinValue"]);
            }
            else if (this.AdditionalParameter["MinValue"].includes('##')) {
                const values = this.AdditionalParameter["MinValue"].match(new RegExp(/[^{}]+/g));
                const key = values ? values[0] : this.AdditionalParameter["MinValue"];
                const handlerData = this.apiDataService.getApiDataByHandler(this.AdditionalParameter["MinValue"].split('##')[0]);
                this.minValue = handlerData ? handlerData.value[key] : '';
            }
            else {
                this.minValue = this.appDataService.getFieldDataByFieldId(this.AdditionalParameter["MinValue"]);
            }
            // console.log("maxValue: ", this.maxValue);
        }
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        this.onViewUnload();
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        this.onViewUnload();
    }
    // ngAfterViewInit() {
    //   console.log(this.txtVal.nativeElement);
    // }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
        if (this.AdditionalParameter["Override"]) {
            let returnValue = true;
            this.AdditionalParameter["Override"].split('||').map((value, i) => {
                if (value.toLowerCase() == event.type) {
                    returnValue = false;
                }
            });
            return returnValue;
        }
        else {
            return true;
        }
    }
    onViewDataInit() {
        this.oldFieldData = this.fieldData;
        let oldData = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldData = oldData ? oldData : [];
        oldData.forEach((value) => {
            this.possibleOptions.push(value);
        });
        this.isValid = this.isMandatory && this.possibleOptions.length == 0 ? false : true;
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // from possible values with type Options
        if (this.fieldData.possible_value_type == "Options" && Array.isArray(this.fieldData.possible_values)) {
            this.fieldData.possible_values.forEach((val) => {
                // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
            });
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.possibleOptions && Array.isArray(this.possibleOptions) ? this.possibleOptions : [];
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        if (this.AdditionalParameter["AutoCompleteText"] && this.AdditionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    onValueChange(event) {
        // console.log("onValueChange: ",event)
    }
    onTagClick(event) {
        this.filteredOptions = this.tabCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allOptions.slice())));
        // console.log("On Click: ",this.filteredOptions)
    }
    onChange(event) {
        // this.setSessionData(newValue);
        // console.log("onChange",event);
    }
    onSessionDataUpdated(value, state) {
        // this.isValid = state.valid;
        this.isValid = (this.isMandatory && this.possibleOptions.length == 0) || (this.minValue && this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) || (this.maxValue && this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 1)) ? false : true;
        // if (this.$emitKeyDown) {
        //     this.$emitKeyDown.unsubscribe();
        // }
        this.updateFieldData(value, this.isValid);
        // Hide _ in input box
        /* if (this.AdditionalParameter["Data Format"]) {
            if (this.AdditionalParameter["Data Format"].length != value.length) {
                this.clearValue(state);
            }
        } */
        // trigger event list of focus out
        if (this.AdditionalParameter['ValidationCheck'] && this.AdditionalParameter['ValidationCheck'].toLowerCase() === 'true') {
            if (this.isValid) {
                if (this.oldInputValue !== value) {
                    this.onComponentEvent('OnChangeValue');
                }
                this.onComponentEvent('OnFocusOut');
            }
            else {
                return;
            }
        }
        else {
            if (this.oldInputValue !== value) {
                this.onComponentEvent('OnChangeValue');
            }
            this.onComponentEvent('OnFocusOut');
        }
    }
    concatData = (res) => {
        if (res.fid === this.fieldData.unique_id) {
            let success = false;
            let data;
            this.appDataService.getIndividualAppData(res['fid']).pipe(take(1)).subscribe(r => {
                if (r.length > 0) {
                    if (res['fid'] == r[0].id) {
                        success = true;
                        data = r[0];
                    }
                }
            });
            if (success) {
                let concatArrays = [];
                for (let i = 0; i < res.concatValues.length; i++) {
                    if (localStorage.getItem('singleApiKey') === 'true') {
                        concatArrays.push(this.appDataService.getFieldDataByFieldId(res.concatValues[i]));
                    }
                    else {
                        concatArrays.push(this.appDataService.getFieldDataByApiKey(res.concatValues[i], 'request'));
                    }
                }
                this.appDataService.updateAppData(Object.assign({}, data, { visible: data.visible, editable: data.editable, mandatory: data.mandatory, value: concatArrays }));
                this.inputValue = concatArrays;
            }
        }
    };
    clearValue(event) {
        this.showCross = false;
        this.inputValue = [];
        this.updateFieldData('');
    }
    onAPICallback(data) {
        // console.log("onAPICallback",data);
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (resData !== null) {
            if (Array.isArray(resData) && this.isSingleApiKey) {
                this.fieldData.possible_values = resData;
                this.fieldData.possible_values.forEach((val) => {
                    // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                    this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
                });
                // this.allOptions = resData;
            }
            else {
                this.fieldValue = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.fieldData.possible_values.forEach((val) => {
                                if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                                    this.allOptions.push({ value: val['value'], name: val['name'] });
                                }
                                else {
                                    // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                                    this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
                                }
                            });
                            // this.allOptions = resData;
                            // this.fieldData.possible_values = externalApiOptionValue;
                            // this.allOptions = externalApiOptionValue;
                        }
                        else {
                            console.error('Something Went Wrong in Picker !!!');
                        }
                    }
                }
            }
        }
        let oldData = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldData = oldData ? oldData : [];
        this.possibleOptions = [];
        oldData.forEach((value) => {
            let selectedObj = this.allOptions.filter(val => { if (val.value == value)
                return val; });
            if (selectedObj.length > 0) {
                this.possibleOptions.push(selectedObj[0]);
            }
        });
        // console.log("possibleOptions: ",this.possibleOptions)
    }
    onSetSessionData(apiKey, value) {
        // console.log("onSetSessionData",value);
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(apiKey, value);
    }
    onEmptySession(get_data) {
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
                // TODO Update
                let value = [];
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.AdditionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                this.updateFieldData(value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.tagField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.fieldName) {
                    this.fieldName.reset(value);
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
                }
                return;
            }
        });
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
            this.inputValue = get_data[unique_id_value];
            this.updateFieldData(this.inputValue);
        }
    }
    triggerEvent() {
        if (this.searchButtonEditable) {
            this.onComponentEvent('OnClick');
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        // console.log("setFieldValueOnSetValuesEvent",data);
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // console.log('Data', data);
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                if (this.inputValue && Array.isArray(this.inputValue)) {
                    this.inputValue.forEach(element => {
                        if (element) {
                            this.possibleOptions.push({ value: element, name: element });
                        }
                    });
                }
            }
        }
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
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // console.log(changes, changes.editableCondition)
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (!this.isEditable) {
            this.canDeleteTagsFlag = false;
        }
        else {
            if (this.AdditionalParameter["canDeleteTags"]) {
                this.canDeleteTagsFlag = this.AdditionalParameter["canDeleteTags"].toLowerCase() == "true" ? true : false;
            }
        }
        if (changes.rowData && changes.rowData.currentValue && this.inputValue !== changes.rowData.currentValue.value) {
            this.inputValue = changes.rowData.currentValue.value;
        }
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
    static ɵfac = function CeeTagComponent_Factory(t) { return new (t || CeeTagComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTagComponent, selectors: [["app-cee-tag"]], viewQuery: function CeeTagComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabInput = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["chipList", ""], ["tabInput", ""], ["auto", "matAutocomplete"], ["singleErrorMessage", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], ["appearance", "fill", 1, "example-chip-list"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Fruit selection"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "click", "ngModelChange", "matChipInputTokenEnd", "placeholder", "required", "ngStyle", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Add", 3, "click", 4, "ngIf"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "info-message-wrapper", 4, "ngIf"], ["type", "button", 3, "tooltip"], ["class", "mandetory-mark", 4, "ngIf"], [1, "mandetory-mark"], [3, "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Add", 3, "click"], ["fontIcon", "add"], [3, "value"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "info-message-wrapper"], [1, "alert", "alert-dark"], [1, "alert", "alert-warning"]], template: function CeeTagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTagComponent_div_0_Template, 22, 41, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatSuffix, MatInputModule, MatChipsModule, i13.MatChipGrid, i13.MatChipInput, i13.MatChipRemove, i13.MatChipRow, MatIconModule, i15.MatIcon, MatAutocompleteModule, i15$1.MatAutocomplete, i16.MatOption, i15$1.MatAutocompleteTrigger, NgStyle, ReactiveFormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.FormControlDirective, CommonModule, i13$1.NgForOf, i13$1.NgIf, i13$1.AsyncPipe, i13$1.KeyValuePipe, TooltipModule, TooltipDirective], styles: [".mat-full-width[_ngcontent-%COMP%], .example-chip-list[_ngcontent-%COMP%]{width:100%}  .example-chip-list .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:.5em 0 0!important}  .example-chip-list .mat-form-field-infix{border-top:.84375em solid #fff}  .example-chip-list .mat-chip.mat-standard-chip .mat-chip-remove{color:#dc3545!important;opacity:1!important}  .example-chip-list .mat-standard-chip .mat-chip-remove, .mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon[_ngcontent-%COMP%]{margin:-10px 10px 0 0!important;border:none;background:transparent}  .example-chip-list .custom-select, .form-control[_ngcontent-%COMP%]{box-shadow:0 3px 3px #00000029!important;border-radius:4px!important}  .example-chip-list .mat-form-field-underline{display:none!important}  .example-chip-list .mat-form-field-appearance-fill .mat-form-field-label{transform:translateY(14px);padding-left:3px}  .example-chip-list input.form-control.invalid{border:1px solid #eb1122!important}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTagComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-tag', standalone: true, imports: [MatFormFieldModule, MatInputModule, CustomTooltipDirective, MatChipsModule, MatIconModule, MatAutocompleteModule, NgStyle, ReactiveFormsModule, MatChipsModule, CommonModule, TooltipModule], template: "<div class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\" id=\"{{html_id }}\" *ngIf=\"isVisible\">\r\n    <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\"\r\n\t\tclass=\"btn-tooltip pull-right ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n\t\ti\r\n\t\t</button>\r\n        <mat-label *ngIf=\"fieldData.field_label!=''\">\r\n            {{fieldData.field_label}}\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n        </mat-label>\r\n        <mat-chip-grid #chipList aria-label=\"Fruit selection\">\r\n          <mat-chip-row\r\n            *ngFor=\"let fruit of possibleOptions\"\r\n            (removed)=\"remove(fruit.value, tabCtrl)\">\r\n            {{fruit.name}}\r\n            <button matChipRemove *ngIf=\"canDeleteTagsFlag\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </mat-chip-row>\r\n          <input\r\n            placeholder=\"{{fieldData.placeholder_text}}\" #tabInput\r\n            class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ ( !isValid && (tabCtrl.dirty || tabCtrl.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n            [attr.disabled]=\"!isEditable\"\r\n            [attr.aria-label]=\"'Select a ' + fieldData.field_label \" [attr.tabindex]=\"tabIndexValue\"\r\n            [required]=\"isMandatory\"\r\n            [ngStyle]=\"{\r\n\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t}\"\r\n\t\t\t(click)=\"onTagClick($event)\"\r\n            (ngModelChange)=\"onChange($event)\"\r\n            [formControl]=\"tabCtrl\"\r\n            [matAutocomplete]=\"auto\"\r\n            [matChipInputFor]=\"chipList\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            (matChipInputTokenEnd)=\"add($event,tabCtrl)\">\r\n\t\t\t<button *ngIf=\"tabCtrl && tabCtrl.value\" matSuffix mat-icon-button aria-label=\"Add\" (click)=\"add(tabCtrl.value,tabCtrl)\">\r\n\t\t\t\t<mat-icon fontIcon=\"add\"></mat-icon>\r\n\t\t\t</button>\r\n        </mat-chip-grid>\r\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event,tabCtrl)\">\r\n          <mat-option *ngFor=\"let opt of filteredOptions | async\" [value]=\"opt\">\r\n            {{opt.name}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n\t\t\r\n\t\t<!-- Tooltip Template -->\r\n        <!-- <ng-template #tooltipTemplate>\r\n            <div class=\"tooltip_container\">\r\n                <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n            </div>\r\n        </ng-template> -->\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (!isValid && ((fieldName && (fieldName.dirty || fieldName.touched)) || showErrorOnNext ))\">\r\n\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable) || (!isValid)\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<ng-template #singleErrorMessage>\r\n\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t*ngIf=\"!isValid && ((fieldName && (fieldName.dirty || fieldName.touched)) || showErrorOnNext)\">\r\n\t\t\t<div *ngIf=\"!isValid\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t<div>\r\n\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\r\n\t<ng-container>\r\n\t\t<div class=\"info-message-wrapper\" *ngIf=\"tabCtrl && tabCtrl.value\">\r\n\t\t\t<div class=\"alert alert-dark\">Please hit enter after inserting the value to the tag</div>\r\n\t\t</div>\r\n\t\t<div class=\"info-message-wrapper\" *ngIf=\"infoMsg != ''\">\r\n\t\t\t<div class=\"alert alert-warning\"><strong>Warning:</strong> {{infoMsg}}</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>", styles: [".mat-full-width,.example-chip-list{width:100%}::ng-deep .example-chip-list .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:.5em 0 0!important}::ng-deep .example-chip-list .mat-form-field-infix{border-top:.84375em solid #fff}::ng-deep .example-chip-list .mat-chip.mat-standard-chip .mat-chip-remove{color:#dc3545!important;opacity:1!important}::ng-deep .example-chip-list .mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin:-10px 10px 0 0!important;border:none;background:transparent}::ng-deep .example-chip-list .custom-select,.form-control{box-shadow:0 3px 3px #00000029!important;border-radius:4px!important}::ng-deep .example-chip-list .mat-form-field-underline{display:none!important}::ng-deep .example-chip-list .mat-form-field-appearance-fill .mat-form-field-label{transform:translateY(14px);padding-left:3px}::ng-deep .example-chip-list input.form-control.invalid{border:1px solid #eb1122!important}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
        }], tabInput: [{
            type: ViewChild,
            args: ['tabInput', { static: false }]
        }], stepId: [{
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
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTagComponent, { className: "CeeTagComponent", filePath: "lib\\field-components\\cee-tag\\cee-tag.component.ts", lineNumber: 41 }); })();

export { CeeTagComponent };
//# sourceMappingURL=ng-cee-core-cee-tag.component-DkhMBgMj.mjs.map
