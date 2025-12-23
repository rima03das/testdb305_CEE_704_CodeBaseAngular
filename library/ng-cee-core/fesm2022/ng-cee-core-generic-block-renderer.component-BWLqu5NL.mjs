import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import { C as ConditionalUtil, a as CommonUtil, G as GenerateFieldRow, e as AppDataService, f as ApiDataService, c as SharedEventsServiceService, g as WfeStepLoaderService, P as ProgressBarRendererComponent, V as ViewRendererComponent, B as BlockRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { NgIf, CommonModule } from '@angular/common';
import { defer } from 'rxjs';
import * as i9 from '@angular/common/http';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
import '@angular/forms';
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

const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, fieldData: a2, metaFields: a3, keepState: true, rowData: a4, mandatoryCondition: a5, editableCondition: a6, visibleCondition: a7 });
function GenericBlockRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-progress-bar-renderer", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("progressRenderer progressRenderer-", ctx_r0.fieldData.unique_id, "-", ctx_r0.progressBlock["progress"]["progress_bar_id"], "  progressRenderer-", ctx_r0.fieldData.unique_id, " progressRenderer-", ctx_r0.progressBlock["progress"]["progress_bar_id"], " ", ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵproperty("progressBlock", ctx_r0.progressBlock["progress"])("stateIdMap", ctx_r0.progressBlock["steps"])("currentStep", ctx_r0.stepId);
} }
function GenericBlockRendererComponent_ng_container_1_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const pos_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r3, " ", field_r2.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r2.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r2)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r2)("position", pos_r3)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("rowData", ctx_r0.generateRowData(field_r2))("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition);
} }
function GenericBlockRendererComponent_ng_container_1_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_1_section_1_ng_container_1_Template, 2, 13, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.is_bootstrap ? "row" : "", " ", ctx_r0.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r0.blockRenderedData.block_style && ctx_r0.blockRenderedData.block_style.custom_class_name && ctx_r0.customClassCondition ? ctx_r0.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function GenericBlockRendererComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_1_section_1_Template, 2, 13, "section", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData && ctx_r0.isVisible);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId, "-", pos_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r4)("position", pos_r5)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("rowData", ctx_r0.generateRowData(field_r4))("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_1_Template, 2, 13, "ng-container", 4);
    i0.ɵɵelementStart(2, "div")(3, "div");
    i0.ɵɵtemplate(4, GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 7);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.is_bootstrap ? ctx_r0.fieldData.field_style.bootstrap_class_name : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_fields.length : 0, " ", ctx_r0.is_bootstrap ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(5, 11, ctx_r0.componentMap))("ngComponentOutletInputs", i0.ɵɵpureFunction8(13, _c0, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.attachmentFieldData, ctx_r0.attachmentBlockField, ctx_r0.generateRowData(ctx_r0.attachmentFieldData), ctx_r0.mandatoryCondition, ctx_r0.editableCondition, ctx_r0.visibleCondition));
} }
function GenericBlockRendererComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 6);
    i0.ɵɵtemplate(2, GenericBlockRendererComponent_ng_container_2_ng_container_2_Template, 6, 22, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate6("cee-block generic-block template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData && ctx_r0.blockRenderedData.block_style && ctx_r0.customClassCondition ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r0.is_bootstrap ? "row" : "", " ", ctx_r0.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function GenericBlockRendererComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 6);
    i0.ɵɵelement(2, "app-block-renderer", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("sub-menu-container ", ctx_r0.additionalParameter["displayPosition"] || "left", "");
    i0.ɵɵpropertyInterpolate1("id", "navblock-", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("hamburgermenu hamburgermenu-", ctx_r0.blockRenderedData.block_id, "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("templateId", ctx_r0.templateId)("blockId", ctx_r0.blockRenderedData)("rootData", ctx_r0.rootData);
} }
// import { BrowserModule } from '@angular/platform-browser';
class GenericBlockRendererComponent {
    http;
    appDataService;
    apiDataService;
    sharedEventsServiceService;
    wfeStepLoaderService;
    cdRef;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    fieldData;
    templateId;
    blockPosition;
    rootData;
    isAttachmentBlock;
    visibleCondition;
    editableCondition;
    mandatoryCondition;
    viewcomp;
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
    additionalParameter = {};
    conditionObj = {};
    isEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    skipLoader = false;
    conditionalUtil;
    rowData = {};
    is_bootstrap = false;
    progressBlock = {};
    variableObj = {};
    commonUtil;
    generateUtil;
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isHamburgerMenu = false;
    componentMap = defer(() => {
        return import('./ng-cee-core-cee-attachments.component-DaZytsS9.mjs').then(m => m.CeeAttachmentsComponent);
    });
    constructor(http, appDataService, apiDataService, sharedEventsServiceService, wfeStepLoaderService, cdRef) {
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.cdRef = cdRef;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
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
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        // this.rowData = { mandatory: this.isMandatory, editable: this.isEditable };
        if (this.fieldData.is_display === 2) {
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
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
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
    trackById(index, item) {
        return item.unique_id;
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
            this.attachmentBlockField = this.blockRenderedData.block_fields;
        }
        this.cdRef.detectChanges();
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.isVisible === true) {
                this.renderBolckData();
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
    /**
     * function that sets the progress Bar data based on the map to section ids
     */
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
    // setConditions(childConditions: ChildCondition, type) {
    //     let check = true;
    //     if (childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
    //         check = false;
    //     }
    //     if (check && childConditions && childConditions.isActive) {
    //         if (childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
    //             this[type] = childConditions.value;
    //             this.conditionObj[type] = true;
    //         } else if (childConditions.overrideAll) {
    //             // console.log(type, obj);
    //             this[type] = childConditions.value;
    //             this.conditionObj[type] = true;
    //         } else {
    //             this.conditionObj[type] = false;
    //         }
    //     }
    // }
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
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    setOverride(property, value) {
        if (!this.additionalParameter.hasOwnProperty('OverrideConditions')) {
            return;
        }
        // use case 1
        if (this.additionalParameter['OverrideConditions'] === 'NONE') {
            this[value].overrideAll = false;
            this[value].override = false;
        }
        // use case 2 and 3
        if (!property || this.additionalParameter['OverrideConditions'] === 'ALL') {
            this[value].overrideAll = true;
            this[value].override = true;
        }
        // use case 4
        if (property && this.additionalParameter['OverrideConditions'] !== 'NONE' &&
            this.additionalParameter['OverrideConditions'] !== 'ALL' &&
            this[value].fields.length > 0) {
            this[value].overrideAll = false;
            this[value].override = true;
        }
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    static ɵfac = function GenericBlockRendererComponent_Factory(t) { return new (t || GenericBlockRendererComponent)(i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GenericBlockRendererComponent, selectors: [["generic-block-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "progressBlock", "stateIdMap", "currentStep"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"], [3, "id"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "templateId", "blockId", "rootData"]], template: function GenericBlockRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GenericBlockRendererComponent_ng_container_0_Template, 2, 10, "ng-container", 0)(1, GenericBlockRendererComponent_ng_container_1_Template, 2, 1, "ng-container", 0)(2, GenericBlockRendererComponent_ng_container_2_Template, 3, 12, "ng-container", 0)(3, GenericBlockRendererComponent_ng_container_3_Template, 3, 14, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.progressBlock["progress"]);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAttachmentBlock && !ctx.isHamburgerMenu);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAttachmentBlock && !ctx.isHamburgerMenu && ctx.attachmentFieldData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAttachmentBlock && ctx.isHamburgerMenu);
        } }, dependencies: () => [ProgressBarRendererComponent, NgIf, CommonModule, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.AsyncPipe, ViewRendererComponent, BlockRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GenericBlockRendererComponent, [{
        type: Component,
        args: [{ selector: 'generic-block-renderer', standalone: true, imports: [ProgressBarRendererComponent, NgIf, CommonModule, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<!-- show progress bar -->\r\n<ng-container *ngIf=\"progressBlock['progress']\">\r\n    <app-progress-bar-renderer [progressBlock]=\"progressBlock['progress']\" [stateIdMap]=\"progressBlock['steps']\" [currentStep]=\"stepId\" class=\"progressRenderer progressRenderer-{{fieldData.unique_id}}-{{progressBlock['progress']['progress_bar_id']}}  progressRenderer-{{fieldData.unique_id}} progressRenderer-{{progressBlock['progress']['progress_bar_id']}} {{fieldData.field_style?fieldData.field_style.custom_class_name:''}}\">\r\n    </app-progress-bar-renderer>\r\n</ng-container>\r\n<!-- show normal block -->\r\n\r\n<!-- HTML FOR ALL GENERIC BLOCK -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && !isHamburgerMenu\">\r\n    <section id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n        *ngIf=\"blockRenderedData  && isVisible\" [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n        <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n            <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n            </app-view-renderer>\r\n        </ng-container>\r\n\r\n    </section>\r\n\r\n</ng-container>\r\n<!-- HTML FOR ATTACHMENT BLOCK -->\r\n<ng-container *ngIf=\"isAttachmentBlock && !isHamburgerMenu && attachmentFieldData\">\r\n    <section id=\"{{ blockRenderedData? blockRenderedData.block_id: blockId }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData? blockRenderedData.block_id: blockId }}  block-{{blockPosition}} {{(blockRenderedData && blockRenderedData.block_style && customClassCondition)?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\">\r\n\r\n        <ng-container *ngIf=\"blockRenderedData\">\r\n\r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData? blockRenderedData.block_id: blockId }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                    [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n                </app-view-renderer>\r\n            </ng-container>\r\n\r\n\r\n            <div class=\"{{is_bootstrap?fieldData.field_style.bootstrap_class_name:'col-12'}}\">\r\n                <div class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\">\r\n                    <ng-container *ngComponentOutlet=\"componentMap | async; \r\n                    inputs: {stepId: stepId, rootData: rootData, fieldData: attachmentFieldData, metaFields: attachmentBlockField, keepState: true, \r\n                        rowData: generateRowData(attachmentFieldData), mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                    ></ng-container>\r\n                </div>\r\n                <!-- <app-cee-attachments [stepId]=\"stepId\" [fieldData]=\"attachmentFieldData\" [metaFields]=\"attachmentBlockField\" [rootData]=\"rootData\" [keepState]=\"true\" class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\"\r\n                    [rowData]=\"generateRowData(attachmentFieldData)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                </app-cee-attachments> -->\r\n            </div>\r\n        </ng-container>\r\n    </section>\r\n</ng-container>\r\n<!-- HTML FOR Hamburger Menu -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && isHamburgerMenu\">\r\n    <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n    [attr.role]=\"additionalParameter['Aria-Role']\" id=\"navblock-{{fieldData.unique_id}}\"\r\n    class=\"sub-menu-container {{additionalParameter['displayPosition']||'left'}}\">\r\n    <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"blockRenderedData\"\r\n        class=\"hamburgermenu hamburgermenu-{{blockRenderedData.block_id}}\"\r\n        [rootData]=\"rootData\">\r\n    </app-block-renderer>\r\n</section>\r\n</ng-container>" }]
    }], () => [{ type: i9.HttpClient }, { type: AppDataService }, { type: ApiDataService }, { type: SharedEventsServiceService }, { type: WfeStepLoaderService }, { type: i0.ChangeDetectorRef }], { stepId: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GenericBlockRendererComponent, { className: "GenericBlockRendererComponent", filePath: "lib\\components\\generic-block-renderer\\generic-block-renderer.component.ts", lineNumber: 27 }); })();

export { GenericBlockRendererComponent };
//# sourceMappingURL=ng-cee-core-generic-block-renderer.component-BWLqu5NL.mjs.map
