import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { TemplateRef, Directive, HostListener, Input } from '@angular/core';
import * as i1 from '@angular/cdk/overlay';

class CustomTooltipDirective {
    overlay;
    overlayPositionBuilder;
    elementRef;
    viewContainerRef;
    uniqueId;
    additionalParameter;
    tooltipContent;
    _overlayRef;
    isTooltipOnclick;
    constructor(overlay, overlayPositionBuilder, elementRef, viewContainerRef) {
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.isTooltipOnclick = this.additionalParameter['tooltipOnclick'] === "true" ? true : false;
        if (this.tooltipContent) {
            let customClass = (this.uniqueId) ? "custom-tooltip-" + this.uniqueId : "custom-tooltip";
            const position = this.overlayPositionBuilder
                .flexibleConnectedTo(this.elementRef)
                .withPositions([{
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                    offsetX: 10,
                    offsetY: 10
                },
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom',
                    offsetX: 0,
                    offsetY: -10
                }
            ]);
            this._overlayRef = this.overlay.create({
                positionStrategy: position,
                scrollStrategy: this.overlay.scrollStrategies.close(),
                panelClass: customClass
            });
        }
        else {
            // console.error('Error, occured in html custom tooltip!');
        }
    }
    showTooltip() {
        //attach the template/component if it has not already attached to the overlay
        if (this._overlayRef && !this._overlayRef.hasAttached()) {
            let containerPortal;
            if (this.tooltipContent instanceof TemplateRef) {
                containerPortal = new TemplatePortal(this.tooltipContent, this.viewContainerRef);
            }
            else {
                containerPortal = new ComponentPortal(this.tooltipContent, this.viewContainerRef);
            }
            this._overlayRef.attach(containerPortal);
        }
    }
    toggle() {
        if (this.isTooltipOnclick) {
            this.showTooltip();
        }
    }
    show() {
        if (!this.isTooltipOnclick) {
            this.showTooltip();
        }
    }
    hide() {
        if (!this.isTooltipOnclick) {
            this.closeToolTip();
        }
    }
    onFocus(target) {
        this.showTooltip();
    }
    onFocusout(target) {
        this.closeToolTip();
    }
    ngOnDestroy() {
        this.closeToolTip();
    }
    closeToolTip() {
        if (this._overlayRef) {
            this._overlayRef.detach();
        }
    }
    static ɵfac = function CustomTooltipDirective_Factory(t) { return new (t || CustomTooltipDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CustomTooltipDirective, selectors: [["", "customTooltip", ""]], hostBindings: function CustomTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CustomTooltipDirective_click_HostBindingHandler() { return ctx.toggle(); })("mouseover", function CustomTooltipDirective_mouseover_HostBindingHandler() { return ctx.show(); })("mouseleave", function CustomTooltipDirective_mouseleave_HostBindingHandler() { return ctx.hide(); })("focus", function CustomTooltipDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event.target); })("focusout", function CustomTooltipDirective_focusout_HostBindingHandler($event) { return ctx.onFocusout($event.target); });
        } }, inputs: { uniqueId: [i0.ɵɵInputFlags.None, "tooltipId", "uniqueId"], additionalParameter: [i0.ɵɵInputFlags.None, "tooltipAdditionalparameter", "additionalParameter"], tooltipContent: [i0.ɵɵInputFlags.None, "customTooltip", "tooltipContent"] }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[customTooltip]',
                standalone: true,
            }]
    }], () => [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }], { uniqueId: [{
            type: Input,
            args: ['tooltipId']
        }], additionalParameter: [{
            type: Input,
            args: ['tooltipAdditionalparameter']
        }], tooltipContent: [{
            type: Input,
            args: ['customTooltip']
        }], toggle: [{
            type: HostListener,
            args: ['click']
        }], show: [{
            type: HostListener,
            args: ['mouseover']
        }], hide: [{
            type: HostListener,
            args: ['mouseleave']
        }], onFocus: [{
            type: HostListener,
            args: ['focus', ['$event.target']]
        }], onFocusout: [{
            type: HostListener,
            args: ['focusout', ['$event.target']]
        }] }); })();

export { CustomTooltipDirective as C };
//# sourceMappingURL=ng-cee-core-app.directive-D4q9IVdg.mjs.map
