import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, l as SessionKeyUtil, a as CommonUtil, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { take } from 'rxjs/operators';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgTemplateOutlet, NgStyle, CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i15 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
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

const _c0 = ["textField"];
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c2 = a0 => ({ "color": a0 });
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_1_Template, 2, 1, "label", 15)(2, CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeNumberComponent_div_0_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeNumberComponent_div_0_ng_template_3_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-slider", 21)(2, "input", 22, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.valueChange()); })("keyup", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onKeyUp()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"])("step", ctx_r0.AdditionalParameter["CEE_STEPPER_SLIDER"])("displayWith", ctx_r0.formatLabel);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", " ", !ctx_r0.valid || textField_r3.invalid && ctx_r0.isMandatory && (textField_r3.dirty || textField_r3.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r0.fieldData.field_character_limit == "0" ? "1000" : ctx_r0.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Type a value in " + ctx_r0.fieldData.field_label)("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"]);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 23);
    i0.ɵɵlistener("click", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.isEditable && ctx_r0.decrement()); });
    i0.ɵɵtext(2, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_input_keyup_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onKeyUp()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 25);
    i0.ɵɵlistener("click", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.isEditable && ctx_r0.increment()); });
    i0.ɵɵtext(6, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r5 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", " ", !ctx_r0.valid || textField_r5.invalid && ctx_r0.isMandatory && (textField_r5.dirty || textField_r5.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r0.fieldData.field_character_limit == "0" ? "1000" : ctx_r0.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(14, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Type a value in " + ctx_r0.fieldData.field_label)("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"]);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, message_r6.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r6.message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div");
    i0.ɵɵtemplate(2, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_p_2_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r6.color && message_r6.message_text);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_Template, 3, 1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.customErrorsValidation.getMessages(ctx_r0.appData.id, ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r7.type == "Mandatory" && !ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength" && ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex" && ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 9)(2, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 9)(3, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors == null ? null : ctx_r0.textField.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors.pattern);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField.invalid && (ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 31);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("innerHTML", ctx_r0.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.errorMessageData.color));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.textField == null ? null : ctx_r0.textField.errors.required) || (ctx_r0.textField == null ? null : ctx_r0.textField.errors.minlength) || (ctx_r0.textField == null ? null : ctx_r0.textField.errors.pattern));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_Template, 2, 1, "div", 26);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r0.textField.invalid && (ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "div")(3, "p", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, item_r9.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r9.value.message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵtemplate(2, CeeNumberComponent_div_0_ng_template_3_ng_container_2_Template, 3, 2, "ng-container", 9)(3, CeeNumberComponent_div_0_ng_template_3_span_3_Template, 2, 0, "span", 10)(4, CeeNumberComponent_div_0_ng_template_3_button_4_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵtemplate(6, CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template, 4, 17, "ng-container", 9)(7, CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template, 7, 23, "ng-container", 9)(8, CeeNumberComponent_div_0_ng_template_3_ng_container_8_Template, 2, 1, "ng-container", 13)(9, CeeNumberComponent_div_0_ng_template_3_ng_template_9_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(11, CeeNumberComponent_div_0_ng_template_3_ng_container_11_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(12, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ceeError_r10 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] && ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] || ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] && ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] != "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.customCheck && ctx_r0.messages.length === 0)("ngIfElse", ceeError_r10);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 8, ctx_r0.showComparisonError));
} }
function CeeNumberComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelementContainer(2, 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(3, CeeNumberComponent_div_0_ng_template_3_Template, 13, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const textFieldData_r11 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r11);
} }
class CeeNumberComponent extends BaseView {
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
    textField;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    sessionKeyUtil;
    inputValue = '';
    html_id = '';
    AdditionalParameter = {};
    isSet = false;
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
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? Number(this.fieldValue).toString() : '';
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    decrement() {
        if ((this.AdditionalParameter['Min'] && Number(this.inputValue) > Number(this.AdditionalParameter['Min'])) || !this.AdditionalParameter['Min']) {
            this.inputValue = (Number(this.inputValue) - 1).toString();
            this.updateFieldData(this.inputValue);
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnClick');
    }
    increment() {
        if ((this.AdditionalParameter['Max'] && Number(this.inputValue) < Number(this.AdditionalParameter['Max'])) || !this.AdditionalParameter['Max']) {
            this.inputValue = (Number(this.inputValue) + 1).toString();
            this.updateFieldData(this.inputValue);
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnClick');
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    valueChange() {
        this.onKeyUp();
    }
    onKeyUp() {
        // console.log("onkey up inputValue: ",this.inputValue)
        if (this.AdditionalParameter['Max'] && Number(this.inputValue) > Number(this.AdditionalParameter['Max'])) {
            this.inputValue = Number(this.AdditionalParameter['Max']).toString();
        }
        if (this.AdditionalParameter['Min'] && Number(this.inputValue) < Number(this.AdditionalParameter['Min'])) {
            this.inputValue = Number(this.AdditionalParameter['Min']).toString();
        }
        this.updateFieldData(this.inputValue);
        this.onComponentEvent('OnKeyUp');
        this.onComponentEvent('OnChangeValue');
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
                let concatedStrings;
                for (let i = 0; i < res.concatValues.length; i++) {
                    if (localStorage.getItem('singleApiKey') === 'true') {
                        concatArrays.push(this.appDataService.getFieldDataByFieldId(res.concatValues[i]));
                    }
                    else {
                        concatArrays.push(this.appDataService.getFieldDataByApiKey(res.concatValues[i], 'request'));
                    }
                }
                concatedStrings = concatArrays.join(' ');
                this.appDataService.updateAppData(Object.assign({}, data, { visible: data.visible, editable: data.editable, mandatory: data.mandatory, value: concatedStrings }));
                this.inputValue = concatedStrings;
            }
        }
    };
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                this.inputValue = Number(apiData).toString();
                this.updateFieldData(this.inputValue);
            }
        }
    }
    onSetSessionData(apiKey, value) {
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
                let value = '';
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
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textField) {
                    this.textField.reset(value);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
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
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // console.log('Data', data);
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
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
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
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
    static ɵfac = function CeeNumberComponent_Factory(t) { return new (t || CeeNumberComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeNumberComponent, selectors: [["app-cee-number"]], viewQuery: function CeeNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["textFieldData", ""], ["ceeError", ""], ["textField", "ngModel"], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [3, "ngTemplateOutlet"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field", "number-wrapper"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["showTickMarks", "", "discrete", "", 3, "min", "max", "step", "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "keyup", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "number-down", "btn", "btn-primary", 3, "click"], ["type", "number", 3, "ngModelChange", "keyup", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "number-up", "btn", "btn-primary", 3, "click"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"]], template: function CeeNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeNumberComponent_div_0_Template, 5, 1, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgTemplateOutlet, MatTooltipModule, NgStyle, FormsModule, i14.DefaultValueAccessor, i14.NumberValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.MaxLengthValidator, i14.NgModel, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective, MatSliderModule, i15.MatSlider, i15.MatSliderThumb], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.number-wrapper[_ngcontent-%COMP%]{position:relative;width:150px}.number-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:45px;padding-right:45px;text-align:center}.number-wrapper[_ngcontent-%COMP%]   .number-down[_ngcontent-%COMP%], .number-wrapper[_ngcontent-%COMP%]   .number-up[_ngcontent-%COMP%]{position:absolute;width:35px;font-weight:700}.number-wrapper[_ngcontent-%COMP%]   .number-up[_ngcontent-%COMP%]{right:0;top:0}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeNumberComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-number', standalone: true, imports: [NgTemplateOutlet, MatTooltipModule, NgStyle, FormsModule, CommonModule, TooltipModule, MatSliderModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<ng-container>\r\n\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-template #textFieldData>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\t\ti\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-field number-wrapper\">\r\n\t\t\t\t<ng-container *ngIf=\"AdditionalParameter['CEE_ENABLE_SLIDER'] && AdditionalParameter['CEE_ENABLE_SLIDER'] == 'true'\">\r\n\t\t\t\t\t<mat-slider [min]=\"AdditionalParameter['Min']\" [max]=\"AdditionalParameter['Max']\" [step]=\"AdditionalParameter['CEE_STEPPER_SLIDER']\" showTickMarks discrete [displayWith]=\"formatLabel\">\r\n\t\t\t\t\t\t<input matSliderThumb\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" (ngModelChange)=\"valueChange()\" [disabled]=\"!isEditable\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t\tplaceholder=\"{{fieldData.placeholder_text}}\" [attr.min]=\"AdditionalParameter['Min']\"\r\n\t\t\t\t\t\t[attr.max]=\"AdditionalParameter['Max']\" (keyup)=\"onKeyUp()\">\r\n\t\t\t\t\t</mat-slider>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"!AdditionalParameter['CEE_ENABLE_SLIDER'] || (AdditionalParameter['CEE_ENABLE_SLIDER'] && AdditionalParameter['CEE_ENABLE_SLIDER'] != 'true')\">\r\n\t\t\t\t\t<button class=\"number-down btn btn-primary\" (click)=\"isEditable && decrement()\">-</button>\r\n\t\t\t\t\t<input type=\"number\"\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t'font-color': fieldData.field_style.font_color,\r\n\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t'height': fieldData.field_style.field_height,\r\n\t\t\t\t\t\t'width': fieldData.field_style.field_width,\r\n\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t}\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" [disabled]=\"!isEditable\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t\tplaceholder=\"{{fieldData.placeholder_text}}\" [attr.min]=\"AdditionalParameter['Min']\"\r\n\t\t\t\t\t\t[attr.max]=\"AdditionalParameter['Max']\" (keyup)=\"onKeyUp()\" />\r\n\t\t\t\t\t<button class=\"number-up btn btn-primary\" (click)=\"isEditable && increment()\">+</button>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField.value)\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"( textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t\t\t\t\t\t{{message.message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #ceeError>\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value)\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n</div>\r\n", styles: ["input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.number-wrapper{position:relative;width:150px}.number-wrapper input{width:100%;padding-left:45px;padding-right:45px;text-align:center}.number-wrapper .number-down,.number-wrapper .number-up{position:absolute;width:35px;font-weight:700}.number-wrapper .number-up{right:0;top:0}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }], { textField: [{
            type: ViewChild,
            args: ['textField']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeNumberComponent, { className: "CeeNumberComponent", filePath: "lib\\field-components\\cee-number\\cee-number.component.ts", lineNumber: 32 }); })();

export { CeeNumberComponent };
//# sourceMappingURL=ng-cee-core-cee-number.component-BBnOui2F.mjs.map
