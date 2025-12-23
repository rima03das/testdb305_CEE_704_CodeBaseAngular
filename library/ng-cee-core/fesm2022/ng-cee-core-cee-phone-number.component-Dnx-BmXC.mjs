import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, l as SessionKeyUtil, U as UserDataHandlerService, d as CEEInternalEmitterService, c as SharedEventsServiceService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import { S as ShowPasswordDirective } from './ng-cee-core-showPassword.directive-D7SZ6skZ.mjs';
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
const _c1 = ["selectField"];
const _c2 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c4 = a0 => ({ "color": a0 });
function CeePhoneNumberComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeePhoneNumberComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeePhoneNumberComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 20)(2, CeePhoneNumberComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeePhoneNumberComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeePhoneNumberComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeePhoneNumberComponent_div_0_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r3.label, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r4.type == "Mandatory" && !selectField_r5.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const selectField_r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5 == null ? null : selectField_r5.errors.required);
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5.invalid && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext));
} }
function CeePhoneNumberComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 32);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_p_1_Template, 1, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5 == null ? null : selectField_r5.errors.required);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_ng_template_15_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", selectField_r5.invalid && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext));
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r7.type == "Mandatory" && !textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength" && textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex" && textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7)(2, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_Template, 2, 1, "div", 7)(3, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors == null ? null : textField_r6.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors.pattern);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_Template, 4, 3, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6.invalid && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext || textField_r6.value));
} }
function CeePhoneNumberComponent_div_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 32);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_p_1_Template, 1, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r6 == null ? null : textField_r6.errors.required) || (textField_r6 == null ? null : textField_r6.errors.minlength) || (textField_r6 == null ? null : textField_r6.errors.pattern));
} }
function CeePhoneNumberComponent_div_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_ng_template_21_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", textField_r6.invalid && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext || textField_r6.value));
} }
function CeePhoneNumberComponent_div_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "div")(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeePhoneNumberComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeePhoneNumberComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 7)(4, CeePhoneNumberComponent_div_0_span_4_Template, 2, 0, "span", 8)(5, CeePhoneNumberComponent_div_0_button_5_Template, 2, 2, "button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "select", 13, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePhoneNumberComponent_div_0_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.ccValue, $event) || (ctx_r1.ccValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeePhoneNumberComponent_div_0_Template_select_change_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setCountryCode()); });
    i0.ɵɵelementStart(11, "option", 14);
    i0.ɵɵtext(12, "Select Country");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, CeePhoneNumberComponent_div_0_option_13_Template, 2, 2, "option", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, CeePhoneNumberComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 16)(15, CeePhoneNumberComponent_div_0_ng_template_15_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 17)(18, "input", 18, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePhoneNumberComponent_div_0_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeePhoneNumberComponent_div_0_Template_input_keyup_18_listener($event) { i0.ɵɵrestoreView(_r1); const textField_r6 = i0.ɵɵreference(19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r6)); })("blur", function CeePhoneNumberComponent_div_0_Template_input_blur_18_listener() { i0.ɵɵrestoreView(_r1); const textField_r6 = i0.ɵɵreference(19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r6.value, textField_r6)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, CeePhoneNumberComponent_div_0_ng_container_20_Template, 2, 1, "ng-container", 16)(21, CeePhoneNumberComponent_div_0_ng_template_21_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(23, CeePhoneNumberComponent_div_0_ng_container_23_Template, 5, 4, "ng-container", 19);
    i0.ɵɵpipe(24, "keyvalue");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const selectField_r5 = i0.ɵɵreference(10);
    const singleErrorMessage_r9 = i0.ɵɵreference(16);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate2("custom-select ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || selectField_r5.invalid && ctx_r1.isMandatory && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(36, _c2, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("disabled", !ctx_r1.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.ccValue);
    i0.ɵɵproperty("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", "country_" + ctx_r1.html_id)("aria-label", "Select a country code");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.countryValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || textField_r6.invalid && ctx_r1.isMandatory && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("showLastCharDelay", ctx_r1.additionalParameter["CEE_MaskNumberLimit"] === "1" ? true : false);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "10" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("pattern", ctx_r1.validationRegex)("ngStyle", i0.ɵɵpureFunction8(45, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(24, 34, ctx_r1.showComparisonError));
} }
class CeePhoneNumberComponent extends BaseView {
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    textField;
    selectField;
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
    isValid;
    countryValues = [];
    ccValueOld = '';
    ccValue = '';
    countryCodeApiKey;
    hide = false;
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
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        // END
        this.inputValue = this.fieldValue;
        this.countryValues = [];
        for (const possi of this.fieldData.possible_values) {
            const pValue = possi.split('||').map(v => v.trim());
            if (pValue.length === 3) {
                this.countryValues.push({
                    value: pValue[0],
                    label: pValue[1],
                    sync: pValue[2]
                });
            }
        }
        if (this.additionalParameter['country_code_api_key']) {
            this.countryCodeApiKey = this.additionalParameter['country_code_api_key'].split('|').map(val => val.trim());
        }
        this.syncPhoneNumber();
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            this.hide = true;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    onSessionDataUpdated(value, state) {
        this.isValid = state.valid;
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.setPhoneNumber();
    }
    onKey(event, value) {
        if (event.key === 'Tab' && value.value === '') {
            return;
        }
        this.isValid = value.valid;
        this.setPhoneNumber();
    }
    syncPhoneNumber(countryCodeValue = null) {
        let matchedCCSync = '';
        let matchedCCValue = '';
        if (countryCodeValue) {
            const tempCCV = this.countryValues.find(c => c.value === countryCodeValue);
            matchedCCSync = tempCCV ? tempCCV.sync : '';
            matchedCCValue = tempCCV ? tempCCV.value : '';
        }
        else {
            for (const key of this.countryValues) {
                const cCode = key.sync;
                if (this.inputValue.indexOf(cCode) === 0) {
                    if (matchedCCSync.length < cCode.length) {
                        matchedCCSync = cCode;
                        matchedCCValue = key.value;
                    }
                }
            }
            const dupCountryCode = this.countryValues.find(c => c.sync === matchedCCSync && c.value === this.ccValueOld && this.ccValueOld !== matchedCCValue);
            if (dupCountryCode) {
                matchedCCValue = this.ccValueOld;
            }
        }
        if (this.ccValueOld !== matchedCCValue) {
            this.ccValue = this.ccValueOld = matchedCCValue;
        }
        if (this.countryCodeApiKey && this.countryCodeApiKey[0]) {
            const apiData = {
                id: this.countryCodeApiKey[0],
                apiUrl: '',
                apiKey: this.countryCodeApiKey[0],
                value: this.ccValue
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
        const pnValue = this.inputValue.replace(new RegExp('^' + this.commonUtil.escapeRegExp(matchedCCSync)), '');
        if (this.additionalParameter['phone_number_api_key']) {
            const apiData = {
                id: this.additionalParameter['phone_number_api_key'],
                apiUrl: '',
                apiKey: this.additionalParameter['phone_number_api_key'],
                value: pnValue
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    }
    setPhoneNumber(countryCodeValue = null) {
        this.onDirty();
        this.syncPhoneNumber(countryCodeValue);
        this.updateFieldData(this.ccValue && this.additionalParameter['country_code_api_key'] ? this.inputValue : "", this.isValid);
        this.onComponentEvent('OnKeyUp');
    }
    setCountryCode() {
        if (this.ccValueOld.length && this.inputValue.indexOf(this.getSyncValue(this.ccValueOld)) === 0) {
            this.inputValue = this.inputValue.replace(this.getSyncValue(this.ccValueOld), this.getSyncValue(this.ccValue));
        }
        else {
            this.inputValue = this.getSyncValue(this.ccValue) + this.inputValue;
        }
        this.setPhoneNumber(this.ccValue);
    }
    getSyncValue(countryCodeValue = null) {
        const tempCCV = this.countryValues.find(c => c.value === countryCodeValue);
        return tempCCV ? tempCCV.sync : '';
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            var valid = true;
            if (apiValue && this.validationRegex) {
                const patt = new RegExp(this.validationRegex);
                valid = patt.test(apiValue);
            }
            this.inputValue = apiValue;
            let countryCodeValue = null;
            if (this.countryCodeApiKey && this.countryCodeApiKey.length === 2) {
                countryCodeValue = this.setApiCallBackDataUtil.setApiCallBackData(this.countryCodeApiKey[1], data);
            }
            this.syncPhoneNumber(countryCodeValue);
            this.updateFieldData(this.inputValue, valid);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(apiKey, value);
    }
    concatData() { }
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
                // default value
                this.inputValue = this.additionalParameter['default_value'] ? this.additionalParameter['default_value'] : '';
                this.syncPhoneNumber();
                this.updateFieldData(this.inputValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textField) {
                    this.textField.reset(this.inputValue);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
                }
                if (this.selectField) {
                    this.selectField.reset(this.ccValue);
                    this.selectField.control.markAsUntouched();
                    this.selectField.control.markAsPristine();
                    this.selectField.control.updateValueAndValidity();
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
            this.inputValue = get_data[unique_id_value];
            this.syncPhoneNumber();
            this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
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
    }
    static ɵfac = function CeePhoneNumberComponent_Factory(t) { return new (t || CeePhoneNumberComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeePhoneNumberComponent, selectors: [["app-cee-phone-number"]], viewQuery: function CeePhoneNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["selectField", "ngModel"], ["singleErrorMessage", ""], ["textField", "ngModel"], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "row"], [1, "col-3"], [3, "ngModelChange", "change", "ngStyle", "disabled", "ngModel", "required"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "col-9"], ["showPassword", "", 3, "ngModelChange", "keyup", "blur", "type", "showLastCharDelay", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [3, "value"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"]], template: function CeePhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_Template, 25, 54, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.NgModel, NgStyle, ShowPasswordDirective, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeePhoneNumberComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-phone-number', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, ShowPasswordDirective, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\ti\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t<select\r\n\t\t\t\t\t\tclass=\"custom-select {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (selectField.invalid && isMandatory && (selectField.dirty || selectField.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t#selectField=\"ngModel\" [attr.id]=\"'country_'+html_id\" [ngStyle]=\"{\r\n          'font-family': fieldData.field_style.font_name,\r\n          'font-size': fieldData.field_style.font_size,\r\n          'font-style': fieldData.field_style.font_style,\r\n          color: fieldData.field_style.font_color,\r\n          'border-color': fieldData.field_style.border_color,\r\n          height: fieldData.field_style.field_height,\r\n          width: fieldData.field_style.field_width,\r\n          'background-color': fieldData.field_style.background_color }\" [disabled]=\"!isEditable\" [(ngModel)]=\"ccValue\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"'Select a country code'\" [required]=\"isMandatory\" (change)=\"setCountryCode()\">\r\n\t\t\t\t\t\t<option value=\"\" disabled>Select Country</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let opt of countryValues\" value=\"{{opt.value}}\">\r\n\t\t\t\t\t\t\t{{opt.label}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"selectField.invalid && (selectField.dirty || selectField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"selectField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !selectField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"selectField.invalid && (selectField.dirty || selectField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"selectField?.errors.required\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-9\">\r\n\t\t\t\t\t<input type=\"{{ hide ? 'password':'text' }}\" showPassword showLastCharDelay=\"{{additionalParameter['CEE_MaskNumberLimit'] === '1' ? true : false}}\"\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [pattern]=\"validationRegex\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t'font-color': fieldData.field_style.font_color,\r\n\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t'height': fieldData.field_style.field_height,\r\n\t\t\t\t'width': fieldData.field_style.field_width,\r\n\t\t\t\t'background-color': fieldData.field_style.background_color }\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '10': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" (keyup)=\"onKey($event, textField)\"\r\n\t\t\t\t\t\t(blur)=\"onSessionDataUpdated(textField.value, textField)\" [disabled]=\"!isEditable\" #textField=\"ngModel\"\r\n\t\t\t\t\t\t[required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\" />\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value)\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>" }]
    }], () => [{ type: UserDataHandlerService }, { type: CEEInternalEmitterService }, { type: SharedEventsServiceService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { textField: [{
            type: ViewChild,
            args: ['textField']
        }], selectField: [{
            type: ViewChild,
            args: ['selectField']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeePhoneNumberComponent, { className: "CeePhoneNumberComponent", filePath: "lib\\field-components\\cee-phone-number\\cee-phone-number.component.ts", lineNumber: 26 }); })();

export { CeePhoneNumberComponent };
//# sourceMappingURL=ng-cee-core-cee-phone-number.component-Dnx-BmXC.mjs.map
