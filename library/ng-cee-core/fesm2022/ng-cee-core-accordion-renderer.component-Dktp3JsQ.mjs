import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { a as CommonUtil, A as APIKeyUtil, F as FlatUnflat, S as SetAPICallbackData, D as DynamicLabelUtil, C as ConditionalUtil, e as AppDataService, f as ApiDataService, c as SharedEventsServiceService, g as WfeStepLoaderService, n as AccordionService, W as WFEEventListHandler, B as BlockRendererComponent, V as ViewRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import * as i13 from '@angular/common';
import { NgSwitch, CommonModule } from '@angular/common';
import * as i9 from '@angular/common/http';
import * as i11 from '@angular/router';
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
import '@angular/material/dialog';
import 'ngx-image-zoom';
import '@angular/platform-browser';
import 'moment-timezone';
import '@angular/material/snack-bar';
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

function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(field_r3.field_label);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", field_r3.field_label, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, " Collapse ");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "Expand ");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_app_block_renderer_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 18);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const field_r3 = ctx_r3.$implicit;
    const pos_r5 = ctx_r3.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.getBlockData(field_r3))("blockPosition", pos_r5)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.isEditable && ctx_r1.show_section === false ? ctx_r1.show_section = true : ctx_r1.show_section = false; return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(ctx_r1.sectionData.section_id, ctx_r1.show_section)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_4_Template, 1, 1, "div", 10)(5, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_5_Template, 2, 0, "div", 11)(6, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_6_Template, 2, 0, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_app_block_renderer_7_Template, 1, 5, "app-block-renderer", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const field_r3 = ctx_r3.$implicit;
    const pos_r5 = ctx_r3.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r5, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(field_r3.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(field_r3.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.show_section == false ? true : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.show_section);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.show_section);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 6);
    i0.ɵɵtemplate(2, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template, 8, 10, "ng-container", 7);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", field_r3.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Generic Block");
} }
function AccordionRendererComponent_section_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r7.name);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", data_r7.name, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameters["collapseTitle"]);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 29);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameters["collapseTitle"], i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_1_Template, 2, 1, "span", 26)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_2_Template, 1, 1, "span", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameters["collapseTitle"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameters["collapseTitle"]));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1, "Collapse");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_Template, 3, 2, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCollapseText_r8 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["collapseTitle"])("ngIfElse", noCollapseText_r8);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameters["expandTitle"]);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 33);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameters["expandTitle"], i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_1_Template, 2, 1, "span", 30)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_2_Template, 1, 1, "span", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameters["expandTitle"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameters["expandTitle"]));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, "Open");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_Template, 3, 2, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_template_2_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noOpenText_r9 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["expandTitle"])("ngIfElse", noOpenText_r9);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_app_block_renderer_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 34);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hidden", !data_r7.showSection)("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", data_r7.blockId)("blockPosition", pos_r11)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    const field_r13 = ctx_r11.$implicit;
    const pos_r14 = ctx_r11.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r14, " ", field_r13.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r13.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r13)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r13)("position", pos_r14)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r13 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.subHeaderFields.includes(field_r13.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const field_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r17, " ", field_r16.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r16.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r16)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r16)("position", pos_r17)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.footerFields.includes(field_r16.unique_id) && !data_r7.subHeaderFields.includes(field_r16.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const pos_r20 = ctx_r17.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r20, " ", field_r19.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r19.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r19)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r19)("position", pos_r20)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.includes(field_r19.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template_div_click_2_listener() { const data_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.isEditable && ctx_r1.displayAccordion(data_r7); return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(data_r7.blockId, data_r7.showSection)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_4_Template, 1, 1, "div", 10);
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_Template, 4, 2, "div", 11)(8, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_app_block_renderer_9_Template, 1, 6, "app-block-renderer", 21)(10, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_Template, 2, 2, "div", 22)(11, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_Template, 2, 2, "div", 23)(12, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_Template, 2, 2, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const pos_r11 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r11, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(data_r7.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(data_r7.name));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.apiData[ctx_r1.commonUtil.getPossibleId(data_r7.possible_value)]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.length == 0 && data_r7.subHeaderFields.length == 0 && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.subHeaderFields.length > 0 && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (data_r7.footerFields.length > 0 || data_r7.subHeaderFields.length > 0) && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.length > 0 && data_r7.jsonLoaded);
} }
function AccordionRendererComponent_section_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template, 13, 14, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.accordionData);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r22.name);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const data_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", data_r22.name, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameters["collapseTitle"], " ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Collapse ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_template_2_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCollapseText_r23 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["collapseTitle"])("ngIfElse", noCollapseText_r23);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameters["expandTitle"], " ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Open ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_container_1_Template, 2, 1, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noOpenText_r24 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["expandTitle"])("ngIfElse", noOpenText_r24);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const position_r26 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r26, " ", field_r25.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r25.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r25)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r25)("position", position_r26)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", field_r25["rowData"])("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition)("visibleCondition", ctx_r1.visibleCondition);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template_div_click_2_listener() { const data_r22 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.isEditable && ctx_r1.displayAccordion(data_r22); return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(data_r22.id, data_r22.showSection)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_4_Template, 1, 1, "div", 10)(5, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_Template, 4, 2, "div", 11)(6, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 41);
    i0.ɵɵtemplate(8, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_ng_container_8_Template, 2, 13, "ng-container", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const pos_r27 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r27, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(data_r22.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(data_r22.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", !data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r22.fields);
} }
function AccordionRendererComponent_section_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template, 9, 11, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.accordionListData);
} }
function AccordionRendererComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_1_Template, 2, 2, "ng-container", 4)(2, AccordionRendererComponent_section_0_ng_container_2_Template, 2, 1, "ng-container", 4)(3, AccordionRendererComponent_section_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("cee-accordion ", ctx_r1.sectionData.section_style ? ctx_r1.sectionData.section_style.custom_class_name : ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.sectionData.unique_id);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : ctx_r1.sectionData.unique_id ? ctx_r1.sectionData.field_label : ctx_r1.sectionData.section_name)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.sectionData.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.sectionData.possible_values && ctx_r1.accordionData.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.isListAccordion && ctx_r1.accordionListData.length > 0);
} }
class AccordionRendererComponent {
    http;
    router;
    appDataService;
    apiDataService;
    sharedEventsService;
    wfeStepLoaderService;
    accordionService;
    cdr;
    eventListHandler;
    ngZone;
    el;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    sectionData;
    primaryKeyIndex;
    stepId;
    templateId;
    block_description;
    rootData;
    blockRenderedData;
    additionalParameters = {
        expandTitle: '',
        collapseTitle: ''
    };
    accordionData = [];
    show_section = true;
    apiData = {}; // special api key for PIVS
    commonUtil;
    flatandNestUtil;
    setApiCallBackUtil;
    setDynamicLabelUtil;
    is_bootstrap;
    variableObject = {}; // variable object
    isListAccordion = false;
    accordionListData = [];
    fieldIdMapApiKey;
    apiKeyUtil;
    conditionalUtil;
    isVisible = false;
    isEditable = false;
    dummyaccordionData = [];
    CEE_Skip_accordion_load;
    sectionSubscription;
    mandatoryCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    editableCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    visibleCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    constructor(http, router, appDataService, apiDataService, sharedEventsService, wfeStepLoaderService, accordionService, cdr, eventListHandler, ngZone, el) {
        this.http = http;
        this.router = router;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsService = sharedEventsService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.cdr = cdr;
        this.eventListHandler = eventListHandler;
        this.ngZone = ngZone;
        this.el = el;
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.flatandNestUtil = new FlatUnflat(appDataService);
        this.setApiCallBackUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    trackById(index, item) {
        return item.unique_id;
    }
    async ngOnInit() {
        const savedClass = localStorage.getItem('lastExpandedAccordion');
        const lastExpandedAccordionId = localStorage.getItem('lastExpandedAccordionId');
        // const lastRoute = localStorage.getItem('lastRoute');
        // const currentRoute = this.router.url;
        if (savedClass) {
            setTimeout(() => {
                const elementToScroll = document.querySelector(`.${savedClass}`); //document.getElementById(lastExpandedAccordionId);
                if (elementToScroll) {
                    elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // ✅ Remove localStorage items after scrolling
                    localStorage.removeItem('lastExpandedAccordion');
                    localStorage.removeItem('lastExpandedAccordionId');
                    localStorage.removeItem('lastRoute');
                }
            }, 500); // Delay ensures the DOM is fully rendered
        }
        // Means it is a field not a section
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData.additional_parameters.length > 0) {
                for (const paramter of this.sectionData.additional_parameters) {
                    this.additionalParameters[paramter.parameter_type] = paramter.value;
                }
                // this.CEE_Skip_accordion_load = this.additionalParameters['CEE_Skip_accordion_load'] ? this.additionalParameters['CEE_Skip_accordion_load'] : false;
                // if(this.CEE_Skip_accordion_load == "true"){
                //     this.setAdditionalParams();
                // }
            }
            this.isListAccordion = this.additionalParameters['renderType'] && this.additionalParameters['renderType'].toLowerCase() === 'dynamic' ? true : false;
            if (!this.isListAccordion && this.sectionData.possible_values.length > 0) {
                // if(this.CEE_Skip_accordion_load != "true"){
                this.processOutsideOfAngularZone();
                // }
            }
            if (this.isListAccordion) {
                if (this.additionalParameters['default_value']) {
                    this.processOutsideOfAngularZoneDefault();
                }
                else {
                    console.error('Additional parameter default_value not define');
                }
            }
            this.variableObject['emitApiSuccessResponse_' + this.sectionData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                if (this.isListAccordion) {
                    const result = this.setApiCallBackUtil.setApiCallBackData(this.sectionData, res);
                    if (result) {
                        this.accordionListData = [];
                        let i = 0;
                        for (const value of result) {
                            let labelName = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.sectionData.field_label }, value);
                            let fields = [];
                            if (this.sectionData.fields) {
                                for (const j of this.sectionData.fields) {
                                    const field = JSON.parse(JSON.stringify(j));
                                    field['rowData'] = this.generateRowData(field, value, i);
                                    fields.push(field);
                                }
                            }
                            this.accordionListData.push({
                                id: i,
                                name: labelName.field_label,
                                fields,
                                showSection: (this.additionalParameters['allowMultiple'] === 'true') ? true : false
                            });
                            i++;
                        }
                    }
                }
                else {
                    const resData = this.flatandNestUtil.flattenJSON(res);
                    var passed = this.accordionData.every((element, index, array) => {
                        return resData[this.commonUtil.getPossibleId(element.possible_value)];
                    });
                    this.additionalParameters = this.setDynamicLabelUtil.getDynamicValue(this.additionalParameters, resData);
                    if (passed) {
                        this.apiData = resData;
                    }
                    for (let i = 0; i < this.accordionData.length; i++) {
                        if (this.accordionData[i]['name_config'].includes('((dynamic))')) {
                            this.accordionData[i].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.accordionData[i]['name_config'] }).field_label;
                        }
                    }
                }
            });
            const _this = this;
            this.variableObject['toggleAccordionEmitter_' + this.sectionData.unique_id] = this.sharedEventsService.toggleAccordionEmitter.subscribe(res => {
                if (res['ExpandBlock']) {
                    this.accordionData.map(function (val, index) {
                        if (val.blockId === res['ExpandBlock']) {
                            val.showSection = true;
                            val.jsonLoaded = true;
                        }
                        else if (_this.additionalParameters['allowMultiple'] === 'false') {
                            val.showSection = false;
                        }
                        return val;
                    });
                }
            });
            this.variableObject['emitForEmptySession_' + this.sectionData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
                if (res) {
                    this.onEmptySession(res);
                }
            });
            this.variableObject['emitOnDataSetOrUpdated_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            this.onFieldDataUpdated(null, null);
            this.variableObject['emitFieldStateChangeEventEmitter_' + this.sectionData.unique_id] =
                this.sharedEventsService.emitFieldStateChangeEventEmitter.subscribe(res => {
                    if (res) {
                        const id = this.sectionData.unique_id;
                        if (res.ids.includes(id)) {
                            switch (res.type) {
                                case 'ChangeVisibility':
                                    setTimeout(() => {
                                        this.isVisible = (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                                case 'ChangeEditable':
                                    setTimeout(() => {
                                        this.isEditable =
                                            (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                            }
                        }
                    }
                });
            if (this.sectionData.is_display === 1) {
                this.isVisible = true;
            }
            if (this.sectionData.is_editable === 1) {
                this.isEditable = true;
            }
        }
        this.variableObject['showMandatoryErrorMsg_' + this.sectionData.unique_id] = this.sharedEventsService.showMandatoryErrorMsg.subscribe((res) => {
            if (res) {
                if (Array.isArray(res.fields) && res.type === 'click') {
                    for (const data of this.accordionData) {
                        if (this.rootData.blockFields && this.rootData.blockFields.hasOwnProperty(data.blockId)) {
                            for (const fieldId of this.rootData.blockFields[data.blockId]) {
                                if (res.fields.includes(fieldId)) {
                                    data.jsonLoaded = true;
                                    data.showSection = true;
                                }
                            }
                        }
                    }
                }
            }
        });
        this.sectionSubscription = this.accordionService.sectionOpen$.subscribe(sectionId => {
            //console.log("accordian service call occur");   
            //console.log(`📢 Received request to open section: ${sectionId}`);
            this.openAccordionById(sectionId);
        });
    }
    // openAccordionById(sectionId: string) {
    //     if (this.accordionData.length > 0) {
    //         this.accordionData.forEach((accordion) => {
    //             if (accordion.blockId === sectionId) {
    //                 accordion.showSection = true;
    //                 accordion.jsonLoaded = true;
    //             }
    //         });
    //     }
    // }
    openAccordionById(sectionId) {
        //console.log("sectionId to open -- ", sectionId);
        this.accordionData.forEach(accordion => {
            if (accordion.blockId === sectionId) {
                accordion.showSection = true;
                accordion.jsonLoaded = true;
            }
            else if (this.additionalParameters['allowMultiple'] === 'false') {
                accordion.showSection = false;
            }
        });
    }
    // setAdditionalParams(){
    //     let index = 0;
    //     let gBlockId;
    //     let collapseTitle = 'Collapse';
    //     let expandTitle = 'Open';
    //     let showSectionbox = false;
    //     let footerFields = [];
    //     let skipLoad = "false";
    //     let name = this.sectionData.field_label;
    //     let applicationDetails = '';
    //     let subHeaderFields = [];
    //     let showMultiple = false;
    //     for (const paramter of this.sectionData.additional_parameters) {
    //         switch (paramter.parameter_type) {
    //             case 'default_value':
    //                 gBlockId = paramter.value;
    //                 break;
    //             case 'collapseTitle':
    //                 collapseTitle = paramter.value;
    //                 break;
    //             case 'expandTitle':
    //                 expandTitle = paramter.value;
    //                 break;
    //             case 'CEE_FOOTER_FIELDS':
    //                 footerFields = paramter.value.split('|').map(s => s.trim());
    //                 break;
    //             case 'CEE_Skip_rb_accordion_load':
    //                 skipLoad = paramter.value;
    //                 showSectionbox = true;
    //                 break;
    //             case 'CEE_rb_accordion_InfoBlock':
    //                 applicationDetails = paramter.value ? paramter.value : '';
    //                 break;
    //             case 'CEE_SUB_HEADER_FIELDS':
    //                 subHeaderFields = paramter.value.split('|').map(s => s.trim());
    //                 break;
    //             case 'allowMultiple':
    //                 showMultiple = paramter.value === 'true' ? true : false;
    //                 break;
    //         }
    //     }
    //     const dummyaccInfo = {
    //         id: index,
    //         name: name,
    //         blockId: gBlockId,
    //         possible_value: gBlockId,
    //         showSection: showMultiple,
    //         jsonLoaded: showMultiple,
    //         blockRenderedData: {},
    //         footerFields,
    //         subHeaderFields,
    //         collapseTitle,
    //         expandTitle,
    //         showSectionbox
    //     };
    //     this.dummyaccordionData.push(dummyaccInfo);
    //     index++;
    // }
    async processjsonLoad(data) {
        const blockId = this.getBlockId(data.blockId);
        if (!this.dummyaccordionData.includes(blockId)) {
            const bData = await this.wfeStepLoaderService.loadBlockByName(blockId).toPromise();
            if (bData) {
                let bDataSet = this.commonUtil.blockBootstrapProcess(bData);
                this.rootData['blockFields'][bDataSet.block_id] = [];
                for (let field of bDataSet.block_fields) {
                    this.rootData['blockFields'][bDataSet.block_id]?.push(field.unique_id);
                }
                data.name = bData ? bData['block_description'] : '';
                data.blockRenderedData = bData ? this.commonUtil.blockBootstrapProcess(bData) : {},
                    data.showSection = true;
                data.jsonLoaded = true;
                data['name_config'] = data.name;
                if (data['name_config'].includes('((dynamic))')) {
                    data.name = this.setDynamicLabelUtil.getDynamicValue({ field_label: data['name_config'] }).field_label;
                }
                if (this.accordionData.filter(x => x.blockId === blockId).length > 0) {
                    this.accordionData.forEach((x, index) => {
                        if (x.blockId === blockId) {
                            this.accordionData[index] = data;
                        }
                    });
                }
                // this.accordionData.push(data);
                this.dummyaccordionData.push(data.blockId);
                // this.dummyaccordionData.forEach(x =>{
                //     if(x.blockId = blockId){
                //         this.dummyaccordionData.splice(this.dummyaccordionData.indexOf(x), 1);
                //     }
                // })
            }
        }
    }
    processOutsideOfAngularZone() {
        this.ngZone.runOutsideAngular(async () => {
            let index = 0;
            const footerFields = this.additionalParameters['CEE_FOOTER_FIELDS'] ? this.additionalParameters['CEE_FOOTER_FIELDS'].split('|').map(s => s.trim()) : [];
            const subHeaderFields = this.additionalParameters['CEE_SUB_HEADER_FIELDS'] ? this.additionalParameters['CEE_SUB_HEADER_FIELDS'].split('|').map(s => s.trim()) : [];
            this.CEE_Skip_accordion_load = this.additionalParameters['CEE_Skip_accordion_load'] ? this.additionalParameters['CEE_Skip_accordion_load'] : false;
            for (const value of this.sectionData.possible_values) {
                const blockId = this.getBlockId(value);
                if (this.CEE_Skip_accordion_load !== "true") {
                    this.dummyaccordionData.push(blockId);
                }
                const bData = await this.wfeStepLoaderService.loadBlockByName(blockId).toPromise();
                if (bData) {
                    let bDataSet = this.commonUtil.blockBootstrapProcess(bData);
                    this.rootData['blockFields'][bDataSet.block_id] = [];
                    for (let field of bDataSet.block_fields) {
                        this.rootData['blockFields'][bDataSet.block_id]?.push(field.unique_id);
                    }
                    const accInfo = {
                        id: index,
                        name: bData ? bData['block_description'] : '',
                        blockId: blockId,
                        possible_value: value,
                        showSection: (this.additionalParameters['allowMultiple'] === 'true') ? true : false,
                        jsonLoaded: (this.additionalParameters['allowMultiple'] === 'true') ? true : false,
                        blockRenderedData: this.CEE_Skip_accordion_load == "true" ? {} : this.commonUtil.blockBootstrapProcess(bData),
                        footerFields,
                        subHeaderFields
                    };
                    accInfo['name_config'] = accInfo.name;
                    if (accInfo['name_config'].includes('((dynamic))')) {
                        accInfo.name = this.setDynamicLabelUtil.getDynamicValue({ field_label: accInfo['name_config'] }).field_label;
                    }
                    this.accordionData.push(accInfo);
                    index++;
                }
            }
        });
    }
    processOutsideOfAngularZoneDefault() {
        this.ngZone.runOutsideAngular(async () => {
            const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
            for (let field of this.blockRenderedData.block_fields) {
                this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
            }
            this.sectionData.fields = this.blockRenderedData.block_fields;
        });
    }
    generateRowData(field, data, list_pos, expandable = false) {
        this.ngZone.runOutsideAngular(async () => {
            this.generateRowDataprocess(field, data, list_pos, expandable = false);
        });
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        if (this.sectionData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.sectionData, fieldId, value);
            if (editable !== undefined) {
                this.isEditable = editable;
            }
        }
    }
    /**
     * method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.sectionData.unique_id];
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                for (const data of this.accordionData) {
                    data.jsonLoaded = false;
                    data.showSection = false;
                }
                return;
            }
        });
    }
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowDataprocess(field, data, list_pos, expandable = false) {
        let apiData = this.setApiCallBackUtil.setApiCallBackData(field, data);
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
                fromField: 'Accordion',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData
            };
        }
        else {
            obj = {
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                html_id: field.unique_id + '-' + list_pos
            };
        }
        return obj;
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
            obj[uniqueId] = this.setApiCallBackUtil.setApiCallBackData(key, apiResponse) ? this.setApiCallBackUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.sectionData.fields) {
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
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    // Old phase 1 implementation
    getBlockData(field) {
        let blockData = {};
        if (field.additional_parameters.length > 0) {
            for (const paramter of field.additional_parameters) {
                switch (paramter.parameter_type) {
                    case 'default_value':
                        blockData = paramter.value;
                        break;
                }
            }
        }
        return blockData;
    }
    displayAccordion(data) {
        //console.log("invoked here");
        if (Object.keys(data?.blockRenderedData).length == 0) {
            this.processjsonLoad(data);
        }
        data.jsonLoaded = true;
        if (this.additionalParameters['allowMultiple'] === 'false') {
            if (this.isListAccordion) {
                for (const accordion of this.accordionListData) {
                    if (accordion.id === data.id) {
                        accordion.showSection ? accordion.showSection = false : accordion.showSection = true;
                    }
                    else {
                        accordion.showSection = false;
                    }
                    if (accordion.showSection == true) {
                        this.onItemExpand(accordion);
                    }
                    else {
                        this.onItemCollapse(accordion);
                    }
                }
            }
            else {
                for (const accordion of this.accordionData) {
                    if (accordion.id === data.id) {
                        accordion.showSection ? accordion.showSection = false : accordion.showSection = true;
                    }
                    else {
                        accordion.showSection = false;
                    }
                    if (accordion.showSection == true) {
                        this.onItemExpand(accordion);
                    }
                    else {
                        this.onItemCollapse(accordion);
                    }
                }
            }
        }
        else {
            data.showSection ? data.showSection = false : data.showSection = true;
            if (data.showSection == true) {
                this.onItemExpand(data);
            }
            else {
                this.onItemCollapse(data);
            }
        }
    }
    getBlockId(field) {
        return this.commonUtil.getValue(field);
        // if (field.split('|').length > 1) {
        //     return field.split('|')[1].trim();
        // } else {
        //     return field;
        // }
    }
    async getAccordionName(field) {
        try {
            this.block_description = await this.getBlockDescription(this.getBlockId(field));
        }
        catch (e) {
            console.error(e);
        }
        if (this.block_description !== '') {
            return this.block_description;
        }
        else {
            // return field;
            return '';
        }
    }
    async getBlockDescription(field) {
        return await this.wfeStepLoaderService.loadBlockByName(field).
            pipe(map(block_description_res => block_description_res['block_description'])).toPromise();
    }
    emitAccordingState(id, state) {
        if (state) {
            const parentViewRenderer = this.el.nativeElement.closest('app-view-renderer');
            if (parentViewRenderer) {
                // Extract class that starts with "app-view-renderer-"
                const classList = parentViewRenderer.className.split(' ');
                const targetClass = classList.find(cls => cls.startsWith('app-view-renderer-'));
                if (targetClass.includes('contact_view')) {
                    localStorage.setItem('lastExpandedAccordionId', id);
                    // Store class in localStorage
                    localStorage.setItem('lastExpandedAccordion', targetClass);
                    localStorage.setItem('lastRoute', this.router.url); // Store current route
                }
            }
        }
        else {
            localStorage.removeItem('lastExpandedAccordion');
            localStorage.removeItem('lastExpandedAccordionId');
            localStorage.removeItem('lastRoute');
        }
        this.sharedEventsService.accordionStateEmitter.emit({ id, state });
    }
    ngOnDestroy() {
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    onItemExpand(event) {
        this.onComponentEvent('OnExpand');
    }
    onItemCollapse(event) {
        this.onComponentEvent('OnCollapse');
    }
    /**
     * trigger event if there has been an event triggered on the accordion
     * @param name the name of the event
     */
    onComponentEvent(name) {
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
    static ɵfac = function AccordionRendererComponent_Factory(t) { return new (t || AccordionRendererComponent)(i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(AppDataService), i0.ɵɵdirectiveInject(ApiDataService), i0.ɵɵdirectiveInject(SharedEventsServiceService), i0.ɵɵdirectiveInject(WfeStepLoaderService), i0.ɵɵdirectiveInject(AccordionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(WFEEventListHandler), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionRendererComponent, selectors: [["app-accordion-renderer"]], inputs: { sectionData: "sectionData", primaryKeyIndex: "primaryKeyIndex", stepId: "stepId", templateId: "templateId", block_description: "block_description", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["noCollapseText", ""], ["noOpenText", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "accordion-header", 3, "click"], ["class", "accordion-header-text", 4, "ngIf"], ["class", "accordion-header-text", 3, "innerHTML", 4, "ngIf"], ["class", "accordion-header-collapse-btn", 4, "ngIf"], ["class", "accordion-header-open-btn", 4, "ngIf"], ["class", "accordion-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData", 4, "ngIf"], [1, "accordion-header-text"], [1, "accordion-header-text", 3, "innerHTML"], [1, "accordion-header-collapse-btn"], [1, "accordion-header-open-btn"], [1, "accordion-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], [4, "ngFor", "ngForOf"], [1, "accordion-api-data"], ["class", "accordion-content", 3, "hidden", "stepId", "templateId", "blockId", "blockPosition", "rootData", 4, "ngIf"], ["class", "accordion-sub-header", 3, "hidden", 4, "ngIf"], ["class", "accordion-content", 3, "hidden", 4, "ngIf"], ["class", "accordion-footer", 3, "hidden", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "accordion-header-collapse-text", 4, "ngIf"], ["class", "accordion-header-collapse-text", 3, "innerHTML", 4, "ngIf"], [1, "accordion-header-collapse-text"], [1, "accordion-header-collapse-text", 3, "innerHTML"], ["class", "accordion-header-expand-text", 4, "ngIf"], ["class", "accordion-header-expand-text", 3, "innerHTML", 4, "ngIf"], [1, "accordion-header-expand-text"], [1, "accordion-header-expand-text", 3, "innerHTML"], [1, "accordion-content", 3, "hidden", "stepId", "templateId", "blockId", "blockPosition", "rootData"], [1, "accordion-sub-header", 3, "hidden"], [3, "id", "class", 4, "ngIf"], [3, "class", "stepId", "field", "position", "templateId", "rootData", 4, "ngIf"], [3, "stepId", "field", "position", "templateId", "rootData"], [1, "accordion-content", 3, "hidden"], [1, "accordion-footer", 3, "hidden"], [3, "hidden"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function AccordionRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionRendererComponent_section_0_Template, 4, 9, "section", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [NgSwitch, CommonModule, i13.NgForOf, i13.NgIf, i13.NgSwitchCase, BlockRendererComponent, ViewRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-accordion-renderer', standalone: true, imports: [NgSwitch, CommonModule, forwardRef(() => BlockRendererComponent), forwardRef(() => ViewRendererComponent)], template: "<section *ngIf=\"isVisible\"\r\n    class=\"cee-accordion {{sectionData.section_style?sectionData.section_style.custom_class_name:(sectionData.field_style?sectionData.field_style.custom_class_name:'')}}\"\r\n    [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : sectionData.unique_id ? sectionData.field_label : sectionData.section_name\"\r\n    [attr.role]=\"additionalParameters['Aria-Role']\" id=\"{{sectionData.unique_id}}\">\r\n    <!-- Phase 1 -->\r\n\r\n    <ng-container *ngIf=\"sectionData && sectionData.fields\">\r\n        <ng-container *ngFor=\"let field of sectionData.fields; index as pos; trackBy: trackById\">\r\n            <ng-container [ngSwitch]=\"field.field_type\">\r\n                <ng-container *ngSwitchCase=\"'Generic Block'\">\r\n                    <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                        [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                        <div class=\"accordion-header\"\r\n                            (click)=\"isEditable && (show_section === false) ? show_section = true : show_section = false; isEditable && emitAccordingState(sectionData.section_id, show_section)\">\r\n                            <div *ngIf=\"!isHTML(field.field_label)\" class=\"accordion-header-text\">{{field.field_label}}</div>\r\n                            <div *ngIf=\"isHTML(field.field_label)\" class=\"accordion-header-text\" [innerHTML]=\"field.field_label\"></div>\r\n                            <div class=\"accordion-header-collapse-btn\" *ngIf=\"show_section == false ? true : false\">\r\n                                Collapse\r\n                            </div>\r\n                            <div class=\"accordion-header-open-btn\" *ngIf=\"show_section\">Expand\r\n                            </div>\r\n                        </div>\r\n                        <!-- [hidden]=\"field.showSection===false\"  -->\r\n                        <app-block-renderer *ngIf=\"!show_section\" [stepId]=\"stepId\" [templateId]=\"templateId\"\r\n                            [blockId]=\"getBlockData(field)\" class=\"accordion-content\" [blockPosition]=\"pos\"\r\n                            [rootData]=\"rootData\">\r\n                        </app-block-renderer>\r\n                    </section>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- Phase 2, Accrdion as a datatype -->\r\n    <ng-container *ngIf=\"sectionData && sectionData.possible_values && accordionData.length > 0\">\r\n        <ng-container *ngFor=\"let data of accordionData; index as pos\">\r\n            <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                <div class=\"accordion-header\"\r\n                    (click)=\"isEditable && displayAccordion(data); isEditable && emitAccordingState(data.blockId, data.showSection)\">\r\n                    <div *ngIf=\"!isHTML(data.name)\" class=\"accordion-header-text\">{{data.name}}</div>\r\n                    <div *ngIf=\"isHTML(data.name)\" class=\"accordion-header-text\" [innerHTML]=\"data.name\"></div>\r\n                    <div class=\"accordion-api-data\">{{apiData[commonUtil.getPossibleId(data.possible_value)]}}</div>\r\n                    <div class=\"accordion-header-collapse-btn\" *ngIf=\"data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['collapseTitle']; else noCollapseText\">\r\n                            <span *ngIf=\"!isHTML(additionalParameters['collapseTitle'])\" class=\"accordion-header-collapse-text\">{{additionalParameters['collapseTitle']}}</span>\r\n                            <span *ngIf=\"isHTML(additionalParameters['collapseTitle'])\" class=\"accordion-header-collapse-text\" [innerHTML]=\"additionalParameters['collapseTitle']\"></span>\r\n                        </ng-container>\r\n                        <ng-template #noCollapseText>\r\n                            <span class=\"accordion-header-collapse-text\">Collapse</span>\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"accordion-header-open-btn\" *ngIf=\"!data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['expandTitle']; else noOpenText\">\r\n                            <span *ngIf=\"!isHTML(additionalParameters['expandTitle'])\" class=\"accordion-header-expand-text\">{{additionalParameters['expandTitle']}}</span>\r\n                            <span *ngIf=\"isHTML(additionalParameters['expandTitle'])\" class=\"accordion-header-expand-text\" [innerHTML]=\"additionalParameters['expandTitle']\"></span>\r\n                        </ng-container>\r\n                        <ng-template #noOpenText>\r\n                            <span class=\"accordion-header-expand-text\">Open</span>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <!--*ngIf=\"data.showSection\"  [hidden]=\"!data.showSection\"-->\r\n                <app-block-renderer *ngIf=\"data.footerFields.length == 0 && data.subHeaderFields.length == 0 && data.jsonLoaded\" [hidden]=\"!data.showSection\" [stepId]=\"stepId\"\r\n                    [templateId]=\"templateId\" [blockId]=\"data.blockId\" class=\"accordion-content\" [blockPosition]=\"pos\"\r\n                    [rootData]=\"rootData\">\r\n                </app-block-renderer>\r\n\r\n                <div *ngIf=\"data.subHeaderFields.length > 0 && data.jsonLoaded\" [hidden]=\"data.showSection\" class=\"accordion-sub-header\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer *ngIf=\"data.subHeaderFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n                <div *ngIf=\"(data.footerFields.length > 0 || data.subHeaderFields.length > 0) && data.jsonLoaded\" [hidden]=\"!data.showSection\" class=\"accordion-content\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                *ngIf=\"!data.footerFields.includes(field.unique_id) && !data.subHeaderFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n                <div *ngIf=\"data.footerFields.length > 0 && data.jsonLoaded\" [hidden]=\"!data.showSection\" class=\"accordion-footer\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer *ngIf=\"data.footerFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n            </section>\r\n        </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- Phase 3, Accrdion as a datatype with dynamic data -->\r\n    <ng-container *ngIf=\"sectionData && isListAccordion && accordionListData.length > 0\">\r\n        <ng-container *ngFor=\"let data of accordionListData; index as pos\">\r\n            <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                <div class=\"accordion-header\"\r\n                    (click)=\"isEditable && displayAccordion(data); isEditable && emitAccordingState(data.id, data.showSection)\">\r\n                    <div *ngIf=\"!isHTML(data.name)\" class=\"accordion-header-text\">{{data.name}}</div>\r\n                    <div *ngIf=\"isHTML(data.name)\" class=\"accordion-header-text\" [innerHTML]=\"data.name\"></div>\r\n                    <div class=\"accordion-header-collapse-btn\" *ngIf=\"data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['collapseTitle']; else noCollapseText\">\r\n                            {{additionalParameters['collapseTitle']}}\r\n                        </ng-container>\r\n                        <ng-template #noCollapseText>\r\n                            Collapse\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"accordion-header-open-btn\" *ngIf=\"!data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['expandTitle']; else noOpenText\">\r\n                            {{additionalParameters['expandTitle']}}\r\n                        </ng-container>\r\n                        <ng-template #noOpenText>\r\n                            Open\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"!data.showSection\">\r\n                    <ng-container *ngFor=\"let field of data.fields; index as position\">\r\n                        <app-view-renderer \r\n                            [stepId]=\"stepId\" \r\n                            [field]=\"field\" \r\n                            [position]=\"position\" \r\n                            [templateId]=\"templateId\" \r\n                            [rootData]=\"rootData\"\r\n                            [rowData]=\"field['rowData']\"\r\n                            [mandatoryCondition]=\"mandatoryCondition\"\r\n                            [editableCondition]=\"editableCondition\"\r\n                            [visibleCondition]=\"visibleCondition\"\r\n                            class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                        </app-view-renderer>\r\n                    </ng-container>\r\n                </div>\r\n            </section>\r\n        </ng-container>\r\n    </ng-container>\r\n</section>\r\n" }]
    }], () => [{ type: i9.HttpClient }, { type: i11.Router }, { type: AppDataService }, { type: ApiDataService }, { type: SharedEventsServiceService }, { type: WfeStepLoaderService }, { type: AccordionService }, { type: i0.ChangeDetectorRef }, { type: WFEEventListHandler }, { type: i0.NgZone }, { type: i0.ElementRef }], { sectionData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], block_description: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionRendererComponent, { className: "AccordionRendererComponent", filePath: "lib\\components\\accordion-renderer\\accordion-renderer.component.ts", lineNumber: 31 }); })();

export { AccordionRendererComponent };
//# sourceMappingURL=ng-cee-core-accordion-renderer.component-Dktp3JsQ.mjs.map
