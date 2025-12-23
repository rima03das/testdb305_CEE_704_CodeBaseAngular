import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedEventsServiceService, EventResponseHandlerService, WfeStepLoaderService } from '@ng/cee-core';
import { OAuthService } from 'angular-oauth2-oidc';
import * as i0 from "@angular/core";
export declare class NgCeeOIDCService {
    private sharedEventsService;
    private eventResponseHandler;
    private http;
    private router;
    private oauthService;
    private wfeStepLoaderService;
    private lastStepName;
    private accessTokenKey;
    private refreshTokenKey;
    private token;
    private subscription;
    private appConfigPath;
    private pauseTokenRefresh;
    private appConfJSONData;
    private logoutAllTabChannel;
    constructor(sharedEventsService: SharedEventsServiceService, eventResponseHandler: EventResponseHandlerService, http: HttpClient, router: Router, oauthService: OAuthService, wfeStepLoaderService: WfeStepLoaderService);
    initOidc(): Promise<void>;
    /**
     * function that create token object
     * @param type = access_token / refresh_token
     */
    generateToken(type: string): any[];
    init(): void;
    /**
     * function that emits data based on API Type
     * declared in API Config
     * @param apiConfigData the api config Data Object
     */
    private emitDataBasedOnAPIType;
    private returnResponse;
    private validateAccessToken;
    private getURL;
    private refreshAccessToken;
    private logOut;
    private saveStepAndRedirectToLogin;
    private returnAccessToken;
    /**
     * function that emits back the api response for a particular api
     * @param response the response object
     * @param res the response
     * @param apiConfigData apiconfigration object
     * @param success if the api res is success
     */
    private emitDataToCee;
    /**
     * CEE internal API Service that hits the api
     * @param apiConfigData the api config data for the handler
     * via internal libraries of CEE
     */
    private ceeApiService;
    private formRequestBody;
    private clearAllCookie;
    private setToken;
    private getCookie;
    private deleteCookie;
    private setCookie;
    destroySubscription(): void;
    ngOnDestroy(): void;
    listenForClearData(): void;
    closeLogoutAllTabChannel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgCeeOIDCService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgCeeOIDCService>;
}
