import { OnInit } from '@angular/core';
import { MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { ApiDataService } from '../../models/api-data/api-data.service';
import { AppDataService } from '../../models/app-data/app-data.service';
import { SharedEventsServiceService } from '../../services/shared-events-service.service';
import { ApplicationStateStoreUtil } from '../../utils/application-state-store-util';
import { RedirectionUtil } from '../../utils/redirection-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import * as i0 from "@angular/core";
interface Navigation {
    page_navigation_oncomplete: string;
    navigation_false_oncomplete: string;
    navigation_false_incomplete_step: string;
}
/**
 * Progress Bar with nested structure.
 * Each node has a name and an optional list of children.
 */
interface ProgressBarElement {
    name: string;
    navigation: Navigation;
    stepName: string;
    states: object;
    stepId: string;
    nodeType: string;
    currentState: string;
    forceStates: boolean;
    seq: number;
    children?: ProgressBarElement[];
}
/** Flat node with expandable and level information */
interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
    navigation: Navigation;
    stepName: string;
    nodeType: string;
    stepId: string;
    states: object;
}
export declare class ProgressBarRendererComponent implements OnInit {
    router: Router;
    private appDataService;
    private apiDataService;
    private sharedEventsService;
    progressBlock: any;
    stateIdMap: any;
    currentStep: any;
    applicationStates: any;
    stepIdMapStepName: any;
    stepNameMapStepId: any;
    navigationMap: any;
    applicationStateStoreUtil: ApplicationStateStoreUtil;
    redirectionUtil: RedirectionUtil;
    progressBarDesign: string;
    isNestedTree: boolean;
    treeControl: any;
    treeControlsData: any;
    completedStepList: any;
    private _transformer;
    treeFlattener: MatTreeFlattener<ProgressBarElement, {
        expandable: boolean;
        name: string;
        navigation: Navigation;
        stepName: string;
        stepId: string;
        nodeType: string;
        currentState: string;
        states: object;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        navigation: Navigation;
        stepName: string;
        stepId: string;
        nodeType: string;
        currentState: string;
        states: object;
        level: number;
    }>;
    dataSource: any;
    variableObj: {};
    conditionalUtil: ConditionalUtil;
    constructor(router: Router, appDataService: AppDataService, apiDataService: ApiDataService, sharedEventsService: SharedEventsServiceService);
    ngOnInit(): void;
    private intProgressBar;
    tree: any;
    ngAfterViewInit(): void;
    private getElementID;
    updateMap(progressElements: any): void;
    createMap(): Array<ProgressBarElement>;
    getTreeStates(progressElements: any, state: any, type?: string, mainArr?: ProgressBarElement[]): any;
    hasChild: (_: number, node: FlatNode) => boolean;
    hasChildTree: (_: number, node: ProgressBarElement) => boolean;
    setStateDependingOnChild(progressMap: ProgressBarElement[]): ProgressBarElement[];
    getCompletedStepListFromBackend(): void;
    getStatesDependingOnChildAsTree(progressData: ProgressBarElement[]): ProgressBarElement[];
    getChildStatus(children: any, statusObj?: {
        active: any[];
        incomplete: any[];
        complete: any[];
    }): {
        active: any[];
        incomplete: any[];
        complete: any[];
    };
    getCurrentState(element: any, treeObject: ProgressBarElement): any;
    hasActiveStateCondition(element: any): boolean;
    hasCompletedStateCondition(element: any): boolean;
    expandNode(): void;
    /**
     * navigation function
     * @param node
     */
    navigate(node: FlatNode): void;
    ngOnDestroy(): void;
    isHTML(value: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarRendererComponent, "app-progress-bar-renderer", never, { "progressBlock": { "alias": "progressBlock"; "required": false; }; "stateIdMap": { "alias": "stateIdMap"; "required": false; }; "currentStep": { "alias": "currentStep"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
//# sourceMappingURL=progress-bar-renderer.component.d.ts.map