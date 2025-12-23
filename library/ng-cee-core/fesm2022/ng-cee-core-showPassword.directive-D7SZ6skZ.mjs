import * as i0 from '@angular/core';
import { Directive, HostListener, Input } from '@angular/core';

class ShowPasswordDirective {
    el;
    showLastCharDelay;
    valueLength = 0;
    constructor(el) {
        this.el = el;
    }
    onInput(target) {
        if (this.showLastCharDelay) {
            if (target.type === 'password') {
                if (target.value.length > 0) {
                    if (target.value.length > this.valueLength) {
                        target.type = 'text';
                        this.valueLength = target.value.length;
                        let copyInputVal = target.value;
                        let mask = "•";
                        target.value = mask.repeat(target.value.length - 1) + target.value[target.value.length - 1];
                        setTimeout(() => {
                            target.type = 'password';
                            target.value = copyInputVal;
                        }, 30);
                    }
                    else {
                        this.valueLength = target.value.length;
                    }
                }
            }
        }
    }
    static ɵfac = function ShowPasswordDirective_Factory(t) { return new (t || ShowPasswordDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ShowPasswordDirective, selectors: [["", "showPassword", "", "showLastCharDelay", ""]], hostBindings: function ShowPasswordDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function ShowPasswordDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
        } }, inputs: { showLastCharDelay: "showLastCharDelay" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShowPasswordDirective, [{
        type: Directive,
        args: [{
                selector: '[showPassword][showLastCharDelay]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { showLastCharDelay: [{
            type: Input
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event.target']]
        }] }); })();

export { ShowPasswordDirective as S };
//# sourceMappingURL=ng-cee-core-showPassword.directive-D7SZ6skZ.mjs.map
