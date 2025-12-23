import * as i0 from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, forwardRef, Component, Input } from '@angular/core';
import { j as BaseView, I as ImageCropModalComponent, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, p as FileUploadService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { WebcamModule } from 'ngx-webcam';
import * as i13 from '@eisberg-labs/ngx-barcode-scanner';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import * as i13$2 from '@angular/common';
import { CommonModule, JsonPipe } from '@angular/common';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { CeeAttachmentsComponent } from './ng-cee-core-cee-attachments.component-DaZytsS9.mjs';
import heic2any from 'heic2any';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import * as i1 from '@angular/platform-browser';
import * as i13$1 from 'ngx-image-compress';
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
import '@angular/material/icon';
import '@angular/material/tree';
import 'ngx-image-zoom';
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
import '@angular/cdk/menu';
import '@angular-material-components/datetime-picker';
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-quill';

const _c0 = a0 => ({ "background-image": a0 });
const _c1 = a0 => ({ "color": a0 });
function CeeProfileImageComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeProfileImageComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeProfileImageComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 12)(2, CeeProfileImageComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeProfileImageComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeProfileImageComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeProfileImageComponent_div_0_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 18);
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_1_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r4.type == "Mandatory" && !ctx_r1.fieldValue);
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeeProfileImageComponent_div_0_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_2_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r4.type == ctx_r1.errorType);
} }
function CeeProfileImageComponent_div_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeProfileImageComponent_div_0_ng_container_11_div_1_Template, 2, 1, "div", 19)(2, CeeProfileImageComponent_div_0_ng_container_11_div_2_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errorType);
} }
function CeeProfileImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div")(2, "div", 3);
    i0.ɵɵtemplate(3, CeeProfileImageComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeProfileImageComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeProfileImageComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7)(7, "label", 8);
    i0.ɵɵtemplate(8, CeeProfileImageComponent_div_0_img_8_Template, 1, 0, "img", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 10, 0);
    i0.ɵɵlistener("click", function CeeProfileImageComponent_div_0_Template_input_click_9_listener() { i0.ɵɵrestoreView(_r1); const fileInput_r3 = i0.ɵɵreference(10); return i0.ɵɵresetView(fileInput_r3.value = ""); })("change", function CeeProfileImageComponent_div_0_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fileChangeEvent($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeProfileImageComponent_div_0_ng_container_11_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("image-upload ", ctx_r1.isCustomClass && ctx_r1.custom_class_name ? ctx_r1.custom_class_name[0] : "", " ", !ctx_r1.valid && ctx_r1.isMandatory ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(11, _c0, "url(" + ctx_r1.imageName + ")"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
class CeeProfileImageComponent extends BaseView {
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
    fileUploadService;
    service;
    sanitizer;
    imageCompress;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    imageName = "/assets/images/avatar.png";
    errors = [];
    AdditionalParameter = {};
    isError = false;
    files = [];
    maintainAspectRatio = false;
    cropperStaticWidth = 170;
    cropperStaticHeight = 170;
    cropperMinWidth = 170;
    cropperMinHeight = 170;
    onlyScaleDown = true;
    roundCropper = true;
    imageChangedEvent = '';
    croppedImage = '';
    canvasRotation = 0;
    rotation;
    translateH = 0;
    translateV = 0;
    scale = 1;
    aspectRatio = 1 / 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform = {
        translateUnit: 'px'
    };
    imageURL;
    loading = false;
    allowMoveImage = true;
    hidden = false;
    isPicChangeBtnClickd = false;
    custom_class_name;
    errorType = '';
    fileUploads = {};
    preDefineMimeType = {
        csv: 'text/csv',
        heic: 'image/heic',
        heif: 'image/heif',
    };
    preDefineMimeTypeCheck = {
        csv: ['', 'application/vnd.ms-excel'],
        heic: ['', 'image/heic'],
        heif: ['', 'image/heif'],
    };
    html_id = '';
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, service, sanitizer, imageCompress) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService);
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
        this.fileUploadService = fileUploadService;
        this.service = service;
        this.sanitizer = sanitizer;
        this.imageCompress = imageCompress;
        ``;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        // console.log("rowData: ", this.rowData, " fieldData: ", this.fieldData, " rootData: ", this.rootData,)
        let ppData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        if (ppData) {
            this.fieldValue = this.imageName = ppData;
        }
        else if (this.fieldData.hasOwnProperty('response_api_key')) {
            let val;
            for (const key of this.fieldData.response_api_key.split('||')) {
                val = this.returnValueFromCallback(key);
                // console.log(key, " :=: ", val);
            }
            if (val) {
                this.fieldValue = this.imageName = val;
                this.updateFieldData(this.fieldValue);
            }
        }
        if (!this.fieldValue && this.isMandatory && this.isPicChangeBtnClickd) {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
        this.updateFieldData(this.fieldValue, this.valid);
        this.variableObject['emitForEmptySession_' + this.fieldData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            // console.log("res: ",res['unique_ids']," => ",this.fieldData.unique_id)
            if (res && res['unique_ids'] && res['unique_ids'].includes(this.fieldData.unique_id)) {
                this.fieldValue = "";
                this.imageName = "/assets/images/avatar.png";
            }
        });
        for (const [i, possibleValue] of this.fieldData.possible_values.entries()) {
            const values = possibleValue.split('|');
            if (values.length == 2) {
                const obj = {
                    id: `${this.fieldData.html_id}-${i}`,
                    type: values[0],
                    size: Number(values[1])
                };
                this.fileUploads = { ...this.fileUploads, ...{ [obj.type]: obj } };
            }
            else {
                console.error(`Something is wrong in the configuration for ${possibleValue}`);
            }
        }
    }
    onSessionDataUpdated(event) {
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        // this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        if (!this.rowData) {
            const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            let ppData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
            if (ppData) {
                this.fieldValue = this.imageName = ppData;
            }
            else if (resData !== null && resData !== undefined && resData !== '') {
                this.fieldValue = this.imageName = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
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
    concatData() { }
    onError(error) {
        this.isError = true;
    }
    // ############################################
    // fileChangeEvent(event: any): void {
    //   this.isPicChangeBtnClickd = true;
    //   this.loading = true;
    //   this.imageChangedEvent = event;
    //   this.openDialog(event)
    // }
    convertReadableCSVFile(file) {
        const ext = file.name?.split('.').pop();
        if (file && file.size > 0 && this.preDefineMimeType[ext] && this.preDefineMimeTypeCheck[ext].includes(file.type)) {
            file = new File([file], file.name, { type: this.preDefineMimeType[ext] });
        }
        return file;
    }
    fileChangeEvent(event) {
        this.errorType = '';
        const file = event.target.files[0];
        const fileObj = this.convertReadableCSVFile(file);
        const fileData = this.fileUploads[fileObj.type];
        const fileName = file['name'];
        // ✅ Allow only filenames with exactly one dot (e.g., abc.pdf)
        const dotCount = (fileName.match(/\./g) || []).length;
        if (dotCount !== 1) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'invalid_file_extension');
            this.errorType = 'invalid_file_extension';
            event.target.value = ''; // Clear the input value
            return;
        }
        // 2. ✅ Block dangerous extensions
        const disallowedExtensions = ['exe', 'js', 'html', 'htm', 'svg', 'php', 'aspx', 'jsp', 'bat', 'sh'];
        const fileExtension = fileName.split('.').pop();
        if (disallowedExtensions.includes(fileExtension)) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'invalid_file_extension');
            this.errorType = 'invalid_file_extension';
            event.target.value = '';
            return;
        }
        if (!fileData) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'file_type');
            this.errorType = 'file_type';
            return;
        }
        if ((fileData.type.toLowerCase() == fileObj.type.toLowerCase()) && fileObj.size > (fileData.size * 1024)) {
            this.setModalorSanckBarMessage(this.html_id, this.files, 'individual_file_size');
            this.errorType = 'individual_file_size';
            return;
        }
        this.isPicChangeBtnClickd = true;
        this.loading = true;
        if (file && file.name.toLowerCase().endsWith(".heic")) {
            heic2any({
                blob: file,
                toType: "image/png",
            })
                .then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                // Create new event with converted file
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(pngFile);
                const newEvent = { ...event, target: { ...event.target, files: dataTransfer.files } };
                this.imageChangedEvent = newEvent;
                this.openDialog(newEvent);
            })
                .catch((e) => {
                console.error("Error converting HEIC to PNG", e);
                this.loading = false;
            });
        }
        else {
            this.imageChangedEvent = event;
            this.openDialog(event);
        }
    }
    imageCropped(event) {
        this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
        // console.log(event);
    }
    imageLoaded() {
        this.showCropper = true;
        // console.log('Image loaded');
    }
    cropperReady(sourceImageDimensions) {
        // console.log('Cropper ready', sourceImageDimensions);
        this.loading = false;
    }
    loadImageFailed() {
        console.error('Load image failed');
    }
    rotateLeft() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation--;
            this.flipAfterRotate();
        });
    }
    rotateRight() {
        this.loading = true;
        setTimeout(() => {
            this.canvasRotation++;
            this.flipAfterRotate();
        });
    }
    moveLeft() {
        this.transform = {
            ...this.transform,
            translateH: ++this.translateH
        };
    }
    moveRight() {
        this.transform = {
            ...this.transform,
            translateH: --this.translateH
        };
    }
    moveTop() {
        this.transform = {
            ...this.transform,
            translateV: ++this.translateV
        };
    }
    moveBottom() {
        this.transform = {
            ...this.transform,
            translateV: --this.translateV
        };
    }
    flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
        this.translateH = 0;
        this.translateV = 0;
    }
    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }
    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }
    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {
            translateUnit: 'px'
        };
    }
    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }
    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }
    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }
    toggleAspectRatio() {
        this.aspectRatio = this.aspectRatio === 4 / 3 ? 16 / 5 : 4 / 3;
    }
    openDialog(data) {
        const dialogRef = this.dialog.open(ImageCropModalComponent, {
            data: {
                message: data,
                additionalParameter: this.AdditionalParameter
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            if (result !== undefined) {
                // this.animal.set(result);
                // console.log('result: ',result);
                // If uploaded file size is smaller then skip compression 
                if (this.additionalParameter.hasOwnProperty("CEE_CompressImage_IfSizeExceedsInKB") && this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"] !== "") {
                    this.compressImage(result, (compImg) => {
                        this.fieldValue = this.imageName = this.imageChangedEvent = compImg;
                        this.updateFieldData(this.fieldValue);
                        this.sendDatatoAttachments(compImg);
                    });
                }
                else {
                    this.fieldValue = this.imageName = this.imageChangedEvent = result;
                    this.updateFieldData(this.fieldValue);
                    this.sendDatatoAttachments(result);
                }
            }
            if (!this.fieldValue && this.isMandatory && this.isPicChangeBtnClickd) {
                this.valid = false;
            }
            else {
                this.valid = true;
            }
            this.updateFieldData(this.fieldValue, this.valid);
        });
    }
    urltoFile(url, filename, mimeType) {
        if (url.startsWith('data:')) {
            var arr = url.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[arr.length - 1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new File([u8arr], filename, { type: mime || mimeType });
            return Promise.resolve(file);
        }
        return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], filename, { type: mimeType }));
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[arr.length - 1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    getName(originalName, fileName, regex) {
        let result = originalName;
        const matched = originalName.match(new RegExp(regex));
        if (matched) {
            for (const name of matched) {
                let val = '';
                switch (name.toLowerCase()) {
                    case '{filename}':
                        val = fileName;
                        break;
                    case '{yyyymmddhhmmss}':
                    case '{timestamp}':
                        val = String(new Date().getTime());
                        break;
                    default:
                        if (name.includes('##')) {
                            const values = name.match(new RegExp(/[^{}]+/g));
                            const key = values ? values[0] : name;
                            const handlerData = this.apiDataService.getApiDataByHandler(key.split('##')[0]);
                            val = handlerData ? handlerData.value[key] : '';
                        }
                        else {
                            const apiData = this.apiDataService.getApiDataByApiKey(name);
                            val = apiData ? apiData.value : '';
                        }
                        break;
                }
                result = result.split(name).join(val);
            }
        }
        return result;
    }
    sendDatatoAttachments(fileData) {
        var imageName = this.AdditionalParameter['CEE_PP_Format'] ? 'profile_image.' + this.AdditionalParameter['CEE_PP_Format'] : 'profile_image.png';
        if (this.AdditionalParameter['CEE_PP_Filename']) {
            // check for the file name as concatenation of api keys
            /**
             * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
             * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
             * * here first searching would be done using FileName
             * * and TimeStamp then need to check if there are any apiKey
             * * then join
             */
            const file = imageName.split(".");
            const extension = file.splice(-1)[0];
            let resultFileName = this.getName(this.AdditionalParameter['CEE_PP_Filename'], file[0], /\{(.*?)\}/g);
            resultFileName = `${resultFileName}.${extension}`;
            imageName = resultFileName;
        }
        let selectedFile = {
            uploaded: false,
            file: this.dataURLtoFile(fileData, imageName),
            attachmentId: '',
            url: '',
            attachmentPath: '',
            uId: fileData.lastModified,
            custom: [],
            autoUpload: true
        };
        this.rootData[this.fieldData.unique_id](selectedFile);
    }
    async compressImage(file, callBack) {
        if (!file)
            return;
        const settings = {
            orientation: 1,
            ratio: 50,
            quality: 50
        };
        // for orientation
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Orientation") && this.additionalParameter["CEE_CompressImg_Orientation"] !== "") {
            settings.orientation = this.additionalParameter["CEE_CompressImg_Orientation"];
        }
        // for ratio
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_AspectRatio") && this.additionalParameter["CEE_CompressImg_AspectRatio"] !== "") {
            settings.ratio = this.additionalParameter["CEE_CompressImg_AspectRatio"];
        }
        // for quality
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Quality") && this.additionalParameter["CEE_CompressImg_Quality"] !== "") {
            settings.quality = this.additionalParameter["CEE_CompressImg_Quality"];
        }
        // for maxWidth
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxHeight") && this.additionalParameter["CEE_CompressImg_maxHeight"] !== "") {
            settings.maxWidth = parseInt(this.additionalParameter["CEE_CompressImg_maxHeight"].toString().replace(/[^\d]/g, ''));
        }
        // for maxHeight
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxWidth") && this.additionalParameter["CEE_CompressImg_maxWidth"] !== "") {
            settings.maxHeight = parseInt(this.additionalParameter["CEE_CompressImg_maxWidth"].toString().replace(/[^\d]/g, ''));
        }
        const imageSizeLimit = Number(this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"].match(/\d+/));
        const fileSize = this.getBase64ImageSize(file);
        if ((fileSize / 1000) < imageSizeLimit) {
            callBack(file);
        }
        this.imageCompress.compressFile(file, settings.orientation, settings.ratio, settings.quality, settings.maxWidth, settings.maxHeight).then((result) => {
            console.log('Compressed image: ', result); // Base64 compressed image
            callBack(result);
        }).catch(error => {
            console.log(error);
        });
    }
    getBase64ImageSize(base64String) {
        // Remove the prefix (if present)
        const base64Data = base64String.split(',')[1];
        // Calculate the size in bytes
        const sizeInBytes = (base64Data.length * 3) / 4 - (base64Data.endsWith('==') ? 2 : base64Data.endsWith('=') ? 1 : 0);
        return sizeInBytes;
    }
    static ɵfac = function CeeProfileImageComponent_Factory(t) { return new (t || CeeProfileImageComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(FileUploadService), i0.ɵɵdirectiveInject(i13.NgxBarcodeScannerService), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i13$1.NgxImageCompressService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeProfileImageComponent, selectors: [["app-cee-profile-image"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["fileInput", ""], ["class", "field-wrapper", "style", "margin-bottom: 20px;", 3, "id", 4, "ngIf"], [1, "field-wrapper", 2, "margin-bottom", "20px", 3, "id"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [3, "ngStyle"], ["for", "file-input"], ["src", "./assets/images/icon_expand.png", 4, "ngIf"], ["id", "file-input", "type", "file", "accept", "image/*,.heic", 3, "click", "change"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], ["src", "./assets/images/icon_expand.png"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeProfileImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeProfileImageComponent_div_0_Template, 12, 13, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [WebcamModule, NgxBarcodeScannerModule, CommonModule, i13$2.NgForOf, i13$2.NgIf, i13$2.NgStyle], styles: [".errorMsgCamera[_ngcontent-%COMP%], .errorMsg[_ngcontent-%COMP%]{text-align:center}image-cropper[_ngcontent-%COMP%]{max-height:33vh}.cropper-wrapper[_ngcontent-%COMP%]{min-height:300px;position:relative}.loader[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.image-upload[_ngcontent-%COMP%]{height:170px;width:170px;border-radius:50%;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px;background-image:url(/assets/images/avatar.png);background-repeat:no-repeat;background-size:170px 170px;margin:10px}.invalid[_ngcontent-%COMP%]{border:3px solid #f00!important}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;position:relative;top:106px;right:-150px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeProfileImageComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-profile-image', imports: [WebcamModule, JsonPipe, NgxBarcodeScannerModule, CommonModule, ImageCropperComponent, forwardRef(() => CeeAttachmentsComponent), forwardRef(() => ImageCropModalComponent)], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" style=\"margin-bottom: 20px;\">\r\n    <div>\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"image-upload {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid && isMandatory  ? 'invalid' : 'valid' }}\" [ngStyle]=\"{'background-image': 'url(' + imageName + ')'}\">\r\n            <label for=\"file-input\">\r\n                <img *ngIf=\"isEditable\" src=\"./assets/images/icon_expand.png\"/>\r\n            </label>\r\n            <input #fileInput (click)=\"fileInput.value = ''\" id=\"file-input\" type=\"file\" (change)=\"fileChangeEvent($event)\" accept=\"image/*,.heic\" />\r\n        </div>\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n                <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !fieldValue\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}</p>\r\n            </div>\r\n            <div class=\"error-message-wrapper\" *ngIf=\"errorType\">\r\n                <p *ngIf=\"message.type == errorType\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}</p>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n", styles: [".errorMsgCamera,.errorMsg{text-align:center}image-cropper{max-height:33vh}.cropper-wrapper{min-height:300px;position:relative}.loader{position:absolute;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;font-size:20px;color:#fff}.image-upload{height:170px;width:170px;border-radius:50%;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px;background-image:url(/assets/images/avatar.png);background-repeat:no-repeat;background-size:170px 170px;margin:10px}.invalid{border:3px solid #f00!important}.image-upload>input{display:none}.image-upload img{cursor:pointer;position:relative;top:106px;right:-150px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: FileUploadService }, { type: i13.NgxBarcodeScannerService }, { type: i1.DomSanitizer }, { type: i13$1.NgxImageCompressService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeProfileImageComponent, { className: "CeeProfileImageComponent", filePath: "lib\\field-components\\cee-profile-image\\cee-profile-image.component.ts", lineNumber: 64 }); })();

export { CeeProfileImageComponent };
//# sourceMappingURL=ng-cee-core-cee-profile-image.component-RXkFPn1m.mjs.map
