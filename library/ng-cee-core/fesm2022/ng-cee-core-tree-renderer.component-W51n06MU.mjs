import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, E as EmptyUtil, i as AlertModalComponent, c as SharedEventsServiceService, d as CEEInternalEmitterService, f as ApiDataService, e as AppDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTableDataSource } from '@angular/material/table';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgStyle, NgClass, CommonModule, NgSwitch } from '@angular/common';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i12$1 from '@angular/material/input';
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
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

const _c0 = a0 => ({ "color": a0 });
const _c1 = a0 => ({ list: a0, parent_index: "" });
const _c2 = a0 => ({ "active": a0 });
const _c3 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c4 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c5 = (a0, a1) => ({ list: a0, parent_index: a1 });
const _c6 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c8 = (a0, a1, a2, a3, a4, a5) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4, primaryKeyIndex: a5 });
function TreeRendererComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "mat-form-field", 12)(2, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeRendererComponent_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TreeRendererComponent_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function TreeRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r3.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r3.message_text, " ");
} }
function TreeRendererComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template, 2, 4, "p", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function TreeRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_2_div_1_Template, 2, 1, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "span", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template_span_click_3_listener() { const chipArray_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r5)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r5.keyName, " ");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template, 5, 1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1.displayValuesLazy));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1.displayValuesLazy));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const pos_r9 = i0.ɵɵnextContext().index; const parentIndex_r10 = i0.ɵɵnextContext().parent_index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggle("list_item" + parentIndex_r10 + "_" + pos_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pos_r9 = i0.ɵɵnextContext().index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r1.getExpandedStatus("list_item" + parentIndex_r10 + "_" + pos_r9)));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r14 = ctx.$implicit;
    const child_position_r15 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(3);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r14, data_r12, pos_r9, "child_" + child_position_r15));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r20, " ", field_r19.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r19.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r19)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r19.child_fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_Template, 1, 0, null, 25);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r15 = i0.ɵɵnextContext();
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r19, data_r12, pos_r9, position_r20));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_Template, 4, 8, "ng-container", 29)(2, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_Template, 1, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const elseField_r21 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r19.field_type === "Generic Block")("ngIfElse", elseField_r21);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r23 = ctx.$implicit;
    const child_position_r24 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(4);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c4, child_field_r23, data_r12, pos_r9, "child_" + child_position_r24));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    const field_r26 = ctx_r24.$implicit;
    const position_r27 = ctx_r24.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r27, " ", field_r26.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r26.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r26)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r26.child_fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_Template, 1, 0, null, 25);
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    const field_r26 = ctx_r24.$implicit;
    const position_r27 = ctx_r24.index;
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c4, field_r26, data_r12, pos_r9, position_r27));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 29)(2, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r26 = ctx.$implicit;
    const elseField_r28 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r26.field_type === "Generic Block")("ngIfElse", elseField_r28);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 30);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r22); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r12 ? null : data_r12); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r12["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r12 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r12 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r12.expandable_fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 32);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("d-none", ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵpropertyInterpolate2("id", "list_item", parentIndex_r10, "_", pos_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c5, data_r12[ctx_r1.additionalParameters["TreeViewKey"]], "_" + pos_r9));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_Template, 2, 10, "ul", 31);
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 32);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("d-none", ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵpropertyInterpolate2("id", "list_item", parentIndex_r10, "_", pos_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c5, data_r12[ctx_r1.additionalParameters["TreeViewKey"]], "_" + pos_r9));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_Template, 2, 10, "ol", 31);
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template, 1, 3, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template_div_click_2_listener() { const ctx_r10 = i0.ɵɵrestoreView(_r7); const data_r12 = ctx_r10.$implicit; const pos_r9 = ctx_r10.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r12, pos_r9)); })("keyup.enter", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template_div_keyup_enter_2_listener() { const ctx_r12 = i0.ɵɵrestoreView(_r7); const data_r12 = ctx_r12.$implicit; const pos_r9 = ctx_r12.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r12, pos_r9)); });
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_Template, 4, 2, "ng-container", 10)(4, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template, 7, 13, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(7, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(9, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_9_Template, 1, 0, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const pos_r9 = ctx.index;
    const defaultList_r29 = i0.ɵɵreference(6);
    const orderedList_r30 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0 && ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r9, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r9 ? "list-item-selected" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r12.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.additionalParameters["TreeViewType"] && ctx_r1.additionalParameters["TreeViewType"] == "ol" ? orderedList_r30 : defaultList_r29);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template, 10, 11, "li", 10);
} if (rf & 2) {
    const list_r31 = ctx.list;
    i0.ɵɵproperty("ngForOf", list_r31);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 18);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(7, TreeRendererComponent_ng_container_0_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 19)(8, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const defaultListTop_r32 = i0.ɵɵreference(4);
    const orderedListTop_r33 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.chipsDisplay);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("list-loader ", ctx_r1.listLoading ? "list-pending" : "list-loaded", "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.additionalParameters["TreeViewType"] && ctx_r1.additionalParameters["TreeViewType"] == "ol" ? orderedListTop_r33 : defaultListTop_r32);
} }
function TreeRendererComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r34 = ctx.$implicit;
    const position_r35 = ctx.index;
    const ctx_r35 = i0.ɵɵnextContext();
    const data_r37 = ctx_r35.$implicit;
    const pos_r38 = ctx_r35.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r39 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r39)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r34, data_r37, pos_r38, position_r35));
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 35);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r38 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r38, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r38 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 8, "ng-container", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationFirstLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template_button_click_0_listener() { const pageNumber_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r43)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r43 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pagination-btn-page ", pageNumber_r43 === ctx_r1.pagination.currentPage ? "active" : "", "");
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r43, "");
    i0.ɵɵproperty("disabled", pageNumber_r43 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(pageNumber_r43);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(ctx_r1.pagination.pageCount)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationLastLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", data_r45)("selected", data_r45 == ctx_r1.pagination.currentItemCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r45, "");
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "p", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template, 2, 2, "button", 39);
    i0.ɵɵelementStart(4, "button", 40);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationPrevious()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template, 2, 7, "button", 41);
    i0.ɵɵelementStart(7, "button", 42);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationNext()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template, 2, 2, "button", 43);
    i0.ɵɵelementStart(10, "select", 44);
    i0.ɵɵlistener("change", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_change_10_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onPaginationCountChange(); return i0.ɵɵresetView(ctx_r1.setPaginationCount()); });
    i0.ɵɵtwoWayListener("ngModelChange", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pagination.currentItemCount, $event) || (ctx_r1.pagination.currentItemCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(11, TreeRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template, 2, 3, "option", 45);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getRangeLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationFirstLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationPreviousLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationNextLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationLastLabel);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.pagination.currentItemCount);
    i0.ɵɵattribute("aria-label", "Select no of items to be displayed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pagination.pageItems);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template, 12, 11, "div", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.autoPagination);
} }
function TreeRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_div_1_Template, 3, 2, "div", 9)(2, TreeRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 10)(3, TreeRendererComponent_ng_container_0_ng_container_3_Template, 10, 5, "ng-container", 8)(4, TreeRendererComponent_ng_container_0_ng_container_4_Template, 3, 1, "ng-container", 8)(5, TreeRendererComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 8)(6, TreeRendererComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function TreeRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction6(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, field_r47.field_type, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-tree-renderer", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rowData", field_r47["rowData"])("sectionData", field_r47)("templateId", ctx_r1.templateId)("type", field_r47.field_type)("childList", ctx_r1.childList);
} }
function TreeRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 50);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 51)(2, TreeRendererComponent_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 51)(3, TreeRendererComponent_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 51)(4, TreeRendererComponent_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 51)(5, TreeRendererComponent_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 51)(6, TreeRendererComponent_ng_template_1_ng_container_6_Template, 4, 18, "ng-container", 51)(7, TreeRendererComponent_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 51)(8, TreeRendererComponent_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 51)(9, TreeRendererComponent_ng_template_1_ng_container_9_Template, 4, 19, "ng-container", 51)(10, TreeRendererComponent_ng_template_1_ng_container_10_Template, 2, 10, "ng-container", 51)(11, TreeRendererComponent_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r47 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r47.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
} }
function TreeRendererComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 54);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 55);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 56);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 57);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 58);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 59);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 60);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 61);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 50);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 51)(2, TreeRendererComponent_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 51)(3, TreeRendererComponent_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 51)(4, TreeRendererComponent_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 51)(5, TreeRendererComponent_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 51)(6, TreeRendererComponent_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 51)(7, TreeRendererComponent_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 51)(8, TreeRendererComponent_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 51)(9, TreeRendererComponent_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r50 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r50.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List");
} }
class TreeRendererComponent {
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
    showPagination = true;
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
    panelOpenState = false;
    items = [{
            title: 'title1',
            description: 'desc1',
            content: 'content1'
        }, {
            title: 'title2',
            description: 'desc2',
            content: 'content2'
        }];
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('./ng-cee-core-cee-label.component-3Du0Wv_U.mjs').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Textfield: defer(() => {
            if (!this.componentList['Textfield']) {
                this.componentList['Textfield'] = import('./ng-cee-core-cee-textfield.component-ddq1tk4O.mjs').then(m => m.CeeTextfieldComponent);
            }
            return this.componentList['Textfield'];
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
        Link: defer(() => {
            if (!this.componentList['Link']) {
                this.componentList['Link'] = import('./ng-cee-core-cee-link.component-LAUdVFMh.mjs').then(m => m.CeeLinkComponent);
            }
            return this.componentList['Link'];
        }),
        Video: defer(() => {
            if (!this.componentList['Video']) {
                this.componentList['Video'] = import('./ng-cee-core-cee-video.component-Bvg3K2NA.mjs').then(m => m.CeeVideoComponent);
            }
            return this.componentList['Video'];
        }),
        Table: defer(() => {
            if (!this.componentList['Table']) {
                this.componentList['Table'] = import('./ng-cee-core-cee-table.component-Dj5GWWHv.mjs').then(m => m.CeeTableComponent);
            }
            return this.componentList['Table'];
        }),
        TreeView: defer(() => {
            if (!this.componentList['TreeView']) {
                this.componentList['TreeView'] = Promise.resolve().then(function () { return treeRenderer_component; }).then(m => m.TreeRendererComponent);
            }
            return this.componentList['TreeView'];
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
    async ngOnInit() {
        let fromStore;
        let preRes;
        const tempApiRes = this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
            preRes = res;
        }, err => {
            console.error(err);
        });
        this.listCellAppData.stepId = this.stepId;
        const { additional_parameters, event_list } = this.sectionData;
        let keys = [];
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Show Chips':
                        this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'false' ? false : true;
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
                                const apiKey = this.sectionData.response_api_key.split('|')[0];
                                const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                if (handlerData) {
                                    fromStore = handlerData.value;
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
            if (Object.keys(this.childList).length) {
                this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                this.sectionData.fields = this.childList.block_fields;
            }
            else {
                const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                this.sectionData.fields = this.blockRenderedData.block_fields;
            }
            this.listElements = Array(this.pagination.currentItemCount);
            // check if the list has possible values
            if (this.sectionData.possible_values && this.sectionData.possible_values.length > 0) {
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
        // set radio value on load of a function
        this.showSelectedRadioValues();
        const unique_id = (this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id);
        this.variableObj['emitApiSuccessResponse_' +
            unique_id] =
            this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                this.setListData(res);
            }, err => {
                console.error(err);
                this.showLoading = false;
                this.noDataFound = true;
            });
        /**
         * check pre API response
         */
        tempApiRes.unsubscribe();
        if (preRes) {
            this.setListData(preRes);
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
            this.noDataFound = false;
            this.searchData = new MatTableDataSource(this.rowData.value);
            this.pagination.itemCount = this.rowData.value.length;
            this.onPaginationCountChange();
        }
        if (this.rowData) {
            this.appData.visible = this.rowData.visible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        // call the api event success emitter
        if (fromStore) {
            this.sharedEventsServiceService.emitApiSuccessResponse.emit(fromStore);
        }
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
    }
    setShownData() {
        // console.log(this.displayValuesLazy," -- ",this.iRowData," -- ",this.itemPerPage)
        this.rowDataShown = this.displayValuesLazy.slice(this.iRowData, this.iRowData + this.itemPerPage);
        // console.log(this.rowDataShown);
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
                        this.childList = childData;
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
                    // console.log("result: ",result);
                    this.searchData = new MatTableDataSource(result);
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
                this.searchData = new MatTableDataSource(res);
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
        // console.log(properties);
        this.displayValues = properties;
        this.checkCheckedValues();
        this.lazyLoading();
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
                // console.log("displayValuesLazy: ",this.displayValuesLazy);
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
    setRecursiveData(displayValues) {
        var dataSet = [];
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            // console.log("i: ",i);
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
                    // this.setRecursiveData(field.child_fields)
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
            if (this.additionalParameters['TreeViewKey'] in data && data[this.additionalParameters['TreeViewKey']].length > 0) {
                data[this.additionalParameters['TreeViewKey']] = this.setRecursiveData(data[this.additionalParameters['TreeViewKey']]);
            }
            dataSet.push(data);
        }
        return dataSet;
    }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            // console.log("i: ",i);
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
                    // this.setRecursiveData(field.child_fields)
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
            if (this.additionalParameters['TreeViewKey'] in data && data[this.additionalParameters['TreeViewKey']].length > 0) {
                data[this.additionalParameters['TreeViewKey']] = this.setRecursiveData(data[this.additionalParameters['TreeViewKey']]);
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
    list_change(data, isChecked, context) {
        const value = data[this.primaryKeyVal];
        if (isChecked) {
            if (this.type === 'List-Single-Select') {
                this.storeData = [];
            }
            this.storeData = this.storeData.concat([value]);
        }
        else {
            if (this.storeData.length > 0) {
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
        this.onComponentEvent('onclick');
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
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            let isEditable = false;
            let isVisible = false;
            if (field.is_editable === 1) {
                isEditable = true;
            }
            if (field.is_display === 1) {
                isVisible = true;
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: field.unique_id + '-' + list_pos,
                fromField: 'Tree',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData
            };
        }
        else {
            obj = {
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                html_id: field.unique_id + '-' + list_pos
            };
        }
        if (this.selectedObj.checkbox && this.sectionData.fields[this.selectedObj.checkbox].unique_id === field.unique_id) {
            this.list_change(data, obj.value, list_pos);
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
        if (this.sectionData.unique_id) {
            if (this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event.isDefault && event.event_name.toLowerCase() === name.toLowerCase()) {
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
    getExpandedStatus(elementId) {
        // console.log("elementId: ",elementId);
        var ele = document.getElementById(elementId);
        if (ele && !ele.classList.contains("d-none")) {
            return true;
        }
        else {
            return false;
        }
    }
    toggle(elementId) {
        if (this.additionalParameters['isTreeExpandable'] && this.additionalParameters['isTreeExpandable'].toLowerCase() == 'true') {
            // console.log("elementId: ",elementId)
            var ele = document.getElementById(elementId);
            if (!ele.classList.contains("d-none")) {
                ele.classList.add("d-none");
            }
            else {
                ele.classList.remove("d-none");
            }
        }
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
    static ɵfac = function TreeRendererComponent_Factory(t) { return new (t || TreeRendererComponent)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeRendererComponent, selectors: [["app-tree-renderer"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["defaultListTop", ""], ["orderedListTop", ""], ["recursiveListTmpl", ""], ["defaultList", ""], ["orderedList", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "expand-child", "aria-hidden", "expand", 3, "ngClass", "click", 4, "ngIf"], [3, "click", "keyup.enter"], ["aria-hidden", "expand", 1, "expand-child", 3, "click", "ngClass"], [4, "ngIf", "ngIfElse"], ["role", "button", 3, "click"], [3, "d-none", "id", 4, "ngIf"], [3, "id"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-text-container"], ["role", "button", "class", "pagination-btn-first", "aria-label", "Select First", 3, "disabled", "click", 4, "ngIf"], ["role", "button", "aria-label", "Select Previous", 1, "pagination-btn-previous", 3, "click", "disabled"], ["role", "button", 3, "disabled", "class", "click", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select Next", 1, "pagination-btn-next", 3, "click", "disabled"], ["role", "button", "class", "pagination-btn-last", "aria-label", "Select Last", 3, "disabled", "click", 4, "ngIf"], [1, "pagination-count-selector", 3, "change", "ngModelChange", "ngModel"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select First", 1, "pagination-btn-first", 3, "click", "disabled"], ["role", "button", 3, "click", "disabled"], ["role", "button", "aria-label", "Select Last", 1, "pagination-btn-last", 3, "click", "disabled"], [3, "ngValue", "selected"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function TreeRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_Template, 7, 6, "ng-container", 8)(1, TreeRendererComponent_ng_template_1_Template, 12, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, TreeRendererComponent_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [TreeRendererComponent, MatFormFieldModule, i12.MatFormField, MatInputModule, i12$1.MatInput, NgStyle, NgClass, CommonModule, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, i13.AsyncPipe, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.NgControlStatus, i14.NgModel], styles: ["@charset \"UTF-8\";div.expand-child[_ngcontent-%COMP%]:after{content:\"+\";color:#777;font-weight:700;float:right;margin-left:5px}div.expand-child.active[_ngcontent-%COMP%]:after{content:\"\\2212\"}div.expand-child[_ngcontent-%COMP%]{background-color:#fff;color:#777;cursor:pointer;border:none;text-align:left;outline:none;font-size:15px}div.expand-child.active[_ngcontent-%COMP%], div.expand-child[_ngcontent-%COMP%]:hover{background-color:#fff;color:#555}.expand-child[_ngcontent-%COMP%]{font-size:large;font-weight:700;float:left;cursor:pointer}.chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-tree-renderer', standalone: true, imports: [MatFormFieldModule, MatInputModule, NgStyle, NgClass, CommonModule, NgSwitch, FormsModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<!-- ######################## Tree View List ######################### -->\r\n\t\t<ng-template #defaultListTop>\r\n\t\t\t<ul>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: displayValuesLazy, parent_index: '' }\"></ng-container>\r\n\t\t\t</ul>\r\n\t\t</ng-template>\r\n\t\t<ng-template #orderedListTop>\r\n\t\t\t<ol>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: displayValuesLazy, parent_index: '' }\"></ng-container>\r\n\t\t\t</ol>\r\n\t\t</ng-template>\r\n\t\t<ng-container *ngTemplateOutlet=\"additionalParameters['TreeViewType'] && additionalParameters['TreeViewType'] == 'ol' ? orderedListTop: defaultListTop\"></ng-container>\r\n\t\t<ng-template #recursiveListTmpl let-list=\"list\" let-parentIndex=\"parent_index\">\r\n\t\t\t<li *ngFor=\"let data of list; index as pos\">\r\n\t\t\t\t<div class=\"expand-child\" *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0 && additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" (click)=\"toggle('list_item'+parentIndex+'_'+pos)\" [ngClass]=\"{'active': getExpandedStatus('list_item'+parentIndex+'_'+pos)}\" aria-hidden=\"expand\"></div>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-template #defaultList>\r\n    \t\t\t\t<ul *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0\" [class.d-none]=\"additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" id=\"list_item{{parentIndex}}_{{pos}}\">\r\n\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: data[additionalParameters['TreeViewKey']], parent_index: '_'+pos }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template #orderedList>\r\n    \t\t\t\t<ol *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0\" [class.d-none]=\"additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" id=\"list_item{{parentIndex}}_{{pos}}\">\r\n\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: data[additionalParameters['TreeViewKey']], parent_index: '_'+pos }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"additionalParameters['TreeViewType'] && additionalParameters['TreeViewType'] == 'ol' ? orderedList: defaultList\"></ng-container>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<!-- ######################## Tree View List ######################### -->\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div class=\"pagination-container\" *ngIf=\"showPagination && autoPagination\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\" aria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"paginationNext()\"\r\n\t\t\t\tclass=\"pagination-btn-next\" aria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"setCurrent(pagination.pageCount)\" class=\"pagination-btn-last\"\r\n\t\t\t\taria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" tabindex=\"0\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, type: field.field_type, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'TreeView'\">\r\n\t\t\t<app-tree-renderer [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [sectionData]=\"field\" [templateId]=\"templateId\"\r\n\t\t\t\t[type]=\"field.field_type\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[childList]=\"childList\">\r\n\t\t\t</app-tree-renderer>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";div.expand-child:after{content:\"+\";color:#777;font-weight:700;float:right;margin-left:5px}div.expand-child.active:after{content:\"\\2212\"}div.expand-child{background-color:#fff;color:#777;cursor:pointer;border:none;text-align:left;outline:none;font-size:15px}div.expand-child.active,div.expand-child:hover{background-color:#fff;color:#555}.expand-child{font-size:large;font-weight:700;float:left;cursor:pointer}.chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeRendererComponent, { className: "TreeRendererComponent", filePath: "lib\\components\\tree-renderer\\tree-renderer.component.ts", lineNumber: 46 }); })();

var treeRenderer_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TreeRendererComponent: TreeRendererComponent
});

export { TreeRendererComponent };
//# sourceMappingURL=ng-cee-core-tree-renderer.component-W51n06MU.mjs.map
