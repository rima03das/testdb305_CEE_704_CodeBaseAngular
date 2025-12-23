import { RepeatableworkflowHandler } from './repeatableworkflow-util';
import { APIKeyUtil } from './api-key-util';
import { AppDataService } from '../models/app-data/app-data.service';
import * as i0 from "@angular/core";
export declare class GenerateFieldRow {
    private appDataService?;
    workflowUtil: RepeatableworkflowHandler;
    apiKeyUtil: APIKeyUtil;
    stepId: any;
    isApiResponse: boolean;
    responseMap: {};
    counter: number;
    constructor(appDataService?: AppDataService);
    get isSingleAPIKey(): boolean;
    generateRowData(field: any): {
        api_key: any;
        unique_id: string;
        html_id: string;
        mandatory: boolean;
        editable: boolean;
        response_api_key: any;
        request_api_key: any;
        repeatedBlockFieldId: any;
        isApiResponse: boolean;
        value: any;
    };
    private returnRequestOrResponseApiKeys;
    private returnFieldDataForLabel;
    private returnFieldValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateFieldRow, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GenerateFieldRow>;
}
//# sourceMappingURL=generate-field-util.d.ts.map