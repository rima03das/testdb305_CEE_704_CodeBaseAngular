import { AppDataService } from '../models/app-data/app-data.service';
export declare class FlatUnflat {
    private appDataService;
    flattenedJSON: object;
    constructor(appDataService: AppDataService);
    createRequestBodyonStepBlockData(requestBody: any, stepId?: any): {};
    createNestedObject(obj: any, type?: string): any;
    /**
     * Code for flattening the response
     * @param data
     */
    flattenJSON(data: any): object;
    recurse(cur: any, prop: any): object;
    flatten(table: any): any;
    flattenRepeatableBlock(input: any): any;
    parseDotNotation(str: any, val: any, obj: any): void;
    parseDotNotationArray(str: any, val: any, obj: any): void;
}
//# sourceMappingURL=flat-unflat-json.d.ts.map