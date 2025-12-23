import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class DomSanitizePipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomSanitizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DomSanitizePipe, "domSanitize", true>;
}
//# sourceMappingURL=dom-sanitize.pipe.d.ts.map