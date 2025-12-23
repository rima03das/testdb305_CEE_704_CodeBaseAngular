import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
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

const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
function CeeLinkComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "a", 5);
    i0.ɵɵlistener("click", function CeeLinkComponent_div_0_div_2_Template_a_click_1_listener() { const links_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.switchEvent(links_r4)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const links_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r1.fieldData.html_id, "", ctx_r1.fieldData.link_config.length > 1 ? "-" + pos_r5 : "", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(9, _c0, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : links_r4.link_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(links_r4.link_name);
} }
function CeeLinkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("contextmenu", function CeeLinkComponent_div_0_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onContextMenu($event)); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, CeeLinkComponent_div_0_div_2_Template, 3, 18, "div", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData.link_config);
} }
class CeeLinkComponent extends BaseView {
    router;
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
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    Target;
    constructor(router, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.router = router;
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
    }
    ngOnInit() {
        if (!this.fieldData.link_config) {
            this.fieldData.link_config = [{}];
        }
        else if (!Array.isArray(this.fieldData.link_config) && typeof (this.fieldData.link_config) === 'object') {
            this.fieldData.link_config = [this.fieldData.link_config];
        }
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.rowData && this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.value);
            this.fieldData.link_config.forEach(config => {
                this.setApiData(config, this.rowData.value);
            });
        }
        this.fieldData.link_config.forEach(config => {
            if (!config.link_name && !this.fieldData.field_label.includes('((dynamic))')) {
                config.link_name = this.fieldData.field_label;
            }
        });
        if (this.additionalParameter['Target']) {
            switch (this.additionalParameter['Target']) {
                case 'Blank':
                    this.Target = '_blank';
                    break;
                case 'Top':
                    this.Target = '_top';
                    break;
                default:
                    break;
            }
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        this.fieldData.link_config.forEach(config => {
            this.setApiData(config, data);
            if (!config.link_name && !this.fieldData.field_label.includes('((dynamic))')) {
                config.link_name = this.fieldData.field_label;
            }
        });
    }
    setApiData(config, data) {
        if (config.link_name_api_key) {
            const link_name = this.setApiCallBackDataUtil.setApiCallBackData(config.link_name_api_key, data);
            if (link_name) {
                config.link_name = link_name;
            }
        }
        if (config.link_api_key) {
            const link = this.setApiCallBackDataUtil.setApiCallBackData(config.link_api_key, data);
            if (link) {
                config.link = link;
            }
        }
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    /*
     * special event handled for link types
    */
    switchEvent(event) {
        const ModalOnPageLeave = this.additionalParameter['ModalOnPageLeave'] ? this.additionalParameter['ModalOnPageLeave'] : null;
        switch ((event.link_type).toLowerCase()) {
            case 'step':
                this.wfeEventListHandler.redirectTo(event.link, ModalOnPageLeave, this.Target);
                break;
            case 'workflow':
                this.wfeEventListHandler.redirectTo(this.wfeStepLoaderService.getSequenceDefaultStepIdBySequenceId(event.link), ModalOnPageLeave, this.Target);
                break;
            /* istanbul ignore next */
            case 'external_url':
                this.sharedEventsService.closeDrawerOnClickExternalUrl.emit(true);
                setTimeout(() => {
                    this.wfeEventListHandler.redirectToHref(event.link, ModalOnPageLeave, this.Target);
                }, 10);
                break;
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    onContextMenu(event) {
        if (event.button === 2) {
            this.fieldData?.event_list?.forEach(x => {
                if (x.event_name === "OnRightClick" && x.isDefault === true) {
                    event.preventDefault();
                }
            });
            let objectLoc = {
                x: event.clientX + 'px',
                y: event.clientY + 'px'
            };
            this.onComponentEvent('OnRightClick', objectLoc);
        }
    }
    static ɵfac = function CeeLinkComponent_Factory(t) { return new (t || CeeLinkComponent)(i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeLinkComponent, selectors: [["app-cee-link"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "contextmenu", 4, "ngIf"], [1, "field-wrapper", 3, "contextmenu"], [1, "form-group"], ["class", "form-field", 4, "ngFor", "ngForOf"], [1, "form-field"], ["href", "javascript:void(0)", 3, "click", "id", "ngStyle"]], template: function CeeLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeLinkComponent_div_0_Template, 3, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, CommonModule, i13.NgForOf, i13.NgIf] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeLinkComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-link', standalone: true, imports: [NgStyle, CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\" (contextmenu)=\"onContextMenu($event)\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-field\" *ngFor=\"let links of fieldData.link_config; index as pos\">\r\n            <a id=\"{{fieldData.html_id}}{{fieldData.link_config.length>1?'-'+pos:''}}\" href=\"javascript:void(0)\"\r\n                (click)=\"switchEvent(links)\" [ngStyle]=\"{\r\n                'font-family': fieldData.field_style.font_name,\r\n                'font-size': fieldData.field_style.font_size,\r\n                'font-style': fieldData.field_style.font_style,\r\n                'font-color': fieldData.field_style.font_color,\r\n                'border-color': fieldData.field_style.border_color,\r\n                'height': fieldData.field_style.field_height,\r\n                'width': fieldData.field_style.field_width,\r\n                'background-color': fieldData.field_style.background_color\r\n              }\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : links.link_name\"\r\n                class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">{{links.link_name}}</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n" }]
    }], () => [{ type: i11.Router }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }], { stepId: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeLinkComponent, { className: "CeeLinkComponent", filePath: "lib\\field-components\\cee-link\\cee-link.component.ts", lineNumber: 25 }); })();

export { CeeLinkComponent };
//# sourceMappingURL=ng-cee-core-cee-link.component-LAUdVFMh.mjs.map
