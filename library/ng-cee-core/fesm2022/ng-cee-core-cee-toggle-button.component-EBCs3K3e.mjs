import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, l as SessionKeyUtil, S as SetAPICallbackData, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, h as CeeApiService, g as WfeStepLoaderService, e as AppDataService, f as ApiDataService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
import * as i11 from '@angular/router';
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

const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
function CeeToggleButtonComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeToggleButtonComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
} }
function CeeToggleButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    i0.ɵɵlistener("click", function CeeToggleButtonComponent_div_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleClickListener($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeToggleButtonComponent_div_0_span_3_Template, 2, 0, "span", 4)(4, CeeToggleButtonComponent_div_0_button_4_Template, 2, 1, "button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("name", ctx_r1.fieldData.api_key);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(9, _c0, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("disabled", !ctx_r1.isEditable)("innerHtml", ctx_r1.inputValue ? ctx_r1.label1 : ctx_r1.label2, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : ctx_r1.inputValue ? ctx_r1.label1 : ctx_r1.label2)("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
class CeeToggleButtonComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    router;
    sharedEventsServices;
    wfeStepLoaderService;
    appDataService;
    apiDataService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    sectionData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    sessionKeyUtil;
    setApiCallBackUtil;
    keyValuePair = [];
    value1 = '';
    value2 = '';
    label1 = '';
    label2 = '';
    inputValue = true;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, router, 
    // public ceeInitService: CeeInitServiceService,
    sharedEventsServices, 
    // public ceeLogHandlerService: CeeLogHandlerService,
    wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.sharedEventsServices = sharedEventsServices;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.sessionKeyUtil = new SessionKeyUtil();
        this.setApiCallBackUtil = new SetAPICallbackData(apiDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    setKeyValue() {
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            for (let item of this.fieldData.possible_values) {
                let pair = item.split("||");
                this.keyValuePair.push({
                    value: pair[0],
                    label: pair[1],
                });
            }
        }
    }
    onViewDataInit() {
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.setKeyValue();
        if (this.keyValuePair.length > 1) {
            this.value1 = this.keyValuePair[0]['value'];
            this.value2 = this.keyValuePair[1]['value'];
            this.label1 = this.keyValuePair[0]['label'];
            this.label2 = this.keyValuePair[1]['label'];
            if (this.rowData && this.rowData.hasOwnProperty('value')) {
                this.fieldValue = this.rowData.value;
            }
            if (this.fieldValue === '') {
                this.fieldValue = this.value1;
            }
            this.inputValue = (this.value1 == this.fieldValue) ? true : false;
        }
    }
    concatData() { }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const fieldVal = this.setApiCallBackUtil.setApiCallBackData(this.fieldData, data);
        if (fieldVal) {
            this.fieldValue = fieldVal;
            this.inputValue = (this.value1 == this.fieldValue) ? true : false;
        }
    }
    /* Special chek for button click */
    toggleClickListener(e) {
        this.inputValue = !this.inputValue;
        this.updateFieldData(this.inputValue ? this.value1 : this.value2);
        this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: this.inputValue ? this.value1 : this.value2 });
        this.setModalorSanckBarMessage(this.fieldData.unique_id, e);
    }
    setFieldValueOnSetValuesEvent(data) {
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
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[*]': 'fieldData.possible_values'
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
    }
    static ɵfac = function CeeToggleButtonComponent_Factory(t) { return new (t || CeeToggleButtonComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeToggleButtonComponent, selectors: [["app-cee-toggle-button"]], inputs: { stepId: "stepId", fieldData: "fieldData", sectionData: "sectionData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-field"], ["type", "button", 1, "cee-toogle-button", 3, "click", "name", "id", "ngStyle", "disabled", "innerHtml"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"]], template: function CeeToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeToggleButtonComponent_div_0_Template, 5, 18, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, MatTooltipModule, CommonModule, i13.NgIf, TooltipModule, TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeToggleButtonComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-toggle-button', standalone: true, imports: [NgStyle, MatTooltipModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-field\">\r\n\t\t<button name=\"{{fieldData.api_key}}\" class=\"cee-toogle-button\" id=\"{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : inputValue?label1:label2\"\r\n\t\t\t[attr.tabindex]=\"tabIndexValue\" [ngStyle]=\"{\r\n                'font-family': fieldData.field_style.font_name,\r\n                'font-size': fieldData.field_style.font_size,\r\n                'font-style': fieldData.field_style.font_style,\r\n                'color': fieldData.field_style.font_color,\r\n                'border-color': fieldData.field_style.border_color,\r\n                'height': fieldData.field_style.field_height,\r\n                'width': fieldData.field_style.field_width,\r\n                'background-color': fieldData.field_style.background_color\r\n            }\" type=\"button\" (click)=\"toggleClickListener($event)\" [disabled]=\"!isEditable\"\r\n\t\t\t[innerHtml]=\"inputValue?label1:label2\"></button>\r\n\t\t<span *ngIf=\"this.isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\">i</button>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: CeeApiService }, { type: i11.Router }, { type: SharedEventsServiceService }, { type: WfeStepLoaderService }, { type: AppDataService }, { type: ApiDataService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], sectionData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeToggleButtonComponent, { className: "CeeToggleButtonComponent", filePath: "lib\\field-components\\cee-toggle-button\\cee-toggle-button.component.ts", lineNumber: 32 }); })();

export { CeeToggleButtonComponent };
//# sourceMappingURL=ng-cee-core-cee-toggle-button.component-EBCs3K3e.mjs.map
