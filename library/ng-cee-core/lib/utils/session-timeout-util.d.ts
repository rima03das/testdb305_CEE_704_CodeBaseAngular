import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { WfeStepLoaderService } from '../services/wfe-step-loader.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { AppDataService } from '../models/app-data/app-data.service';
export declare class SessionTimeoutUtil {
    private idle;
    private keepalive;
    private router;
    private dialog;
    wfeStepLoaderService: WfeStepLoaderService;
    private appDataService;
    private apiDataService;
    idleState: string;
    timedOut: boolean;
    lastPing?: Date;
    title: string;
    i: number;
    constructor(idle: Idle, keepalive: Keepalive, router: Router, dialog: MatDialog, wfeStepLoaderService: WfeStepLoaderService, appDataService: AppDataService, apiDataService: ApiDataService);
    sessionTimeout(): void;
    openDialog(data: any): void;
    reset(): void;
    /**
     * Update last activity timestamp for cross-tab synchronization
     */
    updateLastActivity(): void;
    /**
     * Check if there's been recent activity in other tabs
     */
    private checkCrossTabActivity;
    /**
     * function that navigates to default step
     */
    navigate(flag?: boolean): void;
}
//# sourceMappingURL=session-timeout-util.d.ts.map