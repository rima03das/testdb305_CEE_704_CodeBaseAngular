import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, o as UndoRedo, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import * as i12 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i16 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
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
import '@angular/cdk/portal';
import '@angular/cdk/overlay';

const _c0 = ["radioField"];
const _c1 = (a0, a1, a2, a3) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3 });
const _c2 = a0 => ({ "color": a0 });
function CeeRadioComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeRadioComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeRadioComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeRadioComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeRadioComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    const customMatTooltipRadio_r6 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipRadio_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_2_Template, 2, 2, "span", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_4_Template, 2, 1, "span", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r4.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r4.split("||").length <= 2);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.commonUtil.getValue(opt_r4), i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-radio-button", 24, 2);
    i0.ɵɵlistener("change", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_change_1_listener() { const opt_r4 = i0.ɵɵrestoreView(_r3).$implicit; i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.checkedVal(ctx_r0.commonUtil.getID(opt_r4), radioControl_r5)); })("focus", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_focus_1_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r5)); })("blur", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_blur_1_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r5)); });
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_Template, 5, 2, "span", 9)(4, CeeRadioComponent_div_0_ng_container_7_div_3_span_4_Template, 1, 1, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeRadioComponent_div_0_ng_container_7_div_3_ng_template_5_Template, 7, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.commonUtil.getID(opt_r4))("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.commonUtil.getValue(opt_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r4)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r4)));
} }
function CeeRadioComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 21, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeRadioComponent_div_0_ng_container_7_Template_mat_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_7_div_3_Template, 7, 5, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.radioValues);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext(2).$implicit;
    const customTooltipRadio_r10 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customTooltipRadio_r10);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.commonUtil.getValue(opt_r8), ">");
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r8));
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_2_Template, 2, 2, "span", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_4_Template, 2, 1, "span", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const opt_r8 = ctx_r10.$implicit;
    const i_r12 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r8.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r8.split("||").length <= 2);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 35);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const opt_r8 = ctx_r10.$implicit;
    const i_r12 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", ctx_r0.commonUtil.getValue(opt_r8), i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r8));
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 31, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_change_2_listener() { const opt_r8 = i0.ɵɵrestoreView(_r7).$implicit; const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.checkedVal(ctx_r0.commonUtil.getID(opt_r8), radioControl_r9)); })("focus", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_focus_2_listener() { i0.ɵɵrestoreView(_r7); const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r9)); })("blur", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r7); const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r9)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_Template, 5, 11, "label", 32)(5, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_5_Template, 1, 10, "label", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeRadioComponent_div_0_ng_container_8_ng_container_1_ng_template_6_Template, 7, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-radio ", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("name", ctx_r0.html_id);
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r8));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("name", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.commonUtil.getValue(opt_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r8)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r8)));
} }
function CeeRadioComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template, 8, 15, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.radioValues);
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, " ");
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template, 2, 4, "p", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_Template, 2, 1, "div", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r13 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) && message_r13.type == "Mandatory");
} }
function CeeRadioComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeRadioComponent_div_0_ng_template_10_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeRadioComponent_div_0_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_template_10_div_0_p_1_Template, 2, 4, "p", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeRadioComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeRadioComponent_div_0_ng_template_10_div_0_Template, 2, 1, "div", 36);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext));
} }
function CeeRadioComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, item_r14.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r14.value.message_text, "");
} }
function CeeRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 9)(4, CeeRadioComponent_div_0_span_4_Template, 2, 0, "span", 10)(5, CeeRadioComponent_div_0_button_5_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵtemplate(7, CeeRadioComponent_div_0_ng_container_7_Template, 4, 3, "ng-container", 9)(8, CeeRadioComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 9)(9, CeeRadioComponent_div_0_ng_container_9_Template, 2, 1, "ng-container", 13)(10, CeeRadioComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(12, CeeRadioComponent_div_0_ng_container_12_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(13, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r15 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r15);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 12, ctx_r0.showComparisonError));
} }
class CeeRadioComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    router;
    ceeApiService;
    radioField;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    columns = 3;
    undoRedoUtil;
    inputValue = false;
    radioState = {
        touched: false,
        dirty: false
    };
    html_id = '';
    radioValues = [];
    checkValueTimeout = null;
    dynamicStyleElement;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, router, ceeApiService) {
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
        this.router = router;
        this.ceeApiService = ceeApiService;
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
        /*----------  Dynamic style for custom radio START ----------*/
        this.dynamicStyleElement = document.createElement('style');
        this.dynamicStyleElement.innerHTML = `.custom-radio .custom-control-label::before {
        width: ${this.fieldData.field_style.field_width} !important;
        height: ${this.fieldData.field_style.field_height} !important;
     }
     .custom-radio .custom-control-input:checked ~ .custom-control-label::before{
        border-color: ${this.fieldData.field_style.border_color} !important;
        background-color: ${this.fieldData.field_style.background_color} !important;
     }
     `;
        document.body.appendChild(this.dynamicStyleElement);
        /*----------  Dynamic style for custom radio END ----------*/
        const parameters = this.fieldData.additional_parameters;
        const validParameter = parameters?.find((p) => p.parameter_type === 'externalApiOptionValue');
        const columnParam = parameters?.find(p => p.parameter_type?.trim() === 'ShowinColumn_no');
        this.columns = columnParam?.value ?? '1';
        if (validParameter) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(validParameter.value));
            const externalApiOptionValue = data ? this.getExternalApiOptionValue(validParameter.value, data['value']) : null;
            if (externalApiOptionValue !== null) {
                if (Array.isArray(externalApiOptionValue)) {
                    this.fieldData.possible_values = externalApiOptionValue;
                    this.radioValues = this.fieldData.possible_values;
                }
                else {
                    console.error('Something Went Wrong in Radio !!!');
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.checkValueTimeout) {
            clearTimeout(this.checkValueTimeout);
            this.checkValueTimeout = null;
        }
        // Clear rootData reference to avoid circular references
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Remove dynamic style element
        if (this.dynamicStyleElement && this.dynamicStyleElement.parentNode) {
            this.dynamicStyleElement.parentNode.removeChild(this.dynamicStyleElement);
        }
        this.radioField = null;
        this.radioValues = null;
        this.radioState = null;
        this.undoRedoUtil = null;
        // Clear other object references
        this.rootData = null;
        this.onViewUnload();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        // END
        // if (this.userDataHandlerService.getFieldData(this.sessionKeyUtil.generateSessionKey(this.fieldData)).trim().length === 0) {
        //   this.setSessionData('');
        // }
        // this.getSessionData();
        this.radioValues = this.fieldData.possible_values;
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.fieldData.possible_values = this.rowData.value;
                    this.radioValues = this.fieldData.possible_values;
                }
                else {
                    this.fieldValue = this.commonUtil.getID(this.rowData.value);
                    this.updateFieldData(this.fieldValue);
                    this.undoRedoUtil.push(this.appData.id, this.fieldValue);
                }
            }
        }
        this.inputValue = this.fieldValue ? true : false;
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.radioField)
                        this.radioField.focus();
                }
                else {
                    if (document.getElementById(this.fieldData.html_id + '0'))
                        document.getElementById(this.fieldData.html_id + '0').focus();
                }
            };
        }
        this.getMaskDataOnRadio();
    }
    getMaskDataOnRadio() {
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let radioLabelData = [];
            this.radioValues.forEach(x => {
                let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                let formatStr = x.split('||');
                ;
                let field_box = this.commonUtil.getMaskedData(formatStr[1], formats[0], formats[1], formats[2]);
                radioLabelData.push(field_box);
            });
            this.radioValues = radioLabelData;
        }
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        let apiData = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        // if (!this.rowData) {
        // const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (Array.isArray(apiData) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiData;
                this.radioValues = this.fieldData.possible_values;
            }
            else {
                this.fieldValue = apiData;
                this.inputValue = this.fieldValue ? true : false;
                this.updateFieldData(this.fieldValue);
                this.undoRedoUtil.push(this.appData.id, this.fieldValue);
            }
        }
        // }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.radioValues = this.fieldData.possible_values;
                        }
                        else {
                            console.error('Something Went Wrong in Radio !!!');
                        }
                    }
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    concatData() { }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    setState(value) {
        this.radioState.touched !== value.touched && (this.radioState.touched = value.touched);
        this.radioState.dirty !== value.dirty && (this.radioState.dirty = value.dirty);
    }
    checkedVal(value, state) {
        if (this.checkValueTimeout) {
            clearTimeout(this.checkValueTimeout);
            this.checkValueTimeout = null;
        }
        this.checkValueTimeout = setTimeout(() => {
            this.setState(state);
            this.inputValue = value ? true : false;
            this.updateFieldData(value); // set the session value on checked
            this.undoRedoUtil.push(this.appData.id, value);
            this.undoRedoUtil.setCurrentId(this.appData.id);
            // on click event on radio
            this.onComponentEvent('OnClick', {}, true, {
                uniqueId: this.html_id,
                value
            });
            this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
            this.onDirty();
        }, 0);
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
                this.fieldValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                        }
                    }
                }
                this.inputValue = this.fieldValue ? true : false;
                this.updateFieldData(this.fieldValue);
                this.setState(false);
                this.showErrorOnNext = false;
                return;
            }
        });
    }
    handleCustomFunction(get_data) {
        // console.log('get_data', typeof get_data === 'object');
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
            this.inputValue = this.fieldValue ? true : false;
            this.updateFieldData(this.fieldValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                this.inputValue = this.fieldValue ? true : false;
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
        if (data.includes(this.fieldData.unique_id)) {
            const stateValue = this.undoRedoUtil.getPresentValue(this.fieldData.unique_id);
            const fieldValue = this.commonUtil.getID(this.fieldValue);
            if (stateValue !== null || stateValue !== undefined) {
                if (stateValue !== fieldValue) {
                    this.fieldValue = stateValue;
                    this.inputValue = this.fieldValue ? true : false;
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'radioValues'
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
    static ɵfac = function CeeRadioComponent_Factory(t) { return new (t || CeeRadioComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeRadioComponent, selectors: [["app-cee-radio"]], viewQuery: function CeeRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radioField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["singleErrorMessage", ""], ["radioControl", "ngModel"], ["radioField", ""], ["customMatTooltipRadio", ""], ["customTooltipRadio", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModelChange", "ngModel"], ["class", "mat-radio-content", 4, "ngFor", "ngForOf"], [1, "mat-radio-content"], [1, "example-radio-button", 3, "change", "focus", "blur", "value", "disabled"], [3, "innerHTML", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip"], [3, "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text"], ["type", "radio", 1, "custom-control-input", 3, "ngModelChange", "change", "focus", "blur", "name", "id", "ngModel", "value", "disabled"], ["class", "custom-control-label", 3, "for", "ngStyle", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", "innerHTML", 4, "ngIf"], [1, "custom-control-label", 3, "for", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle", "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeRadioComponent_div_0_Template, 14, 14, "div", 5);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatRadioModule, i12.MatRadioGroup, i12.MatRadioButton, NgbTooltipModule, i16.NgbTooltip, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, NgStyle, NgbModule, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: ["input[type=radio][_ngcontent-%COMP%]:focus-visible + label[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeRadioComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-radio', standalone: true, imports: [MatTooltipModule, CustomTooltipDirective, MatRadioModule, NgbTooltipModule, FormsModule, NgStyle, NgbModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\"\r\n            [tooltip]=\"fieldData.tooltip\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n                class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [customTooltip]=\"tooltipTemplate\"\r\n                [tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n                i\r\n            </button> -->\r\n\r\n            <!-- Tooltip Template -->\r\n            <!-- <ng-template #tooltipTemplate>\r\n                <div class=\"tooltip_container\">\r\n                    <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n                </div>\r\n            </ng-template> -->\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <ng-container *ngIf=\"is_material\">\r\n                <mat-radio-group [attr.tabindex]=\"tabIndexValue\" aria-labelledby=\"example-radio-group-label\"\r\n                    class=\"example-radio-group\" [(ngModel)]=\"fieldValue\" #radioControl=\"ngModel\">\r\n                    <div class=\"mat-radio-content\" *ngFor=\"let opt of radioValues; index as i; last as isLast\">\r\n                        <mat-radio-button #radioField class=\"example-radio-button\" [value]=\"commonUtil.getID(opt)\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : commonUtil.getValue(opt)\"\r\n                            (change)=\"checkedVal(commonUtil.getID(opt), radioControl)\" [disabled]=\"!isEditable\"\r\n                            (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\">\r\n                            <span *ngIf=\"!isHTML(commonUtil.getValue(opt))\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipRadio\" placement=\"top\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                            </span>\r\n                            <span *ngIf=\"isHTML(commonUtil.getValue(opt))\"\r\n                                [innerHTML]=\"commonUtil.getValue(opt)\"></span>\r\n                        </mat-radio-button>\r\n                        <ng-template #customMatTooltipRadio >\r\n                            <div class=\"tooltip_container\">\r\n                            <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br/>\r\n                            <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br/>\r\n                            </div>\r\n                        </ng-template>\r\n                    </div>\r\n                </mat-radio-group>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!is_material\">\r\n                <ng-container *ngFor=\"let opt of radioValues; index as i; last as isLast\">\r\n                    <div\r\n                        class=\"custom-control custom-radio {{ !inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <input type=\"radio\" [attr.tabindex]=\"tabIndexValue\" name=\"{{html_id}}\" [attr.name]=\"html_id\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : commonUtil.getValue(opt)\"\r\n                            [(ngModel)]=\"fieldValue\" value=\"{{commonUtil.getID(opt)}}\"\r\n                            (change)=\"checkedVal(commonUtil.getID(opt), radioControl)\" [disabled]=\"!isEditable\" #radioControl=\"ngModel\"\r\n                            (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\">\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                            'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'color': fieldData.field_style.font_color\r\n                        }\" *ngIf=\"!isHTML(commonUtil.getValue(opt))\">\r\n                            <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customTooltipRadio\"\r\n                                    placement=\"top\">{{commonUtil.getValue(opt)}}></span></ng-container>\r\n                            <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                        </label>\r\n                \r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                            'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'color': fieldData.field_style.font_color\r\n                        }\" *ngIf=\"isHTML(commonUtil.getValue(opt))\" [innerHTML]=\"commonUtil.getValue(opt)\"></label>\r\n                    </div>\r\n                    <!-- Tooltip for Radio -->\r\n                    <ng-template #customTooltipRadio>\r\n                        <div class=\"tooltip_container\">\r\n                            <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br />\r\n                            <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br />\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                <ng-container *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                        <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                            {{returnMessageData(message.code).message_text}}\r\n                        </p>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #singleErrorMessage>\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                        {{errorMessageData.message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: ["input[type=radio]:focus-visible+label{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i11.Router }, { type: CeeApiService }], { radioField: [{
            type: ViewChild,
            args: ['radioField', { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeRadioComponent, { className: "CeeRadioComponent", filePath: "lib\\field-components\\cee-radio\\cee-radio.component.ts", lineNumber: 32 }); })();

export { CeeRadioComponent };
//# sourceMappingURL=ng-cee-core-cee-radio.component-DMT3QXZY.mjs.map
