import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import * as i4 from 'angular-oauth2-oidc';
import { OAuthErrorEvent, OAuthSuccessEvent, OAuthModule } from 'angular-oauth2-oidc';
import * as i1 from '@ng/cee-core';
import * as i2 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i3 from '@angular/router';
import { RouterModule } from '@angular/router';

class NgCeeOIDCService {
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

class NgCeeOIDCModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, imports: [HttpClientModule,
            RouterModule, i4.OAuthModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, imports: [HttpClientModule,
            RouterModule,
            OAuthModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeOIDCModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule,
                        RouterModule,
                        OAuthModule.forRoot()
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of ng-cee-oidc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgCeeOIDCModule, NgCeeOIDCService };
//# sourceMappingURL=ng-cee-oidc.mjs.map
