import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewChild, Input } from '@angular/core';
import { j as BaseView, k as WfeEncryptionUtil, l as SessionKeyUtil, o as UndoRedo, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i7$1 from 'ngx-quill';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import ImageResize from 'quill-image-resize';
import { Mention, MentionBlot } from 'quill-mention';
import heic2any from 'heic2any';
import * as i1 from '@angular/platform-browser';
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
import '@angular/router';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
import 'ngx-image-zoom';
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

const _c0 = ["contentCtrl"];
const _c1 = ["quillFile"];
const _c2 = ["quillEditor"];
function CeeEditorComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeEditorComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 16);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeEditorComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeEditorComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 13)(2, CeeEditorComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeEditorComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeEditorComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeEditorComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, " Field is required. ");
    i0.ɵɵelementEnd();
} }
function CeeEditorComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "h6");
    i0.ɵɵtext(2, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.sanitizedContent, i0.ɵɵsanitizeHtml);
} }
function CeeEditorComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "h6");
    i0.ɵɵtext(2, "Format-Html");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.inputValue);
} }
function CeeEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, CeeEditorComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 5)(4, CeeEditorComponent_div_0_span_4_Template, 2, 0, "span", 6)(5, CeeEditorComponent_div_0_button_5_Template, 2, 2, "button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8)(7, "div", 9)(8, "quill-editor", 10, 0);
    i0.ɵɵlistener("dragover", function CeeEditorComponent_div_0_Template_quill_editor_dragover_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDragOver($event)); })("dragleave", function CeeEditorComponent_div_0_Template_quill_editor_dragleave_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.enableUploadOnDragOver(false)); })("drop", function CeeEditorComponent_div_0_Template_quill_editor_drop_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleDrop($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeEditorComponent_div_0_Template_quill_editor_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onEditorCreated", function CeeEditorComponent_div_0_Template_quill_editor_onEditorCreated_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorInstance($event)); })("onContentChanged", function CeeEditorComponent_div_0_Template_quill_editor_onContentChanged_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onContentChanged($event)); })("onFocus", function CeeEditorComponent_div_0_Template_quill_editor_onFocus_8_listener() { i0.ɵɵrestoreView(_r1); const contentCtrl_r3 = i0.ɵɵreference(9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTouched(contentCtrl_r3)); })("ngModelChange", function CeeEditorComponent_div_0_Template_quill_editor_ngModelChange_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreview()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CeeEditorComponent_div_0_div_11_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeEditorComponent_div_0_div_12_Template, 4, 1, "div", 12)(13, CeeEditorComponent_div_0_div_13_Template, 5, 1, "div", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const contentCtrl_r3 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-component-key", ctx_r1.componentKey);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", "  ", !ctx_r1.valid || contentCtrl_r3.invalid && ctx_r1.isMandatory && contentCtrl_r3.dirty ? "invalid" : "valid", " ", contentCtrl_r3.invalid && contentCtrl_r3.touched ? "invalid-editor" : "", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("modules", ctx_r1.editorModules)("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("data-editor-key", ctx_r1.componentKey);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", contentCtrl_r3.invalid && contentCtrl_r3.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewHtml);
} }
// import "quill-mention";
// import "quill-mention/autoregister";
let globalDefaultKeyboardBindings = null;
try {
    if (!globalDefaultKeyboardBindings) {
        const Keyboard = Quill.import('modules/keyboard');
        if (Keyboard && Keyboard.DEFAULTS && Keyboard.DEFAULTS.bindings) {
            // Safely copy keyboard bindings with validation
            const originalBindings = Keyboard.DEFAULTS.bindings;
            if (originalBindings && typeof originalBindings === 'object') {
                globalDefaultKeyboardBindings = JSON.parse(JSON.stringify(originalBindings));
            }
        }
    }
    Quill.register('modules/imageResize', ImageResize.default);
    Quill.register({ "blots/mention": MentionBlot, "modules/mention": Mention });
    const imports = Quill.imports;
    const imageResizeRegistered = !!imports['modules/imageResize'];
    const mentionRegistered = !!imports['modules/mention'];
}
catch (e) {
    console.error('❌ Error registering Quill modules:', e);
    // Reset global bindings on error to prevent corruption
    globalDefaultKeyboardBindings = null;
}
class CeeEditorComponent extends BaseView {
    sanitizer;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    cdr;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    contentCtrl;
    wfeEncryption;
    sessionKeyUtil;
    inputValue = '';
    html_id = '';
    isValid = true;
    undoRedoUtil;
    imageResize = ImageResize.default;
    isReadOnly = false;
    quillFileRef;
    quillFile;
    meQuillRef;
    sanitizedContent = '';
    previewContent = false;
    previewHtml = false;
    editorModules = {};
    allOptions = [];
    quillEditor;
    uploadOutOfEditor = false;
    searchStr = null;
    // Component instance tracking for generic blocks
    componentKey = '';
    isInitialized = false;
    lastModifiedImage = "";
    timeoutIds = [];
    // Essential functionality variables (not debug counters)
    lastEventTimestamp = 0;
    eventCallsInShortTime = 0;
    isUpdatingFieldData = false;
    debounceUpdateTimeout = null;
    isProgrammaticallySettingContent = false;
    urlDetectionTimeout = null;
    isApiSearchEnabledForMention = false;
    searchDebounceTime = 300;
    requestApiKeyForSearch = '';
    internalAPIResponseEmitter = new EventEmitter();
    currentRenderList = [];
    currentSearchTerm = '';
    mentionSearchTimeout = null;
    lastMentionSearchTerm = '';
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, cdr) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.sanitizer = sanitizer;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdr = cdr;
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.undoRedoUtil = new UndoRedo();
        this.verifyQuillModules();
    }
    ngOnInit() {
        this.componentKey = `cee-editor-${this.fieldData?.html_id || 'unknown'}-${Date.now()}`;
        // Ensure keyboard bindings are preserved before initialization
        this.ensureKeyboardBindingsIntegrity();
        // Initialize editor modules early so they're available for template binding
        this.initializeEditorModules();
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.isInitialized = true;
    }
    setupSearchApiCallback() {
        if (this.variableObject['internalEmmitter' + this.appData.id]) {
            this.variableObject['internalEmmitter' + this.appData.id].unsubscribe();
        }
        // Subscribe to internal API response emitter
        this.variableObject['internalEmmitter' + this.appData.id] = this.internalAPIResponseEmitter.subscribe((res) => {
            // Process the API response and update mention list
            this.handleApiMentionResponse(res);
        });
    }
    ngOnDestroy() {
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Clear URL detection timeout
        if (this.urlDetectionTimeout) {
            clearTimeout(this.urlDetectionTimeout);
            this.urlDetectionTimeout = null;
        }
        // Clear debounce timeout
        if (this.debounceUpdateTimeout) {
            clearTimeout(this.debounceUpdateTimeout);
            this.debounceUpdateTimeout = null;
        }
        if (this.variableObject['internalEmmitter' + this.appData.id]) {
            this.variableObject['internalEmmitter' + this.appData.id].unsubscribe();
        }
        if (this.meQuillRef) {
            try {
                this.cleanupMentionModule();
                this.meQuillRef.off('text-change');
                this.meQuillRef.off('selection-change');
                this.meQuillRef.off('editor-change');
                const toolbar = this.meQuillRef.getModule('toolbar');
                if (toolbar) {
                    if (toolbar.container) {
                        toolbar.container.innerHTML = '';
                    }
                    if (toolbar.handlers) {
                        toolbar.handlers = {};
                    }
                }
                this.meQuillRef.setContents([]);
                const editorElement = this.meQuillRef.root;
                if (editorElement && editorElement.parentNode) {
                    editorElement.innerHTML = '';
                }
            }
            catch (e) {
                console.warn('Error during Quill cleanup:', e);
            }
            this.meQuillRef = null;
        }
        this.quillEditor = null;
        this.contentCtrl = null;
        this.quillFileRef = null;
        this.editorModules = {};
        this.inputValue = '';
        this.html_id = '';
        this.searchStr = null;
        this.undoRedoUtil = null;
        this.wfeEncryption = null;
        this.sessionKeyUtil = null;
    }
    async onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        this.searchStr = null;
        if (this.fieldValue) {
            this.inputValue = this.fieldValue;
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                this.updateFieldData(this.inputValue);
            }
        }
        this.previewContent = this.additionalParameter['CEE_editor_preview'] === "true" ? true : false;
        this.previewHtml = this.additionalParameter['CEE_editor_preview_html'] === "true" ? true : false;
        this.requestApiKeyForSearch = this.additionalParameter['CEE_Search_Request_api_Key_For_Search_input'] || '';
        if (this.requestApiKeyForSearch) {
            this.updateDataOnChange('');
        }
        // Re-initialize editor modules in case additional parameters changed
        this.initializeEditorModules();
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                // Focus on the quill editor instead of a non-existent DOM element
                if (this.quillEditor && this.quillEditor.quillEditor) {
                    this.quillEditor.quillEditor.focus();
                }
            };
        }
        // Note: Don't create manual Quill instance here - let quill-editor component handle it
        // The meQuillRef will be set in getEditorInstance() callback
    }
    /**
     * Validates and normalizes mention items to ensure consistent structure
     */
    validateMentionItem(item, index, type = 'item') {
        if (!item || typeof item !== 'object') {
            return {
                id: index + 1,
                value: `Invalid ${type.charAt(0).toUpperCase() + type.slice(1)}`
            };
        }
        const normalizedItem = {
            id: item.id !== undefined && item.id !== null ? item.id : index + 1,
            value: item.value && typeof item.value === 'string' && item.value.length > 0
                ? item.value
                : `${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`
        };
        if (typeof normalizedItem.value !== 'string' || normalizedItem.value.length === 0) {
            normalizedItem.value = `Default ${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`;
        }
        return normalizedItem;
    }
    /**
     * Safely renders list with error handling and fallbacks
     */
    safeRenderList(renderList, items, searchTerm, type = 'values') {
        const normalizedItems = items.map((item, index) => this.validateMentionItem(item, index, type === 'values' ? 'item' : 'match'));
        this.safeExecute(() => {
            renderList(normalizedItems, searchTerm);
            this.addSafeTimeout(() => this.applyMentionStylingFixes(), 100);
        }, `Failed to render normalized ${type} list`, () => {
            this.renderFallbackList(renderList, searchTerm, type);
        });
    }
    /**
     * Renders fallback list when main rendering fails
     */
    renderFallbackList(renderList, searchTerm, type) {
        this.safeExecute(() => {
            const safeFallbackList = [
                { id: 1, value: `Safe ${type === 'matches' ? 'Match' : 'Item'} 1` },
                { id: 2, value: `Safe ${type === 'matches' ? 'Match' : 'Item'} 2` }
            ];
            renderList(safeFallbackList, searchTerm);
        }, `Even safe fallback render failed`);
    }
    /**
     * Validates entry data for search operations
     */
    isValidEntry(entry, index) {
        if (!entry ||
            !entry.value ||
            typeof entry.value !== 'string' ||
            entry.value.length === 0) {
            return false;
        }
        return true;
    }
    /**
     * Safe array validation utility
     */
    isValidArray(arr, name = 'array') {
        if (!Array.isArray(arr)) {
            return false;
        }
        return true;
    }
    /**
     * Safe array validation with length check
     */
    isNonEmptyArray(arr, name = 'array') {
        return this.isValidArray(arr, name) && arr.length > 0;
    }
    /**
     * Utility for managing timeouts safely
     */
    addSafeTimeout(callback, delay) {
        const timeoutId = setTimeout(callback, delay);
        this.timeoutIds.push(timeoutId);
    }
    /**
     * Utility method to clean up mention module references and event listeners
     */
    cleanupMentionModule(quillInstance) {
        const instance = quillInstance || this.meQuillRef;
        if (!instance)
            return;
        try {
            const mentionModule = instance.getModule('mention');
            if (mentionModule) {
                // Clean up mention event listeners and references
                const propertiesToCleanup = [
                    'onContainerMouseDown',
                    'selectHandler',
                    'mentionList',
                    'values',
                    'existingValues'
                ];
                propertiesToCleanup.forEach(prop => {
                    if (mentionModule[prop]) {
                        if (prop === 'mentionList' || prop === 'values' || prop === 'existingValues') {
                            mentionModule[prop] = null;
                        }
                        else {
                            delete mentionModule[prop];
                        }
                    }
                });
            }
        }
        catch (error) {
            console.error('Error during mention module cleanup:', error);
        }
    }
    /**
     * Try-catch wrapper for safe execution
     */
    safeExecute(operation, errorMessage, fallback) {
        try {
            return operation();
        }
        catch (error) {
            if (typeof fallback === 'function') {
                return fallback();
            }
            return fallback;
        }
    }
    /**
     * Validates and ensures data is array with non-empty string values
     */
    validateDataArray(data, context) {
        if (!this.isValidArray(data, context)) {
            return [];
        }
        return data.filter((item, index) => {
            if (!item || typeof item !== 'object') {
                return false;
            }
            if (!item.hasOwnProperty('value') || !item.value) {
                return false;
            }
            if (typeof item.value !== 'string') {
                this.safeExecute(() => {
                    item.value = String(item.value);
                }, `${context}: Failed to convert value to string at index ${index}`);
                if (typeof item.value !== 'string') {
                    return false;
                }
            }
            if (item.value.length === 0) {
                return false;
            }
            return true;
        });
    }
    /**
     * Utility to check if Quill modules are properly registered (for debugging)
     */
    verifyQuillModules() {
        try {
            const imports = Quill.imports;
            const hasImageResize = !!imports['modules/imageResize'];
            const hasMention = !!imports['modules/mention'];
            return hasImageResize && hasMention;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Validates keyboard binding structure to prevent errors
     */
    validateKeyboardBinding(binding) {
        if (!binding || typeof binding !== 'object') {
            return false;
        }
        // Check if prefix/suffix are properly formed (should be RegExp or undefined)
        if (binding.prefix && typeof binding.prefix !== 'object') {
            return false;
        }
        if (binding.suffix && typeof binding.suffix !== 'object') {
            return false;
        }
        // Ensure prefix/suffix are not empty objects (which cause the .test error)
        if (binding.prefix && Object.keys(binding.prefix).length === 0 && !binding.prefix.test) {
            delete binding.prefix;
        }
        if (binding.suffix && Object.keys(binding.suffix).length === 0 && !binding.suffix.test) {
            delete binding.suffix;
        }
        return true;
    }
    /**
     * Ensures keyboard bindings integrity at the global level
     */
    ensureKeyboardBindingsIntegrity() {
        try {
            if (globalDefaultKeyboardBindings) {
                const Keyboard = Quill.import('modules/keyboard');
                if (Keyboard && Keyboard.DEFAULTS && Keyboard.DEFAULTS.bindings) {
                    // Validate and restore original bindings if they've been modified
                    const cleanBindings = JSON.parse(JSON.stringify(globalDefaultKeyboardBindings));
                    // Validate each binding category
                    for (const key in cleanBindings) {
                        if (Array.isArray(cleanBindings[key])) {
                            cleanBindings[key] = cleanBindings[key].filter((binding) => this.validateKeyboardBinding(binding));
                        }
                    }
                    Keyboard.DEFAULTS.bindings = cleanBindings;
                }
            }
        }
        catch (error) {
            console.warn('⚠️ Could not restore global keyboard bindings:', error);
        }
    }
    /**
     * Forces restoration of keyboard bindings to ensure consistent Enter key behavior
     */
    forceKeyboardBindingRestoration(editor) {
        try {
            const keyboard = editor.getModule('keyboard');
            if (keyboard && keyboard.bindings) {
                // Restore the correct Enter key binding order
                const correctEnterBindings = [
                    {
                        key: 'Enter'
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['blockquote'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['list'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: {
                            'list': 'checked'
                        }
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['header']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null,
                        format: ['table']
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['code-block']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null
                    },
                    {
                        key: 'Enter',
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }
                ];
                // Validate and force overwrite the Enter bindings
                if (keyboard.bindings) {
                    const validatedBindings = correctEnterBindings.filter(binding => this.validateKeyboardBinding(binding));
                    keyboard.bindings.Enter = validatedBindings;
                    keyboard.bindings[13] = validatedBindings;
                }
            }
        }
        catch (error) {
            console.error('❌ Error forcing keyboard binding restoration:', error);
        }
    }
    /**
     * Debug method to log keyboard bindings structure
     */
    debugKeyboardBindings(editor) {
        try {
            const keyboard = editor.getModule('keyboard');
            if (keyboard && keyboard.bindings) {
                if (keyboard.bindings.Enter || keyboard.bindings[13]) {
                    const enterBindings = keyboard.bindings.Enter || keyboard.bindings[13];
                }
            }
        }
        catch (error) {
            console.error('🐛 Error debugging keyboard bindings:', error);
        }
    }
    /**
     * Restores default keyboard bindings to ensure consistent Enter key behavior
     */
    restoreDefaultKeyboardBindings() {
        if (globalDefaultKeyboardBindings) {
            try {
                const cleanBindings = JSON.parse(JSON.stringify(globalDefaultKeyboardBindings));
                // Validate all bindings before returning
                for (const key in cleanBindings) {
                    if (Array.isArray(cleanBindings[key])) {
                        cleanBindings[key] = cleanBindings[key].filter((binding) => this.validateKeyboardBinding(binding));
                    }
                }
                return {
                    bindings: cleanBindings
                };
            }
            catch (error) {
                console.warn('⚠️ Error processing global keyboard bindings, using fallback:', error);
            }
        }
        // Fallback to safe default bindings
        // Comprehensive keyboard configuration with proper Enter key handling
        return {
            bindings: {
                'Enter': [
                    {
                        key: 'Enter'
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['blockquote'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['list'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: {
                            'list': 'checked'
                        }
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['header']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null,
                        format: ['table']
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['code-block']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null
                    },
                    {
                        key: 'Enter',
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }
                ]
            }
        };
    }
    /**
     * Creates default toolbar configuration
     */
    createDefaultToolbarConfig() {
        return {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                    ['blockquote', 'code-block', 'code'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ['link', 'image'] // No video in default configuration
                ],
                handlers: {
                    image: () => this.selectImage(),
                    link: (value) => this.handleLinkClick(value)
                }
            },
            clipboard: {
                magicPaste: false,
                matchVisual: false
            },
            keyboard: this.restoreDefaultKeyboardBindings(),
            imageResize: true
        };
    }
    /**
     * Creates custom toolbar configuration from additionalParameter
     */
    createCustomToolbarConfig() {
        const jsonString = this.additionalParameter['CEE_editor_options'].replace(/\\"/g, '"');
        let obj = JSON.parse(jsonString);
        obj.handlers = {
            image: () => this.selectImage(),
            link: (value) => this.handleLinkClick(value)
        };
        if (obj.container) {
            obj.container = obj.container.map((group) => {
                if (Array.isArray(group)) {
                    return group.filter((item) => item !== 'video');
                }
                return group;
            });
        }
        return {
            toolbar: {
                ...obj
            },
            clipboard: {
                magicPaste: false,
                matchVisual: false
            },
            keyboard: this.restoreDefaultKeyboardBindings()
        };
    }
    /**
     * Creates mention configuration for tagging functionality
     */
    createMentionConfig() {
        return {
            allowedChars: /^[A-Za-z\sÅÄÖåäö0-9]*$/,
            mentionDenotationChars: ["@", "#"],
            showDenotationChar: true,
            isolateCharacter: false,
            fixMentionsToQuill: true,
            positioningStrategy: 'absolute',
            defaultMenuOrientation: 'bottom',
            // selectKeys: [13, 9],
            minChars: 0,
            maxChars: 50,
            renderLoading: () => 'Loading...',
            linkTarget: '_blank',
            listItemClass: 'ql-mention-list-item',
            mentionContainerClass: 'ql-mention-list-container',
            mentionListClass: 'ql-mention-list',
            blotName: 'mention',
            hoverClass: 'selected',
            selectClass: 'selected',
            spaceAfterInsert: true,
            stripHTML: true,
            dataAttributes: ['id', 'value'],
            onSelect: (item, insertItem) => this.handleMentionSelect(item, insertItem),
            renderItem: (item, searchTerm) => this.renderMentionItem(item, searchTerm),
            source: (searchTerm, renderList, mentionChar) => this.handleMentionSource(searchTerm, renderList, mentionChar),
            _uniqueKey: `mention_${Date.now()}_${Math.random()}_${this.componentKey || 'default'}`
        };
    }
    /**
     * Handles mention item selection
     */
    handleMentionSelect(item, insertItem) {
        if (!item || typeof item !== 'object' || !item.value || typeof item.value !== 'string') {
            item = { id: 'fallback', value: 'Unknown Mention' };
        }
        this.searchStr = null;
        insertItem(item);
    }
    /**
     * Renders mention item display
     */
    renderMentionItem(item, searchTerm) {
        if (!item || typeof item !== 'object') {
            return 'Invalid Item';
        }
        const displayValue = item.value && typeof item.value === 'string' && item.value.length > 0
            ? item.value
            : 'Unknown Item';
        const itemDisplay = `👤 ${displayValue}`;
        return itemDisplay;
    }
    /**
     * Handles mention source data retrieval and filtering
     */
    handleMentionSource(searchTerm, renderList, mentionChar) {
        this.safeExecute(() => {
            // Validate renderList function
            if (typeof renderList !== 'function') {
                return;
            }
            const safeSearchTerm = searchTerm === null || searchTerm === undefined ? '' : String(searchTerm);
            const safeMentionChar = mentionChar === null || mentionChar === undefined ? '@' : String(mentionChar);
            // Reset searchStr for fresh processing
            if (safeMentionChar === '@' || safeMentionChar === '#') {
                this.searchStr = null;
                this.lastMentionSearchTerm = ' ';
            }
            // If API search is enabled, handle API-based search
            if (this.isApiSearchEnabledForMention) {
                // Check if search term has actually changed
                if (this.lastMentionSearchTerm === safeSearchTerm) {
                    return; // Skip duplicate calls with same search term
                }
                if (this.mentionSearchTimeout) {
                    clearTimeout(this.mentionSearchTimeout);
                }
                // Store current render list and search term
                this.currentRenderList = renderList;
                this.currentSearchTerm = safeSearchTerm;
                this.lastMentionSearchTerm = safeSearchTerm;
                // Show loading state immediately
                renderList([{ id: 'loading', value: 'Loading...' }], safeSearchTerm);
                // Debounce the API call
                this.mentionSearchTimeout = setTimeout(() => {
                    this.handleApiBasedMentionSearch(safeSearchTerm, renderList, safeMentionChar);
                }, this.searchDebounceTime); // 300ms debounce delay
                this.timeoutIds.push(this.mentionSearchTimeout);
                return;
            }
            let values = this.getMentionValues();
            if (!this.isValidArray(values, 'mention values')) {
                values = [];
            }
            values = this.sanitizeMentionValues(values);
            if (values.length === 0) {
                this.handleEmptyMentionValues(renderList, safeSearchTerm);
                return;
            }
            const isEmptySearch = !safeSearchTerm || safeSearchTerm.length === 0 || safeSearchTerm.trim() === '';
            if (isEmptySearch) {
                this.handleEmptySearch(values, renderList, safeSearchTerm);
            }
            else {
                this.handleFilteredSearch(values, renderList, safeSearchTerm);
            }
            this.searchStr = safeSearchTerm;
        }, 'CRITICAL ERROR in mention source function', () => {
            this.renderEmergencyFallback(renderList);
        });
    }
    handleApiBasedMentionSearch(searchTerm, renderList, mentionChar) {
        this.currentRenderList = renderList;
        this.currentSearchTerm = searchTerm;
        this.updateDataOnChange(searchTerm);
        setTimeout(() => {
            this.onComponentEvent('OnKeyUp', {
                internalAPIResponseEmitter: this.internalAPIResponseEmitter
            });
        }, 100);
    }
    updateDataOnChange(term) {
        const apiData = {
            id: this.requestApiKeyForSearch,
            apiUrl: '',
            apiKey: this.requestApiKeyForSearch,
            value: term
        };
        this.apiDataService.setApiData(Object.assign({}, apiData));
    }
    /**
     * Gets mention values from allOptions or external API
     */
    getMentionValues() {
        let values = this.allOptions || [];
        if (values.length === 0 && this.additionalParameter['externalApiOptionValue']) {
            const externalOptions = this.additionalParameter['externalApiOptionValue'] || [];
            if (this.isNonEmptyArray(externalOptions, 'external options')) {
                values = externalOptions;
                this.allOptions = values;
            }
        }
        // if (values.length === 0) {
        //     if (this.refreshMentionData() && this.isNonEmptyArray(this.allOptions, 'refreshed options')) {
        //         values = this.allOptions;
        //     }
        // }
        return values;
    }
    /**
     * Sanitizes mention values array
     */
    sanitizeMentionValues(values) {
        return this.validateDataArray(values, 'mention values');
    }
    /**
     * Handles empty mention values scenario
     */
    handleEmptyMentionValues(renderList, searchTerm) {
        try {
            renderList([], searchTerm);
        }
        catch (e) {
            console.error('Failed to render empty list:', e);
        }
    }
    /**
     * Handles empty search (show all values)
     */
    handleEmptySearch(values, renderList, searchTerm) {
        try {
            const valueStrings = values.map(v => v && v.value && typeof v.value === 'string' ? `"${v.value}"` : '"Invalid"').join(', ');
        }
        catch (e) {
            console.warn('Error creating value string:', e);
        }
        this.safeRenderList(renderList, values, searchTerm, 'values');
    }
    /**
     * Handles filtered search (search with term)
     */
    handleFilteredSearch(values, renderList, searchTerm) {
        const matches = [];
        values.forEach((entry, index) => {
            try {
                if (this.isValidEntry(entry, index)) {
                    const entryValue = entry.value.toLowerCase();
                    const searchTermLower = searchTerm.toLowerCase();
                    if (entryValue.indexOf(searchTermLower) !== -1) {
                        matches.push(entry);
                    }
                }
            }
            catch (error) {
                console.error(`Error processing entry at index ${index}:`, error);
            }
        });
        if (matches.length > 0) {
            try {
                const matchStrings = matches.map(m => m && m.value && typeof m.value === 'string' ? `"${m.value}"` : '"Invalid"').join(', ');
            }
            catch (e) {
                console.warn('Error creating match string:', e);
            }
        }
        this.safeRenderList(renderList, matches, searchTerm, 'matches');
    }
    /**
     * Renders emergency fallback when everything fails
     */
    renderEmergencyFallback(renderList) {
        try {
            const emergencyFallback = [
                { id: 1, value: 'Emergency Item 1' },
                { id: 2, value: 'Emergency Item 2' }
            ];
            renderList(emergencyFallback, '');
        }
        catch (fallbackError) {
            try {
                renderList([], '');
            }
            catch (lastResortError) {
                console.error('Complete failure - cannot render anything:', lastResortError);
            }
        }
    }
    selectImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();
        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                let fileToCompress = file;
                if (this.isHEIC(file)) {
                    try {
                        fileToCompress = await this.convertHEICToPNG(file);
                    }
                    catch (error) {
                        console.error(error);
                        return;
                    }
                }
                const compressedImage = await this.compressImage(fileToCompress, 800, 600, 0.6);
                const reader = new FileReader();
                reader.readAsDataURL(compressedImage);
                reader.onload = () => {
                    const quillInstance = this.meQuillRef;
                    if (!quillInstance) {
                        return;
                    }
                    const range = quillInstance.getSelection();
                    if (!range) {
                        quillInstance.insertEmbed(quillInstance.getLength(), 'image', reader.result);
                        this.updateEditorField();
                    }
                    else {
                        quillInstance.insertEmbed(range.index, 'image', reader.result);
                        this.updateEditorField();
                    }
                };
            }
        };
    }
    isHEIC(file) {
        return (file.type === "image/heic" || file.name.split('.').pop().toLowerCase() === "heic"); // Check MIME type (it might be available in some browsers)
    }
    convertHEICToPNG(file) {
        return new Promise((resolve, reject) => {
            heic2any({
                blob: file,
                toType: "image/png",
            }).then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                resolve(pngFile); // Resolve the promise with the pngFile
            }).catch((error) => {
                console.error("Error converting HEIC to PNG:", error);
                reject(error); // Reject the promise in case of an error
            });
        });
    }
    updateEditorField() {
        // after image upload need trigger change
        const editor = this.quillEditor && this.quillEditor.quillEditor;
        if (editor) {
            editor.insertText(editor.getLength() - 1, '', 'user');
            // Clear clipboard after editor field update
            // setTimeout(() => {
            //     this.clearClipboard();
            // }, 100);
        }
    }
    async compressImage(file, maxWidth, maxHeight, quality) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    // Resize logic
                    if (width > maxWidth) {
                        height = (maxWidth / width) * height;
                        width = maxWidth;
                    }
                    if (height > maxHeight) {
                        width = (maxHeight / height) * width;
                        height = maxHeight;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);
                    // Convert canvas to Blob
                    canvas.toBlob((blob) => {
                        if (blob) {
                            resolve(new File([blob], file.name, { type: file.type, lastModified: Date.now() }));
                        }
                    }, file.type, quality);
                };
            };
        });
    }
    updatePreview() {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.inputValue);
    }
    /**
     * Initialize editor modules early for template binding
     */
    initializeEditorModules() {
        this.editorModules = {}; // Reset to completely empty object
        // Use utility methods for toolbar configuration
        if (this.additionalParameter['CEE_editor_options']) {
            this.editorModules = this.createCustomToolbarConfig();
        }
        else {
            this.editorModules = this.createDefaultToolbarConfig();
        }
        this.isApiSearchEnabledForMention = this.additionalParameter['CEE_Enable_API_Search_For_Mention'] && this.additionalParameter['CEE_Enable_API_Search_For_Mention'] === 'true';
        this.searchDebounceTime = this.additionalParameter['CEE_Search_Debounce_Time'] ? parseInt(this.additionalParameter['CEE_Search_Debounce_Time']) : 300;
        let ceeTagging = this.additionalParameter['CEE_tagging'] && this.additionalParameter['CEE_tagging'] === "true" ? true : false;
        if (this.isApiSearchEnabledForMention && ceeTagging) {
            this.setupSearchApiCallback();
        }
        if (ceeTagging) {
            this.setupMentionSystem();
        }
        // Trigger change detection to update template binding
        this.cdr.detectChanges();
    }
    /**
     * Sets up the mention system for tagging functionality
     */
    setupMentionSystem() {
        if (!this.isNonEmptyArray(this.allOptions, 'mention options')) {
            this.allOptions = [];
            this.loadMentionOptions();
        }
        // Ensure we have valid mention options
        if (!this.isValidArray(this.allOptions, 'mention options')) {
            this.allOptions = [];
        }
        // Deep validate each option
        this.allOptions = this.allOptions.map((option, index) => {
            if (!option || typeof option !== 'object') {
                return { id: index + 1, value: `Option ${index + 1}` };
            }
            return {
                id: option.id !== undefined && option.id !== null ? option.id : index + 1,
                value: option.value && typeof option.value === 'string' && option.value.length > 0
                    ? option.value
                    : `Option ${index + 1}`
            };
        });
        this.editorModules['mention'] = this.createMentionConfig();
    }
    /**
     * Loads mention options from external API
     */
    loadMentionOptions() {
        if (this.additionalParameter['externalApiOptionValue']) {
            this.addSafeTimeout(() => {
                this.safeExecute(() => {
                    var runtimeDropDownData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                    if (this.isNonEmptyArray(runtimeDropDownData, 'runtime dropdown data')) {
                        this.allOptions = runtimeDropDownData;
                    }
                    else {
                        const externalOptions = this.additionalParameter['externalApiOptionValue'];
                        if (this.isNonEmptyArray(externalOptions, 'external options')) {
                            this.allOptions = externalOptions;
                        }
                    }
                }, 'Error loading API data asynchronously');
            }, 500);
            // Also try immediate sync call in case data is already available
            this.safeExecute(() => {
                var immediateTryData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                if (this.isNonEmptyArray(immediateTryData, 'immediate API data')) {
                    this.allOptions = immediateTryData;
                }
            }, 'Immediate API call not ready, will try async');
        }
    }
    getEditorInstance(editor) {
        // Set the meQuillRef to the editor instance provided by quill-editor component
        this.meQuillRef = editor;
        // Ensure modules are properly configured before proceeding
        if (!this.editorModules || Object.keys(this.editorModules).length === 0) {
            this.initializeEditorModules();
        }
        this.forceKeyboardBindingRestoration(editor);
        this.debugKeyboardBindings(editor);
        this.addSafeTimeout(() => {
            this.safeExecute(() => {
                const toolbar = editor.getModule('toolbar');
                if (toolbar && toolbar.container) {
                    const videoButtons = toolbar.container.querySelectorAll('.ql-video');
                    if (videoButtons.length > 0) {
                        videoButtons.forEach((btn) => {
                            btn.remove();
                        });
                    }
                }
            }, 'Error checking for video buttons');
        }, 100);
        if (this.additionalParameter['CEE_tagging'] === "true") {
            const mentionModule = editor.getModule('mention');
        }
        // Load existing content if available
        if (this.inputValue && this.inputValue.trim() !== '') {
            // Set flag to prevent event loops during programmatic content setting
            this.isProgrammaticallySettingContent = true;
            this.meQuillRef.clipboard.dangerouslyPasteHTML(this.inputValue);
            setTimeout(() => {
                if (this.meQuillRef) {
                    const length = this.meQuillRef.getLength();
                    this.meQuillRef.setSelection(length - 1, 0);
                    // Clear clipboard after content is loaded
                    // this.clearClipboard();
                    // Reset flag after content is set
                    setTimeout(() => {
                        this.isProgrammaticallySettingContent = false;
                    }, 100);
                }
            }, 100);
        }
        setTimeout(() => {
            const mentionModule = editor.getModule('mention');
            if (!mentionModule && this.additionalParameter['CEE_tagging'] === "true") {
                try {
                    const availableModules = [];
                    ['toolbar', 'keyboard', 'history', 'clipboard', 'uploader', 'mention', 'imageResize'].forEach(moduleName => {
                        const module = editor.getModule(moduleName);
                        if (module) {
                            availableModules.push(moduleName);
                        }
                    });
                }
                catch (e) {
                    console.warn('⚠️ Error checking available modules:', e);
                }
                try {
                    const MentionClass = Quill.imports['modules/mention'];
                    if (MentionClass) {
                        const mentionConfig = this.editorModules['mention'];
                        const mentionInstance = new MentionClass(editor, mentionConfig);
                    }
                }
                catch (e) {
                    console.error('❌ Failed to manually instantiate mention module:', e);
                }
            }
            if (mentionModule && this.additionalParameter['CEE_tagging'] === "true") {
                // Force reset mention module to ensure denotation chars work
                const mentionConfig = this.editorModules['mention'];
                if (mentionConfig) {
                    mentionModule.mentionDenotationChars = mentionConfig.mentionDenotationChars;
                    mentionModule.allowedChars = mentionConfig.allowedChars;
                    // Force re-bind the source function
                    if (mentionConfig.source) {
                        mentionModule.options.source = mentionConfig.source;
                    }
                }
                setTimeout(() => {
                    this.applyMentionStylingFixes();
                }, 1000);
            }
        }, 500); // Increased timeout to ensure module is fully loaded
        // Add keyboard event listener to debug mention character detection
        editor.root.addEventListener('input', (event) => {
            const text = editor.getText();
            const selection = editor.getSelection();
            if (selection) {
                const currentChar = text.charAt(selection.index - 1);
            }
        });
        // Auto-detect URLs and convert to links - OPTIMIZED to reduce cursor jumping  
        editor.on('text-change', (delta, oldDelta, source) => {
            // Check for excessive text-change events
            if (this.detectExcessiveEvents('text-change')) {
                // Don't return here as text-change is critical, but log the issue  
            }
            // Skip URL detection if we're programmatically setting content
            if (this.isProgrammaticallySettingContent) {
                return;
            }
            if (source === 'user') {
                const currentSelection = editor.getSelection();
                // Clear previous timeout to debounce
                if (this.urlDetectionTimeout) {
                    clearTimeout(this.urlDetectionTimeout);
                }
                const text = editor.getText();
                const hasUrl = /(https?:\/\/[^\s]+|www\.[^\s]+)/i.test(text);
                if (hasUrl && currentSelection) {
                    // Only detect URLs if user has stopped typing for a moment
                    this.urlDetectionTimeout = setTimeout(() => {
                        // Check if cursor is still in a reasonable position
                        const newSelection = editor.getSelection();
                        if (newSelection && currentSelection) {
                            // Only auto-detect if cursor hasn't moved significantly or if it's at the end of a potential URL
                            const textBeforeCursor = text.substring(0, newSelection.index);
                            const isAtEndOfUrl = /[^\s]$/.test(textBeforeCursor) &&
                                /(https?:\/\/[^\s]+|www\.[^\s]+)$/.test(textBeforeCursor);
                            if (Math.abs(newSelection.index - currentSelection.index) < 3 || isAtEndOfUrl) {
                                this.autoDetectLinks(this.meQuillRef);
                            }
                        }
                    }, 1000); // Longer delay to allow user to finish typing
                }
            }
        });
        // Handle paste events specifically with logging
        editor.root.addEventListener('paste', (event) => {
            event.preventDefault();
            // Clear clipboard after preventing default paste
            // this.clearClipboard();
        });
        // Handle input events for better coverage
        editor.root.addEventListener('input', (event) => {
            const selectionBeforeInput = editor.getSelection();
        });
        // For handling Drag n Drop inside Quill Editor
        editor.root.addEventListener('drop', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.enableUploadOnDragOver(false);
            if (event.dataTransfer && event.dataTransfer.files.length > 0) {
                const validFiles = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'));
                if (validFiles.length == 0)
                    return;
                const timeoutId = setTimeout(() => {
                    this.setFilesToEditor(validFiles);
                }, 100);
                this.timeoutIds.push(timeoutId);
            }
        }, true);
    }
    autoDetectLinks(editor) {
        const delta = editor.getContents();
        // Store current cursor position
        const currentSelection = editor.getSelection();
        const currentIndex = currentSelection ? currentSelection.index : editor.getLength() - 1;
        // Track position in the editor
        let currentPos = 0;
        let hasChanges = false;
        // Process each operation in the delta
        if (delta && delta.ops) {
            for (let i = 0; i < delta.ops.length; i++) {
                const op = delta.ops[i];
                if (op.insert && typeof op.insert === 'string') {
                    const text = op.insert;
                    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}[^\s]*)/g;
                    let match;
                    // Reset regex for this text segment
                    urlRegex.lastIndex = 0;
                    while ((match = urlRegex.exec(text)) !== null) {
                        const url = match[0];
                        const urlStartInText = match.index;
                        const urlStartInEditor = currentPos + urlStartInText;
                        const urlLength = url.length;
                        // Check if this URL is already formatted as a link
                        const urlFormat = editor.getFormat(urlStartInEditor, urlLength);
                        if (!urlFormat.link) {
                            // Look backwards from current operation to find mentions to include
                            let linkStartPos = urlStartInEditor;
                            let mentionsFound = [];
                            // Check preceding operations for mentions
                            for (let j = i - 1; j >= 0; j--) {
                                const prevOp = delta.ops[j];
                                if (prevOp.insert && typeof prevOp.insert === 'string') {
                                    // Check if this is just whitespace
                                    if (prevOp.insert.trim() === '') {
                                        // Skip whitespace, continue looking for mentions
                                        continue;
                                    }
                                    else {
                                        // Non-whitespace text without mention formatting - stop here
                                        if (!prevOp.attributes || !prevOp.attributes.mention) {
                                            break;
                                        }
                                    }
                                }
                                // If this operation has mention formatting, include it
                                if (prevOp.attributes && prevOp.attributes.mention) {
                                    const mentionLength = typeof prevOp.insert === 'string' ? prevOp.insert.length : 1;
                                    linkStartPos -= mentionLength;
                                    mentionsFound.unshift(prevOp);
                                }
                                else {
                                    // Stop if we hit an operation without mention formatting
                                    break;
                                }
                            }
                            // Calculate total link length including mentions
                            const totalLinkLength = (urlStartInEditor + urlLength) - linkStartPos;
                            // Ensure URL has proper protocol
                            const validUrl = this.ensureProtocol(url);
                            // Format the entire range (mentions + URL) as a link
                            editor.formatText(linkStartPos, totalLinkLength, 'link', validUrl);
                            hasChanges = true;
                        }
                    }
                    // Update position tracker
                    currentPos += text.length;
                }
                else if (op.insert) {
                    // Handle non-string inserts (like embeds)
                    currentPos += 1;
                }
            }
        }
        if (hasChanges) {
            this.updateEditorField();
            // IMPROVED: Better cursor position preservation
            setTimeout(() => {
                if (editor && currentSelection) {
                    const newSelection = editor.getSelection();
                    const newLength = editor.getLength();
                    // Determine the best position to restore cursor
                    let restoreIndex = currentIndex;
                    // If cursor moved significantly or is at position 0, try to restore intelligently
                    if (!newSelection || newSelection.index === 0 || Math.abs(newSelection.index - currentIndex) > 5) {
                        // Check if we're at the end of the text
                        if (currentIndex >= newLength - 1) {
                            restoreIndex = Math.max(0, newLength - 1);
                        }
                        else {
                            // Try to maintain relative position, but ensure it's valid
                            restoreIndex = Math.min(Math.max(0, currentIndex), newLength - 1);
                        }
                        editor.setSelection(restoreIndex, 0);
                    }
                }
            }, 10);
        }
    }
    handleLinkClick(value) {
        const range = this.meQuillRef.getSelection();
        if (value) {
            let currentLink = '';
            if (range && range.length > 0) {
                const currentFormat = this.meQuillRef.getFormat(range);
                currentLink = currentFormat.link || '';
            }
            this.openLinkDialog(currentLink).then((href) => {
                if (href !== null && href !== undefined) {
                    if (href === '') {
                        if (range && range.length > 0) {
                            this.meQuillRef.format('link', false);
                        }
                    }
                    else {
                        const validUrl = this.ensureProtocol(href);
                        if (range && range.length > 0) {
                            const selectedContent = this.meQuillRef.getContents(range.index, range.length);
                            let hasMentions = false;
                            if (selectedContent && selectedContent.ops) {
                                selectedContent.ops.forEach((op, index) => {
                                    if (op.attributes && op.attributes.mention) {
                                        hasMentions = true;
                                    }
                                });
                            }
                            if (hasMentions) {
                                this.meQuillRef.formatText(range.index, range.length, 'link', validUrl);
                                setTimeout(() => {
                                    const updatedContent = this.meQuillRef.getContents(range.index, range.length);
                                    if (updatedContent && updatedContent.ops) {
                                        updatedContent.ops.forEach((op, opIndex) => {
                                            if (op.attributes && op.attributes.mention && (!op.attributes.link || op.attributes.link !== validUrl)) {
                                                // Re-apply mention formatting if it was lost
                                                const opStart = range.index + this.getOpOffset(updatedContent.ops, opIndex);
                                                const opLength = typeof op.insert === 'string' ? op.insert.length : 1;
                                                this.meQuillRef.formatText(opStart, opLength, 'mention', op.attributes.mention);
                                                this.meQuillRef.formatText(opStart, opLength, 'link', validUrl);
                                            }
                                        });
                                    }
                                }, 50);
                            }
                            else {
                                // No mentions, standard link formatting
                                this.meQuillRef.format('link', validUrl);
                            }
                        }
                        else {
                            const insertIndex = range ? range.index : this.meQuillRef.getLength();
                            this.meQuillRef.insertText(insertIndex, href, 'user');
                            this.meQuillRef.formatText(insertIndex, href.length, 'link', validUrl);
                            this.meQuillRef.setSelection(insertIndex + href.length);
                        }
                    }
                    this.onTouched(this.contentCtrl);
                    this.triggerContentChange();
                    this.updateEditorField();
                }
            });
        }
        else {
            if (range && range.length > 0) {
                this.meQuillRef.format('link', false);
                this.onTouched(this.contentCtrl);
                this.triggerContentChange();
                this.updateEditorField();
            }
        }
    }
    // Helper function to calculate offset for operations in Delta
    getOpOffset(ops, targetIndex) {
        let offset = 0;
        for (let i = 0; i < targetIndex && i < ops.length; i++) {
            const op = ops[i];
            if (op.insert) {
                offset += typeof op.insert === 'string' ? op.insert.length : 1;
            }
        }
        return offset;
    }
    ensureProtocol(url) {
        if (!url)
            return '';
        // Check if URL already has a protocol
        if (!/^https?:\/\//i.test(url)) {
            // Add https:// if no protocol is present
            return 'https://' + url;
        }
        return url;
    }
    openLinkDialog(currentUrl = '') {
        return new Promise((resolve) => {
            // Create a simple input dialog
            const url = window.prompt('Enter the URL:', currentUrl);
            resolve(url);
        });
    }
    triggerContentChange() {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('triggerContentChange')) {
            console.error('🛑 BLOCKING triggerContentChange due to potential infinite loop');
            return;
        }
        // Trigger a content change event to save the updated content
        const html = this.meQuillRef.root.innerHTML;
        this.inputValue = html;
        this.isValid = this.contentCtrl.valid;
        // CRITICAL FIX: Use debounced updateFieldData
        this.debouncedUpdateFieldData(this.inputValue, this.isValid, 200);
        this.onComponentEvent('OnChangeValue');
        this.onComponentEvent('OnFocusOut');
        this.onDirty();
        this.contentCtrl.control.markAsDirty();
        // Clear clipboard after content changes
        // setTimeout(() => {
        //     this.clearClipboard();
        // }, 200);
    }
    onContentChanged(event) {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('onContentChanged')) {
            console.error('🛑 BLOCKING onContentChanged due to potential infinite loop');
            return;
        }
        // CRITICAL FIX: Skip if this is an API-triggered event to break circular dependency
        if (event?.source === 'api') {
            return;
        }
        if (event && (event.source == "user" || event.source == "api")) {
            this.isValid = this.contentCtrl.valid;
            this.inputValue = event.html; // Make sure to update inputValue
            this.onChange(event.html);
            const newContent = event.html;
            const oldContent = event.oldDelta?.ops.map(op => op.insert).join('') || '';
            if (newContent !== oldContent) {
                // CRITICAL FIX: Use debounced updateFieldData to prevent circular dependency
                this.debouncedUpdateFieldData(this.inputValue, this.isValid, 150);
                this.onComponentEvent('OnChangeValue');
                this.onComponentEvent('OnFocusOut');
                this.onDirty();
                this.contentCtrl.control.markAsDirty();
            }
        }
    }
    onChange(newValue) {
    }
    onTouched(control) {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('onTouched')) {
            console.error('🛑 BLOCKING onTouched due to potential infinite loop');
            return;
        }
        if (control && control.control) {
            control.control.markAsTouched();
            if (this.meQuillRef) {
                this.inputValue = this.meQuillRef.root.innerHTML;
                this.isValid = control.valid;
                // CRITICAL FIX: Use debounced updateFieldData
                this.debouncedUpdateFieldData(this.inputValue, this.isValid, 100);
            }
        }
    }
    onSessionDataUpdated(value) {
        this.isValid = this.contentCtrl.valid;
        this.updateFieldData(value, this.isValid);
        this.onComponentEvent('OnChangeValue');
        this.onComponentEvent('OnFocusOut');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onEmptySession(get_data) {
        let data = [];
        let associatedData = [];
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
        if (get_data.isAssociated) {
            if (data.some(r => unique_id_value.includes(r))) {
                const values = this.getAssociatedFields();
                if (values.includes(this.undoRedoUtil.getCurrentId())) {
                    // associatedData = new Array(unique_id_value);
                    associatedData = unique_id_value;
                }
            }
        }
        (get_data.isAssociated ? associatedData : data).forEach(elm => {
            if ((unique_id_value).includes(elm)) {
                // TODO Update
                let value = '';
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                this.updateFieldData(value);
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.contentCtrl) {
                    this.contentCtrl.reset(value);
                    this.contentCtrl.control.markAsUntouched();
                    this.contentCtrl.control.markAsPristine();
                    this.contentCtrl.control.updateValueAndValidity();
                }
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
            this.inputValue = get_data[unique_id_value];
            this.updateFieldData(this.inputValue);
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.isValid = true;
            this.inputValue = apiValue;
            this.updateFieldData(this.inputValue, this.isValid);
            const timeoutId = setTimeout(() => {
                if (this.meQuillRef) {
                    this.meQuillRef.clipboard.dangerouslyPasteHTML(this.inputValue);
                    // CRITICAL: Set cursor to the end after API content load
                    setTimeout(() => {
                        if (this.meQuillRef) {
                            const length = this.meQuillRef.getLength();
                            this.meQuillRef.setSelection(length - 1, 0);
                            // Clear clipboard after API content is loaded
                            // this.clearClipboard();
                        }
                    }, 50);
                }
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        // CRITICAL FIX: Ensure allOptions is always an array before pushing
                        if (!this.allOptions || !Array.isArray(this.allOptions)) {
                            this.allOptions = [];
                        }
                        if (Array.isArray(externalApiOptionValue)) {
                            externalApiOptionValue.forEach((val) => {
                                if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                                    this.allOptions.push({ id: val['value'], value: val['name'] });
                                }
                                else {
                                    this.allOptions.push({ id: val.split('||')[0], value: val.split('||')[val.split('||').length - 1] });
                                }
                            });
                        }
                        else {
                            console.error('Something Went Wrong in editor !!!');
                        }
                    }
                }
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    concatData() { }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // Handle critical changes that require component reinitialization for generic blocks
        if (changes.fieldData && !changes.fieldData.firstChange && this.isInitialized) {
            this.reinitializeEditor();
        }
        if (changes.additionalParameter && !changes.additionalParameter.firstChange && this.isInitialized) {
            // Check if tagging configuration changed
            const oldTagging = changes.additionalParameter.previousValue?.['CEE_tagging'];
            const newTagging = changes.additionalParameter.currentValue?.['CEE_tagging'];
            if (oldTagging !== newTagging) {
                this.reinitializeEditor();
            }
        }
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
    reinitializeEditor() {
        // Generate new component key to force recreation
        this.componentKey = `cee-editor-${this.fieldData?.html_id || 'unknown'}-${Date.now()}`;
        // Clean up current state
        if (this.meQuillRef) {
            try {
                // CRITICAL: Clean up mention module thoroughly
                this.cleanupMentionModule();
                this.meQuillRef.off('text-change');
                this.meQuillRef.off('selection-change');
                this.meQuillRef.setContents([]);
            }
            catch (e) {
                console.warn('⚠️ Error during Quill cleanup:', e);
            }
            this.meQuillRef = null;
        }
        this.editorModules = {};
        this.searchStr = null;
        if (this.allOptions && Array.isArray(this.allOptions)) {
            this.allOptions = this.allOptions.filter((entry, index) => {
                if (!entry || typeof entry !== 'object') {
                    return false;
                }
                if (!entry.hasOwnProperty('value') || entry.value === null || entry.value === undefined) {
                    return false;
                }
                if (typeof entry.value !== 'string') {
                    try {
                        entry.value = String(entry.value);
                    }
                    catch (e) {
                        return false;
                    }
                }
                return entry.value.length > 0;
            });
        }
        else {
            this.allOptions = [];
        }
        // Trigger fresh initialization
        setTimeout(() => {
            this.onViewDataInit();
        }, 100);
    }
    /**
     * Apply additional styling fixes to mention dropdowns after initialization
     */
    applyMentionStylingFixes() {
        try {
            const mentionContainers = document.querySelectorAll('.ql-mention-list-container');
            mentionContainers.forEach((container, index) => {
                if (this.meQuillRef) {
                    const selection = this.meQuillRef.getSelection();
                    if (selection) {
                        const bounds = this.meQuillRef.getBounds(selection.index);
                        const editorElement = this.meQuillRef.root;
                        const editorRect = editorElement.getBoundingClientRect();
                        // Calculate position relative to the editor container
                        const leftPosition = bounds.left;
                        const topPosition = bounds.top + bounds.height - 5;
                        container.style.left = `${leftPosition}px`;
                        container.style.top = `${topPosition}px`;
                    }
                }
                // Ensure proper z-index and other styling
                container.style.zIndex = '9999';
                container.style.position = 'absolute';
                container.style.backgroundColor = 'white';
                container.style.border = '1px solid #ddd';
                container.style.borderRadius = '4px';
                container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                container.style.maxHeight = '200px';
                container.style.overflowY = 'auto';
                container.style.minWidth = '200px';
                container.style.maxWidth = '300px';
                // Apply styling to list items
                const listItems = container.querySelectorAll('.ql-mention-list-item');
                listItems.forEach((item) => {
                    item.style.padding = '10px 12px';
                    item.style.cursor = 'pointer';
                    item.style.borderBottom = '1px solid #f0f0f0';
                    item.style.fontSize = '14px';
                    item.style.color = '#333';
                    item.style.display = 'flex';
                    item.style.alignItems = 'center';
                    item.style.backgroundColor = 'white';
                    // Add hover effects
                    item.addEventListener('mouseenter', () => {
                        item.style.backgroundColor = '#e8f4f8';
                        item.style.color = '#0066cc';
                    });
                    item.addEventListener('mouseleave', () => {
                        if (!item.classList.contains('selected')) {
                            item.style.backgroundColor = 'white';
                            item.style.color = '#333';
                        }
                    });
                });
            });
        }
        catch (error) {
            console.warn('⚠️ Error applying mention styling fixes:', error);
        }
    }
    /**
     * Detect if we're in a potential infinite loop or excessive event firing
     */
    detectExcessiveEvents(methodName) {
        const now = Date.now();
        const timeDiff = now - this.lastEventTimestamp;
        if (timeDiff < 100) { // Less than 100ms between calls
            this.eventCallsInShortTime++;
            if (this.eventCallsInShortTime > 10) {
                // Reset counter after logging
                this.eventCallsInShortTime = 0;
                return true;
            }
        }
        else {
            this.eventCallsInShortTime = 0;
        }
        this.lastEventTimestamp = now;
        return false;
    }
    /**
     * Debounced version of updateFieldData to prevent rapid successive calls
     */
    debouncedUpdateFieldData(inputValue, isValid, delay = 100) {
        // Clear any existing timeout
        if (this.debounceUpdateTimeout) {
            clearTimeout(this.debounceUpdateTimeout);
        }
        // Set new timeout
        this.debounceUpdateTimeout = setTimeout(() => {
            if (!this.isUpdatingFieldData) {
                this.isUpdatingFieldData = true;
                try {
                    this.updateFieldData(inputValue, isValid);
                }
                finally {
                    setTimeout(() => {
                        this.isUpdatingFieldData = false;
                    }, 50);
                }
            }
        }, delay);
        this.timeoutIds.push(this.debounceUpdateTimeout);
    }
    /**
     * Log comprehensive event statistics for debugging (removed for production)
     */
    logEventSummary() {
        // Removed verbose logging for production
    }
    /**
     * Clear the clipboard content to prevent unwanted pasting
     */
    // private clearClipboard(): void {
    //     try {
    //         console.log('🧹 Attempting to clear clipboard:', {
    //             timestamp: new Date().toISOString(),
    //             componentKey: this.componentKey
    //         });
    //         // Method 1: Try using the modern Clipboard API
    //         if (navigator.clipboard && navigator.clipboard.writeText) {
    //             navigator.clipboard.writeText('').then(() => {
    //                 console.log('✅ Clipboard cleared successfully using Clipboard API');
    //             }).catch((error) => {
    //                 console.warn('⚠️ Error clearing clipboard with Clipboard API:', error);
    //                 this.fallbackClearClipboard();
    //             });
    //         } else {
    //             // Method 2: Fallback for older browsers
    //             this.fallbackClearClipboard();
    //         }
    //     } catch (error) {
    //         console.error('❌ Error in clearClipboard method:', error);
    //     }
    // }
    /**
     * Fallback method to clear clipboard for older browsers
     */
    // private fallbackClearClipboard(): void {
    //     try {
    //         // Create a temporary input element
    //         const tempInput = document.createElement('input');
    //         tempInput.style.position = 'absolute';
    //         tempInput.style.left = '-9999px';
    //         tempInput.style.opacity = '0';
    //         tempInput.value = '';
    //         document.body.appendChild(tempInput);
    //         tempInput.select();
    //         tempInput.setSelectionRange(0, 0);
    //         // Try to execute copy command to clear clipboard
    //         const success = document.execCommand('copy');
    //         if (success) {
    //             console.log('✅ Clipboard cleared using fallback method');
    //         } else {
    //             console.warn('⚠️ Fallback clipboard clear may not have worked');
    //         }
    //         // Clean up
    //         document.body.removeChild(tempInput);
    //     } catch (error) {
    //         console.error('❌ Error in fallback clipboard clear:', error);
    //     }
    // }
    /* *********************************************************
    *  Methods for Handling Drag n Drops inside editor block
    *  including toolbar and remaining parts of editor
    * **********************************************************/
    //Handles Drag n Dropped files
    async handleDrop(event) {
        event.preventDefault();
        if (event.dataTransfer && event.dataTransfer.files.length > 0) {
            const validFiles = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'));
            if (validFiles.length == 0)
                return;
            const timeoutId = setTimeout(() => {
                if (this.uploadOutOfEditor) {
                    this.setFilesToEditor(validFiles);
                }
            }, 100);
            this.timeoutIds.push(timeoutId);
        }
    }
    // Set files to editor
    async setFilesToEditor(files) {
        for (const file of files) {
            await this.readImageFile(file);
        }
    }
    // Read files
    async readImageFile(file) {
        const compressedImage = await this.compressImage(file, 800, 600, 0.6);
        // console.log('Compressed file:', compressedImage);
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            this.insertImageIntoEditor(base64);
        };
        reader.readAsDataURL(compressedImage);
    }
    // Inserts images in to editor
    insertImageIntoEditor(imageUrl) {
        const quill = this.quillEditor.quillEditor;
        if (!quill) {
            console.error('Quill editor instance not found.');
            return;
        }
        // Get current selection or set to end if there's no selection
        const range = quill.getSelection(true) || { index: quill.getLength(), length: 0 };
        quill.insertEmbed(range.index, 'image', imageUrl, 'user');
        quill.setSelection(range.index + 1, 'user'); // move cursor after image
    }
    enableUploadOnDragOver(flag) {
        this.uploadOutOfEditor = flag;
    }
    // Allows drag n drops
    onDragOver(event) {
        event.preventDefault(); // allow drop        
        this.enableUploadOnDragOver(true);
    }
    /* *********************************************************
    *  Methods for Dynamic Mention Data Loading
    * **********************************************************/
    // Refresh mention data from API - called when data becomes available
    refreshMentionData() {
        if (this.additionalParameter['externalApiOptionValue']) {
            try {
                var runtimeDropDownData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                if (runtimeDropDownData && Array.isArray(runtimeDropDownData) && runtimeDropDownData.length > 0) {
                    this.allOptions = runtimeDropDownData;
                    return true;
                }
                else {
                    const externalOptions = this.additionalParameter['externalApiOptionValue'];
                    if (externalOptions && Array.isArray(externalOptions) && externalOptions.length > 0) {
                        this.allOptions = externalOptions;
                        return true;
                    }
                }
            }
            catch (error) {
                console.warn('⚠️ Error refreshing mention data:', error);
            }
        }
        return false;
    }
    handleApiMentionResponse(response) {
        if (this.additionalParameter['externalApiOptionValue']) {
            let parameter = this.additionalParameter['externalApiOptionValue'];
            const externalApiOptionValue = this.getExternalApiOptionValue(parameter, response);
            if (externalApiOptionValue !== null) {
                // CRITICAL FIX: Ensure allOptions is always an array before pushing
                this.allOptions = [];
                if (Array.isArray(externalApiOptionValue)) {
                    externalApiOptionValue.forEach((val) => {
                        if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                            this.allOptions.push({ id: val['value'], value: val['name'] });
                        }
                        else {
                            this.allOptions.push({ id: val.split('||')[0], value: val.split('||')[val.split('||').length - 1] });
                        }
                    });
                    let values = this.getMentionValues();
                    if (!this.isValidArray(values, 'mention values')) {
                        values = [];
                    }
                    values = this.sanitizeMentionValues(values);
                    if (values.length === 0) {
                        this.handleEmptyMentionValues(this.currentRenderList, this.currentSearchTerm);
                        return;
                    }
                    const isEmptySearch = !this.currentSearchTerm || this.currentSearchTerm.length === 0 || this.currentSearchTerm.trim() === '';
                    if (isEmptySearch) {
                        this.handleEmptySearch(values, this.currentRenderList, this.currentSearchTerm);
                    }
                    else {
                        this.safeRenderList(this.currentRenderList, values, this.currentSearchTerm, 'values');
                    }
                }
                else {
                    console.error('Something Went Wrong in editor !!!');
                }
            }
        }
    }
    static ɵfac = function CeeEditorComponent_Factory(t) { return new (t || CeeEditorComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeEditorComponent, selectors: [["app-cee-editor"]], viewQuery: function CeeEditorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentCtrl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.quillFileRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.quillEditor = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["contentCtrl", "ngModel", "quillEditor", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "editor-container"], ["name", "meQuillRef", "theme", "snow", "format", "html", 3, "dragover", "dragleave", "drop", "ngModelChange", "onEditorCreated", "onContentChanged", "onFocus", "ngModel", "modules", "required", "disabled", "placeholder"], ["class", "text-danger", 4, "ngIf"], ["class", "preview-container", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "text-danger"], [1, "preview-container"], [1, "preview-content", 3, "innerHTML"], [1, "preview-content"]], template: function CeeEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeEditorComponent_div_0_Template, 14, 18, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i14.NgControlStatus, i14.RequiredValidator, i14.NgModel, CommonModule, i13.NgIf, TooltipModule, TooltipDirective, QuillModule, i7$1.QuillEditorComponent], styles: [".invisible-input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:0px;height:0px}.invalid-editor[_ngcontent-%COMP%]{border:1px solid red!important}.text-danger[_ngcontent-%COMP%]{color:#dc1a1d!important;font-size:12px}.editor-container[_ngcontent-%COMP%]{margin-bottom:20px;position:relative}.preview-container[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;border-radius:4px}.preview-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-all;overflow:hidden;display:flex;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{max-width:100%;height:auto}.ql-mention-list-container[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;background-color:#fff;box-shadow:0 4px 12px #00000026;z-index:9999!important;position:absolute;min-width:200px;max-width:300px;font-family:inherit;margin-top:-42px!important;transform:translateY(-100%)!important}.ql-mention-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;max-height:200px;overflow-y:auto}.ql-mention-list-item[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:all .2s ease;font-size:14px;color:#333;display:flex;align-items:center;position:relative;-webkit-user-select:none;user-select:none}.ql-mention-list-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.ql-mention-list-item[_ngcontent-%COMP%]:hover, .ql-mention-list-item.selected[_ngcontent-%COMP%]{background-color:#e8f4f8;color:#06c;transform:translate(2px)}.ql-mention-list-item.selected[_ngcontent-%COMP%]{background-color:#06c;color:#fff}.ql-mention-list-item.selected[_ngcontent-%COMP%]   .mention-avatar[_ngcontent-%COMP%]{background-color:#fff3}.mention-avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#f0f0f0;font-size:12px;margin-right:8px;transition:background-color .2s ease}.mention-text[_ngcontent-%COMP%]{flex:1;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ql-mention-list-item[_ngcontent-%COMP%]:hover   .mention-avatar[_ngcontent-%COMP%]{background-color:#d4edda}.mention[_ngcontent-%COMP%]{background-color:#e8f4f8;color:#06c;padding:2px 4px;border-radius:3px;font-weight:500;text-decoration:none;display:inline-block}.mention[_ngcontent-%COMP%]:hover{background-color:#d4edda;text-decoration:none}.ql-editor.ql-dark[_ngcontent-%COMP%]   .mention[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#93c5fd}@media (max-width: 768px){.ql-mention-list-container[_ngcontent-%COMP%]{min-width:150px;max-height:150px}.ql-mention-list-item[_ngcontent-%COMP%]{padding:6px 10px;font-size:13px}}.ql-mention-loading[_ngcontent-%COMP%]{padding:8px 12px;text-align:center;color:#666;font-style:italic}.ql-mention-no-results[_ngcontent-%COMP%]{padding:8px 12px;text-align:center;color:#999;font-style:italic}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-editor', standalone: true, imports: [MatTooltipModule, FormsModule, CommonModule, TooltipModule, QuillModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n         [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <!-- <div class=\"invisible-input-cont\">\r\n                <input #quillFile type=\"file\" (change)=\"quillFileSelected($event)\">\r\n            </div> -->\r\n            <div class=\"editor-container\" [attr.data-component-key]=\"componentKey\">\r\n              <quill-editor #contentCtrl=\"ngModel\"\r\n                            #quillEditor\r\n                            [attr.data-editor-key]=\"componentKey\"\r\n                            (dragover)=\"onDragOver($event)\"\r\n                            (dragleave)=\"enableUploadOnDragOver(false)\"\r\n                            (drop)=\"handleDrop($event)\"\r\n                            [(ngModel)]=\"inputValue\"\r\n                            [modules]=\"editorModules\"\r\n                            name=\"meQuillRef\"\r\n                            class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (contentCtrl.invalid && isMandatory && contentCtrl.dirty) ? 'invalid' : 'valid' }} {{(contentCtrl.invalid && contentCtrl.touched) ? 'invalid-editor' : ''}}\"\r\n                            theme=\"snow\"\r\n                            format=\"html\"\r\n                            [required]=\"isMandatory\"\r\n                            [disabled]=\"!isEditable\"\r\n                            placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (onEditorCreated)=\"getEditorInstance($event)\"\r\n                            (onContentChanged)=\"onContentChanged($event)\"\r\n                            (onFocus)=\"onTouched(contentCtrl)\"\r\n                            (ngModelChange)=\"updatePreview()\">\r\n              </quill-editor>\r\n              <div *ngIf=\"contentCtrl.invalid && contentCtrl.touched\" class=\"text-danger\">\r\n                Field is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"preview-container\" *ngIf=\"previewContent\">\r\n                <h6>Preview</h6>\r\n                <div class=\"preview-content\" [innerHTML]=\"sanitizedContent\"></div>\r\n            </div>\r\n            <div class=\"preview-container\" *ngIf=\"previewHtml\">\r\n              <h6>Format-Html</h6>\r\n              <div class=\"preview-content\">{{inputValue}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".invisible-input-cont input{width:0px;height:0px}.invalid-editor{border:1px solid red!important}.text-danger{color:#dc1a1d!important;font-size:12px}.editor-container{margin-bottom:20px;position:relative}.preview-container{border:1px solid #ccc;padding:10px;border-radius:4px}.preview-content{white-space:pre-wrap;word-break:break-all;overflow:hidden;display:flex;justify-content:center;align-items:center}img{max-width:100%;height:auto}.ql-mention-list-container{border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;background-color:#fff;box-shadow:0 4px 12px #00000026;z-index:9999!important;position:absolute;min-width:200px;max-width:300px;font-family:inherit;margin-top:-42px!important;transform:translateY(-100%)!important}.ql-mention-list{list-style:none;margin:0;padding:0;max-height:200px;overflow-y:auto}.ql-mention-list-item{padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:all .2s ease;font-size:14px;color:#333;display:flex;align-items:center;position:relative;-webkit-user-select:none;user-select:none}.ql-mention-list-item:last-child{border-bottom:none}.ql-mention-list-item:hover,.ql-mention-list-item.selected{background-color:#e8f4f8;color:#06c;transform:translate(2px)}.ql-mention-list-item.selected{background-color:#06c;color:#fff}.ql-mention-list-item.selected .mention-avatar{background-color:#fff3}.mention-avatar{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#f0f0f0;font-size:12px;margin-right:8px;transition:background-color .2s ease}.mention-text{flex:1;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ql-mention-list-item:hover .mention-avatar{background-color:#d4edda}.mention{background-color:#e8f4f8;color:#06c;padding:2px 4px;border-radius:3px;font-weight:500;text-decoration:none;display:inline-block}.mention:hover{background-color:#d4edda;text-decoration:none}.ql-editor.ql-dark .mention{background-color:#1e3a8a;color:#93c5fd}@media (max-width: 768px){.ql-mention-list-container{min-width:150px;max-height:150px}.ql-mention-list-item{padding:6px 10px;font-size:13px}}.ql-mention-loading{padding:8px 12px;text-align:center;color:#666;font-style:italic}.ql-mention-no-results{padding:8px 12px;text-align:center;color:#999;font-style:italic}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }], { stepId: [{
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
        }], rootData: [{
            type: Input
        }], contentCtrl: [{
            type: ViewChild,
            args: ['contentCtrl']
        }], quillFileRef: [{
            type: ViewChild,
            args: ['quillFile']
        }], quillEditor: [{
            type: ViewChild,
            args: ['quillEditor']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeEditorComponent, { className: "CeeEditorComponent", filePath: "lib\\field-components\\cee-editor\\cee-editor.component.ts", lineNumber: 63 }); })();

export { CeeEditorComponent };
//# sourceMappingURL=ng-cee-core-cee-editor.component-BCar5kMU.mjs.map
