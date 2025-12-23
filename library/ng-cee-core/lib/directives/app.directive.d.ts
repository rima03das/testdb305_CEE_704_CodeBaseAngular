import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { ElementRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomTooltipDirective implements OnInit {
    private overlay;
    private overlayPositionBuilder;
    private elementRef;
    private viewContainerRef;
    uniqueId: any;
    additionalParameter: any;
    tooltipContent: TemplateRef<any> | ComponentType<any>;
    private _overlayRef;
    private isTooltipOnclick;
    constructor(overlay: Overlay, overlayPositionBuilder: OverlayPositionBuilder, elementRef: ElementRef, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    private showTooltip;
    toggle(): void;
    show(): void;
    hide(): void;
    onFocus(target: any): void;
    onFocusout(target: any): void;
    ngOnDestroy(): void;
    private closeToolTip;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomTooltipDirective, "[customTooltip]", never, { "uniqueId": { "alias": "tooltipId"; "required": false; }; "additionalParameter": { "alias": "tooltipAdditionalparameter"; "required": false; }; "tooltipContent": { "alias": "customTooltip"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=app.directive.d.ts.map