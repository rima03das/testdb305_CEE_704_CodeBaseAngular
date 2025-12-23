import { AfterViewInit } from '@angular/core';
import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AlertModalComponent implements AfterViewInit {
    dialogRef: MatDialogRef<AlertModalComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<AlertModalComponent>, data: any);
    ngAfterViewInit(): void;
    onPostiveClick(): void;
    onNegativeClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertModalComponent, "lib-alert-modal", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=alert-modal.component.d.ts.map