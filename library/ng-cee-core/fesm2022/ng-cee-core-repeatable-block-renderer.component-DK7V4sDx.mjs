import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import { F as FlatUnflat, C as ConditionalUtil, R as RepeatableBlockData, W as WFEEventListHandler, o as UndoRedo, q as AssociatedMapUtil, a as CommonUtil, A as APIKeyUtil, S as SetAPICallbackData, D as DynamicLabelUtil, i as AlertModalComponent, U as UserDataHandlerService, e as AppDataService, f as ApiDataService, d as CEEInternalEmitterService, c as SharedEventsServiceService, g as WfeStepLoaderService, n as AccordionService, h as CeeApiService, r as WebworkerService, V as ViewRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import { concatMap, take } from 'rxjs/operators';
import * as i13 from '@angular/common';
import { NgSwitch, NgClass, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i14 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { defer, of } from 'rxjs';
import { AccordionRendererComponent } from './ng-cee-core-accordion-renderer.component-Dktp3JsQ.mjs';
import { GenericBlockRendererComponent } from './ng-cee-core-generic-block-renderer.component-BWLqu5NL.mjs';
import * as i9 from '@angular/common/http';
import * as i7 from '@angular/material/dialog';
import * as i8 from '@angular/material/snack-bar';
import * as i11 from '@angular/router';
import 'tslib';
import '@datorama/akita';
import 'moment';
import 'jszip';
import 'file-saver';
import 'ngx-toastr';
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
import 'ngx-webcam';
import '@eisberg-labs/ngx-barcode-scanner';
import '@angular/cdk/menu';
import '@angular-material-components/datetime-picker';
import '@angular/youtube-player';
import '@angular/google-maps';
import 'ngx-daterangepicker-bootstrap';
import 'ngx-image-cropper';
import 'ngx-quill';

const _c0 = (a0, a1, a2, a3) => ({ field: a0, position: a1, i: a2, activePosition: a3 });
const _c1 = a0 => ({ "disabled-remove-btn": a0 });
const _c2 = a0 => ({ "disabled-add-btn": a0 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6, activePosition: a7 });
const _c4 = (a0, a1, a2, a3, a4, a5, a6) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6 });
const _c5 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true });
const _c6 = (a0, a1, a2) => ({ name: a0, value: a1, type: "repeatable", cellData: a2 });
const _c7 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6, primaryKeyIndex: a7 });
const _c8 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7);
    i0.ɵɵlistener("change", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r1); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.repeatableBlockChange(i_r2, $event.target.checked)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("name", "check_", i_r2, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", i_r2, "");
    i0.ɵɵproperty("checked", ctx_r2.storeData.indexOf(i_r2) >= 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r2.radioValue, $event) || (ctx_r2.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r4); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.repeatableBlockChange(i_r2, $event.target.checked)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("name", "radio_", i_r2, "");
    i0.ɵɵpropertyInterpolate1("id", "radio_", i_r2, "");
    i0.ɵɵpropertyInterpolate("value", i_r2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.radioValue);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const innerField_r6 = ctx_r4.$implicit;
    const innerPosition_r7 = ctx_r4.index;
    const position_r8 = i0.ɵɵnextContext(3).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r6, position_r8 + "-" + innerPosition_r7, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id]);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section");
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("row generic-block generic-block-", field_r12.unique_id, " ", field_r12.field_style ? field_r12.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_Template, 2, 6, "section", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r8, " ", field_r12.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r12.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r12)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name, i0.ɵɵsanitizeHtml);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.collapseTitle, " ");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.expandTitle, " ");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const innerField_r16 = ctx_r14.$implicit;
    const innerPosition_r17 = ctx_r14.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r16, position_r8 + "-" + innerPosition_r17, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r16 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r16.unique_id));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const innerField_r19 = ctx_r17.$implicit;
    const innerPosition_r20 = ctx_r17.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r19, position_r8 + "-" + innerPosition_r20, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r19 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r19.unique_id)) && !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.footerFields.includes(innerField_r19.unique_id)));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    const innerField_r22 = ctx_r20.$implicit;
    const innerPosition_r23 = ctx_r20.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r22, position_r8 + "-" + innerPosition_r23, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r22 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r22.unique_id)) && (ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.footerFields.includes(innerField_r22.unique_id)));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "section", 4)(3, "div", 14);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r14); const field_r12 = i0.ɵɵnextContext(2).$implicit; const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openAccordionClicked(field_r12, i_r2)); });
    i0.ɵɵtemplate(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_4_Template, 2, 1, "div", 15)(5, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_5_Template, 1, 1, "div", 16)(6, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_6_Template, 2, 1, "div", 17)(7, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_7_Template, 2, 1, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_Template, 2, 3, "div", 19)(9, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_Template, 2, 3, "div", 20)(10, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_Template, 2, 3, "div", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r8, " ", field_r12.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r12.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r12)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("accordion-section accordion-section-", field_r12.unique_id, "-", i_r2, " accordion-section-", field_r12.unique_id, " ", field_r12.field_style ? field_r12.field_style.custom_class_name : "", "");
    i0.ɵɵpropertyInterpolate2("id", "", field_r12.unique_id, "-", i_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isHTML(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isHTML(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template, 11, 20, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.checkAccordionVisibility(field_r12, ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id], i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, field_r12, position_r8, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 9);
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_Template, 3, 5, "ng-container", 10)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 10)(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_Template, 2, 7, "ng-container", 11);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", field_r12.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Generic Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const i_r2 = i0.ɵɵnextContext(3).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDeleteBlock(i_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r2.disableRemoveBtnIfArrayEmpty()))("disabled", !ctx_r2.buttonEditable);
    i0.ɵɵattribute("aria-label", "Click on " + ctx_r2.remove_field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.remove_field_label);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template, 2, 6, "button", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.remove_field_label !== "none");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template, 1, 5, "input", 5)(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template, 1, 6, "input", 6)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_Template, 5, 3, "ng-container", 2)(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolateV(["cee-block sectionRb-", i_r2, " ", ctx_r2.blockRenderedData.block_id, "-sidebar-item-", i_r2, "  ", ctx_r2.parentPosition ? ctx_r2.blockRenderedData.block_id + "-p-" + ctx_r2.parentPosition + "-c-" + i_r2 : ctx_r2.blockRenderedData.block_id + "-c-" + i_r2, "  template-", ctx_r2.templateId, " block-", ctx_r2.blockRenderedData.block_id, " ", ctx_r2.storeData.length > 1 ? ctx_r2.storeData.indexOf(i_r2) >= 0 ? "selected" : "" : ctx_r2.storeData[0] == i_r2 ? "selected" : "", " ", ctx_r2.is_bootstrap ? "row" : "", " ", ctx_r2.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", " ", ctx_r2.sectionCustomClass[i_r2] ? ctx_r2.sectionCustomClass[i_r2] : "", " "]);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.blockRenderedData.block_id);
    i0.ɵɵattribute("aria-label", ctx_r2.additionalParameter["Aria-Label"] ? ctx_r2.additionalParameter["Aria-Label"] : undefined)("role", ctx_r2.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.type == "Multi");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.type == "Single");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.blockRenderedData.block_fields)("ngForTrackBy", ctx_r2.trackByIdBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hideActionButton);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_Template, 5, 20, "section", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r10 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pos_r10.active && ctx_r2.blockRenderedData && ctx_r2.repeatebleFieldsRows[i_r2]);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onBlockAdd()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, !ctx_r2.buttonEditable || ctx_r2.disableAddButton))("disabled", !ctx_r2.buttonEditable || ctx_r2.disableAddButton);
    i0.ɵɵattribute("aria-label", "Click on " + ctx_r2.add_more_field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.add_more_field_label);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template, 2, 6, "button", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.add_more_field_label !== "none");
} }
function RepeatableBlockRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("reapeatable-loader ", ctx_r2.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.counterData)("ngForTrackBy", ctx_r2.trackByIdCounter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hideActionButton);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const activePosition_r30 = ctx_r25.activePosition;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction8(8, _c3, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition, activePosition_r30));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction8(12, _c7, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition, i0.ɵɵpureFunction3(8, _c6, field_r27.unique_id, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id]["value"], ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id])));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "repeatable-block-renderer", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r2.stepId)("rootData", ctx_r2.rootData)("rowData", ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id])("parentBlock", ctx_r2.fieldData.unique_id)("parentPosition", i_r29)("fieldData", field_r27)("templateId", ctx_r2.templateId)("mandatoryCondition", ctx_r2.mandatoryCondition)("editableCondition", ctx_r2.editableCondition)("visibleCondition", ctx_r2.visibleCondition);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_16_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c8, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_17_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_17_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c8, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_18_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(8, _c9, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, field_r27.field_type));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_19_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_20_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_template_1_ng_container_1_Template, 4, 17, "ng-container", 10)(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_2_Template, 4, 16, "ng-container", 10)(3, RepeatableBlockRendererComponent_ng_template_1_ng_container_3_Template, 4, 16, "ng-container", 10)(4, RepeatableBlockRendererComponent_ng_template_1_ng_container_4_Template, 4, 16, "ng-container", 10)(5, RepeatableBlockRendererComponent_ng_template_1_ng_container_5_Template, 4, 16, "ng-container", 10)(6, RepeatableBlockRendererComponent_ng_template_1_ng_container_6_Template, 4, 16, "ng-container", 10)(7, RepeatableBlockRendererComponent_ng_template_1_ng_container_7_Template, 4, 16, "ng-container", 10)(8, RepeatableBlockRendererComponent_ng_template_1_ng_container_8_Template, 4, 16, "ng-container", 10)(9, RepeatableBlockRendererComponent_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 10)(10, RepeatableBlockRendererComponent_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 10)(11, RepeatableBlockRendererComponent_ng_template_1_ng_container_11_Template, 4, 16, "ng-container", 10)(12, RepeatableBlockRendererComponent_ng_template_1_ng_container_12_Template, 4, 21, "ng-container", 10)(13, RepeatableBlockRendererComponent_ng_template_1_ng_container_13_Template, 4, 13, "ng-container", 10)(14, RepeatableBlockRendererComponent_ng_template_1_ng_container_14_Template, 4, 13, "ng-container", 10)(15, RepeatableBlockRendererComponent_ng_template_1_ng_container_15_Template, 2, 14, "ng-container", 10)(16, RepeatableBlockRendererComponent_ng_template_1_ng_container_16_Template, 4, 13, "ng-container", 10)(17, RepeatableBlockRendererComponent_ng_template_1_ng_container_17_Template, 4, 13, "ng-container", 10)(18, RepeatableBlockRendererComponent_ng_template_1_ng_container_18_Template, 4, 14, "ng-container", 10)(19, RepeatableBlockRendererComponent_ng_template_1_ng_container_19_Template, 4, 13, "ng-container", 10)(20, RepeatableBlockRendererComponent_ng_template_1_ng_container_20_Template, 4, 16, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r27.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Autocomplete Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Date");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Checkbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Timepicker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "PhoneNumber");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Number");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Repeatable Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Switch");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Editor");
} }
class RepeatableBlockRendererComponent {
    userDataHandlerService;
    http;
    appDataService;
    apiDataService;
    internalCEEEmitter;
    sharedEventsService;
    dialog;
    snackBar;
    wfeStepLoaderService;
    accordionService;
    router;
    cdr;
    _ceeApiService;
    ngZone;
    workerService;
    renderer;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    fieldData;
    templateId;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    parentPosition;
    rowData;
    parentBlock;
    blockRenderedData;
    childArr = [];
    additionalParameter = {};
    counter = [{ active: true }];
    childCounter = {};
    maxBlocksCount = 0;
    radioValue;
    checkedItems;
    storeData = [];
    type = '';
    sectionSubscription;
    hideActionButton = true;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        linkedBlockId: '',
        isRepeatedField: true,
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
    conditionObj = {};
    variableObj = {}; // variableObject
    dataMap = {};
    responseMap = {};
    isEditable = false;
    buttonEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    flatten;
    conditionalUtil;
    repeatableBlockDataUtil;
    isApiResponse = false;
    add_more_field_label = 'Add';
    remove_field_label = 'Delete';
    wfeEventListHandler;
    undoredoUtil;
    associatedMapUtil; // TODO: Remove this import and update the code once the map comes from the WFE End
    is_bootstrap = false;
    commonUtil;
    apiKeyUtil;
    lazyInterval = []; //setInterval for lazy loading
    counterTemp = [];
    presetData;
    setApiCallBackDataUtil;
    repeatebleFieldsRows = [];
    reapeatableLoading = false;
    sectionCustomClass = {};
    skipLoader = false;
    delimiter = '$';
    noIds = false;
    addRowByDefault = true;
    enableDeleteLastRow = false;
    componentList = {};
    storeBlockIdIfNull;
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
        'Autocomplete Textfield': defer(() => {
            if (this.componentList['Autocomplete Textfield']) {
                return this.componentList['Autocomplete Textfield'];
            }
            else {
                const c = import('./ng-cee-core-cee-auto-complete.component-B9_cS21z.mjs').then(m => m.CeeAutoCompleteComponent);
                this.componentList['Autocomplete Textfield'] = c;
                return c;
            }
        }),
        Textarea: defer(() => {
            if (this.componentList['Textarea']) {
                return this.componentList['Textarea'];
            }
            else {
                const c = import('./ng-cee-core-cee-textarea.component-CPdSKLMX.mjs').then(m => m.CeeTextareaComponent);
                this.componentList['Textarea'] = c;
                return c;
            }
        }),
        Date: defer(() => {
            if (this.componentList['Date']) {
                return this.componentList['Date'];
            }
            else {
                const c = import('./ng-cee-core-cee-date.component-BEfJDC8g.mjs').then(m => m.CeeDateComponent);
                this.componentList['Date'] = c;
                return c;
            }
        }),
        radio: defer(() => {
            if (this.componentList['radio']) {
                return this.componentList['radio'];
            }
            else {
                const c = import('./ng-cee-core-cee-radio.component-DMT3QXZY.mjs').then(m => m.CeeRadioComponent);
                this.componentList['radio'] = c;
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
        Checkbox: defer(() => {
            if (this.componentList['Checkbox']) {
                return this.componentList['Checkbox'];
            }
            else {
                const c = import('./ng-cee-core-cee-checkbox.component-CzuWvf1D.mjs').then(m => m.CeeCheckboxComponent);
                this.componentList['Checkbox'] = c;
                return c;
            }
        }),
        Timepicker: defer(() => {
            if (this.componentList['Timepicker']) {
                return this.componentList['Timepicker'];
            }
            else {
                const c = import('./ng-cee-core-cee-time-picker.component-6Ms8Loh5.mjs').then(m => m.CeeTimePickerComponent);
                this.componentList['Timepicker'] = c;
                return c;
            }
        }),
        PhoneNumber: defer(() => {
            if (this.componentList['PhoneNumber']) {
                return this.componentList['PhoneNumber'];
            }
            else {
                const c = import('./ng-cee-core-cee-phone-number.component-Dnx-BmXC.mjs').then(m => m.CeePhoneNumberComponent);
                this.componentList['PhoneNumber'] = c;
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
        Number: defer(() => {
            if (this.componentList['Number']) {
                return this.componentList['Number'];
            }
            else {
                const c = import('./ng-cee-core-cee-number.component-BBnOui2F.mjs').then(m => m.CeeNumberComponent);
                this.componentList['Number'] = c;
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
        'Table-V2': defer(() => {
            if (this.componentList['Table-V2']) {
                return this.componentList['Table-V2'];
            }
            else {
                const c = import('./ng-cee-core-cee-table-v2.component-DJIUef9R.mjs').then(m => m.CeeTableV2Component);
                this.componentList['Table-V2'] = c;
                return c;
            }
        }),
        List: defer(() => {
            if (this.componentList['List']) {
                return this.componentList['List'];
            }
            else {
                const c = import('./ng-cee-core-list-renderer.component-nDakO_mU.mjs').then(m => m.ListRendererComponent);
                this.componentList['List'] = c;
                return c;
            }
        }),
        Switch: defer(() => {
            if (this.componentList['Switch']) {
                return this.componentList['Switch'];
            }
            else {
                const c = import('./ng-cee-core-cee-switch.component-CfZ5e9ds.mjs').then(m => m.CeeSwitchComponent);
                this.componentList['Switch'] = c;
                return c;
            }
        }),
        Editor: defer(() => {
            if (this.componentList['Editor']) {
                return this.componentList['Editor'];
            }
            else {
                const c = import('./ng-cee-core-cee-editor.component-BCar5kMU.mjs').then(m => m.CeeEditorComponent);
                this.componentList['Editor'] = c;
                return c;
            }
        })
    };
    setDynamicLabelUtil;
    dummyBlocks = {};
    resetIndexOnAddOrRemove = false;
    activeBlocksCount = 0;
    disableAddButton = false;
    focusChildView = false;
    constructor(userDataHandlerService, http, appDataService, apiDataService, internalCEEEmitter, sharedEventsService, dialog, snackBar, wfeStepLoaderService, accordionService, router, cdr, _ceeApiService, ngZone, workerService, renderer) {
        this.userDataHandlerService = userDataHandlerService;
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.router = router;
        this.cdr = cdr;
        this._ceeApiService = _ceeApiService;
        this.ngZone = ngZone;
        this.workerService = workerService;
        this.renderer = renderer;
        this.flatten = new FlatUnflat(appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.repeatableBlockDataUtil = new RepeatableBlockData();
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.undoredoUtil = new UndoRedo();
        // TODO: Remove this import and update the code once the map comes from the WFE End
        this.associatedMapUtil = new AssociatedMapUtil();
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        this.setApiCallBackDataUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    getTrackByFunction(param) {
        return (index, item) => {
            return item?.field_values[param];
        };
    }
    trackByIdBlock(index, item) {
        return item.message_code;
    }
    trackByIdCounter(index, item) {
        // console.log(item);
        const lastChar = item.message_code?.slice(-1);
        return lastChar;
    }
    trackByIndex(param) {
        return (index, item) => {
            return param;
        };
    }
    //Counts Active Parent and Child Blocks and
    countActiveBlocks() {
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        if (this.isChildBlock()) {
            this.activeBlocksCount = this.childCounter[this.parentPosition].reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        else {
            this.activeBlocksCount = this.counter.reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        this.disableAddButton = this.activeBlocksCount == Number(this.maxBlocksCount) ? true : false;
    }
    // Get all fields in the current repeatable block
    getCurrentBlockFields() {
        if (!this.blockRenderedData?.block_fields) {
            return [];
        }
        return this.blockRenderedData.block_fields.map(field => field);
    }
    ;
    // Get fields for a specific row/position
    getFieldsForPosition(position) {
        if (!this.repeatebleFieldsRows[position]) {
            return [];
        }
        return Object.values(this.repeatebleFieldsRows[position]).map((field) => field.html_id);
    }
    ;
    // Get active block count and data
    getBlockInfo = () => {
        return {
            totalBlocks: this.maxBlocksCount,
            activeBlocks: this.activeBlocksCount,
            currentRows: this.repeatebleFieldsRows.length,
            blockId: this.blockId,
            isChildBlock: this.isChildBlock(),
            parentPosition: this.parentPosition
        };
    };
    // Set the current block data in the Akita store
    async setCurrBlockAppData(ids, otherInfo) {
        const apiData = {
            fields: {},
            isChildBlock: otherInfo.isChildBlock,
            linkedBlockId: otherInfo.linkedBlockId,
            parentPosition: otherInfo.parentPosition,
            position: otherInfo.position,
            repeatedBlockFieldId: otherInfo.repeatedBlockFieldId,
            stepId: otherInfo.stepId
        };
        const entitiesByRB = await this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId(otherInfo.repeatedBlockFieldId);
        for (const id of ids) {
            const actualId = await id.split("$")[1];
            apiData['fields'][actualId] = await entitiesByRB[id];
        }
        // console.log("apiData ::::", apiData);
        // Set the API data in the Akita store
        this.apiDataService.setApiData({
            id: 'RepeatableBlock/CurrentIndex',
            apiUrl: '',
            apiKey: 'RepeatableBlock/CurrentIndex',
            value: Object.assign({}, apiData),
        });
    }
    ngOnInit() {
        this.presetData = this.rowData;
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        this.blockId = this.fieldData.repeatable_block_configuration.linked_block_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                }
            }
        }
        if (this.additionalParameter['CEE_Add_Row_By_Default']) {
            this.addRowByDefault = this.additionalParameter['CEE_Add_Row_By_Default'].toLowerCase() == 'false' ? false : true;
        }
        if (this.additionalParameter['CEE_Enable_Delete_Last_Row']) {
            this.enableDeleteLastRow = this.additionalParameter['CEE_Enable_Delete_Last_Row'].toLowerCase() == 'true' ? true : false;
            ;
        }
        // Reset ActiveIndex On Adding or Removing RB
        if (this.additionalParameter.hasOwnProperty('CEE_ResetRBIndexOnAction')) {
            this.resetIndexOnAddOrRemove = this.additionalParameter['CEE_ResetRBIndexOnAction'].toLowerCase() == 'true' ? true : false;
        }
        // Reset ActiveIndex On Adding or Removing RB
        if (this.additionalParameter.hasOwnProperty('CEE_ScrollIntoViewOnAction')) {
            this.focusChildView = this.additionalParameter['CEE_ScrollIntoViewOnAction'].toLowerCase() == 'true' ? true : false;
        }
        if (this.blockId) {
            // console.log(this.blockId);
            // console.log(" - rowData: ", this.rowData);
            // console.log(" - parentPosition: ", this.parentPosition);
            // console.log(" - parentBlock: ", this.parentBlock);
            let newCount = this.addRowByDefault ? [{ active: true, activeIndex: 1 }] : [];
            if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
                newCount = [];
                for (const pIndex in this.presetData.value) {
                    newCount.push({ active: true, activeIndex: Number(pIndex) + 1 });
                }
            }
            // get the max count from the local storage for the repeatable block            
            if (this.isChildBlock()) {
                let childCount = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                if (!childCount || !childCount[this.parentPosition]) {
                    if (!childCount) {
                        childCount = {};
                    }
                    if (!childCount[this.parentPosition]) {
                        childCount[this.parentPosition] = newCount;
                    }
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, childCount);
                }
                this.counterTemp = childCount[this.parentPosition];
            }
            else {
                this.counterTemp = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                if (!this.counterTemp) {
                    this.counterTemp = newCount;
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counterTemp);
                }
            }
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.processOutsideOfAngularZone();
        }
        else {
            console.error('linked_block_id not found');
            return false;
        }
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        if (this.fieldData.is_editable === 1) {
            this.buttonEditable = true;
        }
        // if (this.fieldData.is_mandatory === 1) {
        //     this.isMandatory = true;
        // }
        // create the associated map
        if (this.fieldData.is_editable === 2 || this.fieldData.is_display === 2) {
            this.setAssociatedMap();
        }
        this.variableObj['eventDeleteSubscriber_' + this.fieldData.unique_id] = this.sharedEventsService.eventDeleteRepeatedBlockSubscriber.subscribe(res => {
            if (res.primaryData.value?.repeatedBlockFieldId === this.fieldData.unique_id) {
                this.deleteBlock(res.primaryData.value?.position);
            }
        });
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
            let repeatedBlockFieldIdFromRes = res[`${res.handler_name}##data.primaryData.repeatedBlockFieldId`];
            if (repeatedBlockFieldIdFromRes !== undefined) {
                if (repeatedBlockFieldIdFromRes !== this.fieldData.unique_id) {
                    //console.log(" - NOT my blockId:", this.fieldData.unique_id, " != ", repeatedBlockFieldIdFromRes);                    
                    return;
                }
                // is cancel event
                let isCancelEvent = res[`${res.handler_name}##data.primaryData.isCancelEvent`];
                if (isCancelEvent == "true") {
                    if (this.counterTemp.length > 0) {
                        let newAdditionCancel = this.counterTemp[this.counterTemp.length - 1]?.activeIndex == 0;
                        if (newAdditionCancel) {
                            //console.log("-- reverting new addition cancellation");
                            this.lazyLoading();
                        }
                        else {
                            //console.log("-- reverting existing cancellation");
                            // way-1
                            this.lazyLoading();
                            // way-2
                            // let unique_id = res[`${res.handler_name}##data.primaryData.unique_id`];
                            // let positionFromRes = res[`${res.handler_name}##data.primaryData.position`];
                            // if(unique_id && positionFromRes) {
                            //     positionFromRes = Number(positionFromRes);
                            //     let gBlockId = unique_id.split("$")[0];
                            //     this.processRowData(this.counterTemp, positionFromRes, gBlockId);
                            //     // Trigger change detection
                            //     if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                            //         this.cdr.detectChanges();
                            //     }
                            // }                                
                        }
                        return;
                    }
                }
            }
            else {
                // console.log("-- rb is undefined");
                // return;
            }
            const response = this.flatten.flattenJSON(res);
            // The data is reset to remove inner doms already rendered.
            // If not done the values from API will not get reflected.
            if (this.checkIfResHasRepeatedData(response)) {
                // console.log("- YES my blockId and key:", this.fieldData.unique_id);
                this.rootData['FieldLoadStack']['add']();
                // this.dataMap = {};
                this.responseMap = {};
                // console.log('API RESPONSE', response);
                this.counter = [];
                this.childCounter = {};
                // render accordions' info-blocks when a new parent repeatable block is added
                let oldLength = this.counterTemp.length;
                this.counterTemp = this.getMaxIndex(response); // existing line  
                if (this.counterTemp.length > oldLength) {
                    this.addDummyBlocksForNewlyAddedAccordion();
                }
                // console.log("cc: ", (this.isChildBlock()) ? this.childCounter : this.counterTemp);
                this.processRowData(this.counterTemp);
                // console.log(`counter ${this.counterData}`);
                // console.log(`${this.fieldData.api_key} count ${this.counter}`, res);
                this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, (this.isChildBlock()) ? this.childCounter : this.counterTemp);
                this.rootData['FieldLoadStack']['remove']();
                this.lazyLoading();
            }
            else if (this.checkIfResHasBlankData(response)) {
                this.onAllBlockRemove([this.fieldData.unique_id]);
            }
            this.conditionCheck(null);
            // this.labelInfoCheck(res);
        });
        this.variableObj['repeatableBlockSessionClearanceEmitter_' + this.fieldData.unique_id] = this.sharedEventsService.repeatableBlockSessionClearanceEmitter.subscribe(res => {
            if (res) {
                this.onAllBlockRemove([res]);
            }
        });
        this.variableObj['associatedRepeatableBlockSessionClearanceEmitter_' + this.fieldData.unique_id] = this.sharedEventsService.associatedRepeatableBlockSessionClearanceEmitter.subscribe(res => {
            if (res) {
                const fieldId = this.associatedMapUtil.getAssociatedBlockById(this.undoredoUtil.getCurrentId());
                if (fieldId) {
                    this.onAllBlockRemove(new Array(fieldId));
                }
            }
        });
        this.variableObj['currentRepeatableBlockEmitter_' + this.fieldData.unique_id]
            = this.sharedEventsService.rbCurrentIndex.subscribe((res) => {
                // Get block info
                const blockInfo = this.getBlockInfo();
                // Check if the linkedBlockId matches the current blockId
                if (res.linkedBlockId == this.blockId) {
                    // Check if the current block is a child block
                    if (!blockInfo.isChildBlock) {
                        const fields = this.getFieldsForPosition(res.position);
                        if (fields.length > 0) {
                            this.setCurrBlockAppData(fields, res);
                        }
                    }
                    else {
                        // If it's a child block, check if the parentPosition matches
                        if (res.parentPosition === blockInfo.parentPosition) {
                            // Get fields by position
                            const fields = this.getFieldsForPosition(res.position);
                            if (fields.length > 0) {
                                this.setCurrBlockAppData(fields, res);
                            }
                        }
                    }
                }
            });
        // TODO: Set Conditional Value on the Repeatable Block
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            this.onFieldDataUpdated(res.apiKey, res.value);
        });
        // if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const paramter of this.fieldData.additional_parameters) {
        //         this.additionalParameter[paramter.parameter_type] = paramter.value;
        //     }
        // }
        if (this.additionalParameter['renderType']) {
            this.type = this.additionalParameter['renderType'];
        }
        // add the app data to the akita store
        this.radioValue = '0';
        this.storeData = [0];
        this.appData.id = this.fieldData.unique_id;
        this.appData.mandatory = this.isMandatory;
        this.appData.stepId = this.stepId;
        this.appData.apiKey = this.isSingleAPIKey ? this.fieldData.api_key : '';
        this.appData.responseApiKey = this.isSingleAPIKey ? [] :
            this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
        this.appData.requestApiKey = this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
        this.appData.editable = this.isEditable;
        this.appData.visible = this.isVisible;
        this.appData.value = (this.type === 'Single' ? this.storeData[0] : this.type === '' ? '' : this.storeData);
        this.fieldData.html_id = this.presetData ?
            (this.presetData.html_id ? this.presetData.html_id : this.fieldData.unique_id) : this.fieldData.unique_id;
        this.appData.linkedBlockId = this.presetData ? (this.presetData.linkedBlockId ? this.presetData.linkedBlockId : this.fieldData['repeatable_block_configuration']['linked_block_id']) : this.fieldData['repeatable_block_configuration']['linked_block_id'];
        this.appData.repeatedBlockFieldId = this.presetData ?
            (this.presetData.repeatedBlockFieldId ? this.presetData.repeatedBlockFieldId : '') : '';
        if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.presetData.unique_id) {
                this.appData.id = this.presetData.unique_id;
            }
            if (this.presetData.mandatory) {
                this.appData.mandatory = this.presetData.mandatory;
            }
            if (this.presetData.editable) {
                this.appData.editable = this.presetData.editable;
            }
            if (this.presetData.visible) {
                this.appData.visible = this.presetData.visible;
            }
        }
        this.validateState(this.appData);
        const { add_more_field_label, remove_field_label } = this.fieldData.repeatable_block_configuration;
        if (add_more_field_label) {
            this.add_more_field_label = add_more_field_label;
        }
        if (remove_field_label) {
            this.remove_field_label = remove_field_label;
        }
        if (this.fieldData.event_list && this.fieldData.event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(this.fieldData.event_list))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.fieldData.event_list);
                }
            }
        }
        let emitObj = null;
        if (String(this.appData.id).split('$').length === 3) {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: this.appData.value,
                index: String(this.appData.id).split('$')[2]
            };
        }
        else {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: this.appData.value
            };
        }
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
        // this.sectionSubscription = this.accordionService.sectionOpen$.subscribe(sectionId => {
        //     console.log("entered through service");        
        //     console.log(`📢 Received request to open section: ${sectionId}`);
        //             this.appDataService.getFieldDataByFieldId(sectionId);
        //             const apiKey = localStorage.getItem('selectedApiKey');
        //             //this.fieldData = this.appDataService.getFieldDataByApiKey(apiKey);
        //             //this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId
        //             //this.appDataService.getFieldDataByApiKey("sample api key sad");
        //             this.openAccordionClickedNew(sectionId,0);
        //         });
        this.accordionService.sectionOpenWithParent$.subscribe(({ sectionIds, parentId, defaultValue, iCounter }) => {
            // ✅ Use parentId and sections together
            this.appDataService.getFieldDataByFieldId(sectionIds);
            const apiKey = localStorage.getItem('selectedApiKey');
            //this.fieldData = this.appDataService.getFieldDataByApiKey(apiKey);
            //this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId
            //this.appDataService.getFieldDataByApiKey("sample api key sad");
            this.openAccordionClickedNew(parentId, sectionIds, defaultValue, iCounter);
        });
    }
    openAccordionClickedNew(blockId, uniqueId, defaultValue, iCounter) {
        console.log("TEST parentBlock - ", blockId);
        console.log("TEST uniqueId - ", uniqueId);
        if (iCounter == undefined) {
            iCounter = 0;
        }
        //const dummyBlock = "block_34612_living_address";
        const dummyBlock = defaultValue;
        this.wfeStepLoaderService.loadBlockByName(blockId).subscribe((blockData) => {
            //console.log("Loaded Block Data: ", blockData);
            let loadedBlock = blockData;
            // Find position of field with matching uniqueId
            let fieldIndex = loadedBlock?.block_fields?.findIndex((field) => field.unique_id === uniqueId);
            //console.log("TEST fieldIndex- ", fieldIndex);
            if (fieldIndex !== -1 && dummyBlock) {
                const gBlockId = dummyBlock;
                const pos = fieldIndex;
                this.storeBlockIdIfNull = gBlockId;
                //console.log("Loading block at position:", pos);
                this.onLoadRepeatBlock(gBlockId, pos, iCounter, "");
            }
            else {
                //console.warn(`Field with unique_id '${uniqueId}' not found or dummyBlock is missing`);
            }
        });
    }
    // openAccordionClickedNew(blockId: any, pos: number) {
    //     // remove initial field_values that are configured originally
    //     console.log("TEST parentBlock - ", this.parentBlock);
    //     console.log("TEST parentPosition- ", this.parentPosition);
    //     //this.wfeStepLoaderService.loadBlockByName("");
    //         let dummyBlock = "block_34612_living_address";
    //         this.wfeStepLoaderService.loadBlockByName('block_34612_applicant_details').subscribe((blockData) => {
    //             console.log("Loaded Block Data: ", blockData);
    //             // Process the block data as needed
    //         });
    //         if(dummyBlock) {
    //             let gBlockId = "block_34612_living_address";
    //             let pos = 8;
    //             this.storeBlockIdIfNull = gBlockId;
    //             console.log("loadig block...");
    //             this.onLoadRepeatBlock(gBlockId, pos, 0, "");
    //             console.log("nd reached");
    //         }
    //         else {
    //             console.log("something went wrong");
    //         }
    // }
    labelInfoCheck(data) {
        for (let i = 0; i < this.repeatebleFieldsRows.length; i++) {
            const rowDataList = this.repeatebleFieldsRows[i];
            for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
                const field = this.blockRenderedData.block_fields[position];
                if (field.field_type === 'Accordion') {
                    rowDataList[field.unique_id]['accordionInfo'] = JSON.parse(JSON.stringify(field.accordionInfo));
                    let name = rowDataList[field.unique_id]['accordionInfo'].config_name;
                    // if(name.includes('%repeatablePos%')) {
                    //     let newName = name.replace('%repeatablePos%', (i + 1));
                    //     var key = rowDataList[field.unique_id]['accordionInfo'].dynamic_repeatable_title;
                    //     if(key != "") {
                    //         key = this.substituteStars(key, rowDataList[field.unique_id].unique_id);
                    //         newName = newName + this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                    //     }
                    //     rowDataList[field.unique_id]['accordionInfo'].name = newName;
                    // }                    
                    if (name.includes('((dynamic))')) {
                        let key = rowDataList[field.unique_id]['accordionInfo'].config_name;
                        rowDataList[field.unique_id]['accordionInfo'].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: key }, data, true).field_label;
                    }
                }
            }
        }
    }
    /**
     * Render dummy blocks or info-blocks for newly added block having accordion
     */
    addDummyBlocksForNewlyAddedAccordion() {
        // console.log("Res update:", this.counterTemp, " - ", this.blockId);                            
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            if (field.field_type === "Accordion") {
                let gBlockId = "";
                for (const paramter of field.additional_parameters) {
                    switch (paramter.parameter_type) {
                        case 'default_value':
                            gBlockId = paramter.value;
                            break;
                    }
                }
                let lastDummyBlockInfo = this.rootData[gBlockId];
                if (lastDummyBlockInfo) {
                    let lastLen = lastDummyBlockInfo["len"];
                    let dummyBlockId = gBlockId + this.delimiter + lastLen;
                    if (!this.dummyBlocks[dummyBlockId]) {
                        this.dummyBlocks[dummyBlockId] = this.createInputDataForDummyBlock(gBlockId, position);
                        lastDummyBlockInfo["len"] += 1;
                        this.rootData[gBlockId] = lastDummyBlockInfo;
                    }
                }
            }
        }
    }
    scrollToSection(fieldId, iCounter) {
        if (fieldId != "") {
            const menuElement = document.querySelector(`.accordion-section-${fieldId}-${iCounter}`);
            if (menuElement) {
                const errorField = this.renderer.selectRootElement(menuElement, true);
                if (errorField) {
                    errorField.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
                }
            }
        }
    }
    onLoadRepeatBlock(gBlockId, position, iCounter = -1, fieldId = "") {
        if (gBlockId) {
            this.wfeStepLoaderService.loadBlockByName(gBlockId).subscribe((blockData) => {
                let bsBockFields = this.commonUtil.blockBootstrapProcess(blockData)?.block_fields;
                this.blockRenderedData.block_fields[position]['block_fields'] = bsBockFields;
                this.rootData['blockFields'][gBlockId] = [];
                for (let field of bsBockFields) {
                    this.rootData['blockFields'][gBlockId].push(field.unique_id);
                }
                this.processRowData(this.counterTemp, iCounter, gBlockId);
                this.scrollToSection(fieldId, iCounter);
                // Trigger change detection
                if (this.cdr && !this.cdr.destroyed) {
                    this.cdr.detectChanges();
                }
                if (iCounter === -1) {
                    this.lazyLoading();
                }
                this.wfeStepLoaderService.loaderService.skipLoading = false;
            });
        }
        else {
            this.wfeStepLoaderService.loaderService.skipLoading = false;
        }
    }
    // generateUniqueID(arrayPos: any) : string {
    //     let id = '$' + arrayPos;
    //     if (this.isChildBlock()) {            
    //         id = '$' + this.parentPosition + id;
    //     }
    //     return id;        
    // }
    createInputDataForDummyBlock(gBlockId, position) {
        let inputData = {
            blockId: gBlockId,
            position: position,
            show: true
        };
        return inputData;
    }
    initialLoadingOfSubBlocks(field, position) {
        let gBlockId;
        let collapseTitle = 'Collapse';
        let expandTitle = 'Open';
        let showSection = false;
        let name = field.field_label;
        let footerFields = [];
        let skipLoad = "false";
        let applicationDetails = '';
        let subHeaderFields = [];
        let dynamic_repeatable_title = "";
        for (const paramter of field.additional_parameters) {
            switch (paramter.parameter_type) {
                case 'default_value':
                    gBlockId = paramter.value;
                    break;
                case 'collapseTitle':
                    collapseTitle = paramter.value;
                    break;
                case 'expandTitle':
                    expandTitle = paramter.value;
                    break;
                case 'CEE_FOOTER_FIELDS':
                    footerFields = paramter.value.split('|').map(s => s.trim());
                    break;
                case 'CEE_Skip_rb_accordion_load':
                    skipLoad = paramter.value;
                    // showSection = true;
                    break;
                case 'CEE_rb_accordion_InfoBlock':
                    applicationDetails = paramter.value ? paramter.value : '';
                    break;
                case 'CEE_SUB_HEADER_FIELDS':
                    subHeaderFields = paramter.value.split('|').map(s => s.trim());
                    break;
                case 'CEE_dynamic_repeatable_title':
                    dynamic_repeatable_title = paramter.value;
                    break;
                case 'noIds':
                    this.noIds = paramter.value === "true" ? true : false;
                    break;
            }
        }
        if (field.field_type === 'Accordion') {
            field['accordionInfo'] = {
                collapseTitle,
                expandTitle,
                showSection,
                name,
                footerFields,
                subHeaderFields,
                dynamic_repeatable_title
            };
        }
        if (gBlockId) {
            if (skipLoad == "true") {
                for (let i = 0; i < this.counterTemp.length; i++) {
                    let dummyBlockId = gBlockId + this.delimiter + i;
                    this.dummyBlocks[dummyBlockId] = this.createInputDataForDummyBlock(gBlockId, position);
                }
                // save particular accodion's data in rootData to track the count
                this.rootData[gBlockId] = {
                    "len": this.counterTemp.length,
                    "applicationDetails": applicationDetails
                };
            }
            else {
                this.onLoadRepeatBlock(gBlockId, position);
            }
        }
    }
    processOutsideOfAngularZone() {
        this.wfeStepLoaderService.loadBlockByName(this.blockId).subscribe((res) => {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(res);
            for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
                const field = this.blockRenderedData.block_fields[position];
                if (field.field_type === "Attachments") {
                    this.rootData['repeatable-' + field.unique_id] = {};
                }
                else if (field.field_type === "Generic Block" || field.field_type === "Accordion") {
                    this.initialLoadingOfSubBlocks(field, position);
                }
                if (field.field_type === 'label') {
                    field['copyOfFieldLabel'] = field.field_label;
                }
            }
            this.processRowData(this.counterTemp);
            this.lazyLoading();
        });
    }
    scrollIntoChildView(index) {
        try {
            if (index) {
                let childBlock = '';
                if (this.isChildBlock()) {
                    childBlock = `${this.blockId}-p-${this.parentPosition}-c-${index}`;
                }
                else {
                    childBlock = `${this.blockId}-c-${index}`;
                }
                if (childBlock) {
                    const interval = setInterval(() => {
                        const addedBlock = document.getElementsByClassName(childBlock);
                        if (addedBlock[0]) {
                            addedBlock[0].scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                            clearInterval(interval);
                        }
                    }, 200);
                    setTimeout(() => { clearInterval(interval); }, 2000);
                }
            }
        }
        catch (error) { }
    }
    // getApplicationInfo(data, i) {
    //     let words = data?.split("$$");
    //     let accordData:any = {};
    //     if(words[0]) {
    //         let titleValue: string;
    //         if(words[0].includes('%repeatablePos%')) {
    //             titleValue = words[0].replace('%repeatablePos%', i + 1);
    //         }
    //         else {
    //             titleValue = words[0];
    //         }
    //         if(titleValue.includes('((dynamic))')) {
    //             accordData.title = this.setDynamicLabelUtil.getDynamicValue({ field_label: titleValue}).field_label;
    //         }
    //         else {
    //             accordData.title = titleValue;
    //         }
    //     }
    //     if(words[1]) {
    //         if(words[1].includes('((dynamic))')) {
    //             accordData.subtitle = this.setDynamicLabelUtil.getDynamicValue({ field_label: words[1]}).field_label;
    //         }
    //         else {
    //             accordData.subtitle = words[1];
    //         }
    //     }
    //     return accordData;
    // }
    lazyLoading() {
        // stop existing interval and start new interval for lazy loading
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.reapeatableLoading = true;
        this.counter = [];
        this.childCounter[this.parentPosition] = [];
        this.lazyInterval = setInterval(() => {
            if (this.isChildBlock()) {
                if (this.childCounter && this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].length !== this.counterTemp.length) {
                    this.childCounter[this.parentPosition].push(this.counterTemp[this.childCounter[this.parentPosition].length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            else {
                if (this.counter.length !== this.counterTemp.length) {
                    this.counter.push(this.counterTemp[this.counter.length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            if (this.cdr && !this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
            // To Enable or Disable 
            this.countActiveBlocks();
            // Emit to Reset ActiveIndex On Adding or Removing RB
            if (this.resetIndexOnAddOrRemove) {
                this.sharedEventsService.emitOnAddOrRemoveRB.emit();
            }
        }, 0);
    }
    // @HostListener('window:beforeunload', ['$event']) 
    // unloadHandler(event: Event) {
    //     // if (this.lazyInterval) {
    //     //     clearInterval(this.lazyInterval);
    //     // }
    //     // this.counter = [];
    //     // this.childCounter = {};
    //     this.processRowData();
    // }
    // accordion
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    // accordion
    modifyFieldValue2(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let paramSplitValue = param.value.split("|");
                                if (paramSplitValue.length > 0 && paramSplitValue[0] !== 'NR') {
                                    param.value = this.transformString(i, param.value, gBlockId);
                                }
                                else if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                    param.value = param.value.replace(/NR\|/g, "");
                                }
                                else {
                                    param.value = `${gBlockId}$${param.value}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValue2(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    modifyFieldValue(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === "field") {
                    const isConditionContext = Array.isArray(obj["condition"]);
                    const isValidationCondition = Array.isArray(obj["conditions"]);
                    if (obj[key] === "") {
                        obj[key] = "";
                    }
                    else if (isConditionContext) {
                        // We are inside something like event_params with a condition array
                        for (const condition of obj["condition"]) {
                            if (condition.hasOwnProperty("field") &&
                                condition.choose_one === "step" &&
                                typeof condition.field === "string" &&
                                condition.field.startsWith("NR|")) {
                                // Don't transform, just clean NR|
                                condition.field = condition.field.replace(/^NR\|/, "");
                                continue;
                            }
                            if (condition.hasOwnProperty("field")) {
                                condition.field = `${gBlockId}$${condition.field}$${i}`;
                            }
                        }
                        if (isValidationCondition) {
                            for (const condition of obj["conditions"]) {
                                if (condition.hasOwnProperty("field") &&
                                    condition.choose_one === "step" &&
                                    typeof condition.field === "string" &&
                                    condition.field.startsWith("NR|")) {
                                    condition.field = condition.field.replace(/^NR\|/, "");
                                    continue;
                                }
                                if (condition.hasOwnProperty("field")) {
                                    condition.field = `${gBlockId}$${condition.field}$${i}`;
                                }
                            }
                        }
                    }
                    else {
                        // Regular field transformation
                        if (typeof obj[key] === 'string') {
                            if (obj[key].startsWith("NR|")) {
                                obj[key] = obj[key].replace(/^NR\|/, "");
                            }
                            else {
                                obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                            }
                        }
                    }
                }
                else if (key === "unique_id") {
                    obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                }
                else if (key === "additional_parameters") {
                    for (const param of obj[key]) {
                        if (["TargetFields", "blockFields", "EraseSessionData", "Variables", "Targets"].includes(param.parameter_type)) {
                            const paramSplitValue = param.value.split("|");
                            if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                param.value = param.value.replace(/^NR\|/, "");
                            }
                            else {
                                param.value = this.transformString(i, param.value, gBlockId);
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    // Recurse into nested objects
                    this.modifyFieldValue(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    // repeatable
    transformStringRb(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${this.stepId}$${x}$${this.parentPosition}$${i}`);
        });
        return result.join('|');
    }
    modifyFieldValueRb(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        if (obj[key] == "") {
                            continue;
                        }
                        obj[key] = `${this.stepId}$${obj[key]}$${this.parentPosition}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let paramSplitValue = param.value.split("|");
                                if (paramSplitValue.length > 0 && paramSplitValue[0] !== 'NR') {
                                    param.value = this.transformStringRb(i, param.value, gBlockId);
                                }
                                else if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                    param.value = param.value.replace(/NR\|/g, "");
                                }
                                else {
                                    param.value = `${this.stepId}$${param.value}$${this.parentPosition}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValueRb(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    getNewFields(i, fields, gBlockId, type) {
        let finalFields = [];
        if (this.noIds === false) {
            let fieldUnq = [];
            if (fields.length > 0) {
                if (type == "Accordion") {
                    fields.map(x => {
                        let newField = this.modifyFieldValue(i, x, gBlockId);
                        finalFields.push(newField);
                        fieldUnq.push(x.unique_id);
                    });
                }
                if (type == "Generic Block") {
                    fields.map(x => {
                        let newField = this.modifyFieldValue2(i, x, gBlockId);
                        finalFields.push(newField);
                        fieldUnq.push(x.unique_id);
                    });
                }
            }
            let blockname = `${gBlockId}$${gBlockId}$${i}`;
            this.rootData['blockFields'][blockname] = fieldUnq;
        }
        else {
            let fieldUnq = [];
            if (fields.length > 0) {
                fields.map(x => {
                    let newField = this.modifyFieldValueRb(i, x, gBlockId);
                    finalFields.push(newField);
                    fieldUnq.push(x.unique_id);
                });
            }
            let blockname = `${this.stepId}$${gBlockId}$${this.parentPosition}$${i}`;
            this.rootData['blockFields'][blockname] = fieldUnq;
        }
        return finalFields;
    }
    // gBlockId and iCounter is needed when to expand particular accordion
    getRowDataList(i, iCounter, gBlockId, existingRowData = {}) {
        const rowDataList = {};
        const uniqueIds = {};
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            // field.block_fields this will exist when Accordioan is opened
            if ((field.field_type === 'Generic Block' || field.field_type === 'Accordion') && field.block_fields) {
                const blockIds = JSON.parse(JSON.stringify(field.block_fields));
                if (gBlockId == field.possible_values[0] && field.field_type === 'Accordion') {
                    if (typeof i === 'number' && !isNaN(i)) {
                        let newFields = this.getNewFields(i, blockIds, gBlockId, field.field_type) || [];
                        field.field_values[i] = newFields;
                    }
                }
                if (gBlockId == field.possible_values[0] && field.field_type === 'Generic Block') {
                    if (typeof i === 'number' && !isNaN(i)) {
                        let newFields = this.getNewFields(i, blockIds, gBlockId, field.field_type) || [];
                        field.field_values[i] = newFields;
                    }
                }
                let arrOfFields = field.field_values[i];
                for (let pos = 0; pos < arrOfFields?.length; pos++) {
                    const innerField = arrOfFields[pos];
                    rowDataList[innerField?.unique_id] = this.generateRowData(i, innerField, "superBlocks");
                    uniqueIds[innerField?.unique_id] = rowDataList[innerField?.unique_id]?.unique_id;
                }
            }
            rowDataList[field.unique_id] = existingRowData?.hasOwnProperty(field.unique_id) ? existingRowData[field.unique_id] : this.generateRowData(i, field);
            uniqueIds[field.unique_id] = rowDataList[field.unique_id].unique_id;
            if (field.field_type === 'Accordion') {
                rowDataList[field.unique_id]['accordionInfo'] = JSON.parse(JSON.stringify(field.accordionInfo));
                if (gBlockId && iCounter == i) {
                    var pValues = field.possible_values;
                    if (pValues.includes(gBlockId)) {
                        rowDataList[field.unique_id]['accordionInfo'].showSection = true;
                    }
                }
                let name = rowDataList[field.unique_id]['accordionInfo'].name;
                if (name.includes('%repeatablePos%')) {
                    let newName = name.replace('%repeatablePos%', (i + 1));
                    var key = rowDataList[field.unique_id]['accordionInfo'].dynamic_repeatable_title;
                    if (key != "") {
                        key = this.commonUtil.findIndicesAndSubstituteStars(key, rowDataList[field.unique_id].unique_id, "$");
                        newName = newName + this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                    }
                    rowDataList[field.unique_id]['accordionInfo'].name = newName;
                }
                if (name.includes('((dynamic))')) {
                    let key = rowDataList[field.unique_id]['accordionInfo'].name;
                    key = this.commonUtil.findIndicesAndSubstituteStars(key, rowDataList[field.unique_id].unique_id, "$");
                    rowDataList[field.unique_id]['accordionInfo'].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                }
                rowDataList[field.unique_id]['accordionInfo'].footerFields = this.getFooterFields(gBlockId, rowDataList[field.unique_id]['accordionInfo'].footerFields, i);
            }
        }
        this.processEventList(rowDataList, uniqueIds);
        return rowDataList;
    }
    getFooterFields(gBlock, footerFields = [], counter) {
        let footerArray = [];
        if (gBlock == null) {
            gBlock = this.storeBlockIdIfNull;
        }
        footerFields.map(x => {
            footerArray.push(`${gBlock}$${x}$${counter}`);
        });
        return footerArray;
    }
    processRowData(c = this.counterData, iCounter = -1, gBlockId = null) {
        if (iCounter !== -1) {
            if (iCounter < this.repeatebleFieldsRows.length) {
                // new way with RxJS
                of(iCounter)
                    .pipe(concatMap((index) => {
                    const rowDataList = this.getRowDataList(index, index, gBlockId, this.repeatebleFieldsRows[index]);
                    return of(rowDataList);
                }))
                    .subscribe((rowDataList) => {
                    this.repeatebleFieldsRows[iCounter] = rowDataList;
                    // Trigger change detection for this row
                    // if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                    //     this.cdr.detectChanges();
                    // }
                });
            }
        }
        else {
            this.repeatebleFieldsRows = [];
            // TODO: Need to remove static code
            // if(this.blockId == "block_34612_applicant_details") {
            // older way
            for (let i = 0; i < c.length; i++) {
                const rowDataList = this.getRowDataList(i, iCounter, gBlockId);
                this.repeatebleFieldsRows.push(rowDataList);
                // Trigger change detection for each row
                // setTimeout(() => {
                //     if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                //         this.cdr.detectChanges();
                //     }
                // }, 0);
            }
            //console.log("repeatebleFieldsRows:", this.repeatebleFieldsRows);
            // }
            // else {
            //     // new way with RxJS
            //     of(...c)
            //         .pipe(
            //             concatMap((_, i) => {
            //                 const rowDataList = this.getRowDataList(i, iCounter, gBlockId);
            //                 return of(rowDataList);//.pipe(delay(5));
            //             })
            //         )
            //         .subscribe((rowDataList) => {
            //             // Trigger change detection for each row
            //             this.repeatebleFieldsRows.push(rowDataList);
            //             if (this.cdr && !(this.cdr as ViewRef).destroyed) {
            //                 this.cdr.detectChanges();
            //             }
            //         });
            // }
            // console.log("repeatebleFieldsRows:------->", this.repeatebleFieldsRows);
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
        }
    }
    /* Checks if an accordion should be visible based on its display conditions */
    checkAccordionVisibility(field, rowData, i) {
        // console.log("checkAccordionVisibility");
        if (field.is_display === 0) { // If is_display is 0, always hide
            return false;
        }
        else if (field.is_display === 1) { // If is_display is 1, always show
            return true;
        }
        else if (field.is_display === 2) { // If is_display is 2, check conditions
            let conditionValue = null;
            // Handle API response data for conditions
            if (field.display_condition && field.display_condition.condition) {
                for (const condition of field.display_condition.condition) {
                    if (!condition.field)
                        continue;
                    // Replace wildcards with actual indices
                    let modifiedField = condition.field;
                    if (modifiedField.includes('[*]')) {
                        // Extract indices from rowData.unique_id (e.g., "stepId$fieldId$0$1")
                        const indices = rowData.unique_id.split('$');
                        const rowIndex = indices.length >= 3 ? indices[2] : '0';
                        // Replace [*] with actual index
                        modifiedField = modifiedField.replace(/\[\*\]/g, `[${rowIndex}]`);
                    }
                    else {
                        modifiedField = this.stepId + '$' + modifiedField + '$' + i;
                    }
                    // Check API response data
                    if (this.responseMap[modifiedField] !== undefined) {
                        conditionValue = this.responseMap[modifiedField];
                        break;
                    }
                    console.log("modifiedField", modifiedField);
                    // Check app data for field value - skip if null/undefined
                    const fieldValue = this.appDataService.getFieldDataByFieldId(modifiedField);
                    console.log(modifiedField, "==>", fieldValue);
                    if (fieldValue === null || fieldValue === undefined) {
                        continue; // Skip this condition check if value is null/undefined
                    }
                    conditionValue = fieldValue;
                    break;
                }
            }
            // If we have a valid condition value, evaluate visibility
            if (conditionValue !== null) {
                const fieldId = rowData.unique_id || field.unique_id;
                const visible = this.conditionalUtil.checkVisibility(field, fieldId, conditionValue);
                if (visible !== undefined) {
                    return visible;
                }
            }
        }
        // Default fallback to visible
        return false;
    }
    generateRowData(arrayPos, fieldTemp, type = "") {
        const value = '[' + arrayPos + ']';
        let apiKey;
        let id = type != "superBlocks" ? this.stepId + '$' + fieldTemp.unique_id + '$' + arrayPos : fieldTemp?.unique_id;
        let deleteIndex = arrayPos;
        if (this.isChildBlock()) {
            // console.log("type:", type);
            deleteIndex = '_' + this.parentPosition + '_' + arrayPos;
            if (type != "superBlocks") {
                id = this.stepId + '$' + fieldTemp.unique_id + '$' + this.parentPosition + '$' + arrayPos;
            }
            else {
                id = fieldTemp.unique_id;
            }
            apiKey = fieldTemp.api_key ? fieldTemp?.api_key.replace('[**]', this.parentPosition) : '';
        }
        apiKey = fieldTemp?.api_key ? fieldTemp?.api_key.replace('[*]', value) : '';
        const formattedVal = {
            api_key: this.isSingleAPIKey ? apiKey : '',
            unique_id: id,
            html_id: id,
            response_api_key: this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition),
            request_api_key: this.returnRequestOrResponseApiKeys('request', fieldTemp?.request_api_key, value, this.parentPosition),
            linkedBlockId: this.blockId,
            repeatedBlockFieldId: this.fieldData.unique_id,
            isApiResponse: this.isApiResponse,
            value: this.returnFieldDataForLabel(fieldTemp, this.isSingleAPIKey ? apiKey :
                this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition), id, value),
            position: arrayPos,
            parentPosition: this.parentPosition,
            parentBlockId: this.parentBlock,
            event_list: fieldTemp?.event_list ? JSON.parse(JSON.stringify(fieldTemp?.event_list)) : [],
            resIsDiffHandler: fieldTemp?.response_api_key && this.commonUtil.getHandlerName(this.fieldData?.response_api_key)
                !== this.commonUtil.getHandlerName(fieldTemp?.response_api_key) ? true : false
        };
        if (type != "superBlocks") {
            // formattedVal.mandatory = fieldTemp?.is_mandatory === 1 || fieldTemp?.is_mandatory === 2;
            formattedVal.mandatory = fieldTemp?.is_mandatory === 1; // By defalt mandatory should be false for conditional mandatory fields 
            formattedVal.editable = fieldTemp?.is_editable === 1 || fieldTemp?.is_editable === 2;
            formattedVal.visible = fieldTemp?.is_display === 1 || fieldTemp?.is_display === 2;
        }
        // if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
        //     formattedVal.value = this.presetData.value[arrayPos] &&
        //         this.presetData.value[arrayPos][fieldTemp?.response_api_key] ?
        //         this.presetData.value[arrayPos][fieldTemp?.response_api_key] : formattedVal.value;
        // }
        if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
            formattedVal.value = this.presetData.value[arrayPos] &&
                this.presetData.value[arrayPos][fieldTemp.response_api_key] ?
                this.presetData.value[arrayPos][fieldTemp.response_api_key] : formattedVal.value;
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        else {
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        const eaoValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(pv => pv.parameter_type === 'externalApiOptionValue') : null;
        if (eaoValue) {
            formattedVal['externalApiOptionValue'] = this.returnRequestOrResponseApiKeys('request', eaoValue.value, value, this.parentPosition);
        }
        if (this.dataMap[deleteIndex]) {
            if (this.dataMap[deleteIndex].indexOf(id) === -1) {
                this.dataMap[deleteIndex].push(id);
            }
        }
        else {
            this.dataMap[deleteIndex] = [id];
        }
        return formattedVal;
    }
    processEventList(rowData, uniqueIds) {
        for (const uId in rowData) {
            const fieldData = rowData[uId];
            for (const event of fieldData?.event_list) {
                for (const eParam of event?.event_params) {
                    switch (eParam?.event_config?.display_step) {
                        case "SetValues":
                        case "CustomFunctions":
                            const pTypes = ['TargetFields', 'ValueFields', 'Variables', 'Targets'];
                            for (const addi_param of eParam?.invoke_event_config?.additional_parameters) {
                                if (addi_param.parameter_type && addi_param.value && pTypes.includes(addi_param.parameter_type)) {
                                    let addiParamValNew = [];
                                    const addiParamVals = addi_param.value.split('|').map(val => val.trim());
                                    for (const addiParamVal of addiParamVals) {
                                        if (Object.keys(uniqueIds).includes(addiParamVal)) {
                                            addiParamValNew.push(uniqueIds[addiParamVal]);
                                        }
                                        else {
                                            addiParamValNew.push(addiParamVal);
                                        }
                                    }
                                    addi_param.value = addiParamValNew.join('|');
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    isChildBlock() {
        return (this.parentPosition != undefined && this.parentPosition != null);
    }
    get counterData() {
        const isChild = this.isChildBlock();
        if (isChild) {
            return this.childCounter?.[this.parentPosition] ?? null;
        }
        else {
            return this.counter ?? null;
        }
    }
    onBlockAdd() {
        // console.log("blockId:", this.blockId);
        if (this.isChildBlock()) {
            this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            if (this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].filter(e => e.active === true).length < this.maxBlocksCount) {
                this.childCounter[this.parentPosition].push({ active: true, activeIndex: 0 });
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                this.childCounter = this.resetSequenceOnAction(this.childCounter);
            }
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.childCounter);
            this.counterTemp = this.childCounter[this.parentPosition];
            // To Enable or Disable 
            this.countActiveBlocks();
            // Focus added view
            if (this.focusChildView) {
                this.scrollIntoChildView(this.counterTemp.length - 1);
            }
        }
        else {
            this.counter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            if (this.counter.filter(e => e.active === true).length < this.maxBlocksCount) {
                this.counter.push({ active: true, activeIndex: 0 });
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                this.counter = this.resetSequenceOnAction(this.counter);
            }
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counter);
            this.counterTemp = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            // To Enable or Disable 
            this.countActiveBlocks();
            // Focus added view
            if (this.focusChildView) {
                this.scrollIntoChildView((this.counterTemp.length - 1));
            }
        }
        this.wfeEventListHandler.onComponentEventBatch(this.fieldData, this.presetData, this.stepId, "OnAdd", {}, false);
        // this.processRowData(this.counterData, -1, false);
        this.processOutsideOfAngularZone();
    }
    /**
     * function to remove all the repetable blocks except the one with the index 0
     */
    onAllBlockRemove(repetableBlockFieldIds) {
        for (const id of repetableBlockFieldIds) {
            // console.log(id === this.fieldData.unique_id);
            if (id === this.fieldData.unique_id) {
                this.responseMap = {};
                let counterData = this.counter;
                if (this.isChildBlock()) {
                    this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                    counterData = this.childCounter[this.parentPosition];
                }
                if ((this.enableDeleteLastRow && (counterData.filter(e => e.active === true).length >= (this.isVisible ? 1 : 0))) || (!this.enableDeleteLastRow && (counterData.filter(e => e.active === true).length > (this.isVisible ? 1 : 0)))) {
                    let arrayMap = [];
                    for (let index = this.enableDeleteLastRow ? 0 : this.isVisible ? 1 : 0; index < counterData.length; index++) {
                        const element = counterData[index];
                        if (element.active) {
                            arrayMap = [...arrayMap, ...this.dataMap[this.isChildBlock() ? '_' + this.parentPosition + '_' + index : index]];
                            delete this.dataMap[index];
                        }
                    }
                    this.counter = [];
                    this.processRowData();
                    // // console.log(this.dataMap[this.counter]);
                    this.appDataService.deleteMultipleAppData(arrayMap);
                    const _this = this;
                    setTimeout(() => {
                        _this.counter = [];
                        if (!this.enableDeleteLastRow) {
                            _this.counter.push({ active: true });
                        }
                        _this.processRowData();
                    }, 0);
                    // console.log(this.dataMap);
                    if (!this.isChildBlock()) {
                        this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counter);
                        this.blockRenderedData.block_fields.filter((bf) => {
                            return bf.field_type == 'Repeatable Block';
                        }).map((block) => {
                            let childBlockId = block.repeatable_block_configuration.linked_block_id;
                            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(childBlockId, { '0': [{ active: true }] });
                        });
                    }
                    else {
                        this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, { '0': [{ active: true }] });
                    }
                    if (this.type !== '') {
                        this.radioValue = '0';
                        this.storeData = [0];
                        // this.appData.value = (this.type === 'Single' ? this.storeData[0] : this.storeData);
                        this.updateFieldState({
                            ...this.appData, ...{
                                value: (this.type === 'Single' ? this.storeData[0] : this.storeData)
                            }
                        });
                    }
                }
                if (this.dataMap[0]) {
                    const uniqueIds = [];
                    for (const ids of this.dataMap[0]) {
                        uniqueIds.push(ids.split('$')[1]);
                    }
                    // console.log({ unique_ids: uniqueIds, apiKeys: [] });
                    this.sharedEventsService.emitForEmptySession.emit({ unique_ids: uniqueIds, apiKeys: [] });
                }
            }
        }
    }
    onDeleteBlock(pos) {
        // console.log(this.additionalParameter);
        if (this.additionalParameter['PromptDelete']) {
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: this.additionalParameter['PromptDelete']
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.deleteBlock(pos);
                }
            });
        }
        else {
            this.deleteBlock(pos);
        }
    }
    deleteBlock(pos) {
        let counterData = [];
        let prevCounterData = [];
        let prevCounterIndices = [];
        let deletePosition = pos;
        let leastCount = this.enableDeleteLastRow ? 0 : 1;
        if (this.isChildBlock()) {
            this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            counterData = this.childCounter[this.parentPosition];
            deletePosition = '_' + this.parentPosition + '_' + pos;
        }
        else {
            counterData = this.counter;
        }
        if (counterData.filter(e => e.active === true).length > leastCount) {
            prevCounterData = [...counterData];
            prevCounterIndices = prevCounterData.reduce((acc, item, index) => { if (item.active) {
                acc.push(index);
            } return acc; }, []);
            counterData[pos].active = false;
            if (this.isChildBlock()) {
                this.childCounter[this.parentPosition] = counterData;
                counterData = this.childCounter;
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                counterData = this.resetSequenceOnAction(counterData);
            }
            //*** remove all child block on main block delete *****//
            if (!this.isChildBlock()) {
                this.blockRenderedData.block_fields.filter((bf) => {
                    return bf.field_type == 'Repeatable Block';
                }).map((block) => {
                    let childBlockId = block.repeatable_block_configuration.linked_block_id;
                    let repeatBlockIdLocaData = this.repeatableBlockDataUtil.getRepeatableLocalStorageDataByBlockId(childBlockId);
                    if (repeatBlockIdLocaData) {
                        const filterIds = Object.keys(repeatBlockIdLocaData).filter(i => i.includes('$' + pos + '$'));
                        this.repeatableBlockDataUtil.removeDataUsingMultipleIds(childBlockId, filterIds);
                        this.appDataService.deleteMultipleAppData(filterIds);
                    }
                    let childCountData = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(childBlockId);
                    childCountData[pos] = childCountData[pos].map((i) => {
                        return { active: false, activeIndex: 0 };
                    });
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(childBlockId, childCountData);
                });
            }
            // ****** //
            this.repeatableBlockDataUtil.removeDataUsingMultipleIds(this.blockId, this.dataMap[deletePosition]);
            this.appDataService.deleteMultipleAppData(this.dataMap[deletePosition]);
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, counterData);
            delete this.dataMap[deletePosition];
            // for radio select
            if (this.type === 'Single') {
                if (Number(this.radioValue) === pos) {
                    for (let i = counterData.length - 1; i >= 0; i--) {
                        if (i <= pos) {
                            if (counterData[i].active) {
                                this.radioValue = String(i);
                                break;
                            }
                        }
                    }
                    this.storeData = [Number(this.radioValue)];
                    this.updateFieldState({ ...this.appData, ...{ value: Number(this.radioValue) } });
                }
            }
            setTimeout(() => {
                this.wfeEventListHandler.onComponentEventBatch(this.fieldData, this.presetData, this.stepId, "OnRemove", {}, false);
                this.sharedEventsService.validateButtonForTagEmitter.emit();
                this.sharedEventsService.buttonValidationEmitter.emit();
                // Emit to Reset ActiveIndex On Adding or Removing RB
                if (this.resetIndexOnAddOrRemove) {
                    this.sharedEventsService.emitOnAddOrRemoveRB.emit();
                }
                // To Enable or Disable 
                this.countActiveBlocks();
                // Focus added view
                if (this.focusChildView) {
                    if (prevCounterIndices && prevCounterIndices.length > 0) {
                        const curIndex = prevCounterIndices.indexOf(pos), prev = (curIndex > 0 ? prevCounterIndices[curIndex - 1] : null), next = (curIndex < prevCounterIndices.length - 1 ? prevCounterIndices[curIndex + 1] : null);
                        if (next) {
                            this.scrollIntoChildView(next);
                        }
                        else if (prev) {
                            this.scrollIntoChildView(prev);
                        }
                    }
                }
            }, 0);
        }
        // console.log(this.dataMap);
    }
    resetSequenceOnAction(counterData) {
        if (Array.isArray(counterData)) {
            let count = 0;
            return counterData.map((c) => {
                if (c.active) {
                    count = count + 1;
                    c['activeIndex'] = count;
                }
                else {
                    c['activeIndex'] = 0;
                }
                return c;
            });
        }
        else {
            for (const key in counterData) {
                if (counterData.hasOwnProperty(key)) {
                    counterData[key] = this.resetSequenceOnAction(counterData[key]);
                }
            }
            return counterData;
        }
    }
    // getBlockData(field: any): any {
    //     let blockData = {};
    //     if (field.additional_parameters.length > 0) {
    //         for (const paramter of field.additional_parameters) {
    //             switch (paramter.parameter_type) {
    //                 case 'default_value':
    //                     blockData = paramter.value;
    //                     break;
    //             }
    //         }
    //     }
    //     return blockData;
    // }
    onFieldDataUpdated(fieldId, value) {
        // console.log("f:", fieldId);
        this.conditionCheck(value);
        // update the state of the repeatable block if required
        if (this.counterData) {
            for (let i = 0; i < this.counterData.length; i++) {
                this.sectionCustomClass[i] = this.blockRenderedData?.block_style ? this.blockRenderedData?.block_style?.custom_class_name : '';
                if (this.blockRenderedData?.custom_class_condition && this.blockRenderedData?.custom_class_condition['query'] != '') {
                    const customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, this.stepId + '$' + this.blockRenderedData.block_id + '$' + i, value);
                    if (!customClassCondition) {
                        this.sectionCustomClass[i] = '';
                    }
                }
            }
        }
    }
    conditionCheck(value) {
        if (this.fieldData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.fieldData, String(this.appData.id), value);
            if (editable !== undefined) {
                this.buttonEditable = editable;
                this.hideActionButton = editable;
            }
        }
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, String(this.appData.id), value);
            if (visible !== undefined) {
                // if(visible) {
                //     this.processRowData();
                // }
                this.isVisible = visible;
                // If the block is not visible, check and set the mandatory condition for fields
                this.setMandatoryConditionForBlockFields();
            }
        }
    }
    /**
     * Sets the mandatory condition for all fields in the block when the block is not visible.
     * This ensures that if the block is hidden, any fields that were mandatory are set to non-mandatory.
     */
    setMandatoryConditionForBlockFields() {
        if (!this.blockRenderedData)
            return;
        const appData = this.appDataService.getAllAppStoreData();
        if (!appData)
            return;
        if (this.isVisible) {
            // Filter fields that belong to this block and were mandatory originally
            const fieldsToUpdate = appData.filter(field => this.blockRenderedData.block_id === field.linkedBlockId && field.mandatoryOriginal && field.visible);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: true,
                    });
                });
            }
        }
        else {
            // Filter fields that belong to this block and are mandatory
            const fieldsToUpdate = appData.filter(field => this.blockRenderedData.block_id === field.linkedBlockId && field.mandatory);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: false,
                        mandatoryOriginal: true,
                    });
                });
            }
        }
    }
    checkFieldVisibility(field, rowData) {
        if (field.is_display === 0)
            return false;
        if (field.is_display === 2)
            return this.conditionalUtil.checkVisibility(field, rowData.api_key, rowData.value);
        return true;
    }
    getMaxIndex(res) {
        let hasAPIKey = false;
        if (res) {
            let max = 0;
            let apiKeys = [];
            // console.log(this.fieldData.unique_id, this.fieldData.response_api_key);
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    const result = key.match(new RegExp(regex));
                    if (result) {
                        hasAPIKey = true;
                        this.responseMap[key] = res[key];
                        const currIndex = result[0].replace(apiKey.replace('[*]', ''), '').replace('[', '').replace(']', '');
                        if (max < Number(currIndex)) {
                            max = Number(currIndex);
                        }
                    }
                }
            }
            if (hasAPIKey) {
                const tCounter = [];
                for (let index = 0; index < Number(max) + 1; index++) {
                    tCounter.push({ active: true, activeIndex: Number(index) + 1 });
                }
                this.isApiResponse = true;
                this.repeatableBlockDataUtil.removeByBlockId(this.blockId);
                let dataMapIds = [];
                for (const key of Object.keys(this.dataMap)) {
                    const dataMapId = this.dataMap[key];
                    dataMapIds = dataMapIds.concat(dataMapId);
                }
                this.appDataService.deleteMultipleAppData(dataMapIds);
                return tCounter;
            }
            else {
                if (this.isChildBlock()) {
                    return this.childCounter;
                }
                return this.counter;
            }
        }
        else {
            if (this.isChildBlock()) {
                return this.childCounter;
            }
            return this.counter;
        }
    }
    checkIfResHasBlankData(res) {
        let flag = false;
        if (res) {
            let apiKeys;
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const key = apiKey.replace('[*]', '');
                if (res[key] && res[key].length === 0) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    checkIfResHasRepeatedData(res) {
        let hasAPIKey = false;
        if (res) {
            let apiKeys;
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    if (key.indexOf('[*]') <= -1) {
                        const result = key.match(new RegExp(regex));
                        if (result) {
                            hasAPIKey = true;
                        }
                    }
                    else {
                        hasAPIKey = false;
                        break;
                    }
                }
            }
        }
        return hasAPIKey;
    }
    repeatableBlockChange(data, isChecked) {
        if (isChecked) {
            if (this.type === 'Single') {
                this.storeData = [];
            }
            this.storeData = [...this.storeData, ...[data]];
        }
        else {
            if (this.storeData.length > 0) {
                const arr = [];
                for (const i of this.storeData) {
                    if (i !== data) {
                        arr.push(i);
                    }
                }
                this.storeData = arr;
            }
        }
        this.storePrimaryKey();
    }
    storePrimaryKey() {
        this.updateFieldState({
            ...this.appData, ...{
                value: (this.type === 'Single' ? this.storeData[0] : this.storeData)
            }
        });
    }
    validateState(appData) {
        this.appDataService.getAppDataByFieldId(String(appData.id)).pipe(take(1)).subscribe(val => {
            if (val) {
                if (val.id === appData.id) {
                    // State found
                    this.appData.value = val.value;
                    setTimeout(() => {
                        if (this.type === 'Single') {
                            this.radioValue = String(val.value);
                        }
                        this.storeData = [val.value];
                    }, 0);
                    this.updateFieldState(appData);
                }
            }
            else {
                // Create new state
                this.createNewFieldState(appData);
            }
        });
    }
    createNewFieldState(appData) {
        this.appDataService.addAppData(appData);
    }
    updateFieldState(appData) {
        this.appDataService.updateAppData(appData);
    }
    disableRemoveBtnIfArrayEmpty() {
        if (this.counter.filter(e => e.active === true).length === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    // TODO: Remove this function when once the map comes from the WFE End
    setAssociatedMap() {
        const dependentFields = [];
        if (this.fieldData.editable_condition && this.fieldData.editable_condition.condition) {
            for (const condition of this.fieldData.editable_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        if (this.fieldData.display_condition && this.fieldData.display_condition.condition) {
            for (const condition of this.fieldData.display_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        this.associatedMapUtil.set(this.fieldData.unique_id, [...new Set(dependentFields)]);
    }
    /**
     * function that returns field label or the value of the label
     * @param fieldTemp field Data
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldDataForLabel(fieldTemp, apiKey, id, posVal) {
        let returnValue;
        if (fieldTemp?.field_type === 'label' && !(this.isSingleAPIKey ? fieldTemp?.api_key : fieldTemp?.response_api_key)) {
            returnValue = fieldTemp?.field_label;
            if (returnValue && returnValue.includes('((dynamic))')) {
                const keys = (returnValue.split('((dynamic))')[1]).match(new RegExp(/\%(.*?)\%/g));
                if (keys) {
                    for (const apiKey1 of keys) {
                        let apiKey = apiKey1.split('%')[1];
                        const keyValue = this.returnRequestOrResponseApiKeys('response', apiKey, posVal, this.parentPosition);
                        returnValue = returnValue.replace('%' + apiKey + '%', keyValue !== undefined ? '%' + keyValue + '%' : '');
                    }
                }
            }
        }
        else {
            returnValue = this.returnFieldValue(apiKey, id);
            if (returnValue === undefined) {
                const defaultValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(i => i.parameter_type === 'default_value') : null;
                if (defaultValue) {
                    returnValue = defaultValue.value;
                }
            }
        }
        return returnValue ? returnValue : '';
    }
    /**
     * function that returns value in respect ot the api key based on the
     * condition if it uses single or multiple api key
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldValue(apiKey, id) {
        // TODO: Check functionality
        let value;
        if (this.isSingleAPIKey) {
            value = this.responseMap[apiKey];
        }
        else {
            for (const key of apiKey) {
                if (key.includes('+')) {
                    let val;
                    const concatKeys = key.split('+');
                    for (const singleKey of concatKeys) {
                        val = concatKeys.indexOf(singleKey) === 0 ? this.responseMap[singleKey] : value + ' ' + this.responseMap[singleKey];
                    }
                    value = val;
                }
                else if (this.responseMap.hasOwnProperty(key)) {
                    value = this.responseMap[key];
                }
                else {
                    const valTemp = this.setApiCallBackDataUtil.getArrayWithIndex(this.responseMap, key);
                    if (valTemp) {
                        value = valTemp;
                    }
                }
            }
        }
        if (value === undefined) {
            value = this.appDataService.getFieldDataByFieldId(id);
        }
        return value;
    }
    /**
     * returns the multiple api keys based on the type of the key
     * @param type the type of the key
     * @param key the api key
     */
    returnRequestOrResponseApiKeys(type, key, position, parentPosition = null) {
        if (!this.isSingleAPIKey && key) {
            if (!key.includes('||')) {
                key = key.replace(/\[\*\]/g, position); // change [*] with [ index ]
                if (this.isChildBlock()) {
                    key = key.replace(/\[\*\*\]/g, '[' + parentPosition + ']'); // change [**] with [ parentindex ]
                }
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(key) : key);
            }
            else {
                let newKeyArr = [];
                key.split('||').forEach(element => {
                    let starCount = element.split('[*]');
                    if (starCount && starCount.length > 2) {
                        newKeyArr.push(element.replace(/\[\*\]/, position)); // change [*] with [ index ]
                    }
                    else {
                        newKeyArr.push(element);
                    }
                });
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(newKeyArr.join('|')) : newKeyArr.join('|'));
            }
        }
        else {
            return [];
        }
    }
    /**
     * function returns the last index of the api key
     */
    returnAPIKeyForMultipleApiKeys() {
        if (this.fieldData.response_api_key.includes('||')) {
            // return all response keys separately so the
            // data map stores the values of each and every key
            return this.fieldData.response_api_key.split('||').map(str => str.trim());
        }
        else {
            const keys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
            return keys;
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.counter = [];
        this.childCounter = {};
        this.repeatebleFieldsRows = [];
        this.dataMap = {};
    }
    ngOnChanges(changes) {
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'buttonEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        /* if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        } */
    }
    setConditions(childConditions, type) {
        let check = true;
        if (childConditions && childConditions.exceptionFields && childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
            check = false;
        }
        if (check && childConditions && childConditions.isActive) {
            if (childConditions.fields && childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else if (childConditions.overrideAll) {
                // console.log(type, obj);
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else {
                this.conditionObj[type] = false;
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    openAccordionClicked(field, i) {
        // remove initial field_values that are configured originally
        if (field.field_values[0]?.hasOwnProperty("value")) {
            delete field.field_values[0];
        }
        if (field?.field_values[i]?.length > 0) {
            this.displayAccordion(field.unique_id, i);
        }
        else {
            // reverrted original 
            let dummyBlock = this.dummyBlocks[field.possible_values[0] + '$' + i];
            // commented
            // let dummyBlock = Object.entries(this.dummyBlocks).filter(([blockKey, _]) => 
            //     blockKey.includes('$'+i)
            //   )[0][1];
            if (dummyBlock) {
                let gBlockId = dummyBlock.blockId;
                let pos = dummyBlock.position;
                this.storeBlockIdIfNull = gBlockId;
                this.onLoadRepeatBlock(gBlockId, pos, i, field.unique_id);
            }
            else if (dummyBlock == undefined) {
                Object.keys(this.dummyBlocks).map(x => {
                    if (x.includes(field.possible_values[0])) {
                        let dummyBlock = this.dummyBlocks[field.possible_values[0] + '$' + 0];
                        let gBlockId = dummyBlock.blockId;
                        let pos = dummyBlock.position;
                        this.storeBlockIdIfNull = gBlockId;
                        this.onLoadRepeatBlock(gBlockId, pos, i, field.unique_id);
                    }
                });
            }
            else {
                console.log("something went wrong");
            }
        }
    }
    displayAccordion(unique_id, i) {
        this.repeatebleFieldsRows[i][unique_id].accordionInfo.showSection = !this.repeatebleFieldsRows[i][unique_id].accordionInfo.showSection;
    }
    static ɵfac = function RepeatableBlockRendererComponent_Factory(t) { return new (t || RepeatableBlockRendererComponent)(i0.ɵɵdirectiveInject(UserDataHandlerService), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(CEEInternalEmitterService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(AccordionService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(CeeApiService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(WebworkerService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RepeatableBlockRendererComponent, selectors: [["repeatable-block-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData", parentPosition: "parentPosition", rowData: "rowData", parentBlock: "parentBlock" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "class", 4, "ngIf"], [3, "id"], ["type", "checkbox", "class", "repeated-checkbox", 3, "name", "id", "checked", "change", 4, "ngIf"], ["type", "radio", "class", "repeated-radio", 3, "name", "id", "ngModel", "value", "ngModelChange", "change", 4, "ngIf"], ["type", "checkbox", 1, "repeated-checkbox", 3, "change", "name", "id", "checked"], ["type", "radio", 1, "repeated-radio", 3, "ngModelChange", "change", "name", "id", "ngModel", "value"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "accordion-header", 3, "click"], ["class", "accordion-header-text", 4, "ngIf"], ["class", "accordion-header-text", 3, "innerHTML", 4, "ngIf"], ["class", "accordion-header-collapse-btn", 4, "ngIf"], ["class", "accordion-header-open-btn", 4, "ngIf"], ["class", "accordion-sub-header row", 3, "hidden", 4, "ngIf"], ["class", "accordion-content row", 3, "hidden", 4, "ngIf"], ["class", "accordion-footer row", 3, "hidden", 4, "ngIf"], [1, "accordion-header-text"], [1, "accordion-header-text", 3, "innerHTML"], [1, "accordion-header-collapse-btn"], [1, "accordion-header-open-btn"], [1, "accordion-sub-header", "row", 3, "hidden"], [1, "accordion-content", "row", 3, "hidden"], [1, "accordion-footer", "row", 3, "hidden"], [3, "ngClass", "disabled", "click", 4, "ngIf"], [3, "click", "ngClass", "disabled"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rootData", "rowData", "parentBlock", "parentPosition", "fieldData", "templateId", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function RepeatableBlockRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_Template, 4, 6, "ng-container", 1)(1, RepeatableBlockRendererComponent_ng_template_1_Template, 21, 21, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [RepeatableBlockRendererComponent, NgSwitch, NgClass, MatFormFieldModule, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, CommonModule, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitchCase, i13.NgSwitchDefault, i13.AsyncPipe] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RepeatableBlockRendererComponent, [{
        type: Component,
        args: [{ selector: 'repeatable-block-renderer', standalone: true, imports: [ViewRendererComponent, NgSwitch, NgClass, MatFormFieldModule, FormsModule, CommonModule, forwardRef(() => AccordionRendererComponent), forwardRef(() => GenericBlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"reapeatable-loader {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}}\"></div>\r\n    <ng-container *ngFor=\"let pos of counterData; let i = index; trackBy: trackByIdCounter;\">\r\n        <section *ngIf=\"pos.active && blockRenderedData && repeatebleFieldsRows[i]\" id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block sectionRb-{{i}} {{blockRenderedData.block_id}}-sidebar-item-{{i}}  {{parentPosition ? (blockRenderedData.block_id+'-p-'+parentPosition+'-c-'+i) : (blockRenderedData.block_id+'-c-'+i)}}  template-{{templateId}} block-{{ blockRenderedData.block_id }} {{storeData.length > 1 ? storeData.indexOf(i) >= 0 ? 'selected' : '' : storeData[0] == i ? 'selected' : ''}} {{is_bootstrap ? 'row': ''}} {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}} {{sectionCustomClass[i] ? sectionCustomClass[i]: ''}} \">            \r\n            <input *ngIf=\"type == 'Multi'\" type=\"checkbox\" name=\"check_{{i}}\" id=\"check_{{i}}\" class=\"repeated-checkbox\" (change)=\"repeatableBlockChange(i, $event.target.checked)\" [checked]=\"storeData.indexOf(i) >= 0\" />\r\n            <input *ngIf=\"type == 'Single'\" type=\"radio\" name=\"radio_{{i}}\" id=\"radio_{{i}}\" class=\"repeated-radio\" [(ngModel)]=\"radioValue\" value=\"{{i}}\" (change)=\"repeatableBlockChange(i, $event.target.checked)\">\r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as position; trackBy: trackByIdBlock;\">\r\n                <ng-container [ngSwitch]=\"field.field_type\">\r\n                    <ng-container *ngSwitchCase=\"'Generic Block'\">\r\n                        <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                            <section class=\"row generic-block generic-block-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                <!-- <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                    <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                    </ng-template>\r\n                                </ng-container> -->\r\n                                <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                    <ng-container  *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]\">\r\n                                        <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                        </ng-template>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </section>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'Accordion'\">\r\n                        <ng-container *ngIf=\"checkAccordionVisibility(field, repeatebleFieldsRows[i]?.[field.unique_id], i)\">\r\n                            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                                <!-- <section id=\"{{field.possible_values[0]}}\" class=\"accordion-section accordion-section-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\"> -->\r\n                                <section id=\"{{field.unique_id}}-{{i}}\" class=\"accordion-section accordion-section-{{field.unique_id}}-{{i}} accordion-section-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\">\r\n                                    <div class=\"accordion-header\"\r\n                                    (click)=\"openAccordionClicked(field, i)\">\r\n                                        <div *ngIf=\"!isHTML(repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name)\" class=\"accordion-header-text\">{{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name}}</div>\r\n                                        <div *ngIf=\"isHTML(repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name)\" class=\"accordion-header-text\" [innerHTML]=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name\"></div>\r\n                                        <div class=\"accordion-header-collapse-btn\" *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\">\r\n                                            {{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.collapseTitle}}\r\n                                        </div>\r\n                                        <div class=\"accordion-header-open-btn\" *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\">\r\n                                            {{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.expandTitle}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"accordion-sub-header row\" [hidden]=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id)\">\r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <div class=\"accordion-content row\" [hidden]=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id) && !repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.footerFields.includes(innerField.unique_id)\">\r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <div class=\"accordion-footer row\" [hidden]=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id) && repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.footerFields.includes(innerField.unique_id)\">                                            \r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position,i:i, activePosition: pos}\">\r\n                        </ng-template>\r\n                    </ng-container>\r\n            </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"hideActionButton\">\r\n            <button *ngIf=\"remove_field_label !== 'none'\" [ngClass]=\"{'disabled-remove-btn': disableRemoveBtnIfArrayEmpty()}\" (click)=\"onDeleteBlock(i)\" [disabled]= \"!buttonEditable\" [attr.aria-label]=\"'Click on ' + remove_field_label \">{{remove_field_label}}</button>\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"hideActionButton\">\r\n    <button *ngIf=\"add_more_field_label !== 'none'\" [ngClass]=\"{'disabled-add-btn': !buttonEditable || disableAddButton}\" [disabled]=\"!buttonEditable || disableAddButton\" (click)=\"onBlockAdd()\" [attr.aria-label]=\"'Click on ' + add_more_field_label \">{{add_more_field_label}}</button>\r\n    </ng-container>\r\n</ng-container>\r\n \r\n<ng-template #cellData let-field=\"field\" let-position=\"position\" let-i=\"i\" let-activePosition=\"activePosition\">\r\n    <ng-container [ngSwitch]=\"field.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition, activePosition: activePosition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Textfield'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Autocomplete Textfield'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Textarea'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Date'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'radio'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Checkbox'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Timepicker'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'PhoneNumber'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition,\r\n                    primaryKeyIndex: {name: field.unique_id, value: repeatebleFieldsRows[i]?.[field.unique_id]?.['value'], type: 'repeatable', cellData: repeatebleFieldsRows[i]?.[field.unique_id]}}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Number'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Attachments'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Repeatable Block'\">\r\n            <repeatable-block-renderer [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"repeatebleFieldsRows[i]?.[field.unique_id]\" [parentBlock]=\"fieldData.unique_id\" [parentPosition]=\"i\" [fieldData]=\"field\" [templateId]=\"templateId\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n            </repeatable-block-renderer>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Table'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngSwitchCase=\"'Table-V2'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'List'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field, type: field.field_type }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Switch'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Editor'\">\r\n            <!-- <app-cee-editor [stepId]=\"stepId\" [rowData]=\"repeatebleFieldsRows[i][field.unique_id]\" [fieldData]=\"field\" [keepState]=\"true\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap):''}}\"\r\n                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n            </app-cee-editor> -->\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true, mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n    </ng-container>\r\n</ng-template>\r\n \r\n " }]
    }], () => [{ type: UserDataHandlerService }, { type: i9.HttpClient }, { type: AppDataService }, { type: ApiDataService }, { type: CEEInternalEmitterService }, { type: SharedEventsServiceService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: WfeStepLoaderService }, { type: AccordionService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: CeeApiService }, { type: i0.NgZone }, { type: WebworkerService }, { type: i0.Renderer2 }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], parentPosition: [{
            type: Input
        }], rowData: [{
            type: Input
        }], parentBlock: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RepeatableBlockRendererComponent, { className: "RepeatableBlockRendererComponent", filePath: "lib\\components\\repeatable-block-renderer\\repeatable-block-renderer.component.ts", lineNumber: 58 }); })();

export { RepeatableBlockRendererComponent };
//# sourceMappingURL=ng-cee-core-repeatable-block-renderer.component-DK7V4sDx.mjs.map
