import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import * as i0 from "@angular/core";
export declare class ConditionalUtil {
    private appDataService?;
    private commonUtils;
    private wfeConditionalExecuter;
    private conditionalValidator;
    isSingleCondition: boolean;
    constructor(isSingleCondition: boolean, appDataService?: AppDataService, apiDataService?: ApiDataService);
    checkCustomClass(fieldData: any, apiKey: string, value: any, data?: {}): any;
    checkBootstrapClass(fieldData: any, apiKey: string, value: any, data?: {}): any;
    checkMandatory(fieldData: any, apiKey: string, value: any, data?: {}): any;
    checkStepDependency(dependencyCondition: any): any;
    checkEditable(fieldData: any, apiKey: string, value: any, data?: {}): any;
    checkVisibility(fieldData: any, apiKey: string, value: any, data?: {}): any;
    conditionalValue(fieldData: any, apiKey: string, value: any, currentValue: string): string;
    checkClass(data: any, blockData: any): boolean;
    evaluteBootstrapCondition(field: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionalUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConditionalUtil>;
}
//# sourceMappingURL=wfe-conditional-util.d.ts.map