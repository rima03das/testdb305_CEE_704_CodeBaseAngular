import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { ChildCondition } from '../../models/childCondition.model';
import * as i0 from "@angular/core";
export declare class ModalRendererComponent {
    dialogRef: MatDialogRef<ModalRendererComponent>;
    data: any;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    stepId: any;
    templateId: any;
    rootData: any;
    rowData: any;
    mandatoryCondition: ChildCondition;
    editableCondition: ChildCondition;
    visibleCondition: ChildCondition;
    startSession: any;
    modalButtons: any;
    constructor(dialogRef: MatDialogRef<ModalRendererComponent>, data: any);
    closeDialog(): void;
    isHTML(value: string): boolean;
    toggleModalCssClass(cssclass: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalRendererComponent, "lib-modal-renderer", never, { "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=modal-renderer.component.d.ts.map