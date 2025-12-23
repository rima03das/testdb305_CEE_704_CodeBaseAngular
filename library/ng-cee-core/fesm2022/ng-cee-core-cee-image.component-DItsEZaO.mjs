import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf, NgFor } from '@angular/common';
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

function CeeImageComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-form-label_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeImageComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 11);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-form-label_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeImageComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeImageComponent_div_0_ng_container_3_label_1_Template, 2, 4, "label", 9)(2, CeeImageComponent_div_0_ng_container_3_label_2_Template, 1, 4, "label", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeImageComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeImageComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeImageComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "figure");
    i0.ɵɵelement(2, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("src", image_r2, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r0.fieldData.field_label);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
} }
function CeeImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeImageComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeImageComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeImageComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtemplate(7, CeeImageComponent_div_0_ng_container_7_Template, 3, 6, "ng-container", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.images);
} }
class CeeImageComponent extends BaseView {
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
    primaryKeyIndex;
    keepState = false;
    rowData;
    images = [];
    flatUnflat;
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
        this.flatUnflat = new FlatUnflat(appDataService);
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
    concatData() { }
    onViewDataInit() {
        if (this.fieldData.field_style.field_assets !== undefined) {
            if (this.fieldData.field_style.field_assets.length > 0) {
                for (const fieldAsset of this.fieldData.field_style.field_assets) {
                    this.images.push(fieldAsset.path);
                }
            }
        }
        if (this.rowData) {
            this.images = [];
            if (this.rowData.hasOwnProperty('value')) {
                if (this.fieldData.possible_values.length > 0) {
                    for (const val of this.fieldData.possible_values) {
                        if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                            this.images.push(this.commonUtil.getPossibleValue(val));
                        }
                    }
                }
                else {
                    this.images.push(this.rowData.value);
                }
            }
        }
    }
    onSessionDataUpdated(apiKey, value) {
        // throw new Error('Method not implemented.');
    }
    onAPICallback(data) {
        data = this.flatUnflat.createNestedObject(data);
        if (localStorage.getItem('singleApiKey') === 'true') {
            this.images = [...this.images, ...this.returnImageData(this.fieldData.api_key, data)];
        }
        else {
            if (this.fieldData.response_api_key.includes('|')) {
                let multipleImages = [];
                for (const singleData of this.fieldData.response_api_key.split('||').map(str => str.trim())) {
                    multipleImages = [...multipleImages, ...this.returnImageData(singleData, data)];
                }
                this.images = [...this.images, ...multipleImages];
            }
            else {
                this.images = [...this.images, ...this.returnImageData(this.fieldData.response_api_key, data)];
            }
        }
    }
    onSetSessionData(apiKey, value) {
        // throw new Error('Method not implemented.');
    }
    returnImageData(apiKey, data) {
        const imageData = [];
        if (apiKey !== '') {
            if (apiKey.indexOf('[*]') >= 0) {
                const key = apiKey.split('[*]');
                const possibleIds = (this.checkForArray(this.checkForObject(data, key[0]), key[1]));
                for (const ids of possibleIds) {
                    if (this.fieldData.possible_values.length > 0) {
                        for (const possibleValues of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(possibleValues) == ids) {
                                imageData.push(this.commonUtil.getPossibleValue(possibleValues));
                            }
                        }
                    }
                    else {
                        imageData.push(ids);
                    }
                }
            }
            else if (data[apiKey]) {
                if (this.fieldData.possible_values.length > 0) {
                    for (const val of this.fieldData.possible_values) {
                        if (this.commonUtil.getPossibleId(val) == data[apiKey]) {
                            imageData.push(this.commonUtil.getPossibleValue(val));
                        }
                    }
                }
                else {
                    imageData.push(data[apiKey]);
                }
            }
        }
        return imageData;
    }
    onEmptySession(getData) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(getData) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    static ɵfac = function CeeImageComponent_Factory(t) { return new (t || CeeImageComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeImageComponent, selectors: [["app-cee-image"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [3, "src", "alt"]], template: function CeeImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeImageComponent_div_0_Template, 8, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgIf, NgFor, TooltipModule, TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeImageComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-image', standalone: true, imports: [MatTooltipModule, NgIf, NgFor, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label_{{fieldData.unique_id}}\"\r\n\t\t\t\t\t*ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label_{{fieldData.unique_id}}\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t</div>\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<ng-container *ngFor=\"let image of images\">\r\n\t\t\t\t<figure>\r\n\t\t\t\t\t<img class=\"img-fluid {{fieldData.unique_id}}\" src=\"{{image}}\" alt=\"{{fieldData.field_label}}\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t</figure>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeImageComponent, { className: "CeeImageComponent", filePath: "lib\\field-components\\cee-image\\cee-image.component.ts", lineNumber: 25 }); })();

export { CeeImageComponent };
//# sourceMappingURL=ng-cee-core-cee-image.component-DItsEZaO.mjs.map
