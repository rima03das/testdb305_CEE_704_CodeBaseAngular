import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { CommonUtil } from './common-util';
import * as i0 from "@angular/core";
export declare class DynamicLabelUtil {
    apiDataService: ApiDataService;
    appDataService: AppDataService;
    private setAPIKeyUtil;
    commonUtil: CommonUtil;
    constructor(apiDataService: ApiDataService, appDataService: AppDataService);
    extractApiKeys(sentence: string): RegExpMatchArray;
    /**
     * function that returns the proper value of the text that is set to dynamic
     * @param values the field data
     * @param data the api calling data
     */
    getDynamicValue(values: any, data?: any, useSecondaryApiKey?: boolean): any;
    private checkIfDynamic;
    private convertNewlinesToBreaks;
    private recursiveFunc;
    private evaluateExpression;
    private compairDates;
    private setDynamicKeysValue;
    /**
     * get the sentence
     * @param apiKey the api key string
     * @param data then api call back data
     */
    private getSentence;
    /**
     * function returns formatted/transformed data
     * @param defaultValue: any
     * @param transformType: string the method to transform
     * @param format: Array<string> the formats for ex: date requires 1 format
     * whereas currency can have more than one formats one for the country code
     * and another for the number of digits after decimal places
     */
    returnFormattedValue(defaultValue: any, transformType: string, format: Array<string>): any;
    getMaskedOutputValueforLabel(inputValue: any, mask: any): any;
    getMaskedInputValue(inputValue: any, mask: any): any;
    conformToMask(rawValue: any, mask: any): {
        conformedValue: string;
    };
    /**
     * the api key that is set to dynamic
     * @param apiKey the api key string
     * @param data then api call back data
     */
    private returnKeyValue;
    /**
     * Aggressively clean all delimiters from a string
     */
    private cleanAllDelimiters;
    /**
     * Safely evaluate ternary expressions without using eval()
     * Handles the format: 'condition' == 'value' ? trueResult : falseResult
     */
    private evaluateTernaryExpression;
    /**
     * Check if handler data exists in the API data of Akita store
     * @param handlerName - The name of the handler to check for
     * @param apiKey - Optional specific API key to check within the handler data
     * @returns boolean - true if handler data exists, false otherwise
     */
    checkHandlerDataExists(handlerName: string, apiKey?: string): boolean;
    /**
     * Get handler data from the API data of Akita store
     * @param handlerName - The name of the handler to retrieve data for
     * @param apiKey - Optional specific API key to retrieve from the handler data
     * @returns any - The handler data or specific API key data, null if not found
     */
    getHandlerData(handlerName: string, apiKey?: string): any;
    /**
     * Check if multiple handler data keys exist in the API data of Akita store
     * @param handlerName - The name of the handler to check
     * @param apiKeys - Array of API keys to check for existence
     * @returns object - Object with each API key and its existence status
     */
    checkMultipleHandlerDataExists(handlerName: string, apiKeys: string[]): {
        [key: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicLabelUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicLabelUtil>;
}
//# sourceMappingURL=dynamic-label-util.d.ts.map