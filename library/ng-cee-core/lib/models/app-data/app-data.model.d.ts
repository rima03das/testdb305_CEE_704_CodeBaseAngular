import { ID } from '@datorama/akita';
export interface AppData {
    id: ID;
    stepId: string;
    apiKey: string;
    fieldLabel?: string;
    linkedBlockId?: string;
    isRepeatedField?: boolean;
    repeatedBlockFieldId?: string;
    requestApiKey: Array<string>;
    responseApiKey: Array<string>;
    dataFormatSeparator?: string;
    mandatory: boolean;
    editable: boolean;
    visible: boolean;
    value: any;
    isValid: boolean;
}
//# sourceMappingURL=app-data.model.d.ts.map