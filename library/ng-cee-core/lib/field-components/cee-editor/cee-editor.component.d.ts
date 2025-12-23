import { OnInit, OnDestroy, SimpleChanges, OnChanges, ElementRef, ChangeDetectorRef } from '@angular/core';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { UndoRedo } from './../../utils/undo-redo.util';
import { NgModel } from '@angular/forms';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';
import * as i0 from "@angular/core";
export declare class CeeEditorComponent extends BaseView implements OnInit, OnDestroy, OnChanges {
    private sanitizer;
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    internalCEEEmitter: CEEInternalEmitterService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    private cdr;
    stepId: any;
    fieldData: any;
    primaryKeyIndex: any;
    keepState: boolean;
    rowData: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    rootData: any;
    contentCtrl: NgModel;
    wfeEncryption: WfeEncryptionUtil;
    sessionKeyUtil: SessionKeyUtil;
    inputValue: string;
    html_id: string;
    isValid: boolean;
    undoRedoUtil: UndoRedo;
    imageResize: any;
    isReadOnly: boolean;
    quillFileRef: ElementRef;
    quillFile: any;
    meQuillRef: Quill;
    sanitizedContent: SafeHtml;
    previewContent: boolean;
    previewHtml: boolean;
    editorModules: {};
    allOptions: any;
    quillEditor: QuillEditorComponent;
    uploadOutOfEditor: boolean;
    searchStr: any;
    componentKey: string;
    private isInitialized;
    lastModifiedImage: string;
    private timeoutIds;
    private lastEventTimestamp;
    private eventCallsInShortTime;
    private isUpdatingFieldData;
    private debounceUpdateTimeout;
    private isProgrammaticallySettingContent;
    private urlDetectionTimeout;
    private isApiSearchEnabledForMention;
    private searchDebounceTime;
    requestApiKeyForSearch: string;
    private internalAPIResponseEmitter;
    currentRenderList: any;
    currentSearchTerm: any;
    private mentionSearchTimeout;
    private lastMentionSearchTerm;
    constructor(sanitizer: DomSanitizer, userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    setupSearchApiCallback(): void;
    ngOnDestroy(): void;
    onViewDataInit(): Promise<void>;
    /**
     * Validates and normalizes mention items to ensure consistent structure
     */
    private validateMentionItem;
    /**
     * Safely renders list with error handling and fallbacks
     */
    private safeRenderList;
    /**
     * Renders fallback list when main rendering fails
     */
    private renderFallbackList;
    /**
     * Validates entry data for search operations
     */
    private isValidEntry;
    /**
     * Safe array validation utility
     */
    private isValidArray;
    /**
     * Safe array validation with length check
     */
    private isNonEmptyArray;
    /**
     * Utility for managing timeouts safely
     */
    private addSafeTimeout;
    /**
     * Utility method to clean up mention module references and event listeners
     */
    private cleanupMentionModule;
    /**
     * Try-catch wrapper for safe execution
     */
    private safeExecute;
    /**
     * Validates and ensures data is array with non-empty string values
     */
    private validateDataArray;
    /**
     * Utility to check if Quill modules are properly registered (for debugging)
     */
    private verifyQuillModules;
    /**
     * Validates keyboard binding structure to prevent errors
     */
    private validateKeyboardBinding;
    /**
     * Ensures keyboard bindings integrity at the global level
     */
    private ensureKeyboardBindingsIntegrity;
    /**
     * Forces restoration of keyboard bindings to ensure consistent Enter key behavior
     */
    private forceKeyboardBindingRestoration;
    /**
     * Debug method to log keyboard bindings structure
     */
    private debugKeyboardBindings;
    /**
     * Restores default keyboard bindings to ensure consistent Enter key behavior
     */
    private restoreDefaultKeyboardBindings;
    /**
     * Creates default toolbar configuration
     */
    private createDefaultToolbarConfig;
    /**
     * Creates custom toolbar configuration from additionalParameter
     */
    private createCustomToolbarConfig;
    /**
     * Creates mention configuration for tagging functionality
     */
    private createMentionConfig;
    /**
     * Handles mention item selection
     */
    private handleMentionSelect;
    /**
     * Renders mention item display
     */
    private renderMentionItem;
    /**
     * Handles mention source data retrieval and filtering
     */
    private handleMentionSource;
    handleApiBasedMentionSearch(searchTerm: string, renderList: Function, mentionChar: string): void;
    private updateDataOnChange;
    /**
     * Gets mention values from allOptions or external API
     */
    private getMentionValues;
    /**
     * Sanitizes mention values array
     */
    private sanitizeMentionValues;
    /**
     * Handles empty mention values scenario
     */
    private handleEmptyMentionValues;
    /**
     * Handles empty search (show all values)
     */
    private handleEmptySearch;
    /**
     * Handles filtered search (search with term)
     */
    private handleFilteredSearch;
    /**
     * Renders emergency fallback when everything fails
     */
    private renderEmergencyFallback;
    selectImage(): void;
    private isHEIC;
    private convertHEICToPNG;
    updateEditorField(): void;
    compressImage(file: File, maxWidth: number, maxHeight: number, quality: number): Promise<File>;
    updatePreview(): void;
    /**
     * Initialize editor modules early for template binding
     */
    private initializeEditorModules;
    /**
     * Sets up the mention system for tagging functionality
     */
    private setupMentionSystem;
    /**
     * Loads mention options from external API
     */
    private loadMentionOptions;
    getEditorInstance(editor: Quill): void;
    autoDetectLinks(editor: any): void;
    handleLinkClick(value: any): void;
    private getOpOffset;
    ensureProtocol(url: string): string;
    private openLinkDialog;
    triggerContentChange(): void;
    onContentChanged(event: any): void;
    onChange(newValue: any): void;
    onTouched(control: any): void;
    onSessionDataUpdated(value: any): void;
    onEmptySession(get_data: any): void;
    handleCustomFunction(get_data: any): void;
    onAPICallback(data: any): void;
    onSetSessionData(apiKey: string, value: any): void;
    concatData(): void;
    setFieldValueOnSetValuesEvent(data: object): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    toggleLanguage(data: object): void;
    ngOnChanges(changes: SimpleChanges): void;
    private reinitializeEditor;
    /**
     * Apply additional styling fixes to mention dropdowns after initialization
     */
    private applyMentionStylingFixes;
    /**
     * Detect if we're in a potential infinite loop or excessive event firing
     */
    private detectExcessiveEvents;
    /**
     * Debounced version of updateFieldData to prevent rapid successive calls
     */
    private debouncedUpdateFieldData;
    /**
     * Log comprehensive event statistics for debugging (removed for production)
     */
    private logEventSummary;
    /**
     * Clear the clipboard content to prevent unwanted pasting
     */
    /**
     * Fallback method to clear clipboard for older browsers
     */
    handleDrop(event: DragEvent): Promise<void>;
    setFilesToEditor(files: File[]): Promise<void>;
    readImageFile(file: File): Promise<void>;
    insertImageIntoEditor(imageUrl: string): void;
    enableUploadOnDragOver(flag: boolean): void;
    onDragOver(event: DragEvent): void;
    refreshMentionData(): boolean;
    handleApiMentionResponse(response: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeEditorComponent, "app-cee-editor", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-editor.component.d.ts.map