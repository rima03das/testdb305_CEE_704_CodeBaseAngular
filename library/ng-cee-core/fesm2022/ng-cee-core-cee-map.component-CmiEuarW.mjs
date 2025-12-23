import * as i0 from '@angular/core';
import { Component, ViewChild, Input } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTableDataSource } from '@angular/material/table';
import * as i13 from '@angular/common';
import { CommonModule, NgSwitch } from '@angular/common';
import * as i11 from '@angular/google-maps';
import { GoogleMapsModule, GoogleMap, MapInfoWindow } from '@angular/google-maps';
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
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

function CeeMapComponent_ng_container_0_map_marker_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "map-marker", 6, 0);
    i0.ɵɵlistener("mapClick", function CeeMapComponent_ng_container_0_map_marker_2_Template_map_marker_mapClick_0_listener() { const m_r2 = i0.ɵɵrestoreView(_r1).$implicit; const mainmarker_r3 = i0.ɵɵreference(1); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openInfo(mainmarker_r3, m_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("position", m_r2)("options", ctx_r3.markerOptions);
} }
function CeeMapComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 2);
    i0.ɵɵelementStart(1, "google-map", 3);
    i0.ɵɵtemplate(2, CeeMapComponent_ng_container_0_map_marker_2_Template, 2, 2, "map-marker", 4);
    i0.ɵɵelement(3, "map-info-window", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("center", ctx_r3.center)("zoom", ctx_r3.zoom)("options", ctx_r3.options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.markers);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r3.infoContent, i0.ɵɵsanitizeHtml);
} }
class CeeMapComponent extends BaseView {
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
    keepState = false;
    rowData;
    rootData;
    visibleCondition;
    map;
    info;
    google;
    flatUnflat;
    datasource;
    mapProvider;
    markerIconUrl;
    mapInfoLabel;
    mapLabelApiKey;
    mapLatitudeApiKey;
    mapLongitudeApiKey;
    responseMap = [];
    mapLayers;
    center = {
        lat: 39.29,
        lng: -76.60
    };
    zoom = 10;
    markerOptions = {
        draggable: false,
        animation: null,
    };
    options = {
        zoomControl: true,
        panControl: true,
    };
    markerPositions = [];
    markers = [];
    infoContent = '';
    responseDataSource;
    primaryKeyVal;
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
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        const { possible_values, mapConfig } = this.fieldData;
        if (mapConfig && typeof (mapConfig) === 'object') {
            const { datasource, mapProvider, mapInfoLabel, mapLabelApiKey, mapLatitudeApiKey, mapLongitudeApiKey, mapMarkerImage, zoom, pan, defaultZoom, mapLayers } = mapConfig;
            this.mapInfoLabel = (mapInfoLabel) ? mapInfoLabel : '';
            this.mapLabelApiKey = (mapLabelApiKey) ? mapLabelApiKey : '';
            this.mapLatitudeApiKey = (mapLatitudeApiKey) ? mapLatitudeApiKey : '';
            this.mapLongitudeApiKey = (mapLongitudeApiKey) ? mapLongitudeApiKey : '';
            this.datasource = (datasource) ? datasource : '';
            this.mapProvider = (mapProvider) ? mapProvider.toLowerCase() : '';
            this.mapLayers = (mapLayers) ? mapLayers.split('|') : [];
            if (mapMarkerImage) {
                this.markerIconUrl = mapMarkerImage;
            }
            this.options.zoomControl = (zoom && String(zoom) === 'true') ? true : false;
            this.options.panControl = (pan && String(pan) === 'true') ? true : false;
            this.zoom = parseInt(defaultZoom) ? parseInt(defaultZoom) : 1;
            if (this.datasource && this.datasource === 'static') {
                this.responseMap = [];
                for (const pValue of possible_values) {
                    const pValueArr = pValue.split('|').map(s => s.trim());
                    if (pValueArr.length === 3) {
                        this.responseMap.push({
                            label: pValueArr[0],
                            lat: pValueArr[1],
                            lng: pValueArr[2]
                        });
                    }
                }
                if (this.mapProvider === 'google') {
                    this.loadGoogleMap();
                }
            }
            else {
                this.loadGoogleMap();
            }
        }
        this.variableObject['mapMarkerEmitter_' + this.appData.id] = this.sharedEventsService.mapMarkerEmitter.subscribe(res => {
            if (this.markers.length) {
                const pValueArr = res['MapMarkerKey'].split('|').map(s => s.trim());
                if (pValueArr.length === 3 || pValueArr.length === 4) {
                    const hValue = [];
                    for (let index = 0; index < 3; index++) {
                        const pValue = pValueArr[index];
                        hValue.push(this.appDataService.getAppDataByApiKey(pValue, 'response') ?
                            this.appDataService.getAppDataByApiKey(pValue, 'response').value : this.appDataService.getFieldDataByFieldId(pValue));
                    }
                    for (const m of this.markers) {
                        m.options.animation = "";
                        m.animation = "";
                        if (m.matchVal === hValue.join('|')) {
                            this.center = { lat: m.lat, lng: m.lng };
                            if (pValueArr[3] && parseInt(pValueArr[3])) {
                                this.zoom = parseInt(pValueArr[3]);
                            }
                            for (const m of this.markers) {
                                m.options.animation = "";
                                m.animation = "";
                                if (m.matchVal === hValue.join('|')) {
                                    this.center = { lat: m.lat, lng: m.lng };
                                    if (pValueArr[3] && parseInt(pValueArr[3])) {
                                        this.zoom = parseInt(pValueArr[3]);
                                    }
                                    m.options.animation = google.maps.Animation.BOUNCE;
                                    m.animation = "BOUNCE";
                                }
                            }
                        }
                    }
                }
            }
        });
        this.variableObject['searchFilterEmitter_' + this.appData.id] = this.sharedEventsService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.commonUtil.setFilterKeys(this.responseDataSource, data['filterCol']);
                this.responseDataSource.filter = data['values'][0] ? data['values'][0].trim().toLowerCase() : '';
                this.createResponseMap();
            }
        });
        this.variableObject['mapCenterEmitter_' + this.appData.id] = this.sharedEventsService.mapCenterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id) && data['values'].length === 2) {
                this.center = { lat: parseFloat(data['values'][0]), lng: parseFloat(data['values'][1]) };
                this.createResponseMap();
            }
        });
        this.variableObject['mapLayerEmitter_' + this.appData.id] = this.sharedEventsService.mapLayerEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.fieldData.unique_id) && data['values'].length) {
                const mapLayers = data['values'][0] ? data['values'][0] : [];
                this.mapLayers = (Array.isArray(mapLayers)) ? mapLayers : [];
                this.createResponseMap();
            }
        });
        this.primaryKeyVal = this.additionalParameter['PrimaryKeyName'] ? this.additionalParameter['PrimaryKeyName'] : '';
    }
    createResponseMap() {
        if (this.responseDataSource && this.responseDataSource?.filteredData) {
            const apiData = this.flatUnflat.flattenJSON(this.responseDataSource.filteredData);
            this.responseMap = [];
            this.getApiValue(apiData, this.mapLabelApiKey, 'label');
            this.getApiValue(apiData, this.mapLatitudeApiKey, 'lat');
            this.getApiValue(apiData, this.mapLongitudeApiKey, 'lng');
            for (let i = 0; i < this.responseDataSource.filteredData.length; i++) {
                if (this.responseMap[i]) {
                    if (this.mapInfoLabel) {
                        this.responseMap[i].info = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.mapInfoLabel }, this.responseDataSource.filteredData[i]).field_label;
                    }
                    const data = JSON.parse(JSON.stringify(this.responseDataSource.filteredData[i]));
                    this.responseMap[i].data = data;
                }
            }
            this.responseMap = JSON.parse(JSON.stringify(this.responseMap.filter(this.validateLatLng)));
            if (this.mapProvider === 'google') {
                this.loadGoogleMap();
            }
            if (this.markers.length) {
                if (this.additionalParameter['fitbounds'] != "false") {
                    this.getfitBounds(this.markers);
                }
                else {
                    this.center = {
                        lat: this.markers[0].position.lat, lng: this.markers[0].position.lng
                    };
                }
            }
        }
    }
    validateLatLng(m) {
        const isNumeric = function (str) {
            return str &&
                !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
        };
        return isNumeric(m.lat) && Math.abs(m.lat) <= 90 && isNumeric(m.lng) && Math.abs(m.lng) <= 180;
    }
    getApiValue(res, api_key, endKey) {
        const regex = api_key.replace('[*]', '\\[\\d+\\]');
        for (const key of Object.keys(res)) {
            const result = key.match(new RegExp(regex));
            const currIndex = key.match(new RegExp('\\d+'));
            if (result && currIndex) {
                if (!this.responseMap[currIndex[0]]) {
                    this.responseMap[currIndex[0]] = {};
                }
                this.responseMap[currIndex[0]][endKey] = res[key];
            }
        }
    }
    loadGoogleMap() {
        this.markers = [];
        let i = 0;
        for (const mValue of this.responseMap) {
            if (mValue.hasOwnProperty('label') && mValue.hasOwnProperty('lat') && mValue.hasOwnProperty('lng')) {
                this.markers.push({
                    label: {
                        color: 'red',
                        text: String.fromCharCode(i)
                    },
                    info: mValue.info ? mValue.info : mValue.label,
                    title: String.fromCharCode(i),
                    position: {
                        lat: parseFloat(mValue.lat),
                        lng: parseFloat(mValue.lng),
                    },
                    lat: parseFloat(mValue.lat),
                    lng: parseFloat(mValue.lng),
                    matchVal: [mValue.label, mValue.lat, mValue.lng].join('|'),
                    data: mValue.data ? mValue.data : {},
                    options: { animation: mValue.animation },
                    animation: mValue.animation
                });
                i++;
            }
        }
        if (this.markers.length) {
            // this.options.center = this.markers[this.additionalParameter['default_value'] ? parseInt(this.additionalParameter['default_value']) : 0];
            if (this.additionalParameter['fitbounds'] != "false") {
                this.getfitBounds(this.markers);
            }
            else {
                this.center = {
                    lat: this.markers[0].position.lat, lng: this.markers[0].position.lng
                };
            }
        }
    }
    getfitBounds(markers) {
        let bounds = new google.maps.LatLngBounds();
        markers.forEach((marker) => {
            bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
        });
        this.map.fitBounds(bounds);
        if (this.map && this.map.googleMap) {
            this.map.googleMap.setOptions({ zoom: this.zoom });
        }
    }
    // ngAfterViewInit(){
    //     this.getfitBounds(this.markers);
    // }
    openInfo(marker, content) {
        content.options.animation = "";
        content.animation = "";
        this.infoContent = content.info;
        this.info.open(marker);
    }
    onAPICallback(data) {
        if (this.fieldData.response_api_key && !this.fieldData.response_api_key.includes('[*]') && this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLabelApiKey, data)) {
            const resLabel = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLabelApiKey, data);
            const resLatitude = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLatitudeApiKey, data);
            const resLongitude = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.response_api_key + this.mapLongitudeApiKey, data);
            if (resLabel && resLatitude && resLongitude) {
                const apiDataTemp = {};
                apiDataTemp[this.mapLabelApiKey] = resLabel;
                apiDataTemp[this.mapLatitudeApiKey] = resLatitude;
                apiDataTemp[this.mapLongitudeApiKey] = resLongitude;
                this.responseDataSource = new MatTableDataSource([apiDataTemp]);
                this.createResponseMap();
            }
        }
        else {
            const apiDataTemp = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiDataTemp !== null && this.datasource && this.datasource === 'external') {
                this.responseDataSource = new MatTableDataSource(apiDataTemp);
                this.createResponseMap();
            }
        }
    }
    concatData(data) {
        // method not implemented
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) { }
    setFieldStateOnStateChangeEvent(data) { }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'fieldData.possible_values'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    updateStateHistory(data) { }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
    }
    static ɵfac = function CeeMapComponent_Factory(t) { return new (t || CeeMapComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMapComponent, selectors: [["app-cee-map"]], viewQuery: function CeeMapComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(GoogleMap, 5);
            i0.ɵɵviewQuery(MapInfoWindow, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.map = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.info = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["mainmarker", "mapMarker"], ["class", "google-map-container", 4, "ngIf"], [1, "google-map-container"], ["height", "600px", "width", "100%", 3, "center", "zoom", "options"], [3, "position", "options", "mapClick", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [3, "mapClick", "position", "options"]], template: function CeeMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMapComponent_ng_container_0_Template, 4, 5, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [CommonModule, i13.NgForOf, i13.NgIf, GoogleMapsModule, i11.GoogleMap, i11.MapInfoWindow, i11.MapMarker], styles: [".google-map-container[_ngcontent-%COMP%]   google-map[_ngcontent-%COMP%]{width:500px;height:600px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMapComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-map', standalone: true, imports: [NgSwitch, CommonModule, GoogleMapsModule], template: "<ng-container  class=\"google-map-container\" *ngIf=\"isVisible\">\r\n\t<google-map height=\"600px\"\r\n\twidth=\"100%\"\r\n\t[center]=\"center\"\r\n\t[zoom]=\"zoom\"\r\n\t[options]=\"options\">\r\n\t\t<map-marker *ngFor=\"let m of markers\"\r\n\t\t\t#mainmarker=\"mapMarker\"\r\n\t  \t\t[position]=\"m\"\r\n\t  \t\t[options]=\"markerOptions\"\r\n\t\t\t(mapClick)=\"openInfo(mainmarker, m)\">\r\n\t\t</map-marker>\r\n\t\t<map-info-window [innerHTML]=\"infoContent\"></map-info-window>\r\n\t</google-map>\r\n</ng-container>\r\n", styles: [".google-map-container google-map{width:500px;height:600px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], map: [{
            type: ViewChild,
            args: [GoogleMap, { static: false }]
        }], info: [{
            type: ViewChild,
            args: [MapInfoWindow, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMapComponent, { className: "CeeMapComponent", filePath: "lib\\field-components\\cee-map\\cee-map.component.ts", lineNumber: 26 }); })();

export { CeeMapComponent };
//# sourceMappingURL=ng-cee-core-cee-map.component-CmiEuarW.mjs.map
