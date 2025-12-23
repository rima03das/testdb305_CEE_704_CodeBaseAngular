import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector } from '@angular/core';
import { TooltipPosition, TooltipTheme } from "./tooltip.enums";
import * as i0 from "@angular/core";
export declare class TooltipDirective {
    private elementRef;
    private appRef;
    private componentFactoryResolver;
    private injector;
    tooltip: string;
    position: TooltipPosition;
    theme: TooltipTheme;
    showDelay: number;
    hideDelay: number;
    private componentRef;
    private showTimeout?;
    private hideTimeout?;
    private touchTimeout?;
    constructor(elementRef: ElementRef, appRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    onMouseEnter(): void;
    onMouseLeave(): void;
    onMouseMove($event: MouseEvent): void;
    onTouchStart($event: TouchEvent): void;
    onTouchEnd(): void;
    private initializeTooltip;
    private setTooltipComponentProperties;
    private showTooltip;
    private setHideTooltipTimeout;
    ngOnDestroy(): void;
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[tooltip]", never, { "tooltip": { "alias": "tooltip"; "required": false; }; "position": { "alias": "position"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "showDelay": { "alias": "showDelay"; "required": false; }; "hideDelay": { "alias": "hideDelay"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=tooltip.directive.d.ts.map