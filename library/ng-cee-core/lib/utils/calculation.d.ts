export declare class CalculationUtil {
    _symbols: any;
    constructor();
    defineOperator(symbol: any, f: any, notation?: string, precedence?: number, rightToLeft?: boolean): void;
    last(...a: any[]): any;
    negation(a: any): number;
    addition(a: any, b: any): any;
    subtraction(a: any, b: any): number;
    multiplication(a: any, b: any): number;
    division(a: any, b: any): number;
    factorial(a: any): number;
    calculate(expression: any): any;
}
//# sourceMappingURL=calculation.d.ts.map