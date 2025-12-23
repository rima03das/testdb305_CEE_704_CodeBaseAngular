import { filter } from "rxjs/operators";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import {
  SharedEventsServiceService,
  EventResponseHandlerService,
  NgCEEStoreService,
  StepRendererComponent,
  CeeApiService,
  DynamicComponentHandlerService,
  Log,
  AppDataService,
  ApiDataService,
} from "@ng/cee-core";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { NgCeeApiIntegrationService } from "@ng/cee-api-integration";
import { NgCeeOIDCService } from "@ng/cee-oidc";
import { Idle, IdleExpiry, NgIdleModule } from "@ng-idle/core";
// import { ReactProviderService } from './react-provider.service';
// ReactProviderService
import { CommonModule, DatePipe, Location } from "@angular/common";
import { CeeLoaderComponent } from "../cee-loader/cee-loader.component";
import {
  returnNestedData,
  calculateSum
} from "./services";
import moment from "moment";
import { Observable, Subscription } from "rxjs";
import { LoadingRendererComponent } from "../loading-renderer/loading-renderer.component";
import {
  DateTimeProvider,
  OAuthLogger,
  UrlHelperService,
} from "angular-oauth2-oidc";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import jsonToCsvExport from "json-to-csv-export";

//  import { ImageUploadSingleComponent } from '../custom/image-upload-single/image-upload-single.component';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
@Component({
  selector: "app-wfe-step",
  templateUrl: "./wfe-step.component.html",
  styleUrls: ["./wfe-step.component.scss"],
  standalone: true,
  imports: [
    StepRendererComponent,
    NgIdleModule,
    CommonModule,
    CeeLoaderComponent,
    LoadingRendererComponent,
    RouterModule,
    DatePipe,
  ],
  providers: [
    SharedEventsServiceService,
    { provide: DateTimeProvider, useValue: true },
    UrlHelperService,
    { provide: OAuthLogger, useValue: true },
    EventResponseHandlerService,
    NgCEEStoreService,
    CeeApiService,
    NgCeeApiIntegrationService,
    NgCeeOIDCService,
    NgCEEStoreService,
  ],
})
export class WfeStepComponent implements OnInit, OnDestroy {
  stepId;
  childId;

  flattenedJSON: object = {};
  customEventVariableEmitterHolder: any;
  eventHandlerEmitterHolder: any;
  reactEmitterHolder: any;
  routeHolder: any;
  params: object = {};
  dataObj: any;
  isHideAssigneeTask: boolean = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private ceeApiService: CeeApiService,
    private http: HttpClient,
    private sharedEventService: SharedEventsServiceService,
    private eventResponseHandler: EventResponseHandlerService,
    private dynamicHandlerService: DynamicComponentHandlerService,
    private ngCeeApiIntegration: NgCeeApiIntegrationService,
    private ngCeeOIDCService: NgCeeOIDCService,
    private appDataService: AppDataService,
    private apiDataService: ApiDataService,
    private ngCeeStoreService: NgCEEStoreService, // private dynamicHandlerService: DynamicComponentHandlerService,
    private datePipe: DatePipe,
    public router: Router,
    private location: Location
  ) {}

  getNestedData(data: any) {
    return returnNestedData(data);
  }

  getOnlyFirstNameArray(data: any) {
    if (Array.isArray(data) && data.length > 0) {
      return data.map((item) => item.first_name);
    }
    return [];
  }

  getprimaryBorrower(data: any) {
    if (Array.isArray(data) && data.length > 0) {
      const firstElement = data[0];
      return firstElement.first_name + " " + firstElement.last_name || "";
    }
    return {};
  }

  ngOnInit() {
    // this.routeHolder = this.route.paramMap.subscribe(params => {
    //     this.stepId = params.get("stepId");
    // });
    // updatePlaceholders();

    this.routeHolder = this.route.paramMap.subscribe((params) => {
      localStorage.setItem("current_page", params.get("stepId"));
      // const URL = params.get("stepId");
      // const routeMap = JSON.parse(localStorage.getItem("CEE_ROUTE_MAP"));
      // if (routeMap) {
      //   this.stepId = Object.keys(routeMap).find(
      //     (key) => routeMap[key] === URL
      //   );
      // }
      // if (params.get('id')) {
      //   this.params['id'] = params.get('id');
      // } else {
      //   delete this.params['id'];
      // }
      if (params.get("id")) {
        this.childId = params.get("id");
        this.params["id"] = params.get("id");
      } else {
        delete this.params["id"];
      }

      this.sharedEventService.params = this.params;
      this.stepId = params.get("stepId");
    });

    // this.dynamicHandlerService.registerComponent(
    //   "ImageUploadSingleComponent",
    //   ImageUploadSingleComponent
    // );
    
    // this.dynamicHandlerService.registerComponent(
    //   "<ComponentName>",
    //   <ComponentAliasName>
    // );

    this.customEventVariableEmitterHolder =
      this.sharedEventService.customEventVariableEmitter.subscribe(
        (res: any) => {
          if (res.handler !== "") {
            switch (res.handler) {
              case "calculateTotalCalculate":
                var resultObj = calculateSum(res);
                this.sharedEventService.customEventTargetSubscriber.emit(
                  resultObj
                );
                break;
            }
          }
        }
      );

    this.eventHandlerEmitterHolder =
      this.sharedEventService.eventHandlerEmitter.subscribe((res) => {
        if (res.handler !== "") {
          try {
            switch (res.handler) {
              case "<handler name>":
                {
                  // res.requestBody modification
                  // invoke external API
                  this.invokeExternalApi(
                    "<method>",
                    `<api end point>`,
                    '<res.headers>',
                    '<res.requestBody>',
                    "",
                    ""
                  ).subscribe(
                    (apiResponse) => {
                      //  response body modification
                      // emit modified response
                      this.emitData(
                        {
                          api_response: {
                            ...JSON.parse(apiResponse.api_response),
                            status: apiResponse.status,
                          },
                        },
                        res.handler,
                        true
                      );
                    },
                    (e) =>
                      this.emitData(
                        { api_response: e?.error },
                        res.handler,
                        true
                      )
                  );
                }
                break;
            }
          } catch (error) {
            console.error(error);
            this.emitData(
              {
                api_response: { status: false },
              },
              res.handler,
              true
            );
          }
        }
      });
    this.ngCeeApiIntegration.init();
    this.ngCeeOIDCService.init();
    window.sessionStorage.setItem("CEE_WFEId", "projectName");
  }

  /**
   * Update, insert, or delete an object in a nested structure.
   * @param {Array|Object} data - The nested data structure to traverse.
   * @param {String} applicationId - The application_id to find.
   * @param {Object} [updates] - The updates to apply (for update or insert).
   * @param {String} [operation="update"] - The operation to perform: "update", "insert", or "delete".
   * @param {Object} [newObject] - The new object to add if performing an "insert".
   * @returns {Boolean} - True if the operation was successful, false otherwise.
   */

  ngOnDestroy() {
    this.customEventVariableEmitterHolder.unsubscribe();
    this.eventHandlerEmitterHolder.unsubscribe();
    this.reactEmitterHolder.unsubscribe();
    this.routeHolder.unsubscribe();
    this.routeHolder.unsubscribe();
    this.subscriptions.unsubscribe();
    this.ngCeeApiIntegration.destroySubscription();
    this.ngCeeOIDCService.destroySubscription();
  }
  invokeExternalApi(
    methodType,
    apiEndPoint,
    headers?,
    reqBody?,
    urlParams?,
    queryParams?: any
  ): Observable<any> {
    for (const key of Object.keys(urlParams)) {
      if (apiEndPoint.includes(`{${key}}`)) {
        apiEndPoint = apiEndPoint.split(`{${key}}`).join(urlParams[key]);
      }
    }
    for (const key of Object.keys(queryParams)) {
      if (apiEndPoint.includes(`{${key}}`)) {
        apiEndPoint = apiEndPoint.split(`{${key}}`).join(queryParams[key]);
      }
    }
    const baseUrl = localStorage.getItem("BASE_URL");
    let finalUrl = baseUrl + apiEndPoint;
    // const CustombaseUrl = localStorage.getItem("BASEURL_CUSTOM");
    // let customFinalUrl = CustombaseUrl + apiEndPoint;

    methodType = methodType.toLowerCase();
    let headerPayload,
      signature = "";

    //get access token from cookies
    decodeURIComponent(document.cookie)
      .split(";")
      .forEach((item) => {
        if (item.includes("headerPayload=") || item.includes("signature=")) {
          if (item.includes("headerPayload=")) {
            headerPayload = item.replace("headerPayload=", "").trim();
          }
          if (item.includes("signature=")) {
            signature = item.replace("signature=", "").trim();
          }
        }
      });

    let headerParams = new HttpHeaders({
      Authorization: `${headerPayload}.${signature}`,
      ...headers,
    });

    switch (methodType) {
      case "get":
        return this.http.get(finalUrl, { headers: headerParams });

      // case "downloadfile":
      //   var link = document.createElement("a");
      //   link.href = finalUrl;

      //   link.click();
      //   return new Observable((observer) => {
      //     observer.next("");
      //   });

      case "post":
        return this.http.post(finalUrl, reqBody, { headers: headerParams });
      case "patch":
        return this.http.patch(finalUrl, reqBody, { headers: headerParams });

      case "put":
        return this.http.put(finalUrl, JSON.stringify(reqBody), {
          headers: headerParams,
        });
    }
  }
  emitData(res: any, resHandler: string, eventSuccess: boolean, type = false) {
    const responseObj = {
      handler: resHandler,
      response: res["api_response"],
      event_success: eventSuccess,
    };
    if (type === true) {
      this.eventResponseHandler.emitAPIDATA(responseObj);
    } else {
      this.sharedEventService.eventResponseSubscriber.emit(responseObj);
    }
  }
  emitallData(data, res) {
    this.emitData(
      {
        api_response: {
          results: data,
        },
      },
      res.handler,
      true
    );
  }

  getAkitaDataFromHandler(handler, key) {
    if (this.ngCeeStoreService.getIndividualApiData(handler)) {
      return returnNestedData(
        this.ngCeeStoreService.getIndividualApiData(handler)[0]?.value
      )?.[key];
    }
  }

  filterNullAndEmpty(object) {
    return Object.fromEntries(
      Object.entries(object).filter(
        ([key, value]) => value != null && value !== ""
      )
    );
  }

  sanitizeAndTitleCase(input: string): string {
    // Remove special characters (keep letters, numbers, and spaces)
    const cleaned = input.replace(/[^a-zA-Z0-9 ]/g, "");

    // Convert to title case
    const titleCased = cleaned
      .split(" ")
      .filter((word) => word.trim() !== "")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    return titleCased;
  }
}
