import { OnInit, Renderer2, ElementRef, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export type SortColumn = '';
export type SortDirection = 'asc' | 'desc' | '';
export declare const compare: (v1: string | number | boolean | Date, v2: string | number | boolean | Date) => 1 | 0 | -1;
export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}
export declare class SortableHeaderDirective implements OnInit {
    private renderer;
    private el;
    sortable: SortColumn;
    direction: SortDirection;
    sorting: any;
    sort: EventEmitter<SortEvent>;
    private column;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    rotate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortableHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SortableHeaderDirective, "span[sortable]", never, { "sortable": { "alias": "sortable"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "sorting": { "alias": "sorting"; "required": false; }; }, { "sort": "sort"; }, never, never, true, never>;
}
//# sourceMappingURL=cee-table-sorting.directive.d.ts.map