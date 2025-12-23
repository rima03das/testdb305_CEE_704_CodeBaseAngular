import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { OAuthErrorEvent, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import * as i0 from "@angular/core";
import * as i1 from "@ng/cee-core";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/router";
import * as i4 from "angular-oauth2-oidc";
export class NgCeeOIDCService {
    sharedEventsService;
    eventResponseHandler;
    http;
    router;
    oauthService;
    wfeStepLoaderService;
    lastStepName = '.cee.step.refresh.false';
    accessTokenKey = '';
    refreshTokenKey = '';
    token = {
        access_token: null,
        refresh_token: null
    };
    subscription = {};
    appConfigPath = 'assets/jsons/app_config.json';
    pauseTokenRefresh = false;
    appConfJSONData = {};
    logoutAllTabChannel;
    constructor(sharedEventsService, eventResponseHandler, http, router, oauthService, wfeStepLoaderService) {
        this.sharedEventsService = sharedEventsService;
        this.eventResponseHandler = eventResponseHandler;
        this.http = http;
        this.router = router;
        this.oauthService = oauthService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.initOidc();
        this.logoutAllTabChannel = new BroadcastChannel('logoutAllTab');
        this.listenForClearData();
    }
    async initOidc() {
        this.appConfJSONData = await this.http.get(this.appConfigPath).toPromise();
        if (this.appConfJSONData['oidc_config']) {
            const oidc_config = this.appConfJSONData['oidc_config'];
            const oidcConfig = {};
            oidc_config['domain'] && (oidcConfig['issuer'] = oidc_config['domain']);
            oidc_config['clientId'] && (oidcConfig['clientId'] = oidc_config['clientId']);
            oidc_config['clientKey'] && (oidcConfig['dummyClientSecret'] = oidc_config['clientKey']);
            oidcConfig['userInfoHandler'] = oidc_config['userInfoHandler'] ? oidc_config['userInfoHandler'] : "userInfo";
            oidcConfig['redirectUri'] = oidc_config['redirectUri'] ? oidc_config['redirectUri'] : window.location.origin;
            oidcConfig['responseType'] = oidc_config['responseType'] ? oidc_config['responseType'] : 'code';
            oidcConfig['scope'] = oidc_config['scope'] ? oidc_config['scope'] : 'openid profile';
            // set OAuth token storage to local storage
            this.oauthService.setStorage(localStorage);
            this.oauthService.configure(oidcConfig);
            // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
            if (localStorage.getItem('OIDCConnect_copy') !== null) {
                let icApiDatanew = JSON.parse(localStorage.getItem('OIDCConnect_copy'));
                this.sharedEventsService.oidcApiEmitter.emit(icApiDatanew);
            }
            this.subscription['events'] = this.oauthService.events.subscribe(event => {
                if (event instanceof OAuthErrorEvent) {
                    console.error(event);
                    // if the event is silent refresh error or token refresh error then logout the user and redirect to the login page
                    if (event.type === 'silent_refresh_error' || event.type === 'token_refresh_error') {
                        this.oauthService.logOut(false);
                        this.deleteCookie('LandingStepId');
                        this.deleteCookie('postUrl');
                        this.logoutAllTabChannel.postMessage('redirectToLogoutTabs');
                    }
                }
                else if (event instanceof OAuthSuccessEvent) {
                    console.log(event);
                    switch (event.type) {
                        case 'token_refreshed':
                        case 'silently_refreshed':
                            break;
                        case 'token_received':
                            const icApiData = {
                                handler: sessionStorage.getItem('CEE_OIDC_User_Info_Handler') ? sessionStorage.getItem('CEE_OIDC_User_Info_Handler') : 'userInfo',
                                event_success: true,
                                response: {}
                            };
                            if (this.oauthService.hasValidAccessToken()) {
                                this.oauthService.setupAutomaticSilentRefresh();
                                const decoded = jwtDecode(this.oauthService.getAccessToken());
                                const days = Math.ceil((decoded.exp - decoded.iat) / (1000 * 60 * 60 * 24));
                                this.setToken('accessToken', this.oauthService.getAccessToken(), days, 'ACCESS_TOKEN');
                                this.setToken('refreshToken', this.oauthService.getRefreshToken(), days);
                                icApiData.response = decoded;
                                icApiData.response['accessToken'] = this.oauthService.getAccessToken();
                                // console.log("Token set on: ", new Date().toLocaleString());
                            }
                            else {
                                icApiData.response = null;
                            }
                            localStorage.setItem('OIDCConnect_copy', JSON.stringify(icApiData));
                            setTimeout(() => {
                                // console.log("calling  oidcApiEmitter on: ", new Date().toLocaleString());
                                this.sharedEventsService.oidcApiEmitter.emit(icApiData);
                            }, 500);
                            break;
                        default:
                            break;
                    }
                }
            });
            this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
                // for loginInPopup event
                // if (window.opener) {
                //   // window.opener.location.reload();
                //   // window.close();
                // }
                // const icApiData = {
                //   handler: sessionStorage.getItem('CEE_OIDC_User_Info_Handler') ? sessionStorage.getItem('CEE_OIDC_User_Info_Handler') : 'userInfo',
                //   event_success: true,
                //   response: []
                // }
                // if (this.oauthService.hasValidAccessToken()) {
                //   this.oauthService.setupAutomaticSilentRefresh();
                //   const decoded: any = jwtDecode(this.oauthService.getAccessToken());
                //   const days = Math.ceil((decoded.exp - decoded.iat) / (1000 * 60 * 60 * 24));
                //   this.setToken('accessToken', this.oauthService.getAccessToken(), days, 'ACCESS_TOKEN');
                //   this.setToken('refreshToken', this.oauthService.getRefreshToken(), days);
                //   icApiData.response = decoded;
                //   icApiData.response['accessToken'] = this.oauthService.getAccessToken();
                // }
                // else {
                //   icApiData.response = null;
                // }
                // this.sharedEventsService.oidcApiEmitter.emit(icApiData);
            });
            // this.oauthService.loadDiscoveryDocument().then(() => {
            //   console.log('Discovery document loaded from .well-known/openid-configuration');
            //   // Now try login
            //   return this.oauthService.tryLogin();
            // }).then(() => {
            //   console.log('Login attempt completed');
            // }).catch((error) => {
            //   console.error('Error in discovery or login process:', error);
            // });
            this.oauthService.setupAutomaticSilentRefresh();
        }
    }
    /**
     * function that create token object
     * @param type = access_token / refresh_token
     */
    generateToken(type) {
        let tokenStr = null;
        switch (type) {
            case 'access_token':
                tokenStr = window.sessionStorage.getItem('CEE_Token');
                break;
            case 'refresh_token':
                tokenStr = window.sessionStorage.getItem('CEE_RefreshToken');
                break;
        }
        const tokenArr = (tokenStr) ? tokenStr.split(',').map((tokenApiKey) => {
            const tokenKeyArr = tokenApiKey.split('##');
            return {
                handler: tokenKeyArr[0],
                apiKey: tokenKeyArr[1]
            };
        }) : [];
        return tokenArr;
    }
    init() {
        this.subscription['apiIntegrationEmitter'] = this.sharedEventsService.oidcDataEmitter.subscribe(apiConfigData => {
            this.token.access_token = this.generateToken('access_token');
            this.token.refresh_token = this.generateToken('refresh_token');
            const accessTokenHandlerObj = this.token.access_token.find(i => i.handler === apiConfigData.handler);
            const refreshTokenHandlerObj = this.token.refresh_token.find(i => i.handler === apiConfigData.handler);
            this.accessTokenKey = accessTokenHandlerObj ? accessTokenHandlerObj.apiKey : null;
            this.refreshTokenKey = refreshTokenHandlerObj ? refreshTokenHandlerObj.apiKey : null;
            // const CEE_ACCESS_TOKEN = window.sessionStorage.getItem('CEE_Token');
            // const CEE_REFRESH_TOKEN = window.sessionStorage.getItem('CEE_RefreshToken');
            // const accessTokenHandler = CEE_ACCESS_TOKEN ? CEE_ACCESS_TOKEN.split('##')[0] : undefined;
            // this.accessTokenKey = CEE_ACCESS_TOKEN ? CEE_ACCESS_TOKEN.split('##')[1] : undefined;
            // const refreshTokenKey = CEE_REFRESH_TOKEN ? CEE_REFRESH_TOKEN.split('##')[1] : undefined;
            const response = this.returnResponse(apiConfigData);
            // check if the data matches with the access_token handler
            if (accessTokenHandlerObj) {
                // then hit the api and get the access_token and refresh token and return
                // cee_sub and cee_prn
                this.ceeApiService(apiConfigData).subscribe(res => {
                    /* ESB API INTIGRATION */
                    if (apiConfigData.isESB && res.body.api_response) {
                        res.body = JSON.parse(res.body.api_response);
                    }
                    /* ESB API INTIGRATION (END) */
                    // console.log(res);
                    if (res.body) {
                        var formattedResponse = {};
                        if (res.body[this.accessTokenKey] && res.body[this.refreshTokenKey]) {
                            const decoded = jwtDecode(res.body[this.accessTokenKey]);
                            formattedResponse = {
                                cee_sub: decoded.sub,
                                cee_prn: decoded.prn
                            };
                            const days = Math.ceil((decoded.exp - decoded.iat) / (1000 * 60 * 60 * 24));
                            // console.log(days);
                            // console.log(decoded);
                            this.setToken('accessToken', res.body[this.accessTokenKey], days, 'ACCESS_TOKEN');
                            this.setToken('refreshToken', res.body[this.refreshTokenKey], days);
                            formattedResponse = { ...decoded.payload, ...formattedResponse, ...res.body };
                            delete formattedResponse[this.accessTokenKey];
                            delete formattedResponse[this.refreshTokenKey];
                        }
                        else {
                            formattedResponse = { ...res.body };
                        }
                        // if (apiConfigData.authoriseParams) {
                        //   apiConfigData.authoriseParams.forEach((i) => {
                        //     formattedResponse[i] = res.body[i];
                        //   });
                        // }
                        this.emitDataToCee(response, { status: 200, body: formattedResponse }, apiConfigData, true);
                        // navigate to the step if the session has a failed step
                        const step = window.sessionStorage.getItem(this.lastStepName);
                        if (step) {
                            this.router.navigateByUrl(atob(step));
                            window.sessionStorage.removeItem(this.lastStepName);
                        }
                    }
                    else {
                        console.error(`Something is wrong with the response`);
                        this.emitDataToCee(response, { status: 400, error: {} }, apiConfigData, false);
                    }
                }, err => {
                    // if the login api fails the return status false and logout status false
                    console.error(`Error while logging , ${JSON.stringify(err)}`);
                    this.emitDataToCee(response, err, apiConfigData, false);
                });
            }
            else if (apiConfigData.hasAuthorisation == true) { // == because it comes as true or 'true'
                // if an api has authorization true then add Authorization: Bearer access token as header params
                // validate the token
                this.validateAccessToken(apiConfigData);
            }
            else {
                // console.log("emit the Api Integration Handler Emitter");
                this.emitDataBasedOnAPIType(apiConfigData);
            }
        });
        this.subscription['refreshtoken'] = this.sharedEventsService.apiUnauthorizedEmitter.subscribe(res => {
            this.refreshAccessToken(res.oldApiConfigData);
        });
        this.subscription['oidcEventEmitter'] = this.sharedEventsService.oidcEventEmitter.subscribe(handler => {
            localStorage.setItem('OIDCConnect', handler.event_handler.toLowerCase());
            switch (handler.event_handler.toLowerCase()) {
                case 'login':
                    this.clearAllCookie();
                    this.oauthService.initLoginFlow();
                    break;
                case 'logininpopup':
                    this.clearAllCookie();
                    this.oauthService.initLoginFlowInPopup();
                    break;
                case 'logout':
                    this.oauthService.logOut(false);
                    this.deleteCookie('LandingStepId');
                    this.deleteCookie('postUrl');
                    localStorage.removeItem("OIDCConnect_copy");
                    this.logoutAllTabChannel.postMessage('redirectToLogoutTabs');
                    break;
                case 'checkloginstatus':
                    setTimeout(() => {
                        let loginStateFlag = false;
                        if (this.oauthService.hasValidAccessToken()) {
                            // console.log('User is already logged in');
                            loginStateFlag = true;
                            // $$$$$$$$$$$$$$$$$$$$$$ Set User Info $$$$$$$$$$$$$$$$$$$$$$$$$
                            const icApiData = {
                                handler: sessionStorage.getItem('CEE_OIDC_User_Info_Handler') ? sessionStorage.getItem('CEE_OIDC_User_Info_Handler') : 'userInfo',
                                event_success: true,
                                response: {}
                            };
                            this.oauthService.setupAutomaticSilentRefresh();
                            const decoded = jwtDecode(this.oauthService.getAccessToken());
                            const days = Math.ceil((decoded.exp - decoded.iat) / (1000 * 60 * 60 * 24));
                            this.setToken('accessToken', this.oauthService.getAccessToken(), days, 'ACCESS_TOKEN');
                            this.setToken('refreshToken', this.oauthService.getRefreshToken(), days);
                            icApiData.response = decoded;
                            icApiData.response['accessToken'] = this.oauthService.getAccessToken();
                            // console.log("Token set on: ", new Date().toLocaleString());
                            localStorage.setItem('OIDCConnect_copy', JSON.stringify(icApiData));
                            setTimeout(() => {
                                // console.log("calling  oidcApiEmitter on: ", new Date().toLocaleString());
                                this.sharedEventsService.oidcApiEmitter.emit(icApiData);
                            }, 500);
                            // $$$$$$$$$$$$$$$$$$$$$$$$ Set User Info Ends $$$$$$$$$$$$$$$$$$$$$$$$$$
                        }
                        const resObj = {
                            handler: handler,
                            loginStatus: loginStateFlag
                        };
                        this.sharedEventsService.oidcCheckLoginStatusEmitter.emit(resObj);
                    }, 2000);
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * function that emits data based on API Type
     * declared in API Config
     * @param apiConfigData the api config Data Object
     */
    emitDataBasedOnAPIType(apiConfigData) {
        if (localStorage.getItem('API_TYPE').toLowerCase() === 'internal') {
            if (apiConfigData.emitToken) {
                this.sharedEventsService.apiConfigTokenEmitter.emit(apiConfigData);
            }
            else {
                this.sharedEventsService.apiIntegrationEventHandlerEmitter.emit(apiConfigData);
            }
        }
        else {
            const { handler, urlParams, headers, queryParams, requestBody, isEvent } = apiConfigData;
            this.sharedEventsService.eventHandlerEmitter.emit({ handler, urlParams, headers, queryParams, requestBody, isEvent });
        }
    }
    returnResponse(apiConfigData) {
        return {
            handler: apiConfigData.handler,
            response: null,
            event_success: true,
            storageType: apiConfigData.storageType,
            statusCode: 0,
            logout: false
        };
    }
    // function that checks access token validity
    validateAccessToken(apiConfigData) {
        try {
            const accessToken = this.returnAccessToken();
            const decoded = jwtDecode(accessToken);
            apiConfigData.headers.Authorization = `Bearer ${accessToken}`;
            // console.log(decoded.exp, new Date().getTime(), ((decoded.exp * 1000) < new Date().getTime()));
            const bufferTime = this.appConfJSONData['refreshTokenBuffer'] ? Number(this.appConfJSONData['refreshTokenBuffer']) : 5000;
            // console.log("bufferTime: ", bufferTime)
            // console.log("token exp: ", decoded.exp * 1000)
            // console.log("5 sec before exp: ", (decoded.exp * 1000)-bufferTime)
            // console.log("time now: ", new Date().getTime())
            // console.log("Condition: ", ((decoded.exp * 1000)-bufferTime)," < ", new Date().getTime());
            // if (decoded.exp <= Number(moment(new Date().getTime()).format('X'))) {
            if (((decoded.exp * 1000) - bufferTime) < new Date().getTime()) {
                const _this = this;
                if (this.pauseTokenRefresh) {
                    const tokenRefreshBuffer = setInterval(() => {
                        if (!this.pauseTokenRefresh) {
                            this.validateAccessToken(apiConfigData);
                            clearInterval(tokenRefreshBuffer);
                        }
                        console.warn('API call waiting for valid access token ...');
                    }, 1000);
                }
                else {
                    this.refreshAccessToken(apiConfigData);
                }
            }
            else {
                // check if handler name matches the logout handler
                if (apiConfigData.handler === localStorage.getItem('OIDC_LOGOUT_HANDLER')) {
                    this.logOut(apiConfigData);
                }
                else {
                    this.emitDataBasedOnAPIType(apiConfigData);
                }
            }
        }
        catch (error) {
            console.error(`No Access Token Found ${JSON.stringify(error)} for handler [${apiConfigData.handler}]`);
            // this.emitDataBasedOnAPIType(apiConfigData);
            // save the user step and on login navigate to that step
            // window.sessionStorage.setItem(this.lastStepName, btoa(this.router.url));
            const response = this.returnResponse(apiConfigData);
            // response.logout = true;
            // this.clearAllCookie();
            // this.emitDataToCee(response, { status: 403, error: {} }, apiConfigData.isEvent, false);
            this.saveStepAndRedirectToLogin(response, { status: 403, error: {} }, apiConfigData);
        }
    }
    getURL(url) {
        const dynamicPath = url.match(new RegExp(/\$\{(.*?)\}/g));
        if (dynamicPath) {
            for (const path of dynamicPath) {
                const p = path;
                const matchPath = p.match(new RegExp(/\w+/g));
                let apiPath = p;
                if (matchPath) {
                    apiPath = localStorage.getItem(matchPath[0]);
                    if (!apiPath) {
                        apiPath = matchPath[0];
                        console.warn(`Variable ${matchPath[0]} is not declared`);
                    }
                }
                url = url.split(path).join(apiPath);
            }
            return url;
        }
        return url;
    }
    refreshAccessToken(oldApiConfigData) {
        this.pauseTokenRefresh = true;
        // if the token expired then refresh the token and store the new token and emit it to
        // api integration emitter
        const refreshTokenHandlerHandler = localStorage.getItem('OIDC_REFRESH_ACCESS_TOKEN_HANDLER');
        const apiConfig = JSON.parse(localStorage.getItem('API_CONFIG'));
        const apiConfigObject = apiConfig[refreshTokenHandlerHandler];
        this.token.access_token = this.generateToken('access_token');
        const accessTokenHandlerObj = this.token.access_token.find(i => i.handler === apiConfigObject.id);
        this.accessTokenKey = accessTokenHandlerObj ? accessTokenHandlerObj.apiKey : null;
        const response = this.returnResponse(oldApiConfigData);
        // check if refresh token handler not present
        // then navigate the user to the login step
        if (!apiConfigObject) {
            console.error(`No Refresh Token Handler Mapping Found. Logging out ....`);
            this.saveStepAndRedirectToLogin(response, { status: 403, error: {} }, oldApiConfigData);
            return;
        }
        else {
            const refreshTokenRequestBody = {
                refresh_token: this.getCookie('refreshToken'),
                grant_type: 'refresh_token'
            };
            const internalAPIConfig = {
                handler: apiConfigObject.handler,
                urlParams: {},
                headers: {},
                queryParams: {},
                requestBody: refreshTokenRequestBody,
                url: this.getURL(apiConfigObject.url),
                methodType: apiConfigObject.methodType,
                requestType: apiConfigObject.requestType
            };
            const accessTokenKey = this.accessTokenKey;
            const _this = this;
            this.ceeApiService(internalAPIConfig).subscribe(res => {
                /* ESB API INTIGRATION */
                if (apiConfigObject.isESB && res.body.api_response) {
                    res.body = JSON.parse(res.body.api_response);
                }
                /* ESB API INTIGRATION (END) */
                if (res.body && res.body[accessTokenKey]) {
                    const decoded = jwtDecode(res.body[accessTokenKey]);
                    const days = Math.ceil((decoded.exp - decoded.iat) / (1000 * 60 * 60 * 24));
                    // console.log(days);
                    // console.log(decoded);
                    _this.setToken('accessToken', res.body[accessTokenKey], days, 'ACCESS_TOKEN');
                    oldApiConfigData.headers.Authorization = `Bearer ${res.body[accessTokenKey]}`;
                    _this.emitDataBasedOnAPIType(oldApiConfigData);
                }
                else {
                    console.error(`Refreshing Access Token Unsuccessful ${JSON.stringify(res)}`);
                }
                _this.pauseTokenRefresh = false;
            }, err => {
                _this.pauseTokenRefresh = false;
                console.error(`Refreshing Access Token Unsuccessful ${JSON.stringify(err)}`);
                // save the user step and on login navigate to that step
                // window.sessionStorage.setItem(this.lastStepName, btoa(this.router.url));
                // response.logout = true;
                // this.clearAllCookie();
                // this.emitDataToCee(response, err, oldApiConfigData.isEvent, false);
                _this.saveStepAndRedirectToLogin(response, err, oldApiConfigData);
            });
        }
    }
    logOut(apiConfigData) {
        const response = this.returnResponse(apiConfigData);
        this.ceeApiService(apiConfigData).subscribe(res => {
            console.log(`Log Out Successful`);
            response.logout = true;
            window.sessionStorage.removeItem(this.lastStepName);
            this.clearAllCookie();
            this.emitDataToCee(response, res, apiConfigData, true);
        }, err => {
            console.error(`Log Out Unsuccessful, ${JSON.stringify(err)}`);
            this.emitDataToCee(response, err, apiConfigData, false);
        });
    }
    saveStepAndRedirectToLogin(response, err, apiConfigData) {
        // save the user step and on login navigate to that step
        window.sessionStorage.setItem(this.lastStepName, btoa(this.router.url));
        response.logout = true;
        this.clearAllCookie();
        this.emitDataToCee(response, err, apiConfigData, false);
    }
    returnAccessToken() {
        const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`;
        return accessToken;
    }
    /**
     * function that emits back the api response for a particular api
     * @param response the response object
     * @param res the response
     * @param apiConfigData apiconfigration object
     * @param success if the api res is success
     */
    emitDataToCee(response, res, apiConfigData, success) {
        response.statusCode = res.status;
        response.response = res.body || res.error;
        response.event_success = success;
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB && response.response.api_response) {
            response.response = JSON.parse(response.response.api_response);
        }
        /* ESB API INTIGRATION (END) */
        if (apiConfigData.isEvent) {
            this.sharedEventsService.eventResponseSubscriber.emit(response);
        }
        else {
            this.eventResponseHandler.emitAPIDATA(response);
        }
    }
    // ----------------------------------//
    // Code From CEE API Integration Library
    // so that OIDC Library sends http requests
    // independently
    // ----------------------------------//
    /**
     * CEE internal API Service that hits the api
     * @param apiConfigData the api config data for the handler
     * via internal libraries of CEE
     */
    ceeApiService(apiConfigData) {
        //
        const headers = apiConfigData.headers;
        // set header request type
        switch (apiConfigData.requestType) {
            case 'application/json':
            case 'multipart/form-data':
            case 'application/x-www-form-urlencoded':
            case 'text/plain':
                headers['Content-Type'] = apiConfigData.requestType;
                break;
            default:
                console.error(`Invalid request type in returnHeaders: ${apiConfigData.requestType}`);
        }
        let apiURL = apiConfigData.url;
        // set url param
        for (const key of Object.keys(apiConfigData.urlParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.urlParams[key]);
            }
        }
        // set query param
        for (const key of Object.keys(apiConfigData.queryParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.queryParams[key]);
            }
        }
        // set request body
        let requestBody = this.formRequestBody(apiConfigData.requestBody, apiConfigData.requestType);
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB) {
            requestBody = {
                api_request: JSON.stringify(requestBody)
            };
        }
        /* ESB API INTIGRATION (END) */
        switch (apiConfigData.methodType.toUpperCase()) {
            case 'POST':
            case 'PUT':
            case 'PATCH':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, requestBody, { headers, observe: 'response' });
            case 'DELETE':
            case 'GET':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, { headers, observe: 'response' });
        }
    }
    formRequestBody(requestData, type) {
        switch (type) {
            case 'text/plain':
            case 'application/json':
                return requestData;
            case 'multipart/form-data':
                const fd = new FormData();
                for (const key of Object.keys(requestData)) {
                    fd.append(key, requestData[key]);
                }
                return fd;
            case 'application/x-www-form-urlencoded':
                const body = new URLSearchParams();
                for (const key of Object.keys(requestData)) {
                    body.set(key, requestData[key]);
                }
                return body.toString();
            default:
                console.error(`Invalid request type in formRequestBody: ${type}`);
                return {};
        }
    }
    // ---------------------------------//
    // Functions to set the cookie data
    // ---------------------------------//
    clearAllCookie() {
        this.deleteCookie('headerPayload');
        this.deleteCookie('signature');
        this.deleteCookie('refreshToken');
    }
    setToken(name, value, days, type) {
        if (type === 'ACCESS_TOKEN') {
            const token = value.split('.');
            this.deleteCookie('headerPayload');
            this.deleteCookie('signature');
            this.setCookie('headerPayload', `${token[0]}.${token[1]}`, days, '/');
            this.setCookie('signature', `${token[2]}`, days, '/');
        }
        else {
            this.deleteCookie(name);
            this.setCookie(name, value, days, '/');
        }
    }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        const cPath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cPath}`;
    }
    destroySubscription() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.closeLogoutAllTabChannel();
        for (const singleSubscription in this.subscription) {
            if (this.subscription[singleSubscription]) {
                this.subscription[singleSubscription].unsubscribe();
            }
        }
    }
    ngOnDestroy() {
        this.closeLogoutAllTabChannel();
    }
    listenForClearData() {
        this.logoutAllTabChannel.addEventListener('message', (event) => {
            window.sessionStorage.clear();
            this.wfeStepLoaderService.stepDataStore = {};
            this.wfeStepLoaderService.blockDataStore = {};
            this.router.navigate(['/']);
            if (window.location.pathname === '/') {
                this.router.navigateByUrl(`home`, { skipLocationChange: true });
            }
        });
    }
    closeLogoutAllTabChannel() {
        if (this.logoutAllTabChannel) {
            this.logoutAllTabChannel.close();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCService, deps: [{ token: i1.SharedEventsServiceService }, { token: i1.EventResponseHandlerService }, { token: i2.HttpClient }, { token: i3.Router }, { token: i4.OAuthService }, { token: i1.WfeStepLoaderService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.SharedEventsServiceService }, { type: i1.EventResponseHandlerService }, { type: i2.HttpClient }, { type: i3.Router }, { type: i4.OAuthService }, { type: i1.WfeStepLoaderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2VlLW9pZGMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNlZS1vaWRjL3NyYy9saWIvbmctY2VlLW9pZGMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBTXZGLE1BQU0sT0FBTyxnQkFBZ0I7SUFnQmpCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQW5CRixZQUFZLEdBQUcseUJBQXlCLENBQUM7SUFDekMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUNwQixlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUssR0FBRztRQUNkLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUE7SUFDTyxZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLGFBQWEsR0FBRyw4QkFBOEIsQ0FBQztJQUMvQyxpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFDbkMsZUFBZSxHQUFRLEVBQUUsQ0FBQztJQUMxQixtQkFBbUIsQ0FBbUI7SUFFOUMsWUFDVSxtQkFBK0MsRUFDL0Msb0JBQWlELEVBQ2pELElBQWdCLEVBQ2hCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixvQkFBMEM7UUFMMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFbEQsSUFBSSxDQUFD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bEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNuRTtRQUNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO3dHQWxyQlUsZ0JBQWdCOzRHQUFoQixnQkFBZ0IsY0FGZixNQUFNOzs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSwgRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlLCBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJ0BuZy9jZWUtY29yZSc7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9BdXRoRXJyb3JFdmVudCwgT0F1dGhTZXJ2aWNlLCBPQXV0aFN1Y2Nlc3NFdmVudCB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQ2VlT0lEQ1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGxhc3RTdGVwTmFtZSA9ICcuY2VlLnN0ZXAucmVmcmVzaC5mYWxzZSc7XHJcbiAgcHJpdmF0ZSBhY2Nlc3NUb2tlbktleSA9ICcnO1xyXG4gIHByaXZhdGUgcmVmcmVzaFRva2VuS2V5ID0gJyc7XHJcbiAgcHJpdmF0ZSB0b2tlbiA9IHtcclxuICAgIGFjY2Vzc190b2tlbjogbnVsbCxcclxuICAgIHJlZnJlc2hfdG9rZW46IG51bGxcclxuICB9XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgYXBwQ29uZmlnUGF0aCA9ICdhc3NldHMvanNvbnMvYXBwX2NvbmZpZy5qc29uJztcclxuICBwcml2YXRlIHBhdXNlVG9rZW5SZWZyZXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhcHBDb25mSlNPTkRhdGE6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgbG9nb3V0QWxsVGFiQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBldmVudFJlc3BvbnNlSGFuZGxlcjogRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuaW5pdE9pZGMoKTtcclxuICAgIHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdsb2dvdXRBbGxUYWInKTtcclxuICAgIHRoaXMubGlzdGVuRm9yQ2xlYXJEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbml0T2lkYygpIHtcclxuICAgIHRoaXMuYXBwQ29uZkpTT05EYXRhID0gYXdhaXQgdGhpcy5odHRwLmdldCh0aGlzLmFwcENvbmZpZ1BhdGgpLnRvUHJvbWlzZSgpO1xyXG4gICAgaWYgKHRoaXMuYXBwQ29uZkpTT05EYXRhWydvaWRjX2NvbmZpZyddKSB7XHJcbiAgICAgIGNvbnN0IG9pZGNfY29uZmlnID0gdGhpcy5hcHBDb25mSlNPTkRhdGFbJ29pZGNfY29uZmlnJ107XHJcbiAgICAgIGNvbnN0IG9pZGNDb25maWcgPSB7fTtcclxuICAgICAgb2lkY19jb25maWdbJ2RvbWFpbiddICYmIChvaWRjQ29uZmlnWydpc3N1ZXInXSA9IG9pZGNfY29uZmlnWydkb21haW4nXSk7XHJcbiAgICAgIG9pZGNfY29uZmlnWydjbGllbnRJZCddICYmIChvaWRjQ29uZmlnWydjbGllbnRJZCddID0gb2lkY19jb25maWdbJ2NsaWVudElkJ10pO1xyXG4gICAgICBvaWRjX2NvbmZpZ1snY2xpZW50S2V5J10gJiYgKG9pZGNDb25maWdbJ2R1bW15Q2xpZW50U2VjcmV0J10gPSBvaWRjX2NvbmZpZ1snY2xpZW50S2V5J10pO1xyXG4gICAgICBvaWRjQ29uZmlnWyd1c2VySW5mb0hhbmRsZXInXSA9IG9pZGNfY29uZmlnWyd1c2VySW5mb0hhbmRsZXInXSA/IG9pZGNfY29uZmlnWyd1c2VySW5mb0hhbmRsZXInXSA6IFwidXNlckluZm9cIjtcclxuICAgICAgb2lkY0NvbmZpZ1sncmVkaXJlY3RVcmknXSA9IG9pZGNfY29uZmlnWydyZWRpcmVjdFVyaSddID8gb2lkY19jb25maWdbJ3JlZGlyZWN0VXJpJ10gOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICBvaWRjQ29uZmlnWydyZXNwb25zZVR5cGUnXSA9IG9pZGNfY29uZmlnWydyZXNwb25zZVR5cGUnXSA/IG9pZGNfY29uZmlnWydyZXNwb25zZVR5cGUnXSA6ICdjb2RlJztcclxuICAgICAgb2lkY0NvbmZpZ1snc2NvcGUnXSA9IG9pZGNfY29uZmlnWydzY29wZSddID8gb2lkY19jb25maWdbJ3Njb3BlJ10gOiAnb3BlbmlkIHByb2ZpbGUnO1xyXG4gICAgICAvLyBzZXQgT0F1dGggdG9rZW4gc3RvcmFnZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLnNldFN0b3JhZ2UobG9jYWxTdG9yYWdlKTtcclxuXHJcbiAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLmNvbmZpZ3VyZShvaWRjQ29uZmlnKTtcclxuICAgICAgLy8gdGhpcy5vYXV0aFNlcnZpY2UudG9rZW5WYWxpZGF0aW9uSGFuZGxlciA9IG5ldyBKd2tzVmFsaWRhdGlvbkhhbmRsZXIoKTtcclxuICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENDb25uZWN0X2NvcHknKSAhPT0gbnVsbCl7XHJcbiAgICAgICAgbGV0IGljQXBpRGF0YW5ldyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENDb25uZWN0X2NvcHknKSk7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLm9pZGNBcGlFbWl0dGVyLmVtaXQoaWNBcGlEYXRhbmV3KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblsnZXZlbnRzJ10gPSB0aGlzLm9hdXRoU2VydmljZS5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBPQXV0aEVycm9yRXZlbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGV2ZW50IGlzIHNpbGVudCByZWZyZXNoIGVycm9yIG9yIHRva2VuIHJlZnJlc2ggZXJyb3IgdGhlbiBsb2dvdXQgdGhlIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgICBpZihldmVudC50eXBlID09PSAnc2lsZW50X3JlZnJlc2hfZXJyb3InIHx8IGV2ZW50LnR5cGUgPT09ICd0b2tlbl9yZWZyZXNoX2Vycm9yJyl7XHJcbiAgICAgICAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLmxvZ091dChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ29va2llKCdMYW5kaW5nU3RlcElkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ29va2llKCdwb3N0VXJsJyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbC5wb3N0TWVzc2FnZSgncmVkaXJlY3RUb0xvZ291dFRhYnMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgT0F1dGhTdWNjZXNzRXZlbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0b2tlbl9yZWZyZXNoZWQnOlxyXG4gICAgICAgICAgICBjYXNlICdzaWxlbnRseV9yZWZyZXNoZWQnOlxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0b2tlbl9yZWNlaXZlZCc6XHJcbiAgICAgICAgICAgICAgY29uc3QgaWNBcGlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX09JRENfVXNlcl9JbmZvX0hhbmRsZXInKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9PSURDX1VzZXJfSW5mb19IYW5kbGVyJykgOiAndXNlckluZm8nLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRfc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7fVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAodGhpcy5vYXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9hdXRoU2VydmljZS5zZXR1cEF1dG9tYXRpY1NpbGVudFJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZSh0aGlzLm9hdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmNlaWwoKGRlY29kZWQuZXhwIC0gZGVjb2RlZC5pYXQpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4oJ2FjY2Vzc1Rva2VuJywgdGhpcy5vYXV0aFNlcnZpY2UuZ2V0QWNjZXNzVG9rZW4oKSwgZGF5cywgJ0FDQ0VTU19UT0tFTicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbigncmVmcmVzaFRva2VuJywgdGhpcy5vYXV0aFNlcnZpY2UuZ2V0UmVmcmVzaFRva2VuKCksIGRheXMpO1xyXG4gICAgICAgICAgICAgICAgaWNBcGlEYXRhLnJlc3BvbnNlID0gZGVjb2RlZDtcclxuICAgICAgICAgICAgICAgIGljQXBpRGF0YS5yZXNwb25zZVsnYWNjZXNzVG9rZW4nXSA9IHRoaXMub2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRva2VuIHNldCBvbjogXCIsIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWNBcGlEYXRhLnJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ09JRENDb25uZWN0X2NvcHknLCBKU09OLnN0cmluZ2lmeShpY0FwaURhdGEpKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FsbGluZyAgb2lkY0FwaUVtaXR0ZXIgb246IFwiLCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLm9pZGNBcGlFbWl0dGVyLmVtaXQoaWNBcGlEYXRhKTtcclxuICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9hdXRoU2VydmljZS5sb2FkRGlzY292ZXJ5RG9jdW1lbnRBbmRUcnlMb2dpbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIGZvciBsb2dpbkluUG9wdXAgZXZlbnRcclxuICAgICAgICAvLyBpZiAod2luZG93Lm9wZW5lcikge1xyXG4gICAgICAgIC8vICAgLy8gd2luZG93Lm9wZW5lci5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAvLyAgIC8vIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zdCBpY0FwaURhdGEgPSB7XHJcbiAgICAgICAgLy8gICBoYW5kbGVyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfT0lEQ19Vc2VyX0luZm9fSGFuZGxlcicpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX09JRENfVXNlcl9JbmZvX0hhbmRsZXInKSA6ICd1c2VySW5mbycsXHJcbiAgICAgICAgLy8gICBldmVudF9zdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIC8vICAgcmVzcG9uc2U6IFtdXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm9hdXRoU2VydmljZS5oYXNWYWxpZEFjY2Vzc1Rva2VuKCkpIHtcclxuICAgICAgICAvLyAgIHRoaXMub2F1dGhTZXJ2aWNlLnNldHVwQXV0b21hdGljU2lsZW50UmVmcmVzaCgpO1xyXG4gICAgICAgIC8vICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0RGVjb2RlKHRoaXMub2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCkpO1xyXG4gICAgICAgIC8vICAgY29uc3QgZGF5cyA9IE1hdGguY2VpbCgoZGVjb2RlZC5leHAgLSBkZWNvZGVkLmlhdCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIC8vICAgdGhpcy5zZXRUb2tlbignYWNjZXNzVG9rZW4nLCB0aGlzLm9hdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpLCBkYXlzLCAnQUNDRVNTX1RPS0VOJyk7XHJcbiAgICAgICAgLy8gICB0aGlzLnNldFRva2VuKCdyZWZyZXNoVG9rZW4nLCB0aGlzLm9hdXRoU2VydmljZS5nZXRSZWZyZXNoVG9rZW4oKSwgZGF5cyk7XHJcbiAgICAgICAgLy8gICBpY0FwaURhdGEucmVzcG9uc2UgPSBkZWNvZGVkO1xyXG4gICAgICAgIC8vICAgaWNBcGlEYXRhLnJlc3BvbnNlWydhY2Nlc3NUb2tlbiddID0gdGhpcy5vYXV0aFNlcnZpY2UuZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICBpY0FwaURhdGEucmVzcG9uc2UgPSBudWxsO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0FwaUVtaXR0ZXIuZW1pdChpY0FwaURhdGEpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gdGhpcy5vYXV0aFNlcnZpY2UubG9hZERpc2NvdmVyeURvY3VtZW50KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ0Rpc2NvdmVyeSBkb2N1bWVudCBsb2FkZWQgZnJvbSAud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbicpO1xyXG4gICAgICAvLyAgIC8vIE5vdyB0cnkgbG9naW5cclxuICAgICAgLy8gICByZXR1cm4gdGhpcy5vYXV0aFNlcnZpY2UudHJ5TG9naW4oKTtcclxuICAgICAgLy8gfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ0xvZ2luIGF0dGVtcHQgY29tcGxldGVkJyk7XHJcbiAgICAgIC8vIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGRpc2NvdmVyeSBvciBsb2dpbiBwcm9jZXNzOicsIGVycm9yKTtcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm9hdXRoU2VydmljZS5zZXR1cEF1dG9tYXRpY1NpbGVudFJlZnJlc2goKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gdGhhdCBjcmVhdGUgdG9rZW4gb2JqZWN0XHJcbiAgICogQHBhcmFtIHR5cGUgPSBhY2Nlc3NfdG9rZW4gLyByZWZyZXNoX3Rva2VuXHJcbiAgICovXHJcbiAgZ2VuZXJhdGVUb2tlbih0eXBlOiBzdHJpbmcpIHtcclxuICAgIGxldCB0b2tlblN0cjogYW55ID0gbnVsbDtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdhY2Nlc3NfdG9rZW4nOlxyXG4gICAgICAgIHRva2VuU3RyID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9Ub2tlbicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyZWZyZXNoX3Rva2VuJzpcclxuICAgICAgICB0b2tlblN0ciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfUmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbkFycjogQXJyYXk8YW55PiA9ICh0b2tlblN0cikgPyB0b2tlblN0ci5zcGxpdCgnLCcpLm1hcCgodG9rZW5BcGlLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlbktleUFyciA9IHRva2VuQXBpS2V5LnNwbGl0KCcjIycpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbmRsZXI6IHRva2VuS2V5QXJyWzBdLFxyXG4gICAgICAgIGFwaUtleTogdG9rZW5LZXlBcnJbMV1cclxuICAgICAgfTtcclxuICAgIH0pIDogW107XHJcbiAgICByZXR1cm4gdG9rZW5BcnI7XHJcbiAgfVxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvblsnYXBpSW50ZWdyYXRpb25FbWl0dGVyJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0RhdGFFbWl0dGVyLnN1YnNjcmliZShhcGlDb25maWdEYXRhID0+IHtcclxuICAgICAgdGhpcy50b2tlbi5hY2Nlc3NfdG9rZW4gPSB0aGlzLmdlbmVyYXRlVG9rZW4oJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgICB0aGlzLnRva2VuLnJlZnJlc2hfdG9rZW4gPSB0aGlzLmdlbmVyYXRlVG9rZW4oJ3JlZnJlc2hfdG9rZW4nKTtcclxuXHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuSGFuZGxlck9iaiA9IHRoaXMudG9rZW4uYWNjZXNzX3Rva2VuLmZpbmQoaSA9PiBpLmhhbmRsZXIgPT09IGFwaUNvbmZpZ0RhdGEuaGFuZGxlcik7XHJcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbkhhbmRsZXJPYmogPSB0aGlzLnRva2VuLnJlZnJlc2hfdG9rZW4uZmluZChpID0+IGkuaGFuZGxlciA9PT0gYXBpQ29uZmlnRGF0YS5oYW5kbGVyKTtcclxuICAgICAgdGhpcy5hY2Nlc3NUb2tlbktleSA9IGFjY2Vzc1Rva2VuSGFuZGxlck9iaiA/IGFjY2Vzc1Rva2VuSGFuZGxlck9iai5hcGlLZXkgOiBudWxsO1xyXG4gICAgICB0aGlzLnJlZnJlc2hUb2tlbktleSA9IHJlZnJlc2hUb2tlbkhhbmRsZXJPYmogPyByZWZyZXNoVG9rZW5IYW5kbGVyT2JqLmFwaUtleSA6IG51bGw7XHJcblxyXG4gICAgICAvLyBjb25zdCBDRUVfQUNDRVNTX1RPS0VOID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9Ub2tlbicpO1xyXG4gICAgICAvLyBjb25zdCBDRUVfUkVGUkVTSF9UT0tFTiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfUmVmcmVzaFRva2VuJyk7XHJcbiAgICAgIC8vIGNvbnN0IGFjY2Vzc1Rva2VuSGFuZGxlciA9IENFRV9BQ0NFU1NfVE9LRU4gPyBDRUVfQUNDRVNTX1RPS0VOLnNwbGl0KCcjIycpWzBdIDogdW5kZWZpbmVkO1xyXG4gICAgICAvLyB0aGlzLmFjY2Vzc1Rva2VuS2V5ID0gQ0VFX0FDQ0VTU19UT0tFTiA/IENFRV9BQ0NFU1NfVE9LRU4uc3BsaXQoJyMjJylbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgIC8vIGNvbnN0IHJlZnJlc2hUb2tlbktleSA9IENFRV9SRUZSRVNIX1RPS0VOID8gQ0VFX1JFRlJFU0hfVE9LRU4uc3BsaXQoJyMjJylbMV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmV0dXJuUmVzcG9uc2UoYXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRhIG1hdGNoZXMgd2l0aCB0aGUgYWNjZXNzX3Rva2VuIGhhbmRsZXJcclxuICAgICAgaWYgKGFjY2Vzc1Rva2VuSGFuZGxlck9iaikge1xyXG4gICAgICAgIC8vIHRoZW4gaGl0IHRoZSBhcGkgYW5kIGdldCB0aGUgYWNjZXNzX3Rva2VuIGFuZCByZWZyZXNoIHRva2VuIGFuZCByZXR1cm5cclxuICAgICAgICAvLyBjZWVfc3ViIGFuZCBjZWVfcHJuXHJcbiAgICAgICAgdGhpcy5jZWVBcGlTZXJ2aWNlKGFwaUNvbmZpZ0RhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAqL1xyXG4gICAgICAgICAgaWYgKGFwaUNvbmZpZ0RhdGEuaXNFU0IgJiYgcmVzLmJvZHkuYXBpX3Jlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlcy5ib2R5ID0gSlNPTi5wYXJzZShyZXMuYm9keS5hcGlfcmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAoRU5EKSAqL1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIGlmIChyZXMuYm9keSkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVkUmVzcG9uc2UgPSB7fTtcclxuICAgICAgICAgICAgaWYgKHJlcy5ib2R5W3RoaXMuYWNjZXNzVG9rZW5LZXldICYmIHJlcy5ib2R5W3RoaXMucmVmcmVzaFRva2VuS2V5XSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZShyZXMuYm9keVt0aGlzLmFjY2Vzc1Rva2VuS2V5XSk7XHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBjZWVfc3ViOiBkZWNvZGVkLnN1YixcclxuICAgICAgICAgICAgICAgIGNlZV9wcm46IGRlY29kZWQucHJuXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5jZWlsKChkZWNvZGVkLmV4cCAtIGRlY29kZWQuaWF0KSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF5cyk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbignYWNjZXNzVG9rZW4nLCByZXMuYm9keVt0aGlzLmFjY2Vzc1Rva2VuS2V5XSwgZGF5cywgJ0FDQ0VTU19UT0tFTicpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4oJ3JlZnJlc2hUb2tlbicsIHJlcy5ib2R5W3RoaXMucmVmcmVzaFRva2VuS2V5XSwgZGF5cyk7XHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzcG9uc2UgPSB7IC4uLmRlY29kZWQucGF5bG9hZCwgLi4uZm9ybWF0dGVkUmVzcG9uc2UsIC4uLnJlcy5ib2R5IH07XHJcbiAgICAgICAgICAgICAgZGVsZXRlIGZvcm1hdHRlZFJlc3BvbnNlW3RoaXMuYWNjZXNzVG9rZW5LZXldO1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRSZXNwb25zZVt0aGlzLnJlZnJlc2hUb2tlbktleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzcG9uc2UgPSB7IC4uLnJlcy5ib2R5IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgKGFwaUNvbmZpZ0RhdGEuYXV0aG9yaXNlUGFyYW1zKSB7XHJcbiAgICAgICAgICAgIC8vICAgYXBpQ29uZmlnRGF0YS5hdXRob3Jpc2VQYXJhbXMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZm9ybWF0dGVkUmVzcG9uc2VbaV0gPSByZXMuYm9keVtpXTtcclxuICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXREYXRhVG9DZWUocmVzcG9uc2UsIHsgc3RhdHVzOiAyMDAsIGJvZHk6IGZvcm1hdHRlZFJlc3BvbnNlIH0sIGFwaUNvbmZpZ0RhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgc3RlcCBpZiB0aGUgc2Vzc2lvbiBoYXMgYSBmYWlsZWQgc3RlcFxyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5sYXN0U3RlcE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RlcCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoYXRvYihzdGVwKSk7XHJcbiAgICAgICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sYXN0U3RlcE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCB0aGUgcmVzcG9uc2VgKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RGF0YVRvQ2VlKHJlc3BvbnNlLCB7IHN0YXR1czogNDAwLCBlcnJvcjoge30gfSwgYXBpQ29uZmlnRGF0YSwgZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgbG9naW4gYXBpIGZhaWxzIHRoZSByZXR1cm4gc3RhdHVzIGZhbHNlIGFuZCBsb2dvdXQgc3RhdHVzIGZhbHNlXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGlsZSBsb2dnaW5nICwgJHtKU09OLnN0cmluZ2lmeShlcnIpfWApO1xyXG4gICAgICAgICAgdGhpcy5lbWl0RGF0YVRvQ2VlKHJlc3BvbnNlLCBlcnIsIGFwaUNvbmZpZ0RhdGEsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChhcGlDb25maWdEYXRhLmhhc0F1dGhvcmlzYXRpb24gPT0gdHJ1ZSkgeyAvLyA9PSBiZWNhdXNlIGl0IGNvbWVzIGFzIHRydWUgb3IgJ3RydWUnXHJcbiAgICAgICAgLy8gaWYgYW4gYXBpIGhhcyBhdXRob3JpemF0aW9uIHRydWUgdGhlbiBhZGQgQXV0aG9yaXphdGlvbjogQmVhcmVyIGFjY2VzcyB0b2tlbiBhcyBoZWFkZXIgcGFyYW1zXHJcbiAgICAgICAgLy8gdmFsaWRhdGUgdGhlIHRva2VuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUFjY2Vzc1Rva2VuKGFwaUNvbmZpZ0RhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW1pdCB0aGUgQXBpIEludGVncmF0aW9uIEhhbmRsZXIgRW1pdHRlclwiKTtcclxuICAgICAgICB0aGlzLmVtaXREYXRhQmFzZWRPbkFQSVR5cGUoYXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uWydyZWZyZXNodG9rZW4nXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5hcGlVbmF1dGhvcml6ZWRFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbihyZXMub2xkQXBpQ29uZmlnRGF0YSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uWydvaWRjRXZlbnRFbWl0dGVyJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0V2ZW50RW1pdHRlci5zdWJzY3JpYmUoaGFuZGxlciA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdPSURDQ29ubmVjdCcsIGhhbmRsZXIuZXZlbnRfaGFuZGxlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgc3dpdGNoIChoYW5kbGVyLmV2ZW50X2hhbmRsZXIudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcclxuICAgICAgICAgIHRoaXMuY2xlYXJBbGxDb29raWUoKTtcclxuICAgICAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLmluaXRMb2dpbkZsb3coKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xvZ2luaW5wb3B1cCc6XHJcbiAgICAgICAgICB0aGlzLmNsZWFyQWxsQ29va2llKCk7XHJcbiAgICAgICAgICB0aGlzLm9hdXRoU2VydmljZS5pbml0TG9naW5GbG93SW5Qb3B1cCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbG9nb3V0JzpcclxuICAgICAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLmxvZ091dChmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUNvb2tpZSgnTGFuZGluZ1N0ZXBJZCcpO1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVDb29raWUoJ3Bvc3RVcmwnKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiT0lEQ0Nvbm5lY3RfY29weVwiKTtcclxuICAgICAgICAgIHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbC5wb3N0TWVzc2FnZSgncmVkaXJlY3RUb0xvZ291dFRhYnMnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NoZWNrbG9naW5zdGF0dXMnOlxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2dpblN0YXRlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpbicpO1xyXG4gICAgICAgICAgICAgICAgbG9naW5TdGF0ZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCBTZXQgVXNlciBJbmZvICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljQXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX09JRENfVXNlcl9JbmZvX0hhbmRsZXInKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9PSURDX1VzZXJfSW5mb19IYW5kbGVyJykgOiAndXNlckluZm8nLFxyXG4gICAgICAgICAgICAgICAgICBldmVudF9zdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZToge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLnNldHVwQXV0b21hdGljU2lsZW50UmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0RGVjb2RlKHRoaXMub2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguY2VpbCgoZGVjb2RlZC5leHAgLSBkZWNvZGVkLmlhdCkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbignYWNjZXNzVG9rZW4nLCB0aGlzLm9hdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpLCBkYXlzLCAnQUNDRVNTX1RPS0VOJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKCdyZWZyZXNoVG9rZW4nLCB0aGlzLm9hdXRoU2VydmljZS5nZXRSZWZyZXNoVG9rZW4oKSwgZGF5cyk7XHJcbiAgICAgICAgICAgICAgICBpY0FwaURhdGEucmVzcG9uc2UgPSBkZWNvZGVkO1xyXG4gICAgICAgICAgICAgICAgaWNBcGlEYXRhLnJlc3BvbnNlWydhY2Nlc3NUb2tlbiddID0gdGhpcy5vYXV0aFNlcnZpY2UuZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG9rZW4gc2V0IG9uOiBcIiwgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdPSURDQ29ubmVjdF9jb3B5JywgSlNPTi5zdHJpbmdpZnkoaWNBcGlEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYWxsaW5nICBvaWRjQXBpRW1pdHRlciBvbjogXCIsIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5vaWRjQXBpRW1pdHRlci5lbWl0KGljQXBpRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgLy8gJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkIFNldCBVc2VyIEluZm8gRW5kcyAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc09iaiA9IHtcclxuICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgIGxvZ2luU3RhdHVzOiBsb2dpblN0YXRlRmxhZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5vaWRjQ2hlY2tMb2dpblN0YXR1c0VtaXR0ZXIuZW1pdChyZXNPYmopO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gdGhhdCBlbWl0cyBkYXRhIGJhc2VkIG9uIEFQSSBUeXBlXHJcbiAgICogZGVjbGFyZWQgaW4gQVBJIENvbmZpZ1xyXG4gICAqIEBwYXJhbSBhcGlDb25maWdEYXRhIHRoZSBhcGkgY29uZmlnIERhdGEgT2JqZWN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlbWl0RGF0YUJhc2VkT25BUElUeXBlKGFwaUNvbmZpZ0RhdGEpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVBJX1RZUEUnKS50b0xvd2VyQ2FzZSgpID09PSAnaW50ZXJuYWwnKSB7XHJcbiAgICAgIGlmIChhcGlDb25maWdEYXRhLmVtaXRUb2tlbikge1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5hcGlDb25maWdUb2tlbkVtaXR0ZXIuZW1pdChhcGlDb25maWdEYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuYXBpSW50ZWdyYXRpb25FdmVudEhhbmRsZXJFbWl0dGVyLmVtaXQoYXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgdXJsUGFyYW1zLCBoZWFkZXJzLCBxdWVyeVBhcmFtcywgcmVxdWVzdEJvZHksIGlzRXZlbnQgfSA9IGFwaUNvbmZpZ0RhdGE7XHJcbiAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudEhhbmRsZXJFbWl0dGVyLmVtaXQoeyBoYW5kbGVyLCB1cmxQYXJhbXMsIGhlYWRlcnMsIHF1ZXJ5UGFyYW1zLCByZXF1ZXN0Qm9keSwgaXNFdmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV0dXJuUmVzcG9uc2UoYXBpQ29uZmlnRGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFuZGxlcjogYXBpQ29uZmlnRGF0YS5oYW5kbGVyLFxyXG4gICAgICByZXNwb25zZTogbnVsbCxcclxuICAgICAgZXZlbnRfc3VjY2VzczogdHJ1ZSxcclxuICAgICAgc3RvcmFnZVR5cGU6IGFwaUNvbmZpZ0RhdGEuc3RvcmFnZVR5cGUsXHJcbiAgICAgIHN0YXR1c0NvZGU6IDAsXHJcbiAgICAgIGxvZ291dDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiB0aGF0IGNoZWNrcyBhY2Nlc3MgdG9rZW4gdmFsaWRpdHlcclxuICBwcml2YXRlIHZhbGlkYXRlQWNjZXNzVG9rZW4oYXBpQ29uZmlnRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB0aGlzLnJldHVybkFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZShhY2Nlc3NUb2tlbik7XHJcbiAgICAgIGFwaUNvbmZpZ0RhdGEuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2FjY2Vzc1Rva2VufWA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWQuZXhwLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgKChkZWNvZGVkLmV4cCAqIDEwMDApIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpKTtcclxuICAgICAgY29uc3QgYnVmZmVyVGltZSA9IHRoaXMuYXBwQ29uZkpTT05EYXRhWydyZWZyZXNoVG9rZW5CdWZmZXInXSA/IE51bWJlcih0aGlzLmFwcENvbmZKU09ORGF0YVsncmVmcmVzaFRva2VuQnVmZmVyJ10pIDogNTAwMDtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJidWZmZXJUaW1lOiBcIiwgYnVmZmVyVGltZSlcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBleHA6IFwiLCBkZWNvZGVkLmV4cCAqIDEwMDApXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiNSBzZWMgYmVmb3JlIGV4cDogXCIsIChkZWNvZGVkLmV4cCAqIDEwMDApLWJ1ZmZlclRpbWUpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGltZSBub3c6IFwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJDb25kaXRpb246IFwiLCAoKGRlY29kZWQuZXhwICogMTAwMCktYnVmZmVyVGltZSksXCIgPCBcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xyXG4gICAgICAvLyBpZiAoZGVjb2RlZC5leHAgPD0gTnVtYmVyKG1vbWVudChuZXcgRGF0ZSgpLmdldFRpbWUoKSkuZm9ybWF0KCdYJykpKSB7XHJcbiAgICAgIGlmICgoKGRlY29kZWQuZXhwICogMTAwMCktYnVmZmVyVGltZSkgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5wYXVzZVRva2VuUmVmcmVzaCkge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5SZWZyZXNoQnVmZmVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VUb2tlblJlZnJlc2gpIHtcclxuICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQWNjZXNzVG9rZW4oYXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0b2tlblJlZnJlc2hCdWZmZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQVBJIGNhbGwgd2FpdGluZyBmb3IgdmFsaWQgYWNjZXNzIHRva2VuIC4uLicpICAgICAgICAgICBcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hBY2Nlc3NUb2tlbihhcGlDb25maWdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgaGFuZGxlciBuYW1lIG1hdGNoZXMgdGhlIGxvZ291dCBoYW5kbGVyXHJcbiAgICAgICAgaWYgKGFwaUNvbmZpZ0RhdGEuaGFuZGxlciA9PT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENfTE9HT1VUX0hBTkRMRVInKSkge1xyXG4gICAgICAgICAgdGhpcy5sb2dPdXQoYXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW1pdERhdGFCYXNlZE9uQVBJVHlwZShhcGlDb25maWdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIEFjY2VzcyBUb2tlbiBGb3VuZCAke0pTT04uc3RyaW5naWZ5KGVycm9yKX0gZm9yIGhhbmRsZXIgWyR7YXBpQ29uZmlnRGF0YS5oYW5kbGVyfV1gKTtcclxuICAgICAgLy8gdGhpcy5lbWl0RGF0YUJhc2VkT25BUElUeXBlKGFwaUNvbmZpZ0RhdGEpO1xyXG4gICAgICAvLyBzYXZlIHRoZSB1c2VyIHN0ZXAgYW5kIG9uIGxvZ2luIG5hdmlnYXRlIHRvIHRoYXQgc3RlcFxyXG4gICAgICAvLyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxhc3RTdGVwTmFtZSwgYnRvYSh0aGlzLnJvdXRlci51cmwpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnJldHVyblJlc3BvbnNlKGFwaUNvbmZpZ0RhdGEpO1xyXG4gICAgICAvLyByZXNwb25zZS5sb2dvdXQgPSB0cnVlO1xyXG4gICAgICAvLyB0aGlzLmNsZWFyQWxsQ29va2llKCk7XHJcbiAgICAgIC8vIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgeyBzdGF0dXM6IDQwMywgZXJyb3I6IHt9IH0sIGFwaUNvbmZpZ0RhdGEuaXNFdmVudCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNhdmVTdGVwQW5kUmVkaXJlY3RUb0xvZ2luKHJlc3BvbnNlLCB7IHN0YXR1czogNDAzLCBlcnJvcjoge30gfSwgYXBpQ29uZmlnRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0VVJMKHVybCkge1xyXG4gICAgY29uc3QgZHluYW1pY1BhdGggPSB1cmwubWF0Y2gobmV3IFJlZ0V4cCgvXFwkXFx7KC4qPylcXH0vZykpO1xyXG4gICAgaWYgKGR5bmFtaWNQYXRoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXRoIG9mIGR5bmFtaWNQYXRoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHA6IGFueSA9IHBhdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoUGF0aCA9IHAubWF0Y2gobmV3IFJlZ0V4cCgvXFx3Ky9nKSk7XHJcbiAgICAgICAgICAgIGxldCBhcGlQYXRoID0gcDtcclxuICAgICAgICAgICAgaWYgKG1hdGNoUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgYXBpUGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG1hdGNoUGF0aFswXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaVBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlQYXRoID0gbWF0Y2hQYXRoWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVmFyaWFibGUgJHttYXRjaFBhdGhbMF19IGlzIG5vdCBkZWNsYXJlZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zcGxpdChwYXRoKS5qb2luKGFwaVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG4gIHByaXZhdGUgcmVmcmVzaEFjY2Vzc1Rva2VuKG9sZEFwaUNvbmZpZ0RhdGEpIHtcclxuICAgIHRoaXMucGF1c2VUb2tlblJlZnJlc2ggPSB0cnVlO1xyXG4gICAgLy8gaWYgdGhlIHRva2VuIGV4cGlyZWQgdGhlbiByZWZyZXNoIHRoZSB0b2tlbiBhbmQgc3RvcmUgdGhlIG5ldyB0b2tlbiBhbmQgZW1pdCBpdCB0b1xyXG4gICAgLy8gYXBpIGludGVncmF0aW9uIGVtaXR0ZXJcclxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbkhhbmRsZXJIYW5kbGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ09JRENfUkVGUkVTSF9BQ0NFU1NfVE9LRU5fSEFORExFUicpO1xyXG4gICAgY29uc3QgYXBpQ29uZmlnOiBhbnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBUElfQ09ORklHJykpO1xyXG4gICAgY29uc3QgYXBpQ29uZmlnT2JqZWN0OiBhbnkgPSBhcGlDb25maWdbcmVmcmVzaFRva2VuSGFuZGxlckhhbmRsZXJdO1xyXG5cclxuICAgIHRoaXMudG9rZW4uYWNjZXNzX3Rva2VuID0gdGhpcy5nZW5lcmF0ZVRva2VuKCdhY2Nlc3NfdG9rZW4nKTtcclxuXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkhhbmRsZXJPYmogPSB0aGlzLnRva2VuLmFjY2Vzc190b2tlbi5maW5kKCBpID0+IGkuaGFuZGxlciA9PT0gYXBpQ29uZmlnT2JqZWN0LmlkKTtcclxuICAgIHRoaXMuYWNjZXNzVG9rZW5LZXkgPSBhY2Nlc3NUb2tlbkhhbmRsZXJPYmogPyBhY2Nlc3NUb2tlbkhhbmRsZXJPYmouYXBpS2V5IDogbnVsbDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmV0dXJuUmVzcG9uc2Uob2xkQXBpQ29uZmlnRGF0YSk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgcmVmcmVzaCB0b2tlbiBoYW5kbGVyIG5vdCBwcmVzZW50XHJcbiAgICAvLyB0aGVuIG5hdmlnYXRlIHRoZSB1c2VyIHRvIHRoZSBsb2dpbiBzdGVwXHJcbiAgICBpZiAoIWFwaUNvbmZpZ09iamVjdCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBObyBSZWZyZXNoIFRva2VuIEhhbmRsZXIgTWFwcGluZyBGb3VuZC4gTG9nZ2luZyBvdXQgLi4uLmApO1xyXG4gICAgICB0aGlzLnNhdmVTdGVwQW5kUmVkaXJlY3RUb0xvZ2luKHJlc3BvbnNlLCB7IHN0YXR1czogNDAzLCBlcnJvcjoge30gfSwgb2xkQXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlblJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMuZ2V0Q29va2llKCdyZWZyZXNoVG9rZW4nKSxcclxuICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbidcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGludGVybmFsQVBJQ29uZmlnID0ge1xyXG4gICAgICAgIGhhbmRsZXI6IGFwaUNvbmZpZ09iamVjdC5oYW5kbGVyLFxyXG4gICAgICAgIHVybFBhcmFtczoge30sXHJcbiAgICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHt9LFxyXG4gICAgICAgIHJlcXVlc3RCb2R5OiByZWZyZXNoVG9rZW5SZXF1ZXN0Qm9keSxcclxuICAgICAgICB1cmw6IHRoaXMuZ2V0VVJMKCBhcGlDb25maWdPYmplY3QudXJsKSxcclxuICAgICAgICBtZXRob2RUeXBlOiBhcGlDb25maWdPYmplY3QubWV0aG9kVHlwZSxcclxuICAgICAgICByZXF1ZXN0VHlwZTogYXBpQ29uZmlnT2JqZWN0LnJlcXVlc3RUeXBlXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gdGhpcy5hY2Nlc3NUb2tlbktleTtcclxuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICB0aGlzLmNlZUFwaVNlcnZpY2UoaW50ZXJuYWxBUElDb25maWcpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OICovXHJcbiAgICAgICAgaWYgKGFwaUNvbmZpZ09iamVjdC5pc0VTQiAmJiByZXMuYm9keS5hcGlfcmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJlcy5ib2R5ID0gSlNPTi5wYXJzZShyZXMuYm9keS5hcGlfcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OIChFTkQpICovXHJcbiAgICAgICAgaWYgKHJlcy5ib2R5ICYmIHJlcy5ib2R5W2FjY2Vzc1Rva2VuS2V5XSkge1xyXG4gICAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0RGVjb2RlKHJlcy5ib2R5W2FjY2Vzc1Rva2VuS2V5XSk7XHJcbiAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5jZWlsKChkZWNvZGVkLmV4cCAtIGRlY29kZWQuaWF0KSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlzKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWQpO1xyXG4gICAgICAgICAgX3RoaXMuc2V0VG9rZW4oJ2FjY2Vzc1Rva2VuJywgcmVzLmJvZHlbYWNjZXNzVG9rZW5LZXldLCBkYXlzLCAnQUNDRVNTX1RPS0VOJyk7XHJcbiAgICAgICAgICBvbGRBcGlDb25maWdEYXRhLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtyZXMuYm9keVthY2Nlc3NUb2tlbktleV19YDtcclxuICAgICAgICAgIF90aGlzLmVtaXREYXRhQmFzZWRPbkFQSVR5cGUob2xkQXBpQ29uZmlnRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgUmVmcmVzaGluZyBBY2Nlc3MgVG9rZW4gVW5zdWNjZXNzZnVsICR7SlNPTi5zdHJpbmdpZnkocmVzKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMucGF1c2VUb2tlblJlZnJlc2ggPSBmYWxzZTtcclxuICAgICAgfSwgZXJyID0+IHsgICAgICAgIFxyXG4gICAgICAgIF90aGlzLnBhdXNlVG9rZW5SZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUmVmcmVzaGluZyBBY2Nlc3MgVG9rZW4gVW5zdWNjZXNzZnVsICR7SlNPTi5zdHJpbmdpZnkoZXJyKX1gKTtcclxuICAgICAgICAvLyBzYXZlIHRoZSB1c2VyIHN0ZXAgYW5kIG9uIGxvZ2luIG5hdmlnYXRlIHRvIHRoYXQgc3RlcFxyXG4gICAgICAgIC8vIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMubGFzdFN0ZXBOYW1lLCBidG9hKHRoaXMucm91dGVyLnVybCkpO1xyXG4gICAgICAgIC8vIHJlc3BvbnNlLmxvZ291dCA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5jbGVhckFsbENvb2tpZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgZXJyLCBvbGRBcGlDb25maWdEYXRhLmlzRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICBfdGhpcy5zYXZlU3RlcEFuZFJlZGlyZWN0VG9Mb2dpbihyZXNwb25zZSwgZXJyLCBvbGRBcGlDb25maWdEYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvZ091dChhcGlDb25maWdEYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmV0dXJuUmVzcG9uc2UoYXBpQ29uZmlnRGF0YSk7XHJcbiAgICB0aGlzLmNlZUFwaVNlcnZpY2UoYXBpQ29uZmlnRGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBMb2cgT3V0IFN1Y2Nlc3NmdWxgKTtcclxuICAgICAgcmVzcG9uc2UubG9nb3V0ID0gdHJ1ZTtcclxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5sYXN0U3RlcE5hbWUpO1xyXG4gICAgICB0aGlzLmNsZWFyQWxsQ29va2llKCk7XHJcbiAgICAgIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgcmVzLCBhcGlDb25maWdEYXRhLCB0cnVlKTtcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYExvZyBPdXQgVW5zdWNjZXNzZnVsLCAke0pTT04uc3RyaW5naWZ5KGVycil9YCk7XHJcbiAgICAgIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgZXJyLCBhcGlDb25maWdEYXRhLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZVN0ZXBBbmRSZWRpcmVjdFRvTG9naW4ocmVzcG9uc2UsIGVyciwgYXBpQ29uZmlnRGF0YSkge1xyXG4gICAgLy8gc2F2ZSB0aGUgdXNlciBzdGVwIGFuZCBvbiBsb2dpbiBuYXZpZ2F0ZSB0byB0aGF0IHN0ZXBcclxuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMubGFzdFN0ZXBOYW1lLCBidG9hKHRoaXMucm91dGVyLnVybCkpO1xyXG4gICAgcmVzcG9uc2UubG9nb3V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xlYXJBbGxDb29raWUoKTtcclxuICAgIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgZXJyLCBhcGlDb25maWdEYXRhLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldHVybkFjY2Vzc1Rva2VuKCkge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBgJHt0aGlzLmdldENvb2tpZSgnaGVhZGVyUGF5bG9hZCcpfS4ke3RoaXMuZ2V0Q29va2llKCdzaWduYXR1cmUnKX1gXHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmdW5jdGlvbiB0aGF0IGVtaXRzIGJhY2sgdGhlIGFwaSByZXNwb25zZSBmb3IgYSBwYXJ0aWN1bGFyIGFwaVxyXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICogQHBhcmFtIHJlcyB0aGUgcmVzcG9uc2VcclxuICAgKiBAcGFyYW0gYXBpQ29uZmlnRGF0YSBhcGljb25maWdyYXRpb24gb2JqZWN0XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3MgaWYgdGhlIGFwaSByZXMgaXMgc3VjY2Vzc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZW1pdERhdGFUb0NlZShyZXNwb25zZSwgcmVzLCBhcGlDb25maWdEYXRhLCBzdWNjZXNzKSB7XHJcbiAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gcmVzLnN0YXR1cztcclxuICAgIHJlc3BvbnNlLnJlc3BvbnNlID0gcmVzLmJvZHkgfHwgcmVzLmVycm9yO1xyXG4gICAgcmVzcG9uc2UuZXZlbnRfc3VjY2VzcyA9IHN1Y2Nlc3M7XHJcbiAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OICovXHJcbiAgICBpZiAoYXBpQ29uZmlnRGF0YS5pc0VTQiAmJiByZXNwb25zZS5yZXNwb25zZS5hcGlfcmVzcG9uc2UpIHtcclxuICAgICAgcmVzcG9uc2UucmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlLnJlc3BvbnNlLmFwaV9yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OIChFTkQpICovXHJcbiAgICBpZiAoYXBpQ29uZmlnRGF0YS5pc0V2ZW50KSB7XHJcbiAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudFJlc3BvbnNlU3Vic2NyaWJlci5lbWl0KHJlc3BvbnNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXZlbnRSZXNwb25zZUhhbmRsZXIuZW1pdEFQSURBVEEocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gIC8vIENvZGUgRnJvbSBDRUUgQVBJIEludGVncmF0aW9uIExpYnJhcnlcclxuICAvLyBzbyB0aGF0IE9JREMgTGlicmFyeSBzZW5kcyBodHRwIHJlcXVlc3RzXHJcbiAgLy8gaW5kZXBlbmRlbnRseVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICAvKipcclxuICAgKiBDRUUgaW50ZXJuYWwgQVBJIFNlcnZpY2UgdGhhdCBoaXRzIHRoZSBhcGlcclxuICAgKiBAcGFyYW0gYXBpQ29uZmlnRGF0YSB0aGUgYXBpIGNvbmZpZyBkYXRhIGZvciB0aGUgaGFuZGxlclxyXG4gICAqIHZpYSBpbnRlcm5hbCBsaWJyYXJpZXMgb2YgQ0VFXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjZWVBcGlTZXJ2aWNlKGFwaUNvbmZpZ0RhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGhlYWRlcnMgPSBhcGlDb25maWdEYXRhLmhlYWRlcnM7XHJcbiAgICAvLyBzZXQgaGVhZGVyIHJlcXVlc3QgdHlwZVxyXG4gICAgc3dpdGNoIChhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxyXG4gICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcclxuICAgICAgY2FzZSAndGV4dC9wbGFpbic6XHJcbiAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgcmVxdWVzdCB0eXBlIGluIHJldHVybkhlYWRlcnM6ICR7YXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXBpVVJMID0gYXBpQ29uZmlnRGF0YS51cmw7XHJcblxyXG4gICAgLy8gc2V0IHVybCBwYXJhbVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS51cmxQYXJhbXMpKSB7XHJcbiAgICAgIGlmIChhcGlVUkwuaW5jbHVkZXMoYHske2tleX19YCkpIHtcclxuICAgICAgICBhcGlVUkwgPSBhcGlVUkwuc3BsaXQoYHske2tleX19YCkuam9pbihhcGlDb25maWdEYXRhLnVybFBhcmFtc1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBxdWVyeSBwYXJhbVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS5xdWVyeVBhcmFtcykpIHtcclxuICAgICAgaWYgKGFwaVVSTC5pbmNsdWRlcyhgeyR7a2V5fX1gKSkge1xyXG4gICAgICAgIGFwaVVSTCA9IGFwaVVSTC5zcGxpdChgeyR7a2V5fX1gKS5qb2luKGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgcmVxdWVzdCBib2R5XHJcbiAgICBsZXQgcmVxdWVzdEJvZHkgPSB0aGlzLmZvcm1SZXF1ZXN0Qm9keShhcGlDb25maWdEYXRhLnJlcXVlc3RCb2R5LCBhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlKTtcclxuICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKi9cclxuICAgIGlmIChhcGlDb25maWdEYXRhLmlzRVNCKSB7XHJcbiAgICAgIHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICAgIGFwaV9yZXF1ZXN0OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKEVORCkgKi9cclxuICAgIHN3aXRjaCAoYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgIGNhc2UgJ1BBVENIJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwW2FwaUNvbmZpZ0RhdGEubWV0aG9kVHlwZS50b0xvd2VyQ2FzZSgpXShcclxuICAgICAgICAgIGFwaVVSTCxcclxuICAgICAgICAgIHJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgeyBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBbYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgICAgYXBpVVJMLFxyXG4gICAgICAgICAgeyBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtUmVxdWVzdEJvZHkocmVxdWVzdERhdGE6IGFueSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAndGV4dC9wbGFpbic6XHJcbiAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcclxuICAgICAgY2FzZSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc6XHJcbiAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXF1ZXN0RGF0YSkpIHtcclxuICAgICAgICAgIGZkLmFwcGVuZChrZXksIHJlcXVlc3REYXRhW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmQ7XHJcbiAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6XHJcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXF1ZXN0RGF0YSkpIHtcclxuICAgICAgICAgIGJvZHkuc2V0KGtleSwgcmVxdWVzdERhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5LnRvU3RyaW5nKCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCByZXF1ZXN0IHR5cGUgaW4gZm9ybVJlcXVlc3RCb2R5OiAke3R5cGV9YCk7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAvLyBGdW5jdGlvbnMgdG8gc2V0IHRoZSBjb29raWUgZGF0YVxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIHByaXZhdGUgY2xlYXJBbGxDb29raWUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVDb29raWUoJ2hlYWRlclBheWxvYWQnKTtcclxuICAgIHRoaXMuZGVsZXRlQ29va2llKCdzaWduYXR1cmUnKTtcclxuICAgIHRoaXMuZGVsZXRlQ29va2llKCdyZWZyZXNoVG9rZW4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VG9rZW4obmFtZSwgdmFsdWUsIGRheXMsIHR5cGU/KSB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ0FDQ0VTU19UT0tFTicpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB2YWx1ZS5zcGxpdCgnLicpO1xyXG4gICAgICB0aGlzLmRlbGV0ZUNvb2tpZSgnaGVhZGVyUGF5bG9hZCcpO1xyXG4gICAgICB0aGlzLmRlbGV0ZUNvb2tpZSgnc2lnbmF0dXJlJyk7XHJcbiAgICAgIHRoaXMuc2V0Q29va2llKCdoZWFkZXJQYXlsb2FkJywgYCR7dG9rZW5bMF19LiR7dG9rZW5bMV19YCwgZGF5cywgJy8nKTtcclxuICAgICAgdGhpcy5zZXRDb29raWUoJ3NpZ25hdHVyZScsIGAke3Rva2VuWzJdfWAsIGRheXMsICcvJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlbGV0ZUNvb2tpZShuYW1lKTtcclxuICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMsICcvJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBjb25zdCBjYUxlbjogbnVtYmVyID0gY2EubGVuZ3RoO1xyXG4gICAgY29uc3QgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgJycpO1xyXG4gICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgIHRoaXMuc2V0Q29va2llKG5hbWUsICcnLCAtMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZURheXM6IG51bWJlciwgcGF0aDogc3RyaW5nID0gJycpIHtcclxuICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgY29uc3QgZXhwaXJlcyA9IGBleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XHJcbiAgICBjb25zdCBjUGF0aCA9IHBhdGggPyBgOyBwYXRoPSR7cGF0aH1gIDogJyc7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTsgJHtleHBpcmVzfSR7Y1BhdGh9YDtcclxuICB9XHJcbiAgZGVzdHJveVN1YnNjcmlwdGlvbigpIHtcclxuICAgIC8vIENhbGxlZCBvbmNlLCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGRlc3Ryb3llZC5cclxuICAgIC8vIEFkZCAnaW1wbGVtZW50cyBPbkRlc3Ryb3knIHRvIHRoZSBjbGFzcy5cclxuICAgIHRoaXMuY2xvc2VMb2dvdXRBbGxUYWJDaGFubmVsKCk7XHJcbiAgICBmb3IgKGNvbnN0IHNpbmdsZVN1YnNjcmlwdGlvbiBpbiB0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25bc2luZ2xlU3Vic2NyaXB0aW9uXSkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uW3NpbmdsZVN1YnNjcmlwdGlvbl0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2VMb2dvdXRBbGxUYWJDaGFubmVsKCk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5Gb3JDbGVhckRhdGEoKSB7XHJcbiAgICB0aGlzLmxvZ291dEFsbFRhYkNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5zdGVwRGF0YVN0b3JlID0ge307XHJcbiAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuYmxvY2tEYXRhU3RvcmUgPSB7fTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycpIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoYGhvbWVgLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlTG9nb3V0QWxsVGFiQ2hhbm5lbCgpIHtcclxuICAgIGlmKHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbCkge1xyXG4gICAgICB0aGlzLmxvZ291dEFsbFRhYkNoYW5uZWwuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=