import { HttpClient } from '@angular/common/http';
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { CeeApiService } from '../../services/cee-api-service.service';
import { FileUploadService } from '../../services/file-upload-service.service';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { UserDataHandlerService } from '../../services/user-data-handler.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { BaseView } from '../cee-base-class';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';
import * as i0 from "@angular/core";
export interface IFileData {
    id: string;
    type: string;
    iconImage: string;
    size: number;
    count: number;
    preview: boolean;
    canDownload: boolean;
}
export interface IFilePayload {
    type: string;
    fileData: any;
}
export interface IFile {
    rename: boolean;
    uploaded: boolean;
    progress?: number;
    newName?: string;
    originalExtension?: string;
    uId: string;
    attachmentId: string;
    attachmentPath: string;
    url: string;
    file: File;
    custom: Array<any>;
}
export interface ICompressImage {
    orientation: DOC_ORIENTATION;
    ratio?: number;
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
}
export declare class CeeAttachmentsComponent extends BaseView implements OnInit, OnChanges, OnDestroy {
    userDataHandlerService: UserDataHandlerService;
    sharedEventsService: SharedEventsServiceService;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    wfeStepLoaderService: WfeStepLoaderService;
    dialog: MatDialog;
    snackBar: MatSnackBar;
    http: HttpClient;
    ceeApiService: CeeApiService;
    router: Router;
    fileUploadService: FileUploadService;
    private ceeInternalEmitter;
    private imageCompress;
    stepId: any;
    fieldData: any;
    primaryKeyIndex: any;
    keepState: boolean;
    rowData: any;
    rootData: any;
    mandatoryCondition: any;
    editableCondition: any;
    visibleCondition: any;
    metaFields: any;
    metadataFields: any;
    fileUploads: any;
    files: Array<IFile>;
    AdditionalParameter: any;
    uploadMore: boolean;
    autoUpload: boolean;
    uploadedCount: number;
    totalCount: number;
    totalSize: number;
    html_id: string;
    fileInput: ElementRef<HTMLInputElement>;
    payLoad: IFilePayload;
    fieldLabels: any[];
    errorType: string;
    customKey: string;
    preDefineMimeType: any;
    preDefineMimeTypeCheck: any;
    dragAreaClass: string;
    uploadMode: any;
    fieldLable: any;
    isFieldLableHTML: boolean;
    private encrypted;
    selectFileText: any;
    isSingleUploader: boolean;
    hasUploadedData: boolean;
    singleUploadFileData: IFile;
    isAttachmentInModal: boolean;
    isMultiple: boolean;
    isCameraMode: boolean;
    isCameraInput: boolean;
    errorMsgBox: boolean;
    isRename: boolean;
    previewDirectly: boolean;
    previewDirectlyInNewTab: boolean;
    clickable_filename: boolean;
    rbPosition: number;
    constructor(userDataHandlerService: UserDataHandlerService, sharedEventsService: SharedEventsServiceService, appDataService: AppDataService, apiDataService: ApiDataService, wfeStepLoaderService: WfeStepLoaderService, dialog: MatDialog, snackBar: MatSnackBar, http: HttpClient, ceeApiService: CeeApiService, router: Router, fileUploadService: FileUploadService, ceeInternalEmitter: CEEInternalEmitterService, imageCompress: NgxImageCompressService);
    ngOnInit(): void;
    onDestroy(): void;
    trackByFile(index: number, file: any): any;
    clearFileInput(): void;
    onDragOver(event: any): void;
    onDragEnter(event: any): void;
    onDragEnd(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    onPaste(event: ClipboardEvent): void;
    handleClick(input: HTMLInputElement): void;
    ngOnDestroy(): void;
    onAnchorClick(event: MouseEvent): void;
    onViewDataInit(): void;
    getDynamicLabel(data?: any): void;
    onSessionDataUpdated(value: any, state: any): void;
    convertReadableCSVFile(file: any): any;
    checkValidation(event: any): boolean;
    private checkValidateANDCheckMandatory;
    private showFileSelectError;
    /**
     * function that selects the file and
     * upload the file if and when minimum requirements are met
     */
    handleFileInput: (event: any, files: FileList[]) => Promise<void>;
    getDataByHandlerOrApiKey(handlerOrApiKey: string): any[];
    /**
     * method returns the name based on the configuration
     * @param originalName the original name from where
     * @param fileName the file name of the file
     * @param regex the regex from which the dynamic variables needs to be extracted
     * @returns the result name
     */
    getName(originalName: string, fileName: string, regex: RegExp): string;
    /**
     * Stores the file in memory
     * @param file the current file
     * @param fileData the IFileData object
     */
    setFileData(file: File, fileData: IFileData): void;
    /**
     * Empty the field input after the
     * file gets uploaded
     */
    private emptyFileData;
    /**
     * set the total count of uploaded files
     * @param size the size of the current uploaded or removed file
     * @param count the count of the current uploaded or removed file
     */
    private setTotalSizeAndCount;
    /**
     * function to get the total count of files for each file type
     * @param fileType the current chosen file type
     */
    private getTotalCount;
    removePercentSymbols: (str: string) => string;
    startsWithPercent: (str: string) => boolean;
    getDynamicValueFromApiKey(value: any): any;
    /**
     * Returns a string based on the fixInput, supporting repeatable blocks.
     * For repeatable blocks, if the handler returns an array, it will use the value at the current row index (primaryKeyIndex).
     */
    getFixesString(fixInput: string): string;
    getfixes(fixName: string, fileName: string, count: any): string;
    /**
    * method returns the prefix and suffix based on the configuration
    * @returns the result prefix and suffix
    */
    getfixes_old(fixName: string, fileName: string, count: any): string;
    private delay;
    convertImageToPDF(file: any, index: number): Promise<void>;
    private convertHEICToPDF;
    private processImageToPDF;
    base64ToFile(base64String: any, mimeType: any, fileName: any): Blob;
    compressedImage: any;
    compressImage(file: any, index: number): void;
    showPreviewDialog(url: any, fileData: any, index: any): import("@angular/material/dialog").MatDialogRef<AlertModalComponent, any>;
    handleAction(item: any, index: number, type: string): void;
    openUrlInNewTab(url: string): void;
    /**
     * the function is basically the actions on the buttons
     * i.e. download, preview, click
     *
     * Security Enhancement: File Extension Protection
     * - When renaming files (type='rename'), only the filename (without extension) is editable
     * - The original file extension is preserved and displayed as read-only
     * - This prevents users from changing file types accidentally or maliciously
     * - Input validation prevents typing or pasting file extensions
     *
     * @param selectedFile the current file object containing file data and metadata
     * @param index the index of the file in the files array
     * @param type the type of the action (rename, reset, update, preview, download, etc.)
     */
    action(selectedFile: any, index: number, type: string): Promise<void>;
    readFileAsDataURL(file: File): Promise<string>;
    updateAttachmentAppData(isAttachmentValid: any): void;
    renameAttachmentAppData(newName: string, index: number): void;
    singleFileUploadAction(): void;
    getDynamicValue(key: string, value: any): {
        label: any;
        value: any;
    };
    clearBlockData(): void;
    private getCurrentFile;
    /**
     * function that deletes the current file from the memory and
     * calls the onRemove Handler
     * @param fileData the current file data
     * @param index the current index of the file that
     * is needed to be removed
     */
    private deleteData;
    private updateFileName;
    concatData: (res: any) => void;
    clearValue(event: any): void;
    onAPICallback(data: any): void;
    private checkMetaData;
    private setAttachmentData;
    onSetSessionData(apiKey: string, value: any): void;
    onEmptySession(get_data: any): void;
    handleCustomFunction(getData: any): void;
    setFieldValueOnSetValuesEvent(data: any): void;
    setFieldStateOnStateChangeEvent(data: object): void;
    updateStateHistory(data: any): void;
    toggleLanguage(data: object): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Validates the filename input to prevent extension editing
     * @param event The input event
     * @param selectedFile The file being renamed
     */
    onFilenameInput(event: Event, selectedFile: IFile): void;
    /**
     * Validates the filename on paste to prevent extension pasting
     * @param event The paste event
     * @param selectedFile The file being renamed
     */
    onFilenamePaste(event: ClipboardEvent, selectedFile: IFile): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CeeAttachmentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CeeAttachmentsComponent, "app-cee-attachments", never, { "stepId": { "alias": "stepId"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; "keepState": { "alias": "keepState"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "mandatoryCondition": { "alias": "mandatoryCondition"; "required": false; }; "editableCondition": { "alias": "editableCondition"; "required": false; }; "visibleCondition": { "alias": "visibleCondition"; "required": false; }; "metaFields": { "alias": "metaFields"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-attachments.component.d.ts.map