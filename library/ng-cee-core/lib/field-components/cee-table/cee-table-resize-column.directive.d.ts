import { OnInit, Renderer2, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ResizeColumnDirective implements OnInit {
    private renderer;
    private el;
    resizable: boolean;
    index: number;
    private startX;
    private startWidth;
    private column;
    private table;
    private pressed;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    onMouseDown: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    findElementWithLabelClass: (element: any) => any;
    onMouseUp: (event: MouseEvent) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizeColumnDirective, "[resizeColumn]", never, { "resizable": { "alias": "resizeColumn"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-table-resize-column.directive.d.ts.map