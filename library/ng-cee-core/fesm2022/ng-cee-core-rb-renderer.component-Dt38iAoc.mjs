import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';
import { F as FlatUnflat, C as ConditionalUtil, a as CommonUtil, A as APIKeyUtil, S as SetAPICallbackData, D as DynamicLabelUtil, U as UserDataHandlerService, e as AppDataService, f as ApiDataService, d as CEEInternalEmitterService, c as SharedEventsServiceService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { CommonModule, NgSwitch, NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { defer } from 'rxjs';
import * as i8 from '@angular/material/snack-bar';
import * as i11 from '@angular/router';
import '@angular/common/http';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import '@angular/material/dialog';
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

class RBUtil {
    comp;
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (this.componentList['label']) {
                return this.componentList['label'];
            }
            else {
                const c = import('./ng-cee-core-cee-label.component-3Du0Wv_U.mjs').then(m => m.CeeLabelComponent);
                this.componentList['label'] = c;
                return c;
            }
        }),
        Textfield: defer(() => {
            if (this.componentList['Textfield']) {
                return this.componentList['Textfield'];
            }
            else {
                const c = import('./ng-cee-core-cee-textfield.component-ddq1tk4O.mjs').then(m => m.CeeTextfieldComponent);
                this.componentList['Textfield'] = c;
                return c;
            }
        }),
        // 'Autocomplete Textfield': defer(() => {
        //     if (this.componentList['Autocomplete Textfield']) {
        //         return this.componentList['Autocomplete Textfield'];
        //     } else {
        //         const c = import('../../field-components/cee-auto-complete/cee-auto-complete.component').then(m => m.CeeAutoCompleteComponent);
        //         this.componentList['Autocomplete Textfield'] = c;
        //         return c;
        //     }
        // }),
        // Textarea: defer(() => {
        //     if (this.componentList['Textarea']) {
        //         return this.componentList['Textarea'];
        //     } else {
        //         const c = import('../../field-components/cee-textarea/cee-textarea.component').then(m => m.CeeTextareaComponent);
        //         this.componentList['Textarea'] = c;
        //         return c;
        //     }
        // }),
        // Date: defer(() => {
        //     if (this.componentList['Date']) {
        //         return this.componentList['Date'];
        //     } else {
        //         const c = import('../../field-components/cee-date/cee-date.component').then(m => m.CeeDateComponent);
        //         this.componentList['Date'] = c;
        //         return c;
        //     }
        // }),
        // radio: defer(() => {
        //     if (this.componentList['radio']) {
        //         return this.componentList['radio'];
        //     } else {
        //         const c = import('../../field-components/cee-radio/cee-radio.component').then(m => m.CeeRadioComponent);
        //         this.componentList['radio'] = c;
        //         return c;
        //     }
        // }),
        Menu: defer(() => {
            if (this.componentList['Menu']) {
                return this.componentList['Menu'];
            }
            else {
                const c = import('./ng-cee-core-cee-menu.component-DrjJlxBz.mjs').then(m => m.CeeMenuComponent);
                this.componentList['Menu'] = c;
                return c;
            }
        }),
        Checkbox: defer(() => {
            if (this.componentList['Checkbox']) {
                return this.componentList['Checkbox'];
            }
            else {
                const c = import('./ng-cee-core-cee-checkbox.component-CzuWvf1D.mjs').then(m => m.CeeCheckboxComponent);
                this.componentList['Checkbox'] = c;
                return c;
            }
        }),
        // Timepicker: defer(() => {
        //     if (this.componentList['Timepicker']) {
        //         return this.componentList['Timepicker'];
        //     } else {
        //         const c = import('../../field-components/cee-time-picker/cee-time-picker.component').then(m => m.CeeTimePickerComponent);
        //         this.componentList['Timepicker'] = c;
        //         return c;
        //     }
        // }),
        // PhoneNumber: defer(() => {
        //     if (this.componentList['PhoneNumber']) {
        //         return this.componentList['PhoneNumber'];
        //     } else {
        //         const c = import('../../field-components/cee-phone-number/cee-phone-number.component').then(m => m.CeePhoneNumberComponent);
        //         this.componentList['PhoneNumber'] = c;
        //         return c;
        //     }
        // }),
        // Picker: defer(() => {
        //     if (this.componentList['Picker']) {
        //         return this.componentList['Picker'];
        //     } else {
        //         const c = import('../../field-components/cee-picker/cee-picker.component').then(m => m.CeePickerComponent);
        //         this.componentList['Picker'] = c;
        //         return c;
        //     }
        // }),
        Button: defer(() => {
            if (this.componentList['Button']) {
                return this.componentList['Button'];
            }
            else {
                const c = import('./ng-cee-core-ng-cee-core-B-GWW1tg.mjs').then(function (n) { return n.a4; }).then(m => m.CeeButtonComponent);
                this.componentList['Button'] = c;
                return c;
            }
        }),
        // Number: defer(() => {
        //     if (this.componentList['Number']) {
        //         return this.componentList['Number'];
        //     } else {
        //         const c = import('../../field-components/cee-number/cee-number.component').then(m => m.CeeNumberComponent);
        //         this.componentList['Number'] = c;
        //         return c;
        //     }
        // }),
        Attachments: defer(() => {
            if (this.componentList['Attachments']) {
                return this.componentList['Attachments'];
            }
            else {
                const c = import('./ng-cee-core-cee-attachments.component-DaZytsS9.mjs').then(m => m.CeeAttachmentsComponent);
                this.componentList['Attachments'] = c;
                return c;
            }
        }),
        // Table: defer(() => {
        //     if (this.componentList['Table']) {
        //         return this.componentList['Table'];
        //     } else {
        //         const c = import('../../field-components/cee-table/cee-table.component').then(m => m.CeeTableComponent);
        //         this.componentList['Table'] = c;
        //         return c;
        //     }
        // }),
        // 'Table-V2': defer(() => {
        //     if (this.componentList['Table-V2']) {
        //         return this.componentList['Table-V2'];
        //     } else {
        //         const c = import('../../field-components/cee-table-v2/cee-table-v2.component').then(m => m.CeeTableV2Component);
        //         this.componentList['Table-V2'] = c;
        //         return c;
        //     }
        // }),
        // List: defer(() => {
        //     if (this.componentList['List']) {
        //         return this.componentList['List'];
        //     } else {
        //         const c = import('../list-renderer/list-renderer.component').then(m => m.ListRendererComponent);
        //         this.componentList['List'] = c;
        //         return c;
        //     }
        // }),
        // Switch: defer(() => {
        //     if (this.componentList['Switch']) {
        //         return this.componentList['Switch'];
        //     } else {
        //         const c = import('../../field-components/cee-switch/cee-switch.component').then(m => m.CeeSwitchComponent);
        //         this.componentList['Switch'] = c;
        //         return c;
        //     }
        // }),
        // Editor: defer(() => {
        //     if (this.componentList['Editor']) {
        //         return this.componentList['Editor'];
        //     } else {
        //         const c = import('../../field-components/cee-editor/cee-editor.component').then(m => m.CeeEditorComponent);
        //         this.componentList['Editor'] = c;
        //         return c;
        //     }
        // })
    };
    constructor(comp) {
        this.comp = comp;
    }
    getComponentType(fieldType) {
        let comp = this.componentMap[fieldType];
        if (comp) {
            return comp;
        }
        console.log(`fieldType ${fieldType} not found, returning label component`);
        return this.componentMap['label'];
    }
    getComponentInputs(field, i, activePosition) {
        const listComps = ['List', 'Table', 'Table-V2'];
        const rowData = this.comp.repeatebleFieldsRows[i]?.[field.unique_id];
        var inputs = {
            stepId: this.comp.stepId,
            rootData: this.comp.rootData,
            rowData: rowData,
        };
        if (listComps.includes(field.field_type)) {
            inputs['sectionData'] = field;
            inputs['type'] = field.field_type;
        }
        else {
            inputs['fieldData'] = field;
            inputs['keepState'] = true;
            inputs['mandatoryCondition'] = this.comp.mandatoryCondition;
            inputs['editableCondition'] = this.comp.editableCondition;
            inputs['visibleCondition'] = this.comp.visibleCondition;
        }
        if (field.field_type === 'label') {
            inputs['activePosition'] = activePosition;
        }
        else if (field.field_type === 'Button') {
            inputs['primaryKeyIndex'] = {
                name: field.unique_id,
                value: rowData?.['value'],
                type: 'repeatable',
                cellData: rowData
            };
        }
        return inputs;
    }
    getFieldClasses(field, position) {
        const baseClass = `field-${position}`;
        const bootstrapClass = field.field_style
            ? this.comp.commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, this.comp.is_bootstrap, '', this.comp.conditionalUtil.evaluteBootstrapCondition(field))
            : '';
        return `${baseClass} ${bootstrapClass}`.trim();
    }
    static ɵfac = function RBUtil_Factory(t) { return new (t || RBUtil)(i0.ɵɵinject(RBRendererComponent)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RBUtil, factory: RBUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: RBRendererComponent }], null); })();

class RBCurrentIndexUtil {
    comp;
    constructor(comp) {
        this.comp = comp;
    }
    suscribeRBCurrentIndex() {
        this.comp.variableObj['currentRepeatableBlockEmitter_' + this.comp.fieldData.unique_id] =
            this.comp.sharedEventsService.rbCurrentIndex.subscribe((res) => {
                // Get block info
                const blockInfo = this.getBlockInfo();
                // Check if the linkedBlockId matches the current blockId
                if (res.linkedBlockId == this.comp.blockId) {
                    // Check if the current block is a child block
                    if (!blockInfo.isChildBlock) {
                        const fields = this.getFieldsForPosition(res.position);
                        if (fields.length > 0) {
                            this.setCurrBlockAppData(fields, res);
                        }
                    }
                    else {
                        // If it's a child block, check if the parentPosition matches
                        if (res.parentPosition === blockInfo.parentPosition) {
                            // Get fields by position
                            const fields = this.getFieldsForPosition(res.position);
                            if (fields.length > 0) {
                                this.setCurrBlockAppData(fields, res);
                            }
                        }
                    }
                }
            });
    }
    // Get active block count and data
    getBlockInfo = () => {
        return {
            totalBlocks: this.comp.maxBlocksCount,
            activeBlocks: this.comp.activeBlocksCount,
            currentRows: this.comp.repeatebleFieldsRows.length,
            blockId: this.comp.blockId,
            isChildBlock: this.comp.isChildBlock(),
            parentPosition: this.comp.parentPosition
        };
    };
    // Get fields for a specific row/position
    getFieldsForPosition(position) {
        if (!this.comp.repeatebleFieldsRows[position]) {
            return [];
        }
        return Object.values(this.comp.repeatebleFieldsRows[position]).map((field) => field.html_id);
    }
    // Set the current block data in the Akita store
    async setCurrBlockAppData(ids, otherInfo) {
        const apiData = {
            fields: {},
            isChildBlock: otherInfo.isChildBlock,
            linkedBlockId: otherInfo.linkedBlockId,
            parentPosition: otherInfo.parentPosition,
            position: otherInfo.position,
            repeatedBlockFieldId: otherInfo.repeatedBlockFieldId,
            stepId: otherInfo.stepId
        };
        const entitiesByRB = await this.comp.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId(otherInfo.repeatedBlockFieldId);
        for (const id of ids) {
            const actualId = await id.split("$")[1];
            apiData['fields'][actualId] = await entitiesByRB[id];
        }
        // console.log("apiData ::::", apiData);
        // Set the API data in the Akita store
        this.comp.apiDataService.setApiData({
            id: 'RepeatableBlock/CurrentIndex',
            apiUrl: '',
            apiKey: 'RepeatableBlock/CurrentIndex',
            value: Object.assign({}, apiData),
        });
    }
    static ɵfac = function RBCurrentIndexUtil_Factory(t) { return new (t || RBCurrentIndexUtil)(i0.ɵɵinject(RBRendererComponent)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RBCurrentIndexUtil, factory: RBCurrentIndexUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBCurrentIndexUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: RBRendererComponent }], null); })();

const _c0 = (a0, a1, a2, a3) => ({ field: a0, position: a1, i: a2, activePosition: a3 });
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_Template, 1, 0, null, 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const position_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    const pos_r4 = ctx_r2.$implicit;
    const i_r5 = ctx_r2.index;
    i0.ɵɵnextContext(2);
    const cellData_r6 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, field_r1, position_r2, i_r5, pos_r4));
} }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_Template, 2, 7, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolateV(["cee-block sectionRb-", i_r5, " ", ctx_r6.blockId, "-sidebar-item-", i_r5, "  ", ctx_r6.parentPosition ? ctx_r6.blockId + "-p-" + ctx_r6.parentPosition + "-c-" + i_r5 : ctx_r6.blockId + "-c-" + i_r5, "  template-", ctx_r6.templateId, " block-", ctx_r6.blockId, " ", ctx_r6.is_bootstrap ? "row" : "", " ", ctx_r6.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", " ", ctx_r6.sectionCustomClass[i_r5] ? ctx_r6.sectionCustomClass[i_r5] : "", " "]);
    i0.ɵɵpropertyInterpolate("id", ctx_r6.blockId);
    i0.ɵɵattribute("aria-label", ctx_r6.additionalParameter["Aria-Label"] ? ctx_r6.additionalParameter["Aria-Label"] : undefined)("role", ctx_r6.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r6.blockRenderedData.block_fields)("ngForTrackBy", ctx_r6.trackByIdBlock);
} }
function RBRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_Template, 2, 16, "section", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pos_r4.active && ctx_r6.blockRenderedData && ctx_r6.repeatebleFieldsRows[i_r5]);
} }
function RBRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div");
    i0.ɵɵtemplate(2, RBRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("reapeatable-loader ", ctx_r6.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r6.counter)("ngForTrackBy", ctx_r6.trackByIdCounter);
} }
function RBRendererComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "rb-renderer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const field_r9 = ctx_r7.field;
    const position_r10 = ctx_r7.position;
    const i_r11 = ctx_r7.i;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r6.rbUtil.getFieldClasses(field_r9, position_r10));
    i0.ɵɵproperty("stepId", ctx_r6.stepId)("rootData", ctx_r6.rootData)("rowData", ctx_r6.repeatebleFieldsRows[i_r11] == null ? null : ctx_r6.repeatebleFieldsRows[i_r11][field_r9.unique_id])("parentBlock", ctx_r6.fieldData.unique_id)("parentPosition", i_r11)("fieldData", field_r9)("templateId", ctx_r6.templateId)("mandatoryCondition", ctx_r6.mandatoryCondition)("editableCondition", ctx_r6.editableCondition)("visibleCondition", ctx_r6.visibleCondition);
} }
function RBRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RBRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RBRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 7);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const field_r9 = ctx_r7.field;
    const position_r10 = ctx_r7.position;
    const i_r11 = ctx_r7.i;
    const activePosition_r12 = ctx_r7.activePosition;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r6.rbUtil.getFieldClasses(field_r9, position_r10));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 4, ctx_r6.rbUtil.getComponentType(field_r9.field_type)))("ngComponentOutletInputs", ctx_r6.rbUtil.getComponentInputs(field_r9, i_r11, activePosition_r12));
} }
function RBRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RBRendererComponent_ng_template_1_ng_container_0_Template, 2, 12, "ng-container", 1)(1, RBRendererComponent_ng_template_1_ng_container_1_Template, 4, 6, "ng-container", 1);
} if (rf & 2) {
    const field_r9 = ctx.field;
    i0.ɵɵproperty("ngIf", field_r9.field_type === "RBLite" || field_r9.field_type === "Repeatable Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r9.field_type !== "RBLite" && field_r9.field_type !== "Repeatable Block");
} }
class RBRendererComponent {
    userDataHandlerService;
    appDataService;
    apiDataService;
    internalCEEEmitter;
    sharedEventsService;
    snackBar;
    wfeStepLoaderService;
    router;
    cdr;
    _ceeApiService;
    renderer;
    stepId;
    fieldData;
    templateId;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    parentPosition;
    rowData;
    parentBlock;
    blockRenderedData;
    childArr = [];
    additionalParameter = {};
    counter = [{ active: true }];
    childCounter = {};
    maxBlocksCount = 0;
    checkedItems;
    type = '';
    hideActionButton = true;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        linkedBlockId: '',
        isRepeatedField: true,
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
    variableObj = {}; // variableObject
    responseMap = {};
    isEditable = false;
    buttonEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    flatten;
    conditionalUtil;
    isApiResponse = false;
    is_bootstrap = false;
    commonUtil;
    apiKeyUtil;
    rbCurrentIndexUtil;
    rbUtil;
    lazyInterval = []; //setInterval for lazy loading
    counterTemp = [];
    presetData;
    setApiCallBackDataUtil;
    repeatebleFieldsRows = [];
    reapeatableLoading = false;
    sectionCustomClass = {};
    skipLoader = false;
    delimiter = '$';
    addRowByDefault = true;
    enableDeleteLastRow = false;
    storeBlockIdIfNull;
    setDynamicLabelUtil;
    dummyBlocks = {};
    resetIndexOnAddOrRemove = false;
    activeBlocksCount = 0;
    disableAddButton = false;
    focusChildView = false;
    constructor(userDataHandlerService, appDataService, apiDataService, internalCEEEmitter, sharedEventsService, snackBar, wfeStepLoaderService, router, cdr, _ceeApiService, renderer) {
        this.userDataHandlerService = userDataHandlerService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.snackBar = snackBar;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.cdr = cdr;
        this._ceeApiService = _ceeApiService;
        this.renderer = renderer;
        this.rbUtil = new RBUtil(this);
        this.flatten = new FlatUnflat(appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        this.setApiCallBackDataUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.rbCurrentIndexUtil = new RBCurrentIndexUtil(this);
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    trackByIdBlock(index, item) {
        return item.message_code;
    }
    trackByIdCounter(index, item) {
        // console.log(item);
        const lastChar = item.message_code?.slice(-1);
        return lastChar;
    }
    //Counts Active Parent and Child Blocks and
    countActiveBlocks() {
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        if (this.isChildBlock()) {
            this.activeBlocksCount = this.childCounter[this.parentPosition].reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        else {
            this.activeBlocksCount = this.counter.reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        this.disableAddButton = this.activeBlocksCount == Number(this.maxBlocksCount) ? true : false;
    }
    // initialize app data model
    initAppDataModel() {
        this.appData.id = this.fieldData.unique_id;
        this.appData.mandatory = this.isMandatory;
        this.appData.stepId = this.stepId;
        this.appData.apiKey = '';
        this.appData.responseApiKey = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
        this.appData.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
        this.appData.editable = this.isEditable;
        this.appData.visible = this.isVisible;
        this.appData.value = this.type;
        // preset data is rowData coming from parent component
        this.fieldData.html_id = this.presetData?.html_id || this.fieldData.unique_id;
        this.appData.linkedBlockId = this.presetData?.linkedBlockId || this.blockId;
        this.appData.repeatedBlockFieldId = this.presetData?.repeatedBlockFieldId || '';
        if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.presetData.unique_id) {
                this.appData.id = this.presetData.unique_id;
            }
            if (this.presetData.mandatory) {
                this.appData.mandatory = this.presetData.mandatory;
            }
            if (this.presetData.editable) {
                this.appData.editable = this.presetData.editable;
            }
            if (this.presetData.visible) {
                this.appData.visible = this.presetData.visible;
            }
        }
    }
    async ngOnInit() { await this.init(); }
    init = async () => {
        this.presetData = this.rowData;
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        this.blockId = this.fieldData.repeatable_block_configuration.linked_block_id;
        if (this.blockId) {
            // console.log(this.blockId);            
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            let res = await this.wfeStepLoaderService.loadBlockByName(this.blockId).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(res);
        }
        else {
            console.error('linked_block_id not found');
            return false;
        }
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        if (this.fieldData.is_editable === 1) {
            this.buttonEditable = true;
        }
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            // console.log("-- RBL got apiSuccessResponse:", this.blockId);
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
            const response = this.flatten.flattenJSON(res);
            // The data is reset to remove inner doms already rendered.
            // If not done the values from API will not get reflected.
            if (this.checkIfResHasRepeatedData(response)) {
                console.log("- YES my blockId and key:", this.fieldData.unique_id);
                this.rootData['FieldLoadStack']['add'](); // keep spinner till all doms are rendered
                this.responseMap = {};
                this.counter = [];
                this.childCounter = {};
                this.counterTemp = this.getMaxIndex(response); // existing line                  
                this.processRowData(this.counterTemp);
                this.conditionCheck(null);
                this.updateSectionCustomClass(this.counterTemp, null);
                this.rootData['FieldLoadStack']['remove'](); // stop spinner as all doms are rendered
                this.lazyLoading();
            }
        });
        this.rbCurrentIndexUtil.suscribeRBCurrentIndex();
        // TODO: Set Conditional Value on the Repeatable Block
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            // console.log("-- RBL got onDataSetOrUpdated:", this.blockId);
            this.onFieldDataUpdated(res.apiKey, res.value);
        });
        this.initAppDataModel();
    };
    // fetch object from counterTemp and start rendering it one by one and append to 
    // counter or childCounter based on parent or child block
    lazyLoading() {
        // stop existing interval and start new interval for lazy loading
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.reapeatableLoading = true;
        this.counter = [];
        this.childCounter[this.parentPosition] = [];
        this.lazyInterval = setInterval(() => {
            if (this.isChildBlock()) {
                if (this.childCounter && this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].length !== this.counterTemp.length) {
                    this.childCounter[this.parentPosition].push(this.counterTemp[this.childCounter[this.parentPosition].length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            else {
                if (this.counter.length !== this.counterTemp.length) {
                    this.counter.push(this.counterTemp[this.counter.length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            if (this.cdr && !this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
            // To Enable or Disable 
            this.countActiveBlocks();
            // Emit to Reset ActiveIndex On Adding or Removing RB
            if (this.resetIndexOnAddOrRemove) {
                this.sharedEventsService.emitOnAddOrRemoveRB.emit();
            }
        }, 0);
    }
    getRowDataList(i) {
        const rowDataList = {};
        const uniqueIds = {};
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            rowDataList[field.unique_id] = this.generateRowData(i, field);
            uniqueIds[field.unique_id] = rowDataList[field.unique_id].unique_id;
        }
        this.processEventList(rowDataList, uniqueIds);
        return rowDataList;
    }
    processRowData(c) {
        this.repeatebleFieldsRows = [];
        for (let i = 0; i < c.length; i++) {
            const rowDataList = this.getRowDataList(i);
            this.repeatebleFieldsRows.push(rowDataList);
        }
        // console.log("repeatebleFieldsRows:------->", this.repeatebleFieldsRows);
        this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
    }
    generateRowData(arrayPos, fieldTemp, type = "") {
        const value = '[' + arrayPos + ']';
        let apiKey;
        let id = this.stepId + '$' + fieldTemp.unique_id + '$' + arrayPos;
        if (this.isChildBlock()) {
            id = this.stepId + '$' + fieldTemp.unique_id + '$' + this.parentPosition + '$' + arrayPos;
            apiKey = fieldTemp.api_key ? fieldTemp?.api_key.replace('[**]', this.parentPosition) : '';
        }
        apiKey = fieldTemp?.api_key ? fieldTemp?.api_key.replace('[*]', value) : '';
        let updatedResponseApiKey = this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition);
        const formattedVal = {
            api_key: '',
            unique_id: id,
            html_id: id,
            response_api_key: updatedResponseApiKey,
            request_api_key: this.returnRequestOrResponseApiKeys('request', fieldTemp?.request_api_key, value, this.parentPosition),
            linkedBlockId: this.blockId,
            repeatedBlockFieldId: this.fieldData.unique_id,
            isApiResponse: this.isApiResponse,
            value: this.returnFieldDataForLabel(fieldTemp, updatedResponseApiKey, id, value),
            position: arrayPos,
            parentPosition: this.parentPosition,
            parentBlockId: this.parentBlock,
            event_list: fieldTemp?.event_list ? JSON.parse(JSON.stringify(fieldTemp?.event_list)) : [],
            // resIsDiffHandler: fieldTemp?.response_api_key && this.commonUtil.getHandlerName(this.fieldData?.response_api_key)
            // !== this.commonUtil.getHandlerName(fieldTemp?.response_api_key) ? true : false
        };
        if (type != "superBlocks") {
            // formattedVal.mandatory = fieldTemp?.is_mandatory === 1 || fieldTemp?.is_mandatory === 2;
            formattedVal.mandatory = fieldTemp?.is_mandatory === 1; // By defalt mandatory should be false for conditional mandatory fields 
            formattedVal.editable = fieldTemp?.is_editable === 1 || fieldTemp?.is_editable === 2;
            formattedVal.visible = fieldTemp?.is_display === 1 || fieldTemp?.is_display === 2;
        }
        if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
            formattedVal.value = this.presetData.value[arrayPos] &&
                this.presetData.value[arrayPos][fieldTemp.response_api_key] ?
                this.presetData.value[arrayPos][fieldTemp.response_api_key] : formattedVal.value;
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        else {
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        const eaoValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(pv => pv.parameter_type === 'externalApiOptionValue') : null;
        if (eaoValue) {
            formattedVal['externalApiOptionValue'] = this.returnRequestOrResponseApiKeys('request', eaoValue.value, value, this.parentPosition);
        }
        return formattedVal;
    }
    // uptdates field ids configured in events with unique ids generated for repeatable block rows
    processEventList(rowData, uniqueIds) {
        for (const uId in rowData) {
            const fieldData = rowData[uId];
            for (const event of fieldData?.event_list) {
                for (const eParam of event?.event_params) {
                    switch (eParam?.event_config?.display_step) {
                        case "SetValues":
                        case "CustomFunctions":
                            const pTypes = ['TargetFields', 'ValueFields', 'Variables', 'Targets'];
                            for (const addi_param of eParam?.invoke_event_config?.additional_parameters) {
                                if (addi_param.parameter_type && addi_param.value && pTypes.includes(addi_param.parameter_type)) {
                                    let addiParamValNew = [];
                                    const addiParamVals = addi_param.value.split('|').map(val => val.trim());
                                    for (const addiParamVal of addiParamVals) {
                                        if (Object.keys(uniqueIds).includes(addiParamVal)) {
                                            addiParamValNew.push(uniqueIds[addiParamVal]);
                                        }
                                        else {
                                            addiParamValNew.push(addiParamVal);
                                        }
                                    }
                                    addi_param.value = addiParamValNew.join('|');
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    isChildBlock() {
        return (this.parentPosition != undefined && this.parentPosition != null);
    }
    // update the custom class of the repeatable block if required
    updateSectionCustomClass(counts, value) {
        if (counts) {
            for (let i = 0; i < counts.length; i++) {
                this.sectionCustomClass[i] = this.blockRenderedData?.block_style?.custom_class_name || '';
                if (this.blockRenderedData?.custom_class_condition && this.blockRenderedData?.custom_class_condition['query'] != '') {
                    const customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, this.stepId + '$' + this.blockId + '$' + i, value);
                    if (!customClassCondition) {
                        this.sectionCustomClass[i] = '';
                    }
                }
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        // skip conditionCheck and updateSectionCustomClass if fieldId does not match
        if (this.fieldData.unique_id !== fieldId) {
            return;
        }
        this.conditionCheck(value);
        this.updateSectionCustomClass(this.counter, value);
    }
    // update visible and editable flags of the repeatable block
    conditionCheck(value) {
        if (this.fieldData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.fieldData, String(this.appData.id), value);
            if (editable !== undefined) {
                this.buttonEditable = editable;
                this.hideActionButton = editable;
            }
        }
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, String(this.appData.id), value);
            if (visible !== undefined) {
                this.isVisible = visible;
                // If the block is not visible, check and set the mandatory condition for fields
                this.setMandatoryConditionForBlockFields();
            }
        }
    }
    /**
     * Sets the mandatory condition for all fields in the block when the block is not visible.
     * This ensures that if the block is hidden, any fields that were mandatory are set to non-mandatory.
     */
    setMandatoryConditionForBlockFields() {
        if (!this.blockRenderedData)
            return;
        const appData = this.appDataService.getAllAppStoreData();
        if (!appData)
            return;
        if (this.isVisible) {
            // Filter fields that belong to this block and were mandatory originally
            const fieldsToUpdate = appData.filter(field => this.blockId === field.linkedBlockId && field.mandatoryOriginal && field.visible);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: true,
                    });
                });
            }
        }
        else {
            // Filter fields that belong to this block and are mandatory
            const fieldsToUpdate = appData.filter(field => this.blockId === field.linkedBlockId && field.mandatory);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: false,
                        mandatoryOriginal: true,
                    });
                });
            }
        }
    }
    checkFieldVisibility(field, rowData) {
        if (field.is_display === 0)
            return false;
        if (field.is_display === 2)
            return this.conditionalUtil.checkVisibility(field, rowData.api_key, rowData.value);
        return true;
    }
    // this is otimized function to get the max index from the response
    getMaxIndex(res) {
        let hasAPIKey = false;
        if (res) {
            let max = 0;
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                // Escape special regex characters and replace [*] with a regex pattern to capture the index
                const regexPattern = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                const regex = new RegExp(regexPattern);
                let keys = Object.keys(res);
                for (let i = keys.length - 1; i >= 0; i--) {
                    const key = keys[i];
                    const result = key.match(regex);
                    if (result) {
                        hasAPIKey = true;
                        const startIdx = apiKey.replace('[*]', '').length + 1;
                        const endIdx = result[0].indexOf(']', startIdx);
                        max = +result[0].substring(startIdx, endIdx); // unary plus to convert string to number which is fastest
                        break;
                    }
                }
            }
            this.responseMap = res; // assign the entire response map
            if (hasAPIKey) {
                const tCounter = [];
                for (let index = 0; index < max + 1; index++) {
                    tCounter.push({ active: true, activeIndex: index + 1 });
                }
                this.isApiResponse = true;
                return tCounter;
            }
            else {
                if (this.isChildBlock()) {
                    return this.childCounter;
                }
                return this.counter;
            }
        }
        else {
            if (this.isChildBlock()) {
                return this.childCounter;
            }
            return this.counter;
        }
    }
    checkIfResHasBlankData(res) {
        let flag = false;
        if (res) {
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const key = apiKey.replace('[*]', '');
                if (res[key] && res[key].length === 0) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    checkIfResHasRepeatedData(res) {
        let hasAPIKey = false;
        if (res) {
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    if (key.indexOf('[*]') <= -1) {
                        const result = key.match(new RegExp(regex));
                        if (result) {
                            hasAPIKey = true;
                        }
                    }
                    else {
                        hasAPIKey = false;
                        break;
                    }
                }
            }
        }
        return hasAPIKey;
    }
    updateFieldState(appData) {
        this.appDataService.updateAppData(appData);
    }
    /**
     * function that returns field label or the value of the label
     * @param fieldTemp field Data
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldDataForLabel(fieldTemp, apiKey, id, posVal) {
        let returnValue;
        if (fieldTemp?.field_type === 'label' && !(fieldTemp?.response_api_key)) {
            returnValue = fieldTemp?.field_label;
            if (returnValue && returnValue.includes('((dynamic))')) {
                const keys = (returnValue.split('((dynamic))')[1]).match(new RegExp(/\%(.*?)\%/g));
                if (keys) {
                    for (const apiKey1 of keys) {
                        let apiKey = apiKey1.split('%')[1];
                        const keyValue = this.returnRequestOrResponseApiKeys('response', apiKey, posVal, this.parentPosition);
                        returnValue = returnValue.replace('%' + apiKey + '%', keyValue !== undefined ? '%' + keyValue + '%' : '');
                    }
                }
            }
        }
        else {
            returnValue = this.returnFieldValue(apiKey, id);
            if (returnValue === undefined) {
                const defaultValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(i => i.parameter_type === 'default_value') : null;
                if (defaultValue) {
                    returnValue = defaultValue.value;
                }
            }
        }
        return returnValue ? returnValue : '';
    }
    /**
     * function that returns value in respect ot the api key based on the
     * condition if it uses single or multiple api key
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldValue(apiKey, id) {
        // TODO: Check functionality
        let value;
        for (const key of apiKey) {
            if (key.includes('+')) {
                let val;
                const concatKeys = key.split('+');
                for (const singleKey of concatKeys) {
                    val = concatKeys.indexOf(singleKey) === 0 ? this.responseMap[singleKey] : value + ' ' + this.responseMap[singleKey];
                }
                value = val;
            }
            else if (this.responseMap.hasOwnProperty(key)) {
                value = this.responseMap[key];
            }
            else {
                const valTemp = this.setApiCallBackDataUtil.getArrayWithIndex(this.responseMap, key);
                if (valTemp) {
                    value = valTemp;
                }
            }
        }
        if (value === undefined) {
            value = this.appDataService.getFieldDataByFieldId(id);
        }
        return value;
    }
    /**
     * returns the multiple api keys based on the type of the key
     * @param type the type of the key
     * @param key the api key
     */
    returnRequestOrResponseApiKeys(type, key, position, parentPosition = null) {
        if (key) {
            if (!key.includes('||')) {
                key = key.replace(/\[\*\]/g, position); // change [*] with [ index ]
                if (this.isChildBlock()) {
                    key = key.replace(/\[\*\*\]/g, '[' + parentPosition + ']'); // change [**] with [ parentindex ]
                }
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(key) : key);
            }
            else {
                let newKeyArr = [];
                key.split('||').forEach(element => {
                    let starCount = element.split('[*]');
                    if (starCount && starCount.length > 2) {
                        newKeyArr.push(element.replace(/\[\*\]/, position)); // change [*] with [ index ]
                    }
                    else {
                        newKeyArr.push(element);
                    }
                });
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(newKeyArr.join('|')) : newKeyArr.join('|'));
            }
        }
        else {
            return [];
        }
    }
    /**
     * function returns the last index of the api key
     */
    returnAPIKeyForMultipleApiKeys() {
        if (this.fieldData.response_api_key.includes('||')) {
            // return all response keys separately so the
            // data map stores the values of each and every key
            return this.fieldData.response_api_key.split('||').map(str => str.trim());
        }
        else {
            const keys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
            return keys;
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.counter = [];
        this.childCounter = {};
        this.repeatebleFieldsRows = [];
    }
    ngOnChanges(changes) {
    }
    static ɵfac = function RBRendererComponent_Factory(t) { return new (t || RBRendererComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RBRendererComponent, selectors: [["rb-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData", parentPosition: "parentPosition", rowData: "rowData", parentBlock: "parentBlock" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "class", 4, "ngIf"], [3, "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "stepId", "rootData", "rowData", "parentBlock", "parentPosition", "fieldData", "templateId", "mandatoryCondition", "editableCondition", "visibleCondition"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function RBRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RBRendererComponent_ng_container_0_Template, 3, 5, "ng-container", 1)(1, RBRendererComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [RBRendererComponent, MatFormFieldModule, FormsModule, CommonModule, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.AsyncPipe] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBRendererComponent, [{
        type: Component,
        args: [{ selector: 'rb-renderer', standalone: true, imports: [NgSwitch, NgClass, MatFormFieldModule, FormsModule, CommonModule], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"reapeatable-loader {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}}\"></div>\r\n    <ng-container *ngFor=\"let pos of counter; let i = index; trackBy: trackByIdCounter;\">\r\n        <section *ngIf=\"pos.active && blockRenderedData && repeatebleFieldsRows[i]\" id=\"{{ blockId }}\" \r\n            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" \r\n            [attr.role]=\"additionalParameter['Aria-Role']\" \r\n            class=\"cee-block sectionRb-{{i}} {{blockId}}-sidebar-item-{{i}}  {{parentPosition ? (blockId+'-p-'+parentPosition+'-c-'+i) : (blockId+'-c-'+i)}}  template-{{templateId}} block-{{ blockId }} {{is_bootstrap ? 'row': ''}} {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}} {{sectionCustomClass[i] ? sectionCustomClass[i]: ''}} \">            \r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as position; trackBy: trackByIdBlock;\">\r\n                <ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position,i:i, activePosition: pos}\">\r\n                </ng-template>\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- cellData template -->\r\n<ng-template #cellData let-field=\"field\" let-position=\"position\" let-i=\"i\" let-activePosition=\"activePosition\">\r\n    <ng-container *ngIf=\"field.field_type === 'RBLite' || field.field_type === 'Repeatable Block'\">\r\n        <rb-renderer [class]=\"rbUtil.getFieldClasses(field, position)\"\r\n            [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"repeatebleFieldsRows[i]?.[field.unique_id]\" \r\n            [parentBlock]=\"fieldData.unique_id\" [parentPosition]=\"i\" [fieldData]=\"field\" [templateId]=\"templateId\"             \r\n            [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n        </rb-renderer>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"field.field_type !== 'RBLite' && field.field_type !== 'Repeatable Block'\">\r\n        <div [class]=\"rbUtil.getFieldClasses(field, position)\">\r\n            <ng-container *ngComponentOutlet=\"rbUtil.getComponentType(field.field_type) | async; inputs: rbUtil.getComponentInputs(field, i, activePosition)\"></ng-container>\r\n        </div>\r\n    </ng-container>\r\n</ng-template>\r\n \r\n " }]
    }], () => [{ type: UserDataHandlerService }, { type: AppDataService }, { type: ApiDataService }, { type: CEEInternalEmitterService }, { type: SharedEventsServiceService }, { type: i8.MatSnackBar }, { type: WfeStepLoaderService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: CeeApiService }, { type: i0.Renderer2 }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], parentPosition: [{
            type: Input
        }], rowData: [{
            type: Input
        }], parentBlock: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RBRendererComponent, { className: "RBRendererComponent", filePath: "lib\\components\\rb-renderer\\rb-renderer.component.ts", lineNumber: 32 }); })();

export { RBRendererComponent };
//# sourceMappingURL=ng-cee-core-rb-renderer.component-Dt38iAoc.mjs.map
