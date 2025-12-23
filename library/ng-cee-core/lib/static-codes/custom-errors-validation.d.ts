export declare class CustomErrorsValidation {
    private ceeMessages;
    private customMessages;
    private messages;
    constructor(ceeMessages: any, customMessages: any);
    /**
     * function that reads the json object gets the user input and the field ID
     * and returns error messages based on the field if configured
     * in the src/assets/config/error_message_config.json
     * and if the the stepID matches the stepId that is given in the
     * array of customErrorMessage in the src/assets/app_config.json
     * @param fieldId the field unique ID for repeatable block field unique ID is the appDataId
     * it should look similar to <stepID>$<fieldId>$<Index>
     * @param value the user input in the following field
     */
    getMessages(fieldId: any, value: any): any;
    private switchMessages;
    /**
     * private function check if the the data is present in the object
     * @param finalObject the final object that needs to be returned back
     * @param messageData the whole message data
     * @param currObj the current validation message that is checked
     */
    private storeObj;
    /**
     * function returns the data one th basis of the data present in the object
     * if the priority object is has length 0 then it will return
     * empty object else it will return priority object
     * @param finalObject the final object that needs to be returned back
     * @param messageData the whole message data
     */
    private returnProperData;
    /**
     * function returns the CEE Message object that is configured in the CEE Portal
     * and by mapping through the message Id
     * @param messageId the message ID
     */
    private returnCEEMessageObject;
}
//# sourceMappingURL=custom-errors-validation.d.ts.map