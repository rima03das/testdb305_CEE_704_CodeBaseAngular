import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../../models/app-data/app-data.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { Router } from '@angular/router';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CeeApiService } from '../../services/cee-api-service.service';
import { CEEInternalEmitterService } from '../../services/internal-cee-emitter-service.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbRendererComponent implements OnInit {
    private http;
    private apiDataService;
    private appDataService;
    private stepLoaderService;
    private router;
    private sharedEventService;
    internalCEEEmitter: CEEInternalEmitterService;
    private snackBar;
    private dialog;
    private ceeApiService;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    fieldData: any;
    stepId: any;
    childBlockIds: any;
    progressBarMappingData: {};
    eventListHandlerUtil: WFEEventListHandler;
    constructor(http: HttpClient, apiDataService: ApiDataService, appDataService: AppDataService, stepLoaderService: WfeStepLoaderService, router: Router, sharedEventService: SharedEventsServiceService, internalCEEEmitter: CEEInternalEmitterService, snackBar: MatSnackBar, dialog: MatDialog, ceeApiService: CeeApiService);
    ngOnInit(): void;
    triggerComponentEvent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbRendererComponent, "app-breadcrumb-renderer", never, { "fieldData": { "alias": "fieldData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=breadcrumb-renderer.component.d.ts.map