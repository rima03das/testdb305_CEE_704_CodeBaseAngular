import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, l as SessionKeyUtil, U as UserDataHandlerService, d as CEEInternalEmitterService, c as SharedEventsServiceService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as moment from 'moment';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbTimepicker, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import * as i11 from 'ngx-material-timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
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
import '@angular/material/checkbox';
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
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c2 = a0 => ({ fieldName: a0 });
const _c3 = a0 => ({ "color": a0 });
function CeeTimePickerComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTimePickerComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeTimePickerComponent_div_0_ng_container_9_3_ng_template_0_Template(rf, ctx) { }
function CeeTimePickerComponent_div_0_ng_container_9_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_ng_container_9_3_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTimePickerComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ngb-timepicker", 16, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.time, $event) || (ctx_r0.time = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); })("blur", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_blur_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeTimePickerComponent_div_0_ng_container_9_3_Template, 1, 0, null, 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(2);
    const errorMessage_r4 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.time);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory)("ngStyle", i0.ɵɵpureFunction8(13, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color))("seconds", ctx_r0.seconds)("hourStep", ctx_r0.timeConfig.hour)("minuteStep", ctx_r0.timeConfig.minute)("secondStep", ctx_r0.timeConfig.second)("meridian", ctx_r0.meridian);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", errorMessage_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c2, fieldName_r3));
} }
function CeeTimePickerComponent_div_0_ng_template_10_5_ng_template_0_Template(rf, ctx) { }
function CeeTimePickerComponent_div_0_ng_template_10_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_ng_template_10_5_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTimePickerComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 18, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimePickerComponent_div_0_ng_template_10_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "ngx-material-timepicker-toggle", 9);
    i0.ɵɵelementStart(3, "ngx-material-timepicker", 19, 3);
    i0.ɵɵlistener("timeSet", function CeeTimePickerComponent_div_0_ng_template_10_Template_ngx_material_timepicker_timeSet_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeTimePickerComponent_div_0_ng_template_10_5_Template, 1, 0, null, 17);
} if (rf & 2) {
    const fieldName_r6 = i0.ɵɵreference(1);
    const picker_r7 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    const errorMessage_r4 = i0.ɵɵreference(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("ngxTimepicker", picker_r7)("disabled", !ctx_r0.isEditable)("value", ctx_r0.inputValue)("format", ctx_r0.matTpFormat)("required", ctx_r0.isMandatory)("ngStyle", i0.ɵɵpureFunction8(13, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color));
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", picker_r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMessage_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c2, fieldName_r6));
} }
function CeeTimePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 9)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeTimePickerComponent_div_0_span_6_Template, 2, 0, "span", 10)(7, CeeTimePickerComponent_div_0_button_7_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵtemplate(9, CeeTimePickerComponent_div_0_ng_container_9_Template, 4, 24, "ng-container", 13)(10, CeeTimePickerComponent_div_0_ng_template_10_Template, 6, 24, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const materialInput_r8 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.matTP)("ngIfElse", materialInput_r8);
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r9.type == "Mandatory");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r9.type == "minlength");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r9.type == "Regex");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 23)(2, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 23)(3, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(3).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.pattern);
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(2).fieldName;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10.invalid && (fieldName_r10.dirty || fieldName_r10.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(2).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r10 == null ? null : fieldName_r10.errors.required) || (fieldName_r10 == null ? null : fieldName_r10.errors.minlength) || (fieldName_r10 == null ? null : fieldName_r10.errors.pattern));
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_Template, 2, 1, "div", 21);
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext().fieldName;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", fieldName_r10.invalid && (fieldName_r10.dirty || fieldName_r10.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimePickerComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 22)(2, "div")(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r11.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r11.value.message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeTimePickerComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(3, CeeTimePickerComponent_ng_template_1_ng_container_3_Template, 5, 4, "ng-container", 20);
    i0.ɵɵpipe(4, "keyvalue");
} if (rf & 2) {
    const singleErrorMessage_r12 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r12);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, ctx_r0.showComparisonError));
} }
class CeeTimePickerComponent extends BaseView {
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    fieldName;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    html_id = '';
    time = {};
    seconds = false;
    timeConfig = { hour: 1, minute: 1, second: 1 };
    meridian = false;
    matTP = true;
    dateFormat = 'h:mm A';
    apiDateFormat = 'H:mm';
    nowDate = new Date();
    matTpFormat = 12;
    constructor(userDataHandlerService, internalCEEEmitter, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.sessionKeyUtil = new SessionKeyUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        this.matTP = this.is_material;
        if (this.additionalParameter['Material UI']) {
            this.matTP = this.additionalParameter['Material UI'] === "true" ? true : false;
        }
        // END
        if (!this.matTP) {
            if (this.seconds) {
                this.time = { hour: 0, minute: 0, second: 0 };
            }
            else {
                this.time = { hour: 0, minute: 0 };
            }
            this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
                : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
            if (this.fieldValue === 'CURR_TIME') {
                const date = new Date();
                if (this.seconds) {
                    this.time = { hour: Number(date.getHours()), minute: Number(date.getMinutes()), second: Number(date.getSeconds()) };
                }
                else {
                    this.time = { hour: Number(date.getHours()), minute: Number(date.getMinutes()) };
                }
            }
            else {
                this.inputValue = this.fieldValue;
                this.time = this.getTime(this.inputValue);
            }
            this.setMinMaxTime(this.setTime(this.time));
            if (this.additionalParameter['PickerStep']) {
                const pStep = this.additionalParameter['PickerStep'].split("|").map(v => { return Number(v) ? Number(v) : 1; });
                if (pStep.length === 3) {
                    this.timeConfig.hour = pStep[0];
                    this.timeConfig.minute = pStep[1];
                    this.timeConfig.second = pStep[2];
                }
            }
        }
        else {
            if (this.additionalParameter['Date Format']) {
                this.dateFormat = this.additionalParameter['Date Format'];
            }
            if (this.additionalParameter['API Date Format']) {
                this.apiDateFormat = this.additionalParameter['API Date Format'];
            }
            if (this.dateFormat.includes('H')) {
                this.matTpFormat = 24;
            }
            else {
                this.matTpFormat = 12;
            }
            if (this.fieldValue !== undefined) {
                if (this.fieldValue === 'CURR_TIME') {
                    this.fieldValue = moment.default(this.nowDate.toISOString()).format(this.apiDateFormat);
                    this.onSessionDataUpdated(this.fieldValue);
                }
                if (this.fieldValue && this.commonUtil.isValidTimeStr(this.fieldValue, this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(this.fieldValue, this.dateFormat);
                }
            }
        }
    }
    onSessionDataUpdated(value) {
        if (!this.matTP) {
            this.updateFieldData(this.setTime(value));
            this.setMinMaxTime(this.setTime(value));
        }
        else {
            this.updateFieldData(this.commonUtil.parseTime(value, this.apiDateFormat));
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            if (!this.matTP) {
                this.inputValue = apiValue;
                this.time = this.getTime(this.inputValue);
                this.updateFieldData(this.inputValue);
            }
            else {
                if (this.commonUtil.isValidTimeStr(apiValue, this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(apiValue, this.dateFormat);
                    this.updateFieldData(apiValue);
                }
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    setState(value, inputBoxesState) {
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
    }
    concatData() { }
    getTime(time) {
        if (time) {
            const array = time.split(':');
            if (this.seconds) {
                return {
                    hour: Number(array[0]) ? Number(array[0]) : Number('00'),
                    minute: Number(array[1]) ? Number(array[1]) : Number('00'),
                    second: Number(array[2]) ? Number(array[2]) : Number('00')
                };
            }
            else {
                return {
                    hour: Number(array[0]) ? Number(array[0]) : Number('00'),
                    minute: Number(array[1]) ? Number(array[1]) : Number('00')
                };
            }
        }
        else {
            return null;
        }
    }
    setTime(timeObject) {
        // console.log(timeObject);
        if (timeObject) {
            if (this.seconds) {
                return this.getTimeVal(timeObject['hour']) + ':' + this.getTimeVal(timeObject['minute']) + ':' + this.getTimeVal(timeObject['second']);
            }
            else {
                return this.getTimeVal(timeObject['hour']) + ':' + this.getTimeVal(timeObject['minute']);
            }
        }
        else {
            return "";
        }
    }
    getTimeVal(val) {
        if (val < 10) {
            return '0' + val.toString();
        }
        else {
            return val.toString();
        }
    }
    setMinMaxTime(time) {
        if (this.additionalParameter['MinValue']) {
            const minTime = this.getTime(this.appDataService.getFieldDataByFieldId(this.additionalParameter['MinValue']));
            if (minTime && time < this.setTime(minTime)) {
                this.time = minTime;
                this.onSessionDataUpdated(minTime);
            }
        }
        if (this.additionalParameter['MaxValue']) {
            const maxTime = this.getTime(this.appDataService.getFieldDataByFieldId(this.additionalParameter['MaxValue']));
            if (maxTime && time > this.setTime(maxTime)) {
                this.time = maxTime;
                this.onSessionDataUpdated(maxTime);
            }
        }
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
                this.inputValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'default_value':
                                if (!this.matTP) {
                                    this.inputValue = paramter.value;
                                    this.time = this.getTime(this.inputValue);
                                }
                                else {
                                    let setVal = paramter.value;
                                    if (setVal === 'CURR_DATE') {
                                        setVal = moment.default(this.nowDate.toISOString()).format(this.apiDateFormat);
                                        this.onSessionDataUpdated(setVal);
                                    }
                                    if (setVal && this.commonUtil.isValidTimeStr(setVal, this.apiDateFormat)) {
                                        this.inputValue = this.commonUtil.parseTime(setVal, this.dateFormat);
                                    }
                                }
                                break;
                        }
                    }
                }
                else {
                    this.inputValue = '';
                    this.time = '';
                }
                this.updateFieldData(this.inputValue);
                if (this.fieldName) {
                    this.fieldName.reset(this.inputValue);
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
                }
            }
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
            if (!this.matTP) {
                this.inputValue = get_data[unique_id_value];
                this.time = this.getTime(this.inputValue);
                this.updateFieldData(this.inputValue);
            }
            else {
                if (this.commonUtil.isValidTimeStr(get_data[unique_id_value], this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(get_data[unique_id_value], this.dateFormat);
                    this.updateFieldData(get_data[unique_id_value]);
                }
            }
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                let setVal = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                if (!this.matTP) {
                    this.inputValue = setVal;
                    this.time = this.getTime(this.inputValue);
                    // of triggerUpdate is true then update the field value or update value and emit conditions event
                    this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                }
                else {
                    if (this.commonUtil.isValidTimeStr(setVal, this.apiDateFormat)) {
                        this.inputValue = this.commonUtil.parseTime(setVal, this.dateFormat);
                        // of triggerUpdate is true then update the field value or update value and emit conditions event
                        this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](setVal);
                    }
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
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
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
    static ɵfac = function CeeTimePickerComponent_Factory(t) { return new (t || CeeTimePickerComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTimePickerComponent, selectors: [["app-cee-time-picker"]], viewQuery: function CeeTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["errorMessage", ""], ["materialInput", ""], ["fieldName", "ngModel"], ["picker", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [3, "for"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngIf", "ngIfElse"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["maxlength", "2", 3, "ngModelChange", "blur", "ngModel", "disabled", "required", "ngStyle", "seconds", "hourStep", "minuteStep", "secondStep", "meridian"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["readonly", "", 3, "ngModelChange", "ngModel", "ngxTimepicker", "disabled", "value", "format", "placeholder", "required", "ngStyle"], [3, "timeSet"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_Template, 12, 6, "div", 5)(1, CeeTimePickerComponent_ng_template_1_Template, 5, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.MaxLengthValidator, i14.NgModel, NgbTimepicker, NgbModule, NgbTimepickerModule, NgxMaterialTimepickerModule, i11.NgxMaterialTimepickerComponent, i11.NgxMaterialTimepickerToggleComponent, i11.TimepickerDirective, CommonModule, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.KeyValuePipe, TooltipModule, TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTimePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-time-picker', standalone: true, imports: [MatTooltipModule, NgStyle, FormsModule, NgbTimepicker, NgbModule, NgbTimepickerModule, NgxMaterialTimepickerModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<label for=\"{{html_id }}\">\r\n\t\t\t\t<span>{{fieldData.field_label}}</span><span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<ng-container *ngIf=\"!matTP; else materialInput\">\r\n\t\t\t\t<!-- <ngb-timepicker [(ngModel)]=\"time\" [attr.id]=\"html_id\" (ngModelChange)=\"onSessionDataUpdated($event)\"\r\n\t\t\t\t\t(blur)=\"onSessionDataUpdated($event)\" [disabled]=\"!isEditable\" #fieldName=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\"\r\n\t\t  \t\t\tplaceholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[seconds]=\"seconds\" [hourStep]=\"timeConfig.hour\" [minuteStep]=\"timeConfig.minute\"\r\n\t\t\t\t\t[secondStep]=\"timeConfig.second\" [meridian]=\"meridian\" maxlength=\"2\"></ngb-timepicker> -->\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time\" [attr.id]=\"html_id\" (ngModelChange)=\"onSessionDataUpdated($event)\"\r\n\t\t\t\t\t(blur)=\"onSessionDataUpdated($event)\" [disabled]=\"!isEditable\" #fieldName=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[seconds]=\"seconds\" [hourStep]=\"timeConfig.hour\" [minuteStep]=\"timeConfig.minute\"\r\n\t\t\t\t\t[secondStep]=\"timeConfig.second\" [meridian]=\"meridian\" maxlength=\"2\"></ngb-timepicker>\r\n\t\t\t\t<ng-template *ngTemplateOutlet=\"errorMessage; context:{fieldName:fieldName}\"></ng-template>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #materialInput>\r\n\t\t\t\t<input #fieldName=\"ngModel\" [(ngModel)]=\"inputValue\" [ngxTimepicker]=\"picker\" [disabled]=\"!isEditable\"\r\n\t\t\t\t\t[value]=\"inputValue\" [attr.id]=\"html_id\" [format]=\"matTpFormat\" readonly  placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[required]=\"isMandatory\" [ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\">\r\n\t\t\t\t<ngx-material-timepicker-toggle [for]=\"picker\"></ngx-material-timepicker-toggle>\r\n\t\t\t\t<ngx-material-timepicker #picker (timeSet)=\"onSessionDataUpdated($event)\"></ngx-material-timepicker>\r\n\t\t\t\t<ng-template *ngTemplateOutlet=\"errorMessage; context:{fieldName:fieldName}\">\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<ng-template #errorMessage let-fieldName='fieldName'>\r\n\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext )\">\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.required\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.minlength\">\r\n\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.pattern\">\r\n\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<ng-template #singleErrorMessage>\r\n\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t<div>\r\n\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</ng-template>\r\n" }]
    }], () => [{ type: UserDataHandlerService }, { type: CEEInternalEmitterService }, { type: SharedEventsServiceService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTimePickerComponent, { className: "CeeTimePickerComponent", filePath: "lib\\field-components\\cee-time-picker\\cee-time-picker.component.ts", lineNumber: 30 }); })();

export { CeeTimePickerComponent };
//# sourceMappingURL=ng-cee-core-cee-time-picker.component-6Ms8Loh5.mjs.map
