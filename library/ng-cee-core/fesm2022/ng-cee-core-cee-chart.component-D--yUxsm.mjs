import * as i0 from '@angular/core';
import { Directive, Input, Component } from '@angular/core';
import { j as BaseView, F as FlatUnflat, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, T as TooltipModule, m as TooltipDirective } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i2 from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import * as i10 from 'ng2-google-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as c3 from 'c3';
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

class C3ChartDirective {
    el;
    renderer;
    chartData;
    chartColors;
    chartOptions;
    chartType;
    xAxisLabels;
    xAxisLabel;
    yAxisLabel;
    backgroundColor;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.generateChart();
    }
    ngOnChanges(changes) {
        if (changes.chartData || changes.chartOptions || changes.xAxisLabels || changes.xAxisLabel || changes.yAxisLabel || changes.backgroundColor) {
            this.generateChart();
        }
    }
    generateChart() {
        // Set the background color if provided
        let c3chart = {
            columns: []
        };
        let chartColorSetup = {
            colors: {},
            background: {},
            border: {}
        };
        this.chartData.forEach(x => {
            c3chart['columns'].push(x.data);
        });
        this.chartData.forEach(x => {
            chartColorSetup.colors[x.label] = x.colors;
            chartColorSetup.background[x.label] = x.backgroundColor;
            chartColorSetup.border[x.label] = x.borderColor;
        });
        if (this.backgroundColor) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
        }
        const options = {
            bindto: this.el.nativeElement,
            data: {
                ...c3chart,
                type: this.chartType,
                colors: chartColorSetup.colors,
            },
            axis: {
                x: {
                    type: 'category',
                    categories: this.xAxisLabels,
                    label: this.xAxisLabel
                },
                y: {
                    label: this.yAxisLabel
                }
            },
            legend: this.chartOptions?.legend,
            ...this.chartOptions
        };
        const chart = c3.generate(options);
        // Apply custom border colors after the chart is generated
        if (this.chartColors) {
            chart.data().forEach((data, index) => {
                const line = this.el.nativeElement.querySelector(`.c3-lines-${data.id}`);
                if (line) {
                    this.renderer.setStyle(line, 'stroke', chartColorSetup.border[data.id]);
                    this.renderer.setStyle(line, 'stroke', chartColorSetup.background[data.id]);
                }
            });
        }
    }
    static ɵfac = function C3ChartDirective_Factory(t) { return new (t || C3ChartDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: C3ChartDirective, selectors: [["", "appC3Chart", ""]], inputs: { chartData: "chartData", chartColors: "chartColors", chartOptions: "chartOptions", chartType: "chartType", xAxisLabels: "xAxisLabels", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", backgroundColor: "backgroundColor" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(C3ChartDirective, [{
        type: Directive,
        args: [{
                selector: '[appC3Chart]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], { chartData: [{
            type: Input
        }], chartColors: [{
            type: Input
        }], chartOptions: [{
            type: Input
        }], chartType: [{
            type: Input
        }], xAxisLabels: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }] }); })();

function CeeChartComponent_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeChartComponent_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeChartComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeChartComponent_ng_container_3_label_1_Template, 2, 1, "label", 5)(2, CeeChartComponent_ng_container_3_label_2_Template, 1, 1, "label", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeChartComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeChartComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeChartComponent_ng_container_6_canvas_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "canvas", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵproperty("datasets", ctx_r0.cjChartData)("labels", ctx_r0.chartLabels)("options", ctx_r0.chartOptions)("legend", ctx_r0.legend)("type", ctx_r0.chartType);
} }
function CeeChartComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeChartComponent_ng_container_6_canvas_1_Template, 1, 6, "canvas", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isVisible);
} }
function CeeChartComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "google-chart", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.gChartData);
} }
function CeeChartComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("chartData", ctx_r0.c3chartData)("chartColors", ctx_r0.chartColors)("chartType", ctx_r0.chartType)("chartOptions", ctx_r0.c3chartOptions)("xAxisLabels", ctx_r0.c3xAxisLabels)("xAxisLabel", ctx_r0.c3xAxisLabel)("yAxisLabel", ctx_r0.c3yAxisLabel)("backgroundColor", ctx_r0.c3backgroundColor);
} }
class CeeChartComponent extends BaseView {
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
    flatUnflat;
    chartData = [];
    //Labels shown on the x-axis
    chartLabels;
    // Define chart options
    chartOptions = {
        responsive: true,
        scales: {
            y: {
                min: 0 // Custom minimum value for the y-axis
            },
            x: {
                min: 0 // Custom min value for x-axis
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' // 'top', 'left', 'bottom', or 'right'
            }
        }
    };
    // Define colors of chart segments
    chartColors = [];
    // Set true to show legends
    lineChartLegend = true;
    chartType;
    chartProvider;
    chartElement;
    cjChartData = [];
    gChartData = {
        chartType: '',
        dataTable: [],
        options: {}
    };
    showChartJS;
    showGoogleChart;
    showc3Chart;
    legend = true;
    c3chartData;
    c3chartOptions;
    c3xAxisLabels;
    c3xAxisLabel;
    c3yAxisLabel;
    c3backgroundColor;
    subscriptions = [];
    timeoutIds = [];
    chartInstances = []; // Store chart instances for cleanup
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
    ngOnDestroy() {
        // Clean up subscriptions
        this.subscriptions.forEach(sub => {
            if (sub && !sub.closed) {
                sub.unsubscribe();
            }
        });
        this.subscriptions = [];
        // Clear timeouts
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Destroy chart instances
        this.destroyChartInstances();
        // Clear large object references
        this.clearDataReferences();
        this.onViewUnload();
    }
    destroyChartInstances() {
        // Destroy Chart.js instances
        this.chartInstances.forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.chartInstances = [];
    }
    clearDataReferences() {
        this.chartData = [];
        this.chartColors = [];
        this.cjChartData = [];
        this.c3chartData = null;
        this.gChartData = {
            chartType: '',
            dataTable: [],
            options: {}
        };
        this.chartElement = [];
    }
    onViewDataInit() {
        this.chartLabels = this.fieldData.possible_values ? this.fieldData.possible_values.map(function (e) { return e.trim(); }) : [];
        this.chartProvider = this.additionalParameter['provider'] ? this.additionalParameter['provider'].toLowerCase() : 'chartjs';
        this.chartType = this.additionalParameter['type'] ? this.additionalParameter['type'] : 'line';
        this.chartOptions.plugins.legend.position = this.additionalParameter['legend_position_chartjs'] ? this.additionalParameter['legend_position_chartjs'].toLowerCase() : 'top';
        this.chartOptions.scales.y.min = this.additionalParameter['chartjs_Y_axis_min_value'] ? this.additionalParameter['chartjs_Y_axis_min_value'] : 0;
        this.chartOptions.scales.x.min = this.additionalParameter['chartjs_x_axis_min_value'] ? this.additionalParameter['chartjs_x_axis_min_value'] : 0;
        const subscription = this.wfeStepLoaderService.loadBlockByName(this.additionalParameter['default_value']).subscribe({
            next: (data) => {
                this.chartElement = data.block_fields;
                this.randerChartElement();
            },
            error: (error) => {
                console.error('Error loading chart data:', error);
            }
        });
        this.subscriptions.push(subscription);
    }
    randerChartElement() {
        this.chartData = [];
        this.chartColors = [];
        for (const cElmt of this.chartElement) {
            if (cElmt.field_type === 'ChartElement') {
                //set chart data
                let cDataSet = {
                    label: '',
                    data: []
                };
                cDataSet.label = cElmt.field_label;
                const elementValue = cElmt.additional_parameters ? cElmt.additional_parameters.find(p => p.parameter_type === 'default_value') : null;
                const threshold = 0;
                if (elementValue && elementValue.value) {
                    cDataSet.data = elementValue.value.split(',').map(function (e) { return e.trim(); });
                }
                this.chartData.push(cDataSet);
                //set chart style
                let colorData = {};
                for (const cStyle of cElmt.possible_values) {
                    const csArr = cStyle.split('||');
                    colorData[csArr[0]] = csArr[1];
                }
                this.chartColors.push(colorData);
            }
        }
        if (this.chartProvider === 'chartjs') {
            this.randerChartJS();
        }
        if (this.chartProvider === 'googlechart') {
            this.randerGoogleChart();
        }
        if (this.chartProvider === 'c3charts') {
            this.randerc3chart();
        }
    }
    randerChartJS() {
        this.chartData.forEach((y, i) => {
            y['colors'] = this.chartColors[i].colors;
            y['borderColor'] = this.chartColors[i].borderColor;
            y['backgroundColor'] = this.chartColors[i].backgroundColor;
        });
        for (let c = 0; c < this.chartColors.length; c++) {
            const element = this.chartColors[c];
            for (const key in element) {
                if (typeof element[key] === 'string') {
                    if (element[key].includes('{')) {
                        try {
                            element[key] = JSON.parse(element[key]);
                        }
                        catch (error) {
                        }
                    }
                    else if (element[key].includes('|')) {
                        element[key] = element[key].split('|').map(s => s.trim());
                    }
                    else if (key.toLowerCase() === "legend") {
                        this.legend = element[key] === 'false' ? false : true;
                    }
                    else if (key.toLowerCase() === "skipdecimal" && element[key] == 'true') {
                        this.chartData['scales'] = this.chartData['scales'] ? this.chartData['scales'] : {};
                        this.chartData['scales']['yAxes'] = this.chartData['scales']['yAxes'] ? this.chartData['scales']['yAxes'] : [];
                        const yaTicks = this.chartData['scales']['yAxes'].find(ya => ya.ticks);
                        if (yaTicks) {
                        }
                        else {
                            this.chartData['scales']['yAxes'].push({
                                ticks: {
                                    beginAtZero: true,
                                    callback: function (label, index, labels) {
                                        if (Math.floor(Number(label)) == label) {
                                            return label;
                                        }
                                    },
                                }
                            });
                        }
                    }
                }
            }
        }
        this.cjChartData = JSON.parse(JSON.stringify(this.chartData));
        this.showChartJS = true;
    }
    randerGoogleChart() {
        this.gChartData.chartType = this.chartType;
        const dataTable = [];
        const dataTableHead = [''];
        for (let i = 0; i < this.chartData.length; i++) {
            dataTableHead.push(this.chartData[i].label);
            dataTableHead.push({ role: 'style' });
        }
        dataTable.push(dataTableHead);
        // console.log('this.chartData', this.chartData)
        // console.log('this.chartColors', this.chartColors)
        const colorSet = [];
        if (this.chartColors.length > 0) {
            const colorString = this.chartColors[0]['backgroundColor'] || this.chartColors[0]['colors'] || '';
            if (colorString.includes('|')) {
                colorSet.push(...colorString.split('|').map(s => s.trim()));
            }
            else {
                colorSet.push(colorString.trim());
            }
        }
        for (let l = 0; l < this.chartLabels.length; l++) {
            const dataTableitem = [this.chartLabels[l]];
            for (let i = 0; i < this.chartData.length; i++) {
                if (this.chartData[i].data[l]) {
                    const tVal = parseFloat(this.chartData[i].data[l].toString());
                    dataTableitem.push(tVal);
                    const colorIndex = l % colorSet.length;
                    const styleColor = colorSet[colorIndex] || null;
                    dataTableitem.push(styleColor);
                }
            }
            dataTable.push(dataTableitem);
        }
        // console.log('this.chartData 1', dataTable)
        this.gChartData.dataTable = dataTable;
        const options = {};
        for (let c = 0; c < this.chartColors.length; c++) {
            const element = this.chartColors[c];
            for (const key in element) {
                let elementVal = element[key];
                if (elementVal.includes('{')) {
                    try {
                        elementVal = JSON.parse(elementVal);
                    }
                    catch (error) {
                        console.log('error in parse', error, elementVal);
                    }
                }
                if (this.chartColors.length === 1) {
                    options[key] = typeof elementVal === 'string' && elementVal.includes('|') ? elementVal.split('|').map(s => s.trim()) : elementVal;
                }
                else {
                    if (['colors'].includes(key)) {
                        if (!options[key]) {
                            options[key] = [elementVal];
                        }
                        else {
                            options[key].push(elementVal);
                        }
                    }
                    else {
                        options[key] = elementVal;
                    }
                }
            }
        }
        this.gChartData.options = options;
        if (this.gChartData.dataTable.length > 1) {
            const timeoutId = setTimeout(() => {
                this.showGoogleChart = true;
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    randerc3chart() {
        this.chartData.forEach((y, i) => {
            y['colors'] = this.chartColors[i].colors;
            y['borderColor'] = this.chartColors[i].borderColor;
            y['backgroundColor'] = this.chartColors[i].backgroundColor;
        });
        this.chartData.forEach(x => {
            x.data.unshift(x.label);
        });
        this.c3chartData = JSON.parse(JSON.stringify(this.chartData));
        this.c3xAxisLabels = this.fieldData.possible_values ? this.fieldData.possible_values.map(function (e) { return e.trim(); }) : [];
        this.c3xAxisLabel = 'x axis';
        this.c3yAxisLabel = 'y axis';
        this.c3backgroundColor = '#f0f0f0';
        this.c3chartOptions = {
            legend: {
                position: 'top'
            }
        };
        this.showc3Chart = true;
    }
    onAPICallback(data) {
        if (data && data.handler_name && this.commonUtil.getHandlerName(this.fieldData.response_api_key) === data.handler_name) {
            this.showChartJS = false;
            this.showGoogleChart = false;
            this.showc3Chart = false;
            this.chartLabels = [];
            this.chartData = [];
            const apiChartLabels = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiChartLabels && Array.isArray(apiChartLabels)) {
                this.chartLabels = apiChartLabels;
            }
            if (this.chartElement) {
                for (let i = 0; i < this.chartElement.length; i++) {
                    const cElmt = this.chartElement[i];
                    if (cElmt.field_type === 'ChartElement') {
                        const apiChartData = this.setApiCallBackDataUtil.setApiCallBackData(cElmt, data);
                        if (apiChartData && Array.isArray(apiChartData)) {
                            //set chart data
                            let cDataSet = {
                                label: cElmt.field_label,
                                data: apiChartData
                            };
                            this.chartData[i] = cDataSet;
                        }
                    }
                }
                if (this.chartProvider === 'chartjs') {
                    this.randerChartJS();
                }
                if (this.chartProvider === 'googlechart') {
                    this.randerGoogleChart();
                }
                if (this.chartProvider === 'C3Charts') {
                    this.randerc3chart();
                }
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
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
    }
    ngOnChanges(changes) {
    }
    static ɵfac = function CeeChartComponent_Factory(t) { return new (t || CeeChartComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeChartComponent, selectors: [["app-cee-chart"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 9, vars: 9, consts: [[1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["baseChart", "", 3, "id", "datasets", "labels", "options", "legend", "type", 4, "ngIf"], ["baseChart", "", 3, "id", "datasets", "labels", "options", "legend", "type"], [3, "data"], ["appC3Chart", "", 3, "chartData", "chartColors", "chartType", "chartOptions", "xAxisLabels", "xAxisLabel", "yAxisLabel", "backgroundColor"]], template: function CeeChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "div", 1);
            i0.ɵɵtemplate(3, CeeChartComponent_ng_container_3_Template, 3, 2, "ng-container", 2)(4, CeeChartComponent_span_4_Template, 2, 0, "span", 3)(5, CeeChartComponent_button_5_Template, 2, 2, "button", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, CeeChartComponent_ng_container_6_Template, 2, 1, "ng-container", 2)(7, CeeChartComponent_ng_container_7_Template, 2, 1, "ng-container", 2)(8, CeeChartComponent_ng_container_8_Template, 2, 8, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("chart-container ", ctx.isCustomClass && ctx.fieldData.field_style ? ctx.fieldData.field_style.custom_class_name : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.fieldData.field_label != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isMandatory);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hasTooltip);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showChartJS);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showGoogleChart);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showc3Chart);
        } }, dependencies: [MatTooltipModule, Ng2GoogleChartsModule, i10.GoogleChartComponent, NgChartsModule, i2.BaseChartDirective, CommonModule, i13.NgIf, TooltipModule, TooltipDirective, C3ChartDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeChartComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-chart', standalone: true, imports: [MatTooltipModule, Ng2GoogleChartsModule, NgChartsModule, CommonModule, TooltipModule, C3ChartDirective], template: "<div class=\"chart-container {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng-container *ngIf=\"showChartJS\">\r\n\t\t<canvas id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" baseChart [datasets]=\"cjChartData\" [labels]=\"chartLabels\"\r\n\t\t\t[options]=\"chartOptions\" [legend]=\"legend\" [type]=\"chartType\">\r\n\t\t</canvas>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"showGoogleChart\">\r\n\t\t<google-chart [data]=\"gChartData\"></google-chart>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"showc3Chart\">\r\n\t\t<div appC3Chart\r\n\t\t\t[chartData]=\"c3chartData\"\r\n\t\t\t[chartColors]=\"chartColors\"\r\n\t\t\t[chartType]=\"chartType\"\r\n\t\t\t[chartOptions]=\"c3chartOptions\"\r\n\t\t\t[xAxisLabels]=\"c3xAxisLabels\"\r\n\t\t\t[xAxisLabel]=\"c3xAxisLabel\"\r\n\t\t\t[yAxisLabel]=\"c3yAxisLabel\"\r\n\t\t\t[backgroundColor]=\"c3backgroundColor\">\r\n</div>\r\n\t</ng-container>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeChartComponent, { className: "CeeChartComponent", filePath: "lib\\field-components\\cee-chart\\cee-chart.component.ts", lineNumber: 34 }); })();

export { CeeChartComponent };
//# sourceMappingURL=ng-cee-core-cee-chart.component-D--yUxsm.mjs.map
