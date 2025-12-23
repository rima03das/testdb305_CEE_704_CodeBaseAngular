import * as i0 from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component, Inject, ViewChild, Input } from '@angular/core';
import { j as BaseView, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i13 from '@angular/youtube-player';
import { YouTubePlayerModule } from '@angular/youtube-player';
import * as i11 from '@angular/router';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i1 from '@angular/platform-browser';
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
import 'ngx-webcam';
import '@eisberg-labs/ngx-barcode-scanner';
import '@angular/cdk/menu';
import '@angular-material-components/datetime-picker';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

const _c0 = ["video"];
const _c1 = ["videoContainer"];
const _c2 = ["progressBar"];
function CeeVideoComponent_div_0_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36, 3);
    i0.ɵɵelement(3, "div", 37)(4, "div", 38)(5, "div", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 40);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r0.watchedProgress + "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r0.loadPercentage + "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.durationRemaining, " ");
} }
function CeeVideoComponent_div_0_div_3_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41, 4);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.playPause()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 42, 5);
    i0.ɵɵelement(4, "polygon", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "svg", 44, 6);
    i0.ɵɵelement(7, "rect", 45)(8, "rect", 46);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isPlaying ? "none" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("display", ctx_r0.isPlaying ? "" : "none");
} }
function CeeVideoComponent_div_0_div_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addTime(-10)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 48);
    i0.ɵɵelementEnd()();
} }
function CeeVideoComponent_div_0_div_3_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addTime(10)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 50);
    i0.ɵɵelementEnd()();
} }
function CeeVideoComponent_div_0_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51, 7);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleMute()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 52, 8);
    i0.ɵɵelement(4, "polygon", 53)(5, "path", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "svg", 55, 9);
    i0.ɵɵelement(8, "polygon", 53)(9, "line", 56)(10, "line", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isFullVolume ? "" : "none");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("display", ctx_r0.isFullVolume ? "none" : "");
} }
function CeeVideoComponent_div_0_div_3_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58)(1, "span", 59);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.showTitle);
} }
function CeeVideoComponent_div_0_div_3_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61, 10);
    i0.ɵɵlistener("click", function CeeVideoComponent_div_0_div_3_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleFullScreen()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 62, 11);
    i0.ɵɵelement(4, "path", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "svg", 64, 12);
    i0.ɵɵelement(7, "path", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isFullScreen ? "none" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("display", ctx_r0.isFullScreen ? "" : "none");
} }
function CeeVideoComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19, 0);
    i0.ɵɵelement(2, "div", 20)(3, "video", 21, 1);
    i0.ɵɵelementStart(5, "div", 22, 2);
    i0.ɵɵtemplate(7, CeeVideoComponent_div_0_div_3_div_7_Template, 8, 5, "div", 23);
    i0.ɵɵelementStart(8, "div", 24);
    i0.ɵɵtemplate(9, CeeVideoComponent_div_0_div_3_button_9_Template, 9, 4, "button", 25)(10, CeeVideoComponent_div_0_div_3_button_10_Template, 3, 0, "button", 26)(11, CeeVideoComponent_div_0_div_3_button_11_Template, 3, 0, "button", 27)(12, CeeVideoComponent_div_0_div_3_button_12_Template, 11, 4, "button", 28)(13, CeeVideoComponent_div_0_div_3_p_13_Template, 4, 1, "p", 29);
    i0.ɵɵelementStart(14, "button", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(15, "svg", 31);
    i0.ɵɵelement(16, "polygon", 32)(17, "line", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, CeeVideoComponent_div_0_div_3_button_18_Template, 8, 4, "button", 34);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r0.isLoadingContent ? "" : "none");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", ctx_r0.normalId, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("opacity", ctx_r0.displayControllsOpacity);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showProgress);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.playPauseBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fastForwardBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fastForwardBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.muteBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.fullscreenBtn);
} }
function CeeVideoComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "iframe", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.fieldData.field_label);
    i0.ɵɵproperty("src", ctx_r0.embedId, i0.ɵɵsanitizeResourceUrl);
} }
function CeeVideoComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "youtube-player", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("videoId", ctx_r0.youtubeId);
} }
function CeeVideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    i0.ɵɵtemplate(3, CeeVideoComponent_div_0_div_3_Template, 19, 12, "div", 17)(4, CeeVideoComponent_div_0_div_4_Template, 2, 2, "div", 17)(5, CeeVideoComponent_div_0_div_5_Template, 2, 1, "div", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.normalUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.embedUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.youtubeUrl);
} }
class CeeVideoComponent extends BaseView {
    router;
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
    sanitizer;
    document;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    displayControllsOpacity = 0;
    isPlaying = false;
    isFullVolume = true;
    isFullScreen = false;
    watchedProgress = 0;
    loadPercentage = 0;
    isLoadingContent = false;
    durationRemaining = '00:00';
    controlsTimeout;
    Target;
    additionalParameters = {};
    video;
    videoContainer;
    progressBar;
    videoElement;
    playPauseBtn = true;
    fastForwardBtn = true;
    muteBtn = true;
    showTitle = true;
    nextBtn = true;
    fullscreenBtn = true;
    showProgress = true;
    embedId;
    embedUrl = false;
    normalId;
    normalUrl = false;
    youtubeId;
    youtubeUrl = false;
    displayControlsTimout = 5000;
    constructor(router, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, sanitizer, document) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.router = router;
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
        this.sanitizer = sanitizer;
        this.document = document;
    }
    ngOnInit() {
        if (!this.fieldData.possible_values) {
            this.fieldData.possible_values = [];
        }
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    extractVideoId(url, regex) {
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        else {
            return null;
        }
    }
    isDomainIncluded(targetDomain, link) {
        targetDomain = targetDomain.toLowerCase().trim();
        switch (targetDomain) {
            case "www.youtube.com":
                const youtubeRegex = /(?:youtube\.com\/(?:.*?(?:[?&]v=|\/embed\/|\/v\/|\/watch\?v=))|youtu\.be\/)([^"&?\/ ]{11})/;
                this.youtubeId = this.extractVideoId(link, youtubeRegex);
                this.youtubeUrl = true;
                this.initalizeYoutube();
                break;
            case "www.instagram.com":
                const instaRegex = /instagram\.com\/p\/([A-Za-z0-9_-]+)/;
                this.embedUrl = true;
                const instaurl = this.extractVideoId(link, instaRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(instaurl);
                break;
            case "vimeo.com":
                const vimeoRegex = /vimeo\.com\/(\d+)/;
                this.embedUrl = true;
                const vimeourl = "https://player.vimeo.com/video/" + this.extractVideoId(link, vimeoRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(vimeourl);
                break;
            case "www.facebook.com":
                const fbRegex = /(?:facebook\.com\/[^/]+\/videos\/|facebook\.com\/video\.php\?v=|facebook\.com\/watch\/\?v=)([0-9]+)/;
                this.embedUrl = true;
                const fburl = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F" + this.extractVideoId(link, fbRegex);
                this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(fburl);
                break;
            default:
                this.normalUrl = true;
                this.normalId = link;
                break;
        }
    }
    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            const domain = urlObj.hostname;
            return domain;
        }
        catch (error) {
            return null;
        }
    }
    initalizeYoutube() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.rowData && this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.value);
            this.setApiData(this.fieldData, this.rowData.value);
        }
        if (this.fieldData.possible_values.length > 0) {
            this.fieldData.possible_values.map(x => {
                let urlValue = x.split("||");
                const domain = this.extractDomain(urlValue[1]);
                if (urlValue[0] != "embedUrl") {
                    this.isDomainIncluded(domain, urlValue[1]);
                }
                else {
                    this.embedUrl = true;
                    this.embedId = this.sanitizer.bypassSecurityTrustResourceUrl(urlValue[1]);
                }
                if (!urlValue[2] && !this.fieldData.field_label.includes('((dynamic))')) {
                    urlValue[2] = this.fieldData.field_label;
                }
            });
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Play and Pause':
                        this.playPauseBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Fast Forward':
                        this.fastForwardBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Mute':
                        this.muteBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Title':
                        this.showTitle = paramter.value;
                        break;
                    case 'Next':
                        this.nextBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'Fullscreen':
                        this.fullscreenBtn = paramter.value === 'false' ? false : true;
                        break;
                    case 'ShowProgress':
                        this.showProgress = paramter.value === 'false' ? false : true;
                        break;
                }
            }
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        this.setApiData(this.fieldData, data);
        this.fieldData.possible_values.forEach(config => {
            let urlValue = config.split("||");
            if (!urlValue[2] && !this.fieldData.field_label.includes('((dynamic))')) {
                urlValue[2] = this.fieldData.field_label;
            }
        });
    }
    setApiData(config, data) {
        if (config.response_api_key) {
            const link = this.setApiCallBackDataUtil.setApiCallBackData(config.response_api_key, data);
            if (link) {
                this.fieldData.possible_values.push(link);
            }
        }
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    /*
     * special event handled for link types
    */
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    onContextMenu(event) {
    }
    ngAfterViewInit() {
        if (this.normalUrl) {
            this.videoElement = this.video.nativeElement;
            this.videoContainer.nativeElement.addEventListener('mousemove', () => {
                this.displayControls();
            });
            this.document.addEventListener('fullscreenchange', () => {
                if (!document.fullscreenElement) {
                    this.isFullScreen = false;
                }
                else {
                    this.isFullScreen = true;
                }
            });
            this.document.addEventListener('keyup', (event) => {
                if (event.code === 'Space') {
                    this.playPause();
                }
                if (event.code === 'KeyM') {
                    this.toggleMute();
                }
                if (event.code === 'KeyF') {
                    this.toggleFullScreen();
                }
                this.displayControls();
            });
            this.videoElement.addEventListener('timeupdate', () => {
                this.watchedProgress =
                    (this.videoElement.currentTime / this.videoElement.duration) * 100;
                const totalSecondsRemaining = this.videoElement.duration - this.videoElement.currentTime;
                const time = new Date(null);
                time.setSeconds(totalSecondsRemaining);
                let hours = null;
                if (totalSecondsRemaining >= 3600) {
                    hours = time.getHours().toString().padStart(2, '0');
                }
                let minutes = time.getMinutes().toString().padStart(2, '0');
                let seconds = time.getSeconds().toString().padStart(2, '0');
                this.durationRemaining = `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
            });
            this.progressBar.nativeElement.addEventListener('click', (event) => {
                const progressBarEle = this.progressBar.nativeElement;
                const pos = (event.pageX -
                    (progressBarEle.offsetLeft + progressBarEle.offsetLeft)) /
                    progressBarEle.offsetWidth;
                this.videoElement.currentTime = pos * this.videoElement.duration;
            });
            this.videoElement.addEventListener('progress', () => {
                var range = 0;
                var bf = this.videoElement.buffered;
                var time = this.videoElement.currentTime;
                while (!(bf.start(range) <= time && time <= bf.end(range))) {
                    range += 1;
                }
                var loadStartPercentage = bf.start(range) / this.videoElement.duration;
                var loadEndPercentage = bf.end(range) / this.videoElement.duration;
                this.loadPercentage = loadEndPercentage * 100;
            });
            this.videoElement.addEventListener('waiting', (data) => {
                this.isLoadingContent = true;
                this.isPlaying = false;
            });
            this.videoElement.addEventListener('playing', (data) => {
                this.isLoadingContent = false;
                this.isPlaying = true;
            });
            this.videoElement.addEventListener('ended', (data) => {
                this.isPlaying = false;
            });
        }
    }
    displayControls() {
        this.displayControllsOpacity = 1;
        document.body.style.cursor = 'initial';
        if (this.controlsTimeout) {
            clearTimeout(this.controlsTimeout);
        }
        this.controlsTimeout = setTimeout(() => {
            if (this.isPlaying) {
                this.displayControllsOpacity = 0;
            }
            else {
                this.displayControllsOpacity = 1;
            }
            document.body.style.cursor = 'none';
        }, this.displayControlsTimout);
    }
    playPause() {
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.isPlaying = true;
        }
        else {
            this.videoElement.pause();
            this.isPlaying = false;
        }
    }
    toggleMute() {
        this.videoElement.muted = !this.videoElement.muted;
        if (this.videoElement.muted) {
            this.isFullVolume = false;
        }
        else {
            this.isFullVolume = true;
        }
    }
    toggleFullScreen() {
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement) {
            this.openFullscreen();
        }
        else {
            this.closeFullscreen();
        }
    }
    openFullscreen() {
        if (this.videoContainer.nativeElement.requestFullscreen) {
            this.videoContainer.nativeElement.requestFullscreen();
        }
        else if (this.videoContainer.nativeElement.webkitRequestFullscreen) {
            /* Safari */
            this.videoContainer.nativeElement.webkitRequestFullscreen();
        }
    }
    /* Close fullscreen */
    closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        }
    }
    addTime(seconds = 10) {
        this.videoElement.currentTime += seconds;
    }
    static ɵfac = function CeeVideoComponent_Factory(t) { return new (t || CeeVideoComponent)(i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeVideoComponent, selectors: [["app-cee-video"]], viewQuery: function CeeVideoComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.video = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.videoContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.progressBar = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["videoContainer", ""], ["video", ""], ["controlsContainer", ""], ["progressBar", ""], ["playPauseButton", ""], ["playButton", ""], ["pauseButton", ""], ["volumeButton", ""], ["fullVolumeButton", ""], ["mutedButton", ""], ["fullScreenButton", ""], ["maximizeButton", ""], ["minimizeButton", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-field"], ["class", "video-container", 4, "ngIf"], [4, "ngIf"], [1, "video-container"], [1, "loader"], ["height", "520vh", "width", "100%", 3, "src"], [1, "controls-container"], ["class", "progress-controls", 4, "ngIf"], [1, "controls"], ["class", "play-pause", 3, "click", 4, "ngIf"], ["class", "rewind", 3, "click", 4, "ngIf"], ["class", "fast-forward", 3, "click", 4, "ngIf"], ["class", "volume", 3, "click", 4, "ngIf"], ["class", "title", 4, "ngIf"], [1, "next", "margin-left-auto"], ["viewBox", "0 0 24 24"], ["points", "5 4 15 12 5 20 5 4"], ["x1", "19", "y1", "5", "x2", "19", "y2", "19"], ["class", "full-screen", 3, "click", 4, "ngIf"], [1, "progress-controls"], [1, "progress-bar"], [1, "watched-bar"], [1, "loaded-bar"], [1, "playhead"], [1, "time-remaining"], [1, "play-pause", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "playing"], ["points", "5 3 19 12 5 21 5 3"], ["viewBox", "0 0 24 24", 1, "paused"], ["x", "6", "y", "4", "width", "4", "height", "16"], ["x", "14", "y", "4", "width", "4", "height", "16"], [1, "rewind", 3, "click"], ["fill", "#ffffff", "d", "M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14Z"], [1, "fast-forward", 3, "click"], ["fill", "#ffffff", "d", "M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14M11.5,3C14.15,3 16.55,4 18.4,5.6L21,3V10H14L16.62,7.38C15.23,6.22 13.46,5.5 11.5,5.5C7.96,5.5 4.95,7.81 3.9,11L1.53,10.22C2.92,6.03 6.85,3 11.5,3Z"], [1, "volume", 3, "click"], ["viewBox", "0 0 24 24", 1, "full-volume"], ["points", "11 5 6 9 2 9 2 15 6 15 11 19 11 5"], ["d", "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"], ["viewBox", "0 0 24 24", 1, "muted"], ["x1", "23", "y1", "9", "x2", "17", "y2", "15"], ["x1", "17", "y1", "9", "x2", "23", "y2", "15"], [1, "title"], [1, "series"], [1, "episode"], [1, "full-screen", 3, "click"], ["viewBox", "0 0 24 24", 1, "maximize"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], ["viewBox", "0 0 24 24", 1, "minimize"], ["d", "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"], ["width", "100%", "height", "520vh", "frameborder", "0", "allowfullscreen", "", "webkitallowfullscreen", "", "mozallowfullscreen", "", 3, "title", "src"], ["suggestedQuality", "highres", "height", "520vh", "width", "100%", 3, "videoId"]], template: function CeeVideoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeVideoComponent_div_0_Template, 6, 3, "div", 13);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [YouTubePlayerModule, i13.YouTubePlayer, CommonModule, i13$1.NgIf], styles: [".video-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;position:relative;justify-content:center;align-items:center}.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}.video-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;box-shadow:none;border:none;margin:0;transition:all .2s ease-in-out;cursor:pointer}.video-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%}.video-container[_ngcontent-%COMP%]   button.rewind[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   button.fast-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{stroke:none}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]{position:relative}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]:after{content:\"\";background:#ffffff4d;display:block;position:absolute;border-radius:50%;inset:0;width:160px;height:160px;margin:auto;opacity:0;transition:all .5s}.video-container[_ngcontent-%COMP%]   button.ripple[_ngcontent-%COMP%]:active:after{height:10px;width:10px;opacity:1;transition:0s}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;z-index:1}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:160px;height:160px;min-width:160px;min-height:160px;padding:50px;background:#0000000d;opacity:1;overflow:hidden;border-radius:50%}.video-container[_ngcontent-%COMP%]   .video-controls-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.2)}.video-container[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;min-height:50px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(#0000,#000000e6);transition:opacity .5s linear;z-index:2}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;color:#fff;padding:8px}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .time-remaining[_ngcontent-%COMP%]{margin:4px;width:1}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{width:100%;height:3px;max-height:7px;background:#fff3;display:flex;align-items:center;cursor:pointer;margin:0 8px;position:relative}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar.watched-bar[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar.playhead[_ngcontent-%COMP%]{display:inline-block;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .watched-bar[_ngcontent-%COMP%]{height:110%;width:20%;background:#8b53f1;z-index:1}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .loaded-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;background:#fff;height:100%;width:20%;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .playhead[_ngcontent-%COMP%]{height:16px;width:16px;max-height:16px;max-width:16px;border-radius:50%;background:#fff;z-index:2;transition:all .2s}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]:hover{height:8px}.video-container[_ngcontent-%COMP%]   .progress-controls[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]:hover   .playhead[_ngcontent-%COMP%]{height:20px;width:20px;max-height:20px;max-width:20px}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:start;align-items:center;padding:8px}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;min-height:36px;opacity:.4;transform:scale(.9)}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.2)}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button.volume[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button.full-screen[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:none}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 8px;margin:0;font-size:1rem}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .series[_ngcontent-%COMP%]{color:#fefefe;font-weight:700;font-size:1em;line-height:1}.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .episode[_ngcontent-%COMP%]{color:#a1a1a1;font-size:.75em;padding-left:8px;line-height:1}@media only screen and (max-width: 768px){.video-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:none}}.margin-left-auto[_ngcontent-%COMP%]{margin-left:auto!important}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{background:#fff;-webkit-animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;animation:_ngcontent-%COMP%_load1 1s infinite ease-in-out;width:1em;height:4em;z-index:100}.loader[_ngcontent-%COMP%]{color:#fff;text-indent:-9999em;margin:88px auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s;position:absolute}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{position:absolute;top:0;content:\"\"}.loader[_ngcontent-%COMP%]:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader[_ngcontent-%COMP%]:after{left:1.5em}@-webkit-keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes _ngcontent-%COMP%_load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeVideoComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-video', imports: [YouTubePlayerModule, CommonModule], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-field\">\r\n            <div #videoContainer *ngIf=\"normalUrl\" class=\"video-container\">\r\n                <div [style.display]=\"isLoadingContent ? '' : 'none'\" class=\"loader\"></div>\r\n                <video\r\n                  #video\r\n                  height=\"520vh\"\r\n                  width=\"100%\"\r\n                  src={{normalId}}\r\n                ></video>\r\n                <div\r\n                  #controlsContainer\r\n                  class=\"controls-container\"\r\n                  [style.opacity]=\"displayControllsOpacity\"\r\n                >\r\n                  <div class=\"progress-controls\" *ngIf=\"showProgress\">\r\n                    <div #progressBar class=\"progress-bar\">\r\n                      <div class=\"watched-bar\" [style.width]=\"watchedProgress + '%'\"></div>\r\n                      <div class=\"loaded-bar\" [style.width]=\"loadPercentage + '%'\"></div>\r\n                      <div class=\"playhead\"></div>\r\n                    </div>\r\n                    <div class=\"time-remaining\">\r\n                      {{ durationRemaining }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"controls\">\r\n                    <button #playPauseButton *ngIf=\"playPauseBtn\" class=\"play-pause\" (click)=\"playPause()\">\r\n                      <svg\r\n                        #playButton\r\n                        class=\"playing\"\r\n                        [style.display]=\"isPlaying ? 'none' : ''\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"5 3 19 12 5 21 5 3\"></polygon>\r\n                      </svg>\r\n                      <svg\r\n                        #pauseButton\r\n                        class=\"paused\"\r\n                        [style.display]=\"isPlaying ? '' : 'none'\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect>\r\n                        <rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>\r\n                      </svg>\r\n                    </button>\r\n                    <button class=\"rewind\" *ngIf=\"fastForwardBtn\" (click)=\"addTime(-10)\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <path fill=\"#ffffff\"\r\n                          d=\"M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14Z\" />\r\n                      </svg>\r\n                    </button>\r\n                          <button class=\"fast-forward\" *ngIf=\"fastForwardBtn\" (click)=\"addTime(10)\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <path fill=\"#ffffff\"\r\n                          d=\"M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14A2,2 0 0,1 12,20V14A2,2 0 0,1 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14M11.5,3C14.15,3 16.55,4 18.4,5.6L21,3V10H14L16.62,7.38C15.23,6.22 13.46,5.5 11.5,5.5C7.96,5.5 4.95,7.81 3.9,11L1.53,10.22C2.92,6.03 6.85,3 11.5,3Z\" />\r\n                      </svg>\r\n                    </button>\r\n                    <button #volumeButton class=\"volume\" *ngIf=\"muteBtn\" (click)=\"toggleMute()\">\r\n                      <svg\r\n                        #fullVolumeButton\r\n                        [style.display]=\"isFullVolume ? '' : 'none'\"\r\n                        class=\"full-volume\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>\r\n                        <path\r\n                          d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"\r\n                        ></path>\r\n                      </svg>\r\n                      <svg\r\n                        #mutedButton\r\n                        [style.display]=\"isFullVolume ? 'none' : ''\"\r\n                        class=\"muted\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>\r\n                        <line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line>\r\n                        <line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>\r\n                      </svg>\r\n                    </button>\r\n                    <p class=\"title\" *ngIf=\"showTitle\">\r\n                      <span class=\"series\">{{showTitle}}</span>\r\n                      <span class=\"episode\"></span>\r\n                    </p>\r\n                    <button class=\"next margin-left-auto\">\r\n                      <svg viewBox=\"0 0 24 24\">\r\n                        <polygon points=\"5 4 15 12 5 20 5 4\"></polygon>\r\n                        <line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>\r\n                      </svg>\r\n                    </button>\r\n                    <button\r\n                      #fullScreenButton\r\n                      *ngIf=\"fullscreenBtn\"\r\n                      class=\"full-screen\"\r\n                      (click)=\"toggleFullScreen()\"\r\n                    >\r\n                      <svg\r\n                        #maximizeButton\r\n                        class=\"maximize\"\r\n                        [style.display]=\"isFullScreen ? 'none' : ''\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <path\r\n                          d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"\r\n                        ></path>\r\n                      </svg>\r\n                      <svg\r\n                        #minimizeButton\r\n                        class=\"minimize\"\r\n                        [style.display]=\"isFullScreen ? '' : 'none'\"\r\n                        viewBox=\"0 0 24 24\"\r\n                      >\r\n                        <path\r\n                          d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"\r\n                        ></path>\r\n                      </svg>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"embedUrl\" class=\"video-container\">\r\n              <iframe\r\n                title=\"{{fieldData.field_label}}\"\r\n                [src]=\"embedId\"\r\n                width=\"100%\"\r\n                height=\"520vh\"\r\n                frameborder=\"0\"\r\n                allowfullscreen\r\n                webkitallowfullscreen\r\n                mozallowfullscreen\r\n              >\r\n              </iframe>\r\n            </div>\r\n            <div *ngIf=\"youtubeUrl\">\r\n              <youtube-player\r\n                [videoId]=\"youtubeId\"\r\n                suggestedQuality=\"highres\"\r\n                height=\"520vh\"\r\n                width=\"100%\">\r\n              </youtube-player>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".video-container{width:100%;height:100%;display:flex;position:relative;justify-content:center;align-items:center}.video-container video{width:100%;height:100%}.video-container button{background:none;outline:none;box-shadow:none;border:none;margin:0;transition:all .2s ease-in-out;cursor:pointer}.video-container button svg{fill:#fff;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%}.video-container button.rewind svg,.video-container button.fast-forward svg{stroke:none}.video-container button.ripple{position:relative}.video-container button.ripple:after{content:\"\";background:#ffffff4d;display:block;position:absolute;border-radius:50%;inset:0;width:160px;height:160px;margin:auto;opacity:0;transition:all .5s}.video-container button.ripple:active:after{height:10px;width:10px;opacity:1;transition:0s}.video-container .video-controls-container{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;z-index:1}.video-container .video-controls-container button{width:160px;height:160px;min-width:160px;min-height:160px;padding:50px;background:#0000000d;opacity:1;overflow:hidden;border-radius:50%}.video-container .video-controls-container button:hover{opacity:1;transform:scale(1.2)}.video-container .controls-container{position:absolute;bottom:0;width:100%;min-height:50px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(#0000,#000000e6);transition:opacity .5s linear;z-index:2}.video-container .progress-controls{width:100%;display:flex;justify-content:center;align-items:center;color:#fff;padding:8px}.video-container .progress-controls .time-remaining{margin:4px;width:1}.video-container .progress-controls .progress-bar{width:100%;height:3px;max-height:7px;background:#fff3;display:flex;align-items:center;cursor:pointer;margin:0 8px;position:relative}.video-container .progress-controls .progress-bar.watched-bar,.video-container .progress-controls .progress-bar.playhead{display:inline-block;transition:all .2s}.video-container .progress-controls .progress-bar .watched-bar{height:110%;width:20%;background:#8b53f1;z-index:1}.video-container .progress-controls .progress-bar .loaded-bar{position:absolute;top:0;left:0;background:#fff;height:100%;width:20%;transition:all .2s}.video-container .progress-controls .progress-bar .playhead{height:16px;width:16px;max-height:16px;max-width:16px;border-radius:50%;background:#fff;z-index:2;transition:all .2s}.video-container .progress-controls .progress-bar:hover{height:8px}.video-container .progress-controls .progress-bar:hover .playhead{height:20px;width:20px;max-height:20px;max-width:20px}.video-container .controls{width:100%;display:flex;justify-content:start;align-items:center;padding:8px}.video-container .controls button{width:36px;height:36px;min-width:36px;min-height:36px;opacity:.4;transform:scale(.9)}.video-container .controls button:hover{opacity:1;transform:scale(1.2)}.video-container .controls button.volume svg path,.video-container .controls button.full-screen svg{fill:none}.video-container .controls .title{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;padding:0 8px;margin:0;font-size:1rem}.video-container .controls .title .series{color:#fefefe;font-weight:700;font-size:1em;line-height:1}.video-container .controls .title .episode{color:#a1a1a1;font-size:.75em;padding-left:8px;line-height:1}@media only screen and (max-width: 768px){.video-container .controls .title{display:none}}.margin-left-auto{margin-left:auto!important}.loader,.loader:before,.loader:after{background:#fff;-webkit-animation:load1 1s infinite ease-in-out;animation:load1 1s infinite ease-in-out;width:1em;height:4em;z-index:100}.loader{color:#fff;text-indent:-9999em;margin:88px auto;font-size:11px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s;position:absolute}.loader:before,.loader:after{position:absolute;top:0;content:\"\"}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,80%,to{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}\n"] }]
    }], () => [{ type: i11.Router }, { type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: CeeApiService }, { type: i1.DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], video: [{
            type: ViewChild,
            args: ['video']
        }], videoContainer: [{
            type: ViewChild,
            args: ['videoContainer']
        }], progressBar: [{
            type: ViewChild,
            args: ['progressBar']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeVideoComponent, { className: "CeeVideoComponent", filePath: "lib\\field-components\\cee-video\\cee-video.component.ts", lineNumber: 35 }); })();

export { CeeVideoComponent };
//# sourceMappingURL=ng-cee-core-cee-video.component-Bvg3K2NA.mjs.map
