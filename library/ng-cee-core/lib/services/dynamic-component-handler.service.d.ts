import { ComponentFactoryResolver } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DynamicComponentHandlerService {
    factoryResolver: ComponentFactoryResolver;
    rootViewContainer: any;
    dynamicComponents: any[];
    constructor(factoryResolver: any);
    registerComponent(name: string, component: any): void;
    unregisterComponents(): void;
    setRootViewContainerRef(viewContainerRef: any): void;
    addDynamicComponent(name: string, cInput?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponentHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicComponentHandlerService>;
}
//# sourceMappingURL=dynamic-component-handler.service.d.ts.map