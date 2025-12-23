import { Renderer2, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiDataService } from "../../models/api-data/api-data.service";
import { AppDataService } from "../../models/app-data/app-data.service";
import { SharedEventsServiceService } from "../../services/shared-events-service.service";
import { RedirectionUtil } from "../../utils/redirection-util";
import { WFEEventListHandler } from "../../utils/wfe-event-list-handler-util";
import * as i0 from "@angular/core";
export declare class SidemenuBarRendererComponent implements OnInit {
    router: Router;
    private appDataService;
    private apiDataService;
    eventListHandler: WFEEventListHandler;
    private sharedEventsService;
    private renderer;
    sidemenuBlock: any;
    sidemenuBlockElements: any[];
    currentStep: any;
    currentStepName: string;
    expandAll: boolean;
    redirectionUtil: RedirectionUtil;
    constructor(router: Router, appDataService: AppDataService, apiDataService: ApiDataService, eventListHandler: WFEEventListHandler, sharedEventsService: SharedEventsServiceService, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    restoreMenuState(): void;
    trackByIdsideBar(index: number, item: any): string;
    notifyStepRedirection(route: any): void;
    ddToggle(item: any, index: number): void;
    resolveRoute(route: string, index: number): string;
    replaceApiKeys(sentence: string): string;
    scrollToSection(item: any, i: number): void;
    toggleAll(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidemenuBarRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidemenuBarRendererComponent, "app-sidemenu-bar-renderer", never, { "sidemenuBlock": { "alias": "sidemenuBlock"; "required": false; }; "sidemenuBlockElements": { "alias": "sidemenuBlockElements"; "required": false; }; "currentStep": { "alias": "currentStep"; "required": false; }; "currentStepName": { "alias": "currentStepName"; "required": false; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=sidemenu-bar-renderer.component.d.ts.map