import { OnInit, OnDestroy } from '@angular/core';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { AppData } from '../../models/app-data/app-data.model';
import { AppDataService } from '../../models/app-data/app-data.service';
import { DynamicComponentHandlerService } from '../../services/dynamic-component-handler.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { APIKeyUtil } from '../../utils/api-key-util';
import { CommonUtil } from '../../utils/common-util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import * as i0 from "@angular/core";
export declare class DynamicRendererComponent implements OnInit, OnDestroy {
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    sharedEventsService: SharedEventsServiceService;
    private dynamicHandlerService;
    moduleName: string;
    fieldData: any;
    stepId: any;
    apiKeyUtil: APIKeyUtil;
    store: any;
    fieldData$: any;
    appData: AppData;
    variableObject: {};
    setAPIKeyUtil: SetAPICallbackData;
    commonUtil: CommonUtil;
    conditionalUtil: ConditionalUtil;
    constructor(appDataService: AppDataService, apiDataService: ApiDataService, sharedEventsService: SharedEventsServiceService, dynamicHandlerService: DynamicComponentHandlerService, viewContainerRef: any);
    ngOnInit(): void;
    processFieldData(): void;
    protected onSetSessionData(apiKey: string, value: any): void;
    setFieldValue(): any;
    /**
     * function that returns value from set api callback util
     * @param keyName the api key name
     */
    private returnValueFromCallback;
    get singleCondition(): boolean;
    get isSingleApiKey(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicRendererComponent, "app-dynamic-renderer", never, { "moduleName": { "alias": "moduleName"; "required": false; }; "fieldData": { "alias": "fieldData"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=dynamic-renderer.component.d.ts.map