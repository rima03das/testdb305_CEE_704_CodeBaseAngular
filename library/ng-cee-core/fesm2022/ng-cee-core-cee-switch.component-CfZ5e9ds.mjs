import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i10 from 'ngx-ui-switch';
import { UiSwitchModule } from 'ngx-ui-switch';
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
import '@angular/forms';
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

const _c0 = a0 => ({ "color": a0 });
function CeeSwitchComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeSwitchComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeSwitchComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeSwitchComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 10)(2, CeeSwitchComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeSwitchComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeSwitchComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeSwitchComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ui-switch", 16);
    i0.ɵɵlistener("change", function CeeSwitchComponent_div_0_ng_container_8_Template_ui_switch_change_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("color", ctx_r0.fieldData.field_style.font_color);
    i0.ɵɵpropertyInterpolate("checkedLabel", ctx_r0.keyValuePair[1].key);
    i0.ɵɵpropertyInterpolate("uncheckedLabel", ctx_r0.keyValuePair[0].key);
    i0.ɵɵproperty("checked", !ctx_r0.fieldValue || ctx_r0.fieldValue == ctx_r0.keyValuePair[0].value ? false : true)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
} }
function CeeSwitchComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "div")(3, "p", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, item_r3.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.value.message_text, "");
} }
function CeeSwitchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeSwitchComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeSwitchComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeSwitchComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8);
    i0.ɵɵtemplate(8, CeeSwitchComponent_div_0_ng_container_8_Template, 2, 7, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeSwitchComponent_div_0_ng_container_9_Template, 5, 4, "ng-container", 9);
    i0.ɵɵpipe(10, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.keyValuePair && ctx_r0.keyValuePair.length === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 6, ctx_r0.showComparisonError));
} }
class CeeSwitchComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    keyValuePair = [];
    value1 = '';
    value2 = '';
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
    setKeyValue() {
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            for (let item of this.fieldData.possible_values) {
                let pair = item.split("||");
                this.keyValuePair.push({
                    value: pair[0],
                    key: pair[1],
                });
            }
        }
    }
    onViewDataInit() {
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.setKeyValue();
        if (this.keyValuePair.length > 0) {
            this.value1 = this.keyValuePair[0]['value'];
            this.value2 = this.keyValuePair[1]['value'];
            // --- Default value support ---
            const defaultValue = this.additionalParameter['default_value'];
            if (!this.fieldValue || this.fieldValue === '') {
                if (defaultValue === this.value1 || defaultValue === this.value2) {
                    this.fieldValue = defaultValue;
                }
                else {
                    this.fieldValue = this.value1; // fallback to value1
                }
                this.fieldData.value = this.fieldValue;
                this.updateFieldData(this.fieldValue);
            }
            else {
                if (this.fieldValue[this.fieldData.unique_id]) {
                    this.fieldValue = this.fieldValue[this.fieldData.unique_id]['value'];
                }
                this.fieldData.value = this.fieldValue;
            }
        }
    }
    concatData() { }
    onSessionDataUpdated(event) {
        this.updateFieldData(event ? this.value2 : this.value1);
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.fieldValue = apiValue;
            this.updateFieldData(apiValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data.hasOwnProperty('uniqueIds') && data.hasOwnProperty('values')) {
            if (data['uniqueIds'].length !== data['values'].length) {
                return;
            }
            if (data['uniqueIds'].length > 0) {
                if (data['uniqueIds']?.includes(this.fieldData.unique_id)) {
                    const index = data['uniqueIds']?.indexOf(this.fieldData.unique_id);
                    if (index !== -1) {
                        this.fieldValue = data['values'][index];
                        this.fieldData.value = this.fieldValue;
                        this.updateFieldData(this.fieldValue);
                    }
                }
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[0]': 'value1',
        //     'fieldData.possible_values[1]': 'value2',
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
    }
    static ɵfac = function CeeSwitchComponent_Factory(t) { return new (t || CeeSwitchComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeSwitchComponent, selectors: [["app-cee-switch"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group", "switch-container"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "custom-control", "custom-switch"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [3, "change", "color", "checked", "checkedLabel", "uncheckedLabel", "disabled"], [1, "error-message-wrapper"], [3, "ngStyle"]], template: function CeeSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeSwitchComponent_div_0_Template, 11, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, UiSwitchModule, i10.UiSwitchComponent, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeSwitchComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-switch', standalone: true, imports: [MatTooltipModule, NgStyle, UiSwitchModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group switch-container\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <div class=\"custom-control custom-switch\">\r\n                <!-- <input [disabled]=\"!isEditable\" type=\"checkbox\" name=\"{{fieldData.unique_id}}\"\r\n                    class=\"custom-control-input\" id=\"{{fieldData.unique_id}}{{i}}\" value=\"{{fieldValue}}\"\r\n                    (change)=\"getUpdatedValue($event)\"> -->\r\n                <!-- labelOn=\"{{keyValuePair[1].key}}\" labelOff=\"{{keyValuePair[0].key}}\" -->\r\n                <ng-container *ngIf=\"keyValuePair && keyValuePair.length === 2\">\r\n                    <ui-switch color=\"{{fieldData.field_style.font_color}}\"\r\n                        [checked]=\"(!fieldValue || fieldValue == keyValuePair[0].value) ? false: true\"\r\n                        checkedLabel=\"{{keyValuePair[1].key}}\" uncheckedLabel=\"{{keyValuePair[0].key}}\"\r\n                        [disabled]=\"!isEditable\" (change)=\"onSessionDataUpdated($event)\" [attr.tabindex]=\"tabIndexValue\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\">\r\n                    </ui-switch>\r\n                </ng-container>\r\n                <!-- <ui-switch color=\"{{fieldData.field_style.font_color}}\"\r\n                    [checked]=\"(!fieldValue || fieldValue == keyValuePair[0].value) ? false: true\"\r\n                    checkedLabel=\"{{keyValuePair[1].key}}\" uncheckedLabel=\"{{keyValuePair[0].key}}\"\r\n                    [disabled]=\"!isEditable\" (change)=\"onSessionDataUpdated($event)\" labelOn=\"{{keyValuePair[1] ? keyValuePair[1].key : ''}}\"\r\n                    labelOff=\"{{keyValuePair[0] ? keyValuePair[0].key : ''}}\" [attr.tabindex]=\"tabIndexValue\"\r\n                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\">\r\n                </ui-switch> -->\r\n                <!-- <mat-slide-toggle [color]=\"fieldData.field_style.font_color\" [checked]=\"fieldValue == value1 ? false: true\"\r\n                    [disabled]=\"!isEditable\">\r\n                    {{value1}}\r\n                </mat-slide-toggle> -->\r\n            </div>\r\n            <!-- <div class=\"error-message-wrapper\" *ngIf=\"isMandatory\">\r\n                <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n            </div> -->\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeSwitchComponent, { className: "CeeSwitchComponent", filePath: "lib\\field-components\\cee-switch\\cee-switch.component.ts", lineNumber: 26 }); })();

export { CeeSwitchComponent };
//# sourceMappingURL=ng-cee-core-cee-switch.component-CfZ5e9ds.mjs.map
