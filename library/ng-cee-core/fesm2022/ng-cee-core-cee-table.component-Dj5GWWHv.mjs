import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, Input, forwardRef, ChangeDetectionStrategy, Component, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, b as Constant, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, B as BlockRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i1 from '@angular/material/paginator';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import * as i12 from '@angular/material/sort';
import { MatSortModule, MatSort } from '@angular/material/sort';
import * as i20 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import jQuery from 'jquery';
import * as i12$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i10 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i12$3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { CeeSwitchComponent } from './ng-cee-core-cee-switch.component-CfZ5e9ds.mjs';
import * as i13 from '@angular/common';
import { CommonModule, NgSwitch, NgClass } from '@angular/common';
import * as i12$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { defer } from 'rxjs';
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

const rotate = {
    asc: 'desc',
    desc: '',
    '': 'asc',
};
const compare = (v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
class SortableHeaderDirective {
    renderer;
    el;
    sortable = '';
    direction = '';
    sorting;
    sort = new EventEmitter();
    column;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.column = this.el.nativeElement;
    }
    ngOnInit() {
    }
    rotate() {
        if (this.sorting == 'true') {
            this.direction = rotate[this.direction];
            this.sort.emit({ column: this.sortable, direction: this.direction });
        }
    }
    static ɵfac = function SortableHeaderDirective_Factory(t) { return new (t || SortableHeaderDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SortableHeaderDirective, selectors: [["span", "sortable", ""]], hostVars: 4, hostBindings: function SortableHeaderDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function SortableHeaderDirective_click_HostBindingHandler() { return ctx.rotate(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
        } }, inputs: { sortable: "sortable", direction: "direction", sorting: "sorting" }, outputs: { sort: "sort" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableHeaderDirective, [{
        type: Directive,
        args: [{
                selector: 'span[sortable]',
                standalone: true,
                host: {
                    '[class.asc]': 'direction === "asc"',
                    '[class.desc]': 'direction === "desc"',
                    '(click)': 'rotate()',
                },
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { sortable: [{
            type: Input
        }], direction: [{
            type: Input
        }], sorting: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

class ResizeColumnDirective {
    renderer;
    el;
    resizable;
    index;
    startX;
    startWidth;
    column;
    table;
    pressed;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.column = this.el.nativeElement;
    }
    ngOnInit() {
        if (this.resizable) {
            const row = this.renderer.parentNode(this.column);
            const thead = this.renderer.parentNode(row);
            this.table = this.renderer.parentNode(thead);
            const resizer = this.renderer.createElement("span");
            this.renderer.addClass(resizer, "resize-holder");
            this.renderer.appendChild(this.column, resizer);
            this.renderer.listen(resizer, "mousedown", this.onMouseDown);
        }
    }
    onMouseDown = (event) => {
        this.pressed = true;
        this.startX = event.pageX;
        this.startWidth = this.column.offsetWidth;
        this.renderer.listen(this.table, "mousemove", this.onMouseMove);
        this.renderer.listen("document", "mouseup", this.onMouseUp);
    };
    onMouseMove = (event) => {
        event.preventDefault();
        const offset = 35;
        if (this.pressed === true && event.buttons) {
            this.renderer.addClass(this.table, "resizing");
            // Calculate width of column
            let width = this.startWidth + (event.pageX - this.startX - offset);
            const tableCells = Array.from(this.table.querySelectorAll(".mat-row")).map((row) => row.querySelectorAll(".mat-cell").item(this.index));
            // Set table header width
            if (this.column != null) {
                this.renderer.setStyle(this.column, "width", `${width}px`);
                this.renderer.setStyle(this.column, "max-width", `${width}px`);
                this.renderer.setStyle(this.column, "word-wrap", "break-word");
                this.renderer.setStyle(this.column, "overflow", "hidden");
                this.renderer.setStyle(this.column, "text-overflow", "ellipsis");
                this.renderer.setStyle(this.column, "white-space", "nowrap");
            }
            // Set table cells width
            for (const cell of tableCells) {
                if (cell != null) {
                    const elementWithLabelClass = this.findElementWithLabelClass(cell);
                    if (elementWithLabelClass != null) {
                        this.renderer.setStyle(elementWithLabelClass, "width", `${width}px`);
                        this.renderer.setStyle(elementWithLabelClass, "max-width", `${width}px`);
                        this.renderer.setStyle(elementWithLabelClass, "overflow", "hidden");
                        this.renderer.setStyle(elementWithLabelClass, "white-space", "nowrap");
                        this.renderer.setStyle(elementWithLabelClass, "text-overflow", "ellipsis");
                    }
                }
            }
        }
    };
    findElementWithLabelClass = (element) => {
        if (element.classList.contains('resizeNew')) {
            return element;
        }
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
            const descendantWithLabelClass = this.findElementWithLabelClass(children[i]);
            if (descendantWithLabelClass) {
                return descendantWithLabelClass;
            }
        }
        return null;
    };
    onMouseUp = (event) => {
        if (this.pressed) {
            this.pressed = false;
            this.renderer.removeClass(this.table, "resizing");
            event.stopPropagation();
        }
    };
    static ɵfac = function ResizeColumnDirective_Factory(t) { return new (t || ResizeColumnDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ResizeColumnDirective, selectors: [["", "resizeColumn", ""]], inputs: { resizable: [i0.ɵɵInputFlags.None, "resizeColumn", "resizable"], index: "index" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResizeColumnDirective, [{
        type: Directive,
        args: [{
                selector: "[resizeColumn]",
                standalone: true,
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { resizable: [{
            type: Input,
            args: ["resizeColumn"]
        }], index: [{
            type: Input
        }] }); })();

const _c0 = a0 => ({ "expandTable": a0 });
const _c1 = () => ["expandedResp"];
const _c2 = () => ["expandedDetail"];
const _c3 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, method: a3 });
const _c4 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, expandedDetail: true, method: a3 });
const _c5 = () => ({});
const _c6 = (a0, a1) => ({ data: a0, fields: a1 });
const _c7 = (a0, a1, a2) => ({ name: a0, value: a1, type: "table", cellData: a2 });
const _c8 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
const _c10 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
function CeeTableComponent_ng_container_0_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 9)(1, "input", 10);
    i0.ɵɵlistener("keyup", function CeeTableComponent_ng_container_0_mat_form_field_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableComponent_ng_container_0_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData[i_r4] && ctx_r1.fieldData[i_r4].field_label, " ");
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵelement(1, "div", 20);
    i0.ɵɵelementEnd();
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 15);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_2_ng_container_1_th_1_Template, 2, 1, "th", 16)(2, CeeTableComponent_ng_container_0_table_2_ng_container_1_td_2_Template, 2, 0, "td", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", f_r5);
} }
function CeeTableComponent_ng_container_0_table_2_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function CeeTableComponent_ng_container_0_table_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function CeeTableComponent_ng_container_0_table_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 11);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_2_ng_container_1_Template, 3, 1, "ng-container", 12)(2, CeeTableComponent_ng_container_0_table_2_tr_2_Template, 1, 0, "tr", 13)(3, CeeTableComponent_ng_container_0_table_2_tr_3_Template, 1, 0, "tr", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSourceLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
} }
function CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 33);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableComponent_ng_container_0_table_3_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template, 2, 4, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Multi-Select");
} }
function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 35)(2, "mat-radio-button", 36);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r8); const data_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r9, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r9 = ctx_r9.$implicit;
    const position_r11 = ctx_r9.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r11, "");
    i0.ɵɵproperty("value", data_r9)("checked", data_r9 == ctx_r1.radioValue)("disabled", ctx_r1.isSeletable == "0");
    i0.ɵɵattribute("aria-label", "Select " + position_r11);
} }
function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 37);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r12); const data_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.list_change(data_r9, $event.checked); return i0.ɵɵresetView($event ? ctx_r1.selection.toggle(data_r9) : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r9 = ctx_r9.$implicit;
    const position_r11 = ctx_r9.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r11, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r11, "");
    i0.ɵɵproperty("disabled", ctx_r1.isSeletable == "0")("checked", ctx_r1.selection.isSelected(data_r9))("aria-label", ctx_r1.checkboxLabel(data_r9));
} }
function CeeTableComponent_ng_container_0_table_3_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template, 3, 6, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template, 2, 7, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Single-Select" && data_r9.isSelectable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Multi-Select" && data_r9.isSelectable);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 40)(1, "span", 41);
    i0.ɵɵlistener("sort", function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const f_r15 = ctx_r13.$implicit;
    const i_r16 = ctx_r13.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r15.resizable)("index", i_r16 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r15.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r15.sorting);
    i0.ɵɵproperty("ngClass", f_r15.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template, 3, 6, "th", 39);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r15.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", f_r15.field_label, " ");
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_th_1_Template, 2, 2, "th", 42);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 43);
    i0.ɵɵelement(1, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r15.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", f_r15.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_th_1_Template, 2, 2, "th", 42);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r15.field_label) == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r15.field_label) == true);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template_td_click_0_listener() { const data_r18 = i0.ɵɵrestoreView(_r17).$implicit; const i_r16 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r16 === 0 && ctx_r1.expandedElement === data_r18 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const position_r19 = ctx.dataIndex;
    const f_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, f_r15, position_r19, data_r18, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 15);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 8)(3, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template, 2, 7, "td", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r15.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableComponent_ng_container_0_table_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18)(1, "span", 47);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableComponent_ng_container_0_table_3_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 34)(1, "button", 48);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_td_8_Template_button_click_1_listener() { const data_r22 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r22 ? null : data_r22; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r22[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r22 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    const data_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r23.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r23)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c4, f_r23, position_r26, data_r25, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_Template, 2, 10, "div", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r23 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r23.unique_id));
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "button", 48);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r27); const data_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r25 ? null : data_r25; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r25[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r25 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r25 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_Template, 2, 1, "ng-container", 50)(2, CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template, 3, 1, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable");
} }
function CeeTableComponent_ng_container_0_table_3_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_Template, 3, 6, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r28 = i0.ɵɵnextContext();
    const data_r30 = ctx_r28.$implicit;
    const position_r31 = ctx_r28.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r28.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r28)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c4, f_r28, position_r31, data_r30, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r28 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r28.unique_id));
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r31 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r31)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r31)("rootData", ctx_r1.rootData);
} }
function CeeTableComponent_ng_container_0_table_3_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34)(1, "div", 53);
    i0.ɵɵtemplate(2, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_Template, 2, 1, "ng-container", 50)(3, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_3_Template, 2, 5, "ng-container", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r30 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r30 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableComponent_ng_container_0_table_3_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 55);
} }
function CeeTableComponent_ng_container_0_table_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 56);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_tr_14_Template_tr_click_0_listener() { const row_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r33)); })("contextmenu", function CeeTableComponent_ng_container_0_table_3_tr_14_Template_tr_contextmenu_0_listener() { const row_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r33, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate4("cee-table-row ", ctx_r1.selctedRow === row_r33 ? "cee-selected-row" : "", " ", ctx_r1.expandedElement === row_r33 ? "cee-expanded-row" : "", " ", row_r33 && row_r33.rowData && row_r33.rowData.conditionalCustomClass ? row_r33.rowData.conditionalCustomClass : "", " ", ctx_r1.type == "Table-Multi-Select" ? ctx_r1.storeData.includes(row_r33) ? "table-item-checked" : "table-item-unchecked" : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 57);
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r34 && row_r34.rowData && row_r34.rowData.conditionalCustomClass ? row_r34.rowData.conditionalCustomClass : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 57);
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r35 && row_r35.rowData && row_r35.rowData.conditionalCustomClass ? row_r35.rowData.conditionalCustomClass : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 23, 1);
    i0.ɵɵlistener("resize", function CeeTableComponent_ng_container_0_table_3_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableComponent_ng_container_0_table_3_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); });
    i0.ɵɵelementContainerStart(2, 24);
    i0.ɵɵtemplate(3, CeeTableComponent_ng_container_0_table_3_th_3_Template, 2, 1, "th", 16)(4, CeeTableComponent_ng_container_0_table_3_td_4_Template, 3, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, CeeTableComponent_ng_container_0_table_3_ng_container_5_Template, 4, 3, "ng-container", 26);
    i0.ɵɵelementContainerStart(6, 27);
    i0.ɵɵtemplate(7, CeeTableComponent_ng_container_0_table_3_th_7_Template, 3, 0, "th", 16)(8, CeeTableComponent_ng_container_0_table_3_td_8_Template, 3, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 28);
    i0.ɵɵtemplate(10, CeeTableComponent_ng_container_0_table_3_td_10_Template, 2, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 29);
    i0.ɵɵtemplate(12, CeeTableComponent_ng_container_0_table_3_td_12_Template, 4, 9, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(13, CeeTableComponent_ng_container_0_table_3_tr_13_Template, 1, 0, "tr", 30)(14, CeeTableComponent_ng_container_0_table_3_tr_14_Template, 1, 6, "tr", 31)(15, CeeTableComponent_ng_container_0_table_3_tr_15_Template, 1, 3, "tr", 32)(16, CeeTableComponent_ng_container_0_table_3_tr_16_Template, 1, 3, "tr", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(15, _c1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c2));
} }
function CeeTableComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template_button_click_0_listener() { const pageNumber_r37 = i0.ɵɵrestoreView(_r36).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r37)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r37 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("active", pageNumber_r37 === ctx_r1.pagination.currentPage);
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r37, "");
    i0.ɵɵproperty("disabled", pageNumber_r37 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pageNumber_r37, " ");
} }
function CeeTableComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template, 2, 6, "button", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
} }
function CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 64);
    i0.ɵɵlistener("page", function CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onPaginationChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems);
} }
function CeeTableComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_ng_container_5_div_1_Template, 2, 1, "div", 59)(2, CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template, 1, 1, "mat-paginator", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationStyle !== "material" && ctx_r1.autoPagination);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.paginationStyle === "material");
} }
function CeeTableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 3);
    i0.ɵɵlistener("scroll", function CeeTableComponent_ng_container_0_Template_ng_container_scroll_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onScroll($event)); });
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_mat_form_field_1_Template, 2, 2, "mat-form-field", 4)(2, CeeTableComponent_ng_container_0_table_2_Template, 4, 7, "table", 5)(3, CeeTableComponent_ng_container_0_table_3_Template, 17, 17, "table", 6)(4, CeeTableComponent_ng_container_0_div_4_Template, 2, 1, "div", 7)(5, CeeTableComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loaded && ctx_r1.dataSource.filteredData.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound && ctx_r1.showPagination);
} }
function CeeTableComponent_ng_template_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r39 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r39.field_label);
} }
function CeeTableComponent_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_1_label_1_Template, 4, 1, "label", 68);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableComponent_ng_template_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const expandedDetail_r43 = ctx_r39.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r43 && f_r39.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(16, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42 && data_r42["rowData"] && data_r42["rowData"][f_r39.unique_id] ? data_r42["rowData"][f_r39.unique_id] : i0.ɵɵpureFunction0(8, _c5), f_r39, i0.ɵɵpureFunction3(12, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(9, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-switch", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("fieldData", f_r39)("rootData", ctx_r1.rootData)("rowData", data_r42["rowData"])("keepState", true);
} }
function CeeTableComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-cee-table", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionData", f_r39)("rootData", ctx_r1.rootData)("rowData", data_r42["rowData"][f_r39.unique_id])("stepId", ctx_r1.stepId)("type", f_r39.field_type);
} }
function CeeTableComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap["List"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, f_r39.field_type));
} }
function CeeTableComponent_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, f_r39.field_type));
} }
function CeeTableComponent_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(7, _c10, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39));
} }
function CeeTableComponent_ng_template_1_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r39 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r39.field_label);
} }
function CeeTableComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_12_div_1_Template, 4, 1, "div", 73);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const data_r42 = ctx_r39.data;
    const expandedDetail_r43 = ctx_r39.expandedDetail;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r43);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r42["rowData"][f_r39.unique_id].value, " ");
} }
function CeeTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 65);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_1_Template, 5, 22, "ng-container", 66)(2, CeeTableComponent_ng_template_1_ng_container_2_Template, 2, 8, "ng-container", 66)(3, CeeTableComponent_ng_template_1_ng_container_3_Template, 4, 20, "ng-container", 66)(4, CeeTableComponent_ng_template_1_ng_container_4_Template, 4, 20, "ng-container", 66)(5, CeeTableComponent_ng_template_1_ng_container_5_Template, 4, 20, "ng-container", 66)(6, CeeTableComponent_ng_template_1_ng_container_6_Template, 4, 20, "ng-container", 66)(7, CeeTableComponent_ng_template_1_ng_container_7_Template, 4, 20, "ng-container", 66)(8, CeeTableComponent_ng_template_1_ng_container_8_Template, 3, 8, "ng-container", 66)(9, CeeTableComponent_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 66)(10, CeeTableComponent_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 66)(11, CeeTableComponent_ng_template_1_ng_container_11_Template, 4, 12, "ng-container", 66)(12, CeeTableComponent_ng_template_1_ng_container_12_Template, 3, 2, "ng-container", 67);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r39 = ctx.f;
    i0.ɵɵproperty("ngSwitch", f_r39.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Switch");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", f_r39.field_type === "List" || f_r39.field_type === "List-Expandable" ? f_r39.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
} }
var ELEMENT_DATA = Array(10);
// if you want to use $ as an alias
const $ = jQuery;
class CeeTableComponent {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    cdRef;
    _ceeApiService;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    paginateValue;
    fieldData = [];
    sectionData;
    type;
    rowData;
    rootData;
    primaryKeyIndex;
    sortDirection = '';
    dataSourceLoading = ELEMENT_DATA;
    dataSource = new MatTableDataSource([]);
    displayedColumns = [];
    headers;
    hidenRows = [];
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    pageItems;
    paginator;
    sort;
    showPagination = false;
    showFilter = false;
    filterPlaceholderText = 'Filter';
    selection = new SelectionModel(true, []);
    showSkeletonLoader = true;
    apiData = [];
    apiDataCopy = [];
    displayValues = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    isVisible = false;
    extraTableCell = 0;
    additionalParameters = {};
    selctedRow;
    currentPage = 1;
    pageSize = 10; // default, can be from pageItems
    totalPages = 0;
    pagesToShow = [];
    fullData = []; // will store all rows
    paginationStyle = 'material';
    autoPagination = true;
    pagination = {
        currentPage: 1,
        currentItemCount: 10,
        pageCount: 1,
        itemCount: 0,
        pageItems: [10, 20, 50, 100],
        startIndex: 0,
        endIndex: 10,
        paginationRange: 10
    };
    pages = [];
    totalItems = 0;
    noDataFound = false;
    paginationFirstLabel = 'First';
    paginationLastLabel = 'Last';
    setAPIKeyUtil;
    wfeEventListHandler;
    hidenRowsField;
    tableHiddenGeneric = false;
    loaded = false;
    paginationNextLabel = 'Next';
    paginationPreviousLabel = 'Previous';
    noDataFoundLabel = 'no record found.';
    enableSort = [];
    serverPagination = false;
    paginationApiKeys = [];
    filterAPIKey;
    paginationShowingResultHint = '%value%';
    is_bootstrap = false;
    bootstrap_class_name;
    blockRenderedData;
    filterKeys = [];
    commonUtil;
    apiKeyUtil;
    responsive = false;
    isListCell = false; // set true if the fields in generic block is ListCell
    listCellEventConfig = []; // set List Cell Event Config
    displayedFields = []; // unique IDs array when the user configures a list cell inside the generic block
    tableCellAppData = {
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
        visible: true,
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
    conditionalUtil;
    setDynamicLabelUtil;
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    variableObject = {}; // variable object
    filterValue = '';
    resultCountAPIKey = "";
    dynamicColumnWidth;
    paginationPageIndex;
    paginationPageSize;
    paginationTotalCount;
    firstLoad = true;
    hasRowConditionField;
    hasRowConditionSelect;
    isSeletable;
    html_id = '';
    isCustomClass = true;
    additionalParametersfields = {};
    contextMenu;
    presetData;
    // isDisplayBlankColumn: any = true;
    lazyInterval = [];
    rowDataLoading = false;
    tableData = [];
    tableDataLazy = [];
    serverSort = false;
    sortApiKeys = [];
    freezeSort = false;
    sortApiValues = [];
    stopPaginationEvent = false;
    paginationSeparator = "/";
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('./ng-cee-core-cee-label.component-3Du0Wv_U.mjs').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Menu: defer(() => {
            if (!this.componentList['Menu']) {
                this.componentList['Menu'] = import('./ng-cee-core-cee-menu.component-DrjJlxBz.mjs').then(m => m.CeeMenuComponent);
            }
            return this.componentList['Menu'];
        }),
        Image: defer(() => {
            if (!this.componentList['Image']) {
                this.componentList['Image'] = import('./ng-cee-core-cee-image.component-DItsEZaO.mjs').then(m => m.CeeImageComponent);
            }
            return this.componentList['Image'];
        }),
        Picker: defer(() => {
            if (!this.componentList['Picker']) {
                this.componentList['Picker'] = import('./ng-cee-core-cee-picker.component-DQznZ6Qo.mjs').then(m => m.CeePickerComponent);
            }
            return this.componentList['Picker'];
        }),
        Button: defer(() => {
            if (!this.componentList['Button']) {
                this.componentList['Button'] = import('./ng-cee-core-ng-cee-core-B-GWW1tg.mjs').then(function (n) { return n.a4; }).then(m => m.CeeButtonComponent);
            }
            return this.componentList['Button'];
        }),
        List: defer(() => {
            if (!this.componentList['List']) {
                this.componentList['List'] = import('./ng-cee-core-list-renderer.component-nDakO_mU.mjs').then(m => m.ListRendererComponent);
            }
            return this.componentList['List'];
        }),
        DynamicForm: defer(() => {
            if (!this.componentList['DynamicForm']) {
                this.componentList['DynamicForm'] = import('./ng-cee-core-dynamic-form.component-Cm25oDxC.mjs').then(m => m.DynamicFormComponent);
            }
            return this.componentList['DynamicForm'];
        }),
        ToggleButton: defer(() => {
            if (!this.componentList['ToggleButton']) {
                this.componentList['ToggleButton'] = import('./ng-cee-core-cee-toggle-button.component-EBCs3K3e.mjs').then(m => m.CeeToggleButtonComponent);
            }
            return this.componentList['ToggleButton'];
        }),
        TreeView: defer(() => {
            if (!this.componentList['TreeView']) {
                this.componentList['TreeView'] = import('./ng-cee-core-tree-renderer.component-W51n06MU.mjs').then(m => m.TreeRendererComponent);
            }
            return this.componentList['TreeView'];
        })
    };
    setFromStoreInfo = {
        enabled: false,
        apiKey: ""
    };
    timeoutIds = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, cdRef, _ceeApiService, router) {
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
        this._ceeApiService = _ceeApiService;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    trackByunique_id(index, item) {
        return item.unique_id;
    }
    onSort({ column, direction }) {
        // this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        // resetting other headers
        this.headers.forEach((header) => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        // sorting
        if (!this.serverSort) {
            if (direction === '' || column === '') {
                this.apiDataCopy = this.apiData;
            }
            else {
                this.apiDataCopy = [...this.apiData].sort((a, b) => {
                    const res = isNaN(b[column]) ? a[column].localeCompare(b[column]) : a[column] - (b[column]);
                    return direction === 'asc' ? res : -res;
                });
            }
            this.loadTableData(this.apiDataCopy);
        }
        this.sortChangeSetValue(column, direction);
    }
    matSortChange(sort) {
        this.sortChangeSetValue(sort.active, sort.direction);
    }
    sortChangeSetValue(column, direction) {
        if (this.freezeSort) {
            return;
        }
        if (this.sortApiKeys && this.sortApiKeys.length === 2) {
            let sortField = this.fieldData.find(f => f.unique_id === column);
            this.setPrimaryKey({
                name: this.sortApiKeys[0],
                value: sortField && sortField.response_api_key ? sortField.response_api_key : ''
            });
            this.setPrimaryKey({
                name: this.sortApiKeys[1],
                value: direction
            });
        }
        this.onComponentEvent('OnSortButtonClick');
    }
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }
    onScroll(event) {
        this.onScrollevent('OnRightClick', {});
    }
    onScrollevent(type, primaryData = {}, isDefault = true, payLoad, displayType = '') {
        for (let i = 0; i <= this.fieldData.length; i++) {
            if (this.fieldData[i]?.event_list && this.fieldData[i]?.event_list.length > 0) {
                this.wfeEventListHandler.onComponentEventBatch(this.fieldData[i], this.presetData, this.stepId, type, primaryData, isDefault, payLoad, displayType);
            }
        }
    }
    onResize() {
        if (this.responsive) {
            const el = $('#table_' + this.sectionData.unique_id);
            el.css({ display: 'block', overflow: 'hidden' });
            const timeoutId = setTimeout(() => {
                let colCount = el.find('> thead > tr > th').length;
                el.find('> thead > tr > th').show();
                el.find('> tbody > tr.cee-table-row > td').show();
                el.find('> tbody > tr.cee-resp-row .cee-table-detail-cell').show();
                while (el.innerWidth() < el.find('> thead').outerWidth() && colCount > 1) {
                    el.find('> thead > tr > th:nth-child(' + colCount + ')').hide();
                    el.find('> tbody > tr.cee-table-row > td:nth-child(' + colCount + ')').hide();
                    colCount--;
                }
                for (let i = 0; i < colCount; i++) {
                    el.find('> tbody > tr.cee-resp-row .cee-table-detail-cell:nth-child(' + (i + 1) + ')').hide();
                }
                el.css({ display: 'table' });
                el.find('> tbody > tr.cee-table-row').removeClass('parent');
                el.find('> tbody > tr.cee-table-row > td:nth-child(1)').removeClass('r-control').unbind();
                el.find('tr.cee-resp-row .cee-table-resp').animate({ height: '0' }, 225);
                if (el.find('> thead > tr > th').length > colCount) {
                    el.find('> tbody > tr.cee-table-row > td:nth-child(1)').addClass('r-control').click(function () {
                        const parent = $(this).parent('tr');
                        const child = parent.next('.cee-resp-row').find('.cee-table-resp');
                        if (!parent.hasClass('parent')) {
                            parent.addClass('parent');
                            child.css({ height: 'auto' });
                            const tempH = child.height();
                            child.css({ height: '0' }).animate({ height: tempH }, 225);
                        }
                        else {
                            parent.removeClass('parent');
                            child.animate({ height: '0' }, 225);
                        }
                    });
                }
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    modifyFieldValue(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let partss = param.value.split('|');
                                if (Array.isArray(partss) && partss.length > 1) {
                                    param.value = this.transformString(i, param.value, gBlockId);
                                }
                                else {
                                    param.value = `${gBlockId}$${param.value}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValue(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    getNewFields(i, fields, gBlockId) {
        if (fields.length > 0) {
            fields.map(x => {
                this.modifyFieldValue(i, x, gBlockId);
            });
        }
        return fields;
    }
    ngOnInit() {
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.tableCellAppData.stepId = this.stepId;
        const { additional_parameters, unique_id, event_list } = this.sectionData;
        if (additional_parameters && additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Show Chips':
                        // this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Values':
                        this.pageItems = paramter.value.split('|').map(s => +s.trim());
                        this.pagination.currentItemCount = this.pagination.pageItems[0];
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
                        break;
                    case 'Pagination Style':
                        this.paginationStyle = (paramter.value === 'material') ? 'material' : 'bootstrap';
                        break;
                    case 'Pagination Previous Label':
                        this.paginationPreviousLabel = paramter.value !== '' ? paramter.value : 'Previous';
                        break;
                    case 'Pagination Showing Result Hint':
                        this.paginationShowingResultHint = paramter.value !== '' ? paramter.value : '%value%';
                        break;
                    case 'No Data Found Label':
                        this.noDataFoundLabel = paramter.value !== '' ? paramter.value : 'no record found.';
                        break;
                    // case 'CEE_display_blank_column':
                    //     this.isDisplayBlankColumn = paramter.value.toLowerCase() === 'true' ? true : false;
                    //     break;
                    case 'FilterKeys':
                        this.filterKeys = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'FilterAPIKey':
                        this.filterAPIKey = paramter.value;
                        break;
                    case 'Filter Placeholder Text':
                        this.filterPlaceholderText = paramter.value;
                        break;
                    case 'Set from store':
                        if (paramter.value === 'true') {
                            // * Only works if the api key is multiple
                            // * for list to show the data from handler
                            // * handler data needs to be stored in the
                            // * api data store
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                this.setFromStoreInfo = {
                                    enabled: true,
                                    apiKey: this.sectionData.response_api_key
                                };
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
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'Table-Expandable' ? paramter.value
                                .split('|').map(s => s.trim()) : [];
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'Table-Expandable' ? paramter.value : this.expandTitle;
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'Table-Expandable' ? paramter.value : this.collapseTitle;
                        break;
                    case 'EnableSort':
                        this.enableSort = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'Pagination Type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverPagination = true;
                        }
                        break;
                    case 'Pagination API Keys':
                        this.paginationApiKeys = paramter.value.split('||').map(s => s.trim());
                        break;
                    case 'Responsive':
                        this.responsive = paramter.value === 'true' ? true : false;
                        break;
                    case 'Result Count API Key':
                        this.resultCountAPIKey = paramter.value;
                        break;
                    case 'CEE_expand_column_width':
                        this.dynamicColumnWidth = paramter.value;
                        break;
                    case 'CEE_sort_type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverSort = true;
                        }
                        break;
                    case 'CEE_sort_api_keys':
                        this.sortApiKeys = [];
                        const sortApiKeyArr = paramter.value.split('||').map(s => s.trim());
                        if (sortApiKeyArr.length === 2) {
                            const sortApiKeySet1 = sortApiKeyArr[0].split('|').map(s => s.trim());
                            this.sortApiKeys.push(sortApiKeySet1[0]);
                            const sortApiKeySet2 = sortApiKeyArr[1].split('|').map(s => s.trim());
                            this.sortApiKeys.push(sortApiKeySet2[0]);
                            if (sortApiKeySet1[1] && sortApiKeySet2[1]) {
                                this.sortApiValues = [sortApiKeySet1[1], sortApiKeySet2[1]];
                                this.setDefaultSort();
                            }
                        }
                        break;
                    case 'Pagination Separator':
                        this.paginationSeparator = paramter.value.toLowerCase();
                        break;
                }
            }
        }
        if (unique_id) {
            // let blockCache = this.wfeStepLoaderService.searchBlockDataFromCache(this.additionalParameters['default_value']);
            // if(blockCache) {
            //     this.processBlockData(blockCache,fromStore,event_list);
            // } else if(localStorage.getItem('lastBlockLoaded') != this.additionalParameters['default_value']) {
            //     localStorage.setItem('lastBlockLoaded', this.additionalParameters['default_value'])
            this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise().then((data) => {
                // let blockData = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
                // let cacheData = ( blockData && blockData.length > 0 ) ? blockData.filter(el => el.block_id == this.additionalParameters['default_value']) : [];
                // if(cacheData && cacheData.length == 0) {
                //     blockData.push({block_id: this.additionalParameters['default_value'], block_data: data});
                //     localStorage.setItem('blockDataCache', JSON.stringify({data : blockData}))
                // }
                let setData;
                if (this.rowData) {
                    setData = data;
                    let newId = this.rowData.unique_id.split("$");
                    let newData = this.getNewFields(newId[2], setData.block_fields, newId[0]);
                    setData.block_fields = newData;
                }
                else {
                    setData = data;
                }
                this.processBlockData(setData, fromStore, event_list);
            });
            // }
            if (this.serverPagination) {
                // 0 th key for total No of values
                // 1st key for page number
                // 2nd key for page size
                if (this.serverPagination && this.paginationApiKeys.length < 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                if (this.paginationApiKeys[3] !== 'false') {
                    this.paginationPageIndex = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[1]);
                    this.paginationPageSize = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[2]);
                    this.paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
                }
                // setting default value
                const values = [
                    this.paginationTotalCount && this.paginationTotalCount.value ? this.paginationTotalCount.value : 0,
                    this.paginationPageIndex && this.paginationPageIndex.value ? this.paginationPageIndex.value : 1,
                    this.paginationPageSize && this.paginationPageSize.value ? this.paginationPageSize.value : this.pageItems[0]
                ];
                // tslint:disable-next-line: forin
                for (const i in this.paginationApiKeys) {
                    this.setPrimaryKey({
                        name: this.paginationApiKeys[i],
                        value: values[i]
                    });
                }
            }
            if (this.rowData && this.rowData.hasOwnProperty('visible')) {
                this.isVisible = this.rowData.visible;
            }
            else {
                this.variableObject['emitOnDataSetOrUpdated_' + unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                    this.refreshColumnRowOnDataChange();
                    this.onFieldDataUpdated(res.apiKey, res.value);
                });
                if (this.sectionData.is_display === 1) {
                    this.isVisible = true;
                }
                else {
                    this.onFieldDataUpdated('', null);
                }
            }
        }
        else {
            this.displayedColumns = this.fieldData
                .map(c => c.unique_id);
            this.isVisible = true;
        }
        if (this.type === 'Table-Single-Select') {
            if (this.storeData.length > 0) {
                this.radioValue = this.storeData[0];
            }
        }
        this.getData();
        this.getDisplayValues().then(values => {
            this.checkPromiseValue(values);
        });
        this.tableHiddenGeneric = localStorage.getItem('tableHiddenGeneric') === 'true' ? true : false;
        // set step id to app data
        this.appData.stepId = this.stepId;
        this.variableObject['emitForEmptySession'] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            if (res) {
                this.onEmptySession(res);
            }
        });
        if (this.pageItems && this.pageItems.length > 0) {
            this.pagination.pageItems = this.pageItems;
            this.pagination.currentItemCount = this.pageItems[0];
        }
    }
    processBlockData(data, fromStore, event_list) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        this.fieldData = this.blockRenderedData.block_fields;
        if (this.fieldData && this.fieldData.length > 0) {
            this.fieldData.forEach(x => {
                if (x?.additional_parameters && x?.additional_parameters.length > 0) {
                    for (const paramter of x.additional_parameters) {
                        this.additionalParametersfields[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'CEE_table_cell_values':
                                x.field_label = x.field_label.includes('((dynamic))') ? this.setDynamicLabelUtil.getDynamicValue(x).field_label : x.field_label;
                                break;
                        }
                    }
                }
                if (this.dynamicColumnWidth) {
                    if (this.dynamicColumnWidth == 'ALL') {
                        x.resizable = 'true',
                            x.width = 100,
                            x.field_style.custom_class_name = x.field_style.custom_class_name + " resizeNew";
                    }
                    else {
                        let dynamicWidthIds = this.dynamicColumnWidth.split('|');
                        if (dynamicWidthIds.includes(x.unique_id)) {
                            x.resizable = 'true',
                                x.width = 100,
                                x.field_style.custom_class_name = x.field_style.custom_class_name + " resizeNew";
                        }
                    }
                }
                if (this.enableSort.length > 0) {
                    if (this.enableSort.includes(x.unique_id)) {
                        x.sorting = true;
                    }
                }
                else {
                    x.sorting = true;
                }
            });
        }
        this.refreshColumnRowOnDataChange();
        if (this.type == 'Table-Single-Select' || this.type == 'Table-Multi-Select') {
            this.displayedColumns.unshift('Select');
            this.extraTableCell = 1;
        }
        else if (this.type === 'Table-Expandable') {
            this.displayedColumns.push('expandableOption');
        }
        this.returnFieldIdMapApiKey();
        if (this.rowData && this.rowData.value && Array.isArray(this.rowData.value)) {
            this.loadTableData(this.rowData.value);
        }
        else {
            // call the api event success emitter
            if (fromStore) {
                const _this = this;
                const timeoutId = setTimeout(() => {
                    this.onAPICallback(fromStore);
                }, 0);
                this.timeoutIds.push(timeoutId);
            }
        }
        if (event_list && event_list.length > 0) {
            for (const sevent of JSON.parse(JSON.stringify(event_list))) {
                if (sevent.isDefault && sevent.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(sevent, event_list);
                }
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
        if (this.sectionData['custom_class_condition'] && this.sectionData['custom_class_condition'].hasOwnProperty('query') && this.sectionData['custom_class_condition']['query'] != '') {
            let customClassCondition = this.conditionalUtil.checkCustomClass(this.sectionData, String(this.appData.id), value);
            if (customClassCondition !== undefined) {
                this.isCustomClass = customClassCondition;
            }
        }
    }
    refreshColumnRowOnDataChange() {
        if (!Array.isArray(this.fieldData)) {
            return;
        }
        var displayedColTmp = this.displayedColumns;
        this.displayedColumns = this.fieldData
            ?.filter(c => {
            // set is list cell to true and
            // set List Cell Config
            if (c.field_type === 'Listcell') {
                this.isListCell = true;
                this.listCellEventConfig = c.event_list;
                this.isSeletable = c.is_editable;
                if (c.is_display === 2) {
                    this.hasRowConditionField = c;
                }
                if (c.is_editable === 2) {
                    this.hasRowConditionSelect = c;
                }
            }
            let isDisplayBlankColumn = c.additional_parameters.filter(a => { if (a.parameter_type === "CEE_display_blank_column") {
                return a;
            } });
            if (isDisplayBlankColumn.length > 0 && isDisplayBlankColumn[0].value.toLowerCase() != "true") {
                if (c.is_display === 2) {
                    const visible = this.conditionalUtil.checkVisibility(c, c.unique_id, '');
                    return visible ? c : null;
                }
            }
            if (!this.hidenRows.includes(c.unique_id)) {
                this.displayedFields.push(c);
                return c.unique_id;
            }
        }).map(c => c.unique_id);
        if (displayedColTmp.includes('expandableOption') && !this.displayedColumns.includes('expandableOption')) {
            this.displayedColumns.push('expandableOption');
        }
    }
    setPrimaryKey = (data) => {
        if (data.name && data.hasOwnProperty('value')) {
            const apiData = {
                id: data.name,
                apiUrl: '',
                apiKey: data.name,
                value: data.value
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    };
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
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
    }
    getDisplayValues = () => {
        return new Promise((resolve, reject) => {
            this.displayLogic();
            resolve(this.displayValues);
        });
    };
    displayLogic = () => {
        this.displayValues[0] = parseInt(this.paginateValue);
        for (let i = 1; i <= Constant.listDisplayLoopLength; i++) {
            this.displayValues[i] = this.displayValues[i - 1] + Constant.listInitialDisplayValue;
        }
        this.checkCheckedValues();
        return this.displayValues;
    };
    checkPromiseValue = (promiseValue) => {
        for (let i = 0; i < promiseValue.length; i++) {
            if (promiseValue[i] === false || Number.isNaN(promiseValue[i])) {
                this.paginateValue = Constant.listDefaultValue;
                this.displayLogic();
                break;
            }
        }
    };
    getData = () => {
        if (this.rowData) {
            return;
        }
        this.onResize();
        this.variableObject['emitApiSuccessResponse'] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            if (this.rowData?.response_api_key && this.rowData.response_api_key.length === 2) {
                const result = this.setAPIKeyUtil.setApiCallBackData({
                    response_api_key: this.rowData.response_api_key[1]
                }, res);
                if (result) {
                    this.apiData = result;
                }
                this.loadTableData(this.apiData);
            }
            else if (!this.rowData) {
                if (typeof this.selctedRow === 'undefined') {
                    this.refreshColumnRowOnDataChange();
                    const timeoutId = setTimeout(() => {
                        this.onAPICallback(res);
                    }, 0);
                    this.timeoutIds.push(timeoutId);
                }
                else if (this.setFromStoreInfo.enabled) {
                    if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                        const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.setFromStoreInfo.apiKey);
                        const handlerExists = apiKeys.find(item => item.includes(res.handler_name));
                        if (handlerExists) {
                            this.onAPICallback(res);
                        }
                    }
                }
            }
        }, err => {
            console.error(err);
        });
        this.variableObject['searchFilterEmitter'] = this.sharedEventsService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterValue = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.dataSource, data['filterCol']);
                this.applyFilter();
            }
        });
    };
    onAPICallback(res) {
        let totalPageObj = {};
        // check if server side pagination and then store the data for the totalNo Of Pages
        if (this.serverPagination) {
            // setting total Number of values
            const totalPage = this.setAPIKeyUtil.setApiCallBackData(this.paginationApiKeys[0], res);
            // setting current page number
            const currPage = this.setAPIKeyUtil.setApiCallBackData(this.paginationApiKeys[1], res);
            if (currPage) {
                this.paginator.pageIndex = Number(currPage);
            }
            if (totalPage) {
                // set total no of pages
                totalPageObj = {
                    name: this.paginationApiKeys[0],
                    value: totalPage
                };
            }
        }
        if ((this.isSingleAPIKey ? this.sectionData.api_key : this.sectionData.response_api_key) !== '') {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                this.apiData = result;
            }
        }
        else if (Array.isArray(res)) {
            this.apiData = res;
        }
        else {
            return;
        }
        this.loadTableData(this.apiData);
        this.cdRef.detectChanges();
        this.setTotalCountAppData(this.serverPagination && totalPageObj['value'] ? totalPageObj['value'] : this.apiData.length);
        if (this.showPagination && this.paginator) {
            this.paginator._intl.nextPageLabel = this.paginationNextLabel;
            this.paginator._intl.previousPageLabel = this.paginationPreviousLabel;
            this.paginator._intl.getRangeLabel = this.getRangeLabel;
            if (this.firstLoad) {
                this.paginator.pageIndex = this.paginationPageIndex ? this.paginationPageIndex.value - 1 : this.paginator.pageIndex;
                this.paginator.pageSize = this.paginationPageSize ? this.paginationPageSize.value : this.paginator.pageSize;
                this.firstLoad = false;
            }
            if (!this.serverPagination) {
                this.dataSource.paginator = this.paginator;
                if (this.filterKeys.length) {
                    this.dataSource.filterPredicate = (data, filter) => {
                        let found = false;
                        for (const col in data) {
                            if (this.filterKeys.includes(col) && data[col].toString().toLowerCase().indexOf(filter) != -1) {
                                found = true;
                            }
                        }
                        return found;
                    };
                }
            }
            else {
                if (Object.keys(totalPageObj).length > 0) {
                    this.paginator.length = totalPageObj['value'];
                    this.setPrimaryKey(totalPageObj);
                }
            }
            ELEMENT_DATA = Array(this.paginator.pageSize);
            this.dataSourceLoading = ELEMENT_DATA;
            this.cdRef.detectChanges();
        }
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
            return result;
        }
        else {
            return res;
        }
    }
    checkRowEditable(res) {
        const result = [];
        if (this.hasRowConditionSelect) {
            for (const rdata of res) {
                const editableCondition = this.conditionalUtil.checkEditable(this.hasRowConditionSelect, this.hasRowConditionSelect.unique_id, '', this.returnUniqueIdMapApiValue(rdata));
                rdata['isSelectable'] = false;
                if (editableCondition) {
                    rdata['isSelectable'] = true;
                }
                result.push(rdata);
            }
            // console.log("Row Set: ", result)
        }
        else {
            for (const rdata of res) {
                rdata['isSelectable'] = true;
                result.push(rdata);
            }
        }
        return result;
    }
    loadTableData(apiData) {
        if (!this.blockRenderedData) {
            return;
        }
        for (let i = 0; i < apiData.length; i++) {
            let data = apiData[i];
            if (data.hasOwnProperty('rowData')) {
                continue;
            }
            // data['rowData'] = {}; existing line for extensible
            // new block is below
            if (!Object.isExtensible(data)) {
                data = { ...data, rowData: {} };
                apiData[i] = data;
            }
            else {
                data['rowData'] = {};
            }
            for (const f of this.fieldData) {
                data['rowData'][f.unique_id] = this.getRowDataValue(data, f, i);
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            data['rowData']['conditionalCustomClass'] = this.getConditionalClass(uiApiValue, false) ? this.blockRenderedData.block_style.custom_class_name : '';
        }
        // Assign the data to the data source for the table to render
        this.tableData = apiData;
        this.tableData = this.checkRowVisibility(this.tableData);
        this.tableData = this.checkRowEditable(this.tableData);
        this.dataSource = new MatTableDataSource();
        this.setDefaultSort();
        if (!this.serverSort) {
            this.dataSource.sort = this.sort;
        }
        // this.showSkeletonLoader = false;
        this.loaded = true;
        this.onResize();
        // Skip lazy loading for bootstrap pagination
        if (this.paginationStyle === 'bootstrap' && this.showPagination) {
            // Directly set tableDataLazy and initialize pagination
            this.tableDataLazy = [...this.tableData];
            this.rowDataLoading = false;
            this.showSkeletonLoader = false;
            this.pagination.itemCount = this.tableDataLazy.length;
            this.totalItems = this.tableDataLazy.length;
            this.noDataFound = this.tableDataLazy.length === 0;
            this.onPaginationCountChange(); // This will call performPagination()
            // Hide the modal popup loader if it running
            const modalWrapper = window.document.querySelector('.loader-overlay');
            if (modalWrapper) {
                modalWrapper.style.visibility = 'hidden';
            }
        }
        else {
            // Use lazy loading for material pagination
            this.lazyLoading();
        }
    }
    setDefaultSort() {
        if (this.sortApiKeys && this.sortApiKeys.length === 2) {
            let sortByValue, sortTypeValue;
            const sortBy = this.apiDataService.getApiDataByApiKey(this.sortApiKeys[0]);
            const sortType = this.apiDataService.getApiDataByApiKey(this.sortApiKeys[1]);
            if (sortBy && sortBy.hasOwnProperty('value') && sortType && sortType.hasOwnProperty('value')) {
                sortByValue = sortBy.value;
                sortTypeValue = sortType.value;
            }
            else if (this.sortApiValues.length === 2) {
                this.setPrimaryKey({
                    name: this.sortApiKeys[0],
                    value: this.sortApiValues[0]
                });
                this.setPrimaryKey({
                    name: this.sortApiKeys[1],
                    value: this.sortApiValues[1]
                });
                sortByValue = this.sortApiValues[0];
                sortTypeValue = this.sortApiValues[1];
            }
            if (sortByValue && sortTypeValue) {
                let sortField = this.fieldData ? this.fieldData.find(f => f.response_api_key === sortByValue) : '';
                this.freezeSort = true;
                let sDirection = '';
                switch (sortTypeValue) {
                    case 'asc':
                        sDirection = "asc";
                        break;
                    case 'desc':
                        sDirection = "desc";
                        break;
                    default:
                        sDirection = "";
                        break;
                }
                const sortState = {
                    active: sortField && sortField.unique_id ? sortField.unique_id : '',
                    direction: sDirection
                };
                if (!this.dynamicColumnWidth && this.sort) {
                    this.sort.active = sortState.active;
                    this.sort.direction = sortState.direction;
                    this.sort.sortChange.emit(sortState);
                }
                else if (this.headers) {
                    this.headers.forEach((header) => {
                        if (header.sortable === sortState.active) {
                            header.direction = sortTypeValue;
                            header.sorting = 'true';
                            header.sort.emit({ column: sortState.active, direction: sortTypeValue });
                        }
                    });
                }
                this.freezeSort = false;
            }
        }
    }
    ngAfterViewChecked() {
        if (!this.serverSort && this.sort && !this.dataSource.sort) {
            this.dataSource.sort = this.sort;
        }
    }
    getRowDataValue(data, field, list_pos) {
        const apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        data[field.unique_id] = apiData;
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        //For additional params as key:value pairs 
        const additionalParams = field.additional_parameters.reduce((acc, curr) => {
            acc[curr.parameter_type] = curr.value;
            return acc;
        }, {});
        //Check of field has response_api_key && additionalParams has CEE_table_cell_values
        if (additionalParams.hasOwnProperty("CEE_table_cell_values") && field.response_api_key.length > 0) {
            if (additionalParams.hasOwnProperty("CEE_Thousand_Separator") && (additionalParams["CEE_Thousand_Separator"]).toLowerCase() == 'true') {
                data[field.response_api_key] = this.commonUtil.formatNumber(data[field.response_api_key]);
                if (data[field.response_api_key] != '' && data[field.response_api_key] != null && data[field.response_api_key] != undefined && !data[field.response_api_key].includes('.')) {
                    data[field.response_api_key] += '.00';
                }
            }
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        let value = '';
        value = (field && field.field_type && (field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))') ||
            (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
            this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
            labelType === 'STATIC' ? field.field_label : apiData;
        if (field.additional_parameters && field.additional_parameters.length > 0) {
            for (let i = 0; i <= field.additional_parameters.length; i++) {
                if (field.additional_parameters[i]?.parameter_type === "CEE_table_cell_values") {
                    let dynamicVal = this.setDynamicLabelUtil.getDynamicValue(field, data).additional_parameters_config;
                    let dynamicPosition = dynamicVal.substr(dynamicVal.length - 1);
                    let lPosition = dynamicVal.slice(0, -1);
                    if (dynamicPosition == 's') {
                        value = lPosition + ' ' + apiData;
                    }
                    else if (dynamicPosition == 'e') {
                        value = apiData + ' ' + lPosition;
                    }
                    else if (dynamicPosition == 'n') {
                        value = lPosition;
                    }
                    else {
                        value = apiData;
                    }
                }
            }
        }
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            let isEditable = false;
            let isVisible = false;
            let skipisDisplayCheck = false;
            if (field.is_editable === 1) {
                isEditable = true;
            }
            if (field.is_display === 1) {
                isVisible = true;
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            let isDisplayBlankColumn = field.additional_parameters.filter(a => { if (a.parameter_type === "CEE_display_blank_column") {
                return a;
            } });
            if (isDisplayBlankColumn.length > 0 && isDisplayBlankColumn[0].value.toLowerCase() != "true") {
                isVisible = true;
                skipisDisplayCheck = true;
            }
            const obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'Table',
                visible: (field.is_display === 2 && !skipisDisplayCheck) ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: value,
                data: resData
            };
            return obj;
        }
        else {
            return {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'Table',
                value: value,
                data: resData
            };
        }
    }
    lazyLoading() {
        this.tableDataLazy = [];
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        this.rowDataLoading = true;
        this.lazyInterval = setInterval(() => {
            if (this.tableData.length !== this.tableDataLazy.length) {
                this.tableDataLazy.push(this.tableData[this.tableDataLazy.length]);
                this.dataSource.data = this.tableDataLazy;
                this.cdRef.detectChanges();
            }
            else {
                this.rowDataLoading = false;
                this.showSkeletonLoader = false;
                if (this.paginationStyle === 'bootstrap' && this.showPagination) {
                    this.pagination.itemCount = this.tableDataLazy.length;
                    this.totalItems = this.tableDataLazy.length;
                    this.noDataFound = this.tableDataLazy.length === 0;
                    this.onPaginationCountChange(); // This will call performPagination()
                }
                else {
                    this.dataSource.data = this.tableDataLazy;
                }
                this.cdRef.detectChanges();
                clearInterval(this.lazyInterval);
                // Hide the modal popup loader if it running
                const modalWrapper = window.document.querySelector('.loader-overlay');
                if (modalWrapper) {
                    modalWrapper.style.visibility = 'hidden';
                }
            }
        }, 100);
    }
    // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    //     if (this.lazyInterval) {
    //         clearInterval(this.lazyInterval);
    //     }
    //     this.tableDataLazy = [];
    //     this.dataSource.data = this.tableDataLazy;
    // }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(apiResponse)) {
            if (Object.keys(this.fieldIdMapApiKey).includes(key)) {
                const uniqueId = this.fieldIdMapApiKey[key];
                obj[uniqueId] = apiResponse[key];
            }
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
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     */
    getConditionalClass(data, presentValue) {
        const ClassCondition = this.conditionalUtil.checkClass(data, this.blockRenderedData);
        if (ClassCondition) {
            return ClassCondition;
        }
        return presentValue;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.fieldData) {
            this.returnFieldIdMapApiKeyValue(obj, field);
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
    getRangeLabel = (page, pageSize, length) => {
        let pInfo;
        if (this.firstLoad) {
            page = this.paginationPageIndex && this.paginationPageIndex.value ? this.paginationPageIndex.value - 1 : page;
            pageSize = this.paginationPageSize && this.paginationPageSize.value ? this.paginationPageSize.value : pageSize;
            length = this.paginationTotalCount && this.paginationTotalCount.value ? this.paginationTotalCount.value : length;
        }
        if (length === 0 || pageSize === 0) {
            pInfo = `0 ${this.paginationSeparator} ${length}`;
        }
        else {
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            pInfo = `${startIndex + 1} - ${endIndex} ${this.paginationSeparator} ${length}`;
        }
        return String(this.paginationShowingResultHint).replace('%value%', pInfo);
    };
    isSortingDisabled(column) {
        if (this.enableSort.length > 0 && !this.enableSort.includes(column)) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        this.tableDataLazy = [];
        this.dataSource.data = this.tableDataLazy;
        // Clear component references
        this.componentList = {};
        this.componentMap = null;
        // Clear large data structures
        this.apiData = null;
        this.apiDataCopy = null;
        this.tableData = [];
        this.tableDataLazy = [];
        this.blockRenderedData = null;
        this.dataSource.data = [];
        // Clear utility class references
        this.setAPIKeyUtil = null;
        this.wfeEventListHandler = null;
        this.conditionalUtil = null;
        this.setDynamicLabelUtil = null;
        this.commonUtil = null;
        this.apiKeyUtil = null;
        // Clear other object references
        this.fieldIdMapApiKey = {};
        this.variableObject = {};
        this.additionalParameters = {};
        this.additionalParametersfields = {};
    }
    checkCheckedValues() {
        // store the values of the checkedItems
        if (this.type === 'Table-Multi-Select') {
            if (this.storeData.length > 0) {
                this.checkedItems = [];
                for (const singleRes of this.displayValues) {
                    if ((this.storeData).includes(singleRes)) {
                        this.checkedItems.push(singleRes);
                    }
                    else {
                        this.checkedItems.push({});
                    }
                }
            }
        }
    }
    list_change(data, isChecked) {
        if (isChecked) {
            if (this.type === 'Table-Single-Select') {
                this.storeData = [];
                this.radioValue = data;
            }
            this.storeData.push(data);
        }
        else {
            if (this.storeData.length > 0) {
                this.storeData.splice(this.storeData.indexOf(data), 1);
            }
        }
        this.storePrimaryKey();
    }
    storePrimaryKey() {
        for (const additionalParam of this.sectionData.additional_parameters) {
            if (additionalParam.parameter_type === 'PrimaryKeyName') {
                const primaryKeyValue = [];
                for (const data of this.storeData) {
                    primaryKeyValue.push(data[this.getValueformKey(additionalParam.value)]);
                }
                const apiData = {
                    id: this.getPrimaryKey(additionalParam.value),
                    apiUrl: '',
                    apiKey: this.getPrimaryKey(additionalParam.value),
                    value: (this.type === 'Table-Single-Select' ? primaryKeyValue[0] : primaryKeyValue)
                };
                this.apiDataService.setApiData(Object.assign({}, apiData));
                const timeoutId = setTimeout(() => {
                    this.onComponentEvent('OnChangeValue');
                    this.emitForFieldsSectionBlock(apiData);
                }, 0);
                this.timeoutIds.push(timeoutId);
            }
        }
    }
    // Emit on Data Set or Updated
    emitForFieldsSectionBlock(emitObj) {
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj); // For Fields
        this.sharedEventsService.emitOnDataSetOrUpdatedForSection.emit(emitObj); // For Sections
        this.sharedEventsService.emitOnDataSetOrUpdatedForBlock.emit(emitObj); // For Blocks
        this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.emit(emitObj); // For Generic Blocks
    }
    /**
     * trigger event if there has been an event triggered on the table
     * @param name the name of the event
     */
    onComponentEvent(name) {
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData && this.sectionData.event_list && this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.wfeEventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                    }
                }
            }
        }
    }
    getPrimaryKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            return data[0].trim();
        }
        else {
            return key;
        }
    }
    getValueformKey(key) {
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
    applyFilter() {
        if (this.filterAPIKey) {
            this.setPrimaryKey({
                name: this.filterAPIKey,
                value: this.filterValue
            });
        }
        if (!this.serverPagination) {
            this.dataSource.filter = this.filterValue.trim().toLowerCase();
            this.setTotalCountAppData(this.dataSource.filteredData.length);
        }
        this.selection.clear();
        this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.onComponentEvent('OnFilterClick');
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.filter(function (el) { return el['isSelectable'] == true; }).length;
        // console.log("isAllSelected: ",numSelected,"-", numRows,"-", numSelected === numRows)
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((row) => { if (row['isSelectable']) {
                this.selection.select(row);
            } });
        this.storeData = this.selection.selected;
        // console.log("All selected: ", this.storeData)
        this.storePrimaryKey();
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    onPaginationChange(event) {
        // this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.serverPagination) {
            let obj = {};
            for (const key of Object.keys(event)) {
                switch (key) {
                    case 'pageIndex':
                        obj = {
                            name: this.paginationApiKeys[1],
                            value: Number(event[key]) + 1
                        };
                        break;
                    case 'pageSize':
                        obj = {
                            name: this.paginationApiKeys[2],
                            value: event[key]
                        };
                        break;
                    default:
                        break;
                }
                this.setPrimaryKey(obj);
            }
        }
        if (!this.stopPaginationEvent) {
            const { event_list } = this.sectionData;
            if (event_list && event_list.length > 0) {
                for (const evt of JSON.parse(JSON.stringify(event_list))) {
                    if (evt.event_name.toLowerCase() === 'OnPaginationButtonClick'.toLowerCase()) {
                        this.wfeEventListHandler.switchEventDisplayType(evt, event_list);
                    }
                }
            }
        }
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, iscontextMenu = false) {
        this.selctedRow = data;
        // checking the unique ids and storing the data
        this.displayedFields.forEach((field) => {
            if (data[field.unique_id] !== undefined && field.field_type !== "Menu") {
                const obj = {};
                obj.id = field.unique_id;
                obj.value = data[field.unique_id] || '';
                // not using concatenation because child field within list does not support concatenation
                obj.responseApiKey =
                    this.apiKeyUtil.getMultipleApiKeys(field.response_api_key);
                obj.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(field.request_api_key);
                obj.apiKey = field.api_key;
                obj.editable = field.is_editable === 1 ? true : false;
                this.appDataService.setAppData({ ...this.tableCellAppData, ...obj });
            }
        });
        // set unique identifier for repeated table
        const repeatedTableIndex = this.rowData ? this.rowData.repeatedBlockFieldId +
            '|' + this.rowData.position : '';
        localStorage.setItem('repeatedTableIndex', repeatedTableIndex);
        if (this.primaryKeyVal && this.type != 'Table-Multi-Select') {
            this.setPrimaryKey({
                name: this.primaryKeyVal,
                value: data[this.primaryKeyVal]
            });
        }
        if (!iscontextMenu) {
            for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
                }
            }
        }
    }
    /**
     * function returns the clearSession emit
     **/
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.sectionData.unique_id];
        }
        else {
            data = get_data.apiKeys;
            if (this.isSingleAPIKey) {
                unique_id_value = [this.sectionData.api_key];
            }
            else {
                unique_id_value = [...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key))];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.filterValue = '';
                this.applyFilter();
                this.selection.clear();
                this.storeData = this.selection.selected;
                this.storePrimaryKey();
                this.stopPaginationEvent = true;
                this.paginator?.firstPage();
                if (this.pageItems && this.pageItems.length > 0) {
                    if (this.paginator) {
                        this.paginator.pageSize = this.pageItems[0];
                        if (this.paginationApiKeys.length == 3) {
                            let obj = {};
                            obj = {
                                name: this.paginationApiKeys[2],
                                value: this.paginator.pageSize
                            };
                            this.setPrimaryKey(obj);
                        }
                    }
                }
                const timeoutId = setTimeout(() => {
                    this.stopPaginationEvent = false;
                }, 1000);
                this.timeoutIds.push(timeoutId);
                return;
            }
        });
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    isHTML(content) {
        return /<[a-z][\s\S]*>/i.test(content);
    }
    // Bootstrap pagination methods
    paginationPrevious() {
        if (this.pagination.currentPage <= 1) {
            this.pagination.currentPage = 1;
        }
        else {
            this.pagination.currentPage--;
        }
        this.performPagination();
    }
    paginationNext() {
        if (this.pagination.currentPage >= this.pagination.pageCount) {
            this.pagination.currentPage = this.pagination.pageCount;
        }
        else {
            this.pagination.currentPage++;
        }
        this.performPagination();
    }
    setCurrent(num) {
        if (this.isValidPageNumber(num)) {
            this.pagination.currentPage = num;
            this.performPagination();
        }
    }
    isValidPageNumber(num) {
        return (/^\d+$/.test(num) && (0 < num && num <= this.pagination.pageCount));
    }
    onPaginationCountChange(flag = 1) {
        this.pagination.pageCount = Math.ceil(this.pagination.itemCount / this.pagination.currentItemCount);
        if (flag === 1) {
            this.pagination.currentPage = 1;
        }
        this.performPagination();
    }
    setPaginationCount() {
        this.onPaginationCountChange(0);
    }
    performPagination() {
        this.pagination.startIndex = (this.pagination.currentPage - 1) * this.pagination.currentItemCount;
        this.pagination.endIndex = this.pagination.startIndex + this.pagination.currentItemCount;
        this.pagination.endIndex = this.pagination.endIndex > this.pagination.itemCount
            ? this.pagination.itemCount
            : this.pagination.endIndex;
        if (this.pagination.pageCount > 1) {
            this.pages = this.generatePagesArray(this.pagination.currentPage, this.pagination.pageCount, this.pagination.paginationRange);
        }
        else {
            this.pages = [1]; // Show at least page 1 if only one page
        }
        // Apply pagination to data source for bootstrap pagination
        if (this.paginationStyle === 'bootstrap' && this.tableDataLazy && this.tableDataLazy.length > 0) {
            const paginatedData = this.tableDataLazy.slice(this.pagination.startIndex, this.pagination.endIndex);
            this.dataSource.data = paginatedData;
            this.cdRef.detectChanges();
        }
    }
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
    static ɵfac = function CeeTableComponent_Factory(t) { return new (t || CeeTableComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTableComponent, selectors: [["app-cee-table"]], viewQuery: function CeeTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, 5);
            i0.ɵɵviewQuery(MatSort, 5);
            i0.ɵɵviewQuery(SortableHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headers = _t);
        } }, hostBindings: function CeeTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeTableComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { stepId: "stepId", paginateValue: "paginateValue", fieldData: "fieldData", sectionData: "sectionData", type: "type", rowData: "rowData", rootData: "rootData", primaryKeyIndex: "primaryKeyIndex" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], ["table", ""], [3, "scroll", 4, "ngIf"], [3, "scroll"], ["floatLabel", "never", 4, "ngIf"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource", "class", 4, "ngIf"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", 4, "ngIf"], ["class", "no-data-info", 4, "ngIf"], [4, "ngIf"], ["floatLabel", "never"], ["matInput", "", 3, "keyup", "ngModelChange", "placeholder", "ngModel"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cee-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "loading", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col"], ["mat-cell", "", 1, "loading"], [1, "bar"], ["mat-header-row", ""], ["mat-row", "", 1, "cee-table-row"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "resize", "matSortChange", "dataSource", "ngClass", "id"], ["matColumnDef", "Select"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "expandableOption"], ["matColumnDef", "expandedResp"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", "class", "cee-table-header", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 3, "class", 4, "matRowDef", "matRowDefColumns"], ["id", "check_static", 1, "table-checkbox", 3, "change", "checked", "disabled", "indeterminate", "aria-label"], ["mat-cell", ""], ["name", "radio"], [1, "table-radio", 3, "change", "id", "value", "checked", "disabled"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked", "aria-label"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index", 4, "matHeaderCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index"], [3, "sort", "ngClass", "sortable", "sorting"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col"], [3, "innerHTML"], ["mat-cell", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "visibility", "hidden"], ["mat-button", "", 1, "cee-table-expandable-option", 3, "click"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cee-table-detail-cell", 4, "ngIf"], [1, "cee-table-detail-cell"], [2, "height", "0px", "min-height", "0px"], [1, "hidden-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], ["mat-header-row", "", 1, "cee-table-header"], ["mat-row", "", 3, "click", "contextmenu"], ["mat-row", ""], [1, "no-data-info"], ["class", "pagination-container", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "page", 4, "ngIf"], [1, "pagination-container"], ["type", "button", "class", "pagination-btn-page", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "pagination-btn-page", 3, "click", "disabled"], ["showFirstLastButtons", "", 3, "page", "pageSizeOptions"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "cee-table-detail-label", 4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "cee-table-detail-label"], [3, "stepId", "fieldData", "rootData", "rowData", "keepState"], [3, "sectionData", "rootData", "rowData", "stepId", "type"], ["class", " cee-table-detail-label", 4, "ngIf"]], template: function CeeTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_Template, 6, 5, "ng-container", 2)(1, CeeTableComponent_ng_template_1_Template, 13, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible && ctx.fieldData.length > 0);
        } }, dependencies: () => [CeeTableComponent, MatSortModule, i12.MatSort, i12.MatSortHeader, MatFormFieldModule, i12$1.MatFormField, MatInputModule, i12$2.MatInput, MatCheckboxModule, i10.MatCheckbox, FormsModule, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgModel, CommonModule, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.AsyncPipe, MatRadioModule, i12$3.MatRadioGroup, i12$3.MatRadioButton, MatPaginatorModule, i1.MatPaginator, MatTableModule, i20.MatTable, i20.MatHeaderCellDef, i20.MatHeaderRowDef, i20.MatColumnDef, i20.MatCellDef, i20.MatRowDef, i20.MatHeaderCell, i20.MatCell, i20.MatHeaderRow, i20.MatRow, ResizeColumnDirective, SortableHeaderDirective, CeeSwitchComponent, BlockRendererComponent], styles: ["@charset \"UTF-8\";table[_ngcontent-%COMP%]{width:100%}tr.cee-detail-row[_ngcontent-%COMP%], tr.cee-resp-row[_ngcontent-%COMP%]{height:0}.cee-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-resp-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.cee-table-detail[_ngcontent-%COMP%], .cee-table-resp[_ngcontent-%COMP%]{overflow:hidden;display:flex}.cee-table-detail[_ngcontent-%COMP%]{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed[_ngcontent-%COMP%]{max-height:0}.cee-table-resp[_ngcontent-%COMP%]{height:0}.cee-table-detail-label[_ngcontent-%COMP%]{font-weight:500;display:inline}.cee-table-detail-cell[_ngcontent-%COMP%]{padding:5px 0;margin-right:10px}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table[_ngcontent-%COMP%]   tr.parent[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{content:\"-\";background-color:#d33333}@keyframes _ngcontent-%COMP%_loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading[_ngcontent-%COMP%]{position:relative}.loading[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading[_ngcontent-%COMP%]:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:_ngcontent-%COMP%_loading 1s infinite}.expandTable[_ngcontent-%COMP%]{width:100%}.expandTable.resizing[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{position:relative}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:last-child)   .resize-holder[_ngcontent-%COMP%]{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:not(:nth-child(1)), .expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:nth-child(1)){padding:0 10px}span[_ngcontent-%COMP%]{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case[_ngcontent-%COMP%]:hover:after{content:\"\\2191\"}span.ce-label.asc[_ngcontent-%COMP%]:after{content:\"\\2191\"}span.ce-label.desc[_ngcontent-%COMP%]:after{content:\"\\2193\"}.mat-mdc-cell[_ngcontent-%COMP%]     .switch-container .form-label{display:none!important}"], data: { animation: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ] }, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTableComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-table', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ], standalone: true, imports: [MatSortModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, FormsModule, CommonModule, MatRadioModule, MatPaginatorModule, NgSwitch, MatTableModule, NgClass, ResizeColumnDirective, SortableHeaderDirective, CeeSwitchComponent, forwardRef(() => BlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible && fieldData.length > 0\" (scroll)=\"onScroll($event)\">\r\n    <mat-form-field *ngIf=\"showFilter\" floatLabel=\"never\">\r\n        <input matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\" [(ngModel)]=\"filterValue\">\r\n    </mat-form-field>\r\n    <!-- ######################## Table For Skeleton Loader ########################### -->\r\n    <table aria-describedby=\"Skeleton Loader\" *ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true'\" mat-table\r\n        [dataSource]=\"dataSourceLoading\"\r\n        class=\"{{sectionData.field_style?sectionData.field_style.custom_class_name:''}}\">\r\n        <ng-container matColumnDef=\"{{f}}\" *ngFor=\"let f of displayedColumns; let i = index\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"> {{fieldData[i] && fieldData[i].field_label}} </th>\r\n            <td mat-cell class=\"loading\" *matCellDef=\"let element\">\r\n                <div class=\"bar\"></div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row class=\"cee-table-row\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!-- ######################## Data Table ########################### -->\r\n    <table aria-describedby=\"Data Table\" *ngIf=\"((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true')\" mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n        class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\" [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\"\r\n        id=\"table_{{sectionData.unique_id}}\" (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event)\">\r\n        <ng-container matColumnDef=\"Select\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                <ng-container *ngIf=\"type == 'Table-Multi-Select'\">\r\n                    <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                        [checked]=\"selection.hasValue() && isAllSelected()\"  [disabled]=\"isSeletable=='0'\"\r\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n                    </mat-checkbox>\r\n                </ng-container>\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                <ng-container *ngIf=\"type == 'Table-Single-Select' && data.isSelectable\">\r\n                    <mat-radio-group name=\"radio\">\r\n                        <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                            (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\" [disabled]=\"isSeletable=='0'\"\r\n                            [attr.aria-label]=\"'Select '+position\">\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"type == 'Table-Multi-Select' && data.isSelectable\">\r\n                    <mat-checkbox name=\"check_{{position}}\" id=\"check_{{position}}\" class=\"table-checkbox\"\r\n                        (change)=\"list_change(data, $event.checked); $event ? selection.toggle(data) : null\" [disabled]=\"isSeletable=='0'\"\r\n                        [checked]=\"selection.isSelected(data)\" [aria-label]=\"checkboxLabel(data)\"></mat-checkbox>\r\n                </ng-container>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"f.unique_id\" *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n            <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                <th mat-header-cell *matHeaderCellDef  [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\" scope=\"col\">\r\n                    <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}} sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                </th>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                <ng-container *ngIf=\"isHTML(f.field_label) == false\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\">\r\n                        {{ f.field_label }}\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isHTML(f.field_label) == true\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\">\r\n                        <span [innerHTML]=\"f.field_label\"></span>\r\n                    </th>\r\n                </ng-container>\r\n            </ng-container>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                <ng-template\r\n                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                </ng-template>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandableOption\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable Option</span></th>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                <button mat-button class=\"cee-table-expandable-option\"\r\n                    (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                    === data ? collapseTitle : expandTitle}}</button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedResp\">\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                    <ng-container *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n                        <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                            class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                            <ng-template\r\n                                *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                            </ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                    <div *ngIf=\"this.type === 'Table-Expandable'\" class=\"cee-table-detail-cell\">\r\n                        <button mat-button class=\"cee-table-expandable-option\"\r\n                            (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                            === data ? collapseTitle : expandTitle}}</button>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                    [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                    style=\"height: 0px; min-height: 0px;\">\r\n                    <ng-container *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n                        <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                            <div\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                        <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                            class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                        </app-block-renderer>\r\n                    </ng-container>\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n            class=\"cee-table-row {{selctedRow === row?'cee-selected-row':''}} {{expandedElement === row?'cee-expanded-row':''}} {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}} {{type == 'Table-Multi-Select' ? (storeData.includes(row)? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n            (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n            class=\"cee-resp-row {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n            class=\"cee-detail-row {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n    </table>\r\n    <div class=\"no-data-info\" *ngIf=\"loaded && dataSource.filteredData.length === 0\">{{noDataFoundLabel}}</div>\r\n\r\n\r\n    <ng-container *ngIf=\"!noDataFound && showPagination\">\r\n        <!-- Bootstrap Pagination -->\r\n        <div *ngIf=\"paginationStyle !== 'material' && autoPagination\" class=\"pagination-container\">           \r\n    \r\n            <!-- Page numbers -->\r\n            <button *ngFor=\"let pageNumber of pages\" type=\"button\" [disabled]=\"pageNumber === '...'\"\r\n                (click)=\"setCurrent(pageNumber)\" class=\"pagination-btn-page\"\r\n                [class.active]=\"pageNumber === pagination.currentPage\" attr.aria-label=\"Select page {{pageNumber}}\">\r\n                {{pageNumber}}\r\n            </button>\r\n        </div>\r\n    \r\n        <!-- Material Pagination-->\r\n        <mat-paginator *ngIf=\"showPagination && paginationStyle === 'material'\" [pageSizeOptions]=\"pageItems\" (page)=\"onPaginationChange($event)\"\r\n            showFirstLastButtons>\r\n        </mat-paginator>\r\n    </ng-container>\r\n    \r\n</ng-container>\r\n\r\n\r\n<ng-template #cellData let-f='f' let-position='position' let-data='data' let-expandedDetail='expandedDetail'\r\n    let-method='method'>\r\n    <ng-container [ngSwitch]=\"f.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>: </span></label>\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data && data['rowData'] && data['rowData'][f.unique_id] ? data['rowData'][f.unique_id] : {}, fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-label [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-label> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Switch'\">\r\n            <app-cee-switch [stepId]=\"stepId\" [fieldData]=\"f\" [rootData]=\"rootData\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData']\" [keepState]=\"true\">\r\n            </app-cee-switch>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-image [rowData]=\"data['rowData'][f.unique_id]\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-image> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-toggle-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" [sectionData]=\"sectionData\"\r\n                class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-toggle-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-picker [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-picker> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-menu [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-menu> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n                <app-cee-table [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\"\r\n                    [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n                </app-cee-table>\r\n\t\t\t</div>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n            *ngSwitchCase=\"f.field_type === 'List' || f.field_type === 'List-Expandable' ? f.field_type : '' \">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap['List'] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-list-renderer [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-list-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'TreeView'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-tree-renderer [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-tree-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-dynamic-form [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n            </app-dynamic-form> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n            <div *ngIf='expandedDetail' class=\" cee-table-detail-label\">{{f.field_label}}<span>: </span></div>\r\n            {{data['rowData'][f.unique_id].value}}\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";table{width:100%}tr.cee-detail-row,tr.cee-resp-row{height:0}.cee-table-row td,.cee-resp-row td{border-bottom-width:0}.cee-table-detail,.cee-table-resp{overflow:hidden;display:flex}.cee-table-detail{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed{max-height:0}.cee-table-resp{height:0}.cee-table-detail-label{font-weight:500;display:inline}.cee-table-detail-cell{padding:5px 0;margin-right:10px}table td.r-control{position:relative;padding-left:30px;cursor:pointer}table td.r-control:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table tr.parent td.r-control:before{content:\"-\";background-color:#d33333}@keyframes loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading{position:relative}.loading .bar{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:loading 1s infinite}.expandTable{width:100%}.expandTable.resizing{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable .mat-header-cell{position:relative}.expandTable .mat-header-cell:not(:last-child) .resize-holder{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable .mat-cell:not(:nth-child(1)),.expandTable .mat-header-cell:not(:nth-child(1)){padding:0 10px}span{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case:hover:after{content:\"\\2191\"}span.ce-label.asc:after{content:\"\\2191\"}span.ce-label.desc:after{content:\"\\2193\"}.mat-mdc-cell ::ng-deep .switch-container .form-label{display:none!important}\n"] }]
    }], () => [{ type: UserDataHandlerService }, { type: SharedEventsServiceService }, { type: CEEInternalEmitterService }, { type: AppDataService }, { type: ApiDataService }, { type: WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }, { type: CeeApiService }, { type: i11.Router }], { stepId: [{
            type: Input
        }], paginateValue: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], sectionData: [{
            type: Input
        }], type: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], headers: [{
            type: ViewChildren,
            args: [SortableHeaderDirective]
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTableComponent, { className: "CeeTableComponent", filePath: "lib\\field-components\\cee-table\\cee-table.component.ts", lineNumber: 71 }); })();

export { CeeTableComponent };
//# sourceMappingURL=ng-cee-core-cee-table.component-Dj5GWWHv.mjs.map
