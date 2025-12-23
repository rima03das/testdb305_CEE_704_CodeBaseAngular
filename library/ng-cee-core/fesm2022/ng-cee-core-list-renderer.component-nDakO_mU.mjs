import * as i0 from '@angular/core';
import { afterRender, Component, Input } from '@angular/core';
import { S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, W as WFEEventListHandler, a as CommonUtil, A as APIKeyUtil, E as EmptyUtil, i as AlertModalComponent, c as SharedEventsServiceService, d as CEEInternalEmitterService, f as ApiDataService, e as AppDataService, g as WfeStepLoaderService, h as CeeApiService } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { MatTableDataSource } from '@angular/material/table';
import { YouTubePlayerModule } from '@angular/youtube-player';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i13 from '@angular/common';
import { NgComponentOutlet, NgStyle, CommonModule, NgSwitch } from '@angular/common';
import * as i12 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i12$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { defer } from 'rxjs';
import * as i1 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
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

const _c0 = a0 => ({ "color": a0 });
const _c1 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c2 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c3 = () => ["List", "List-Expandable"];
const _c4 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c5 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c6 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, primaryKeyIndex: a4 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, primaryKeyIndex: a4 });
function ListRendererComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function ListRendererComponent_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function ListRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r3.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r3.message_text, " ");
} }
function ListRendererComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template, 2, 4, "p", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function ListRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_2_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template_span_click_3_listener() { const chipArray_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r5)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r5.keyName, " ");
} }
function ListRendererComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template, 5, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24)(2, "input", 25);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r8 = i0.ɵɵnextContext(); const data_r10 = ctx_r8.$implicit; const pos_r11 = ctx_r8.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r10, $event.target.checked, pos_r11)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11)("id", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11)("checked", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r10[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r11])("disabled", ctx_r1.selectedObj.checkbox ? !data_r10.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r12); const data_r10 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r10, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r11 : "radio" + "_" + pos_r11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r11 : data_r10[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r10.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r11 : "radio" + "_" + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r15 = ctx.$implicit;
    const child_position_r16 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(3);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, child_field_r15, data_r10, pos_r11, "child_" + child_position_r16));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
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
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r19, data_r10, pos_r11, position_r20));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const elseField_r21 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r19.field_type === "Generic Block")("ngIfElse", elseField_r21);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r10 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.collapseTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r24); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.expandTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r25 = ctx.$implicit;
    const child_position_r26 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(4);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r25, data_r10, pos_r11, "child_" + child_position_r26));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    const field_r28 = ctx_r26.$implicit;
    const position_r29 = ctx_r26.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r29, " ", field_r28.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r28.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r28)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r28.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    const field_r28 = ctx_r26.$implicit;
    const position_r29 = ctx_r26.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r28, data_r10, pos_r11, position_r29));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r28 = ctx.$implicit;
    const elseField_r30 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r28.field_type === "Generic Block")("ngIfElse", elseField_r30);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template, 2, 1, "button", 32)(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "div");
    i0.ɵɵtemplate(7, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_Template, 4, 2, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r10["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.collapseTitle) && !ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement === data_r10 && ctx_r1.isHTML(ctx_r1.collapseTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement !== data_r10 && ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r10 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r10.expandable_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template_div_click_3_listener() { const ctx_r12 = i0.ɵɵrestoreView(_r7); const data_r10 = ctx_r12.$implicit; const pos_r11 = ctx_r12.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r10, pos_r11)); })("keyup.enter", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template_div_keyup_enter_3_listener() { const ctx_r13 = i0.ɵɵrestoreView(_r7); const data_r10 = ctx_r13.$implicit; const pos_r11 = ctx_r13.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r10, pos_r11)); });
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_Template, 4, 2, "ng-container", 5)(5, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_Template, 8, 15, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const pos_r11 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("carousel-item list-item list-item-pos-", pos_r11, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r11 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select" ? ctx_r1.storeData.includes(data_r10[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r10.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previous()); });
    i0.ɵɵtext(2, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template, 6, 12, "ng-container", 20);
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(5, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.rowDataShown);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24)(2, "input", 25);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r32 = i0.ɵɵnextContext(); const data_r34 = ctx_r32.$implicit; const pos_r35 = ctx_r32.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r34, $event.target.checked, pos_r35)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35)("id", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35)("checked", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r34[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r35])("disabled", ctx_r1.selectedObj.checkbox ? !data_r34.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r36); const data_r34 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r34, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r35 : "radio" + "_" + pos_r35);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r35 : data_r34[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r34.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r35 : "radio" + "_" + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r39 = ctx.$implicit;
    const child_position_r40 = ctx.index;
    const ctx_r32 = i0.ɵɵnextContext(3);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, child_field_r39, data_r34, pos_r35, "child_" + child_position_r40));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const field_r42 = ctx_r40.$implicit;
    const position_r43 = ctx_r40.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r43, " ", field_r42.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r42.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r42)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r42.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const field_r42 = ctx_r40.$implicit;
    const position_r43 = ctx_r40.index;
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r42, data_r34, pos_r35, position_r43));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r42 = ctx.$implicit;
    const elseField_r44 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r42.field_type === "Generic Block")("ngIfElse", elseField_r44);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r34 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r34 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r46); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.collapseTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r47); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.expandTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r48 = ctx.$implicit;
    const child_position_r49 = ctx.index;
    const ctx_r32 = i0.ɵɵnextContext(4);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r48, data_r34, pos_r35, "child_" + child_position_r49));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const field_r51 = ctx_r49.$implicit;
    const position_r52 = ctx_r49.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r52, " ", field_r51.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r51.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r51)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r51.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const field_r51 = ctx_r49.$implicit;
    const position_r52 = ctx_r49.index;
    const ctx_r32 = i0.ɵɵnextContext(2);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r51, data_r34, pos_r35, position_r52));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r51 = ctx.$implicit;
    const elseField_r53 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r51.field_type === "Generic Block")("ngIfElse", elseField_r53);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template, 2, 1, "button", 32)(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "div");
    i0.ɵɵtemplate(7, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_Template, 4, 2, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r34 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r34["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.collapseTitle) && !ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement === data_r34 && ctx_r1.isHTML(ctx_r1.collapseTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement !== data_r34 && ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r34 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r34.expandable_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template_div_click_3_listener() { const ctx_r36 = i0.ɵɵrestoreView(_r31); const data_r34 = ctx_r36.$implicit; const pos_r35 = ctx_r36.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r34, pos_r35)); })("keyup.enter", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template_div_keyup_enter_3_listener() { const ctx_r37 = i0.ɵɵrestoreView(_r31); const data_r34 = ctx_r37.$implicit; const pos_r35 = ctx_r37.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r34, pos_r35)); });
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 5)(5, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_Template, 8, 15, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    const pos_r35 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("list-item list-item-pos-", pos_r35, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r35 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select" ? ctx_r1.storeData.includes(data_r34[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r34.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template, 6, 12, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayValuesLazy);
} }
function ListRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template, 6, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);
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
function ListRendererComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r54 = ctx.$implicit;
    const position_r55 = ctx.index;
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r57 = ctx_r55.$implicit;
    const pos_r58 = ctx_r55.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r59 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r59)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r54, data_r57, pos_r58, position_r55));
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 37);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r58 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r58, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r58 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function ListRendererComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 8, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationFirstLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template_button_click_0_listener() { const pageNumber_r63 = i0.ɵɵrestoreView(_r62).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r63)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r63 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pagination-btn-page ", pageNumber_r63 === ctx_r1.pagination.currentPage ? "active" : "", "");
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r63, "");
    i0.ɵɵproperty("disabled", pageNumber_r63 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(pageNumber_r63);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(ctx_r1.pagination.pageCount)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationLastLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r65 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", data_r65)("selected", data_r65 == ctx_r1.pagination.currentItemCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r65, "");
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "p", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template, 2, 2, "button", 44);
    i0.ɵɵelementStart(4, "button", 45);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationPrevious()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template, 2, 7, "button", 46);
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationNext()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template, 2, 2, "button", 48);
    i0.ɵɵelementStart(10, "select", 49);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_change_10_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onPaginationCountChange(); return i0.ɵɵresetView(ctx_r1.setPaginationCount()); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pagination.currentItemCount, $event) || (ctx_r1.pagination.currentItemCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(11, ListRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template, 2, 3, "option", 50);
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
function ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 55);
    i0.ɵɵlistener("page", function ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onMaterialPageChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("pageIndex", ctx_r1.pagination.currentPage - 1)("pageSizeOptions", ctx_r1.pagination.pageItems)("length", ctx_r1.pagination.itemCount);
} }
function ListRendererComponent_ng_container_0_ng_container_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showMore()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.btnShowMoreName);
} }
function ListRendererComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_6_div_1_Template, 12, 11, "div", 38)(2, ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template, 1, 3, "mat-paginator", 39);
    i0.ɵɵelementStart(3, "div", 40);
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_6_button_4_Template, 2, 1, "button", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && !ctx_r1.ShowMore && ctx_r1.autoPagination && ctx_r1.paginationStyle !== "material");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && !ctx_r1.ShowMore && ctx_r1.autoPagination && ctx_r1.paginationStyle === "material");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.ShowMore && ctx_r1.ShowMoreHide);
} }
function ListRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_div_1_Template, 3, 2, "div", 4)(2, ListRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 5)(3, ListRendererComponent_ng_container_0_ng_container_3_Template, 5, 6, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_4_Template, 3, 1, "ng-container", 3)(5, ListRendererComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 3)(6, ListRendererComponent_ng_container_0_ng_container_6_Template, 5, 3, "ng-container", 3);
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
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader || ctx_r1.setFromStore && ctx_r1.noDataFound && !ctx_r1.showLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function ListRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(2, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_6_div_1_Template, 3, 18, "div", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasEmittedCompletion);
} }
function ListRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-list-renderer", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rootData", ctx_r1.rootData)("rowData", field_r69["rowData"])("sectionData", field_r69)("templateId", ctx_r1.templateId)("type", field_r69.field_type)("childList", field_r69["childList"]);
} }
function ListRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 57);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 58)(2, ListRendererComponent_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 58)(3, ListRendererComponent_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 58)(4, ListRendererComponent_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 58)(5, ListRendererComponent_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 58)(6, ListRendererComponent_ng_template_1_ng_container_6_Template, 2, 1, "ng-container", 58)(7, ListRendererComponent_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 58)(8, ListRendererComponent_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 58)(9, ListRendererComponent_ng_template_1_ng_container_9_Template, 4, 18, "ng-container", 58)(10, ListRendererComponent_ng_template_1_ng_container_10_Template, 3, 11, "ng-container", 58)(11, ListRendererComponent_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 58)(12, ListRendererComponent_ng_template_1_ng_container_12_Template, 4, 18, "ng-container", 58)(13, ListRendererComponent_ng_template_1_ng_container_13_Template, 4, 18, "ng-container", 58)(14, ListRendererComponent_ng_template_1_ng_container_14_Template, 4, 18, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r69 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r69.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(15, _c3).includes(field_r69.field_type) ? field_r69.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
} }
function ListRendererComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 64);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 65);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 66);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 67);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 68);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 69);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 70);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 57);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 58)(2, ListRendererComponent_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 58)(3, ListRendererComponent_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 58)(4, ListRendererComponent_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 58)(5, ListRendererComponent_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 58)(6, ListRendererComponent_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 58)(7, ListRendererComponent_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 58)(8, ListRendererComponent_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 58)(9, ListRendererComponent_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r72 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r72.field_type);
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
class ListRendererComponent {
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
    showSkeletonLoader = true;
    listElements = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    showErrorOnNext = false;
    cdRef;
    hasEmittedCompletion = false; // Flag to track completion emission
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
    paginationStyle = 'bootstrap';
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
    ShowMore = false;
    btnShowMoreName;
    ShowMoreHide = true;
    paginationFirstLabel;
    paginationLastLabel;
    selectedRowIndex;
    tabIndexValue;
    rowDataShown;
    iRowData;
    itemPerPage;
    hasRowConditionField;
    html_id = '';
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
        Table: defer(() => {
            if (this.componentList['Table']) {
                return this.componentList['Table'];
            }
            else {
                const c = import('./ng-cee-core-cee-table.component-Dj5GWWHv.mjs').then(m => m.CeeTableComponent);
                this.componentList['Table'] = c;
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
    pageItems;
    setFromStore = false;
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
        afterRender(() => {
            // Check if all items are rendered and we haven't emitted completion yet
            if (!this.hasEmittedCompletion &&
                this.displayValues.length > 0 &&
                this.displayValuesLazy.length === this.displayValues.length &&
                !this.listLoading) {
                setTimeout(() => {
                    // console.log("All list items rendered, emitting stepLoaderEmitter");
                    this.hasEmittedCompletion = true;
                }, 1000);
            }
        });
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
                    case 'Show Chips':
                        this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'true' ? true : false;
                        break;
                    case 'Pagination Style':
                        this.paginationStyle = (paramter.value === 'material') ? 'material' : 'bootstrap';
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
                            /* if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            } */
                            // Set From store Enabled
                            this.setFromStore = true;
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    if (this.rowData) {
                                        break;
                                    }
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 'ShowMore':
                        this.ShowMore = paramter.value === 'true' ? true : false;
                        break;
                    case 'BtnShowMore_Name':
                        this.btnShowMoreName = paramter.value;
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
                    case 'ShowMore':
                        this.ShowMore = paramter.value;
                        break;
                    case 'BtnShowMore_Name':
                        this.btnShowMoreName = paramter.value;
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
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'] && data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    setShownData() {
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
        // Reset completion flag when new data is loaded
        this.hasEmittedCompletion = false;
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
    showMore(flag = 1) {
        if (this.ShowMoreHide) {
            this.pagination.currentItemCount = this.pagination?.currentItemCount + this.pagination?.pageItems[0];
            this.onPaginationCountChange();
            if (this.pagination.currentItemCount >= this.pagination.itemCount) {
                this.ShowMoreHide = false;
            }
        }
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
            } //test
            if (this.cdRef && !this.cdRef.destroyed) {
                this.cdRef.detectChanges();
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
                data: resData
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
    onMaterialPageChange(event) {
        const newPage = event.pageIndex + 1;
        const newSize = event.pageSize;
        const pageSizeChanged = newSize !== this.pagination.currentItemCount;
        this.pagination.currentItemCount = newSize;
        if (pageSizeChanged) {
            this.setPaginationCount(); // Already in your select change
            this.onPaginationCountChange(); // Already used
        }
        this.setCurrent(newPage); // Core pagination logic
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function ListRendererComponent_Factory(t) { return new (t || ListRendererComponent)(i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListRendererComponent, selectors: [["app-list-renderer"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], ["title", "Previous", 1, "move-ctrl", "previous", 3, "click"], ["class", "list-conatianer data-row", 4, "ngFor", "ngForOf"], ["title", "Next", 1, "move-ctrl", "next", 3, "click"], [1, "list-conatianer", "data-row"], [3, "click", "keyup.enter"], [1, "list-checkbox-container"], ["type", "checkbox", 1, "list-checkbox", 3, "change", "name", "id", "checked", "disabled"], [1, "custom-list-checkbox", 3, "for"], [1, "list-radio-container"], ["type", "radio", "name", "radio", 1, "list-radio", 3, "ngModelChange", "change", "id", "ngModel", "value", "disabled"], [1, "custom-list-radio", 3, "for"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", 3, "click", 4, "ngIf"], ["role", "button", 3, "click"], [3, "click", "innerHTML"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["class", "pagination-container", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageIndex", "pageSizeOptions", "length", "page", 4, "ngIf"], [1, "pagination-container-showmore"], ["role", "button", "class", "pagination-btn-showmore", 3, "click", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-text-container"], ["role", "button", "class", "pagination-btn-first", "aria-label", "Select First", 3, "disabled", "click", 4, "ngIf"], ["role", "button", "aria-label", "Select Previous", 1, "pagination-btn-previous", 3, "click", "disabled"], ["role", "button", 3, "disabled", "class", "click", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select Next", 1, "pagination-btn-next", 3, "click", "disabled"], ["role", "button", "class", "pagination-btn-last", "aria-label", "Select Last", 3, "disabled", "click", 4, "ngIf"], [1, "pagination-count-selector", 3, "change", "ngModelChange", "ngModel"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select First", 1, "pagination-btn-first", 3, "click", "disabled"], ["role", "button", 3, "click", "disabled"], ["role", "button", "aria-label", "Select Last", 1, "pagination-btn-last", 3, "click", "disabled"], [3, "ngValue", "selected"], ["showFirstLastButtons", "", 3, "page", "pageIndex", "pageSizeOptions", "length"], ["role", "button", 1, "pagination-btn-showmore", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "class", 4, "ngIf"], [3, "stepId", "rootData", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function ListRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_Template, 7, 6, "ng-container", 3)(1, ListRendererComponent_ng_template_1_Template, 15, 16, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ListRendererComponent_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [ListRendererComponent, NgComponentOutlet, MatFormFieldModule, i12.MatFormField, MatInputModule, i12$1.MatInput, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, i13.AsyncPipe, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, YouTubePlayerModule, MatPaginatorModule, i1.MatPaginator], styles: [".chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-list-renderer', standalone: true, imports: [NgComponentOutlet, MatFormFieldModule, MatInputModule, NgStyle, CommonModule, NgSwitch, FormsModule, YouTubePlayerModule, MatPaginatorModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\"\r\n\t\t\t\tplaceholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() == 'true'\">\r\n\t\t\t<div class=\"move-ctrl previous\" title=\"Previous\" (click)=\"previous()\">&lt;</div>\r\n\t\t\t<ng-container *ngFor=\"let data of rowDataShown; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\"\r\n\t\t\t\t\t\t\t[value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"carousel-item list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button *ngIf=\"!isHTML(collapseTitle) && !isHTML(expandTitle)\" role=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t=== data && isHTML(collapseTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"collapseTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t!== data && isHTML(expandTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"expandTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"move-ctrl next\" title=\"Next\" (click)=\"next()\">&gt;</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"!additionalParameters['ShowCarousel'] || (additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() != 'true')\">\r\n\t\t\t<ng-container *ngFor=\"let data of displayValuesLazy; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\"\r\n\t\t\t\t\t\t\t[value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\r\n\t\t\t\t\t\t\t<button *ngIf=\"!isHTML(collapseTitle) && !isHTML(expandTitle)\" role=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t=== data && isHTML(collapseTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"collapseTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t!== data && isHTML(expandTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"expandTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<!--\r\n\t<div class=\"text-center my-5\" [hidden]=\"!showLoading\">\r\n\t\t<div class=\"lds-ripple\">\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<ng-container *ngIf=\"(noDataFound && !showLoading && !showSkeletonLoader) || (setFromStore && noDataFound && !showLoading)\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t*ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div class=\"pagination-container\" *ngIf=\"showPagination && !ShowMore && autoPagination && paginationStyle !== 'material'\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\"\r\n\t\t\t\taria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"paginationNext()\" class=\"pagination-btn-next\"\r\n\t\t\t\taria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\"\r\n\t\t\t\t[disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"setCurrent(pagination.pageCount)\"\r\n\t\t\t\tclass=\"pagination-btn-last\" aria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t\t\r\n\t\t</div>\t\t\r\n\t\t<mat-paginator *ngIf=\"showPagination && !ShowMore && autoPagination && (paginationStyle === 'material')\"\r\n\t\t\t[pageIndex]=\"pagination.currentPage - 1\" [pageSizeOptions]=\"pagination.pageItems\"\r\n\t\t\t[length]=\"pagination.itemCount\" (page)=\"onMaterialPageChange($event)\" showFirstLastButtons>\r\n\t\t</mat-paginator>\r\n\t\t<div class=\"pagination-container-showmore\">\r\n\t\t\t<button role=\"button\" *ngIf= \"ShowMore && ShowMoreHide\" (click)=\"showMore()\" class=\"pagination-btn-showmore\">{{btnShowMoreName}}</button>\r\n\t\t\t</div>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t\t<!-- <ng-template #elseBlock>\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t*ngIf=\"\">\r\n\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t*ngIf=\"field.field_label.includes('((dynamic))') || (field.field_label_config && field.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n\t\t\t\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t\t\t\t[innerHTML]=\"setDynamicLabelUtil.getDynamicValue(field, data).field_label\"></div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #notDynamic>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t{{field.field_label}}</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, keepState: true,\r\n\t\t\t\tprimaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [rootData]=\"rootData\" [fieldData]=\"field\" [keepState]=\"true\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div *ngIf=\"hasEmittedCompletion\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"['List', 'List-Expandable'].includes(field.field_type) ? field.field_type : ''\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<app-list-renderer [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\"\r\n\t\t\t\t\t[sectionData]=\"field\" [templateId]=\"templateId\" [type]=\"field.field_type\"\r\n\t\t\t\t\t[childList]=\"field['childList']\"></app-list-renderer>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Accordion'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-accordion-renderer [stepId]=\"stepId\" [rootData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-accordion-renderer> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-dynamic-form [sectionData]=\"field\" [rowData]=\"field['rowData']\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n\t\t\t</app-dynamic-form> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- Attachments -->\r\n\t\t<ng-container *ngSwitchCase=\"'Attachments'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-attachments [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" [rootData]=\"rootData\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-attachments> -->\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>", styles: [".chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListRendererComponent, { className: "ListRendererComponent", filePath: "lib\\components\\list-renderer\\list-renderer.component.ts", lineNumber: 52 }); })();

export { ListRendererComponent };
//# sourceMappingURL=ng-cee-core-list-renderer.component-nDakO_mU.mjs.map
