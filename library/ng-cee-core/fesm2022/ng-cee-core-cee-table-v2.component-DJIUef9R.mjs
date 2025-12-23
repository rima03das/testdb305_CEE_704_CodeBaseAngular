import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, Input, forwardRef, ChangeDetectionStrategy, Component, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, b as Constant, U as UserDataHandlerService, c as SharedEventsServiceService, d as CEEInternalEmitterService, e as AppDataService, f as ApiDataService, g as WfeStepLoaderService, h as CeeApiService, B as BlockRendererComponent, T as TooltipModule, t as StepRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
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
import * as i14$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i12$3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i13$1 from '@angular/common';
import { CommonModule, NgSwitch, NgClass } from '@angular/common';
import * as i12$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i16 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i15 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as moment from 'moment';
import { defer } from 'rxjs';
import * as i14 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import clonedeep from 'lodash.clonedeep';
import * as i13 from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
import 'rxjs/operators';
import 'tslib';
import '@datorama/akita';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
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
                standalone: true
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { resizable: [{
            type: Input,
            args: ["resizeColumn"]
        }], index: [{
            type: Input
        }] }); })();

const _c0 = a0 => ({ "d-none": a0 });
const _c1 = a0 => ({ "expandTable": a0 });
const _c2 = () => ["expandedResp"];
const _c3 = () => ["expandedDetail"];
const _c4 = () => ["expandedStep"];
const _c5 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, method: a3 });
const _c6 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, expandedDetail: true, method: a3 });
const _c7 = (a0, a1) => ({ data: a0, fields: a1 });
const _c8 = (a0, a1, a2) => ({ name: a0, value: a1, type: "table", cellData: a2 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c10 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, keepState: true, fieldData: a3, primaryKeyIndex: a4 });
const _c11 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
const _c12 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
function CeeTableV2Component_ng_container_0_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 19)(1, "input", 20);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_mat_form_field_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function CeeTableV2Component_ng_container_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleFilterBox()); });
    i0.ɵɵelement(1, "mat-icon", 22);
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-checkbox", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_div_3_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) { const subtask_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(subtask_r7.completed, $event) || (subtask_r7.completed = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTableV2Component_ng_container_0_div_3_div_5_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.updateAllComplete()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subtask_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", subtask_r7.completed);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", subtask_r7.name, " ");
} }
function CeeTableV2Component_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "span", 24)(2, "mat-checkbox", 25);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_div_3_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAll($event.checked)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 26);
    i0.ɵɵtemplate(5, CeeTableV2Component_ng_container_0_div_3_div_5_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.allComplete)("indeterminate", ctx_r1.someComplete());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.task.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.task.subtasks);
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r8 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData[i_r8] && ctx_r1.fieldData[i_r8].field_label, " ");
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 33);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_4_ng_container_1_th_1_Template, 2, 1, "th", 34)(2, CeeTableV2Component_ng_container_0_table_4_ng_container_1_td_2_Template, 2, 0, "td", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r9 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", f_r9);
} }
function CeeTableV2Component_ng_container_0_table_4_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function CeeTableV2Component_ng_container_0_table_4_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 40);
} }
function CeeTableV2Component_ng_container_0_table_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 29);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_4_ng_container_1_Template, 3, 1, "ng-container", 30)(2, CeeTableV2Component_ng_container_0_table_4_tr_2_Template, 1, 0, "tr", 31)(3, CeeTableV2Component_ng_container_0_table_4_tr_3_Template, 1, 0, "tr", 32);
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
function CeeTableV2Component_ng_container_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHideFilter("show-hide-container-", ctx_r1.sectionData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_div_7_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.sectionData.field_label, " Setting");
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "mat-checkbox", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12); const i_r13 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.columnShowHideRearrange[i_r13].showColumn, $event) || (ctx_r1.columnShowHideRearrange[i_r13].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    const f_r15 = ctx_r13.$implicit;
    const i_r13 = ctx_r13.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.columnShowHideRearrange[i_r13].showColumn);
    i0.ɵɵproperty("disabled", ctx_r1.columnShowHideRearrange[i_r13].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template, 3, 3, "div", 51)(2, CeeTableV2Component_ng_container_0_div_7_div_4_div_2_Template, 3, 1, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r1.columnShowHideRearrange[i_r13].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") == -1);
} }
function CeeTableV2Component_ng_container_0_div_7_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.filterErrorMsg);
} }
function CeeTableV2Component_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_div_7_label_2_Template, 2, 1, "label", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵlistener("cdkDropListDropped", function CeeTableV2Component_ng_container_0_div_7_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.drop($event)); });
    i0.ɵɵtemplate(4, CeeTableV2Component_ng_container_0_div_7_div_4_Template, 3, 5, "div", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_div_7_label_6_Template, 2, 1, "label", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 48);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_7_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-container-", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.filterErrorMsg);
} }
function CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 72);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.isIndeterminateSelected() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableV2Component_ng_container_0_table_10_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template, 2, 4, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms);
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 74)(2, "mat-radio-button", 75);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r18); const data_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r19, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    const data_r19 = ctx_r19.$implicit;
    const position_r21 = ctx_r19.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r21, "");
    i0.ɵɵproperty("value", data_r19)("checked", data_r19 == ctx_r1.radioValue)("disabled", !data_r19.isSelectable);
    i0.ɵɵattribute("aria-label", "Select " + position_r21);
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 76);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r22); const data_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r19, $event.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    const data_r19 = ctx_r19.$implicit;
    const position_r21 = ctx_r19.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r21, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r21, "");
    i0.ɵɵproperty("disabled", !data_r19.isSelectable)("checked", ctx_r1.primaryKeyValue ? ctx_r1.selection.isSelected(data_r19[ctx_r1.primaryKeyValue]) : false);
    i0.ɵɵattribute("aria-label", ctx_r1.checkboxLabel(data_r19));
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template, 3, 6, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template, 2, 7, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tss && (data_r19.isSelectable || ctx_r1.disableRowSelectionValues !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms && (data_r19.isSelectable || ctx_r1.disableRowSelectionValues !== ""));
} }
function CeeTableV2Component_ng_container_0_table_10_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 77);
} }
function CeeTableV2Component_ng_container_0_table_10_td_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 78);
    i0.ɵɵtext(2, "reorder");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 79);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", data_r23.isSelectable ? "example-drag-cursor" : "example-drag-cursor-disable");
} }
function CeeTableV2Component_ng_container_0_table_10_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_7_ng_container_1_Template, 4, 1, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dragDropTableRows);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 83)(1, "span", 84);
    i0.ɵɵlistener("sort", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    const f_r26 = ctx_r24.$implicit;
    const i_r27 = ctx_r24.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r26.resizable)("index", i_r27 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r26.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r26.sorting);
    i0.ɵɵproperty("ngClass", f_r26.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r26.field_label);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template, 3, 6, "th", 82);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "input", 90);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r28); const f_r26 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r26, $event.target.value, "text")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r26 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "search ", f_r26.unique_id, "");
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "mat-label");
    i0.ɵɵtext(2, "Choose a date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 91);
    i0.ɵɵlistener("dateChange", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template_input_dateChange_3_listener($event) { i0.ɵɵrestoreView(_r29); const f_r26 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r26, $event.target.value, "date")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 92)(5, "mat-datepicker", null, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const basicDatepicker_r30 = i0.ɵɵreference(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matDatepicker", basicDatepicker_r30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", basicDatepicker_r30);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 86)(1, "div", 87)(2, "div", 88);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template, 2, 2, "div", 89)(5, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template, 7, 2, "div", 89);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r26 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r26.unique_id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(f_r26.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderTextbox.includes(f_r26.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderDate.includes(f_r26.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_Template, 6, 4, "th", 85);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 93);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template_td_click_0_listener() { const data_r32 = i0.ɵɵrestoreView(_r31).$implicit; const i_r27 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r27 === 0 && ctx_r1.expandedElement === data_r32 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r32 = ctx.$implicit;
    const position_r33 = ctx.dataIndex;
    const f_r26 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c5, f_r26, position_r33, data_r32, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 80);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_Template, 2, 0, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_Template, 2, 0, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template, 2, 7, "td", 81);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r26 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r26.unique_id)("sticky", ctx_r1.colSticky.includes(f_r26.unique_id))("stickyEnd", ctx_r1.colStickyEnd.includes(f_r26.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableV2Component_ng_container_0_table_10_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36)(1, "span", 95);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableV2Component_ng_container_0_table_10_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_td_11_Template_button_click_1_listener() { const data_r36 = i0.ɵɵrestoreView(_r35).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r36 ? null : data_r36; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r36[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r36 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r36 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r37 = i0.ɵɵnextContext(2);
    const data_r39 = ctx_r37.$implicit;
    const position_r40 = ctx_r37.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r37.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r37)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r37, position_r40, data_r39, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_Template, 2, 10, "div", 97);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r37 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r37.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); const data_r39 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r39 ? null : data_r39; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r39[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r39 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r39 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_Template, 2, 1, "ng-container", 98)(2, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template, 3, 1, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable-V2");
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_Template, 3, 6, "div", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r42 = i0.ɵɵnextContext();
    const data_r44 = ctx_r42.$implicit;
    const position_r45 = ctx_r42.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r42.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r42)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r42, position_r45, data_r44, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r42 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r42.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 102);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r45 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r45)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r45)("rootData", ctx_r1.rootData);
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73)(1, "div", 101);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_Template, 2, 1, "ng-container", 98)(3, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_3_Template, 2, 5, "ng-container", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r44 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r44 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableV2Component_ng_container_0_table_10_td_17_app_step_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-step-renderer", 105);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("stepId", ctx_r1.inlineEditStepId)("startSession", ctx_r1.startSession);
} }
function CeeTableV2Component_ng_container_0_table_10_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 103);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_17_app_step_renderer_1_Template, 1, 2, "app-step-renderer", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r46 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r46[ctx_r1.primaryKeyValue] == ctx_r1.selectedPrimaryKeyVal);
} }
function CeeTableV2Component_ng_container_0_table_10_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 106);
} }
function CeeTableV2Component_ng_container_0_table_10_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 107);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_tr_19_Template_tr_click_0_listener() { const row_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r48)); })("contextmenu", function CeeTableV2Component_ng_container_0_table_10_tr_19_Template_tr_contextmenu_0_listener() { const row_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r48, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("cee-table-row ", ctx_r1.expandedElement === row_r48 ? "cee-expanded-row" : "", " ", row_r48 && row_r48.rowData && row_r48.rowData.conditionalCustomClass ? row_r48.rowData.conditionalCustomClass : "", " ", ctx_r1.primaryKeyValue && ctx_r1.type == ctx_r1.tms ? ctx_r1.selection.selected.includes(row_r48[ctx_r1.primaryKeyValue]) ? "table-item-checked" : "table-item-unchecked" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "table-row-", row_r48[ctx_r1.primaryKeyValue], "");
    i0.ɵɵproperty("cdkDragData", row_r48)("cdkDragDisabled", ctx_r1.shouldDisableDragAndDropForRow(row_r48));
} }
function CeeTableV2Component_ng_container_0_table_10_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r49 && row_r49.rowData && row_r49 && row_r49.rowData && row_r49.rowData.conditionalCustomClass ? row_r49.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r50 && row_r50.rowData && row_r50 && row_r50.rowData && row_r50.rowData.conditionalCustomClass ? row_r50.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-step-row ", row_r51 && row_r51.rowData && row_r51 && row_r51.rowData && row_r51.rowData.conditionalCustomClass ? row_r51.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 57, 2);
    i0.ɵɵlistener("resize", function CeeTableV2Component_ng_container_0_table_10_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableV2Component_ng_container_0_table_10_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); })("click", function CeeTableV2Component_ng_container_0_table_10_Template_table_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.triggerSeeMore()); })("cdkDropListDropped", function CeeTableV2Component_ng_container_0_table_10_Template_table_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropRow($event)); });
    i0.ɵɵelementContainerStart(2, 58);
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_table_10_th_3_Template, 2, 1, "th", 34)(4, CeeTableV2Component_ng_container_0_table_10_td_4_Template, 3, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 60);
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_table_10_th_6_Template, 1, 0, "th", 61)(7, CeeTableV2Component_ng_container_0_table_10_td_7_Template, 2, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(8, CeeTableV2Component_ng_container_0_table_10_ng_container_8_Template, 4, 5, "ng-container", 62);
    i0.ɵɵelementContainerStart(9, 63);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_10_th_10_Template, 3, 0, "th", 34)(11, CeeTableV2Component_ng_container_0_table_10_td_11_Template, 3, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(12, 64);
    i0.ɵɵtemplate(13, CeeTableV2Component_ng_container_0_table_10_td_13_Template, 2, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(14, 65);
    i0.ɵɵtemplate(15, CeeTableV2Component_ng_container_0_table_10_td_15_Template, 4, 9, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 66);
    i0.ɵɵtemplate(17, CeeTableV2Component_ng_container_0_table_10_td_17_Template, 2, 2, "td", 67);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(18, CeeTableV2Component_ng_container_0_table_10_tr_18_Template, 1, 0, "tr", 68)(19, CeeTableV2Component_ng_container_0_table_10_tr_19_Template, 1, 9, "tr", 69)(20, CeeTableV2Component_ng_container_0_table_10_tr_20_Template, 1, 3, "tr", 70)(21, CeeTableV2Component_ng_container_0_table_10_tr_21_Template, 1, 3, "tr", 70)(22, CeeTableV2Component_ng_container_0_table_10_tr_22_Template, 1, 3, "tr", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(14, _c1, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(17, _c3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(18, _c4));
} }
function CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 72);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.isIndeterminateSelected() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableV2Component_ng_container_0_table_11_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template, 2, 4, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms);
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 74)(2, "mat-radio-button", 75);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r54); const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r55, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r55 = ctx_r55.$implicit;
    const position_r57 = ctx_r55.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r57, "");
    i0.ɵɵproperty("value", data_r55)("checked", data_r55 == ctx_r1.radioValue)("disabled", ctx_r1.isSeletable == "0");
    i0.ɵɵattribute("aria-label", "Select " + position_r57);
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 112);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r58); const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r55, $event.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r55 = ctx_r55.$implicit;
    const position_r57 = ctx_r55.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r57, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r57, "");
    i0.ɵɵproperty("disabled", ctx_r1.isSeletable == "0")("checked", ctx_r1.primaryKeyValue ? ctx_r1.selection.isSelected(data_r55[ctx_r1.primaryKeyValue]) : false)("aria-label", ctx_r1.checkboxLabel(data_r55));
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template, 3, 6, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template, 2, 7, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r55 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tss && data_r55.isSelectable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms && data_r55.isSelectable);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 83)(1, "span", 84);
    i0.ɵɵlistener("sort", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(2);
    const f_r61 = ctx_r59.$implicit;
    const i_r62 = ctx_r59.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r61.resizable)("index", i_r62 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r61.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r61.sorting);
    i0.ɵɵproperty("ngClass", f_r61.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r61.field_label);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template, 3, 6, "th", 82);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 113);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", f_r61.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 88);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r61.field_label);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "input", 90);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r63); const f_r61 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r61, $event.target.value, "text")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "search ", f_r61.unique_id, "");
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "mat-label");
    i0.ɵɵtext(2, "Choose a date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 91);
    i0.ɵɵlistener("dateChange", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template_input_dateChange_3_listener($event) { i0.ɵɵrestoreView(_r64); const f_r61 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r61, $event.target.value, "date")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 92)(5, "mat-datepicker", null, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const basicDatepicker_r65 = i0.ɵɵreference(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matDatepicker", basicDatepicker_r65);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", basicDatepicker_r65);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 86)(1, "div", 87);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_2_Template, 2, 1, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_3_Template, 3, 1, "ng-container", 71)(4, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template, 2, 2, "div", 89)(5, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template, 7, 2, "div", 89);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r61.unique_id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r61.field_label) == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r61.field_label) == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderTextbox.includes(f_r61.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderDate.includes(f_r61.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_Template, 6, 5, "th", 85);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 93);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template_td_click_0_listener() { const data_r67 = i0.ɵɵrestoreView(_r66).$implicit; const i_r62 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r62 === 0 && ctx_r1.expandedElement === data_r67 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const position_r68 = ctx.dataIndex;
    const f_r61 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c5, f_r61, position_r68, data_r67, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 80);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_Template, 2, 0, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template, 2, 7, "td", 81);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r61.unique_id)("sticky", ctx_r1.colSticky.includes(f_r61.unique_id))("stickyEnd", ctx_r1.colStickyEnd.includes(f_r61.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableV2Component_ng_container_0_table_11_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36)(1, "span", 95);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableV2Component_ng_container_0_table_11_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_td_8_Template_button_click_1_listener() { const data_r70 = i0.ɵɵrestoreView(_r69).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r70 ? null : data_r70; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r70[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r70 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r70 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r71 = i0.ɵɵnextContext(2);
    const data_r73 = ctx_r71.$implicit;
    const position_r74 = ctx_r71.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r71.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r71)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r71, position_r74, data_r73, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_Template, 2, 10, "div", 97);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r71 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r71.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r75); const data_r73 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r73 ? null : data_r73; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r73[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r73 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r73 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_Template, 2, 1, "ng-container", 27)(2, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template, 3, 1, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable-V2");
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_Template, 3, 5, "div", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r76 = i0.ɵɵnextContext().$implicit;
    const ctx_r76 = i0.ɵɵnextContext();
    const data_r78 = ctx_r76.$implicit;
    const position_r79 = ctx_r76.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r76.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r76)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r76, position_r79, data_r78, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r76 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r76.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 102);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r79 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r79)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r79)("rootData", ctx_r1.rootData);
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73)(1, "div", 101);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_Template, 2, 1, "ng-container", 27)(3, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_3_Template, 2, 5, "ng-container", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r78 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r78 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r78 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableV2Component_ng_container_0_table_11_td_14_app_step_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-step-renderer", 105);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("stepId", ctx_r1.inlineEditStepId)("startSession", ctx_r1.startSession);
} }
function CeeTableV2Component_ng_container_0_table_11_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 103);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_14_app_step_renderer_1_Template, 1, 2, "app-step-renderer", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r80 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r80[ctx_r1.primaryKeyValue] == ctx_r1.selectedPrimaryKeyVal);
} }
function CeeTableV2Component_ng_container_0_table_11_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 106);
} }
function CeeTableV2Component_ng_container_0_table_11_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 114);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_tr_16_Template_tr_click_0_listener() { const row_r82 = i0.ɵɵrestoreView(_r81).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r82)); })("contextmenu", function CeeTableV2Component_ng_container_0_table_11_tr_16_Template_tr_contextmenu_0_listener() { const row_r82 = i0.ɵɵrestoreView(_r81).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r82, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("cee-table-row ", ctx_r1.expandedElement === row_r82 ? "cee-expanded-row" : "", " ", row_r82.rowData ? row_r82.rowData.conditionalCustomClass : "", " ", ctx_r1.primaryKeyValue && ctx_r1.type == ctx_r1.tms ? ctx_r1.selection.selected.includes(row_r82[ctx_r1.primaryKeyValue]) ? "table-item-checked" : "table-item-unchecked" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "table-row-", row_r82[ctx_r1.primaryKeyValue], "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r83.rowData ? row_r83.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r84.rowData ? row_r84.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-step-row ", row_r85.rowData ? row_r85.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 109, 2);
    i0.ɵɵlistener("resize", function CeeTableV2Component_ng_container_0_table_11_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableV2Component_ng_container_0_table_11_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); })("click", function CeeTableV2Component_ng_container_0_table_11_Template_table_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.triggerSeeMore()); });
    i0.ɵɵelementContainerStart(2, 58);
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_table_11_th_3_Template, 2, 1, "th", 34)(4, CeeTableV2Component_ng_container_0_table_11_td_4_Template, 3, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, CeeTableV2Component_ng_container_0_table_11_ng_container_5_Template, 4, 5, "ng-container", 110);
    i0.ɵɵelementContainerStart(6, 63);
    i0.ɵɵtemplate(7, CeeTableV2Component_ng_container_0_table_11_th_7_Template, 3, 0, "th", 34)(8, CeeTableV2Component_ng_container_0_table_11_td_8_Template, 3, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 64);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_11_td_10_Template, 2, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 65);
    i0.ɵɵtemplate(12, CeeTableV2Component_ng_container_0_table_11_td_12_Template, 4, 8, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 66);
    i0.ɵɵtemplate(14, CeeTableV2Component_ng_container_0_table_11_td_14_Template, 2, 2, "td", 67);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(15, CeeTableV2Component_ng_container_0_table_11_tr_15_Template, 1, 0, "tr", 68)(16, CeeTableV2Component_ng_container_0_table_11_tr_16_Template, 1, 7, "tr", 111)(17, CeeTableV2Component_ng_container_0_table_11_tr_17_Template, 1, 3, "tr", 70)(18, CeeTableV2Component_ng_container_0_table_11_tr_18_Template, 1, 3, "tr", 70)(19, CeeTableV2Component_ng_container_0_table_11_tr_19_Template, 1, 3, "tr", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(15, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(17, _c4));
} }
function CeeTableV2Component_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function CeeTableV2Component_ng_container_0_mat_paginator_13_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 116);
    i0.ɵɵlistener("page", function CeeTableV2Component_ng_container_0_mat_paginator_13_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPaginationChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems);
} }
function CeeTableV2Component_ng_container_0_div_14_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 120);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_14_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); i0.ɵɵnextContext(); const page_r89 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onNextPageChange(page_r89)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationNextLabel);
} }
function CeeTableV2Component_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 117)(1, "mat-paginator", 118, 4);
    i0.ɵɵlistener("page", function CeeTableV2Component_ng_container_0_div_14_Template_mat_paginator_page_1_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.pageEvent = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_div_14_button_3_Template, 2, 1, "button", 119);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems)("pageSize", ctx_r1.pageItems[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.SeemoreHide);
} }
function CeeTableV2Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 6);
    i0.ɵɵlistener("scroll", function CeeTableV2Component_ng_container_0_Template_ng_container_scroll_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onScroll($event)); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_mat_form_field_1_Template, 2, 2, "mat-form-field", 7)(2, CeeTableV2Component_ng_container_0_button_2_Template, 2, 0, "button", 8)(3, CeeTableV2Component_ng_container_0_div_3_Template, 6, 4, "div", 9)(4, CeeTableV2Component_ng_container_0_table_4_Template, 4, 7, "table", 10);
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_button_6_Template, 2, 0, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeeTableV2Component_ng_container_0_div_7_Template, 11, 5, "div", 12);
    i0.ɵɵelementStart(8, "div", 13, 1);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_10_Template, 23, 19, "table", 14)(11, CeeTableV2Component_ng_container_0_table_11_Template, 20, 18, "table", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeTableV2Component_ng_container_0_div_12_Template, 2, 1, "div", 16)(13, CeeTableV2Component_ng_container_0_mat_paginator_13_Template, 1, 1, "mat-paginator", 17)(14, CeeTableV2Component_ng_container_0_div_14_Template, 4, 3, "div", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkboxFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.togglefilterBox);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.dragDropTableRows && (!ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dragDropTableRows && (!ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loaded && ctx_r1.dataSource.filteredData.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination == "load_more" && ctx_r1.showSeeMore);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_1_label_1_Template, 4, 1, "label", 124);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_template_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94 && f_r90.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(15, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(11, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(8, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_2_label_1_Template, 4, 1, "label", 124);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_template_1_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94 && f_r90.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(15, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(11, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(8, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c10, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-cee-table-v2", 127);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionData", f_r90)("rootData", ctx_r1.rootData)("rowData", data_r93["rowData"][f_r90.unique_id])("stepId", ctx_r1.stepId)("type", f_r90.field_type);
} }
function CeeTableV2Component_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap["List-V2"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c11, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, f_r90.field_type));
} }
function CeeTableV2Component_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c11, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, f_r90.field_type));
} }
function CeeTableV2Component_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(7, _c12, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90));
} }
function CeeTableV2Component_ng_template_1_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_12_div_1_Template, 4, 1, "div", 128);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r93["rowData"][f_r90.unique_id] == null ? null : data_r93["rowData"][f_r90.unique_id].value, " ");
} }
function CeeTableV2Component_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 121);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_1_Template, 5, 21, "ng-container", 122)(2, CeeTableV2Component_ng_template_1_ng_container_2_Template, 5, 21, "ng-container", 122)(3, CeeTableV2Component_ng_template_1_ng_container_3_Template, 4, 20, "ng-container", 122)(4, CeeTableV2Component_ng_template_1_ng_container_4_Template, 4, 20, "ng-container", 122)(5, CeeTableV2Component_ng_template_1_ng_container_5_Template, 4, 20, "ng-container", 122)(6, CeeTableV2Component_ng_template_1_ng_container_6_Template, 4, 20, "ng-container", 122)(7, CeeTableV2Component_ng_template_1_ng_container_7_Template, 4, 20, "ng-container", 122)(8, CeeTableV2Component_ng_template_1_ng_container_8_Template, 3, 8, "ng-container", 122)(9, CeeTableV2Component_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 122)(10, CeeTableV2Component_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 122)(11, CeeTableV2Component_ng_template_1_ng_container_11_Template, 4, 12, "ng-container", 122)(12, CeeTableV2Component_ng_template_1_ng_container_12_Template, 3, 2, "ng-container", 123);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r90 = ctx.f;
    i0.ɵɵproperty("ngSwitch", f_r90.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
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
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", f_r90.field_type === "List-V2" || f_r90.field_type === "List-Expandable-V2" ? f_r90.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
} }
var ELEMENT_DATA = Array(10);
var LOAD_MORE = 'load_more';
// if you want to use $ as an alias
const $ = jQuery;
class CeeTableV2Component {
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
    fieldData;
    sectionData;
    type;
    rowData;
    rootData;
    primaryKeyIndex;
    // @ViewChild('tabledd', {static: true}) tabledd: MatTable<PeriodicElement>;
    sortDirection = '';
    dataSourceLoading = ELEMENT_DATA;
    dataSource = new MatTableDataSource([]);
    displayedColumns = [];
    headers;
    hidenRows = [];
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    SeemoreHide = true;
    pageItems;
    paginator;
    sort;
    showPagination = '';
    showFilter = false;
    filterPlaceholderText = 'Filter';
    selection = new SelectionModel(true, []);
    showSkeletonLoader = true;
    apiData = [];
    apiDataCopy = [];
    displayValues = [];
    radioValue;
    checkedItems = [];
    nextPageIndex = 0;
    storeData = [];
    primaryKeyVal = '';
    primaryKeyName = '';
    primaryKeyValue = '';
    primaryKeyRes = '';
    isVisible = false;
    extraTableCell = 0;
    additionalParameters = {};
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
    dropList;
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
    paginationTotalCount;
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
    tss = 'Table-Single-Select-V2';
    tms = 'Table-Multi-Select-V2';
    searchFilterHeaderTextbox = [];
    searchFilterHeaderDate = [];
    filterSelectObj = [];
    filterValues = {};
    filterDateandText = false;
    checkboxFilter = false;
    togglefilterBox = false;
    scrollToTop = false;
    task = {};
    allComplete = false;
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
    inlineEditStepId = "";
    selectedPrimaryKeyVal = "";
    startSession = true;
    dragDropTableRows = false;
    // MatPaginator Output
    pageEvent;
    pageIndex = 0;
    isShowMoreClicked = false;
    isMatSortClicked = false;
    componentList = {};
    paginationSeparator = "/";
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('./ng-cee-core-cee-label.component-3Du0Wv_U.mjs').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Attachments: defer(() => {
            if (!this.componentList['Attachments']) {
                this.componentList['Attachments'] = import('./ng-cee-core-cee-attachments.component-DaZytsS9.mjs').then(m => m.CeeAttachmentsComponent);
            }
            return this.componentList['Attachments'];
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
        'List-V2': defer(() => {
            if (!this.componentList['List-V2']) {
                this.componentList['List-V2'] = import('./ng-cee-core-list-renderer-v2.component-CKgP0fZf.mjs').then(m => m.ListRendererComponentV2);
            }
            return this.componentList['List-V2'];
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
    colSticky = [];
    colStickyEnd = [];
    blockData;
    fromStore;
    showSeeMore = false;
    disableRowValues = '';
    disableRowSelectionValues = '';
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
        this.fieldDataBack = this.fieldData;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        const timeoutId = setTimeout(() => {
            // console.log("uniqueID: ",this.sectionData.unique_id)
            this.variableObject['emitOnApplyRearrangeBtnClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnApplyRearrangeBtnClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                // console.log(tableId,"==",this.sectionData.unique_id);
                if (tableId == this.sectionData.unique_id) {
                    // console.log("field found")
                    this.resetRestructuring();
                    this.applyRestructuring();
                    const handlerData = this.returnNestedData(this.apiDataService.getApiDataByHandler(this.sectionData.response_api_key.split('##')[0])?.value);
                    if (handlerData) {
                        this.refreshColumnRowOnDataChange();
                        this.onAPICallback(handlerData);
                    }
                    // console.log("All Process Done!")
                    this.cdRef.detectChanges();
                    // window.location.reload();
                    // document.getElementById(tableId).click();
                }
            });
            this.variableObject['emitOnTableInlineEditCancelClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnTableInlineEditCancelClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                if (tableId == this.sectionData.unique_id) {
                    this.selectedPrimaryKeyVal = '';
                    this.cdRef.detectChanges();
                }
            });
            this.variableObject['emitOnTableInlineEditClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnTableInlineEditClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                let primaryKeyFieldId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_Primary_Key_FieldId'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_Primary_Key_FieldId'; })[0].value : '';
                if (tableId == this.sectionData.unique_id) {
                    this.selectedPrimaryKeyVal = this.appDataService.getFieldDataByFieldId(primaryKeyFieldId);
                    setTimeout(() => {
                        let e = document.getElementById('table-row-' + this.selectedPrimaryKeyVal);
                        if (e) {
                            e.click();
                            e.scrollIntoView();
                        }
                    }, 500);
                    this.timeoutIds.push(timeoutId);
                }
            });
        }, 0);
        this.timeoutIds.push(timeoutId);
    }
    ngAfterViewInit() {
        if (this.dropList) {
            this.dropList.autoScrollDisabled = false;
            this.dropList.autoScrollStep = 10;
        }
    }
    returnNestedData(data) {
        if (Object(data) !== data || Array.isArray(data)) {
            return data;
        }
        const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
        const resultholder = {};
        // tslint:disable-next-line: forin
        for (const p in data) {
            let cur = resultholder;
            let prop = "";
            let m;
            while ((m = regex.exec(p))) {
                cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
                prop = m[2] || m[1];
            }
            cur[prop] = data[p];
        }
        return resultholder[""] || resultholder;
    }
    ;
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            if (this.fieldData) {
                this.fieldData.forEach((element, i) => {
                    this.columnShowHideRearrange.push({
                        field_label: element.field_label,
                        unique_id: element.unique_id,
                        position: i,
                        showColumn: Number(element.is_display) == 0 ? false : true,
                        isMandatory: false,
                        isVisible: Number(element.is_display) == 0 ? false : true
                    });
                });
            }
        }
    }
    dropRow(event) {
        if (this.dragDropTableRows) {
            const previousIndex = this.dataSource.data.findIndex(d => d === event.item.data);
            // console.log("previousIndex: ", previousIndex, " currentIndex: ", event.currentIndex)
            // console.log("dataSource ", this.dataSource.data)
            moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
            this.dataSource.data = clonedeep(this.dataSource.data);
            /* ##################### store modified data ######################## */
            let primaryKey = this.additionalParameters['PrimaryKeyName'] ? this.additionalParameters['PrimaryKeyName'] : '';
            let modifyKey = this.additionalParameters['CEE_Drag_Drop_Rows_ModifyKey'] ? this.additionalParameters['CEE_Drag_Drop_Rows_ModifyKey'] : '';
            let modifiedRequestApiKey = this.additionalParameters['CEE_Drag_Drop_Rows_ModifiedRequestKey'] ? this.additionalParameters['CEE_Drag_Drop_Rows_ModifiedRequestKey'] : primaryKey;
            let requestApiKey = this.additionalParameters['CEE_Drag_Drop_Rows_Request_Api_Key'] ? this.additionalParameters['CEE_Drag_Drop_Rows_Request_Api_Key'].split('||') : '';
            if (primaryKey && modifyKey && requestApiKey) {
                let modifyKeyArr = this.dataSource.data.map(function (a) { return Number(a[modifyKey]); }).sort(function (a, b) { return a - b; });
                ;
                // console.log("modifyKeyArr: ",modifyKeyArr)
                let primaryKeyMapping = this.dataSource.data.map(function (a, index) {
                    let obj = {};
                    obj[modifiedRequestApiKey] = a[primaryKey];
                    obj[modifyKey] = modifyKeyArr[index];
                    return obj;
                });
                // console.log("primaryKeyMapping: ", primaryKeyMapping)
                if (this.additionalParameters['PrimaryKeyName'] && this.additionalParameters['Primary Key Field Id']) {
                    let primaryFieldData = this.appData;
                    primaryFieldData = {
                        ...primaryFieldData, ...{
                            id: this.additionalParameters['Primary Key Field Id'],
                            editable: false,
                            visible: false,
                            mandatory: false,
                            value: primaryKeyMapping,
                            apiKey: '',
                            isValid: true,
                            responseApiKey: [],
                            requestApiKey: requestApiKey
                        }
                    };
                    this.appDataService.setAppData(primaryFieldData);
                    // Call event OnRowDragDrop
                    this.onComponentEvent('OnRowDragDrop');
                }
            }
        }
    }
    drop(event) {
        if (this.dragDropTableRows && this.columnFilterType.indexOf('rearrange') != -1) {
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
        this.showHideFilter('show-hide-container-', this.sectionData.unique_id);
    }
    applyRestructuring() {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.sectionData.unique_id] = this.columnShowHideRearrange;
            // localStorage.setItem('columnRstructuringConfig',JSON.stringify(setting));
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.fieldData = restuctuedColArr;
            // this.ngOnInit();
            // *****************************************
            const { event_list } = this.sectionData;
            this.processBlockData(this.blockData, this.fromStore, event_list, true);
            // *****************************************
            this.showHideFilter('show-hide-container-', this.sectionData.unique_id);
            // console.log("All applyRestructuring Process Done!")
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
    triggerSeeMore() {
        if (this.showPagination === LOAD_MORE) {
            this.isMatSortClicked = true;
        }
    }
    matSortChange(sort) {
        this.sortChangeSetValue(sort.active, sort.direction);
    }
    sortChangeSetValue(column, direction) {
        if (this.freezeSort) {
            return;
        }
        if (!direction) {
            let field = this.fieldData.find(f => f.response_api_key === this.sortApiValues[0]);
            direction = this.sortApiValues[1];
            column = field.unique_id;
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
    ngOnInit() {
        this.updateColumnConfig();
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.tableCellAppData.stepId = this.stepId;
        const { additional_parameters, unique_id, event_list } = this.sectionData;
        if (additional_parameters && additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'Show Chips':
                        // this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        this.primaryKeyName = this.getPrimaryKey(paramter.value);
                        this.primaryKeyValue = this.getValueformKey(paramter.value);
                        break;
                    case 'PrimaryKeyValue':
                        this.primaryKeyRes = paramter.value;
                        break;
                    case 'Show Pagination':
                        // this.showPagination = paramter.value === 'false' ? false : true; // Before LOAD_MORE
                        this.showPagination = paramter.value.toLowerCase();
                        break;
                    case 'Pagination Values':
                        this.pageItems = paramter.value.split('|').map(s => +s.trim());
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
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
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        this.fromStore = fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'Table-Expandable-V2' ? paramter.value
                                .split('|').map(s => s.trim()) : [];
                        break;
                    case 'CEE_Inline_Edit_Step_Id':
                        this.inlineEditStepId = paramter.value;
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'Table-Expandable-V2' ? paramter.value : this.expandTitle;
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'Table-Expandable-V2' ? paramter.value : this.collapseTitle;
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
                    case 'Search_filter_All_Textboxes':
                        this.filterDateandText = true;
                        this.searchFilterHeaderTextbox = paramter.value.split("||");
                        break;
                    case 'Search_filter_All_Dates':
                        this.filterDateandText = true;
                        this.searchFilterHeaderDate = paramter.value.split("||");
                        break;
                    case 'Search_filter_checkbox':
                        this.filterDateandText = true;
                        this.checkboxFilter = true;
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
                    case 'CEE_COL_STICKY':
                        this.colSticky = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'CEE_COL_STICKY_END':
                        this.colStickyEnd = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'CEE_Drag_Drop_Rows':
                        this.dragDropTableRows = paramter.value === 'true' ? true : false;
                        break;
                    case 'Pagination Separator':
                        this.paginationSeparator = paramter.value.toLowerCase();
                        break;
                    case 'CEE_scroll_to_top_on_pagination':
                        this.scrollToTop = paramter.value === 'true' ? true : false;
                        break;
                    case 'CEE_Disable_Drag_Rows':
                        this.disableRowValues = paramter.value;
                    case 'CEE_Disable_Selection':
                        this.disableRowSelectionValues = paramter.value;
                }
            }
        }
        if (unique_id) {
            // let blockCache = this.wfeStepLoaderService.searchBlockDataFromCache(this.additionalParameters['default_value']);
            // if(blockCache) {
            //     this.processBlockData(blockCache,fromStore,event_list);
            // } else if(localStorage.getItem('lastBlockLoaded') != this.additionalParameters['default_value']) {
            //     localStorage.setItem('lastBlockLoaded', this.additionalParameters['default_value'])
            this.blockData = {};
            this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise().then((data) => {
                this.blockData = data;
                // let blockData = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
                // let cacheData = ( blockData && blockData.length > 0 ) ? blockData.filter(el => el.block_id == this.additionalParameters['default_value']) : [];
                // if(cacheData && cacheData.length == 0) {
                //     blockData.push({block_id: this.additionalParameters['default_value'], block_data: data});
                //     localStorage.setItem('blockDataCache', JSON.stringify({data : blockData}))
                // }
                // this.processBlockData(data,fromStore,event_list);
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
                if (this.serverPagination && this.paginationApiKeys.length !== 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                if (this.showPagination === LOAD_MORE) {
                    this.paginationPageIndex = 1;
                    this.paginationPageSize = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[2]);
                    this.paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
                    if (this.paginationPageSize?.value >= this.paginationTotalCount?.value && this.paginationTotalCount?.value > 0) {
                        this.SeemoreHide = false;
                    }
                    // if(this.paginationTotalCount?.value === 0) {
                    //     this.paginationPageSize.value = this.pageItems[0];
                    // }
                }
                else {
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
        if (this.type === this.tss) {
            // if (this.storeData.length > 0) {
            //     this.radioValue = this.storeData[0];
            // }
        }
        // if(this.showPagination === LOAD_MORE){
        //     this.isShowMoreClicked = true;
        // }
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
        // setTimeout(() => {
        //     var elem = document.getElementById("table-cell-inline-step");
        //     if(elem) {
        //         elem.scrollIntoView();
        //     }
        // }, 1000);
    }
    processBlockData(data, fromStore, event_list, skipOnLoad = false) {
        if (!this.fieldData) {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.fieldData = this.fieldDataBack = this.blockRenderedData.block_fields;
            // this.updateColumnConfig();
            // // this.applyRestructuring();
            // setTimeout(() => {
            //     this.applyRestructuring();
            //     this.cdRef.detectChanges();
            // }, 7000);
        }
        if (this.fieldData && this.fieldData.length > 0) {
            this.fieldData.forEach(x => {
                let filterObj = {
                    name: x.unique_id,
                    columnProp: x.response_api_key,
                };
                this.filterSelectObj.push(filterObj);
                if (x?.additional_parameters && x?.additional_parameters.length > 0) {
                    for (const paramter of x.additional_parameters) {
                        this.additionalParametersfields[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'CEE_table_cell_values':
                                x.field_label = x.field_label.includes('((dynamic))') ? this.setDynamicLabelUtil.getDynamicValue(x).field_label : x.field_label;
                                break;
                            case 'search_filter_header_text':
                                this.filterDateandText = true;
                                this.searchFilterHeaderTextbox.push(x.unique_id);
                                break;
                            case 'search_filter_header_date':
                                this.filterDateandText = true;
                                this.searchFilterHeaderDate.push(x.unique_id);
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
        if (this.filterDateandText == true) {
            this.getCheckboxfilterData(this.fieldData);
        }
        this.refreshColumnRowOnDataChange();
        if (this.dragDropTableRows && (this.type == this.tms || this.type == this.tss)) {
            this.displayedColumns.unshift('Rearrange');
            this.extraTableCell ? this.extraTableCell++ : this.extraTableCell = 1;
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
        if (!skipOnLoad && event_list && event_list.length > 0) {
            for (const sevent of JSON.parse(JSON.stringify(event_list))) {
                if (sevent.isDefault && sevent.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(sevent, event_list);
                }
            }
        }
        // console.log("All init Process Done!")
    }
    refreshColumnRowOnDataChange() {
        if (this.fieldData) {
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
        }
        if (this.dragDropTableRows && (this.type == this.tms || this.type == this.tss)) {
            this.displayedColumns.unshift('Rearrange');
            this.extraTableCell ? this.extraTableCell++ : this.extraTableCell = 1;
        }
        if (this.type == this.tss || this.type == this.tms) {
            this.displayedColumns.unshift('Select');
            this.extraTableCell = 1;
        }
        else if (this.type === 'Table-Expandable-V2') {
            this.displayedColumns.push('expandableOption');
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
        // For See More Button
        if (this.showPagination === LOAD_MORE) {
            if (this.pageItems.length > 0) {
                this.showSeeMore = this.totalCountAppData.value > this.pageItems[0];
            }
            else {
                this.showSeeMore = true;
            }
        }
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
            this.refreshColumnRowOnDataChange();
            this.onAPICallback(res);
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
            this.paginationTotalCount = totalPage;
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
        if (this.showPagination === LOAD_MORE) {
            if (totalPageObj && totalPageObj.hasOwnProperty('value') && this.paginationApiKeys && this.paginationApiKeys.length > 0 && this.paginationApiKeys[0] && this.paginationApiKeys[0].includes(res.handler_name)) {
                this.setTotalCountAppData(totalPageObj['value']);
            }
        }
        else {
            this.setTotalCountAppData(this.serverPagination && totalPageObj['value'] ? totalPageObj['value'] : this.apiData.length);
        }
        if (this.showPagination.toLowerCase() === 'true' && this.paginator) {
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
        }
        else if (this.showPagination.toLowerCase() === LOAD_MORE && this.paginator) {
            // DO ANY ADDITIONAL LOGIC FOR SEE MORE
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
        }
        if (!this.additionalParameters['Set from store'] || (this.additionalParameters['Set from store'] && this.additionalParameters['Set from store'].toLowerCase() != 'true')) {
            const timeoutId = setTimeout(() => {
                this.updateColumnConfig();
                this.applyRestructuring();
                this.cdRef.detectChanges();
            }, 1000);
            this.timeoutIds.push(timeoutId);
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
                if (this.additionalParameters['CEE_Disable_Selection']) {
                    rdata['isSelectable'] = !this.shouldDisableSelectionForRow(rdata);
                }
                else {
                    rdata['isSelectable'] = true;
                }
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
            data['rowData'] = {};
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
        if (this.showPagination.toLowerCase() !== LOAD_MORE) {
            this.dataSource = new MatTableDataSource();
        }
        this.setDefaultSort();
        if (!this.serverSort) {
            this.dataSource.sort = this.sort;
        }
        // this.showSkeletonLoader = false;
        this.loaded = true;
        this.onResize();
        this.lazyLoading();
        if (this.filterDateandText == true) {
            this.dataSource.filterPredicate = this.createFilter();
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
                    if (field.response_api_key.length > 0) {
                        data[field.response_api_key] = dynamicVal;
                    }
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
        }
        this.rowDataLoading = true;
        this.lazyInterval = setInterval(() => {
            const timeoutId = setTimeout(() => {
                this.cdRef.detectChanges();
            }, 0);
            this.timeoutIds.push(timeoutId);
            if (this.tableData.length !== this.tableDataLazy.length) {
                this.tableDataLazy.push(this.tableData[this.tableDataLazy.length]);
                if (this.showPagination === LOAD_MORE) {
                    if (this.isShowMoreClicked === true) {
                        this.appendDataOnSeeMoreClicked([...this.tableData]);
                        this.isShowMoreClicked = false;
                    }
                    else if (this.isMatSortClicked) {
                        this.isMatSortClicked = false;
                        this.dataSource.data = this.tableData;
                    }
                    else {
                        this.dataSource.data = this.tableData;
                    }
                }
                else {
                    this.dataSource.data = this.tableDataLazy;
                }
                this.cdRef.detectChanges();
            }
            else if (this.showPagination === LOAD_MORE && this.tableData.length == 0 && this.tableDataLazy.length == 0) {
                // When Table data is empty after deleting all the records, sets the empty data.
                this.dataSource.data = this.tableData;
                this.cdRef.detectChanges();
            }
            else {
                this.rowDataLoading = false;
                this.showSkeletonLoader = false;
                clearInterval(this.lazyInterval);
                this.lazyInterval = null;
                this.setSelection();
                // Hide the modal popup loader if it running
                const modalWrapper = window.document.querySelector('.loader-overlay');
                if (modalWrapper) {
                    modalWrapper.style.visibility = 'hidden';
                }
            }
        }, 0);
    }
    appendDataOnSeeMoreClicked(newData) {
        // Get the current data
        const currentData = this.dataSource.data;
        // Concatenate new data with existing data
        const updatedData = [...currentData, ...newData];
        // Set the updated data back to the dataSource
        this.dataSource.data = updatedData;
    }
    setSelection() {
        let data;
        if (this.primaryKeyRes) {
            const handlerData = this.apiDataService.getApiDataByHandler(this.primaryKeyRes.split('##')[0]);
            if (handlerData && handlerData.value) {
                data = this.setAPIKeyUtil.setApiCallBackData(this.primaryKeyRes, handlerData.value);
                this.selection.clear();
                this.dataSource.data.forEach((row) => {
                    if (data.includes(row[this.getValueformKey(this.primaryKeyVal)])) {
                        this.selection.select(row);
                    }
                });
                // this.storeData = this.selection.selected;
            }
        }
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
        this.variableObject = {};
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        // Clean up table data
        this.tableDataLazy = [];
        if (this.dataSource) {
            this.dataSource.data = [];
        }
        // Clean up component map observables
        for (const key in this.componentList) {
            if (this.componentList[key]) {
                delete this.componentList[key];
            }
        }
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Additional cleanup
        this.apiData = [];
        this.apiDataCopy = [];
        this.displayValues = [];
        this.storeData = [];
        this.checkedItems = [];
        this.filterValues = {};
        this.task = {};
    }
    checkCheckedValues() {
        // store the values of the checkedItems
        // if (this.type === this.tms) {
        //     if (this.storeData.length > 0) {
        //         this.checkedItems = [];
        //         for (const singleRes of this.displayValues) {
        //             if ((this.storeData).includes(singleRes)) {
        //                 this.checkedItems.push(singleRes);
        //             } else {
        //                 this.checkedItems.push({});
        //             }
        //         }
        //     }
        // }
    }
    list_change(data, isChecked) {
        if (this.primaryKeyValue && this.type === this.tms) {
            isChecked ? this.selection.select(data[this.primaryKeyValue]) : this.selection.deselect(data[this.primaryKeyValue]);
        }
        if (isChecked) {
            if (this.type === this.tss) {
                // this.storeData = [];
                this.radioValue = data;
            }
            // this.storeData.push(JSON.stringify(data));
        }
        else {
            // if (this.storeData.length > 0) {
            //     this.storeData.splice(this.storeData.indexOf(JSON.stringify(data)), 1);
            // }
        }
        this.storePrimaryKey();
    }
    clearMultiSelectColumnMappings() {
        // Check if MultiSelectColumnNames are present and clear their values
        const multiSelectColumns = this.additionalParameters?.['MultiSelectColumnNames'];
        if (multiSelectColumns) {
            const columnNames = multiSelectColumns.split('|').map(col => col.trim());
            // Clear each column mapping as separate entries in appDataService
            columnNames.forEach(columnName => {
                const mappingPropertyName = `${columnName}Mapping`;
                const columnAppData = {
                    id: mappingPropertyName,
                    stepId: this.stepId,
                    apiKey: mappingPropertyName,
                    requestApiKey: [],
                    responseApiKey: [],
                    value: [],
                    mandatory: false,
                    editable: false,
                    visible: true,
                    isValid: true
                };
                this.appDataService.setAppData({ ...columnAppData });
            });
        }
    }
    debounceTimeout;
    storePrimaryKey() {
        // for (const additionalParam of this.sectionData.additional_parameters) {
        //     if (additionalParam.parameter_type === 'PrimaryKeyName') {
        //         const primaryKeyValue = [];
        //         for (const data of this.storeData) {
        //             primaryKeyValue.push(data[this.getValueformKey(additionalParam.value)]);
        //         }
        //         const apiData = {
        //             id: this.getPrimaryKey(additionalParam.value),
        //             apiUrl: '',
        //             apiKey: this.getPrimaryKey(additionalParam.value),
        //             value: (this.type === 'Table-Single-Select' ? primaryKeyValue[0] : primaryKeyValue)
        //         };
        //         this.apiDataService.setApiData(Object.assign({}, apiData));
        //         setTimeout(() => {
        //             this.onComponentEvent('OnChangeValue');
        //             this.emitForFieldsSectionBlock(apiData);
        //         }, 0);
        //     }
        // }
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            // Get column names from additionalParameters
            const multiSelectColumns = this.additionalParameters?.['MultiSelectColumnNames'];
            let columnMappings = {};
            if (multiSelectColumns) {
                // Clear previous mappings
                this.clearMultiSelectColumnMappings();
                // Parse pipe-separated column names
                const columnNames = multiSelectColumns.split('|').map(col => col.trim());
                // Create mapping for each column and store separately in appDataService
                columnNames.forEach(columnName => {
                    const columnValues = [];
                    this.selection.selected.forEach(selectedId => {
                        // Find the original row data from dataSource using the selected ID
                        const originalRow = this.dataSource.data.find(row => row[this.primaryKeyValue] === selectedId);
                        if (originalRow) {
                            let columnValue = null;
                            // Check if the column exists and has a value
                            if (originalRow[columnName] !== undefined && originalRow[columnName] !== null) {
                                columnValue = originalRow[columnName].toString();
                            }
                            columnValues.push(columnValue);
                        }
                    });
                    // Store each column mapping as separate entry in appDataService
                    const mappingPropertyName = `${columnName}Mapping`;
                    const columnAppData = {
                        id: mappingPropertyName,
                        stepId: this.stepId,
                        apiKey: mappingPropertyName,
                        requestApiKey: [],
                        responseApiKey: [],
                        value: columnValues,
                        mandatory: false,
                        editable: false,
                        visible: true,
                        isValid: true
                    };
                    this.appDataService.setAppData({ ...columnAppData });
                });
            }
            // Store primary key data separately in apiDataService (without column mappings)
            const apiData = {
                id: this.primaryKeyName,
                apiUrl: '',
                apiKey: this.primaryKeyName,
                value: (this.type === 'Table-Single-Select' ? this.selection.selected[0] : this.selection.selected)
            };
            this.apiDataService.setApiData({ ...apiData });
            this.onComponentEvent('OnChangeValue');
            this.emitForFieldsSectionBlock(apiData);
        }, 50);
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
            this.sharedEventsService.emitOnApplyFilter.emit({
                source: this.sectionData.unique_id,
                highlight: this.filterValue.trim().toLowerCase()
            });
        }
        this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.onComponentEvent('OnFilterClick');
    }
    /** Whether one or more rows are selected. */
    isIndeterminateSelected() {
        const SelectableItems = this.dataSource.data.filter(function (el) { return el['isSelectable'] == true; })
            .map(r => r[this.primaryKeyValue]);
        let iFound = false;
        for (let i = 0; i < SelectableItems.length; i++) {
            if (this.selection.selected.includes(SelectableItems[i])) {
                iFound = true;
            }
        }
        // console.log(SelectableItems,this.selection.selected, allFound);
        return iFound;
    }
    /** Whether the number of selected elements matches the total number of rows. */
    // isAllSelected() {
    //     const SelectableItems = this.dataSource.data.filter(function (el) {return el['isSelectable']==true})
    //     .map(r => r[this.primaryKeyValue]);
    //     let allFound = true;
    //     for (let i = 0; i < SelectableItems.length; i++) {
    //         if (!this.selection.selected.includes(SelectableItems[i]))
    //         {
    //             allFound = false;
    //             break;
    //         }            
    //     }
    //     // console.log(SelectableItems,this.selection.selected, allFound);
    //     return allFound;
    // }
    isAllSelected() {
        const selectedIds = new Set(this.selection.selected);
        const selectableItems = this.dataSource.data
            .filter(item => item['isSelectable'])
            .map(item => item[this.primaryKeyValue]);
        return selectableItems.every(id => selectedIds.has(id));
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.dataSource.data.forEach((row) => {
                if (this.primaryKeyValue && row['isSelectable']) {
                    this.selection.deselect(row[this.primaryKeyValue]);
                }
            });
        }
        else {
            this.dataSource.data.forEach((row) => {
                if (this.primaryKeyValue && row['isSelectable']) {
                    this.selection.select(row[this.primaryKeyValue]);
                }
            });
        }
        // this.isAllSelected() ?
        //     this.selection.clear() :
        //     this.dataSource.data.forEach((row) => {
        //         if(this.primaryKeyValue && row['isSelectable'])
        //         {
        //             this.selection.select(row[this.primaryKeyValue])
        //         }
        //     });
        // this.storeData = this.selection.selected;
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
    onNexPageChange(event) {
        this.pageIndex = this.pageIndex + 1;
        this.isShowMoreClicked = true;
        event.nextPage();
        let obj = {
            pageIndex: this.pageIndex,
            pageSize: event.pageSize,
            length: event.length
        };
        this.onPaginationChange(obj);
    }
    onNextPageChange(paginator) {
        this.nextPageIndex = this.nextPageIndex + 1;
        const nextPageIndex = this.nextPageIndex;
        this.isShowMoreClicked = true;
        // console.log('total',this.paginationTotalCount);
        // console.log("paginator.getNumberOfPages()--",paginator.getNumberOfPages());
        // var paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
        if (nextPageIndex <= this.paginationTotalCount || nextPageIndex <= paginator.length) {
            paginator.pageIndex = nextPageIndex;
            const event = {
                pageIndex: 1,
                pageSize: (paginator.pageSize * nextPageIndex) + this.pageItems[0],
                length: paginator.length > 0 ? paginator.length : this.paginationTotalCount
            };
            this.pageEvent = event;
            if ((paginator.pageSize * nextPageIndex) + this.pageItems[0] >= this.paginationTotalCount) {
                this.SeemoreHide = false;
            }
            // Emit manually if you're using a function to fetch data
            this.onPaginationChange(event);
            // event.nextPage()
        }
        else {
            var obj = {
                name: this.paginationApiKeys[1],
                value: Number(1)
            };
            this.setPrimaryKey(obj);
        }
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
                            value: this.isShowMoreClicked ? Number(event[key]) : Number(event[key]) + 1
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
        if (this.scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, iscontextMenu = false) {
        // checking the unique ids and storing the data
        this.displayedFields.forEach((field) => {
            if (data[field.unique_id] !== undefined && field.field_type !== "Menu" && field.field_type !== 'ToggleButton') {
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
        // if (this.primaryKeyVal && this.type != 'Table-Multi-Select-V2') {
        //     this.setPrimaryKey({
        //         name: this.primaryKeyVal,
        //         value: data[this.primaryKeyVal]
        //     });
        // }
        if (!iscontextMenu) {
            for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
                }
            }
        }
        this.sharedEventsService.tableCellDataSet.emit(true);
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
                // this.storeData = this.selection.selected;
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
    //filter checkbox select all
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    //filter checkbox select
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    //filter checkbox select all
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
    //filter checkbox select on basis change will happen
    toggleFilterBox() {
        this.togglefilterBox = !this.togglefilterBox;
        if (this.togglefilterBox == false) {
            this.searchFilterHeaderTextbox = [];
            this.searchFilterHeaderDate = [];
            this.task.subtasks.forEach(x => {
                if (x.completed == true && x.value == "textbox") {
                    this.searchFilterHeaderTextbox.push(x.name);
                }
                if (x.completed == true && x.value == "date") {
                    this.searchFilterHeaderDate.push(x.name);
                }
            });
        }
    }
    //check filters applied
    getCheckboxfilterData(fields) {
        this.task = {
            name: 'Toggle All',
            completed: false,
            subtasks: [],
        };
        let subtasks = [];
        fields.forEach(x => {
            let complete = false;
            let value = '';
            if (this.searchFilterHeaderTextbox.includes(x.unique_id)) {
                complete = true;
                value = 'textbox';
            }
            if (this.searchFilterHeaderDate.includes(x.unique_id)) {
                complete = true;
                value = 'date';
            }
            let task = {
                name: x.unique_id,
                completed: complete,
                value: value
            };
            subtasks.push(task);
        });
        this.task.subtasks = subtasks;
    }
    createFilter() {
        let filterFunction = function (data, filter) {
            let searchTerms = JSON.parse(filter);
            let isFilterSet = false;
            for (const col in searchTerms) {
                if (searchTerms[col].toString() !== '') {
                    isFilterSet = true;
                }
                else {
                    delete searchTerms[col];
                }
            }
            let nameSearch = () => {
                let found = false;
                if (isFilterSet) {
                    for (const col in searchTerms) {
                        searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                                found = true;
                            }
                        });
                    }
                    return found;
                }
                else {
                    return true;
                }
            };
            return nameSearch();
        };
        return filterFunction;
    }
    filterChange(f, value, type) {
        if (type == "date") {
            value = value != null ? moment.default(new Date(value).toISOString()).format('M/D/YYYY') : '';
        }
        this.filterValues[f.response_api_key] = value.trim().toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
    }
    //   resetFilters() {
    //     this.filterValues = {}
    //     this.filterSelectObj.forEach((value, key) => {
    //       value.modelValue = undefined;
    //     })
    //     this.dataSource.filter = "";
    //   }
    isHTML(content) {
        return /<[a-z][\s\S]*>/i.test(content);
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
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    // Generic function to handle both drag-and-drop and selection disabling
    shouldDisableRowForAction(row, disableValues, actionType) {
        if (!disableValues) {
            return actionType === 'drag' ? !this.dragDropTableRows : false;
        }
        try {
            // Split the disable values into individual conditions
            const conditions = disableValues.split("||");
            // Iterate over each condition
            for (const condition of conditions) {
                const [keyPart, valuePart] = condition.split("|");
                // Skip if the condition is invalid (missing key or value)
                if (!keyPart || !valuePart)
                    continue;
                // Get the API keys related to the key part
                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(keyPart);
                // Iterate over each API key
                for (const apiKey of apiKeys) {
                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split("##")[0]);
                    // Skip if no valid handler data or value
                    if (!handlerData || !handlerData.value)
                        continue;
                    // Extract the field path and get the last part (field name)
                    const fieldPath = apiKey.split("##").length > 1 ? apiKey.split("##")[1] : "";
                    const fieldParts = fieldPath.split(".");
                    const fieldName = fieldParts[fieldParts.length - 1];
                    // Get the value of the field in the row
                    const rowFieldValue = row[fieldName];
                    // Enhanced comparison to handle boolean/string conversions
                    if (rowFieldValue !== undefined && this.compareValues(rowFieldValue, valuePart)) {
                        // console.log(`Row ${row[this.primaryKeyVal]} disabled for ${actionType}: ${fieldName}=${rowFieldValue}`);
                        return true;
                    }
                }
            }
            return false;
        }
        catch (error) {
            console.error(`Error checking if row needs to be disabled for ${actionType}:`, error);
            return false;
        }
    }
    // Helper function to handle value comparison with type conversion
    compareValues(rowValue, compareValue) {
        // Direct string comparison
        if (String(rowValue) === String(compareValue)) {
            return true;
        }
        // Handle boolean to string conversions
        if (rowValue === true && (compareValue === "1" || compareValue.toLowerCase() === "true")) {
            return true;
        }
        if (rowValue === false && (compareValue === "0" || compareValue.toLowerCase() === "false")) {
            return true;
        }
        return false;
    }
    // Updated shouldDisableDragAndDropForRow to use the generic function
    shouldDisableDragAndDropForRow(row) {
        return this.shouldDisableRowForAction(row, this.disableRowValues, 'drag');
    }
    // Updated shouldDisableSelectionForRow to use the generic function
    shouldDisableSelectionForRow(row) {
        return this.shouldDisableRowForAction(row, this.disableRowSelectionValues, 'selection');
    }
    static ɵfac = function CeeTableV2Component_Factory(t) { return new (t || CeeTableV2Component)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTableV2Component, selectors: [["app-cee-table-v2"]], viewQuery: function CeeTableV2Component_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, 5);
            i0.ɵɵviewQuery(MatSort, 5);
            i0.ɵɵviewQuery(CdkDropList, 7);
            i0.ɵɵviewQuery(SortableHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropList = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headers = _t);
        } }, hostBindings: function CeeTableV2Component_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeTableV2Component_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { stepId: "stepId", paginateValue: "paginateValue", fieldData: "fieldData", sectionData: "sectionData", type: "type", rowData: "rowData", rootData: "rootData", primaryKeyIndex: "primaryKeyIndex" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], ["scrollContainer", ""], ["table", ""], ["basicDatepicker", ""], ["page", ""], [3, "scroll", 4, "ngIf"], [3, "scroll"], ["floatLabel", "never", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "filterIcon", 3, "click", 4, "ngIf"], ["class", "filter-box", 4, "ngIf"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource", "class", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], ["cdkScrollable", "", 1, "table-container"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", "cdkDropList", "", "cdkDropListData", "data", "cdkDropListScrollContainer", "scrollContainer", "cdkDropListAutoScrollDisabled", "false", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", "click", "cdkDropListDropped", 4, "ngIf"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", "click", 4, "ngIf"], ["class", "no-data-info", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "page", 4, "ngIf"], ["class", "seeMoreContainer", 4, "ngIf"], ["floatLabel", "never"], ["matInput", "", 3, "keyup", "ngModelChange", "placeholder", "ngModel"], ["mat-mini-fab", "", "aria-label", "filterIcon", 3, "click"], ["aria-hidden", "false", "aria-label", "icon", "fontIcon", "filter"], [1, "filter-box"], [1, ""], ["color", "primary", 1, "example-margin", 3, "change", "checked", "indeterminate"], [1, "example-list-section"], [4, "ngFor", "ngForOf"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cee-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "loading", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col"], ["mat-cell", "", 1, "loading"], [1, "bar"], ["mat-header-row", ""], ["mat-row", "", 1, "cee-table-row"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", "cdkDropList", "", "cdkDropListData", "data", "cdkDropListScrollContainer", "scrollContainer", "cdkDropListAutoScrollDisabled", "false", 3, "resize", "matSortChange", "click", "cdkDropListDropped", "dataSource", "ngClass", "id"], ["matColumnDef", "Select"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Rearrange"], ["mat-header-cell", "", "scope", "col", "class", "drag-column-header", 4, "matHeaderCellDef"], [3, "matColumnDef", "sticky", "stickyEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "expandableOption"], ["matColumnDef", "expandedResp"], ["matColumnDef", "expandedDetail"], ["matColumnDef", "expandedStep"], ["mat-cell", "", "id", "table-cell-inline-step", 4, "matCellDef"], ["mat-header-row", "", "class", "cee-table-header", 4, "matHeaderRowDef"], ["mat-row", "", "cdkDrag", "", 3, "id", "cdkDragData", "cdkDragDisabled", "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 3, "class", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "check_static", 1, "table-checkbox", 3, "change", "checked", "disabled", "indeterminate", "aria-label"], ["mat-cell", ""], ["name", "radio"], [1, "table-radio", 3, "change", "id", "value", "checked", "disabled"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked"], ["mat-header-cell", "", "scope", "col", 1, "drag-column-header"], [1, "mat-drag-icon", 3, "ngClass"], [1, "drag-custom-icon"], [3, "matColumnDef", "sticky", "stickyEnd"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index", 4, "matHeaderCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index"], [3, "sort", "ngClass", "sortable", "sorting"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", "disableClear", ""], [1, "input_filter_box"], [1, "width_clear"], ["class", "width_clear", 4, "ngIf"], ["matInput", "", "type", "text", 3, "keyup", "placeholder"], [3, "dateChange", "matDatepicker"], [3, "for"], ["mat-cell", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "visibility", "hidden"], ["mat-button", "", 1, "cee-table-expandable-option", 3, "click"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cee-table-detail-cell", 4, "ngIf"], [1, "cee-table-detail-cell"], [2, "height", "0px", "min-height", "0px"], [1, "hidden-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], ["mat-cell", "", "id", "table-cell-inline-step"], [3, "stepId", "startSession", 4, "ngIf"], [3, "stepId", "startSession"], ["mat-header-row", "", 1, "cee-table-header"], ["mat-row", "", "cdkDrag", "", 3, "click", "contextmenu", "id", "cdkDragData", "cdkDragDisabled"], ["mat-row", ""], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "resize", "matSortChange", "click", "dataSource", "ngClass", "id"], [3, "matColumnDef", "sticky", "stickyEnd", 4, "ngFor", "ngForOf"], ["mat-row", "", 3, "id", "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked", "aria-label"], [3, "innerHTML"], ["mat-row", "", 3, "click", "contextmenu", "id"], [1, "no-data-info"], ["showFirstLastButtons", "", 3, "page", "pageSizeOptions"], [1, "seeMoreContainer"], ["showFirstLastButtons", "", 2, "visibility", "hidden", 3, "page", "pageSizeOptions", "pageSize"], ["mat-button", "", "class", "seeMoreButton", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "seeMoreButton", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "cee-table-detail-label", 4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "cee-table-detail-label"], [3, "sectionData", "rootData", "rowData", "stepId", "type"], ["class", " cee-table-detail-label", 4, "ngIf"]], template: function CeeTableV2Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_Template, 15, 11, "ng-container", 5)(1, CeeTableV2Component_ng_template_1_Template, 13, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible && (ctx.fieldData == null ? null : ctx.fieldData.length) > 0);
        } }, dependencies: () => [CeeTableV2Component, MatSortModule, i12.MatSort, i12.MatSortHeader, DragDropModule, i13.CdkScrollable, i14.CdkDropList, i14.CdkDrag, MatFormFieldModule, i12$1.MatFormField, i12$1.MatLabel, MatInputModule, i12$2.MatInput, MatIconModule, i15.MatIcon, MatDatepickerModule, i16.MatDatepicker, i16.MatDatepickerInput, i16.MatDatepickerToggle, CommonModule, i13$1.NgClass, i13$1.NgComponentOutlet, i13$1.NgForOf, i13$1.NgIf, i13$1.NgTemplateOutlet, i13$1.NgSwitch, i13$1.NgSwitchCase, i13$1.NgSwitchDefault, i13$1.AsyncPipe, MatCheckboxModule, i10.MatCheckbox, FormsModule, i14$1.DefaultValueAccessor, i14$1.NgControlStatus, i14$1.NgModel, MatRadioModule, i12$3.MatRadioGroup, i12$3.MatRadioButton, MatPaginatorModule, i1.MatPaginator, MatTableModule, i20.MatTable, i20.MatHeaderCellDef, i20.MatHeaderRowDef, i20.MatColumnDef, i20.MatCellDef, i20.MatRowDef, i20.MatHeaderCell, i20.MatCell, i20.MatHeaderRow, i20.MatRow, ResizeColumnDirective, SortableHeaderDirective, BlockRendererComponent, TooltipModule, StepRendererComponent, CdkScrollableModule], styles: ["@charset \"UTF-8\";table[_ngcontent-%COMP%]{width:100%}tr.cee-step-row[_ngcontent-%COMP%], tr.cee-detail-row[_ngcontent-%COMP%], tr.cee-resp-row[_ngcontent-%COMP%]{height:0}.cee-step-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-resp-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.cee-table-detail[_ngcontent-%COMP%], .cee-table-resp[_ngcontent-%COMP%]{overflow:hidden;display:flex}.cee-table-detail[_ngcontent-%COMP%]{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed[_ngcontent-%COMP%]{max-height:0}.cee-table-resp[_ngcontent-%COMP%]{height:0}.cee-table-detail-label[_ngcontent-%COMP%]{font-weight:500;display:inline}.cee-table-detail-cell[_ngcontent-%COMP%]{padding:5px 0;margin-right:10px}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table[_ngcontent-%COMP%]   tr.parent[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{content:\"-\";background-color:#d33333}@keyframes _ngcontent-%COMP%_loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading[_ngcontent-%COMP%]{position:relative}.loading[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading[_ngcontent-%COMP%]:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:_ngcontent-%COMP%_loading 1s infinite}.expandTable[_ngcontent-%COMP%]{width:100%}.expandTable.resizing[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{position:relative}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:last-child)   .resize-holder[_ngcontent-%COMP%]{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:not(:nth-child(1)), .expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:nth-child(1)){padding:0 10px}span[_ngcontent-%COMP%]{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case[_ngcontent-%COMP%]:hover:after{content:\"\\2191\"}span.ce-label.asc[_ngcontent-%COMP%]:after{content:\"\\2191\"}span.ce-label.desc[_ngcontent-%COMP%]:after{content:\"\\2193\"}.input_filter_box[_ngcontent-%COMP%]{width:100%!important}.width_clear[_ngcontent-%COMP%]{float:left}.filter-box[_ngcontent-%COMP%]{z-index:1000;background-color:#fff;width:40%;position:absolute;display:flex;flex-direction:column;gap:10px;box-shadow:0 2.8px 2.2px #00000009,0 6.7px 5.3px #0000000c,0 12.5px 10px #0000000f,0 22.3px 17.9px #00000012,0 41.8px 33.4px #00000016,0 100px 80px #0000001f}.example-list-section[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.show-hide-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"], data: { animation: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ] }, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTableV2Component, [{
        type: Component,
        args: [{ selector: 'app-cee-table-v2', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ], imports: [MatSortModule, DragDropModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, CommonModule, MatCheckboxModule, FormsModule, MatRadioModule, MatPaginatorModule, NgSwitch, MatTableModule, NgClass, ResizeColumnDirective, SortableHeaderDirective, forwardRef(() => BlockRendererComponent), TooltipModule, CdkDropList, CdkDrag, forwardRef(() => StepRendererComponent), CdkScrollableModule], template: "<ng-container *ngIf=\"isVisible && fieldData?.length > 0\" (scroll)=\"onScroll($event)\">\r\n    <mat-form-field *ngIf=\"showFilter\" floatLabel=\"never\">\r\n        <input matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\" [(ngModel)]=\"filterValue\">\r\n    </mat-form-field>\r\n    <button mat-mini-fab aria-label=\"filterIcon\" (click)=\"toggleFilterBox()\" *ngIf=\"checkboxFilter\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"icon\" fontIcon=\"filter\"></mat-icon>\r\n    </button>\r\n    <div class=\"filter-box\" *ngIf=\"togglefilterBox\">\r\n        <span class=\"\">\r\n            <mat-checkbox class=\"example-margin\" [checked]=\"allComplete\" color=\"primary\"\r\n                [indeterminate]=\"someComplete()\" (change)=\"setAll($event.checked)\">\r\n                {{task.name}}\r\n            </mat-checkbox>\r\n        </span>\r\n        <span class=\"example-list-section\">\r\n            <div *ngFor=\"let subtask of task.subtasks; let i = index\">\r\n                <mat-checkbox [(ngModel)]=\"subtask.completed\" color=\"primary\" (ngModelChange)=\"updateAllComplete()\">\r\n                    {{subtask.name}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </span>\r\n    </div>\r\n    <!-- ######################## Table For Skeleton Loader ########################### -->\r\n    <table aria-describedby=\"Skeleton Loader\"\r\n        *ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true'\" mat-table\r\n        [dataSource]=\"dataSourceLoading\"\r\n        class=\"{{sectionData.field_style?sectionData.field_style.custom_class_name:''}}\">\r\n        <ng-container matColumnDef=\"{{f}}\" *ngFor=\"let f of displayedColumns; let i = index\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"> {{fieldData[i] && fieldData[i].field_label}} </th>\r\n            <td mat-cell class=\"loading\" *matCellDef=\"let element\">\r\n                <div class=\"bar\"></div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row class=\"cee-table-row\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\"\r\n            *ngIf=\"columnFilterType.indexOf('none') == -1\"\r\n            (click)=\"showHideFilter('show-hide-container-',sectionData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-container-{{sectionData.unique_id}}\" class=\"show-hide-container col-3 mt-20 d-none\"\r\n        *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"sectionData.field_label\" class=\"text-secondary m-2\">{{sectionData.field_label}}\r\n                Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\"\r\n                *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\"\r\n                        [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>\r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n    <!-- ######################## Data Table ########################### -->\r\n    <div class=\"table-container\" cdkScrollable #scrollContainer>\r\n        <!-- ######################## Data Table With Drag & Drop Rows  ########################### -->\r\n        <table aria-describedby=\"Data Table\"\r\n            *ngIf=\"(dragDropTableRows && ((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true'))\"\r\n            mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n            class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\"\r\n            [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\" id=\"table_{{sectionData.unique_id}}\"\r\n            (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event); \"\r\n            (click)=\"triggerSeeMore()\" cdkDropList (cdkDropListDropped)=\"dropRow($event)\" cdkDropListData=\"data\" cdkDropListScrollContainer=\"scrollContainer\" cdkDropListAutoScrollDisabled=\"false\">\r\n            <ng-container matColumnDef=\"Select\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                    <ng-container *ngIf=\"type == tms\">\r\n                        <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\" [disabled]=\"isSeletable=='0'\"\r\n                            [indeterminate]=\"isIndeterminateSelected() && !isAllSelected()\"\r\n                            [aria-label]=\"checkboxLabel()\">\r\n                        </mat-checkbox>\r\n                    </ng-container>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"type == tss && (data.isSelectable || disableRowSelectionValues !== '')\">\r\n                        <mat-radio-group name=\"radio\">\r\n                            <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                                (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\"\r\n                                [disabled]=\"!data.isSelectable\" [attr.aria-label]=\"'Select '+position\">\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"type == tms && (data.isSelectable || disableRowSelectionValues !== '')\">\r\n                    <mat-checkbox\r\n                        name=\"check_{{ position }}\"\r\n                        id=\"check_{{ position }}\"\r\n                        class=\"table-checkbox\"\r\n                        (change)=\"list_change(data, $event.checked)\"\r\n                        [disabled]=\"!data.isSelectable\"\r\n                        [checked]=\"primaryKeyValue ? selection.isSelected(data[primaryKeyValue]) : false\"\r\n                        [attr.aria-label]=\"checkboxLabel(data)\">\r\n                    </mat-checkbox>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Rearrange\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\" class=\"drag-column-header\">\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"dragDropTableRows\" >\r\n                        <mat-icon [ngClass]=\"data.isSelectable ? 'example-drag-cursor' : 'example-drag-cursor-disable'\" class=\"mat-drag-icon\">reorder</mat-icon>\r\n                        <span class=\"drag-custom-icon\">\r\n                        </span>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container [matColumnDef]=\"f.unique_id\"\r\n                *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\"\r\n                [sticky]=\"colSticky.includes(f.unique_id)\" [stickyEnd]=\"colStickyEnd.includes(f.unique_id)\">\r\n                <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\"\r\n                        scope=\"col\">\r\n                        <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}}\r\n                            sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                        [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\" disableClear>\r\n                        <div class=\"input_filter_box\">\r\n                            <div class=\"width_clear\">{{f.field_label}}</div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderTextbox.includes(f.unique_id)\">\r\n                                <input matInput type=\"text\" (keyup)=\"filterChange(f, $event.target.value, 'text')\"\r\n                                    placeholder=\"search {{f.unique_id}}\">\r\n                            </div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderDate.includes(f.unique_id)\">\r\n                                <mat-label>Choose a date</mat-label>\r\n                                <input [matDatepicker]=\"basicDatepicker\"\r\n                                    (dateChange)=\"filterChange(f, $event.target.value, 'date')\">\r\n                                <mat-datepicker-toggle [for]=\"basicDatepicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #basicDatepicker></mat-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </th>\r\n                </ng-container>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                    (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                    <ng-template\r\n                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandableOption\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable\r\n                        Option</span></th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <button mat-button class=\"cee-table-expandable-option\"\r\n                        (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                        === data ? collapseTitle : expandTitle}}</button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedResp\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                        <ng-container *ngFor=\"let f of fieldData let i = index; trackBy: trackByunique_id;\">\r\n                            <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div *ngIf=\"this.type === 'Table-Expandable-V2'\" class=\"cee-table-detail-cell\">\r\n                            <button mat-button class=\"cee-table-expandable-option\"\r\n                                (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                                === data ? collapseTitle : expandTitle}}</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                        [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                        style=\"height: 0px; min-height: 0px;\">\r\n                        <ng-container *ngFor=\"let f of fieldData let i = index; trackBy: trackByunique_id;\">\r\n                            <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                                <div\r\n                                    class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                    <ng-template\r\n                                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                    </ng-template>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                            <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                                class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                            </app-block-renderer>\r\n                        </ng-container>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedStep\">\r\n                <td mat-cell id=\"table-cell-inline-step\" *matCellDef=\"let data; dataIndex as position\"\r\n                    [attr.colspan]=\"displayedColumns.length\">\r\n                    <!--  *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\" -->\r\n                    <!-- {{inlineEditStepId}} /\r\n                    {{data[primaryKeyValue]}} == {{selectedPrimaryKeyVal}} -->\r\n                    <app-step-renderer *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\"\r\n                        [stepId]=\"inlineEditStepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" id=\"table-row-{{row[primaryKeyValue]}}\" cdkDrag\r\n                [cdkDragData]=\"row\"\r\n                [cdkDragDisabled]=\"shouldDisableDragAndDropForRow(row)\"\r\n                class=\"cee-table-row {{expandedElement === row?'cee-expanded-row':''}} {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}} {{primaryKeyValue && type == tms ? (selection.selected.includes(row[primaryKeyValue])? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n                (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n                class=\"cee-resp-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n                class=\"cee-detail-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedStep']\"\r\n                class=\"cee-step-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        </table>\r\n        <!-- ######################## Data Table Without Drag & Drop Rows  ########################### -->\r\n        <table aria-describedby=\"Data Table\"\r\n            *ngIf=\"(!dragDropTableRows && ((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true'))\"\r\n            mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n            class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\"\r\n            [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\" id=\"table_{{sectionData.unique_id}}\"\r\n            (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event);\"\r\n            (click)=\"triggerSeeMore()\">\r\n            <ng-container matColumnDef=\"Select\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                    <ng-container *ngIf=\"type == tms\">\r\n                        <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\" [disabled]=\"isSeletable=='0'\"\r\n                            [indeterminate]=\"isIndeterminateSelected() && !isAllSelected()\"\r\n                            [aria-label]=\"checkboxLabel()\">\r\n                        </mat-checkbox>\r\n                    </ng-container>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"type == tss && data.isSelectable\">\r\n                        <mat-radio-group name=\"radio\">\r\n                            <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                                (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\"\r\n                                [disabled]=\"isSeletable=='0'\" [attr.aria-label]=\"'Select '+position\">\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"type == tms && data.isSelectable\">\r\n                        <mat-checkbox name=\"check_{{position}}\" id=\"check_{{position}}\" class=\"table-checkbox\"\r\n                            (change)=\"list_change(data, $event.checked);\" [disabled]=\"isSeletable=='0'\"\r\n                            [checked]=\"primaryKeyValue? selection.isSelected(data[primaryKeyValue]): false\"\r\n                            [aria-label]=\"checkboxLabel(data)\"></mat-checkbox>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container [matColumnDef]=\"f.unique_id\" *ngFor=\"let f of fieldData; let i = index\"\r\n                [sticky]=\"colSticky.includes(f.unique_id)\" [stickyEnd]=\"colStickyEnd.includes(f.unique_id)\">\r\n                <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\"\r\n                        scope=\"col\">\r\n                        <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}}\r\n                            sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                        [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\" disableClear>\r\n                        <div class=\"input_filter_box\">\r\n                            <ng-container *ngIf=\"isHTML(f.field_label) == true\">\r\n                                <span [innerHTML]=\"f.field_label\"></span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"isHTML(f.field_label) == false\">\r\n                                <div class=\"width_clear\">{{f.field_label}}</div>\r\n                            </ng-container>\r\n                            <!-- <div class=\"width_clear\">{{f.field_label}}</div> -->\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderTextbox.includes(f.unique_id)\">\r\n                                <input matInput type=\"text\" (keyup)=\"filterChange(f, $event.target.value, 'text')\"\r\n                                    placeholder=\"search {{f.unique_id}}\">\r\n                            </div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderDate.includes(f.unique_id)\">\r\n                                <mat-label>Choose a date</mat-label>\r\n                                <input [matDatepicker]=\"basicDatepicker\"\r\n                                    (dateChange)=\"filterChange(f, $event.target.value, 'date')\">\r\n                                <mat-datepicker-toggle [for]=\"basicDatepicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #basicDatepicker></mat-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </th>\r\n                </ng-container>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                    (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                    <ng-template\r\n                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandableOption\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable\r\n                        Option</span></th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <button mat-button class=\"cee-table-expandable-option\"\r\n                        (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                        === data ? collapseTitle : expandTitle}}</button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedResp\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                        <ng-container *ngFor=\"let f of fieldData\">\r\n                            <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div *ngIf=\"this.type === 'Table-Expandable-V2'\" class=\"cee-table-detail-cell\">\r\n                            <button mat-button class=\"cee-table-expandable-option\"\r\n                                (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                                === data ? collapseTitle : expandTitle}}</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                        [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                        style=\"height: 0px; min-height: 0px;\">\r\n                        <ng-container *ngFor=\"let f of fieldData\">\r\n                            <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                                <div\r\n                                    class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                    <ng-template\r\n                                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                    </ng-template>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                            <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                                class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                            </app-block-renderer>\r\n                        </ng-container>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedStep\">\r\n                <td mat-cell id=\"table-cell-inline-step\" *matCellDef=\"let data; dataIndex as position\"\r\n                    [attr.colspan]=\"displayedColumns.length\">\r\n                    <!--  *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\" -->\r\n                    <!-- {{inlineEditStepId}} /\r\n                    {{data[primaryKeyValue]}} == {{selectedPrimaryKeyVal}} -->\r\n                    <app-step-renderer *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\"\r\n                        [stepId]=\"inlineEditStepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" id=\"table-row-{{row[primaryKeyValue]}}\"\r\n                class=\"cee-table-row {{expandedElement === row?'cee-expanded-row':''}} {{row.rowData ? row.rowData.conditionalCustomClass : ''}} {{primaryKeyValue && type == tms ? (selection.selected.includes(row[primaryKeyValue])? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n                (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n                class=\"cee-resp-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n                class=\"cee-detail-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedStep']\"\r\n                class=\"cee-step-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"no-data-info\" *ngIf=\"loaded && dataSource.filteredData.length === 0\">{{noDataFoundLabel}}</div>\r\n    <mat-paginator *ngIf=\"showPagination == 'true'\" [pageSizeOptions]=\"pageItems\" (page)=\"onPaginationChange($event)\"\r\n        showFirstLastButtons>\r\n    </mat-paginator>\r\n    <!-- More Button (outside the mat-table but inside the table element) -->\r\n    <div *ngIf=\"showPagination == 'load_more' && showSeeMore\" class=\"seeMoreContainer\">\r\n        <mat-paginator #page style=\"visibility:hidden\" [pageSizeOptions]=\"pageItems\" (page)=\"pageEvent = $event\"\r\n            [pageSize]=\"pageItems[0]\" showFirstLastButtons></mat-paginator>\r\n        <button mat-button *ngIf=\"SeemoreHide\" (click)=\"onNextPageChange(page)\"\r\n            class=\"seeMoreButton\">{{paginationNextLabel}}</button>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n<ng-template #cellData let-f='f' let-position='position' let-data='data' let-expandedDetail='expandedDetail'\r\n    let-method='method'>\r\n    <ng-container [ngSwitch]=\"f.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>:\r\n                </span></label>\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-label [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-label> -->\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'Attachments'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>:\r\n                </span></label>\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Image'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-image [rowData]=\"data['rowData'][f.unique_id]\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-image> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id],keepState: true, fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-toggle-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" [sectionData]=\"sectionData\"\r\n                class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-toggle-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-picker [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-picker> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-menu [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-menu> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Table-V2'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <app-cee-table-v2 [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\"\r\n                    [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n                </app-cee-table-v2>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n            *ngSwitchCase=\"f.field_type === 'List-V2' || f.field_type === 'List-Expandable-V2' ? f.field_type : '' \">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap['List-V2'] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n            </div>\r\n            <!-- <app-list-renderer-v2 [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-list-renderer-v2> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'TreeView'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n            </div>\r\n            <!-- <app-tree-renderer [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-tree-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f}\"></ng-container>\r\n            </div>\r\n            <!-- <app-dynamic-form [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n            </app-dynamic-form> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n            <div *ngIf='expandedDetail' class=\" cee-table-detail-label\">{{f.field_label}}<span>: </span></div>\r\n            {{data['rowData'][f.unique_id]?.value}}\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</ng-template>", styles: ["@charset \"UTF-8\";table{width:100%}tr.cee-step-row,tr.cee-detail-row,tr.cee-resp-row{height:0}.cee-step-row td,.cee-table-row td,.cee-resp-row td{border-bottom-width:0}.cee-table-detail,.cee-table-resp{overflow:hidden;display:flex}.cee-table-detail{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed{max-height:0}.cee-table-resp{height:0}.cee-table-detail-label{font-weight:500;display:inline}.cee-table-detail-cell{padding:5px 0;margin-right:10px}table td.r-control{position:relative;padding-left:30px;cursor:pointer}table td.r-control:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table tr.parent td.r-control:before{content:\"-\";background-color:#d33333}@keyframes loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading{position:relative}.loading .bar{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:loading 1s infinite}.expandTable{width:100%}.expandTable.resizing{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable .mat-header-cell{position:relative}.expandTable .mat-header-cell:not(:last-child) .resize-holder{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable .mat-cell:not(:nth-child(1)),.expandTable .mat-header-cell:not(:nth-child(1)){padding:0 10px}span{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case:hover:after{content:\"\\2191\"}span.ce-label.asc:after{content:\"\\2191\"}span.ce-label.desc:after{content:\"\\2193\"}.input_filter_box{width:100%!important}.width_clear{float:left}.filter-box{z-index:1000;background-color:#fff;width:40%;position:absolute;display:flex;flex-direction:column;gap:10px;box-shadow:0 2.8px 2.2px #00000009,0 6.7px 5.3px #0000000c,0 12.5px 10px #0000000f,0 22.3px 17.9px #00000012,0 41.8px 33.4px #00000016,0 100px 80px #0000001f}.example-list-section{display:flex;flex-wrap:wrap}.show-hide-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
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
        }], dropList: [{
            type: ViewChild,
            args: [CdkDropList, { static: true }]
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTableV2Component, { className: "CeeTableV2Component", filePath: "lib\\field-components\\cee-table-v2\\cee-table-v2.component.ts", lineNumber: 83 }); })();

export { CeeTableV2Component };
//# sourceMappingURL=ng-cee-core-cee-table-v2.component-DJIUef9R.mjs.map
