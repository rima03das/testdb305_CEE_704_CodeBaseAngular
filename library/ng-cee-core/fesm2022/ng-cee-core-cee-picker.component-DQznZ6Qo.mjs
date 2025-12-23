import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, h as CeeApiService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { Subject, debounceTime, filter, takeUntil } from 'rxjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i14$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import * as i18 from 'angular2-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import * as i11 from '@angular/router';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i16 from '@angular/material/core';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
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

const _c0 = ["fieldName"];
const _c1 = ["selectField"];
const _c2 = ["ang2SelectField"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c4 = a0 => ({ fieldName: a0 });
const _c5 = a0 => ({ "color": a0 });
function CeePickerComponent_div_0_ng_container_1_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeePickerComponent_div_0_ng_container_1_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeePickerComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeePickerComponent_div_0_ng_container_1_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.commonUtil.getValue(opt_r3), "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_ng_template_0_Template(rf, ctx) { }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21)(2, "select", 22, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template_select_change_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.getUpdatedValue()); });
    i0.ɵɵelementStart(5, "option", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_option_7_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_Template, 1, 0, null, 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r4 = i0.ɵɵreference(4);
    i0.ɵɵnextContext(2);
    const errorContainer_r5 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("custom-select ", ctx_r0.isCustomClass && ctx_r0.custom_class_name ? ctx_r0.custom_class_name[0] : "", " ", !ctx_r0.valid || fieldName_r4.invalid && ctx_r0.isMandatory && (fieldName_r4.dirty || fieldName_r4.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(14, _c3, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color))("disabled", !ctx_r0.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.placeholder_text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", errorContainer_r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c4, fieldName_r4));
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template, 9, 25, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const angularMultiselect_r6 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] || ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] && ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] == "false")("ngIfElse", angularMultiselect_r6);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r8.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r8.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div");
    i0.ɵɵtemplate(2, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_p_2_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r8.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_Template, 3, 1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r9 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.valid && fieldName_r9.dirty);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "angular2-multiselect", 27, 5);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedItems, $event) || (ctx_r0.selectedItems = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onItemSelect($event)); })("onDeSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onDeSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.OnItemDeSelect($event)); })("onSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onSelectAll_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onSelectAll($event)); })("onDeSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onDeSelectAll_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDeSelectAll($event)); })("onClose", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onClose_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onMultiselectClicked($event)); })("click", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDropdownClick($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.dropdownList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedItems);
    i0.ɵɵproperty("settings", ctx_r0.dropdownSettings)("title", ctx_r0.multiselectTooltip);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r11 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r11.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r11.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div");
    i0.ɵɵtemplate(2, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_p_2_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r11.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_Template, 3, 1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r12 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.valid && fieldName_r12.dirty);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "angular2-multiselect", 27, 5);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedItems, $event) || (ctx_r0.selectedItems = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onItemSelect($event)); })("onDeSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onDeSelect_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.OnItemDeSelect($event)); })("onSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onSelectAll_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onSelectAll($event)); })("onDeSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onDeSelectAll_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDeSelectAll($event)); })("onClose", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onClose_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onMultiselectClicked($event)); })("click", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDropdownClick($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_Template, 2, 1, "div", 28);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("data", ctx_r0.dropdownList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedItems);
    i0.ɵɵproperty("settings", ctx_r0.dropdownSettings)("title", ctx_r0.multiselectTooltip);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r13.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r13.type == "minlength");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r13.type == "Regex");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(3).fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable && !ctx_r0.fieldValue || fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.required));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.minlength));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.pattern));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(2).fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r14.invalid && (fieldName_r14.dirty || fieldName_r14.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(2).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r14 == null ? null : fieldName_r14.errors.required) || (fieldName_r14 == null ? null : fieldName_r14.errors.minlength) || (fieldName_r14 == null ? null : fieldName_r14.errors.pattern));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext().fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", fieldName_r14.invalid && (fieldName_r14.dirty || fieldName_r14.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30)(2, "div")(3, "p", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, item_r15.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r15.value.message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 9)(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(3, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_3_Template, 5, 4, "ng-container", 28);
    i0.ɵɵpipe(4, "keyvalue");
} if (rf & 2) {
    const singleErrorMessage_r16 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r16);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, ctx_r0.showComparisonError));
} }
function CeePickerComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, CeePickerComponent_div_0_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 12)(4, CeePickerComponent_div_0_ng_container_1_span_4_Template, 2, 0, "span", 13)(5, CeePickerComponent_div_0_ng_container_1_button_5_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeePickerComponent_div_0_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 9)(7, CeePickerComponent_div_0_ng_container_1_ng_template_7_Template, 5, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, CeePickerComponent_div_0_ng_container_1_ng_template_9_Template, 4, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, CeePickerComponent_div_0_ng_container_1_ng_template_11_Template, 5, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const IsMultipleSelect_r17 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.additionalParameter["MultipleSelect"] || ctx_r0.additionalParameter["MultipleSelect"] != "true")("ngIfElse", IsMultipleSelect_r17);
} }
function CeePickerComponent_div_0_ng_template_2_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeePickerComponent_div_0_ng_template_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r19));
    i0.ɵɵattribute("aria-label", ctx_r0.optionsAriaLabel ? ctx_r0.optionsAriaLabel[i_r20] : "Select " + opt_r19);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.commonUtil.getValue(opt_r19), "");
} }
function CeePickerComponent_div_0_ng_template_2_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r21.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r21.type == "minlength");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r21.type == "Regex");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.required));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.minlength));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.pattern));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_Template, 4, 3, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r22.invalid && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const fieldName_r22 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r22 == null ? null : fieldName_r22.errors.required) || (fieldName_r22 == null ? null : fieldName_r22.errors.minlength) || (fieldName_r22 == null ? null : fieldName_r22.errors.pattern));
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", fieldName_r22.invalid && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30)(2, "div")(3, "p", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, item_r23.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r23.value.message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_mat_label_1_Template, 2, 1, "mat-label", 12);
    i0.ɵɵelementStart(2, "mat-select", 33, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("selectionChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_selectionChange_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getUpdatedValue()); })("openedChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_openedChange_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleModalCssClass()); });
    i0.ɵɵtemplate(5, CeePickerComponent_div_0_ng_template_2_mat_option_5_Template, 2, 3, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeePickerComponent_div_0_ng_template_2_button_6_Template, 2, 2, "button", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeePickerComponent_div_0_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 9)(8, CeePickerComponent_div_0_ng_template_2_ng_template_8_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(10, CeePickerComponent_div_0_ng_template_2_ng_container_10_Template, 5, 4, "ng-container", 28);
    i0.ɵɵpipe(11, "keyvalue");
} if (rf & 2) {
    const fieldName_r22 = i0.ɵɵreference(4);
    const singleErrorMessage_r24 = i0.ɵɵreference(9);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", ctx_r0.isCustomClass && ctx_r0.custom_class_name ? ctx_r0.custom_class_name[0] : "", " ", !ctx_r0.valid || fieldName_r22.invalid && ctx_r0.isMandatory && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵproperty("value", ctx_r0.fieldValue)("ngStyle", ctx_r0.fieldStyle)("disabled", !ctx_r0.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("required", ctx_r0.isMandatory)("multiple", ctx_r0.additionalParameter["MultipleSelect"] && ctx_r0.additionalParameter["MultipleSelect"] == "true");
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r24);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 19, ctx_r0.showComparisonError));
} }
function CeePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_Template, 13, 5, "ng-container", 9)(2, CeePickerComponent_div_0_ng_template_2_Template, 12, 21, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const IsMaterial_r25 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.cssClasses);
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material)("ngIfElse", IsMaterial_r25);
} }
class CeePickerComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    router;
    dialog;
    snackBar;
    http;
    cdRef;
    fieldName;
    selectField;
    ang2SelectField;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    dependentSubscriber$;
    pickerValues = [];
    html_id = '';
    modalGenericCssClass = '';
    custom_class_name;
    optionsAriaLabel = [];
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    primaryKeyVal = '';
    labelKeyVal = '';
    classList = "form-control multi-select ";
    multiselectTooltip = "";
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    isValidDataStore = false;
    isValueSetFromRowData = false;
    timeoutIds = [];
    // for api search
    isApiSearchEnabled = false;
    searchMinCharacters = 0;
    searchDebounceTime = 300;
    searchSubject = new Subject();
    destroy$ = new Subject();
    requestApiKeyForSearch = '';
    searchInputElement = null;
    boundOnSearchInput = this.onSearchInput.bind(this);
    limitForSearch = 10;
    limitForSearchApplicable = false;
    apiKeyForDisplayValue = "";
    fieldDisplayValue = null;
    clearButton;
    internalAPIResponseEmitter = new EventEmitter();
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http, cdRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
    }
    ngOnInit() {
        // console.log("Before filed data: ",this.fieldData.html_id,"row data: ",this.rowData.html_id)
        // this.fieldData.html_id = this.rowData.html_id;
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.classList = "form-control multi-select valid ";
        this.modalGenericCssClass = 'modal-picker-' + this.stepId;
        this.isApiSearchEnabled = this.additionalParameter['CEE_Enable_API_Search'] === 'true';
        if (this.isApiSearchEnabled) {
            this.initializeApiSearchSettings();
        }
        this.dependencyHandler('onLoad');
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.additionalParameter.hasOwnProperty('CEE_Store_Valid_Data')) {
            this.isValidDataStore = this.additionalParameter['CEE_Store_Valid_Data'].toLowerCase() === 'true' ? true : false;
        }
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.variableObject['emitOnEditableStatusChanged_' + this.appData.id] = this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
            }
        });
        this.optionsAriaLabel = this.additionalParameter['Options-Aria-Label'] ? this.additionalParameter['Options-Aria-Label'].split("|") : [];
        // console.log("filed data: ",this.fieldData.html_id,"row data: ",this.rowData.html_id)
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'].join('||');
            // console.log("rowdata external val: ",this.rowData['externalApiOptionValue'])
        }
        // this.dropdownList = [];
        this.selectedItems = [];
        this.primaryKeyVal = this.getValueFromExpternalApi(0) || 'id';
        this.labelKeyVal = this.getValueFromExpternalApi(1) || 'itemName';
        if (Array.isArray(this.fieldValue) || (this.rowData && Array.isArray(this.rowData.value))) {
            const sourceArray = Array.isArray(this.fieldValue) ? this.fieldValue : this.rowData.value;
            const primaryKey = this.primaryKeyVal || 'id';
            const timeoutId = setTimeout(() => {
                this.selectedItems = [];
                sourceArray.forEach(element => {
                    const matchItem = this.dropdownList.find(obj => obj[primaryKey] === element);
                    if (matchItem) {
                        this.selectedItems.push(matchItem);
                    }
                });
            }, 10);
            this.timeoutIds.push(timeoutId);
            this.fieldValue = this.rowData?.value;
            this.updateFieldData(this.fieldValue, this.valid);
        }
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
        this.dropdownSettings = {
            singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
            text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
            enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
            classes: this.classList,
            badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
            labelKey: this.labelKeyVal,
            primaryKey: this.primaryKeyVal,
            searchBy: [this.labelKeyVal],
            disabled: !this.isEditable
        };
        // console.log("SelectedItems: ",this.selectedItems)
        // console.log("primaryKeyVal: ",this.primaryKeyVal)
        // console.log("labelKeyVal: ",this.labelKeyVal)
        // console.log("listOfItems: ",listOfItems)
        // console.log("placeholder: ",this.fieldData.placeholder_text)
        this.variableObject['emitOnDataSetOrUpdatedForSection'] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            // console.log("fieldData: ",this.fieldData);
            // console.log("res: ",res);
            let isConditionExist = false;
            if (this.fieldData.is_editable == 2 && this.fieldData.editable_condition && this.fieldData.editable_condition.condition && this.fieldData.editable_condition.condition.length > 0 && this.fieldData.editable_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            else if (this.fieldData.is_display == 2 && this.fieldData.display_condition && this.fieldData.display_condition.condition && this.fieldData.display_condition.condition.length > 0 && this.fieldData.display_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            else if (this.fieldData.is_mandatory == 2 && this.fieldData.mandatory_condition && this.fieldData.mandatory_condition.condition && this.fieldData.mandatory_condition.condition.length > 0 && this.fieldData.mandatory_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            if ((this.fieldData.is_editable == 2 || this.fieldData.is_display == 2 || this.fieldData.is_mandatory == 2) && isConditionExist) {
                // this.assignPickerOptionValues();
                // console.log("isConditionExist: ",isConditionExist);
                this.dropdownSettings = {
                    singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
                    text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
                    enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
                    selectAllText: 'Select All',
                    unSelectAllText: 'UnSelect All',
                    enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
                    classes: this.classList,
                    badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
                    labelKey: this.labelKeyVal,
                    primaryKey: this.primaryKeyVal,
                    searchBy: [this.labelKeyVal],
                    disabled: !this.isEditable
                };
            }
        });
        if (this.isApiSearchEnabled) {
            this.variableObject['isApiSearchEnabled' + this.appData.id] = this.searchSubject.pipe(debounceTime(this.searchDebounceTime), filter(term => term.length >= this.searchMinCharacters || term.length === 0), takeUntil(this.destroy$)).subscribe(term => {
                this.performSearch(term);
            });
        }
    }
    initializeApiSearchSettings() {
        // Initialize search with empty term
        this.updateDataOnChange('');
        // Set search configuration with defaults
        const params = this.additionalParameter;
        this.searchMinCharacters = parseInt(params['CEE_Search_Min_Characters']) || 0;
        this.searchDebounceTime = parseInt(params['CEE_Search_Debounce_Time']) || 300;
        this.requestApiKeyForSearch = params['CEE_Search_Request_api_Key_For_Search_input'] || '';
        this.apiKeyForDisplayValue = params['CEE_Search_response_api_key_for_display_label'] || '';
        // Handle search limit configuration
        this.setupSearchLimitConfig(params['CEE_Search_limit_Config']);
        this.variableObject['internalEmmitter' + this.appData.id] = this.internalAPIResponseEmitter.subscribe((res) => {
            if (Array.isArray(res)) {
                this.onAPICallback(res[0]);
            }
            else {
                this.onAPICallback(res);
            }
        });
    }
    setupSearchLimitConfig(limitConfig) {
        if (!limitConfig)
            return;
        const [limitForSearchApplicable, limit, limitKey] = limitConfig.split('|');
        this.limitForSearch = parseInt(limit) || 10;
        this.limitForSearchApplicable = limitForSearchApplicable === 'true';
        if (this.limitForSearchApplicable && limitKey) {
            this.setLimitApiData(limitKey);
        }
    }
    setLimitApiData(limitKey) {
        const apiData = {
            id: limitKey,
            apiUrl: '',
            apiKey: limitKey,
            value: this.limitForSearch
        };
        this.apiDataService.setApiData(apiData);
    }
    // returns css classes for field wrapper
    get cssClasses() {
        var clsName = this.isCustomClass && this.custom_class_name?.length >= 2 ? this.custom_class_name[1] : '';
        if (this.isSafariClass) {
            clsName += 'safari-visibility-wrapper ' + (this.isVisible ? 'safari-visible' : 'safari-hidden');
        }
        return clsName;
    }
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
    getValueFromExpternalApi(i = 0) {
        let extApiValue = this.additionalParameter['externalApiOptionValue'];
        if (extApiValue) {
            const parts = extApiValue.split('||');
            if (parts.length > 0) {
                const subParts = parts[i]?.split('.');
                if (subParts?.length > 0) {
                    return subParts[subParts.length - 1];
                }
            }
        }
        return undefined;
    }
    processPickerSetting(value = false) {
        if (!value) {
            this.fieldName.control.markAsDirty();
        }
        this.classList = "form-control multi-select";
        if (this.isCustomClass && this.custom_class_name) {
            this.classList = this.classList + ' ' + this.custom_class_name[0];
        }
        if (!this.valid || (this.fieldName && this.fieldName.invalid && this.isMandatory && (this.fieldName.dirty || this.fieldName.touched || this.showErrorOnNext))) {
            this.classList = this.classList + ' invalid';
        }
        else {
            this.classList = this.classList + ' valid';
        }
        // console.log("Class List: ", this.classList)
        this.dropdownSettings = {
            singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
            text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
            enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
            classes: this.classList,
            badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
            labelKey: this.labelKeyVal,
            primaryKey: this.primaryKeyVal,
            searchBy: [this.labelKeyVal],
            disabled: !this.isEditable
        };
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
        // console.log("this.valid: ", this.valid)
        // console.log("this.messages: ", this.messages)
        if (this.fieldName) {
            this.fieldName.control.updateValueAndValidity();
        }
    }
    // this is bound on close event
    onMultiselectClicked(event) {
        this.updateDataOnChange("");
        this.fieldName.control.markAsDirty();
        if (!this.isMandatory || (this.isMandatory && this.selectedItems && Array.isArray(this.selectedItems) && this.selectedItems.length > 0)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
        // console.log("onMultiselectClicked: ", this.valid)
        this.updateFieldData(this.fieldValue, this.valid);
        this.processPickerSetting();
    }
    onItemSelect(item) {
        this.changeStoreValues();
        this.processPickerSetting();
    }
    OnItemDeSelect(item) {
        // update mandatory flag in appData if it has changed conditionally
        // this.isMandatory is changed correctly from base class, but appData.mandatory is not updated
        if (this.appData.mandatory != this.isMandatory) {
            this.appData.mandatory = this.isMandatory;
        }
        this.changeStoreValues();
        this.processPickerSetting();
    }
    onSelectAll(items) {
        this.changeStoreValues();
        this.processPickerSetting();
    }
    onDeSelectAll(items) {
        // update mandatory flag in appData if it has changed conditionally
        // this.isMandatory is changed correctly from base class, but appData.mandatory is not updated
        if (this.appData.mandatory != this.isMandatory) {
            this.appData.mandatory = this.isMandatory;
        }
        this.changeStoreValues();
        this.processPickerSetting();
    }
    changeStoreValues() {
        let primaryKey = this.getValueFromExpternalApi() || this.additionalParameter['PrimaryKeyName'] || 'id';
        this.fieldValue = this.selectedItems.map(a => a[primaryKey]);
        // this.valid decides whether to show the inline error message or not
        if (!this.isMandatory || (this.isMandatory && this.fieldValue && Array.isArray(this.fieldValue) && this.fieldValue.length > 0)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
        // if fieldValue is [], then
        // setting blank space is necessary to bring in original state for use case of conditional display
        // if [] is set, then it will consider as user has entered value and mandatory check will fail
        // even when field is not visible
        if ((!this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'].toLowerCase() != 'true'))
            && (this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'].toLowerCase() == 'true')) {
            this.updateFieldData((this.fieldValue && this.fieldValue.length > 0) ? this.fieldValue[0] : '', this.valid);
        }
        else {
            this.updateFieldData((this.fieldValue && this.fieldValue.length > 0) ? this.fieldValue : '', this.valid);
        }
        this.getUpdatedValue();
        // console.log(this.selectedItems);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    concatData() { }
    ngOnDestroy() {
        this.onViewUnload();
        // Clean up arrays and objects
        this.pickerValues = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = null;
        this.custom_class_name = null;
        this.optionsAriaLabel = [];
        // clear setTimeout
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Clean up ViewChild references
        this.fieldName = null;
        this.selectField = null;
        // Clean up event handlers
        if (this.rootData && this.rootData['FieldErrorFunctions'] && this.fieldData) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clean up any other external references
        if (this.variableObject) {
            Object.keys(this.variableObject).forEach(key => {
                if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                    this.variableObject[key].unsubscribe();
                }
            });
        }
        this.destroy$.next();
        this.destroy$.complete();
        this.searchSubject.complete();
        this.removeSearchEventListeners();
        if (this.clearButton) {
            this.clearButton.removeEventListener('click', this.onClearClicked);
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // console.log("_____________>",this.fieldData.html_id)
        // END
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.pickerValues = this.fieldData.possible_values;
        this.assignPickerOptionValues();
        // console.log("on view data init PickerValue: ", this.pickerValues)
        this.updateFieldData(this.fieldValue);
        if (this.rowData) {
            this.setValueFromRowData();
        }
        if (this.additionalParameter['externalApiOptionValue']) {
            const timeoutId = setTimeout(() => {
                let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
                const externalApiOptionValue = data
                    ? this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data['value'])
                    : null;
                if (!externalApiOptionValue || !Array.isArray(externalApiOptionValue)) {
                    // console.error('Something Went Wrong in Picker !!!');
                    return;
                }
                // Assign values
                this.fieldData.possible_values = externalApiOptionValue;
                this.pickerValues = this.fieldData.possible_values;
                this.assignPickerOptionValues();
                if (!this.pickerValues.length || !this.additionalParameter['default_value'])
                    return;
                if (!this.isValueSetFromRowData) {
                    this.setValueFromDefaultValue(this.additionalParameter['default_value'], data);
                }
                // Update field data
                this.updateFieldData(this.fieldValue);
                // ✅ Add this block to set selectedItems explicitly
                this.selectedItems = [];
                if (this.fieldValue) {
                    if (Array.isArray(this.fieldValue)) {
                        this.fieldValue.forEach(element => {
                            let key = this.primaryKeyVal || 'id';
                            let results = this.dropdownList.filter(obj => obj[key] === element);
                            let matchItem = results.length > 0 ? results[0] : null;
                            if (matchItem && matchItem != null) {
                                this.selectedItems.push(matchItem);
                            }
                        });
                    }
                    else {
                        let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                        let matchItem = results.length > 0 ? results[0] : null;
                        if (matchItem && matchItem != null) {
                            this.selectedItems = [matchItem];
                        }
                    }
                }
                this.cdRef.detectChanges(); // ✅ trigger UI refresh
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
        else {
            if (this.fieldData.possible_values.length > 0) {
                if (this.additionalParameter['default_value'] && this.fieldValue == '') {
                    this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.selectField && typeof this.selectField.focus === "function")
                        this.selectField.focus();
                }
                else {
                    if (document.getElementById(this.fieldData.html_id).querySelector('select'))
                        document.getElementById(this.fieldData.html_id).querySelector('select').focus();
                }
            };
        }
    }
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.initSelectPicker();
        // Special handling for search filter with default value
        if (this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' &&
            this.additionalParameter['default_value'] && this.fieldValue) {
            // Ensure selectedItems reflects the default value after view initialization
            this.assignPickerOptionValues();
            this.cdRef.detectChanges();
        }
        this.cdRef.detectChanges();
    }
    initSelectPicker() {
        if (!this.is_material && $ && $('.multi-select') && $('.multi-select')['selectpicker']) {
            const timeoutId = setTimeout(() => {
                $('.multi-select').selectpicker('destroy');
                $('.multi-select').selectpicker();
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    setValueFromRowData() {
        if (this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
            if (Array.isArray(this.rowData.value)) {
                this.pickerValues = this.rowData.value;
                this.assignPickerOptionValues();
            }
            else {
                this.fieldValue = this.rowData && this.rowData.value;
                this.isValueSetFromRowData = true;
                // this.updateFieldData(this.fieldValue);
            }
        }
        if (this.rowData.hasOwnProperty('resIsDiffHandler') && this.rowData.resIsDiffHandler
            && this.rowData.hasOwnProperty('response_api_key')) {
            let val;
            for (const key of this.rowData.response_api_key) {
                val = this.returnValueFromCallback(key);
            }
            if (val) {
                this.fieldValue = val;
                this.isValueSetFromRowData = true;
                this.updateFieldData(this.fieldValue);
            }
        }
    }
    setValueFromDefaultValue(defaultValue, data) {
        if (defaultValue.includes('|')) {
            const [fullApiKey, isDefaultValue, keyName] = defaultValue.split('|');
            const [fulldataApiKey, apiKey] = fullApiKey.split('.');
            const valueData = this.setApiCallBackDataUtil.setApiCallBackData(fulldataApiKey, data['value']);
            const defaultEntity = valueData.find(item => item[apiKey] === isDefaultValue);
            if (defaultEntity) {
                // console.log("Master entity value for default:", defaultEntity.master_entity_value);
                this.fieldValue = this.commonUtil.getID(defaultEntity[keyName]);
            }
            else {
                // console.log("No default entity found");
            }
        }
        else {
            this.fieldValue = this.commonUtil.getID(defaultValue);
        }
    }
    assignPickerOptionValues() {
        this.dropdownList = [];
        this.primaryKeyVal = this.getValueFromExpternalApi() || 'id';
        this.labelKeyVal = this.getValueFromExpternalApi(1) || 'itemName';
        // if in search mode, add previously selected items to picker values, to maintain list
        if (this.isApiSearchEnabled) {
            if (this.selectedItems.length > 0) {
                // console.log("Adding Selected items for search: ", this.selectedItems);
                // convert selected items into OP_VALUE||DISPLAY_VALUE                
                let pvSelected = this.selectedItems.map(item => `${item[this.primaryKeyVal]}||${item[this.labelKeyVal]}`);
                // merge with picker values and remove duplicates
                this.pickerValues = [...new Set([...pvSelected, ...this.pickerValues])];
            }
            else if (this.fieldValue && this.fieldDisplayValue) {
                if (Array.isArray(this.fieldValue)) {
                    // combine both arrays operationValues and apiData (displayValues) with '||'            
                    let pairs = this.fieldValue.map((id, index) => `${id}||${this.fieldDisplayValue[index]}`);
                    // merge with picker values and remove duplicates
                    this.pickerValues = [...new Set([...pairs, ...this.pickerValues])];
                }
                else {
                    let pairs = [`${this.fieldValue}||${this.fieldDisplayValue}`];
                    this.pickerValues = [...new Set([...pairs, ...this.pickerValues])];
                }
            }
        }
        this.pickerValues.forEach(element => {
            let obj = {};
            obj[this.primaryKeyVal] = element.split('||')[0];
            obj[this.labelKeyVal] = element.split('||')[1];
            this.dropdownList.push(obj);
        });
        // console.log("dropdownList: ", this.dropdownList)
        this.selectedItems = [];
        if (this.fieldValue) {
            if (Array.isArray(this.fieldValue)) {
                this.fieldValue.forEach(element => {
                    // console.log(this.additionalParameter['PrimaryKeyName'])
                    let key = this.primaryKeyVal || 'id';
                    let results = this.dropdownList.filter(obj => obj[key] === element);
                    let matchItem = results.length > 0 ? results[0] : null;
                    if (matchItem && matchItem != null) {
                        this.selectedItems.push(matchItem);
                    }
                });
            }
            else {
                // if(this.isValidDataStore){
                //     this.checkIfFieldValueIsExist();
                //     this.changeStoreValues();
                // }
                let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                let matchItem = results.length > 0 ? results[0] : null;
                if (matchItem && matchItem != null) {
                    this.selectedItems = [matchItem];
                }
                else if (this.isValidDataStore) {
                    // if there is no match item, reset field value to show placeholder
                    this.fieldValue = "";
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
        // code for multiselectTooltip
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
    }
    onAPICallback(data) {
        // console.log("onAPICallback Picker: ", this.fieldData.unique_id);
        // throw new Error('Method not implemented.');
        let apiData = null; // contains ids or operational values
        this.fieldDisplayValue = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (this.isApiSearchEnabled && this.apiKeyForDisplayValue != '') {
                this.fieldDisplayValue = this.setApiCallBackDataUtil.setApiCallBackData({ "response_api_key": this.apiKeyForDisplayValue }, data);
            }
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        if (apiData !== null) {
            if (Array.isArray(apiData) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiData;
                this.pickerValues = this.fieldData.possible_values;
                this.assignPickerOptionValues();
                this.initSelectPicker();
            }
            else {
                this.fieldValue = apiData;
                this.updateFieldData(this.fieldValue);
                this.assignPickerOptionValues();
                this.cdRef.detectChanges();
            }
        }
        // throw new Error('Method not implemented.');
        // console.log(this.fieldData.unique_id, data);
        // if (!this.rowData) {
        //     const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        //     if (resData !== null) {
        //         if (Array.isArray(resData) && this.isSingleApiKey) {
        //             this.fieldData.possible_values = resData;
        //             this.pickerValues = this.fieldData.possible_values;
        //             this.assignPickerOptionValues();
        //             this.initSelectPicker();
        //         } else {
        //             this.fieldValue = resData;
        //             this.updateFieldData(this.fieldValue);
        //             this.assignPickerOptionValues();
        //             this.cdRef.detectChanges();
        //         }
        //     }            
        // } else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
        //     setTimeout(() => {
        //         this.fieldValue = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null
        //         this.updateFieldData(this.fieldValue);
        //     }, 0);
        // }
        //for repeated externalApiOptionValue
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'].join('||');
            // console.log("externalApiOptionValue: ",this.additionalParameter['externalApiOptionValue']);
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        // if(this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const parameter of this.fieldData.additional_parameters) {
        //         if (parameter.parameter_type === 'externalApiOptionValue') {
        //             const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
        //             if (externalApiOptionValue !== null) {
        //                 if (Array.isArray(externalApiOptionValue)) {
        //                     this.fieldData.possible_values = externalApiOptionValue;
        //                     this.pickerValues = this.fieldData.possible_values;
        //                 } else {
        //                     console.error('Something Went Wrong in Picker !!!');
        //                 }
        //             }
        //         }
        //     }
        // }
        if (this.additionalParameter['externalApiOptionValue']) {
            // console.log("call getExternalApiOptionValue");
            const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data);
            // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
            if (externalApiOptionValue !== null) {
                if (Array.isArray(externalApiOptionValue)) {
                    this.fieldData.possible_values = externalApiOptionValue;
                    this.pickerValues = this.fieldData.possible_values;
                    this.assignPickerOptionValues();
                    this.initSelectPicker();
                    if (this.additionalParameter['default_value']) {
                        this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                        this.updateFieldData(this.fieldValue);
                    }
                }
                else {
                    // console.error('Something Went Wrong in Picker !!!');
                }
            }
            else if (this.additionalParameter['externalApiOptionValue'].includes(data.handler_name)) {
                const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
                const keyApiKey = valueApikeys[0].split('##')[0];
                const valueApiKey = valueApikeys[1].split('##')[0];
                if (keyApiKey == data.handler_name || valueApiKey == data.handler_name) {
                    this.fieldData.possible_values = [];
                    this.pickerValues = this.fieldData.possible_values;
                    this.assignPickerOptionValues();
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    getPickerArrOfObject(pickerValues) {
        let listOfPossibleValues = [];
        pickerValues.forEach(element => {
            listOfPossibleValues.push({ id: element.split('||')[0], value: element.split('||')[1] });
        });
        return listOfPossibleValues;
    }
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        let api_key_setter = false;
        let skipFieldsIds = get_data.skipFieldsIds;
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
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                    ...get_data.apiKeys
                ];
                api_key_setter = true;
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm) == true) {
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                            break;
                        }
                        else if (paramter.parameter_type === 'externalApiOptionValue') {
                            this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']) || '';
                            this.selectedItems = [];
                            //  console.log("default_value: ", this.fieldValue);
                            let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                            let matchItem = results.length > 0 ? results[0] : null;
                            if (matchItem && matchItem != null) {
                                this.selectedItems = [matchItem];
                            }
                            if (api_key_setter == true) {
                                let parameterList = paramter.value.split('||');
                                if (parameterList.includes(elm)) {
                                    this.fieldData.possible_values = [];
                                    this.pickerValues = [];
                                    this.assignPickerOptionValues();
                                    this.fieldValue = '';
                                    this.selectedItems = [];
                                    this.multiselectTooltip = "";
                                    this.initSelectPicker();
                                }
                            }
                            break;
                        }
                        else {
                            this.fieldValue = '';
                            this.selectedItems = [];
                            this.multiselectTooltip = "";
                            break;
                        }
                    }
                }
                else {
                    if (!skipFieldsIds?.includes(this.fieldData.unique_id)) {
                        this.fieldValue = '';
                        this.selectedItems = [];
                        this.multiselectTooltip = "";
                    }
                }
                this.updateFieldData(this.fieldValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                if (this.fieldName) {
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
                }
                this.cdRef.detectChanges();
                return;
            }
            // if(get_data.apiKeys.length > 0) {
            //     if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            //         for (const paramter of this.fieldData.additional_parameters) {
            //             if (paramter.parameter_type === 'externalApiOptionValue') {
            //             let parameterList = paramter.value.split('||');
            //             if(parameterList.includes(elm)){
            //                 this.fieldData.possible_values = [];
            //                 this.pickerValues = [];
            //                 this.fieldValue = '';
            //             }
            //             break;
            //             } else {
            //                 this.fieldValue = '';
            //             }
            //         }
            //     } else {
            //         this.fieldValue = '';
            //     }
            // }
        });
    }
    handleCustomFunction(get_data) {
        //console.log('get_data', typeof get_data === 'object');
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue() {
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        this.valid = (!this.isMandatory || (this.isMandatory && this.fieldValue.length > 0)) ? true : false;
        this.updateFieldData(this.commonUtil.getID(this.fieldValue), this.valid);
        if (this.rowData) {
            this.appDataService.updateAppData(Object.assign({}, this.appData, {
                value: this.commonUtil.getID(this.fieldValue)
            }));
        }
        if (this.fieldData.possible_value_type === 'ExternalApi') {
            this.dependencyHandler('onSelect', {
                uniqueId: this.html_id,
                value: this.commonUtil.getID(this.fieldValue)
            });
        }
        else {
            this.onComponentEvent('onSelect', primaryData, true, {
                uniqueId: this.html_id,
                value: this.commonUtil.getID(this.fieldValue)
            });
        }
        this.onDirty();
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                if (this.isValidDataStore) {
                    this.checkIfFieldValueIsExist();
                }
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
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
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'pickerValues'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    toggleModalCssClass() {
        const modalWrapper = window.document.querySelectorAll('.cdk-overlay-pane');
        if (modalWrapper) {
            modalWrapper.forEach(mw => {
                mw.classList.toggle('modal-picker-wrapper');
                mw.classList.toggle(this.modalGenericCssClass);
            });
        }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
            if (changes.editableCondition.previousValue !== changes.editableCondition.currentValue) {
                this.processPickerSetting(true);
            }
        }
        // if (changes.editableCondition) {
        //     this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        // }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        }
    }
    checkIfFieldValueIsExist() {
        let found = this.getPickerArrOfObject(this.pickerValues).findIndex((i) => i.id === this.fieldValue);
        if (found === -1) {
            this.fieldValue = '';
        }
    }
    performSearch(searchTerm) {
        //console.log('Search Term:', searchTerm);
        this.updateDataOnChange(searchTerm);
        this.onComponentEvent('OnKeyUp', {
            internalAPIResponseEmitter: this.internalAPIResponseEmitter,
        });
    }
    updateDataOnChange(term) {
        const apiData = {
            id: this.requestApiKeyForSearch,
            apiUrl: '',
            apiKey: this.requestApiKeyForSearch,
            value: term
        };
        this.apiDataService.setApiData(Object.assign({}, apiData));
    }
    // Handle dropdown open/close toggle
    handleDropdownToggleClick() {
        // Check if dropdown is open by looking for the dropdown-list element without hidden attribute
        const dropdownList = this.ang2SelectField?.nativeElement?.querySelector('.dropdown-list');
        const isDropdownOpen = dropdownList && !dropdownList.hasAttribute('hidden');
        if (!isDropdownOpen)
            return;
        //console.log('Dropdown is opening');
        // set search input element if not set
        // if (!this.searchInputElement) {
        //console.log('searchInputElement is not set');
        try {
            const timeoutId = setTimeout(() => {
                this.setupSearchInput();
            }, 100);
            this.timeoutIds.push(timeoutId);
        }
        catch (error) {
            throw new Error("Failed to setup search field");
        }
        // }
        // functionality need to fetch api with blank value on opening the dropdown
        this.performSearch('');
    }
    onDropdownClick(event) {
        if (!this.isApiSearchEnabled)
            return;
        const target = event.target;
        // Check if it's the dropdown toggle/header area
        if (target.closest('.c-btn') || target.closest('.dropdown-btn')) {
            //console.log('Dropdown toggle clicked');
            this.handleDropdownToggleClick();
            return;
        }
    }
    setupSearchInput() {
        this.removeSearchEventListeners();
        if (!this.ang2SelectField?.nativeElement) {
            return;
        }
        const searchInput = this.ang2SelectField.nativeElement.querySelector('.list-filter .c-input');
        if (searchInput) {
            this.searchInputElement = searchInput;
            this.searchInputElement.addEventListener('input', this.boundOnSearchInput);
        }
        this.clearButton = this.ang2SelectField.nativeElement.querySelector('.list-filter .c-clear');
        if (this.clearButton) {
            this.clearButton.addEventListener('click', this.onClearClicked.bind(this));
        }
    }
    removeSearchEventListeners() {
        if (this.searchInputElement && this.boundOnSearchInput) {
            this.searchInputElement.removeEventListener('input', this.boundOnSearchInput);
            this.searchInputElement = null;
        }
    }
    onSearchInput(event) {
        const term = event.target.value;
        this.searchSubject.next(term);
    }
    onClearClicked() {
        this.performSearch('');
    }
    static ɵfac = function CeePickerComponent_Factory(t) { return new (t || CeePickerComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeePickerComponent, selectors: [["app-cee-picker"]], viewQuery: function CeePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ang2SelectField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["IsMaterial", ""], ["IsMultipleSelect", ""], ["angularMultiselect", ""], ["errorContainer", ""], ["selectField", "", "fieldName", "ngModel"], ["ang2SelectField", "", "fieldName", "ngModel"], ["singleErrorMessage", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [4, "ngIf", "ngIfElse"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "form-field"], [3, "ngModelChange", "change", "ngStyle", "disabled", "ngModel", "required"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "value"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onClose", "click", "data", "ngModel", "settings", "title"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "ngModelChange", "selectionChange", "openedChange", "placeholder", "value", "ngStyle", "disabled", "ngModel", "aria-label", "required", "multiple"], ["mat-icon-button", "", "matSuffix", "", "style", "display:inline", "type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "btn-tooltip", "ml-auto", 2, "display", "inline", 3, "tooltip"]], template: function CeePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeePickerComponent_div_0_Template, 4, 6, "div", 7);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible || ctx.isSafariClass);
        } }, dependencies: [MatTooltipModule, MatInputModule, i12.MatFormField, i12.MatLabel, i12.MatSuffix, NgStyle, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.SelectControlValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.NgModel, MatFormFieldModule, MatSelectModule, i14$1.MatSelect, i16.MatOption, CommonModule, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.KeyValuePipe, TooltipModule, TooltipDirective, AngularMultiSelectModule, i18.AngularMultiSelect], styles: [".custom-select[_ngcontent-%COMP%]{background-size:14px auto;background-position:right .5rem center;background-color:#fff}  .selected-list .c-list .c-token .c-remove svg{fill:#000!important}.invalid[_ngcontent-%COMP%]{border-color:#c13211b8!important}.selected-list[_ngcontent-%COMP%]   .c-btn[_ngcontent-%COMP%]{padding:0!important}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-picker', standalone: true, imports: [MatTooltipModule, MatInputModule, NgStyle, FormsModule, MatFormFieldModule, MatSelectModule, CommonModule, TooltipModule, AngularMultiSelectModule], template: "<div class=\"{{cssClasses}}\" id=\"{{html_id }}\" *ngIf=\"isVisible || isSafariClass\">\r\n\t<!-- Normal Bootstrap UI -->\r\n\t<ng-container *ngIf=\"!is_material; else IsMaterial\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</div>\r\n\t\t\t<ng-container *ngIf=\"!additionalParameter['MultipleSelect'] || additionalParameter['MultipleSelect'] != 'true'; else IsMultipleSelect\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!this.additionalParameter['CEE_Enable_Search_Filter'] || ( this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] == 'false' ); else angularMultiselect\">\r\n\t\t\t\t\t\t<div class=\"form-field\">\r\n\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\tclass=\"custom-select {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t\t\t#selectField [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t\t\t\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t\t\t\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\t\t\t\t\t\t\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t\t\t\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t\t\t\t\t\t}\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (change)=\"getUpdatedValue()\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" disabled>{{ fieldData.placeholder_text }}</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let opt of pickerValues\" value=\"{{commonUtil.getID(opt)}}\">\r\n\t\t\t\t\t\t\t\t\t{{commonUtil.getValue(opt)}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #IsMultipleSelect>\r\n\t\t\t\t<div class=\"form-field\">\r\n\t\t\t\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \r\n\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t(onSelect)=\"onItemSelect($event)\" \r\n\t\t\t\t\t(onDeSelect)=\"OnItemDeSelect($event)\"\r\n\t\t\t\t\t(onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t\t(onDeSelectAll)=\"onDeSelectAll($event)\"\r\n\t\t\t\t\t(onClose)=\"onMultiselectClicked($event)\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\t[title]=\"multiselectTooltip\"\r\n\t\t\t\t\t(click)=\"onDropdownClick($event)\"\r\n\t\t\t\t\t#ang2SelectField\r\n\t\t\t\t\t#fieldName=\"ngModel\"></angular2-multiselect>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <select multiple\r\n\t\t\t\t\t\tclass=\"multi-select {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t#selectField [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\t\t\t\t\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t\t\t\t}\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (change)=\"getUpdatedValue()\">\r\n\t\t\t\t\t\t<option value=\"\" disabled>{{ fieldData.placeholder_text }}</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let opt of pickerValues\" value=\"{{commonUtil.getID(opt)}}\">\r\n\t\t\t\t\t\t\t{{commonUtil.getValue(opt)}}</option>\r\n\t\t\t\t\t</select> -->\r\n\t\t\t\t\t<!-- <ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template>\t\t\t -->\r\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"!valid && fieldName.dirty\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-template #angularMultiselect>\r\n\t\t\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \r\n\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t(onSelect)=\"onItemSelect($event)\" \r\n\t\t\t\t(onDeSelect)=\"OnItemDeSelect($event)\"\r\n\t\t\t\t(onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t(onDeSelectAll)=\"onDeSelectAll($event)\"\r\n\t\t\t\t(onClose)=\"onMultiselectClicked($event)\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n                [attr.tabindex]=\"tabIndexValue\"\r\n                [title]=\"multiselectTooltip\"\r\n\t\t\t\t(click)=\"onDropdownClick($event)\"\r\n                #ang2SelectField\r\n                #fieldName=\"ngModel\"></angular2-multiselect>\r\n                <div *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\" *ngIf=\"!valid && fieldName.dirty\">\r\n                        <div>\r\n                            <p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                {{returnMessageData(message.code).message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t\t<!-- <ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template> -->\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-template #errorContainer let-fieldName=\"fieldName\">\r\n\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext ))\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable && !fieldValue) || (fieldName.errors && fieldName?.errors.required)\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</ng-container>\r\n\r\n\t<!-- Material UI -->\r\n\t<ng-template #IsMaterial>\r\n\t\t<mat-form-field>\r\n\t\t\t<mat-label *ngIf=\"fieldData.field_label!=''\">{{fieldData.field_label}}</mat-label>\r\n\t\t\t<mat-select placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\tclass=\"{{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t#selectField [value]=\"fieldValue\" [ngStyle]=\"fieldStyle\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t[aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (selectionChange)=\"getUpdatedValue()\"\r\n\t\t\t\t(openedChange)=\"toggleModalCssClass()\"\r\n\t\t\t\t[multiple] = \"additionalParameter['MultipleSelect'] && additionalParameter['MultipleSelect'] == 'true'\" >\r\n\t\t\t\t<mat-option *ngFor=\"let opt of pickerValues; let i = index\" value=\"{{commonUtil.getID(opt)}}\" [attr.aria-label]=\"optionsAriaLabel ? optionsAriaLabel[i] : 'Select ' + opt\">\r\n\t\t\t\t\t{{commonUtil.getValue(opt)}}</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t\t<!-- Tooltip -->\r\n\t\t\t<button mat-icon-button matSuffix style=\"display:inline\" *ngIf=\"hasTooltip\" type=\"button\"\r\n\t\t\t\tclass=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\ti\r\n\t\t\t</button>\r\n\t\t</mat-form-field>\r\n\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext ))\">\r\n\t\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.errors && fieldName?.errors.required)\">\r\n\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.minlength\">\r\n\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<ng-template #singleErrorMessage>\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-template>\r\n</div>", styles: [".custom-select{background-size:14px auto;background-position:right .5rem center;background-color:#fff}::ng-deep .selected-list .c-list .c-token .c-remove svg{fill:#000!important}.invalid{border-color:#c13211b8!important}.selected-list .c-btn{padding:0!important}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: CeeApiService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i11.Router }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
        }], selectField: [{
            type: ViewChild,
            args: ['selectField', { static: false }]
        }], ang2SelectField: [{
            type: ViewChild,
            args: ['ang2SelectField', { read: ElementRef }]
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeePickerComponent, { className: "CeePickerComponent", filePath: "lib\\field-components\\cee-picker\\cee-picker.component.ts", lineNumber: 34 }); })();

export { CeePickerComponent };
//# sourceMappingURL=ng-cee-core-cee-picker.component-DQznZ6Qo.mjs.map
