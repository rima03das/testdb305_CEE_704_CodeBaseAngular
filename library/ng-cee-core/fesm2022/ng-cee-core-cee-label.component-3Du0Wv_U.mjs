import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i15 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { H as HighlightPipe } from './ng-cee-core-highlight.pipe-yI79OM27.mjs';
import * as i16 from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i1 from '@angular/platform-browser';
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
import '@angular/forms';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import 'ngx-image-zoom';
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

function CeeLabelComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "iframe", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵproperty("src", ctx_r0.iframeLabel, i0.ɵɵsanitizeResourceUrl);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
    i0.ɵɵpipe(1, "highlight");
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext(2).$implicit;
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 3, labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const labelObj_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.switchEvent(ctx_r0.prepareLink("%id%", labelObj_r3[ctx_r0.showItemKeys[0]]), ctx_r0.showItemRouteNewTab)); });
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_1_Template, 2, 6, "label", 13)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_2_Template, 2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("pointer-events", !ctx_r0.isEditable ? "none" : "auto");
    i0.ɵɵpropertyInterpolate("title", labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]])("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]) && ctx_r0.highlight ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template, 3, 6, "a", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r5 < ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r6 = i0.ɵɵreference(4);
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matMenuTriggerFor", menu_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", fieldLabel_r4.length - ctx_r0.showItemCount, "");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const labelObj_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.switchEvent(ctx_r0.prepareLink("%id%", labelObj_r8[ctx_r0.showItemKeys[0]]), ctx_r0.showItemRouteNewTab)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("pointer-events", !ctx_r0.isEditable ? "none" : "auto");
    i0.ɵɵpropertyInterpolate("title", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]])("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template, 2, 6, "a", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r9 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r9 >= ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_button_2_Template, 2, 2, "button", 10);
    i0.ɵɵelementStart(3, "mat-menu", null, 1);
    i0.ɵɵtemplate(5, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4.length > ctx_r0.showItemCount);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
    i0.ɵɵpipe(1, "highlight");
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext(2).$implicit;
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 3, labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_1_Template, 2, 6, "label", 13)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_2_Template, 2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵpropertyInterpolate("title", labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]) && ctx_r0.highlight ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Template, 3, 3, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r11 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r11 < ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r12 = i0.ɵɵreference(4);
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matMenuTriggerFor", menu_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", fieldLabel_r4.length - ctx_r0.showItemCount, "");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵpropertyInterpolate("title", labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_div_1_Template, 2, 3, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r14 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r14 >= ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_button_2_Template, 2, 2, "button", 10);
    i0.ɵɵelementStart(3, "mat-menu", null, 1);
    i0.ɵɵtemplate(5, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4.length > ctx_r0.showItemCount);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 5)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 6, 3, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showItemClickable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.showItemClickable);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵpipe(1, "highlight");
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 6, fieldLabel_r4, ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fieldLabel_r4, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", ctx_r0.checkIfIframe(fieldLabel_r4), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template, 2, 6, "label", 23)(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template, 1, 6, "label", 24);
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(fieldLabel_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(fieldLabel_r4));
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template, 2, 9, "label", 21)(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_Template, 2, 2);
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(0, !ctx_r0.isHTML(fieldLabel_r4) && ctx_r0.highlight ? 0 : 1);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.truncatedLabel, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r0.truncatedLabel, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.toggleShowMoreHideMore($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isExpanded ? ctx_r0.showLessLabel : ctx_r0.showMoreLabel, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_1_Template, 1, 1)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_2_Template, 1, 1)(3, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template, 2, 1, "button", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(fieldLabel_r4) ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showTruncatedLabel && ctx_r0.displayShowMoreLabel);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Template, 2, 1)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template, 4, 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.showTruncatedLabel ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 5)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showTruncatedList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.showTruncatedList);
} }
function CeeLabelComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4 && fieldLabel_r4 != "" && fieldLabel_r4 != " ");
} }
function CeeLabelComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.tooltipText);
} }
function CeeLabelComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const tooltipTemplate_r20 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbTooltip", tooltipTemplate_r20)("placement", ctx_r0.contentTooltip.position)("innerHTML", ctx_r0.contentTooltip.iconText, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelement(1, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.tooltip, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, CeeLabelComponent_div_0_ng_container_2_Template, 2, 4, "ng-container", 5)(3, CeeLabelComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 6)(4, CeeLabelComponent_div_0_button_4_Template, 2, 2, "button", 7)(5, CeeLabelComponent_div_0_span_5_Template, 1, 3, "span", 8)(6, CeeLabelComponent_div_0_ng_template_6_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.iframeLabel && ctx_r0.iframeLabel != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldLabels);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip && !ctx_r0.contentTooltip.enabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip && ctx_r0.contentTooltip.enabled);
} }
class CeeLabelComponent extends BaseView {
    sanitizer;
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
    cdRef;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    activePosition;
    html_id = '';
    fieldLabels = [];
    labelEmitter;
    _iframeLabel;
    iframeLabel;
    tooltipText = "";
    showTruncatedList = false;
    showItemCount = 1;
    showItemKeys = ['id', 'value'];
    showItemClickable = false;
    showItemRoute = '';
    showItemRouteNewTab = false;
    highlight;
    labelRefreshSubscriber;
    applyFilterSubscriber;
    showTruncatedLabel = false;
    truncatedLabelMaxLen = 0;
    truncatedLabel = [];
    isExpanded = false;
    showMoreLabel = 'Show More';
    showLessLabel = 'Show Less';
    displayShowMoreLabel = true;
    isWaitForDataSet = false;
    contentTooltip = {
        enabled: false,
        position: 'top',
        iconText: 'i'
    };
    flatUnflat;
    dynamicIframeTimeout;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
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
        this.cdRef = cdRef;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData, this.cdRef);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    //     this.unsubscribe(); // unsubscribe the event on destroy
    // }
    ngOnDestroy() {
        if (this.dynamicIframeTimeout) {
            clearTimeout(this.dynamicIframeTimeout);
            this.dynamicIframeTimeout = null;
        }
        // Clean up arrays and objects
        this.fieldLabels = [];
        this.truncatedLabel = [];
        this.showItemKeys = null;
        this.contentTooltip = null;
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
            this.labelEmitter = null;
        }
        if (this.labelRefreshSubscriber) {
            this.labelRefreshSubscriber.unsubscribe();
            this.labelRefreshSubscriber = null;
        }
        if (this.applyFilterSubscriber) {
            this.applyFilterSubscriber.unsubscribe();
            this.applyFilterSubscriber = null;
        }
    }
    concatData() { }
    onViewDataInit() {
        // For unique html id
        // console.log("rowData: ",this.rowData);
        if (this.fieldData.unique_id === "deals-label-field") {
            // console.log(this.fieldData);
        }
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.isWaitForDataSet = this.additionalParameter['CEE_label_wait_for_data_set']?.toLowerCase() == 'true';
        this.contentTooltip.enabled = (this.additionalParameter['CEE_label_show_content_tooltip'] && this.additionalParameter['CEE_label_show_content_tooltip'].toLowerCase() == 'true') ? true : false;
        this.contentTooltip.position = this.additionalParameter['CEE_label_content_tooltip_position'] || 'top';
        this.contentTooltip.iconText = this.additionalParameter['CEE_label_content_tooltip_icon'] || 'i';
        this.fieldData['field_label'] += " ";
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.getDataFormattedValue(this.fieldData.field_label)); // OLD Implementation
        // this.getValue(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))'))) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('data')) {
                    this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
                }
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.getDataFormattedValue(this.commonUtil.getPossibleValue(val)));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            if (this.rowData.value && this.rowData.value.includes('((dynamic))')) {
                                this.fieldLabels.push(this.getDataFormattedValue(this.setDynamicLabelUtil.getDynamicValue({ field_label: this.rowData.value }).field_label));
                            }
                            else {
                                this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                            }
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
                if (this.fieldData.hasOwnProperty('additional_parameters_config') && this.fieldData.additional_parameters_config && !Array.isArray(this.fieldData.additional_parameters_config)) {
                    this.fieldLabels = [this.fieldData.additional_parameters_config];
                }
            }
            else if (this.fieldValue !== undefined && this.fieldValue !== null) {
                this.fieldLabels = [];
                this.fieldValue = this.fieldValue ? this.getDataFormattedValue(this.fieldValue) : this.fieldValue;
                this.fieldLabels.push(this.getDataFormattedValue(this.fieldValue));
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.setDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                // console.log("res.apiKey:", res.apiKey);
                data[res.apiKey] = res.value;
                this.setDynamicLabel(data);
                this.getDynamicIframe(data);
            });
        }
        else if (this.fieldData.field_label.includes('%repeatablePos%')) {
            this.setDynamicFieldLabel();
        }
        if (this.additionalParameter['iframe']) {
            if (!this.additionalParameter['iframe'].includes('((dynamic))')) {
                this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
            }
            this.getDynamicIframe();
        }
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
            let field_box = this.commonUtil.getMaskedData(this.fieldLabels[0], formats[0], formats[1], formats[2]);
            this.fieldLabels = [field_box];
        }
        // commented as this feature is no longer needed
        // if (this.rowData) {            
        //     this.applyFilterSubscriber = this.sharedEventsService.emitOnApplyFilter.subscribe(data => {
        //         if (this.rowData.html_id.includes(data.source)) {
        //             this.highlight = data.highlight
        //         }
        //     })
        // }
        this.showTruncatedList = (this.additionalParameter['CEE_show_list_items_trancated'] && this.additionalParameter['CEE_show_list_items_trancated'].toLowerCase() == 'true') ? true : this.showTruncatedList;
        this.showItemCount = (this.additionalParameter['CEE_show_list_items_limit'] && !isNaN(this.additionalParameter['CEE_show_list_items_limit'])) ? Number(this.additionalParameter['CEE_show_list_items_limit']) : 1;
        this.showItemKeys = this.additionalParameter['CEE_show_list_items_key'] ? this.additionalParameter['CEE_show_list_items_key'].split('||') : this.showItemKeys;
        this.showItemClickable = (this.additionalParameter['CEE_show_list_items_clickable'] && this.additionalParameter['CEE_show_list_items_clickable'].toLowerCase() == 'true') ? true : this.showItemClickable;
        this.showItemRoute = this.additionalParameter['CEE_show_list_items_route'] ? this.additionalParameter['CEE_show_list_items_route'] : '#';
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
        if (this.additionalParameter.hasOwnProperty('CEE_GetIndexFromRB') && this.additionalParameter['CEE_GetIndexFromRB'] == "true") {
            this.labelRefreshSubscriber = this.sharedEventsService.emitOnAddOrRemoveRB.subscribe((res) => {
                this.setDynamicFieldLabel();
            });
        }
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
        if (this.additionalParameter['CEE_truncated_label']) {
            let isTruncateSettingEnabled = (this.additionalParameter['CEE_truncated_label'].toLowerCase() === 'true') ? true : false;
            if (!isTruncateSettingEnabled)
                return;
            this.truncatedLabelMaxLen = parseInt(this.additionalParameter['CEE_truncated_label_char_count']) || 0;
            // console.log(this.truncatedLabelMaxLen, this.additionalParameter);
            this.showMoreLabel = this.additionalParameter['CEE_truncated_show_more_label'] || this.showMoreLabel;
            this.showLessLabel = this.additionalParameter['CEE_truncated_show_less_label'] || this.showLessLabel;
            this.displayShowMoreLabel = (this.additionalParameter['CEE_display_show_more_label'] && this.additionalParameter['CEE_display_show_more_label'].toLowerCase() === 'false') ? false : true;
            if (this.fieldLabels[0].length >= this.truncatedLabelMaxLen) {
                this.showTruncatedLabel = true;
                if (this.isHTML(this.fieldLabels[0])) {
                    const label = this.fieldLabels[0];
                    if (label && label.length >= this.truncatedLabelMaxLen) {
                        this.showTruncatedLabel = true;
                        const containsHtmlTags = /<\/?[a-z][\s\S]*>/i.test(label);
                        if (containsHtmlTags) {
                            this.truncatedLabel = [this.truncateHtmlPreservingTags(label, this.truncatedLabelMaxLen)];
                        }
                        else {
                            this.truncatedLabel = [label.substring(0, this.truncatedLabelMaxLen) + '...'];
                        }
                    }
                }
                else {
                    this.truncatedLabel = [this.fieldLabels[0].substring(0, this.truncatedLabelMaxLen) + "..."];
                }
            }
        }
        // setTimeout(() => {
        //     this.cdRef.detectChanges();
        // }, 2000);
    }
    truncateHtmlPreservingTags(html, maxLen) {
        if (typeof window === 'undefined') {
            return html;
        }
        const div = document.createElement('div');
        div.innerHTML = html;
        let truncated = '';
        let charCount = 0;
        function traverse(node) {
            if (charCount >= maxLen)
                return false;
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent || '';
                const remaining = maxLen - charCount;
                if (text.length <= remaining) {
                    truncated += text;
                    charCount += text.length;
                }
                else {
                    truncated += text.substring(0, remaining) + '...';
                    charCount = maxLen;
                    return false;
                }
            }
            else if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                const tagName = element.tagName.toLowerCase();
                // Start tag with attributes
                truncated += `<${tagName}`;
                Array.from(element.attributes).forEach(attr => {
                    truncated += ` ${attr.name}="${attr.value}"`;
                });
                truncated += `>`;
                // Traverse children
                for (const child of Array.from(element.childNodes)) {
                    if (!traverse(child))
                        break;
                }
                // Close tag
                truncated += `</${tagName}>`;
            }
            return true;
        }
        traverse(div);
        // Clean up DOM element to prevent memory leak
        div.innerHTML = '';
        div.remove();
        return truncated;
    }
    isHTML(str) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(str);
    }
    updateTruncatedLabel() {
        if (this.isExpanded) { // Show More
            this.truncatedLabel = this.fieldLabels;
        }
        else { // Show Less
            const containsHtmlTags = /<\/?[a-z][\s\S]*>/i.test(this.fieldLabels[0]);
            if (containsHtmlTags) {
                this.truncatedLabel = [this.truncateHtmlPreservingTags(this.fieldLabels[0], this.truncatedLabelMaxLen)];
            }
            else {
                this.truncatedLabel = [this.fieldLabels[0].substring(0, this.truncatedLabelMaxLen) + '...'];
            }
        }
    }
    toggleShowMoreHideMore(event) {
        event.stopPropagation();
        this.isExpanded = !this.isExpanded;
        this.updateTruncatedLabel();
    }
    setDynamicFieldLabel() {
        // For Resetting ActiveIndex On Adding or Removing 
        if (this.additionalParameter.hasOwnProperty('CEE_GetIndexFromRB') && this.additionalParameter['CEE_GetIndexFromRB'] == "true") {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.activePosition.activeIndex);
        }
        else {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.rowData.position + 1);
        }
    }
    prepareLink(searchStr, replaceStr) {
        return this.showItemRoute.replaceAll(searchStr, replaceStr);
    }
    getDynamicIframe(data) {
        if (this.additionalParameter['iframe'] && this.additionalParameter['iframe'].includes('((dynamic))')) {
            const iframeLabel = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter['iframe'] }, data).field_label;
            if (this._iframeLabel !== iframeLabel) {
                this._iframeLabel = iframeLabel;
                this.iframeLabel = '';
                const _this = this;
                // Clear any existing timeout to prevent multiple timeouts
                if (this.dynamicIframeTimeout) {
                    clearTimeout(this.dynamicIframeTimeout);
                }
                this.dynamicIframeTimeout = setTimeout(() => {
                    _this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(iframeLabel);
                }, 0);
            }
        }
    }
    onAPICallback(data) {
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            let resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            resData = this.getDataFormattedValue(resData);
            this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
        }
        if (!this.rowData) { // if rowData is null
            data = this.flatUnflat.createNestedObject(data);
            this.setDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                // console.log("LINE-133",this.fieldData.unique_id, resData);
                if (!Array.isArray(resData) && this.additionalParameter['CEE_STRING_FORMAT']) {
                    resData = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], resData);
                }
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
        else {
            const useSecondaryApiKey = !this.isHTML(this.fieldData.field_label);
            this.setDynamicLabel(data, useSecondaryApiKey);
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.additionalParameter['Data Format']) {
                const formats = this.additionalParameter['Data Format'].split('||').map(str => str && str.trim());
                const transformType = formats[0] == "mask" ? "maskLabel" : formats[0];
                formats.shift();
                return this.setDynamicLabelUtil.returnFormattedValue(data, transformType, formats);
                // switch (formats[0].toLowerCase()) {
                //     case 'currency':
                //         return `${getCurrencySymbol(formats[1].trim(), 'narrow')}` +
                //             `${Number(data).toFixed(Number(formats[2].trim())).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                //     case 'time':
                //         return moment(Number(data)).format(formats[1].trim());
                //     case 'date':
                //         return moment(data).format(formats[1].trim());
                //     default:
                //         return data;
                // }
            }
            // if (this.additionalParameter.hasOwnProperty('CEE_Thousand_Separator') && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true') {
            //     return this.commonUtil.formatNumber(data);
            // }
        }
        catch (error) {
            console.error(`Something went wrong while transforming data !!!: ${error}`);
        }
        return data;
    }
    getDynamicLabel(data, useSecondaryApiKey = false) {
        // substitutue repeatablePos and [*]
        if (this.fieldData.html_id && this.fieldData.field_label.includes("[*]")) {
            let i = this.commonUtil.extractLastValue(this.fieldData.html_id, "$");
            let key = this.fieldData.field_label;
            if (key.includes('%repeatablePos%')) {
                key = key.replace('%repeatablePos%', (Number(i) + 1));
            }
            let unique_id = this.fieldData.html_id;
            key = this.commonUtil.findIndicesAndSubstituteStars(key, unique_id, "$");
            this.fieldData.field_label = key;
        }
        return this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data, useSecondaryApiKey);
    }
    setDynamicLabel(data, useSecondaryApiKey = false) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            this.fieldData = this.getDynamicLabel(data, useSecondaryApiKey);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.getDataFormattedValue(this.fieldData.field_label));
            }
        }
    }
    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
    /**
     * function returns a map with possible value id to the value
     * @param values api response data
     */
    returnLabelsMapPossibleValues(values) {
        let data = values;
        for (const val of values) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                data = this.fieldData.possible_values.map(pv => {
                    if (this.commonUtil.getPossibleId(pv) == val) {
                        return this.commonUtil.getPossibleValue(pv);
                    }
                });
            }
        }
        return data;
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
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
            this.fieldLabels = [get_data[unique_id_value]];
            // this.inputValue = get_data[unique_id_value];
            // this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    checkIfIframe(value) {
        if (value.includes('iframe')) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }
        else {
            return this.getDataFormattedValue(value);
        }
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
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.getDataFormattedValue(this.commonUtil.getPossibleValue(val)));
                    }
                }
            }
            else {
                // setTimeout(() => { // OLD Implementation
                const existingValue = changes.rowData.currentValue.value;
                if (existingValue && existingValue.includes('((dynamic))')) {
                    let newFieldData = this.getDynamicLabel(existingValue);
                    if (newFieldData.field_label) {
                        this.fieldLabels = [newFieldData.field_label];
                    }
                }
                else {
                    this.fieldLabels = [existingValue];
                }
                // }, 0); // OLD Implementation
            }
        }
    }
    switchEvent(event, showItemRouteNewTab) {
        const ModalOnPageLeave = this.additionalParameter['ModalOnPageLeave'] ? this.additionalParameter['ModalOnPageLeave'] : null;
        if (showItemRouteNewTab == false) {
            let eventName = event.split('||');
            let resqt = eventName[1] + "##id";
            let primaryFieldData = this.appData;
            primaryFieldData = {
                ...primaryFieldData, ...{
                    id: "newTabId",
                    editable: false,
                    visible: false,
                    mandatory: false,
                    value: eventName[0],
                    apiKey: resqt,
                    isValid: true,
                    responseApiKey: [],
                    requestApiKey: [resqt]
                }
            };
            this.appDataService.setAppData(primaryFieldData);
            this.onComponentEvent('OnClick');
        }
        else {
            let target = showItemRouteNewTab ? '_blank' : '';
            this.wfeEventListHandler.redirectToHref(event, ModalOnPageLeave, target);
        }
    }
    labelClick() {
        if (this.isWaitForDataSet) {
            const subscription = this.sharedEventsService.tableCellDataSet.subscribe(() => {
                subscription.unsubscribe();
                this.onComponentEvent('OnClick');
            });
        }
        else {
            this.onComponentEvent('OnClick');
        }
    }
    static ɵfac = function CeeLabelComponent_Factory(t) { return new (t || CeeLabelComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeLabelComponent, selectors: [["app-cee-label"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", activePosition: "activePosition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["tooltipTemplate", ""], ["menu", "matMenu"], ["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-label", "row"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["container", "body", "tooltipClass", "label-toolip-custom-class", 3, "ngbTooltip", "placement", "innerHTML", 4, "ngIf"], ["title", "label-component", "width", "100%", "height", "100%", "allow", "autoplay; encrypted-media", "allowfullscreen", "", 3, "src"], ["class", "col-6 btn btn-primary menuBtn", 3, "matMenuTriggerFor", 4, "ngIf"], ["href", "javascript:void(0)", "class", "col-6 initial-item", "mat-menu-item", "", 3, "title", "pointer-events", "click", 4, "ngIf"], ["href", "javascript:void(0)", "mat-menu-item", "", 1, "col-6", "initial-item", 3, "click", "title"], [1, "cee-label-highlight", 3, "innerHTML"], [1, "col-6", "btn", "btn-primary", "menuBtn", 3, "matMenuTriggerFor"], ["href", "javascript:void(0)", "mat-menu-item", "", 3, "title", "pointer-events", "click", 4, "ngIf"], ["href", "javascript:void(0)", "mat-menu-item", "", 3, "click", "title"], ["class", "col-6 initial-item alert alert-warning", "role", "alert", 3, "title", 4, "ngIf"], ["role", "alert", 1, "col-6", "initial-item", "alert", "alert-warning", 3, "title"], ["class", "extra-items alert alert-warning", "role", "alert", 3, "title", 4, "ngIf"], ["role", "alert", 1, "extra-items", "alert", "alert-warning", 3, "title"], [3, "innerHTML", "class"], [3, "click", "innerHTML"], [3, "class", "click", 4, "ngIf"], [3, "innerHTML", "class", "click", 4, "ngIf"], [3, "click"], ["class", "see-more-btn", 3, "click", 4, "ngIf"], [3, "innerHTML"], [1, "see-more-btn", 3, "click"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["container", "body", "tooltipClass", "label-toolip-custom-class", 3, "ngbTooltip", "placement", "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text", 3, "innerHTML"]], template: function CeeLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeLabelComponent_div_0_Template, 8, 5, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i13.NgForOf, i13.NgIf, TooltipModule, TooltipDirective, MatMenuModule, i15.MatMenu, i15.MatMenuItem, i15.MatMenuTrigger, HighlightPipe, NgbTooltipModule, i16.NgbTooltip], styles: [".initial-item[_ngcontent-%COMP%]{width:34%!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:5px;margin:5px}.extra-items[_ngcontent-%COMP%], .menuBtn[_ngcontent-%COMP%]{margin:5px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeLabelComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-label', standalone: true, imports: [MatTooltipModule, CommonModule, TooltipModule, MatMenuModule, HighlightPipe, NgbTooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-label row\">\r\n\t\t<ng-container *ngIf=\"iframeLabel && iframeLabel != ''\">\r\n\t\t\t<iframe title=\"label-component\" width=\"100%\" height=\"100%\" [src]=\"iframeLabel\" allow=\"autoplay; encrypted-media\"\r\n\t\t\t\tallowfullscreen  class=\"\r\n\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></iframe>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngFor=\"let fieldLabel of fieldLabels; let i = index\">\r\n\t\t\t<!-- {{fieldLabels.length}} -->\r\n\t\t\t<ng-container *ngIf=\"fieldLabel && fieldLabel !='' && fieldLabel !=' '\">\r\n\t\t\t\t<!-- ################## Show Truncated List ################## -->\r\n\t\t\t\t<ng-container *ngIf=\"showTruncatedList\">\r\n\t\t\t\t\t<!-- ################## Clickable List ################## -->\r\n\t\t\t\t\t<ng-container *ngIf=\"showItemClickable\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t<a *ngIf=\"j<showItemCount\" \r\n\t\t\t\t\t\t\t\thref=\"javascript:void(0)\" \r\n\t\t\t\t\t\t\t\t(click)=\"switchEvent(prepareLink('%id%', labelObj[showItemKeys[0]]), showItemRouteNewTab)\" \r\n\t\t\t\t\t\t\t\tattr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\ttitle=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\tclass=\"col-6 initial-item\" \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t[attr.disabled]=\"!isEditable\" \r\n\t\t\t\t\t\t\t\t[style.pointer-events]=\"!isEditable ? 'none' : 'auto'\" \r\n\t\t\t\t\t\t\t\tmat-menu-item>\r\n\t\t\t\t\t\t\t\t@if(!isHTML(labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]) && highlight) {\r\n\t\t\t\t\t\t\t\t\t<label class=\"cee-label-highlight \" [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]] | highlight : highlight\"></label>\r\n\t\t\t\t\t\t\t\t}@else {\r\n\t\t\t\t\t\t\t\t\t<label>{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</label>\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<button *ngIf=\"fieldLabel.length > showItemCount\" class=\"col-6 btn btn-primary menuBtn\" [matMenuTriggerFor]=\"menu\">+{{fieldLabel.length - showItemCount}}</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"j>=showItemCount\" \r\n\t\t\t\t\t\t\t\t\tattr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\t\ttitle=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\t\thref=\"javascript:void(0)\" \r\n\t\t\t\t\t\t\t\t\t(click)=\"switchEvent(prepareLink('%id%', labelObj[showItemKeys[0]]), showItemRouteNewTab)\" \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t[attr.disabled]=\"!isEditable\" \r\n\t\t\t\t\t\t\t\t\t[style.pointer-events]=\"!isEditable ? 'none' : 'auto'\" \r\n\t\t\t\t\t\t\t\t\tmat-menu-item>\r\n\t\t\t\t\t\t\t\t\t{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- ################## Non Clickable List ################## -->\r\n\t\t\t\t\t<ng-container *ngIf=\"!showItemClickable\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"j<showItemCount\" attr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" title=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" class=\"col-6 initial-item alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\t\t\t\t@if(!isHTML(labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]) && highlight) {\r\n\t\t\t\t\t\t\t\t\t<label class=\"cee-label-highlight \" [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]] | highlight : highlight\"></label>\r\n\t\t\t\t\t\t\t\t}@else {\r\n\t\t\t\t\t\t\t\t\t<label>{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</label>\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<button *ngIf=\"fieldLabel.length > showItemCount\" class=\"col-6 btn btn-primary menuBtn\" [matMenuTriggerFor]=\"menu\">+{{fieldLabel.length - showItemCount}}</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"j>=showItemCount\" attr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" title=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" class=\"extra-items alert alert-warning\" role=\"alert\">{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"!showTruncatedList\">\r\n\t\t\t\t\t@if (!showTruncatedLabel) {\r\n\t\t\t\t\t\t@if (!isHTML(fieldLabel) && highlight) {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"fieldLabel | highlight : highlight\"\r\n\t\t\t\t\t\t\t\t(click)=\"labelClick()\"\r\n\t\t\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"!isHTML(fieldLabel)\" (click)=\"labelClick()\" class=\"\r\n\t\t\t\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t\t\t\t{{fieldLabel}}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"isHTML(fieldLabel)\" [innerHTML]=\"checkIfIframe(fieldLabel)\"\r\n\t\t\t\t\t\t\t\t(click)=\"labelClick()\"\r\n\t\t\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" (click)=\"labelClick()\" class=\"\r\n\t\t\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t@if(!isHTML(fieldLabel)) {\r\n\t\t\t\t\t\t\t\t\t\t{{truncatedLabel}}\r\n\t\t\t\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t\t\t\t<span [innerHTML]=\"truncatedLabel\"></span>\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button (click)=\"this.toggleShowMoreHideMore($event)\" class=\"see-more-btn\" *ngIf=\"showTruncatedLabel && displayShowMoreLabel\">\r\n\t\t\t\t\t\t\t\t\t{{ isExpanded ? showLessLabel : showMoreLabel }}\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<button *ngIf=\"hasTooltip && !contentTooltip.enabled\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText \">i</button>\r\n\t\t<span *ngIf=\"hasTooltip && contentTooltip.enabled\" [ngbTooltip]=\"tooltipTemplate\" [placement]=\"contentTooltip.position\" container=\"body\" tooltipClass=\"label-toolip-custom-class\" [innerHTML]=\"contentTooltip.iconText\">\r\n\t\t</span>\r\n\t\t\r\n\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n\t\t\tclass=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText\" [customTooltip]=\"tooltipTemplate\"\r\n\t\t\t[tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n\t\t\ti\r\n\t\t</button> -->\r\n\r\n\t\t<!-- Tooltip Template -->\r\n\t\t<ng-template #tooltipTemplate>\r\n\t\t\t<div class=\"tooltip_container\">\r\n\t\t\t\t<span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n", styles: [".initial-item{width:34%!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:5px;margin:5px}.extra-items,.menuBtn{margin:5px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }], { stepId: [{
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
        }], activePosition: [{
            type: Input,
            args: ['activePosition']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeLabelComponent, { className: "CeeLabelComponent", filePath: "lib\\field-components\\cee-label\\cee-label.component.ts", lineNumber: 32 }); })();

export { CeeLabelComponent };
//# sourceMappingURL=ng-cee-core-cee-label.component-3Du0Wv_U.mjs.map
