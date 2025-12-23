import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppDataService } from '../../models/app-data/app-data.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare class SnackbarRendererComponent {
    data: any;
    private http;
    private router;
    private appDataService;
    apiDataService: ApiDataService;
    snackBar: MatSnackBar;
    private sharedEventsService;
    private wfeStepLoaderService;
    stepId: any;
    templateId: any;
    rootData: any;
    rowData: any;
    constructor(data: any, http: HttpClient, router: Router, appDataService: AppDataService, apiDataService: ApiDataService, snackBar: MatSnackBar, sharedEventsService: SharedEventsServiceService, wfeStepLoaderService: WfeStepLoaderService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackbarRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackbarRendererComponent, "app-snackbar-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=snackbar-renderer.component.d.ts.map