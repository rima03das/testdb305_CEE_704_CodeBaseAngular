import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import { a as CommonUtil, c as SharedEventsServiceService, g as WfeStepLoaderService, V as ViewRendererComponent, W as WFEEventListHandler, f as ApiDataService, e as AppDataService, d as CEEInternalEmitterService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import * as i8 from '@angular/material/snack-bar';
import * as i7 from '@angular/material/dialog';
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

function BreadcrumbCellRendererComponent_section_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const pos_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("breadcrumb-state-", ctx_r1.selectedValue.label, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r3)("position", pos_r4)("templateId", ctx_r1.templateId);
} }
function BreadcrumbCellRendererComponent_section_0_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background", ctx_r1.selectedValue.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedValue.label, " ");
} }
function BreadcrumbCellRendererComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵlistener("click", function BreadcrumbCellRendererComponent_section_0_Template_section_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBlockClick()); });
    i0.ɵɵtemplate(1, BreadcrumbCellRendererComponent_section_0_ng_container_1_Template, 2, 7, "ng-container", 2)(2, BreadcrumbCellRendererComponent_section_0_p_2_Template, 2, 3, "p", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate3("cee-breadcrumb-cell template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedValue);
} }
class BreadcrumbCellRendererComponent {
    sharedEventsServiceService;
    http;
    router;
    wfeStepLoaderService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    blockId;
    blockPosition;
    templateId;
    mappingValues;
    blockRenderedData;
    additionalParameters = {};
    selectedValue = {
        label: 'default',
        color: '#fff'
    };
    variableObj = {};
    commonUtil;
    constructor(sharedEventsServiceService, http, router, wfeStepLoaderService) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.http = http;
        this.router = router;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.commonUtil = new CommonUtil();
    }
    ngOnInit() {
        this.wfeStepLoaderService.loadBlockByName(this.blockId).toPromise().then(data => {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            if (this.blockRenderedData.additional_parameters.length > 0) {
                for (const paramter of this.blockRenderedData.additional_parameters) {
                    this.additionalParameters[paramter.parameter_type] = paramter.value;
                }
                if (this.additionalParameters['AssociatedStep'] == this.stepId) {
                    this.selectedValue = this.mappingValues['CURRENT_STEP'];
                }
            }
            //console.log(this.additionalParameters['AssociatedStep'], this.stepId);
        });
        this.variableObj['emitApiSuccessResponse_' + this.blockId] =
            this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                if (this.additionalParameters['AssociatedStep'] != this.stepId) {
                    if (res.hasOwnProperty(this.additionalParameters['AssociatedAPIKey'])) {
                        if (res[this.additionalParameters['AssociatedAPIKey']]) {
                            this.selectedValue = this.mappingValues[res[this.additionalParameters['AssociatedAPIKey']]];
                        }
                        else {
                            this.selectedValue = this.mappingValues['NULL_VALUE'];
                        }
                    }
                }
            }, err => {
                console.error(err);
            });
    }
    onBlockClick() {
        const navigateStepName = localStorage.getItem('navigateStepName') === 'true' ? true : false;
        // console.log('Breadcrumb Click', localStorage.getItem('AkitaStores'));
        if (this.additionalParameters['AssociatedStep']) {
            if (navigateStepName) {
                const routeMap = JSON.parse(localStorage.getItem('CEE_ROUTE_MAP'));
                this.router.navigateByUrl(routeMap[this.additionalParameters['AssociatedStep']]);
            }
            else {
                this.router.navigateByUrl('wfe/step/' + this.additionalParameters['AssociatedStep']);
            }
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    static ɵfac = function BreadcrumbCellRendererComponent_Factory(t) { return new (t || BreadcrumbCellRendererComponent)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(WfeStepLoaderService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbCellRendererComponent, selectors: [["app-breadcrumb-cell-renderer"]], inputs: { stepId: "stepId", blockId: "blockId", blockPosition: "blockPosition", templateId: "templateId", mappingValues: "mappingValues" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[3, "id", "class", "click", 4, "ngIf"], [3, "click", "id"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-label", 3, "background", 4, "ngIf"], [3, "stepId", "field", "position", "templateId"], [1, "breadcrumb-label"]], template: function BreadcrumbCellRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BreadcrumbCellRendererComponent_section_0_Template, 3, 10, "section", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.blockRenderedData);
        } }, dependencies: () => [CommonModule, i13.NgForOf, i13.NgIf, ViewRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbCellRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb-cell-renderer', standalone: true, imports: [CommonModule, forwardRef(() => ViewRendererComponent)], template: "<section id=\"{{ blockRenderedData.block_id }}\"\r\n\t[attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n\t[attr.role]=\"additionalParameters['Aria-Role']\"\r\n\tclass=\"cee-breadcrumb-cell template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}}\"\r\n\t*ngIf=\"blockRenderedData\" (click)=\"onBlockClick()\">\r\n\t<ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos\">\r\n\t\t<app-view-renderer [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n\t\t\tclass=\"breadcrumb-state-{{selectedValue.label}}\">\r\n\t\t</app-view-renderer>\r\n\t</ng-container>\r\n\t<p *ngIf=\"selectedValue\" [style.background]=\"selectedValue.color\" class=\"breadcrumb-label\">{{selectedValue.label}}\r\n\t</p>\r\n</section>\r\n" }]
    }], () => [{ type: SharedEventsServiceService }, { type: i9.HttpClient }, { type: i11.Router }, { type: WfeStepLoaderService }], { stepId: [{
            type: Input
        }], blockId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mappingValues: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbCellRendererComponent, { className: "BreadcrumbCellRendererComponent", filePath: "lib\\components\\breadcrumb-cell-renderer\\breadcrumb-cell-renderer.component.ts", lineNumber: 18 }); })();

function BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-breadcrumb-cell-renderer", 1);
    i0.ɵɵlistener("click", function BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template_app_breadcrumb_cell_renderer_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.triggerComponentEvent()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", "breadcrumb-cell")("blockId", block_r3)("blockPosition", i_r4)("mappingValues", ctx_r1.progressBarMappingData);
} }
class BreadcrumbRendererComponent {
    http;
    apiDataService;
    appDataService;
    stepLoaderService;
    router;
    sharedEventService;
    internalCEEEmitter;
    snackBar;
    dialog;
    ceeApiService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    fieldData;
    stepId;
    childBlockIds;
    progressBarMappingData = {};
    eventListHandlerUtil;
    constructor(http, apiDataService, appDataService, stepLoaderService, router, sharedEventService, internalCEEEmitter, snackBar, dialog, ceeApiService) {
        this.http = http;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.stepLoaderService = stepLoaderService;
        this.router = router;
        this.sharedEventService = sharedEventService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.ceeApiService = ceeApiService;
        this.eventListHandlerUtil = new WFEEventListHandler(ceeApiService, router, sharedEventService, internalCEEEmitter, stepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
    }
    ngOnInit() {
        if (this.fieldData.possible_values) {
            for (const value of this.fieldData.possible_values) {
                this.progressBarMappingData[value.split('|')[0].trim()] = {
                    apiValue: value.split('|')[0].trim(),
                    label: value.split('|')[1].trim(),
                    color: value.split('|')[2].trim()
                };
            }
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                switch (parameter.parameter_type) {
                    case 'default_value':
                        this.childBlockIds = parameter.value.split('|');
                        break;
                }
            }
        }
    }
    triggerComponentEvent() {
        for (const event of this.fieldData.event_list) {
            if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                this.eventListHandlerUtil.switchEventDisplayType(event, this.fieldData.event_list);
            }
        }
    }
    static ɵfac = function BreadcrumbRendererComponent_Factory(t) { return new (t || BreadcrumbRendererComponent)(i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbRendererComponent, selectors: [["app-breadcrumb-renderer"]], inputs: { fieldData: "fieldData", stepId: "stepId" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[3, "stepId", "templateId", "blockId", "blockPosition", "mappingValues", "click", 4, "ngFor", "ngForOf"], [3, "click", "stepId", "templateId", "blockId", "blockPosition", "mappingValues"]], template: function BreadcrumbRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template, 1, 5, "app-breadcrumb-cell-renderer", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.childBlockIds);
        } }, dependencies: [CommonModule, i13.NgForOf, BreadcrumbCellRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb-renderer', standalone: true, imports: [CommonModule, BreadcrumbCellRendererComponent], template: "<app-breadcrumb-cell-renderer [stepId]=\"stepId\" [templateId]=\"'breadcrumb-cell'\" [blockId]=\"block\"\r\n\t*ngFor=\"let block of childBlockIds; index as i\" [blockPosition]=\"i\" [mappingValues]=\"progressBarMappingData\"\r\n\t(click)=\"triggerComponentEvent()\">\r\n</app-breadcrumb-cell-renderer>" }]
    }], () => [{ type: i9.HttpClient }, { type: ApiDataService }, { type: AppDataService }, { type: WfeStepLoaderService }, { type: i11.Router }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: i8.MatSnackBar }, { type: i7.MatDialog }, { type: CeeApiService }], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbRendererComponent, { className: "BreadcrumbRendererComponent", filePath: "lib\\components\\breadcrumb-renderer\\breadcrumb-renderer.component.ts", lineNumber: 24 }); })();

export { BreadcrumbRendererComponent };
//# sourceMappingURL=ng-cee-core-breadcrumb-renderer.component-CXwxUzPM.mjs.map
