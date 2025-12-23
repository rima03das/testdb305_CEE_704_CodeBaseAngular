import { ElementRef, OnInit, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class C3ChartDirective implements OnInit, OnChanges {
    private el;
    private renderer;
    chartData: any;
    chartColors: any;
    chartOptions: any;
    chartType: any;
    xAxisLabels: string[];
    xAxisLabel: string;
    yAxisLabel: string;
    backgroundColor: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private generateChart;
    static ɵfac: i0.ɵɵFactoryDeclaration<C3ChartDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<C3ChartDirective, "[appC3Chart]", never, { "chartData": { "alias": "chartData"; "required": false; }; "chartColors": { "alias": "chartColors"; "required": false; }; "chartOptions": { "alias": "chartOptions"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; "xAxisLabels": { "alias": "xAxisLabels"; "required": false; }; "xAxisLabel": { "alias": "xAxisLabel"; "required": false; }; "yAxisLabel": { "alias": "yAxisLabel"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=cee-chart.directive.d.ts.map