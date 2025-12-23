import * as i0 from '@angular/core';
import { Component, Input, ViewChild } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, h as CeeApiService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i15 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
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

const _c0 = ["ButtonClickMenuTrigger"];
const _c1 = a0 => ({ "color": a0 });
function CeeMenuComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeMenuComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("role", "button")("id", "tooltip_" + ctx_r0.fieldData.unique_id)("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeMenuComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16, 2);
    i0.ɵɵlistener("click", function CeeMenuComponent_div_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openMenu()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("menu menu_", ctx_r0.fieldData.unique_id, " ", ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("matMenuTriggerFor", menu_r3);
    i0.ɵɵattribute("role", "button")("id", "button_" + ctx_r0.fieldData.unique_id)("aria-label", "Menu: " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fieldData.field_label, "");
} }
function CeeMenuComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 17);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matMenuTriggerFor", menu_r3)("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("role", "button");
} }
function CeeMenuComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function CeeMenuComponent_div_0_div_9_Template_div_click_0_listener() { const opt_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getUpdatedValue(ctx_r0.commonUtil.getID(opt_r5))); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("menu_item menu_item_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵproperty("innerHTML", ctx_r0.getInnerValue(ctx_r0.commonUtil.getValue(opt_r5)), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", "Menu Item: " + ctx_r0.commonUtil.getValue(opt_r5));
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r0.returnMessageData(message_r6.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r6.code).message_text, " ");
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function CeeMenuComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeMenuComponent_div_0_ng_template_11_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeMenuComponent_div_0_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_template_11_div_0_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeMenuComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeMenuComponent_div_0_ng_template_11_div_0_Template, 2, 1, "div", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function CeeMenuComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20)(2, "div")(3, "p", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeeMenuComponent_div_0_span_3_Template, 2, 0, "span", 7)(4, CeeMenuComponent_div_0_button_4_Template, 2, 5, "button", 8)(5, CeeMenuComponent_div_0_button_5_Template, 3, 10, "button", 9)(6, CeeMenuComponent_div_0_button_6_Template, 1, 4, "button", 10);
    i0.ɵɵelementStart(7, "mat-menu", null, 0);
    i0.ɵɵtemplate(9, CeeMenuComponent_div_0_div_9_Template, 1, 5, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CeeMenuComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 12)(11, CeeMenuComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(13, CeeMenuComponent_div_0_ng_container_13_Template, 5, 4, "ng-container", 13);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 9, ctx_r0.showComparisonError));
} }
class CeeMenuComponent extends BaseView {
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
    ButtonClickMenuTrigger;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    dependentSubscriber$;
    pickerValues = [];
    labelEmitter;
    fieldLabels = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http) {
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
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe();
    }
    concatData() { }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
    }
    getInnerValue(val) {
        val = val.replace(/\"/g, "'");
        return val;
    }
    onViewDataInit() {
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData);
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
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
            });
        }
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
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
        this.pickerValues = this.fieldData.possible_values;
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
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                            break;
                        }
                        else {
                            this.fieldValue = '';
                        }
                    }
                }
                else {
                    this.fieldValue = '';
                }
                this.updateFieldData(this.fieldValue);
                return;
            }
        });
    }
    handleCustomFunction(get_data) {
        //console.log('get_data', typeof get_data === 'object');
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldValue = get_data[unique_id_value];
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        // this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue(value) {
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
    openMenu() {
        if (this.pickerValues.length > 0) {
            this.ButtonClickMenuTrigger.openMenu();
        }
        else {
            this.ButtonClickMenuTrigger.closeMenu();
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
    static ɵfac = function CeeMenuComponent_Factory(t) { return new (t || CeeMenuComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMenuComponent, selectors: [["app-cee-menu"]], viewQuery: function CeeMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ButtonClickMenuTrigger = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["menu", "matMenu"], ["singleErrorMessage", ""], ["ButtonClickMenuTrigger", "matMenuTrigger"], ["class", "", 3, "id", 4, "ngIf"], [1, "", 3, "id"], [1, "form-group"], [1, "form-field"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "disabled", "tooltip", 4, "ngIf"], ["mat-button", "", 3, "disabled", "class", "matMenuTriggerFor", "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", "innerHTML", "disabled", 4, "ngIf"], ["mat-menu-item", "", 3, "class", "innerHTML", "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "disabled", "tooltip"], ["mat-button", "", 3, "click", "disabled", "matMenuTriggerFor"], ["mat-button", "", 3, "matMenuTriggerFor", "innerHTML", "disabled"], ["mat-menu-item", "", 3, "click", "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMenuComponent_div_0_Template, 15, 11, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatMenuModule, i15.MatMenu, i15.MatMenuItem, i15.MatMenuTrigger, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMenuComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-menu', standalone: true, imports: [MatTooltipModule, MatMenuModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"\" id=\"{{ fieldData.unique_id }}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button [disabled]=\"!isEditable\" [attr.role]=\"'button'\" [attr.id]=\"'tooltip_'+fieldData.unique_id\"\r\n\t\t\t\t*ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t<button [disabled]=\"!isEditable\" [attr.role]=\"'button'\" [attr.id]=\"'button_'+fieldData.unique_id\" mat-button\r\n\t\t\t\tclass=\"menu menu_{{fieldData.unique_id}} {{ isMandatory && showErrorOnNext ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t*ngIf=\"!isHTML(fieldData.field_label)\" [attr.aria-label]=\"'Menu: ' + fieldData.field_label \"\r\n\t\t\t\t#ButtonClickMenuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\" (click)=\"openMenu()\">\r\n\t\t\t\t{{fieldData.field_label}}</button>\r\n\t\t\t<button mat-button [matMenuTriggerFor]=\"menu\" [attr.role]=\"'button'\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"fieldData.field_label\" [disabled]=\"!isEditable\">\r\n\t\t\t</button>\r\n\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t<div class=\"menu_item menu_item_{{fieldData.unique_id}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"'Menu Item: ' + commonUtil.getValue(opt)\" mat-menu-item *ngFor=\"let opt of pickerValues\"\r\n\t\t\t\t\t(click)=\"getUpdatedValue(commonUtil.getID(opt))\" [innerHTML]=\"getInnerValue(commonUtil.getValue(opt))\">\r\n\t\t\t\t\t</div>\r\n\t\t\t</mat-menu>\r\n\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t{{errorMessageData.message_text}}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n" }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: CeeApiService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i11.Router }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { ButtonClickMenuTrigger: [{
            type: ViewChild,
            args: ['ButtonClickMenuTrigger']
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
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMenuComponent, { className: "CeeMenuComponent", filePath: "lib\\field-components\\cee-menu\\cee-menu.component.ts", lineNumber: 28 }); })();

export { CeeMenuComponent };
//# sourceMappingURL=ng-cee-core-cee-menu.component-DrjJlxBz.mjs.map
