import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { EventResponseHandlerService } from './event-response-handler.service';
import { WfeStepLoaderService } from './wfe-step-loader.service';
import * as i0 from "@angular/core";
export declare class SocketioService {
    private socket;
    private eventResponseHandler;
    wfeStepLoaderService: WfeStepLoaderService;
    config: SocketIoConfig;
    dataSocketDetails: any;
    constructor(socket: Socket, eventResponseHandler: EventResponseHandlerService, wfeStepLoaderService: WfeStepLoaderService);
    socketConnect(socketDetails: any, index: any): void;
    private returnAccessToken;
    private getCookie;
    socketDisconnect(index: any): void;
    ngOnDestroy(): void;
    listenToTheSocket(stepId: any, wfeEventListHandler: any): void;
    getMessage(stepId: any, wfeEventListHandler: any, socketDetails: any, index: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocketioService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SocketioService>;
}
//# sourceMappingURL=socketio.service.d.ts.map