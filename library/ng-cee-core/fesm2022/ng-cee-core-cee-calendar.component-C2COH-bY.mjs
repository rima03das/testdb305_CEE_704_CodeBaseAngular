import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import * as i13 from '@angular/common';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { j as BaseView, U as UserDataHandlerService, d as CEEInternalEmitterService, c as SharedEventsServiceService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i16 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import * as i12$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import 'tslib';
import '@datorama/akita';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
import '@angular/router';
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
import '@angular/cdk/portal';
import '@angular/cdk/overlay';

const _c0 = ["datePicker"];
const _c1 = a0 => ({ "current": a0 });
const _c2 = a0 => ({ "color": a0 });
function CeeCalendarComponent_div_0_div_2_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeCalendarComponent_div_0_div_2_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 34);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCalendarComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_div_2_ng_container_1_label_1_Template, 2, 1, "label", 31)(2, CeeCalendarComponent_div_0_div_2_ng_container_1_label_2_Template, 1, 1, "label", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeCalendarComponent_div_0_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCalendarComponent_div_0_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeCalendarComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_div_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, CeeCalendarComponent_div_0_div_2_span_2_Template, 2, 0, "span", 29)(3, CeeCalendarComponent_div_0_div_2_button_3_Template, 2, 2, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeCalendarComponent_div_0_mat_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeCalendarComponent_div_0_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["unavailable_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div");
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_12_p_2_Template, 2, 1, "p", 38)(3, CeeCalendarComponent_div_0_div_12_p_3_Template, 2, 1, "p", 38)(4, CeeCalendarComponent_div_0_div_12_p_4_Template, 2, 1, "p", 38)(5, CeeCalendarComponent_div_0_div_12_p_5_Template, 2, 1, "p", 38)(6, CeeCalendarComponent_div_0_div_12_p_6_Template, 2, 1, "p", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const datePicker_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r3.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r3.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r3.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.invalidDate || datePicker_r3.hasError("matDatepickerMax") || datePicker_r3.hasError("matDatepickerMin") || ctx_r1.isFutureDate) && ctx_r1.isUnavailableDate);
} }
function CeeCalendarComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeCalendarComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "span", 42);
    i0.ɵɵlistener("keydown.enter", function CeeCalendarComponent_div_0_div_17_Template_span_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(-1)); })("click", function CeeCalendarComponent_div_0_div_17_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(-1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 43);
    i0.ɵɵlistener("keydown.enter", function CeeCalendarComponent_div_0_div_17_Template_span_keydown_enter_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(1)); })("click", function CeeCalendarComponent_div_0_div_17_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(1)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r6 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", week_r6.full);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", week_r6.short, " ");
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dayView_r8.label);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span", 54);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_span_3_Template, 2, 1, "span", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("DayPicker-Day-With-Label", dayView_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dayView_r8.date.getDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", dayView_r8.label);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵlistener("keydown", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_keydown_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleKeyDown($event)); })("click", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_click_0_listener() { const dayView_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.isEditable && !dayView_r8.disabled && ctx_r1.onDateSelected(dayView_r8)); })("keydown.enter", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_keydown_enter_0_listener() { const dayView_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.isEditable && !dayView_r8.disabled && ctx_r1.onDateSelected(dayView_r8)); });
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_Template, 4, 4, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("color", dayView_r8.color);
    i0.ɵɵclassProp("DayPicker-Day--currMonth", dayView_r8.currMonth)("DayPicker-Day--today", dayView_r8.today)("DayPicker-Day--disabled", !ctx_r1.isEditable || dayView_r8.disabled)("DayPicker-Day--selected", dayView_r8.value === ctx_r1.shadowValue)("DayPicker-Day--unAvailable", dayView_r8.unAvailable);
    i0.ɵɵattribute("aria-label", dayView_r8.ariaLabel)("aria-disabled", !ctx_r1.isEditable || dayView_r8.disabled)("aria-selected", dayView_r8.value === ctx_r1.shadowValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", dayView_r8.currMonth);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template, 2, 16, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendarWeek_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", calendarWeek_r9);
} }
function CeeCalendarComponent_div_0_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 44)(2, "div", 45);
    i0.ɵɵtemplate(3, CeeCalendarComponent_div_0_ng_container_27_div_3_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵlistener("focus", function CeeCalendarComponent_div_0_ng_container_27_Template_div_focus_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.OnDayViewFocus($event)); });
    i0.ɵɵtemplate(5, CeeCalendarComponent_div_0_ng_container_27_div_5_Template, 2, 1, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.weekArray);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.calendarDays);
} }
function CeeCalendarComponent_div_0_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 61);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_div_28_div_2_Template_button_click_1_listener() { const m_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setMonthData(m_r11.value)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", m_r11.disabled)("ngClass", i0.ɵɵpureFunction1(3, _c1, m_r11.full == ctx_r1.captionData.month && !m_r11.disabled));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r11.short);
} }
function CeeCalendarComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_28_div_2_Template, 3, 5, "div", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.monthArray);
} }
function CeeCalendarComponent_div_0_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 63);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_div_29_div_2_Template_button_click_1_listener() { const y_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setYearData(y_r13.value)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const y_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, y_r13.value == ctx_r1.captionData.year && !y_r13.disabled))("disabled", y_r13.disabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(y_r13.value);
} }
function CeeCalendarComponent_div_0_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 58);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_29_div_2_Template, 3, 5, "div", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.yearArray);
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r1.returnMessageData(message_r14.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r14.code).message_text, " ");
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_p_1_Template, 2, 4, "p", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_Template, 2, 1, "div", 65);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeCalendarComponent_div_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_Template, 2, 1, "ng-container", 64);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeCalendarComponent_div_0_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("", type_r15.typeName.toLowerCase(), " box");
    i0.ɵɵstyleProp("color", type_r15.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("D-", type_r15.typeName, "");
} }
function CeeCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_2_Template, 4, 3, "div", 5);
    i0.ɵɵelementStart(3, "div", 6)(4, "mat-form-field", 7);
    i0.ɵɵtemplate(5, CeeCalendarComponent_div_0_mat_label_5_Template, 2, 1, "mat-label", 8);
    i0.ɵɵelementStart(6, "input", 9);
    i0.ɵɵlistener("keypress", function CeeCalendarComponent_div_0_Template_input_keypress_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dateOnly($event)); })("keyup", function CeeCalendarComponent_div_0_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r1); const datePicker_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: datePicker_r3.dirty }, ctx_r1.datePickerState)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 10, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCalendarComponent_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "mat-datepicker-toggle", 11);
    i0.ɵɵelementStart(10, "mat-datepicker", 12, 1);
    i0.ɵɵlistener("closed", function CeeCalendarComponent_div_0_Template_mat_datepicker_closed_10_listener() { i0.ɵɵrestoreView(_r1); const datePicker_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: datePicker_r3.dirty }, ctx_r1.datePickerState)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CeeCalendarComponent_div_0_div_12_Template, 7, 5, "div", 13)(13, CeeCalendarComponent_div_0_button_13_Template, 2, 5, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 15)(15, "div", 16)(16, "div", 17);
    i0.ɵɵlistener("keydown", function CeeCalendarComponent_div_0_Template_div_keydown_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleKeyDownCalendar($event)); });
    i0.ɵɵtemplate(17, CeeCalendarComponent_div_0_div_17_Template, 3, 2, "div", 18);
    i0.ɵɵelementStart(18, "div", 19)(19, "div", 20)(20, "div", 21)(21, "div")(22, "span", 22);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_Template_span_click_22_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.displayView("M")); });
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, "\u00A0 ");
    i0.ɵɵelementStart(25, "span", 23);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_Template_span_click_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.displayView("Y")); });
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(27, CeeCalendarComponent_div_0_ng_container_27_Template, 6, 3, "ng-container", 8)(28, CeeCalendarComponent_div_0_div_28_Template, 3, 1, "div", 24)(29, CeeCalendarComponent_div_0_div_29_Template, 3, 1, "div", 25);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(30, CeeCalendarComponent_div_0_ng_container_30_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementStart(31, "div", 26);
    i0.ɵɵtemplate(32, CeeCalendarComponent_div_0_span_32_Template, 2, 6, "span", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const picker_r16 = i0.ɵɵreference(11);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("input-group ", !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("value", ctx_r1.shadowValue)("required", ctx_r1.is_material && ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("matDatepicker", picker_r16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", picker_r16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.allowManualEntry && ctx_r1.datePickerState.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.view.month);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.captionData.month);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.captionData.year);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.day);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.month);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.year);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.typeWiseList);
} }
class CeeCalendarComponent extends BaseView {
    datepipe;
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    elementRef;
    datePicker;
    stepId;
    fieldData;
    rowData;
    keepState = false;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    minDate;
    maxDate;
    isValid = true;
    inputValue;
    now = new Date();
    nowDate = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
    datePickerState = {
        touched: false,
        dirty: false
    };
    dayPickerIndex = new Date();
    monthCaption;
    calendarDays = [];
    dateData = {};
    allowManualEntry;
    invalidDate = false;
    previousDateInputValue = "";
    isUnavailableDate = false;
    dateFormat = 'MM/DD/YYYY';
    apiDateFormat = 'MM/DD/YYYY';
    defaultValue;
    typeWiseList = [];
    weekArray = [];
    monthArray = [];
    yearArray = [];
    locale = 'en';
    captionData = {
        month: '',
        year: ''
    };
    view = {
        day: true,
        month: false,
        year: false
    };
    switchTimeout = null;
    subscriptions = new Subscription();
    jQueryCleanupElements = [];
    momentInstances = []; // Track moment instances
    constructor(datepipe, userDataHandlerService, internalCEEEmitter, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, elementRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.datepipe = datepipe;
        this.userDataHandlerService = userDataHandlerService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.elementRef = elementRef;
    }
    get currDate() {
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }
    updateMonthIndex(index) {
        if (index) {
            if (this.view.day) {
                this.dayPickerIndex.setMonth(this.dayPickerIndex.getMonth() + index);
                this.generateDayPicker();
            }
            else if (this.view.year) {
                let currentYear = (index == -1) ? (this.yearArray[0].value - 12) : (this.yearArray[this.yearArray.length - 1].value + 1);
                this.yearArray = [];
                this.loadYearList(currentYear);
            }
        }
    }
    generateDayPicker() {
        if (this.dayPickerIndex) {
            const captionDate = moment.default(this.dayPickerIndex.toISOString()).locale(this.locale);
            if (captionDate) {
                this.captionData.month = captionDate.format('MMMM');
                this.captionData.year = captionDate.format('YYYY');
            }
            const date = new Date(this.dayPickerIndex);
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const firstCalendarDay = this.getSunday(firstDay);
            const lastCalendarDay = this.getSaturday(lastDay);
            const cDays = [];
            let count = 0;
            for (var d = new Date(firstCalendarDay); d <= lastCalendarDay; d.setDate(d.getDate() + 1)) {
                const index = Math.floor(count / 7);
                if (!cDays[index]) {
                    cDays[index] = [];
                }
                const dayView = {
                    date: new Date(d),
                    value: moment.default(d.toISOString()).format(this.dateFormat),
                    ariaLabel: moment.default(d.toISOString()).format('dddd MMM DD YYYY'),
                    today: d.getTime() === this.nowDate.getTime(),
                    currMonth: d.getMonth() === date.getMonth(),
                    disabled: true,
                    unAvailable: false,
                    label: '',
                    color: ''
                };
                if (this.validateMinMaxRange(d)) {
                    const dateKey = moment.default(d.toISOString()).format(this.apiDateFormat);
                    if (this.dateData[dateKey]) {
                        dayView.disabled = this.dateData[dateKey].disabled;
                        dayView.label = this.dateData[dateKey].label;
                        dayView.color = this.dateData[dateKey].color;
                        dayView.unAvailable = this.dateData[dateKey].unAvailable;
                    }
                    else if (this.dateData['all']) {
                        dayView.disabled = this.dateData['all'].disabled;
                        dayView.label = this.dateData['all'].label;
                        dayView.color = this.dateData['all'].color;
                        dayView.unAvailable = this.dateData['all'].unAvailable;
                    }
                }
                cDays[index].push(dayView);
                count++;
            }
            this.calendarDays = cDays;
        }
    }
    // Check if the entered date value is unavailable i.e Disabled. If yes then return true.
    checkIfUnavailableDate(dateValue) {
        let strDateValue = dateValue ? moment.default(new Date(dateValue).toISOString()).format(this.dateFormat) : "";
        for (const dateList of this.calendarDays) {
            for (const innerDate of dateList) {
                let strInnerDate = moment.default(new Date(innerDate.value).toISOString()).format(this.dateFormat);
                if ((strInnerDate === strDateValue) && (!this.isEditable || innerDate.disabled)) {
                    return true;
                }
            }
        }
        return false;
    }
    getSunday(d) {
        d = new Date(d);
        var day = d.getDay(), diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    }
    getSaturday(d) {
        d = new Date(d);
        var day = d.getDay(), diff = d.getDate() + (6 - day);
        return new Date(d.setDate(diff));
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    ngOnDestroy() {
        if (this.switchTimeout) {
            clearTimeout(this.switchTimeout);
            this.switchTimeout = null;
        }
        // Clear subscriptions
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        // Clean up jQuery references
        this.jQueryCleanupElements.forEach(element => {
            if (element && element.length) {
                element.off(); // Remove all event handlers
            }
        });
        this.jQueryCleanupElements = [];
        // 4. Clear large object references
        this.calendarDays = [];
        this.dateData = {};
        this.typeWiseList = [];
        this.weekArray = [];
        this.monthArray = [];
        this.yearArray = [];
        // 5. Clear moment instances (if tracked)
        this.momentInstances.forEach(instance => {
            if (instance && typeof instance.destroy === 'function') {
                instance.destroy();
            }
        });
        this.momentInstances = [];
        // 6. Clear DOM references
        if (this.datePicker) {
            this.datePicker = null;
        }
        // 7. Clear date references
        this.inputValue = null;
        this.minDate = null;
        this.maxDate = null;
        this.dayPickerIndex = null;
        this.defaultValue = null;
        // 8. Reset flags and state
        this.dViewTabFlag = false;
        this.invalidDate = false;
        this.isUnavailableDate = false;
        // 9. Call parent cleanup
        this.onViewUnload();
    }
    get isFutureDate() {
        return (this.inputValue && this.additionalParameter['future_date_error'] && new Date(this.inputValue) > new Date());
    }
    get shadowValue() {
        return this.inputValue ? moment.default(new Date(this.inputValue).toISOString()).format(this.dateFormat) : "";
    }
    onViewDataInit() {
        this.setMinandMaxValue();
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.additionalParameter['default_value']) {
            this.defaultValue = this.additionalParameter['default_value'];
        }
        if (this.additionalParameter['Date Format']) {
            this.dateFormat = this.additionalParameter['Date Format'];
        }
        if (this.additionalParameter['API Date Format']) {
            this.apiDateFormat = this.additionalParameter['API Date Format'];
        }
        if (this.additionalParameter['allow_manual_entry']) {
            this.allowManualEntry = this.additionalParameter['allow_manual_entry'] === 'true' ? true : false;
        }
        if (this.additionalParameter['LanguageFieldID']) {
            this.subscriptions.add(this.appDataService.getAppDataByFieldId(this.additionalParameter['LanguageFieldID']).pipe(take(1))
                .subscribe(val => {
                this.locale = val.value;
                this.loadWeekList();
                this.loadMonthList();
                this.loadYearList();
            }));
        }
        else {
            this.loadWeekList();
            this.loadMonthList();
            this.loadYearList();
        }
        if (this.fieldValue !== undefined && !Array.isArray(this.fieldValue)) {
            if (this.fieldValue === 'CURR_DATE') {
                this.inputValue = new Date();
                this.onSessionDataUpdated(new Date());
            }
            else {
                this.inputValue = this.fieldValue ? this.commonUtil.adjustTZ(new Date(this.fieldValue)) : "";
                this.onSessionDataUpdated(this.inputValue);
            }
            this.previousDateInputValue = this.shadowValue;
        }
        if (this.defaultValue && (this.defaultValue.includes('d') || this.defaultValue.includes('m') || this.defaultValue.includes('y'))) {
            let calculated_date = this.returnDate(this.defaultValue);
            this.inputValue = calculated_date;
            this.onSessionDataUpdated(calculated_date);
        }
        if (this.fieldData.possible_values.length > 0) {
            for (const pVal of this.fieldData.possible_values) {
                const pvArr = pVal.split('||').map(s => s.trim());
                if (pvArr.length === 5) {
                    const dateVal = pvArr[0].split('|').map(s => s.trim());
                    const typeVal = pvArr[1].split('|').map(s => s.trim());
                    const color = pvArr[2].split('|').map(s => s.trim());
                    const label = pvArr[3].split('|').map(s => s.trim());
                    if (dateVal.length === 2) {
                        if (dateVal[0]) {
                            // dynamic dates
                            this.typeWiseList.push({
                                date: dateVal[0],
                                typeKey: typeVal[0],
                                typeName: typeVal[1],
                                color: color[0] || color[1],
                                label: label[0] || label[1],
                                disabled: (pvArr[4] === 'Clickable' ? false : true)
                            });
                        }
                        else {
                            // static dates
                            this.dateData[dateVal[1] ? dateVal[1] : 'all'] = {
                                color: color[1],
                                label: label[1],
                                disabled: (pvArr[4] === 'Clickable' ? false : true)
                            };
                            this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, dateVal[1] ? new Date(dateVal[1]) : new Date()));
                        }
                    }
                }
            }
            this.generateDayPicker();
        }
        this.processApiRes(this.apiValue);
    }
    setDefaultDateFromAPI() {
        // console.log("unique_id: ",this.fieldData.unique_id)
        // console.log("getAllAppData: ",this.appDataService.getAllAppStoreData())
        // console.log("previousDateInputValue: ", this.previousDateInputValue)
        let appDatas = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        // console.log("appDatas: ",appDatas)
        if (!this.previousDateInputValue && this.defaultValue && (this.defaultValue.includes('##'))) {
            let apiDatas = this.apiDataService.getApiDataByHandler(this.defaultValue.split('##')[0]);
            if (apiDatas && apiDatas.value) {
                let calculated_date = this.commonUtil.adjustTZ(new Date(apiDatas.value[this.defaultValue]));
                this.inputValue = calculated_date;
                this.onSessionDataUpdated(calculated_date);
            }
        }
        if (!appDatas && this.previousDateInputValue) {
            this.inputValue = this.previousDateInputValue;
            this.onSessionDataUpdated(this.previousDateInputValue);
        }
    }
    loadWeekList() {
        const localeData = moment.localeData(this.locale);
        const shortWeek = Array.from(localeData.weekdaysShort());
        this.weekArray = localeData.weekdays().map((i, index) => {
            return { full: i, short: shortWeek[index], value: index };
        });
        // this.weekArray = Array.apply(null, Array(7)).map(function (_, i) {
        //   const week = moment.default(i, 'e').startOf('week').isoWeekday(i + 1).locale(this.locale)
        //   return { full: week.format('dddd'), short: week.format('ddd') };
        // }.bind(this));
    }
    setState(value, inputBoxesState) {
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
    }
    concatData() { }
    onDateSelected(d) {
        this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, d.date));
        this.previousDateInputValue = this.shadowValue;
        this.inputValue = moment.default(d.value, this.dateFormat).toDate();
        this.isUnavailableDate = false;
        this.setState({ touched: true, dirty: true }, this.datePickerState);
        this.onSessionDataUpdated(d.date);
    }
    isValidDate(d) {
        return d instanceof Date && !isNaN(d.getDate());
    }
    dateOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
            return false;
        }
        return true;
    }
    onDateInput(val) {
        if (this.previousDateInputValue === val) {
            return; // When input value is unchanged while keyup.
        }
        this.previousDateInputValue = val;
        if (val && (val.length === this.dateFormat.length) && this.commonUtil.isValidDateStr(val, this.dateFormat)) {
            this.invalidDate = false;
            this.inputValue = new Date(val);
            this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, this.inputValue));
            this.isValid = this.validateMinMaxRange(this.inputValue);
            this.isUnavailableDate = this.checkIfUnavailableDate(val);
            if (!this.isUnavailableDate && this.isValid) {
                this.onSessionDataUpdated(this.inputValue);
            }
        }
        else if (val) {
            this.invalidDate = true;
        }
        else {
            this.invalidDate = false;
            this.isUnavailableDate = false;
        }
    }
    onBlurDP(val) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat)) {
            this.invalidDate = false;
        }
    }
    onSessionDataUpdated(date) {
        if (this.isValidDate(new Date(date))) {
            let tDatet = this.commonUtil.adjustTZ(new Date(date));
            const tDate = moment.default(tDatet.toISOString());
            this.isValid = this.validateMinMaxRange(this.inputValue);
            this.updateFieldData(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat), this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
        else {
            this.inputValue = '';
            this.updateFieldData('', false);
        }
        this.onDirty();
    }
    validateMinMaxRange(d) {
        if (this.maxDate && (new Date(moment.default(this.maxDate).format('MM/DD/YYYY'))).getTime() < new Date(d).getTime()) {
            return false;
        }
        if (this.minDate && (new Date(moment.default(this.minDate).format('MM/DD/YYYY'))).getTime() > new Date(d).getTime()) {
            return false;
        }
        return true;
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        this.setMinandMaxValue();
        this.processApiRes(apiValue);
    }
    processApiRes(apiValue) {
        if (apiValue && Array.isArray(apiValue)) {
            this.setDefaultDateFromAPI();
            for (const apiDate of apiValue) {
                for (const typeData of this.typeWiseList) {
                    const date = apiDate[typeData.date] ? apiDate[typeData.date] : typeData.date;
                    const color = apiDate[typeData.color] ? apiDate[typeData.color] : typeData.color;
                    const label = apiDate[typeData.label] ? apiDate[typeData.label] : typeData.label;
                    const disabled = typeData.disabled;
                    const unAvailable = (apiDate[typeData.typeKey] && apiDate[typeData.typeKey].indexOf('not available') > -1) ? true : false; // typeData.typeKey = 'status'
                    if ((!apiDate[typeData.typeKey] && apiDate[typeData.date]) || (apiDate[typeData.typeKey] && apiDate[typeData.typeKey] === typeData.typeName)) {
                        this.dateData[date] = {
                            color,
                            label,
                            disabled,
                            unAvailable
                        };
                        this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, this.inputValue ? new Date(this.inputValue) : new Date(date)));
                        break;
                    }
                }
            }
            this.generateDayPicker();
        }
    }
    monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months;
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
        if (additionalMinValue) {
            if (additionalMinValue === apiKey) {
                const date = new Date(value);
                this.minDate = this.commonUtil.adjustTZ(new Date(date));
            }
            else {
                const date = this.getDateOnType(additionalMinValue, 'min');
                this.minDate = this.commonUtil.adjustTZ(new Date(date));
            }
        }
        if (additionalMaxValue) {
            if (additionalMaxValue === apiKey) {
                this.maxDate = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                this.maxDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
            }
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setMinandMaxValue() {
        const additionalMinValue = this.additionalParameter['MinValue'];
        const additionalMaxValue = this.additionalParameter['MaxValue'];
        const additionalRange = this.additionalParameter['range'];
        if (additionalMinValue) {
            this.minDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMinValue, 'min'));
        }
        if (additionalMaxValue) {
            this.maxDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
        }
        if (additionalRange) {
            let range;
            if (/^[0-9]+$/.test(additionalRange)) {
                range = additionalRange + 'd';
            }
            else {
                const handlerData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(additionalRange));
                const rangeApiVal = this.setApiCallBackDataUtil.setApiCallBackData(additionalRange, handlerData ? handlerData.value : {});
                if (/^[0-9]+$/.test(rangeApiVal)) {
                    range = rangeApiVal + 'd';
                }
            }
            if (range) {
                this.minDate = this.getDateOnType('CURR_DATE', 'min');
                const date = this.getDateOnType(range, 'max');
                date.setDate(date.getDate() - 1);
                this.maxDate = date;
            }
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
                // console.log(str, date);
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
            else {
                console.error('Something is wrong with min or max value');
            }
            return date;
        }
        else {
            if (field === 'CURR_DATE') {
                return new Date();
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
                    return new Date(moment.default(value).format());
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
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            let date;
                            if (this.additionalParameter['default_value'] === 'CURR_DATE') {
                                date = new Date(this.currDate);
                            }
                            else {
                                date = this.commonUtil.adjustTZ(new Date(paramter.value));
                            }
                            this.inputValue = moment.default(new Date(date).toISOString()).format(this.dateFormat);
                            this.updateFieldData(moment.default(new Date(date).toISOString()).format(this.apiDateFormat));
                            break;
                        }
                        else {
                            this.inputValue = '';
                            this.updateFieldData('');
                        }
                    }
                }
                else {
                    this.inputValue = '';
                    this.updateFieldData('');
                }
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
            this.inputValue = this.commonUtil.adjustTZ(new Date(get_data[unique_id_value]));
            this.updateFieldData(moment.default(this.inputValue).format('MM/DD/YYYY'));
        }
    }
    clearDate(event) {
        event.stopPropagation();
        this.inputValue = null;
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
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](moment.default(this.inputValue).format('MM/DD/YYYY'));
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // throw new Error('Method not implemented.');
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
    loadMonthList() {
        const localeData = moment.localeData(this.locale);
        const shortMonth = Array.from(localeData.monthsShort());
        this.monthArray = localeData.months().map((i, index) => {
            return { full: i, short: shortMonth[index], value: index };
        });
    }
    loadYearList(year = null) {
        if (year == null) {
            if (this.captionData.year) {
                year = this.captionData.year;
            }
            else {
                year = new Date().getFullYear();
            }
        }
        for (let y = year; y < (year + 12); y++) {
            let disabled = false;
            if (this.minDate && y < new Date(this.minDate).getFullYear()) {
                disabled = true;
            }
            if (this.maxDate && y > new Date(this.maxDate).getFullYear()) {
                disabled = true;
            }
            this.yearArray.push({
                value: y,
                disabled
            });
        }
    }
    displayView(view = 'D') {
        switch (view) {
            case 'D':
                this.view = { day: true, month: false, year: false };
                break;
            case 'M':
                if (this.view.month) {
                    this.view = { day: true, month: false, year: false };
                }
                else {
                    const minDate = new Date(this.minDate);
                    const maxDate = new Date(this.maxDate);
                    this.monthArray = this.monthArray.map((i, index) => {
                        let disabled = false;
                        if (this.minDate &&
                            ((this.captionData.year < minDate.getFullYear()) ||
                                (this.captionData.year == minDate.getFullYear()) && (index < minDate.getMonth()))) {
                            disabled = true;
                        }
                        if (this.maxDate &&
                            ((this.captionData.year > maxDate.getFullYear()) ||
                                (this.captionData.year == minDate.getFullYear()) && (index > maxDate.getMonth()))) {
                            disabled = true;
                        }
                        return {
                            ...i,
                            disabled
                        };
                    });
                    if (this.minDate) {
                    }
                    if (this.maxDate) {
                    }
                    this.view = { day: false, month: true, year: false };
                }
                break;
            case 'Y':
                if (this.view.year) {
                    this.view = { day: true, month: false, year: false };
                }
                else {
                    this.view = { day: false, month: false, year: true };
                }
                break;
        }
    }
    setMonthData(month) {
        this.dayPickerIndex.setUTCMonth(month);
        this.generateDayPicker();
        this.displayView('D');
    }
    setYearData(year) {
        this.dayPickerIndex.setFullYear(year);
        this.generateDayPicker();
        this.displayView('M');
    }
    handleKeyDown(e) {
        const target = e.currentTarget;
        const targetNext = target.nextElementSibling;
        const targetPrevious = target.previousElementSibling;
        const targetParentNext = target.parentNode.nextElementSibling && target.parentNode.nextElementSibling.nodeName === 'DIV' ? target.parentNode.nextElementSibling.querySelector('.DayPicker-Day--currMonth:first-child') : null;
        const targetParentPrevious = target.parentNode.previousElementSibling && target.parentNode.previousElementSibling.nodeName === 'DIV' ? target.parentNode.previousElementSibling.querySelector('.DayPicker-Day--currMonth:last-child') : null;
        const targetIndex = $(target).index();
        const targetParentDown = target.parentNode.nextElementSibling && target.parentNode.nextElementSibling.nodeName === 'DIV' ? target.parentNode.nextElementSibling.querySelector('.DayPicker-Day--currMonth:nth-child(' + (targetIndex + 1) + ')') : null;
        const targetParentUp = target.parentNode.previousElementSibling && target.parentNode.previousElementSibling.nodeName === 'DIV' ? target.parentNode.previousElementSibling.querySelector('.DayPicker-Day--currMonth:nth-child(' + (targetIndex + 1) + ')') : null;
        switch (e.key) {
            case 'Tab':
                this.switchTimeout = setTimeout(() => {
                    target.tabIndex = "-1";
                    $(target.parentNode.parentNode).attr("tabindex", this.tabIndexValue);
                    this.dViewTabFlag = false;
                }, 0);
                break;
            case 'ArrowRight':
                if (targetNext && targetNext.nodeName === 'DIV' && targetNext.classList.contains('DayPicker-Day--currMonth')) {
                    target.tabIndex = "-1";
                    targetNext.tabIndex = "0";
                    targetNext.focus();
                }
                else if (targetParentNext) {
                    target.tabIndex = "-1";
                    targetParentNext.tabIndex = "0";
                    targetParentNext.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (targetPrevious && targetPrevious.nodeName === 'DIV' && targetPrevious.classList.contains('DayPicker-Day--currMonth')) {
                    target.tabIndex = "-1";
                    targetPrevious.tabIndex = "0";
                    targetPrevious.focus();
                }
                else if (targetParentPrevious) {
                    target.tabIndex = "-1";
                    targetParentPrevious.tabIndex = "0";
                    targetParentPrevious.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowDown':
                if (targetParentDown) {
                    target.tabIndex = "-1";
                    targetParentDown.tabIndex = "0";
                    targetParentDown.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowUp':
                if (targetParentUp) {
                    target.tabIndex = "-1";
                    targetParentUp.tabIndex = "0";
                    targetParentUp.focus();
                }
                e.preventDefault();
                break;
        }
    }
    handleKeyDownCalendar(e) {
        if (e.target && (e.target.classList.contains('DayPicker-wrapper') || e.target.classList.contains('DayPicker-NavButton'))) {
            switch (e.key) {
                case 'ArrowRight':
                    this.updateMonthIndex(1);
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                    this.updateMonthIndex(-1);
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    this.updateMonthIndex(12);
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    this.updateMonthIndex(-12);
                    e.preventDefault();
                    break;
            }
        }
    }
    dViewTabFlag = false;
    OnDayViewFocus(e) {
        if (!this.dViewTabFlag) {
            const currentTarget = $(e.currentTarget);
            const dayPickerElements = $('.DayPicker-Day--currMonth');
            // Store references for cleanup
            this.jQueryCleanupElements.push(currentTarget, dayPickerElements);
            currentTarget.attr("tabindex", "-1");
            dayPickerElements.eq(0).attr("tabindex", "0").trigger("focus");
            this.dViewTabFlag = true;
        }
    }
    static ɵfac = function CeeCalendarComponent_Factory(t) { return new (t || CeeCalendarComponent)(i0.ɵɵdirectiveInject(i13.DatePipe), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCalendarComponent, selectors: [["app-cee-calendar"]], viewQuery: function CeeCalendarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePicker = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", rowData: "rowData", keepState: "keepState", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["datePicker", "ngModel"], ["picker", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], ["class", "form-label", 4, "ngIf"], [1, "form-field"], [3, "floatLabel"], [4, "ngIf"], ["matInput", "", "maxlength", "10", 3, "keypress", "keyup", "placeholder", "value", "required", "disabled", "readonly"], ["matInput", "", "tabindex", "-1", "readonly", "", 1, "shadow-dateInput", 3, "ngModelChange", "min", "max", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], [3, "closed", "disabled"], ["class", "error-message-validation", 4, "ngIf"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [1, "calendar-view"], ["lang", "en", 1, "DayPicker"], [1, "DayPicker-wrapper", 3, "keydown"], ["class", "DayPicker-NavBar", 4, "ngIf"], [1, "DayPicker-Months"], ["role", "grid", 1, "DayPicker-Month"], ["role", "heading", 1, "DayPicker-Caption"], [1, "m-data", 3, "click"], [1, "y-data", 3, "click"], ["class", "monthpicker-body", 4, "ngIf"], ["class", "yearpicker-body", 4, "ngIf"], [1, "field", "field-type-label", "field-container"], [3, "class", "color", 4, "ngFor", "ngForOf"], [1, "form-label"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "error-message-validation"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "button", 3, "tooltip"], [1, "DayPicker-NavBar"], ["role", "button", "aria-label", "Previous Month", 1, "DayPicker-NavButton", "DayPicker-NavButton--prev", 3, "keydown.enter", "click"], ["role", "button", "aria-label", "Next Month", 1, "DayPicker-NavButton", "DayPicker-NavButton--next", 3, "keydown.enter", "click"], ["role", "rowgroup", 1, "DayPicker-Weekdays"], ["role", "row", 1, "DayPicker-WeekdaysRow"], ["class", "DayPicker-Weekday", 3, "title", 4, "ngFor", "ngForOf"], ["role", "rowgroup", 1, "DayPicker-Body", 3, "focus"], ["class", "DayPicker-Week", "role", "row", 4, "ngFor", "ngForOf"], [1, "DayPicker-Weekday", 3, "title"], ["role", "row", 1, "DayPicker-Week"], ["class", "DayPicker-Day", "role", "gridcell", 3, "DayPicker-Day--currMonth", "DayPicker-Day--today", "DayPicker-Day--disabled", "DayPicker-Day--selected", "DayPicker-Day--unAvailable", "color", "keydown", "click", "keydown.enter", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "DayPicker-Day", 3, "keydown", "click", "keydown.enter"], [3, "DayPicker-Day-With-Label", 4, "ngIf"], [1, "Day-Picker-Day"], ["class", "Day-Picker-Label", 4, "ngIf"], [1, "Day-Picker-Label"], [1, "monthpicker-body"], [1, "row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "click", "disabled", "ngClass"], [1, "yearpicker-body"], [3, "click", "ngClass", "disabled"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeCalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCalendarComponent_div_0_Template, 33, 34, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatSuffix, MatInputModule, i12$1.MatInput, MatTooltipModule, CommonModule, i13.NgClass, i13.NgForOf, i13.NgIf, i13.NgStyle, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgModel, MatDatepickerModule, i16.MatDatepicker, i16.MatDatepickerInput, i16.MatDatepickerToggle, TooltipModule, TooltipDirective], styles: [".DayPicker[_ngcontent-%COMP%]{display:inline-block;font-size:1rem}.DayPicker-wrapper[_ngcontent-%COMP%]{position:relative;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-Months[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month[_ngcontent-%COMP%]{display:table;margin:1em 1em 0;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-NavButton[_ngcontent-%COMP%]{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer}.DayPicker-NavButton[_ngcontent-%COMP%]:hover{opacity:.8}.DayPicker-NavButton--prev[_ngcontent-%COMP%]{margin-right:1.5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC)}.DayPicker-NavButton--next[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==)}.DayPicker-NavButton--interactionDisabled[_ngcontent-%COMP%]{display:none}.DayPicker-Caption[_ngcontent-%COMP%]{display:table-caption;margin-bottom:.5em;padding:0 .5em;text-align:left}.DayPicker-Caption[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-weight:500;font-size:1.15em}.DayPicker-Weekdays[_ngcontent-%COMP%]{display:table-header-group;margin-top:1em}.DayPicker-WeekdaysRow[_ngcontent-%COMP%]{display:table-row}.DayPicker-Weekday[_ngcontent-%COMP%]{display:table-cell;padding:.5em;color:#8b9898;text-align:center;font-size:.875em}.DayPicker-Weekday[_ngcontent-%COMP%]   abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:none}.DayPicker-Body[_ngcontent-%COMP%]{display:table-row-group}.DayPicker-Week[_ngcontent-%COMP%]{display:table-row}.DayPicker-Day[_ngcontent-%COMP%]{display:table-cell;padding:.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer}.DayPicker-WeekNumber[_ngcontent-%COMP%]{display:table-cell;padding:.5em;min-width:1em;border-right:1px solid #EAECEC;color:#8b9898;vertical-align:middle;text-align:right;font-size:.75em;cursor:pointer}.DayPicker--interactionDisabled[_ngcontent-%COMP%]   .DayPicker-Day[_ngcontent-%COMP%]{cursor:default}.DayPicker-Footer[_ngcontent-%COMP%]{padding-top:.5em}.DayPicker-TodayButton[_ngcontent-%COMP%]{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:.875em;cursor:pointer}.DayPicker-Day--today[_ngcontent-%COMP%]{color:#d0021b;font-weight:700}.DayPicker-Day--outside[_ngcontent-%COMP%]{color:#8b9898;cursor:default}.DayPicker-Day--disabled[_ngcontent-%COMP%]{color:#dce0e0;cursor:default}.DayPicker-Day--sunday[_ngcontent-%COMP%]{background-color:#f7f8f8}.DayPicker-Day--sunday[_ngcontent-%COMP%]:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff}.DayPicker-Day--selected[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa}.DayPicker[_ngcontent-%COMP%]:not(.DayPicker--interactionDisabled)   .DayPicker-Day[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff}.DayPickerInput[_ngcontent-%COMP%]{display:inline-block}.DayPickerInput-OverlayWrapper[_ngcontent-%COMP%]{position:relative}.DayPickerInput-Overlay[_ngcontent-%COMP%]{position:absolute;left:0;z-index:1;background:#fff;box-shadow:0 2px 5px #00000026}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.shadow-dateInput[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;opacity:0}.monthpicker-body[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]{width:300px}.monthpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;border:none;background:transparent;height:50px}.monthpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .yearpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f0f8ff}.monthpicker-body[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%]{background-color:#4a90e2;font-weight:700}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCalendarComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-calendar', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatTooltipModule, CommonModule, FormsModule, MatDatepickerModule, CustomTooltipDirective, NgClass, NgStyle, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <!-- Tooltip Template -->\r\n    <!-- <ng-template #tooltipTemplate>\r\n        <div class=\"tooltip_container\">\r\n            <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n        </div>\r\n    </ng-template> -->\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\" *ngIf='!is_material'>\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\" class=\"input-group {{(!inputValue &&\r\n\t\t\tisMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                <input matInput placeholder=\"{{fieldData.placeholder_text}}\" [value]=\"shadowValue\" maxlength=\"10\"\r\n                    [required]=\"is_material && isMandatory\" [disabled]=\"!isEditable\" [readonly]=\"!allowManualEntry\"\r\n                    [attr.tabindex]=\"tabIndexValue\"\r\n                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                    (keypress)=\"dateOnly($event)\"\r\n                    (keyup)=\"onDateInput($event.target.value); setState({touched:true,dirty:datePicker.dirty}, datePickerState)\">\r\n                <input class=\"shadow-dateInput\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\"\r\n                    [(ngModel)]=\"inputValue\" #datePicker=\"ngModel\" tabindex=\"-1\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <!-- Date picker is disabled i.e disabled = true, as already calendar is used below to select the date from. -->\r\n                <mat-datepicker #picker (closed)=\"setState({touched:true,dirty:datePicker.dirty}, datePickerState)\"\r\n                    [disabled]=\"true\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <div class=\"error-message-validation\" *ngIf=\"allowManualEntry && datePickerState.touched\">\r\n                <div>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                        {{additionalParameter['max_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                        {{additionalParameter['min_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                        {{additionalParameter['future_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                        {{additionalParameter['invalid_date_error']}}</p>\r\n                    <p class=\"error\"\r\n                        *ngIf=\"!(invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || isFutureDate) && isUnavailableDate\">\r\n                        {{additionalParameter['unavailable_date_error']}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n                class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"calendar-view\">\r\n            <div class=\"DayPicker\" lang=\"en\">\r\n                <div class=\"DayPicker-wrapper\" [attr.tabindex]=\"tabIndexValue\"\r\n                    (keydown)=\"handleKeyDownCalendar($event)\">\r\n                    <div class=\"DayPicker-NavBar\" *ngIf=\"!view.month\">\r\n                        <span [attr.tabindex]=\"tabIndexValue\" role=\"button\" aria-label=\"Previous Month\"\r\n                            class=\"DayPicker-NavButton DayPicker-NavButton--prev\" (keydown.enter)=\"updateMonthIndex(-1)\"\r\n                            (click)=\"updateMonthIndex(-1)\"></span>\r\n                        <span [attr.tabindex]=\"tabIndexValue\" role=\"button\" aria-label=\"Next Month\"\r\n                            class=\"DayPicker-NavButton DayPicker-NavButton--next\" (keydown.enter)=\"updateMonthIndex(1)\"\r\n                            (click)=\"updateMonthIndex(1)\"></span>\r\n                    </div>\r\n                    <div class=\"DayPicker-Months\">\r\n                        <div class=\"DayPicker-Month\" role=\"grid\">\r\n                            <div class=\"DayPicker-Caption\" role=\"heading\">\r\n                                <div>\r\n                                    <span class=\"m-data\" (click)=\"displayView('M')\">{{ captionData.month }}</span>&nbsp;\r\n                                    <span class=\"y-data\" (click)=\"displayView('Y')\">{{ captionData.year }}</span>\r\n                                </div>\r\n                            </div>\r\n                            <ng-container *ngIf=\"view.day\">\r\n                                <div class=\"DayPicker-Weekdays\" role=\"rowgroup\">\r\n                                    <div class=\"DayPicker-WeekdaysRow\" role=\"row\">\r\n                                        <div class=\"DayPicker-Weekday\" *ngFor=\"let week of weekArray;\"\r\n                                            title=\"{{week.full}}\">{{week.short}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"DayPicker-Body\" role=\"rowgroup\" (focus)=\"OnDayViewFocus($event)\"\r\n                                    [attr.tabindex]=\"tabIndexValue\">\r\n                                    <div *ngFor=\"let calendarWeek of calendarDays;\" class=\"DayPicker-Week\" role=\"row\">\r\n                                        <!-- DayPicker-Day--disabled DayPicker-Day--today DayPicker-Day--selected DayPicker-Day--available-4 -->\r\n                                        <div (keydown)=\"handleKeyDown($event)\" *ngFor=\"let dayView of calendarWeek;\"\r\n                                            class=\"DayPicker-Day\" [class.DayPicker-Day--currMonth]=\"dayView.currMonth\"\r\n                                            [class.DayPicker-Day--today]=\"dayView.today\"\r\n                                            [class.DayPicker-Day--disabled]=\"!isEditable || dayView.disabled\"\r\n                                            [class.DayPicker-Day--selected]=\"dayView.value === shadowValue\"\r\n                                            [class.DayPicker-Day--unAvailable]=\"dayView.unAvailable\" role=\"gridcell\"\r\n                                            [attr.aria-label]=\"dayView.ariaLabel\"\r\n                                            [attr.aria-disabled]=\"!isEditable || dayView.disabled\"\r\n                                            [attr.aria-selected]=\"dayView.value === shadowValue\"\r\n                                            [style.color]=\"dayView.color\"\r\n                                            (click)=\"isEditable && !dayView.disabled && onDateSelected(dayView)\"\r\n                                            (keydown.enter)=\"isEditable && !dayView.disabled && onDateSelected(dayView)\">\r\n                                            <div *ngIf=\"dayView.currMonth\"\r\n                                                [class.DayPicker-Day-With-Label]=\"dayView.label\"><span\r\n                                                    class=\"Day-Picker-Day\">{{dayView.date.getDate()}}</span><span\r\n                                                    *ngIf=\"dayView.label\"\r\n                                                    class=\"Day-Picker-Label\">{{dayView.label}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                            <div *ngIf=\"view.month\" class=\"monthpicker-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-3\" *ngFor=\"let m of monthArray\">\r\n                                        <button [disabled]=\"m.disabled\"\r\n                                            [ngClass]=\"{'current': (m.full == captionData.month && !m.disabled ) }\"\r\n                                            (click)=\"setMonthData(m.value)\">{{ m.short }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"view.year\" class=\"yearpicker-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-3\" *ngFor=\"let y of yearArray\">\r\n                                        <button [ngClass]=\"{'current': y.value == captionData.year && !y.disabled }\"\r\n                                            [disabled]=\"y.disabled\" (click)=\"setYearData(y.value)\">{{ y.value\r\n                                            }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"multipleErrorMessage\">\r\n            <ng-container *ngFor=\"let message of messages\">\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n        <div class=\"field field-type-label field-container\">\r\n            <span *ngFor=\"let type of typeWiseList\" class=\"{{type.typeName.toLowerCase()}} box\"\r\n                [style.color]=\"type.color\">D-{{type.typeName}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".DayPicker{display:inline-block;font-size:1rem}.DayPicker-wrapper{position:relative;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month{display:table;margin:1em 1em 0;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer}.DayPicker-NavButton:hover{opacity:.8}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC)}.DayPicker-NavButton--next{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==)}.DayPicker-NavButton--interactionDisabled{display:none}.DayPicker-Caption{display:table-caption;margin-bottom:.5em;padding:0 .5em;text-align:left}.DayPicker-Caption>div{font-weight:500;font-size:1.15em}.DayPicker-Weekdays{display:table-header-group;margin-top:1em}.DayPicker-WeekdaysRow{display:table-row}.DayPicker-Weekday{display:table-cell;padding:.5em;color:#8b9898;text-align:center;font-size:.875em}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none}.DayPicker-Body{display:table-row-group}.DayPicker-Week{display:table-row}.DayPicker-Day{display:table-cell;padding:.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer}.DayPicker-WeekNumber{display:table-cell;padding:.5em;min-width:1em;border-right:1px solid #EAECEC;color:#8b9898;vertical-align:middle;text-align:right;font-size:.75em;cursor:pointer}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default}.DayPicker-Footer{padding-top:.5em}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:.875em;cursor:pointer}.DayPicker-Day--today{color:#d0021b;font-weight:700}.DayPicker-Day--outside{color:#8b9898;cursor:default}.DayPicker-Day--disabled{color:#dce0e0;cursor:default}.DayPicker-Day--sunday{background-color:#f7f8f8}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff}.DayPickerInput{display:inline-block}.DayPickerInput-OverlayWrapper{position:relative}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:#fff;box-shadow:0 2px 5px #00000026}.error{color:red}.error span{font-weight:700}.shadow-dateInput{position:absolute;width:1px;height:1px;opacity:0}.monthpicker-body,.yearpicker-body{width:300px}.monthpicker-body button,.yearpicker-body button{width:100%;border:none;background:transparent;height:50px}.monthpicker-body button:hover,.yearpicker-body button:hover{background-color:#f0f8ff}.monthpicker-body button.current,.yearpicker-body button.current{background-color:#4a90e2;font-weight:700}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i13.DatePipe }, { type: UserDataHandlerService }, { type: CEEInternalEmitterService }, { type: SharedEventsServiceService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ElementRef }], { datePicker: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCalendarComponent, { className: "CeeCalendarComponent", filePath: "lib\\field-components\\cee-calendar\\cee-calendar.component.ts", lineNumber: 33 }); })();

export { CeeCalendarComponent };
//# sourceMappingURL=ng-cee-core-cee-calendar.component-C2COH-bY.mjs.map
