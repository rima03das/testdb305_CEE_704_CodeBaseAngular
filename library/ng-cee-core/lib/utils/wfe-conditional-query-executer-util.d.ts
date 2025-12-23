import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { CommonUtil } from './common-util';
import * as i0 from "@angular/core";
export declare class WFEConditionalExecuter {
    private appDataService;
    private apiDataService;
    fieldId: {};
    repeatedFieldId: string;
    responseData: any;
    private conditionalValidatorUtil;
    commonUtil: CommonUtil;
    constructor(appDataService: AppDataService, apiDataService: ApiDataService);
    evaluateConditionQuery(query: string, conditionArr: Array<any>, repeatedId?: string, responseData?: {}, key?: object): any;
    returnSingleCondition(conditionId: string, conditionArr: Array<any>): any;
    /**
     * Generates a field ID for a repeatable block and retrieves its associated value.
     *
     * This function constructs a unique field ID based on the provided `stepOrBlockId`, `fieldUniqueId`,
     * and `words` array. It supports both non-nested and nested repeatable blocks by appending
     * additional identifiers from the `words` array. The generated field ID is then used to fetch
     * the corresponding field data from the `AppDataService`.
     *
     * @param stepOrBlockId - The ID of the step or block to which the field belongs.
     * @param fieldUniqueId - The unique identifier of the field.
     * @param words - An array of strings used to construct the field ID.
     *                The third element is required for non-nested blocks, and the fourth element is used for nested blocks.
     * @returns The value associated with the generated field ID, retrieved from the `AppDataService`.
     */
    getValueForFieldIdWithRepeatableWords(stepOrBlockId: string, fieldUniqueId: string, words: string[]): any;
    /**
     * Retrieves the value for a field ID in a repeatable block, handling both nested and non-nested scenarios.
     *
     * This function processes the `repeatedFieldId` to determine the appropriate field ID for fetching data.
     * It first attempts to retrieve the value using the `repeatedFieldId` and falls back to the `block` property
     * if necessary. If no value is found, it defaults to fetching the field data using the bare field ID.
     *
     * @param fieldUniqueId - The unique identifier of the field.
     * @param condition - An optional condition object containing details such as `block` and `field`.
     * @returns The value associated with the field ID, or `undefined` if no value is found.
     */
    checkRepeatableFieldIdAndGetValueForFieldId(fieldUniqueId: string, condition?: any): any;
    extractIndexedEntries(obj: Record<string, any>, apiKey: string): number[];
    extractList(obj: Record<string, any>, apiKey: string): any[];
    evaluateSingleCondition(condition: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<WFEConditionalExecuter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WFEConditionalExecuter>;
}
//# sourceMappingURL=wfe-conditional-query-executer-util.d.ts.map