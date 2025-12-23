import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i10 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i16 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
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
import '@angular/router';
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
import '@angular/material/paginator';
import '@angular/material/radio';
import '@angular/material/sort';
import '@angular/material/table';
import '@angular/material/autocomplete';
import '@angular/material/tabs';
import '@angular/material/button';
import '@angular/material/select';
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

const _c0 = ["checkBoxControl"];
const _c1 = ["checkField"];
const _c2 = (a0, a1, a2, a3) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3 });
const _c3 = a0 => ({ "color": a0 });
function CeeCheckboxComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeCheckboxComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 16)(2, CeeCheckboxComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeCheckboxComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCheckboxComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeCheckboxComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", item_r3.label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-checkbox", 24, 3);
    i0.ɵɵlistener("keyup", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_keyup_2_listener($event) { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onEnter($event, item_r3)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r3.isChecked, $event) || (item_r3.isChecked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event)); });
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_label_4_Template, 1, 1, "label", 17)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_Template, 5, 2, "span", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(!ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("tabIndex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵtwoWayProperty("ngModel", item_r3.isChecked);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable || item_r3.maxValueDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.validateContaint(item_r3.label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(item_r3.label));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 31);
    i0.ɵɵlistener("click", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template_label_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const item_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.storeLastClickedValue(ctx_r0.commonUtil.getID(item_r3).value, $event.target)); });
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 33);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", item_r3.label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const item_r3 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r3.isChecked, $event) || (item_r3.isChecked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event.target)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template, 5, 8, "label", 28)(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_Template, 5, 11, "label", 29)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_5_Template, 1, 10, "label", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-checkbox  ", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵtwoWayProperty("ngModel", item_r3.isChecked);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable || item_r3.maxValueDisabled);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(item_r3.label) && ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(item_r3.label) && !ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(item_r3.label));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.description);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template, 3, 4, "div", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext && message_r9.type == "Mandatory");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessageData.message_text);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_div_0_Template, 3, 4, "div", 37);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 38)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r10.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r10.value.message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_4_Template, 5, 4, "ng-container", 23);
    i0.ɵɵpipe(5, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const singleErrorMessage_r11 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx_r0.showComparisonError));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template, 6, 15, "ng-container", 12)(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template, 6, 16, "ng-container", 12)(3, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_template_3_Template, 7, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_Template, 6, 5, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const isLast_r12 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", isLast_r12);
} }
function CeeCheckboxComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_Template, 6, 3, "ng-container", 23);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.checkboxesDataList);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(2).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), ">");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-checkbox", 40, 6);
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_label_5_Template, 1, 1, "label", 17)(6, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_Template, 5, 2, "span", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const checkBoxControl_r17 = i0.ɵɵreference(4);
    const i_r14 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(!ctx_r0.inputValue && ctx_r0.isMandatory && checkBoxControl_r17 && (checkBoxControl_r17.dirty || checkBoxControl_r17.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(ctx_r0.fieldValue));
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("tabIndex", ctx_r0.tabIndexValue);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("checked", ctx_r0.isSingleCheckboxChecked)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 31);
    i0.ɵɵlistener("click", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template_label_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.storeLastClickedValue(ctx_r0.commonUtil.getID(ctx_r0.fieldValue), $event.target)); });
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const opt_r16 = ctx_r19.$implicit;
    const i_r14 = ctx_r19.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 33);
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(2).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 41, 7);
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event.target)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template, 5, 8, "label", 28)(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_Template, 5, 11, "label", 29)(6, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_6_Template, 1, 10, "label", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-checkbox  ", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(ctx_r0.fieldValue));
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("checked", ctx_r0.isSingleCheckboxChecked)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])) && ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])) && !ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r16));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r16));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template, 3, 4, "div", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r21 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.checkBoxControl && (ctx_r0.checkBoxControl.dirty || ctx_r0.checkBoxControl.touched || ctx_r0.showErrorOnNext) && message_r21.type == "Mandatory");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessageData.message_text);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_div_0_Template, 3, 4, "div", 37);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.checkBoxControl && (ctx_r0.checkBoxControl.dirty || ctx_r0.checkBoxControl.touched || ctx_r0.showErrorOnNext));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 38)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r22.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r22.value.message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_4_Template, 5, 4, "ng-container", 23);
    i0.ɵɵpipe(5, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const singleErrorMessage_r23 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r23);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx_r0.showComparisonError));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template, 7, 17, "ng-container", 12)(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template, 7, 18, "ng-container", 12)(3, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_template_3_Template, 7, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_Template, 6, 5, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const isLast_r24 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", isLast_r24);
} }
function CeeCheckboxComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_Template, 6, 3, "ng-container", 23);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldData.possible_values);
} }
function CeeCheckboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, CeeCheckboxComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 12)(4, CeeCheckboxComponent_div_0_span_4_Template, 2, 0, "span", 13)(5, CeeCheckboxComponent_div_0_button_5_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeCheckboxComponent_div_0_div_6_Template, 1, 0, "div", 15)(7, CeeCheckboxComponent_div_0_ng_template_7_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(9, CeeCheckboxComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const thenBlock_r25 = i0.ɵɵreference(8);
    const elseBlock_r26 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.checkboxesDataList.length > 1 || ctx_r0.extraPossibleValueStatus == true && ctx_r0.checkboxesDataList.length > 0)("ngIfThen", thenBlock_r25)("ngIfElse", elseBlock_r26);
} }
class CeeCheckboxComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    checkBoxControl;
    checkField;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    columns = 0;
    inputValue = false;
    html_id = '';
    checkboxesDataList = [];
    extraPossibleValueStatus = false;
    isHTMLContent = false;
    isSingleCheckboxChecked = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    /**
     * function that unsubscribes all the events in base view when the component is unloaded
     * @param $event HTML event
     */
    // @HostListener('window:beforeunload', ['$event'])
    // undloadComponent($event: any) {
    //     this.onViewUnload();
    //     // $event.returnValue = true;
    // }
    // Helper method to clear checkbox data
    clearCheckboxData() {
        if (this.checkboxesDataList && this.checkboxesDataList.length > 0) {
            // Clear the array completely
            this.checkboxesDataList.length = 0;
            this.checkboxesDataList = [];
        }
    }
    ngOnDestroy() {
        // Clear DOM function references
        if (this.rootData &&
            this.rootData['FieldErrorFunctions'] &&
            this.fieldData &&
            this.fieldData.html_id) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clear checkbox data
        this.clearCheckboxData();
        // Clear ViewChild references
        this.checkBoxControl = null;
        this.checkField = null;
        // Clear component state
        this.inputValue = false;
        this.html_id = '';
        this.extraPossibleValueStatus = false;
        this.isHTMLContent = false;
        this.isSingleCheckboxChecked = false;
        this.columns = 0;
        // Clear input properties
        this.rootData = null;
        this.mandatoryCondition = null;
        this.editableCondition = null;
        this.visibleCondition = null;
        // Clear field value
        this.fieldValue = null;
        this.onViewUnload();
    }
    /**
     * setting the data of the field when the key in the data matches the api key of the field
     * @param data api response data
     */
    onAPICallback(data) {
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.additionalParameter['externalApiOptionValue']) {
            const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data);
            if (externalApiOptionValue !== null) {
                this.multipleCheckboxRender(externalApiOptionValue);
                this.setValues(this.fieldValue || []);
            }
        }
        if (this.rowData) {
            return;
        }
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.fieldValue = apiValue;
            this.inputValue = this.fieldValue === 'true' || this.fieldValue === '1' ? true : false;
            this.updateFieldData(this.fieldValue === 'false' || this.fieldValue === '0' ? '' : this.fieldValue);
            this.setValues(this.fieldValue || []);
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    multipleCheckboxRender(data) {
        let checkboxData = this.fieldData.possible_values;
        if (data) {
            checkboxData = data;
        }
        this.checkboxesDataList = [];
        if (checkboxData) {
            for (const [i, checkbox] of checkboxData.entries()) {
                let checkboxObject = {
                    id: 'C00' + i,
                    label: this.commonUtil.getValue(checkbox),
                    value: this.commonUtil.getID(checkbox),
                    isChecked: this.fieldValue.includes(this.commonUtil.getID(checkbox)) || this.commonUtil.getID(checkbox) == 1 ? true : false,
                    maxValueDisabled: false
                };
                if (checkbox.split('||').length > 2) {
                    checkboxObject['description'] = this.commonUtil.getDescriptionOptions(checkbox);
                    checkboxObject['title'] = this.commonUtil.getTitlesOptions(checkbox);
                }
                if (checkboxObject.label.includes('((dynamic))')) {
                    checkboxObject.label = this.setDynamicLabelUtil.getDynamicValue({ field_label: checkboxObject.label }).field_label;
                }
                this.checkboxesDataList.push(checkboxObject);
            }
            this.getMaskDataOnCheckBox(this.checkboxesDataList, true);
        }
        this.maxValueCheck();
    }
    maxValueCheck() {
        if (this.additionalParameter['MaxValue']) {
            const selectedEle = this.checkboxesDataList.filter(element => element['isChecked'] === true);
            this.checkboxesDataList.forEach((element) => {
                element.maxValueDisabled = (selectedEle.length >= parseInt(this.additionalParameter['MaxValue']) && element['isChecked'] === false);
            });
        }
    }
    /**
     * abstract method that gets loaded after the field has been initialized
     */
    onViewDataInit() {
        this.extraPossibleValueStatus = (this.additionalParameter['externalApiOptionValue']) ? true : false;
        this.multipleCheckboxRender();
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        const saveFieldListValue = localStorage.getItem('saveFieldList');
        const parameters = this.fieldData.additional_parameters;
        const columnParam = parameters?.find(p => p.parameter_type?.trim() === 'ShowinColumn_no');
        this.columns = columnParam?.value ?? '1';
        if (saveFieldListValue
            && saveFieldListValue.split('|').map(str => str.trim()).includes(this.fieldData.unique_id)) {
            this.fieldValue = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        }
        else {
            // this.fieldValue = this.commonUtil.getID(this.fieldData.possible_values[0]);
            this.fieldValue = this.commonUtil.getID(this.fieldValue);
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldValue = this.rowData.value;
                    if (this.rowData.isApiResponse) {
                        this.appDataService.updateAppData(Object.assign({}, this.appData, { value: this.fieldValue }));
                    }
                }
            }
        }
        //for repeated externalApiOptionValue
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            // this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'][0];
            let position = this.rowData.position;
            this.additionalParameter['externalApiOptionValue'] = this.additionalParameter['externalApiOptionValue'].replaceAll('**', position);
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.additionalParameter['externalApiOptionValue']) {
            const handlerData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue'].split('##')[0]);
            if (handlerData && handlerData.value) {
                const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], handlerData.value);
                if (externalApiOptionValue !== null) {
                    this.multipleCheckboxRender(externalApiOptionValue);
                }
            }
        }
        // this.inputValue = this.fieldValue === '1' ? true : false;
        this.setInputValue();
        this.setValues(this.fieldValue);
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 1) {
            this.fieldValue = this.returnCheckedValues();
            this.updateFieldData(this.fieldValue);
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.checkField)
                        this.checkField.focus();
                }
                else {
                    document.getElementById(this.fieldData.html_id + '0').focus();
                }
            };
        }
        if (this.fieldValue !== null) {
            this.updateFieldData(this.fieldValue);
        }
        this.getMaskDataOnCheckBox(this.fieldData.possible_values, false);
        //console.log("checkboxesDataList", this.checkboxesDataList)
        //For Single
        this.isSingleCheckboxChecked = this.isCheckboxChecked(this.fieldValue);
    }
    getMaskDataOnCheckBox(data, fielData) {
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let checkLabelData = [];
            if (fielData) {
                data.forEach(x => {
                    let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                    let formatStr = x.label;
                    x.label = this.commonUtil.getMaskedData(formatStr, formats[0], formats[1], formats[2]);
                    checkLabelData.push(x);
                });
                this.checkboxesDataList = checkLabelData;
            }
            else {
                data.forEach(x => {
                    let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                    let formatStr = x.split('||');
                    let field_box = this.commonUtil.getMaskedData(formatStr[1], formats[0], formats[1], formats[2]);
                    checkLabelData.push(field_box);
                });
                this.fieldData.possible_values = checkLabelData;
            }
        }
    }
    /**
     * abstract method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
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
                if (this.fieldData.possible_values.length > 1) {
                    this.multipleCheckboxRender();
                    this.updateFieldData([]);
                    return;
                }
                // default value
                this.fieldValue = '';
                if (this.additionalParameter['default_value']) {
                    this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                }
                // else if (this.fieldData.possible_values.length > 0) {
                //     this.fieldValue = this.commonUtil.getID(this.fieldData.possible_values[0]);
                // } else { }
                // this.inputValue = this.fieldValue === '1' ? true : false;
                this.setInputValue();
                this.updateFieldData(this.fieldValue === '0' ? '' : this.fieldValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.checkBoxControl.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.checkBoxControl) {
                    this.checkBoxControl.control.markAsUntouched();
                    this.checkBoxControl.control.markAsPristine();
                    this.checkBoxControl.control.updateValueAndValidity();
                }
                return;
            }
        });
    }
    /**
     * abstract method called when any Custom Function event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that project needs to set specifically
     * by completing any operation on the project end.
     */
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
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            // this.inputValue = this.fieldValue === '1' ? true : false;
            this.setInputValue();
            this.updateFieldData(this.fieldValue);
            this.setValues(this.fieldValue);
        }
    }
    concatData() { }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setValues(valArr) {
        if (valArr && Array.isArray(valArr)) {
            this.checkboxesDataList.forEach((element) => {
                element.isChecked = valArr.includes(element.value);
            });
        }
        else {
            this.checkboxesDataList.forEach((element) => {
                element.isChecked = false;
            });
        }
        this.maxValueCheck();
    }
    onEnter(event, item) {
        if (event.key === 'Enter') {
            item.isChecked = !item.isChecked;
            if (this.checkboxesDataList.length > 1 || (this.extraPossibleValueStatus == true && this.checkboxesDataList.length > 0)) {
                this.fieldValue = this.returnCheckedValues();
                this.updateFieldData(this.fieldValue);
            }
            else {
                if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
                    if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                        const checkedCond = item.isChecked ? '1' : ''; // I agree
                        this.inputValue = item.isChecked;
                        this.updateFieldData(checkedCond);
                    }
                    else {
                        //For Possible Values
                        this.inputValue = this.getCheckedValue(item.isChecked);
                        this.updateFieldData(this.inputValue);
                    }
                }
                else {
                    const checkedCond = item.isChecked ? '1' : ''; // I agree
                    this.inputValue = item.isChecked;
                    this.updateFieldData(checkedCond);
                }
            }
            if (item.isChecked) {
                this.onComponentEvent('OnChecked');
            }
            else if (!item.isChecked) {
                this.onComponentEvent('OnUnchecked');
            }
            // onClick event of checkbox
            this.onComponentEvent('OnClick');
            this.onDirty();
            this.maxValueCheck();
        }
    }
    storeLastClickedValue(clickedVal, eventTarget) {
        this.checkedVal(eventTarget);
        if (this.additionalParameter['CEE_last_checked_value_api_key']) {
            let primaryFieldData = this.appData;
            primaryFieldData = {
                ...primaryFieldData, ...{
                    id: "detail_id_clicked",
                    editable: false,
                    visible: false,
                    mandatory: false,
                    value: clickedVal,
                    apiKey: this.isSingleApiKey ? this.additionalParameter['CEE_last_checked_value_api_key'] : '',
                    isValid: true,
                    responseApiKey: [],
                    requestApiKey: this.isSingleApiKey ? [] : [this.additionalParameter['CEE_last_checked_value_api_key']]
                }
            };
            this.appDataService.setAppData(primaryFieldData);
            this.onComponentEvent('OnDisplayValueClicked');
        }
    }
    checkedVal(eventTarget) {
        if (this.checkboxesDataList.length > 1 || (this.extraPossibleValueStatus == true && this.checkboxesDataList.length > 0)) {
            this.fieldValue = this.returnCheckedValues();
            this.updateFieldData(this.fieldValue);
        }
        else {
            if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
                if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                    const checkedCond = eventTarget.checked ? '1' : ''; // I agree
                    this.inputValue = eventTarget.checked;
                    this.updateFieldData(checkedCond);
                }
                else {
                    //For Possible Values
                    this.inputValue = this.getCheckedValue(eventTarget.checked);
                    this.updateFieldData(this.inputValue);
                }
            }
            else {
                const checkedCond = eventTarget.checked ? '1' : ''; // I agree
                this.inputValue = eventTarget.checked;
                this.updateFieldData(checkedCond);
            }
        }
        if (eventTarget.checked) {
            this.onComponentEvent('OnChecked');
        }
        else if (!eventTarget.checked) {
            this.onComponentEvent('OnUnchecked');
        }
        // onClick event of checkbox
        this.onComponentEvent('OnClick');
        this.onDirty();
        this.maxValueCheck();
    }
    /**
     * function that returns checked values
     * only works when the possible values are more than 1
     */
    returnCheckedValues() {
        return this.checkboxesDataList.filter((value) => {
            return value.isChecked;
        }).map((item) => {
            return item.value;
        });
    }
    /**
     * function that returns checked values
     * only works when the possible values is 1 or not present
     */
    getCheckedValue(isChecked) {
        if (isChecked) {
            if (this.additionalParameter.hasOwnProperty("CEE_StoreValueAsList") && this.additionalParameter['CEE_StoreValueAsList'] == "true") {
                return this.fieldData.possible_values.map((item) => {
                    return this.commonUtil.getID(item);
                });
            }
            else {
                return this.commonUtil.getID(this.fieldData.possible_values[0]);
            }
        }
        else {
            return "";
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                // this.inputValue = this.fieldValue === '1' ? true : false;
                this.setInputValue();
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
                this.setValues(this.fieldValue);
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
        //     'field_data.possible_values[*]': 'multipleCheckboxRender()'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         if (changeMap[value].includes('()')) {
        //             changeMap[value.split('()')[0]]();
        //         } else {
        //             this[langVal.key] = langVal.val;
        //         }
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
    validateContaint(content) {
        this.isHTMLContent = false;
        var elementArr = ["<b>", "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<div>", "<span>", "<img>"];
        elementArr.every((element) => {
            if (content.includes(element)) {
                this.isHTMLContent = true;
                return true;
            }
        });
        return this.isHTMLContent;
    }
    isCheckboxChecked(fieldValue) {
        if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
            if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                return this.commonUtil.getID(fieldValue) == '1' ? true : false;
            }
            else {
                //   console.log(fieldValue, this.fieldValue, this.inputValue)
                return this.commonUtil.getID(fieldValue) == fieldValue ? true : false;
            }
        }
        else {
            return this.commonUtil.getID(fieldValue) == '1' ? true : false;
        }
    }
    setInputValue() {
        if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
            if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                this.inputValue = this.fieldValue === '1' ? true : false;
            }
            else {
                this.inputValue = ((this.fieldValue == this.getCheckedValue(true)) ? true : false);
            }
        }
        else {
            this.inputValue = this.fieldValue === '1' ? true : false;
        }
    }
    static ɵfac = function CeeCheckboxComponent_Factory(t) { return new (t || CeeCheckboxComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCheckboxComponent, selectors: [["app-cee-checkbox"]], viewQuery: function CeeCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkBoxControl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["thenBlock", ""], ["elseBlock", ""], ["customMatTooltipCheckList", ""], ["checkField", ""], ["singleErrorMessage", ""], ["customMatTooltipCheckbox", ""], ["checkField", "", "checkBoxControl", "ngModel"], ["checkBoxControl", "ngModel"], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], ["class", "form-field", 4, "ngIf", "ngIfThen", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "form-field"], [4, "ngFor", "ngForOf"], [3, "keyup", "ngModelChange", "change", "tabIndex", "aria-label", "id", "ngModel", "disabled", "name"], ["placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModelChange", "change", "id", "ngModel", "disabled", "name"], ["class", "custom-control-label", 3, "ngStyle", "click", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", "innerHTML", 4, "ngIf"], [1, "custom-control-label", 3, "click", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle", "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text"], [4, "ngIf", "ngIfElse"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle"], [3, "change", "ngModelChange", "tabIndex", "id", "value", "ngModel", "checked", "disabled", "name"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "ngModelChange", "id", "value", "ngModel", "checked", "disabled", "name"]], template: function CeeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_Template, 11, 10, "div", 8);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatCheckboxModule, i10.MatCheckbox, FormsModule, i14.CheckboxControlValueAccessor, i14.NgControlStatus, i14.NgModel, NgbTooltipModule, i16.NgbTooltip, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: ["input[type=checkbox][_ngcontent-%COMP%]:focus-visible + label[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-checkbox', standalone: true, imports: [MatTooltipModule, MatCheckboxModule, FormsModule, NgbTooltipModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\"\r\n            *ngIf=\"(checkboxesDataList.length>1 || (extraPossibleValueStatus == true && checkboxesDataList.length>0)); then thenBlock else elseBlock\">\r\n        </div>\r\n        <ng-template #thenBlock>\r\n            <ng-container *ngFor=\"let item of checkboxesDataList; index as i; last as isLast\">  \r\n                <!-- Material checkbox -->\r\n                <!-- '$event' of mat-checkbox = '$event.target' of normal input checkbox -->\r\n                <ng-container *ngIf=\"is_material\">\r\n                    \r\n                    <div class=\"{{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <mat-checkbox #checkField [tabIndex]=\"tabIndexValue\"\r\n                            (keyup)=\"onEnter($event, item)\"\r\n                            [aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            id=\"{{html_id}}{{i}}\" [(ngModel)]=\"item.isChecked\" (change)=\"checkedVal($event)\"\r\n                            [disabled]=\"!isEditable || item.maxValueDisabled\" name=\"{{html_id}}{{i}}\">\r\n                            <label class=\"col-form-label\" *ngIf=\"validateContaint(item.label)\" [innerHTML]=\"item.label\"></label>\r\n                            <span *ngIf=\"!validateContaint(item.label)\">\r\n                                <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                            </span>\r\n                        </mat-checkbox>\r\n                    </div>                \r\n                </ng-container>\r\n\r\n                <!-- Normal Input Checkbox -->\r\n                <ng-container *ngIf=\"!is_material\">                                   \r\n                    <div class=\"custom-control custom-checkbox  {{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">                       \r\n                        <input type=\"checkbox\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\" [(ngModel)]=\"item.isChecked\"\r\n                            (change)=\"checkedVal($event.target)\" [disabled]=\"!isEditable || item.maxValueDisabled\"\r\n                            name=\"{{html_id}}{{i}}\">\r\n                      \r\n                        <label class=\"custom-control-label\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t}\" (click)=\"storeLastClickedValue(commonUtil.getID(item).value, $event.target)\"\r\n                                        *ngIf=\"!isHTML(item.label) && additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                        <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                        <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                                    </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                                        'font-family': fieldData.field_style.font_name,\r\n                                        'font-size': fieldData.field_style.font_size,\r\n                                        'font-style': fieldData.field_style.font_style,\r\n                                        'color': fieldData.field_style.font_color\r\n                                }\" *ngIf=\"!isHTML(item.label) && !additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                            </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"isHTML(item.label)\" [innerHTML]=\"item.label\"></label>\r\n                    </div>\r\n                    \r\n                </ng-container>\r\n                <ng-template #customMatTooltipCheckList >\r\n                    <div class=\"tooltip_container\">\r\n                    <strong>{{ item.title }}</strong><br/>\r\n                    <span class=\"tooltip_text\">{{ item.description }}</span><br/>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"isLast\">\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"!inputValue && isMandatory && (showErrorOnNext) && message.type == 'Mandatory'\">\r\n                                <p [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\" *ngIf=\"!inputValue && isMandatory && (showErrorOnNext)\">\r\n                            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-template>\r\n        <ng-template #elseBlock>\r\n            <ng-container *ngFor=\"let opt of fieldData.possible_values; index as i; last as isLast\">\r\n                <!-- Material checkbox -->\r\n                <!-- '$event of mat-checkbox = '$event.target' of normal input checkbox -->\r\n                <ng-container *ngIf=\"is_material\">                    \r\n                    <div\r\n                        class=\"{{ !inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <mat-checkbox #checkField [tabIndex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            id=\"{{html_id}}{{i}}\" value=\"{{commonUtil.getID(fieldValue)}}\" (change)=\"checkedVal($event)\"\r\n                            [(ngModel)]=\"inputValue\" [checked]=\"isSingleCheckboxChecked\"\r\n                            [disabled]=\"!isEditable\" name=\"{{html_id}}{{i}}\" #checkBoxControl=\"ngModel\">\r\n                            <label class=\"col-form-label\" *ngIf=\"!validateContaint(commonUtil.getValue(fieldData.possible_values[i]))\"\r\n                                [innerHTML]=\"commonUtil.getValue(fieldData.possible_values[i])\"></label>\r\n                            <span *ngIf=\"!validateContaint(commonUtil.getValue(fieldData.possible_values[i]))\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}></span></ng-container>\r\n                            </span>\r\n                        </mat-checkbox>\r\n                    </div>                   \r\n                </ng-container>\r\n\r\n                <!-- Normal Input checkbox -->\r\n                <ng-container *ngIf=\"!is_material\">\r\n                   \r\n                    <div\r\n                        class=\"custom-control custom-checkbox  {{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <input type=\"checkbox\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\" value=\"{{commonUtil.getID(fieldValue)}}\"\r\n                            (change)=\"checkedVal($event.target)\" [(ngModel)]=\"inputValue\"\r\n                            [checked]=\"isSingleCheckboxChecked\" [disabled]=\"!isEditable\"\r\n                            name=\"{{html_id}}{{i}}\" #checkBoxControl=\"ngModel\">\r\n\r\n                        <label class=\"custom-control-label\" [ngStyle]=\"{\r\n                                        'font-family': fieldData.field_style.font_name,\r\n                                        'font-size': fieldData.field_style.font_size,\r\n                                        'font-style': fieldData.field_style.font_style,\r\n                                        'color': fieldData.field_style.font_color\r\n                                }\"  (click)=\"storeLastClickedValue(commonUtil.getID(fieldValue), $event.target)\"\r\n                                *ngIf=\"!isHTML(commonUtil.getValue(fieldData.possible_values[i])) && additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                            </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"!isHTML(commonUtil.getValue(fieldData.possible_values[i])) && !additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                            <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                            <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                        </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"isHTML(commonUtil.getValue(fieldData.possible_values[i]))\"\r\n                            [innerHTML]=\"commonUtil.getValue(fieldData.possible_values[i])\"></label>\r\n                    </div>                    \r\n                </ng-container>\r\n                <ng-template #customMatTooltipCheckbox >\r\n                    <div class=\"tooltip_container\">\r\n                    <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br/>\r\n                    <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br/>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"isLast\">\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"!inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                                <p [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"!inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext)\">\r\n                            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-template>\r\n    </div>\r\n</div>\r\n", styles: ["input[type=checkbox]:focus-visible+label{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { checkBoxControl: [{
            type: ViewChild,
            args: ['checkBoxControl', { static: false }]
        }], checkField: [{
            type: ViewChild,
            args: ['checkField', { static: false }]
        }], stepId: [{
            type: Input
        }], fieldData: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCheckboxComponent, { className: "CeeCheckboxComponent", filePath: "lib\\field-components\\cee-checkbox\\cee-checkbox.component.ts", lineNumber: 29 }); })();

export { CeeCheckboxComponent };
//# sourceMappingURL=ng-cee-core-cee-checkbox.component-CzuWvf1D.mjs.map
