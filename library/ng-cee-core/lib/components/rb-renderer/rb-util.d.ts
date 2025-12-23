import { RBRendererComponent } from './rb-renderer.component';
import * as i0 from "@angular/core";
export declare class RBUtil {
    comp: RBRendererComponent;
    componentList: {};
    componentMap: {
        label: import("rxjs").Observable<unknown>;
        Textfield: import("rxjs").Observable<unknown>;
        Menu: import("rxjs").Observable<unknown>;
        Checkbox: import("rxjs").Observable<unknown>;
        Button: import("rxjs").Observable<unknown>;
        Attachments: import("rxjs").Observable<unknown>;
    };
    constructor(comp: RBRendererComponent);
    getComponentType(fieldType: string): any;
    getComponentInputs(field: any, i: number, activePosition: any): {
        stepId: any;
        rootData: any;
        rowData: any;
    };
    getFieldClasses(field: any, position: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RBUtil>;
}
//# sourceMappingURL=rb-util.d.ts.map