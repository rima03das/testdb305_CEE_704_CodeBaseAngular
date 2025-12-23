/**
 * This is a util file that contains function that will be called when the api type is EXTERNAL.
 * This file reads the api config json gets the json for the specific event handler and forms the
 * header, requestBody, queryParameters, urlParameters.
 * Note:// When the type of api config is set to the EXTERNAL it will automatically use the hashed API KEY concept.
 */
import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../models/app-data/app-data.service';
import { ApiDataService } from '../models/api-data/api-data.service';
import { FlatUnflat } from './flat-unflat-json';
import { ApiData } from '../models/api-data/api-data.model';
import { CommonUtil } from './common-util';
import { SharedEventsServiceService } from '../services/shared-events-service.service';
import * as i0 from "@angular/core";
export default class ExternalRequestResponseUtil {
    http: HttpClient;
    appDataService: AppDataService;
    apiDataService: ApiDataService;
    sharedEventsService: SharedEventsServiceService;
    constructor(http: HttpClient, appDataService: AppDataService, apiDataService: ApiDataService, sharedEventsService: SharedEventsServiceService);
    flatAndNestUtil: FlatUnflat;
    apiConfig: {};
    commonUtil: CommonUtil;
    externalApiRequest: ExternalRequest;
    internalApiRequest: InternalRequest;
    apiData: ApiData;
    private booleanValues;
    /**
     * this function prepares the object that needs to be sent to the project end
     * so that they can consume the headers, queryParams, urlParams and RequestBody
     * @required @param handler WFE Event handler
     * @param type The API calling type empty
     * @param isEvent If the function is triggered from an event
     * @param downloadType If the function is triggered from an event and is called from an download event
     */
    prepareObjectToBeSent(handler: any, type?: string, isEvent?: boolean, downloadType?: string, encriptedFileData?: any[], primaryData?: any, tableOperations?: string, tableOperationsBlock?: string): boolean;
    getAkitaDataFromHandler(handler: any): any;
    returnNestedData(data: any): any;
    deleteCurrentPropertyMortGage: (res: any) => any;
    newMortgage(res: any): any;
    updateNewMortgage(res: any): any;
    newDealMortgage(res: any): any;
    setEmptyKeysToNull(obj: any): any;
    newSubjectProperty: (res: any) => any;
    saveSubjectPropertyBody(res: any): any;
    newDealSubjectProperty(res: any): any;
    dealinfoBody(res: any, related?: {}): any;
    applicantInfoBody(res: any, position: any): any;
    assetBody(res: any): any;
    saveDealPropertiesBody(res: any): any;
    liabilityBody: (res: any) => any;
    deleteCurrentproperty(res: any): any;
    generateAdditionalIncomeBody(res: any, currPosition: any): any;
    generateLivingAddressBody(res: any, currPosition: any): any;
    exployeeSaveBody(res: any, currPosition: any, parentPosition: any): any;
    invalidDate(date: any): any;
    /**
     * function that forms the request object that takes in the
     * api config object and
     * returns the query param, header param, url param,
     * and request body as an object
     * @required @param apiConfigObject type is object
     * @returns an object that contains all the data that is required by the
     * API
     */
    formTheRequestObj(apiConfigObject: any, encriptedFileData?: any[], type?: string): {
        requestBody: any;
        headers: any;
        queryParams: any;
        urlParams: any;
        url: any;
        methodType: any;
        requestType: any;
        isESB: any;
        hasAuthorisation: any;
        storageType: any;
        useUID: any;
        esbRequestBody: any;
        isExternal: any;
    };
    /**
     * method modifies the url of the api_config object
     * for example: url -> ${BASE_URL}/mocks/api
     * code matches the regex and finds the BASE_URL
     * then it checks the local storage for any
     * value for BASE_URL as it should be added in the app_config.json
     * if it is not added then the code will remove ${} from the url and
     * hit the api
     */
    private getURL;
    /**
     * function returns an object which is the mapping of the  apiKey and the value in a field.
     */
    private getAppData;
    checkForDateOrTimePicker(keys: any, apiValue: any): {};
    /**
     * function returns an array of objects in which the first one is the object with key
     * which the apiKey concatenated with the api url and second one is the object with the normal apiKey
     * which are basically the url parameters that does not have an endpoint
     */
    private getApiData;
    /**
     * function that returns the object mapped according to the given keys array
     * @param keys the array of ids that needs to be mapped
     */
    removeEmptyKeys(obj: any): any;
    getMultipleApisDataByKeys(storeData: {
        [key: string]: {
            value: any;
            updatedOn: number;
        };
    }, keys: string[]): {};
    /**
     * Gets the latest value from store data based on updatedOn timestamp
     */
    getLatestValue(storeData: {
        [key: string]: {
            value: any;
            updatedOn: number;
        };
    }): {
        key: string;
        value: any;
        updatedOn: number;
    };
    /**
     * function that returns the object mapped according to the given keys array
     * @param keys the array of ids that needs to be mapped
     */
    private returnFormattedObject;
    processAppConfigKeys(appConfigKeys: any, obj: any): void;
    private handleKey;
    /**
     * function that takes in api response as an object of type External Response
     * and stores and returns the modified object that can then be sent to the
     * inner fields for consumption
     * @param res an object of type External Response
     */
    storeResponse(res: ExternalResponse): {
        formattedResponse: ExternalResponse;
        flattenResponse: any;
    };
    extractPathParamsFromCurrentUrl(): string[];
    /**
     * function to join the response from the api data store
     * @param res the api response
     */
    private joinResponse;
    /**
     * function to filter Join Keys from the api data keys
     * @param JoinData the api data set
     * @param joinConfigKey the api key name of the join config
     */
    private filterJoinKeys;
    /**
     * function to fetch the response from the api data store
     * @param name the api key name of the field
     */
    private fetchResponse;
    /**
     * function that returns parsed values or undefined if value doesn't exist
     * @param type the type to which the value needs to be parsed
     * @param value the store value
     * @param isOptional indicates the result can be optional allowing to return undefined
     */
    private returnParsedValues;
    /**
     * function to emit the if the loading is needed to not
     * @param handlerName event handler or external api or api_information
     * @param loading true or false
     */
    private showOrHideLoader;
    /**
     * normal function to get the api value
     * @param name the parameter
     */
    private getKey;
    /**
     * normal function to get the handler name
     * @param name the parameter
     */
    private getHandler;
    get config(): {};
    set config(value: {});
    static ɵfac: i0.ɵɵFactoryDeclaration<ExternalRequestResponseUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExternalRequestResponseUtil>;
}
export interface ExternalResponse {
    handler: string;
    response: any;
    event_success: boolean;
    storageType?: string;
    statusCode?: number;
    logout?: boolean;
}
export interface ExternalRequest {
    handler: string;
    requestBody: any;
    urlParams: any;
    queryParams: any;
    headers: any;
    primaryData: any;
}
export interface InternalRequest {
    handler: string;
    requestBody: any;
    urlParams: any;
    queryParams: any;
    headers: any;
    url: string;
    methodType: string;
    requestType: string;
    isESB: boolean;
    hasAuthorisation: boolean;
    storageType: string;
    useUID: boolean;
    isEvent: boolean;
    downloadType: string;
    esbRequestBody: any;
    primaryData: any;
}
//# sourceMappingURL=external-request-response.util.d.ts.map