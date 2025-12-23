import * as i0 from "@angular/core";
export declare class PDFFormProcessor {
    /**
     * Process HTML content to remove form field borders and make them PDF-friendly
     */
    processContentForPDF(sourceElement: HTMLElement): HTMLElement;
    /**
     * Remove borders from all form elements using CSS
     */
    private removeFormElementBorders;
    /**
     * Replace form elements with their static content representation
     */
    private replaceFormElementsWithStaticContent;
    /**
     * Process individual input elements
     */
    private processInputElement;
    /**
     * Replace text input with span containing the value
     */
    private replaceTextInputWithSpan;
    /**
     * Replace checkbox with check symbol
     */
    private replaceCheckboxWithSymbol;
    /**
     * Replace radio button with circle symbol
     */
    private replaceRadioWithSymbol;
    /**
     * Replace button input with span
     */
    private replaceButtonInputWithSpan;
    /**
     * Process textarea elements
     */
    private processTextareaElement;
    /**
     * Process select elements
     */
    private processSelectElement;
    /**
     * Process button elements
     */
    private processButtonElement;
    /**
     * Apply PDF-specific styles to the container
     */
    private applyPDFStyles;
    /**
     * Enhanced jsPDF configuration to avoid form element borders
     */
    getOptimizedJsPDFConfig(): any;
    /**
     * Enhance the cloned document for better PDF rendering
     */
    private enhanceClonedDocumentForPDF;
    static ɵfac: i0.ɵɵFactoryDeclaration<PDFFormProcessor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PDFFormProcessor>;
}
//# sourceMappingURL=pdf-form-processor.service.d.ts.map