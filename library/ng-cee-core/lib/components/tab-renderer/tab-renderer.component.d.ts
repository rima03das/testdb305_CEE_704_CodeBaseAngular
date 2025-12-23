import { OnInit } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import * as i0 from "@angular/core";
export declare class TabRendererComponent implements OnInit {
    fieldData: any;
    stepId: any;
    templateId: any;
    rootData: any;
    additionalParameters: {};
    tabData: any[];
    is_bootstrap: boolean;
    commonUtil: CommonUtil;
    constructor();
    ngOnInit(): void;
    getBlockId(field: string): string;
    getTabName(field: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabRendererComponent, "app-tab-renderer", never, { "fieldData": { "alias": "fieldData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=tab-renderer.component.d.ts.map