import { ConditionalValidator } from './wfe-conditional-validator';
import { CommonUtil } from './common-util';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../models/app-data/app-data.service";
import * as i2 from "../models/api-data/api-data.service";
export class WFEConditionalExecuter {
    appDataService;
    apiDataService;
    fieldId = {};
    repeatedFieldId = '';
    responseData;
    conditionalValidatorUtil;
    commonUtil;
    constructor(appDataService, apiDataService) {
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.conditionalValidatorUtil = new ConditionalValidator(appDataService);
        this.commonUtil = new CommonUtil();
    }
    evaluateConditionQuery(query, conditionArr, repeatedId = '', responseData = {}, key) {
        // evaluate condition query
        if (query.trim() === '') {
            return true;
        }
        this.repeatedFieldId = repeatedId;
        this.fieldId = key;
        this.responseData = responseData;
        // const eliminatorArray = ['(', ')', '', 'AND', 'OR'];
        // const finalArr = [];
        // const queryArr = query.split(' ');
        // // console.log(queryArr);
        // if (queryArr.length > 3) {
        //     for (const index of queryArr) {
        //         if (eliminatorArray.includes(index)) {
        //             finalArr.push(index);
        //         } else {
        //             finalArr.push(this.evaluateSingleCondition(this.returnSingleCondition(index, conditionArr)));
        //         }
        //     }
        //     // console.log(finalArr);
        //     let finalQuery = finalArr.join(' ');
        //     finalQuery = (finalQuery.replace(/AND/g, '&&')).replace(/OR/g, '||');
        //     return eval(finalQuery);
        // } else {
        //     return true;
        // }
        let finalQuery = query;
        if (!conditionArr || !Array.isArray(conditionArr)) {
            console.error('conditionArr not define: ', conditionArr);
            return false;
        }
        for (let i = 0; i < conditionArr.length; i++) {
            const cArr = conditionArr[i];
            if (finalQuery.includes(cArr.id)) {
                const conResult = this.evaluateSingleCondition(cArr);
                finalQuery = finalQuery.split(' ' + cArr.id + ' ').join(' ' + conResult + ' ');
            }
        }
        finalQuery = (finalQuery.replace(/AND/g, '&&')).replace(/OR/g, '||');
        try {
            return eval(finalQuery);
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    returnSingleCondition(conditionId, conditionArr) {
        // return single condition
        return conditionArr.find(obj => obj.id === conditionId);
    }
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
    getValueForFieldIdWithRepeatableWords(stepOrBlockId, fieldUniqueId, words) {
        // non-nested repeatable block (it is prefixed by stepOrBlockId)            
        var generatedFieldID = stepOrBlockId + '$' + fieldUniqueId + '$' + words[2];
        // nested repeatable block (it is prefixed by stepOrBlockId)
        if (words.length === 4) {
            const nestedGeneratedFieldID = generatedFieldID + '$' + words[3];
            const fdata = this.appDataService.getFieldDataByFieldId(nestedGeneratedFieldID);
            if (fdata !== undefined) {
                return fdata;
            }
        }
        // console.log('generated Field ID', generatedFieldID);
        return this.appDataService.getFieldDataByFieldId(generatedFieldID);
    }
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
    checkRepeatableFieldIdAndGetValueForFieldId(fieldUniqueId, condition = null) {
        // console.log('this.repeatedFieldId', this.repeatedFieldId, condition.step, condition.field);        
        var words = this.repeatedFieldId?.split('$');
        if (words?.length === 3 || words?.length === 4) {
            const fdata = this.getValueForFieldIdWithRepeatableWords(words[0], fieldUniqueId, words);
            if (fdata !== undefined) {
                return fdata;
            }
            // fallback to block (it is prefixed by block)
            if (condition?.block) {
                const fdata = this.getValueForFieldIdWithRepeatableWords(condition.block, fieldUniqueId, words);
                if (fdata !== undefined) {
                    return fdata;
                }
            }
        }
        // fallback to bare field id        
        if (condition?.field) {
            return this.appDataService.getFieldDataByFieldId(condition.field);
        }
        if (fieldUniqueId) {
            return this.appDataService.getFieldDataByFieldId(fieldUniqueId);
        }
        return undefined;
    }
    // Extracts the indexed entries in an object based on a specified API key.
    // This function extracts the numeric indices from the keys of the object that match the API key
    // pattern and returns them as an array of numbers.
    //
    // @param obj - The object containing the data to be indexed.
    // @param apiKey - The API key used to identify the entries in the object.
    // @returns An array of numbers representing the indices of the entries that match the API key pattern.
    //
    // Example: If the object contains keys like "data[0]", "data[1]", "data[2]", and the apiKey is "data[*]",
    // the function will return [0, 1, 2]. 
    extractIndexedEntries(obj, apiKey) {
        const indexSet = new Set();
        let keyPrefix = apiKey.split('[*]')[0];
        const regex = new RegExp(`^${keyPrefix}\\[(\\d+)\\]`);
        for (const k of Object.keys(obj)) {
            const match = k.match(regex);
            if (match) {
                indexSet.add(Number(match[1]));
            }
        }
        return Array.from(indexSet);
    }
    // Extracts a list of values from an object based on a specified API key.
    // This function uses a regular expression to match keys in the object that correspond to the API key pattern.
    // It returns an array of values associated with those keys.
    //
    // @param obj - The object containing the data to be extracted.
    // @param apiKey - The API key used to identify the entries in the object.
    // @returns An array of values extracted from the object that match the API key pattern.
    //
    // Example: If the object contains keys like "data[0].key", "data[1].key", "data[2].key", and the apiKey is "data[*]",
    // the function will return an array of values corresponding to those keys.
    // [value0, value1, value2]
    extractList(obj, apiKey) {
        const regex = new RegExp(apiKey.split('[*]').join('\\[\\d+\\]'));
        let keys = [];
        // check for data in api data store
        for (const dataKey of Object.keys(obj)) {
            const result = dataKey.match(regex);
            if (result) {
                keys.push(obj[result[0]]);
            }
        }
        return keys;
    }
    evaluateSingleCondition(condition) {
        if (!condition) {
            return false;
        }
        // evaluate single condition
        let key;
        let dynamicValue = '';
        let value = null;
        let data;
        if (condition.field === '(this)') {
            condition.field = this.fieldId['unique_id'];
        }
        if (Object.keys(this.responseData).length && condition && condition.field) {
            data = this.responseData[condition.field];
        }
        if (data !== undefined) {
            key = data;
        }
        else {
            if (condition.compare_by && condition.compare_by === 'API_KEY') {
                // get the field data by api key
                key = this.appDataService.getFieldDataByApiKey(condition.field);
            }
            else if (!condition.field && condition.api_key) {
                if (condition.api_key.includes('##')) {
                    const conditionApiKeyObj = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(condition.api_key));
                    if (conditionApiKeyObj) {
                        if (condition.api_key.includes('[*]')) {
                            if (condition.comparision_operator.toUpperCase().startsWith('FL')) {
                                key = this.extractIndexedEntries(conditionApiKeyObj['value'], condition.api_key);
                            }
                            else {
                                key = this.extractList(conditionApiKeyObj['value'], condition.api_key);
                            }
                        }
                        else {
                            key = conditionApiKeyObj['value'][condition.api_key] || '';
                        }
                    }
                    else {
                        // if handler data not found in the store
                        return false;
                    }
                }
                else {
                    const apiDataValue = this.apiDataService.getApiDataByApiKey(condition.api_key);
                    if (apiDataValue && apiDataValue.hasOwnProperty('value')) {
                        key = apiDataValue.value;
                    }
                }
            }
            else {
                // check if the fieldId is a repeatable block field id
                key = this.checkRepeatableFieldIdAndGetValueForFieldId(condition.field, condition);
            }
        }
        // checking for fieldValues if dynamic
        const compare = condition.comparison ? condition.comparison : condition.comparision_operator;
        if (typeof condition.field_values === 'string' && condition.field_values.includes('##')) {
            let response = this.apiDataService.getApiDataByHandler(condition.field_values.split('##')[0]);
            if (response && response.value) {
                let newresponse = response.value[condition.field_values];
                condition.field_values = newresponse;
            }
        }
        if (condition.field && condition.field_values === 'DYNAMIC') {
            value = this.checkRepeatableFieldIdAndGetValueForFieldId(this.fieldId['unique_id']);
            if (value === undefined) {
                value = this.appDataService.getFieldDataByFieldId(this.fieldId['html_id']);
            }
        }
        else if (condition.field && condition.field_values === 'DYNAMIC_CASE_INSENSITIVE') {
            value = this.checkRepeatableFieldIdAndGetValueForFieldId(this.fieldId['unique_id']) || "";
            value = value.toLowerCase();
            key = key.toLowerCase();
        }
        else {
            if (compare.toUpperCase() === 'CONTAINS' || compare.toUpperCase() === 'NOT CONTAINS') {
                value = condition.field_values.split('||');
            }
            else {
                value = condition.field_values;
            }
        }
        return this.conditionalValidatorUtil.checkConditionalValidation(value, key, compare);
    }
    static ɵfac = function WFEConditionalExecuter_Factory(t) { return new (t || WFEConditionalExecuter)(i0.ɵɵinject(i1.AppDataService), i0.ɵɵinject(i2.ApiDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WFEConditionalExecuter, factory: WFEConditionalExecuter.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WFEConditionalExecuter, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.AppDataService }, { type: i2.ApiDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZlLWNvbmRpdGlvbmFsLXF1ZXJ5LWV4ZWN1dGVyLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXF1ZXJ5LWV4ZWN1dGVyLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSTNDLE1BQU0sT0FBTyxzQkFBc0I7SUFRWDtJQUNBO0lBUHBCLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDYixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLFlBQVksQ0FBQztJQUNMLHdCQUF3QixDQUF1QjtJQUN2RCxVQUFVLENBQWE7SUFFdkIsWUFBb0IsY0FBOEIsRUFDOUIsY0FBOEI7UUFEOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUUxQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQWEsRUFBRSxZQUF3QixFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsWUFBWSxHQUFHLEVBQUUsRUFBRSxHQUFZO1FBQzVHLDJCQUEyQjtRQUMzQixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxlQUFlLEdB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MkNBQTJDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxRixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFVBQVUsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssY0FBYyxFQUFFO2dCQUNsRixLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7YUFDbEM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLDBCQUEwQixDQUMzRCxLQUFLLEVBQ0wsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Z0ZBL1FRLHNCQUFzQjtnRUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGbkIsTUFBTTs7aUZBRVQsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJy4uL21vZGVscy9ldmVudHNfbW9kZWwvZXZlbnRfY29uZGl0aW9uJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxWYWxpZGF0b3IgfSBmcm9tICcuL3dmZS1jb25kaXRpb25hbC12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXRkVDb25kaXRpb25hbEV4ZWN1dGVyIHtcclxuXHJcbiAgICBmaWVsZElkID0ge307XHJcbiAgICByZXBlYXRlZEZpZWxkSWQgPSAnJztcclxuICAgIHJlc3BvbnNlRGF0YTtcclxuICAgIHByaXZhdGUgY29uZGl0aW9uYWxWYWxpZGF0b3JVdGlsOiBDb25kaXRpb25hbFZhbGlkYXRvcjtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVmFsaWRhdG9yVXRpbCA9IG5ldyBDb25kaXRpb25hbFZhbGlkYXRvcihhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIGNvbmRpdGlvbkFycjogQXJyYXk8YW55PiwgcmVwZWF0ZWRJZCA9ICcnLCByZXNwb25zZURhdGEgPSB7fSwga2V5Pzogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gZXZhbHVhdGUgY29uZGl0aW9uIHF1ZXJ5XHJcbiAgICAgICAgaWYgKHF1ZXJ5LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVwZWF0ZWRGaWVsZElkID0gcmVwZWF0ZWRJZDtcclxuICAgICAgICB0aGlzLmZpZWxkSWQgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZURhdGE7XHJcbiAgICAgICAgLy8gY29uc3QgZWxpbWluYXRvckFycmF5ID0gWycoJywgJyknLCAnJywgJ0FORCcsICdPUiddO1xyXG4gICAgICAgIC8vIGNvbnN0IGZpbmFsQXJyID0gW107XHJcbiAgICAgICAgLy8gY29uc3QgcXVlcnlBcnIgPSBxdWVyeS5zcGxpdCgnICcpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKHF1ZXJ5QXJyKTtcclxuICAgICAgICAvLyBpZiAocXVlcnlBcnIubGVuZ3RoID4gMykge1xyXG4gICAgICAgIC8vICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHF1ZXJ5QXJyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZWxpbWluYXRvckFycmF5LmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZpbmFsQXJyLnB1c2goaW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmaW5hbEFyci5wdXNoKHRoaXMuZXZhbHVhdGVTaW5nbGVDb25kaXRpb24odGhpcy5yZXR1cm5TaW5nbGVDb25kaXRpb24oaW5kZXgsIGNvbmRpdGlvbkFycikpKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhmaW5hbEFycik7XHJcbiAgICAgICAgLy8gICAgIGxldCBmaW5hbFF1ZXJ5ID0gZmluYWxBcnIuam9pbignICcpO1xyXG4gICAgICAgIC8vICAgICBmaW5hbFF1ZXJ5ID0gKGZpbmFsUXVlcnkucmVwbGFjZSgvQU5EL2csICcmJicpKS5yZXBsYWNlKC9PUi9nLCAnfHwnKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGV2YWwoZmluYWxRdWVyeSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBmaW5hbFF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgICAgaWYgKCFjb25kaXRpb25BcnIgfHwgIUFycmF5LmlzQXJyYXkoY29uZGl0aW9uQXJyKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjb25kaXRpb25BcnIgbm90IGRlZmluZTogJywgY29uZGl0aW9uQXJyKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9uQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNBcnIgPSBjb25kaXRpb25BcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChmaW5hbFF1ZXJ5LmluY2x1ZGVzKGNBcnIuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25SZXN1bHQgPSB0aGlzLmV2YWx1YXRlU2luZ2xlQ29uZGl0aW9uKGNBcnIpXHJcbiAgICAgICAgICAgICAgICBmaW5hbFF1ZXJ5ID0gZmluYWxRdWVyeS5zcGxpdCgnICcgKyBjQXJyLmlkICsgJyAnKS5qb2luKCcgJyArIGNvblJlc3VsdCArICcgJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxRdWVyeSA9IChmaW5hbFF1ZXJ5LnJlcGxhY2UoL0FORC9nLCAnJiYnKSkucmVwbGFjZSgvT1IvZywgJ3x8Jyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGV2YWwoZmluYWxRdWVyeSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuU2luZ2xlQ29uZGl0aW9uKGNvbmRpdGlvbklkOiBzdHJpbmcsIGNvbmRpdGlvbkFycjogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIC8vIHJldHVybiBzaW5nbGUgY29uZGl0aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkFyci5maW5kKG9iaiA9PiBvYmouaWQgPT09IGNvbmRpdGlvbklkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhIGZpZWxkIElEIGZvciBhIHJlcGVhdGFibGUgYmxvY2sgYW5kIHJldHJpZXZlcyBpdHMgYXNzb2NpYXRlZCB2YWx1ZS5cclxuICAgICAqIFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgdW5pcXVlIGZpZWxkIElEIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBgc3RlcE9yQmxvY2tJZGAsIGBmaWVsZFVuaXF1ZUlkYCwgXHJcbiAgICAgKiBhbmQgYHdvcmRzYCBhcnJheS4gSXQgc3VwcG9ydHMgYm90aCBub24tbmVzdGVkIGFuZCBuZXN0ZWQgcmVwZWF0YWJsZSBibG9ja3MgYnkgYXBwZW5kaW5nIFxyXG4gICAgICogYWRkaXRpb25hbCBpZGVudGlmaWVycyBmcm9tIHRoZSBgd29yZHNgIGFycmF5LiBUaGUgZ2VuZXJhdGVkIGZpZWxkIElEIGlzIHRoZW4gdXNlZCB0byBmZXRjaCBcclxuICAgICAqIHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkIGRhdGEgZnJvbSB0aGUgYEFwcERhdGFTZXJ2aWNlYC5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHN0ZXBPckJsb2NrSWQgLSBUaGUgSUQgb2YgdGhlIHN0ZXAgb3IgYmxvY2sgdG8gd2hpY2ggdGhlIGZpZWxkIGJlbG9uZ3MuXHJcbiAgICAgKiBAcGFyYW0gZmllbGRVbmlxdWVJZCAtIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZmllbGQuXHJcbiAgICAgKiBAcGFyYW0gd29yZHMgLSBBbiBhcnJheSBvZiBzdHJpbmdzIHVzZWQgdG8gY29uc3RydWN0IHRoZSBmaWVsZCBJRC4gXHJcbiAgICAgKiAgICAgICAgICAgICAgICBUaGUgdGhpcmQgZWxlbWVudCBpcyByZXF1aXJlZCBmb3Igbm9uLW5lc3RlZCBibG9ja3MsIGFuZCB0aGUgZm91cnRoIGVsZW1lbnQgaXMgdXNlZCBmb3IgbmVzdGVkIGJsb2Nrcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdlbmVyYXRlZCBmaWVsZCBJRCwgcmV0cmlldmVkIGZyb20gdGhlIGBBcHBEYXRhU2VydmljZWAuXHJcbiAgICAgKi9cclxuICAgIGdldFZhbHVlRm9yRmllbGRJZFdpdGhSZXBlYXRhYmxlV29yZHMoc3RlcE9yQmxvY2tJZDpzdHJpbmcsIGZpZWxkVW5pcXVlSWQ6IHN0cmluZywgd29yZHM6IHN0cmluZ1tdKSB7ICAgICAgICBcclxuICAgICAgICAvLyBub24tbmVzdGVkIHJlcGVhdGFibGUgYmxvY2sgKGl0IGlzIHByZWZpeGVkIGJ5IHN0ZXBPckJsb2NrSWQpICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIGdlbmVyYXRlZEZpZWxkSUQgPSBzdGVwT3JCbG9ja0lkICsgJyQnICsgZmllbGRVbmlxdWVJZCArICckJyArIHdvcmRzWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIG5lc3RlZCByZXBlYXRhYmxlIGJsb2NrIChpdCBpcyBwcmVmaXhlZCBieSBzdGVwT3JCbG9ja0lkKVxyXG4gICAgICAgIGlmICh3b3Jkcy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmVzdGVkR2VuZXJhdGVkRmllbGRJRCA9IGdlbmVyYXRlZEZpZWxkSUQgKyAnJCcgKyB3b3Jkc1szXTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZmRhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChuZXN0ZWRHZW5lcmF0ZWRGaWVsZElEKTtcclxuICAgICAgICAgICAgaWYoZmRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2VuZXJhdGVkIEZpZWxkIElEJywgZ2VuZXJhdGVkRmllbGRJRCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGdlbmVyYXRlZEZpZWxkSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBmb3IgYSBmaWVsZCBJRCBpbiBhIHJlcGVhdGFibGUgYmxvY2ssIGhhbmRsaW5nIGJvdGggbmVzdGVkIGFuZCBub24tbmVzdGVkIHNjZW5hcmlvcy5cclxuICAgICAqIFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIGByZXBlYXRlZEZpZWxkSWRgIHRvIGRldGVybWluZSB0aGUgYXBwcm9wcmlhdGUgZmllbGQgSUQgZm9yIGZldGNoaW5nIGRhdGEuXHJcbiAgICAgKiBJdCBmaXJzdCBhdHRlbXB0cyB0byByZXRyaWV2ZSB0aGUgdmFsdWUgdXNpbmcgdGhlIGByZXBlYXRlZEZpZWxkSWRgIGFuZCBmYWxscyBiYWNrIHRvIHRoZSBgYmxvY2tgIHByb3BlcnR5IFxyXG4gICAgICogaWYgbmVjZXNzYXJ5LiBJZiBubyB2YWx1ZSBpcyBmb3VuZCwgaXQgZGVmYXVsdHMgdG8gZmV0Y2hpbmcgdGhlIGZpZWxkIGRhdGEgdXNpbmcgdGhlIGJhcmUgZmllbGQgSUQuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBmaWVsZFVuaXF1ZUlkIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBmaWVsZC5cclxuICAgICAqIEBwYXJhbSBjb25kaXRpb24gLSBBbiBvcHRpb25hbCBjb25kaXRpb24gb2JqZWN0IGNvbnRhaW5pbmcgZGV0YWlscyBzdWNoIGFzIGBibG9ja2AgYW5kIGBmaWVsZGAuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBmaWVsZCBJRCwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gdmFsdWUgaXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrUmVwZWF0YWJsZUZpZWxkSWRBbmRHZXRWYWx1ZUZvckZpZWxkSWQoZmllbGRVbmlxdWVJZDogc3RyaW5nLCBjb25kaXRpb246IGFueSA9IG51bGwpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5yZXBlYXRlZEZpZWxkSWQnLCB0aGlzLnJlcGVhdGVkRmllbGRJZCwgY29uZGl0aW9uLnN0ZXAsIGNvbmRpdGlvbi5maWVsZCk7ICAgICAgICBcclxuICAgICAgICB2YXIgd29yZHMgPSB0aGlzLnJlcGVhdGVkRmllbGRJZD8uc3BsaXQoJyQnKTtcclxuICAgICAgICBpZiAod29yZHM/Lmxlbmd0aCA9PT0gMyB8fCB3b3Jkcz8ubGVuZ3RoID09PSA0KSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGZkYXRhID0gdGhpcy5nZXRWYWx1ZUZvckZpZWxkSWRXaXRoUmVwZWF0YWJsZVdvcmRzKHdvcmRzWzBdLCBmaWVsZFVuaXF1ZUlkLCB3b3Jkcyk7XHJcbiAgICAgICAgICAgIGlmIChmZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGJsb2NrIChpdCBpcyBwcmVmaXhlZCBieSBibG9jaylcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbj8uYmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZkYXRhID0gdGhpcy5nZXRWYWx1ZUZvckZpZWxkSWRXaXRoUmVwZWF0YWJsZVdvcmRzKGNvbmRpdGlvbi5ibG9jaywgZmllbGRVbmlxdWVJZCwgd29yZHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBmYWxsYmFjayB0byBiYXJlIGZpZWxkIGlkICAgICAgICBcclxuICAgICAgICBpZiAoY29uZGl0aW9uPy5maWVsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQoY29uZGl0aW9uLmZpZWxkKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZpZWxkVW5pcXVlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGZpZWxkVW5pcXVlSWQpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBFeHRyYWN0cyB0aGUgaW5kZXhlZCBlbnRyaWVzIGluIGFuIG9iamVjdCBiYXNlZCBvbiBhIHNwZWNpZmllZCBBUEkga2V5LlxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBleHRyYWN0cyB0aGUgbnVtZXJpYyBpbmRpY2VzIGZyb20gdGhlIGtleXMgb2YgdGhlIG9iamVjdCB0aGF0IG1hdGNoIHRoZSBBUEkga2V5XHJcbiAgICAvLyBwYXR0ZXJuIGFuZCByZXR1cm5zIHRoZW0gYXMgYW4gYXJyYXkgb2YgbnVtYmVycy5cclxuICAgIC8vXHJcbiAgICAvLyBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBkYXRhIHRvIGJlIGluZGV4ZWQuXHJcbiAgICAvLyBAcGFyYW0gYXBpS2V5IC0gVGhlIEFQSSBrZXkgdXNlZCB0byBpZGVudGlmeSB0aGUgZW50cmllcyBpbiB0aGUgb2JqZWN0LlxyXG4gICAgLy8gQHJldHVybnMgQW4gYXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgdGhlIGluZGljZXMgb2YgdGhlIGVudHJpZXMgdGhhdCBtYXRjaCB0aGUgQVBJIGtleSBwYXR0ZXJuLlxyXG4gICAgLy9cclxuICAgIC8vIEV4YW1wbGU6IElmIHRoZSBvYmplY3QgY29udGFpbnMga2V5cyBsaWtlIFwiZGF0YVswXVwiLCBcImRhdGFbMV1cIiwgXCJkYXRhWzJdXCIsIGFuZCB0aGUgYXBpS2V5IGlzIFwiZGF0YVsqXVwiLFxyXG4gICAgLy8gdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIFswLCAxLCAyXS4gXHJcbiAgICBleHRyYWN0SW5kZXhlZEVudHJpZXMob2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBhcGlLZXk6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBpbmRleFNldCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xyXG4gICAgICAgIGxldCBrZXlQcmVmaXggPSBhcGlLZXkuc3BsaXQoJ1sqXScpWzBdO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7a2V5UHJlZml4fVxcXFxbKFxcXFxkKylcXFxcXWApO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMob2JqKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGsubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4U2V0LmFkZChOdW1iZXIobWF0Y2hbMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShpbmRleFNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXh0cmFjdHMgYSBsaXN0IG9mIHZhbHVlcyBmcm9tIGFuIG9iamVjdCBiYXNlZCBvbiBhIHNwZWNpZmllZCBBUEkga2V5LlxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB1c2VzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGtleXMgaW4gdGhlIG9iamVjdCB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIEFQSSBrZXkgcGF0dGVybi5cclxuICAgIC8vIEl0IHJldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aG9zZSBrZXlzLlxyXG4gICAgLy9cclxuICAgIC8vIEBwYXJhbSBvYmogLSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gYmUgZXh0cmFjdGVkLlxyXG4gICAgLy8gQHBhcmFtIGFwaUtleSAtIFRoZSBBUEkga2V5IHVzZWQgdG8gaWRlbnRpZnkgdGhlIGVudHJpZXMgaW4gdGhlIG9iamVjdC5cclxuICAgIC8vIEByZXR1cm5zIEFuIGFycmF5IG9mIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSB0aGUgb2JqZWN0IHRoYXQgbWF0Y2ggdGhlIEFQSSBrZXkgcGF0dGVybi5cclxuICAgIC8vXHJcbiAgICAvLyBFeGFtcGxlOiBJZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGtleXMgbGlrZSBcImRhdGFbMF0ua2V5XCIsIFwiZGF0YVsxXS5rZXlcIiwgXCJkYXRhWzJdLmtleVwiLCBhbmQgdGhlIGFwaUtleSBpcyBcImRhdGFbKl1cIixcclxuICAgIC8vIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiBhbiBhcnJheSBvZiB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aG9zZSBrZXlzLlxyXG4gICAgLy8gW3ZhbHVlMCwgdmFsdWUxLCB2YWx1ZTJdXHJcbiAgICBleHRyYWN0TGlzdChvYmo6IFJlY29yZDxzdHJpbmcsIGFueT4sIGFwaUtleTogc3RyaW5nKSA6IGFueVtdIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYXBpS2V5LnNwbGl0KCdbKl0nKS5qb2luKCdcXFxcW1xcXFxkK1xcXFxdJykpO1xyXG4gICAgICAgIGxldCBrZXlzID0gW107XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGRhdGEgaW4gYXBpIGRhdGEgc3RvcmVcclxuICAgICAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXMob2JqKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhS2V5Lm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKG9ialtyZXN1bHRbMF1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVNpbmdsZUNvbmRpdGlvbihjb25kaXRpb246IGFueSkge1xyXG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXZhbHVhdGUgc2luZ2xlIGNvbmRpdGlvblxyXG4gICAgICAgIGxldCBrZXk6YW55O1xyXG4gICAgICAgIGxldCBkeW5hbWljVmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIGlmIChjb25kaXRpb24uZmllbGQgPT09ICcodGhpcyknKSB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbi5maWVsZCA9IHRoaXMuZmllbGRJZFsndW5pcXVlX2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucmVzcG9uc2VEYXRhKS5sZW5ndGggJiYgY29uZGl0aW9uICYmIGNvbmRpdGlvbi5maWVsZCkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5yZXNwb25zZURhdGFbY29uZGl0aW9uLmZpZWxkXTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGtleSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5jb21wYXJlX2J5ICYmIGNvbmRpdGlvbi5jb21wYXJlX2J5ID09PSAnQVBJX0tFWScpIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgZmllbGQgZGF0YSBieSBhcGkga2V5XHJcbiAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5QXBpS2V5KGNvbmRpdGlvbi5maWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIWNvbmRpdGlvbi5maWVsZCAmJiBjb25kaXRpb24uYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcGlfa2V5LmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uQXBpS2V5T2JqID0gIHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUoY29uZGl0aW9uLmFwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uQXBpS2V5T2JqICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcGlfa2V5LmluY2x1ZGVzKCdbKl0nKSkgeyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uY29tcGFyaXNpb25fb3BlcmF0b3IudG9VcHBlckNhc2UoKS5zdGFydHNXaXRoKCdGTCcpKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuZXh0cmFjdEluZGV4ZWRFbnRyaWVzKGNvbmRpdGlvbkFwaUtleU9ialsndmFsdWUnXSwgY29uZGl0aW9uLmFwaV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5leHRyYWN0TGlzdChjb25kaXRpb25BcGlLZXlPYmpbJ3ZhbHVlJ10sIGNvbmRpdGlvbi5hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gY29uZGl0aW9uQXBpS2V5T2JqWyd2YWx1ZSddW2NvbmRpdGlvbi5hcGlfa2V5XSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhhbmRsZXIgZGF0YSBub3QgZm91bmQgaW4gdGhlIHN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGFWYWx1ZSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KGNvbmRpdGlvbi5hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBpRGF0YVZhbHVlICYmIGFwaURhdGFWYWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBhcGlEYXRhVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGZpZWxkSWQgaXMgYSByZXBlYXRhYmxlIGJsb2NrIGZpZWxkIGlkXHJcbiAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmNoZWNrUmVwZWF0YWJsZUZpZWxkSWRBbmRHZXRWYWx1ZUZvckZpZWxkSWQoY29uZGl0aW9uLmZpZWxkLCBjb25kaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGZpZWxkVmFsdWVzIGlmIGR5bmFtaWNcclxuICAgICAgICBjb25zdCBjb21wYXJlID0gY29uZGl0aW9uLmNvbXBhcmlzb24gPyBjb25kaXRpb24uY29tcGFyaXNvbiA6IGNvbmRpdGlvbi5jb21wYXJpc2lvbl9vcGVyYXRvcjtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbi5maWVsZF92YWx1ZXMgPT09ICdzdHJpbmcnICYmIGNvbmRpdGlvbi5maWVsZF92YWx1ZXMuaW5jbHVkZXMoJyMjJykpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGNvbmRpdGlvbi5maWVsZF92YWx1ZXMuc3BsaXQoJyMjJylbMF0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdyZXNwb25zZSA9IHJlc3BvbnNlLnZhbHVlW2NvbmRpdGlvbi5maWVsZF92YWx1ZXNdO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyA9IG5ld3Jlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25kaXRpb24uZmllbGQgJiYgY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyA9PT0gJ0RZTkFNSUMnKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jaGVja1JlcGVhdGFibGVGaWVsZElkQW5kR2V0VmFsdWVGb3JGaWVsZElkKHRoaXMuZmllbGRJZFsndW5pcXVlX2lkJ10pO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkSWRbJ2h0bWxfaWQnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5maWVsZCAmJiBjb25kaXRpb24uZmllbGRfdmFsdWVzID09PSAnRFlOQU1JQ19DQVNFX0lOU0VOU0lUSVZFJykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY2hlY2tSZXBlYXRhYmxlRmllbGRJZEFuZEdldFZhbHVlRm9yRmllbGRJZCh0aGlzLmZpZWxkSWRbJ3VuaXF1ZV9pZCddKSB8fCBcIlwiOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlLnRvVXBwZXJDYXNlKCkgPT09ICdDT05UQUlOUycgfHwgY29tcGFyZS50b1VwcGVyQ2FzZSgpID09PSAnTk9UIENPTlRBSU5TJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb25kaXRpb24uZmllbGRfdmFsdWVzLnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb25kaXRpb24uZmllbGRfdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsVmFsaWRhdG9yVXRpbC5jaGVja0NvbmRpdGlvbmFsVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGtleSwgY29tcGFyZSk7XHJcbiAgICB9XHJcbn1cclxuIl19