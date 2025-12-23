import * as i0 from '@angular/core';
import { Component, HostListener, ViewChild, Input } from '@angular/core';
import { j as BaseView, i as AlertModalComponent, U as UserDataHandlerService, c as SharedEventsServiceService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, p as FileUploadService, d as CEEInternalEmitterService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import moment__default from 'moment';
import { take } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13$1 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import * as i13 from 'ngx-image-compress';
import { NgxImageCompressService } from 'ngx-image-compress';
import heic2any from 'heic2any';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import 'tslib';
import '@datorama/akita';
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

const _c0 = ["file"];
const _c1 = a0 => ({ "clickable": a0 });
const _c2 = a0 => ({ "color": a0 });
function CeeAttachmentsComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAttachmentsComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeAttachmentsComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16)(3, CeeAttachmentsComponent_div_0_ng_container_3_span_3_Template, 2, 0, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAttachmentsComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_4_label_1_Template, 2, 1, "label", 15)(2, CeeAttachmentsComponent_div_0_ng_container_4_label_2_Template, 1, 1, "label", 16)(3, CeeAttachmentsComponent_div_0_ng_container_4_span_3_Template, 2, 0, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeAttachmentsComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const file_r4 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r4.click()); });
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.onAnchorClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldLable, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldLable);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r5); i0.ɵɵnextContext(); const file_r4 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r4.click()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.selectFileText, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template, 2, 1, "div", 29)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_4_Template, 2, 1, "div", 9)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template, 2, 1, "label", 30);
    i0.ɵɵelementStart(6, "input", 31, 1);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template_input_click_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("ngClass", ctx_r0.dragAreaClass);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.uploadMode == "all" || ctx_r0.uploadMode == "") && !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "input", 37);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.selectFileText);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.singleFileUploadAction()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.files.length > 0 ? "Replace" : "Upload");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template, 8, 7, "div", 23)(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template, 5, 5, "div", 24)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template, 2, 2, "button", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass == "dragarea" || ctx_r0.dragAreaClass == "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass != "dragarea" && ctx_r0.dragAreaClass != "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); i0.ɵɵnextContext(); const file_r12 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r12.click()); });
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.onAnchorClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldLable, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldLable);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r13); i0.ɵɵnextContext(); const file_r12 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r12.click()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.selectFileText, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template, 2, 1, "div", 29)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_4_Template, 2, 1, "div", 9)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template, 2, 1, "label", 30);
    i0.ɵɵelementStart(6, "input", 42, 1);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template_input_click_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("ngClass", ctx_r0.dragAreaClass);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.uploadMode == "all" || ctx_r0.uploadMode == "") && !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.html_id)("multiple", ctx_r0.isMultiple)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "input", 43);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("multiple", ctx_r0.isMultiple)("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.selectFileText);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r8); const files_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleClick(files_r9)); });
    i0.ɵɵelement(2, "input", 41, 2);
    i0.ɵɵtemplate(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template, 8, 8, "div", 23)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template, 5, 6, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass == "dragarea" || ctx_r0.dragAreaClass == "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass != "dragarea" && ctx_r0.dragAreaClass != "droparea");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_Template, 5, 3, "ng-container", 9)(2, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template, 6, 3, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isListView && ctx_r0.isSingleUploader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isListView && !ctx_r0.isSingleUploader);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("alt", "Custom File Icon for ", selectedFile_r15.file.type, "");
    i0.ɵɵproperty("src", ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage, i0.ɵɵsanitizeUrl);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r16 = i0.ɵɵnextContext(2); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleAction(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r0.clickable_filename));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.file.name, " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "input", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(selectedFile_r15.newName, $event) || (selectedFile_r15.newName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenameInput($event, selectedFile_r15)); })("paste", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenamePaste($event, selectedFile_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵtwoWayProperty("ngModel", selectedFile_r15.newName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedFile_r15.originalExtension);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 65);
} if (rf & 2) {
    const metaItem_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", metaItem_r20.label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_label_2_Template, 1, 1, "label", 64);
    i0.ɵɵelement(3, "span", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metaItem_r20 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-title", metaItem_r20.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", metaItem_r20.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", metaItem_r20.value, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_Template, 4, 3, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", "metadata-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", selectedFile_r15.custom);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_progress_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "progress", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.progress, "% ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "clear")); });
    i0.ɵɵtext(1, "Clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "upload")); });
    i0.ɵɵtext(1, "Upload");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_progress_1_Template, 2, 2, "progress", 66)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template, 2, 1, "button", 67)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template, 2, 1, "button", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "reset")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-reset selected-file-reset-", i_r18, " btn btn-info");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["reset_label"] ? ctx_r0.AdditionalParameter["CEE_reset_label"] : "Reset", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "update")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-update selected-file-update-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["CEE_update_label"] ? ctx_r0.AdditionalParameter["CEE_update_label"] : "Update", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "rename")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-rename selected-file-rename-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["CEE_rename_label"] ? ctx_r0.AdditionalParameter["CEE_rename_label"] : "Edit", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "remove")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-remove selected-file-remove-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["remove_label"] ? ctx_r0.AdditionalParameter["remove_label"] : "Remove", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-preview selected-file-preview-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["preview_label"] ? ctx_r0.AdditionalParameter["preview_label"] : "Preview", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "download")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-download selected-file-download-", i_r18, " btn btn-primary");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["download_label"] ? ctx_r0.AdditionalParameter["download_label"] : "Download", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template, 2, 4, "button", 72)(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template, 2, 4, "button", 72)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template, 2, 4, "button", 72)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template, 2, 4, "button", 72)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template, 2, 4, "button", 72)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template, 2, 4, "button", 72);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].preview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].canDownload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_img_3_Template, 1, 3, "img", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 51);
    i0.ɵɵtemplate(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template, 2, 7, "span", 52)(6, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template, 4, 5, "div", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_Template, 2, 2, "div", 54);
    i0.ɵɵelementStart(8, "div", 55);
    i0.ɵɵtemplate(9, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_Template, 4, 3, "ng-container", 56)(10, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_Template, 6, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const uploadedActions_r29 = i0.ɵɵreference(11);
    const ctx_r16 = i0.ɵɵnextContext();
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "document-info-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "file-icon-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "file-name-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.custom && selectedFile_r15.custom.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "action-buttons-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.uploaded)("ngIfElse", uploadedActions_r29);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r16 = i0.ɵɵnextContext(2); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleAction(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r0.clickable_filename));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(selectedFile_r15.file.name);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "input", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(selectedFile_r15.newName, $event) || (selectedFile_r15.newName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenameInput($event, selectedFile_r15)); })("paste", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenamePaste($event, selectedFile_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵtwoWayProperty("ngModel", selectedFile_r15.newName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedFile_r15.originalExtension);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 65);
} if (rf & 2) {
    const metaItem_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", metaItem_r32.label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_label_2_Template, 1, 1, "label", 64);
    i0.ɵɵelement(3, "span", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metaItem_r32 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-title", metaItem_r32.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", metaItem_r32.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", metaItem_r32.value, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("alt", "Custom File Icon for ", selectedFile_r15.file.type, "");
    i0.ɵɵproperty("src", ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage, i0.ɵɵsanitizeUrl);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_progress_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "progress", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.progress, "% ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "clear")); });
    i0.ɵɵtext(1, "Clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "upload")); });
    i0.ɵɵtext(1, "Upload");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_progress_1_Template, 2, 2, "progress", 74)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template, 2, 1, "button", 67)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template, 2, 1, "button", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "reset")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-reset selected-file-reset-", i_r18, " btn btn-info");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["reset_label"] ? ctx_r0.AdditionalParameter["CEE_reset_label"] : "Reset");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "update")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-update selected-file-update-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["CEE_update_label"] ? ctx_r0.AdditionalParameter["CEE_update_label"] : "Update");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "rename")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-rename selected-file-rename-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["CEE_rename_label"] ? ctx_r0.AdditionalParameter["CEE_rename_label"] : "Edit");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "remove")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-remove selected-file-remove-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["remove_label"] ? ctx_r0.AdditionalParameter["remove_label"] : "Remove");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-preview selected-file-preview-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["preview_label"] ? ctx_r0.AdditionalParameter["preview_label"] : "Preview");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "download")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-download selected-file-download-", i_r18, " btn btn-primary");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["download_label"] ? ctx_r0.AdditionalParameter["download_label"] : "Download");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template, 2, 4, "button", 72)(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template, 2, 4, "button", 72)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template, 2, 4, "button", 72)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template, 2, 4, "button", 72)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template, 2, 4, "button", 72)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template, 2, 4, "button", 72);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].preview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].canDownload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template, 2, 7, "span", 52)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template, 4, 5, "div", 53)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_Template, 4, 3, "ng-container", 14)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_img_4_Template, 1, 3, "img", 50)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_Template, 4, 3, "ng-container", 56)(6, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const otherAction_r41 = i0.ɵɵreference(7);
    const selectedFile_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", selectedFile_r15.custom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.uploaded)("ngIfElse", otherAction_r41);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_Template, 12, 10, "div", 46)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_Template, 8, 6, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (!ctx_r0.isSingleUploader || ctx_r0.isSingleUploader && selectedFile_r15.uploaded) && ctx_r0.fieldData.isAttachmentBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (!ctx_r0.isSingleUploader || ctx_r0.isSingleUploader && selectedFile_r15.uploaded) && !ctx_r0.fieldData.isAttachmentBlock);
} }
function CeeAttachmentsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_Template, 3, 2, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.files)("ngForTrackBy", ctx_r0.trackByFile);
} }
function CeeAttachmentsComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fieldData.placeholder_text, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r42.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r42.code).message_text, "");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_1_p_1_Template, 2, 4, "p", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r42.type == "Mandatory" && ctx_r0.files.length <= 0);
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r42.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r42.code).message_text, "");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_2_p_1_Template, 2, 4, "p", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r42.type == ctx_r0.errorType);
} }
function CeeAttachmentsComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_1_Template, 2, 1, "div", 77)(2, CeeAttachmentsComponent_div_0_ng_container_12_div_2_Template, 2, 1, "div", 77);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.errorType);
} }
function CeeAttachmentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_3_Template, 4, 3, "ng-container", 9)(4, CeeAttachmentsComponent_div_0_ng_container_4_Template, 4, 3, "ng-container", 9)(5, CeeAttachmentsComponent_div_0_button_5_Template, 2, 2, "button", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtemplate(7, CeeAttachmentsComponent_div_0_ng_container_7_Template, 3, 2, "ng-container", 9);
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵtemplate(9, CeeAttachmentsComponent_div_0_div_9_Template, 2, 2, "div", 13)(10, CeeAttachmentsComponent_div_0_ng_template_10_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeAttachmentsComponent_div_0_ng_container_12_Template, 3, 2, "ng-container", 14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const placeHolder_r43 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "" && ctx_r0.isCameraMode == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "" && ctx_r0.files.length > 0 && ctx_r0.isCameraMode == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isCameraInput && !ctx_r0.isCameraMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.files.length > 0)("ngIfElse", placeHolder_r43);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
class CeeAttachmentsComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    fileUploadService;
    ceeInternalEmitter;
    imageCompress;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    metaFields = [];
    metadataFields = {};
    fileUploads = {};
    files = [];
    AdditionalParameter = {};
    uploadMore = true;
    autoUpload = false;
    uploadedCount = 0;
    totalCount = 0;
    totalSize = 0;
    html_id = '';
    fileInput;
    payLoad = {
        type: 'file',
        fileData: {}
    };
    fieldLabels = [];
    errorType = ''; // set the type of the error message e.g: file_type, individual_file_size, total_file_size
    customKey = '';
    preDefineMimeType = {
        csv: 'text/csv',
        heic: 'image/heic',
        heif: 'image/heif',
    };
    preDefineMimeTypeCheck = {
        csv: ['', 'application/vnd.ms-excel'],
        heic: ['', 'image/heic'],
        heif: ['', 'image/heif'],
    };
    dragAreaClass = 'plain-upload';
    uploadMode = '';
    fieldLable = '';
    isFieldLableHTML = false;
    encrypted = window.sessionStorage.getItem('CEE_Encrypt') &&
        (window.sessionStorage.getItem('CEE_Encrypt_Values') || '').includes('user_attachments') ? true : false;
    // fileUploadEmitter: Subscription;
    selectFileText = '';
    isSingleUploader = false;
    hasUploadedData = false;
    singleUploadFileData;
    isAttachmentInModal = false;
    isMultiple = false;
    isCameraMode = false;
    isCameraInput = false;
    errorMsgBox = false;
    isRename = false;
    previewDirectly = false;
    previewDirectlyInNewTab = false;
    clickable_filename = false;
    rbPosition = 0;
    constructor(userDataHandlerService, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, ceeInternalEmitter, imageCompress) {
        super(userDataHandlerService, sharedEventsService, ceeInternalEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.fileUploadService = fileUploadService;
        this.ceeInternalEmitter = ceeInternalEmitter;
        this.imageCompress = imageCompress;
    }
    ngOnInit() {
        this.variableObject['emitForEmptySession_' + this.fieldData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            if (res) {
                this.onEmptySession(res);
            }
        });
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        // For repeatable block, if rowData is present, set the position
        if (this.rowData) {
            this.rbPosition = this.rowData.position ? this.rowData.position : 0;
        }
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    trackByFile(index, file) {
        return file?.id || file?.name || index; // something uniquely identifying the file
    }
    clearFileInput() {
        // Reset the file input value
        if (this.fileInput) {
            this.fileInput.nativeElement.value = '';
        }
    }
    onDragOver(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnd(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDrop(event) {
        if (this.uploadMode == "all" || this.uploadMode == "drag_drop") {
            // console.log("event:",event)
            this.dragAreaClass = "dragarea";
            event.preventDefault();
            event.stopPropagation();
            if (event.dataTransfer.files) {
                //   let files: FileList = event.dataTransfer.files;
                this.handleFileInput(event, event.dataTransfer.files);
            }
        }
    }
    onPaste(event) {
        if (this.uploadMode == "all" || this.uploadMode == "copy_paste") {
            const data = localStorage.getItem('pasteid');
            if (data && data != this.fieldData.unique_id) {
                // console.log("paste id not match", data, this.fieldData.unique_id)
                localStorage.removeItem('pasteid');
                return;
            }
            else {
                if (event && event.clipboardData && event.clipboardData.files.length > 0) {
                    var result = Object.keys(event.clipboardData.files).map((key) => event.clipboardData.files[key]);
                    this.handleFileInput(event, result);
                }
            }
        }
    }
    handleClick(input) {
        const clickedId = input.id;
        //console.log('Clicked element ID:', clickedId);
        localStorage.setItem('pasteid', clickedId);
    }
    ngOnDestroy() {
        this.onViewUnload();
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        // if (this.fileUploadEmitter) {
        //     this.fileUploadEmitter.unsubscribe();
        // }
    }
    // handle click from html element and open file input dialog
    onAnchorClick(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
        }
    }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        if (this.AdditionalParameter['CEE_UPLOAD_MODE'] && this.AdditionalParameter['CEE_UPLOAD_MODE'] != '') {
            this.uploadMode = this.AdditionalParameter['CEE_UPLOAD_MODE'];
            if (this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'] && this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'] != "") {
                this.fieldLable = this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'];
                this.isFieldLableHTML = this.isHTML(this.fieldLable);
            }
            else {
                if (this.uploadMode.toLowerCase() == 'all' || this.uploadMode.toLowerCase() == '') {
                    this.fieldLable = 'Drag / paste files here';
                }
                else if (this.uploadMode.toLowerCase() == 'copy_paste') {
                    this.fieldLable = 'paste files here';
                }
                else if (this.uploadMode.toLowerCase() == 'drag_drop') {
                    this.fieldLable = 'Drag files here';
                }
            }
        }
        if (this.AdditionalParameter['clickable_filename'] === "true") {
            this.clickable_filename = true;
        }
        this.dragAreaClass = (this.uploadMode.toLowerCase() == 'all' || this.uploadMode.toLowerCase() == 'copy_paste' || this.uploadMode.toLowerCase() == 'drag_drop') ? 'dragarea' : 'plain-upload';
        // console.log("this.dragAreaClass: ",this.dragAreaClass, " -- ", this.uploadMode.toLowerCase())
        if (this.fieldData.attachment && this.fieldData.attachment.length == 2 &&
            this.fieldData.attachment[1] && this.fieldData.attachment[1] > 1) {
            this.isMultiple = true;
        }
        this.isSingleUploader = (this.AdditionalParameter['singleUploader'] === "true") ? true : false;
        this.autoUpload = (this.AdditionalParameter['AutoUpload'] === "true") ? true : false;
        this.selectFileText = (this.AdditionalParameter['selectFileText']) ? this.AdditionalParameter['selectFileText'] : "Select a file";
        this.isAttachmentInModal = (this.AdditionalParameter['AttachmentInModal'] && this.AdditionalParameter['AttachmentInModal'].toLowerCase() == 'true') ? true : false;
        for (const [i, possibleValue] of this.fieldData.possible_values.entries()) {
            const values = possibleValue.split('|');
            if (values.length == 6) {
                const obj = {
                    id: `${this.fieldData.html_id}-${i}`,
                    type: values[0],
                    iconImage: values[1],
                    size: Number(values[2]),
                    count: Number(values[3]),
                    preview: values[4] == 'true',
                    canDownload: values[5] == 'true'
                };
                this.fileUploads = { ...this.fileUploads, ...{ [obj.type]: obj } };
            }
            else {
                console.error(`Something is wrong in the configuration for ${possibleValue}`);
            }
        }
        // set the default payLoad
        if (this.isSingleApiKey) {
            this.payLoad.fileData.apiKey = this.fieldData.api_key;
        }
        else {
            this.payLoad.fileData.apiKey = this.fieldData.request_api_key;
        }
        // set custom key if the api key is blank
        if (!this.payLoad.fileData.apiKey) {
            this.customKey = 'FILE_UPLOAD_DATA';
        }
        // for upload set attachment path
        if (this.AdditionalParameter.AttachmentPathname) {
            this.payLoad.fileData.attachmentPath = this.getName(this.AdditionalParameter.AttachmentPathname, '', /\{(.*?)\}/g);
        }
        // set the attachment data on init
        if ((!this.rowData || !this.rowData.hasOwnProperty('value') || !Array.isArray(this.rowData.value))
            && this.fieldValue && typeof this.fieldValue !== 'string') {
            Promise.resolve(this.setAttachmentData(this.fieldValue));
        }
        if (this.additionalParameter['ShowProgress'] && this.additionalParameter['ShowProgress'].toLowerCase() === 'true') {
            this.sharedEventsService.httpProgressEmitter.subscribe(httpProgress => {
                for (let i = 0; i < this.files.length; i++) {
                    const file = this.files[i];
                    if (file.uId === httpProgress.uId) {
                        file.progress = httpProgress.progress;
                    }
                }
            });
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.hasUploadedData = true;
                    this.isListView = this.rowData.fromField && this.rowData.fromField === 'List' ? true : false;
                    this.setAttachmentData(this.rowData.value);
                    this.updateAttachments('', this.html_id, this.rowData.value);
                }
            }
            if (this.rootData && this.rootData['repeatable-' + this.fieldData.unique_id] && this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id]) {
                this.files = this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id];
            }
        }
        if (this.additionalParameter['CameraId']) {
            this.isCameraMode = true;
            this.rootData[this.additionalParameter['CameraId']] = (val) => {
                this.isCameraMode = false;
                this.isCameraInput = true;
                this.files = [val];
                this.uploadMore = false;
                const fileObj = val.file;
                const fileData = this.fileUploads[fileObj.type];
                this.autoUpload = val.autoUpload;
                this.setFileData(fileObj, fileData);
                if (this.autoUpload === true) {
                    const i = this.files.length - 1;
                    const selectedFile = this.files[i];
                    this.action(selectedFile, i, 'upload');
                }
            };
        }
        if (this.additionalParameter['editorId']) {
            this.rootData[this.additionalParameter['editorId']] = (val) => {
                this.files = [val];
                this.uploadMore = false;
                const fileObj = val.file;
                const fileData = this.fileUploads[fileObj.type];
                this.autoUpload = val.autoUpload;
                this.setFileData(fileObj, fileData);
                if (this.autoUpload === true) {
                    const i = this.files.length - 1;
                    const selectedFile = this.files[i];
                    this.action(selectedFile, i, 'upload');
                }
            };
        }
        // For Previewing using Signed URL
        if (this.additionalParameter.hasOwnProperty('CEE_PreviewWithURL')) {
            this.previewDirectly = this.additionalParameter['CEE_PreviewWithURL'] == "true" ? true : false;
        }
        // For Previewing File in New Tab
        if (this.additionalParameter.hasOwnProperty('CEE_Preview_InNewTab')) {
            this.previewDirectlyInNewTab = this.additionalParameter['CEE_Preview_InNewTab'] == "true" ? true : false;
        }
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    onSessionDataUpdated(value, state) { }
    convertReadableCSVFile(file) {
        const ext = file.name?.split('.').pop()?.toLowerCase();
        if (file && file.size > 0 && this.preDefineMimeType[ext] && this.preDefineMimeTypeCheck[ext].includes(file.type)) {
            file = new File([file], file.name, { type: this.preDefineMimeType[ext] });
        }
        return file;
    }
    checkValidation(event) {
        if (this.metaFields.length > 0) {
            const checkValidation = this.checkValidateANDCheckMandatory({ mandatory: true, valid: true });
            if (!checkValidation) {
                this.sharedEventsService.showMandatoryErrorMsg.emit({ fields: [], type: 'click' });
            }
            return checkValidation;
        }
        return true;
    }
    checkValidateANDCheckMandatory({ mandatory, valid }) {
        const allStepData = this.appDataService.getAllAppStoreData();
        for (const fieldData of this.metaFields) {
            if (fieldData.field_type != 'label') {
                const field = allStepData.find(i => i.id === fieldData.unique_id);
                if (mandatory && field.mandatory && this.checkEmpty.isEmpty(field.value)) {
                    return false;
                }
                if (valid && !field.isValid) {
                    return false;
                }
            }
        }
        return true;
    }
    showFileSelectError(event, errType) {
        // Added this condition to filter out the invalid files when Regex or invalid_file_extension error occurs
        if (errType == "invalid_file_extension") {
            this.files = this.files.filter(file => file.uploaded);
        }
        this.setModalorSanckBarMessage(this.html_id, this.files, errType);
        this.errorType = errType;
        this.emptyFileData();
        if (event.target) {
            event.target.value = ''; // Clear the input value
        }
    }
    /**
     * function that selects the file and
     * upload the file if and when minimum requirements are met
     */
    handleFileInput = async (event, files) => {
        this.errorType = '';
        // if multiUploader, check for total size and total no of files else return
        if (!this.isSingleUploader) {
            const sizeLimit = this.fieldData.attachment[0] ? this.fieldData.attachment[0] * 1024 : Number.MAX_SAFE_INTEGER; // Convert KB to Bytes
            const countLimit = (this.fieldData.attachment[1] && this.fieldData.attachment[1] !== "") ? this.fieldData.attachment[1] : Number.MAX_SAFE_INTEGER;
            const anyLimitExceeded = this.totalCount >= countLimit || this.totalSize >= sizeLimit;
            if (anyLimitExceeded || !files[0]) {
                this.showFileSelectError(event, 'total_file_size');
                return;
            }
        }
        let emptyFDflag = false;
        for (const file of files) {
            const fileObj = this.convertReadableCSVFile(file);
            const fileData = this.fileUploads[fileObj.type];
            const fileName = file['name'];
            // Allow only filenames with exactly one dot (e.g., abc.pdf)
            const dotCount = (fileName.match(/\./g) || []).length;
            if (dotCount !== 1) {
                this.showFileSelectError(event, 'invalid_file_extension');
                return;
            }
            // Block dangerous extensions
            const disallowedExtensions = ['exe', 'js', 'html', 'htm', 'svg', 'php', 'aspx', 'jsp', 'bat', 'sh'];
            const fileExtension = fileName.split('.').pop()?.toLowerCase();
            if (disallowedExtensions.includes(fileExtension)) {
                this.showFileSelectError(event, 'invalid_file_extension');
                return;
            }
            if (this.fieldData.validation_regex && file['name']) {
                const patt = new RegExp(this.fieldData.validation_regex);
                let valid = patt.test(file['name']);
                if (!valid) {
                    this.showFileSelectError(event, 'Regex');
                    return;
                }
            }
            if (!fileData) {
                this.showFileSelectError(event, 'file_type');
                return;
            }
            const isFileTypeValid = fileData.type.toLowerCase() == fileObj.type.toLowerCase();
            const isFileSizeValid = fileData.size == -1 || fileObj.size <= (fileData.size * 1024);
            const isFileCountValid = fileData.count == -1 || this.getTotalCount(fileData.type) <= fileData.count;
            if (isFileTypeValid && isFileSizeValid && isFileCountValid) {
                // single file upload
                if (this.isSingleUploader) {
                    this.selectFileText = event.target.value;
                    if (this.AdditionalParameter.Attachmentfixes) {
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getfixes(this.AdditionalParameter.Attachmentfixes, file[0], this.getTotalCount(fileData.type));
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        this.emptyFileData();
                    }
                    else if (this.AdditionalParameter.AttachmentFilename) {
                        // check for the file name as concatenation of api keys
                        /**
                         * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
                         * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
                         * * here first searching would be done using FileName
                         * * and TimeStamp then need to check if there are any apiKey
                         * * then join
                         */
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getName(this.AdditionalParameter.AttachmentFilename, file[0], /\{(.*?)\}/g);
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        this.emptyFileData();
                    }
                    else {
                        this.setFileData(fileObj, fileData);
                        this.emptyFileData();
                    }
                }
                else { // multiple file upload
                    // check for the file name as open as modal
                    if (this.AdditionalParameter.PromptFilename) {
                        const id = `addNameModal-${fileData.id}`;
                        if (!this.isAttachmentInModal) {
                            this.dialog.closeAll();
                        }
                        const dialogRef = this.dialog.open(AlertModalComponent, {
                            data: {
                                type: 'AttachmentNameModal',
                                value: this.AdditionalParameter.PromptFilename,
                                config: {
                                    disableClose: true,
                                    id
                                }
                            },
                            id
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            if (result) {
                                const oldFile = fileObj;
                                const newFile = new File([oldFile], result, { type: oldFile.type });
                                this.setFileData(newFile, fileData);
                            }
                            emptyFDflag = true;
                        });
                    }
                    else if (this.AdditionalParameter.AttachmentFilename) {
                        // check for the file name as concatenation of api keys
                        /**
                         * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
                         * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
                         * * here first searching would be done using FileName
                         * * and TimeStamp then need to check if there are any apiKey
                         * * then join
                         */
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getName(this.AdditionalParameter.AttachmentFilename, file[0], /\{(.*?)\}/g);
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        emptyFDflag = true;
                    }
                    else if (this.AdditionalParameter.Attachmentfixes) {
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getfixes(this.AdditionalParameter.Attachmentfixes, file[0], this.getTotalCount(fileData.type));
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        emptyFDflag = true;
                    }
                    else {
                        this.setFileData(fileObj, fileData);
                        emptyFDflag = true;
                    }
                }
            }
            else {
                this.showFileSelectError(event, 'individual_file_size');
                return;
            }
        }
        if (this.AdditionalParameter.Attachmentfixes) {
            const fileCount = this.files.length;
            if (fileCount > 0) {
                let maxCounter = 0;
                let allFiles = [...this.files];
                // Get previous files if defined
                let previousFiles = [];
                const hasPrevious = this.AdditionalParameter?.CEE_PREVIOUS_COUNT;
                const fileKeyName = this.AdditionalParameter?.CEE_FILE_KEY_NAME || 'name'; // Fallback to 'name'
                if (hasPrevious) {
                    const prev = this.getDataByHandlerOrApiKey(hasPrevious);
                    if (prev && Array.isArray(prev) && prev.length > 0) {
                        previousFiles = prev;
                        allFiles = [...allFiles, ...prev];
                    }
                }
                // Find highest counter from all files with (n) suffix
                allFiles.forEach(f => {
                    const fileName = f?.file?.name || f?.[fileKeyName];
                    if (typeof fileName === 'string') {
                        const match = fileName.match(/\((\d+)\)\.[a-zA-Z0-9]+$/);
                        if (match) {
                            const num = Number(match[1]);
                            if (num > maxCounter)
                                maxCounter = num;
                        }
                    }
                });
                let counter = maxCounter;
                // Decide whether to rename the 0th file based on previous file existence
                const startIndex = previousFiles.length > 0 ? 0 : 1;
                for (let i = startIndex; i < fileCount; i++) {
                    const originalFile = this.files[i].file;
                    const originalName = originalFile?.name;
                    if (!originalFile || !originalName)
                        continue;
                    const lastDot = originalName.lastIndexOf('.');
                    const baseName = originalName.substring(0, lastDot);
                    const extension = originalName.substring(lastDot);
                    const alreadyHasParenCounter = /\(\d+\)$/.test(baseName);
                    if (!alreadyHasParenCounter) {
                        counter++;
                        // Remove any existing (n) before adding a new one
                        const cleanedBaseName = baseName.replace(/\(\d+\)$/, '');
                        const newName = `${cleanedBaseName} (${counter})${extension}`;
                        const renamedFile = new File([originalFile], newName, { type: originalFile.type });
                        this.files[i].file = renamedFile;
                    }
                }
            }
        }
        if (this.autoUpload) {
            if (this.isSingleUploader) {
                await this.singleFileUploadAction();
            }
            else {
                for (let i = 0; i < this.files.length; i++) {
                    const selectedFile = this.files[i];
                    if (!selectedFile.uploaded) {
                        await this.action(selectedFile, i, 'upload');
                    }
                }
            }
        }
        if (emptyFDflag) {
            this.emptyFileData();
        }
        this.clearFileInput();
    };
    getDataByHandlerOrApiKey(handlerOrApiKey) {
        if (!handlerOrApiKey?.includes('##'))
            return [];
        const results = [];
        const keys = handlerOrApiKey
            .split('|')
            .map(k => k.trim())
            .filter(k => k.includes('##'));
        for (let key of keys) {
            if (key.includes('*')) {
                key = key.replace('*', this.rowData?.position ?? 0);
            }
            const [handlerKey, pathRaw] = key.split('##');
            const handlerData = this.apiDataService.getApiDataByHandler(handlerKey);
            if (!handlerData?.value || typeof handlerData.value !== 'object')
                continue;
            // Create a nested object from flat keys
            const nested = {};
            for (const flatKey in handlerData.value) {
                if (!flatKey.startsWith(`${handlerKey}##`))
                    continue;
                const strippedKey = flatKey.replace(`${handlerKey}##`, '');
                setNestedValue(nested, strippedKey, handlerData.value[flatKey]);
            }
            // Use the raw path to reach the nested array (e.g., data[0].document_types[1].draft_documents)
            const targetArray = resolvePath(nested, pathRaw);
            if (Array.isArray(targetArray)) {
                results.push(...targetArray);
            }
        }
        return results;
        // Converts flat key with [index] and dots into nested structure
        function setNestedValue(obj, path, value) {
            const parts = path.replace(/\[(\d+)]/g, '.$1').split('.');
            let current = obj;
            for (let i = 0; i < parts.length - 1; i++) {
                const part = parts[i];
                if (!(part in current)) {
                    const nextPart = parts[i + 1];
                    current[part] = /^\d+$/.test(nextPart) ? [] : {};
                }
                current = current[part];
            }
            current[parts[parts.length - 1]] = value;
        }
        // Traverses the nested object using the path (e.g., data[0].document_types[1].draft_documents)
        function resolvePath(obj, path) {
            const parts = path.replace(/\[(\d+)]/g, '.$1').split('.');
            return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
        }
    }
    /**
     * method returns the name based on the configuration
     * @param originalName the original name from where
     * @param fileName the file name of the file
     * @param regex the regex from which the dynamic variables needs to be extracted
     * @returns the result name
     */
    getName(originalName, fileName, regex) {
        let result = originalName;
        const matched = originalName.match(new RegExp(regex));
        if (matched) {
            for (const name of matched) {
                let val = '';
                switch (name.toLowerCase()) {
                    case '{filename}':
                        val = fileName;
                        break;
                    case '{yyyymmddhhmmss}':
                    case '{timestamp}':
                        val = String(new Date().getTime());
                        break;
                    default:
                        if (name.includes('##')) {
                            const values = name.match(new RegExp(/[^{}]+/g));
                            const key = values ? values[0] : name;
                            const handlerData = this.apiDataService.getApiDataByHandler(key.split('##')[0]);
                            val = handlerData ? handlerData.value[key] : '';
                        }
                        else {
                            const apiData = this.apiDataService.getApiDataByApiKey(name);
                            val = apiData ? apiData.value : '';
                        }
                        break;
                }
                result = result.split(name).join(val);
            }
        }
        return result;
    }
    /**
     * Stores the file in memory
     * @param file the current file
     * @param fileData the IFileData object
     */
    setFileData(file, fileData) {
        // add total count and total size
        // if only one file upload then just replace the file else push in an array.
        const newBlankFile = { rename: false, uploaded: false, progress: null, uId: Date.now().toString(), attachmentId: '', attachmentPath: '', url: '', custom: [], file };
        for (const metaItem of Object.keys(this.metadataFields)) {
            newBlankFile[metaItem] = '';
        }
        if (this.isSingleUploader) {
            this.singleUploadFileData = newBlankFile;
        }
        else if (Array.isArray(this.files)) {
            if (this.fieldData.attachment && this.fieldData.attachment.length == 2 &&
                (this.fieldData.attachment[0] && this.fieldData.attachment[1]) &&
                (this.fieldData.attachment[1] == 1)) {
                if (this.files.length) {
                    this.files[0] = newBlankFile;
                }
                else {
                    this.files = [newBlankFile];
                }
            }
            else {
                this.files = [...this.files, newBlankFile];
                // this.files.push(newBlankFile);
            }
            this.setTotalSizeAndCount(file.size, 1);
        }
        this.errorType = "file_not_uploaded";
        this.updateAttachmentAppData(false);
        if (this.rootData['repeatable-' + this.fieldData.unique_id]) {
            this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id] = this.files;
        }
    }
    /**
     * Empty the field input after the
     * file gets uploaded
     */
    emptyFileData() {
        // const elm: any = document.querySelector(`#${this.html_id}`);
        // elm.value = '';
        try {
            // Escape the special characters in the selector
            const escapedSelector = CSS.escape(this.html_id);
            // Now use querySelector with the escaped selector
            const element = document.querySelector(`#${escapedSelector}`);
            if (element) {
                element.value = '';
            }
            else {
                console.log("Element not found");
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
    /**
     * set the total count of uploaded files
     * @param size the size of the current uploaded or removed file
     * @param count the count of the current uploaded or removed file
     */
    setTotalSizeAndCount(size, count) {
        if (size) {
            this.totalSize = this.totalSize + size;
        }
        if (count) {
            this.totalCount = this.totalCount + count;
        }
    }
    /**
     * function to get the total count of files for each file type
     * @param fileType the current chosen file type
     */
    getTotalCount(fileType) {
        let totalNumberOfFiles = 0;
        if (this.files.length) {
            totalNumberOfFiles = this.files.reduce((accumulator, currentValue) => Number(accumulator) + (currentValue.file.type == fileType ? 1 : 0), 0);
        }
        else {
            totalNumberOfFiles = totalNumberOfFiles + 1;
        }
        return totalNumberOfFiles;
    }
    removePercentSymbols = (str) => {
        return str.replace(/%/g, ""); // Remove all % symbols
    };
    // Function to check if a string starts with %
    startsWithPercent = (str) => {
        return str.startsWith("%");
    };
    getDynamicValueFromApiKey(value) {
        let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(value)));
        const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(value), data['value']);
        return val ? val : '';
    }
    /**
     * Returns a string based on the fixInput, supporting repeatable blocks.
     * For repeatable blocks, if the handler returns an array, it will use the value at the current row index (primaryKeyIndex).
     */
    getFixesString(fixInput) {
        const names = fixInput.split('|');
        let result = '';
        let value = '';
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            const startsWithPercent = this.startsWithPercent(name);
            if (name && !startsWithPercent) {
                value = `${name}`;
            }
            else if (name && startsWithPercent) {
                let handler = this.commonUtil.getHandlerName(this.removePercentSymbols(name));
                const tmpData = this.apiDataService.getApiDataByHandler(handler);
                let tmpVal = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(name), tmpData?.['value']);
                // Handle repeatable block: if tmpVal is array, use rbPosition if available
                if (Array.isArray(tmpVal)) {
                    // Use rbPosition if available, otherwise join all
                    if (typeof this.rbPosition === 'number' && tmpVal[this.rbPosition] !== undefined) {
                        value = `${tmpVal[this.rbPosition]}`;
                    }
                    else {
                        value = tmpVal.map(item => (typeof item === 'string' ? item : JSON.stringify(item))).join('_');
                    }
                }
                else {
                    value = tmpVal ? `${tmpVal}` : '';
                }
            }
            if (name) {
                if (!result.endsWith('_'))
                    result += value.endsWith('_') ? value : '_' + value;
                else
                    result += value;
            }
        }
        // Remove leading/trailing underscores and collapse multiple underscores
        return result.replace(/_+/g, '_').replace(/^_+|_+$/g, '');
    }
    getfixes(fixName, fileName, count) {
        let result = fileName;
        let value = '';
        result = this.getFixesString(fixName);
        result = result.replace(/_+/g, '_').replace(/^_+|_+$/g, '');
        return result;
    }
    /**
    * method returns the prefix and suffix based on the configuration
    * @returns the result prefix and suffix
    */
    getfixes_old(fixName, fileName, count) {
        // Split the fixName into prefix, suffix, firstname, lastname, and commitment
        const [prefix, suffix, firstname, lastname, commitment] = fixName.split("|");
        // Initialize the result with the original fileName
        let result = fileName;
        if (prefix && !this.startsWithPercent(prefix)) {
            result = `${prefix}`;
        }
        if (prefix && this.startsWithPercent(prefix)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(prefix)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(prefix), data['value']);
            result = val ? `${val}` : '';
        }
        // If either firstname or lastname is provided, replace the result with "firstname_lastname" (or just one if only one exists)
        if ((firstname && !this.startsWithPercent(firstname)) || (lastname && !this.startsWithPercent(lastname))) {
            result = [firstname, lastname].filter(Boolean).join("_"); // Join non-empty values with underscore
        }
        if ((firstname && this.startsWithPercent(firstname)) || (lastname && this.startsWithPercent(lastname))) {
            // If firstname or lastname starts with %, fetch dynamic data from API
            const dynamicFirstName = firstname && this.startsWithPercent(firstname)
                ? this.getDynamicValueFromApiKey(firstname)
                : firstname;
            const dynamicLastName = lastname && this.startsWithPercent(lastname)
                ? this.getDynamicValueFromApiKey(lastname)
                : lastname;
            // Use the dynamic values (or original values if no %)
            let firstLastName = [dynamicFirstName, dynamicLastName].filter(Boolean).join("_");
            result = firstLastName ? `${result}_${firstLastName}` : result;
            console.log('result***', result);
        }
        // Add prefix if it exists
        // Add commitment if it exists
        if (commitment && !this.startsWithPercent(commitment)) {
            result = `${result}_${commitment}`;
        }
        if (commitment && this.startsWithPercent(commitment)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(commitment)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(commitment), data['value']);
            result = val ? `${result}_${val}` : result;
        }
        // Add suffix if it exists
        if (suffix && !this.startsWithPercent(suffix)) {
            result = `${result}_${suffix}`;
        }
        if (suffix && this.startsWithPercent(suffix)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(suffix)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(suffix), data['value']);
            result = val ? `${result}_${val}` : result;
        }
        if (count >= 0) {
            result = `${result}_${this.totalCount + 1}`;
        }
        return result;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    convertImageToPDF(file, index) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve();
                return;
            }
            // Check if the file is HEIC format and convert it first
            if (file.name.toLowerCase().endsWith(".heic") || file.type === 'image/heic') {
                this.convertHEICToPDF(file, index).then(resolve).catch(reject);
                return;
            }
            // Handle regular image formats
            this.processImageToPDF(file, index).then(resolve).catch(reject);
        });
    }
    convertHEICToPDF(file, index) {
        return new Promise((resolve, reject) => {
            heic2any({
                blob: file,
                toType: "image/png",
            }).then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                // Process the converted PNG file to PDF
                this.processImageToPDF(pngFile, index).then(resolve).catch(reject);
            }).catch((error) => {
                console.error("Error converting HEIC to PNG for PDF conversion:", error);
                // Fallback: try to process the original file anyway
                this.processImageToPDF(file, index).then(resolve).catch(reject);
            });
        });
    }
    processImageToPDF(file, index) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    try {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        // Define max width based on A4 size while maintaining aspect ratio
                        const pageWidth = 210; // A4 width in mm
                        const pageHeight = 297; // A4 height in mm
                        const margin = 10; // Margins on each side
                        let imgWidth = pageWidth - 2 * margin; // Max width within margins
                        let imgHeight = (img.height * imgWidth) / img.width; // Maintain aspect ratio
                        // If image height exceeds the page height, scale it down
                        if (imgHeight > pageHeight - 2 * margin) {
                            imgHeight = pageHeight - 2 * margin;
                            imgWidth = (img.width * imgHeight) / img.height; // Adjust width accordingly
                        }
                        // Set canvas size to match the adjusted image size
                        canvas.width = imgWidth * 4; // Increase resolution for better quality
                        canvas.height = imgHeight * 4;
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        // Compress image using lower quality setting
                        const compressedImg = canvas.toDataURL('image/jpeg', 0.8); // 80% quality
                        // Create PDF with original HEIC filename but .pdf extension
                        const originalFileName = this.files[index]?.file?.name || file.name;
                        const pdfFileName = originalFileName.replace(/\.(heic|png|jpg|jpeg|gif|bmp|webp)$/i, '.pdf');
                        const pdf = new jsPDF('p', 'mm', 'a4'); // .setProperties({ title: pdfFileName });
                        pdf.addImage(compressedImg, 'JPEG', margin, margin, imgWidth, imgHeight, '', 'FAST');
                        const pdfBlob = pdf.output('blob');
                        const pdfFile = new File([pdfBlob], pdfFileName, { type: 'application/pdf' });
                        this.payLoad.fileData.attachmentName = pdfFile.name;
                        this.payLoad.fileData.fileSize = pdfFile.size;
                        this.payLoad.fileData.file = pdfFile;
                        this.files[index].file = pdfFile;
                        resolve();
                    }
                    catch (error) {
                        reject(error);
                    }
                };
                img.onerror = () => {
                    const error = new Error(`Error loading image for PDF conversion: ${file.name}`);
                    console.error(error.message);
                    reject(error);
                };
            };
            reader.onerror = () => {
                const error = new Error(`Error reading file for PDF conversion: ${file.name}`);
                console.error(error.message);
                reject(error);
            };
        });
    }
    // Function to convert Base64 string to Blob and trigger download
    base64ToFile(base64String, mimeType, fileName) {
        // Remove data URL scheme if present
        const base64Data = base64String.replace(/^data:.+;base64,/, '');
        const byteCharacters = atob(base64Data); // Decode Base64 string
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });
        return blob;
    }
    compressedImage = "";
    compressImage(file, index) {
        if (!file)
            return;
        // If uploaded file size is smaller then skip compression 
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImage_IfSizeExceedsInKB") && this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"] !== "") {
            const imageSize = Number(this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"].match(/\d+/));
            //console.log(file)
            if ((file.size / 1000) < imageSize) {
                return;
            }
        }
        const settings = {
            orientation: 1,
            ratio: 50,
            quality: 50
        };
        // for orientation
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Orientation") && this.additionalParameter["CEE_CompressImg_Orientation"] !== "") {
            settings.orientation = this.additionalParameter["CEE_CompressImg_Orientation"];
        }
        // for ratio
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_AspectRatio") && this.additionalParameter["CEE_CompressImg_AspectRatio"] !== "") {
            settings.ratio = this.additionalParameter["CEE_CompressImg_AspectRatio"];
        }
        // for quality
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Quality") && this.additionalParameter["CEE_CompressImg_Quality"] !== "") {
            settings.quality = this.additionalParameter["CEE_CompressImg_Quality"];
        }
        // for maxWidth
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxHeight") && this.additionalParameter["CEE_CompressImg_maxHeight"] !== "") {
            settings.maxWidth = this.additionalParameter["CEE_CompressImg_maxHeight"];
        }
        // for maxHeight
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxWidth") && this.additionalParameter["CEE_CompressImg_maxWidth"] !== "") {
            settings.maxHeight = this.additionalParameter["CEE_CompressImg_maxWidth"];
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        //console.log("Before Compression : " + file.size)
        reader.onload = () => {
            this.imageCompress.compressFile(reader.result, settings.orientation, settings.ratio, settings.quality, settings.maxWidth, settings.maxHeight).then((result) => {
                //console.log('Compressed image: ', result);  // Base64 compressed image
                this.compressedImage = result;
                const image = new File([this.base64ToFile(result, file.type, file.name)], file.name, { type: file.type });
                this.payLoad.fileData.attachmentName = image.name;
                this.payLoad.fileData.fileSize = image.size;
                this.payLoad.fileData.file = image;
                this.files[index].file = image;
                //console.log("After Compression : " + image.size)
            }).catch(error => {
                console.log(error);
            });
        };
    }
    showPreviewDialog(url, fileData, index) {
        const id = `previewModal-${fileData.name.toLowerCase().replace(/[^a-zA-Z]|\s/g, '_')}-${index}`, dialogRef = this.dialog.open(AlertModalComponent, {
            data: {
                type: 'PreviewModal',
                value: url,
                config: {
                    disableClose: false,
                    id
                },
                fileType: (fileData.type.includes('image')) ? 'image' : 'doc',
                title: fileData.name
            }, id,
            panelClass: 'previewModal-panel'
        });
        dialogRef.afterOpened().subscribe(() => {
            this.commonUtil.moveMatDialogToStepModalIfExist();
        });
        dialogRef.afterClosed().subscribe(result => {
            this.commonUtil.moveMatDialogToBody();
        });
        return dialogRef;
    }
    handleAction(item, index, type) {
        if (this.clickable_filename) {
            this.action(item, index, type);
        }
    }
    // Open URL in a new browser tab
    openUrlInNewTab(url) {
        window.open(url, '_blank');
    }
    /**
     * the function is basically the actions on the buttons
     * i.e. download, preview, click
     *
     * Security Enhancement: File Extension Protection
     * - When renaming files (type='rename'), only the filename (without extension) is editable
     * - The original file extension is preserved and displayed as read-only
     * - This prevents users from changing file types accidentally or maliciously
     * - Input validation prevents typing or pasting file extensions
     *
     * @param selectedFile the current file object containing file data and metadata
     * @param index the index of the file in the files array
     * @param type the type of the action (rename, reset, update, preview, download, etc.)
     */
    async action(selectedFile, index, type) {
        let fileData = selectedFile.file;
        let attachmentId = selectedFile.attachmentId;
        let url = selectedFile.url;
        let attachmentPath = selectedFile.attachmentPath;
        let uId = selectedFile.uId;
        try {
            if (type == 'rename') {
                // Extract filename without extension for editing
                const fullFileName = selectedFile.file.name;
                const lastDotIndex = fullFileName.lastIndexOf('.');
                if (lastDotIndex > 0) {
                    // Store the filename without extension and the original extension separately
                    selectedFile.newName = fullFileName.substring(0, lastDotIndex);
                    selectedFile.originalExtension = fullFileName.substring(lastDotIndex);
                }
                else {
                    // Handle files without extension (edge case)
                    selectedFile.newName = fullFileName;
                    selectedFile.originalExtension = '';
                }
                selectedFile.rename = !selectedFile.rename;
            }
            if (type == 'reset') {
                // Reset to original filename without extension
                const fullFileName = selectedFile.file.name;
                const lastDotIndex = fullFileName.lastIndexOf('.');
                if (lastDotIndex > 0) {
                    selectedFile.newName = fullFileName.substring(0, lastDotIndex);
                }
                else {
                    selectedFile.newName = fullFileName;
                }
                selectedFile.rename = !selectedFile.rename;
            }
            if (type == 'update') {
                selectedFile.rename = !selectedFile.rename;
            }
            // if (!this.isSingleUploader) {
            if (['preview', 'download'].includes(type)) {
                const data = await this.getCurrentFile(fileData, attachmentId, url, attachmentPath, index, type);
                if (data.success) {
                    fileData = this.previewDirectly && type == 'preview' ? fileData : data.fileData;
                    url = data.url;
                }
            }
            // }
            this.payLoad = {
                type: 'file',
                fileData: {
                    attachmentName: fileData.name,
                    file: fileData,
                    uId: uId,
                    fileSize: fileData.size,
                    apiKey: this.isSingleApiKey ? this.fieldData.api_key : this.fieldData.request_api_key
                }
            };
            switch (type) {
                case 'remove':
                    // check for additional parameter
                    if (this.AdditionalParameter.PromptDelete) {
                        const id = `removeModal-${fileData.name.toLowerCase().replace(/[^a-zA-Z]|\s/g, '_')}-${index}`;
                        if (!this.isAttachmentInModal) {
                            this.dialog.closeAll();
                        }
                        const dialogRef = this.dialog.open(AlertModalComponent, {
                            data: {
                                message: this.AdditionalParameter.PromptDelete,
                                config: {
                                    disableClose: true,
                                    id
                                }
                            },
                            id
                        });
                        dialogRef.afterOpened().subscribe(() => {
                            this.commonUtil.moveMatDialogToStepModalIfExist();
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            this.commonUtil.moveMatDialogToBody();
                            if (result) {
                                this.deleteData(fileData, index);
                            }
                        });
                    }
                    else {
                        this.deleteData(fileData, index);
                    }
                    break;
                case 'update':
                    // Validate that filename is not empty
                    if (!selectedFile.newName || selectedFile.newName.trim() === '') {
                        // Show error message or reset to original name
                        console.error('Filename cannot be empty');
                        selectedFile.rename = false;
                        return;
                    }
                    // Combine the edited filename with the original extension
                    const fullNewName = selectedFile.newName.trim() + (selectedFile.originalExtension || '');
                    this.payLoad.fileData.newName = fullNewName;
                    this.payLoad.fileData.attachmentId = selectedFile.attachmentId;
                    this.updateFileName(fileData, index);
                    break;
                case 'preview':
                    // calling on Preview
                    if (!this.isAttachmentInModal) {
                        this.dialog.closeAll();
                    }
                    if (this.previewDirectlyInNewTab) {
                        this.openUrlInNewTab(url);
                    }
                    else {
                        // For Previewing Documents Directly with Signed URL having Header (Content-Disposition: inline)                    
                        if (this.previewDirectly) {
                            this.showPreviewDialog(url, fileData, index);
                        }
                        else {
                            const previewUrl = await this.readFileAsDataURL(fileData);
                            this.showPreviewDialog(previewUrl, fileData, index);
                        }
                    }
                    break;
                case 'download':
                    const fileUrl = await this.readFileAsDataURL(fileData);
                    const downloadLink = document.createElement('a');
                    downloadLink.href = fileUrl;
                    downloadLink.download = fileData.name;
                    downloadLink.click();
                    break;
                case 'upload':
                    this.onComponentEvent('BeforeUpload');
                    // for upload set attachment path
                    if (this.AdditionalParameter.AttachmentPathname) {
                        this.payLoad.fileData.attachmentPath = this.getName(this.AdditionalParameter.AttachmentPathname, '', /\{(.*?)\}/g);
                    }
                    else {
                        this.payLoad.fileData.attachmentPath = '';
                    }
                    if (this.fieldData.isAttachmentBlock) {
                        for (const metaItem of Object.keys(this.metadataFields)) {
                            if (this.metadataFields[metaItem].field_type != 'label') {
                                const keyValue = this.appDataService.getFieldDataByFieldId(this.metadataFields[metaItem].unique_id);
                                this.payLoad.fileData[metaItem] = keyValue;
                            }
                        }
                    }
                    if (fileData.type.includes('image')) {
                        if (this.additionalParameter['CompressAndConvertToPdf']?.toLowerCase() === 'true') {
                            await this.convertImageToPDF(fileData, index);
                            await this.delay(1000); // 1 second delay
                        }
                        else if (this.additionalParameter['CEE_CompressImage']?.toLowerCase() === 'true') {
                            await this.compressImage(fileData, index);
                        }
                    }
                    // Check if upload type flag is needed
                    if (this.additionalParameter.hasOwnProperty('CEE_upload_type') && this.additionalParameter['CEE_upload_type'] == "true") {
                        //To identify new uploaded file
                        this.payLoad['uploadType'] = "New";
                    }
                    const _payload = this.payLoad;
                    const res = await new Promise((resolve) => {
                        const uploadSub = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(res => {
                            if (res.type === 'OnUpload' && res.payLoad.fileData.uId === _payload.fileData.uId) {
                                uploadSub.unsubscribe();
                                resolve(res);
                            }
                        });
                        this.onComponentEvent('OnUpload', {}, false, _payload);
                    });
                    if (res.responseData.statusCode == 200) {
                        const responseMultipleAPIKey = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
                        let responseKey = responseMultipleAPIKey.find(i => i.includes(res.responseData.handler));
                        if (responseKey && responseKey.includes('##')) {
                            responseKey = responseKey.split('##').pop();
                        }
                        let responseData, hasCustomEventHandler = res.responseData?.hasCustomEventHandler || false;
                        if (res.responseData.handler === 'file/upload' || hasCustomEventHandler) {
                            responseData = _payload.fileData.apiKey ? res.responseData.data : (res.responseData.data['FILE_UPLOAD_DATA']);
                        }
                        else {
                            _payload.fileData.apiKey = this.isSingleApiKey ? this.fieldData.api_key : responseKey;
                            responseData = (res.responseData.data[_payload.fileData.apiKey || 'FILE_UPLOAD_DATA']);
                        }
                        this.sharedEventsService.uploadEmitter.emit(res.responseData.data);
                        if (res.responseData.handler === 'file/upload' || hasCustomEventHandler) {
                            responseData = {
                                ...responseData,
                                ...{
                                    attachmentId: responseData['id'],
                                    attachmentType: responseData['type'],
                                    attachmentUrl: responseData['url'],
                                    attachmentSize: responseData['size'],
                                    attachmentName: responseData['name'],
                                    uploadAttachmentPath: responseData['attachmentPath'],
                                }
                            };
                            // Check if upload type flag is needed
                            if (this.additionalParameter.hasOwnProperty('CEE_upload_type') && this.additionalParameter['CEE_upload_type'] == "true") {
                                //To identify new uploaded file
                                responseData['uploadType'] = "New";
                            }
                            delete responseData['id'];
                            delete responseData['type'];
                            delete responseData['url'];
                            delete responseData['size'];
                            delete responseData['attachmentPath'];
                            responseData = [responseData];
                        }
                        if (Array.isArray(responseData)) {
                            const len = Number(responseData.length) - 1;
                            if (this.isSingleUploader) {
                                this.files = [];
                                this.files.push(this.singleUploadFileData);
                                // this.files.push(this.singleUploadFileData);
                            }
                            this.uploadedCount++;
                            if (this.files[index] && responseData[len] && responseData[len]['attachmentId']) {
                                this.files[index].attachmentId = responseData[len]['attachmentId'];
                                this.files[index].url = responseData[len]['attachmentUrl'];
                                this.files[index].attachmentPath = responseData[len]['uploadAttachmentPath'];
                                for (const metaItem of Object.keys(this.metadataFields)) {
                                    const { label, value } = this.getDynamicValue(metaItem, responseData[len][metaItem]);
                                    this.files[index]['custom'].push({
                                        label: label,
                                        key: metaItem,
                                        value: value
                                    });
                                }
                                // const data = this.files;
                                // data[index].uploaded = true;
                                // this.files = data;
                                this.files[index].uploaded = true;
                                if (this.files.length <= 0 && this.autoUpload) {
                                    this.errorMsgBox = true;
                                }
                                if (this.isSingleUploader && this.files && this.files.length > 0) {
                                    this.hasUploadedData = true;
                                }
                                if ((this.isSingleUploader && this.files && this.files.length > 0) || (!this.isSingleUploader && this.files && this.files.length == this.uploadedCount)) {
                                    this.errorType = "";
                                    if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                                        this.updateAttachmentAppData(true);
                                    }
                                }
                                this.updateAttachments('upload', this.html_id, responseData[len], '', this.isSingleUploader);
                                setTimeout(() => {
                                    if (this.files && this.files.length > 0 && this.files.length != this.uploadedCount) {
                                        if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                                            this.updateAttachmentAppData(true);
                                        }
                                        else {
                                            this.updateAttachmentAppData(false);
                                        }
                                    }
                                }, 2000);
                            }
                        }
                        this.clearBlockData();
                        if (this.isSingleUploader) {
                            this.selectFileText = (this.AdditionalParameter['selectFileText']) ? this.AdditionalParameter['selectFileText'] : "Select a file";
                        }
                        // this.onComponentEvent('OnLoad', {}, true, this.payLoad);
                    }
                    break;
                case 'clear':
                    this.setTotalSizeAndCount(-fileData.size, -1);
                    this.files.splice(index, 1);
                    if ((this.totalCount - this.uploadedCount) == 0 && this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                        this.updateAttachmentAppData(true);
                    }
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error(`Error occurred while performing operation: ${type} for attachment ${attachmentId}`);
        }
        if (this.rootData['repeatable-' + this.fieldData.unique_id]) {
            this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id] = this.files;
        }
    }
    readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    updateAttachmentAppData(isAttachmentValid) {
        this.appDataService.getIndividualAppData(this.fieldData.html_id).pipe(take(1)).subscribe(r => {
            if (r.length > 0 && this.fieldData.html_id == r[0].id) {
                this.updateFieldData(r[0].value, isAttachmentValid);
            }
            else {
                this.updateFieldData([], isAttachmentValid);
            }
        });
    }
    renameAttachmentAppData(newName, index) {
        if (newName !== "") {
            const attachmentData = this.appDataService.getFieldDataByFieldId(this.html_id);
            if (attachmentData) {
                let values = [];
                if (Array.isArray(attachmentData)) {
                    attachmentData.forEach((val, i) => {
                        if (i == index) {
                            val = Object.assign({}, {
                                ...val,
                                attachmentName: newName,
                                document_name: newName,
                                name: newName
                            });
                        }
                        values.push(val);
                    });
                    this.updateFieldData(values, true);
                }
            }
        }
    }
    singleFileUploadAction() {
        if (this.files && this.files.length > 0 && this.AdditionalParameter.PromptReplace) {
            const id = `replaceModal`;
            if (!this.isAttachmentInModal) {
                this.dialog.closeAll();
            }
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    title: 'Alert',
                    message: this.AdditionalParameter.PromptReplace,
                },
                panelClass: 'replace-alert-panel',
                id
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    const selectedFile = this.singleUploadFileData;
                    this.uploadedCount--;
                    this.action(selectedFile, 0, 'upload');
                }
            });
        }
        else {
            const selectedFile = this.singleUploadFileData;
            if (this.singleUploadFileData) {
                this.action(selectedFile, 0, 'upload');
            }
        }
    }
    getDynamicValue(key, value) {
        let label = this.metadataFields[key].label;
        if (label.includes('((dynamic))')) {
            let returnValue = label.replace('((dynamic))', '');
            const valueArr = returnValue.split(/[%%]/);
            returnValue = '';
            for (let v of valueArr) {
                if (v.includes(key)) {
                    if (v.includes(':::') && value) {
                        const format = v.split(':::').pop();
                        // returnValue += moment.unix(value / 1000).format(format);
                        returnValue += moment__default(Number(value)).format(format);
                    }
                }
                else {
                    returnValue += v;
                }
            }
            label = '';
            value = returnValue;
        }
        return {
            label,
            value
        };
    }
    clearBlockData() {
        const metaFieldIds = [];
        for (const metaItem of Object.keys(this.metadataFields)) {
            const field = this.metadataFields[metaItem];
            if (field.additional_parameters.findIndex(i => i.parameter_type === 'metadata_skip_remove' && i.value === 'true') === -1) {
                metaFieldIds.push(field.unique_id);
            }
        }
        this.appDataService.clearDataUsingUniqueIds(metaFieldIds, () => {
            this.sharedEventsService.emitForEmptySession.emit({ unique_ids: metaFieldIds, apiKeys: [] });
        });
    }
    getCurrentFile(fileData, attachmentId, url, attachmentPath, index, type) {
        let success = false;
        return new Promise((resolve, reject) => {
            this.payLoad.fileData.attachmentPath = attachmentPath;
            this.payLoad.fileData.attachmentId = attachmentId;
            const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(async (res) => {
                if (res.type.toLowerCase() === 'onpreview') {
                    fileUploadEmitter.unsubscribe();
                    try {
                        if (res.responseData.statusCode == 200) {
                            let responseData, hasCustomEventHandler = res.responseData?.hasCustomEventHandler || false;
                            if ((res.responseData.handler === 'file/fetch' || hasCustomEventHandler) && res.responseData.data) {
                                if (res.responseData.data['url']) {
                                    responseData = res.responseData.data;
                                    url = responseData['url'];
                                }
                                else if (res.responseData.data['FILE_UPLOAD_DATA'] && res.responseData.data['FILE_UPLOAD_DATA']['url']) {
                                    responseData = res.responseData.data['FILE_UPLOAD_DATA'];
                                    url = responseData['url'];
                                }
                            }
                            else {
                                responseData = (res.responseData.data[this.payLoad.fileData.apiKey || 'FILE_UPLOAD_DATA']) === undefined ? res.responseData.data : res.responseData.data[this.payLoad.fileData.apiKey || 'document/preview'];
                                if (Array.isArray(responseData) && responseData[0] && responseData[0]['attachmentUrl']) {
                                    url = responseData[0]['attachmentUrl'];
                                }
                            }
                            if ((res.responseData.handler === 'file/fetch' || hasCustomEventHandler) && res.responseData.data && (res.responseData.data).hasOwnProperty('api_response')) {
                                const apiResponse = JSON.parse(res.responseData.data.api_response);
                                if (apiResponse.hasOwnProperty('result') && (apiResponse.result).hasOwnProperty('url')) {
                                    url = apiResponse.result.url;
                                }
                            }
                            if (url) {
                                if (this.previewDirectly && type == "preview") {
                                    success = true;
                                    resolve({ success, fileData, url });
                                    return;
                                }
                                const response = await fetch(url);
                                let blob = await response.blob();
                                // if encrypted is true
                                // then only go ahead and decrypt b
                                if (this.encrypted) {
                                    // convert to the string from blob
                                    const strFile = await Promise.resolve(this.fileUploadService.createStringFromBlob(blob, 'decrypt'));
                                    // decrypt the string
                                    const decryptRes = await this.fileUploadService.encryptDecrypt('decrypt', strFile).toPromise();
                                    if (decryptRes.status == 200 &&
                                        decryptRes.body['credentials'] &&
                                        decryptRes.body['credentials']['plainText']) {
                                        // decode the text
                                        const decryptedString = this.fileUploadService.returnDecryptedResult(strFile, decryptRes.body['credentials']['plainText']);
                                        // fetch the base64 string
                                        const decodedRes = await fetch(decryptedString);
                                        // get the blob
                                        blob = await decodedRes.blob();
                                    }
                                }
                                fileData = new File([blob], fileData.name, { type: fileData.type });
                                // TODO: check local caching the data when clicked once
                                // FIXME: Fix the caching when once download is clicked
                                // if (res.type.toLowerCase() !== 'onpreview') {
                                //     this.files[index].file = fileData;
                                //     this.files[index].url = '';
                                // }
                                this.files[index].file = fileData;
                                this.files[index].url = url;
                                success = true;
                            }
                        }
                        if (success) {
                            resolve({ success, fileData, url });
                        }
                        else {
                            console.error(`Error while fetching file for attachmentId: ${attachmentId}`);
                            reject({ success, fileData, url });
                        }
                    }
                    catch (error) {
                        console.error(`Error while fetching file for attachmentId: ${attachmentId}, error is ${error}`);
                        reject({ success, fileData, url });
                    }
                }
            });
            if (['preview', 'download'].includes(type)) {
                this.payLoad['extraQueryParams'] = {
                    "preview_download": type == "preview" ? true : false
                };
            }
            this.onComponentEvent('OnPreview', {}, false, this.payLoad);
        });
    }
    /**
     * function that deletes the current file from the memory and
     * calls the onRemove Handler
     * @param fileData the current file data
     * @param index the current index of the file that
     * is needed to be removed
     */
    deleteData(fileData, index) {
        this.payLoad.fileData.attachmentPath = this.files[index].attachmentPath;
        this.payLoad.fileData.attachmentId = this.files[index].attachmentId;
        const handlerFunc = res => {
            if (res.type == 'OnRemove') {
                fileUploadEmitter.unsubscribe();
                uploadEmitter.unsubscribe();
                if (res.responseData.statusCode == 200) {
                    this.sharedEventsService.removeFileEmitter.emit(this.payLoad.fileData);
                    this.setTotalSizeAndCount(-fileData.size, -1);
                    this.files.splice(index, 1);
                    // set the files
                    this.updateAttachments('delete', this.html_id, {}, this.payLoad.fileData.attachmentId);
                    // this.updateFieldData(this.files.length ? this.files : {});
                    setTimeout(() => {
                        this.uploadedCount--;
                        if (this.files && this.files.length > 0 && this.files.length != this.uploadedCount) {
                            this.updateAttachmentAppData(false);
                        }
                        else if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                            this.updateAttachmentAppData(true);
                        }
                    }, 2500);
                }
            }
        };
        const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(handlerFunc);
        const uploadEmitter = this.sharedEventsService.uploadEmitter.subscribe(handlerFunc);
        this.onComponentEvent('OnRemove', {}, false, this.payLoad);
    }
    updateFileName(fileData, index) {
        const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(res => {
            fileUploadEmitter.unsubscribe();
            const actualIndex = this.files.findIndex(f => f.attachmentId == res.payLoad.fileData.attachmentId);
            if (actualIndex != index)
                return; // Ignore if the response is not for the current file being renamed
            if (res.type == 'OnRename') {
                if (res.responseData.statusCode == 200) {
                    this.errorType = "";
                    setTimeout(() => {
                        const file = this.files[index].file;
                        const newName = this.payLoad.fileData.newName;
                        // // Create a new File object with the updated name
                        const updatedFile = new File([file], newName, { type: file.type });
                        // // Replace the original file in the array
                        this.files[index].file = updatedFile;
                        this.renameAttachmentAppData(newName, index);
                    }, 0);
                }
                else if (res.responseData.statusCode == 500) {
                    this.showFileSelectError('', 'duplicate_file_name_error');
                    // Show error message or reset to original name
                }
            }
        });
        this.onComponentEvent('OnRename', {}, false, this.payLoad);
    }
    concatData = (res) => {
        // Not Needed
    };
    clearValue(event) {
        // Not Needed
    }
    onAPICallback(data) {
        // const field = this.customKey ? { ...this.fieldData, ...{ 'response_api_key': this.customKey } } : this.fieldData;
        const field = this.fieldData;
        this.getDynamicLabel(data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(field, data);
        if (apiData !== null) {
            this.hasUploadedData = true;
            if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                this.updateAttachmentAppData(true);
            }
            this.setAttachmentData(apiData);
            this.updateAttachments('', this.html_id, apiData);
            // this.updateFieldData(this.files.length ? this.files : {});
        }
    }
    async checkMetaData() {
        return new Promise((resolve) => {
            if (this.metadataFields) {
                if (Object.keys(this.metadataFields).length === 0) {
                    for (const mField of this.metaFields) {
                        const metaKey = mField.additional_parameters.find((i) => {
                            return i.parameter_type === 'metadata_key';
                        });
                        if (metaKey && metaKey.value) {
                            const keyValue = metaKey.value.split('|');
                            const key = keyValue[0];
                            const label = (keyValue.length === 2) ? keyValue[1] : '';
                            this.metadataFields[key] = {
                                ...mField,
                                label
                            };
                        }
                    }
                }
                resolve(true);
            }
        });
    }
    async setAttachmentData(apiData) {
        if (this.fieldData.isAttachmentBlock) {
            await this.checkMetaData();
        }
        this.totalCount = 0;
        this.totalSize = 0;
        this.uploadedCount = 0;
        this.files = [];
        const f = [];
        for (const d of apiData) {
            const uploadedFileData = {
                rename: false,
                uploaded: true,
                attachmentId: d.attachmentId,
                url: d.attachmentUrl,
                attachmentPath: d.uploadAttachmentPath,
                file: new File([new ArrayBuffer(parseInt(d.attachmentSize))], d.attachmentName, { type: d.attachmentType }),
                custom: [],
                uId: Date.now().toString()
            };
            this.uploadedCount++;
            for (const metaItem of Object.keys(this.metadataFields)) {
                const { label, value } = this.getDynamicValue(metaItem, d[metaItem]);
                uploadedFileData.custom.push({
                    label: label,
                    key: metaItem,
                    value: value
                });
            }
            this.setTotalSizeAndCount(Number(d.attachmentSize), 1);
            // const response = await fetch(d.attachmentUrl);
            // const fileData = await response.blob();
            const metadata = {
                type: d.attachmentType
            };
            // uploadedFileData.file = new File([fileData], d.attachmentName, metadata);
            f.push(uploadedFileData);
        }
        if (this.isSingleUploader && f.length > 0) {
            this.hasUploadedData = true;
            if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                this.updateAttachmentAppData(true);
            }
        }
        this.files = f;
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
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
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key))
                ];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.uploadMore = true;
                this.totalCount = 0;
                this.totalSize = 0;
                // TODO Update
                let value = [];
                this.files = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.AdditionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.files = paramter.value;
                            value = paramter.value;
                        }
                        if (paramter.parameter_type === 'clickable_filename') {
                            this.clickable_filename = paramter.value === 'true' ? true : false;
                        }
                    }
                }
                this.updateAttachments(value.length > 0 ? 'upload' : '', this.html_id, value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                return;
            }
        });
    }
    handleCustomFunction(getData) {
        const data = [];
        let uniqueIdValue = '';
        if (typeof getData == 'object') {
            Object.keys(getData).forEach((key, value) => {
                data.push(key);
            });
            uniqueIdValue = this.fieldData.unique_id;
        }
        if (data.includes(uniqueIdValue)) {
            this.files = Array.isArray(getData[uniqueIdValue]) ? getData[uniqueIdValue] : [getData[uniqueIdValue]];
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        // As Data is not stored so this is not required
    }
    setFieldStateOnStateChangeEvent(data) {
        // Not Needed
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    ngOnChanges(changes) {
        if (this.fieldData.isAttachmentBlock && this.metadataFields) {
            if (Object.keys(this.metadataFields).length === 0) {
                for (const mField of this.metaFields) {
                    const metaKey = mField.additional_parameters.find((i) => {
                        return i.parameter_type === 'metadata_key';
                    });
                    if (metaKey && metaKey.value) {
                        const keyValue = metaKey.value.split('|');
                        const key = keyValue[0];
                        const label = (keyValue.length === 2) ? keyValue[1] : '';
                        this.metadataFields[key] = {
                            ...mField,
                            label
                        };
                    }
                }
            }
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
    /**
     * Validates the filename input to prevent extension editing
     * @param event The input event
     * @param selectedFile The file being renamed
     */
    onFilenameInput(event, selectedFile) {
        const input = event.target;
        const value = input.value;
        // Check if user is trying to add a file extension
        if (value.includes('.')) {
            // Remove any dots and everything after them
            const cleanValue = value.split('.')[0];
            selectedFile.newName = cleanValue;
            // Update the input value to reflect the cleaned version
            setTimeout(() => {
                input.value = cleanValue;
            }, 0);
        }
    }
    /**
     * Validates the filename on paste to prevent extension pasting
     * @param event The paste event
     * @param selectedFile The file being renamed
     */
    onFilenamePaste(event, selectedFile) {
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text') || '';
        // Remove any file extension from pasted text
        const cleanText = pastedText.includes('.') ? pastedText.split('.')[0] : pastedText;
        selectedFile.newName = cleanText;
    }
    static ɵfac = function CeeAttachmentsComponent_Factory(t) { return new (t || CeeAttachmentsComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(FileUploadService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(i13.NgxImageCompressService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeAttachmentsComponent, selectors: [["app-cee-attachments"]], viewQuery: function CeeAttachmentsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        } }, hostBindings: function CeeAttachmentsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragover", function CeeAttachmentsComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragenter", function CeeAttachmentsComponent_dragenter_HostBindingHandler($event) { return ctx.onDragEnter($event); })("dragend", function CeeAttachmentsComponent_dragend_HostBindingHandler($event) { return ctx.onDragEnd($event); })("dragleave", function CeeAttachmentsComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function CeeAttachmentsComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("paste", function CeeAttachmentsComponent_paste_HostBindingHandler($event) { return ctx.onPaste($event); }, false, i0.ɵɵresolveBody);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", metaFields: "metaFields" }, standalone: true, features: [i0.ɵɵProvidersFeature([NgxImageCompressService]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["placeHolder", ""], ["file", ""], ["files", ""], ["uploadedActions", ""], ["otherAction", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "file-container"], ["class", "selected-files", 4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "single-file-uploader-container", "d-flex"], ["draggable", "true", 3, "ngClass", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["class", "upload-btn", 3, "disabled", "click", 4, "ngIf"], ["draggable", "true", 3, "ngClass"], [1, "row"], [1, "col-md-12", "text-center"], [3, "click", 4, "ngIf"], ["class", "link-primary clickable custom-file-label", 3, "click", 4, "ngIf"], ["type", "file", 2, "display", "none", 3, "click", "change", "id", "disabled"], [3, "click"], [3, "click", "innerHTML"], [1, "link-primary", "clickable", "custom-file-label", 3, "click"], [1, "input-group"], [1, "custom-file"], ["type", "file", 1, "custom-file-input", 3, "click", "change", "id", "disabled"], [1, "custom-file-label", 3, "for"], [1, "upload-btn", 3, "click", "disabled"], [1, "file-upload-container", 3, "click"], ["type", "text", 2, "display", "none", 3, "id"], ["type", "file", 1, "custom-file-input", 2, "display", "none", 3, "click", "change", "id", "multiple", "disabled"], ["type", "file", 1, "custom-file-input", 3, "click", "change", "multiple", "id", "disabled"], [1, "selected-files"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "selected-file", 4, "ngIf"], [1, "selected-file"], [1, "document-info-container", 3, "id"], [1, "file-icon-wrapper", 3, "id"], ["class", "custom-file-icon", 3, "alt", "src", 4, "ngIf"], [1, "file-name-wrapper", 3, "id"], [3, "class", "ngClass", "click", 4, "ngIf"], ["class", "file-rename-container", 4, "ngIf"], ["class", "metadata-container", 3, "id", 4, "ngIf"], [1, "action-buttons-container", 3, "id"], [4, "ngIf", "ngIfElse"], [1, "custom-file-icon", 3, "alt", "src"], [3, "click", "ngClass"], [1, "file-rename-container"], ["type", "text", "placeholder", "Enter filename", "title", "Enter filename without extension", 3, "ngModelChange", "input", "paste", "ngModel"], ["title", "File extension cannot be changed", 1, "file-extension-readonly"], [1, "metadata-container", 3, "id"], [1, "attachment-meta-item"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], ["max", "100", "min", "0", 3, "value", 4, "ngIf"], ["class", "btn btn-outline-secondary clear", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-secondary upload", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["max", "100", "min", "0", 3, "value"], ["type", "button", 1, "btn", "btn-outline-secondary", "clear", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", "upload", 3, "click", "disabled"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], ["max", "100", "min", " 0", 3, "value", 4, "ngIf"], ["max", "100", "min", " 0", 3, "value"], [1, "add-more"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_Template, 13, 7, "div", 5);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, CommonModule, i13$1.NgClass, i13$1.NgForOf, i13$1.NgIf, TooltipModule, TooltipDirective, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgModel], styles: ["@charset \"UTF-8\";.file-rename-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.file-rename-container[_ngcontent-%COMP%]   .selected-file-name[_ngcontent-%COMP%]{flex:1;border:1px solid #ced4da;padding:.375rem .75rem;border-radius:.25rem;font-size:.875rem}.file-rename-container[_ngcontent-%COMP%]   .selected-file-name[_ngcontent-%COMP%]:focus{outline:none;border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]{color:#6c757d;font-size:.875rem;font-weight:500;padding:.375rem .5rem;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.25rem;-webkit-user-select:none;user-select:none;cursor:not-allowed;position:relative}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]:before{content:\"\\1f512\";margin-right:.25rem;font-size:.75rem}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.selected-file[_ngcontent-%COMP%]   .file-rename-container[_ngcontent-%COMP%], .document-info-container[_ngcontent-%COMP%]   .file-rename-container[_ngcontent-%COMP%]{width:100%}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-attachments', standalone: true, imports: [MatTooltipModule, NgStyle, CommonModule, TooltipModule, FormsModule], providers: [NgxImageCompressService], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!='' && isCameraMode == false\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"fieldData.field_label!='' && files.length > 0 && isCameraMode == true\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\" >{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            </ng-container>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">            \r\n            <ng-container *ngIf=\"!isCameraInput && !isCameraMode\">\r\n                <ng-container *ngIf=\"!isListView && isSingleUploader\">\r\n                    <div class=\"single-file-uploader-container d-flex\">\r\n                        <div *ngIf=\"dragAreaClass == 'dragarea' || dragAreaClass == 'droparea'\" draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <div *ngIf=\"isFieldLableHTML\" (click)=\"file.click()\">\r\n                                        <div (click)=\"onAnchorClick($event)\" [innerHTML]=\"fieldLable\"></div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!isFieldLableHTML\">{{fieldLable}}</div>\r\n                                    <label (click)=\"file.click()\" class=\"link-primary clickable custom-file-label\" *ngIf=\"(uploadMode == 'all' || uploadMode == '') && !isFieldLableHTML\">\r\n                                        {{ selectFileText  }}\r\n                                    </label>\r\n                                    <input type=\"file\"\r\n                                        #file\r\n                                        [id]=\"html_id\"\r\n                                        (click)=\"checkValidation($event)\" \r\n                                        (change)=\"handleFileInput($event, $event.target.files)\" \r\n                                        [disabled]=\"!isEditable\" \r\n                                        [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\"\r\n                                        style=\"display:none\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"dragAreaClass != 'dragarea' && dragAreaClass != 'droparea'\" class=\"input-group\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" class=\"custom-file-input\" [id]=\"html_id\" (click)=\"checkValidation($event)\" (change)=\"handleFileInput($event, $event.target.files)\" [disabled]=\"!isEditable\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\">\r\n                                <label class=\"custom-file-label\" [for]=\"html_id\">{{ selectFileText  }}</label>\r\n                            </div>\r\n                        </div>\r\n                        <button *ngIf=\"!autoUpload\" class=\"upload-btn\" [disabled]=\"!isEditable\" (click)=\"singleFileUploadAction();\">{{ files.length > 0 ? 'Replace' : 'Upload' }}</button>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!isListView && !isSingleUploader\">\r\n                    <div class=\"file-upload-container\"  (click) = 'handleClick(files)'>\r\n                        <input type=\"text\" #files [id]=\"html_id\" style=\"display:none\"/>\r\n                        <div *ngIf=\"dragAreaClass == 'dragarea' || dragAreaClass == 'droparea'\" draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <div *ngIf=\"isFieldLableHTML\" (click)=\"file.click()\">\r\n                                        <div (click)=\"onAnchorClick($event)\" [innerHTML]=\"fieldLable\"></div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!isFieldLableHTML\">{{fieldLable}}</div>                                    \r\n                                    <label (click)=\"file.click()\" class=\"link-primary clickable custom-file-label\" *ngIf=\"(uploadMode == 'all' || uploadMode == '') && !isFieldLableHTML\">\r\n                                        {{ selectFileText  }}\r\n                                    </label>\r\n                                    <input type=\"file\"\r\n                                        #file\r\n                                        [id]=\"html_id\"\r\n                                        [multiple]=\"isMultiple\"\r\n                                        class=\"custom-file-input\"\r\n                                        (click)=\"checkValidation($event)\" \r\n                                        (change)=\"handleFileInput($event, $event.target.files)\" \r\n                                        [disabled]=\"!isEditable\" \r\n                                        [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\"\r\n                                        style=\"display:none\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"dragAreaClass != 'dragarea' && dragAreaClass != 'droparea'\" class=\"input-group\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" [multiple]=\"isMultiple\" class=\"custom-file-input\" [id]=\"html_id\" (click)=\"checkValidation($event)\" (change)=\"handleFileInput($event, $event.target.files)\" [disabled]=\"!isEditable\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\">\r\n                                <label class=\"custom-file-label\" [for]=\"html_id\">{{ selectFileText  }}</label>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <div class=\"file-container\">\r\n                <div class=\"selected-files\" *ngIf=\"files.length > 0; else placeHolder\">\r\n                    <ng-container *ngFor=\"let selectedFile of files; let i=index trackBy: trackByFile\">\r\n\r\n                        <!-- Restructured layout for attachment blocks -->\r\n                        <div class=\"selected-file\" *ngIf=\"(!isSingleUploader || (isSingleUploader && selectedFile.uploaded)) && fieldData.isAttachmentBlock\">\r\n                            \r\n                            <!-- Document Info Container -->\r\n                            <div [id]=\"'document-info-' + fieldData.unique_id + '-' + i\" class=\"document-info-container\">\r\n                                <!-- File Icon -->\r\n                                <div [id]=\"'file-icon-' + fieldData.unique_id + '-' + i\" class=\"file-icon-wrapper\">\r\n                                    <img class=\"custom-file-icon\" \r\n                                         alt=\"Custom File Icon for {{selectedFile.file.type}}\" \r\n                                         *ngIf=\"fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].iconImage\" \r\n                                         [src]=\"fileUploads[selectedFile.file.type].iconImage\" />\r\n                                </div>\r\n                                \r\n                                <!-- File Name -->\r\n                                <div [id]=\"'file-name-' + fieldData.unique_id + '-' + i\" class=\"file-name-wrapper\">\r\n                                    <span *ngIf=\"!selectedFile.rename\" \r\n                                          class=\"selected-file-name selected-file-name-{{i}}\"\r\n                                          (click)=\"handleAction(selectedFile, i, 'preview')\"\r\n                                          [ngClass]=\"{ 'clickable': clickable_filename }\">\r\n                                        {{selectedFile.file.name}}\r\n                                    </span>\r\n                                    <div *ngIf=\"selectedFile.rename\" class=\"file-rename-container\">\r\n                                        <input class=\"selected-file-name selected-file-name-{{i}}\" \r\n                                               type=\"text\" \r\n                                               [(ngModel)]=\"selectedFile.newName\"\r\n                                               (input)=\"onFilenameInput($event, selectedFile)\"\r\n                                               (paste)=\"onFilenamePaste($event, selectedFile)\"\r\n                                               placeholder=\"Enter filename\"\r\n                                               title=\"Enter filename without extension\">\r\n                                        <span class=\"file-extension-readonly\" \r\n                                              title=\"File extension cannot be changed\">{{selectedFile.originalExtension}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Metadata Container -->\r\n                            <div [id]=\"'metadata-' + fieldData.unique_id + '-' + i\" class=\"metadata-container\" *ngIf=\"selectedFile.custom && selectedFile.custom.length > 0\">\r\n                                <ng-container *ngFor=\"let metaItem of selectedFile.custom\">\r\n                                    <div [attr.data-title]=\"metaItem.key\" class=\"attachment-meta-item\">\r\n                                        <label *ngIf=\"metaItem.label\" [innerHTML]=\"metaItem.label\"></label>\r\n                                        <span [innerHTML]=\"metaItem.value\"></span>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <!-- Action Buttons Container -->\r\n                            <div [id]=\"'action-buttons-' + fieldData.unique_id + '-' + i\" class=\"action-buttons-container\">\r\n                                <!-- Upload Progress or Clear/Upload buttons for non-uploaded files -->\r\n                                <ng-container *ngIf=\"!selectedFile.uploaded; else uploadedActions\">\r\n                                    <progress *ngIf=\"selectedFile.progress\" [value]=\"selectedFile.progress\" max=\"100\" min=\"0\"> {{selectedFile.progress}}% </progress>\r\n                                    <button *ngIf=\"!selectedFile.progress && !autoUpload\" \r\n                                            class=\"btn btn-outline-secondary clear\" \r\n                                            type=\"button\" \r\n                                            [disabled]=\"!isEditable\" \r\n                                            (click)=\"action(selectedFile, i, 'clear');\">Clear</button>\r\n                                    <button *ngIf=\"!selectedFile.progress && !autoUpload\" \r\n                                            class=\"btn btn-outline-secondary upload\" \r\n                                            type=\"button\" \r\n                                            [disabled]=\"!isEditable\" \r\n                                            (click)=\"action(selectedFile, i, 'upload');\">Upload</button>\r\n                                </ng-container>\r\n                                \r\n                                <!-- Action buttons for uploaded files -->\r\n                                <ng-template #uploadedActions>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-reset selected-file-reset-{{i}} btn btn-info\" \r\n                                            *ngIf=\"isEditable && !isListView && selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'reset')\">\r\n                                        {{(AdditionalParameter['reset_label']) ? AdditionalParameter['CEE_reset_label'] : 'Reset'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-update selected-file-update-{{i}} btn btn-success\" \r\n                                            *ngIf=\"isEditable && !isListView && selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'update')\">\r\n                                        {{(AdditionalParameter['CEE_update_label']) ? AdditionalParameter['CEE_update_label'] : 'Update'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-rename selected-file-rename-{{i}} btn btn-danger\" \r\n                                            *ngIf=\"isEditable && !isListView && !selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'rename')\">\r\n                                        {{(AdditionalParameter['CEE_rename_label']) ? AdditionalParameter['CEE_rename_label'] : 'Edit'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-remove selected-file-remove-{{i}} btn btn-danger\" \r\n                                            *ngIf=\"isEditable && !isListView\" \r\n                                            (click)=\"action(selectedFile, i, 'remove')\">\r\n                                        {{(AdditionalParameter['remove_label']) ? AdditionalParameter['remove_label'] : 'Remove'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-preview selected-file-preview-{{i}} btn btn-success\" \r\n                                            *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].preview)\" \r\n                                            (click)=\"action(selectedFile, i, 'preview')\">\r\n                                        {{(AdditionalParameter['preview_label']) ? AdditionalParameter['preview_label'] : 'Preview'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-download selected-file-download-{{i}} btn btn-primary\" \r\n                                            *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].canDownload)\" \r\n                                            (click)=\"action(selectedFile, i, 'download')\">\r\n                                        {{(AdditionalParameter['download_label']) ? AdditionalParameter['download_label'] : 'Download'}}\r\n                                    </button>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Original layout for non-attachment blocks -->\r\n                        <div class=\"selected-file\" *ngIf=\"(!isSingleUploader || (isSingleUploader && selectedFile.uploaded)) && !fieldData.isAttachmentBlock\">\r\n                            <!-- <span *ngIf=\"!selectedFile.rename\" class=\"selected-file-name selected-file-name-{{i}}\">{{selectedFile.file.name}}</span> -->\r\n                            <span *ngIf=\"!selectedFile.rename\" class=\"selected-file-name selected-file-name-{{i}}\"\r\n                                (click)=\"handleAction(selectedFile, i, 'preview')\"\r\n                                [ngClass]=\"{ 'clickable': clickable_filename }\">{{selectedFile.file.name}}</span>\r\n                            <div *ngIf=\"selectedFile.rename\" class=\"file-rename-container\">\r\n                                <input class=\"selected-file-name selected-file-name-{{i}}\" \r\n                                       type=\"text\" \r\n                                       [(ngModel)]=\"selectedFile.newName\"\r\n                                       (input)=\"onFilenameInput($event, selectedFile)\"\r\n                                       (paste)=\"onFilenamePaste($event, selectedFile)\"\r\n                                       placeholder=\"Enter filename\"\r\n                                       title=\"Enter filename without extension\">\r\n                                <span class=\"file-extension-readonly\" \r\n                                      title=\"File extension cannot be changed\">{{selectedFile.originalExtension}}</span>\r\n                            </div>\r\n                            <ng-container *ngFor=\"let metaItem of selectedFile.custom\">\r\n                                <div [attr.data-title]=\"metaItem.key\" class=\"attachment-meta-item\">\r\n                                    <label *ngIf=\"metaItem.label\" [innerHTML]=\"metaItem.label\"></label>\r\n                                    <span [innerHTML]=\"metaItem.value\"></span>\r\n                                </div>\r\n                            </ng-container>\r\n                            <img class=\"custom-file-icon\" alt=\"Custom File Icon for {{selectedFile.file.type}}\" *ngIf=\"fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].iconImage\" [src]=\"fileUploads[selectedFile.file.type].iconImage\" />\r\n                            <ng-container *ngIf=\"!selectedFile.uploaded; else otherAction\">\r\n                                <progress *ngIf=\"selectedFile.progress\" [value]=\"selectedFile.progress\" max=\"100\" min=\" 0\"> {{selectedFile.progress}}% </progress>\r\n                                <button *ngIf=\"!selectedFile.progress && !autoUpload\" class=\"btn btn-outline-secondary clear\" type=\"button\" [disabled]=\"!isEditable\" (click)=\"action(selectedFile, i, 'clear');\">Clear</button>\r\n                                <button *ngIf=\"!selectedFile.progress && !autoUpload\" class=\"btn btn-outline-secondary upload\" type=\"button\" [disabled]=\"!isEditable\" (click)=\"action(selectedFile, i, 'upload');\">Upload</button>\r\n                            </ng-container>\r\n                            <ng-template #otherAction>\r\n                                <button type=\"button\" class=\"selected-file-reset selected-file-reset-{{i}} btn btn-info\" *ngIf=\"isEditable && !isListView && selectedFile.rename\" (click)=\"action(selectedFile, i, 'reset')\">{{(AdditionalParameter['reset_label']) ? AdditionalParameter['CEE_reset_label'] : 'Reset'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-update selected-file-update-{{i}} btn btn-success\" *ngIf=\"isEditable && !isListView && selectedFile.rename\" (click)=\"action(selectedFile, i, 'update')\">{{(AdditionalParameter['CEE_update_label']) ? AdditionalParameter['CEE_update_label'] : 'Update'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-rename selected-file-rename-{{i}} btn btn-danger\" *ngIf=\"isEditable && !isListView && !selectedFile.rename\" (click)=\"action(selectedFile, i, 'rename')\">{{(AdditionalParameter['CEE_rename_label']) ? AdditionalParameter['CEE_rename_label'] : 'Edit'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-remove selected-file-remove-{{i}} btn btn-danger\" *ngIf=\"isEditable && !isListView\" (click)=\"action(selectedFile, i, 'remove')\">{{(AdditionalParameter['remove_label']) ? AdditionalParameter['remove_label'] : 'Remove'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-preview selected-file-preview-{{i}} btn btn-success\" *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].preview)\" (click)=\"action(selectedFile, i, 'preview')\">{{(AdditionalParameter['preview_label']) ? AdditionalParameter['preview_label'] : 'Preview'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-download selected-file-download-{{i}} btn btn-primary\" *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].canDownload)\" (click)=\"action(selectedFile, i, 'download')\">{{(AdditionalParameter['download_label']) ? AdditionalParameter['download_label'] : 'Download'}}</button>\r\n                            </ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <ng-template #placeHolder>\r\n                    <div class=\"add-more\">\r\n                        {{fieldData.placeholder_text}}\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n            <ng-container *ngFor=\"let message of messages\">\r\n                <div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n                    <p *ngIf=\"isMandatory && message.type == 'Mandatory' && files.length <= 0\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}</p>\r\n                </div>\r\n                <div class=\"error-message-wrapper\" *ngIf=\"errorType\">\r\n                    <p *ngIf=\"message.type == errorType\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}</p>\r\n                </div>\r\n            </ng-container>\r\n            </div>\r\n    </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";.file-rename-container{display:flex;align-items:center;gap:.25rem}.file-rename-container .selected-file-name{flex:1;border:1px solid #ced4da;padding:.375rem .75rem;border-radius:.25rem;font-size:.875rem}.file-rename-container .selected-file-name:focus{outline:none;border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.file-rename-container .file-extension-readonly{color:#6c757d;font-size:.875rem;font-weight:500;padding:.375rem .5rem;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.25rem;-webkit-user-select:none;user-select:none;cursor:not-allowed;position:relative}.file-rename-container .file-extension-readonly:before{content:\"\\1f512\";margin-right:.25rem;font-size:.75rem}.file-rename-container .file-extension-readonly:hover{background-color:#e9ecef}.selected-file .file-rename-container,.document-info-container .file-rename-container{width:100%}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: FileUploadService }, { type: CEEInternalEmitterService }, { type: i13.NgxImageCompressService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
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
        }], metaFields: [{
            type: Input
        }], fileInput: [{
            type: ViewChild,
            args: ['file']
        }], onDragOver: [{
            type: HostListener,
            args: ["dragover", ["$event"]]
        }], onDragEnter: [{
            type: HostListener,
            args: ["dragenter", ["$event"]]
        }], onDragEnd: [{
            type: HostListener,
            args: ["dragend", ["$event"]]
        }], onDragLeave: [{
            type: HostListener,
            args: ["dragleave", ["$event"]]
        }], onDrop: [{
            type: HostListener,
            args: ["drop", ["$event"]]
        }], onPaste: [{
            type: HostListener,
            args: ['body:paste', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeAttachmentsComponent, { className: "CeeAttachmentsComponent", filePath: "lib\\field-components\\cee-attachments\\cee-attachments.component.ts", lineNumber: 72 }); })();

export { CeeAttachmentsComponent };
//# sourceMappingURL=ng-cee-core-cee-attachments.component-DaZytsS9.mjs.map
