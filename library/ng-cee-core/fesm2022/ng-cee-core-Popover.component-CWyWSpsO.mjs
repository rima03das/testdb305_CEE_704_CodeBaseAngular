import * as i0 from '@angular/core';
import { forwardRef, Component, HostListener, Input, ViewChild } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i13 from '@angular/common';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { C as ConditionalUtil, a as CommonUtil, G as GenerateFieldRow, D as DynamicLabelUtil, e as AppDataService, f as ApiDataService, c as SharedEventsServiceService, g as WfeStepLoaderService, V as ViewRendererComponent, B as BlockRendererComponent, P as ProgressBarRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { defer } from 'rxjs';
import * as i1 from '@angular/cdk/overlay';
import * as i9 from '@angular/common/http';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
import '@angular/router';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import '@angular/material/dialog';
import 'ngx-image-zoom';
import '@angular/platform-browser';
import 'moment-timezone';
import '@angular/material/snack-bar';
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

const _c0 = ["triggerBtn"];
const _c1 = ["overlayTemplate"];
const _c2 = ["floatingBox"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, fieldData: a2, metaFields: a3, keepState: true, rowData: a4, mandatoryCondition: a5, editableCondition: a6, visibleCondition: a7 });
function SelectComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4, 2);
    i0.ɵɵlistener("click", function SelectComponent_ng_container_0_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleOverlay()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
    i0.ɵɵproperty("innerHTML", ctx_r1.processedDynamicHTML, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("role", "button")("tabindex", "0");
} }
function SelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5, 2);
    i0.ɵɵlistener("click", function SelectComponent_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleOverlay()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fieldName);
} }
function SelectComponent_ng_template_3_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData.block_id, "-", pos_r5, " ", field_r4.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r4)("position", pos_r5)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r4))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function SelectComponent_ng_template_3_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_2_section_1_ng_container_1_Template, 2, 13, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.blockRenderedData.block_style && ctx_r1.blockRenderedData.block_style.custom_class_name && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function SelectComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_2_section_1_Template, 2, 13, "section", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData && ctx_r1.isVisible);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const pos_r7 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId, "-", pos_r7, " ", field_r6.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r6.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r6)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r6)("position", pos_r7)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r6))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_1_Template, 2, 13, "ng-container", 10);
    i0.ɵɵelementStart(2, "div")(3, "div");
    i0.ɵɵtemplate(4, SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 13);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? ctx_r1.fieldData.field_style.bootstrap_class_name : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_fields.length : 0, " ", ctx_r1.is_bootstrap ? ctx_r1.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(5, 11, ctx_r1.componentMap))("ngComponentOutletInputs", i0.ɵɵpureFunction8(13, _c3, ctx_r1.stepId, ctx_r1.rootData, ctx_r1.attachmentFieldData, ctx_r1.attachmentBlockField, ctx_r1.generateRowData(ctx_r1.attachmentFieldData), ctx_r1.mandatoryCondition, ctx_r1.editableCondition, ctx_r1.visibleCondition));
} }
function SelectComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 12);
    i0.ɵɵtemplate(2, SelectComponent_ng_template_3_ng_container_3_ng_container_2_Template, 6, 22, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate6("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId, "  block-", ctx_r1.blockPosition, " ", ctx_r1.blockRenderedData && ctx_r1.blockRenderedData.block_style && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData);
} }
function SelectComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 12);
    i0.ɵɵelement(2, "app-block-renderer", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("sub-menu-container ", ctx_r1.additionalParameter["displayPosition"] || "left", "");
    i0.ɵɵpropertyInterpolate1("id", "navblock-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("hamburgermenu hamburgermenu-", ctx_r1.blockRenderedData.block_id, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.blockRenderedData)("rootData", ctx_r1.rootData);
} }
function SelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 6);
    i0.ɵɵtemplate(2, SelectComponent_ng_template_3_ng_container_2_Template, 2, 1, "ng-container", 7)(3, SelectComponent_ng_template_3_ng_container_3_Template, 3, 12, "ng-container", 7)(4, SelectComponent_ng_template_3_ng_container_4_Template, 3, 14, "ng-container", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.fieldData.field_style.custom_class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isAttachmentBlock && !ctx_r1.isHamburgerMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAttachmentBlock && !ctx_r1.isHamburgerMenu && ctx_r1.attachmentFieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isAttachmentBlock && ctx_r1.isHamburgerMenu);
} }
class SelectComponent {
    overlay;
    positionBuilder;
    vcr;
    http;
    appDataService;
    apiDataService;
    sharedEventsServiceService;
    wfeStepLoaderService;
    cdRef;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    triggerBtn;
    overlayTemplate;
    stepId;
    fieldData;
    templateId;
    blockPosition;
    rootData;
    isAttachmentBlock;
    visibleCondition;
    editableCondition;
    mandatoryCondition;
    floatingBox;
    keepState = false;
    rowData;
    isOpen = true;
    conditionalUtil;
    overlayRef;
    isVisible;
    fieldName;
    commonUtil;
    generateUtil;
    is_bootstrap;
    variableObj = {};
    additionalParameter = {};
    blockId;
    skipLoader;
    setDynamicLabelUtil;
    appData = {
        id: '',
        stepId: '',
        apiKey: 'Generic Block',
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
    blockRenderedData;
    conditionObj = {};
    isEditable = false;
    isMandatory = false;
    //rowData = {};  
    progressBlock = {};
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isHamburgerMenu = false;
    processedDynamicHTML = '';
    componentMap = defer(() => {
        return import('./ng-cee-core-cee-attachments.component-DaZytsS9.mjs').then(m => m.CeeAttachmentsComponent);
    });
    constructor(overlay, positionBuilder, vcr, http, appDataService, apiDataService, sharedEventsServiceService, wfeStepLoaderService, cdRef) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.vcr = vcr;
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.cdRef = cdRef;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        if (!this.isAttachmentBlock) {
            this.editableCondition = {
                value: false,
                fields: [],
                exceptionFields: [],
                isActive: false,
                override: false,
                overrideAll: false
            };
            this.mandatoryCondition = {
                value: false,
                fields: [],
                exceptionFields: [],
                isActive: false,
                override: false,
                overrideAll: false
            };
        }
    }
    ngOnInit() {
        // console.log('root data', this.rootData);
        this.stepId, this.fieldData, this.keepState, this.rowData;
        this.initializeDynamicContent();
        //this.processedDynamicHTML = this.fieldData?.field_label || this.fieldData?.field_label_config || '';
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        // this.rowData = { mandatory: this.isMandatory, editable: this.isEditable };
        if (this.fieldData.is_display === 2 || this.fieldData.is_display === 1) {
            const emitObj = {
                apiKey: this.fieldData.unique_id,
                value: ''
            };
            this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
            this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.onFieldDataUpdated(res.apiKey, res.value);
                });
            this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe((res) => {
                    this.onFieldDataUpdated(null, null);
                });
        }
        this.fieldName = this.fieldData?.field_label;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
                switch (paramter.parameter_type) {
                    case 'default_value':
                        this.blockId = paramter.value;
                        break;
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                }
            }
            if (this.blockId) {
                if (this.isVisible === true) {
                    this.renderBolckData();
                }
                if (this.isAttachmentBlock) {
                    this.attachmentFieldData = Object.assign({
                        isAttachmentBlock: true
                    }, this.fieldData);
                    this.attachmentFieldData.field_type = 'Attachments';
                    //   this.attachmentFieldData.unique_id = 'attachment_field_' + this.blockRenderedData.block_id;
                    this.attachmentFieldData.additional_parameters.splice(this.attachmentFieldData.additional_parameters.findIndex(i => i.parameter_type === 'default_value'), 1);
                }
            }
            // set progress bar
            this.setProgressBlockRenderer();
            if (this.fieldData.is_display === 2) {
                const emitObj = {
                    apiKey: this.fieldData.unique_id,
                    value: ''
                };
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
            }
        }
        if (this.fieldData.field_type != "Attachment Block") {
            this.appData = {
                id: this.fieldData.unique_id,
                stepId: this.stepId,
                apiKey: 'Generic Block',
                linkedBlockId: this.fieldData.additional_parameters.filter(e => e.parameter_type === "default_value").length > 0 ? this.fieldData.additional_parameters.filter(e => e.parameter_type === "default_value")[0]['value'] : '',
                isRepeatedField: false,
                repeatedBlockFieldId: '',
                requestApiKey: [],
                responseApiKey: [],
                dataFormatSeparator: '',
                mandatory: this.isMandatory,
                editable: this.isEditable,
                visible: this.isVisible,
                value: '',
                isValid: true
            };
            this.appDataService.addAppData(this.appData);
        }
    }
    initializeDynamicContent() {
        if (this.fieldData?.field_label?.includes('((dynamic))') ||
            this.fieldData?.field_label_config?.includes('((dynamic))')) {
            const data = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
            let processedHTML = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data).field_label;
            // Handle blank image sources
            processedHTML = this.handleBlankImageSources(processedHTML);
            this.processedDynamicHTML = processedHTML;
        }
    }
    handleBlankImageSources(html) {
        // Default fallback image URL
        let defaultImageUrl = 'assets/images/marker.png';
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
                switch (paramter.parameter_type) {
                    case 'CEE_Popover_Img':
                        defaultImageUrl = paramter.value;
                        break;
                }
            }
        }
        // Handle img tags with empty or blank src attributes
        return html.replace(/<img([^>]*?)src=['"]([^'"]*?)['"]([^>]*?)>/gi, (match, beforeSrc, srcValue, afterSrc) => {
            // Check if src is empty, blank, or just whitespace
            const trimmedSrc = srcValue.trim();
            if (!trimmedSrc || trimmedSrc === '' || trimmedSrc === 'undefined' || trimmedSrc === 'null') {
                // Replace with default image URL
                return `<img${beforeSrc}src="${defaultImageUrl}"${afterSrc}>`;
            }
            // Keep original if src has value
            return match;
        });
    }
    trackById(index, item) {
        return item.unique_id;
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.isVisible === true) {
                this.renderBolckData();
            }
        }
        this.initializeDynamicContent();
    }
    renderBolckData() {
        if (window['blockLogs'] === undefined) {
            window['blockLogs'] = [];
            window['blockDataLogs'] = [];
        }
        if (window['blockLogs'] && window['blockLogs'].indexOf(this.blockId) === -1) {
            window['blockLogs'].push(this.blockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.blockId).subscribe((data) => {
                window['blockDataLogs'].push({ blockId: this.blockId, blockData: data });
                this.processBlockData(data);
            });
        }
        else if (window['blockDataLogs']) {
            let blockData = window['blockDataLogs'].filter(e => { if (e.blockId == this.blockId)
                return e.blockData; }).length > 0 ? window['blockDataLogs'].filter(e => { if (e.blockId == this.blockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processBlockData(blockData);
            }
        }
    }
    processBlockData(data) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        if (this.blockRenderedData.block_name.toLowerCase() === 'hamburgermenu') {
            this.isHamburgerMenu = true;
        }
        if (this.blockRenderedData.additional_parameters && this.blockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.blockRenderedData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.mandatoryCondition.fields = fields;
                            this.editableCondition.fields = fields;
                            // this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.mandatoryCondition.exceptionFields = fields;
                        this.editableCondition.exceptionFields = fields;
                        // this.visibleCondition.exceptionFields = fields;
                        break;
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) ||
            (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) ||
            (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0)) {
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdatedForGenericBlock'] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.blockRenderedData['custom_class_condition'] && this.blockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.blockRenderedData['custom_class_condition']['query'] != '') {
            this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.setFieldValueOnSetValuesEvent(res.value);
                });
        }
        /* if (this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        } */
        if (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) {
            this.editableCondition.isActive = true;
        }
        if (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0) {
            this.mandatoryCondition.isActive = true;
        }
        this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
        for (let field of this.blockRenderedData.block_fields) {
            this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
        }
        if (this.isAttachmentBlock) {
            this.isAttachmentBlock = this.blockRenderedData.block_fields;
        }
        this.cdRef.detectChanges();
    }
    setProgressBlockRenderer() {
        let currStep = this.stepId;
        if (this.navigateStepName && this.stepId.includes('-')) {
            const data = currStep.split('-');
            currStep = data[data.length - 1];
        }
        const workflowSequenceIndex = this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep);
        if (!workflowSequenceIndex) {
            return false;
        }
        const progressData = this.wfeStepLoaderService.progressBarMap[workflowSequenceIndex.sequence] || {};
        if (progressData.progress && this.additionalParameter['ProgressBlockId']) {
            if (progressData.progress.progress_bar_id === this.additionalParameter['ProgressBlockId']) {
                this.progressBlock = progressData;
            }
        }
    }
    onFieldDataUpdatedForGenericBlock(fieldId, value) {
        if (this.additionalParameter['OverrideConditions'] !== 'NONE') {
            /* const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined && this.isFieldDisplay === false) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            } */
            const editable = this.conditionalUtil.checkEditable(this.blockRenderedData, fieldId, value);
            if (editable !== undefined) {
                this.editableCondition.value = editable;
                this.setOverride(editable, 'editableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.blockRenderedData, fieldId, value);
            if (mandatory !== undefined) {
                this.mandatoryCondition.value = mandatory;
                this.setOverride(mandatory, 'mandatoryCondition');
            }
            // this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.editableCondition = JSON.parse(JSON.stringify(this.editableCondition));
            this.mandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        }
    }
    setOverride(editable, arg1) {
        throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    toggleOverlay() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef = null;
            return;
        }
        const positionStrategy = this.positionBuilder
            .flexibleConnectedTo(this.triggerBtn)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 5,
            },
        ])
            .withFlexibleDimensions(false)
            .withPush(false);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        const portal = new TemplatePortal(this.overlayTemplate, this.vcr);
        this.overlayRef.attach(portal);
        this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    }
    closeOverlay() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    onWindowScroll() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
    static ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["app-SelectComponent"]], viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.triggerBtn = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.floatingBox = _t.first);
        } }, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function SelectComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [["notDynamic", ""], ["overlayTemplate", ""], ["triggerBtn", ""], [4, "ngIf", "ngIfElse"], [2, "cursor", "pointer", 3, "click", "innerHTML"], [3, "click"], [1, "container"], [4, "ngIf"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"], [3, "id"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "templateId", "blockId", "rootData"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_ng_container_0_Template, 3, 6, "ng-container", 3)(1, SelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, SelectComponent_ng_template_3_Template, 5, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const notDynamic_r8 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.fieldData.field_label.includes("((dynamic))") || ctx.fieldData.field_label_config && ctx.fieldData.field_label_config.includes("((dynamic))"))("ngIfElse", notDynamic_r8);
        } }, dependencies: () => [CommonModule, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.AsyncPipe, FormsModule, ViewRendererComponent, BlockRendererComponent], styles: [".container[_ngcontent-%COMP%]{display:flex}.column[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:column;gap:8px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{ selector: 'app-SelectComponent', standalone: true, imports: [CommonModule, FormsModule, ProgressBarRendererComponent, NgIf, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<!-- <button class=\"{{fieldData.field_style.custom_class_name}}-btn\" #triggerBtn (click)=\"toggleOverlay()\">{{fieldName}}</button> -->\r\n<ng-container\r\n    *ngIf=\"fieldData.field_label.includes('((dynamic))') || (fieldData.field_label_config && fieldData.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n    <div class=\"{{fieldData.field_style.custom_class_name}}-btn\"\r\n        [innerHTML]=\"processedDynamicHTML\"\r\n         #triggerBtn\r\n        (click)=\"toggleOverlay()\"\r\n        [attr.role]=\"'button'\"\r\n        [attr.tabindex]=\"'0'\"\r\n        style=\"cursor: pointer;\"\r\n        >\r\n    </div>\r\n</ng-container>\r\n<ng-template #notDynamic>\r\n    <button class=\"{{fieldData.field_style.custom_class_name}}-btn\" #triggerBtn\r\n        (click)=\"toggleOverlay()\">{{fieldName}}</button>\r\n</ng-template>\r\n<ng-template #overlayTemplate> \r\n  <div class=\"{{fieldData.field_style.custom_class_name}}\">\r\n    <div class=\"container\">\r\n      <!-- show normal block -->\r\n\r\n<!-- HTML FOR ALL GENERIC BLOCK -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && !isHamburgerMenu\">\r\n  <section id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n      *ngIf=\"blockRenderedData  && isVisible\" [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n      <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n          <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n              [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n          </app-view-renderer>\r\n      </ng-container>\r\n\r\n  </section>\r\n\r\n</ng-container>\r\n<ng-container *ngIf=\"isAttachmentBlock && !isHamburgerMenu && attachmentFieldData\">\r\n  <section id=\"{{ blockRenderedData? blockRenderedData.block_id: blockId }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData? blockRenderedData.block_id: blockId }}  block-{{blockPosition}} {{(blockRenderedData && blockRenderedData.block_style && customClassCondition)?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\">\r\n\r\n      <ng-container *ngIf=\"blockRenderedData\">\r\n\r\n          <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n              <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData? blockRenderedData.block_id: blockId }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                  [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n              </app-view-renderer>\r\n          </ng-container>\r\n\r\n\r\n          <div class=\"{{is_bootstrap?fieldData.field_style.bootstrap_class_name:'col-12'}}\">\r\n              <div class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\">\r\n                  <ng-container *ngComponentOutlet=\"componentMap | async; \r\n                  inputs: {stepId: stepId, rootData: rootData, fieldData: attachmentFieldData, metaFields: attachmentBlockField, keepState: true, \r\n                      rowData: generateRowData(attachmentFieldData), mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                  ></ng-container>\r\n              </div>\r\n              <!-- <app-cee-attachments [stepId]=\"stepId\" [fieldData]=\"attachmentFieldData\" [metaFields]=\"attachmentBlockField\" [rootData]=\"rootData\" [keepState]=\"true\" class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\"\r\n                  [rowData]=\"generateRowData(attachmentFieldData)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n              </app-cee-attachments> -->\r\n          </div>\r\n      </ng-container>\r\n  </section>\r\n</ng-container>\r\n      <!-- HTML FOR Hamburger Menu -->\r\n      <ng-container *ngIf=\"!isAttachmentBlock && isHamburgerMenu\">\r\n        <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n        [attr.role]=\"additionalParameter['Aria-Role']\" id=\"navblock-{{fieldData.unique_id}}\"\r\n        class=\"sub-menu-container {{additionalParameter['displayPosition']||'left'}}\">\r\n        <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"blockRenderedData\"\r\n            class=\"hamburgermenu hamburgermenu-{{blockRenderedData.block_id}}\"\r\n            [rootData]=\"rootData\">\r\n        </app-block-renderer>\r\n    </section>\r\n    </ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>", styles: [".container{display:flex}.column{padding:10px;display:flex;flex-direction:column;gap:8px}\n"] }]
    }], () => [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ViewContainerRef }, { type: i9.HttpClient }, { type: AppDataService }, { type: ApiDataService }, { type: SharedEventsServiceService }, { type: WfeStepLoaderService }, { type: i0.ChangeDetectorRef }], { triggerBtn: [{
            type: ViewChild,
            args: ['triggerBtn']
        }], overlayTemplate: [{
            type: ViewChild,
            args: ['overlayTemplate']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], isAttachmentBlock: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], floatingBox: [{
            type: ViewChild,
            args: ['floatingBox']
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "lib\\components\\Popover\\Popover.component.ts", lineNumber: 40 }); })();
function orwardRef(arg0) {
    throw new Error('Function not implemented.');
}

export { SelectComponent };
//# sourceMappingURL=ng-cee-core-Popover.component-CWyWSpsO.mjs.map
