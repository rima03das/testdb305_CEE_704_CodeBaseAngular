import { OnInit, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppDataService } from '../../models/app-data/app-data.service';
import { CommonUtil } from '../../utils/common-util';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { WfeStepLoaderService } from '../../services/wfe-step-loader.service';
import { APIKeyUtil } from '../../utils/api-key-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { AccordionService } from '../../services/accordian-services';
import { ChildCondition } from '../../models/childCondition.model';
import * as i0 from "@angular/core";
export declare class AccordionRendererComponent implements OnInit {
    private http;
    private router;
    private appDataService;
    apiDataService: ApiDataService;
    private sharedEventsService;
    private wfeStepLoaderService;
    private accordionService;
    private cdr;
    eventListHandler: WFEEventListHandler;
    private ngZone?;
    private el?;
    autoPreviewConfigPath: string;
    configBlockPath: string;
    sectionData: any;
    primaryKeyIndex: any;
    stepId: any;
    templateId: any;
    block_description: any;
    rootData: any;
    blockRenderedData: any;
    additionalParameters: {
        expandTitle: string;
        collapseTitle: string;
    };
    accordionData: any[];
    show_section: boolean;
    apiData: {};
    commonUtil: CommonUtil;
    flatandNestUtil: FlatUnflat;
    setApiCallBackUtil: SetAPICallbackData;
    setDynamicLabelUtil: DynamicLabelUtil;
    is_bootstrap: boolean;
    variableObject: {};
    isListAccordion: boolean;
    accordionListData: any[];
    fieldIdMapApiKey: {};
    apiKeyUtil: APIKeyUtil;
    conditionalUtil: ConditionalUtil;
    isVisible: boolean;
    isEditable: boolean;
    dummyaccordionData: any[];
    CEE_Skip_accordion_load: any;
    private sectionSubscription;
    mandatoryCondition: ChildCondition;
    editableCondition: ChildCondition;
    visibleCondition: ChildCondition;
    constructor(http: HttpClient, router: Router, appDataService: AppDataService, apiDataService: ApiDataService, sharedEventsService: SharedEventsServiceService, wfeStepLoaderService: WfeStepLoaderService, accordionService: AccordionService, cdr: ChangeDetectorRef, eventListHandler: WFEEventListHandler, ngZone?: NgZone, el?: ElementRef);
    ngAfterViewInit(): void;
    trackById(index: number, item: any): number;
    ngOnInit(): Promise<void>;
    openAccordionById(sectionId: string): void;
    processjsonLoad(data: any): Promise<void>;
    processOutsideOfAngularZone(): void;
    processOutsideOfAngularZoneDefault(): void;
    generateRowData(field: any, data: any, list_pos: any, expandable?: boolean): void;
    private onFieldDataUpdated;
    /**
     * method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
    private onEmptySession;
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowDataprocess(field: any, data: any, list_pos: any, expandable?: boolean): any;
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse: any): {};
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey(): void;
    private returnFieldIdMapApiKeyValue;
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data: any, presentValue: any, field: any): any;
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data: any, presentValue: any, field: any): any;
    get isSingleAPIKey(): boolean;
    getBlockData(field: any): any;
    displayAccordion(data: any): void;
    getBlockId(field: string): string;
    getAccordionName(field: string): Promise<any>;
    getBlockDescription(field: string): Promise<any>;
    emitAccordingState(id: any, state: any): void;
    ngOnDestroy(): void;
    isHTML(value: string): boolean;
    onItemExpand(event: any): void;
    onItemCollapse(event: any): void;
    /**
     * trigger event if there has been an event triggered on the accordion
     * @param name the name of the event
     */
    onComponentEvent(name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionRendererComponent, "app-accordion-renderer", never, { "sectionData": { "alias": "sectionData"; "required": false; }; "primaryKeyIndex": { "alias": "primaryKeyIndex"; "required": false; }; "stepId": { "alias": "stepId"; "required": false; }; "templateId": { "alias": "templateId"; "required": false; }; "block_description": { "alias": "block_description"; "required": false; }; "rootData": { "alias": "rootData"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=accordion-renderer.component.d.ts.map