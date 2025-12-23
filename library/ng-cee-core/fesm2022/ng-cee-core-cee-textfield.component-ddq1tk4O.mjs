import * as i0 from '@angular/core';
import { Directive, HostListener, Component, ViewChild, Input } from '@angular/core';
import { a as CommonUtil, j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { debounceTime, filter, take } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { C as CalculationUtil } from './ng-cee-core-calculation-BbHcUYtr.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { C as CustomTooltipDirective } from './ng-cee-core-app.directive-D4q9IVdg.mjs';
import * as i13 from '@angular/common';
import { NgTemplateOutlet, NgSwitch, NgStyle, NgClass, CommonModule } from '@angular/common';
import * as i15 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { S as ShowPasswordDirective } from './ng-cee-core-showPassword.directive-D7SZ6skZ.mjs';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i12$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
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
import '@angular/cdk/portal';
import '@angular/cdk/overlay';

class SeparatorDirective {
    _inputEl;
    cdRef;
    commonUtil;
    constructor(_inputEl, cdRef, commonUtil) {
        this._inputEl = _inputEl;
        this.cdRef = cdRef;
        this.commonUtil = commonUtil;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            let inputValue = this._inputEl.nativeElement.value;
            // 🔹 Strip everything except digits, comma, dot
            inputValue = inputValue.replace(/[^0-9.,]/g, '');
            // 🔹 Ensure only first dot stays (remove extra dots)
            const firstDotIndex = inputValue.indexOf('.');
            if (firstDotIndex !== -1) {
                // remove all dots after the first
                inputValue =
                    inputValue.slice(0, firstDotIndex + 1) +
                        inputValue
                            .slice(firstDotIndex + 1)
                            .replace(/\./g, '');
            }
            this._inputEl.nativeElement.value =
                this.commonUtil.formatNumber(inputValue.replace(/,/g, ''));
            this.cdRef.detectChanges();
        });
    }
    onInput(event) {
        const input = this._inputEl.nativeElement;
        // 🔹 1. Sanitize: allow only digits + . + ,
        let rawInput = input.value.replace(/[^0-9.,]/g, '');
        // 🔹 2. Allow only one decimal point
        const firstDotIndex = rawInput.indexOf('.');
        if (firstDotIndex !== -1) {
            // remove all dots after the first
            rawInput =
                rawInput.slice(0, firstDotIndex + 1) +
                    rawInput.slice(firstDotIndex + 1).replace(/\./g, '');
        }
        // 🔹 3. Remove commas to get raw numeric string
        const rawValue = rawInput.replace(/,/g, '');
        const cursorPos = input.selectionStart ?? 0;
        // Track digits before cursor
        const rawDigitsBeforeCursor = rawInput
            .slice(0, cursorPos)
            .replace(/[^0-9]/g, '');
        const digitsBeforeCursor = rawDigitsBeforeCursor.length;
        const hasDecimal = rawValue.includes('.');
        const [rawIntPart, rawDecimalPart = ''] = rawValue.split('.');
        // 🔹 4. Format integer part
        const formattedInt = this.commonUtil.formatNumber(rawIntPart);
        let formatted = formattedInt;
        // Keep decimal and up to 2 digits if decimal exists
        if (hasDecimal) {
            const safeDecimal = rawDecimalPart.slice(0, 2);
            formatted += '.' + safeDecimal;
        }
        input.value = formatted;
        // 🔹 5. Determine target cursor position
        let cursorIndex = 0;
        let digitCount = 0;
        for (; cursorIndex < formatted.length; cursorIndex++) {
            if (/\d/.test(formatted[cursorIndex])) {
                digitCount++;
            }
            if (digitCount === digitsBeforeCursor) {
                break;
            }
        }
        // If we’re deleting decimal digits and the cursor would land on the dot, skip it
        if (formatted[cursorIndex + 1] === '.' &&
            hasDecimal &&
            rawDecimalPart.length < 2) {
            cursorIndex++;
        }
        // Place cursor
        input.setSelectionRange(cursorIndex + 1, cursorIndex + 1);
    }
    static ɵfac = function SeparatorDirective_Factory(t) { return new (t || SeparatorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(CommonUtil)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SeparatorDirective, selectors: [["input", "separator", ""]], hostBindings: function SeparatorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function SeparatorDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
        } }, standalone: true, features: [i0.ɵɵProvidersFeature([CommonUtil])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeparatorDirective, [{
        type: Directive,
        args: [{
                selector: 'input[separator]',
                standalone: true,
                providers: [CommonUtil]
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: CommonUtil }], { onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();

const _c0 = ["textField"];
const _c1 = ["inputField"];
const _c2 = a0 => ({ "input-group": a0 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c4 = a0 => ({ "color": a0 });
const _c5 = () => ({ "Search": "default" });
function CeeTextfieldComponent_ng_container_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementContainer(2, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_1_Template, 2, 1, "label", 23)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_2_Template, 1, 1, "label", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.inputPrefix);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 36, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_copy_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_cut_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r4)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r4)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r4 == null ? null : textField_r4.value, textField_r4)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r4 == null ? null : textField_r4.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r4 == null ? null : textField_r4.dirty) ? ctx_r1.maskDirty : textField_r4 == null ? null : textField_r4.dirty) || (textField_r4 == null ? null : textField_r4.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.inputType);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "")("ngStyle", i0.ɵɵpureFunction8(21, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 37, 6);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_copy_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_cut_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r6)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r6)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r6 == null ? null : textField_r6.value, textField_r6)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onFocus($event)); })("keydown.enter", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.focusedInputOnKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r6 == null ? null : textField_r6.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r6 == null ? null : textField_r6.dirty) ? ctx_r1.maskDirty : textField_r6 == null ? null : textField_r6.dirty) || (textField_r6 == null ? null : textField_r6.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.inputType);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "")("ngStyle", i0.ɵɵpureFunction8(21, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameter["ClearButton"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameter["ClearButton"], i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template, 2, 1, "span", 38)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template, 1, 1, "span", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.inputSuffix);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
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
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r9.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r9.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r9.color && message_r9.message_text);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r10.type == "Mandatory" && !(ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "minlength" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "Regex" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors == null ? null : ctx_r1.textField.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors.pattern);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.getRegexMessage(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRegexMessage(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "Regex" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isDataFormatWithRegex && !ctx_r1.isValid);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47);
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.valid || (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.errors.required) || (ctx_r1.textField == null ? null : ctx_r1.textField.errors.minlength) || (ctx_r1.textField == null ? null : ctx_r1.textField.errors.pattern));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r11 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47)(2, "div")(3, "p", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r12.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r12.value.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_1_Template, 3, 1, "div", 30)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template, 3, 30, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template, 4, 30, "ng-container", 19)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_Template, 3, 2, "ng-container", 19)(5, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_5_Template, 3, 1, "div", 31)(6, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_Template, 5, 5, "div", 32)(7, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_Template, 2, 1, "ng-container", 11)(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(10, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_10_Template, 5, 4, "ng-container", 33);
    i0.ɵɵpipe(11, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ceeError_r13 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx_r1.inputPrefix || ctx_r1.inputSuffix));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputPrefix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isThousandSeparatorEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isThousandSeparatorEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputSuffix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r13);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 10, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameter["ClearButton"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameter["ClearButton"], i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template, 2, 1, "span", 38)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template, 1, 1, "span", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
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
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r18.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r18.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r18.color && message_r18.message_text);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r19.type == "Mandatory" && !(textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r19.type == "minlength" && (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r19.type == "Regex" && (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors == null ? null : textField_r15.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors.pattern);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.invalid) && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.errors.required) || (textField_r15 == null ? null : textField_r15.errors.minlength) || (textField_r15 == null ? null : textField_r15.errors.pattern));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.invalid) && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r20 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r20);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r21.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r21.value.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52)(2, "input", 53, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_paste_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_copy_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_cut_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r15)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r15)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r15 == null ? null : textField_r15.value, textField_r15)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 42)(5, "span", 54);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_span_click_5_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hide = !ctx_r1.hide); });
    i0.ɵɵelementStart(6, "mat-icon", 55);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_Template, 3, 2, "ng-container", 19)(9, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_Template, 5, 5, "div", 32)(10, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_Template, 2, 1, "ng-container", 11)(11, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(13, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_Template, 3, 3, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const textField_r15 = i0.ɵɵreference(3);
    const ceeError_r22 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r15 == null ? null : textField_r15.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", ctx_r1.validationRegex)("ngStyle", i0.ɵɵpureFunction8(27, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.hide ? "visibility_off" : "visibility", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r22);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r15 == null ? null : textField_r15.invalid));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 57)(2, "button", 58);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerEvent()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("cee-search-button cee-search-button-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵpropertyInterpolate1("id", "search_", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(9, _c5)[ctx_r1.fieldData.field_type])("disabled", !ctx_r1.inputValue || !ctx_r1.isValid || !ctx_r1.searchButtonEditable || !ctx_r1.isEditable);
    i0.ɵɵattribute("aria-label", "Click On " + ctx_r1.additionalParameter["Button Label"]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.buttonLabel);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_Template, 3, 2, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_span_3_Template, 2, 0, "span", 20)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_button_4_Template, 2, 2, "button", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_Template, 12, 14, "div", 22)(6, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template, 14, 36, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template, 4, 10, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const passwordField_r24 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["display_password"] != "true")("ngIfElse", passwordField_r24);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["Textfield Type"] == "Search");
} }
function CeeTextfieldComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 11)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_2_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_Template, 9, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r25 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.cssClasses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.autocomplete)("ngIfElse", autocompleteTextfield_r25);
} }
function CeeTextfieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_Template, 6, 3, "div", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isVisible || ctx_r1.isSafariClass);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const materialTextFieldData_r26 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", materialTextFieldData_r26);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementContainer(2, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const materialTextFieldData_r26 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", materialTextFieldData_r26);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_1_Template, 2, 1, "span", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_2_Template, 1, 1, "span", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_Template, 3, 2, "ng-container", 19);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.inputPrefix, "\u00A0");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.inputSuffix);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
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
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r30.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r30.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r30.color && message_r30.message_text);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r31.type == "Mandatory" && !(textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r31.type == "minlength" && (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r31.type == "Regex" && (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors == null ? null : textField_r28.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors.pattern);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.errors.required) || (textField_r28 == null ? null : textField_r28.errors.minlength) || (textField_r28 == null ? null : textField_r28.errors.pattern));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r32 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r32);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r33.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r33.value.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-form-field", 62)(3, "mat-label");
    i0.ɵɵelementContainer(4, 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 63, 6);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_paste_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_copy_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_cut_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r28)); })("keydown", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keydown_5_listener($event) { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r28)); })("blur", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_blur_5_listener() { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r28 == null ? null : textField_r28.value, textField_r28)); })("focus", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_focus_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); })("keydown.enter", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keydown_enter_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.focusedInputOnKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template, 3, 0, "button", 64)(9, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_9_Template, 2, 1, "span", 65)(10, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_10_Template, 2, 1, "span", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_Template, 5, 5, "div", 32)(12, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_Template, 2, 1, "ng-container", 11)(13, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_Template, 3, 3, "ng-container", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r28 = i0.ɵɵreference(6);
    const ceeError_r34 = i0.ɵɵreference(14);
    i0.ɵɵnextContext();
    const materialLabel_r35 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r28 == null ? null : textField_r28.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", materialLabel_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("type", ctx_r1.inputType)("id", ctx_r1.html_id)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputPrefix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputSuffix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r34);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
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
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r39 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r39.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r39.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r39.color && message_r39.message_text);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r40.type == "Mandatory" && !(textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r40.type == "minlength" && (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r40.type == "Regex" && (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors == null ? null : textField_r37.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors.pattern);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.invalid) && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.errors.required) || (textField_r37 == null ? null : textField_r37.errors.minlength) || (textField_r37 == null ? null : textField_r37.errors.pattern));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.invalid) && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r41 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r41);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r42.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r42.value.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-form-field", 62)(2, "mat-label");
    i0.ɵɵelementContainer(3, 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 70, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_paste_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_copy_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_cut_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r37)); })("keydown", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_keydown_4_listener($event) { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r37)); })("blur", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_blur_4_listener() { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r37 == null ? null : textField_r37.value, textField_r37)); })("focus", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_focus_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_6_Template, 2, 5, "button", 59);
    i0.ɵɵelementStart(7, "button", 71);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hide = !ctx_r1.hide); });
    i0.ɵɵelementStart(8, "mat-icon", 55);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template, 3, 0, "button", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_Template, 5, 5, "div", 32)(12, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_Template, 2, 1, "ng-container", 11)(13, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_Template, 3, 3, "ng-container", 19);
} if (rf & 2) {
    const textField_r37 = i0.ɵɵreference(5);
    const ceeError_r43 = i0.ɵɵreference(14);
    i0.ɵɵnextContext();
    const materialLabel_r35 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r37 == null ? null : textField_r37.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", materialLabel_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("id", ctx_r1.html_id)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.hide ? "visibility_off" : "visibility", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r43);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r37 == null ? null : textField_r37.invalid));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 57)(2, "button", 58);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerEvent()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("cee-search-button cee-search-button-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵpropertyInterpolate1("id", "search_", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(9, _c5)[ctx_r1.fieldData.field_type])("disabled", !ctx_r1.isValid || !ctx_r1.searchButtonEditable || !ctx_r1.isEditable);
    i0.ɵɵattribute("aria-label", "Click On " + ctx_r1.additionalParameter["Button Label"]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.buttonLabel);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template, 16, 28, "ng-container", 11)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template, 16, 28, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(5, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template, 4, 10, "ng-container", 19)(6, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_button_6_Template, 2, 5, "button", 59);
} if (rf & 2) {
    const materialPasswordField_r45 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["display_password"] != "true")("ngIfElse", materialPasswordField_r45);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["Textfield Type"] == "Search");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_container_1_Template, 2, 1, "ng-container", 11)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_Template, 7, 4, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r46 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.autocomplete)("ngIfElse", autocompleteTextfield_r46);
} }
function CeeTextfieldComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_Template, 6, 2, "div", 19);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.isVisible);
} }
class CeeTextfieldComponent extends BaseView {
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
    cdr;
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
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    // When "Data Format" available
    mask = false;
    maskDirty = false;
    maskString;
    maskStringCopy;
    separator = ',';
    decimalMarker = '.';
    // When "API Data Format" available
    apiDataFormat = '';
    apiDataFormatMask = false;
    maskDropSpecialCharacters = true;
    maskSpecialCharacters = [];
    phonePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}(?:\\s+ext\\s+\\d{3})?$');
    withoutSpacePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}$');
    withSpacePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}\\s$');
    withExtPattern = new RegExp('^\\d{3}-\\d{3}-\\d{4} ext\\s$');
    $emitKeyDown;
    timer = null;
    timer1 = null;
    html_id = '';
    autocomplete = false;
    showCross = false;
    hide = false;
    oldFieldData = {};
    isSet = false;
    inputType = 'text';
    oldInputValue = '';
    calculationUtil;
    calculationRoundOff;
    inputPrefix = '';
    inputSuffix = '';
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    prevCommaCount = 0;
    inputField;
    enterKeySubject = new Subject();
    enterKeySubscription;
    isThousandSeparatorEnabled = false;
    subscriptions = new Subscription();
    isDataFormatWithRegex = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdr) {
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
        this.cdr = cdr;
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.calculationUtil = new CalculationUtil();
        this.enterKeySubscription = this.enterKeySubject.pipe(debounceTime(500), filter(event => event.key === 'Enter')).subscribe(() => {
            this.triggerEvent();
        });
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.subscriptions.add(this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
            }
        }));
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        // Clear all subscriptions
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        // Clear all timeouts
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (this.timer1) {
            clearTimeout(this.timer1);
            this.timer1 = null;
        }
        // Complete subject
        if (this.enterKeySubject) {
            this.enterKeySubject.complete();
        }
        if (this.enterKeySubscription) {
            this.enterKeySubscription.unsubscribe();
        }
        // Clean up any event handlers stored in variableObject
        if (this.variableObject) {
            Object.keys(this.variableObject).forEach(key => {
                if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                    this.variableObject[key].unsubscribe();
                }
            });
            // Clear object references
            this.variableObject = null;
        }
        // Clean up DOM references
        if (this.rootData && this.rootData['FieldErrorFunctions'] && this.fieldData) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clean up arithmetic name references
        if (this.additionalParameter?.["ArithmeticName"] &&
            this.rootData?.['ArithmeticNames']?.[this.additionalParameter["ArithmeticName"]]?.calculations) {
            delete this.rootData['ArithmeticNames'][this.additionalParameter["ArithmeticName"]].calculations[this.fieldData.unique_id];
        }
        // Clear references to large objects
        this.rootData = null;
        this.inputValue = null;
        // Call base class destroy method if it exists
        this.onViewUnload();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
        if (event.type == "paste" && this.additionalParameter['CEE_STRING_FORMAT'] && this.additionalParameter['CEE_STRING_FORMAT'] != '' && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() == 'true') {
            this.onSessionDataUpdated(event.target.value, this.textField);
        }
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
    onViewDataInit() {
        this.calculationRoundOff = localStorage.getItem('calculationRoundOff') ? Number(localStorage.getItem('calculationRoundOff')) : 2;
        this.oldFieldData = this.fieldData;
        // For unique html id
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.field_type.toLowerCase() === 'password' || (this.additionalParameter['display_password'] && this.additionalParameter['display_password'].toLowerCase() == 'true')) {
            this.hide = true;
        }
        // END 
        this.inputPrefix = this.additionalParameter['CEE_INPUT_PREFIX'] ? this.additionalParameter['CEE_INPUT_PREFIX'] : '';
        this.inputSuffix = this.additionalParameter['CEE_INPUT_SUFFIX'] ? this.additionalParameter['CEE_INPUT_SUFFIX'] : '';
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? this.fieldValue : '';
        // Store the initial default value to restore it later when session is emptied
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                if (paramter.parameter_type === 'default_value') {
                    if (!this.inputValue) { // Only set if inputValue is empty
                        this.inputValue = paramter.value;
                    }
                    break;
                }
            }
        }
        if (this.additionalParameter["AutoCompleteText"] && this.additionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        // For masking as "API Data Format"
        if (this.additionalParameter["API Data Format"] && this.additionalParameter["API Data Format"] != '') {
            this.apiDataFormatMask = [];
            this.apiDataFormat = this.additionalParameter["API Data Format"];
            this.apiDataFormat.split('').forEach(element => {
                element == 'X' ? this.apiDataFormatMask.push(/[0-9a-zA-Z]/) : element == '0' ? this.apiDataFormatMask.push(/\d/) : this.apiDataFormatMask.push(element);
            });
        }
        // For masking as "Data Format"
        if (this.additionalParameter["Data Format"] && this.additionalParameter["Data Format"] != '') {
            // Check if validation regex is present with Data Format
            this.isDataFormatWithRegex = this.validationRegex && this.validationRegex != '' ? true : false;
            // this.mask = [];
            let maskFormat = this.additionalParameter["Data Format"];
            this.maskString = maskFormat;
            this.maskStringCopy = this.maskString;
            if (this.fieldData.unique_id == '') {
                console.log('fieldData.field_character_limit***', this.fieldData.field_character_limit);
            }
            this.maskDropSpecialCharacters = this.additionalParameter["Data Format"] !== this.additionalParameter["API Data Format"];
            const maskChars = ['0', 'S', 'A', '*'];
            const maskSpecialCharacters = maskFormat.split("").filter(t => !maskChars.includes(t));
            this.maskSpecialCharacters = maskSpecialCharacters.filter(function (item, pos) {
                return maskSpecialCharacters.indexOf(item) == pos;
            });
            // maskFormat.split('').forEach(element => {
            //     element == 'X' ? this.mask.push(/[0-9a-zA-Z]/) : element == '0' ? this.mask.push(/\d/) : this.mask.push(element);
            // });
            // this.inputValue = this.getMaskedInputValue(this.inputValue, this.mask);
            // this.validationRegex = "";
            this.timer = setTimeout(() => {
                this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? this.fieldValue : '';
            }, 0);
        }
        // this.formatThousandSeparator(this.inputValue);
        this.setSearchData();
        switch (this.fieldData.field_type) {
            case 'Password':
                this.inputType = 'password';
                break;
            default:
                this.inputType = 'text';
                break;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id)?.focus();
            };
        }
        this.isValid = this.valid;
        this.setValueArithmeticName();
        this.setValueCalculation();
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            this.hide = true;
        }
        if (this.additionalParameter.hasOwnProperty('CEE_Thousand_Separator') && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true') {
            this.isThousandSeparatorEnabled = true;
        }
        if (this.isThousandSeparatorEnabled) {
            this.timer = setTimeout(() => {
                this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                    this.inputValue += '.00';
                }
            }, 0);
        }
        if (!this.additionalParameter.hasOwnProperty('default_value') || (this.additionalParameter.hasOwnProperty('default_value') && this.additionalParameter['default_value'].indexOf('||') === -1)) {
            this.updateFieldData(this.inputValue, this.isValid);
        }
    }
    setValueArithmeticName(source = []) {
        if (this.additionalParameter["ArithmeticName"] && this.additionalParameter["ArithmeticName"] != '') {
            const arithmeticName = this.additionalParameter["ArithmeticName"];
            if (this.rootData['ArithmeticNames'][arithmeticName]) {
                this.rootData['ArithmeticNames'][arithmeticName]['value']
                    = this.inputValue.replaceAll(',', '');
            }
            else {
                this.rootData['ArithmeticNames'][arithmeticName] = {
                    value: this.inputValue.replaceAll(',', ''),
                    calculations: {}
                };
                for (const uId in this.rootData['_ArithmeticNames']) {
                    if (this.rootData['_ArithmeticNames'][uId].value.includes(arithmeticName)) {
                        this.rootData['ArithmeticNames'][arithmeticName].calculations[uId] = this.rootData['_ArithmeticNames'][uId];
                        delete this.rootData['_ArithmeticNames'][uId];
                    }
                }
            }
            for (const unique_id in this.rootData['ArithmeticNames'][arithmeticName]['calculations']) {
                if (!source.includes(unique_id)) {
                    source.push(this.fieldData.unique_id);
                    this.rootData['ArithmeticNames'][arithmeticName]['calculations'][unique_id].calculate(source);
                }
            }
        }
    }
    setValueCalculation() {
        const _this = this;
        this.timer = setTimeout(() => {
            if (this.additionalParameter["Calculation"] && this.additionalParameter["Calculation"] != '') {
                const calculation = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter["Calculation"] }).field_label;
                let aNameExist = false;
                for (const key in this.rootData['ArithmeticNames']) {
                    if (calculation.includes(key)) {
                        aNameExist = true;
                        this.rootData['ArithmeticNames'][key]['calculations'][this.fieldData.unique_id] = {
                            value: calculation,
                            calculate: (source) => {
                                return _this.calculateResult(calculation, source);
                            }
                        };
                        this.rootData['ArithmeticNames'][key]['calculations'][this.fieldData.unique_id].calculate([this.fieldData.unique_id]);
                    }
                }
                if (!aNameExist) {
                    this.rootData['_ArithmeticNames'][this.fieldData.unique_id] = {
                        value: calculation,
                        calculate: (source) => {
                            return _this.calculateResult(calculation, source);
                        }
                    };
                }
            }
        }, 1000);
    }
    calculateResult(calculation, source) {
        let result = calculation;
        for (const key in this.rootData['ArithmeticNames']) {
            result = result.replace(new RegExp(key, 'g'), this.rootData['ArithmeticNames'][key].value);
        }
        result = this.calculationUtil.calculate(result);
        if (!isFinite(result)) {
            result = 0;
        }
        this.inputValue = !isNaN(result) ? Math.round(result * Math.pow(10, this.calculationRoundOff)) / Math.pow(10, this.calculationRoundOff) + '' : '';
        this.updateFieldData(this.inputValue, this.isValid);
        this.onComponentEvent('OnChangeValue');
        this.setValueArithmeticName(source);
    }
    setSearchData() {
        if (this.additionalParameter['Textfield Type'] === 'Search') {
            this.buttonLabel = this.additionalParameter['Button Label'] ? this.additionalParameter['Button Label'] : '';
            if (this.additionalParameter['Character Limit']) {
                this.searchButtonEditable = Number(this.additionalParameter['Character Limit']) > 0 ? false : true;
                if (this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
                    this.searchButtonEditable = true;
                }
            }
        }
    }
    // getMaskedInputValue(inputValue, mask) {
    //     if (inputValue && mask && mask.length > 0) {
    //         return this.conformToMask(inputValue, mask).conformedValue;
    //     }
    //     return inputValue;
    // }
    // ######### This is a substitute function for masking, need to test ##########
    // conformToMask(rawValue, mask) {
    //     let conformedValue = ''; let rawIndex = 0; for (let i = 0; i < mask.length; i++) {
    //         const maskChar = mask[i]; if (rawIndex >= rawValue.length) {
    //             break;  // Stop if we've reached the end of the input value    
    //         } 
    //         const rawChar = rawValue[rawIndex]; 
    //         if (maskChar === '9' && /\d/.test(rawChar)) { 
    //             conformedValue += rawChar; rawIndex++; 
    //         } else if (maskChar === 'A' && /[a-zA-Z]/.test(rawChar)) { 
    //             conformedValue += rawChar; rawIndex++; 
    //         } else { 
    //             conformedValue += maskChar; 
    //         }
    //     } return {'conformedValue': conformedValue};
    // }
    onFocus(event) {
        // For Onclick event on Focus
        // if (!this.additionalParameter['Textfield Type']) {
        //     this.onComponentEvent('OnClick');
        // }
        // // if (this.additionalParameter["Data Format"] && event.target.value != '' && this.maskString.includes('ext')){
        // //     const fullPattern = new RegExp(`^\\d{3}-\\d{3}-\\d{4}(?: ext \\d{1,4})?$`);
        // //     this.isValid = fullPattern.test(event.target.value);
        // //     this.valid = true;
        // // }
        // this.oldInputValue = event.target.value;
        // // END
        // this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
        //     // if (this.apiDataFormat) {
        //     //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
        //     // }
        //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue));
        // });
    }
    onChange(event) {
        // this.setSessionData(newValue);
    }
    // onKey(event: any, value: any) {
    //     if (event.key === 'Tab' && value.value === '') {
    //         return;
    //     }
    //     this.onDirty();
    //     this.isValid = value.valid;
    //     if (this.additionalParameter["Data Format"] && value.value == '') {
    //         this.maskDirty = true;
    //         let pattern = /[0-9\+\-\ ]/;
    //         if (this.additionalParameter["Data Format"].charAt(0) != '0' && this.additionalParameter["Data Format"].charAt(1) != '0') {
    //             pattern = /[0-9a-zA-Z\+\-\ ]/;
    //         }
    //         let inputChar = String.fromCharCode(event.key);
    //         if (!pattern.test(inputChar)) {
    //             this.isValid = true;
    //             this.valid = true;
    //             this.maskDirty = false;
    //         }
    //     }
    //     if (!this.additionalParameter['Character Limit'] || this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
    //         this.searchButtonEditable = true;
    //     } else {
    //         this.searchButtonEditable = false;
    //     }
    //     if (this.additionalParameter['BindKey']) {
    //         if (this.additionalParameter['BindKey'].split('|').map(str => Number(str.trim())).includes(event.keyCode)) {
    //             // if (this.apiDataFormat) {
    //             //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
    //             // }
    //             this.updateFieldData(
    //                 this.wfeEncryption.getEncryptedData(
    //                     this.additionalParameter['EncryptionType'], this.inputValue), this.isValid);
    //             this.onComponentEvent('OnBindKey');
    //         }
    //     } else {
    //         let userInput = value.value;
    //         clearTimeout(this.timer);
    //         this.timer = setTimeout(() => {
    //             // if (this.apiDataFormat) {
    //             // userInput = this.getMaskedInputValue(userInput, this.apiDataFormatMask);
    //             // }
    //             this.updateFieldData(
    //                 this.wfeEncryption.getEncryptedData(
    //                     this.additionalParameter['EncryptionType'], userInput), this.isValid);
    //             this.onComponentEvent('OnKeyUp');
    //         }, 500);
    //     }
    //     this.setValueArithmeticName();
    //     if (this.additionalParameter['CEE_STRING_FORMAT'] && this.additionalParameter['CEE_STRING_FORMAT'] != '' && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() == 'true') {
    //         this.onSessionDataUpdated(value.value, value);
    //     }
    // }
    validateCombinedPhoneFormat(value) {
        this.isValid = false;
        this.valid = false;
        this.maskDirty = true;
        if (this.phonePattern.test(value)) {
            this.isValid = true;
            this.valid = true;
            // console.log('Matched with combined');
        }
    }
    // Modified function to check for phone extension validation
    getRegexMessage(code) {
        // Check if input contains extension and has phone extension validation configured
        if (this.inputValue && this.inputValue.includes('ext') &&
            this.additionalParameter?.['CEE_PhoneNoExtValidation']) {
            return this.returnMessageData(this.additionalParameter['CEE_PhoneNoExtValidation']);
        }
        return this.returnMessageData(code);
    }
    validateDataFormat(value, code) {
        if (value.length > 13 && !value.includes('ext') && code != 'Backspace') {
            value = `${value.slice(0, 12)} ext ${value.at(-1).repeat(3)}`;
            this.maskString = '000-000-0000 ext 0*';
            this.textField.control.setValue(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.cdr.detectChanges();
        }
        if (code == 'Backspace' && this.withExtPattern.test(value)) {
            value = value.slice(0, -5);
            this.maskString = '000-000-0000*';
            this.textField.control.setValue(value.trim());
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.isValid = true;
            this.valid = true;
            this.cdr.detectChanges();
        }
        if (value.includes(' ')) {
            this.validateCombinedPhoneFormat(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.cdr.detectChanges();
            return;
        }
        this.isValid = false;
        this.valid = false;
        this.maskDirty = true;
        // let withSpace = code == 'Space' || value.includes(' ');
        // let extraSpace = code == 'Space' && !value.includes(' ') ? ' ' : '';
        let withSpace = (code === 'Space' && value.length === 12) || value.length === 13 || value.includes(' ');
        let extraSpace = ((code === 'Space' && value.length === 12) || (value.length === 13 || value.length > 13)) && !value.includes(' ') ? ' ' : '';
        if (withSpace) {
            if (code != 'Space') {
                value = value.slice(0, 12);
            }
            if (this.withSpacePattern.test(value + extraSpace)) {
                this.maskString = '000-000-0000 ext 0*';
                this.textField.control.setValue(`${value} ext`);
                this.textField.control.markAsDirty();
                this.textField.control.markAsPristine();
                this.textField.control.updateValueAndValidity();
                this.maskDirty = false;
                this.cdr.detectChanges();
                // console.log('MaskString updated:', this.maskString);
            }
        }
        else if (this.withoutSpacePattern.test(value) && value.length === 12) {
            this.maskString = '000-000-0000*';
            this.textField.control.setValue(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.isValid = true;
            this.valid = true;
            this.cdr.detectChanges();
            // console.log('Matched without space, maskString updated:', this.maskString);
        }
    }
    // validateSINFormat(sin: any) {
    //     this.maskDirty = true;
    //     this.isValid = false;
    //     this.valid = false;
    //     // Remove all non-digit characters (e.g., dashes, spaces)
    //     const sanitizedSIN = sin.replace(/\D/g, '');
    //     // SIN must be exactly 9 digits
    //     if (sanitizedSIN.length !== 9) {
    //         this.maskDirty = false;
    //         this.isValid = false;
    //         this.valid = false;
    //         this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.cdr.detectChanges();
    //         return false;
    //     }
    //     console.log('test 1');
    //     if (sanitizedSIN.toString() == '000000000') {
    //         this.maskDirty = false;
    //         this.isValid = true;
    //         this.valid = true;
    //         this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.cdr.detectChanges();
    //         return true;
    //     }
    //     console.log('test 2');
    //     let total = 0;
    //     // Iterate through each digit
    //     for (let i = 0; i < sanitizedSIN.length; i++) {
    //         let digit = parseInt(sanitizedSIN[i], 10);
    //         // Double every second digit from the left (even indices in 0-based index)
    //         if (i % 2 === 1) {
    //             digit *= 2;
    //             // If the result is two digits, add the digits together
    //             if (digit > 9) {
    //                 digit = Math.floor(digit / 10) + (digit % 10);
    //             }
    //         }
    //         // Add the processed digit to the total
    //         total += digit;
    //     }
    //     const isValid = total % 10 === 0;
    //     // Set condition result for conditional validation
    //     if (!this.rootData['_ValidationData']) this.rootData['_ValidationData'] = {};
    //     if (!this.rootData['_ValidationData']['validateSIN']) {
    //         this.rootData['_ValidationData']['validateSIN'] = {};
    //     }
    //     this.rootData['_ValidationData']['validateSIN']['isValidSIN'] = isValid ? '1' : '0';
    //     // Update field validity
    //     this.isValid = isValid;
    //     this.valid = isValid;
    //     this.updateFieldData(this.inputValue, this.isValid);
    //     // Force error re-evaluation and UI update
    //     this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.showErrorOnNext = !isValid; // Optional: force show error if needed
    //     this.cdr.detectChanges();
    //     return isValid;
    // }
    validateSINFormat() {
        if (this.additionalParameter['sin_number'] === 'true' && this.inputValue) {
            //localStorage.setItem('isSinNumber', "1");
            const sin = this.inputValue.replace(/\D/g, ''); // Remove non-digit chars
            const isValid = this.isValidSIN(sin);
            // Update field validity
            this.updateFieldData(this.inputValue, isValid);
            // console.log(this.wfeStepLoaderService.messagesDataMap["sin_validation_message"]);
            // console.log('isValid', isValid);
            // Evaluate conditional error messages manually
            if (!isValid) {
                this.isValid = false;
                this.valid = false;
                this.conditionalErrorMessageCompareFieldsSin(this.fieldData.api_key, this.fieldData, String(this.appData.id), true);
            }
            else {
                this.isValid = true;
                this.valid = true;
                this.conditionalErrorMessageCompareFieldsSin(this.fieldData.api_key, this.fieldData, String(this.appData.id), false);
            }
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.cdr.detectChanges();
        }
    }
    isValidSIN(sin) {
        if (!/^\d{9}$/.test(sin))
            return false;
        let sum = 0;
        for (let i = 0; i < sin.length; i++) {
            let digit = parseInt(sin.charAt(i), 10);
            if (i % 2 === 1) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            sum += digit;
        }
        if (sin.toString() == '000000000') {
            return true;
        }
        return sum % 10 === 0;
    }
    onKey(event, value) {
        // Handle Tab key with empty value
        //console.log('event key', event)
        if (event.key === 'Tab' && value.value === '') {
            return;
        }
        if (this.additionalParameter["CEE_SEARCH_HIGHLIGHT_SOURCE_FIELD"] && this.additionalParameter["CEE_SEARCH_HIGHLIGHT_ENABLE"] && this.additionalParameter["CEE_SEARCH_HIGHLIGHT_ENABLE"] === 'true') {
            this.sharedEventsService.emitOnApplyFilter.emit({
                source: this.additionalParameter["CEE_SEARCH_HIGHLIGHT_SOURCE_FIELD"],
                highlight: value.value.trim().toLowerCase()
            });
        }
        // Mark input as dirty and update validity
        this.onDirty();
        if (this.additionalParameter["Data Format"] && value.value != '' && this.maskStringCopy.includes('ext')) {
            this.validateCombinedPhoneFormat(value);
            // Test input value against the regex
            this.validateDataFormat(value.value, event.code);
        }
        // if (this.additionalParameter["sin_number"] && value.value != '' ) {
        //     // Test input value against the regex
        //     this.validateSINFormat(value.value);
        // }
        else {
            this.isValid = value.valid;
        }
        // Validation logic for mask with extension support
        if (this.additionalParameter["Data Format"] && value.value == '') {
            this.maskDirty = true;
            // Fallback pattern for basic numeric input
            const pattern = /[0-9\+\-\ ]/;
            const inputChar = String.fromCharCode(event.key);
            if (pattern.test(inputChar)) {
                return;
            }
        }
        // Enforce character limit if applicable
        if (!this.additionalParameter['Character Limit'] || this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
            this.searchButtonEditable = true;
        }
        else {
            this.searchButtonEditable = false;
        }
        // Handle BindKey functionality
        if (this.additionalParameter['BindKey']) {
            const bindKeys = this.additionalParameter['BindKey']
                .split('|')
                .map(str => Number(str.trim()));
            if (bindKeys.includes(event.keyCode)) {
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue), this.isValid);
                this.onComponentEvent('OnBindKey');
                return;
            }
        }
        else {
            // Handle input validation with delay
            let userInput = value.value;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], userInput), this.isValid);
                this.onComponentEvent('OnKeyUp');
            }, 500);
        }
        // Perform additional formatting checks
        this.setValueArithmeticName();
        if (this.additionalParameter['CEE_STRING_FORMAT'] &&
            this.additionalParameter['CEE_STRING_FORMAT'] !== '' &&
            this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] &&
            this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() === 'true') {
            this.onSessionDataUpdated(value.value, value);
        }
        // Commented due to phone number breaking
        // if (this.additionalParameter['CEE_Thousand_Separator'] && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true' && value.value != "") {
        //     this.maskString = 'separator.2';
        //     // this.formatThousandSeparator(value.value);
        //     // this.onInput(event);
        //     // setTimeout(() => {
        //     //     this.updateFieldData(value.value.replaceAll(',', ''))
        //     // }, 1000);
        // }
        this.validateSINFormat();
    }
    // isNumeric(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // }
    // onInput(event): void {
    //     let position = event.target.selectionStart;
    //     // console.log("value: ",(<HTMLInputElement>event.target).value)
    //     let commaCount = this.inputValue ? this.inputValue.split(',').length - 1 : 0
    //     setTimeout(() => {
    //         // console.log("position: ", position, "commaCount: ", commaCount, "prevCommaCount: ", this.prevCommaCount)
    //         let seletionPosition = (Number(this.prevCommaCount) == Number(commaCount)) ? position : (position + 1);
    //         let beforeDecimal = this.inputValue.indexOf('.');
    //         // console.log("seletionPosition: ", seletionPosition)
    //         event.target.selectionStart = event.target.selectionEnd = seletionPosition;
    //         this.prevCommaCount = commaCount;
    //     }, 0);
    //     // let beforeDecimal = this.inputValue.indexOf('.');
    //     // setTimeout(() => {
    //     //     event.target.selectionStart = event.target.selectionEnd = beforeDecimal ? beforeDecimal : 0;
    //     // },0);
    // }
    // formatThousandSeparator(value) {
    //     if (this.additionalParameter['CEE_Thousand_Separator'] && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true' && value != "" && this.isNumeric(value.replaceAll(',', ''))) {
    //         console.log("inputValue: ", this.inputValue)
    //         console.log("value: ", value);
    //         const filterPipe = new ThousandSeparatorPipe();
    //         const fiteredArr = filterPipe.transform(value.replaceAll(',', ''), 'en-US');
    //         this.inputValue = fiteredArr;
    //         // console.log("fiteredArr: ",this.numberWithCommas(value.value))
    //         // this.inputValue = this.numberWithCommas(value.value);
    //         // this.onSessionDataUpdated(value.value, value);
    //     }
    // }
    // numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    onKeyDown(event, value) {
        if (this.additionalParameter["Data Format"]) {
            let inputArray = value.value.split('');
            let cursorPosition = event.target.selectionStart;
            if (event.keyCode === 46) {
                if (inputArray[cursorPosition - 1] == '-') {
                    this.timer = setTimeout(() => {
                        event.target.selectionStart = cursorPosition;
                        event.target.selectionEnd = cursorPosition;
                    });
                }
                else if (inputArray[cursorPosition] == '-') {
                    inputArray.splice(cursorPosition + 1, 1);
                    this.inputValue = inputArray.join();
                    this.timer = setTimeout(() => {
                        event.target.selectionStart = cursorPosition + 1;
                        event.target.selectionEnd = cursorPosition + 1;
                    });
                }
                else { }
            }
            else {
                // if (event.keyCode > 47 && inputArray.length < cursorPosition) {
                //     event.target.selectionStart = inputArray.length;
                //     event.target.selectionEnd = inputArray.length;
                // }
            }
        }
        if (this.oldInputValue !== value) {
            this.onComponentEvent('OnChangeValue');
        }
    }
    onSessionDataUpdated(value, state) {
        if (this.additionalParameter["Data Format"] && value != '' && this.maskStringCopy.includes('ext')) {
            this.validateCombinedPhoneFormat(value);
            this.updateFieldData(value, true);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
        }
        else {
            this.isValid = state.valid;
        }
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        // if (this.apiDataFormat) {
        //     value = this.getMaskedInputValue(value, this.apiDataFormatMask);
        // }
        if (this.additionalParameter['CEE_STRING_FORMAT']) {
            this.inputValue = value = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], value);
        }
        // console.log("this.isValid: ",this.isValid)
        let valid = this.isValid;
        if (this.inputValue && this.validationRegex) {
            const patt = new RegExp(this.validationRegex);
            valid = patt.test(this.inputValue);
        }
        if (this.isThousandSeparatorEnabled && value != "") {
            value = value.replaceAll(',', '');
            if (value != undefined && value != null && !value.includes('.')) {
                value += '.00';
            }
            this.inputValue = this.commonUtil.formatNumber(value);
        }
        this.timer = setTimeout(() => {
            this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], value), valid);
        }, 10);
        // Hide _ in input box
        /* if (this.additionalParameter["Data Format"]) {
            if (this.additionalParameter["Data Format"].length != value.length) {
                this.clearValue(state);
            }
        } */
        // trigger event list of focus out
        if (this.additionalParameter['ValidationCheck'] && this.additionalParameter['ValidationCheck'].toLowerCase() === 'true') {
            if (this.isValid) {
                if (this.oldInputValue !== value) {
                    this.onComponentEvent('OnChangeValue');
                }
                this.onComponentEvent('OnFocusOut');
            }
            else {
                return;
            }
        }
        else {
            if (this.oldInputValue !== value) {
                this.onComponentEvent('OnChangeValue');
            }
            this.onComponentEvent('OnFocusOut');
        }
        if (this.additionalParameter['sin_number'] === 'true') {
            //("checkig for sin number");
            const sin = this.inputValue.replace(/\D/g, ''); // Remove non-digit chars
            const isValid = this.isValidSIN(sin);
            //console.log('isValid test - ', isValid);
            this.validateSINFormat(); // check
            this.updateFieldData(value, isValid); // test
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
        }
    }
    // get isThousandSeparatorEnabled(): boolean {
    //     return this.additionalParameter['CEE_Thousand_Separator']?.toLowerCase() === 'true';
    // }
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
    clearValue(event) {
        this.showCross = false;
        this.inputValue = '';
        this.updateFieldData('');
        this.onComponentEvent('clear');
        if (this.additionalParameter['CEE_RELOAD_PAGE_ON_CLEAR'] && this.additionalParameter['CEE_RELOAD_PAGE_ON_CLEAR'].toLowerCase() == 'true') {
            this.onComponentEvent('OnClick');
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
                // this.inputValue = this.getMaskedInputValue(apiData, this.mask); // Value to display.
                if (this.inputValue && this.validationRegex) {
                    const patt = new RegExp(this.validationRegex);
                    valid = patt.test(this.inputValue);
                }
                this.setValueArithmeticName();
                // if (this.apiDataFormat) {
                //     let valueToUpdate = this.getMaskedInputValue(apiData, this.apiDataFormatMask);
                //                         this.updateFieldData(valueToUpdate, valid);
                // } else {
                //                         this.updateFieldData(this.inputValue, valid);
                // }
                this.updateFieldData(this.inputValue, valid);
                // this.formatThousandSeparator(this.inputValue);
            }
        }
        // else{
        //     this.setSessionData(this.inputValue);
        // }
        if (this.isThousandSeparatorEnabled) {
            this.timer = setTimeout(() => {
                this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                    this.inputValue += '.00';
                }
            }, 0);
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
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                // if (this.apiDataFormat) {
                //     value = this.getMaskedInputValue(value, this.apiDataFormatMask);
                // }
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
                this.setSearchData();
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
            unique_id_value = (this.rowData && this.rowData.unique_id) ? this.rowData.unique_id : this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.inputValue = get_data[unique_id_value];
            // if (this.apiDataFormat) {
            //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
            // }
            this.updateFieldData(this.inputValue);
        }
    }
    triggerEvent() {
        if (this.searchButtonEditable) {
            this.onComponentEvent('OnClick');
        }
    }
    focusedInputOnKeyDown(event) {
        // Only listen for events from the specific input
        setTimeout(() => {
            if (event.target === this.inputField.nativeElement) {
                if (this.inputValue.trim() != "") {
                    this.enterKeySubject.next(event);
                }
            }
        }, 0);
    }
    setFieldValueOnSetValuesEvent(data) {
        this.setEyeIconDisableForPassword();
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                if (this.isThousandSeparatorEnabled) {
                    this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                    if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                        this.inputValue += '.00';
                    }
                }
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                setTimeout(() => {
                    this.sharedEventsService.settingFieldValueEventFinished.emit(true);
                }, 10);
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
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']'
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
    setEyeIconDisableForPassword() {
        if (this.isEditable && this.inputType == 'password') {
            this.hide = true;
        }
    }
    static ɵfac = function CeeTextfieldComponent_Factory(t) { return new (t || CeeTextfieldComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTextfieldComponent, selectors: [["app-cee-textfield"]], viewQuery: function CeeTextfieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                provideNgxMask(),
                CommonUtil
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["materialInput", ""], ["autocompleteTextfield", ""], ["textFieldData", ""], ["passwordField", ""], ["ceeError", ""], ["textField", "ngModel"], ["textField", "ngModel", "inputField", ""], ["singleErrorMessage", ""], ["materialTextFieldData", ""], ["materialLabel", ""], ["materialPasswordField", ""], [4, "ngIf", "ngIfElse"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "form-field", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "form-field", 3, "ngClass"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "input-group-prepend"], [1, "input-group-text"], ["separator", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "keydown.enter", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["class", "textfield-cross-icon", 3, "click", 4, "ngIf"], ["class", "textfield-cross-icon", 3, "innerHTML", "click", 4, "ngIf"], [1, "textfield-cross-icon", 3, "click"], [1, "textfield-cross-icon", 3, "click", "innerHTML"], [1, "input-group-append"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"], [1, "form-field"], [1, "input-group"], [3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "input-group-text", 3, "click"], [1, "pointer"], ["class", "error-message-wrapper", 4, "ngFor", "ngForOf"], [1, "form-button"], ["type", "button", 3, "click", "id", "ngClass", "disabled"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "mat-full-width"], ["matInput", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "keydown.enter", "specialCharacters", "mask", "dropSpecialCharacters", "type", "id", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matTextPrefix", "", 4, "ngIf"], ["matTextSuffix", "", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["matTextPrefix", ""], ["matTextSuffix", ""], ["matInput", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "id", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["type", "button", 3, "tooltip"]], template: function CeeTextfieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const materialInput_r47 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", !ctx.is_material)("ngIfElse", materialInput_r47);
        } }, dependencies: [SeparatorDirective, MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatPrefix, i12.MatSuffix, MatInputModule, i12$1.MatInput, FormsModule, i14.ɵNgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.NgModel, i14.NgForm, NgTemplateOutlet,
            NgSwitch, MatIconModule, i15.MatIcon, NgStyle, NgClass,
            MatTooltipModule, NgxMaskDirective, CommonModule, i13.NgForOf, i13.NgIf, i13.NgSwitchCase, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: [".mat-full-width[_ngcontent-%COMP%]{width:100%}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTextfieldComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-textfield', standalone: true, imports: [
                    SeparatorDirective, MatFormFieldModule, MatInputModule, FormsModule, NgTemplateOutlet,
                    ShowPasswordDirective, NgSwitch, MatIconModule, NgStyle, NgClass, CustomTooltipDirective,
                    MatTooltipModule, NgxMaskDirective, CommonModule, TooltipModule
                ], providers: [
                    provideNgxMask(),
                    CommonUtil
                ], template: "<!-- Bootstrap support by default -->\r\n<ng-container *ngIf=\"!is_material; else materialInput\">\r\n    <div [ngClass]=\"cssClasses\" *ngIf=\"isVisible || isSafariClass\">\r\n        <ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n            <ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n        </ng-container>\r\n        <ng-template #autocompleteTextfield>\r\n            <form autocomplete=\"off\">\r\n                <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n                <ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <ng-template #textFieldData>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-label\">\r\n                    <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                        <label class=\"col-form-label\"\r\n                            *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                        <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                            [innerHTML]=\"fieldData.field_label\"></label>\r\n                    </ng-container>\r\n                    <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n                    <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n                    [tooltip]=\"fieldData.tooltip\"\r\n                        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                        i\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-field\" [ngClass]=\"{'input-group': inputPrefix || inputSuffix}\" *ngIf=\"additionalParameter['display_password'] != 'true'; else passwordField\">\r\n                    <div class=\"input-group-prepend\" *ngIf=\"inputPrefix\">\r\n                        <span class=\"input-group-text\">{{inputPrefix}}</span>\r\n                    </div>\r\n                    <!-- <input (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                    <ng-container *ngIf=\"isThousandSeparatorEnabled\">\r\n                    <input separator (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                        type=\"{{inputType}}\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                        class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                        [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n                        'font-size': fieldData.field_style.font_size,\r\n                        'font-style': fieldData.field_style.font_style,\r\n                        'font-color': fieldData.field_style.font_color,\r\n                        'border-color': fieldData.field_style.border_color,\r\n                        'height': fieldData.field_style.field_height,\r\n                        'width': fieldData.field_style.field_width,\r\n                        'background-color': fieldData.field_style.background_color\r\n                        }\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                        maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                        [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\" (keyup)=\"onKey($event, textField)\"\r\n                        (keydown)=\"onKeyDown($event, textField)\"\r\n                        (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                        #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                        (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                        [attr.max]=\"additionalParameter['Max']\" />\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!isThousandSeparatorEnabled\">\r\n                        <input (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            type=\"{{inputType}}\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                            class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                            [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'font-color': fieldData.field_style.font_color,\r\n                            'border-color': fieldData.field_style.border_color,\r\n                            'height': fieldData.field_style.field_height,\r\n                            'width': fieldData.field_style.field_width,\r\n                            'background-color': fieldData.field_style.background_color\r\n                            }\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\" (keyup)=\"onKey($event, textField)\"\r\n                            (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                            [attr.max]=\"additionalParameter['Max']\" #inputField (keydown.enter)=\"focusedInputOnKeyDown($event)\"/>\r\n                        </ng-container>\r\n                    <ng-container *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\">\r\n                        <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                            *ngIf=\"!isHTML(additionalParameter['ClearButton'])\">{{additionalParameter['ClearButton']}}</span>\r\n                        <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                            *ngIf=\"isHTML(additionalParameter['ClearButton'])\"\r\n                            [innerHTML]=\"additionalParameter['ClearButton']\"></span>\r\n                    </ng-container>\r\n                    <div class=\"input-group-append\" *ngIf=\"inputSuffix\">\r\n                        <span class=\"input-group-text\">{{inputSuffix}}</span>\r\n                    </div>\r\n                    <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                        [ngSwitch]=\"characterCount.type\">\r\n                        <span *ngSwitchCase=\"'Count'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Remaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Total'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'CharRemaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                    </div>\r\n                    <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                        <ng-container\r\n                            *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div>\r\n                                    <p *ngIf=\"message.color && message.message_text\"\r\n                                        [ngStyle]=\"{'color': message.color}\">\r\n                                        {{message.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #ceeError>\r\n                        <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\">\r\n                                    <ng-container *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                        <div *ngIf=\"textField?.errors.required\">\r\n                                            <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors?.minlength\">\r\n                                            <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors.pattern\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container  *ngIf=\"!valid || (textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value\r\n                                    ))\">\r\n                                        <div *ngIf=\"(isDataFormatWithRegex && !isValid)\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                               [ngStyle]=\"{'color': getRegexMessage(message.code).color}\">\r\n                                                {{getRegexMessage(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #singleErrorMessage>\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                <div\r\n                                    *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                    <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                        [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-template>\r\n                    <!-- <ng-container *ngIf=\"!textField?.invalid\">\r\n                        <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container> -->\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <ng-template #passwordField>\r\n                    <div class=\"form-field\">\r\n                        <div class=\"input-group\">\r\n                            <!-- <input (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                            <input (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                                (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                                type=\"{{ hide ? 'password':'text' }}\"\r\n                                class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                                [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"validationRegex\"\r\n                                [ngStyle]=\"{\r\n                                                                            'font-family': fieldData.field_style.font_name,\r\n                                                                            'font-size': fieldData.field_style.font_size,\r\n                                                                            'font-style': fieldData.field_style.font_style,\r\n                                                                            'font-color': fieldData.field_style.font_color,\r\n                                                                            'border-color': fieldData.field_style.border_color,\r\n                                                                            'height': fieldData.field_style.field_height,\r\n                                                                            'width': fieldData.field_style.field_width,\r\n                                                                            'background-color': fieldData.field_style.background_color\r\n                                                                          }\"\r\n                                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                                maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                                [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                                (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                                (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                                #textField=\"ngModel\" [required]=\"isMandatory\"\r\n                                placeholder=\"{{fieldData.placeholder_text}}\" (focus)=\"onFocus($event)\" />\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\" (click)=\"hide = !hide\">\r\n                                    <mat-icon [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\"\r\n                                        class=\"pointer\">\r\n                                        {{hide ?\r\n                                        'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\">\r\n                            <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                                *ngIf=\"!isHTML(additionalParameter['ClearButton'])\">{{additionalParameter['ClearButton']}}</span>\r\n                            <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                                *ngIf=\"isHTML(additionalParameter['ClearButton'])\"\r\n                                [innerHTML]=\"additionalParameter['ClearButton']\"></span>\r\n                        </ng-container>\r\n                        <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                            [ngSwitch]=\"characterCount.type\">\r\n                            <span *ngSwitchCase=\"'Count'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                                ? characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'Remaining'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit -\r\n                                inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                                ? characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'Total'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                                characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'CharRemaining'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit -\r\n                                inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                                characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                        </div>\r\n                        <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                            <ng-container\r\n                                *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                    <div>\r\n                                        <p *ngIf=\"message.color && message.message_text\"\r\n                                            [ngStyle]=\"{'color': message.color}\">\r\n                                            {{message.message_text}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #ceeError>\r\n                            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                                <ng-container *ngFor=\"let message of messages\">\r\n                                    <div class=\"error-message-wrapper\"\r\n                                        *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                        <div *ngIf=\"textField?.errors.required\">\r\n                                            <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors?.minlength\">\r\n                                            <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors.pattern\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <ng-template #singleErrorMessage>\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                    <div\r\n                                        *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                        <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                            [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ng-template>\r\n                        <ng-container *ngIf=\"!textField?.invalid\">\r\n                            <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                                <div>\r\n                                    <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                        {{item.value.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </ng-template>\r\n\r\n                <ng-container *ngIf=\"additionalParameter['Textfield Type'] == 'Search'\">\r\n                    <div class=\"form-button\">\r\n                        <button class=\"cee-search-button cee-search-button-{{fieldData.unique_id}}\"\r\n                            id=\"search_{{fieldData.unique_id}}\"\r\n                            [attr.aria-label]=\"'Click On ' + additionalParameter['Button Label'] \"\r\n                            [ngClass]=\"{'Search':'default'}[fieldData.field_type]\" type=\"button\"\r\n                            (click)=\"triggerEvent()\"\r\n                            [disabled]=\"!inputValue || !isValid || !searchButtonEditable || !isEditable\">{{buttonLabel}}</button>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- Material support -->\r\n<ng-template #materialInput>\r\n    <div *ngIf=\"isVisible\">\r\n        <ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n            <ng-container [ngTemplateOutlet]=\"materialTextFieldData\"></ng-container>\r\n        </ng-container>\r\n        <ng-template #autocompleteTextfield>\r\n            <form autocomplete=\"off\">\r\n                <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n                <ng-container [ngTemplateOutlet]=\"materialTextFieldData\"></ng-container>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <ng-template #materialTextFieldData>\r\n            <!-- Template:-  #materialLabel -Field label common for textfield and passwordfield-->\r\n            <ng-template #materialLabel>\r\n                <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                    <span *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</span>\r\n                    <span *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></span>\r\n                </ng-container>\r\n\r\n            </ng-template>\r\n            <ng-container *ngIf=\"additionalParameter['display_password'] != 'true'; else materialPasswordField\">\r\n                <div\r\n                    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\">\r\n                    <mat-form-field class=\"mat-full-width\">\r\n                        <mat-label>\r\n                            <ng-container [ngTemplateOutlet]=\"materialLabel\"></ng-container>\r\n                        </mat-label>\r\n                        <!-- <input matInput (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                        <input matInput (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\" [type]=\"inputType\"\r\n                            [id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                            (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                            [attr.max]=\"additionalParameter['Max']\" #inputField (keydown.enter)=\"focusedInputOnKeyDown($event)\"/>\r\n\r\n                        <!-- Clear Button i.e cross button to clear the input text -->\r\n                        <button matSuffix mat-icon-button aria-label=\"Clear\"\r\n                            *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\"\r\n                            (click)=\"clearValue($event)\">\r\n                            <mat-icon>close</mat-icon>\r\n                        </button>\r\n                        <span matTextPrefix *ngIf=\"inputPrefix\">{{inputPrefix}}&nbsp;</span>\r\n                        <span matTextSuffix *ngIf=\"inputSuffix\">{{inputSuffix}}</span>\r\n                    </mat-form-field>\r\n\r\n                    <!-- Differet messages below the text field -->\r\n                    <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                        [ngSwitch]=\"characterCount.type\">\r\n                        <span *ngSwitchCase=\"'Count'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Remaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Total'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'CharRemaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                    </div>\r\n\r\n                    <!-- Error messages -->\r\n                    <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                        <ng-container\r\n                            *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div>\r\n                                    <p *ngIf=\"message.color && message.message_text\"\r\n                                        [ngStyle]=\"{'color': message.color}\">\r\n                                        {{message.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n\r\n                    <ng-template #ceeError>\r\n                        <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                    <div *ngIf=\"textField?.errors.required\">\r\n                                        <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                    <div *ngIf=\"textField?.errors?.minlength\">\r\n                                        <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                    <div *ngIf=\"textField?.errors.pattern\">\r\n                                        <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #singleErrorMessage>\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                <div\r\n                                    *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                    <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                        [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-template>\r\n                    <ng-container *ngIf=\"!textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                        <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #materialPasswordField>\r\n                <div\r\n                    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\">\r\n                    <mat-form-field class=\"mat-full-width\">\r\n                        <mat-label>\r\n                            <ng-container [ngTemplateOutlet]=\"materialLabel\"></ng-container>\r\n                        </mat-label>\r\n                        <!-- <input matInput (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                        <input matInput (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                            type=\"{{ hide ? 'password':'text' }}\" [id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [pattern]=\"!maskString ? validationRegex : ''\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                            (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" />\r\n\r\n                        <!-- Tooltip with informaion icon -->\r\n                        <button *ngIf=\"hasTooltip\" type=\"button\"\r\n                            class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                            [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                            i\r\n                        </button>\r\n\r\n                        <!-- Password visibility toggle button on textfield -->\r\n                        <button matSuffix mat-icon-button (click)=\"hide = !hide\">\r\n                            <mat-icon [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\" class=\"pointer\">\r\n                                {{hide ? 'visibility_off' : 'visibility'}}\r\n                            </mat-icon>\r\n                        </button>\r\n\r\n                        <!-- Clear Button i.e cross button to clear the input text -->\r\n                        <button matSuffix mat-icon-button aria-label=\"Clear\"\r\n                            *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\"\r\n                            (click)=\"clearValue($event)\">\r\n                            <mat-icon>close</mat-icon>\r\n                        </button>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <!-- Differet messages below the text field -->\r\n                <div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n                    <span *ngSwitchCase=\"'Count'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                        ? characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Remaining'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit -\r\n                        inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                        ? characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Total'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                        characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'CharRemaining'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit -\r\n                        inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                        characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                </div>\r\n                <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                    <ng-container\r\n                        *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                            <div>\r\n                                <p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n                                    {{message.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #ceeError>\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div *ngIf=\"textField?.errors.required\">\r\n                                    <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                                <div *ngIf=\"textField?.errors?.minlength\">\r\n                                    <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                                <div *ngIf=\"textField?.errors.pattern\">\r\n                                    <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                            <div\r\n                                *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                    [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"!textField?.invalid\">\r\n                    <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div>\r\n                            <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                {{item.value.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"additionalParameter['Textfield Type'] == 'Search'\">\r\n                <div class=\"form-button\">\r\n                    <button class=\"cee-search-button cee-search-button-{{fieldData.unique_id}}\"\r\n                        id=\"search_{{fieldData.unique_id}}\"\r\n                        [attr.aria-label]=\"'Click On ' + additionalParameter['Button Label'] \"\r\n                        [ngClass]=\"{'Search':'default'}[fieldData.field_type]\" type=\"button\"\r\n                        (click)=\"triggerEvent()\"\r\n                        [disabled]=\"!isValid || !searchButtonEditable || !isEditable\">{{buttonLabel}}</button>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                i\r\n            </button>\r\n        </ng-template>\r\n\r\n        <!-- Tooltip Template -->\r\n        <!-- <ng-template #tooltipTemplate>\r\n            <div class=\"tooltip_container\">\r\n                <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n            </div>\r\n        </ng-template> -->\r\n    </div>\r\n</ng-template>\r\n", styles: [".mat-full-width{width:100%}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }], { textField: [{
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
        }], inputField: [{
            type: ViewChild,
            args: ['inputField']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTextfieldComponent, { className: "CeeTextfieldComponent", filePath: "lib\\field-components\\cee-textfield\\cee-textfield.component.ts", lineNumber: 49 }); })();

export { CeeTextfieldComponent };
//# sourceMappingURL=ng-cee-core-cee-textfield.component-ddq1tk4O.mjs.map
