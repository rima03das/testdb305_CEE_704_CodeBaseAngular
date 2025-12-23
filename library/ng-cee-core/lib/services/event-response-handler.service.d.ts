import { SharedEventsServiceService } from './shared-events-service.service';
import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class EventResponseHandlerService {
    private appDataService;
    private apiDataService;
    private http;
    private sharedEventsService;
    private externalRequestResponse;
    constructor(appDataService: AppDataService, apiDataService: ApiDataService, http: HttpClient, sharedEventsService: SharedEventsServiceService);
    emitAPIDATA: (response: any) => void;
    get hash_api_key(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventResponseHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventResponseHandlerService>;
}
//# sourceMappingURL=event-response-handler.service.d.ts.map