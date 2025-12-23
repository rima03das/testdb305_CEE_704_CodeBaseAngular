import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i5 from 'ngx-image-zoom';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import * as i13 from '@angular/common';
import { NgClass, CommonModule } from '@angular/common';
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
import '@angular/forms';
import '@angular/router';
import '@angular/material/form-field';
import '@angular/material/input';
import '@angular/material/icon';
import '@angular/material/tree';
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

function CeeCarouselComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("mouseover", function CeeCarouselComponent_div_1_div_1_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = true); })("mouseout", function CeeCarouselComponent_div_1_div_1_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = false); });
    i0.ɵɵelementStart(1, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_div_1_Template_img_click_1_listener() { const i_r4 = i0.ɵɵrestoreView(_r2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", image_r5.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r4 ? "thumbnail thumbnail_active" : "thumbnail")("src", image_r5.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r5.text);
} }
function CeeCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_1_div_1_Template, 2, 4, "div", 8);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(4, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 10);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(6, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.images);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "left" ? "prev-horizontal" : "prev");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "left" ? "next-horizontal" : "next");
} }
function CeeCarouselComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "numbertext numbertext_active" : "numbertext");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.countText, " ", i_r6, " / ", ctx_r2.images.length, "");
} }
function CeeCarouselComponent_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_3_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r7); const image_r8 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openPictureInModal(image_r8)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("alt", image_r8.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "image image_active" : "image")("src", image_r8.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r8.text);
} }
function CeeCarouselComponent_div_3_lib_ngx_image_zoom_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-ngx-image-zoom", 18);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("thumbImage", image_r8.image)("fullImage", image_r8.highres)("magnification", 2)("enableScrollZoom", true)("zoomMode", ctx_r2.zoomInEventType)("enableLens", false)("ngClass", ctx_r2.slideIndex == i_r6 ? "image image_active" : "image")("altText", image_r8.text)("titleText", image_r8.text)("circularLens", true);
} }
function CeeCarouselComponent_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r8 = ctx_r8.$implicit;
    const i_r6 = ctx_r8.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r6 ? "text text_active" : "text")("innerHTML", image_r8.text, i0.ɵɵsanitizeHtml);
} }
function CeeCarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_3_div_1_Template, 2, 4, "div", 14)(2, CeeCarouselComponent_div_3_img_2_Template, 1, 4, "img", 15)(3, CeeCarouselComponent_div_3_lib_ngx_image_zoom_3_Template, 1, 10, "lib-ngx-image-zoom", 16)(4, CeeCarouselComponent_div_3_ng_container_4_Template, 2, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showNumbers);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isZoomInModal);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isZoomInModal);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", image_r8.text);
} }
function CeeCarouselComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 20);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(2, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 21);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_4_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(4, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CeeCarouselComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("mouseover", function CeeCarouselComponent_div_5_div_1_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = true); })("mouseout", function CeeCarouselComponent_div_5_div_1_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.autoCyclingPause = false); });
    i0.ɵɵelementStart(1, "img", 12);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_div_1_Template_img_click_1_listener() { const i_r13 = i0.ɵɵrestoreView(_r12).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r13)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r14 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("alt", image_r14.text);
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r13 ? "thumbnail thumbnail_active" : "thumbnail")("src", image_r14.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("aria-label", image_r14.text);
} }
function CeeCarouselComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CeeCarouselComponent_div_5_div_1_Template, 2, 4, "div", 8);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(-1)); });
    i0.ɵɵtext(4, "\u276E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 10);
    i0.ɵɵlistener("click", function CeeCarouselComponent_div_5_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.plusSlides(1)); });
    i0.ɵɵtext(6, "\u276F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.images);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "right" ? "prev-horizontal" : "prev");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.thumbnailCarouselPosition == "right" ? "next-horizontal" : "next");
} }
function CeeCarouselComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 22);
    i0.ɵɵlistener("click", function CeeCarouselComponent_ng_container_8_Template_span_click_1_listener() { const i_r16 = i0.ɵɵrestoreView(_r15).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.currentSlide(i_r16)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.slideIndex == i_r16 ? "dot active" : "dot");
    i0.ɵɵattribute("aria-label", "Select Image " + i_r16);
} }
class CeeCarouselComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    images = [];
    slideIndex = 0;
    showNumbers = false;
    showNextPrevious = false;
    countText = '';
    autoCyclingInterval;
    autoCyclingPause = false;
    thumbnailCarouselPosition = "buttom";
    zoomInEventType = "onhover";
    isZoomInModal = false;
    flatUnflat;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    onViewDataInit() {
        // set images when the data is loaded.
        if (this.fieldData.field_style.field_assets && this.fieldData.field_style.field_assets.length > 0 && this.fieldData.possible_values) {
            this.fieldData.field_style.field_assets.map((data, key) => {
                this.images.push({
                    image: data.path,
                    thumbnail: data.thumbnail,
                    highres: data.highres,
                    text: this.fieldData.possible_values[key] ? this.fieldData.possible_values[key] : ''
                });
            });
        }
        this.thumbnailCarouselPosition = this.additionalParameter['CEE_Carousel_Position'] && this.additionalParameter['CEE_Carousel_Position'] != "" ? this.additionalParameter['CEE_Carousel_Position'].toLowerCase() : 'buttom';
        this.zoomInEventType = this.additionalParameter['CEE_ZoomInEventType'] && this.additionalParameter['CEE_ZoomInEventType'] != "" && this.additionalParameter['CEE_ZoomInEventType'].toLowerCase() == 'onhover' ? "hover" : 'click';
        this.isZoomInModal = this.additionalParameter['CEE_ZoomInModal'] && this.additionalParameter['CEE_ZoomInModal'] != "" && this.additionalParameter['CEE_ZoomInModal'].toLowerCase() == "true" ? true : false;
        if (this.additionalParameter['AutoCycling'] && this.additionalParameter['AutoCycling'] !== 'false' && parseInt(this.additionalParameter['AutoCycling'])) {
            this.autoCycling(parseInt(this.additionalParameter['AutoCycling']) * 1000);
        }
    }
    onAPICallback(data) {
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (Array.isArray(apiData)) {
                this.images = [];
                for (const data of apiData) {
                    if (typeof (data) == 'object') {
                        this.images.push({
                            image: data.path,
                            thumbnail: data.thumbnail,
                            highres: data.highres,
                        });
                    }
                    else {
                        this.images.push({
                            image: data
                        });
                    }
                }
            }
        }
    }
    concatData(data) {
        // throw new Error("Method not implemented.");
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    ngOnDestroy() {
        // throw new Error("Method not implemented.");
        if (this.autoCyclingInterval) {
            clearInterval(this.autoCyclingInterval);
            this.autoCyclingInterval = null;
        }
        // Clear images array and related data
        this.clearImages();
        // Clear utility object references
        this.flatUnflat = null;
        // Reset component state
        this.slideIndex = 0;
        this.showNumbers = false;
        this.showNextPrevious = false;
        this.countText = '';
        this.autoCyclingPause = false;
        this.thumbnailCarouselPosition = null;
        this.zoomInEventType = null;
        this.isZoomInModal = false;
        // Clear input properties
        this.primaryKeyIndex = null;
    }
    clearImages() {
        if (this.images && this.images.length > 0) {
            // Clear the array completely
            this.images.length = 0;
            this.images = [];
            // Reset slide index
            this.slideIndex = 0;
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    // Next/previous controls
    plusSlides(n) {
        if (this.slideIndex + n === this.images.length) {
            this.slideIndex = 0;
        }
        else if (this.slideIndex + n < 0) {
            this.slideIndex = this.images.length + n;
        }
        else {
            this.slideIndex += n;
        }
    }
    // Thumbnail image controls
    currentSlide(n) {
        this.slideIndex = n;
    }
    autoCycling(t = 1000) {
        const _this = this;
        this.autoCyclingInterval = setInterval(function () {
            if (!_this.autoCyclingPause)
                _this.plusSlides(1);
        }, t);
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    openPictureInModal(image) {
        let data = { 'image': image, 'zoomInEventType': this.zoomInEventType, 'zoomImg': true };
        this.wfeEventListHandler.openAlert(data);
    }
    static ɵfac = function CeeCarouselComponent_Factory(t) { return new (t || CeeCarouselComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCarouselComponent, selectors: [["app-cee-carousel"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 9, vars: 6, consts: [[1, "slider-main-container", 3, "ngClass"], ["class", "thumbnail-slideshow-container", 4, "ngIf"], [1, "slideshow-container", 3, "mouseover", "mouseout"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dot-container", 3, "mouseover", "mouseout"], [4, "ngFor", "ngForOf"], [1, "thumbnail-slideshow-container"], ["class", "mySlides", 3, "mouseover", "mouseout", 4, "ngFor", "ngForOf"], ["aria-level", "prev image", 3, "click", "ngClass"], ["aria-level", "next image", 3, "click", "ngClass"], [1, "mySlides", 3, "mouseover", "mouseout"], [3, "click", "alt", "ngClass", "src"], [1, "mySlides"], [3, "ngClass", 4, "ngIf"], [3, "alt", "ngClass", "src", "click", 4, "ngIf"], [3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "zoomMode", "enableLens", "ngClass", "altText", "titleText", "circularLens", 4, "ngIf"], [3, "ngClass"], [3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "zoomMode", "enableLens", "ngClass", "altText", "titleText", "circularLens"], [3, "ngClass", "innerHTML"], ["aria-level", "prev image", 1, "prev", 3, "click"], ["aria-level", "next image", 1, "next", 3, "click"], [3, "click", "ngClass"]], template: function CeeCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CeeCarouselComponent_div_1_Template, 7, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵlistener("mouseover", function CeeCarouselComponent_Template_div_mouseover_2_listener() { return ctx.autoCyclingPause = true; })("mouseout", function CeeCarouselComponent_Template_div_mouseout_2_listener() { return ctx.autoCyclingPause = false; });
            i0.ɵɵtemplate(3, CeeCarouselComponent_div_3_Template, 5, 4, "div", 3)(4, CeeCarouselComponent_ng_container_4_Template, 5, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CeeCarouselComponent_div_5_Template, 7, 3, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "br");
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵlistener("mouseover", function CeeCarouselComponent_Template_div_mouseover_7_listener() { return ctx.autoCyclingPause = true; })("mouseout", function CeeCarouselComponent_Template_div_mouseout_7_listener() { return ctx.autoCyclingPause = false; });
            i0.ɵɵtemplate(8, CeeCarouselComponent_ng_container_8_Template, 2, 2, "ng-container", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.thumbnailCarouselPosition == "top" ? "position-top" : ctx.thumbnailCarouselPosition == "left" ? "position-left" : ctx.thumbnailCarouselPosition == "right" ? "position-right" : "position-bottom");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.thumbnailCarouselPosition == "top" || ctx.thumbnailCarouselPosition == "left");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.images);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showNextPrevious);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.thumbnailCarouselPosition == "right" || ctx.thumbnailCarouselPosition == "bottom");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.images);
        } }, dependencies: [NgClass, NgxImageZoomModule, i5.NgxImageZoomComponent, CommonModule, i13.NgForOf, i13.NgIf], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.slider-main-container[_ngcontent-%COMP%]{position:relative;max-width:1000px;margin:auto}.slideshow-container[_ngcontent-%COMP%]{max-width:1000px;position:relative;margin:auto}.position-top[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%], .position-bottom[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%]{display:flex;max-width:1000px;position:relative;margin:20px auto}.position-left[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%], .position-right[_ngcontent-%COMP%]   .thumbnail-slideshow-container[_ngcontent-%COMP%]{display:inline;max-width:1000px;position:relative;margin:20px auto}.position-top[_ngcontent-%COMP%]{display:inline}.position-left[_ngcontent-%COMP%], .position-right[_ngcontent-%COMP%]{display:flex}.position-bottom[_ngcontent-%COMP%]{display:inline}.thumbnail_active[_ngcontent-%COMP%]{border:3px solid rgb(190,190,190);box-shadow:#717171}.thumbnail[_ngcontent-%COMP%]{cursor:pointer;padding:5px;max-width:150px;max-height:150px}.mySlides[_ngcontent-%COMP%]{display:block}.image_active[_ngcontent-%COMP%]{display:block!important}.image[_ngcontent-%COMP%]{display:none;width:100%}.numbertext[_ngcontent-%COMP%]{display:none;color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.numbertext_active[_ngcontent-%COMP%]{display:block!important}.text[_ngcontent-%COMP%]{display:none;color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.text_active[_ngcontent-%COMP%]{display:block!important}.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.prev-horizontal[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:50%;top:0;width:auto;margin-top:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:50%;bottom:0;width:auto;margin-bottom:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal[_ngcontent-%COMP%]{border-radius:3px 0 0 3px}.next[_ngcontent-%COMP%]{right:0;border-radius:3px 0 0 3px}.prev-horizontal[_ngcontent-%COMP%]:hover, .next-horizontal[_ngcontent-%COMP%]:hover, .prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover{background-color:#000c}.dot[_ngcontent-%COMP%]{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover{background-color:#717171}.dot-container[_ngcontent-%COMP%]{text-align:center}.fade[_ngcontent-%COMP%]{-webkit-animation-name:_ngcontent-%COMP%_fade;-webkit-animation-duration:1.5s;animation-name:_ngcontent-%COMP%_fade;animation-duration:1.5s}@-webkit-keyframes _ngcontent-%COMP%_fade{0%{opacity:.4}to{opacity:1}}@keyframes _ngcontent-%COMP%_fade{0%{opacity:.4}to{opacity:1}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCarouselComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-carousel', standalone: true, imports: [NgClass, NgxImageZoomModule, CommonModule], template: "<div class=\"slider-main-container\" [ngClass]=\"thumbnailCarouselPosition == 'top' ? 'position-top' : ( thumbnailCarouselPosition == 'left' ? 'position-left' : ( thumbnailCarouselPosition == 'right' ? 'position-right' : 'position-bottom' ) )\">\r\n\t<!-- Slideshow container -->\r\n\t<div class=\"thumbnail-slideshow-container\" *ngIf=\"thumbnailCarouselPosition == 'top' || thumbnailCarouselPosition == 'left'\">\r\n\t\t<!-- thumbnail images -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index' (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" (click)=\"currentSlide(i)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'thumbnail thumbnail_active' : 'thumbnail'\" [src]=\"image.thumbnail\">\r\n\t\t</div>\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container>\r\n\t\t\t<a aria-level=\"prev image\" [ngClass]=\"thumbnailCarouselPosition == 'left' ? 'prev-horizontal' : 'prev'\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" [ngClass]=\"thumbnailCarouselPosition == 'left' ? 'next-horizontal' : 'next'\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"slideshow-container\" (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\r\n\t\t<!-- Full-width images with number and caption text -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index'>\r\n\r\n\t\t\t<div [ngClass]=\"slideIndex == i ? 'numbertext numbertext_active' : 'numbertext'\" *ngIf=\"showNumbers\">\r\n\t\t\t\t{{countText}}\r\n\t\t\t\t{{i}} / {{images.length}}</div>\r\n\t\t\t<!-- Image without Zoom feature -->\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" *ngIf=\"isZoomInModal\" (click)=\"openPictureInModal(image)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'image image_active' : 'image'\" [src]=\"image.image\">\r\n\t\t\t<!-- Image with Zoom feature -->\r\n\t\t\t<lib-ngx-image-zoom\r\n\t\t\t\t*ngIf=\"!isZoomInModal\"\r\n\t\t\t\t[thumbImage]=\"image.image\"\r\n\t\t\t\t[fullImage]=\"image.highres\"\r\n\t\t\t\t[magnification]=\"2\"\r\n\t\t\t\t[enableScrollZoom]=\"true\"\r\n\t\t\t\t[zoomMode]=\"zoomInEventType\"\r\n\t\t\t\t[enableLens]=\"false\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'image image_active' : 'image'\"\r\n\t\t\t\t[altText]=\"image.text\"\r\n\t\t\t\t[titleText]=\"image.text\"\r\n\t\t\t\t[circularLens]=\"true\">\r\n\t\t\t</lib-ngx-image-zoom>\r\n\t\t\t<ng-container *ngIf=\"image.text\">\r\n\t\t\t\t<div [ngClass]=\"slideIndex == i ? 'text text_active' : 'text'\" [innerHTML]=\"image.text\">\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container *ngIf=\"showNextPrevious\">\r\n\t\t\t<a aria-level=\"prev image\" class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"thumbnail-slideshow-container\" *ngIf=\"thumbnailCarouselPosition == 'right' || thumbnailCarouselPosition == 'bottom'\">\r\n\t\t<!-- thumbnail images -->\r\n\t\t<div class=\"mySlides\" *ngFor='let image of images; let i = index' (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t\t\t<img [attr.aria-label]=\"image.text\" alt=\"{{image.text}}\" (click)=\"currentSlide(i)\"\r\n\t\t\t\t[ngClass]=\"slideIndex == i ? 'thumbnail thumbnail_active' : 'thumbnail'\" [src]=\"image.thumbnail\">\r\n\t\t</div>\r\n\t\t<!-- Next and previous buttons -->\r\n\t\t<ng-container>\r\n\t\t\t<a aria-level=\"prev image\" [ngClass]=\"thumbnailCarouselPosition == 'right' ? 'prev-horizontal' : 'prev'\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n\t\t\t<a aria-level=\"next image\" [ngClass]=\"thumbnailCarouselPosition == 'right' ? 'next-horizontal' : 'next'\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n\r\n<!-- The dots/circles -->\r\n<div class=\"dot-container\" (mouseover)=\"autoCyclingPause=true\" (mouseout)=\"autoCyclingPause=false\">\r\n\t<ng-container *ngFor='let image of images; let i = index'>\r\n\t\t<span [attr.aria-label]=\"'Select Image '+ i\" [ngClass]=\"slideIndex == i ? 'dot active' : 'dot'\"\r\n\t\t\t(click)=\"currentSlide(i)\"></span>\r\n\t</ng-container>\r\n</div>\r\n", styles: ["*{box-sizing:border-box}.slider-main-container{position:relative;max-width:1000px;margin:auto}.slideshow-container{max-width:1000px;position:relative;margin:auto}.position-top .thumbnail-slideshow-container,.position-bottom .thumbnail-slideshow-container{display:flex;max-width:1000px;position:relative;margin:20px auto}.position-left .thumbnail-slideshow-container,.position-right .thumbnail-slideshow-container{display:inline;max-width:1000px;position:relative;margin:20px auto}.position-top{display:inline}.position-left,.position-right{display:flex}.position-bottom{display:inline}.thumbnail_active{border:3px solid rgb(190,190,190);box-shadow:#717171}.thumbnail{cursor:pointer;padding:5px;max-width:150px;max-height:150px}.mySlides{display:block}.image_active{display:block!important}.image{display:none;width:100%}.numbertext{display:none;color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.numbertext_active{display:block!important}.text{display:none;color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.text_active{display:block!important}.prev,.next{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.prev-horizontal{cursor:pointer;position:absolute;right:50%;top:0;width:auto;margin-top:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal{cursor:pointer;position:absolute;right:50%;bottom:0;width:auto;margin-bottom:-30px;padding:3px;color:#fff;font-weight:700;font-size:18px;transition:.6s ease;transform:rotate(90deg);border-radius:0 3px 3px 0;-webkit-user-select:none;user-select:none}.next-horizontal{border-radius:3px 0 0 3px}.next{right:0;border-radius:3px 0 0 3px}.prev-horizontal:hover,.next-horizontal:hover,.prev:hover,.next:hover{background-color:#000c}.dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active,.dot:hover{background-color:#717171}.dot-container{text-align:center}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}@keyframes fade{0%{opacity:.4}to{opacity:1}}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCarouselComponent, { className: "CeeCarouselComponent", filePath: "lib\\field-components\\cee-carousel\\cee-carousel.component.ts", lineNumber: 23 }); })();

export { CeeCarouselComponent };
//# sourceMappingURL=ng-cee-core-cee-carousel.component-Dimvmcl3.mjs.map
