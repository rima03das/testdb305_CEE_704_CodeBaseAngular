import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, HostListener, Input, ViewChild } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, h as CeeApiService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i12 from '@angular/cdk/menu';
import { CdkMenuModule, CdkContextMenuTrigger } from '@angular/cdk/menu';
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
import '@angular-material-components/datetime-picker';
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

function CeeMenucontextComponent_div_0_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function CeeMenucontextComponent_div_0_ng_template_4_button_1_Template_button_click_0_listener() { const opt_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.getUpdatedValue(ctx_r2.commonUtil.getID(opt_r2))); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("menu_item_", ctx_r2.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", "Menu Item: " + ctx_r2.commonUtil.getValue(opt_r2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.commonUtil.getValue(opt_r2));
} }
function CeeMenucontextComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, CeeMenucontextComponent_div_0_ng_template_4_button_1_Template, 2, 5, "button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r2.getStyle());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.pickerValues);
} }
function CeeMenucontextComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "div", 5);
    i0.ɵɵtemplate(4, CeeMenucontextComponent_div_0_ng_template_4_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const inner_r4 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r2.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkContextMenuTriggerFor", inner_r4);
} }
class CeeMenucontextComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    router;
    dialog;
    snackBar;
    http;
    cdr;
    contextMenuTrigger;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    pickerValues = [];
    wfeEventListHandler;
    positonData = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http, cdr) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    ngAfterViewInit() {
        this.cdr.detach();
    }
    onScroll() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.onViewUnload();
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id].unsubscribe();
    }
    concatData() { }
    ngOnDestroy() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.onViewUnload();
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id].unsubscribe();
    }
    onViewDataInit() {
        this.pickerValues = this.fieldData.possible_values;
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.pickerValues = this.rowData.value;
                }
                else {
                    this.fieldValue = this.rowData.value;
                }
            }
        }
        const _this = this;
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id] =
            this.sharedEventsService.contextMenuEmitter.subscribe(res => {
                if (res && res[0] && _this.fieldData.unique_id === res[0]) {
                    _this.contextMenuChange(res);
                }
            });
    }
    onAPICallback(data) {
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            if (Array.isArray(apiValue) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiValue;
                this.pickerValues = this.fieldData.possible_values;
            }
            else {
                this.fieldValue = apiValue;
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
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.pickerValues = this.fieldData.possible_values;
                        }
                        else {
                            console.error('Something Went Wrong in Menu !!!');
                        }
                    }
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    onEmptySession(get_data) {
        // let data = [];
        // let unique_id_value = [];
        // if (get_data.unique_ids.length > 0) {
        //     data = get_data.unique_ids;
        //     unique_id_value = [this.appData.id];
        // } else {
        //     data = get_data.apiKeys;
        //     if (this.isSingleApiKey) {
        //         unique_id_value = [this.fieldData.api_key];
        //     } else {
        //         unique_id_value = [...unique_id_value,
        //         ...this.apiKeyUtil.getMultipleApiKeys(
        //             this.apiKeyUtil.getConcatenatedApiKeys(
        //                 this.fieldData.response_api_key))];
        //         unique_id_value = [
        //             ...unique_id_value,
        //             ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)];
        //     }
        // }
        // data.forEach(elm => {
        //     if (unique_id_value.includes(elm)) {
        //         // default value
        //         if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //             for (const paramter of this.fieldData.additional_parameters) {
        //                 if (paramter.parameter_type === 'default_value') {
        //                     this.fieldValue = this.commonUtil.getID(paramter.value);
        //                     break;
        //                 } else {
        //                     this.fieldValue = '';
        //                 }
        //             }
        //         } else {
        //             this.fieldValue = '';
        //         }
        //         this.updateFieldData(this.fieldValue);
        //         return;
        //     }
        // });
    }
    handleCustomFunction(get_data) {
        //console.log('get_data', typeof get_data === 'object');
        // let data = [];
        // let unique_id_value = '';
        // if (typeof get_data === 'object') {
        //     Object.keys(get_data).forEach((key, value) => {
        //         data.push(key);
        //     });
        //     unique_id_value = this.fieldData.unique_id;
        // }
        // if (data.includes(unique_id_value)) {
        //     this.fieldValue = get_data[unique_id_value];
        //     this.updateFieldData(this.fieldValue);
        // }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        // this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue(value) {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.updateFieldData(this.commonUtil.getID(value));
        if (this.rowData) {
            this.appDataService.setAppData(Object.assign({}, this.appData, {
                value: this.commonUtil.getID(value)
            }));
        }
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        this.onComponentEvent('onClick', primaryData);
        this.onDirty();
    }
    contextMenuChange(data) {
        this.positonData = data;
        if (data[0].includes(this.fieldData.unique_id)) {
            if (data[1]) {
                this.openContextMenu({
                    x: data[1],
                    y: data[2]
                });
            }
            else {
                this.contextMenuTrigger && this.contextMenuTrigger.close();
            }
        }
    }
    getStyle() {
        if (this.positonData.length > 0) {
            return { 'position': 'absolute', 'top': this.positonData[2], 'left': this.positonData[1] };
        }
        else {
            return {};
        }
    }
    openContextMenu(event) {
        if (this.contextMenuTrigger) {
            if (this.wfeEventListHandler.detectOperatingSystem() == "Mac OS") {
                setTimeout(() => {
                    const eventx = new MouseEvent('mousemove', {
                        clientX: 30,
                        clientY: 0,
                        bubbles: true
                    });
                    this.contextMenuTrigger.open(eventx);
                }, 250);
            }
            else {
                this.contextMenuTrigger.open(event);
            }
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'pickerValues'
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
    static ɵfac = function CeeMenucontextComponent_Factory(t) { return new (t || CeeMenucontextComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMenucontextComponent, selectors: [["app-cee-menucontext"]], viewQuery: function CeeMenucontextComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkContextMenuTrigger, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contextMenuTrigger = _t.first);
        } }, hostBindings: function CeeMenucontextComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeMenucontextComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["inner", ""], ["class", "", 3, "id", 4, "ngIf"], [1, "", 3, "id"], [1, "form-group"], [1, "form-field"], [1, "example-context-area", 3, "cdkContextMenuTriggerFor"], ["cdkMenu", "", 1, "example-menu", 3, "ngStyle"], ["class", "example-menu-item", "cdkMenuItem", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["cdkMenuItem", "", 1, "example-menu-item", 3, "click"]], template: function CeeMenucontextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMenucontextComponent_div_0_Template, 6, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, CdkMenuModule, i12.CdkMenu, i12.CdkMenuItem, i12.CdkContextMenuTrigger, CommonModule, i13.NgForOf, i13.NgIf], styles: [".example-context-area[_ngcontent-%COMP%]{display:none}.example-menu[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;min-width:180px;max-width:280px;background-color:#fff;padding:6px 0}.example-menu-item[_ngcontent-%COMP%]{background-color:transparent;cursor:pointer;border:none;-webkit-user-select:none;user-select:none;min-width:64px;line-height:36px;padding:0 16px;display:flex;align-items:center;flex-direction:row;flex:1}.example-menu-item[_ngcontent-%COMP%]:hover{background-color:#d0d0d0}.example-menu-item[_ngcontent-%COMP%]:active{background-color:#aaa}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMenucontextComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-menucontext', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgStyle, CdkMenuModule, CommonModule], template: "<div class=\"\" id=\"{{ fieldData.unique_id }}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-field\">\r\n\t\t\t\t<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\"></div>\r\n\t\t\t\t<ng-template #inner>\r\n\t\t\t\t<div class=\"example-menu\" [ngStyle]=\"getStyle()\"  cdkMenu>\r\n\t\t\t\t  <button class=\"example-menu-item\" cdkMenuItem class=\"menu_item_{{fieldData.unique_id}}\"  [attr.aria-label]=\"'Menu Item: ' + commonUtil.getValue(opt)\" *ngFor=\"let opt of pickerValues\" (click)=\"getUpdatedValue(commonUtil.getID(opt))\">{{commonUtil.getValue(opt)}}</button>\r\n\t\t\t\t</div>\r\n\t\t\t  </ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: [".example-context-area{display:none}.example-menu{display:inline-flex;flex-direction:column;min-width:180px;max-width:280px;background-color:#fff;padding:6px 0}.example-menu-item{background-color:transparent;cursor:pointer;border:none;-webkit-user-select:none;user-select:none;min-width:64px;line-height:36px;padding:0 16px;display:flex;align-items:center;flex-direction:row;flex:1}.example-menu-item:hover{background-color:#d0d0d0}.example-menu-item:active{background-color:#aaa}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: CeeApiService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i11.Router }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }], { contextMenuTrigger: [{
            type: ViewChild,
            args: [CdkContextMenuTrigger]
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMenucontextComponent, { className: "CeeMenucontextComponent", filePath: "lib\\field-components\\cee-menucontext\\cee-menucontext.component.ts", lineNumber: 27 }); })();

export { CeeMenucontextComponent };
//# sourceMappingURL=ng-cee-core-cee-menucontext.component-DeirpWHX.mjs.map
