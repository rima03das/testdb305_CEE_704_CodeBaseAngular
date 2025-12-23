export declare class SessionKeyUtil {
    constructor();
    generateSessionKey(fieldData: any): string;
    getFieldNameFromSessionKey(key: string): string;
    getApiKeyFromSessionKey(key: string): string;
    getApiKeyValueFromSession(key: string): {
        key: string;
        value: any;
    };
    getSessionKeyUsingUniqueId(key: string): string;
    getSessionKeyFromApiKey(key: string): string;
}
//# sourceMappingURL=session-key-util.d.ts.map