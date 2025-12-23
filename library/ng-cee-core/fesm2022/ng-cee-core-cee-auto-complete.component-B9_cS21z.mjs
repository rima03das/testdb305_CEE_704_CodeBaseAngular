import * as i0 from '@angular/core';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, a as CommonUtil, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgTemplateOutlet, NgStyle, NgSwitch, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
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
const _c2 = (a0, a1) => ({ key: a0, value: a1 });
const _c3 = a0 => ({ "color": a0 });
function CeeAutoCompleteComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeAutoCompleteComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵelement(1, "input", 9);
    i0.ɵɵelementContainer(2, 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.fieldData.field_label);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 23);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r2.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_1_Template, 2, 1, "label", 20)(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_2_Template, 1, 1, "label", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isHTML(ctx_r2.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isHTML(ctx_r2.fieldData.field_label));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r2.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r2.fieldData.tooltip);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 28);
    i0.ɵɵlistener("pointerdown", function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template_li_pointerdown_0_listener() { const option_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.setValueNew(true, option_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i0.ɵɵpureFunction2(2, _c2, ctx_r2.additionalParameter["PrimaryKeyName"] ? option_r6[ctx_r2.additionalParameter["PrimaryKeyName"]] : null, ctx_r2.additionalParameter["Display Key Name"] ? option_r6[ctx_r2.additionalParameter["Display Key Name"]] : option_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.additionalParameter["Display Key Name"] ? option_r6[ctx_r2.additionalParameter["Display Key Name"]] : option_r6, " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 26);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template, 2, 5, "li", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.firstFilteredOptions);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldValue.length, "/", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit - ctx_r2.fieldValue.length, "/", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit - ctx_r2.fieldValue.length, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_1_Template, 2, 7, "span", 30)(2, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_2_Template, 2, 7, "span", 30)(3, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_3_Template, 2, 6, "span", 30)(4, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_4_Template, 2, 6, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngSwitch", ctx_r2.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory && message_r7.type == "Mandatory");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.pattern);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_Template, 4, 3, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r4 = i0.ɵɵreference(7);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4.invalid && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.messages);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.errorMessageData.message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r4 == null ? null : textField_r4.errors.required) || (textField_r4 == null ? null : textField_r4.errors.minlength) || (textField_r4 == null ? null : textField_r4.errors.pattern));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_Template, 2, 1, "div", 32);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r4 = i0.ɵɵreference(7);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", textField_r4.invalid && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33)(2, "div")(3, "p", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵtemplate(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_Template, 3, 2, "ng-container", 12)(3, CeeAutoCompleteComponent_div_0_ng_template_4_span_3_Template, 2, 0, "span", 13)(4, CeeAutoCompleteComponent_div_0_ng_template_4_button_4_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15)(6, "input", 16, 2);
    i0.ɵɵlistener("paste", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_paste_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("copy", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_copy_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("cut", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_cut_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("focus", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_focus_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onFocus()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.fieldValue, $event) || (ctx_r2.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r2); const textField_r4 = i0.ɵɵreference(7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onKeyUp($event, textField_r4)); })("blur", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_blur_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.setUpdatedValue()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_Template, 2, 1, "ul", 17)(9, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_Template, 5, 5, "div", 18)(10, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_Template, 2, 1, "ng-container", 6)(11, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_13_Template, 5, 4, "ng-container", 19);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const textField_r4 = i0.ɵɵreference(7);
    const singleErrorMessage_r9 = i0.ɵɵreference(12);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r2.isCustomClass && ctx_r2.fieldData.field_style ? ctx_r2.fieldData.field_style.custom_class_name : "", "  ", !ctx_r2.valid || textField_r4.invalid && ctx_r2.isMandatory && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r2.fieldData.field_character_limit == "0" ? "1000" : ctx_r2.fieldData.field_character_limit);
    i0.ɵɵproperty("value", ctx_r2.fieldValue);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.fieldValue);
    i0.ɵɵproperty("required", ctx_r2.isMandatory)("disabled", !ctx_r2.isEditable)("pattern", ctx_r2.validationRegex)("ngStyle", i0.ɵɵpureFunction8(24, _c1, ctx_r2.fieldData.field_style.font_name, ctx_r2.fieldData.field_style.font_size, ctx_r2.fieldData.field_style.font_style, ctx_r2.fieldData.field_style.font_color, ctx_r2.fieldData.field_style.border_color, ctx_r2.fieldData.field_style.field_height, ctx_r2.fieldData.field_style.field_width, ctx_r2.fieldData.field_style.background_color));
    i0.ɵɵattribute("id", ctx_r2.html_id)("aria-label", ctx_r2.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.openOptions && ctx_r2.firstFilteredOptions.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 22, ctx_r2.showComparisonError));
} }
function CeeAutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeAutoCompleteComponent_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, CeeAutoCompleteComponent_div_0_ng_template_4_Template, 15, 33, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r10 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.autocomplete)("ngIfElse", autocompleteTextfield_r10);
} }
class CeeAutoCompleteComponent extends BaseView {
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
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    fieldValue = '';
    buttonLabel = '';
    html_id = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    optionChangedSubscription;
    timer = null;
    autocomplete = false;
    options = [];
    firstFilteredOptions = [];
    optionChanged = new Subject();
    openOptions = false;
    searchSubject = new Subject();
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.searchSubject.pipe(debounceTime(800), distinctUntilChanged() // Only trigger if the value changes
        ).subscribe((value) => {
            this.onKey(value);
        });
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.optionChangedSubscription) {
            this.optionChangedSubscription.unsubscribe();
        }
    }
    // ngAfterViewInit() {
    //   // console.log(this.txtVal.nativeElement);
    // }
    _filter(value) {
        // Check if options fetched from ExternalAPI
        if (this.additionalParameter.hasOwnProperty("externalApiOptionValue") && !this.additionalParameter.hasOwnProperty("externalApiOptionValuefilter")) {
            return this.options;
        }
        else {
            // return this.options;
            const filterValue = typeof value == "string" ? value.toLowerCase() : value;
            return this.options.filter(option => {
                if (option && typeof (option) === 'object') {
                    // check if display key name is added as an additional paramter
                    if (option && this.additionalParameter['Display Key Name']) {
                        return String(option[this.additionalParameter['Display Key Name']]).toLowerCase().indexOf(filterValue) !== -1;
                    }
                    else {
                        console.error(`Display key Name is required as an additional parameter`);
                        return false;
                    }
                }
                else {
                    return option.toLowerCase().indexOf(filterValue) !== -1;
                }
            });
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.options = this.firstFilteredOptions = this.fieldData.possible_values;
        if (this.additionalParameter["AutoCompleteText"] && this.additionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        //
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.firstFilteredOptions = this.rowData.value;
                }
                else {
                    this.fieldValue = this.rowData.value;
                    // this.updateFieldData(this.fieldValue);
                }
            }
        }
        this.checkOptions(); // check if options are there
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    // checks for options if present
    // trigger present event if not then trigger
    // not present event
    checkOptions() {
        this.optionChangedSubscription = this.optionChanged.subscribe(res => {
            if (this.options.length) {
                let found = false;
                if (res.length) {
                    found = true;
                    // console.log('Data Found');
                }
                this.onComponentEvent('OnKeyUp', undefined, true, found, 'OnFilter');
            }
        });
    }
    onFocus() {
        this.openOptions = true;
        // this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
        //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.fieldValue));
        // });
    }
    onChange(event) {
        // this.setSessionData(newValue);
    }
    onKeyUp(event, txtField) {
        // Emit the value to the searchSubject to trigger debounce logic
        this.searchSubject.next(txtField.value);
    }
    onKey(value) {
        this.isValid = this.textField.valid;
        clearTimeout(this.timer);
        // if first filtered options is present then
        // check for the first filtered option
        if (this.firstFilteredOptions) {
            //this.firstFilteredOptions = this._filter(value.value);
            this.firstFilteredOptions = this._filter(value);
            this.optionChanged.next(this.firstFilteredOptions);
        }
        // this.openOptions = value.model.length > 0 ? true : false;
        // console.log(this.firstFilteredOptions);
        // this.updateFieldData(value.value);
        this.timer = setTimeout(() => {
            if (!this.additionalParameter['onlyFromDropdown'] || (this.additionalParameter['onlyFromDropdown'] && this.additionalParameter['onlyFromDropdown'] != 'true')) {
                this.updateFieldData(value, this.isValid);
            }
            this.onComponentEvent('OnKeyUp');
        }, 100);
    }
    concatData() { }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            setTimeout(() => {
                resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            }, 0);
        }
        if (resData !== null) {
            if (Array.isArray(resData) && this.isSingleApiKey) {
                // this.fieldData.possible_values = resData;
                this.options = resData;
                this.firstFilteredOptions = this._filter(this.fieldValue);
            }
            else {
                this.fieldValue = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            // this.fieldData.possible_values = externalApiOptionValue;
                            this.options = externalApiOptionValue;
                            this.firstFilteredOptions = this._filter(this.fieldValue);
                            this.optionChanged.next(this.firstFilteredOptions);
                        }
                        else {
                            console.error('Something Went Wrong in Picker !!!');
                        }
                    }
                }
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
                // TODO Update
                let value = '';
                this.fieldValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = paramter.value;
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
                // from additionalParameter with type externalApiOptionValue
                if (this.fieldData.additional_parameters.filter((parameter, index) => {
                    if (parameter.parameter_type === 'externalApiOptionValue') {
                        return parameter;
                    }
                }).length == 0) {
                    this.options = this.firstFilteredOptions = this.fieldData.possible_values;
                }
                if (this.textField) {
                    this.textField.reset(value);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
                }
                this.options = [];
                this.firstFilteredOptions = [];
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
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setUpdatedValue() {
        this.onDirty();
        setTimeout(() => {
            this.openOptions = false;
        }, 200);
    }
    setValueNew(selected = null, value) {
        if (value && value[this.additionalParameter['Display Key Name']]) {
            value = { key: value[this.additionalParameter['PrimaryKeyName']], value: value[this.additionalParameter['Display Key Name']] };
        }
        this.getUpdatedValue(selected, value);
    }
    // function sets the value in the field from the auto complete
    // and creates a new field in the app data store if the field
    // is not present and has additional parameter Display Key Name
    // and Primary Key Field Id
    getUpdatedValue(selected = null, value) {
        this.onDirty();
        if (selected) {
            // check if type of value is an object
            if (value && typeof (value) === 'object') {
                this.fieldValue = value.value;
                // check if the key is not null
                // check if the additional paramter has PrimaryKeyName and Primary Key Field Id
                // then add a new hidden field needs to be added or updated
                if (this.additionalParameter['PrimaryKeyName'] && this.additionalParameter['Primary Key Field Id'] && value.key !== null) {
                    let primaryFieldData = this.appData;
                    primaryFieldData = {
                        ...primaryFieldData, ...{
                            id: this.additionalParameter['Primary Key Field Id'],
                            editable: false,
                            visible: false,
                            mandatory: false,
                            value: value.key,
                            apiKey: this.isSingleApiKey ? this.additionalParameter['PrimaryKeyName'] : '',
                            isValid: true,
                            responseApiKey: [],
                            requestApiKey: this.isSingleApiKey ? [] : [this.additionalParameter['PrimaryKeyName']]
                        }
                    };
                    this.appDataService.setAppData(primaryFieldData);
                }
            }
            else {
                // string update field value
                this.fieldValue = value;
            }
            this.updateFieldData(this.fieldValue);
            this.onComponentEvent('onSelect');
        }
        this.openOptions = false;
    }
    // function returns the option value
    getOptionText(option) {
        // as the option will come in an object pattern
        // and the object would be { key: <some value>, value: <some value> }
        let value = '';
        if (option) {
            if (typeof (option) === 'object') {
                value = option.value;
            }
            else {
                // because on init the value comes as a string
                value = option;
            }
        }
        else {
            value = '';
        }
        return value;
    }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
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
            return true;
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
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
    static ɵfac = function CeeAutoCompleteComponent_Factory(t) { return new (t || CeeAutoCompleteComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeAutoCompleteComponent, selectors: [["app-cee-auto-complete"]], viewQuery: function CeeAutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
        } }, hostBindings: function CeeAutoCompleteComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function CeeAutoCompleteComponent_beforeunload_HostBindingHandler() { return ctx.onDestroy(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["autocompleteTextfield", ""], ["textFieldData", ""], ["textField", "ngModel"], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field", "dropdown-container"], ["type", "text", 3, "paste", "copy", "cut", "focus", "ngModelChange", "keyup", "blur", "value", "ngModel", "required", "disabled", "placeholder", "maxlength", "pattern", "ngStyle"], ["class", "dropdown", 4, "ngIf"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "dropdown"], ["class", "dropdown-item", 3, "value", "pointerdown", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "pointerdown", "value"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeAutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeAutoCompleteComponent_div_0_Template, 6, 2, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgTemplateOutlet, MatTooltipModule, FormsModule, i14.ɵNgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.NgModel, i14.NgForm, MatAutocompleteModule, NgStyle, NgSwitch, CommonModule, i13.NgForOf, i13.NgIf, i13.NgSwitchCase, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: [".dropdown[_ngcontent-%COMP%]{position:absolute;width:100%;max-height:200px;margin:0;padding:0;list-style:none;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;box-shadow:0 4px 6px #0000001a;background-color:#fff;overflow-y:auto;z-index:10}.dropdown-container[_ngcontent-%COMP%]{position:relative;width:100%}.dropdown-item[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.dropdown-item[_ngcontent-%COMP%]:active{background-color:#ddd}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeAutoCompleteComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-auto-complete', standalone: true, imports: [NgTemplateOutlet, MatTooltipModule, FormsModule, MatAutocompleteModule, NgStyle, NgSwitch, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t</ng-container>\r\n\t<ng-template #autocompleteTextfield>\r\n\t\t<form autocomplete=\"off\">\r\n\t\t\t<input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n\t\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t\t</form>\r\n\t</ng-template>\r\n\t<ng-template #textFieldData>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-field dropdown-container\">\r\n\t\t\t\t<input (paste)=\"onOverrideHandler($event)\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n\t\t\t\t\ttype=\"text\" [value]=\"fieldValue\" (focus)=\"onFocus()\" [(ngModel)]=\"fieldValue\" (keyup)=\"onKeyUp($event, textField)\"\r\n\t\t\t\t\t(blur)=\"setUpdatedValue()\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[disabled]=\"!isEditable\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (textField.invalid && isMandatory && (textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t[attr.id]=\"html_id\"\r\n\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"fieldData.field_label \" [pattern]=\"validationRegex\" [ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\">\r\n\t\t\t\t<!-- <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"getOptionText\"\r\n\t\t\t\t\t(optionSelected)=\"getUpdatedValue(true, $event.option.value)\">\r\n\t\t\t\t\t<mat-option *ngFor=\"let option of firstFilteredOptions\"\r\n\t\t\t\t\t\t[value]=\"{ key: additionalParameter['PrimaryKeyName'] ? option[additionalParameter['PrimaryKeyName']] : null , value: additionalParameter['Display Key Name'] ? option[additionalParameter['Display Key Name']]: option }\">\r\n\t\t\t\t\t\t{{additionalParameter[\"Display Key Name\"] ? option[additionalParameter[\"Display Key Name\"]]: option}}\r\n\t\t\t\t\t</mat-option>\r\n\t\t\t\t</mat-autocomplete> -->\r\n\t\t\t\t<ul *ngIf=\"openOptions && firstFilteredOptions.length\" class=\"dropdown\" >\r\n\t\t\t\t\t<li *ngFor=\"let option of firstFilteredOptions\" (pointerdown)=\"setValueNew(true, option)\" class=\"dropdown-item\"\r\n\t\t\t\t\t\t[value]=\"{ key: additionalParameter['PrimaryKeyName'] ? option[additionalParameter['PrimaryKeyName']] : null , value: additionalParameter['Display Key Name'] ? option[additionalParameter['Display Key Name']]: option }\">\r\n\t\t\t\t\t\t{{additionalParameter[\"Display Key Name\"] ? option[additionalParameter[\"Display Key Name\"]]: option}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Count'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n\t\t\t\t\t\t? characterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Remaining'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit -\r\n\t\t\t\t\t\tfieldValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Total'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'CharRemaining'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit - fieldValue.length}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext)\">\r\n\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n</div>\r\n<!--   [formControl]=\"myControl\" -->\r\n", styles: [".dropdown{position:absolute;width:100%;max-height:200px;margin:0;padding:0;list-style:none;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;box-shadow:0 4px 6px #0000001a;background-color:#fff;overflow-y:auto;z-index:10}.dropdown-container{position:relative;width:100%}.dropdown-item{padding:8px 12px;cursor:pointer}.dropdown-item:hover{background-color:#f0f0f0}.dropdown-item:active{background-color:#ddd}\n"] }]
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
        }], onDestroy: [{
            type: HostListener,
            args: ['window:beforeunload']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeAutoCompleteComponent, { className: "CeeAutoCompleteComponent", filePath: "lib\\field-components\\cee-auto-complete\\cee-auto-complete.component.ts", lineNumber: 33 }); })();

export { CeeAutoCompleteComponent };
//# sourceMappingURL=ng-cee-core-cee-auto-complete.component-B9_cS21z.mjs.map
