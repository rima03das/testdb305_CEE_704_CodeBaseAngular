import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, o as UndoRedo, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { CommonModule, NgStyle } from '@angular/common';
import * as i12 from 'ngx-bar-rating';
import { BarRatingModule } from 'ngx-bar-rating';
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

function CeeStarComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeStarComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeStarComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeStarComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 6)(2, CeeStarComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bar-rating", 10);
    i0.ɵɵtwoWayListener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template_bar_rating_rateChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template_bar_rating_rateChange_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitRating()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("rate", ctx_r0.inputValue);
    i0.ɵɵproperty("max", ctx_r0.numStars);
} }
function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bar-rating", 11);
    i0.ɵɵtwoWayListener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template_bar_rating_rateChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.totalRate, $event) || (ctx_r0.totalRate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template_bar_rating_rateChange_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitRating()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\u00A0\u00A0 ");
    i0.ɵɵelementStart(5, "span", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("rate", ctx_r0.totalRate);
    i0.ɵɵproperty("max", ctx_r0.numStars);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.totalRate, "/", ctx_r0.numStars, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.totalRating, " Rating");
} }
function CeeStarComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeStarComponent_div_0_ng_container_5_ng_container_1_Template, 2, 2, "ng-container", 4)(2, CeeStarComponent_div_0_ng_container_5_ng_container_2_Template, 7, 5, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.totalRate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.totalRate);
} }
function CeeStarComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0)(1);
    i0.ɵɵelementStart(2, "button", 13);
    i0.ɵɵlistener("click", function CeeStarComponent_div_0_ng_container_6_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.increment()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 14);
    i0.ɵɵelement(4, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Like | ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 16);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 13);
    i0.ɵɵlistener("click", function CeeStarComponent_div_0_ng_container_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.decrement()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 17);
    i0.ɵɵelement(10, "path", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Dislike | ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span", 19);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.likeS);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.TotalnumberofLikes);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.dislikeS);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.TotalnumberofDisLikes);
} }
function CeeStarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeStarComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtemplate(5, CeeStarComponent_div_0_ng_container_5_Template, 3, 2, "ng-container", 4)(6, CeeStarComponent_div_0_ng_container_6_Template, 14, 6, "ng-container", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.starRatingshow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.starRatingshow);
} }
class CeeStarComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    router;
    ceeApiService;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    TotalnumberofLikes;
    TotalnumberofDisLikes;
    flag = 0;
    dislikeS = "dislike-button";
    likeS = "like-button";
    inputValue = 5;
    undoRedoUtil;
    numStars = 5;
    starRatingshow = true;
    totalRating;
    totalRate;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, router, ceeApiService) {
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
        this.router = router;
        this.ceeApiService = ceeApiService;
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    increment() {
        this.likeS = "like-button liked";
        this.dislikeS = "dislike-button";
        if (this.flag == 0) {
            this.TotalnumberofLikes++;
            this.flag = 1;
        }
        else if (this.flag == 1) {
            this.TotalnumberofLikes--;
            this.likeS = "like-button";
            this.flag = 0;
        }
        else if (this.flag == 2) {
            this.TotalnumberofLikes++;
            this.TotalnumberofDisLikes--;
            this.flag = 1;
        }
        this.updateFieldData(1);
        this.onComponentEvent('onStarRatingClicked');
    }
    decrement() {
        this.dislikeS = "dislike-button disliked";
        this.likeS = "like-button";
        if (this.flag == 0) {
            this.TotalnumberofDisLikes++;
            this.flag = 2;
        }
        else if (this.flag == 2) {
            this.TotalnumberofDisLikes--;
            this.flag = 0;
            this.dislikeS = "dislike-button";
        }
        else if (this.flag == 1) {
            this.TotalnumberofDisLikes++;
            this.TotalnumberofLikes--;
            this.flag = 2;
        }
        this.updateFieldData(0);
        this.onComponentEvent('onStarRatingClicked');
    }
    onViewDataInit() {
        if (this.additionalParameter["CEE_like_dislike"] == "true") {
            this.starRatingshow = false;
        }
        if (this.additionalParameter["CEE_star_number"]) {
            this.numStars = this.additionalParameter["CEE_star_number"];
        }
        if (this.additionalParameter["default_value"]) {
            this.inputValue = this.additionalParameter["default_value"];
        }
        if (this.additionalParameter['externalApiOptionValue']) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
            const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
            if (this.additionalParameter["CEE_like_dislike"] == "true") {
                this.TotalnumberofLikes = data.value[valueApikeys[0]];
                this.TotalnumberofDisLikes = data.value[valueApikeys[1]];
            }
            if (this.additionalParameter["CEE_like_dislike"] == "false") {
                this.totalRate = data && data.value[valueApikeys[0]];
                this.totalRating = data && data.value[valueApikeys[1]];
            }
        }
    }
    submitRating() {
        this.updateFieldData(this.inputValue);
        this.onComponentEvent('onStarRatingClicked');
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        if (!this.rowData) {
            const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiValue !== null) {
                if (Array.isArray(apiValue) && this.isSingleApiKey) {
                    this.fieldData.possible_values = apiValue;
                    this.inputValue = this.fieldData.possible_values;
                }
                else {
                    this.fieldValue = apiValue;
                    this.inputValue = this.fieldValue;
                    this.updateFieldData(this.fieldValue);
                    this.undoRedoUtil.push(this.appData.id, this.fieldValue);
                }
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        // if(this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const parameter of this.fieldData.additional_parameters) {
        //         if (parameter.parameter_type === 'externalApiOptionValue') {
        //             let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
        //             const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
        //             if(this.additionalParameter["CEE_like_dislike"] == "true"){
        //                 this.TotalnumberofLikes = data.value[valueApikeys[0]];
        //                 this.TotalnumberofDisLikes = data.value[valueApikeys[1]];
        //             }
        //             if(this.additionalParameter["CEE_like_dislike"] == "false"){
        //                 this.totalRate = data.value[valueApikeys[0]];
        //                 this.totalRating = data.value[valueApikeys[1]];
        //             }
        //         }
        //     }
        // }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    concatData() { }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
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
                this.fieldValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                        }
                    }
                }
                this.inputValue = this.fieldValue;
                this.updateFieldData(this.fieldValue);
                this.showErrorOnNext = false;
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
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.inputValue = this.fieldValue;
            this.updateFieldData(this.fieldValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                this.inputValue = this.fieldValue;
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        if (data.includes(this.fieldData.unique_id)) {
            const stateValue = this.undoRedoUtil.getPresentValue(this.fieldData.unique_id);
            const fieldValue = this.commonUtil.getID(this.fieldValue);
            if (stateValue !== null || stateValue !== undefined) {
                if (stateValue !== fieldValue) {
                    this.fieldValue = stateValue;
                    this.inputValue = this.fieldValue;
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
    }
    toggleLanguage(data) {
    }
    ngOnChanges(changes) {
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
    static ɵfac = function CeeStarComponent_Factory(t) { return new (t || CeeStarComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeStarComponent, selectors: [["app-cee-star"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "class", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], [1, "form-field"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [3, "rateChange", "rate", "max"], ["disabled", "", 3, "rateChange", "rate", "max"], [1, "totalRating"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hand-thumbs-up"], ["d", "M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"], [1, "likes-counter"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hand-thumbs-down"], ["d", "M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"], [1, "dislikes-counter"]], template: function CeeStarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeStarComponent_div_0_Template, 7, 6, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [BarRatingModule, i12.BarRating, FormsModule, NgbModule, CommonModule, i13.NgIf], styles: [".like-button[_ngcontent-%COMP%], .dislike-button[_ngcontent-%COMP%]{font-size:1rem;padding:5px 10px;color:#585858}.liked[_ngcontent-%COMP%], .disliked[_ngcontent-%COMP%]{font-weight:700;color:#1565c0}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeStarComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-star', standalone: true, imports: [BarRatingModule, FormsModule, NgStyle, NgbModule, CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <ng-container *ngIf=\"starRatingshow\">\r\n                <ng-container *ngIf=\"!totalRate\">\r\n                    <bar-rating [(rate)]=\"inputValue\" [max]=\"numStars\" (rateChange)=\"submitRating()\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"totalRate\">\r\n                    <bar-rating [(rate)]=\"totalRate\" [max]=\"numStars\" (rateChange)=\"submitRating()\" disabled/>\r\n                    <span class=\"totalRating\">{{totalRate}}/{{numStars}}</span>&nbsp;&nbsp;\r\n                    <span class=\"totalRating\">{{totalRating}} Rating</span>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!starRatingshow\">\r\n                <ng-container>\r\n                    <button  [class]=\"likeS\" (click)=\"increment()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z\"/>\r\n                      </svg> Like | <span class=\"likes-counter\">{{TotalnumberofLikes}}</span> </button>\r\n                    <button  [class]=\"dislikeS\" (click)=\"decrement()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-down\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1\"/>\r\n                      </svg> Dislike | <span class=\"dislikes-counter\">{{TotalnumberofDisLikes}}</span> </button>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".like-button,.dislike-button{font-size:1rem;padding:5px 10px;color:#585858}.liked,.disliked{font-weight:700;color:#1565c0}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i11.Router }, { type: CeeApiService }], { stepId: [{
            type: Input
        }], fieldData: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeStarComponent, { className: "CeeStarComponent", filePath: "lib\\field-components\\cee-star\\cee-star.component.ts", lineNumber: 27 }); })();

export { CeeStarComponent };
//# sourceMappingURL=ng-cee-core-cee-star.component-B5ngvXwn.mjs.map
