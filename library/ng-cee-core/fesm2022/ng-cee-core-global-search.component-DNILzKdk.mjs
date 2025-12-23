import * as i0 from '@angular/core';
import { forwardRef, Component, HostListener, ViewChild, Input } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i13 from '@angular/common';
import { CommonModule, NgIf } from '@angular/common';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { C as ConditionalUtil, k as WfeEncryptionUtil, l as SessionKeyUtil, a as CommonUtil, A as APIKeyUtil, G as GenerateFieldRow, W as WFEEventListHandler, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, p as FileUploadService, V as ViewRendererComponent, P as ProgressBarRendererComponent, B as BlockRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { Subject, debounceTime, filter, takeUntil, fromEvent } from 'rxjs';
import * as i11 from '@angular/router';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { C as CalculationUtil } from './ng-cee-core-calculation-BbHcUYtr.mjs';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i1 from '@angular/cdk/overlay';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
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

const _c0 = ["overlayTemplate"];
const _c1 = ["floatingBox"];
const _c2 = ["searchInput"];
function GlobalSearchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "input", 5, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function GlobalSearchComponent_ng_container_0_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function GlobalSearchComponent_ng_container_0_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onShowOverlay()); })("keyup", function GlobalSearchComponent_ng_container_0_Template_input_keyup_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearchInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 6);
    i0.ɵɵlistener("click", function GlobalSearchComponent_ng_container_0_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearchInput($event)); });
    i0.ɵɵelement(6, "i", 7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("search-input ", ctx_r1.fieldData.field_style.custom_class_name, "-input");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text || "Search...");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchTerm);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Search")("aria-expanded", ctx_r1.isOverlayVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("search-icon-btn ", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
} }
function GlobalSearchComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "div", 11)(2, "div", 12)(3, "div", 11);
    i0.ɵɵelementEnd();
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const pos_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData.block_id, "-", pos_r4, " ", field_r3.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r3.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r3)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r3)("position", pos_r4)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r3))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_ng_container_1_Template, 2, 13, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.blockRenderedData.block_style && ctx_r1.blockRenderedData.block_style.custom_class_name && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_Template, 2, 13, "section", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData && ctx_r1.isVisible);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const pos_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.defaultBlockRenderedData.block_id, "-", pos_r6, " ", field_r5.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r5.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r5)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r5)("position", pos_r6)("templateId", ctx_r1.templateId)("rootData", ctx_r1.defaultBlockRootData)("rowData", ctx_r1.generateRowData(field_r5))("mandatoryCondition", ctx_r1.defaultBlockMandatoryCondition)("editableCondition", ctx_r1.defaultBlockEditableCondition);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_ng_container_1_Template, 2, 13, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.defaultBlockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.defaultBlockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.defaultBlockRenderedData.block_style && ctx_r1.defaultBlockRenderedData.block_style.custom_class_name && ctx_r1.defaultBlockCustomClassCondition ? ctx_r1.defaultBlockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.defaultBlockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_Template, 2, 13, "section", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.defaultBlockRenderedData && ctx_r1.isVisible);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 2)(2, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showSearchHistoryBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSearchHistoryBlock && ctx_r1.isSearchHistoryBlockApplicable);
} }
function GlobalSearchComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 8);
    i0.ɵɵtemplate(2, GlobalSearchComponent_ng_template_1_div_2_Template, 4, 0, "div", 9)(3, GlobalSearchComponent_ng_template_1_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.fieldData.field_style.custom_class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.loaders == null ? null : ctx_r1.loaders.isSearchLoading) || (ctx_r1.loaders == null ? null : ctx_r1.loaders.isHistoryLoading));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.loaders == null ? null : ctx_r1.loaders.isSearchLoading) && !(ctx_r1.loaders == null ? null : ctx_r1.loaders.isHistoryLoading));
} }
class GlobalSearchComponent {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    cdr;
    overlay;
    positionBuilder;
    vcr;
    zone;
    elementRef;
    fileUploadService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
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
    keepState = false;
    rowData;
    floatingBox;
    searchInput;
    isOpen = true;
    // Search properties
    searchTerm = '';
    searchResults = [];
    isLoading = false;
    searchAttempted = false;
    isOverlayVisible = false;
    // Overlay reference
    overlayRef;
    // Debounce control
    searchSubject = new Subject();
    destroy$ = new Subject();
    fieldName;
    commonUtil;
    apiKeyUtil;
    generateUtil;
    is_bootstrap;
    isVisible;
    conditionalUtil;
    variableObj = {};
    additionalParameter = {};
    searchblockId;
    defaultBlockId;
    skipLoader;
    debounceMs = 300; // Default debounce time in milliseconds
    searchMinLength = 1; // Default minimum search length
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
    defaultBlockRenderedData;
    defaultBlockAdditionalParameter = {};
    defaultBlockCustomClassCondition = true;
    defaultBlockVariableObj = {};
    defaultBlockRootData;
    defaultBlockMandatoryCondition;
    defaultBlockEditableCondition;
    conditionObj = {};
    isEditable = false;
    isMandatory = false;
    //rowData = {};  
    progressBlock = {};
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isSearchHistoryBlockApplicable = false;
    showSearchHistoryBlock = false;
    wfeEncryption;
    calculationUtil;
    sessionKeyUtil;
    wfeEventListHandler;
    loaders = {
        isSearchLoading: false,
        isHistoryLoading: false
    };
    presetData;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdr, overlay, positionBuilder, vcr, zone, elementRef, fileUploadService) {
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.cdr = cdr;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.vcr = vcr;
        this.zone = zone;
        this.elementRef = elementRef;
        this.fileUploadService = fileUploadService;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.calculationUtil = new CalculationUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        this.wfeEventListHandler = new WFEEventListHandler(this.ceeApiService, this.router, this.sharedEventsService, this.internalCEEEmitter, this.wfeStepLoaderService, this.appDataService, this.apiDataService, this.dialog, this.snackBar, this.http, this.fileUploadService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
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
        this.defaultBlockMandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        this.defaultBlockEditableCondition = JSON.parse(JSON.stringify(this.editableCondition));
    }
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    ngOnInit() {
        this.presetData = this.rowData;
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        this.defaultBlockRootData = JSON.parse(JSON.stringify(this.rootData));
        if (this.fieldData.is_display === 2) {
            const emitObj = {
                apiKey: this.fieldData.unique_id,
                value: ''
            };
            this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
        }
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] =
            this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] =
            this.sharedEventsService.emitApiSuccessResponse.subscribe((res) => {
                this.stopLoader();
                this.onFieldDataUpdated(null, null);
            });
        this.fieldName = this.fieldData?.field_label;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
                switch (paramter.parameter_type) {
                    case 'CEE_Search_Result_Block':
                        this.searchblockId = paramter.value;
                        break;
                    case 'CEE_Search_History_Block':
                        this.defaultBlockId = paramter.value;
                        this.isSearchHistoryBlockApplicable = this.defaultBlockId ? true : false;
                        break;
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                    case 'CEE_Search_Delay_Ms':
                        this.debounceMs = this.additionalParameter['CEE_Search_Delay_Ms']
                            ? parseInt(this.additionalParameter['CEE_Search_Delay_Ms']) : 100;
                        break;
                    case 'CEE_Min_Search_Length':
                        this.searchMinLength = this.additionalParameter['CEE_Min_Search_Length']
                            ? parseInt(this.additionalParameter['CEE_Min_Search_Length']) : 1;
                }
            }
            if (this.isVisible === true) {
                if (this.searchblockId) {
                    this.renderSearchBolckData();
                }
                if (this.defaultBlockId) {
                    this.renderDefaultBlockData();
                }
            }
            // set progress bar
            this.setProgressBlockRenderer();
            if (this.fieldData.is_display === 2) {
                const emitObj = {
                    apiKey: this.fieldData.unique_id,
                    value: ''
                };
                this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
            }
        }
        if (this.fieldData.field_type != "Attachment Block") {
            this.appData = {
                id: this.fieldData.unique_id,
                stepId: this.stepId,
                apiKey: 'Generic Block',
                linkedBlockId: this.fieldData.additional_parameters.filter(e => e.parameter_type === "CEE_Search_Result_Block").length > 0 ? this.fieldData.additional_parameters.filter(e => e.parameter_type === "CEE_Search_Result_Block")[0]['value'] : '',
                isRepeatedField: false,
                repeatedBlockFieldId: '',
                responseApiKey: this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key)),
                requestApiKey: this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                dataFormatSeparator: '',
                mandatory: this.isMandatory,
                editable: this.isEditable,
                visible: this.isVisible,
                value: '',
                isValid: true
            };
            this.appDataService.addAppData(this.appData);
        }
        // Set up debounced search
        this.searchSubject.pipe(debounceTime(this.debounceMs), filter(term => term.length >= this.searchMinLength), // Allow empty term for clearing results
        takeUntil(this.destroy$)).subscribe(term => {
            this.performSearch(term);
        });
        // Click outside listener
        this.setupOutsideClickListener();
        //On Navigation End, update search term from appData
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart || event instanceof NavigationEnd) {
                this.getPreviousSearchTerm();
            }
        });
        // Listen for empty session events to refresh search term
        this.sharedEventsService.emitForEmptySession.subscribe((res) => {
            if (res.hasOwnProperty('unique_ids') && res['unique_ids'].includes(this.fieldData.unique_id)) {
                this.getPreviousSearchTerm();
            }
        });
        // Fetch the previous search term
        this.getPreviousSearchTerm();
    }
    // Fetch the previous search term from appData
    getPreviousSearchTerm() {
        //console.log("Called getPreviousSearchTerm");
        const value = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        if (value) {
            this.searchTerm = value;
        }
        else {
            this.searchTerm = '';
        }
    }
    trackById(index, item) {
        return item.unique_id;
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.searchblockId) {
                this.renderSearchBolckData();
            }
            if (this.defaultBlockId) {
                this.renderDefaultBlockData();
            }
        }
    }
    renderSearchBolckData() {
        if (window['blockLogs'] === undefined) {
            window['blockLogs'] = [];
            window['blockDataLogs'] = [];
        }
        if (window['blockLogs'] && window['blockLogs'].indexOf(this.searchblockId) === -1) {
            window['blockLogs'].push(this.searchblockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.searchblockId).subscribe((data) => {
                window['blockDataLogs'].push({ searchblockId: this.searchblockId, blockData: data });
                this.processBlockData(data);
            });
        }
        else if (window['blockDataLogs']) {
            let blockData = window['blockDataLogs'].filter(e => { if (e.searchblockId == this.searchblockId)
                return e.blockData; }).length > 0 ? window['blockDataLogs'].filter(e => { if (e.searchblockId == this.searchblockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processBlockData(blockData);
            }
        }
    }
    processBlockData(data) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
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
                this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.blockRenderedData['custom_class_condition'] && this.blockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.blockRenderedData['custom_class_condition']['query'] != '') {
            this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
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
        this.cdr.detectChanges();
    }
    renderDefaultBlockData() {
        if (window['defaultBlockLogs'] === undefined) {
            window['defaultBlockLogs'] = [];
            window['defaultBlockDataLogs'] = [];
        }
        if (window['defaultBlockLogs'] && window['defaultBlockLogs'].indexOf(this.defaultBlockId) === -1) {
            window['defaultBlockLogs'].push(this.defaultBlockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.defaultBlockId).subscribe((data) => {
                window['defaultBlockDataLogs'].push({ defaultBlockId: this.defaultBlockId, blockData: data });
                this.processDefaultBlockData(data);
            });
        }
        else if (window['defaultBlockDataLogs']) {
            let blockData = window['defaultBlockDataLogs'].filter(e => { if (e.defaultBlockId == this.defaultBlockId)
                return e.blockData; }).length > 0 ? window['defaultBlockDataLogs'].filter(e => { if (e.defaultBlockId == this.defaultBlockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processDefaultBlockData(blockData);
            }
        }
    }
    processDefaultBlockData(data) {
        this.defaultBlockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        if (this.defaultBlockRenderedData.additional_parameters && this.defaultBlockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.defaultBlockRenderedData.additional_parameters) {
                this.defaultBlockAdditionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.defaultBlockMandatoryCondition.fields = fields;
                            this.defaultBlockEditableCondition.fields = fields;
                            // this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.defaultBlockMandatoryCondition.exceptionFields = fields;
                        this.defaultBlockEditableCondition.exceptionFields = fields;
                        // this.visibleCondition.exceptionFields = fields;
                        break;
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.defaultBlockRenderedData.conditional_visible && this.defaultBlockRenderedData.conditional_visible.length > 0) ||
            (this.defaultBlockRenderedData.conditional_editable && this.defaultBlockRenderedData.conditional_editable.length > 0) ||
            (this.defaultBlockRenderedData.conditional_mandatory && this.defaultBlockRenderedData.conditional_mandatory.length > 0)) {
            this.defaultBlockVariableObj[this.defaultBlockRenderedData.block_id + '_emitOnDataSetOrUpdatedForGenericBlock'] =
                this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onDefaultFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.defaultBlockRenderedData['custom_class_condition'] && this.defaultBlockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.defaultBlockRenderedData['custom_class_condition']['query'] != '') {
            this.defaultBlockCustomClassCondition = this.conditionalUtil.checkCustomClass(this.defaultBlockRenderedData, String(this.appData.id), '');
            this.defaultBlockVariableObj[this.defaultBlockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.setDefaultFieldValueOnSetValuesEvent(res.value);
                });
        }
        /* if (this.defaultBlockRenderedData.conditional_visible && this.defaultBlockRenderedData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        } */
        if (this.defaultBlockRenderedData.conditional_editable && this.defaultBlockRenderedData.conditional_editable.length > 0) {
            this.defaultBlockEditableCondition.isActive = true;
        }
        if (this.defaultBlockRenderedData.conditional_mandatory && this.defaultBlockRenderedData.conditional_mandatory.length > 0) {
            this.defaultBlockMandatoryCondition.isActive = true;
        }
        this.defaultBlockRootData['blockFields'][this.defaultBlockRenderedData.block_id] = [];
        for (let field of this.defaultBlockRenderedData.block_fields) {
            this.defaultBlockRootData['blockFields'][this.defaultBlockRenderedData.block_id].push(field.unique_id);
        }
        this.cdr.detectChanges();
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
    onDefaultFieldDataUpdatedForGenericBlock(fieldId, value) {
        if (this.additionalParameter['OverrideConditions'] !== 'NONE') {
            /* const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined && this.isFieldDisplay === false) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            } */
            const editable = this.conditionalUtil.checkEditable(this.defaultBlockRenderedData, fieldId, value);
            if (editable !== undefined) {
                this.defaultBlockEditableCondition.value = editable;
                this.setOverride(editable, 'defaultBlockEditableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.defaultBlockRenderedData, fieldId, value);
            if (mandatory !== undefined) {
                this.defaultBlockMandatoryCondition.value = mandatory;
                this.setOverride(mandatory, 'defaultBlockMandatoryCondition');
            }
            // this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.defaultBlockEditableCondition = JSON.parse(JSON.stringify(this.defaultBlockEditableCondition));
            this.defaultBlockMandatoryCondition = JSON.parse(JSON.stringify(this.defaultBlockMandatoryCondition));
        }
    }
    setOverride(editable, arg1) {
        throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    setDefaultFieldValueOnSetValuesEvent(data) {
        this.defaultBlockCustomClassCondition = this.conditionalUtil.checkCustomClass(this.defaultBlockRenderedData, String(this.appData.id), '');
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    closeOverlay() {
        if (this.overlayRef) {
            this.showSearchHistoryBlock = false;
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    onWindowScroll() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.checkShowBlockCondition();
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
    onWindowResize() {
        // If overlay is currently open, update its width
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            // Get the new width of the search input
            const newInputWidth = this.searchInput.nativeElement.getBoundingClientRect().width;
            // Update the overlay width
            this.overlayRef.updateSize({ width: `${newInputWidth}px` });
            // Optionally, update the position as well
            this.overlayRef.updatePosition();
        }
    }
    onShowOverlay() {
        if (!this.isSearchHistoryBlockApplicable && !this.searchTerm.trim().length) {
            this.showSearchHistoryBlock = false;
            return;
        }
        this.checkShowBlockCondition();
        if (this.showSearchHistoryBlock) {
            this.loaders.isHistoryLoading = true;
            // Show overlay with loader
            this.viewOverlay();
            // Trigger click event to load history data
            this.onComponentEvent('onClick');
        }
        else {
            this.viewOverlay();
        }
    }
    checkShowBlockCondition() {
        if (this.searchTerm && this.searchTerm.trim().length >= this.searchMinLength) {
            this.showSearchHistoryBlock = false;
        }
        else {
            this.showSearchHistoryBlock = true;
        }
    }
    viewOverlay() {
        if (this.overlayRef) {
            return;
        }
        const inputWidth = this.searchInput.nativeElement.getBoundingClientRect().width;
        const positionStrategy = this.positionBuilder
            .flexibleConnectedTo(this.searchInput)
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
            hasBackdrop: false,
            width: `${inputWidth}px`,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        const portal = new TemplatePortal(this.overlayTemplate, this.vcr);
        this.overlayRef.attach(portal);
        this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    }
    onSearchInput(event) {
        // Handle Escape key
        if (event.key === 'Escape') {
            this.closeOverlay();
            return;
        }
        const term = this.searchTerm?.trim();
        if (event.key === 'Backspace') {
            this.updateDataOnChange(term);
        }
        if (term.length < this.searchMinLength && term.length !== 0) {
            return;
        }
        // Clear results if term is empty
        if (!term || term.length === 0) {
            if (this.isSearchHistoryBlockApplicable) {
                this.showSearchHistoryBlock = true;
            }
            else {
                this.closeOverlay();
            }
            return;
        }
        // this.viewOverlay();
        // Send term to debounced subject
        this.searchSubject.next(term);
    }
    updateDataOnChange(term) {
        // Update appData with the search term
        this.appDataService.updateAppData({
            ...this.appData,
            value: term,
            visible: this.isVisible,
            editable: this.isEditable,
            mandatory: this.isMandatory
        });
    }
    // Set up click outside listener
    setupOutsideClickListener() {
        fromEvent(document, 'click')
            .pipe(filter(event => {
            const clickTarget = event.target;
            const isOutside = !this.elementRef.nativeElement.contains(clickTarget) &&
                this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget);
            return isOutside;
        }), takeUntil(this.destroy$))
            .subscribe(() => {
            this.zone.run(() => this.closeOverlay());
        });
    }
    performSearch(term) {
        // Hide the overlay if it's open
        this.checkShowBlockCondition();
        this.loaders.isSearchLoading = true;
        this.viewOverlay();
        this.updateDataOnChange(term);
        this.onComponentEvent('OnKeyUp');
    }
    ngOnChanges(changes) {
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        // if (changes.mandatoryCondition) {
        //   this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        // }
    }
    setConditions(childConditions, type) {
        let check = true;
        if (childConditions && childConditions.exceptionFields && childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
            check = false;
        }
        if (check && childConditions && childConditions.isActive) {
            if (childConditions.fields && childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else if (childConditions.overrideAll) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else {
                this.conditionObj[type] = false;
            }
        }
    }
    stopLoader() {
        this.loaders.isSearchLoading = false;
        this.loaders.isHistoryLoading = false;
    }
    onComponentEvent(type, primaryData = {}, isDefault = true, payLoad, displayType = '') {
        if (this.fieldData.event_list && this.fieldData.event_list.length > 0) {
            const _this = this;
            setTimeout(() => {
                _this.wfeEventListHandler.onComponentEventBatch(_this.fieldData, _this.presetData, _this.stepId, type, primaryData, isDefault, payLoad, displayType);
            }, 0);
        }
    }
    ngOnDestroy() {
        // Close the overlay if it's open
        this.closeOverlay();
        // Complete and clean up all RxJS subjects
        this.destroy$.next();
        this.destroy$.complete();
        if (this.searchSubject) {
            this.searchSubject.complete();
        }
        // Unsubscribe from all subscriptions in variableObj
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        // Unsubscribe from all subscriptions in defaultBlockVariableObj
        for (const key in this.defaultBlockVariableObj) {
            if (this.defaultBlockVariableObj[key]) {
                this.defaultBlockVariableObj[key].unsubscribe();
            }
        }
    }
    static ɵfac = function GlobalSearchComponent_Factory(t) { return new (t || GlobalSearchComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FileUploadService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GlobalSearchComponent, selectors: [["app-global-search-component"]], viewQuery: function GlobalSearchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.floatingBox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
        } }, hostBindings: function GlobalSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function GlobalSearchComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow)("resize", function GlobalSearchComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                CommonUtil
            ]), i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["overlayTemplate", ""], ["searchInput", ""], [4, "ngIf"], [1, "global-search-container"], [1, "search-input-wrapper"], ["type", "text", 3, "ngModelChange", "click", "keyup", "placeholder", "ngModel"], [3, "click"], [1, "search-icon"], [1, "container"], ["class", "shimmer-loader", 4, "ngIf"], [1, "shimmer-loader"], [1, "shimmer-line"], [1, "shimmer-line", "long"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"]], template: function GlobalSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GlobalSearchComponent_ng_container_0_Template, 7, 10, "ng-container", 2)(1, GlobalSearchComponent_ng_template_1_Template, 4, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [CommonModule, i13.NgClass, i13.NgForOf, i13.NgIf, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgModel, ViewRendererComponent], styles: [".container[_ngcontent-%COMP%]{display:flex}.column[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:column;gap:8px}.search-overlay[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;box-shadow:0 6px 16px #00000026;padding:0;width:100%;max-height:80vh;overflow-y:auto}.search-overlay[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:20px}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:15px}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .search-term[_ngcontent-%COMP%]{font-size:16px;color:#333}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:transparent;border:none;font-size:22px;color:#666;cursor:pointer;padding:0;line-height:1}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{color:#333}.search-overlay[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:30px 0}.search-overlay[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:24px;height:24px;border:2px solid #f3f3f3;border-top:2px solid #0078d4;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite;margin-right:10px}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.search-overlay[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{text-align:center;padding:30px 0;color:#666}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]{padding:15px;border-bottom:1px solid #eee;cursor:pointer;transition:background-color .2s}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:hover{background-color:#f9f9f9}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#0078d4;margin-bottom:5px}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-description[_ngcontent-%COMP%]{font-size:14px;color:#555;margin-bottom:8px}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-metadata[_ngcontent-%COMP%]{display:flex;font-size:12px;color:#777}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-metadata[_ngcontent-%COMP%]   .result-category[_ngcontent-%COMP%]{background-color:#f0f0f0;padding:2px 8px;border-radius:12px;margin-right:10px}.search-overlay[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{background-color:#fff8c5;font-weight:700}.shimmer-loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:16px;max-width:100%;width:100%;margin:0 auto}.shimmer-line[_ngcontent-%COMP%]{height:14px;background:#cecece;border-radius:4px;position:relative;overflow:hidden}.shimmer-line.short[_ngcontent-%COMP%]{width:40%}.shimmer-line.long[_ngcontent-%COMP%]{width:80%}.shimmer-line[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:-100px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(81,79,79,.4),transparent);animation:_ngcontent-%COMP%_shimmer 2.5s infinite}@keyframes _ngcontent-%COMP%_shimmer{0%{transform:translate(0)}to{transform:translate(100%)}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalSearchComponent, [{
        type: Component,
        args: [{ selector: 'app-global-search-component', standalone: true, providers: [
                    CommonUtil
                ], imports: [CommonModule, FormsModule, ProgressBarRendererComponent, NgIf, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"global-search-container\">\r\n        <div class=\"search-input-wrapper\">\r\n            <input type=\"text\" class=\"search-input {{fieldData.field_style.custom_class_name}}-input\"\r\n                placeholder=\"{{fieldData.placeholder_text || 'Search...'}}\" [(ngModel)]=\"searchTerm\"\r\n                (click)=\"onShowOverlay()\" (keyup)=\"onSearchInput($event)\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Search'\"\r\n                [attr.aria-expanded]=\"isOverlayVisible\" #searchInput>\r\n            <button class=\"search-icon-btn {{fieldData.field_style.custom_class_name}}-btn\"\r\n                (click)=\"onSearchInput($event)\">\r\n                <i class=\"search-icon\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #overlayTemplate>\r\n    <div class=\"{{fieldData.field_style.custom_class_name}}\">\r\n        <div class=\"container\">\r\n            <!-- Loading Indicator -->\r\n            <div class=\"shimmer-loader\" *ngIf=\"loaders?.isSearchLoading || loaders?.isHistoryLoading\">\r\n                <div class=\"shimmer-line\"></div>\r\n                <div class=\"shimmer-line long\"></div>\r\n                <div class=\"shimmer-line\"></div>\r\n            </div>\r\n\r\n            <!-- HTML FOR ALL GENERIC BLOCK -->\r\n            <ng-container *ngIf=\"!loaders?.isSearchLoading && !loaders?.isHistoryLoading\">\r\n                <ng-container *ngIf=\"!showSearchHistoryBlock\">\r\n                    <section id=\"{{ blockRenderedData.block_id }}\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameter['Aria-Role']\"\r\n                        class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n                        *ngIf=\"blockRenderedData  && isVisible\"\r\n                        [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n                        <ng-container\r\n                            *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                                [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\"\r\n                                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n\r\n                    </section>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"showSearchHistoryBlock && isSearchHistoryBlockApplicable\">\r\n                    <section id=\"{{ defaultBlockRenderedData.block_id }}\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameter['Aria-Role']\"\r\n                        class=\"cee-block generic-block template-{{templateId}} block-{{ defaultBlockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n                        *ngIf=\"defaultBlockRenderedData && isVisible\"\r\n                        [ngClass]=\"defaultBlockRenderedData.block_style && defaultBlockRenderedData.block_style.custom_class_name && defaultBlockCustomClassCondition ? defaultBlockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n                        <ng-container\r\n                            *ngFor=\"let field of defaultBlockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                class=\"app-view-renderer-{{ defaultBlockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                                [rootData]=\"defaultBlockRootData\" [rowData]=\"generateRowData(field)\"\r\n                                [mandatoryCondition]=\"defaultBlockMandatoryCondition\"\r\n                                [editableCondition]=\"defaultBlockEditableCondition\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n\r\n                    </section>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>", styles: [".container{display:flex}.column{padding:10px;display:flex;flex-direction:column;gap:8px}.search-overlay{background-color:#fff;border-radius:4px;box-shadow:0 6px 16px #00000026;padding:0;width:100%;max-height:80vh;overflow-y:auto}.search-overlay .container{padding:20px}.search-overlay .search-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:15px}.search-overlay .search-header .search-term{font-size:16px;color:#333}.search-overlay .search-header .close-btn{background:transparent;border:none;font-size:22px;color:#666;cursor:pointer;padding:0;line-height:1}.search-overlay .search-header .close-btn:hover{color:#333}.search-overlay .loading-indicator{display:flex;align-items:center;justify-content:center;padding:30px 0}.search-overlay .loading-indicator .spinner{width:24px;height:24px;border:2px solid #f3f3f3;border-top:2px solid #0078d4;border-radius:50%;animation:spin 1s linear infinite;margin-right:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.search-overlay .no-results{text-align:center;padding:30px 0;color:#666}.search-overlay .search-results .result-item{padding:15px;border-bottom:1px solid #eee;cursor:pointer;transition:background-color .2s}.search-overlay .search-results .result-item:last-child{border-bottom:none}.search-overlay .search-results .result-item:hover{background-color:#f9f9f9}.search-overlay .search-results .result-item .result-title{font-size:16px;font-weight:500;color:#0078d4;margin-bottom:5px}.search-overlay .search-results .result-item .result-description{font-size:14px;color:#555;margin-bottom:8px}.search-overlay .search-results .result-item .result-metadata{display:flex;font-size:12px;color:#777}.search-overlay .search-results .result-item .result-metadata .result-category{background-color:#f0f0f0;padding:2px 8px;border-radius:12px;margin-right:10px}.search-overlay .highlight{background-color:#fff8c5;font-weight:700}.shimmer-loader{display:flex;flex-direction:column;gap:10px;padding:16px;max-width:100%;width:100%;margin:0 auto}.shimmer-line{height:14px;background:#cecece;border-radius:4px;position:relative;overflow:hidden}.shimmer-line.short{width:40%}.shimmer-line.long{width:80%}.shimmer-line:before{content:\"\";position:absolute;top:0;left:-100px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(81,79,79,.4),transparent);animation:shimmer 2.5s infinite}@keyframes shimmer{0%{transform:translate(0)}to{transform:translate(100%)}}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: FileUploadService }], { overlayTemplate: [{
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
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], floatingBox: [{
            type: ViewChild,
            args: ['floatingBox']
        }], searchInput: [{
            type: ViewChild,
            args: ['searchInput']
        }], onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "lib\\components\\global-search\\global-search.component.ts", lineNumber: 52 }); })();
function orwardRef(arg0) {
    throw new Error('Function not implemented.');
}

export { GlobalSearchComponent };
//# sourceMappingURL=ng-cee-core-global-search.component-DNILzKdk.mjs.map
