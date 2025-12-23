import { CommonUtil } from './common-util';
export class ConditionalValidator {
    appDataService;
    commonUtils;
    constructor(appDataService) {
        this.appDataService = appDataService;
        this.commonUtils = new CommonUtil();
    }
    removeNonNumeric(str) {
        const input = String(str || "").trim();
        if (input === "") {
            return "0";
        }
        return (str ?? "").toString().replace(/[^0-9.]/g, "");
    }
    checkConditionalValidation(val1, val2, operator) {
        let val11 = this.appDataService.getFieldDataByFieldId(val1);
        let val22 = this.appDataService.getFieldDataByFieldId(val2);
        val1 = val11 && val11 != undefined ? val11 : this.commonUtils.getID(val1);
        val2 = val22 && val22 != undefined ? val22 : this.commonUtils.getID(val2);
        const op = operator.trim().toUpperCase();
        if (op == "GT" || op == "LT" || op == "GTE" || op == "LTE") {
            val1 = this.removeNonNumeric(val1);
            val2 = this.removeNonNumeric(val2);
        }
        switch (op) {
            case 'E':
                // removing type checking
                // and making all the values to lowercase
                // according to the meeting on 31/08/2020
                // tslint:disable-next-line: triple-equals
                // Commented the lowercase of all values as discussed with Abhishek on CI-708
                // val1 = typeof (val1) === 'string' ? val1.toLowerCase() : val1;
                // val2 = typeof (val2) === 'string' ? val2.toLowerCase() : val2;
                if (val1 == val2) {
                    return true;
                }
                else {
                    return false;
                }
            case 'NE':
                // removing type checking
                // and making all the values to lowercase
                // according to the meeting on 31/08/2020
                // tslint:disable-next-line: triple-equals
                // Commented the lowercase of all values as discussed with Abhishek on CI-708
                // val1 = typeof (val1) === 'string' ? val1.toLowerCase() : val1;
                // val2 = typeof (val2) === 'string' ? val2.toLowerCase() : val2;
                if (val1 != val2) {
                    return true;
                }
                else {
                    return false;
                }
            case 'GT':
                if (Number(val1) < Number(val2)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'LT':
                if (Number(val1) > Number(val2)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'GTE':
                if (Number(val1) <= Number(val2)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'LTE':
                if (Number(val1) >= Number(val2)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'NOT IN':
            case 'IN':
                if (val2 !== undefined) {
                    if (val2.includes(val1)) {
                        return op === 'NOT IN' ? false : true;
                    }
                    else {
                        return op === 'NOT IN' ? true : false;
                    }
                }
                else {
                    return false;
                }
            case 'FLGT':
                if (val2 !== undefined) {
                    if (val2.length > val1) {
                        return true;
                    }
                }
                return false;
            case 'FLLT':
                if (val2 && val2.length < val1) {
                    return true;
                }
                else {
                    return false;
                }
            case 'FLE':
                if (val2 !== undefined) {
                    if (val2.length == val1) {
                        return true;
                    }
                }
                return false;
            case 'FLGTE':
                if (val2 && val2.length >= val1) {
                    return true;
                }
                else {
                    return false;
                }
            case 'FLLTE':
                if (val2 && val2.length <= val1) {
                    return true;
                }
                else {
                    return false;
                }
            case 'REGEX':
                if (val2 !== undefined) {
                    const regex = val2.match(new RegExp(val1));
                    if (regex !== null) {
                        return true;
                    }
                }
                return false;
            case 'CONTAINS':
                if (val2 && val1.some(v => val2.includes(v))) {
                    return true;
                }
                else {
                    return false;
                }
            case 'NOT CONTAINS':
                let check = false;
                for (const i of val1) {
                    const valArr = val2.toLowerCase().split(' ');
                    if (valArr.includes(i.toLowerCase())) {
                        check = true;
                        break;
                    }
                }
                return check;
            default:
                return false;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZlLWNvbmRpdGlvbmFsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy93ZmUtY29uZGl0aW9uYWwtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUVUO0lBRHBCLFdBQVcsQ0FBYTtJQUN4QixZQUFvQixjQUE0QjtRQUE1QixtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQThCO1FBQzNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2QsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMEJBQTBCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxRQUFnQjtRQUM3RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFL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QUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQyxPQUFPLElBQUksQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxPQUFPLEtBQUssQ0FBQztpQkFDaEI7WUFDTCxLQUFLLGNBQWM7Z0JBQ2YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO3dCQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNiLE1BQU07cUJBQ1Q7aUJBQ0o7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDakI7Z0JBQ0ksT0FBTyxLQUFLLENBQUM7U0FDcEI7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBEYXRhU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc3RvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi9jb21tb24tdXRpbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxWYWxpZGF0b3Ige1xyXG4gICAgY29tbW9uVXRpbHM6IENvbW1vblV0aWw7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcERhdGFTZXJ2aWNlPzpBcHBEYXRhU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWxzID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVOb25OdW1lcmljKHN0cjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBTdHJpbmcoc3RyIHx8IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICBpZiAoaW5wdXQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoc3RyID8/IFwiXCIpLnRvU3RyaW5nKCkucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NvbmRpdGlvbmFsVmFsaWRhdGlvbih2YWwxOiBhbnksIHZhbDI6IGFueSwgb3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB2YWwxMSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHZhbDEpO1xyXG4gICAgICAgIGxldCB2YWwyMiA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHZhbDIpO1xyXG4gICAgICAgIHZhbDEgPSB2YWwxMSAmJiB2YWwxMSAhPSB1bmRlZmluZWQgPyB2YWwxMSA6IHRoaXMuY29tbW9uVXRpbHMuZ2V0SUQodmFsMSk7XHJcbiAgICAgICAgdmFsMiA9IHZhbDIyICYmIHZhbDIyICE9IHVuZGVmaW5lZCA/IHZhbDIyIDogdGhpcy5jb21tb25VdGlscy5nZXRJRCh2YWwyKTtcclxuICAgICAgICBjb25zdCBvcCA9IG9wZXJhdG9yLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChvcCA9PVwiR1RcIiB8fCBvcCA9PVwiTFRcIiB8fCBvcCA9PVwiR1RFXCIgfHwgb3AgPT1cIkxURVwiKXtcclxuICAgICAgICAgICAgdmFsMSA9IHRoaXMucmVtb3ZlTm9uTnVtZXJpYyh2YWwxKTtcclxuICAgICAgICAgICAgdmFsMiA9IHRoaXMucmVtb3ZlTm9uTnVtZXJpYyh2YWwyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAob3ApIHtcclxuICAgICAgICAgICAgY2FzZSAnRSc6XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmluZyB0eXBlIGNoZWNraW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgbWFraW5nIGFsbCB0aGUgdmFsdWVzIHRvIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgLy8gYWNjb3JkaW5nIHRvIHRoZSBtZWV0aW5nIG9uIDMxLzA4LzIwMjBcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbW1lbnRlZCB0aGUgbG93ZXJjYXNlIG9mIGFsbCB2YWx1ZXMgYXMgZGlzY3Vzc2VkIHdpdGggQWJoaXNoZWsgb24gQ0ktNzA4XHJcbiAgICAgICAgICAgICAgICAvLyB2YWwxID0gdHlwZW9mICh2YWwxKSA9PT0gJ3N0cmluZycgPyB2YWwxLnRvTG93ZXJDYXNlKCkgOiB2YWwxO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsMiA9IHR5cGVvZiAodmFsMikgPT09ICdzdHJpbmcnID8gdmFsMi50b0xvd2VyQ2FzZSgpIDogdmFsMjtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwxID09IHZhbDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdORSc6XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmluZyB0eXBlIGNoZWNraW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgbWFraW5nIGFsbCB0aGUgdmFsdWVzIHRvIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgLy8gYWNjb3JkaW5nIHRvIHRoZSBtZWV0aW5nIG9uIDMxLzA4LzIwMjBcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbW1lbnRlZCB0aGUgbG93ZXJjYXNlIG9mIGFsbCB2YWx1ZXMgYXMgZGlzY3Vzc2VkIHdpdGggQWJoaXNoZWsgb24gQ0ktNzA4XHJcbiAgICAgICAgICAgICAgICAvLyB2YWwxID0gdHlwZW9mICh2YWwxKSA9PT0gJ3N0cmluZycgPyB2YWwxLnRvTG93ZXJDYXNlKCkgOiB2YWwxO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFsMiA9IHR5cGVvZiAodmFsMikgPT09ICdzdHJpbmcnID8gdmFsMi50b0xvd2VyQ2FzZSgpIDogdmFsMjtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwxICE9IHZhbDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSAnR1QnOlxyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih2YWwxKSA8IE51bWJlcih2YWwyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlICdMVCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbDEpID4gTnVtYmVyKHZhbDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0dURSc6XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbDEpIDw9IE51bWJlcih2YWwyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlICdMVEUnOlxyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih2YWwxKSA+PSBOdW1iZXIodmFsMikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdOT1QgSU4nOlxyXG4gICAgICAgICAgICBjYXNlICdJTic6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbDIuaW5jbHVkZXModmFsMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wID09PSAnTk9UIElOJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3AgPT09ICdOT1QgSU4nID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdGTEdUJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWwyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsMi5sZW5ndGggPiB2YWwxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSAnRkxMVCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsMiAmJiB2YWwyLmxlbmd0aCA8IHZhbDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdGTEUnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbDIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwyLmxlbmd0aCA9PSB2YWwxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSAnRkxHVEUnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbDIgJiYgdmFsMi5sZW5ndGggPj0gdmFsMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZMTFRFJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWwyICYmIHZhbDIubGVuZ3RoIDw9IHZhbDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdSRUdFWCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsMiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSB2YWwyLm1hdGNoKG5ldyBSZWdFeHAodmFsMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhc2UgJ0NPTlRBSU5TJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWwyICYmIHZhbDEuc29tZSh2ID0+IHZhbDIuaW5jbHVkZXModikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnTk9UIENPTlRBSU5TJzpcclxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIG9mIHZhbDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxBcnIgPSB2YWwyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsQXJyLmluY2x1ZGVzKGkudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=