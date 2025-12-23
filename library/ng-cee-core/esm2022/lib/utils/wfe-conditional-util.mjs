import { CommonUtil } from './common-util';
import { ConditionalValidator } from './wfe-conditional-validator';
import { WFEConditionalExecuter } from './wfe-conditional-query-executer-util';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../models/app-data/app-data.service";
import * as i2 from "../models/api-data/api-data.service";
export class ConditionalUtil {
    appDataService;
    commonUtils;
    wfeConditionalExecuter;
    conditionalValidator;
    isSingleCondition = false;
    constructor(isSingleCondition, appDataService, apiDataService) {
        this.appDataService = appDataService;
        this.commonUtils = new CommonUtil();
        this.wfeConditionalExecuter = new WFEConditionalExecuter(appDataService, apiDataService);
        this.conditionalValidator = new ConditionalValidator(appDataService);
        this.isSingleCondition = isSingleCondition;
    }
    checkCustomClass(fieldData, apiKey, value, data = {}) {
        // conditional custom class checking for fields
        if (fieldData.custom_class_condition && fieldData.custom_class_condition.length > 0) {
            let customClassValue = false;
            for (const customClassCondition of fieldData.custom_class_condition) {
                customClassValue = this.wfeConditionalExecuter.evaluateConditionQuery(customClassCondition.query, customClassCondition.condition, '', {}, fieldData);
                if (customClassValue) {
                    break;
                }
            }
            return customClassValue;
        }
        // conditional custom class checking for fields
        if (fieldData.custom_class_condition) {
            if (this.isSingleCondition) {
                if (fieldData.custom_class_condition.field === apiKey) {
                    return this.conditionalValidator.checkConditionalValidation(this.commonUtils.getID(fieldData.custom_class_condition.field_values), value, fieldData.custom_class_condition.comparision_operator);
                }
            }
            else {
                return this.wfeConditionalExecuter.evaluateConditionQuery(fieldData.custom_class_condition.query, fieldData.custom_class_condition.condition, apiKey, data, fieldData);
            }
        }
        return undefined;
    }
    checkBootstrapClass(fieldData, apiKey, value, data = {}) {
        // conditional Bootstrap class checking for fields
        if (fieldData.bootstrap_class_condition && fieldData.bootstrap_class_condition.length > 0) {
            let customClassValue = false;
            for (const customClassCondition of fieldData.bootstrap_class_condition) {
                customClassValue = this.wfeConditionalExecuter.evaluateConditionQuery(customClassCondition.query, customClassCondition.condition, '', {}, fieldData);
                if (customClassValue) {
                    break;
                }
            }
            return customClassValue;
        }
        // conditional Bootstrap class checking for fields
        if (fieldData.bootstrap_class_condition) {
            if (this.isSingleCondition) {
                if (fieldData.bootstrap_class_condition.field === apiKey) {
                    return this.conditionalValidator.checkConditionalValidation(this.commonUtils.getID(fieldData.bootstrap_class_condition.field_values), value, fieldData.bootstrap_class_condition.comparision_operator);
                }
            }
            else {
                return this.wfeConditionalExecuter.evaluateConditionQuery(fieldData.bootstrap_class_condition.query, fieldData.bootstrap_class_condition.condition, apiKey, data, fieldData);
            }
        }
        return undefined;
    }
    checkMandatory(fieldData, apiKey, value, data = {}) {
        // conditional mandatory checking for section or blocks
        if (fieldData && fieldData.conditional_mandatory && fieldData.conditional_mandatory.length > 0) {
            let mandatoryValue;
            for (const mandatoryCondition of fieldData.conditional_mandatory) {
                if (!mandatoryCondition.query.trim()) {
                    continue;
                }
                mandatoryValue = this.wfeConditionalExecuter.evaluateConditionQuery(mandatoryCondition.query, mandatoryCondition.condition);
                if (mandatoryValue) {
                    break;
                }
            }
            return mandatoryValue;
        }
        // conditional mandatory checking for fields
        if (fieldData?.is_mandatory === 2) {
            if (fieldData.mandatory_condition) {
                if (this.isSingleCondition) {
                    if (fieldData.mandatory_condition.field === apiKey) {
                        return this.conditionalValidator.checkConditionalValidation(this.commonUtils.getID(fieldData.mandatory_condition.field_values), value, fieldData.mandatory_condition.comparision_operator);
                    }
                }
                else {
                    return this.wfeConditionalExecuter.evaluateConditionQuery(fieldData.mandatory_condition.query, fieldData.mandatory_condition.condition, apiKey, data);
                }
            }
        }
        return undefined;
    }
    checkStepDependency(dependencyCondition) {
        return this.wfeConditionalExecuter.evaluateConditionQuery(dependencyCondition.query, dependencyCondition.condition);
    }
    checkEditable(fieldData, apiKey, value, data = {}) {
        // conditional editable checking for section or blocks
        if (fieldData.conditional_editable && fieldData.conditional_editable.length > 0) {
            let editableValue;
            for (const editableCondition of fieldData.conditional_editable) {
                if (!editableCondition.query.trim()) {
                    continue;
                }
                editableValue = this.wfeConditionalExecuter.evaluateConditionQuery(editableCondition.query, editableCondition.condition);
                if (editableValue) {
                    break;
                }
            }
            return editableValue;
        }
        // conditional editable checking for fields
        if (fieldData.is_editable === 2) {
            if (fieldData.editable_condition) {
                if (this.isSingleCondition) {
                    if (fieldData.editable_condition.field === apiKey) {
                        return this.conditionalValidator.checkConditionalValidation(this.commonUtils.getID(fieldData.editable_condition.field_values), value, fieldData.editable_condition.comparision_operator);
                    }
                }
                else {
                    return this.wfeConditionalExecuter.evaluateConditionQuery(fieldData.editable_condition.query, fieldData.editable_condition.condition, apiKey, data);
                }
            }
        }
        return undefined;
    }
    checkVisibility(fieldData, apiKey, value, data = {}) {
        // conditional visible checking for section or blocks
        if (fieldData.conditional_visible && fieldData.conditional_visible.length > 0) {
            let visibleValue;
            for (const visibleCondition of fieldData.conditional_visible) {
                if (!visibleCondition.query.trim()) {
                    continue;
                }
                visibleValue = this.wfeConditionalExecuter.evaluateConditionQuery(visibleCondition.query, visibleCondition.condition);
                if (visibleValue) {
                    break;
                }
            }
            return visibleValue;
        }
        // conditional visible checking for fields
        if (fieldData.is_display === 2) {
            if (fieldData.display_condition) {
                if (this.isSingleCondition) {
                    if (fieldData.display_condition.field === apiKey) {
                        return this.conditionalValidator.checkConditionalValidation(this.commonUtils.getID(fieldData.display_condition.field_values), value, fieldData.display_condition.comparision_operator);
                    }
                }
                else {
                    return this.wfeConditionalExecuter.evaluateConditionQuery(fieldData.display_condition.query, fieldData.display_condition.condition, apiKey, data);
                }
            }
        }
        return undefined;
    }
    conditionalValue(fieldData, apiKey, value, currentValue) {
        const { is_conditional_value, conditional_value } = fieldData;
        let fieldValue = currentValue;
        if (is_conditional_value && is_conditional_value === 1
            && conditional_value && Array.isArray(conditional_value)) {
            for (const conditionalValue of conditional_value) {
                const { 
                // step,
                field, field_values, comparision_operator, value_option, value_option_value, value_other, value_other_value, value_step, value_step_id, value_step_field, value_step_field_value } = conditionalValue;
                if (field === apiKey) {
                    const checkCondition = this.conditionalValidator.checkConditionalValidation(field_values, value, comparision_operator);
                    if (checkCondition) {
                        if (value_option === 1) {
                            fieldValue = value_option_value;
                        }
                        else if (value_other === 1) {
                            fieldValue = value_other_value;
                        }
                        else {
                            fieldValue = value_step_field_value;
                        }
                    }
                }
                if (value_step === 1) {
                    const conditionFieldVal = this.appDataService.getFieldDataByFieldId(field);
                    const checkCondition = this.conditionalValidator.checkConditionalValidation(field_values, conditionFieldVal, comparision_operator);
                    if (checkCondition && value_step_field_value == 'DYNAMIC') {
                        const valueFieldVal = this.appDataService.getFieldDataByFieldId(value_step_field);
                        fieldValue = valueFieldVal;
                    }
                }
            }
        }
        return fieldValue;
    }
    checkClass(data, blockData) {
        // conditional class checking for section or blocks
        if (blockData.custom_class_condition && blockData.custom_class_condition.condition.length > 0) {
            let classValue = false;
            classValue = this.wfeConditionalExecuter.evaluateConditionQuery(blockData.custom_class_condition.query, blockData.custom_class_condition.condition, '', data);
            return classValue;
        }
    }
    evaluteBootstrapCondition(field) {
        let bootstrapClassCondition = field && field.hasOwnProperty('bootstrap_class_condition') && field['bootstrap_class_condition'] ? field['bootstrap_class_condition'] : {};
        let isConditionValid = true;
        if (bootstrapClassCondition && bootstrapClassCondition.hasOwnProperty('query') && bootstrapClassCondition['query'] != '') {
            isConditionValid = this.checkBootstrapClass(field, String(field.unique_id), '');
        }
        return isConditionValid;
    }
    static ɵfac = function ConditionalUtil_Factory(t) { return new (t || ConditionalUtil)(i0.ɵɵinject('isSingleCondition'), i0.ɵɵinject(i1.AppDataService), i0.ɵɵinject(i2.ApiDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConditionalUtil, factory: ConditionalUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionalUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['isSingleCondition']
            }] }, { type: i1.AppDataService }, { type: i2.ApiDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZlLWNvbmRpdGlvbmFsLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUluRCxNQUFNLE9BQU8sZUFBZTtJQU9xRDtJQUxyRSxXQUFXLENBQWE7SUFDeEIsc0JBQXNCLENBQXlCO0lBQy9DLG9CQUFvQixDQUF1QjtJQUNuRCxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFFMUIsWUFBeUMsaUJBQTBCLEVBQVUsY0FBK0IsRUFBRSxjQUErQjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDeEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDL0MsQ0FBQztJQUVELGdCQUFnQixDQUFDLFNBQWMsRUFBRSxNQUFjLEVBQUUsS0FBVSxFQUFFLElBQUksR0FBRyxFQUFFO1FBRWxFLCtDQUErQztRQUMvQyxJQUFJLFNBQVMsQ0FBQyxz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Q0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FDM0QsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFDdEMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUQsT0FBTyxVQUFVLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQseUJBQXlCLENBQUMsS0FBSztRQUMzQixJQUFJLHVCQUF1QixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekssSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSx1QkFBdUIsSUFBSSx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RILGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuRjtRQUNELE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzt5RUEvUVEsZUFBZSxjQU9KLG1CQUFtQjtnRUFQOUIsZUFBZSxXQUFmLGVBQWUsbUJBRlosTUFBTTs7aUZBRVQsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQVFnQixNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxWYWxpZGF0b3IgfSBmcm9tICcuL3dmZS1jb25kaXRpb25hbC12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBXRkVDb25kaXRpb25hbEV4ZWN1dGVyIH0gZnJvbSAnLi93ZmUtY29uZGl0aW9uYWwtcXVlcnktZXhlY3V0ZXItdXRpbCc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsVXRpbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tb25VdGlsczogQ29tbW9uVXRpbDtcclxuICAgIHByaXZhdGUgd2ZlQ29uZGl0aW9uYWxFeGVjdXRlcjogV0ZFQ29uZGl0aW9uYWxFeGVjdXRlcjtcclxuICAgIHByaXZhdGUgY29uZGl0aW9uYWxWYWxpZGF0b3I6IENvbmRpdGlvbmFsVmFsaWRhdG9yO1xyXG4gICAgaXNTaW5nbGVDb25kaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdpc1NpbmdsZUNvbmRpdGlvbicpIGlzU2luZ2xlQ29uZGl0aW9uOiBib29sZWFuLCBwcml2YXRlIGFwcERhdGFTZXJ2aWNlPzogQXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlPzogQXBpRGF0YVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWxzID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIgPSBuZXcgV0ZFQ29uZGl0aW9uYWxFeGVjdXRlcihhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxWYWxpZGF0b3IgPSBuZXcgQ29uZGl0aW9uYWxWYWxpZGF0b3IoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaXNTaW5nbGVDb25kaXRpb24gPSBpc1NpbmdsZUNvbmRpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0N1c3RvbUNsYXNzKGZpZWxkRGF0YTogYW55LCBhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgZGF0YSA9IHt9KSB7XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIGN1c3RvbSBjbGFzcyBjaGVja2luZyBmb3IgZmllbGRzXHJcbiAgICAgICAgaWYgKGZpZWxkRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uICYmIGZpZWxkRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbUNsYXNzVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXN0b21DbGFzc0NvbmRpdGlvbiBvZiBmaWVsZERhdGEuY3VzdG9tX2NsYXNzX2NvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3NWYWx1ZSA9IHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzQ29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzQ29uZGl0aW9uLmNvbmRpdGlvbiwgJycsIHt9LCBmaWVsZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUNsYXNzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tQ2xhc3NWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIGN1c3RvbSBjbGFzcyBjaGVja2luZyBmb3IgZmllbGRzXHJcbiAgICAgICAgaWYgKGZpZWxkRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGREYXRhLmN1c3RvbV9jbGFzc19jb25kaXRpb24uZmllbGQgPT09IGFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsVmFsaWRhdG9yLmNoZWNrQ29uZGl0aW9uYWxWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWxzLmdldElEKGZpZWxkRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyksIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEuY3VzdG9tX2NsYXNzX2NvbmRpdGlvbi5jb21wYXJpc2lvbl9vcGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZmVDb25kaXRpb25hbEV4ZWN1dGVyLmV2YWx1YXRlQ29uZGl0aW9uUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmN1c3RvbV9jbGFzc19jb25kaXRpb24ucXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmN1c3RvbV9jbGFzc19jb25kaXRpb24uY29uZGl0aW9uLCBhcGlLZXksIGRhdGEsIGZpZWxkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0Jvb3RzdHJhcENsYXNzKGZpZWxkRGF0YTogYW55LCBhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgZGF0YSA9IHt9KSB7XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIEJvb3RzdHJhcCBjbGFzcyBjaGVja2luZyBmb3IgZmllbGRzXHJcbiAgICAgICAgaWYgKGZpZWxkRGF0YS5ib290c3RyYXBfY2xhc3NfY29uZGl0aW9uICYmIGZpZWxkRGF0YS5ib290c3RyYXBfY2xhc3NfY29uZGl0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbUNsYXNzVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjdXN0b21DbGFzc0NvbmRpdGlvbiBvZiBmaWVsZERhdGEuYm9vdHN0cmFwX2NsYXNzX2NvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3NWYWx1ZSA9IHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzQ29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzQ29uZGl0aW9uLmNvbmRpdGlvbiwgJycsIHt9LCBmaWVsZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUNsYXNzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tQ2xhc3NWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIEJvb3RzdHJhcCBjbGFzcyBjaGVja2luZyBmb3IgZmllbGRzXHJcbiAgICAgICAgaWYgKGZpZWxkRGF0YS5ib290c3RyYXBfY2xhc3NfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGREYXRhLmJvb3RzdHJhcF9jbGFzc19jb25kaXRpb24uZmllbGQgPT09IGFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsVmFsaWRhdG9yLmNoZWNrQ29uZGl0aW9uYWxWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWxzLmdldElEKGZpZWxkRGF0YS5ib290c3RyYXBfY2xhc3NfY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyksIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEuYm9vdHN0cmFwX2NsYXNzX2NvbmRpdGlvbi5jb21wYXJpc2lvbl9vcGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZmVDb25kaXRpb25hbEV4ZWN1dGVyLmV2YWx1YXRlQ29uZGl0aW9uUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmJvb3RzdHJhcF9jbGFzc19jb25kaXRpb24ucXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmJvb3RzdHJhcF9jbGFzc19jb25kaXRpb24uY29uZGl0aW9uLCBhcGlLZXksIGRhdGEsIGZpZWxkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja01hbmRhdG9yeShmaWVsZERhdGE6IGFueSwgYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGRhdGEgPSB7fSkge1xyXG5cclxuICAgICAgICAvLyBjb25kaXRpb25hbCBtYW5kYXRvcnkgY2hlY2tpbmcgZm9yIHNlY3Rpb24gb3IgYmxvY2tzXHJcbiAgICAgICAgaWYgKGZpZWxkRGF0YSAmJiBmaWVsZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5ICYmIGZpZWxkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbWFuZGF0b3J5VmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWFuZGF0b3J5Q29uZGl0aW9uIG9mIGZpZWxkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbWFuZGF0b3J5Q29uZGl0aW9uLnF1ZXJ5LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5VmFsdWUgPSB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIuZXZhbHVhdGVDb25kaXRpb25RdWVyeShcclxuICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnlDb25kaXRpb24ucXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uLmNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFuZGF0b3J5VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWFuZGF0b3J5VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25kaXRpb25hbCBtYW5kYXRvcnkgY2hlY2tpbmcgZm9yIGZpZWxkc1xyXG4gICAgICAgIGlmIChmaWVsZERhdGE/LmlzX21hbmRhdG9yeSA9PT0gMikge1xyXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLm1hbmRhdG9yeV9jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRGF0YS5tYW5kYXRvcnlfY29uZGl0aW9uLmZpZWxkID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uYWxWYWxpZGF0b3IuY2hlY2tDb25kaXRpb25hbFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWxzLmdldElEKGZpZWxkRGF0YS5tYW5kYXRvcnlfY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyksIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLm1hbmRhdG9yeV9jb25kaXRpb24uY29tcGFyaXNpb25fb3BlcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEubWFuZGF0b3J5X2NvbmRpdGlvbi5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLm1hbmRhdG9yeV9jb25kaXRpb24uY29uZGl0aW9uLCBhcGlLZXksIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGVwRGVwZW5kZW5jeShkZXBlbmRlbmN5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICBkZXBlbmRlbmN5Q29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICBkZXBlbmRlbmN5Q29uZGl0aW9uLmNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFZGl0YWJsZShmaWVsZERhdGE6IGFueSwgYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGRhdGEgPSB7fSkge1xyXG5cclxuICAgICAgICAvLyBjb25kaXRpb25hbCBlZGl0YWJsZSBjaGVja2luZyBmb3Igc2VjdGlvbiBvciBibG9ja3NcclxuICAgICAgICBpZiAoZmllbGREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIGZpZWxkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBlZGl0YWJsZVZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkaXRhYmxlQ29uZGl0aW9uIG9mIGZpZWxkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0YWJsZUNvbmRpdGlvbi5xdWVyeS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlVmFsdWUgPSB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIuZXZhbHVhdGVDb25kaXRpb25RdWVyeShcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZUNvbmRpdGlvbi5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZUNvbmRpdGlvbi5jb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXRhYmxlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZWRpdGFibGVWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIGVkaXRhYmxlIGNoZWNraW5nIGZvciBmaWVsZHNcclxuICAgICAgICBpZiAoZmllbGREYXRhLmlzX2VkaXRhYmxlID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZERhdGEuZWRpdGFibGVfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZERhdGEuZWRpdGFibGVfY29uZGl0aW9uLmZpZWxkID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uYWxWYWxpZGF0b3IuY2hlY2tDb25kaXRpb25hbFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWxzLmdldElEKGZpZWxkRGF0YS5lZGl0YWJsZV9jb25kaXRpb24uZmllbGRfdmFsdWVzKSwgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEuZWRpdGFibGVfY29uZGl0aW9uLmNvbXBhcmlzaW9uX29wZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIuZXZhbHVhdGVDb25kaXRpb25RdWVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmVkaXRhYmxlX2NvbmRpdGlvbi5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmVkaXRhYmxlX2NvbmRpdGlvbi5jb25kaXRpb24sIGFwaUtleSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1Zpc2liaWxpdHkoZmllbGREYXRhOiBhbnksIGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXRhID0ge30pIHtcclxuICAgICAgICAvLyBjb25kaXRpb25hbCB2aXNpYmxlIGNoZWNraW5nIGZvciBzZWN0aW9uIG9yIGJsb2Nrc1xyXG4gICAgICAgIGlmIChmaWVsZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZSAmJiBmaWVsZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB2aXNpYmxlVmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmlzaWJsZUNvbmRpdGlvbiBvZiBmaWVsZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlQ29uZGl0aW9uLnF1ZXJ5LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZVZhbHVlID0gdGhpcy53ZmVDb25kaXRpb25hbEV4ZWN1dGVyLmV2YWx1YXRlQ29uZGl0aW9uUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUNvbmRpdGlvbi5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlQ29uZGl0aW9uLmNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlzaWJsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZpc2libGVWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbmFsIHZpc2libGUgY2hlY2tpbmcgZm9yIGZpZWxkc1xyXG4gICAgICAgIGlmIChmaWVsZERhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24uZmllbGQgPT09IGFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbFZhbGlkYXRvci5jaGVja0NvbmRpdGlvbmFsVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbHMuZ2V0SUQoZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLmZpZWxkX3ZhbHVlcyksIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLmNvbXBhcmlzaW9uX29wZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIuZXZhbHVhdGVDb25kaXRpb25RdWVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24uY29uZGl0aW9uLCBhcGlLZXksIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZGl0aW9uYWxWYWx1ZShmaWVsZERhdGE6IGFueSwgYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGN1cnJlbnRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpc19jb25kaXRpb25hbF92YWx1ZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uYWxfdmFsdWVcclxuICAgICAgICB9ID0gZmllbGREYXRhO1xyXG4gICAgICAgIGxldCBmaWVsZFZhbHVlID0gY3VycmVudFZhbHVlO1xyXG4gICAgICAgIGlmIChpc19jb25kaXRpb25hbF92YWx1ZSAmJiBpc19jb25kaXRpb25hbF92YWx1ZSA9PT0gMVxyXG4gICAgICAgICAgICAmJiBjb25kaXRpb25hbF92YWx1ZSAmJiBBcnJheS5pc0FycmF5KGNvbmRpdGlvbmFsX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbmFsVmFsdWUgb2YgY29uZGl0aW9uYWxfdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdGVwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkX3ZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYXJpc2lvbl9vcGVyYXRvcixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9vcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfb3B0aW9uX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX290aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX290aGVyX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX3N0ZXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfc3RlcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9zdGVwX2ZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX3N0ZXBfZmllbGRfdmFsdWVcclxuICAgICAgICAgICAgICAgIH0gPSBjb25kaXRpb25hbFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVmFsaWRhdG9yLmNoZWNrQ29uZGl0aW9uYWxWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF92YWx1ZXMsIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJpc2lvbl9vcGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZV9vcHRpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSB2YWx1ZV9vcHRpb25fdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVfb3RoZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSB2YWx1ZV9vdGhlcl92YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUgPSB2YWx1ZV9zdGVwX2ZpZWxkX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlX3N0ZXAgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25GaWVsZFZhbCA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja0NvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxWYWxpZGF0b3IuY2hlY2tDb25kaXRpb25hbFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX3ZhbHVlcywgY29uZGl0aW9uRmllbGRWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzaW9uX29wZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDb25kaXRpb24gJiYgdmFsdWVfc3RlcF9maWVsZF92YWx1ZSA9PSAnRFlOQU1JQycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVGaWVsZFZhbCA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHZhbHVlX3N0ZXBfZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlID0gdmFsdWVGaWVsZFZhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWVsZFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ2xhc3MoZGF0YSwgYmxvY2tEYXRhKSB7XHJcbiAgICAgICAgLy8gY29uZGl0aW9uYWwgY2xhc3MgY2hlY2tpbmcgZm9yIHNlY3Rpb24gb3IgYmxvY2tzXHJcbiAgICAgICAgaWYgKGJsb2NrRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uICYmIGJsb2NrRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uLmNvbmRpdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjbGFzc1ZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNsYXNzVmFsdWUgPSB0aGlzLndmZUNvbmRpdGlvbmFsRXhlY3V0ZXIuZXZhbHVhdGVDb25kaXRpb25RdWVyeShcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5jdXN0b21fY2xhc3NfY29uZGl0aW9uLnF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhLmN1c3RvbV9jbGFzc19jb25kaXRpb24uY29uZGl0aW9uLCAnJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFzc1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSB7XHJcbiAgICAgICAgbGV0IGJvb3RzdHJhcENsYXNzQ29uZGl0aW9uID0gZmllbGQgJiYgZmllbGQuaGFzT3duUHJvcGVydHkoJ2Jvb3RzdHJhcF9jbGFzc19jb25kaXRpb24nKSAmJiBmaWVsZFsnYm9vdHN0cmFwX2NsYXNzX2NvbmRpdGlvbiddID8gZmllbGRbJ2Jvb3RzdHJhcF9jbGFzc19jb25kaXRpb24nXSA6IHt9O1xyXG4gICAgICAgIGxldCBpc0NvbmRpdGlvblZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYm9vdHN0cmFwQ2xhc3NDb25kaXRpb24gJiYgYm9vdHN0cmFwQ2xhc3NDb25kaXRpb24uaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgYm9vdHN0cmFwQ2xhc3NDb25kaXRpb25bJ3F1ZXJ5J10gIT0gJycpIHtcclxuICAgICAgICAgICAgaXNDb25kaXRpb25WYWxpZCA9IHRoaXMuY2hlY2tCb290c3RyYXBDbGFzcyhmaWVsZCwgU3RyaW5nKGZpZWxkLnVuaXF1ZV9pZCksICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQ29uZGl0aW9uVmFsaWQ7XHJcbiAgICB9XHJcbn1cclxuIl19