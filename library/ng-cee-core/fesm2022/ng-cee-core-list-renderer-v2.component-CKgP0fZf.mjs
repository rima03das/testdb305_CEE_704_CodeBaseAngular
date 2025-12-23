import * as i0 from '@angular/core';
import { Directive, Host, Self, Optional, Input, Component } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, E as EmptyUtil, i as AlertModalComponent, c as SharedEventsServiceService, d as CEEInternalEmitterService, f as ApiDataService, e as AppDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTableDataSource } from '@angular/material/table';
import { YouTubePlayerModule } from '@angular/youtube-player';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i13 from '@angular/common';
import { NgStyle, NgSwitch, CommonModule } from '@angular/common';
import * as i12$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { defer } from 'rxjs';
import { moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import * as i10 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
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
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

class StylePaginatorDirective {
    matPag;
    vr;
    ren;
    _pageGapTxt = "...";
    _rangeStart;
    _rangeEnd;
    _buttons = [];
    _curPageObj = {
        length: 0,
        pageIndex: 0,
        pageSize: 0,
        previousPageIndex: 0
    };
    _showTotalPages = 2;
    get showTotalPages() {
        return this._showTotalPages;
    }
    set showTotalPages(value) {
        this._showTotalPages = value % 2 == 0 ? value + 1 : value;
    }
    get inc() {
        return this._showTotalPages % 2 == 0
            ? this.showTotalPages / 2
            : (this.showTotalPages - 1) / 2;
    }
    get numOfPages() {
        return this.matPag.getNumberOfPages();
    }
    get lastPageIndex() {
        return this.matPag.getNumberOfPages() - 1;
    }
    constructor(matPag, vr, ren) {
        this.matPag = matPag;
        this.vr = vr;
        this.ren = ren;
        //to rerender buttons on items per page change and first, last, next and prior buttons
        this.matPag.page.subscribe((e) => {
            if (this._curPageObj.pageSize != e.pageSize &&
                this._curPageObj.pageIndex != 0) {
                e.pageIndex = 0;
                this._rangeStart = 0;
                this._rangeEnd = this._showTotalPages - 1;
            }
            this._curPageObj = e;
            this.initPageRange();
        });
        this.matPag._intl.getRangeLabel = this.getRangeLabel;
    }
    getRangeLabel = (page, pageSize, length) => {
        let pInfo;
        if (length === 0 || pageSize === 0) {
            pInfo = `0 / ${length}`;
        }
        else {
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            pInfo = `${startIndex + 1} - ${endIndex} / ${length}`;
        }
        return pInfo;
    };
    buildPageNumbers() {
        const actionContainer = this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions");
        const nextPageNode = this.vr.element.nativeElement.querySelector("button.mat-paginator-navigation-next");
        const prevButtonCount = this._buttons.length;
        // remove buttons before creating new ones
        if (this._buttons.length > 0) {
            this._buttons.forEach(button => {
                this.ren.removeChild(actionContainer, button);
            });
            //Empty state array
            this._buttons.length = 0;
        }
        //initialize next page and last page buttons
        if (this._buttons.length == 0) {
            let nodeArray = this.vr.element.nativeElement.childNodes[0].childNodes[0]
                .childNodes[2].childNodes;
        }
        for (let i = 0; i < this.numOfPages; i++) {
            if (i >= this._rangeStart && i <= this._rangeEnd) {
                this.ren.insertBefore(actionContainer, this.createButton(i, this.matPag.pageIndex), nextPageNode);
            }
        }
    }
    createButton(i, pageIndex) {
        const linkBtn = this.ren.createElement("mat-button");
        if (i === pageIndex) {
            this.ren.addClass(linkBtn, "mat-mini-fab");
            this.ren.addClass(linkBtn, "elavation-z0");
        }
        else
            this.ren.addClass(linkBtn, "mat-button");
        const pagingTxt = isNaN(i) ? this._pageGapTxt : +(i + 1);
        const text = this.ren.createText(pagingTxt + "");
        this.ren.addClass(linkBtn, "mat-custom-page");
        switch (i) {
            case pageIndex:
                this.ren.setAttribute(linkBtn, "disabled", "disabled");
                break;
            case this._pageGapTxt:
                let newIndex = this._curPageObj.pageIndex + this._showTotalPages;
                if (newIndex >= this.numOfPages)
                    newIndex = this.lastPageIndex;
                if (pageIndex != this.lastPageIndex) {
                    this.ren.listen(linkBtn, "click", () => {
                        // console.log("working: ", pageIndex);
                        this.switchPage(newIndex);
                    });
                }
                if (pageIndex == this.lastPageIndex) {
                    this.ren.setAttribute(linkBtn, "disabled", "disabled");
                }
                break;
            default:
                this.ren.listen(linkBtn, "click", () => {
                    this.switchPage(i);
                });
                break;
        }
        this.ren.appendChild(linkBtn, text);
        //Add button to private array for state
        this._buttons.push(linkBtn);
        return linkBtn;
    }
    //calculates the button range based on class input parameters and based on current page index value. Used to render new buttons after event.
    initPageRange() {
        const middleIndex = (this._rangeStart + this._rangeEnd) / 2;
        this._rangeStart = this.calcRangeStart(middleIndex);
        this._rangeEnd = this.calcRangeEnd(middleIndex);
        this.buildPageNumbers();
    }
    //Helper function To calculate start of button range
    calcRangeStart(middleIndex) {
        switch (true) {
            case this._curPageObj.pageIndex == 0 && this._rangeStart != 0:
                return 0;
            case this._curPageObj.pageIndex > this._rangeEnd:
                return this._curPageObj.pageIndex + this.inc > this.lastPageIndex
                    ? this.lastPageIndex - this.inc * 2
                    : this._curPageObj.pageIndex - this.inc;
            case this._curPageObj.pageIndex > this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex > middleIndex &&
                this._rangeEnd < this.lastPageIndex:
                return this._rangeStart + 1;
            case this._curPageObj.pageIndex < this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex < middleIndex &&
                this._rangeStart > 0:
                return this._rangeStart - 1;
            default:
                return this._rangeStart;
        }
    }
    //Helpter function to calculate end of button range
    calcRangeEnd(middleIndex) {
        switch (true) {
            case this._curPageObj.pageIndex == 0 &&
                this._rangeEnd != this._showTotalPages:
                return this._showTotalPages - 1;
            case this._curPageObj.pageIndex > this._rangeEnd:
                return this._curPageObj.pageIndex + this.inc > this.lastPageIndex
                    ? this.lastPageIndex
                    : this._curPageObj.pageIndex + 1;
            case this._curPageObj.pageIndex > this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex > middleIndex &&
                this._rangeEnd < this.lastPageIndex:
                return this._rangeEnd + 1;
            case this._curPageObj.pageIndex < this._curPageObj.previousPageIndex &&
                this._curPageObj.pageIndex < middleIndex &&
                this._rangeStart >= 0 &&
                this._rangeEnd > this._showTotalPages - 1:
                return this._rangeEnd - 1;
            default:
                return this._rangeEnd;
        }
    }
    //Helper function to switch page on non first, last, next and previous buttons only.
    switchPage(i) {
        // console.log("switch", i);
        const previousPageIndex = this.matPag.pageIndex;
        this.matPag.pageIndex = i;
        this.matPag["_emitPageEvent"](previousPageIndex);
        this.initPageRange();
    }
    //Initialize default state after view init
    ngAfterViewInit() {
        this._rangeStart = 0;
        this._rangeEnd = this._showTotalPages - 1;
        this.initPageRange();
    }
    static ɵfac = function StylePaginatorDirective_Factory(t) { return new (t || StylePaginatorDirective)(i0.ɵɵdirectiveInject(i1.MatPaginator, 11), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StylePaginatorDirective, selectors: [["", "style-paginator", ""]], inputs: { showTotalPages: "showTotalPages" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StylePaginatorDirective, [{
        type: Directive,
        args: [{
                selector: "[style-paginator]",
                standalone: true
            }]
    }], () => [{ type: i1.MatPaginator, decorators: [{
                type: Host
            }, {
                type: Self
            }, {
                type: Optional
            }] }, { type: i0.ViewContainerRef }, { type: i0.Renderer2 }], { showTotalPages: [{
            type: Input
        }] }); })();

const _c0 = a0 => ({ "d-none": a0 });
const _c1 = a0 => ({ "color": a0 });
const _c2 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c3 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c4 = () => ["List-V2", "List-Expandable-V2"];
const _c5 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c6 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, primaryKeyIndex: a4 });
const _c8 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, primaryKeyIndex: a4 });
function ListRendererComponentV2_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function ListRendererComponentV2_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function ListRendererComponentV2_ng_container_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHideFilter("show-hide-list-container-", ctx_r1.sectionData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function ListRendererComponentV2_ng_container_0_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.sectionData.field_label, " Setting");
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-checkbox", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const i_r6 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.columnShowHideRearrange[i_r6].showColumn, $event) || (ctx_r1.columnShowHideRearrange[i_r6].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const f_r8 = ctx_r6.$implicit;
    const i_r6 = ctx_r6.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.columnShowHideRearrange[i_r6].showColumn);
    i0.ɵɵproperty("disabled", ctx_r1.columnShowHideRearrange[i_r6].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r8.field_label);
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r8.field_label);
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template, 3, 3, "div", 21)(2, ListRendererComponentV2_ng_container_0_div_4_div_4_div_2_Template, 3, 1, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r1.columnShowHideRearrange[i_r6].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") == -1);
} }
function ListRendererComponentV2_ng_container_0_div_4_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.filterErrorMsg);
} }
function ListRendererComponentV2_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_container_0_div_4_label_2_Template, 2, 1, "label", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵlistener("cdkDropListDropped", function ListRendererComponentV2_ng_container_0_div_4_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.drop($event)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_div_4_div_4_Template, 3, 5, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_div_4_label_6_Template, 2, 1, "label", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 17);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 18);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_div_4_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-list-container-", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.filterErrorMsg);
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, message_r9.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r9.message_text, " ");
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_5_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_5_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template_span_click_3_listener() { const chipArray_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r11)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r11.keyName, " ");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template, 5, 1, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42)(2, "input", 43);
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r14 = i0.ɵɵnextContext(); const data_r16 = ctx_r14.$implicit; const pos_r17 = ctx_r14.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r16, $event.target.checked, pos_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17)("id", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17)("checked", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r16[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r17])("disabled", ctx_r1.selectedObj.checkbox ? !data_r16.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 45)(2, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const data_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r16, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r17 : "radio" + "_" + pos_r17);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r17 : data_r16[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r16.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r17 : "radio" + "_" + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r21 = ctx.$implicit;
    const child_position_r22 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(3);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r21, data_r16, pos_r17, "child_" + child_position_r22));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    const field_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r26, " ", field_r25.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r25.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r25)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r25.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    const field_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.index;
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r25, data_r16, pos_r17, position_r26));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const elseField_r27 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r25.field_type === "Generic Block")("ngIfElse", elseField_r27);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r29 = ctx.$implicit;
    const child_position_r30 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(4);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r29, data_r16, pos_r17, "child_" + child_position_r30));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    const field_r32 = ctx_r30.$implicit;
    const position_r33 = ctx_r30.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r33, " ", field_r32.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r32.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r32)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r32.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    const field_r32 = ctx_r30.$implicit;
    const position_r33 = ctx_r30.index;
    const ctx_r14 = i0.ɵɵnextContext(2);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r32, data_r16, pos_r17, position_r33));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r32 = ctx.$implicit;
    const elseField_r34 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r32.field_type === "Generic Block")("ngIfElse", elseField_r34);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 50);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r28); const data_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r16 ? null : data_r16); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r16["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r16 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r16 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r16.expandable_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 40);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 41);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template_div_click_3_listener() { const ctx_r18 = i0.ɵɵrestoreView(_r13); const data_r16 = ctx_r18.$implicit; const pos_r17 = ctx_r18.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r16, pos_r17)); })("keyup.enter", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template_div_keyup_enter_3_listener() { const ctx_r19 = i0.ɵɵrestoreView(_r13); const data_r16 = ctx_r19.$implicit; const pos_r17 = ctx_r19.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r16, pos_r17)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_Template, 4, 2, "ng-container", 7)(5, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template, 7, 13, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    const pos_r17 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("carousel-item list-item list-item-pos-", pos_r17, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r17 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select-V2" ? ctx_r1.storeData.includes(data_r16[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r16.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable-V2" && ctx_r1.hidenRows);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previous()); });
    i0.ɵɵtext(2, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template, 6, 12, "ng-container", 38);
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(5, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.rowDataShown);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42)(2, "input", 43);
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r36 = i0.ɵɵnextContext(); const data_r38 = ctx_r36.$implicit; const pos_r39 = ctx_r36.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r38, $event.target.checked, pos_r39)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39)("id", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39)("checked", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r38[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r39])("disabled", ctx_r1.selectedObj.checkbox ? !data_r38.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 45)(2, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r40); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r38, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r39 : "radio" + "_" + pos_r39);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r39 : data_r38[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r38.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r39 : "radio" + "_" + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r43 = ctx.$implicit;
    const child_position_r44 = ctx.index;
    const ctx_r36 = i0.ɵɵnextContext(3);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r43, data_r38, pos_r39, "child_" + child_position_r44));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const field_r46 = ctx_r44.$implicit;
    const position_r47 = ctx_r44.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r47, " ", field_r46.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r46.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r46)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r46.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const field_r46 = ctx_r44.$implicit;
    const position_r47 = ctx_r44.index;
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r46, data_r38, pos_r39, position_r47));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = ctx.$implicit;
    const elseField_r48 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r46.field_type === "Generic Block")("ngIfElse", elseField_r48);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r50 = ctx.$implicit;
    const child_position_r51 = ctx.index;
    const ctx_r36 = i0.ɵɵnextContext(4);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r50, data_r38, pos_r39, "child_" + child_position_r51));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const field_r53 = ctx_r51.$implicit;
    const position_r54 = ctx_r51.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r54, " ", field_r53.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r53.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r53)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r53.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const field_r53 = ctx_r51.$implicit;
    const position_r54 = ctx_r51.index;
    const ctx_r36 = i0.ɵɵnextContext(2);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r53, data_r38, pos_r39, position_r54));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r53 = ctx.$implicit;
    const elseField_r55 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r53.field_type === "Generic Block")("ngIfElse", elseField_r55);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 50);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r49); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r38 ? null : data_r38); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r38 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r38["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r38 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r38 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r38.expandable_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 40);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 41);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template_div_click_3_listener() { const ctx_r40 = i0.ɵɵrestoreView(_r35); const data_r38 = ctx_r40.$implicit; const pos_r39 = ctx_r40.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r38, pos_r39)); })("keyup.enter", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template_div_keyup_enter_3_listener() { const ctx_r41 = i0.ɵɵrestoreView(_r35); const data_r38 = ctx_r41.$implicit; const pos_r39 = ctx_r41.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r38, pos_r39)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 7)(5, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template, 7, 13, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    const pos_r39 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("list-item list-item-pos-", pos_r39, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r39 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select-V2" ? ctx_r1.storeData.includes(data_r38[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r38.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable-V2" && ctx_r1.hidenRows);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template, 6, 12, "ng-container", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayValuesLazy);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_div_1_Template, 2, 1, "div", 31);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template, 6, 1, "ng-container", 3)(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.chipsDisplay);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("list-loader ", ctx_r1.listLoading ? "list-pending" : "list-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["ShowCarousel"] && ctx_r1.additionalParameters["ShowCarousel"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.additionalParameters["ShowCarousel"] || ctx_r1.additionalParameters["ShowCarousel"] && ctx_r1.additionalParameters["ShowCarousel"].toLowerCase() != "true");
} }
function ListRendererComponentV2_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r56 = ctx.$implicit;
    const position_r57 = ctx.index;
    const ctx_r57 = i0.ɵɵnextContext();
    const data_r59 = ctx_r57.$implicit;
    const pos_r60 = ctx_r57.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r61 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r61)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r56, data_r59, pos_r60, position_r57));
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 53);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r60 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r60, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r60 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_Template, 3, 8, "ng-container", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 55);
    i0.ɵɵlistener("page", function ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pageChangeEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("length", ctx_r1.pagination.itemCount)("pageSize", ctx_r1.pagination.currentItemCount)("showTotalPages", 3)("pageSizeOptions", ctx_r1.pagination.pageItems);
} }
function ListRendererComponentV2_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template, 1, 4, "mat-paginator", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.autoPagination);
} }
function ListRendererComponentV2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_div_1_Template, 3, 2, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_button_3_Template, 2, 0, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_div_4_Template, 11, 5, "div", 6)(5, ListRendererComponentV2_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 7)(6, ListRendererComponentV2_ng_container_0_ng_container_6_Template, 5, 6, "ng-container", 3)(7, ListRendererComponentV2_ng_container_0_ng_container_7_Template, 3, 1, "ng-container", 3)(8, ListRendererComponentV2_ng_container_0_ng_container_8_Template, 2, 1, "ng-container", 3)(9, ListRendererComponentV2_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader && ctx_r1.showNoDataFoundLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function ListRendererComponentV2_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-list-renderer-v2", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rootData", ctx_r1.rootData)("rowData", field_r64["rowData"])("sectionData", field_r64)("templateId", ctx_r1.templateId)("type", field_r64.field_type)("childList", field_r64["childList"]);
} }
function ListRendererComponentV2_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 56);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 57)(2, ListRendererComponentV2_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 57)(3, ListRendererComponentV2_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 57)(4, ListRendererComponentV2_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 57)(5, ListRendererComponentV2_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 57)(6, ListRendererComponentV2_ng_template_1_ng_container_6_Template, 4, 18, "ng-container", 57)(7, ListRendererComponentV2_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 57)(8, ListRendererComponentV2_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 57)(9, ListRendererComponentV2_ng_template_1_ng_container_9_Template, 4, 18, "ng-container", 57)(10, ListRendererComponentV2_ng_template_1_ng_container_10_Template, 3, 11, "ng-container", 57)(11, ListRendererComponentV2_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 57)(12, ListRendererComponentV2_ng_template_1_ng_container_12_Template, 4, 18, "ng-container", 57)(13, ListRendererComponentV2_ng_template_1_ng_container_13_Template, 4, 18, "ng-container", 57)(14, ListRendererComponentV2_ng_template_1_ng_container_14_Template, 4, 18, "ng-container", 57);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r64 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r64.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(15, _c4).includes(field_r64.field_type) ? field_r64.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
} }
function ListRendererComponentV2_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 60);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 61);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 64);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 65);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 66);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 67);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 68);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 56);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 57)(2, ListRendererComponentV2_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 57)(3, ListRendererComponentV2_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 57)(4, ListRendererComponentV2_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 57)(5, ListRendererComponentV2_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 57)(6, ListRendererComponentV2_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 57)(7, ListRendererComponentV2_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 57)(8, ListRendererComponentV2_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 57)(9, ListRendererComponentV2_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 57);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r67 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r67.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List-V2");
} }
class ListRendererComponentV2 {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    sectionData;
    stepId;
    templateId;
    type;
    rowData;
    rootData;
    childList = {};
    pagination = {
        pageItems: [10, 15, 20],
        currentItemCount: 10,
        showNext: true,
        showPrevious: false,
        currentPage: 1,
        pageCount: 1,
        itemCount: 1,
        startIndex: 0,
        endIndex: 0,
        paginationRange: 9
    };
    showPagination = false;
    autoPagination = true;
    showFilter = false;
    filterPlaceholderText = 'Filter';
    canRefresh = false;
    displayValues = [];
    displayValuesLazy = [];
    lazyInterval = [];
    searchData = new MatTableDataSource([]);
    showLoading = true;
    noDataFound = true;
    showNoDataFoundLabel = true;
    showSkeletonLoader = true;
    listElements = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    showErrorOnNext = false;
    messages = [];
    // App Data of the list cell
    listCellAppData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
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
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
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
    totalCountAppData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
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
    chipsArray = [];
    chipsDisplay = false;
    chipsApiKeyToDisplay = null;
    contextArray = [];
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    fieldData;
    isMandatory = false;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    filterKeys = [];
    filterAPIKey;
    paginationShowingResultHint = '%value%';
    hidenRows;
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    filterTxt = '';
    isVisible = false;
    paginationNextLabel = 'Next';
    paginationPreviousLabel = 'Previous';
    pages = [];
    fieldValue;
    serverPagination = false; // set this to true when Pagination Type is server
    serverPaginationKeys = [];
    checkEmpty;
    setDynamicLabelUtil;
    // to overwrite the property of check box and radio in case of list single select and multi select
    selectedObj = {
        radio: null,
        checkbox: null,
    };
    noDataFoundLabel = 'no record found.';
    expandableData;
    isListCell = false; // set true if the fields in generic block is ListCell
    listCellEventConfig = []; // set List Cell Event Config
    displayedUniqueIds = []; // unique IDs array when the user configures a list cell inside the generic block
    listInternalApiData = {};
    listLoading = false;
    resultCountAPIKey = "";
    paginationFirstLabel;
    paginationLastLabel;
    selectedRowIndex;
    tabIndexValue;
    rowDataShown;
    iRowData;
    itemPerPage;
    hasRowConditionField;
    html_id = '';
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (this.componentList['label']) {
                return this.componentList['label'];
            }
            else {
                const c = import('./ng-cee-core-cee-label.component-3Du0Wv_U.mjs').then(m => m.CeeLabelComponent);
                this.componentList['label'] = c;
                return c;
            }
        }),
        Textfield: defer(() => {
            if (this.componentList['Textfield']) {
                return this.componentList['Textfield'];
            }
            else {
                const c = import('./ng-cee-core-cee-textfield.component-ddq1tk4O.mjs').then(m => m.CeeTextfieldComponent);
                this.componentList['Textfield'] = c;
                return c;
            }
        }),
        Menu: defer(() => {
            if (this.componentList['Menu']) {
                return this.componentList['Menu'];
            }
            else {
                const c = import('./ng-cee-core-cee-menu.component-DrjJlxBz.mjs').then(m => m.CeeMenuComponent);
                this.componentList['Menu'] = c;
                return c;
            }
        }),
        Image: defer(() => {
            if (this.componentList['Image']) {
                return this.componentList['Image'];
            }
            else {
                const c = import('./ng-cee-core-cee-image.component-DItsEZaO.mjs').then(m => m.CeeImageComponent);
                this.componentList['Image'] = c;
                return c;
            }
        }),
        Picker: defer(() => {
            if (this.componentList['Picker']) {
                return this.componentList['Picker'];
            }
            else {
                const c = import('./ng-cee-core-cee-picker.component-DQznZ6Qo.mjs').then(m => m.CeePickerComponent);
                this.componentList['Picker'] = c;
                return c;
            }
        }),
        Button: defer(() => {
            if (this.componentList['Button']) {
                return this.componentList['Button'];
            }
            else {
                const c = import('./ng-cee-core-ng-cee-core-B-GWW1tg.mjs').then(function (n) { return n.a4; }).then(m => m.CeeButtonComponent);
                this.componentList['Button'] = c;
                return c;
            }
        }),
        Link: defer(() => {
            if (this.componentList['Link']) {
                return this.componentList['Link'];
            }
            else {
                const c = import('./ng-cee-core-cee-link.component-LAUdVFMh.mjs').then(m => m.CeeLinkComponent);
                this.componentList['Link'] = c;
                return c;
            }
        }),
        Video: defer(() => {
            if (this.componentList['Video']) {
                return this.componentList['Video'];
            }
            else {
                const c = import('./ng-cee-core-cee-video.component-Bvg3K2NA.mjs').then(m => m.CeeVideoComponent);
                this.componentList['Video'] = c;
                return c;
            }
        }),
        "Table-V2": defer(() => {
            if (this.componentList['Table-V2']) {
                return this.componentList['Table-V2'];
            }
            else {
                const c = import('./ng-cee-core-cee-table-v2.component-DJIUef9R.mjs').then(m => m.CeeTableV2Component);
                this.componentList['Table-V2'] = c;
                return c;
            }
        }),
        Accordion: defer(() => {
            if (this.componentList['Accordion']) {
                return this.componentList['Accordion'];
            }
            else {
                const c = import('./ng-cee-core-accordion-renderer.component-Dktp3JsQ.mjs').then(m => m.AccordionRendererComponent);
                this.componentList['Accordion'] = c;
                return c;
            }
        }),
        DynamicForm: defer(() => {
            if (this.componentList['DynamicForm']) {
                return this.componentList['DynamicForm'];
            }
            else {
                const c = import('./ng-cee-core-dynamic-form.component-Cm25oDxC.mjs').then(m => m.DynamicFormComponent);
                this.componentList['DynamicForm'] = c;
                return c;
            }
        }),
        Attachments: defer(() => {
            if (this.componentList['Attachments']) {
                return this.componentList['Attachments'];
            }
            else {
                const c = import('./ng-cee-core-cee-attachments.component-DaZytsS9.mjs').then(m => m.CeeAttachmentsComponent);
                this.componentList['Attachments'] = c;
                return c;
            }
        })
    };
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.iRowData = 0;
        this.itemPerPage = 4;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.checkEmpty = new EmptyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            // console.log("sectionData.fields: ", this.sectionData.fields)
            if (this.sectionData.fields) {
                this.sectionData.fields.forEach((element, i) => {
                    this.columnShowHideRearrange.push({
                        field_label: element.field_label,
                        unique_id: element.unique_id,
                        position: i,
                        showColumn: true,
                        isMandatory: false,
                        isVisible: true
                    });
                });
            }
        }
    }
    drop(event) {
        if (this.columnFilterType.indexOf('rearrange') != -1) {
            moveItemInArray(this.columnShowHideRearrange, event.previousIndex, event.currentIndex);
        }
    }
    resetRestructuring() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
        }
        this.showHideFilter('show-hide-list-container-', this.sectionData.unique_id);
    }
    applyRestructuring() {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.sectionData.unique_id] = this.columnShowHideRearrange;
            localStorage.setItem('columnRstructuringConfig', JSON.stringify(setting));
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.sectionData.fields = restuctuedColArr;
            this.ngOnInit();
            this.showHideFilter('show-hide-list-container-', this.sectionData.unique_id);
        }
        else {
            this.filterErrorMsg = "Please select atleast one column!";
        }
    }
    showHideFilter(string, id) {
        let containerId = string + id;
        if (!document.getElementById(containerId)) {
            return;
        }
        if (document.getElementById(containerId).classList.contains('d-none')) {
            document.getElementById(containerId).classList.remove('d-none');
        }
        else {
            document.getElementById(containerId).classList.add('d-none');
        }
    }
    async ngOnInit() {
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.listCellAppData.stepId = this.stepId;
        const { additional_parameters, event_list } = this.sectionData;
        let keys = [];
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'Show Chips':
                        this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'true' ? true : false;
                        break;
                    case 'Pagination Values':
                        this.pagination.pageItems = paramter.value.split('|').map(s => Number(s.trim()));
                        this.pagination.currentItemCount = this.pagination.pageItems[0];
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
                        break;
                    case 'Pagination Previous Label':
                        this.paginationPreviousLabel = paramter.value !== '' ? paramter.value : 'Previous';
                        break;
                    case 'Pagination First Label':
                        this.paginationFirstLabel = paramter.value;
                        break;
                    case 'Pagination Last Label':
                        this.paginationLastLabel = paramter.value;
                        break;
                    case 'Pagination Showing Result Hint':
                        this.paginationShowingResultHint = paramter.value !== '' ? paramter.value : '%value%';
                        break;
                    case 'No Data Found Label':
                        this.noDataFoundLabel = paramter.value !== '' ? paramter.value : 'no record found.';
                        break;
                    case 'CEE_ShowNoDataFoundLabel':
                        this.showNoDataFoundLabel = paramter.value === 'false' ? false : true;
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Filter Placeholder Text':
                        this.filterPlaceholderText = paramter.value;
                        break;
                    case 'FilterKeys':
                        this.filterKeys = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'FilterAPIKey':
                        this.filterAPIKey = paramter.value;
                        break;
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'List-Expandable' ? paramter.value : '';
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'List-Expandable' ? paramter.value : this.expandTitle;
                        break;
                    case 'Pagination Type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverPagination = true;
                        }
                        break;
                    case 'Set from store':
                        if (paramter.value === 'true') {
                            // * Only works if the api key is multiple
                            // * for list to show the data from handler
                            // * handler data needs to be stored in the
                            // * api data store
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 'Pagination API Keys':
                        keys = paramter.value.split('||');
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'List-Expandable' ? paramter.value : this.collapseTitle;
                        break;
                    case 'Result Count API Key':
                        this.resultCountAPIKey = paramter.value;
                        break;
                    case 'TabIndex':
                        this.tabIndexValue = parseInt(paramter.value);
                        break;
                    case 'CarouselItemPerPage':
                        this.itemPerPage = (paramter.value && !isNaN(paramter.value)) ? parseInt(paramter.value) : 4;
                        break;
                }
            }
        }
        // Means it is a field not a section
        if (this.sectionData.unique_id) {
            // set pagination keys for server driven list
            if (this.serverPagination) {
                // 0 th key for total No of values
                // 1st key for page number
                // 2nd key for page size
                if (this.serverPagination && keys.length !== 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                this.serverPaginationKeys = keys.map((str, index) => {
                    this.setPrimaryKey({
                        name: str.trim(),
                        value: index === 2 ? this.pagination.currentItemCount : '1'
                    });
                    return str.trim();
                });
            }
            if (this.childList && Object.keys(this.childList).length) {
                // this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                // this.sectionData.fields = this.childList.block_fields;
                if (!this.sectionData.fields) {
                    this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                    this.sectionData.fields = this.fieldDataBack = this.blockRenderedData.block_fields;
                    this.updateColumnConfig();
                    this.applyRestructuring();
                }
            }
            else {
                // const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                // this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                // this.sectionData.fields = this.blockRenderedData.block_fields;
                if (!this.sectionData.fields) {
                    const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                    this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                    this.sectionData.fields = this.fieldDataBack = this.blockRenderedData.block_fields;
                    this.updateColumnConfig();
                    this.applyRestructuring();
                    this.sharedEventsServiceService.stepLoaderEmitter.emit({ "blockId": this.additionalParameters['default_value'] });
                }
            }
            this.listElements = Array(this.pagination.currentItemCount);
            // check if the list has possible values
            if (this.sectionData && this.sectionData.possible_values && this.sectionData.possible_values.length > 0) {
                this.setListData(this.mapPossibleValues(this.sectionData.possible_values));
            }
            // Get Expandable field details
            if (this.hidenRows) {
                this.expandableData = await this.wfeStepLoaderService.loadBlockByName(this.hidenRows).toPromise();
                // retrieve child generic block fields
                for (const field of this.expandableData.block_fields) {
                    if (field.field_type === 'Generic Block') {
                        field.default_value = field.additional_parameters.filter(ap => ap.parameter_type === 'default_value');
                        if (field.default_value.length !== 1) {
                            continue;
                        }
                        const childData = await this.wfeStepLoaderService.loadBlockByName(field.default_value[0].value).toPromise();
                        field.child_fields = this.commonUtil.blockBootstrapProcess(childData).block_fields;
                    }
                }
            }
            await this.retrieveBlockFields();
            this.returnFieldIdMapApiKey();
            if (this.type !== 'List') {
                this.storePrimaryKey('ON_LOAD', true);
                this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id] =
                    this.sharedEventsServiceService.showMandatoryErrorMsg.subscribe((res) => {
                        if (res) {
                            if (Array.isArray(res.fields) && res.type === 'event') {
                                if (res.includes(this.sectionData.unique_id)) {
                                    if (this.isMandatory && this.checkEmpty.isEmpty(this.fieldValue)) {
                                        this.showErrorMessage();
                                    }
                                }
                            }
                            else {
                                if (this.isMandatory && this.checkEmpty.isEmpty(this.fieldValue)) {
                                    this.showErrorMessage();
                                }
                            }
                        }
                    });
                // empty session data when the session clearance is emitted
                this.variableObj['emptySessionData' + this.sectionData.unique_id] =
                    this.sharedEventsServiceService.emitForEmptySession.subscribe((res) => {
                        let data = [];
                        let uniqueIdValue = [];
                        if (res) {
                            if (res.unique_ids.length > 0) {
                                data = res.unique_ids;
                                uniqueIdValue = [this.sectionData.unique_id];
                            }
                            else {
                                data = res.apiKeys;
                                if (this.isSingleAPIKey) {
                                    uniqueIdValue = [this.sectionData.api_key];
                                }
                                else {
                                    uniqueIdValue = [...uniqueIdValue,
                                        ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key))];
                                    uniqueIdValue = [
                                        ...uniqueIdValue,
                                        ...this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key)
                                    ];
                                }
                            }
                            data.forEach(elm => {
                                if (uniqueIdValue.includes(elm)) {
                                    let value; // type any
                                    if (this.type === 'List-Multi-Select') {
                                        value = [];
                                        this.checkedItems = [];
                                    }
                                    else {
                                        value = '';
                                        this.radioValue = '';
                                    }
                                    this.storeData = [];
                                    // assign app data
                                    // TODO: Replace with a function code
                                    this.appData = {
                                        ...this.appData,
                                        ...{
                                            id: this.sectionData.unique_id,
                                            stepId: this.stepId,
                                            apiKey: this.isSingleAPIKey ? this.sectionData.api_key : '',
                                            fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.sectionData.field_label : '',
                                            linkedBlockId: '',
                                            isRepeatedField: false,
                                            repeatedBlockFieldId: '',
                                            requestApiKey: this.isSingleAPIKey ? [] :
                                                this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key),
                                            responseApiKey: this.isSingleAPIKey ? [] :
                                                this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key)),
                                            mandatory: this.isMandatory,
                                            editable: this.sectionData.is_editable === 1 ? true : false,
                                            visible: this.sectionData.is_display === 1 ? true : false,
                                            value,
                                            isValid: true
                                        }
                                    };
                                    this.appDataService.updateAppData(this.appData);
                                }
                            });
                        }
                    });
            }
        }
        this.updateColumnConfig();
        // console.log("columnShowHideRearrange: ", this.columnShowHideRearrange)
        // set radio value on load of a function
        this.showSelectedRadioValues();
        const unique_id = (this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id);
        if (this.rowData && this.rowData.value) {
            this.searchData = this.checkRowVisibility(this.rowData.value);
            this.noDataFound = this.searchData.filteredData.length > 0 ? false : true;
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
            this.showLoading = false;
        }
        else {
            this.variableObj['emitApiSuccessResponse_' +
                unique_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    this.setListData(res);
                }, err => {
                    console.error(err);
                    this.showLoading = false;
                    this.noDataFound = true;
                });
        }
        /**
         * Check if the checkbox needs chips
         */
        this.checkboxChips();
        this.variableObj['emitSetFieldValueOnEvent_' +
            unique_id] =
            this.sharedEventsServiceService.emitSetFieldValueOnEvent.subscribe(res => {
                if (res.uniqueIds && res.uniqueIds.includes('filter_column_' + unique_id) && res.values) {
                    this.commonUtil.setFilterKeys(this.searchData, res['values']);
                }
                if (res.uniqueIds && res.uniqueIds.includes('filter_' + unique_id) && res.values && res.values.length) {
                    this.filterTxt = res['values'].length > 1 ?
                        res['values'][res['uniqueIds'].indexOf('filter_' + unique_id)] :
                        res['values'][0];
                    this.applyFilter();
                }
            });
        if (this.sectionData.unique_id) {
            this.variableObj['emitOnDataSetOrUpdated_' + unique_id] = this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            if (this.sectionData.is_display === 1) {
                this.isVisible = true;
            }
            this.appData.visible = this.isVisible;
        }
        else {
            this.isVisible = true;
        }
        if (this.rowData && this.rowData.value) {
            this.searchData = this.checkRowVisibility(this.rowData.value);
            this.noDataFound = this.searchData.filteredData.length > 0 ? false : true;
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
        }
        if (this.rowData) {
            this.appData.visible = this.rowData.visible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        this.eventListHandler.cellAppData.stepId = this.stepId; // Fix: when TF's label in cell clicked, TF's state not removed after going back
        this.eventListHandler.cellAppData.visible = this.appData.visible; // Fix: when TF's label in cell clicked, on page refresh, TF disappears
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'] && data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
        // console.log("sectiondata: ", this.sectionData)
        // console.log("fieldData: ", this.sectionData.fields)
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    setShownData() {
        this.rowDataShown = this.displayValuesLazy.slice(this.iRowData, this.iRowData + this.itemPerPage);
    }
    previous() {
        if (this.iRowData != 0) {
            this.iRowData = this.iRowData - 1;
        }
        else {
            this.iRowData = this.displayValuesLazy.length - this.itemPerPage;
        }
        this.setShownData();
    }
    next() {
        if (this.iRowData + 1 <= this.displayValuesLazy.length - this.itemPerPage) {
            this.iRowData = this.iRowData + 1;
        }
        else {
            this.iRowData = 0;
        }
        this.setShownData();
    }
    async retrieveBlockFields() {
        // retrieve child generic block fields
        for (const [i, field] of this.sectionData.fields.entries()) {
            this.displayedUniqueIds.push(field.unique_id);
            switch (field.field_type) {
                case 'List':
                case 'List-Single-Select':
                case 'List-Multi-Select':
                case 'Generic Block':
                    field.default_value = field.additional_parameters.filter(ap => ap.parameter_type === 'default_value');
                    if (field.default_value.length !== 1) {
                        continue;
                    }
                    const childData = await this.wfeStepLoaderService.loadBlockByName(field.default_value[0].value).toPromise();
                    if (field.field_type === 'Generic Block') {
                        field.child_fields = this.commonUtil.blockBootstrapProcess(childData).block_fields;
                    }
                    else {
                        field.childList = childData;
                    }
                    break;
                case 'Checkbox':
                    this.selectedObj.checkbox = i;
                    break;
                case 'radio':
                    this.selectedObj.radio = i;
                    break;
                case 'Listcell':
                    this.isListCell = true;
                    this.listCellEventConfig = field.event_list;
                    if (field.is_display === 2) {
                        this.hasRowConditionField = field;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * function that maps static possible values
     * @param possibleValues the field possible Values
     */
    mapPossibleValues(possibleValues) {
        const listStaticData = [];
        const keys = possibleValues[0].split('|||');
        for (const i in possibleValues) {
            if (Number(i) > 0) {
                const obj = {};
                possibleValues[i].split('|||').forEach((value, index) => {
                    obj[keys[index]] = value;
                });
                listStaticData.push(obj);
            }
        }
        return listStaticData;
    }
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    setListData(res) {
        // check if server side pagination and then store the data for the totalNo Of Pages
        if (this.serverPagination) {
            // setting total Number of values
            const value = this.setAPIKeyUtil.setApiCallBackData(this.serverPaginationKeys[0], res);
            // setting current page number
            const currPage = this.setAPIKeyUtil.setApiCallBackData(this.serverPaginationKeys[1], res);
            if (currPage) {
                this.pagination.currentPage = Number(currPage);
            }
            if (value) {
                // set total no of pages
                this.setPaginationStore(this.serverPaginationKeys[0], value);
            }
        }
        this.showLoading = false;
        if ((this.isSingleAPIKey && this.sectionData.api_key !== '') ||
            (!this.isSingleAPIKey && this.sectionData.response_api_key !== '')) {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                if (result.length > 0) {
                    this.noDataFound = false;
                    this.searchData = this.checkRowVisibility(result);
                }
                else {
                    this.noDataFound = true;
                }
            }
            else {
                return;
            }
        }
        else if (Array.isArray(res)) {
            if (res && res.length > 0) {
                this.noDataFound = false;
                this.searchData = this.checkRowVisibility(res);
            }
            else {
                this.noDataFound = true;
            }
        }
        else {
            return;
        }
        this.listInternalApiData = JSON.parse(JSON.stringify(this.listInternalApiData));
        this.pagination.itemCount = this.serverPagination ?
            this.listInternalApiData[this.serverPaginationKeys[0]] : this.searchData.filteredData.length;
        this.setTotalCountAppData(this.pagination.itemCount);
        this.onPaginationCountChange(this.serverPagination ? 0 : 1);
        this.commonUtil.setFilterKeys(this.searchData, this.filterKeys);
    }
    checkRowVisibility(res) {
        const result = [];
        if (this.hasRowConditionField) {
            for (const rdata of res) {
                const visibilityCondition = this.conditionalUtil.checkVisibility(this.hasRowConditionField, this.hasRowConditionField.unique_id, '', this.returnUniqueIdMapApiValue(rdata));
                if (visibilityCondition) {
                    result.push(rdata);
                }
            }
            return new MatTableDataSource(result);
        }
        else {
            return new MatTableDataSource(res);
        }
    }
    setTotalCountAppData(value) {
        this.totalCountAppData = {
            ...this.totalCountAppData,
            ...{
                id: this.sectionData.unique_id + '_total_count',
                stepId: this.stepId,
                apiKey: this.isSingleAPIKey ? this.resultCountAPIKey : '',
                requestApiKey: this.isSingleAPIKey ? [] :
                    this.apiKeyUtil.getMultipleApiKeys(this.resultCountAPIKey),
                responseApiKey: this.isSingleAPIKey ? [] :
                    this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.resultCountAPIKey)),
                value
            }
        };
        this.appDataService.setAppData(this.totalCountAppData);
        const emitObj = {
            apiKey: this.resultCountAPIKey,
            value
        };
        this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
    }
    /**
     * function that performs the filtering
     */
    applyFilter() {
        this.setPrimaryKey({
            name: this.serverPagination ? this.filterAPIKey : this.sectionData.unique_id + '##' + this.filterAPIKey,
            value: this.filterTxt
        });
        if (!this.serverPagination) {
            this.searchData.filter = this.filterTxt.trim().toLowerCase();
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
            this.setTotalCountAppData(this.pagination.itemCount);
        }
        else {
            this.setPaginationStore(this.serverPaginationKeys[1], 1);
        }
        const { event_list } = this.sectionData;
        if (event_list && event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(event_list))) {
                if (event.event_name.toLowerCase() === 'OnFilterClick'.toLowerCase()) {
                    // setting current page to 1
                    if (this.serverPagination) {
                        this.pagination.currentPage = 1;
                    }
                    this.eventListHandler.switchEventDisplayType(event, event_list);
                }
            }
        }
        this.noDataFound = this.searchData.filteredData.length ? false : true;
    }
    setPrimaryKey = (data) => {
        if (data.value && data.name) {
            this.listInternalApiData[data.name] = data.value;
            const apiData = {
                id: data.name,
                apiUrl: '',
                apiKey: data.name,
                value: data.value
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    };
    // -------------------------- Pagination Logic Start ----------------------------//
    /**
     * function that performs the pagination previous
     */
    paginationPrevious() {
        if (this.pagination.currentPage < 1) {
            this.pagination.currentPage = 1;
        }
        else {
            this.pagination.currentPage--;
        }
        // set Page number for next
        this.setPaginationStore(this.serverPaginationKeys[1], this.pagination.currentPage);
        this.onComponentEvent('OnPaginationButtonClick');
        if (!this.serverPagination) {
            this.performPagination();
        }
    }
    /**
     * function that performs the pagination next
     */
    paginationNext() {
        if (this.pagination.currentPage > this.pagination.pageCount) {
            this.pagination.currentPage = this.pagination.pageCount;
        }
        else {
            this.pagination.currentPage++;
        }
        // set page number for previous
        this.setPaginationStore(this.serverPaginationKeys[1], this.pagination.currentPage);
        this.onComponentEvent('OnPaginationButtonClick');
        this.performPagination();
    }
    isValidPageNumber(num) {
        return (/^\d+$/.test(num) && (0 < num && num <= this.pagination.pageCount));
    }
    /**
     * function that performs the pagination page number
     */
    setCurrent(num) {
        if (this.isValidPageNumber(num)) {
            this.pagination.currentPage = num;
            // check of pagination type is server the set page number
            this.setPaginationStore(this.serverPaginationKeys[1], num);
            this.onComponentEvent('OnPaginationButtonClick');
            this.performPagination();
        }
    }
    /**
     * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
     *
     * @param i
     * @param currentPage
     * @param paginationRange
     * @param totalPages
     * @returns '{*}'
     */
    calculatePageNumber(i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    }
    /**
     * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
     * links used in pagination
     *
     * @param currentPage
     * @param rowsPerPage
     * @param paginationRange
     * @param collectionLength
     * @returns '{Array}'
     */
    generatePagesArray(currentPage, totalPages, paginationRange) {
        var pages = [];
        var halfWay = Math.ceil(paginationRange / 2);
        var position;
        if (currentPage <= halfWay) {
            position = 'start';
        }
        else if (totalPages - halfWay < currentPage) {
            position = 'end';
        }
        else {
            position = 'middle';
        }
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...');
            }
            else {
                pages.push(pageNumber);
            }
            i++;
        }
        return pages;
    }
    /**
     * function that sets the pagination count
     * @param 0 wont reset the count because in server side pagination
     * page Number comes from the api
     */
    onPaginationCountChange(flag = 1) {
        this.pagination.pageCount = Math.ceil(this.pagination.itemCount / this.pagination.currentItemCount);
        // Reset position
        if (flag === 1) {
            this.pagination.currentPage = 1;
        }
        this.performPagination();
    }
    setPaginationCount() {
        // set the current item count if the pagination is server
        this.setPaginationStore(this.serverPaginationKeys[2], this.pagination.currentItemCount);
        this.onComponentEvent('OnPaginationButtonClick');
    }
    /**
     * set the values of the selected items in case of List-Single-Select
     */
    showSelectedRadioValues() {
        if (this.type === 'List-Single-Select') {
            if (this.storeData.length > 0) {
                this.radioValue = this.storeData[0];
            }
        }
    }
    /**
     * function that set the number of checked items when the list type is List-Multi-Select
     */
    checkCheckedValues() {
        // store the values of the checkedItems
        if (this.type === 'List-Multi-Select') {
            if (this.storeData.length > 0) {
                this.checkedItems = [];
                for (const singleRes of this.displayValues) {
                    if ((this.storeData).includes(singleRes[this.primaryKeyVal])) {
                        this.checkedItems.push(singleRes[this.primaryKeyVal]);
                    }
                    else {
                        this.checkedItems.push({});
                    }
                }
            }
        }
    }
    /**
     * function to set pagination api store
     * @param name pagination api keys
     * @param value the value of the api key
     */
    setPaginationStore(name, value) {
        if (this.serverPagination) {
            this.setPrimaryKey({
                name,
                value
            });
        }
    }
    /**
     * function that performs the pagination
     */
    performPagination() {
        this.pagination.startIndex =
            (this.pagination.currentPage - 1) * this.pagination.currentItemCount;
        this.pagination.endIndex =
            this.pagination.startIndex + this.pagination.currentItemCount;
        this.pagination.endIndex =
            this.pagination.endIndex > this.pagination.itemCount
                ? this.pagination.itemCount
                : this.pagination.endIndex;
        let setDisplayValues = true;
        if (this.showPagination) {
            this.pages = this.generatePagesArray(this.pagination.currentPage, this.pagination.pageCount, this.pagination.paginationRange);
            if (!this.serverPagination) {
                setDisplayValues = false;
                this.displayValues = this.searchData.filteredData.slice(this.pagination.startIndex, this.pagination.endIndex);
                if (this.additionalParameters['Show Pagination'] === 'auto' && this.pagination.itemCount <= this.pagination.pageItems[0]) {
                    this.autoPagination = false;
                }
                else {
                    this.autoPagination = true;
                }
            }
        }
        if (setDisplayValues) {
            this.displayValues = this.searchData.filteredData;
        }
        // console.log(this.sectionData);
        const properties = this.setFieldProperties(this.displayValues); // function that sets single properties
        this.displayValues = this.sortList(properties);
        // console.log(properties);
        this.displayValues = properties;
        this.checkCheckedValues();
        this.lazyLoading();
    }
    sortList(properties) {
        let sortOn = this.additionalParameters['EnableSort'] ? this.additionalParameters['EnableSort'].split('||')[0].split('|').reverse() : [];
        let sortPreferance = this.additionalParameters['EnableSort'] ? this.additionalParameters['EnableSort'].split('||')[1] : "asc";
        // console.log("sortOn: ",sortOn)
        // console.log("sortPreferance: ",sortPreferance)
        sortOn.forEach((item) => {
            properties = properties.sort((a, b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0));
        });
        if (sortPreferance && sortPreferance.toLowerCase() == 'desc') {
            properties = properties.reverse();
        }
        // console.log("properties: ", properties)
        return properties;
    }
    lazyLoading() {
        this.displayValuesLazy = [];
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.listLoading = true;
        this.lazyInterval = setInterval(() => {
            if (this.displayValues.length !== this.displayValuesLazy.length) {
                this.displayValuesLazy.push(this.displayValues[this.displayValuesLazy.length]);
                if (this.additionalParameters['ShowCarousel'] && this.additionalParameters['ShowCarousel'].toLowerCase() == 'true') {
                    if (this.additionalParameters['CarouselItemPerPage'] && !isNaN(this.additionalParameters['CarouselItemPerPage'])) {
                        this.itemPerPage = parseInt(this.additionalParameters['CarouselItemPerPage']) > this.displayValuesLazy.length ? this.displayValuesLazy.length : parseInt(this.additionalParameters['CarouselItemPerPage']);
                    }
                    this.setShownData();
                }
            }
            else {
                this.listLoading = false;
                this.showSkeletonLoader = false;
                clearInterval(this.lazyInterval);
            }
        }, 0);
    }
    // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    //     if (this.lazyInterval) {
    //         clearInterval(this.lazyInterval);
    //     }
    //     this.displayValuesLazy = [];
    // }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            if (data.hasOwnProperty('fields')) {
                continue;
            }
            data['fields'] = [];
            data['list_data'] = {};
            data['expandable_fields'] = [];
            data['hasExpandableData'] = false;
            if (this.sectionData.fields) {
                for (const j of this.sectionData.fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    if (field.field_type === 'Generic Block') {
                        for (const k of field.child_fields) {
                            const childField = k;
                            childField['rowData'] = this.generateRowData(childField, data, i);
                        }
                    }
                    else {
                        field['rowData'] = this.generateRowData(field, data, i);
                    }
                    data['fields'].push(field);
                }
            }
            if (this.hidenRows && this.expandableData) {
                for (const j of this.expandableData.block_fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    if (field.field_type === 'Generic Block' && field.child_fields) {
                        for (const k of field.child_fields) {
                            const childField = k;
                            childField['rowData'] = this.generateRowData(childField, data, i, true);
                        }
                    }
                    else {
                        field['rowData'] = this.generateRowData(field, data, i, true);
                    }
                    data['expandable_fields'].push(field);
                }
            }
        }
        return displayValues;
    }
    // -------------------------- Pagination Logic End ----------------------------//
    /**
     * returns the message object from the message code
     * @param messageCode the message code as configured in validation_messages message_code
     */
    returnMessageData(messageCode) {
        if (messageCode) {
            const messageDataMap = this.wfeStepLoaderService.messagesDataMap[messageCode];
            return (messageDataMap);
        }
    }
    /**
     * function that shows an error message on the basis of the configured validation_messages
     */
    showErrorMessage() {
        if (this.sectionData.validation_messages) {
            for (const message of this.sectionData.validation_messages) {
                if (message.type === 'Mandatory') {
                    switch (message.display_type) {
                        case 'MODAL':
                            // open modal
                            this.dialog.closeAll();
                            this.openDialog(this.returnMessageData(message.message_code).message_text);
                            break;
                        case 'INLINE':
                            this.messages.push(this.returnMessageData(message.message_code));
                            this.showErrorOnNext = true;
                            break;
                        case 'POPUP':
                            // open snackbar
                            this.snackBar.dismiss();
                            this.openSnackBar(this.returnMessageData(message.message_code).message_text);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    /**
     * function that opens a material dialog bar
     * @param data the message that is configure in the CEE Message
     */
    openDialog(data) {
        this.dialog.open(AlertModalComponent, {
            data: {
                message: data
            }
        });
    }
    /**
     * function that opens a material snack bar
     * @param message the message that is configure in the CEE Message
     */
    openSnackBar(message) {
        this.snackBar.open(message, 'OK', {
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'mat-primary']
        });
    }
    /**
     * function that gets triggered when there is a event(HTML event) triggered
     * in the case of List-Single-Select or List-Multi-Select
     * @param data the current data of the row
     * @param isChecked if the value is checked or not
     * @param context the position of the selected row
     */
    list_change(data, isChecked, context, internal) {
        const value = data[this.primaryKeyVal];
        if (isChecked) {
            if (this.type === 'List-Single-Select') {
                this.storeData = [];
            }
            if (!this.storeData.includes(value)) {
                this.storeData = this.storeData.concat([value]);
            }
        }
        else {
            if (this.storeData.length > 0 && this.storeData.indexOf(value) !== -1) {
                this.storeData = [...this.storeData]; // cloning array
                this.storeData.splice(this.storeData.indexOf(value), 1);
            }
        }
        if (this.chipsApiKeyToDisplay !== null) {
            this.chipsDisplay = true;
            (isChecked) ?
                this.chipsArray.push({ keyName: data[this.chipsApiKeyToDisplay], keyPos: context }) :
                this.chipsArray = this.chipsArray.filter(e => e.keyName !== data[this.chipsApiKeyToDisplay]);
        }
        this.storePrimaryKey('ON_CLICK', isChecked);
        if (!internal) {
            const _this = this;
            setTimeout(() => {
                _this.onComponentEvent('onclick');
            }, 0);
        }
    }
    /**
     * function that stores the value of the list single select and list multi select or set the value on load of a list
     * @param type type can be only ON_LOAD so that the value is already set in
     * the list on the load of the page is the user has already selected that
     */
    storePrimaryKey(type, checked) {
        for (const additionalParam of this.sectionData.additional_parameters) {
            if (additionalParam.parameter_type === 'PrimaryKeyName') {
                const primaryKeyValue = [];
                for (const sdata of this.storeData) {
                    primaryKeyValue.push(sdata);
                }
                const apiData = {
                    id: this.getPrimaryKey(additionalParam.value),
                    apiUrl: '',
                    apiKey: this.getPrimaryKey(additionalParam.value),
                    value: (this.type === 'List-Single-Select' ? (primaryKeyValue[0] ? primaryKeyValue[0] : '') : primaryKeyValue)
                };
                // store app data only if it is configured as a field
                const data = this.appDataService.getFieldDataByFieldId(this.sectionData.unique_id);
                if (this.sectionData.unique_id) {
                    this.isMandatory = this.sectionData.is_mandatory === 1 ? true : false;
                    let appData = {
                        id: this.sectionData.unique_id,
                        stepId: this.stepId,
                        apiKey: this.isSingleAPIKey ? this.sectionData.api_key : '',
                        fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.sectionData.field_label : '',
                        linkedBlockId: '',
                        isRepeatedField: false,
                        repeatedBlockFieldId: '',
                        requestApiKey: this.isSingleAPIKey ? [] :
                            this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key),
                        responseApiKey: this.isSingleAPIKey ? [] :
                            this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key)),
                        mandatory: this.isMandatory,
                        editable: this.sectionData.is_editable === 1 ? true : false,
                        visible: this.sectionData.is_display === 1 ? true : false,
                        value: (this.type === 'List-Single-Select' ?
                            (this.storeData[0] ? this.storeData[0] : '') : [...new Set(this.storeData)]),
                        isValid: true
                    };
                    this.fieldValue = appData.value;
                    if (data !== undefined) {
                        if (type === 'ON_LOAD') {
                            this.fieldValue = this.storeData;
                            this.storeData = data ? Array.isArray(data) ? data : [data] : '';
                            appData = {
                                ...appData, ...{
                                    value: this.storeData
                                }
                            };
                        }
                        if (this.additionalParameters['SetPrimaryValue'] === 'All') {
                            if (checked) {
                                if (this.storeData.length === this.displayValues.length) {
                                    this.appDataService.updateAppData(appData);
                                }
                            }
                            else {
                                this.fieldValue = [];
                                this.appDataService.updateAppData({
                                    ...appData, ...{
                                        value: []
                                    }
                                });
                            }
                        }
                        else {
                            this.appDataService.updateAppData(appData);
                        }
                    }
                    else {
                        this.appDataService.addAppData(appData);
                    }
                }
                this.apiDataService.setApiData(Object.assign({}, apiData));
            }
        }
    }
    /**
     * returns the primary key from the additional parameter PrimaryKeyName
     * @param key the value of additional parameter PrimaryKeyName
     */
    getPrimaryKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            return data[0].trim();
        }
        else {
            return key;
        }
    }
    /**
     * returns the main api key from the given api key
     * @param key the key that is provided as an additional parameter
     */
    getValueFromKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            if (data[1].split('[*].').length > 1) {
                return data[1].split('[*].')[1].trim();
            }
            else {
                return data[1].trim();
            }
        }
        else {
            return key;
        }
    }
    /**
     * function that displays chips if the additional parameter is set to checkbox chips
     */
    checkboxChips = () => {
        for (const parameter of this.sectionData.additional_parameters) {
            if (parameter.parameter_type === 'Checkbox Chips') {
                this.chipsApiKeyToDisplay = parameter.value;
            }
        }
    };
    /**
     * function that removes the chips from the top of the list when some of the items are unchecked
     */
    deleteChips = (chipData) => {
        // (document.querySelector('#check_' + chipData.keyPos) as HTMLInputElement).checked = false;
        this.chipsArray.splice(this.chipsArray.indexOf(chipData), 1);
        if (this.chipsArray.length === 0) {
            this.chipsDisplay = false;
        }
    };
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowData(field, data, list_pos, expandable = false) {
        let apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        expandable && apiData && (data['hasExpandableData'] = true);
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        if (field.field_type === 'Link') {
            apiData = data;
        }
        let obj;
        let isEditable = false;
        let isVisible = false;
        if (field.is_editable === 1) {
            isEditable = true;
        }
        if (field.is_display === 1) {
            isVisible = true;
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        else {
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: isVisible,
                editable: isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData,
                position: list_pos
            };
        }
        if (this.selectedObj.checkbox && this.sectionData.fields[this.selectedObj.checkbox].unique_id === field.unique_id) {
            this.list_change(data, (obj.value === 'true' || obj.value === '1'), list_pos, true);
        }
        return obj;
    }
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data, presentValue, field) {
        const visibilityCondition = this.conditionalUtil.checkVisibility(field, field.unique_id, '', data);
        if (visibilityCondition) {
            return visibilityCondition;
        }
        return presentValue;
    }
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data, presentValue, field) {
        const editableCondition = this.conditionalUtil.checkEditable(field, field.unique_id, '', data);
        if (editableCondition) {
            return editableCondition;
        }
        return presentValue;
    }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(this.fieldIdMapApiKey)) {
            const uniqueId = this.fieldIdMapApiKey[key];
            obj[uniqueId] = this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) ? this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.sectionData.fields) {
            if (field.field_type === 'Generic Block' && field.child_fields) {
                for (const child_field of field.child_fields) {
                    this.returnFieldIdMapApiKeyValue(obj, child_field);
                }
            }
            else {
                this.returnFieldIdMapApiKeyValue(obj, field);
            }
        }
        if (this.hidenRows) {
            for (const field of this.expandableData.block_fields) {
                if (field.field_type === 'Generic Block' && field.child_fields) {
                    for (const child_field of field.child_fields) {
                        this.returnFieldIdMapApiKeyValue(obj, child_field);
                    }
                }
                else {
                    this.returnFieldIdMapApiKeyValue(obj, field);
                }
            }
        }
        this.fieldIdMapApiKey = obj;
    }
    // inner function of returnFieldIdMapApiKey
    returnFieldIdMapApiKeyValue(obj, field) {
        if (this.isSingleAPIKey && field.api_key) {
            obj[field.api_key] = field.unique_id; // TODO: Support multiple api keys
        }
        else {
            if (field.response_api_key) {
                if (field.response_api_key.includes('|')) {
                    const keys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(field.response_api_key));
                    for (const key of keys) {
                        obj[key] = field.unique_id;
                    }
                }
                else {
                    obj[field.response_api_key] = field.unique_id;
                }
            }
        }
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        // not a list that is declared as a section
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData && this.sectionData.event_list && this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.eventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                    }
                }
            }
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, pos) {
        this.selectedRowIndex = pos;
        this.eventListHandler.getListCellData(data.fields);
        if (this.primaryKeyVal) {
            this.setPrimaryKey({
                name: this.primaryKeyVal,
                value: data[this.primaryKeyVal]
            });
        }
        for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
            if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                this.eventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
            }
        }
    }
    get getRangeLabel() {
        return String(this.paginationShowingResultHint).replace('%value%', this.pagination.currentPage + " / " + this.pagination.pageCount);
    }
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy() {
        // if (this.variableObj[
        //     'emitApiSuccessResponse_' +
        //         this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id]) {
        //     this.variableObj[
        //         'emitApiSuccessResponse_' +
        //             this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id].unsubscribe();
        // }
        // if (this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id]) {
        //     this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id].unsubscribe();
        // }
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.displayValuesLazy = [];
    }
    pageChangeEvent(event) {
        this.setCurrent(event.pageIndex);
    }
    static ɵfac = function ListRendererComponentV2_Factory(t) { return new (t || ListRendererComponentV2)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListRendererComponentV2, selectors: [["app-list-renderer-v2"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], ["title", "Previous", 1, "move-ctrl", "previous", 3, "click"], ["class", "list-conatianer data-row", 4, "ngFor", "ngForOf"], ["title", "Next", 1, "move-ctrl", "next", 3, "click"], [1, "list-conatianer", "data-row"], [3, "click", "keyup.enter"], [1, "list-checkbox-container"], ["type", "checkbox", 1, "list-checkbox", 3, "change", "name", "id", "checked", "disabled"], [1, "custom-list-checkbox", 3, "for"], [1, "list-radio-container"], ["type", "radio", "name", "radio", 1, "list-radio", 3, "ngModelChange", "change", "id", "ngModel", "value", "disabled"], [1, "custom-list-radio", 3, "for"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", 3, "click"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["style-paginator", "", "showFirstLastButtons", "", 3, "length", "pageSize", "showTotalPages", "pageSizeOptions", "page", 4, "ngIf"], ["style-paginator", "", "showFirstLastButtons", "", 3, "page", "length", "pageSize", "showTotalPages", "pageSizeOptions"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rootData", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function ListRendererComponentV2_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_Template, 10, 8, "ng-container", 3)(1, ListRendererComponentV2_ng_template_1_Template, 15, 16, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ListRendererComponentV2_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [ListRendererComponentV2, MatFormFieldModule, i12.MatFormField, MatInputModule, i12$1.MatInput, MatCheckboxModule, i10.MatCheckbox, NgStyle, NgSwitch, CommonModule, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitchCase, i13.AsyncPipe, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, YouTubePlayerModule, CdkDropList, CdkDrag, StylePaginatorDirective, MatPaginatorModule, i1.MatPaginator], styles: [".chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}.show-hide-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListRendererComponentV2, [{
        type: Component,
        args: [{ selector: 'app-list-renderer-v2', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, NgStyle, NgSwitch, CommonModule, FormsModule, YouTubePlayerModule, CdkDropList, CdkDrag, StylePaginatorDirective, MatPaginatorModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\t<!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\" *ngIf=\"columnFilterType.indexOf('none') == -1\" (click)=\"showHideFilter('show-hide-list-container-',sectionData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-list-container-{{sectionData.unique_id}}\" class=\"show-hide-container col-3 mt-20 d-none\" *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"sectionData.field_label\" class=\"text-secondary m-2\">{{sectionData.field_label}} Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">  \r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\" *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\" [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>  \r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() == 'true'\">\r\n\t\t\t<div class=\"move-ctrl previous\" title=\"Previous\" (click)=\"previous()\">&lt;</div>\r\n\t\t\t<ng-container *ngFor=\"let data of rowDataShown; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\" [value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"carousel-item list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select-V2' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable-V2' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"move-ctrl next\" title=\"Next\" (click)=\"next()\">&gt;</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"!additionalParameters['ShowCarousel'] || (additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() != 'true')\">\r\n\t\t\t<ng-container *ngFor=\"let data of displayValuesLazy; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\" [value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select-V2' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable-V2' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<!--\r\n\t<div class=\"text-center my-5\" [hidden]=\"!showLoading\">\r\n\t\t<div class=\"lds-ripple\">\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader && showNoDataFoundLabel\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<!-- <div class=\"pagination-container\" *ngIf=\"showPagination && autoPagination\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\" aria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"paginationNext()\"\r\n\t\t\t\tclass=\"pagination-btn-next\" aria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"setCurrent(pagination.pageCount)\" class=\"pagination-btn-last\"\r\n\t\t\t\taria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t</div> -->\r\n\t\t<mat-paginator *ngIf=\"showPagination && autoPagination\" style-paginator (page)=\"pageChangeEvent($event)\" [length]=\"pagination.itemCount\" [pageSize]=\"pagination.currentItemCount\"\r\n\t\t\t[showTotalPages]=\"3\" [pageSizeOptions]=\"pagination.pageItems\" showFirstLastButtons>\r\n\t\t</mat-paginator>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t\t<!-- <ng-template #elseBlock>\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t*ngIf=\"\">\r\n\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t*ngIf=\"field.field_label.includes('((dynamic))') || (field.field_label_config && field.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n\t\t\t\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t\t\t\t[innerHTML]=\"setDynamicLabelUtil.getDynamicValue(field, data).field_label\"></div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #notDynamic>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t{{field.field_label}}</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, keepState: true,\r\n\t\t\t\tprimaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [rootData]=\"rootData\" [fieldData]=\"field\" [keepState]=\"true\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table-V2'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table-v2 [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table-v2> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"['List-V2', 'List-Expandable-V2'].includes(field.field_type) ? field.field_type : ''\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<app-list-renderer-v2 [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\" [templateId]=\"templateId\"\r\n\t\t\t\t[type]=\"field.field_type\" [childList]=\"field['childList']\">\r\n\t\t\t\t</app-list-renderer-v2>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Accordion'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-accordion-renderer [stepId]=\"stepId\" [rootData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-accordion-renderer> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-dynamic-form [sectionData]=\"field\" [rowData]=\"field['rowData']\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n\t\t\t</app-dynamic-form> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- Attachments -->\r\n\t\t<ng-container *ngSwitchCase=\"'Attachments'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-attachments [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" [rootData]=\"rootData\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-attachments> -->\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table-V2'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List-V2'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n", styles: [".chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}.show-hide-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
    }], () => [{ type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: ApiDataService }, { type: AppDataService }, { type: WfeStepLoaderService }, { type: CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i11.Router }], { sectionData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], type: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], childList: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListRendererComponentV2, { className: "ListRendererComponentV2", filePath: "lib\\components\\list-renderer-v2\\list-renderer-v2.component.ts", lineNumber: 58 }); })();

export { ListRendererComponentV2 };
//# sourceMappingURL=ng-cee-core-list-renderer-v2.component-CKgP0fZf.mjs.map
