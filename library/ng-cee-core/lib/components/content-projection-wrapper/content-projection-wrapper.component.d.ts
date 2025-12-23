import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
interface ContentProjectionOptions {
    showHeader: boolean;
    showBefore: boolean;
    showAfter: boolean;
    showSidebar: boolean;
    showFooter: boolean;
    showActions: boolean;
    wrapperClass: string;
    isolateStyles: boolean;
    logoPath: string;
    fontPath: string;
    stylesheetPath: string;
    headerElementId: string;
}
interface FontDefinition {
    name: string;
    base64: string;
    family: string;
    type: string;
}
export declare class ContentProjectionWrapperComponent implements OnInit, OnDestroy, AfterViewInit {
    private elementRef;
    sharedEventsServices: SharedEventsServiceService;
    wfeEventListHandler: WFEEventListHandler;
    http: HttpClient;
    renderer: Renderer2;
    eventAdditionalParams: any[];
    additionalParameters: any[];
    event: any;
    private destroy$;
    sectionData?: any;
    showHeader: boolean;
    showFooter: boolean;
    isolateStyles: boolean;
    fonts: FontDefinition[];
    logoBase64: string;
    private loadedStylesheets;
    private mutationObserver;
    contentProjectionOptions: ContentProjectionOptions;
    generatePdfSubscription: Subscription;
    pdfStyles: string;
    printableContainer: ElementRef;
    pdfFileName: string;
    constructor(elementRef: ElementRef, sharedEventsServices: SharedEventsServiceService, wfeEventListHandler: WFEEventListHandler, http: HttpClient, renderer: Renderer2);
    ngAfterViewInit(): void;
    prepareAdditionalParams(): void;
    private processParameter;
    loadExternalStyles(stylesheetPath: string): import("rxjs").Observable<string>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadFonts(fontPath: string): import("rxjs").Observable<FontDefinition[]>;
    action(actionType: string): void;
    private createPDFDocument;
    private handlePDFAction;
    loadFontsForPDF(doc: any): void;
    /**
     * Prepare content for PDF by copying form values to visible elements
     */
    private prepareContentForPDF;
    /**
     * Handle page breaks for app-view-renderer elements to prevent content cutting
     */
    private handleAppViewRendererPageBreaks;
    /**
     * Estimate the height of an element including all its children
     */
    private estimateElementHeight;
    /**
     * Force a page break before an element
     */
    private forcePageBreakBefore;
    /**
     * Apply comprehensive page break styles to an app-view-renderer element
     */
    private applyPageBreakStyles;
    private cleanDatePickerElements;
    /**
     * Clean cloned content of global style references
     */
    private cleanClonedContent;
    /**
     * Enhance cloned document for better form element rendering and remove ALL global styles
     */
    private enhanceClonedDocument;
    /**
     * Remove ALL styles from the cloned document
     */
    private removeAllStylesFromDocument;
    /**
 * Check if a CSS class is problematic for PDF generation
 */
    private isProblematicClass;
    /**
     * Process form elements to make their values visible in PDF
     */
    private processFormElements;
    /**
     * Process individual input elements - Replace with div while keeping classes
     */
    private processInputElement;
    /**
     * Process textarea elements
     */
    private processTextareaElement;
    /**
     * Process select elements
     */
    private processSelectElement;
    private replaceWithVisualIndicator;
    /**
     * Replace input element with div while preserving classes and attributes
     */
    private replaceInputWithDiv;
    /**
     * Replace form element with text span
     */
    private replaceWithTextSpan;
    /**
     * Replace textarea with div
     */
    private replaceWithTextDiv;
    /**
     * Generate PDF with advanced searchable header using headerElementId
     */
    generateAdvancedSearchablePDF(shadowRoot: any, fileName: string, actionType: string): void;
    /**
     * Generate PDF with advanced searchable header functionality
     */
    private generateAdvancedPDF;
    private setCustomViewport;
    /**
     * Extract advanced content from header element
     */
    private extractAdvancedHeaderContent;
    /**
     * Process header images for PDF inclusion
     */
    private processHeaderImages;
    convertAndCompressImage(url: string, maxWidth?: number, maxHeight?: number, quality?: number): Promise<string>;
    private processImageCompression;
    private createCanvas;
    private createCanvasWithBackground;
    private getImageFormat;
    private hasTransparency;
    private removeStyleTags;
    private setupStyleMonitoring;
    private loadExternalStylesheet;
    private isStylesheetAlreadyLoaded;
    private cleanGlobalStyleReferences;
    /**
     * Open HTML preview in a new tab before PDF generation
     */
    private openHtmlPreview;
    /**
     * Create a complete HTML document for preview
     */
    private createPreviewHtmlDocument;
    /**
     * Create header HTML for preview
     */
    private createHeaderPreviewHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentProjectionWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContentProjectionWrapperComponent, "print-preview-wrapper", never, { "sectionData": { "alias": "sectionData"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export {};
//# sourceMappingURL=content-projection-wrapper.component.d.ts.map