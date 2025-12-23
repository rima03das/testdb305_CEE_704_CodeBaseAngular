import { ApiDataService } from '../models/api-data/api-data.service';
import * as i0 from "@angular/core";
export declare class SidemenuUtil {
    private apiDataService;
    globalMenu: any[];
    sidemenuBlock: any;
    sidemenuBlockOn: boolean;
    blockSetter: boolean;
    constructor(apiDataService: ApiDataService);
    setSidemenuBlockStateOnDataEmit(res: any, sideBlockData: any, stepId: any): {
        sidemenuBlock: any;
        sidemenuBlockOn: boolean;
    };
    checkmenuContainsDyanmicContent(menu: any): void;
    addyanmicContent(arrayAdd: any, text: any, level: any, globalMenu: any): void;
    createnewMenu(menu: any, level: any, gm: any): void;
    getCurrentParameterValue(responseKeys: any, i: any): void;
    staticMenuAfterDynamic(menu: any, parentPosition: any, gm: any): any;
    getLevelClass(menuLevel: any, menuPosition: any, counter: any, parentPosition: any, box: any): string;
    createMenuStringRecursive(level: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidemenuUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidemenuUtil>;
}
//# sourceMappingURL=sidemenu-util.d.ts.map