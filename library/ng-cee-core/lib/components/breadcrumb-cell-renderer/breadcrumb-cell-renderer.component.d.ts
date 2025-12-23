import { OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { CommonUtil } from '../../utils/common-util';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbCellRendererComponent implements OnInit, OnDestroy {
    private sharedEventsServiceService;
    private http;
    private router;
    private wfeStepLoaderService;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    stepId: any;
    blockId: any;
    blockPosition: number;
    templateId: any;
    mappingValues: any;
    blockRenderedData: any;
    additionalParameters: {};
    selectedValue: {
        label: string;
        color: string;
    };
    variableObj: {};
    commonUtil: CommonUtil;
    constructor(sharedEventsServiceService: SharedEventsServiceService, http: HttpClient, router: Router, wfeStepLoaderService: WfeStepLoaderService);
    ngOnInit(): void;
    onBlockClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbCellRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbCellRendererComponent, "app-breadcrumb-cell-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "blockId": { "alias": "blockId"; "required": false; }; "blockPosition": { "alias": "blockPosition"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "mappingValues": { "alias": "mappingValues"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=breadcrumb-cell-renderer.component.d.ts.map