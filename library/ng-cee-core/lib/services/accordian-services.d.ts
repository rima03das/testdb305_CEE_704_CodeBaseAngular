import * as i0 from "@angular/core";
export declare class AccordionService {
    private sectionOpenSource;
    sectionOpen$: import("rxjs").Observable<string>;
    private sectionOpenWithParentSource;
    sectionOpenWithParent$: import("rxjs").Observable<{
        sectionIds: string;
        parentId: string;
        defaultValue: string;
        iCounter?: number;
    }>;
    openSection(sectionId: string): void;
    openMultipleSections(sectionIds: string[]): void;
    openMultipleSectionsWithParent(sectionIds: string, parentId: string, defaultValue: string, iCounter?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccordionService>;
}
//# sourceMappingURL=accordian-services.d.ts.map