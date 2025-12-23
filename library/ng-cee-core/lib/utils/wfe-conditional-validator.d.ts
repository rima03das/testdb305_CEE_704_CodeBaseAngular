import { AppDataState } from '../models/app-data/app-data.store';
import { CommonUtil } from './common-util';
export declare class ConditionalValidator {
    private appDataService?;
    commonUtils: CommonUtil;
    constructor(appDataService?: AppDataState);
    removeNonNumeric(str: string | null | undefined): string;
    checkConditionalValidation(val1: any, val2: any, operator: string): boolean;
}
//# sourceMappingURL=wfe-conditional-validator.d.ts.map