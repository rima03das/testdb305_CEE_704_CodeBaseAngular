import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, o as UndoRedo, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgStyle, NgSwitch, CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
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

const _c0 = ["textareaField"];
const _c1 = a0 => ({ "color": a0 });
function CeeTextareaComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextareaComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextareaComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeTextareaComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextareaComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTextareaComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextareaComponent_div_0_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_div_9_span_1_Template, 2, 7, "span", 22)(2, CeeTextareaComponent_div_0_div_9_span_2_Template, 2, 7, "span", 22)(3, CeeTextareaComponent_div_0_div_9_span_3_Template, 2, 6, "span", 22)(4, CeeTextareaComponent_div_0_div_9_span_4_Template, 2, 6, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", ctx_r1.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, message_r4.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r4.message_text, "");
} }
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div");
    i0.ɵɵtemplate(2, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_p_2_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r4.color && message_r4.message_text);
} }
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_Template, 3, 1, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value));
} }
function CeeTextareaComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textareaField_r3.value));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r5.type == "Mandatory" && !textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.type == "minlength" && textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.type == "Regex" && textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7)(2, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 7)(3, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.pattern);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.invalid && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value)));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessageData.message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textareaField_r3 == null ? null : textareaField_r3.errors.required) || (textareaField_r3 == null ? null : textareaField_r3.errors.minlength) || (textareaField_r3 == null ? null : textareaField_r3.errors.pattern));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 24);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.invalid && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value)));
} }
function CeeTextareaComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r6);
} }
function CeeTextareaComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25)(2, "div")(3, "p", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeTextareaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeeTextareaComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 7)(4, CeeTextareaComponent_div_0_span_4_Template, 2, 0, "span", 8)(5, CeeTextareaComponent_div_0_button_5_Template, 2, 2, "button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "textarea", 11, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextareaComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextareaComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("blur", function CeeTextareaComponent_div_0_Template_textarea_blur_7_listener() { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textareaField_r3.value)); })("paste", function CeeTextareaComponent_div_0_Template_textarea_paste_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("copy", function CeeTextareaComponent_div_0_Template_textarea_copy_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("cut", function CeeTextareaComponent_div_0_Template_textarea_cut_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("keyup", function CeeTextareaComponent_div_0_Template_textarea_keyup_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKey($event, textareaField_r3)); })("focus", function CeeTextareaComponent_div_0_Template_textarea_focus_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeTextareaComponent_div_0_div_9_Template, 5, 5, "div", 12)(10, CeeTextareaComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 13)(11, CeeTextareaComponent_div_0_ng_template_11_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(13, CeeTextareaComponent_div_0_ng_container_13_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const textareaField_r3 = i0.ɵɵreference(8);
    const ceeError_r8 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", "  ", !ctx_r1.valid || textareaField_r3.invalid && ctx_r1.isMandatory && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("pattern", ctx_r1.validationRegex);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck)("ngIfElse", ceeError_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 20, ctx_r1.showComparisonError));
} }
class CeeTextareaComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    textareaField;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    editorData = '';
    html_id = '';
    isValid = true;
    $emitKeyDown;
    undoRedoUtil;
    oldInputValue = '';
    // isEditorMode = false;
    isEditorDarty = false;
    isEditorTouched = false;
    // public Editor = ClassicEditor;
    editorOptions = {
    // toolbar: [ 'heading', '|', 'bold', 'italic' ] 
    };
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    editableStatusSubscription;
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.editableStatusSubscription = this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
            }
        });
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    //     this.unsubscribe(); // unsubscribe the event on destroy
    // }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        if (this.editableStatusSubscription) {
            this.editableStatusSubscription.unsubscribe();
        }
    }
    onKey(event, ctrl) {
        this.isValid = this.textareaField.valid;
        this.updateFieldData(ctrl.value, this.isValid);
        this.onComponentEvent('OnKeyUp');
    }
    onOverrideHandler(event, ctrl) {
        if (this.additionalParameter["Override"]) {
            let returnValue = true;
            this.additionalParameter["Override"].split('||').map((value, i) => {
                if (value.toLowerCase() == event.type) {
                    returnValue = false;
                }
            });
            return returnValue;
        }
        else {
            this.isValid = this.textareaField.valid;
            this.updateFieldData(ctrl.value, this.isValid);
            return true;
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.fieldValue ? this.fieldValue : this.inputValue;
        // if (this.rowData) {
        //     if (this.rowData.hasOwnProperty('value')) {
        //         this.updateFieldData(this.inputValue);
        //     }
        // }
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        // this.isEditorMode = this.additionalParameter['CEE_EDITOR_MODE'] && this.additionalParameter['CEE_EDITOR_MODE'].toLowerCase() == 'true' ? true : false;
        this.editorOptions = this.additionalParameter['CEE_EDITOR_OPTIONS'] ? this.additionalParameter['CEE_EDITOR_OPTIONS'] : {};
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    // public onEditorClicked() {
    //     this.isEditorTouched = true;
    //     const data = this.editorData;
    //     // console.log("man: ",this.isMandatory,"data: ",data)
    //     if(this.isMandatory && !data) {
    //         this.isValid = false;
    //         this.updateFieldData(data, this.isValid);
    //     } else {
    //         this.isValid = true;
    //         this.updateFieldData(data, this.isValid);
    //     }
    // }
    // public onEditorDataChange( { editor }: ChangeEvent ) {
    //     this.isEditorDarty = true;
    //     const data = editor.getData();
    //     this.editorData = data;
    //     this.onChange(editor);
    //     this.onEditorDataChangeProcess(data);
    // }
    // public onEditorDataChangeProcess(data) {
    //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], data), this.isValid);
    //     if(this.isMandatory && !data) {
    //         this.isValid = false;
    //         this.updateFieldData(data, this.isValid);
    //     } else {
    //         this.isValid = true;
    //         this.updateFieldData(data, this.isValid);
    //     }
    //     // trigger event list of focus out
    //     if (this.oldInputValue !== data) {
    //         this.onComponentEvent('OnChangeValue');
    //     }
    //     this.onComponentEvent('OnFocusOut');
    //     this.setModalorSanckBarMessage(this.fieldData.unique_id, data);
    //     this.onDirty();
    //     // console.log("Editor: ", data)
    //     // console.log( data );
    // }
    onFocus(event) {
        this.oldInputValue = event.target.value;
        // Unsubscribe previous subscription before creating new one
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
            this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue));
        });
    }
    onChange(newValue) {
        // console.log(newValue);
        // this.setSessionData(newValue);
    }
    onSessionDataUpdated(value) {
        this.isValid = this.textareaField.valid;
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        if (this.additionalParameter['CEE_STRING_FORMAT']) {
            this.inputValue = value = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], value);
        }
        this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], value), this.isValid);
        // trigger event list of focus out
        if (this.oldInputValue !== value) {
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnKeyUp');
        this.onComponentEvent('OnFocusOut');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onEmptySession(get_data) {
        let data = [];
        let associatedData = [];
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
        if (get_data.isAssociated) {
            if (data.some(r => unique_id_value.includes(r))) {
                const values = this.getAssociatedFields();
                if (values.includes(this.undoRedoUtil.getCurrentId())) {
                    // associatedData = new Array(unique_id_value);
                    associatedData = unique_id_value;
                }
            }
        }
        (get_data.isAssociated ? associatedData : data).forEach(elm => {
            if ((unique_id_value).includes(elm)) {
                // TODO Update
                let value = '';
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
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
                // this.textareaField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textareaField) {
                    this.textareaField.reset(value);
                    this.textareaField.control.markAsUntouched();
                    this.textareaField.control.markAsPristine();
                    this.textareaField.control.updateValueAndValidity();
                }
                return;
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
            this.updateFieldData(this.inputValue);
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let apiData = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                var valid = true;
                this.inputValue = apiData;
                if (this.inputValue && this.validationRegex) {
                    const patt = new RegExp(this.validationRegex);
                    valid = patt.test(this.inputValue);
                }
                this.updateFieldData(this.inputValue, valid);
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    concatData() { }
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
    static ɵfac = function CeeTextareaComponent_Factory(t) { return new (t || CeeTextareaComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTextareaComponent, selectors: [["app-cee-textarea"]], viewQuery: function CeeTextareaComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textareaField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["textareaField", "ngModel"], ["ceeError", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], ["type", "text", 3, "ngModelChange", "blur", "paste", "copy", "cut", "keyup", "focus", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeTextareaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_Template, 15, 22, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.RequiredValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.NgModel, NgStyle, NgSwitch, CommonModule, i13.NgForOf, i13.NgIf, i13.NgSwitchCase, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: ["textarea[_ngcontent-%COMP%]{resize:none}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTextareaComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-textarea', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, NgSwitch, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n         [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <textarea #textareaField=\"ngModel\" type=\"text\"\r\n                class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (textareaField.invalid && isMandatory && (textareaField.dirty || textareaField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"validationRegex\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                (blur)=\"onSessionDataUpdated(textareaField.value)\" [disabled]=\"!isEditable\" [required]=\"isMandatory\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" (paste)=\"onOverrideHandler($event,textareaField)\"\r\n                (copy)=\"onOverrideHandler($event,textareaField)\" (cut)=\"onOverrideHandler($event,textareaField)\" (keyup)=\"onKey($event,textareaField)\"\r\n                (focus)=\"onFocus($event)\"></textarea>\r\n\r\n            <div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n                <span *ngSwitchCase=\"'Count'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                    ? characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'Remaining'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit -\r\n                    inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                    ? characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'Total'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                    characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'CharRemaining'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit -\r\n                    inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                    characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n            </div>\r\n            <ng-container *ngIf=\"customCheck, else ceeError\">\r\n                <ng-container\r\n                    *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textareaField.value)\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"(textareaField && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value ))\">\r\n                        <div>\r\n                            <p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n                                {{message.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #ceeError>\r\n                <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                    <ng-container *ngFor=\"let message of messages\">\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"(textareaField && (textareaField.invalid && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value)))\">\r\n                            <div *ngIf=\"textareaField?.errors.required\">\r\n                                <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"textareaField?.errors.minlength\">\r\n                                <p *ngIf=\"message.type == 'minlength' && textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"textareaField?.errors.pattern\">\r\n                                <p *ngIf=\"message.type == 'Regex' && textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #singleErrorMessage>\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"(textareaField && (textareaField.invalid && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value)))\">\r\n                        <div\r\n                            *ngIf=\"textareaField?.errors.required || textareaField?.errors.minlength || textareaField?.errors.pattern\">\r\n                            <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                                {{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: ["textarea{resize:none}:host ::ng-deep .ck-editor__editable_inline{min-height:200px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { textareaField: [{
            type: ViewChild,
            args: ['textareaField']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTextareaComponent, { className: "CeeTextareaComponent", filePath: "lib\\field-components\\cee-textarea\\cee-textarea.component.ts", lineNumber: 31 }); })();

export { CeeTextareaComponent };
//# sourceMappingURL=ng-cee-core-cee-textarea.component-CPdSKLMX.mjs.map
