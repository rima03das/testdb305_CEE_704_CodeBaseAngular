import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, E as EmptyUtil, F as FlatUnflat, c as SharedEventsServiceService, d as CEEInternalEmitterService, f as ApiDataService, e as AppDataService, g as WfeStepLoaderService, h as CeeApiService, V as ViewRendererComponent, s as DynamicRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTableDataSource } from '@angular/material/table';
import * as i13 from '@angular/common';
import { NgStyle, CommonModule } from '@angular/common';
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
function DynamicFormComponent_ng_container_0_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.sectionData.field_label);
} }
function DynamicFormComponent_ng_container_0_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.sectionData.field_label, i0.ɵɵsanitizeHtml);
} }
function DynamicFormComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_div_2_label_1_Template, 2, 1, "label", 5)(2, DynamicFormComponent_ng_container_0_div_2_label_2_Template, 1, 1, "label", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.sectionData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.sectionData.field_label));
} }
function DynamicFormComponent_ng_container_0_ng_container_3_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r2.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r2.message_text, " ");
} }
function DynamicFormComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_3_div_1_p_1_Template, 2, 4, "p", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function DynamicFormComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const field_r4 = ctx_r2.$implicit;
    const position_r5 = ctx_r2.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-field form-field-pos-", position_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r4)("position", position_r5)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-dynamic-renderer", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const field_r4 = ctx_r2.$implicit;
    const position_r5 = ctx_r2.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-field form-field-pos-", position_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r5, "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("fieldData", field_r4)("moduleName", field_r4.field_type);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_1_Template, 2, 9, "ng-container", 0)(2, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_2_Template, 3, 10, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.allowedFieldTypes.includes(field_r4.field_type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.allowedFieldTypes.includes(field_r4.field_type));
} }
function DynamicFormComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1(" ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldList);
} }
function DynamicFormComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.noDataFoundLabel);
} }
function DynamicFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, DynamicFormComponent_ng_container_0_div_2_Template, 3, 2, "div", 2)(3, DynamicFormComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3)(4, DynamicFormComponent_ng_container_0_ng_container_4_Template, 3, 4, "ng-container", 0)(5, DynamicFormComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.hideLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.noDataFound && !ctx_r0.showLoading && !ctx_r0.showSkeletonLoader);
} }
class DynamicFormComponent {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    router;
    sectionData;
    stepId;
    templateId;
    rowData;
    rootData;
    childList = {};
    type;
    displayValues = [];
    displayValuesLazy = [];
    lazyInterval = [];
    searchData = new MatTableDataSource([]);
    showLoading = true;
    noDataFound = true;
    showSkeletonLoader = true;
    listElements = [];
    showErrorOnNext = false;
    messages = [];
    contextArray = [];
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    fieldData;
    isMandatory = false;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    isVisible = true;
    fieldValue;
    checkEmpty;
    setDynamicLabelUtil;
    noDataFoundLabel = 'no record found.';
    flatAndNestUtil;
    html_id = '';
    fieldList = [];
    hideLabel = false;
    allowedFieldTypes = [
        "label",
        "Textfield",
        "Textarea",
        "Image",
        "Picker",
        "radio",
        "Date",
        "Timepicker",
        "Attachments"
    ];
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.checkEmpty = new EmptyUtil();
        this.flatAndNestUtil = new FlatUnflat(appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    async ngOnInit() {
        const { additional_parameters } = this.sectionData;
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
            }
        }
        if (!this.additionalParameters['default_value']) {
            console.error("Provide default_value in additional_parameters for Dynamic Form: " + this.sectionData.unique_id);
            return;
        }
        const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        this.hideLabel = this.rowData && this.rowData.fromField && this.rowData.fromField === 'Table' ? true : false;
        if (this.blockRenderedData && this.additionalParameters['OverrideFieldJSON']) {
            const OverrideFieldJSON = this.additionalParameters['OverrideFieldJSON'].split("||").map(ofj => {
                const ofjSplit = ofj.split("|");
                if (ofjSplit.length === 2) {
                    return {
                        propertyName: ofjSplit[0],
                        apiKey: ofjSplit[1]
                    };
                }
            }).filter(ofj => ofj);
            if (this.blockRenderedData.block_fields && this.blockRenderedData.block_fields.length > 0) {
                let blockRenderedDataTemp = JSON.parse(JSON.stringify(this.blockRenderedData));
                for (const ofjSplit of OverrideFieldJSON) {
                    if (blockRenderedDataTemp.block_fields[0].hasOwnProperty(ofjSplit['propertyName'])) {
                        blockRenderedDataTemp.block_fields[0][ofjSplit['propertyName']] = "#" + ofjSplit['apiKey'];
                    }
                }
                this.blockRenderedData = blockRenderedDataTemp;
            }
        }
        // console.log(this.rowData);
        if (this.rowData && this.rowData.value) {
            if (this.rowData.value.length > 0) {
                this.noDataFound = false;
                this.renderFieldJson(this.rowData.value);
            }
            else {
                this.noDataFound = true;
            }
        }
        else {
            this.variableObj['emitApiSuccessResponse_' +
                this.html_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    this.setListData(res);
                }, err => {
                    console.error(err);
                    this.showLoading = false;
                    this.noDataFound = true;
                });
        }
        this.onComponentEvent('OnLoad');
    }
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    setListData(res) {
        if ((this.isSingleAPIKey && this.sectionData.api_key !== '') ||
            (!this.isSingleAPIKey && this.sectionData.response_api_key !== '')) {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                if (result.length > 0) {
                    this.noDataFound = false;
                    this.renderFieldJson(result);
                }
                else {
                    this.noDataFound = true;
                }
            }
        }
    }
    propParseRecurs(prop) {
        const boolPropList = ["isDefault"];
        if (typeof prop === 'object' && Array.isArray(prop)) {
            for (const iterator of prop) {
                this.propParseRecurs(iterator);
            }
        }
        else if (typeof prop === 'object') {
            for (const key in prop) {
                const element = prop[key];
                if (boolPropList.includes(key)) {
                    if (element === '0' || element === 0 || element === false) {
                        prop[key] = false;
                    }
                    else {
                        prop[key] = true;
                    }
                }
                this.propParseRecurs(prop[key]);
            }
        }
    }
    /**
     * function that generate field JSON
     * @param result api response or the response of possible values
     */
    renderFieldJson(result) {
        const numericPropList = ["seq", "is_editable", "is_mandatory", "is_display", "field_character_limit"];
        this.fieldList = [];
        if (this.blockRenderedData.block_fields.length > 0) {
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                let fieldTempJson = JSON.parse(JSON.stringify(this.blockRenderedData.block_fields[0]));
                if (typeof fieldTempJson.unique_id === "string" && !fieldTempJson.unique_id.startsWith('#')) {
                    fieldTempJson.unique_id = this.html_id + '_' + fieldTempJson.unique_id + '_' + i;
                }
                for (const jKey in fieldTempJson) {
                    if (typeof fieldTempJson[jKey] === "string") {
                        if (this.hasDynamicKey(fieldTempJson[jKey], element)) {
                            fieldTempJson[jKey] = element[fieldTempJson[jKey].replace(/^#/g, '')];
                            if (numericPropList.includes(jKey)) {
                                fieldTempJson[jKey] = Number(fieldTempJson[jKey]);
                            }
                            this.propParseRecurs(fieldTempJson[jKey]);
                        }
                    }
                    else if (jKey === 'additional_parameters' && fieldTempJson[jKey].length >= 1) {
                        const addiParas = [];
                        for (const paraObj of fieldTempJson[jKey]) {
                            if (paraObj.value && this.hasDynamicKey(paraObj.value, element)) {
                                if (element[paraObj.value.replace(/^#/g, '')]) {
                                    paraObj.value = element[paraObj.value.replace(/^#/g, '')];
                                    addiParas.push(paraObj);
                                }
                            }
                            else {
                                addiParas.push(paraObj);
                            }
                        }
                        fieldTempJson[jKey] = addiParas;
                    }
                    else if (jKey === 'possible_values' && Array.isArray(fieldTempJson[jKey])
                        && fieldTempJson[jKey].length === 1
                        && typeof fieldTempJson[jKey][0] === "string" && /^#(.)+\[\*\](.)+\|\|#(.)+\[\*\](.)+/.test(fieldTempJson[jKey][0])) {
                        const newPossVal = [];
                        const possVal = fieldTempJson[jKey][0].split('||');
                        const data = this.flatAndNestUtil.flattenJSON(element);
                        for (let i = 0; i < Object.keys(data).length; i++) {
                            const tempIdKey = possVal[0].replace(/^#/g, '').replace('[*]', '[' + i + ']');
                            const tempValKey = possVal[1].replace(/^#/g, '').replace('[*]', '[' + i + ']');
                            if (data[tempIdKey] && data[tempValKey]) {
                                newPossVal.push(data[tempIdKey] + '||' + data[tempValKey]);
                            }
                            else {
                                break;
                            }
                        }
                        fieldTempJson[jKey] = newPossVal;
                    }
                }
                // console.log(fieldTempJson);
                this.fieldList.push(fieldTempJson);
            }
        }
    }
    hasDynamicKey(fieldParam, ApiParam) {
        if (fieldParam.startsWith('#')
            && Object.prototype.hasOwnProperty.call(ApiParam, fieldParam.replace(/^#/g, ''))) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        if (this.sectionData.event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                if (event.isDefault && event.event_name.toLowerCase() === name.toLowerCase()) {
                    this.eventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                }
            }
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", rowData: "rowData", rootData: "rootData", childList: "childList", type: "type" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "dynamic-form-container", 3, "id"], ["class", "form-label", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "form-label"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "stepId", "field", "position", "templateId", "rootData"], [3, "stepId", "fieldData", "moduleName"], [1, "no-data-info", "text-center", "my-5"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicFormComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [NgStyle, CommonModule, i13.NgForOf, i13.NgIf, ViewRendererComponent, DynamicRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFormComponent, [{
        type: Component,
        args: [{ selector: 'app-dynamic-form', standalone: true, imports: [NgStyle, CommonModule, forwardRef(() => ViewRendererComponent), DynamicRendererComponent], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div class=\"dynamic-form-container\" id=\"{{html_id}}\">\r\n\t\t<div class=\"form-label\" *ngIf=\"!hideLabel\">\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(sectionData.field_label)\">{{sectionData.field_label}}</label>\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(sectionData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"sectionData.field_label\"></label>\r\n\t\t</div>\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t\t{{message.message_text}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t\t<div class=\" {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of fieldList; index as position\">\r\n\t\t\t\t\t<!-- <div class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position}\">\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<ng-container *ngIf=\"allowedFieldTypes.includes(field.field_type)\">\r\n\t\t\t\t\t\t<app-view-renderer class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"position\" [templateId]=\"templateId\"\r\n\t\t\t\t\t\t[rootData]=\"rootData\">\r\n\t\t\t\t\t\t</app-view-renderer>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!allowedFieldTypes.includes(field.field_type)\">\r\n\t\t\t\t\t\t<div class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t<app-dynamic-renderer [stepId]=\"stepId\" [fieldData]=\"field\" [moduleName]=\"field.field_type\"\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t\t\t\t\t</app-dynamic-renderer>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader\">\r\n\t\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- <ng-template #cellData let-field=\"field\" let-position=\"position\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<app-cee-label [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\" tabindex=\"0\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-label>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<app-cee-textfield [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-textfield>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Textarea'\">\r\n\t\t\t<app-cee-textarea [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-textarea>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<app-cee-image [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-image>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<app-cee-picker [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-picker>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t\t\t<app-cee-radio [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-radio>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Date'\">\r\n\t\t\t<app-cee-date [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-date>\r\n\t\t</ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'Timepicker'\">\r\n        <app-cee-time-picker [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\"></app-cee-time-picker>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'Attachments'\">\r\n        <app-cee-attachments [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n        </app-cee-attachments>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchDefault>\r\n        <app-dynamic-renderer [stepId]=\"stepId\" [fieldData]=\"field\" [moduleName]=\"field.field_type\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n        </app-dynamic-renderer>\r\n    </ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template> -->\r\n" }]
    }], () => [{ type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: ApiDataService }, { type: AppDataService }, { type: WfeStepLoaderService }, { type: CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i11.Router }], { sectionData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], childList: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicFormComponent, { className: "DynamicFormComponent", filePath: "lib\\components\\dynamic-form\\dynamic-form.component.ts", lineNumber: 42 }); })();

export { DynamicFormComponent };
//# sourceMappingURL=ng-cee-core-dynamic-form.component-Cm25oDxC.mjs.map
