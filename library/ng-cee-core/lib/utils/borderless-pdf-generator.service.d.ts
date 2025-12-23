import { ElementRef } from '@angular/core';
import { PDFFormProcessor } from './pdf-form-processor.service';
import * as i0 from "@angular/core";
export declare class BorderlessPDFGeneratorService {
    private pdfFormProcessor;
    constructor(pdfFormProcessor: PDFFormProcessor);
    /**
     * Generate PDF without form element borders
     */
    generateBorderlessPDF(element: HTMLElement | ElementRef, options?: BorderlessPDFOptions): Promise<void>;
    /**
     * Generate PDF from multiple elements without borders
     */
    generateMultiElementPDF(elements: (HTMLElement | ElementRef)[], options?: BorderlessPDFOptions): Promise<void>;
    /**
     * Quick method to generate PDF without any borders - simplified API
     */
    quickBorderlessPDF(element: HTMLElement | ElementRef, fileName?: string, action?: 'download' | 'preview' | 'print'): Promise<void>;
    /**
     * Add header and footer to PDF
     */
    private addHeaderFooter;
    /**
     * Handle different PDF actions
     */
    private handlePDFAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<BorderlessPDFGeneratorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BorderlessPDFGeneratorService>;
}
export interface BorderlessPDFOptions {
    fileName?: string;
    action?: 'download' | 'preview' | 'print';
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
    padding?: string;
    width?: string;
    contentWidth?: number;
    windowWidth?: number;
    x?: number;
    y?: number;
    margin?: number[];
    header?: PDFHeaderFooterConfig;
    footer?: PDFHeaderFooterConfig;
    pageBreakBetweenElements?: boolean;
    pdfConfig?: any;
}
export interface PDFHeaderFooterConfig {
    text?: string;
    x?: number;
    y?: number;
    lineY?: number;
    fontSize?: number;
    color?: number;
    align?: 'left' | 'center' | 'right';
    line?: boolean;
    pageNumbers?: boolean;
    date?: boolean;
}
//# sourceMappingURL=borderless-pdf-generator.service.d.ts.map