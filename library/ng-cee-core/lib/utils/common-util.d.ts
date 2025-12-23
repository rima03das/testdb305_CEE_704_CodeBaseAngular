import { MatTableDataSource as MatTableDataSource } from "@angular/material/table";
export declare class CommonUtil {
    constructor();
    getValue(data: any): any;
    getTitlesOptions(data: any): any;
    getDescriptionOptions(data: any): any;
    getID(data: any): any;
    /**
     * function that returns the handler name from the key that is concatenated with ## handler name
     * @param data basically the api key example handlerName##key
     */
    getHandlerName(data: any): any;
    /**
     * function that returns the api key from the key that is concatenated with ## handler name
     * @param data basically the api key example handlerName##key
     */
    getAPIKey(data: any): any;
    getPossibleId(data: any): any;
    getPossibleValue(data: any): any;
    implodeClassName(data: any): string;
    blockBootstrapProcess(blockData: any): any;
    bootstrapColClass(data: any, isBootstrap?: boolean, templateClass?: string, bootstrapConditionalOutput?: boolean): any;
    /**
     * function to validate date string with multiple format
     * @param dateString input date string
     * @param dateFormat date format to validate
     */
    isValidDateStr(dateString: string, dateFormat?: string, withTime?: boolean): boolean;
    /**
     * function to validate time string with multiple format
     * @param dateString input date string
     * @param dateFormat date format to validate
     */
    isValidTimeStr(timeString: string, dateFormat?: string): boolean;
    /**
     * function to parse time with multiple format
     * @param timeString input time string
     * @param dateFormat date format to return
     */
    parseTime(timeString: any, dateFormat: any): string;
    escapeRegExp: (str: any) => any;
    setFilterKeys(dataSource: MatTableDataSource<any>, fKeys: string[]): void;
    private setFilterPredicateInner;
    private isValidDate;
    adjustTZ(dateTime: Date): Date;
    /**
     * the api key that is set to dynamic
     * @param maskstr the api key string
     * @param maskpostion then position you want mask
     * @param mask the character of masking
     * @param masknum then number character you want to mask
     * @param extraTitle the optional extra title
     * @param extraTitlePosition then option extra title position
     */
    getMaskedData(maskstr: any, maskpostion: any, mask: any, masknum: any, extraTitle?: any, extraTitlePosition?: any): string;
    setAppConfigValue(arg0: any): any;
    returnAccessToken(): string;
    private getCookie;
    private getBase64ImageFromUrl;
    processZipFile(AttachmentFiles: any): Promise<void>;
    /**
     * Extracts the last two values from a given string.
     *
     * @param str - The input string
     * @param delimiter - The delimiter string
     *
     * @returns An object containing two properties. If the extraction fails returns `null`.
     */
    extractLastValues(str: string, delimiter: string): {
        a: string;
        b: string;
    } | null;
    /**
     * Extracts the lastvalue from a given string.
     *
     * @param str - The input string
     * @param delimiter - The delimiter string
     *
     * @returns An object containing two properties. If the extraction fails returns `null`.
     */
    extractLastValue(str: string, delimiter: string): string | null;
    /**
    * Find indices from a given string `unique_id` and substitute [*] in key with indices once by one.
    *
    * @param key - The string in which to replace [*] with indices
    * @param unique_id - The string in which to search indices.
    * @param delimiter - The delimiter string
    *
    * @returns A new string with all instances of `key` replaced by asterisks.
    */
    findIndicesAndSubstituteStars(key: string, unique_id: string, delimiter: string): string;
    /**
     * Replaces all occurrences of [*] with the string `i` in the string `str`.
     *
     * @param str - The input string in which substitutions are to be made.
     * @param i - The character to be replaced by asterisks [*].
     * @param delimiter - The delimiter string
     *
     * @returns A new string with all instances of `i` replaced by asterisks.
     */
    substituteAllStars(str: string, i: string): string;
    /**
     * Substitutes alternating stars in a string with [*].
     *
     * @param str - The string in which substitutions are to be made.
     * @param i - The character to replace with first search of [*].
     * @param j - The character to replace with second search of [*].
     * @returns A new string with alternating replacements of `i` by asterisks and `j` unchanged.
     */
    substituteAlternateStars(str: string, i: string, j: string): string;
    /**
     * Search dialog in DOM and find the stepModal if exist
     *
     * @returns StepModal html element if found else undefined
     */
    getStepModalDialogIfExist(): HTMLDialogElement;
    /**
     * Find and move the MatDialog in DOM from body to stepModal if exists.
     * cdk-overlay-container is used to find the MatDialog
     *
     * @returns StepModal html element if found else undefined
     */
    moveMatDialogToStepModalIfExist(): void;
    /**
     * Move the MatDialog in DOM from stepModal to body if exists.
     * cdk-overlay-container is used to find the MatDialog.
     *
     * @returns StepModal html element if found else undefined
     */
    moveMatDialogToBody(): void;
    formatNumber(value: string): string;
}
//# sourceMappingURL=common-util.d.ts.map