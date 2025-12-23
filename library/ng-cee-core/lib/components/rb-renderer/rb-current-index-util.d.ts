import { RBRendererComponent } from './rb-renderer.component';
import * as i0 from "@angular/core";
export declare class RBCurrentIndexUtil {
    comp: RBRendererComponent;
    constructor(comp: RBRendererComponent);
    suscribeRBCurrentIndex(): void;
    getBlockInfo: () => {
        totalBlocks: number;
        activeBlocks: number;
        currentRows: number;
        blockId: string;
        isChildBlock: boolean;
        parentPosition: any;
    };
    getFieldsForPosition(position: number): any[];
    setCurrBlockAppData(ids: any[], otherInfo: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBCurrentIndexUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RBCurrentIndexUtil>;
}
//# sourceMappingURL=rb-current-index-util.d.ts.map