import { Renderer2, ViewContainerRef } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import * as i0 from "@angular/core";
export declare class StylePaginatorDirective {
    private readonly matPag;
    private vr;
    private ren;
    private _pageGapTxt;
    private _rangeStart;
    private _rangeEnd;
    private _buttons;
    private _curPageObj;
    private _showTotalPages;
    get showTotalPages(): number;
    set showTotalPages(value: number);
    get inc(): number;
    get numOfPages(): number;
    get lastPageIndex(): number;
    constructor(matPag: MatPaginator, vr: ViewContainerRef, ren: Renderer2);
    getRangeLabel: (page: number, pageSize: number, length: number) => any;
    private buildPageNumbers;
    private createButton;
    private initPageRange;
    private calcRangeStart;
    private calcRangeEnd;
    private switchPage;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StylePaginatorDirective, [{ optional: true; host: true; self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StylePaginatorDirective, "[style-paginator]", never, { "showTotalPages": { "alias": "showTotalPages"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=paginatorStyleDirective.d.ts.map