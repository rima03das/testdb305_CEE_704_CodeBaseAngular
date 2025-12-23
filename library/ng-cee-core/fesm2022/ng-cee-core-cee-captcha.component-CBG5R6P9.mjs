import * as i0 from '@angular/core';
import { Component, ViewChild, Input } from '@angular/core';
import { j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, a as CommonUtil, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
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
import '@angular/platform-browser';
import 'moment-timezone';
import 'crypto-js';
import '@angular/material/tooltip';
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

const _c0 = ["recaptcha"];
function CeeCaptchaComponent_div_0_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeCaptchaComponent_div_0_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCaptchaComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCaptchaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, CeeCaptchaComponent_div_0_label_3_Template, 2, 1, "label", 5)(4, CeeCaptchaComponent_div_0_label_4_Template, 1, 1, "label", 6)(5, CeeCaptchaComponent_div_0_span_5_Template, 2, 0, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", null, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
class CeeCaptchaComponent extends BaseView {
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
    // @ViewChild('txtVal', {static: false}) txtVal: ElementRef
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    recaptchaElement;
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
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
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        if (this.additionalParameter['provider'] && this.additionalParameter['provider'] == "Google") {
            this.addRecaptchaScript();
        }
    }
    renderReCaptch() {
        let google_sitekey = localStorage.getItem('google_sitekey');
        window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
            'sitekey': google_sitekey,
            'callback': (response) => {
                // console.log(response);
                // this.inputValue = response;
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], response));
                this.onComponentEvent('OnClick');
                this.onDirty();
            }
        });
    }
    addRecaptchaScript() {
        window['grecaptchaCallback'] = () => {
            this.renderReCaptch();
        };
        (function (d, s, id, obj) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'recaptcha-jssdk', this));
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        // Clear utility object references
        this.wfeEncryption = null;
        this.sessionKeyUtil = null;
        this.commonUtil = null;
        // Clear component-specific properties
        this.inputValue = '';
        this.buttonLabel = '';
        this.validationRegex = '';
        // Clear ViewChild reference
        this.recaptchaElement = null;
        // Clear input properties
        this.primaryKeyIndex = null;
        this.mandatoryCondition = null;
        this.editableCondition = null;
        this.visibleCondition = null;
        this.onViewUnload();
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        // console.log(apiData);
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                this.inputValue = apiData;
                this.updateFieldData(this.inputValue);
            }
        }
    }
    setFieldValueOnSetValuesEvent() {
    }
    setFieldStateOnStateChangeEvent() {
    }
    onViewDataInit() {
    }
    concatData = (res) => {
    };
    handleCustomFunction(get_data) {
    }
    onEmptySession(get_data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    static ɵfac = function CeeCaptchaComponent_Factory(t) { return new (t || CeeCaptchaComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCaptchaComponent, selectors: [["app-cee-captcha"]], viewQuery: function CeeCaptchaComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recaptchaElement = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["recaptcha", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"]], template: function CeeCaptchaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCaptchaComponent_div_0_Template, 8, 3, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [CommonModule, i13.NgIf] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCaptchaComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-captcha', standalone: true, imports: [CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t</div>\r\n\t\t<div #recaptcha></div>\r\n\t\t<!-- <re-captcha [(ngModel)]=\"inputValue\" name=\"captcha\" required></re-captcha> -->\r\n\t</div>\r\n</div>\r\n" }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }], { stepId: [{
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
        }], recaptchaElement: [{
            type: ViewChild,
            args: ['recaptcha']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCaptchaComponent, { className: "CeeCaptchaComponent", filePath: "lib\\field-components\\cee-captcha\\cee-captcha.component.ts", lineNumber: 27 }); })();

export { CeeCaptchaComponent };
//# sourceMappingURL=ng-cee-core-cee-captcha.component-CBG5R6P9.mjs.map
