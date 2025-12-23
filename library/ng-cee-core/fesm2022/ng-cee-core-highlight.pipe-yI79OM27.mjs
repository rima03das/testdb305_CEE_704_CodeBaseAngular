import * as i0 from '@angular/core';
import { Pipe } from '@angular/core';

class HighlightPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<b>$&</b>");
    }
    static ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "highlight", type: HighlightPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'highlight',
                standalone: true
            }]
    }], null, null); })();

export { HighlightPipe as H };
//# sourceMappingURL=ng-cee-core-highlight.pipe-yI79OM27.mjs.map
