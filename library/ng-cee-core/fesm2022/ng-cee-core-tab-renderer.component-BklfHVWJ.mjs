import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, Input } from '@angular/core';
import * as i1 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { a as CommonUtil, B as BlockRendererComponent } from './ng-cee-core-ng-cee-core-B-GWW1tg.mjs';
import '@angular/common/http';
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

function TabRendererComponent_mat_tab_group_1_mat_tab_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattributeInterpolate2("aria-controls", "", data_r1.blockId, "-", data_r1.name, "-tab");
    i0.ɵɵpropertyInterpolate("id", data_r1.name);
    i0.ɵɵattribute("aria-label", data_r1.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r1.name);
} }
function TabRendererComponent_mat_tab_group_1_mat_tab_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "app-block-renderer", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const data_r1 = ctx_r1.$implicit;
    const pos_r3 = ctx_r1.index;
    const activeBlock_r4 = i0.ɵɵreference(1);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("cee-tab-body cee-tab-body-", activeBlock_r4.isActive ? "active" : "", "");
    i0.ɵɵpropertyInterpolate2("id", "", data_r1.blockId, "-", data_r1.name, "-tab");
    i0.ɵɵattribute("aria-labelledby", data_r1.name);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("tab-content tab-content-", pos_r3, "");
    i0.ɵɵproperty("stepId", ctx_r4.stepId)("templateId", ctx_r4.templateId)("blockId", data_r1.blockId)("blockPosition", pos_r3)("rootData", ctx_r4.rootData);
} }
function TabRendererComponent_mat_tab_group_1_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 4, 0);
    i0.ɵɵtemplate(2, TabRendererComponent_mat_tab_group_1_mat_tab_1_ng_template_2_Template, 2, 6, "ng-template", 5)(3, TabRendererComponent_mat_tab_group_1_mat_tab_1_div_3_Template, 2, 15, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const activeBlock_r4 = i0.ɵɵreference(1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", activeBlock_r4.isActive);
} }
function TabRendererComponent_mat_tab_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group", 2);
    i0.ɵɵtemplate(1, TabRendererComponent_mat_tab_group_1_mat_tab_1_Template, 4, 1, "mat-tab", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.tabData);
} }
class TabRendererComponent {
    fieldData;
    stepId;
    templateId;
    rootData;
    additionalParameters = {};
    tabData = [];
    is_bootstrap;
    commonUtil;
    constructor() {
        this.commonUtil = new CommonUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    ngOnInit() {
        if (this.fieldData.additional_parameters
            && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
            }
        }
        if (this.fieldData.possible_values.length > 0) {
            let index = 0;
            for (const value of this.fieldData.possible_values) {
                this.tabData.push({ id: index, name: this.getTabName(value), blockId: this.getBlockId(value), showSection: false });
                index++;
            }
        }
    }
    getBlockId(field) {
        return this.commonUtil.getValue(field);
        // if (field.includes('|') && field.split('|').length > 0) {
        //   return field.split('|')[1];
        // } else {
        //   return field;
        // }
    }
    getTabName(field) {
        return this.commonUtil.getID(field);
        // if (field.includes('|') && field.split('|').length > 0) {
        //   return field.split('|')[0];
        // } else {
        //   return field;
        // }
    }
    static ɵfac = function TabRendererComponent_Factory(t) { return new (t || TabRendererComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabRendererComponent, selectors: [["app-tab-renderer"]], inputs: { fieldData: "fieldData", stepId: "stepId", templateId: "templateId", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 7, consts: [["activeBlock", ""], ["mat-align-tabs", "start", "animationDuration", "0ms", 4, "ngIf"], ["mat-align-tabs", "start", "animationDuration", "0ms"], ["aria-label", "Entertainment", 4, "ngFor", "ngForOf"], ["aria-label", "Entertainment"], ["mat-tab-label", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [3, "stepId", "templateId", "blockId", "blockPosition", "rootData"]], template: function TabRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section");
            i0.ɵɵtemplate(1, TabRendererComponent_mat_tab_group_1_Template, 2, 1, "mat-tab-group", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate2("cee-tabs cee-tabs-", ctx.fieldData.unique_id, " ", ctx.fieldData.field_style ? ctx.fieldData.field_style.custom_class_name : "", "");
            i0.ɵɵattribute("aria-label", ctx.additionalParameters["Aria-Label"] ? ctx.additionalParameters["Aria-Label"] : undefined)("role", ctx.additionalParameters["Aria-Role"]);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.fieldData.possible_values && ctx.tabData.length > 0);
        } }, dependencies: () => [MatTabsModule, i1.MatTabLabel, i1.MatTab, i1.MatTabGroup, CommonModule, i13.NgForOf, i13.NgIf, BlockRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-tab-renderer', standalone: true, imports: [MatTabsModule, CommonModule, forwardRef(() => BlockRendererComponent)], template: "<section [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n\t[attr.role]=\"additionalParameters['Aria-Role']\"\r\n\tclass=\"cee-tabs cee-tabs-{{fieldData.unique_id}} {{fieldData.field_style?fieldData.field_style.custom_class_name:''}}\">\r\n\t<mat-tab-group *ngIf=\"fieldData.possible_values && tabData.length > 0\" mat-align-tabs=\"start\" animationDuration=\"0ms\">\r\n\t\t<mat-tab aria-label=\"Entertainment\" *ngFor=\"let data of tabData; index as pos\" #activeBlock>\r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<span attr.aria-controls=\"{{data.blockId}}-{{data.name}}-tab\" id=\"{{data.name}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"data.name\">{{data.name}}</span>\r\n\t\t\t</ng-template>\r\n\t\t\t<div class=\"cee-tab-body cee-tab-body-{{activeBlock.isActive? 'active': ''}}\" *ngIf=\"activeBlock.isActive\"\r\n\t\t\t\t[attr.aria-labelledby]=\"data.name\" id=\"{{data.blockId}}-{{data.name}}-tab\">\r\n\t\t\t\t<app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"data.blockId\"\r\n\t\t\t\t\tclass=\"tab-content tab-content-{{pos}}\" [blockPosition]=\"pos\" [rootData]=\"rootData\">\r\n\t\t\t\t</app-block-renderer>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n</section>\r\n" }]
    }], () => [], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TabRendererComponent, { className: "TabRendererComponent", filePath: "lib\\components\\tab-renderer\\tab-renderer.component.ts", lineNumber: 14 }); })();

export { TabRendererComponent };
//# sourceMappingURL=ng-cee-core-tab-renderer.component-BklfHVWJ.mjs.map
