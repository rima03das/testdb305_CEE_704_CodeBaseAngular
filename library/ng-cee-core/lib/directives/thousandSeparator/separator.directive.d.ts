import { ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import * as i0 from "@angular/core";
export declare class SeparatorDirective implements AfterViewInit {
    private _inputEl;
    private cdRef;
    private commonUtil;
    constructor(_inputEl: ElementRef<HTMLInputElement>, cdRef: ChangeDetectorRef, commonUtil: CommonUtil);
    ngAfterViewInit(): void;
    onInput(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeparatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SeparatorDirective, "input[separator]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=separator.directive.d.ts.map