/**
 * file only calls the application service for file Upload
 * This is a static service
 */
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../models/api-data/api-data.model';
import { ApiDataService } from '../models/api-data/api-data.service';
import { AppDataService } from '../models/app-data/app-data.service';
import { CEEInternalEmitterService } from './internal-cee-emitter-service.service';
import { CommonUtil } from '../utils/common-util';
import * as i0 from "@angular/core";
export declare class FileUploadService {
    private http;
    private ceeInternalEmitter;
    private apiDataService;
    private appDataService;
    private headers;
    apiEndPoint: string;
    applicationServicesUrl: string;
    renameEndPoint: string;
    private encrypted;
    private flatAndNestUtil;
    private encryptRequestBody;
    private decryptRequestBody;
    private url;
    private apiData;
    private ceeEncryptDecrypt;
    commonUtil: CommonUtil;
    constructor(http: HttpClient, ceeInternalEmitter: CEEInternalEmitterService, apiDataService: ApiDataService, appDataService: AppDataService);
    get getHeaders(): {};
    set setHeaders(data: any);
    /**
     * a setter function that stores the attachment
     * meta data response that comes from the backend
     * object should contain id, apiUrl, value
     */
    storeAttachmentMetaData(data: ApiData): void;
    /**
     * generic file service function that uploads, downloads,  previews, deletes
     * the files based on the type of the request
     * @param type the type of the request
     * @param payLoad the data specific to the generic application services
     * @param extraConfigData the data that can be configured in the api config json
     */
    genericFileService(type: string, payLoad: any, extraConfigData?: any, eventHandler?: string): Promise<{
        handler: any;
        actualHandler: string;
        hasCustomEventHandler: any;
        statusCode: number;
        event_success: boolean;
        emit: boolean;
        data: {};
    } | {
        statusCode: number;
        data: {};
        emit: boolean;
    }>;
    private uploadFile;
    private removeFile;
    private fetchFile;
    private postReq;
    private previewFile;
    private updateFile;
    private renameFile;
    /***
     * function that sets the url
     * from the config
     * @param apiConfigData the configured data from api config
     */
    private getUrl;
    /**
     * call the ceeEncryptDecrypt decrypt function so that
     * the code should call this function not the function in util file
     */
    returnDecryptedResult(strFile: any, secretKey: any): string;
    /**
     * function that will get the private key/secret key from the api
     * @param type the type of the operation that is performed
     * @param decryptString the string that needs to be sent to the
     * backend to get the private key
     * * decryptString is only needed when the type is decrypt
     * @returns an observable
     */
    encryptDecrypt(type?: string, decryptString?: string): import("rxjs").Observable<import("@angular/common/http").HttpResponse<Object>>;
    /**
     * method that creates a base64 string/normal string based on the type
     * @param blob the blob of a file
     * @param type the type of the operation based on which the
     * the file needs to be read and sen back
     * * type == 'encrypt' reads a base64 string else
     * * reads a normal text string
     * @returns a Promise of string
     */
    createStringFromBlob(blob: any, type?: string): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileUploadService>;
}
//# sourceMappingURL=file-upload-service.service.d.ts.map