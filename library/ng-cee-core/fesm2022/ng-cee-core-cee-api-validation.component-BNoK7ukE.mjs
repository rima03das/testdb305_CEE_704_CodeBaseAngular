import * as i0 from '@angular/core';
import { Component, HostListener, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, n as AccordionService, h as CeeApiService, W as WFEEventListHandler, T as TooltipModule } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { H as HighlightPipe } from './ng-cee-core-highlight.pipe-yI79OM27.mjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import * as i5 from '@angular/material/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import * as i15 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i17 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/platform-browser';
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
import 'ngx-image-zoom';
import 'moment-timezone';
import 'crypto-js';
import 'lodash';
import '@ng-idle/core';
import 'jquery';
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

const _c0 = (a0, a1) => ({ "error-circle": a0, "warning-circle": a1 });
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const node_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, node_r1.errorType === "error", node_r1.errorType === "warning"));
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, "(error)");
    i0.ɵɵelementEnd();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, "(warning)");
    i0.ɵɵelementEnd();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const node_r1 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEditClick(node_r1)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd()();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4)(1, "li", 5);
    i0.ɵɵelement(2, "button", 6);
    i0.ɵɵtemplate(3, CeeApiValidationComponent_div_0_mat_tree_node_2_span_3_Template, 1, 4, "span", 7);
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵtemplate(6, CeeApiValidationComponent_div_0_mat_tree_node_2_span_6_Template, 2, 0, "span", 9)(7, CeeApiValidationComponent_div_0_mat_tree_node_2_span_7_Template, 2, 0, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template, 3, 0, "button", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", node_r1.type === "child");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r1.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r1.errorType === "error");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r1.errorType === "warning");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.shouldShowEditButton(node_r1));
} }
function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const node_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEditClick(node_r5)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd()();
} }
function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-nested-tree-node", 16)(1, "li", 17)(2, "div", 18);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template_div_click_2_listener($event) { const node_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onNodeClick(node_r5, $event)); });
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template, 3, 0, "button", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 21);
    i0.ɵɵelementContainer(7, 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(node_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.shouldShowEditButton(node_r5));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r2.treeControl.isExpanded(node_r5));
} }
function CeeApiValidationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "mat-tree", 1);
    i0.ɵɵtemplate(2, CeeApiValidationComponent_div_0_mat_tree_node_2_Template, 9, 5, "mat-tree-node", 2)(3, CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template, 8, 4, "mat-nested-tree-node", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r2.dataSource)("treeControl", ctx_r2.treeControl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r2.hasChild);
} }
function transformResponseToTree(data) {
    if (!data?.result?.main_parent)
        return [];
    const treeMap = new Map();
    data.result.main_parent.forEach((item) => {
        const fieldChildren = item.fieldInfo?.map((field) => ({
            name: `${field.errorMessage}`,
            borrower_id: item.borrower_id,
            blockName: field.block_name,
            stepName: field.step_name,
            api_key: field.api_key || "",
            children: [],
            type: 'child',
            errorType: field.type
        })) || [];
        if (item.borrower_id) {
            // ✅ Store borrower_id at the parent level
            if (!treeMap.has(item.parent)) {
                treeMap.set(item.parent, {
                    name: item.parent,
                    borrower_id: item.borrower_id,
                    blockName: fieldChildren.length > 0 ? fieldChildren[0].blockName : null,
                    stepName: fieldChildren.length > 0 ? fieldChildren[0].stepName : null,
                    children: fieldChildren,
                    type: 'parent'
                });
            }
        }
        else {
            treeMap.set(item.parent, {
                name: item.parent,
                borrower_id: "",
                blockName: fieldChildren.length > 0 ? fieldChildren[0].blockName : null,
                stepName: fieldChildren.length > 0 ? fieldChildren[0].stepName : null,
                children: fieldChildren,
                type: 'parent'
            });
        }
    });
    return Array.from(treeMap.values());
}
class CeeApiValidationComponent extends BaseView {
    sanitizer;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    accordionService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    cdRef;
    renderer;
    eventListHandler;
    route;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    html_id = '';
    fieldLabels = [];
    labelEmitter;
    _iframeLabel;
    iframeLabel;
    tooltipText = "";
    expandAll = true;
    showTruncatedList = false;
    showItemCount = 1;
    showItemKeys = ['id', 'value'];
    showItemClickable = false;
    showItemRoute = '';
    showItemRouteNewTab = false;
    highlight;
    treeControl = new NestedTreeControl(node => node.children);
    dataSource = new MatTreeNestedDataSource();
    keyValueMap = new Map();
    borrowerIdMap = new Map();
    responseResult;
    mainParentArray = [];
    flatUnflat;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, accordionService, dialog, snackBar, http, ceeApiService, router, cdRef, renderer, eventListHandler, route) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.eventListHandler = eventListHandler;
        this.route = route;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.http.get('./assets/jsons/lender_mapping.json').subscribe({
            next: (response) => {
                if (response.result && Array.isArray(response.result)) {
                    this.keyValueMap.clear(); // Clear previous data
                    this.responseResult = response.result;
                    response.result.forEach(obj => {
                        const key = obj.response_value; // Extract response_value as key
                        const value = obj.unique_id; // Extract unique_id as value
                        this.keyValueMap.set(key, value); // Store in Map
                    });
                }
            },
            error: (error) => {
                console.error("Error fetching API data:", error);
            }
        });
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData, this.cdRef);
    }
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
    }
    concatData() { }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.fieldData['field_label'] += " ";
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))'))) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('data')) {
                    this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
                }
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            if (this.rowData.value && this.rowData.value.includes('((dynamic))')) {
                                this.fieldLabels.push(this.setDynamicLabelUtil.getDynamicValue({ field_label: this.rowData.value }).field_label);
                            }
                            else {
                                this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                            }
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
                if (this.fieldData.hasOwnProperty('additional_parameters_config') && this.fieldData.additional_parameters_config && !Array.isArray(this.fieldData.additional_parameters_config)) {
                    this.fieldLabels = [this.fieldData.additional_parameters_config];
                }
            }
            else if (this.fieldValue !== undefined && this.fieldValue !== null) {
                this.fieldLabels = [];
                this.fieldValue = this.fieldValue ? this.getDataFormattedValue(this.fieldValue) : this.fieldValue;
                this.fieldLabels.push(this.fieldValue);
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
                this.getDynamicIframe(data);
            });
        }
        else if (this.fieldData.field_label.includes('%repeatablePos%')) {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.rowData.position + 1);
        }
        if (this.additionalParameter['iframe']) {
            if (!this.additionalParameter['iframe'].includes('((dynamic))')) {
                this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
            }
            this.getDynamicIframe();
        }
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
            let field_box = this.commonUtil.getMaskedData(this.fieldLabels[0], formats[0], formats[1], formats[2]);
            this.fieldLabels = [field_box];
        }
        if (this.rowData) {
            this.sharedEventsService.emitOnApplyFilter.subscribe(data => {
                if (this.rowData.html_id.includes(data.source)) {
                    this.highlight = data.highlight;
                }
            });
        }
        this.showTruncatedList = (this.additionalParameter['CEE_show_list_items_trancated'] && this.additionalParameter['CEE_show_list_items_trancated'].toLowerCase() == 'true') ? true : this.showTruncatedList;
        this.showItemCount = (this.additionalParameter['CEE_show_list_items_limit'] && !isNaN(this.additionalParameter['CEE_show_list_items_limit'])) ? Number(this.additionalParameter['CEE_show_list_items_limit']) : 1;
        this.showItemKeys = this.additionalParameter['CEE_show_list_items_key'] ? this.additionalParameter['CEE_show_list_items_key'].split('||') : this.showItemKeys;
        this.showItemClickable = (this.additionalParameter['CEE_show_list_items_clickable'] && this.additionalParameter['CEE_show_list_items_clickable'].toLowerCase() == 'true') ? true : this.showItemClickable;
        this.showItemRoute = this.additionalParameter['CEE_show_list_items_route'] ? this.additionalParameter['CEE_show_list_items_route'] : '#';
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
    }
    prepareLink(searchStr, replaceStr) {
        return this.showItemRoute.replaceAll(searchStr, replaceStr);
    }
    getDynamicIframe(data) {
        if (this.additionalParameter['iframe'] && this.additionalParameter['iframe'].includes('((dynamic))')) {
            const iframeLabel = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter['iframe'] }, data).field_label;
            if (this._iframeLabel !== iframeLabel) {
                this._iframeLabel = iframeLabel;
                this.iframeLabel = '';
                const _this = this;
                setTimeout(() => {
                    _this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(iframeLabel);
                }, 0);
            }
        }
    }
    onAPICallbackData(data) {
        const apiKey = this.fieldData.response_api_key.split('|')[0];
        const handlerData2 = this.apiDataService.getApiDataByHandler('getDealBorrowers'); //getDealBorrowers
        const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
        this.borrowerIdMap = new Map(); // Store borrower_id -> index
        if (handlerData2?.value) {
            Object.keys(handlerData2.value).forEach(key => {
                const match = key.match(/getDealBorrowers##data\[(\d+)\]\.borrower_id/);
                if (match) {
                    const index = parseInt(match[1]); // Extract index
                    const borrowerId = handlerData2.value[key]; // Get borrower_id value
                    this.borrowerIdMap.set(borrowerId, index);
                }
            });
        }
        // Transform the API response using getApiKeyValuePair()
        var apiKeyValue = this.getApiKeyValuePair(handlerData);
        this.dataSource.data = transformResponseToTree(apiKeyValue);
        const expandAllParam = this.fieldData.additional_parameters?.find(param => param.parameter_type === "CEE_ExpandAll");
        this.expandAll = expandAllParam ? expandAllParam.value.toLowerCase() === 'true' : false;
        setTimeout(() => {
            this.treeControl.dataNodes = this.dataSource.data;
            this.treeControl.expandAll();
            if (this.expandAll) {
                this.expandAllNodes();
            }
            else {
                this.collapseAllNodes();
            }
        }, 100);
    }
    onAPICallback(data) {
        this.onAPICallbackData(data);
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            let resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            resData = this.getDataFormattedValue(resData);
            this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
        }
        if (!this.rowData) { // if rowData is null
            data = this.flatUnflat.createNestedObject(data);
            this.getDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                if (!Array.isArray(resData) && this.additionalParameter['CEE_STRING_FORMAT']) {
                    resData = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], resData);
                }
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
        else {
            this.getDynamicLabel(data, true);
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.additionalParameter['Data Format']) {
                const formats = this.additionalParameter['Data Format'].split('||').map(str => str && str.trim());
                const transformType = formats[0] == "mask" ? "maskLabel" : formats[0];
                formats.shift();
                return this.setDynamicLabelUtil.returnFormattedValue(data, transformType, formats);
                // switch (formats[0].toLowerCase()) {
                //     case 'currency':
                //         return `${getCurrencySymbol(formats[1].trim(), 'narrow')}` +
                //             `${Number(data).toFixed(Number(formats[2].trim())).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                //     case 'time':
                //         return moment(Number(data)).format(formats[1].trim());
                //     case 'date':
                //         return moment(data).format(formats[1].trim());
                //     default:
                //         return data;
                // }
            }
        }
        catch (error) {
            console.error(`Something went wrong while transforming data !!!: ${error}`);
        }
        return data;
    }
    getDynamicLabel(data, useSecondaryApiKey = false) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            // substitutue repeatablePos and [*]
            let i = this.commonUtil.extractLastValue(this.fieldData.html_id, "-");
            let key = this.fieldData.field_label;
            if (key.includes('%repeatablePos%')) {
                key = key.replace('%repeatablePos%', (Number(i) + 1));
            }
            let unique_id = this.fieldData.html_id;
            key = this.commonUtil.findIndicesAndSubstituteStars(key, unique_id, "-");
            this.fieldData.field_label = key;
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data, useSecondaryApiKey);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    /**
     * function returns a map with possible value id to the value
     * @param values api response data
     */
    returnLabelsMapPossibleValues(values) {
        let data = values;
        for (const val of values) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                data = this.fieldData.possible_values.map(pv => {
                    if (this.commonUtil.getPossibleId(pv) == val) {
                        return this.commonUtil.getPossibleValue(pv);
                    }
                });
            }
        }
        return data;
    }
    onEmptySession(data) {
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
            this.fieldLabels = [get_data[unique_id_value]];
            // this.inputValue = get_data[unique_id_value];
            // this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    checkIfIframe(value) {
        if (value.includes('iframe')) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }
        else {
            return this.getDataFormattedValue(value);
        }
    }
    updateStateHistory(data) {
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
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                    }
                }
            }
            else {
                this.fieldLabels = [changes.rowData.currentValue.value];
            }
        }
    }
    onButtonClick(node) {
    }
    isMainParent(node) {
        return this.dataSource.data.some(parent => parent.name === node.name);
    }
    shouldShowEditButton(node) {
        const additionalParameters = this.fieldData.additional_parameters || [];
        const editOnFieldLevelParam = additionalParameters.find(param => param.parameter_type === "CEE_EditOnFieldLevel");
        let editOnFieldLevel = editOnFieldLevelParam ? editOnFieldLevelParam.value : "0";
        if (node.type === 'main_parent') {
            return false;
        }
        if (editOnFieldLevel === "1") {
            return node.type === 'child';
        }
        else {
            return node.type === 'parent';
        }
    }
    isFieldLavel(node) {
        const additionalParameters = this.fieldData.additional_parameters || [];
        const editOnFieldLevelParam = additionalParameters.find(param => param.parameter_type === "CEE_EditOnFieldLevel");
        let editOnFieldLevel = editOnFieldLevelParam ? editOnFieldLevelParam.value : "0"; // Default to 0 if not found
        if (editOnFieldLevel === "1") {
            return true;
        }
        else {
            return false;
        }
    }
    getFirstPathSegment(url) {
        const pathSegments = url.split('/').filter(segment => segment !== "");
        return pathSegments.length > 0 ? pathSegments[0] : "";
    }
    onEditClick(node) {
        let stepData = this.wfeStepLoaderService.stepData;
        let stepNameCurrent = stepData.step_name.replace(/\s+/g, '-').toLowerCase();
        var extractedPath;
        const apiKey = node.api_key;
        let customNode = JSON.parse(JSON.stringify(node));
        const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
        const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
        const hasUniquestepId = mappingEntry && !!mappingEntry.step_name;
        customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
        if (customNode.stepName == "") {
            customNode.stepName = hasUniquestepId ? mappingEntry.step_name : null;
        }
        if (apiKey) {
            localStorage.setItem('selectedApiKey', apiKey);
        }
        let stepName = customNode.stepName.replace(/_/g, "-");
        if (stepName == this.getFirstPathSegment(this.router.url)) {
            let stepReact = stepName == "deal-information" ? true : false;
            if (stepReact) {
                let customEvent = {
                    type: "error_actions",
                    data: customNode
                };
                this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            }
            else {
                this.scrollToView(customNode, stepReact);
            }
        }
        else {
            localStorage.setItem('borrowerIdMap', JSON.stringify(Object.fromEntries(this.borrowerIdMap)));
            localStorage.setItem('keyValueMap', JSON.stringify(Object.fromEntries(this.keyValueMap)));
            localStorage.setItem('isScroll', "true");
            const isFieldLevel = this.isFieldLavel(customNode);
            localStorage.setItem('isFieldLevel', '' + isFieldLevel);
            setTimeout(() => {
                if (this.route && this.route.snapshot && this.route.snapshot['_routerState']) {
                    const fullPath = this.route.snapshot['_routerState'].url || '';
                    // const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
                    // const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
                    // const hasUniquestepId = mappingEntry && !!mappingEntry.step_name;
                    // // const stepName = hasUniquestepId ? mappingEntry.step_name : '';
                    // let customNode: ITreeNode = JSON.parse(JSON.stringify(node));
                    // // node.blockName = hasUniqueId ? mappingEntry.unique_id : null;
                    // customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
                    // customNode.stepName = hasUniquestepId ? mappingEntry.step_name : null;
                    let customEvent = {
                        type: "error_actions",
                        data: customNode
                    };
                    localStorage.setItem('lender-data', JSON.stringify(customNode));
                    this.sharedEventsService.emitToreactEmitter.emit(customEvent);
                    if (fullPath) {
                        extractedPath = fullPath.replace(`/${stepNameCurrent}/`, `/${customNode.stepName}/`);
                    }
                }
                const newUrl = extractedPath;
                // const newUrl = `/${stepName}/${extractedPath}`;
                this.eventListHandler.redirectToHref(newUrl, null, "_self");
            }, 100);
        }
    }
    scrollWithRetryParent(elementId, borrowerIndex, retries = 30, delay = 3000) {
        if (!elementId)
            return;
        const fullId = `${elementId}$${borrowerIndex}`;
        const allElements = document.querySelectorAll('[id]');
        let target = null;
        allElements.forEach(el => {
            if (el.id.includes(fullId)) {
                target = el;
            }
        });
        if (target) {
            this.scrollToSection(target.id);
        }
        else if (retries > 0) {
            setTimeout(() => this.scrollWithRetryParent(elementId, borrowerIndex, retries - 1, delay), delay);
        }
        else {
            console.error(`Element containing "${fullId}" not found after multiple retries.`);
        }
    }
    scrollWithRetry(elementId, retries = 30, delay = 3000) {
        if (!elementId)
            return;
        const target = document.getElementById(elementId);
        if (target) {
            this.scrollToSection(elementId);
        }
        else if (retries > 0) {
            console.warn(`⏳ Waiting for element "${elementId}" to appear. Retries left: ${retries}`);
            setTimeout(() => this.scrollWithRetry(elementId, retries - 1, delay), delay);
        }
    }
    scrollToReactSection(blockName) {
        if (!blockName)
            return;
        const targetElement = document.querySelector("." + blockName);
        ;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
    }
    scrollToView(customNode, isReact = false) {
        let finalScrollTarget = null;
        let mainParentName = customNode.borrower_id || "";
        let borrowerIndex = null;
        const isFieldLevel = this.isFieldLavel(customNode);
        const hasBorrowerId = !!customNode.borrower_id;
        if (isReact) {
            // let customNode: ITreeNode = JSON.parse(JSON.stringify(node));
            // if (!hasBorrowerId && isFieldLevel) {
            //     // const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key):this.responseResult.find(entry => entry.response_value === node.blockName);
            //     // const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
            //     // customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
            //     let customEvent = {
            //         type : "error_actions",
            //         data : customNode
            //     }
            //     // this.scrollToReactSection(customNode.blockName);
            //     this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            // } else if (hasBorrowerId && isFieldLevel) {
            //     const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
            //     const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
            //     customNode.blockName = hasUniqueId ? `${mappingEntry.unique_id}-${mainParentName}` : null;
            //     let customEvent = {
            //         type : "error_actions",
            //         data : customNode
            //     }
            //     this.scrollToReactSection(customNode.blockName);
            //     this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            // } else {
            //     if (mainParentName) {
            //         if (this.keyValueMap.has(customNode.blockName)) {
            //             let mappedValue = this.keyValueMap.get(customNode.blockName);
            //             finalScrollTarget = `${mappedValue}-${mainParentName}`;
            //             if (finalScrollTarget) {
            //                 customNode.blockName = mappedValue;
            //                 let customEvent = {
            //                     type : "error_actions",
            //                     data : customNode
            //                 }
            //                 this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            //                 this.scrollToReactSection(finalScrollTarget);
            //                 return;
            //             }
            //         }
            //     }
            //     if (!finalScrollTarget) {
            //         if (customNode.blockName && this.keyValueMap.has(customNode.blockName)) {
            //             finalScrollTarget = this.keyValueMap.get(customNode.blockName);
            //             if (finalScrollTarget) {
            //                 customNode.blockName = finalScrollTarget;
            //                 let customEvent = {
            //                     type : "error_actions",
            //                     data : customNode
            //                 }
            //                 this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            //                 this.scrollToReactSection(finalScrollTarget);
            //                 return;
            //             }
            //         }
            //     }
            // }
        }
        else {
            if (!hasBorrowerId && isFieldLevel) {
                const mappingEntry = this.responseResult.find(entry => entry.response_value === customNode.api_key);
                const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                if (hasParentId) {
                    this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                        const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                        if (targetField) {
                            const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                            const defaultValue = defaultParam?.value;
                            if (defaultValue) {
                                borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                this.loadBlockAndScrollToField(defaultValue, customNode.api_key, true, borrowerIndex);
                            }
                        }
                    });
                    return;
                }
                else {
                    const sectionsToOpen = [mappingEntry.unique_id]; // Dynamically use parent_id
                    this.accordionService.openMultipleSections(sectionsToOpen);
                    this.loadBlockAndScrollToField(mappingEntry.unique_id, customNode.api_key, false, 0);
                    return;
                }
            }
            else if (hasBorrowerId && isFieldLevel) {
                const mappingEntry = this.responseResult.find(entry => entry.response_value === customNode.api_key);
                const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                if (hasParentId) {
                    this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                        const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                        if (targetField) {
                            const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                            const defaultValue = defaultParam?.value;
                            if (defaultValue) {
                                borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                this.loadBlockAndScrollToField(defaultValue, customNode.api_key, true, borrowerIndex);
                            }
                        }
                    });
                    return;
                }
            }
            else {
                if (mainParentName && this.borrowerIdMap.has(mainParentName)) {
                    borrowerIndex = this.borrowerIdMap.get(mainParentName);
                    if (this.keyValueMap.has(customNode.blockName)) {
                        let mappedValue = this.keyValueMap.get(customNode.blockName);
                        finalScrollTarget = `${mappedValue}-${borrowerIndex}`;
                    }
                    if (finalScrollTarget) {
                        this.scrollToSection(finalScrollTarget);
                        return;
                    }
                }
                if (!finalScrollTarget) {
                    if (customNode.blockName && this.keyValueMap.has(customNode.blockName)) {
                        finalScrollTarget = this.keyValueMap.get(customNode.blockName);
                        if (finalScrollTarget) {
                            this.scrollToSection(finalScrollTarget);
                            return;
                        }
                    }
                }
            }
        }
    }
    loadBlockAndScrollToField(uniqueId, apiKey, isFieldLevelWithParent, borrowerIndex) {
        this.wfeStepLoaderService.loadBlockByName(uniqueId).subscribe((blockData) => {
            let loadedBlock = blockData;
            const targetField = loadedBlock?.block_fields?.find(field => field.api_key === apiKey);
            if (targetField) {
                const scrollTargetId = targetField.unique_id;
                if (isFieldLevelWithParent) {
                    this.scrollWithRetryParent(scrollTargetId, borrowerIndex);
                }
                else {
                    this.scrollWithRetry(scrollTargetId);
                }
            }
        }, (error) => {
        });
    }
    getMainParentName(node) {
        let parentNode = node;
        while (parentNode && parentNode.type !== 'main_parent') {
            parentNode = this.findParentNode(parentNode);
        }
        return parentNode ? parentNode.name : null;
    }
    findParentNode(node) {
        return this.treeControl.dataNodes.find(parent => parent.children && parent.children.includes(node)) || null;
    }
    expandAllNodes() {
        this.treeControl.dataNodes?.forEach(node => {
            this.treeControl.expand(node);
        });
    }
    collapseAllNodes() {
        this.treeControl.dataNodes?.forEach(node => {
            this.treeControl.collapse(node);
        });
    }
    onKeydown(event) {
        if (!this.treeControl)
            return;
        const focusedNode = document.activeElement?.closest('.mat-tree-node');
        if (!focusedNode)
            return;
        // Find the corresponding node from the tree data
        const node = this.treeControl.dataNodes.find(n => focusedNode.textContent?.includes(n.name));
        if (!node)
            return;
        if (event.key === 'ArrowRight') {
            this.expandAllChildren(node);
        }
        else if (event.key === 'ArrowLeft') {
            this.collapseAllChildren(node);
        }
    }
    onNodeClick(node, event) {
        if (!this.hasChild(0, node))
            return;
        if (event) {
            event.stopPropagation();
        }
        if (this.treeControl.isExpanded(node)) {
            this.collapseAllChildren(node);
        }
        else {
            this.expandAllChildren(node);
        }
        this.cdRef.detectChanges();
    }
    collapseAllChildren(node) {
        this.treeControl.collapse(node); // Collapse the parent first
        if (node.children) {
            node.children.forEach(child => {
                this.treeControl.collapse(child); // Collapse each child
                this.collapseAllChildren(child); // Recursively collapse all children
            });
        }
        this.cdRef.detectChanges();
    }
    expandAllChildren(node) {
        this.treeControl.expand(node);
        if (node.children) {
            node.children.forEach(child => {
                this.treeControl.expand(child); // Expand each child
                this.expandAllChildren(child); // Recursively expand all children
            });
        }
        this.cdRef.detectChanges();
    }
    scrollToSections(item, i) {
        if (item.attchedmenuClass) {
            const menuElement = document.querySelector("." + item.attchedmenuClass);
            if (menuElement) {
                const errorField = this.renderer.selectRootElement("." + item.attchedmenuClass, true);
                if (errorField) {
                    errorField.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                }
            }
            else {
                let attachtoStepParts = item.attachtoStep.split('#');
                if (attachtoStepParts.length > 1) {
                    let part = attachtoStepParts[1];
                    if (part && part.indexOf('{{i}}') !== -1) {
                        part = part.replace('{{i}}', i - 1);
                        const errorField = this.renderer.selectRootElement("." + part, true);
                        if (errorField) {
                            errorField.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                        }
                    }
                }
            }
        }
    }
    scrollToSection(blockName) {
        if (!blockName)
            return;
        const targetElement = document.getElementById(blockName);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
    }
    ensureElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isVisible) {
            setTimeout(() => this.ensureElementVisible(element), 200);
        }
        else {
            if (element instanceof HTMLInputElement && !element.disabled) {
                element.focus();
            }
            this.selectView(element);
        }
    }
    selectView(element) {
        if (element instanceof HTMLInputElement && !element.disabled) {
            element.focus();
        }
        element.classList.add("highlighted");
        this.cdRef.detectChanges();
        setTimeout(() => {
            element.classList.remove("highlighted");
            this.cdRef.detectChanges();
        }, 2000);
    }
    getApiKeyValuePair(apiDatas) {
        let mainObject = {};
        if (apiDatas && apiDatas.value) {
            Object.keys(apiDatas.value).forEach(key => {
                if (key === "handler_name")
                    return;
                // Split the key by ##
                const keyParts = key.split('##');
                if (keyParts.length < 2)
                    return;
                // Extract root object and nested path
                const rootKey = keyParts[0];
                let nestedPath = keyParts[1];
                nestedPath = nestedPath.replace(/^response\./, '');
                const pathParts = nestedPath.split('.');
                let currentObj = mainObject;
                for (let i = 0; i < pathParts.length; i++) {
                    let part = pathParts[i];
                    const arrayMatch = part.match(/(\w+)\[(\d+)\]/);
                    if (arrayMatch) {
                        const arrayKey = arrayMatch[1];
                        const arrayIndex = parseInt(arrayMatch[2]);
                        if (!currentObj[arrayKey]) {
                            currentObj[arrayKey] = [];
                        }
                        if (!currentObj[arrayKey][arrayIndex]) {
                            currentObj[arrayKey][arrayIndex] = {};
                        }
                        currentObj = currentObj[arrayKey][arrayIndex];
                    }
                    else {
                        if (!currentObj[part]) {
                            currentObj[part] = (i === pathParts.length - 1) ? apiDatas.value[key] : {};
                        }
                        currentObj = currentObj[part];
                    }
                }
            });
        }
        return mainObject;
    }
    getFieldUniqueIdByApiKey(blockName, apiKey) {
        this.wfeStepLoaderService.loadBlockByName(blockName).subscribe((blockData) => {
            //console.log("Loaded Block Data: ", blockData);
            let loadedBlockData = blockData;
            // Search for the field with the matching api_key
            const field = loadedBlockData?.block_fields?.find((field) => field.api_key === apiKey);
        });
    }
    static ɵfac = function CeeApiValidationComponent_Factory(t) { return new (t || CeeApiValidationComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(AccordionService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(WFEEventListHandler), i0.ɵɵdirectiveInject(i11.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeApiValidationComponent, selectors: [["app-cee-api-validation"]], hostBindings: function CeeApiValidationComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function CeeApiValidationComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "example-tree", 3, "dataSource", "treeControl"], ["class", "tree-leaf-node", 4, "matTreeNodeDef"], ["class", "tree-parent-node", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [1, "tree-leaf-node"], [1, "mat-tree-node", "leaf-node"], ["mat-icon-button", "", "disabled", "", 1, "leaf-icon-button"], ["class", "error-indicator error-indicator-leaf", 3, "ngClass", 4, "ngIf"], [1, "leaf-text"], ["class", "api-validation-label api-label-error", 4, "ngIf"], ["class", "api-validation-label api-label-warning", 4, "ngIf"], ["mat-icon-button", "", "class", "edit-button-leaf", 3, "click", 4, "ngIf"], [1, "error-indicator", "error-indicator-leaf", 3, "ngClass"], [1, "api-validation-label", "api-label-error"], [1, "api-validation-label", "api-label-warning"], ["mat-icon-button", "", 1, "edit-button-leaf", 3, "click"], [1, "tree-parent-node"], [1, "parent-node"], [1, "mat-tree-node", "parent-content", 3, "click"], [1, "parent-text"], ["mat-icon-button", "", "class", "edit-button-parent", 3, "click", 4, "ngIf"], [1, "parent-children"], ["matTreeNodeOutlet", ""], ["mat-icon-button", "", 1, "edit-button-parent", 3, "click"]], template: function CeeApiValidationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeApiValidationComponent_div_0_Template, 4, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i13.NgClass, i13.NgIf, TooltipModule, MatMenuModule, MatTreeModule, i5.MatNestedTreeNode, i5.MatTreeNodeDef, i5.MatTree, i5.MatTreeNode, i5.MatTreeNodeOutlet, MatButtonModule, i17.MatIconButton, MatIconModule, i15.MatIcon], styles: [".leaf-node[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px}.error-indicator-leaf[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;margin-right:8px}.leaf-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-right:5px}.edit-button-leaf[_ngcontent-%COMP%]{margin-left:5px}.parent-node[_ngcontent-%COMP%]{list-style:none}.parent-content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px;cursor:pointer}.parent-text[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:5px}.edit-button-parent[_ngcontent-%COMP%]{margin-left:5px}.parent-children[_ngcontent-%COMP%]{margin-left:20px}.error-indicator[_ngcontent-%COMP%]{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px}.error-circle[_ngcontent-%COMP%]{background-color:red}.warning-circle[_ngcontent-%COMP%]{background-color:orange}.api-validation-error-text[_ngcontent-%COMP%]{color:red;font-weight:700}.api-validation-warning-text[_ngcontent-%COMP%]{color:orange;font-weight:700}.api-validation-label[_ngcontent-%COMP%]{display:inline-block;padding:2px 6px;font-size:11px;font-weight:600;border-radius:4px;margin-left:6px;text-transform:uppercase}.api-label-error[_ngcontent-%COMP%]{background-color:#f8d7da;color:#721c24}.api-label-warning[_ngcontent-%COMP%]{background-color:#fff3cd;color:#856404}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeApiValidationComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-api-validation', standalone: true, imports: [MatTooltipModule, CommonModule, TooltipModule, MatMenuModule, HighlightPipe, MatTreeModule, MatButtonModule, MatIconModule], template: "<div *ngIf=\"isVisible\">\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- Leaf node template (No children) -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" class=\"tree-leaf-node\">\r\n        <li class=\"mat-tree-node leaf-node\">\r\n            <button mat-icon-button disabled class=\"leaf-icon-button\"></button>\r\n\r\n            <!-- Show solid circle before child nodes -->\r\n            <span *ngIf=\"node.type === 'child'\" \r\n                  class=\"error-indicator error-indicator-leaf\" \r\n                  [ngClass]=\"{'error-circle': node.errorType === 'error', 'warning-circle': node.errorType === 'warning'}\">\r\n            </span>\r\n\r\n            <span class=\"leaf-text\">\r\n                {{ node.name }}\r\n                <span *ngIf=\"node.errorType === 'error'\" class=\"api-validation-label api-label-error\">(error)</span>\r\n                <span *ngIf=\"node.errorType === 'warning'\" class=\"api-validation-label api-label-warning\">(warning)</span>\r\n              </span>\r\n            <button *ngIf=\"shouldShowEditButton(node)\" mat-icon-button (click)=\"onEditClick(node)\" class=\"edit-button-leaf\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button>\r\n        </li>\r\n    </mat-tree-node>\r\n\r\n    <!-- Expandable node template (Parent with children) -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" class=\"tree-parent-node\">\r\n        <li class=\"parent-node\">\r\n            <div class=\"mat-tree-node parent-content\" (click)=\"onNodeClick(node, $event)\">\r\n                <!-- Removed the arrow button -->\r\n                <span class=\"parent-text\">{{ node.name }}</span>\r\n                <button *ngIf=\"shouldShowEditButton(node)\" mat-icon-button (click)=\"onEditClick(node)\" class=\"edit-button-parent\">\r\n                    <mat-icon>edit</mat-icon>\r\n                </button>\r\n            </div>\r\n            <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\" class=\"parent-children\">\r\n                <ng-container matTreeNodeOutlet></ng-container>\r\n            </ul>\r\n        </li>\r\n    </mat-nested-tree-node>\r\n</mat-tree>\r\n</div>", styles: [".leaf-node{display:flex;align-items:center;padding:5px}.error-indicator-leaf{width:12px;height:12px;border-radius:50%;margin-right:8px}.leaf-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-right:5px}.edit-button-leaf{margin-left:5px}.parent-node{list-style:none}.parent-content{display:flex;align-items:center;padding:5px;cursor:pointer}.parent-text{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:5px}.edit-button-parent{margin-left:5px}.parent-children{margin-left:20px}.error-indicator{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px}.error-circle{background-color:red}.warning-circle{background-color:orange}.api-validation-error-text{color:red;font-weight:700}.api-validation-warning-text{color:orange;font-weight:700}.api-validation-label{display:inline-block;padding:2px 6px;font-size:11px;font-weight:600;border-radius:4px;margin-left:6px;text-transform:uppercase}.api-label-error{background-color:#f8d7da;color:#721c24}.api-label-warning{background-color:#fff3cd;color:#856404}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: AccordionService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: WFEEventListHandler }, { type: i11.ActivatedRoute }], { stepId: [{
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
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeApiValidationComponent, { className: "CeeApiValidationComponent", filePath: "lib\\field-components\\cee-api-validation\\cee-api-validation.component.ts", lineNumber: 99 }); })();

export { CeeApiValidationComponent };
//# sourceMappingURL=ng-cee-core-cee-api-validation.component-BNoK7ukE.mjs.map
