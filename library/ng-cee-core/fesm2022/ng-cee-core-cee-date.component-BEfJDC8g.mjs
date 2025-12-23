import * as i0 from '@angular/core';
import { forwardRef, Component, Inject, Input, ViewChild } from '@angular/core';
import * as i13 from '@angular/common';
import { DOCUMENT, NgTemplateOutlet, CommonModule, NgSwitch, NgStyle, NgClass } from '@angular/common';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i14$1 from '@angular-material-components/datetime-picker';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import * as i15 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i16 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import * as i12$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import dayjs from 'dayjs';
import * as i6 from 'ngx-daterangepicker-bootstrap';
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService } from 'ngx-daterangepicker-bootstrap';
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
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-image-cropper';
import 'ngx-quill';
import '@angular/cdk/portal';
import '@angular/cdk/overlay';

const _c0 = ["datePicker"];
const _c1 = a0 => ({ "color": a0 });
const _c2 = a0 => ({ "input-group": a0 });
const _c3 = a0 => ({ datePicker: a0 });
const _c4 = a0 => ({ uiType: "with_time", picker: a0 });
const _c5 = a0 => ({ uiType: "default", picker: a0 });
function CeeDateComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldLayout_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", fieldLayout_r1);
} }
function CeeDateComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 19);
    i0.ɵɵelement(1, "input", 20);
    i0.ɵɵelementContainer(2, 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldLayout_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", fieldLayout_r1);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 34);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_1_Template, 2, 1, "label", 31)(2, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_2_Template, 1, 1, "label", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeDateComponent_div_0_ng_template_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_Template, 3, 2, "ng-container", 28)(2, CeeDateComponent_div_0_ng_template_4_div_1_span_2_Template, 2, 0, "span", 29)(3, CeeDateComponent_div_0_ng_template_4_div_1_button_3_Template, 2, 2, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 42, 5);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("day", dayField_r4, ctx_r1.dayBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueDay, $event) || (ctx_r1.inputValueDay = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(dayField_r4, ctx_r1.dayBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("day", dayField_r4, ctx_r1.dayBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const dayField_r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control day-field ", ctx_r1.dayFormatError || ctx_r1.dayError || !ctx_r1.isValid || !ctx_r1.inputValueDay && ctx_r1.isMandatory && (dayField_r4.dirty || dayField_r4.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueDay);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 43, 6);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("month", monthField_r6, ctx_r1.monthBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueMonth, $event) || (ctx_r1.inputValueMonth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(monthField_r6, ctx_r1.monthBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("month", monthField_r6, ctx_r1.monthBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const monthField_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control month-field ", ctx_r1.monthFormatError || ctx_r1.monthError || !ctx_r1.isValid || !ctx_r1.inputValueMonth && ctx_r1.isMandatory && (monthField_r6.dirty || monthField_r6.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueMonth);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 44, 7);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("year", yearField_r8, ctx_r1.yearBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueYear, $event) || (ctx_r1.inputValueYear = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(yearField_r8, ctx_r1.yearBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("year", yearField_r8, ctx_r1.yearBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const yearField_r8 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control year-field ", ctx_r1.yearFormatError || ctx_r1.yearError || !ctx_r1.isValid || !ctx_r1.inputValueYear && ctx_r1.isMandatory && (yearField_r8.dirty || yearField_r8.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueYear);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r9.code).message_text, " ");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValueDay && ctx_r1.isMandatory && (ctx_r1.dayBoxState.dirty || ctx_r1.dayBoxState.touched || ctx_r1.showErrorOnNext) || !ctx_r1.inputValueMonth && ctx_r1.isMandatory && (ctx_r1.monthBoxState.dirty || ctx_r1.monthBoxState.touched || ctx_r1.showErrorOnNext) || !ctx_r1.inputValueYear && ctx_r1.isMandatory && (ctx_r1.yearBoxState.dirty || ctx_r1.yearBoxState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Please enter numbers only.");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered day must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "DD");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered month must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "MM");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered year must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "YYYY");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Please enter a valid ", ctx_r1.fieldData.field_label, ". ");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵtemplate(2, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template, 3, 6, "div", 38)(3, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template, 3, 6, "div", 38)(4, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template, 3, 6, "div", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementStart(6, "div", 39)(7, "div");
    i0.ɵɵtemplate(8, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_8_Template, 2, 0, "p", 40)(9, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_9_Template, 5, 0, "p", 40)(10, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_10_Template, 5, 0, "p", 40)(11, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_11_Template, 5, 0, "p", 40)(12, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_12_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("day"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("month"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("year"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.numberError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dayFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.monthFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.yearFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputValue && !ctx_r1.isValid || ctx_r1.dayError || ctx_r1.monthError || ctx_r1.yearError);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const picker_r11 = i0.ɵɵreference(12);
    i0.ɵɵnextContext(3);
    const maskDateInputs_r12 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", maskDateInputs_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c4, picker_r11));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 59);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDate($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "OK");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_14_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_5_14_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51)(2, "mat-form-field", 52);
    i0.ɵɵtemplate(3, CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_label_3_Template, 2, 1, "mat-label", 28)(4, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_Template, 2, 4, "ng-container", 28);
    i0.ɵɵelementStart(5, "input", 53, 8);
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_blur_5_listener($event) { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r13, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r13, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_focus_5_listener() { i0.ɵɵrestoreView(_r10); const picker_r11 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r11.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r10); const picker_r11 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r11.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 54, 9);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.maskInputValue, $event) || (ctx_r1.maskInputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_dateChange_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateChange()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template, 2, 1, "mat-icon", 55);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 56);
    i0.ɵɵelementStart(11, "ngx-mat-datetime-picker", 57, 10);
    i0.ɵɵlistener("closed", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_ngx_mat_datetime_picker_closed_11_listener() { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: dateField_r13.dirty }, ctx_r1.datePickerState)); })("opened", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_ngx_mat_datetime_picker_opened_11_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleModalCssClass()); });
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_template_13_Template, 2, 0, "ng-template");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, CeeDateComponent_div_0_ng_template_4_ng_container_5_14_Template, 1, 0, null, 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r15 = i0.ɵɵreference(8);
    const picker_r11 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const errorMassageTemplate_r16 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || ctx_r1.invalidDate || datePicker_r15.hasError("matDatepickerMax") || datePicker_r15.hasError("matDatepickerMin") || datePicker_r15.hasError("matDatepickerParse") || !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(32, _c2, !ctx_r1.is_material));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("ngModel", ctx_r1.shadowValue)("mask", ctx_r1.maskString)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory)("hidden", ctx_r1.hide);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("ngxMatDatetimePicker", picker_r11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.maskInputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", picker_r11)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("enableMeridian", ctx_r1.enableMeridian)("stepHour", ctx_r1.timeConfig.hour)("stepMinute", ctx_r1.timeConfig.minute)("stepSecond", ctx_r1.timeConfig.second);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMassageTemplate_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(34, _c3, datePicker_r15));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 66);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDateRange($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_13_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_6_13_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 60)(2, "mat-date-range-input", 61)(3, "input", 62, 11);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.startDateRangeDisp, $event) || (ctx_r1.startDateRangeDisp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_blur_3_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldStart_r18 = i0.ɵɵreference(4); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldStart_r18, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_keyup_3_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldStart_r18 = i0.ɵɵreference(4); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldStart_r18, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_change_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 63, 12);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.endDateRangeDisp, $event) || (ctx_r1.endDateRangeDisp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_blur_6_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldEnd_r20 = i0.ɵɵreference(7); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldEnd_r20, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldEnd_r20 = i0.ɵɵreference(7); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldEnd_r20, ctx_r1.datePickerState)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_focus_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_click_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_dateChange_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangeStart_r21 = i0.ɵɵreference(5); const dateRangeEnd_r22 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.dateRangeChange(dateRangeStart_r21, dateRangeEnd_r22)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template, 2, 1, "mat-icon", 64);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 65)(11, "mat-date-range-picker", null, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_6_13_Template, 1, 0, null, 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const dateFieldStart_r18 = i0.ɵɵreference(4);
    const dateFieldEnd_r20 = i0.ɵɵreference(7);
    const dateRangePicker_r19 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const dateRangeErrorMassageTemplate_r24 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || !ctx_r1.isValid || ctx_r1.invalidDate || dateFieldStart_r18.hasError("matDatepickerMax") || dateFieldStart_r18.hasError("matDatepickerMin") || dateFieldStart_r18.hasError("matDatepickerParse") || dateFieldEnd_r20.hasError("matDatepickerMax") || dateFieldEnd_r20.hasError("matDatepickerMin") || dateFieldEnd_r20.hasError("matDatepickerParse") || !ctx_r1.endDateRangeDisp && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("rangePicker", dateRangePicker_r19);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_start");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.startDateRangeDisp);
    i0.ɵɵproperty("placeholder", ctx_r1.dateRangeStartPlaceholder)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_end");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.endDateRangeDisp);
    i0.ɵɵproperty("placeholder", ctx_r1.dateRangeEndPlaceholder)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", dateRangePicker_r19);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", dateRangeErrorMassageTemplate_r24)("ngTemplateOutletContext", i0.ɵɵpureFunction1(28, _c3, dateFieldEnd_r20));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedRangeCalendarCenter, $event) || (ctx_r1.selectedRangeCalendarCenter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("datesUpdated", function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template_input_datesUpdated_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.datesUpdatedRange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedRangeCalendarCenter);
    i0.ɵɵproperty("drops", ctx_r1.dropsDown)("opens", ctx_r1.opensLeft)("locale", ctx_r1.localeSet)("ranges", ctx_r1.ranges)("showCustomRangeLabel", true)("showCancel", true)("linkedCalendars", true)("alwaysShowCalendars", true)("showRangeLabelOnInput", false)("keepCalendarOpeningWithRange", false)("closeOnAutoApply", true)("autoApply", false)("isTooltipDate", ctx_r1.isTooltipDate)("isCustomDate", ctx_r1.isCustomDate)("isInvalidDate", ctx_r1.isInvalidDate);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const picker_r27 = i0.ɵɵreference(12);
    i0.ɵɵnextContext(3);
    const maskDateInputs_r12 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", maskDateInputs_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c5, picker_r27));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 59);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDate($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_13_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_8_13_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51)(2, "mat-form-field", 52);
    i0.ɵɵtemplate(3, CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_label_3_Template, 2, 1, "mat-label", 28)(4, CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_Template, 2, 4, "ng-container", 28);
    i0.ɵɵelementStart(5, "input", 53, 8);
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_blur_5_listener($event) { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.onBlurDPSetState($event.target.value, dateField_r28)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r28, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_focus_5_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && ctx_r1.setHiddenOverlay()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r26); const picker_r27 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r27.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 68, 9);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.maskInputValue, $event) || (ctx_r1.maskInputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_dateChange_7_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateChange()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template, 2, 1, "mat-icon", 55);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 56);
    i0.ɵɵelementStart(11, "mat-datepicker", 69, 10);
    i0.ɵɵlistener("closed", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_mat_datepicker_closed_11_listener() { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onNoDateSelection(); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: dateField_r28.dirty }, ctx_r1.datePickerState)); })("opened", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_mat_datepicker_opened_11_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleModalCssClass()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_8_13_Template, 1, 0, null, 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r30 = i0.ɵɵreference(8);
    const picker_r27 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const errorMassageTemplate_r16 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || ctx_r1.invalidDate || datePicker_r30.hasError("matDatepickerMax") || datePicker_r30.hasError("matDatepickerMin") || datePicker_r30.hasError("matDatepickerParse") || !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(30, _c2, !ctx_r1.is_material));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("ngModel", ctx_r1.shadowValue)("mask", ctx_r1.maskString)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory)("hidden", ctx_r1.hide);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("matDatepicker", picker_r27);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.maskInputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", picker_r27)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMassageTemplate_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(32, _c3, datePicker_r30));
} }
function CeeDateComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_Template, 4, 3, "div", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelementContainerStart(3, 24);
    i0.ɵɵtemplate(4, CeeDateComponent_div_0_ng_template_4_ng_container_4_Template, 13, 9, "ng-container", 25)(5, CeeDateComponent_div_0_ng_template_4_ng_container_5_Template, 15, 36, "ng-container", 25)(6, CeeDateComponent_div_0_ng_template_4_ng_container_6_Template, 14, 30, "ng-container", 25)(7, CeeDateComponent_div_0_ng_template_4_ng_container_7_Template, 2, 16, "ng-container", 25)(8, CeeDateComponent_div_0_ng_template_4_ng_container_8_Template, 14, 34, "ng-container", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.is_material);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", ctx_r1.additionalParameter["ui_type"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "input_boxes");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "with_time");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "date_range");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "date_range_boostrap");
} }
function CeeDateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 17)(2, CeeDateComponent_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(4, CeeDateComponent_div_0_ng_template_4_Template, 9, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteOffField_r31 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.autocomplete)("ngIfElse", autocompleteOffField_r31);
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r32 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r32.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r32.code).message_text, " ");
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r33 = i0.ɵɵnextContext(2).datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !datePicker_r33.hasError("matDatepickerParse") && !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_ng_template_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "p", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMessageData.message_text);
} }
function CeeDateComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_1_ng_template_1_div_0_Template, 3, 4, "div", 46);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValue && ctx_r1.isMandatory && ctx_r1.showErrorOnNext);
} }
function CeeDateComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47)(2, "div")(3, "p", 49);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r34.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r34.value.message_text, "");
} }
function CeeDateComponent_ng_template_1_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeDateComponent_ng_template_1_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 17)(1, CeeDateComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor)(3, CeeDateComponent_ng_template_1_ng_container_3_Template, 5, 4, "ng-container", 45);
    i0.ɵɵpipe(4, "keyvalue");
    i0.ɵɵelementStart(5, "div", 39)(6, "div");
    i0.ɵɵtemplate(7, CeeDateComponent_ng_template_1_p_7_Template, 2, 1, "p", 40)(8, CeeDateComponent_ng_template_1_p_8_Template, 2, 1, "p", 40)(9, CeeDateComponent_ng_template_1_p_9_Template, 2, 1, "p", 40)(10, CeeDateComponent_ng_template_1_p_10_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeDateComponent_ng_template_1_button_11_Template, 2, 5, "button", 70);
} if (rf & 2) {
    const datePicker_r33 = ctx.datePicker;
    const singleErrorMessage_r35 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r35);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 8, ctx_r1.showComparisonError));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r33.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r33.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r33.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r36 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r36.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r36.code).message_text, " ");
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r37 = i0.ɵɵnextContext(2).datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !datePicker_r37.hasError("matDatepickerParse") && !ctx_r1.endDateRangeDisp && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_ng_template_3_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeDateComponent_ng_template_3_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementStart(1, "div", 39)(2, "div");
    i0.ɵɵtemplate(3, CeeDateComponent_ng_template_3_p_3_Template, 2, 1, "p", 40)(4, CeeDateComponent_ng_template_3_p_4_Template, 2, 1, "p", 40)(5, CeeDateComponent_ng_template_3_p_5_Template, 2, 1, "p", 40)(6, CeeDateComponent_ng_template_3_p_6_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CeeDateComponent_ng_template_3_button_7_Template, 2, 5, "button", 70);
} if (rf & 2) {
    const datePicker_r37 = ctx.datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r37.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r37.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r37.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
} }
function CeeDateComponent_ng_template_5_Case_0_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 72, 8);
    i0.ɵɵlistener("focus", function CeeDateComponent_ng_template_5_Case_0_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r38); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); })("click", function CeeDateComponent_ng_template_5_Case_0_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r38); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_redacted");
    i0.ɵɵproperty("ngModel", ctx_r1.redactedValue)("disabled", !ctx_r1.isEditable)("required", ctx_r1.is_material && ctx_r1.isMandatory)("readonly", true);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_ng_template_5_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 72, 8);
    i0.ɵɵlistener("focus", function CeeDateComponent_ng_template_5_Case_1_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setHiddenOverlay()); })("click", function CeeDateComponent_ng_template_5_Case_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r40); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_redacted");
    i0.ɵɵproperty("ngModel", ctx_r1.redactedValue)("disabled", !ctx_r1.isEditable)("required", ctx_r1.is_material && ctx_r1.isMandatory)("readonly", true);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_5_Case_0_Template, 2, 9)(1, CeeDateComponent_ng_template_5_Case_1_Template, 2, 9);
} if (rf & 2) {
    let tmp_6_0;
    const uiType_r41 = ctx.uiType;
    i0.ɵɵconditional(0, (tmp_6_0 = uiType_r41) === "with_time" ? 0 : tmp_6_0 === "default" ? 1 : -1);
} }
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CeeDateComponent),
    multi: true
};
class CeeDateComponent extends BaseView {
    datepipe;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    elementRef;
    renderer;
    document;
    datePicker;
    stepId;
    fieldData;
    rowData;
    keepState = false;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    minDatex;
    maxDatex;
    isValid = true;
    showCross = false;
    inputValue;
    inputDateRangeValue;
    entryFields = [];
    inputValueDay;
    inputValueMonth;
    inputValueYear;
    dayFormatError;
    monthFormatError;
    yearFormatError;
    dayError;
    monthError;
    yearError;
    nowDate = new Date();
    dayBoxState = {
        touched: false,
        dirty: false
    };
    monthBoxState = {
        touched: false,
        dirty: false
    };
    yearBoxState = {
        touched: false,
        dirty: false
    };
    datePickerState = {
        touched: false,
        dirty: false
    };
    entryFieldsPossibleValues = {
        date: [],
        month: [],
        year: []
    };
    numberError;
    allowManualEntry;
    invalidDate = false;
    dateFormat = 'MM/DD/YYYY';
    apiDateFormat = 'MM/DD/YYYY';
    modalGenericCssClass = '';
    maskString = '00/00/0000';
    autocomplete = true;
    withTime = false;
    timeConfig = { hour: 1, minute: 1, second: 1 };
    enableMeridian = true;
    start;
    end;
    dateRangeStartPlaceholder = "";
    dateRangeEndPlaceholder = "";
    startDateRangeDisp;
    endDateRangeDisp;
    // range = new FormGroup({
    //     startDt: new FormControl<Date | null>(null),
    //     endDt: new FormControl<Date | null>(null),
    // });
    dropsDown = 'down';
    dropsUp = 'up';
    opensRight = 'right';
    opensCenter = 'center';
    opensLeft = 'left';
    selectedRangeCalendarCenter;
    maxDate;
    minDate;
    invalidDates = [];
    ranges = {
        Today: [dayjs().startOf('day'), dayjs().endOf('day')],
    };
    locale = {
        firstDay: 1,
        startDate: dayjs().startOf('day'),
        endDate: dayjs().endOf('day'),
        format: 'DD/MM/YYYY',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
    };
    localeSet;
    tooltips = [
        { date: dayjs(), text: 'Today is just unselectable' },
        { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
    ];
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    overlayContainer;
    hide = false;
    dateMaskFormat = this.dateFormat;
    dataTimeout;
    constructor(datepipe, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, elementRef, renderer, document) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.datepipe = datepipe;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.selectedRangeCalendarCenter = {
            startDate: dayjs().startOf('day'),
            endDate: dayjs().endOf('day'),
        };
    }
    get isFutureDate() {
        return (this.inputValue && this.additionalParameter['future_date_error'] && new Date(this.inputValue) > new Date());
    }
    get shadowValue() {
        return this.inputValue && this.isValidDate(this.inputValue) ? moment.default(this.inputValue.toISOString()).format(this.dateFormat) : null;
    }
    get redactedValue() {
        return this.getRedactedDate(this.shadowValue);
    }
    set shadowValue(v) {
        const date = moment.default(v, this.dateFormat).toDate();
        if (date !== this.inputValue) {
            this.inputValue = date;
        }
    }
    get shadowStartValue() {
        return this.inputDateRangeValue && this.inputDateRangeValue.length > 0 && this.inputDateRangeValue[0] && this.isValidDate(this.inputDateRangeValue[0]) ? moment.default(new Date(this.inputDateRangeValue[0]).toISOString()).format(this.dateFormat) : null;
    }
    set shadowStartValue(v) {
        if (!this.inputDateRangeValue || (this.inputDateRangeValue && this.inputDateRangeValue.length > 0 && new Date(v) !== this.inputDateRangeValue[0])) {
            this.inputDateRangeValue[0] = new Date(v);
        }
    }
    get shadowEndValue() {
        return this.inputDateRangeValue && this.inputDateRangeValue.length > 1 && this.inputDateRangeValue[1] && this.isValidDate(this.inputDateRangeValue[1]) ? moment.default(new Date(this.inputDateRangeValue[1]).toISOString()).format(this.dateFormat) : null;
    }
    set shadowEndValue(v) {
        if (!this.inputDateRangeValue || (this.inputDateRangeValue && this.inputDateRangeValue.length > 1 && new Date(v) !== this.inputDateRangeValue[1])) {
            this.inputDateRangeValue[1] = new Date(v);
        }
    }
    get currDate() {
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }
    get maskInputValue() {
        return this.inputValue;
    }
    set maskInputValue(v) {
        if (v !== this.inputValue) {
            this.inputValue = v;
        }
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.modalGenericCssClass = 'modal-date-picker-' + this.stepId;
    }
    isInvalidDate = (m) => {
        return this.invalidDates.some((d) => d.isSame(m, 'day'));
    };
    isCustomDate = (date) => {
        return date.month() === 0 || date.month() === 6 ? 'mycustomdate' : false;
    };
    isTooltipDate = (m) => {
        const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
        return tooltip ? tooltip.text : false;
    };
    datesUpdatedRange($event) {
        if ($event['endDate'] && $event['startDate']) {
            this.setDateRangeValue({ value: { startDate: dayjs($event['startDate']).format(this.apiDateFormat), endDate: dayjs($event['endDate']).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
        }
    }
    //@HostListener('window:beforeunload')
    // ngOnDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        if (this.overlayContainer != undefined && this.overlayContainer != null) {
            this.renderer.appendChild(this.document.body, this.overlayContainer);
        }
        // Clean up subscriptions
        Object.keys(this.variableObject).forEach(key => {
            if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                this.variableObject[key].unsubscribe();
                delete this.variableObject[key];
            }
        });
        this.variableObject = {};
        // Clean up event listeners
        const dayField = this.elementRef.nativeElement?.querySelector('#dayField');
        const monthField = this.elementRef.nativeElement?.querySelector('#monthField');
        const yearField = this.elementRef.nativeElement?.querySelector('#yearField');
        [dayField, monthField, yearField].forEach(field => {
            if (field && field.removeEventListener) {
                field.removeEventListener('input', field.inputHandler);
            }
        });
        if (this.dataTimeout) {
            clearTimeout(this.dataTimeout);
            this.dataTimeout = null;
        }
        // Clear all object references
        //this.inputValue = null;
        this.inputDateRangeValue = null;
        this.minDatex = null;
        this.maxDatex = null;
        this.nowDate = null;
        // this.startDateRangeDisp = null;
        // this.endDateRangeDisp = null;
        this.selectedRangeCalendarCenter = null;
        this.ranges = null;
        this.invalidDates = [];
        this.tooltips = [];
        // Clear service references
        this.elementRef = null;
        this.renderer = null;
        // Call parent cleanup
        this.onViewUnload();
        // if (this.datePicker) {
        //     this.datePicker.control.setValue(null);
        //     this.datePicker.control.markAsPristine();
        //     this.datePicker.control.markAsUntouched();
        //     this.datePicker.control.updateValueAndValidity();
        // }
        //this.updateFieldData('');
        // if (this.overlayContainer) {
        //     this.renderer.removeChild(this.document.querySelector('dialog'), this.overlayContainer);
        // }
    }
    onViewDataInit() {
        if (this.additionalParameter['ui_type'] && this.additionalParameter['ui_type'] === 'with_time') {
            this.dateFormat = 'MM/DD/YYYY hh:mm A';
            this.apiDateFormat = 'MM/DD/YYYY HH:mm';
            this.withTime = true;
        }
        this.setMinandMaxValue();
        this.setDefaultValue();
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.additionalParameter['Date Format']) {
            this.dateFormat = this.additionalParameter['Date Format'];
        }
        if (this.additionalParameter['API Date Format']) {
            this.apiDateFormat = this.additionalParameter['API Date Format'];
        }
        if (this.additionalParameter['PickerStep']) {
            const pStep = this.additionalParameter['PickerStep'].split("|").map(v => { return Number(v) ? Number(v) : 1; });
            if (pStep.length === 3) {
                this.timeConfig.hour = pStep[0];
                this.timeConfig.minute = pStep[1];
                this.timeConfig.second = pStep[2];
            }
        }
        if (this.dateFormat.includes('H')) {
            this.enableMeridian = false;
        }
        else {
            this.enableMeridian = true;
        }
        if (this.additionalParameter['ui_type'] === "date_range") {
            const value = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            this.startDateRangeDisp = (value && value.length > 0 && value[0]) ? new Date(value[0]) : null;
            this.endDateRangeDisp = (value && value.length > 1 && value[1]) ? new Date(value[1]) : null;
            if ((!value || value == "CURR_DATE") && this.additionalParameter['default_value'] === "CURR_DATE") {
                this.startDateRangeDisp = this.currDate;
                this.endDateRangeDisp = this.currDate;
                this.setDateRangeValue({ value: { startDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat), endDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
            }
        }
        if (this.additionalParameter['ui_type'] === "date_range_boostrap") {
            const value = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            if (value) {
                this.selectedRangeCalendarCenter = {
                    startDate: (value && value.length > 0 && value[0]) ? new Date(value[0]) : null,
                    endDate: (value && value.length > 1 && value[1]) ? new Date(value[1]) : null,
                };
            }
            if ((!value || value == "CURR_DATE") && this.additionalParameter['default_value'] === "CURR_DATE") {
                this.selectedRangeCalendarCenter = {
                    startDate: this.currDate,
                    endDate: this.currDate,
                };
                this.setDateRangeValue({ value: { startDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat), endDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
            }
            this.localeSet = this.locale;
            if (this.additionalParameter['date_with_time_boostrap'] === "true") {
                this.localeSet = {
                    firstDay: 1,
                    startDate: dayjs().startOf('day'),
                    endDate: dayjs().endOf('day'),
                    format: 'DD/MM/YYYY HH:mm:ss',
                    applyLabel: 'Apply',
                    cancelLabel: 'Cancel',
                    fromLabel: 'From',
                    toLabel: 'To',
                };
            }
            if (this.additionalParameter['boostrap_duration_btn']) {
                this.setDateRanges(this.additionalParameter['boostrap_duration_btn']);
            }
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                this.fieldValue = moment.default(this.rowData.value, this.apiDateFormat).format(this.dateFormat);
                const date = moment.default(this.rowData.value, this.apiDateFormat).toDate();
                if (date instanceof Date) {
                    this.inputValue = this.commonUtil.adjustTZ(date);
                    this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
                    this.setBoxDate();
                }
                if (this.fieldValue === "Invalid date") {
                    this.updateFieldData("");
                    this.inputValue = null;
                }
            }
        }
        if (this.fieldValue !== undefined) {
            if (this.fieldValue === 'CURR_DATE') {
                this.fieldValue = moment.default(this.currDate.toISOString()).format(this.apiDateFormat);
                this.onSessionDataUpdated(this.fieldValue);
            }
            const date = moment.default(this.fieldValue, this.apiDateFormat).toDate();
            if (this.fieldValue && date instanceof Date) {
                this.showCross = true;
                this.inputValue = this.commonUtil.adjustTZ(date);
                this.setBoxDate();
            }
        }
        if (this.additionalParameter['entry_fields']) {
            this.entryFields = this.additionalParameter['entry_fields'].split('|').map(s => s.trim());
        }
        if (!this.entryFields.includes('day')) {
            this.nowDate.setDate(this.nowDate.getDate() + 1);
            this.inputValueDay = moment.default(this.nowDate).format('DD');
        }
        if (!this.entryFields.includes('month')) {
            this.inputValueMonth = moment.default(this.nowDate).format('MM');
        }
        if (!this.entryFields.includes('year')) {
            this.inputValueYear = moment.default(this.nowDate).format('YYYY');
        }
        if (this.additionalParameter['allow_manual_entry']) {
            this.allowManualEntry = this.additionalParameter['allow_manual_entry'] === 'true' ? true : false;
        }
        // this.maskString = this.getMaskedInputValue();
        this.maskString = this.dateFormat.includes("A") ? this.getMaskedInputValue() : null;
        if (this.additionalParameter.hasOwnProperty("CEE_MASK_DATE_FORMAT")) {
            this.hide = true;
            this.dateMaskFormat = this.additionalParameter['CEE_MASK_DATE_FORMAT'] != "" ? this.additionalParameter['CEE_MASK_DATE_FORMAT'] : this.dateFormat;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.additionalParameter['ui_type'] === 'input_boxes') {
                    //
                }
                else {
                    document.getElementById(this.fieldData.html_id + '_masktext').focus();
                }
            };
        }
        if (this.additionalParameter['AutoCompleteText']) {
            this.autocomplete = this.additionalParameter['AutoCompleteText'] === 'OFF' ? false : true;
        }
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
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
                let placeholder = this.fieldData?.placeholder_text?.split('||');
                this.dateRangeStartPlaceholder = placeholder && placeholder.length > 0 ? placeholder[0] : '';
                this.dateRangeEndPlaceholder = placeholder && placeholder.length > 1 ? placeholder[1] : '';
            }
        });
        let placeholder = this.fieldData?.placeholder_text?.split('||');
        this.dateRangeStartPlaceholder = placeholder && placeholder.length > 0 ? placeholder[0] : '';
        this.dateRangeEndPlaceholder = placeholder && placeholder.length > 1 ? placeholder[1] : '';
    }
    setDateRanges(ranges) {
        ranges.split("||").map(x => {
            let getData = {};
            let getdata = this.setDateValRanges(x.at(-1), x.substring(0, x.length - 1));
            this.ranges[getdata.name] = getdata.value;
        });
    }
    setDateValRanges(type, number) {
        let name, value;
        // if(type === "d" && number === 1){
        //     name = "Today" ;
        //     value = [dayjs().startOf('day'), dayjs().endOf('day')];
        // }
        if (type === "d") {
            name = `${number} day`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'day')];
        }
        if (type === "m") {
            name = `${number} month`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'month')];
        }
        if (type === "y") {
            name = `${number} year`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'year')];
        }
        return { name: name, value: value };
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        if (dateRangeStart.value && dateRangeEnd.value) {
            this.setDateRangeValue({ value: { startDate: moment.default(new Date(dateRangeStart.value).toISOString()).format(this.apiDateFormat), endDate: moment.default(new Date(dateRangeEnd.value).toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
        }
    }
    getMaskedInputValue() {
        let mask = '';
        let dateFormat = this.dateFormat;
        dateFormat = dateFormat.replace(/A|a/, 'SS');
        dateFormat = dateFormat.replace('MMMM', 'A*');
        dateFormat = dateFormat.replace('MMM', 'SSS');
        dateFormat.split('').forEach(element => {
            // tslint:disable-next-line: max-line-length
            if (('dmyhs').includes(element.toLowerCase())) {
                mask += '0';
            }
            else {
                mask += element;
            }
        });
        return mask;
    }
    dateOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
            return false;
        }
        return true;
    }
    onDateChange() {
        this.onSessionDataUpdated(this.inputValue);
        this.invalidDate = false;
    }
    // To redact date like password for example, 31/03/2025 => ##/##/2025 or ##/03/2025 or 31/03/####
    getRedactedDate(date) {
        if (date == null || date == "" || date == undefined) {
            return null;
        }
        return moment.default(date, this.dateFormat).format(this.dateMaskFormat);
    }
    onDateInput(val, change = false) {
        if (val && (val.length === this.dateFormat.length || change) && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.invalidDate = false;
            this.inputValue = new Date(val);
            this.onSessionDataUpdated(this.inputValue);
        }
        else if (val) {
            this.invalidDate = true;
            this.updateFieldData('', !this.invalidDate);
        }
        else {
            this.inputValue = null;
            this.invalidDate = false;
            this.showCross = false;
            this.updateFieldData('');
            this.onComponentEvent('OnDateSelect');
        }
        if (!change) {
            this.onComponentEvent('OnKeyUp');
        }
    }
    onBlurDP(val) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.invalidDate = false;
        }
    }
    onBlurDPSetState(val, dateField) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.setState(dateField, this.datePickerState);
        }
    }
    setBoxDate() {
        if (this.inputValue) {
            this.inputValueDay = moment.default(this.inputValue).format('DD');
            this.inputValueMonth = moment.default(this.inputValue).format('MM');
            this.inputValueYear = moment.default(this.inputValue).format('YYYY');
        }
    }
    boxKeyUp(boxType, valueState, inputBoxesState) {
        switch (boxType) {
            case 'day':
                if (this.inputValueDay) {
                    this.setState(valueState, inputBoxesState);
                    this.dayFormatError = !(/^\d{2}$/.test(this.inputValueDay) && parseInt(this.inputValueDay) >= 1 && parseInt(this.inputValueDay) <= 31);
                    if (!this.dayFormatError) {
                        this.dayError = !(parseInt(this.inputValueDay) >= 1 && parseInt(this.inputValueDay) <= 31);
                    }
                    else {
                        this.dayError = false;
                    }
                }
                else {
                    this.dayFormatError = false;
                    this.dayError = false;
                }
                break;
            case 'month':
                if (this.inputValueMonth) {
                    this.setState(valueState, inputBoxesState);
                    this.monthFormatError = !(/^\d{2}$/.test(this.inputValueMonth));
                    if (!this.monthFormatError) {
                        this.monthError = !(parseInt(this.inputValueMonth) >= 1 && parseInt(this.inputValueMonth) <= 12);
                    }
                    else {
                        this.monthError = false;
                    }
                }
                else {
                    this.monthFormatError = false;
                    this.monthError = false;
                }
                break;
            case 'year':
                if (this.inputValueYear) {
                    this.setState(valueState, inputBoxesState);
                    this.yearFormatError = !(/^\d{4}$/.test(this.inputValueYear));
                    if (!this.yearFormatError) {
                        this.yearError = !(parseInt(this.inputValueYear) >= 1900 && parseInt(this.inputValueYear) <= 2100);
                    }
                    else {
                        this.yearError = false;
                    }
                }
                else {
                    this.yearFormatError = false;
                    this.yearError = false;
                }
                break;
        }
        if (this.dayError || this.monthError || this.yearError || this.dayFormatError || this.monthFormatError || this.yearFormatError || !this.inputValueYear || !this.inputValueMonth || !this.inputValueDay) {
            this.onSessionDataUpdated('');
        }
        else {
            const boxFullDate = new Date(this.inputValueYear, this.inputValueMonth - 1, this.inputValueDay);
            this.inputValue = boxFullDate;
            this.onSessionDataUpdated(boxFullDate);
        }
    }
    setDateRangeValue(value, inputBoxesState) {
        let appDataToBeStored = [];
        if (value['value']['startDate']) {
            appDataToBeStored.push(value['value']['startDate']);
        }
        if (value['value']['endDate']) {
            appDataToBeStored.push(value['value']['endDate']);
        }
        if (appDataToBeStored.length > 1) {
            // this.inputDateRangeValue = appDataToBeStored;
            this.onSessionDateRangeDataUpdated(appDataToBeStored);
        }
        // this.setState(value, inputBoxesState);
    }
    setState(value, inputBoxesState) {
        // this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        // this.renderer.appendChild(this.document.querySelector('dialog'), this.overlayContainer);
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
        if (this.inputValue == null) {
            this.updateFieldData('');
            return;
        }
        this.onSessionDataUpdated(this.inputValue);
    }
    concatData() { }
    isValidDate(d) {
        return d instanceof Date && !isNaN(d.getDate());
    }
    onSessionDataUpdated(date) {
        if (this.isValidDate(new Date(date))) {
            this.showCross = true;
            let tDatet = this.commonUtil.adjustTZ(new Date(date));
            const tDate = moment.default(tDatet.toISOString());
            this.isValid = this.validateMinMaxRange();
            this.updateFieldData(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat), this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
        else {
            this.inputValue = null;
            this.updateFieldData('', false);
        }
        this.onDirty();
    }
    onSessionDateRangeDataUpdated(date) {
        let dateRangeValue = [];
        let isInputValid = false;
        date.forEach((dt) => {
            if (this.isValidDate(new Date(dt))) {
                this.showCross = true;
                let tDatet = this.commonUtil.adjustTZ(new Date(dt));
                const tDate = moment.default(tDatet.toISOString());
                this.isValid = this.validateDateRangeMinMax(dt);
                dateRangeValue.push(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat));
                isInputValid = true;
            }
            else {
                this.inputValue = null;
                this.updateFieldData('', false);
            }
            this.onDirty();
        });
        if (isInputValid) {
            this.updateFieldData(dateRangeValue, this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
    }
    validateDateRangeMinMax(dt) {
        if (this.maxDatex && new Date(moment.default(this.maxDatex).format('MM/DD/YYYY')) < new Date(moment.default(dt).format('MM/DD/YYYY'))) {
            return false;
        }
        if (this.minDatex && new Date(moment.default(this.minDatex).format('MM/DD/YYYY')) > new Date(moment.default(dt).format('MM/DD/YYYY'))) {
            return false;
        }
        return true;
    }
    validateMinMaxRange() {
        if (this.maxDatex && new Date(moment.default(this.maxDatex).format('MM/DD/YYYY')) < new Date(this.inputValue)) {
            return false;
        }
        if (this.minDatex && new Date(moment.default(this.minDatex).format('MM/DD/YYYY')) > new Date(this.inputValue)) {
            return false;
        }
        return true;
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (this.rowData) {
            this.dataTimeout = setTimeout(() => {
                apiValue = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            }, 0);
            // return;
        }
        if (apiValue) {
            const date = moment.default(apiValue, this.apiDateFormat).toDate();
            if (date instanceof Date) {
                this.inputValue = this.commonUtil.adjustTZ(date);
                this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
                this.setBoxDate();
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        let additionalMinValue = this.additionalParameter['MinValue'];
        let additionalMaxValue = this.additionalParameter['MaxValue'];
        if (apiKey.split('$').length === 3) {
            if (additionalMinValue) {
                if (additionalMinValue !== 'CURR_DATE' && !additionalMinValue.includes('|')) {
                    additionalMinValue = apiKey.split('$')[0] + '$' + additionalMinValue + '$' + apiKey.split('$')[2];
                }
            }
            if (additionalMaxValue) {
                if (additionalMaxValue !== 'CURR_DATE' && !additionalMaxValue.includes('|')) {
                    additionalMaxValue = apiKey.split('$')[0] + '$' + additionalMaxValue + '$' + apiKey.split('$')[2];
                }
            }
        }
        if (apiKey.split('$').length === 4) {
            if (additionalMinValue) {
                if (additionalMinValue !== 'CURR_DATE' && !additionalMinValue.includes('|')) {
                    additionalMinValue = apiKey.split('$')[0] + '$' + additionalMinValue + '$' + apiKey.split('$')[2] + '$' + apiKey.split('$')[3];
                }
            }
            if (additionalMaxValue) {
                if (additionalMaxValue !== 'CURR_DATE' && !additionalMaxValue.includes('|')) {
                    additionalMaxValue = apiKey.split('$')[0] + '$' + additionalMaxValue + '$' + apiKey.split('$')[2] + '$' + apiKey.split('$')[3];
                }
            }
        }
        if (additionalMinValue) {
            if (additionalMinValue === apiKey) {
                this.minDatex = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                const minFieldValue = this.appDataService.getFieldDataByFieldId(this.additionalParameter['MinValue']);
                if (minFieldValue) {
                    this.minDatex = this.commonUtil.adjustTZ(new Date(minFieldValue));
                }
            }
        }
        if (additionalMaxValue) {
            if (additionalMaxValue === apiKey) {
                this.maxDatex = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                const maxFieldValue = this.appDataService.getFieldDataByFieldId(this.additionalParameter['MaxValue']);
                if (maxFieldValue) {
                    this.maxDatex = this.commonUtil.adjustTZ(new Date(maxFieldValue));
                }
            }
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setMinandMaxValue() {
        const additionalMinValue = this.additionalParameter['MinValue'];
        const additionalMaxValue = this.additionalParameter['MaxValue'];
        if (additionalMinValue) {
            this.minDatex = this.commonUtil.adjustTZ(this.getDateOnType(additionalMinValue, 'min'));
        }
        if (additionalMaxValue) {
            this.maxDatex = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
        }
    }
    setDefaultValue() {
        const defVal = this.additionalParameter["default_value"];
        if (defVal === 'CURR_DATE') {
            this.inputValue = new Date(this.currDate);
            this.onDateChange();
        }
    }
    getDateOnType(parameterValue, type) {
        const data = this.returnDateArrayWithType(parameterValue, type);
        if (data.type.toLowerCase() === 'min') {
            return new Date(Math.min.apply(null, data.dates));
        }
        else {
            return new Date(Math.max.apply(null, data.dates));
        }
    }
    returnDateArrayWithType(parameterValue, type) {
        const obj = {
            dates: [parameterValue],
            type
        };
        if (parameterValue.includes('|')) {
            obj.dates = [];
            for (const str of (parameterValue.includes('||') ? parameterValue.split('||')[0] : parameterValue).split('|')) {
                const date = this.returnDate(str);
                if (date) {
                    obj.dates.push(date);
                }
            }
            if (parameterValue.includes('||')) {
                obj.type = parameterValue.split('||')[1];
            }
        }
        else {
            obj.dates = [this.returnDate(parameterValue)];
        }
        return obj;
    }
    returnDate(field) {
        const regex = '([+-]*)([0-9]+)([ydmw])';
        const matched = field.match(new RegExp(regex));
        if (matched) {
            let date = new Date();
            if (matched[3].includes('y')) {
                date = this.calculateDate('y', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('d')) {
                date = this.calculateDate('d', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('m')) {
                date = this.calculateDate('m', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('w')) {
                date = this.calculateDate('w', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            return date;
        }
        else {
            if (field === 'CURR_DATE') {
                return new Date(this.currDate);
            }
            else {
                if (String(this.appData.id).split('$').length === 3) {
                    if (!field.includes('$')) {
                        field =
                            String(this.appData.id).split('$')[0] + '$' + field + '$' + String(this.appData.id).split('$')[2];
                    }
                }
                const value = this.appDataService.getFieldDataByFieldId(field);
                if (value) {
                    return new Date(value);
                }
            }
        }
    }
    /**
     * this function calculates date if max value or min value set as 1w or 1d or 1y or 1m or 1w 1d 1y 1m
     * @param type the type of the min or max value
     * @param currentDate the current from which it needs to be deducted or added
     * @param no the number of date month week or year
     * @param operator subtract or add to the current date
     */
    calculateDate(type, currentDate, no, operator) {
        const date = currentDate;
        switch (type) {
            case 'y':
                if (operator === 'add') {
                    return new Date(date.setFullYear(currentDate.getFullYear() + no));
                }
                else {
                    return new Date(date.setFullYear(currentDate.getFullYear() - no));
                }
            case 'm':
                if (operator === 'add') {
                    return new Date(date.setMonth(currentDate.getMonth() + no));
                }
                else {
                    return new Date(date.setMonth(currentDate.getMonth() - no));
                }
            case 'w':
                if (operator === 'add') {
                    return new Date(date.setDate(currentDate.getDate() + (no * 7)));
                }
                else {
                    return new Date(date.setDate(currentDate.getDate() - (no * 7)));
                }
            case 'd':
                if (operator === 'add') {
                    return new Date(date.setDate(currentDate.getDate() + no));
                }
                else {
                    return new Date(date.setDate(currentDate.getDate() - no));
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
                // default value
                // default value
                if (this.additionalParameter['default_value']) {
                    if (this.additionalParameter['default_value'] === 'CURR_DATE') {
                        this.inputValue = new Date(this.currDate);
                    }
                    else {
                        this.inputValue = this.commonUtil.adjustTZ(new Date(this.additionalParameter['default_value']));
                    }
                    this.showCross = true;
                }
                else {
                    this.inputValue = null;
                    this.showCross = false;
                }
                this.setEmptyUIType();
                this.updateFieldData(this.inputValue ? moment.default(this.inputValue).format(this.apiDateFormat) : '');
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.datePicker.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.datePicker) {
                    this.datePicker.control.markAsUntouched();
                    this.datePicker.control.markAsPristine();
                    this.datePicker.control.updateValueAndValidity();
                }
                this.dayBoxState = {
                    touched: false,
                    dirty: false
                };
                this.monthBoxState = {
                    touched: false,
                    dirty: false
                };
                this.yearBoxState = {
                    touched: false,
                    dirty: false
                };
                this.datePickerState = {
                    touched: false,
                    dirty: false
                };
                return;
            }
        });
    }
    setEmptyUIType() {
        if (this.additionalParameter['ui_type'] === 'input_boxes') {
            this.entryFields.includes('day') && (this.inputValueDay = '');
            this.entryFields.includes('month') && (this.inputValueMonth = '');
            this.entryFields.includes('year') && (this.inputValueYear = '');
        }
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
            this.inputValue = this.commonUtil.adjustTZ(new Date(get_data[unique_id_value]));
            this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
        }
    }
    clearDate(event) {
        this.showCross = false;
        event.stopPropagation();
        this.inputValue = null;
        this.updateFieldData('');
        this.setMinandMaxValue();
        this.onComponentEvent('OnDateSelect');
    }
    onNoDateSelection() {
        if (!this.isValidDate(this.inputValue)) {
            this.showCross = false;
            this.inputValue = null;
            this.updateFieldData('');
            this.setMinandMaxValue();
            this.onComponentEvent('OnDateSelect');
        }
    }
    clearDateRange(event) {
        this.showCross = false;
        event.stopPropagation();
        this.startDateRangeDisp = null;
        this.endDateRangeDisp = null;
        this.updateFieldData('');
        this.setMinandMaxValue();
        this.onComponentEvent('OnDateSelect');
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = this.commonUtil.adjustTZ(new Date(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]));
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](moment.default(this.inputValue).format(this.apiDateFormat));
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
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
    setInputFilter(textbox, inputFilter) {
        const _this = this;
        ["input"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                    if (this.getAttribute('number-error') === '2') {
                        this.setAttribute('number-error', '1');
                    }
                    else {
                        this.setAttribute('number-error', '0');
                    }
                }
                else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    this.setAttribute('number-error', '2');
                    this.dispatchEvent(new Event('input'));
                }
                else {
                    this.value = "";
                    this.setAttribute('number-error', '2');
                    this.dispatchEvent(new Event('input'));
                }
                _this.numberError = (this.getAttribute('number-error') !== '0');
            });
        });
    }
    toggleLanguage(data) {
    }
    toggleModalCssClass() {
        this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        if (this.overlayContainer) {
            const dialog = this.document.querySelector('dialog');
            if (dialog) {
                this.renderer.appendChild(dialog, this.overlayContainer);
            }
            const modalWrapper = window.document.querySelector('.cdk-overlay-pane');
            if (modalWrapper) {
                modalWrapper.classList.toggle('modal-date-picker-wrapper');
                modalWrapper.classList.toggle(this.modalGenericCssClass);
            }
        }
    }
    ngAfterViewInit() {
        this.commonUtil.moveMatDialogToStepModalIfExist();
        const dayField = this.elementRef.nativeElement.querySelector('#dayField');
        const monthField = this.elementRef.nativeElement.querySelector('#monthField');
        const yearField = this.elementRef.nativeElement.querySelector('#yearField');
        if (dayField) {
            this.setInputFilter(dayField, function (value) {
                return /^\d*$/.test(value);
            });
        }
        if (monthField) {
            this.setInputFilter(monthField, function (value) {
                return /^\d*$/.test(value);
            });
        }
        if (yearField) {
            this.setInputFilter(yearField, function (value) {
                return /^\d*$/.test(value);
            });
        }
    }
    setHiddenOverlay() {
        this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        if (this.overlayContainer) {
            const dialog = this.document.querySelector('dialog');
            if (dialog) {
                this.renderer.appendChild(dialog, this.overlayContainer);
            }
        }
    }
    static ɵfac = function CeeDateComponent_Factory(t) { return new (t || CeeDateComponent)(i0.ɵɵdirectiveInject(i13.DatePipe), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeDateComponent, selectors: [["app-cee-date"]], viewQuery: function CeeDateComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePicker = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", rowData: "rowData", keepState: "keepState", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                provideNgxMask(),
                NgxDaterangepickerLocaleService
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 7, vars: 1, consts: [["errorMassageTemplate", ""], ["dateRangeErrorMassageTemplate", ""], ["maskDateInputs", ""], ["autocompleteOffField", ""], ["fieldLayout", ""], ["dayField", "ngModel"], ["monthField", "ngModel"], ["yearField", "ngModel"], ["dateField", "ngModel"], ["datePicker", "ngModel"], ["picker", ""], ["dateFieldStart", "ngModel", "dateRangeStart", ""], ["dateFieldEnd", "ngModel", "dateRangeEnd", ""], ["dateRangePicker", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], ["class", "form-label", 4, "ngIf"], [1, "form-field"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "form-inline"], ["class", "input-group", 4, "ngIf"], [1, "error-message-validation"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["id", "dayField", "type", "text", "placeholder", "DD", "aria-label", "Day", "maxlength", "2", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], ["id", "monthField", "type", "text", "placeholder", "MM", "aria-label", "Month", "maxlength", "2", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], ["id", "yearField", "type", "text", "placeholder", "YYYY", "aria-label", "Year", "maxlength", "4", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "error"], [3, "ngClass"], [3, "floatLabel"], ["matInput", "", 3, "blur", "keyup", "change", "focus", "click", "ngModel", "mask", "placeholder", "disabled", "readonly", "required", "id", "hidden"], ["readonly", "", "tabindex", "-1", 1, "shadow-dateInput", 3, "ngModelChange", "dateChange", "min", "max", "ngxMatDatetimePicker", "ngModel"], ["class", "mat-icon-class", "alt", "Calender Icon Image", "aria-label", "close date picker", "matDatepickerToggleIcon", "", 3, "hidden", "click", 4, "ngIf"], ["matSuffix", "", 3, "for", "disabled"], [3, "closed", "opened", "enableMeridian", "stepHour", "stepMinute", "stepSecond"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["alt", "Calender Icon Image", "aria-label", "close date picker", "matDatepickerToggleIcon", "", 1, "mat-icon-class", 3, "click", "hidden"], [1, "date-range-continer", "form-field"], [1, "form-control", 3, "min", "max", "rangePicker"], ["matStartDate", "", 3, "ngModelChange", "blur", "keyup", "change", "focus", "click", "ngModel", "placeholder", "disabled", "readonly", "required", "id"], ["matEndDate", "", 3, "ngModelChange", "blur", "keyup", "focus", "click", "dateChange", "ngModel", "placeholder", "disabled", "readonly", "required", "id"], ["class", "clear-date-range", "alt", "Calender Icon Image", "aria-label", "clear date picker", "matDatepickerToggleIcon", "", 3, "hidden", "click", 4, "ngIf"], ["matPrefix", "", 3, "for"], ["alt", "Calender Icon Image", "aria-label", "clear date picker", "matDatepickerToggleIcon", "", 1, "clear-date-range", 3, "click", "hidden"], ["type", "text", "id", "rangeCalendarAutoright", "readonly", "", "ngxDaterangepickerBootstrap", "", "aria-describedby", "rangeCalendarAutoLeftDesc", 1, "form-control", 2, "box-shadow", "none", "text-overflow", "ellipsis", "overflow", "hidden", "white-space", "nowrap", 3, "ngModelChange", "datesUpdated", "ngModel", "drops", "opens", "locale", "ranges", "showCustomRangeLabel", "showCancel", "linkedCalendars", "alwaysShowCalendars", "showRangeLabelOnInput", "keepCalendarOpeningWithRange", "closeOnAutoApply", "autoApply", "isTooltipDate", "isCustomDate", "isInvalidDate"], ["readonly", "", "tabindex", "-1", 1, "shadow-dateInput", 3, "ngModelChange", "dateChange", "min", "max", "matDatepicker", "ngModel", "id"], [3, "closed", "opened"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], ["type", "button", 3, "tooltip"], ["matInput", "", 1, "masked-input", 3, "focus", "click", "ngModel", "placeholder", "disabled", "required", "id", "readonly"]], template: function CeeDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeDateComponent_div_0_Template, 6, 6, "div", 15)(1, CeeDateComponent_ng_template_1_Template, 12, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, CeeDateComponent_ng_template_3_Template, 8, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, CeeDateComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgxDaterangepickerBootstrapModule, i6.NgxDaterangepickerBootstrapDirective, NgTemplateOutlet, CommonModule, i13.NgClass, i13.NgForOf, i13.NgIf, i13.NgStyle, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.KeyValuePipe, MatTooltipModule, FormsModule, i14.ɵNgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.MaxLengthValidator, i14.NgModel, i14.NgForm, MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatPrefix, i12.MatSuffix, NgxMatDatetimePickerModule, i14$1.NgxMatDatetimepicker, i14$1.NgxMatDatepickerInput, MatIconModule, i15.MatIcon, MatDatepickerModule, i16.MatDatepicker, i16.MatDatepickerInput, i16.MatDatepickerToggle, i16.MatDatepickerToggleIcon, i16.MatDateRangeInput, i16.MatStartDate, i16.MatEndDate, i16.MatDateRangePicker, NgxMaskDirective, MatInputModule, i12$1.MatInput, TooltipModule, TooltipDirective], styles: [".datepickerHld[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1}.datepickerHld[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.datepickerHld[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;padding:0 1px;background:#fff}.datepickerHld[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   .btn-calender[_ngcontent-%COMP%]{padding:16px 18px;border:0;background-size:20px auto}.datepickerHld[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]{margin-left:-1px;height:calc(1.5em + .75rem + 2px)}.datepickerHld[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%]{width:85%}.mat-icon-class[_ngcontent-%COMP%]{cursor:pointer;position:absolute;float:right;top:2px;right:-3px;color:#0000008a}.day-field[_ngcontent-%COMP%], .month-field[_ngcontent-%COMP%]{width:60px;text-align:center;margin-right:10px}.year-field[_ngcontent-%COMP%]{width:80px;text-align:center}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.shadow-dateInput[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;opacity:0}  .mat-calendar-content button.mat-calendar-body-cell{position:absolute;height:100%}  .mat-calendar-content td.mat-calendar-body-cell{position:relative;height:0}  .date-range-continer .mat-datepicker-toggle{position:absolute;right:15px;top:50px}.date-range-continer[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border:1px #f00 solid}.date-range-continer[_ngcontent-%COMP%]   .clear-date-range[_ngcontent-%COMP%]{cursor:pointer;position:absolute;float:right;top:59px;right:51px;color:#0000008a}.masked-input[_ngcontent-%COMP%]{border:none;background:none}.masked-input[_ngcontent-%COMP%]:focus{outline:none}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeDateComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-date', providers: [
                    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                    provideNgxMask(),
                    NgxDaterangepickerLocaleService
                ], standalone: true, imports: [NgxDaterangepickerBootstrapModule, NgTemplateOutlet, CommonModule, MatTooltipModule, NgSwitch, FormsModule, NgStyle, NgClass, MatFormFieldModule, NgxMatDatetimePickerModule, MatIconModule, MatDatepickerModule,
                    CustomTooltipDirective, NgxMaskDirective, MatInputModule, TooltipModule
                ], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <ng-container *ngIf=\"autocomplete; else autocompleteOffField\">\r\n        <ng-container [ngTemplateOutlet]=\"fieldLayout\"></ng-container>\r\n    </ng-container>\r\n    <ng-template #autocompleteOffField>\r\n        <form autocomplete=\"off\">\r\n            <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n            <ng-container [ngTemplateOutlet]=\"fieldLayout\"></ng-container>\r\n        </form>\r\n    </ng-template>\r\n    <ng-template #fieldLayout>\r\n        <div class=\"form-group\">\r\n            <div class=\"form-label\" *ngIf='!is_material'>\r\n                <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                    <label class=\"col-form-label\"\r\n                        *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                    <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                        [innerHTML]=\"fieldData.field_label\"></label>\r\n                </ng-container>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n                <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n                [tooltip]=\"fieldData.tooltip\"\r\n                    [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <ng-container [ngSwitch]=\"additionalParameter['ui_type']\">\r\n                    <ng-container *ngSwitchCase=\"'input_boxes'\">\r\n                        <div class=\"form-inline\">\r\n                            <div *ngIf=\"entryFields.includes('day')\" class=\"input-group\">\r\n                                <input #dayField=\"ngModel\" id=\"dayField\" type=\"text\"\r\n                                    class=\"form-control day-field {{ dayFormatError || dayError || !isValid || (!inputValueDay && isMandatory && (dayField.dirty || dayField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"DD\" aria-label=\"Day\" (keyup)=\"boxKeyUp('day', dayField, dayBoxState)\"\r\n                                    [(ngModel)]=\"inputValueDay\" maxlength=\"2\" [required]=\"isMandatory\"\r\n                                    (focus)=\"setState(dayField, dayBoxState)\"\r\n                                    (blur)=\"boxKeyUp('day', dayField, dayBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                            <div *ngIf=\"entryFields.includes('month')\" class=\"input-group\">\r\n                                <input #monthField=\"ngModel\" id=\"monthField\" type=\"text\"\r\n                                    class=\"form-control month-field {{ monthFormatError || monthError || !isValid || (!inputValueMonth && isMandatory && (monthField.dirty || monthField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"MM\" aria-label=\"Month\"\r\n                                    (keyup)=\"boxKeyUp('month', monthField, monthBoxState)\" [(ngModel)]=\"inputValueMonth\"\r\n                                    maxlength=\"2\" [required]=\"isMandatory\" (focus)=\"setState(monthField, monthBoxState)\"\r\n                                    (blur)=\"boxKeyUp('month', monthField, monthBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                            <div *ngIf=\"entryFields.includes('year')\" class=\"input-group\">\r\n                                <input #yearField=\"ngModel\" id=\"yearField\" type=\"text\"\r\n                                    class=\"form-control year-field {{ yearFormatError || yearError || !isValid || (!inputValueYear && isMandatory && (yearField.dirty || yearField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"YYYY\" aria-label=\"Year\"\r\n                                    (keyup)=\"boxKeyUp('year', yearField, yearBoxState)\" [(ngModel)]=\"inputValueYear\"\r\n                                    maxlength=\"4\" [required]=\"isMandatory\" (focus)=\"setState(yearField, yearBoxState)\"\r\n                                    (blur)=\"boxKeyUp('year', yearField, yearBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"multipleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"(!inputValueDay && isMandatory && (dayBoxState.dirty || dayBoxState.touched || showErrorOnNext)) || (!inputValueMonth && isMandatory && (monthBoxState.dirty || monthBoxState.touched || showErrorOnNext)) || (!inputValueYear && isMandatory && (yearBoxState.dirty || yearBoxState.touched || showErrorOnNext))\">\r\n                                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}\r\n                                    </p>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <div class=\"error-message-validation\">\r\n                            <div>\r\n                                <p class=\"error\" *ngIf=\"numberError\">Please enter numbers only.</p>\r\n                                <p class=\"error\" *ngIf=\"dayFormatError\">Entered day must be in <span>DD</span> format.\r\n                                </p>\r\n                                <p class=\"error\" *ngIf=\"monthFormatError\">Entered month must be in <span>MM</span>\r\n                                    format.\r\n                                </p>\r\n                                <p class=\"error\" *ngIf=\"yearFormatError\">Entered year must be in <span>YYYY</span>\r\n                                    format.\r\n                                </p>\r\n                                <p class=\"error\"\r\n                                    *ngIf=\"(inputValue && !isValid) || dayError || monthError || yearError\">\r\n                                    Please enter a valid {{fieldData.field_label}}.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'with_time'\">\r\n                        <div [ngClass]=\"{'input-group': !is_material}\"\r\n                            class=\"{{isFutureDate || invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || datePicker.hasError('matDatepickerParse') || (!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n\r\n                                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                                <!-- <input matInput [textMask]=\"maskData\" [ngModel]=\"shadowValue\" -->\r\n                                <ng-container *ngIf=\"hide\">\r\n                                    <ng-container *ngTemplateOutlet=\"maskDateInputs; context:{uiType:'with_time', picker: picker}\"></ng-container>\r\n                                </ng-container>\r\n                                <input matInput [ngModel]=\"shadowValue\" [mask]=\"maskString\"\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && picker.open()\"\r\n                                    (click)=\"!allowManualEntry && picker.open()\"\r\n                                    placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext\" [hidden]=\"hide\">\r\n                                <input class=\"shadow-dateInput\" [min]=\"minDatex\" [max]=\"maxDatex\"\r\n                                    [ngxMatDatetimePicker]=\"picker\" [(ngModel)]=\"maskInputValue\" #datePicker=\"ngModel\"\r\n                                    readonly (dateChange)=\"onDateChange()\" tabindex=\"-1\">\r\n                                <mat-icon class=\"mat-icon-class\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                                    aria-label=\"close date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                                    (click)=\"clearDate($event)\">\r\n                                    clear</mat-icon>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [disabled]=\"!isEditable\">\r\n                                </mat-datepicker-toggle>\r\n                                <ngx-mat-datetime-picker #picker\r\n                                    (closed)=\"setState({touched:true,dirty:dateField.dirty}, datePickerState)\"\r\n                                    (opened)=\"toggleModalCssClass()\" [enableMeridian]=\"enableMeridian\"  [stepHour]=\"timeConfig.hour\"\r\n                                    [stepMinute]=\"timeConfig.minute\" [stepSecond]=\"timeConfig.second\">\r\n                                    <ng-template>\r\n                                        <span>OK</span>\r\n                                      </ng-template>\r\n                                </ngx-mat-datetime-picker>\r\n                            </mat-form-field>                            \r\n                            <ng-template *ngTemplateOutlet=\"errorMassageTemplate; context:{datePicker:datePicker}\"></ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'date_range'\">\r\n                        <div class=\"date-range-continer form-field\"\r\n                        class=\"{{isFutureDate || !isValid || invalidDate || dateFieldStart.hasError('matDatepickerMax') || dateFieldStart.hasError('matDatepickerMin') || dateFieldStart.hasError('matDatepickerParse') || dateFieldEnd.hasError('matDatepickerMax') || dateFieldEnd.hasError('matDatepickerMin') || dateFieldEnd.hasError('matDatepickerParse') || (!endDateRangeDisp && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-date-range-input  [min]=\"minDatex\" [max]=\"maxDatex\" class=\"form-control\" [rangePicker]=\"dateRangePicker\">\r\n                                <input matStartDate [(ngModel)]=\"startDateRangeDisp\"\r\n                                    [placeholder]=\"dateRangeStartPlaceholder\"\r\n                                    #dateFieldStart=\"ngModel\"\r\n                                    #dateRangeStart\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateFieldStart, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateFieldStart, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    (click)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext_start\">\r\n                                <input matEndDate [(ngModel)]=\"endDateRangeDisp\"\r\n                                    [placeholder]=\"dateRangeEndPlaceholder\"\r\n                                    #dateFieldEnd=\"ngModel\"\r\n                                    #dateRangeEnd\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateFieldEnd, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateFieldEnd, datePickerState)\"\r\n                                    (focus)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    (click)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext_end\"\r\n                                    (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\">\r\n                            </mat-date-range-input>\r\n                            <mat-icon class=\"clear-date-range\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                            aria-label=\"clear date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                            (click)=\"clearDateRange($event)\">\r\n                            clear</mat-icon>\r\n                            <mat-datepicker-toggle matPrefix [for]=\"dateRangePicker\"> </mat-datepicker-toggle>\r\n                            <mat-date-range-picker #dateRangePicker></mat-date-range-picker>\r\n                        </div>\r\n                        <!-- <ng-container *ngIf=\"!isValid\"> -->\r\n                            <ng-template *ngTemplateOutlet=\"dateRangeErrorMassageTemplate; context:{datePicker:dateFieldEnd}\"></ng-template>\r\n                        <!-- </ng-container> -->\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'date_range_boostrap'\">\r\n                        <input\r\n                            type=\"text\"\r\n                            id=\"rangeCalendarAutoright\"\r\n                            class=\"form-control\"\r\n                            style=\"box-shadow: none; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;\"\r\n                            readonly\r\n                            ngxDaterangepickerBootstrap\r\n                            [(ngModel)]=\"selectedRangeCalendarCenter\"\r\n                            [drops]=\"dropsDown\"\r\n                            [opens]=\"opensLeft\"\r\n                            [locale]=\"localeSet\"\r\n                            [ranges]=\"ranges\"\r\n                            [showCustomRangeLabel]=\"true\"\r\n                            [showCancel]=\"true\"\r\n                            [linkedCalendars]=\"true\"\r\n                            [alwaysShowCalendars]=\"true\"\r\n                            [showRangeLabelOnInput]=\"false\"\r\n                            [keepCalendarOpeningWithRange]=\"false\"\r\n                            [closeOnAutoApply]=\"true\"\r\n                            [autoApply]=\"false\"\r\n                            [isTooltipDate]=\"isTooltipDate\"\r\n                            [isCustomDate]=\"isCustomDate\"\r\n                            [isInvalidDate]=\"isInvalidDate\"\r\n                            (datesUpdated)=\"datesUpdatedRange($event)\"\r\n                            aria-describedby=\"rangeCalendarAutoLeftDesc\"\r\n                        />\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchDefault>\r\n                        <div [ngClass]=\"{'input-group': !is_material}\"\r\n                            class=\"{{isFutureDate || invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || datePicker.hasError('matDatepickerParse') || (!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n                                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                                <!-- <input matInput [textMask]=\"maskData\" [ngModel]=\"shadowValue\" -->\r\n\r\n                                <ng-container *ngIf=\"hide\">\r\n                                    <ng-container *ngTemplateOutlet=\"maskDateInputs; context:{uiType:'default', picker: picker}\"></ng-container>\r\n                                </ng-container>\r\n                                \r\n                                <input matInput [ngModel]=\"shadowValue\" [mask]=\"maskString\"\r\n                                    (blur)=\"onBlurDP($event.target.value);onBlurDPSetState($event.target.value,dateField)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && setHiddenOverlay()\"\r\n                                    (click)=\"!allowManualEntry && picker.open()\"\r\n                                    placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext\" [hidden]=\"hide\">\r\n\r\n                                <input class=\"shadow-dateInput\" [min]=\"minDatex\" [max]=\"maxDatex\" [matDatepicker]=\"picker\"\r\n                                    [(ngModel)]=\"maskInputValue\" #datePicker=\"ngModel\" readonly\r\n                                    (dateChange)=\"onDateChange()\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext\" tabindex=\"-1\">\r\n                                <mat-icon class=\"mat-icon-class\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                                    aria-label=\"close date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                                    (click)=\"clearDate($event)\">\r\n                                    clear</mat-icon>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [disabled]=\"!isEditable\">\r\n                                </mat-datepicker-toggle>\r\n                                <mat-datepicker #picker\r\n                                    (closed)=\"onNoDateSelection();setState({touched:true,dirty:dateField.dirty}, datePickerState)\"\r\n                                    (opened)=\"toggleModalCssClass()\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <ng-template *ngTemplateOutlet=\"errorMassageTemplate; context:{datePicker:datePicker}\"></ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n<!-- error massage Template -->\r\n<ng-template #errorMassageTemplate let-datePicker=\"datePicker\">\r\n    <ng-container *ngIf=\"multipleErrorMessage else singleErrorMessage\">\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\"\r\n                *ngIf=\"!invalidDate && !datePicker.hasError('matDatepickerParse') && !inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                <p *ngIf=\"isMandatory\"\r\n                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}\r\n                </p>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-template #singleErrorMessage>\r\n        <div class=\"error-message-wrapper\" *ngIf=\"!inputValue && isMandatory && (showErrorOnNext)\">\r\n            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n        <div class=\"error-message-wrapper\">\r\n            <div>\r\n                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                    {{item.value.message_text}}</p>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"error-message-validation\">\r\n        <div>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                {{additionalParameter['max_date_error']}}</p>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                {{additionalParameter['min_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                {{additionalParameter['future_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                {{additionalParameter['invalid_date_error']}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Tooltip with informaion icon -->\r\n    <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n        class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n        i\r\n    </button>\r\n</ng-template>\r\n\r\n<!-- date range error massage Template -->\r\n<ng-template #dateRangeErrorMassageTemplate let-datePicker=\"datePicker\">\r\n    <ng-container *ngIf=\"multipleErrorMessage\">\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\"\r\n                *ngIf=\"!invalidDate && !datePicker.hasError('matDatepickerParse') && !endDateRangeDisp && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                <p *ngIf=\"isMandatory\"\r\n                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}\r\n                </p>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n    <div class=\"error-message-validation\">\r\n        <div>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                {{additionalParameter['max_date_error']}}</p>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                {{additionalParameter['min_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                {{additionalParameter['future_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                {{additionalParameter['invalid_date_error']}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Tooltip with informaion icon -->\r\n    <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n        class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n        i\r\n    </button>\r\n</ng-template>\r\n<!-- Tooltip Template -->\r\n<!-- Tooltip Template -->\r\n<!-- <ng-template #tooltipTemplate>\r\n    <div class=\"tooltip_container\">\r\n        <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n    </div>\r\n</ng-template> -->\r\n\r\n<ng-template #maskDateInputs let-uiType=\"uiType\" let-picker=\"picker\">\r\n    @switch (uiType) {\r\n        @case ('with_time') {\r\n            <input class=\"masked-input\" matInput [ngModel]=\"redactedValue\"\r\n                (focus)=\"picker.open()\"\r\n                (click)=\"picker.open()\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\" \r\n                [attr.tabindex]=\"tabIndexValue\"\r\n                [required]=\"is_material && isMandatory\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext_redacted\" [readonly]=\"true\">\r\n        }\r\n        @case ('default') {\r\n            <input class=\"masked-input\" matInput [ngModel]=\"redactedValue\"\r\n                (focus)=\"setHiddenOverlay()\"\r\n                (click)=\"picker.open()\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\" [attr.tabindex]=\"tabIndexValue\"\r\n                [required]=\"is_material && isMandatory\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext_redacted\" [readonly]=\"true\">\r\n        }\r\n    }\r\n</ng-template>", styles: [".datepickerHld .form-control{border-radius:0;border-color:#d1d1d1}.datepickerHld .form-control:disabled{cursor:not-allowed}.datepickerHld .input-group-text{border-radius:0;border-color:#d1d1d1;padding:0 1px;background:#fff}.datepickerHld .input-group-text .btn-calender{padding:16px 18px;border:0;background-size:20px auto}.datepickerHld .input-group-append{margin-left:-1px;height:calc(1.5em + .75rem + 2px)}.datepickerHld .mat-datepicker-input{width:85%}.mat-icon-class{cursor:pointer;position:absolute;float:right;top:2px;right:-3px;color:#0000008a}.day-field,.month-field{width:60px;text-align:center;margin-right:10px}.year-field{width:80px;text-align:center}.error{color:red}.error span{font-weight:700}.shadow-dateInput{position:absolute;width:1px;height:1px;opacity:0}::ng-deep .mat-calendar-content button.mat-calendar-body-cell{position:absolute;height:100%}::ng-deep .mat-calendar-content td.mat-calendar-body-cell{position:relative;height:0}::ng-deep .date-range-continer .mat-datepicker-toggle{position:absolute;right:15px;top:50px}.date-range-continer .invalid{border:1px #f00 solid}.date-range-continer .clear-date-range{cursor:pointer;position:absolute;float:right;top:59px;right:51px;color:#0000008a}.masked-input{border:none;background:none}.masked-input:focus{outline:none}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i13.DatePipe }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { datePicker: [{
            type: ViewChild,
            args: ['datePicker']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], rowData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeDateComponent, { className: "CeeDateComponent", filePath: "lib\\field-components\\cee-date\\cee-date.component.ts", lineNumber: 54 }); })();

export { CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, CeeDateComponent };
//# sourceMappingURL=ng-cee-core-cee-date.component-BEfJDC8g.mjs.map
