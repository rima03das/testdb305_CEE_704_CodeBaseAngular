import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, i as AlertModalComponent, c as SharedEventsServiceService, d as CEEInternalEmitterService, f as ApiDataService, e as AppDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { CommonModule, NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { moveItemInArray, transferArrayItem, CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { CeeLabelComponent } from './ng-cee-core-cee-label.component-3Du0Wv_U.mjs';
import * as i10 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
import './ng-cee-core-highlight.pipe-yI79OM27.mjs';

const _c0 = a0 => ({ "d-none": a0 });
const _c1 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c2 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
function DragAndDropListComponent_ng_container_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function DragAndDropListComponent_ng_container_0_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function DragAndDropListComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_ng_container_1_label_1_Template, 2, 1, "label", 6)(2, DragAndDropListComponent_ng_container_0_ng_container_1_label_2_Template, 1, 1, "label", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function DragAndDropListComponent_ng_container_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showHideFilter("show-hide-dd-container-", ctx_r0.fieldData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function DragAndDropListComponent_ng_container_0_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.fieldData.field_label, " Setting");
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "mat-checkbox", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const i_r5 = i0.ɵɵnextContext().index; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.columnShowHideRearrange[i_r5].showColumn, $event) || (ctx_r0.columnShowHideRearrange[i_r5].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const f_r7 = ctx_r5.$implicit;
    const i_r5 = ctx_r5.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.columnShowHideRearrange[i_r5].showColumn);
    i0.ɵɵproperty("disabled", ctx_r0.columnShowHideRearrange[i_r5].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r7.field_label);
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r7.field_label);
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template, 3, 3, "div", 20)(2, DragAndDropListComponent_ng_container_0_div_4_div_4_div_2_Template, 3, 1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r0.columnShowHideRearrange[i_r5].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("showhide") == -1);
} }
function DragAndDropListComponent_ng_container_0_div_4_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.filterErrorMsg);
} }
function DragAndDropListComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div");
    i0.ɵɵtemplate(2, DragAndDropListComponent_ng_container_0_div_4_label_2_Template, 2, 1, "label", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵlistener("cdkDropListDropped", function DragAndDropListComponent_ng_container_0_div_4_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.dropFilterItem($event)); });
    i0.ɵɵtemplate(4, DragAndDropListComponent_ng_container_0_div_4_div_4_Template, 3, 5, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, DragAndDropListComponent_ng_container_0_div_4_label_6_Template, 2, 1, "label", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 17);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_div_4_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-dd-container-", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.filterErrorMsg);
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_Template, 1, 0, null, 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const position_r10 = ctx.index;
    const ctx_r10 = i0.ɵɵnextContext();
    const item_r12 = ctx_r10.$implicit;
    const pos_r13 = ctx_r10.index;
    i0.ɵɵnextContext(4);
    const cellData_r14 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r14)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r9, item_r12, pos_r13, position_r10));
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_Template, 2, 7, "ng-container", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r12.fields);
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵlistener("cdkDropListDropped", function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.drop($event)); });
    i0.ɵɵtemplate(2, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const status_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkDropListData", ctx_r0.displayData[status_r15.unique_id]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.displayData[status_r15.unique_id]);
} }
function DragAndDropListComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("drag-drop-container ", ctx_r0.fieldData.field_style ? ctx_r0.commonUtil.bootstrapColClass(ctx_r0.fieldData.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(ctx_r0.fieldData)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", status_r15.field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r15.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.displayData.hasOwnProperty(status_r15.unique_id));
} }
function DragAndDropListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, DragAndDropListComponent_ng_container_0_button_3_Template, 2, 0, "button", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DragAndDropListComponent_ng_container_0_div_4_Template, 11, 5, "div", 3);
    i0.ɵɵelementStart(5, "div", 4);
    i0.ɵɵtemplate(6, DragAndDropListComponent_ng_container_0_div_6_Template, 4, 6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1(" ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.statusList);
} }
function DragAndDropListComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-label", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    const field_r17 = ctx_r15.field;
    const data_r18 = ctx_r15.data;
    const position_r19 = ctx_r15.position;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r19, " ", field_r17.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r17.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r17)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("rowData", field_r17["rowData"])("fieldData", field_r17)("primaryKeyIndex", i0.ɵɵpureFunction3(8, _c2, ctx_r0.primaryKeyVal, data_r18[ctx_r0.primaryKeyVal], data_r18));
} }
function DragAndDropListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 31);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_template_1_ng_container_1_Template, 2, 12, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r17 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r17.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
} }
class DragAndDropListComponent {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    cdRef;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    fieldData;
    stepId;
    type;
    rootData;
    primaryKeyVal = '';
    statusKey = '';
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    isVisible = false;
    fieldValue;
    setDynamicLabelUtil;
    html_id = '';
    statusList = [];
    displayData = {};
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, cdRef, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        setTimeout(() => {
            this.variableObj['emitOnApplyRearrangeBtnClicked_' + this.html_id] =
                this.sharedEventsServiceService.emitOnApplyRearrangeBtnClicked.subscribe(res => {
                    if (res && res.invoke_event_config && res.invoke_event_config.additional_parameters) {
                        let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                        if (tableId && tableId == this.fieldData.unique_id) {
                            this.resetRestructuring(false);
                            this.applyRestructuring(false);
                            this.cdRef.detectChanges();
                        }
                    }
                });
        }, 0);
    }
    async ngOnInit() {
        this.html_id = this.fieldData.unique_id;
        let fromStore;
        const { additional_parameters, event_list } = this.fieldData;
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'CEE_STATUS_KEY':
                        this.statusKey = paramter.value;
                        break;
                }
            }
        }
        // Means it is a field not a section
        if (this.html_id) {
            const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.fieldData.fields = this.blockRenderedData.block_fields;
            // check if the DD has externalApiOptionValue
            if (this.additionalParameters['externalApiOptionValue']) {
                // console.log("call getExternalApiOptionValue");
                let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameters['externalApiOptionValue']));
                const externalApiOptionValue = data ? this.getExternalApiOptionValue(this.additionalParameters['externalApiOptionValue'], data['value']) : null;
                // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
                if (externalApiOptionValue !== null) {
                    if (Array.isArray(externalApiOptionValue)) {
                        this.fieldData.possible_values = externalApiOptionValue;
                        // console.log("fieldData possible_values: ", this.fieldData.possible_values)
                    }
                    else {
                        console.error('Something Went Wrong in Picker !!!');
                    }
                }
            }
            this.processPossibleValues();
            this.applyRestructuring();
            this.returnFieldIdMapApiKey();
            //fetch data from akita's api data
            if (!this.isSingleAPIKey) {
                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
                for (const apiKey of apiKeys) {
                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                    if (handlerData) {
                        fromStore = handlerData.value;
                        break;
                    }
                }
            }
            this.variableObj['emitApiSuccessResponse_' +
                this.html_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    // console.log("Success Response: ", res)
                    this.setListData(res);
                    // check if the DD has externalApiOptionValue
                    if (this.additionalParameters['externalApiOptionValue']) {
                        // console.log("call getExternalApiOptionValue");
                        let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameters['externalApiOptionValue']));
                        const externalApiOptionValue = data ? this.getExternalApiOptionValue(this.additionalParameters['externalApiOptionValue'], data['value']) : null;
                        // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
                        if (externalApiOptionValue !== null) {
                            if (Array.isArray(externalApiOptionValue)) {
                                this.fieldData.possible_values = externalApiOptionValue;
                                // console.log("fieldData possible_values: ", this.fieldData.possible_values)
                                this.processPossibleValues();
                                this.applyRestructuring(false);
                            }
                            else {
                                console.error('Something Went Wrong in Picker !!!');
                            }
                        }
                    }
                }, err => {
                    console.error(err);
                });
            this.variableObj['emitOnDataSetOrUpdated_' + this.html_id] = this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            if (this.fieldData.is_display === 1) {
                this.isVisible = true;
            }
            this.appData = {
                ...this.appData,
                ...{
                    id: this.fieldData.unique_id,
                    stepId: this.stepId,
                    apiKey: this.isSingleAPIKey ? this.fieldData.api_key : '',
                    fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.fieldData.field_label : '',
                    linkedBlockId: '',
                    isRepeatedField: false,
                    repeatedBlockFieldId: '',
                    requestApiKey: this.isSingleAPIKey ? [] :
                        this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                    responseApiKey: this.isSingleAPIKey ? [] :
                        this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key)),
                    visible: this.fieldData.is_display === 1 ? true : false,
                    isValid: true
                }
            };
            this.appData.visible = this.isVisible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    processPossibleValues() {
        // check if the DD has possible values
        if (this.fieldData && this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            let i = 0;
            this.statusList = [];
            for (const possiVal of this.fieldData.possible_values) {
                const _possiVal = possiVal.split('||');
                if (_possiVal.length === 2) {
                    this.statusList.push({
                        field_label: _possiVal[1],
                        unique_id: _possiVal[0],
                        position: i++,
                        showColumn: true,
                        isMandatory: false,
                        isVisible: true
                    });
                }
            }
            this.fieldDataBack = this.statusList;
            // console.log("onInit >> statusList: ",this.statusList)
            this.updateColumnConfig();
        }
    }
    getExternalApiOptionValue(value, data) {
        if (value.includes('||')) {
            const valueApikeys = value.split('||').map(str => str.trim());
            const valueData = this.setAPIKeyUtil.setApiCallBackData(valueApikeys[0], data);
            const labelData = this.setAPIKeyUtil.setApiCallBackData(valueApikeys[1], data);
            // console.log("valueData: ",valueData);
            // console.log("labelData: ",labelData);
            if (Array.isArray(valueData) && Array.isArray(labelData) && valueData.length === labelData.length) {
                const optionValues = [];
                for (let v = 0; v < valueData.length; v++) {
                    optionValues.push(valueData[v] + '||' + labelData[v]);
                }
                // console.log("optionValues: ",optionValues);
                return optionValues;
            }
            else {
                return null;
            }
        }
        else {
            return this.setAPIKeyUtil.setApiCallBackData(value, data);
        }
    }
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.fieldData.unique_id)) {
            this.columnShowHideRearrange = setting[this.fieldData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            this.columnShowHideRearrange = this.statusList;
        }
        // console.log("updateColumnConfig >> columnShowHideRearrange: ",this.columnShowHideRearrange)
    }
    dropFilterItem(event) {
        if (this.columnFilterType.indexOf('rearrange') != -1) {
            moveItemInArray(this.columnShowHideRearrange, event.previousIndex, event.currentIndex);
        }
    }
    resetRestructuring(hideSearchFlag = true) {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.fieldData.unique_id)) {
            this.columnShowHideRearrange = setting[this.fieldData.unique_id];
        }
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
        }
        // console.log("resetRestructuring >> columnShowHideRearrange: ",this.columnShowHideRearrange)
        if (hideSearchFlag) {
            this.showHideFilter('show-hide-dd-container-', this.fieldData.unique_id);
        }
    }
    applyRestructuring(hideSearchFlag = true) {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.fieldData.unique_id] = this.columnShowHideRearrange;
            localStorage.setItem('columnRstructuringConfig', JSON.stringify(setting));
            // console.log("applyRestructuring >> setting: ",setting)
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            // console.log("applyRestructuring >> selectedCols: ",selectedCols)
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                // console.log("applyRestructuring >> tempFieldData: ",tempFieldData)
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.statusList = restuctuedColArr;
            // console.log("applyRestructuring >> restuctuedColArr: ",restuctuedColArr)
            // this.ngOnInit();
            if (hideSearchFlag) {
                this.showHideFilter('show-hide-dd-container-', this.fieldData.unique_id);
            }
            // console.log("All applyRestructuring Process Done!")
        }
        else {
            this.filterErrorMsg = "Please select atleast one column!";
        }
    }
    showHideFilter(string, id) {
        let containerId = string + id;
        if (!document.getElementById(containerId)) {
            return;
        }
        if (document.getElementById(containerId).classList.contains('d-none')) {
            document.getElementById(containerId).classList.remove('d-none');
        }
        else {
            document.getElementById(containerId).classList.add('d-none');
        }
    }
    setListData(res) {
        const result = this.setAPIKeyUtil.setApiCallBackData(this.fieldData, res);
        if (this.statusKey && result && result.length > 0) {
            this.displayData = {};
            for (const row of result.filter(r => r.hasOwnProperty(this.statusKey))) {
                if (!this.displayData.hasOwnProperty(row[this.statusKey])) {
                    this.displayData[row[this.statusKey]] = [];
                }
                this.displayData[row[this.statusKey]].push(row);
            }
            for (const key in this.displayData) {
                const properties = this.setFieldProperties(this.displayData[key]); // function that sets single properties
                this.displayData[key] = properties;
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        // not a list that is declared as a section
        if (this.fieldData && this.fieldData.unique_id) {
            if (this.fieldData && this.fieldData.event_list && this.fieldData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.fieldData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.eventListHandler.switchEventDisplayType(event, this.fieldData.event_list);
                    }
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
    drop(event) {
        // to check is confirm popup needed while drop
        if (this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL'] && this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL'] === 'true') {
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL_MESSAGE'] ? this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL_MESSAGE'] : 'Do you want to proceed?',
                    title: " "
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    // If user confirms the drop, proceed with reordering the items
                    this.proceedToDrop(event);
                }
            });
        }
        else {
            // no confirm popup needed
            this.proceedToDrop(event);
        }
    }
    proceedToDrop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.storeUpdatedList();
        const _this = this;
        setTimeout(() => {
            _this.onComponentEvent('OnChange');
        }, 0);
    }
    storeUpdatedList() {
        const updatedListData = [];
        for (const key in this.displayData) {
            for (const row of this.displayData[key]) {
                const tRow = JSON.parse(JSON.stringify(row));
                tRow[this.statusKey] = key;
                updatedListData.push(tRow);
            }
        }
        this.appData.value = updatedListData;
        this.appDataService.setAppData(this.appData);
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            if (data.hasOwnProperty('fields')) {
                continue;
            }
            data['fields'] = [];
            if (this.fieldData.fields) {
                for (const j of this.fieldData.fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    field['rowData'] = this.generateRowData(field, data, i);
                    data['fields'].push(field);
                }
            }
        }
        return displayValues;
    }
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowData(field, data, list_pos, expandable = false) {
        let apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        expandable && apiData && (data['hasExpandableData'] = true);
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        // if (field.field_type === 'Link') {
        //     apiData = data;
        // }
        let obj;
        let isEditable = false;
        let isVisible = false;
        if (field.is_editable === 1) {
            isEditable = true;
        }
        if (field.is_display === 1) {
            isVisible = true;
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        if (this.fieldData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        else {
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: isVisible,
                editable: isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        return obj;
    }
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data, presentValue, field) {
        const visibilityCondition = this.conditionalUtil.checkVisibility(field, field.unique_id, '', data);
        if (visibilityCondition) {
            return visibilityCondition;
        }
        return presentValue;
    }
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data, presentValue, field) {
        const editableCondition = this.conditionalUtil.checkEditable(field, field.unique_id, '', data);
        if (editableCondition) {
            return editableCondition;
        }
        return presentValue;
    }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(this.fieldIdMapApiKey)) {
            const uniqueId = this.fieldIdMapApiKey[key];
            obj[uniqueId] = this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) ? this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.fieldData.fields) {
            this.returnFieldIdMapApiKeyValue(obj, field);
        }
        this.fieldIdMapApiKey = obj;
    }
    // inner function of returnFieldIdMapApiKey
    returnFieldIdMapApiKeyValue(obj, field) {
        if (!this.isSingleAPIKey && field.response_api_key) {
            if (field.response_api_key.includes('|')) {
                const keys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(field.response_api_key));
                for (const key of keys) {
                    obj[key] = field.unique_id;
                }
            }
            else {
                obj[field.response_api_key] = field.unique_id;
            }
        }
    }
    static ɵfac = function DragAndDropListComponent_Factory(t) { return new (t || DragAndDropListComponent)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragAndDropListComponent, selectors: [["app-drag-and-drop-list"]], inputs: { fieldData: "fieldData", stepId: "stepId", type: "type", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-dd-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], ["cdkDropListGroup", ""], [3, "class", 4, "ngFor", "ngForOf"], ["class", "form-label", 4, "ngIf"], ["class", "form-label", 3, "innerHTML", 4, "ngIf"], [1, "form-label"], [1, "form-label", 3, "innerHTML"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-dd-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["cdkDropList", "", 1, "drag-drop-list", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "drag-drop-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "drag-drop-box"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "stepId", "rowData", "fieldData", "primaryKeyIndex"]], template: function DragAndDropListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DragAndDropListComponent_ng_container_0_Template, 7, 7, "ng-container", 1)(1, DragAndDropListComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, MatInputModule, FormsModule, i14.NgControlStatus, i14.NgModel, MatCheckboxModule, i10.MatCheckbox, CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, i13.NgClass, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, CeeLabelComponent], styles: [".drag-drop-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drag-drop-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.drag-drop-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.drag-drop-box[_ngcontent-%COMP%]:last-child{border:none}.drag-drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-drop-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.show-hide-dd-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropListComponent, [{
        type: Component,
        args: [{ selector: 'app-drag-and-drop-list', standalone: true, imports: [MatFormFieldModule, MatInputModule, NgStyle, FormsModule, MatCheckboxModule, CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, CeeLabelComponent], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t<label class=\"form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t<label class=\"form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t</ng-container>\r\n\t<!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\" *ngIf=\"columnFilterType.indexOf('none') == -1\" (click)=\"showHideFilter('show-hide-dd-container-',fieldData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-dd-container-{{fieldData.unique_id}}\" class=\"show-hide-dd-container col-3 mt-20 d-none\" *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"fieldData.field_label\" class=\"text-secondary m-2\">{{fieldData.field_label}} Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"dropFilterItem($event)\">  \r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\" *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\" [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>  \r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n\t<div cdkDropListGroup class=\" {{is_bootstrap?'row':''}}\">\r\n\t\t<div *ngFor=\"let status of statusList;\" class=\"drag-drop-container {{fieldData.field_style?commonUtil.bootstrapColClass(fieldData.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(fieldData)):''}}\">\r\n\t\t\t<h2 [attr.aria-label]=\"status.field_label\">{{status.field_label}}</h2>\r\n\t\t\t<ng-container *ngIf=\"displayData.hasOwnProperty(status.unique_id)\">\r\n\t\t\t\t<div cdkDropList [cdkDropListData]=\"displayData[status.unique_id]\" class=\"drag-drop-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t<div *ngFor=\"let item of displayData[status.unique_id]; index as pos\" class=\"drag-drop-box\" cdkDrag>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let field of item.fields; index as position\">\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:item, pos:pos, position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</ng-template>", styles: [".drag-drop-container{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drag-drop-list{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.drag-drop-box{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.drag-drop-box:last-child{border:none}.drag-drop-list.cdk-drop-list-dragging .drag-drop-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.show-hide-dd-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
    }], () => [{ type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: ApiDataService }, { type: AppDataService }, { type: WfeStepLoaderService }, { type: CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i11.Router }], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], type: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragAndDropListComponent, { className: "DragAndDropListComponent", filePath: "lib\\components\\drag-and-drop-list\\drag-and-drop-list.component.ts", lineNumber: 52 }); })();

export { DragAndDropListComponent };
//# sourceMappingURL=ng-cee-core-drag-and-drop-list.component-BJ70Mxn_.mjs.map
