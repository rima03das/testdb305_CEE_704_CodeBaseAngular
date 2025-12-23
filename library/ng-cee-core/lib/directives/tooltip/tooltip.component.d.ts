import { OnInit } from '@angular/core';
import { TooltipPosition, TooltipTheme } from "./tooltip.enums";
import * as i0 from "@angular/core";
export declare class TooltipComponent implements OnInit {
    position: TooltipPosition;
    theme: TooltipTheme;
    tooltip: string;
    left: number;
    top: number;
    visible: boolean;
    constructor();
    ngOnInit(): void;
    isHTML(value: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "tooltip", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=tooltip.component.d.ts.map