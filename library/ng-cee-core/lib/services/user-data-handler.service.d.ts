import { SharedEventsServiceService } from './shared-events-service.service';
import * as i0 from "@angular/core";
export declare class UserDataHandlerService {
    private sharedEventsService;
    constructor(sharedEventsService: SharedEventsServiceService);
    mandatoryData: any[];
    setOrUpdateFieldData(apiKey: string, value: any): void;
    getFieldData(apiKey: string): string;
    removeSessionValues(apiKeys: string[]): void;
    removeSessionValue(apiKey: string): void;
    clearSessionValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDataHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserDataHandlerService>;
}
//# sourceMappingURL=user-data-handler.service.d.ts.map