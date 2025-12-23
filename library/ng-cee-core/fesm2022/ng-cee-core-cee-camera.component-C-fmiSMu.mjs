import * as i0 from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, forwardRef, Component, ViewChild, Input } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, p as FileUploadService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i9 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import * as i14 from 'ngx-webcam';
import { WebcamUtil, WebcamModule } from 'ngx-webcam';
import * as i13 from '@eisberg-labs/ngx-barcode-scanner';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';
import * as i13$1 from '@angular/common';
import { CommonModule, JsonPipe } from '@angular/common';
import { CeeAttachmentsComponent } from './ng-cee-core-cee-attachments.component-DaZytsS9.mjs';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i11 from '@angular/router';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
import '@angular/forms';
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
import '@angular/cdk/menu';
import '@angular-material-components/datetime-picker';
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';
import 'ngx-image-compress';
import 'heic2any';

const _c0 = ["video"];
const _c1 = () => ["code_128", "ean", "upc", "upc_e", "ean_8"];
function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "webcam", 14);
    i0.ɵɵlistener("imageCapture", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_imageCapture_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleImage($event)); })("cameraSwitched", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_cameraSwitched_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.cameraWasSwitched($event)); })("initError", function CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template_webcam_initError_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleInitError($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("width", 500)("height", 400)("trigger", ctx_r1.triggerObservable)("allowCameraSwitch", ctx_r1.allowCameraSwitch)("mirrorImage", ctx_r1.mirrorImage)("imageQuality", 1)("captureImageData", ctx_r1.captureImageData)("switchCamera", ctx_r1.nextWebcamObservable)("videoOptions", ctx_r1.videoOptionSet);
} }
function CeeCameraComponent_div_0_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "img", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.waterMarkImage ? ctx_r1.waterMarkImage : ctx_r1.webcamImage.imageAsDataUrl, i0.ɵɵsanitizeUrl);
} }
function CeeCameraComponent_div_0_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "Captured image will be automatically uploaded.");
    i0.ɵɵelementEnd();
} }
function CeeCameraComponent_div_0_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "h6");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.AdditionalParameter.CEE_camera_error || "camera device not available", " ");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerSnapshot()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.AdditionalParameter.takepicture || "Take Picture");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.retakePicture()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.AdditionalParameter.retakepicture || "Retake Picture");
} }
function CeeCameraComponent_div_0_div_1_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.changeWebCam(true)); });
    i0.ɵɵtext(1, "Toggle Camera");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r1.multipleWebcamsAvailable);
} }
function CeeCameraComponent_div_0_div_1_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onoffWebcam()); });
    i0.ɵɵtext(1, "Switch Camera");
    i0.ɵɵelementEnd();
} }
function CeeCameraComponent_div_0_div_1_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CeeCameraComponent_div_0_div_1_div_1_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.rotate()); });
    i0.ɵɵtext(1, "Orientation");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r1.multipleWebcamsAvailable);
} }
function CeeCameraComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 5);
    i0.ɵɵtemplate(2, CeeCameraComponent_div_0_div_1_div_1_webcam_2_Template, 1, 9, "webcam", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCameraComponent_div_0_div_1_div_1_div_3_Template, 2, 1, "div", 7)(4, CeeCameraComponent_div_0_div_1_div_1_div_4_Template, 2, 0, "div", 8)(5, CeeCameraComponent_div_0_div_1_div_1_div_5_Template, 3, 1, "div", 9);
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵtemplate(7, CeeCameraComponent_div_0_div_1_div_1_button_7_Template, 2, 1, "button", 11)(8, CeeCameraComponent_div_0_div_1_div_1_button_8_Template, 2, 1, "button", 11)(9, CeeCameraComponent_div_0_div_1_div_1_button_9_Template, 2, 1, "button", 12)(10, CeeCameraComponent_div_0_div_1_div_1_button_10_Template, 2, 0, "button", 11)(11, CeeCameraComponent_div_0_div_1_div_1_button_11_Template, 2, 1, "button", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showWebcam);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.webcamImage && !ctx_r1.showWebcam);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.autoUpload == true && ctx_r1.errorMsgBox == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errors.length > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reTrigger);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.reTrigger);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.cameratoggle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.cameraswitch);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.AdditionalParameter.orientation);
} }
function CeeCameraComponent_div_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " camera device not available ");
} }
function CeeCameraComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeCameraComponent_div_0_div_1_div_1_Template, 12, 9, "div", 4)(2, CeeCameraComponent_div_0_div_1_ng_template_2_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCameraExist_r8 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isCameraExist)("ngIfElse", noCameraExist_r8);
} }
function CeeCameraComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "label");
    i0.ɵɵtext(2, "Camera Library - Barcode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22)(4, "ngx-barcode-scanner", 23);
    i0.ɵɵtwoWayListener("valueChange", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.value, $event) || (ctx_r1.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("exception", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_exception_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onError($event)); })("valueChange", function CeeCameraComponent_div_0_div_2_Template_ngx_barcode_scanner_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onValueChanges($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("value", ctx_r1.value);
    i0.ɵɵproperty("codes", i0.ɵɵpureFunction0(3, _c1))("errorThreshold", 0.1);
} }
function CeeCameraComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, CeeCameraComponent_div_0_div_1_Template, 4, 2, "div", 3)(2, CeeCameraComponent_div_0_div_2_Template, 5, 4, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.barcodeShow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.barcodeShow);
} }
class CeeCameraComponent extends BaseView {
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
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    video;
    isCameraExist = true;
    showWebcam = true;
    allowCameraSwitch = true;
    multipleWebcamsAvailable = false;
    errors = [];
    reTrigger = false;
    angle = 0;
    deviceId;
    mirrorImage = 'never';
    captureImageData = true;
    AdditionalParameter = {};
    videoOptions1 = {
        width: { ideal: 600 },
        height: { ideal: 480 },
        facingMode: "user"
    };
    videoOptions2 = {
        width: { ideal: 320 },
        height: { ideal: 240 },
        facingMode: "environment"
    };
    videoOptionSet = this.videoOptions1;
    webcamImage;
    trigger = new Subject();
    nextWebcam = new Subject();
    barcodeShow = false;
    value;
    isError = false;
    quaggaConfig = {};
    files = [];
    payLoad = {
        type: 'file',
        fileData: {}
    };
    variableObj = {};
    autoUpload = false;
    errorMsgBox = false;
    waterMarkImage = '';
    latitude;
    longitude;
    orientationChangeHandler = () => this.show();
    windowLoadHandler = () => this.show();
    subscriptions = new Subscription();
    isDestroyed = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, service) {
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
        screen.orientation.addEventListener("change", this.orientationChangeHandler);
        window.addEventListener("load", this.windowLoadHandler);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.autoUpload = (this.AdditionalParameter['AutoUpload'] === "true") ? true : false;
    }
    //@HostListener('window:beforeunload')
    ngOnDestroy() {
        screen.orientation.removeEventListener("change", this.orientationChangeHandler);
        window.removeEventListener("load", this.windowLoadHandler);
        if (this.trigger) {
            this.trigger.complete();
        }
        if (this.nextWebcam) {
            this.nextWebcam.complete();
        }
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        this.isDestroyed = true;
        this.webcamImage = undefined;
        this.waterMarkImage = '';
        this.files = [];
        this.variableObj = {};
        this.errors = [];
        // Clear location data
        this.latitude = undefined;
        this.longitude = undefined;
        // Reset configuration objects
        this.AdditionalParameter = {};
        this.quaggaConfig = {};
        this.payLoad = {
            type: 'file',
            fileData: {}
        };
        // Reset video options
        this.videoOptions1 = null;
        this.videoOptions2 = null;
        this.videoOptionSet = null;
        this.onViewUnload();
        this.onStopButtonPress();
    }
    onStopButtonPress() {
        this.service.stop();
    }
    getCurrentLocation() {
        if (navigator.geolocation && !this.isDestroyed) {
            navigator.geolocation.getCurrentPosition(position => {
                if (!this.isDestroyed) {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                }
            }, error => {
                if (!this.isDestroyed) {
                    console.error('Geolocation error:', error);
                }
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    onViewDataInit() {
        this.getCurrentLocation();
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        if (this.AdditionalParameter.scanmode === "barcode") {
            this.barcodeShow = true;
            this.onStartButtonPress();
        }
        else {
            this.barcodeShow = false;
            WebcamUtil.getAvailableVideoInputs()
                .then((mediaDevices) => {
                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
            });
        }
    }
    concatData() { }
    onStartButtonPress() {
        this.service.start(this.quaggaConfig, 0.1);
    }
    onSessionDataUpdated(event) {
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        // this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
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
    }
    onError(error) {
        this.isError = true;
    }
    getOppositeOrientation() {
        const { type } = screen.orientation;
        return type.startsWith("portrait") ? "landscape" : "portrait";
    }
    async rotate() {
        // try {
        //   await this.fullScreenCheck();
        // } catch (err) {
        //   console.error(err);
        // }
        this.unlock();
        const newOrientation = this.getOppositeOrientation();
        // await screen.orientation.lock(newOrientation);
    }
    fullScreenCheck() {
        if (document.fullscreenElement)
            return;
        return document.documentElement.requestFullscreen();
    }
    unlock() {
        screen.orientation.unlock();
    }
    show() {
        const { type, angle } = screen.orientation;
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    onoffWebcam() {
        this.showWebcam = !this.showWebcam;
        this.webcamImage = undefined;
        this.reTrigger = false;
    }
    changeWebCam(directionOrDeviceId) {
        this.videoOptionSet = /Android|iphone/i.test(navigator.userAgent) ? this.videoOptions2 : this.videoOptions1;
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
        this.showWebcam = false;
        this.reTrigger = true;
        this.errorMsgBox = true;
        if (this.AdditionalParameter['CEE_watermark'] == 'true') {
            this.imageWatermarking(this.webcamImage);
        }
        else {
            let fileData = this.dataURLtoFile(this.webcamImage, this.AdditionalParameter['imageName'] + ".jpeg");
            this.sendDatatoAttachments(fileData);
        }
    }
    sendDatatoAttachments(fileData) {
        let selectedFile = {
            uploaded: false,
            file: fileData,
            attachmentId: '',
            url: '',
            attachmentPath: '',
            uId: fileData.lastModified,
            custom: [],
            autoUpload: this.autoUpload
        };
        this.rootData[this.fieldData.unique_id](selectedFile);
    }
    imageWatermarking(webImage) {
        let imageBase64 = webImage.imageAsDataUrl.split(",")[1];
        let requestBody = {
            image_text: 'india',
            output_image: "beach_timestamp_bottom1851.jpg",
            on_image: "",
            // image_pos: "200,200",
            // text_pos: "900,1600",
            file_name: "waterfall.jpg",
            file_data: imageBase64
        };
        requestBody.on_image = this.AdditionalParameter['CEE_watermarkonimage'] == 'true' ? "True" : "False";
        //requestBody.image_pos = this.AdditionalParameter['CEE_watermarkposition'] == 'top' ? "200,200" : "400,400";
        //requestBody.text_pos = this.AdditionalParameter['CEE_watermarkposition'] == 'top' ? "900,1600" : "500,1000";
        requestBody.output_image = this.AdditionalParameter['imageName'] + ".jpeg";
        if (this.AdditionalParameter['CEE_watermarkvalue'].includes('((dynamic))')) {
            let nowstring = this.setDynamicLabelUtil.getDynamicValue(this.fieldData).additional_parameters_config ? this.setDynamicLabelUtil.getDynamicValue(this.fieldData).additional_parameters_config : "";
            if (this.AdditionalParameter['CEE_watermarkvalue'].includes('now')) {
                let extractedString = this.extractStringAfterNow(this.AdditionalParameter['CEE_watermarkvalue']);
                let extractedArr = extractedString && extractedString.split("||");
                let textAdd = '';
                if (extractedArr) {
                    extractedArr.forEach(x => {
                        if (x.trim() == 'date') {
                            textAdd = textAdd + ' ' + this.getCurrentDateFormatted();
                        }
                        else if (x.trim() == 'timestamp') {
                            textAdd = textAdd + ' ' + Date.now();
                        }
                        else if (x.trim() == 'latlong') {
                            textAdd = textAdd.concat() + ' ' + this.latitude + ',' + this.longitude;
                        }
                        else {
                            textAdd = '';
                        }
                    });
                }
                let dynamicContentTime = extractedString ? this.replaceString(this.AdditionalParameter['CEE_watermarkvalue'], `now:$${extractedString}$`, textAdd) : this.AdditionalParameter['CEE_watermarkvalue'];
                let dynamicContent = this.replaceDynamicValue(dynamicContentTime, nowstring);
                requestBody.image_text = dynamicContent.replace(/\(\(dynamic\)\)/g, '');
                let image_text = dynamicContent.replace(/\(\(dynamic\)\)/g, '');
                requestBody.image_text = textAdd + ' ' + image_text;
            }
        }
        else {
            requestBody.image_text = this.AdditionalParameter['CEE_watermarkvalue'];
        }
        let finalRequestBody = {
            "api_request": JSON.stringify(requestBody)
        };
        const accessToken = this.returnAccessToken();
        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        });
        this.subscriptions.add(this.http.post(localStorage.getItem('WATERMARK_SERVICE_URL'), finalRequestBody, { headers }).subscribe({
            next: Jdata => {
                if (Jdata && Jdata.status && Jdata.status === 'ok') {
                    let data = Jdata.api_response && JSON.parse(Jdata.api_response);
                    this.waterMarkImage = 'data:image/jpeg;base64,' + data.watermarked_image_data;
                    let fileData = this.dataURLtoFile2(this.waterMarkImage, this.AdditionalParameter['imageName'] + ".jpeg");
                    this.sendDatatoAttachments(fileData);
                }
            },
            error: error => {
                console.error('There was an error!', error.message);
            }
        }));
    }
    replaceString(input, search, replaceValue) {
        return input.replace(search, replaceValue);
    }
    replaceDynamicValue(input, replaceValue) {
        const match = input.match(/%[^%]+%/);
        let finalValue = "";
        if (match) {
            finalValue = input.replace(match[0], replaceValue);
        }
        return finalValue;
    }
    getCurrentDateFormatted() {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
    extractStringAfterNow(input) {
        const regex = /now:\s*\$(.*?)\$/;
        const match = regex.exec(input);
        return match ? match[1] : null;
    }
    retakePicture() {
        this.showWebcam = !this.showWebcam;
        this.webcamImage = undefined;
        this.reTrigger = false;
    }
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl._imageAsDataUrl.split(','), mime = dataurl._mimeType, bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    dataURLtoFile2(imageBase64, filename) {
        var arr = imageBase64.split(','), mime = "image/jpeg", bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    barcodeScan() {
        this.barcodeShow = true;
    }
    onValueChanges(value) {
        this.updateFieldData(value, true);
    }
    cameraWasSwitched(deviceId) {
        this.videoOptionSet = /Android|iphone/i.test(navigator.userAgent) ? this.videoOptions2 : this.videoOptions1;
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    returnAccessToken() {
        const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`;
        return accessToken;
    }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    static ɵfac = function CeeCameraComponent_Factory(t) { return new (t || CeeCameraComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(FileUploadService), i0.ɵɵdirectiveInject(i13.NgxBarcodeScannerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCameraComponent, selectors: [["app-cee-camera"]], viewQuery: function CeeCameraComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["noCameraExist", ""], ["class", "field-wrapper", "style", "margin-bottom: 20px;", 3, "id", 4, "ngIf"], [1, "field-wrapper", 2, "margin-bottom", "20px", 3, "id"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "margin-bottom:20px"], [3, "width", "height", "trigger", "allowCameraSwitch", "mirrorImage", "imageQuality", "captureImageData", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], ["class", "snapshot", 4, "ngIf"], ["class", "errorMsg", 4, "ngIf"], ["class", "errorMsgCamera", 4, "ngIf"], [1, "btn-group", "mt-4", 2, "margin-bottom", "20px"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", "id", "button", 3, "disabled", "click", 4, "ngIf"], [3, "imageCapture", "cameraSwitched", "initError", "width", "height", "trigger", "allowCameraSwitch", "mirrorImage", "imageQuality", "captureImageData", "switchCamera", "videoOptions"], [1, "snapshot"], ["alt", "image", 3, "src"], [1, "errorMsg"], [1, "errorMsgCamera"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", "id", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [2, "width", "500px", "height", "400px"], [3, "valueChange", "exception", "value", "codes", "errorThreshold"]], template: function CeeCameraComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCameraComponent_div_0_Template, 3, 3, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [WebcamModule, i14.WebcamComponent, NgxBarcodeScannerModule, i13.NgxBarcodeScannerComponent, CommonModule, i13$1.NgIf], styles: [".errorMsgCamera[_ngcontent-%COMP%], .errorMsg[_ngcontent-%COMP%]{text-align:center}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCameraComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-camera', imports: [WebcamModule, JsonPipe, NgxBarcodeScannerModule, CommonModule, forwardRef(() => CeeAttachmentsComponent)], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" style=\"margin-bottom: 20px;\">\r\n    <div *ngIf=\"!barcodeShow\">\r\n        <div *ngIf=\"isCameraExist; else noCameraExist\">\r\n            <div class=\"margin-bottom:20px\">\r\n                <webcam\r\n                [width]=\"500\"\r\n                [height]=\"400\"\r\n                [trigger]=\"triggerObservable\" \r\n                (imageCapture)=\"handleImage($event)\" \r\n                *ngIf=\"showWebcam\"\r\n                [allowCameraSwitch]=\"allowCameraSwitch\" \r\n                [mirrorImage]=\"mirrorImage\" \r\n                [imageQuality]=\"1\"\r\n                [captureImageData]=\"captureImageData\" \r\n                [switchCamera]=\"nextWebcamObservable\" \r\n                [videoOptions]=\"videoOptionSet\" \r\n                (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n                (initError)=\"handleInitError($event)\"></webcam>\r\n            </div>\r\n            <div class=\"snapshot\" *ngIf=\"webcamImage && !showWebcam\">\r\n                <img [src]=\"waterMarkImage ? waterMarkImage : webcamImage.imageAsDataUrl\" alt=\"image\" />\r\n            </div>\r\n            <div class=\"errorMsg\" *ngIf=\"autoUpload == true && errorMsgBox == true\">Captured image will be automatically uploaded.</div>\r\n            <div *ngIf=\"errors.length > 0\" class=\"errorMsgCamera\">\r\n                <h6>{{this.AdditionalParameter.CEE_camera_error || \"camera device not available\"}} </h6>\r\n                <!-- <ul *ngFor=\"let err of errors\">\r\n                    <li>{{err | json}}</li>\r\n                </ul> -->\r\n            </div>\r\n            <div class=\"btn-group mt-4\" style=\"margin-bottom: 20px;\">\r\n                <button type=\"button\" *ngIf=\"!reTrigger\" class=\"btn btn-primary\" (click)=\"triggerSnapshot()\">{{this.AdditionalParameter.takepicture || \"Take Picture\"}}</button>\r\n                <button type=\"button\" *ngIf=\"reTrigger\" class=\"btn btn-primary\" (click)=\"retakePicture()\">{{this.AdditionalParameter.retakepicture || \"Retake Picture\"}}</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.cameratoggle\" class=\"btn btn-primary\" [disabled]=\"!multipleWebcamsAvailable\" (click)=\"changeWebCam(true)\">Toggle Camera</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.cameraswitch\" class=\"btn btn-primary\" (click)=\"onoffWebcam()\">Switch Camera</button>\r\n                <button type=\"button\" *ngIf=\"AdditionalParameter.orientation\"  class=\"btn btn-primary\"  [disabled]=\"!multipleWebcamsAvailable\" (click)=\"rotate()\" id=\"button\">Orientation</button>\r\n            </div>\r\n        </div>\r\n        <ng-template #noCameraExist>\r\n            camera device not available\r\n        </ng-template>\r\n    </div>\r\n    <div *ngIf=\"barcodeShow\">\r\n        <label>Camera Library - Barcode</label>\r\n        <div style=\"width: 500px; height: 400px;\">\r\n            <ngx-barcode-scanner\r\n            [(value)]=\"value\"\r\n            [codes]=\"['code_128', 'ean', 'upc', 'upc_e', 'ean_8']\"\r\n            [errorThreshold]=\"0.1\"\r\n            (exception)=\"onError($event)\"\r\n            (valueChange)=\"onValueChanges($event)\"\r\n            ></ngx-barcode-scanner>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".errorMsgCamera,.errorMsg{text-align:center}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i11.Router }, { type: FileUploadService }, { type: i13.NgxBarcodeScannerService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], video: [{
            type: ViewChild,
            args: ['video', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCameraComponent, { className: "CeeCameraComponent", filePath: "lib\\field-components\\cee-camera\\cee-camera.component.ts", lineNumber: 56 }); })();

export { CeeCameraComponent };
//# sourceMappingURL=ng-cee-core-cee-camera.component-C-fmiSMu.mjs.map
