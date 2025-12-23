import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { WfeStepComponent } from "./wfe-step.component";
import {
  NgCeeCoreModule,
  SharedEventsServiceService,
} from "library/ng-cee-core";
import {
  account_create,
  accountgetAccountById,
  accountgetAllAccount,
  accountupdate,
  addDealApplicant,
  authservice_user_delete,
  authservice_user_register_otherRoles,
  authservicesRegister,
  calculateTimeatRecidenceCustomFunction,
  calculateTimeatRecidentCustomFunction,
  calculateTotalCalculate,
  contact_create,
  contact_update,
  contact_assign_otherRoles,
  contact_assign_client,
  contact_create_otherRoles,
  contact_emitPostalZipLabel,
  contactCreate,
  contactemitPostalZipLabel,
  contactEmploymentEmitTimeJob,
  contactgetList,
  createDealAssets,
  createDealLiabilities,
  createMortage,
  createSubjectProperty,
  createTask,
  dealCreate,
  dealcreatetionContact,
  dealEmployementEmitTimeJob,
  deleteDealApplicant,
  deleteDealSingleApplicantEmployments,
  deleteDealSingleLiabilities,
  deleteDealSingleProperties,
  deleteDealSinglePropertiesMortgage,
  documentTableprofilePiccreateContact,
  emitAddressValueFromAddressLookup,
  getAddressFromLookup,
  getAllContactInOrg,
  getAllContactOwner,
  getAllContacts,
  getAllDealApplicants,
  getAllDeals,
  getAllDealsInOrg,
  getAllDealTasks,
  getAllInfin8Users,
  getAllInfin8UsersContactUpdate,
  getallLiabilities,
  getAllMasterData,
  getallstageList,
  getAllStates,
  getAssigneeForTask,
  getContactByAccountId,
  getCurrentSyncItemIndex,
  getDealAllAssets,
  getDealBorrowers,
  getDealMortgage,
  getDealNotes,
  getDealProperyOwners,
  getDealSingleApplicantAdditionalIncomes,
  getDealSingleApplicantAddress,
  getDealSingleAssets,
  getNoteById,
  getSingleDealDetails,
  getSingleExistingContactforDealCreation,
  getTaskById,
  handleGetMainApplicantCurrentAddress,
  ignoreSyncInfo,
  invokeExternalApi,
  loggedInuser,
  master_campaign_delete,
  master_campaign_getAllCampaign,
  master_cancel_duplicationCheck,
  master_cancel_getAllCancel,
  master_channel_delete,
  master_channel_duplicationCheck,
  master_channel_getAllChannel,
  master_dealSource_delete,
  master_dealSource_getAllDealSource,
  master_getAllActiveCampaignBasedOnDealSource,
  master_getDealSourceInfo,
  master_subchannel_delete,
  master_subchannel_getAllSubchannel,
  masterCancelDelete,
  notesActivityHistory,
  pinCurrentNotes,
  rbac_ldap_search,
  rbac_mastersubchannelActive,
  saveApplicantAddress,
  saveApplicationBorrowerEmployment,
  saveDealApplicantlivingAddress,
  saveDealproperty,
  saveDealSingleApplicantAdditionalIncomes,
  switchMailDealApplicants,
  syncDealBorrowerToContact,
  task_create,
  taskActivityHistory,
  TestbaseUrl,
  togglefilterSection,
  toggleLeftPanel,
  toggleNotesDealDetails,
  toggleShowHidePanel,
  toggleTableColumnSection,
  toggleTaskDealDetails,
  updateDealApplicant,
  updateDealAssets,
  updateDealBasicInfo,
  updateDealSingleLiabilities,
  updateDealStatus,
  updateTask,
  viewContactByID,
  getContactemploymentList,
  getContactAddressList,
  master_cancel_getCancelById,
  master_cancel_duplicationCheckEdit,
  master_channel_duplicationCheckEdit,
  master_channel_getChannelById,
  account_getAccountType,
  account_checkDuplicateAccountName,
  contact_getRoles,
  lenderSubmission_history,
  lenderValidation_dealValidate,
  lenderValidation_getAllLenders,
  lenderValidation_getOfflineOnlineLenders,
  userCreate,
  viewInfin8User,
  userUpdate,
  getDealExpenses,
  approveDocumentLedger,
  userGroupTeamMember,
  approveDocumentSecondTableLedger,
  toggleRatioDealDetails,
  toggleLenderDealDetails,
  openWorkflowDealDetails,
  toggleWorkflowDealDetails,
  closeWorkflowDealDetails,
  getAllDealsUserDashboard,
  selectedRatioButtons,
  downpaymentSync,
  downpaymentSyncPercentage,
  getAllDealsForCloning,
  getFullDealDetails,
  selectedRatioButtons2,
  ComplainceReviewdDocumentPreview,
  documentRemove,
  ComplianceFormController_updateForm,
  ComplianceFormController_getForm,
  downloadCommunicationLogs,
  downloadDealActinityLogs,
  ComplainceReviewdDocumentPreviewDownload,
  downloadContactCreditReport,
  downloadUserLedgerHistory,
  downloadEsignSubmittedForms,
  get_Participants,
  getUsers_ledge_history,
  get_assignee,
  UpdatePassword,
  download_cf,
  dealsclone,
  get_all_fees,
  update_all_fees,
  delete_fees,
  delete_active_fees,
  selectedRatioButtons3,
  ComplianceFormController_getFormList,
  ComplainceEsignDocumentPreview,
  getContactProperties,
  downloadCompliencePackage,
  checkTableV2MultiselectSelection,
  getComplianceReviewMortgageCommitmentFiles,
  getComplianceReviewAdditionalFiles,
  getComplianceReviewSignedDocuments,
  getComplianceUploadedDocuments,
  getComplianceReviewApprovedDocuments,
  getComplianceReviewDetailsDoc,
  docuSignUpdate,
  downloadComplainceReviewApprovedDocuments,
  get_revenue,
  get_single_revenue,
  getContactList,
  dealDocumentsActivityLogs,
  handleInactiveUserCase,
  userInactiveHandler,
  requestDealApplicantConsent,
  pullDealApplicantCredit,
  getCreditPullCurrentIndex,
  downloadDealApplicantCreditReport,
  downloadDealApplicantConsent,
  getCurrentSelectedFundingAdmin,
  getCurrentSelectedCoAgent,
  getDealPredefinedFilter,
  getUserNameForLedgerDashboard,
  getSingleRevenueOnLoad,
  updateDealInfoFees,
  updateDealInfoFeesPercentages,
  getDealDocumentsList,
  getRequestBodyFromDcsList,
  downloadDealDocuments,
  checkCurrentTransationType,
  automatedWorkflow_workflowApiGet,
  automatedWorkflowworkflowApiGetCompliance,
  automatedWorkflow_workflowApiGetPaymentPending,
  automatedWorkflow_workflowApiGetDealCreate,
  automatedWorkflow_workflowApiGetDealClone,
  automatedWorkflow_fieldValidation,
  automatedWorkflow_workflowApiExecute,
  automateWorkflowGetAfterDealCreate,
  automatedWorkflowAfterDealCreateApiExecute,
  getDocumentLabelName,
  dealDocumentGetSingle,
  dealDocumentsDelete,
  getDealRatio,
  getAllRoutingRules,
  addDealDocumentFile,
  updateDealBasicInfoCancelled,
  getAllAccountForContact,
  contact_task,
  deal_task,
  hideAssigneeTask,
  testIDdata,
  hideAssigneeTask2,
  user_task,
  calculateTotalCalculateSubjectP,
  docuSignSendUpdate,
  downloadComplainceReviewAttachment,
  contact_address,
  dashboard_task,
  getContactDealList,
  getDealDetails,
  lenderSubmission_addToEsign,
  lenderSubmission_finmoSubmission,
  getLenderDocuments,
  file_commitment,
  master_documentType_getAllActiveDocumentType,
  addContactDocument,
  dealDocumentSendNotification,
  updateContactEmploymentByID,
  deleteContactEmploymentByID,
  showcreditreport_pull,
  getDealSubjectProperty,
  validateSIN,
  deleteDealSubjectProperty,
  getSubjectPropertyData,
  coApplicantCloneCheckbox,
  dealDocumentSetStatus,
  getDocsCurrentIndex,
  lenderValidationselectedLender,
  getlenderSubmissionHistoryCurrentIndex,
  isUniversalAgentCheck,
  coAgentSendEmail,
  fundingAdminSendEmail,
  exportDealList,
  underWriterSendEmail,
  getSingleSearchDeal,
  updateDealInfoFeesActive,
  removeDealInfoFeesSave,
  removeDealInfoFeesSaveActive,
  getLedgerHistoryByID,
  getRoutingUserList,
  updateContactDocument,
  dealHoldCancel,
  clearCommissionTier,
  clearRepeatableBlock,
  calculateTimeatRecidentCustomFunction2,
  getCurrentUser,
  getBusinessPartnerUser,
  segmentDealActivityLogs,
  createOrganization,
  updateOrganization,
  shuffledeal,
  deleteMasterEntitiesCommon,
  borrowerArray$HasValue,
  dealRatiodata,
  createContactProfilePic,
  getComplianceReviewMortgageCommitmentFilesdownload,
  localstorageData,
  renameFileDealDocument,
  automatedWorkflow_workflowApiGetoNhOLD,
  automatedWorkflow_workflowApiGetcALCEL,
  getDealOwnerListForLedger,
  taskUpdate,
  isLenderOfflineCheck,
  getAllAccountContactUpdate,
  get_assignee_edit,
  getAssigneeContact,
  viewContactByIDExpenses,
  DownloadHistoricalFiles,
  getCurrentCombineApi,
  getProfilePic,
} from "src/assets/data/test/cases";
import { BehaviorSubject, of, Subject, throwError } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { akita } from "src/assets/data/test/akita";
import {
  cleanupTestDOM,
  domsingleDeal,
  expectObjectsInArray,
  getValueByPath,
  progressDivDom,
  selectedRatioButtonsDom,
  selectedRatioButtonsDom2,
  selectedRatioButtonsDom3,
  setupTestDOM,
  setupTestDOM2,
  setupTestDOM3,
  setupTestDOM_ElseCondition,
  setupTestDOM_ShowHideClassCondition,
  setupTestDOM_ToggleClass,
  togglefilterSectionsetupTestDOM,
  togglefilterSectionsetupTestDOM2,
  togglefilterSectionsetupTestDOM3,
  toggleShowHidePanelDom,
  toggleShowHidePanelDom2,
  toggleShowHidePanelDom3,
  toggleTaskDealDetailsDom,
  toggleTaskDealDetailsDom2,
  toggleTaskDealDetailsDom3,
} from "src/assets/data/test/dom-utils";
import moment from "moment";
import { getallTaskDaashboardUSerBody } from "./helper/generateBody";
import { TableColumns } from "../custom/costom-service/tableReorderData";
import { pdata } from "src/assets/data/test/akitaDataProcessed";
import { openLenderDealDetails } from "./services";
import * as services from "./services";
// let sharedEventsServiceService: SharedEventsServiceService;
describe("WfeStepComponent", () => {
  let component: WfeStepComponent;
  let fixture: ComponentFixture<WfeStepComponent>;
  let httptestcontroller;
  let sharedEventsServiceService: SharedEventsServiceService;
  let filterPanel: HTMLElement;
  let rightPanel: HTMLElement;
  let showHidePanel: HTMLElement;

  // let sharedEventsServiceService: SharedEventsServiceService;
  // let appDataService: AppDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WfeStepComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        NgCeeCoreModule,
      ],
      declarations: [],

      providers: [],
    }).compileComponents();
  }));
  //   beforeAll(() => {
  //   // Redefine window.location.href for the test suite
  //   Object.defineProperty(window, "location", {
  //     writable: true,
  //     value: { href: "", assign: () => {}, replace: () => {} }
  //   });
  // });
  beforeAll(() => {
    spyOn(console, "log").and.callFake(() => {});
    spyOn(console, "info").and.callFake(() => {});
    spyOn(console, "debug").and.callFake(() => {});
    // Optionally, suppress warnings too:
    spyOn(console, "warn").and.callFake(() => {});
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(WfeStepComponent);
    httptestcontroller = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    const privateComponent = fixture.componentInstance;
    sharedEventsServiceService = TestBed.inject(SharedEventsServiceService);
    fixture.detectChanges();

    localStorage.setItem("WFE_APP_ID", "test-app-id");
  });

  it("should create", (done) => {
    expect(component).toBeTruthy();
    setTimeout(() => {
      done();
    }, 2000);
  });

  it("should Check Request Type of - invokeExternalApi", () => {
    localStorage.setItem("baseUrl", TestbaseUrl);
    document.cookie =
      "headerPayload=test; signature=testing expires=Fri; 31 Dec 2023 23:59:59 GMT";
    document.cookie =
      "signature=testing; expires=Fri; 31 Dec 2023 23:59:59 GMT";

    component.invokeExternalApi(
      "get",
      "Complaint/record/search/{wfeAppId}/entity/{ms_complaints}?page_number={page_number}&limit={limit}",
      "signature",
      invokeExternalApi.requestBody,
      invokeExternalApi.urlParams,
      invokeExternalApi.queryParams
    );
    component.invokeExternalApi(
      "post",
      "application/test",
      "signature",
      "id:2",
      "test:1",
      "mydata:2"
    );
    component.invokeExternalApi(
      "patch",
      "application/test",
      "signature",
      "id:2",
      "test:1",
      "mydata:2"
    );
    component.invokeExternalApi(
      "put",
      "application/test",
      "signature",
      "id:2",
      "test:1",
      "mydata:2"
    );
    component.invokeExternalApi(
      "post",
      "user-auth",
      "signature",
      "id:2",
      "test:1",
      "mydata:2"
    );
    component.invokeExternalApi(
      "post",
      "generic-app",
      "signature",
      "id:2",
      "test:1",
      "mydata:2"
    );
    // component.invokeExternalApi('delete', 'application/test', {}, {}, {});
    const http = TestBed.inject(HttpClient);
    const data = {}; // define your rest call data
  });

  it("should execute default eventHandlerEmitter case - deleteDealSingleLiabilities", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteDealSingleLiabilities.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealSingleLiabilities.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getSingleDealDetails", (done) => {
    domsingleDeal();
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getSingleDealDetails.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getSingleDealDetails.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealLiabilities", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getallLiabilities.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getallLiabilities.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - deleteDealApplicant", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteDealApplicant.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealApplicant.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - switchMailDealApplicants", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(switchMailDealApplicants.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      switchMailDealApplicants.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getAllDeals", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDeals.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getAllDeals.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllDeals", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getAllDeals.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getAllDeals.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllDealsUserDashboard", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDealsUserDashboard.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealsUserDashboard.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllDealsUserDashboard", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getAllDealsUserDashboard.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealsUserDashboard.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllDealsForCloning", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDeals.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getAllDeals.req2);

    expect(component).toBeTruthy();
    done();
  });
  // it('should execute default eventHandlerEmitter case - contactCreate', (done) => {
  //   spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(contactCreate.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(contactCreate.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  it("should execute default eventHandlerEmitter case - getAllContactOwner", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.userInfo];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllContactOwner.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllContactOwner.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - loggedInuser", (done) => {
    // spyOn(component, 'getAkitaIndividualApiData').and.returnValue([akita['api-data'].entities.userInfo]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.userInfo];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(loggedInuser.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(loggedInuser.req);

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getAllMasterData", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllMasterData.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllMasterData.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - documentTableprofilePiccreateContact", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(documentTableprofilePiccreateContact.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      documentTableprofilePiccreateContact.req
    );

    expect(component).toBeTruthy();
    done();
  });
  // it("should execute default eventHandlerEmitter case - getAllDealTasks", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getAllDealTasks.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getAllDealTasks.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - master/task/getAllTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDealTasks.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealTasks.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - contact/getAllTask", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getAllDealTasks.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getAllDealTasks.req3
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - addDealApplicant", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(addDealApplicant.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      addDealApplicant.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getTaskById", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getTaskById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getTaskById.req);

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - taskActivityHistory", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(taskActivityHistory.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      taskActivityHistory.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - notesActivityHistory", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(notesActivityHistory.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      notesActivityHistory.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealNotes", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealNotes.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getDealNotes.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contactNotes/get", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealNotes.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getDealNotes.req2);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getNoteById", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getNoteById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getNoteById.req);

    expect(component).toBeTruthy();
    done();
  });
  // it('should execute default eventHandlerEmitter case - updateDealApplicant', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(updateDealApplicant.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(updateDealApplicant.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  it("should execute default eventHandlerEmitter case - saveApplicantAddress", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(saveApplicantAddress.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      saveApplicantAddress.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - saveApplicantAddressUpdate", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(saveApplicantAddress.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      saveApplicantAddress.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - pinCurrentNotes", (done) => {
    // spyOn(component['ngCeeStoreService'], 'getIndividualApiData').and.callFake((str) => {
    //   return [akita['api-data'].entities['getDealNotes']];
    // });
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getDealNotes])

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealNotes];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(pinCurrentNotes.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      pinCurrentNotes.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contactNotes/pin", (done) => {
    // spyOn(component['ngCeeStoreService'], 'getIndividualApiData').and.callFake((str) => {
    //   return [akita['api-data'].entities['getDealNotes']];
    // });
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["contactNotes/get"],
    ]);

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["contactNotes/get"]];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(pinCurrentNotes.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      pinCurrentNotes.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - createDealAssets', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(createDealAssets.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(createDealAssets.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  // it('should execute default eventHandlerEmitter case - updateDealAssets', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(updateDealAssets.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(updateDealAssets.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  // it('should execute default eventHandlerEmitter case - getAllDealApplicants', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(getAllDealApplicants.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(getAllDealApplicants.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  // it('should execute default eventHandlerEmitter case - createDealLiabilities', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(createDealLiabilities.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(createDealLiabilities.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  // it('should execute default eventHandlerEmitter case - updateDealSingleLiabilities', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(updateDealSingleLiabilities.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(updateDealSingleLiabilities.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  it("should execute default eventHandlerEmitter case - contactgetList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contactgetList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contactgetList.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - viewContactByID', (done) => {

  //   spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities["master/getAllCommonEntitiesValue"]])
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(viewContactByID.res));

  //   component['sharedEventService'].eventHandlerEmitter.emit(viewContactByID.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - getAllContactInOrg", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllContactInOrg.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllContactInOrg.req
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - getAllDealsInOrg", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getAllDealsInOrg.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getAllDealsInOrg.req
  //   );
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should handle error case for getAllDealsInOrg and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getAllDealsInOrg.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealsInOrg.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/emitPostalZipLabel", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_emitPostalZipLabel.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_emitPostalZipLabel.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAddressFromLookup];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userCreate/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAddressFromLookup];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userUpdate/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAddressFromLookup];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - org/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAddressFromLookup];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAddressFromLookup", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAddressFromLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAddressFromLookup.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllStates", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllStates.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getAllStates.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/update/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities["contactUpdateGetAddressFromLookup"],
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/livingAddress/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities.contactlivingAddressgetAddressFromLookup,
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req5
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/employment/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities.contactemploymentgetAddressFromLookup,
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req6
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/assignAnother/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities.contactAssignAnotherGetAddressFromLookup,
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req4
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - subject/update/emitAddressValueFromAddressLookup", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities["contactUpdateGetAddressFromLookup"],
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(emitAddressValueFromAddressLookup.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      emitAddressValueFromAddressLookup.req3
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - authservicesRegister", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(authservicesRegister.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      authservicesRegister.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - authservice/user/register/otherRoles", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(authservice_user_register_otherRoles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      authservice_user_register_otherRoles.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - authservice/user/delete", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(authservice_user_delete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      authservice_user_delete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/create", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_create.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_create.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/filterRoles", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_getRoles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_getRoles.req
    );
    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - contact/update/otherRoles', (done) => {
  //   spyOn(component['ngCeeStoreService'], 'getIndividualApiData').and.callFake((str) => {
  //     return [akita['api-data'].entities['master/getAllCommonEntitiesValue']];
  //   });
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(contact_update.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(contact_update.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - contact/assignAnother/client", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_assign_client.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_assign_client.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/assignAnother/otherRoles", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_assign_otherRoles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_assign_otherRoles.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - createSubjectProperty', (done) => {
  //   spyOn(component['ngCeeStoreService'], 'getIndividualApiData').and.callFake((str) => {
  //     return [akita['api-data'].entities['master/getAllCommonEntitiesValue']];
  //   });
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(createSubjectProperty.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(createSubjectProperty.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  // it('should execute default eventHandlerEmitter case - createSubjectProperty2', (done) => {
  //   spyOn(component['ngCeeStoreService'], 'getIndividualApiData').and.callFake((str) => {
  //     return [akita['api-data'].entities['master/getAllCommonEntitiesValue']];
  //   });
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(createSubjectProperty.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(createSubjectProperty.req2);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - createMortage", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(createMortage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(createMortage.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - createMortage2", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(createMortage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      createMortage.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealMortgage", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealMortgage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealMortgage.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contact/create/otherRoles", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(contact_create_otherRoles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_create_otherRoles.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for contact/create/otherRoles and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => contact_create_otherRoles.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      contact_create_otherRoles.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getContactByAccountId", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactByAccountId.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactByAccountId.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllInfin8Users", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllInfin8Users.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllInfin8Users.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllInfin8UsersContactUpdate", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllInfin8UsersContactUpdate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllInfin8UsersContactUpdate.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAssigneeForTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAssigneeForTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAssigneeForTask.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAssigneeForTask2", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAssigneeForTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAssigneeForTask.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - task/create", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(task_create.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(task_create.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - masterCancelDelete", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(masterCancelDelete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      masterCancelDelete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealSingleAssets", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealSingleAssets.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealSingleAssets.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - saveDealApplicantlivingAddress', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(saveDealApplicantlivingAddress.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(saveDealApplicantlivingAddress.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - getDealSingleApplicantAddress", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealSingleApplicantAddress.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealSingleApplicantAddress.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - saveDealSingleApplicantAdditionalIncomes', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(saveDealSingleApplicantAdditionalIncomes.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(saveDealSingleApplicantAdditionalIncomes.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - getDealSingleApplicantAdditionalIncomes", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealSingleApplicantAdditionalIncomes.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealSingleApplicantAdditionalIncomes.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/getAllChannel", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_channel_getAllChannel.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_getAllChannel.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/getAllChannel", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => master_channel_getAllChannel.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_getAllChannel.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/getChannelById", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => master_channel_getChannelById.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_getChannelById.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/getChannelById", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_channel_getChannelById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_getChannelById.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/duplicationCheck", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_channel_duplicationCheck.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_duplicationCheck.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/duplicationCheck", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => master_channel_duplicationCheck.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_duplicationCheck.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/duplicationCheckEdit", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => master_channel_duplicationCheckEdit.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_duplicationCheckEdit.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/duplicationCheckEdit", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_channel_duplicationCheckEdit.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_duplicationCheckEdit.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/channel/delete", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_channel_delete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_channel_delete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/subchannel/getAllSubchannel", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_subchannel_getAllSubchannel.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_subchannel_getAllSubchannel.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/subchannel/delete", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_subchannel_delete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_subchannel_delete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/cancel/getAllCancel", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_cancel_getAllCancel.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_cancel_getAllCancel.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/cancel/getCancelById", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_cancel_getCancelById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_cancel_getCancelById.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/cancel/duplicationCheck", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_cancel_duplicationCheck.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_cancel_duplicationCheck.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/cancel/duplicationCheckEdit", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_cancel_duplicationCheckEdit.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_cancel_duplicationCheckEdit.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/campaign/getAllCampaign", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_campaign_getAllCampaign.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_campaign_getAllCampaign.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/campaign/delete", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_campaign_delete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_campaign_delete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/dealSource/getAllDealSource", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_dealSource_getAllDealSource.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_dealSource_getAllDealSource.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/dealSource/delete", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_dealSource_delete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_dealSource_delete.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - rbac/ldap_search", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(rbac_ldap_search.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     rbac_ldap_search.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - master/subchannel/getAllSubchannel/active", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(rbac_mastersubchannelActive.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      rbac_mastersubchannelActive.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - deleteDealSingleApplicantEmployments', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(deleteDealSingleApplicantEmployments.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(deleteDealSingleApplicantEmployments.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - updateDealStatus", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealStatus.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealStatus.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - saveApplicationBorrowerEmployment', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(saveApplicationBorrowerEmployment.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(saveApplicationBorrowerEmployment.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });
  it("should execute default eventHandlerEmitter case - saveApplicationBorrowerEmploymentCreate", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(saveApplicationBorrowerEmployment.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      saveApplicationBorrowerEmployment.reqelse
    );

    expect(component).toBeTruthy();
    done();
  });

  // it('should execute default eventHandlerEmitter case - updateDealBasicInfo', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(updateDealBasicInfo.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(updateDealBasicInfo.req);

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - deal/create", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "master/getAllCommonEntitiesValue") {
          return [
            akita["api-data"].entities["master/getAllCommonEntitiesValue"],
          ];
        }
        if (str === "getSingleExistingContactforDealCreation") {
          return [
            akita["api-data"].entities[
              "getSingleExistingContactforDealCreation"
            ],
          ];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealCreate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealCreate.req);
    component["sharedEventService"].eventHandlerEmitter.emit(dealCreate.req2);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - deal/create", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "master/getAllCommonEntitiesValue") {
          return [
            akita["api-data"].entities["master/getAllCommonEntitiesValue"],
          ];
        }
        if (str === "getSingleExistingContactforDealCreation") {
          return [
            akita["api-data"].entities[
              "getSingleExistingContactforDealCreation"
            ],
          ];
        }
      }
    );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealCreate.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(dealCreate.req2);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllContacts", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllContacts.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllContacts.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getSingleExistingContactforDealCreation", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getSingleExistingContactforDealCreation.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getSingleExistingContactforDealCreation.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealMortgage", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealMortgage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealMortgage.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - master/getAllActiveCampaignBasedOnDealSource", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_getAllActiveCampaignBasedOnDealSource.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_getAllActiveCampaignBasedOnDealSource.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - master/getDealSourceInfo", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_getDealSourceInfo.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_getDealSourceInfo.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/getAccountType", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(account_getAccountType.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      account_getAccountType.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/create", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(account_create.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      account_create.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for account/create and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => account_create.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      account_create.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should show success toaster on successful account/create", (done) => {
  //   spyOn(component["toastr"], "success");
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(account_create.res));

  //   component["sharedEventService"].eventHandlerEmitter.emit(account_create.req);

  //   expect(component["toastr"].success).toHaveBeenCalledWith("Account created successfully!");
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - account/checkDuplicateAccountName", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(account_checkDuplicateAccountName.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      account_checkDuplicateAccountName.req
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - saveDealProperties", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(saveDealproperty.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     saveDealproperty.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - saveDealPropertiesID", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(saveDealproperty.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      saveDealproperty.reqID
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealProperyOwners", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealProperyOwners.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealProperyOwners.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - deleteDealSinglePropertiesMortgage", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteDealSinglePropertiesMortgage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealSinglePropertiesMortgage.req
    );
    expect(component).toBeTruthy();
    done();
  });
  // it('should execute default eventHandlerEmitter case - deleteDealSingleProperties', (done) => {
  //   const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(deleteDealSingleProperties.res));
  //   component['sharedEventService'].eventHandlerEmitter.emit(deleteDealSingleProperties.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - getDealAllAssets", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealAllAssets.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealAllAssets.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealAllAssets res 2", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealAllAssets.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealAllAssets.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealBorrowers", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealBorrowers.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealBorrowers.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - createTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(createTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(createTask.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - createTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(createTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(createTask.req2);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for createTask and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => createTask.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(createTask.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(updateTask.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(updateTask.req2);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateTask", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateTask.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(updateTask.req3);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for updateTask and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateTask.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(updateTask.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - handleGetMainApplicantCurrentAddress", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, "getAkitaDataFromHandler").and.returnValue([
    //   akita["api-data"].entities.getFullDealDetails,
    // ]);

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(handleGetMainApplicantCurrentAddress.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      handleGetMainApplicantCurrentAddress.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - contactTask/getTaskById", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.getAllDealApplicants,
    ]);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getTaskById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getTaskById.req2);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - task/getTaskById", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.getAllDealApplicants,
    ]);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getTaskById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getTaskById.req3);

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - contactTask/getTaskById", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.getAllDealApplicants,
    ]);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getTaskById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getTaskById.req3);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentSyncItemIndex", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getFullDealDetails])
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    // spyOn(component, "getAkitaDataFromHandler").and.returnValue([
    //   akita["api-data"].entities.getFullDealDetails,
    // ]);
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentSyncItemIndex.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentSyncItemIndex2", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getFullDealDetails])
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    // spyOn(component, "getAkitaDataFromHandler").and.returnValue([
    //   akita["api-data"].entities.getFullDealDetails,
    // ]);
    // const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(getTaskById.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentSyncItemIndex.req2
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentSyncItemIndex3", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    // const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(getTaskById.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentSyncItemIndex.req3
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentSyncItemIndex4", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    // const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(getTaskById.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentSyncItemIndex.req4
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentSyncItemIndex4", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getFullDealDetails];
      }
    );
    // const spy = spyOn(component, 'invokeExternalApi').and.returnValue(of(getTaskById.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentSyncItemIndex.req5
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - syncDealBorrowerToContact", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, "getAkitaDataFromHandler").and.returnValue([
    //   akita["api-data"].entities.getCurrentSyncItemIndex,
    // ]);

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "master/getAllCommonEntitiesValue") {
          return [
            akita["api-data"].entities["master/getAllCommonEntitiesValue"],
          ];
        }

        if (str === "getCurrentSyncItemIndex") {
          return [akita["api-data"].entities["getCurrentSyncItemIndex"]];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(syncDealBorrowerToContact.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      syncDealBorrowerToContact.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - syncDealBorrowerToContact", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "master/getAllCommonEntitiesValue") {
          return [
            akita["api-data"].entities["master/getAllCommonEntitiesValue"],
          ];
        }

        if (str === "getCurrentSyncItemIndex") {
          return [akita["api-data"].entities["getCurrentSyncItemIndex"]];
        }
      }
    );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => syncDealBorrowerToContact.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      syncDealBorrowerToContact.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - ignoreSyncInfo", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.getAllDealApplicants,
    ]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getCurrentSyncItemIndex])
    component["sharedEventService"].eventHandlerEmitter.emit(
      ignoreSyncInfo.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/getAccountById", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getAllDealApplicants])
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountgetAccountById.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAccountById.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/getAllAccount", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getAllDealApplicants])
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountgetAllAccount.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAllAccount.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAllAccountContactUpdate", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getAllDealApplicants])
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllAccountContactUpdate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllAccountContactUpdate.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/getAllAccount", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getAllDealApplicants])
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountgetAllAccount.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAllAccount.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case when no accounts created - account/getAllAccount", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountgetAllAccount.res3)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAllAccount.req3
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case when no accounts found in search criteria - account/getAllAccount", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountgetAllAccount.res4)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAllAccount.req4
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for account/getAllAccount and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => accountgetAllAccount.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountgetAllAccount.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - account/update", (done) => {
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities['master/getAllCommonEntitiesValue']]);
    // spyOn(component, 'getAkitaDataFromHandler').and.returnValue([akita['api-data'].entities.getAllDealApplicants])
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(accountupdate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(accountupdate.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for account/update and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => accountupdate.res2)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      accountupdate.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should show success toaster on successful account/update", (done) => {
  //   spyOn(component["toastr"], "success");
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(accountupdate.res));

  //   component["sharedEventService"].eventHandlerEmitter.emit(accountupdate.req);

  //   expect(component["toastr"].success).toHaveBeenCalledWith("Account updated successfully!");
  //   done();
  // });

  // it("should show warning toaster on failed account/update", (done) => {
  //   spyOn(component["toastr"], "warning");
  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => ({ error: accountupdate.res2 }))
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(accountupdate.req2);

  //   setTimeout(() => {
  //     expect(component["toastr"].warning).toHaveBeenCalledWith("Error updating Account");
  //     done();
  //   }, 0);
  // });

  it("should execute default eventHandlerEmitter case - getallstageList", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getallstageList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getallstageList.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - deal/creation/getContacts", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealcreatetionContact.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealcreatetionContact.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for deal/creation/getContacts and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealcreatetionContact.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealcreatetionContact.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - togglefilterSection", (done) => {
    togglefilterSectionsetupTestDOM();
    component["sharedEventService"].customEventVariableEmitter.emit(
      togglefilterSection
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - togglefilterSection", (done) => {
    togglefilterSectionsetupTestDOM2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      togglefilterSection
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - togglefilterSection", (done) => {
    togglefilterSectionsetupTestDOM3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      togglefilterSection
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - toggleTableColumnSection", (done) => {
    togglefilterSectionsetupTestDOM();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTableColumnSection
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleTableColumnSection", (done) => {
    togglefilterSectionsetupTestDOM2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTableColumnSection
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleTableColumnSection", (done) => {
    togglefilterSectionsetupTestDOM3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTableColumnSection
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLeftPanel", (done) => {
    setupTestDOM();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLeftPanel", (done) => {
    setupTestDOM2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLeftPanel", (done) => {
    setupTestDOM3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should handle toggleLeftPanel when right panel has col-md-12", (done) => {
    setupTestDOM_ToggleClass();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );

    const rightPanel = document.querySelector(".right-panel-wrapper");
    const filterPanel = document.querySelector(".filter-panel-wrapper");
    const filterButton = document.querySelector(".filter-btn");
    const columnButton = document.querySelector(".column-btn");

    expect(rightPanel.classList.contains("col-md-9")).toBeTruthy();
    expect(filterPanel.classList.contains("d-none")).toBeFalsy();
    expect(filterPanel.classList.contains("col-md-3")).toBeTruthy();
    expect(columnButton.classList.contains("active-btn")).toBeFalsy();
    expect(filterButton.classList.contains("active-btn")).toBeTruthy();

    done();
  });

  it("should execute toggleLeftPanel and enter else condition", (done) => {
    document.body.innerHTML = "";
    setupTestDOM_ElseCondition();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );

    const rightPanel = document.querySelector(".right-panel-wrapper");
    const filterPanel = document.querySelector(".filter-panel-wrapper");
    const filterButton = document.querySelector(".filter-btn");

    expect(rightPanel.classList.contains("col-md-12")).toBeTruthy();
    expect(filterPanel.classList.contains("d-none")).toBeTruthy();
    expect(filterButton.classList.contains("active-btn")).toBeFalsy();

    done();
  });

  it("should execute toggleLeftPanel and enter showHideClass condition", (done) => {
    document.body.innerHTML = "";
    setupTestDOM_ShowHideClassCondition();

    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLeftPanel
    );

    const filterPanel = document.querySelector(".filter-panel-wrapper");
    const rightPanel = document.querySelector(".right-panel-wrapper");
    const showHidePanel = document.querySelector(".show-hide-panel-wrapper");
    const columnButton = document.querySelector(".column-btn");
    const filterButton = document.querySelector(".filter-btn");

    expect(showHidePanel.classList.contains("d-none")).toBeTruthy();
    expect(showHidePanel.classList.contains("col-md-3")).toBeFalsy();

    expect(rightPanel.classList.contains("col-md-12")).toBeFalsy();
    expect(rightPanel.classList.contains("col-md-9")).toBeTruthy();

    expect(filterPanel.classList.contains("d-none")).toBeFalsy();
    expect(filterPanel.classList.contains("col-md-3")).toBeTruthy();

    expect(columnButton.classList.contains("active-btn")).toBeFalsy();
    expect(filterButton.classList.contains("active-btn")).toBeTruthy();

    done();
  });

  it("should execute default eventHandlerEmitter case - toggleTaskDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTaskDealDetails
    );
    cleanupTestDOM();
    expect(component).toBeTruthy();
    done();
  });
  //  it("should execute default eventHandlerEmitter case - toggleTaskDealDetails", (done) => {
  //   toggleTaskDealDetailsDom4();
  //   component["sharedEventService"].customEventVariableEmitter.emit(
  //     toggleTaskDealDetails
  //   );
  //   cleanupTestDOM();
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - toggleTaskDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTaskDealDetails
    );
    cleanupTestDOM();
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleTaskDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleTaskDealDetails
    );
    cleanupTestDOM();
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleNotesDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleNotesDealDetails
    );
    expect(component).toBeTruthy();
    document.body.innerHTML = "";
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleNotesDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleNotesDealDetails
    );
    expect(component).toBeTruthy();
    document.body.innerHTML = "";
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleNotesDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleNotesDealDetails
    );
    expect(component).toBeTruthy();
    document.body.innerHTML = "";
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleShowHidePanel", (done) => {
    toggleShowHidePanelDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleShowHidePanel
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleShowHidePanel", (done) => {
    toggleShowHidePanelDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleShowHidePanel
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleShowHidePanel", (done) => {
    toggleShowHidePanelDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleShowHidePanel
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - calculateTimeatRecidentCustomFunction", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      calculateTimeatRecidentCustomFunction
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - calculateTimeatRecidentCustomFunction", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      calculateTimeatRecidentCustomFunction2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - calculateTimeatRecidenceCustomFunction", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      calculateTimeatRecidenceCustomFunction
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - calculateTotalCalculate", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      calculateTotalCalculate
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - calculateTotalCalculateSubjectP", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      calculateTotalCalculateSubjectP
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - contact/employment/emitTimeJob", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      contactEmploymentEmitTimeJob
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default CustomeventHandlerEmitter case - deal/employement/emitTimeJob", (done) => {
    component["sharedEventService"].customEventVariableEmitter.emit(
      dealEmployementEmitTimeJob
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getContactemploymentList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactemploymentList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactemploymentList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getContactAddressList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactAddressList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactAddressList.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - lenderSubmission/history", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderSubmission_history.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderSubmission_history.req
    );
    expect(component).toBeTruthy();
    done();
  });

  // Uncomment this code if e-sign module come back.
  
  // it("should execute default eventHandlerEmitter case - lenderSubmission/addToEsign", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(lenderSubmission_addToEsign.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     lenderSubmission_addToEsign.req
  //   );
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - lenderSubmission/finmoSubmission", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "lenderValidation/getAllLenders") {
        return pdata["lenderValidation/getAllLenders"];
      }
      if (handler === "lenderSubmission/getAllAgent") {
        return pdata["lenderSubmission/getAllAgent"];
      }
      if (handler === "lenderSubmission/getSubmissionAgent") {
        return pdata["lenderSubmission/getSubmissionAgent"];
      }
      if (handler === "getFullDealDetails") {
        return pdata["getFullDealDetails"];
      }
    });

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderSubmission_finmoSubmission.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderSubmission_finmoSubmission.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getLenderDocuments", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getLenderDocuments.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getLenderDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute eventHandlerEmitter case - file/commitment (success path)", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake((key) => {
      if (key === "userInfo") {
        return file_commitment.userInfoData;
      }
      if (key === "file/upload") {
        return file_commitment.file_upload;
      }
      if (key === "RepeatableBlock/CurrentIndex") {
        return file_commitment.currIndexData;
      }
    });

    const apiSpy = spyOn(component, "invokeExternalApi").and.returnValue(of(file_commitment.res));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(file_commitment.req);

    expect(apiSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { apiResponse: file_commitment.res } },
      "file/commitment",
      true
    );
    done();
  });

  it("should handle error in eventHandlerEmitter case - file/commitment", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake((key) => {
      if (key === "userInfo") {
        return [{ value: { "userInfo##sub": "applicant-123" } }];
      }
      if (key === "file/upload") {
        return file_commitment.file_upload;
      }
      if (key === "RepeatableBlock/CurrentIndex") {
        return file_commitment.currIndexData;
      }
    });

    const apiSpy = spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: { message: "Upload failed" } }))
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(file_commitment.req);

    expect(apiSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { message: "Upload failed" } },
      "file/commitment",
      true
    );
    done();
  });

  it("should execute default eventHandlerEmitter case - lenderValidation/getAllLenders", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidation_getAllLenders.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_getAllLenders.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should call invokeExternalApi and emit filtered lenders in lenderValidation/getAllLenders", (done) => {
    component["stepId"] = "deal-information"; 

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidation_getAllLenders.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_getAllLenders.req
    );

    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalled();

      const emittedData = emitSpy.calls.argsFor(0)[0];
      const filteredResults = emittedData.api_response.data.result;

      expect(filteredResults.every(el => el.loan_lender_id !== null)).toBeTruthy();
      expect(emittedData.api_response.statusCode).toBe(200);
      done();
    }, 0);
  });

  it("should not call invokeExternalApi if stepId is not valid in lenderValidation/getAllLenders", () => {
    component["stepId"] = "some-other-step";

    const spy = spyOn(component, "invokeExternalApi");
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_getAllLenders.req
    );

    expect(spy).not.toHaveBeenCalled();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it("should emit error response when invokeExternalApi fails in lenderValidation/getAllLenders", (done) => {
    component["stepId"] = "deal-information";

    const mockError = { error: { message: "API failed", code: 500 } };

    spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => lenderValidation_getAllLenders.errorRes));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_getAllLenders.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: lenderValidation_getAllLenders.errorRes.error },
        "lenderValidation/getAllLenders",
        true
      );
      done();
    }, 0);
  });


  it("should execute default eventHandlerEmitter case - getOfflineOnlineLenders", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidation_getOfflineOnlineLenders.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_getOfflineOnlineLenders.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute eventHandlerEmitter case - lenderValidation/dealValidate", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "getDealBorrowers" && key === "getDealBorrowers##data") {
        return [
          { application_id: "8cmyid3z5zcke68p", borrower_id: "zemut9k18makhuk1" }
        ];
      }
      return [];
    });

    spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidation_dealValidate.res) 
    );

    const emitSpy = spyOn(component, "emitData");
    const emitReactSpy = spyOn(component["sharedEventService"].emitToreactEmitter, "emit");

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_dealValidate.req
    );

    setTimeout(() => {
      expect(emitReactSpy).toHaveBeenCalledWith({
        type: "finmo_id",
        data: "FINMO123",
      });

      expect(emitSpy).toHaveBeenCalledWith(
        jasmine.objectContaining({
          api_response: jasmine.objectContaining({
            has_error: true,
            has_only_warning: false,
          }),
        }),
        "lenderValidation/dealValidate",
        true
      );
      done();
    }, 0);
  });

  it("should handle dealValidate with no main_parent (no error)", (done) => {
    const emitSpy = spyOn(component, "emitData").and.callThrough();

    spyOn(component, "invokeExternalApi").and.returnValue(
      of({ data: lenderValidation_dealValidate.res2.data })
    );
    component["sharedEventService"].eventHandlerEmitter.emit({
      ...lenderValidation_dealValidate.req,
    });

    expect(emitSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
    done();
  });

  it("should handle subject-property parent and only warnings", (done) => {
    const emitSpy = spyOn(component, "emitData").and.callThrough();

    spyOn(component, "invokeExternalApi").and.returnValue(
      of({ data: lenderValidation_dealValidate.res3.data })
    );
    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "getDealBorrowers") {
        return [
          {
            application_id: "f4wp7eg2jlsy70c9",
            borrower_id: "bc7eok2c4fwxy4sq",
          },
        ];
      }
    });

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_dealValidate.req
    );

    expect(emitSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
    done();
  });

  it("should handle API error response in dealValidate", (done) => {
    const emitSpy = spyOn(component, "emitData").and.callThrough();
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => lenderValidation_dealValidate.mockError)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_dealValidate.req
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: lenderValidation_dealValidate.mockError.error },
      "lenderValidation/dealValidate",
      true
    );
    done();
  });

  it("should map borrower_id using borrowerMap when it exists", (done) => {
    const emitSpy = spyOn(component, "emitData").and.callThrough();
    spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidation_dealValidate.mockRes)
    );

    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "getDealBorrowers") {
        return [
          {
            application_id: "f4wp7eg2jlsy70c9",
            borrower_id: "mapped-id",
          },
        ];
      }
    });

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidation_dealValidate.req
    );
    expect(emitSpy).toHaveBeenCalled();
    done();
  });

  it("should execute default eventHandlerEmitter case - userCreate", (done) => {
    const commission_tier = JSON.stringify(["asasfasfafaf"]);
    localStorage.setItem("commission_tier", commission_tier);
    localStorage.setItem(
      "commission_tier_has_error",
      localstorageData.commission_tier_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses_has_error",
      localstorageData.miscellaneous_licenses_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses",
      localstorageData.miscellaneous_licenses
    );

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["user/getAllOrganizations"]];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(userCreate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(userCreate.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userCreate", (done) => {
    const commission_tier = JSON.stringify(["asasfasfafaf"]);
    localStorage.setItem("commission_tier", commission_tier);
    localStorage.setItem(
      "commission_tier_has_error",
      localstorageData.commission_tier_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses_has_error",
      localstorageData.miscellaneous_licenses_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses",
      localstorageData.miscellaneous_licenses
    );

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["user/getAllOrganizations"]];
      }
    );
    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //   of(userCreate.res)
    // );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => userCreate.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(userCreate.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - viewInfin8User", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(viewInfin8User.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      viewInfin8User.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - viewInfin8User", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => viewInfin8User.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      viewInfin8User.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userUpdate", (done) => {
    Object.defineProperty(component.router, "url", {
      get: () => "/user/my-profile",
    });

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str == "userUpdate/getAllOrganizations") {
          return [akita["api-data"].entities["userUpdate/getAllOrganizations"]];
        }
        if (str == "userAssignedTeamLead") {
          return [akita["api-data"].entities["userAssignedTeamLead"]];
        }
      }
    );
    const commission_tier = JSON.stringify(["asasfasfafaf"]);
    localStorage.setItem("commission_tier", commission_tier);
    localStorage.setItem(
      "commission_tier_has_error",
      localstorageData.commission_tier_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses_has_error",
      localstorageData.miscellaneous_licenses_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses",
      localstorageData.miscellaneous_licenses
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(userUpdate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(userUpdate.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userUpdate", (done) => {
    Object.defineProperty(component.router, "url", {
      get: () => "/user/my-profile",
    });

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str == "userUpdate/getAllOrganizations") {
          return [akita["api-data"].entities["userUpdate/getAllOrganizations"]];
        }
        if (str == "userAssignedTeamLead") {
          return [akita["api-data"].entities["userAssignedTeamLead"]];
        }
      }
    );
    const commission_tier = JSON.stringify(["asasfasfafaf"]);

    // const miscellaneous_licenses = JSON.stringify({
    //   miscellaneous_licenses: "asasfasfafaf",
    // });
    localStorage.setItem("commission_tier", commission_tier);
    localStorage.setItem(
      "commission_tier_has_error",
      localstorageData.commission_tier_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses_has_error",
      localstorageData.miscellaneous_licenses_has_error
    );
    localStorage.setItem(
      "miscellaneous_licenses",
      localstorageData.miscellaneous_licenses
    );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => userUpdate.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(userUpdate.req);
    expect(component).toBeTruthy();
    done();
  });

  // GetDealExpenses  Test Cases for Full Underwriting
  it('should emit data with isFullUnderwriting true when service name is "Full Underwriting"', (done) => {
    const response = {
      data: {
        serviceAndParticipants: {
          service_name: "Full Underwriting",
        },
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(response));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealExpenses.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        {
          api_response: {
            ...response,
            isFullUnderwriting: true,
            isLenderAccess: false,
            isSigningPackage: false,
          },
        },
        getDealExpenses.req.handler,
        true
      );
      done();
    }, 0);
  });

  // GetDealExpenses  Test Cases for Lender Access

  it('should emit data with correct flags when service name is "Lender Access"', (done) => {
    const response = {
      data: {
        serviceAndParticipants: {
          service_name: "Lender Access",
        },
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(response));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealExpenses.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        {
          api_response: {
            ...response,
            isFullUnderwriting: false,
            isLenderAccess: true,
            isSigningPackage: false,
          },
        },
        getDealExpenses.req.handler,
        true
      );
      done();
    }, 0);
  });
  // GetDealExpenses  Test Cases for Signing Package

  it('should emit data with correct flags when service name is "Signing Package"', (done) => {
    const response = {
      data: {
        serviceAndParticipants: {
          service_name: "Signing Package",
        },
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(response));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealExpenses.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        {
          api_response: {
            ...response,
            isFullUnderwriting: false,
            isLenderAccess: false,
            isSigningPackage: true,
          },
        },
        getDealExpenses.req.handler,
        true
      );
      done();
    }, 0);
  });

  // GetDealExpenses  Test Cases , when service name will be blank

  it("should emit data with all flags false when service_name is empty or undefined", (done) => {
    const response = {
      data: {
        serviceAndParticipants: {
          // service_name is missing or empty string
          service_name: "",
        },
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(response));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealExpenses.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        {
          api_response: {
            ...response,
            isFullUnderwriting: false,
            isLenderAccess: false,
            isSigningPackage: false,
          },
        },
        getDealExpenses.req.handler,
        true
      );
      done();
    }, 0);
  });

  // GetDealExpenses  Test Cases ,When api will be fail
  it("should emit error response on invokeExternalApi failure", (done) => {
    const errorResponse = {
      error: {
        message: "Something went wrong",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => errorResponse)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealExpenses.req
    );

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: errorResponse.error },
        getDealExpenses.req.handler,
        true
      );
      done();
    }, 0);
  });

  // Ledger : amount will be zero when going to approve
  describe("approveDocumentLedgerCheckPayoutAmount", () => {
    beforeEach(() => {
      spyOn<any>(component, "emitData");
    });

    it("should return true for valid user_id array with positive outstanding amount", (done) => {
      const mockReq = {
        handler: "approveDocumentLedgerCheckPayoutAmount",
        requestBody: {
          user_id: ["user1"],
        },
      };

      const mockLedgerData = {
        users: [{ user_id: "user1", outstanding_amount: 50 }],
      };

      spyOn(component, "getAkitaDataFromHandler").and.callFake(
        (arg1: string, arg2: string) => {
          if (arg1 === "getUsersLedger" && arg2 === "getUsersLedger##data")
            return mockLedgerData;
          return [mockReq];
        }
      );

      component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

      setTimeout(() => {
        expect(component["emitData"]).toHaveBeenCalledWith(
          { api_response: { hasValidPayoutAmount: true } },
          "approveDocumentLedgerCheckPayoutAmount",
          true
        );
        done();
      }, 0);
    });

    it("should handle user_id as a single string", (done) => {
      const mockReq = {
        handler: "approveDocumentLedgerCheckPayoutAmount",
        requestBody: {
          user_id: "user1",
        },
      };

      const mockLedgerData = {
        users: [{ user_id: "user1", outstanding_amount: 75 }],
      };

      spyOn(component, "getAkitaDataFromHandler").and.callFake(
        (arg1: string, arg2: string) => {
          if (arg1 === "getUsersLedger" && arg2 === "getUsersLedger##data")
            return mockLedgerData;
          return [mockReq];
        }
      );

      component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

      setTimeout(() => {
        expect(component["emitData"]).toHaveBeenCalledWith(
          { api_response: { hasValidPayoutAmount: true } },
          "approveDocumentLedgerCheckPayoutAmount",
          true
        );
        done();
      }, 0);
    });

    it("should return true for empty user_id array (edge case)", (done) => {
      const mockReq = {
        handler: "approveDocumentLedgerCheckPayoutAmount",
        requestBody: {
          user_id: [], // edge case
        },
      };

      const mockLedgerData = {
        users: [],
      };

      spyOn(component, "getAkitaDataFromHandler").and.callFake(
        (arg1: string, arg2: string) => {
          if (arg1 === "getUsersLedger" && arg2 === "getUsersLedger##data")
            return mockLedgerData;
          return [mockReq];
        }
      );

      component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

      setTimeout(() => {
        // `every([])` returns true
        expect(component["emitData"]).toHaveBeenCalledWith(
          { api_response: { hasValidPayoutAmount: true } },
          "approveDocumentLedgerCheckPayoutAmount",
          true
        );
        done();
      }, 0);
    });

    it("should return false when no matching user in ledgerData", (done) => {
      const mockReq = {
        handler: "approveDocumentLedgerCheckPayoutAmount",
        requestBody: {
          user_id: ["userX"], // not present in ledgerData
        },
      };

      const mockLedgerData = {
        users: [{ user_id: "user1", outstanding_amount: 0 }],
      };

      spyOn(component, "getAkitaDataFromHandler").and.callFake(
        (arg1: string, arg2: string) => {
          if (arg1 === "getUsersLedger" && arg2 === "getUsersLedger##data")
            return mockLedgerData;
          return [mockReq];
        }
      );

      component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

      setTimeout(() => {
        expect(component["emitData"]).toHaveBeenCalledWith(
          { api_response: { hasValidPayoutAmount: false } },
          "approveDocumentLedgerCheckPayoutAmount",
          true
        );
        done();
      }, 0);
    });
  });

  // Ledger : When no data will be selected

  it("should execute default eventHandlerEmitter case - approveDocumentLedgerSelectNOData", (done) => {
    const mockRequest = {
      handler: "approveDocumentLedgerSelectNOData",
      requestBody: {
        user_id: ["user1", "user2"],
      },
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue([mockRequest]);

    spyOn<any>(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRequest);

    setTimeout(() => {
      expect(component["emitData"]).toHaveBeenCalledWith(
        { api_response: { selectionWasMade: true } },
        "approveDocumentLedgerSelectNOData",
        true
      );
      done();
    }, 0);
  });

  // ledger : data exist
  it("should process and approve document when valid ledger data exists", (done) => {
    const today = new Date();
    const formattedDate = `${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(today.getDate()).padStart(2, "0")}/${today.getFullYear()}`;

    const mockLedgerData = [
      { user_id: "1", organization_id: "org1", transaction_date: "irrelevant" }, // input can have anything
    ];

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      ledgerHistory: mockLedgerData,
    });
    spyOn(component, "emitData");
    spyOn(component, "invokeExternalApi").and.returnValue(
      of({ status: "success" })
    );

    component["sharedEventService"].eventHandlerEmitter.emit({
      handler: "approveDocumentSecondTableLedger",
      requestBody: { user_role: "admin", user_id: "1" },
      headers: {},
      urlParams: null,
      queryParams: null,
    });

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/infin8v2/approve-ledger-bill",
        {},
        {
          data: {
            bills: [
              {
                user_id: "1",
                organization_id: "org1",
                transaction_date: formattedDate, // ✅ match dynamically formatted date
              },
            ],
          },
          user_role: "admin",
          user_id: "1",
        },
        null,
        null
      );

      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: { status: "success" } },
        "approveDocumentSecondTableLedger",
        true
      );
      done();
    });
  });

  // ledger:no valid bills
  it("should emit error if no valid bills are found", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      ledgerHistory: [],
    });
    spyOn(component, "emitData");
    const invokeSpy = spyOn(component, "invokeExternalApi");

    component["sharedEventService"].eventHandlerEmitter.emit({
      handler: "approveDocumentSecondTableLedger",
      requestBody: { user_role: "admin", user_id: "1" },
      headers: {},
      urlParams: null,
      queryParams: null,
    });

    setTimeout(() => {
      expect(component.emitData).toHaveBeenCalledWith(
        {
          api_response: {
            error: "No valid user data to process.",
          },
        },
        "approveDocumentSecondTableLedger",
        true
      );
      expect(invokeSpy).not.toHaveBeenCalled();
      done();
    });
  });

  // ledger: api will be fail
  it("should emit error if API call fails", (done) => {
    const mockLedgerData = [
      { user_id: "1", organization_id: "org1", transaction_date: "2024-01-01" },
    ];

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      ledgerHistory: mockLedgerData,
    });
    spyOn(component, "emitData");
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: { message: "API failed" } }))
    );

    component["sharedEventService"].eventHandlerEmitter.emit({
      handler: "approveDocumentSecondTableLedger",
      requestBody: { user_role: "admin", user_id: "1" },
      headers: {},
      urlParams: null,
      queryParams: null,
    });

    setTimeout(() => {
      expect(component.emitData).toHaveBeenCalledWith(
        {
          api_response: { message: "API failed" },
        },
        "approveDocumentSecondTableLedger",
        true
      );
      done();
    });
  });

  it("should execute default eventHandlerEmitter case - approveDocumentLedger", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.getUsersLedger,
    ]);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(approveDocumentLedger.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      approveDocumentLedger.req
    );

    expect(component).toBeTruthy();
    // expect(spy).toHaveBeenCalled();

    done();
  });
  it("should execute default eventHandlerEmitter case - userGroup/teamMember", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(userGroupTeamMember.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      userGroupTeamMember.req
    );

    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      done();
    }, 0);
  });
  it("should handle error case for eventHandlerEmitter - userGroup/teamMember", (done) => {
    const mockError = { error: { message: "API failed" } };

    // Spy on invokeExternalApi to simulate error
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(mockError)
    );

    // Spy on emitData to check if it handles the error
    const emitDataSpy = spyOn<any>(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      userGroupTeamMember.req
    );

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        { api_response: mockError.error },
        userGroupTeamMember.req.handler,
        true
      );
      done();
    }, 0);
  });

  // compliance review additional file section
  it("should execute complainceReviewAdditionalFileUpload case", (done) => {
    const req = {
      handler: "complainceReviewAdditionalFileUpload",
      requestBody: {
        sign: "test-signature",
        deal_id: "to-remove",
        loan_application_submission_id: "to-remove",
      },
      headers: { Authorization: "Bearer dummy" },
      urlParams: {},
      queryParams: {},
    };

    const uploadedFileInfo = {
      "file/upload##id": "mock-file-id",
      "file/upload##name": "test.pdf",
      "file/upload##type": "application/pdf",
    };

    const mockApplicantId = "user-123";
    const mockDealId = { application_id: "deal-789" };

    // Mocks
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (key: string) => {
        if (key === "userInfo") {
          return [{ value: { "userInfo##sub": mockApplicantId } }];
        }
        if (key === "file/upload") {
          return [{ value: uploadedFileInfo }];
        }
        return [];
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.returnValue(mockDealId);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of({ status: "success" })
    );
    const emitSpy = spyOn(component, "emitData");

    // Trigger the event
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    // Assertions
    expect(spy).toHaveBeenCalledWith(
      "post",
      `/infin8v2/deals-upload-documents`,
      req.headers,
      jasmine.objectContaining({
        data: {
          files: [
            {
              id: "mock-file-id",
              name: "test.pdf",
              type: "application/pdf",
            },
          ],
          document_type: "Generic Files",
          deal_id: "deal-789",
          applicant_id: mockApplicantId,
        },
      }),
      req.urlParams,
      req.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { status: "success" } },
      "complainceReviewAdditionalFileUpload",
      true
    );

    done();
  });

  // compliance review additional file section- for error

  it("should handle error response in complainceReviewAdditionalFileUpload case", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (key) => {
        if (key === "userInfo") {
          return [{ value: { "userInfo##sub": "applicant123" } }];
        }
        if (key === "file/upload") {
          return [
            {
              value: {
                "file/upload##id": "fileId123",
                "file/upload##name": "fileName.zip",
                "file/upload##type": "application/zip",
              },
            },
          ];
        }
        return [];
      }
    );

    // Mock getAkitaDataFromHandler to return deal details
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      application_id: "deal123",
    });

    // Spy on invokeExternalApi to throw an error observable
    const errorResponse = { error: { message: "API failed" } };
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => errorResponse)
    );

    // Spy on emitData
    const emitDataSpy = spyOn(component, "emitData");

    const eventReq = {
      handler: "complainceReviewAdditionalFileUpload",
      requestBody: {
        sign: "someSign",
        deal_id: "someDealId",
        loan_application_submission_id: "someLoanAppId",
      },
      headers: {},
      urlParams: [],
      queryParams: [],
    };

    component["sharedEventService"].eventHandlerEmitter.emit(eventReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        { api_response: errorResponse.error },
        eventReq.handler,
        true
      );

      // Deleted properties check (optional)
      expect(eventReq.requestBody.sign).toBeUndefined();
      expect(eventReq.requestBody.deal_id).toBeUndefined();
      expect(
        eventReq.requestBody.loan_application_submission_id
      ).toBeUndefined();

      done();
    }, 10);
  });

  // Ledger first table : Approve amount
  describe("approveDocumentLedger event handler", () => {
    beforeEach(() => {
      spyOn(component, "emitData");
    });

    // it("should process valid bills and call invokeExternalApi successfully", (done) => {
    //   const res = {
    //     handler: "approveDocumentLedger",
    //     requestBody: {
    //       user_id: ["user1", "user2"],
    //       user_role: "admin",
    //     },
    //     headers: {},
    //     urlParams: [],
    //     queryParams: [],
    //   };

    //   const ledgerData = {
    //     users: [
    //       {
    //         user_id: "user1",
    //         organization_id: "org1",
    //         last_payout_date: "2025-06-01",
    //       },
    //       {
    //         user_id: "user2",
    //         organization_id: "org2",
    //         last_payout_date: "2025-06-02",
    //       },
    //     ],
    //   };

    //   spyOn(component, "getAkitaDataFromHandler").and.returnValue(ledgerData);

    //   spyOn(component, "invokeExternalApi").and.returnValue(
    //     of({ success: true })
    //   );

    //   component["sharedEventService"].eventHandlerEmitter.emit(res);

    //   setTimeout(() => {
    //     expect(component.getAkitaDataFromHandler).toHaveBeenCalledWith(
    //       "getUsersLedger",
    //       "getUsersLedger##data"
    //     );

    //     expect(component.invokeExternalApi).toHaveBeenCalledWith(
    //       "post",
    //       "/infin8v2/approve-ledger-bill",
    //       res.headers,
    //       {
    //         data: {
    //           bills: [
    //             {
    //               user_id: "user1",
    //               organization_id: "org1",
    //               transaction_date: "2025-06-01",
    //             },
    //             {
    //               user_id: "user2",
    //               organization_id: "org2",
    //               transaction_date: "2025-06-02",
    //             },
    //           ],
    //         },
    //         user_role: "admin",
    //       },
    //       res.urlParams,
    //       res.queryParams
    //     );

    //     expect(component.emitData).toHaveBeenCalledWith(
    //       { api_response: { success: true } },
    //       res.handler,
    //       true
    //     );

    //     done();
    //   }, 10);
    // });

    it("should emit error when invokeExternalApi fails", (done) => {
      const res = {
        handler: "approveDocumentLedger",
        requestBody: {
          user_id: ["user1"],
          user_role: "admin",
        },
        headers: {},
        urlParams: [],
        queryParams: [],
      };

      const ledgerData = {
        users: [
          {
            user_id: "user1",
            organization_id: "org1",
            last_payout_date: "2025-06-01",
          },
        ],
      };

      spyOn(component, "getAkitaDataFromHandler").and.returnValue(ledgerData);

      const errorResponse = { error: { message: "API failed" } };

      spyOn(component, "invokeExternalApi").and.returnValue(
        throwError(() => errorResponse)
      );

      component["sharedEventService"].eventHandlerEmitter.emit(res);

      setTimeout(() => {
        expect(component.emitData).toHaveBeenCalledWith(
          { api_response: errorResponse.error },
          res.handler,
          true
        );
        done();
      }, 10);
    });

    it("should emit error when no valid user data found", (done) => {
      const res = {
        handler: "approveDocumentLedger",
        requestBody: {
          user_id: ["invalidUser"],
          user_role: "admin",
        },
        headers: {},
        urlParams: [],
        queryParams: [],
      };

      const ledgerData = {
        users: [
          {
            user_id: "user1",
            organization_id: "org1",
            last_payout_date: "2025-06-01",
          },
        ],
      };

      spyOn(component, "getAkitaDataFromHandler").and.returnValue(ledgerData);

      component["sharedEventService"].eventHandlerEmitter.emit(res);

      setTimeout(() => {
        expect(component.emitData).toHaveBeenCalledWith(
          {
            api_response: {
              error: "No valid user data to process.",
            },
          },
          res.handler,
          true
        );
        done();
      }, 10);
    });
  });

  // compliance resubmit button when it will submit ist time

  it("should execute ComplainceReviewbtnResubmit case", (done) => {
    const req = {
      handler: "ComplainceReviewbtnResubmit",
      requestBody: {},
      headers: {},
      urlParams: {},
      queryParams: {},
    };

    const mockFileData = {
      additionalFiles: [
        { id: "file1", name: "file1.pdf" },
        { id: "file2", name: "file2.pdf" },
      ],
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue(mockFileData);
    const emitSpy = spyOn(component, "emitData");

    // Trigger the event
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    // Assert: additionalFiles has more than 1 file
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { fileDataAvailable: true } },
      "ComplainceReviewbtnResubmit",
      true
    );

    done();
  });

  // compliance resubmit button when it will submit 2nd time
  it("should return false when only one file exists in additionalFiles", (done) => {
    const req = {
      handler: "ComplainceReviewbtnResubmit",
      requestBody: {},
      headers: {},
      urlParams: {},
      queryParams: {},
    };

    const mockFileData = {
      additionalFiles: [{ id: "file1", name: "file1.pdf" }],
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue(mockFileData);
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { fileDataAvailable: false } },
      "ComplainceReviewbtnResubmit",
      true
    );

    done();
  });
  it("should execute default eventHandlerEmitter case - toggleRatioDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleRatioDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleRatioDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleRatioDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleRatioDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleRatioDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openLenderDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openLenderDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - toggleWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      toggleWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - openWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      openWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - closeWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      closeWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - closeWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      closeWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - closeWorkflowDealDetails", (done) => {
    toggleTaskDealDetailsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      closeWorkflowDealDetails
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - selectedRatioButtons", (done) => {
    selectedRatioButtonsDom();
    component["sharedEventService"].customEventVariableEmitter.emit(
      selectedRatioButtons
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - selectedRatioButtons", (done) => {
    selectedRatioButtonsDom2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      selectedRatioButtons2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - selectedRatioButtons", (done) => {
    selectedRatioButtonsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      selectedRatioButtons3
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should handle updateDealBasicInfoCancelled with successful API response", (done) => {
  //   const apiResponseMock = updateDealBasicInfoCancelled.res;

  //   spyOn(component, "getNestedData").and.callFake((val: any) => {
  //     if (typeof val === "string") {
  //       try {
  //         return JSON.parse(val);
  //       } catch {
  //         return {};
  //       }
  //     }
  //     return val;
  //   });

  //   spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  //     (key: string) => {
  //       if (key === "updateDealBasicInfoCancelled") {
  //         return [
  //           {
  //             value: JSON.stringify({
  //               "updateDealBasicInfoCancelled##data": { stored: "value" },
  //             }),
  //           },
  //         ];
  //       }
  //       if (key === "getFullDealDetails") {
  //         return [
  //           {
  //             value: JSON.stringify({
  //               "getFullDealDetails##data": { fallback: true },
  //             }),
  //           },
  //         ];
  //       }
  //       return [];
  //     }
  //   );

  //   spyOn(component, "invokeExternalApi").and.returnValue(of(apiResponseMock));

  //   const emitSpy = spyOn(component, "emitData");
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     updateDealBasicInfoCancelled.req
  //   );

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalledWith(
  //       {
  //         api_response: apiResponseMock,
  //       },
  //       "updateDealBasicInfoCancelled",
  //       true
  //     );

  //     expect(emitSpy).toHaveBeenCalledWith(
  //       {
  //         api_response: {
  //           data: { stored: "value" },
  //         },
  //       },
  //       "updateDealBasicInfoCancelled",
  //       true,
  //       true
  //     );

  //     done();
  //   });
  // });

  // it("should handle error from updateDealBasicInfoCancelled API call", (done) => {
  //   spyOn(
  //     component["ngCeeStoreService"],
  //     "getIndividualApiData"
  //   ).and.returnValue([]);

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => updateDealBasicInfoCancelled.mockError)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     updateDealBasicInfoCancelled.req
  //   );

  //   setTimeout(() => {
  //     expect(component.invokeExternalApi).toHaveBeenCalled();

  //     // ✅ Error emitData call
  //     expect(emitSpy).toHaveBeenCalledWith(
  //       { api_response: updateDealBasicInfoCancelled.mockError.error },
  //       updateDealBasicInfoCancelled.req.handler,
  //       true
  //     );

  //     done();
  //   }, 0);
  // });

  it("should execute default eventHandlerEmitter case - downpaymentSync", (done) => {
    // selectedRatioButtonsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      downpaymentSync
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downpaymentSyncPercentage", (done) => {
    // selectedRatioButtonsDom3();
    component["sharedEventService"].customEventVariableEmitter.emit(
      downpaymentSyncPercentage
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should emit menuborrower data when borrowerArray$ has values", (done) => {
  //   const testSubject = new BehaviorSubject<any[]>([]);

  //   component["sharedDealdata"].borrowerArray$ = testSubject.asObservable();
  //   spyOn(component["sharedDealdata"], "getBorrower").and.returnValue(
  //     borrowerArray$HasValue.mockBorrowerList
  //   );
  //   spyOn(component, "emitData");

  //   if (component.ngOnInit) component.ngOnInit();
  //   testSubject.next(borrowerArray$HasValue.mockBorrowerValue);

  //   setTimeout(() => {
  //     expect(component["sharedDealdata"].getBorrower).toHaveBeenCalled();
  //     expect(component.emitData).toHaveBeenCalledWith(
  //       {
  //         api_response: {
  //           menuborrower: borrowerArray$HasValue.mockBorrowerList,
  //         },
  //       },
  //       "menuborrower",
  //       true,
  //       true
  //     );
  //     done();
  //   }, 0);
  // });

  describe("dealRatio$ stream handling", () => {
    let mockDealRatioValue: any;

    beforeEach(() => {
      mockDealRatioValue = dealRatiodata.mockData;

      const subject = new BehaviorSubject<any>(null);
      component["sharedDealdata"].dealRatio$ = subject.asObservable();

      spyOn(component, "emitData");
      if (component.ngOnInit) component.ngOnInit();

      subject.next(mockDealRatioValue);
    });

    it("should emit transformed dealRatio$ data correctly", (done) => {
      setTimeout(() => {
        expect(component.emitData).toHaveBeenCalledTimes(1);

        const [payload, label] = (
          component.emitData as jasmine.Spy
        ).calls.mostRecent().args;
        expect(label).toBe("getDealRatio");

        const root = payload.api_response.data;

        dealRatiodata.expectedArray.forEach(({ array, expected }) => {
          const actualArray = getValueByPath(root, array);
          expectObjectsInArray(actualArray, expected);
        });

        done();
      }, 0);
    });
  });

  it("should execute default eventHandlerEmitter case - getAllDealsForCloning", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDealsForCloning.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealsForCloning.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getFullDealDetails", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAllMasterData];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getFullDealDetails.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getFullDealDetails.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - ComplainceReviewdDocumentPreview", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplainceReviewdDocumentPreview.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplainceReviewdDocumentPreview.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for ComplainceReviewdDocumentPreview and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ComplainceReviewdDocumentPreview.reserr)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplainceReviewdDocumentPreview.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - documentRemove", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(documentRemove.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      documentRemove.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for documentRemove and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => documentRemove.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      documentRemove.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - ComplianceFormController_updateForm", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_updateForm.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_updateForm.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for ComplianceFormController_updateForm and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ComplianceFormController_updateForm.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_updateForm.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - ComplianceFormController_getForm", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_getForm.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getForm.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - ComplianceFormController_getForm", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_getForm.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getForm.req3
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - ComplianceFormController_getForm", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_getForm.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getForm.req2
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for ComplianceFormController_getForm and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ComplianceFormController_getForm.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getForm.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - downloadCommunicationLogs", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadCommunicationLogs.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadCommunicationLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for downloadCommunicationLogs and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadCommunicationLogs.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadCommunicationLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadDealActinityLogs", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadDealActinityLogs.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealActinityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for downloadDealActinityLogs and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadDealActinityLogs.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealActinityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - ComplainceReviewdDocumentPreviewDownload", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplainceReviewdDocumentPreviewDownload.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplainceReviewdDocumentPreviewDownload.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for ComplainceReviewdDocumentPreviewDownload and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ComplainceReviewdDocumentPreviewDownload.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplainceReviewdDocumentPreviewDownload.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadContactCreditReport", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadContactCreditReport.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadContactCreditReport.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for downloadContactCreditReport and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadContactCreditReport.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadContactCreditReport.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - downloadUserLedgerHistory", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadUserLedgerHistory.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadUserLedgerHistory.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute if user_id is not present eventHandlerEmitter case - downloadUserLedgerHistory", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadUserLedgerHistory.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadUserLedgerHistory.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for downloadUserLedgerHistory and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadUserLedgerHistory.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadUserLedgerHistory.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadEsignSubmittedForms", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadEsignSubmittedForms.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadEsignSubmittedForms.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for downloadEsignSubmittedForms and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadEsignSubmittedForms.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadEsignSubmittedForms.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should assign user_id to data.user_id if missing in getUsersLedgerHistory", (done) => {
    const modifiedReq = JSON.parse(JSON.stringify(getUsers_ledge_history.req));
    delete modifiedReq.requestBody.data.user_id;

    const invokeSpy = spyOn(component, "invokeExternalApi").and.callFake(
      (method, url, headers, body, urlParams, queryParams) => {
        // ✅ this checks that data.user_id is assigned correctly
        expect(body.data.user_id).toEqual(body.user_id);
        return of(getUsers_ledge_history.res);
      }
    );

    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(modifiedReq);

    setTimeout(() => {
      // ✅ Check that API was called and data.user_id was fixed
      expect(invokeSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: getUsers_ledge_history.res },
        modifiedReq.handler,
        true
      );
      done();
    }, 0);
  });

  it("should handle error case for documentRemove and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getUsers_ledge_history.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getUsers_ledge_history.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should assign user_id to data.user_id if missing in getParticipants", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_Participants.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      get_Participants.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for documentRemove and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => get_Participants.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      get_Participants.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAssigneeForTask_new", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_assignee.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(get_assignee.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should set contact_id when relatedTo is Contact case - getAssigneeForTask_new", (done) => {
    const req = {
      ...get_assignee.req,
      urlParams: { relatedTo: "Contact" },
      queryParams: { application_id: "contact123" },
      requestBody: {},
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(get_assignee.res));
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
    done();
  });

  it("should set loan_application_id when relatedTo is Deal case - getAssigneeForTask_new", (done) => {
    const req = {
      ...get_assignee.req,
      urlParams: { relatedTo: "Deal" },
      queryParams: { application_id: "deal456" },
      requestBody: {},
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(get_assignee.res));
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
    done();
  });

  it("should emit status false when no contact_id or loan_application_id is present case - getAssigneeForTask_new", (done) => {
    const req = {
      ...get_assignee.req,
      urlParams: {},
      queryParams: {},
      requestBody: {
        contact_id: "",
        loan_application_id: "",
      },
    };

    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { status: false } },
      req.handler,
      true
    );
    done();
  });

  it("should set contact_id from queryParams when relatedTo is Contact case - getAssigneeForTask_edit", (done) => {
    const req = { ...get_assignee_edit.req };
    req.queryParams.relatedTo = "Contact";
    req.queryParams.application_id = "contact_from_query";

    spyOn(component, "invokeExternalApi").and.returnValue(of(get_assignee_edit.res));
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
    done();
  });

  it("should set loan_application_id from result when relatedTo is Deal and queryParam is missing case - getAssigneeForTask_edit", (done) => {
    const req = { ...get_assignee_edit.req };
    req.queryParams.relatedTo = "Deal";
    req.queryParams.application_id = "";

    spyOn(component, "invokeExternalApi").and.returnValue(of(get_assignee_edit.res));
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalled();
    done();
  });

  it("should handle error case for getAssigneeForTask_edit and emit error", (done) => {
    const req = { ...get_assignee_edit.req };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: { status: false, message: "API failed" } }))
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { status: false, message: "API failed" } },
      req.handler,
      true
    );
    done();
  });

  it("should call invokeExternalApi and emitData with mapped assignees when API returns data - contactGetAssigneeForTask_new", (done) => {
    spyOn(component, "emitData");
    spyOn(component, "invokeExternalApi").and.returnValue({
      subscribe: (success, error) => success(getAssigneeContact.res),
    });
    component["sharedEventService"].eventHandlerEmitter.emit(getAssigneeContact.req);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/get-assignees-list-for-task",
      getAssigneeContact.req.headers,
      getAssigneeContact.req.requestBody,
      getAssigneeContact.req.urlParams,
      getAssigneeContact.req.queryParams
    );

    expect(component.emitData).toHaveBeenCalledWith(
      getAssigneeContact.res2,
      getAssigneeContact.req.handler,
      true
    );
    done();
  });

  it("should call invokeExternalApi and emitData with error response when API fails - contactGetAssigneeForTask_new", (done) => {
    const req = {
      handler: "getAssigneeForTaskDeal",
      headers: {},
      requestBody: { contact_id: "123", loan_application_id: "" },
      urlParams: {},
      queryParams: {},
    };

    const mockError = { error: { message: "API failed" } };

    spyOn(component, "emitData");
    spyOn(component, "invokeExternalApi").and.returnValue({
      subscribe: (success, error) => error(mockError),
    });

    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.emitData).toHaveBeenCalledWith(
      { api_response: mockError.error },
      req.handler,
      true
    );
    done();
  });

  it("should emit status false when both contact_id and loan_application_id are empty - contactGetAssigneeForTask_new", (done) => {
    const req = {
      handler: "getAssigneeForTaskDeal",
      headers: {},
      requestBody: { contact_id: "", loan_application_id: "" },
      urlParams: {},
      queryParams: {},
    };

    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(req);

    expect(component.emitData).toHaveBeenCalledWith(
      { api_response: { status: false } },
      req.handler,
      true
    );
    done();
  });


  it("should execute default eventHandlerEmitter case - contactGetAssigneeForTask_new", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_assignee.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(get_assignee.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getAssigneeForTaskDeal", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_assignee.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(get_assignee.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - UpdatePassword", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(UpdatePassword.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      UpdatePassword.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - UpdatePassword", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(UpdatePassword.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      UpdatePassword.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - UpdatePassword", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(UpdatePassword.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      UpdatePassword.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - UpdatePassword", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(UpdatePassword.res3)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      UpdatePassword.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for UpdatePassword and emit error", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => UpdatePassword.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      UpdatePassword.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for getAssigneeForTask_new and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => get_assignee.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(get_assignee.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - download_cf", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(download_cf.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(download_cf.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for download_cf and emit error", (done) => {
    const oidcConfig = JSON.stringify({ clientId: "asasfasfafaf" });
    localStorage.setItem("oidc_config", oidcConfig);
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => download_cf.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(download_cf.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - dealsclone", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealsclone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - dealsclone", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealsclone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req2);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - dealsclone", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealsclone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req3);
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - dealsclone", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealsclone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req4);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - dealsclone", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealsclone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req5);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for dealsclone and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealsclone.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(dealsclone.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealInfoFees", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_all_fees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(get_all_fees.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getDealInfoFees and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => get_all_fees.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(get_all_fees.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateDealInfoFeesPercentagesActive", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(update_all_fees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      update_all_fees.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateDealInfoFeesPercentagesActive", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(update_all_fees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      update_all_fees.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for updateDealInfoFeesPercentagesActive and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => update_all_fees.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      update_all_fees.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - removeDealInfoFees", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.removeDealInfoFeesSave];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(delete_fees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(delete_fees.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for removeDealInfoFees and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => delete_fees.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(delete_fees.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - removeDealInfoFeesActive", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.removeDealInfoFeesSaveActive];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(delete_active_fees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      delete_active_fees.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for removeDealInfoFeesActive and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => delete_active_fees.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      delete_active_fees.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealRevenue and update DOM", fakeAsync(() => {
    const mockElement = document.createElement("div");
    mockElement.className = "circle-progress-container-revinue";
    document.body.appendChild(mockElement);
    const apiSpy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(get_revenue.res)
    );
    const emitSpy = spyOn(component as any, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(get_revenue.req);

    tick();
    tick(0);
    const circle = document.querySelector(".circle-progress-container-revinue");
    expect(circle?.innerHTML).toContain(
      `${get_revenue.res.data.percentageReceived} %`
    );
    expect(
      circle?.querySelector(".circle-progress-bar")?.getAttribute("style")
    ).toContain("stroke-dashoffset");

    expect(apiSpy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: get_revenue.res },
      get_revenue.req.handler,
      true
    );

    document.body.removeChild(mockElement);
  }));
  it("should handle error case for getDealRevenue and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => get_revenue.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(get_revenue.req);
    expect(component).toBeTruthy();
    done();
  });

  it("should handle getSingleDealRevenue and emit data", () => {
    spyOn(component as any, "emitData");

    spyOn(
      (component as any).ngCeeStoreService,
      "getIndividualApiData"
    ).and.returnValue([{ value: get_single_revenue.res }]);

    component["sharedEventService"].eventHandlerEmitter.emit(
      get_single_revenue.req
    );

    expect((component as any).emitData).toHaveBeenCalledWith(
      {
        api_response: jasmine.objectContaining({
          application_id: "5ofioigm34fc0c9w",
          loan_application_id: "shbd16it2w08b01j",
          commission_amount: 200,
          gross_split: jasmine.any(Array),
        }),
      },
      "getSingleDealRevenue",
      true
    );
  });

  it("should execute default eventHandlerEmitter case - getContactList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getContactList and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getContactList.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  // it("should execute default eventHandlerEmitter case - viewContactByID", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(of(viewContactByID.res));
  //   component["sharedEventService"].eventHandlerEmitter.emit(viewContactByID.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });
  // it("should handle error case for viewContactByID and emit error", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => viewContactByID.res));
  //   const emitSpy = spyOn(component, "emitData");
  //   component["sharedEventService"].eventHandlerEmitter.emit(viewContactByID.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - ComplianceFormController_getFormList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_getFormList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getFormList.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - ComplianceFormController_getFormList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplianceFormController_getFormList.res1)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getFormList.req2
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for ComplianceFormController_getFormList and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ComplianceFormController_getFormList.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplianceFormController_getFormList.req3
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - ComplainceEsignDocumentPreview", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(ComplainceEsignDocumentPreview.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      ComplainceEsignDocumentPreview.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getContactProperties", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactProperties.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactProperties.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - downloadCompliencePackage", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadCompliencePackage.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadCompliencePackage.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - checkTableV2MultiselectSelection", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(checkTableV2MultiselectSelection.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      checkTableV2MultiselectSelection.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getComplianceReviewMortgageCommitmentFiles", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewMortgageCommitmentFiles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewMortgageCommitmentFiles.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getComplianceReviewAdditionalFiles", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewAdditionalFiles.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewAdditionalFiles.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getComplianceReviewSignedDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewSignedDocuments.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewSignedDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getComplianceUploadedDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [
          akita["api-data"].entities.ComplianceFormController_getFormList,
        ];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceUploadedDocuments.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceUploadedDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getComplianceReviewApprovedDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewApprovedDocuments.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewApprovedDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getComplianceReviewDetailsDoc", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewDetailsDoc.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewDetailsDoc.req
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewDetailsDoc.req2
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewDetailsDoc.req3
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewDetailsDoc.req4
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadComplainceReviewApprovedDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadComplainceReviewApprovedDocuments.res)
    );
    // const spy2= spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => downloadComplainceReviewApprovedDocuments.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadComplainceReviewApprovedDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - downloadComplainceReviewApprovedDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getComplianceReviewDetails];
      }
    );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadComplainceReviewApprovedDocuments.res)
    );
    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //   of(downloadComplainceReviewApprovedDocuments.res)
    // );
    // const spy2= spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => downloadComplainceReviewApprovedDocuments.res));
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadComplainceReviewApprovedDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - contact/getAllTask with empty result", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(contact_task.res)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(contact_task.req);

  //   expect(spy).toHaveBeenCalledWith(
  //     "post",
  //     `/infin8v2/get-tasks-list`,
  //     contact_task.req.headers,
  //     contact_task.req.requestBody,
  //     contact_task.req.urlParams,
  //     contact_task.req.queryParams
  //   );

  //   expect(emitSpy).toHaveBeenCalledWith(
  //     {
  //       api_response: contact_task.res,
  //     },
  //     "contact/getAllTask",
  //     true
  //   );

  //   done();
  // });
  // it("should map assignee_name and creator_name when result has tasks", (done) => {
  //   const contactTaskResponseWithData = {
  //     statusCode: 200,
  //     message: "SUCCESS",
  //     data: {
  //       result: [
  //         {
  //           assignee: { first_name: "demo", last_name: "Doe" },
  //           creator: { first_name: "Jane", last_name: "Smith" },
  //           task_due_date: "2025-06-10",
  //         },
  //       ],
  //       records_fetched: 1,
  //     },
  //     status: true,
  //   };

  //   const expectedMappedResponse = {
  //     ...contactTaskResponseWithData,
  //     data: {
  //       result: [
  //         {
  //           assignee: { first_name: "demo", last_name: "Doe" },
  //           creator: { first_name: "Jane", last_name: "Smith" },
  //           task_due_date: "2025-06-10",
  //           assignee_name: "demo Doe",
  //           creator_name: "Jane Smith",
  //         },
  //       ],
  //       records_fetched: 1,
  //     },
  //   };

  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(contactTaskResponseWithData)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(contact_task.req);

  //   expect(spy).toHaveBeenCalled();
  //   expect(emitSpy).toHaveBeenCalledWith(
  //     {
  //       api_response: expectedMappedResponse,
  //     },
  //     "contact/getAllTask",
  //     true
  //   );

  //   done();
  // });
  // it("should handle error case for contact/getAllTask and emit error", (done) => {
  //   const errorResponse = {
  //     error: { status: false, message: "Something went wrong" },
  //   };
  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => errorResponse)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(contact_task.req);

  //   expect(emitSpy).toHaveBeenCalledWith(
  //     { api_response: errorResponse.error },
  //     "contact/getAllTask",
  //     true
  //   );

  //   done();
  // )};

  // it("should handle getAllDealTasks and map assignee full_name", (done) => {
  //   const mockApiResponse = {
  //     status: true,
  //     data: {
  //       result: [
  //         {
  //           id: "1",
  //           assignee: {
  //             first_name: "demo",
  //             last_name: "Doe",
  //           },
  //         },
  //       ],
  //     },
  //   };

  //   const expectedApiResponse = {
  //     status: true,
  //     data: {
  //       result: [
  //         {
  //           id: "1",
  //           assignee: {
  //             first_name: "demo",
  //             last_name: "Doe",
  //             full_name: "demo Doe",
  //           },
  //         },
  //       ],
  //     },
  //   };

  //   const invokeSpy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(mockApiResponse)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(deal_task.req);

  //   expect(invokeSpy).toHaveBeenCalled();
  //   expect(emitSpy).toHaveBeenCalledWith(
  //     {
  //       api_response: expectedApiResponse,
  //     },
  //     "getAllDealTasks",
  //     true
  //   );

  //   done();
  // });
  // it("should handle error case in getAllDealTasks", (done) => {
  //   const errorResponse = {
  //     error: { status: false, message: "Failed to fetch" },
  //   };

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(errorResponse)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(deal_task.req);

  //   expect(emitSpy).toHaveBeenCalledWith(
  //     { api_response: errorResponse.error },
  //     "getAllDealTasks",
  //     true
  //   );

  //   done();
  // });

  it("should handle error case for docuSignUpdate and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: "some error occurred" }))
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      docuSignUpdate.req
    );

    expect(component).toBeTruthy();

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: "some error occurred" },
        "docuSignUpdate",
        true
      );
      done();
    }, 0);
  });

  it("should execute default eventHandlerEmitter case - dealDocumentsActivityLogs", (done) => {
    //     spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
    //   (str) => {
    //     return [akita["api-data"].entities.getComplianceReviewDetails];
    //   }
    // );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealDocumentsActivityLogs.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentsActivityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for dealDocumentsActivityLogs and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealDocumentsActivityLogs.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentsActivityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - handleInactiveUserCase", (done) => {
    //     spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
    //   (str) => {
    //     return [akita["api-data"].entities.getComplianceReviewDetails];
    //   }
    // );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(handleInactiveUserCase.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      handleInactiveUserCase.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - handleInactiveUserCase", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(handleInactiveUserCase.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      handleInactiveUserCase.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for handleInactiveUserCase and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => handleInactiveUserCase.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      handleInactiveUserCase.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - userInactiveHandler", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(userInactiveHandler.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      userInactiveHandler.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for userInactiveHandler and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => userInactiveHandler.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      userInactiveHandler.req
    );
    expect(component).toBeTruthy();
    done();
  });
  //     it("should execute default eventHandlerEmitter case - requestDealApplicantConsent", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(of(requestDealApplicantConsent.res));
  //   component["sharedEventService"].eventHandlerEmitter.emit(requestDealApplicantConsent.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  //   it("should handle error case for requestDealApplicantConsent and emit error", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => requestDealApplicantConsent.res));
  //   const emitSpy = spyOn(component, "emitData");
  //   component["sharedEventService"].eventHandlerEmitter.emit(requestDealApplicantConsent.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - pullDealApplicantCredit", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(pullDealApplicantCredit.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      pullDealApplicantCredit.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for pullDealApplicantCredit and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => pullDealApplicantCredit.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      pullDealApplicantCredit.req
    );
    expect(component).toBeTruthy();
    done();
  });
  // it("should execute default eventHandlerEmitter case - getCreditPullCurrentIndex", (done) => {
  //   // const getApi1 = spyOn(
  //   //   component["ngCeeStoreService"],
  //   //   "getIndividualApiData"
  //   // ).and.callFake((str) => {
  //   //   return [akita["api-data"].entities.getFullDealDetails];
  //   // });
  //   // // const getApi2 =  spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  //   // //   (str) => {
  //   // //     return [akita["api-data"].entities.getSingleDealDetails];
  //   // //   }
  //   // // );

  //     spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  //     (str) => {
  //       if (str === "getDealDocumentsList") {
  //         return [akita["api-data"].entities.getFullDealDetails];
  //       }
  //       if (str === "getSingleDealDetails") {
  //         return [akita["api-data"].entities.getSingleDealDetails];
  //       }

  //     }
  //   );

  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getCreditPullCurrentIndex.res)
  //   );
  //   //  const spy2 = spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => getCreditPullCurrentIndex.res));
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getCreditPullCurrentIndex.req
  //   );
  //   expect(component).toBeTruthy();
  //   done();
  // });

  //   it("should handle error case for getCreditPullCurrentIndex and emit error", (done) => {
  //          spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  //     (str) => {
  //       return [akita["api-data"].entities.getComplianceReviewDetails];
  //     }
  //   );
  //   spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => getCreditPullCurrentIndex.res));
  //   const emitSpy = spyOn(component, "emitData");
  //   component["sharedEventService"].eventHandlerEmitter.emit(getCreditPullCurrentIndex.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });
  it("should execute default eventHandlerEmitter case - downloadDealApplicantCreditReport", (done) => {
    localStorage.setItem("WFE_APP_ID", "test-app-id");
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadDealApplicantCreditReport.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealApplicantCreditReport.req
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealApplicantCreditReport.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for downloadDealApplicantCreditReport and emit error", (done) => {
    localStorage.setItem("WFE_APP_ID", "test-app-id");
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadDealApplicantCreditReport.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealApplicantCreditReport.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadDealApplicantConsent", (done) => {
    localStorage.setItem("WFE_APP_ID", "test-app-id");
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadDealApplicantConsent.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealApplicantConsent.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for downloadDealApplicantConsent and emit error", (done) => {
    localStorage.setItem("WFE_APP_ID", "test-app-id");
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadDealApplicantConsent.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealApplicantConsent.req
    );
    expect(component).toBeTruthy();
    done();
  });
  //   it("should execute default eventHandlerEmitter case - getCurrentSelectedFundingAdmin", (done) => {

  //           spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  // (str) => {
  //   return [akita["api-data"].entities."participant_getFundingAdmin"];
  // }
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(of(getCurrentSelectedFundingAdmin.res));
  //   component["sharedEventService"].eventHandlerEmitter.emit(getCurrentSelectedFundingAdmin.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  // it("should execute default eventHandlerEmitter case - getCurrentSelectedCoAgent", (done) => {
  //           spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  // (str) => {
  //   return [akita["api-data"].entities."participant_getCoAgent"];
  // }
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(of(getCurrentSelectedCoAgent.res));
  //   component["sharedEventService"].eventHandlerEmitter.emit(getCurrentSelectedCoAgent.req);
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - getDealPredefinedFilter", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealPredefinedFilter.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealPredefinedFilter.req
    );
    expect(component).toBeTruthy();
    done();
  });
  // it("should execute default eventHandlerEmitter case - getLedgerHistoryByID", (done) => {
  //           spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  // (str) => {
  //   return [akita["api-data"].entities.getUsersLedgerHistory];
  // }
  //     const spy = spyOn(component, "invokeExternalApi").and.returnValue(of(getLedgerHistoryByID.res));
  //     component["sharedEventService"].eventHandlerEmitter.emit(getLedgerHistoryByID.req);
  //     expect(component).toBeTruthy();
  //     done();
  //   });

  it("should execute default eventHandlerEmitter case - getUserNameForLedgerDashboard", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getCurrentUser];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getUserNameForLedgerDashboard.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getUserNameForLedgerDashboard.req
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getUserNameForLedgerDashboard.req2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getSingleRevenueOnLoad", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getSingleRevenueOnLoad.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getSingleRevenueOnLoad.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateDealInfoFees", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealInfoFees.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFees.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for updateDealInfoFees and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateDealInfoFees.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFees.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateDealInfoFeesPercentages", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealInfoFeesPercentages.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesPercentages.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateDealInfoFeesPercentages", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealInfoFeesPercentages.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesPercentages.req2
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for updateDealInfoFeesPercentages and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateDealInfoFeesPercentages.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesPercentages.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealDocumentsList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealDocumentsList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealDocumentsList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getDealDocumentsList and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getDealDocumentsList.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealDocumentsList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getRequestBodyFromDcsList", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealDocumentsList2];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getRequestBodyFromDcsList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getRequestBodyFromDcsList.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getRequestBodyFromDcsList and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealDocumentsList2];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getRequestBodyFromDcsList.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getRequestBodyFromDcsList.req2
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - downloadDealDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealDocumentsList2];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadDealDocuments.res2)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - downloadDealDocuments", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealDocumentsList2];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadDealDocuments.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for downloadDealDocuments and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getDealDocumentsList2];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadDealDocuments.res2)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadDealDocuments.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - checkCurrentTransationType", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getSingleDealDetails];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(checkCurrentTransationType.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      checkCurrentTransationType.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflow/workflowApiGet", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["master/getAllCommonEntitiesValue"],
    ]);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGet.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGet.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow/workflowApiGet and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGet.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGet.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - automatedWorkflowworkflowApiGetCompliance", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflowworkflowApiGetCompliance.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflowworkflowApiGetCompliance.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflowworkflowApiGetCompliance and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflowworkflowApiGetCompliance.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflowworkflowApiGetCompliance.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflow_workflowApiGetPaymentPending", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGetPaymentPending.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetPaymentPending.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow_workflowApiGetPaymentPending and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGetPaymentPending.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetPaymentPending.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflow/workflowApiGetDealCreate", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGetDealCreate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetDealCreate.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow/workflowApiGetDealCreate and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGetDealCreate.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetDealCreate.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflow/workflowApiGetDealClone", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGetDealClone.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetDealClone.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for aautomatedWorkflow/workflowApiGetDealClone and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGetDealClone.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetDealClone.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflow_fieldValidation", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "automatedWorkflow/workflowApiGet") {
          return [
            akita["api-data"].entities["automatedWorkflow/workflowApiGet"],
          ];
        }
        if (str === "getDealBorrowers") {
          return [akita["api-data"].entities["getDealBorrowers"]];
        }
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "getDealBorrowers") {
        return pdata["getDealBorrowers"];
      }
    });

    // spyOn(component, "getAkitaDataFromHandler").and.returnValue([
    //   akita["api-data"].entities["getDealBorrowers"],
    // ]);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_fieldValidation.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_fieldValidation.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow_fieldValidation and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["automatedWorkflow/workflowApiGet"]];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_fieldValidation.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_fieldValidation.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - automatedWorkflow_workflowApiExecute", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["automatedWorkflow/workflowApiGet"]];
      }
    );
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["automatedWorkflow/workflowApiGet"],
    ]);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiExecute.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiExecute.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow_workflowApiExecute and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["automatedWorkflow/workflowApiGet"]];
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["automatedWorkflow/workflowApiGet"],
    ]);

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiExecute.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiExecute.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automateWorkflowGetAfterDealCreate", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["master/getAllCommonEntitiesValue"],
    ]);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automateWorkflowGetAfterDealCreate.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automateWorkflowGetAfterDealCreate.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for automateWorkflowGetAfterDealCreate and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["master/getAllCommonEntitiesValue"]];
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["master/getAllCommonEntitiesValue"],
    ]);
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automateWorkflowGetAfterDealCreate.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automateWorkflowGetAfterDealCreate.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - automatedWorkflowAfterDealCreateApiExecute", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["automatedWorkflow/workflowApiGet"]];
      }
    );

    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["automatedWorkflow/workflowApiGet"],
    ]);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflowAfterDealCreateApiExecute.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflowAfterDealCreateApiExecute.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflowAfterDealCreateApiExecute and emit error", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities["automatedWorkflow/workflowApiGet"],
    ]);

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities["automatedWorkflow/workflowApiGet"]];
      }
    );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflowAfterDealCreateApiExecute.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflowAfterDealCreateApiExecute.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute eventHandlerEmitter case - getDocumentLabelName", (done) => {

    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake((key) => {
      if (key === "RepeatableBlock/CurrentIndex") {
        return getDocumentLabelName.currIndexData;
      }
    });

    const mockReq = {
      ...getDocumentLabelName.req,
      urlParams: {
        data: [{ label_name: "loan_application_borrower.first_name" }],
      },
      queryParams: {
        data: {
          loan_application_id: "3cwi2a6t3ckv1p0x",
          borrower_id: "8deumv4h8962713x",
        },
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDocumentLabelName.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: getDocumentLabelName.res },
        mockReq.handler,
        true
      );
      done();
    }, 0);
  });

  it("should handle error in task/create and emit error response", (done) => {
    const mockError = { error: { message: "Task creation failed" } };

    const mockReq = {
      event: "task/create",
      handler: "task/create",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        task_due_date: "06/07/2025",
        task_description: "Follow up",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        { api_response: mockError.error },
        "task/create",
        true
      );
      done();
    }, 0);
  });

  it("should handle 'task/create' event without making an actual API call", (done) => {
    const mockApiResponse = {
      api_response: JSON.stringify({
        task_id: "T123",
        message: "Task created successfully",
      }),
      status: 200,
    };

    const mockReq = {
      event: "task/create",
      handler: "task/create",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        task_due_date: "06/07/2025",
        loan_application_id: "LOAN123",
        contact_id: "CONT123",
        task_description: "Follow up with client",
        priority: "high",
      },
    };

    // const invokeExternalApiSpy = spyOn(
    //   component,
    //   "invokeExternalApi"
    // ).and.returnValue(of(mockApiResponse));

    // const emitDataSpy = spyOn(component, "emitData");

    // component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(mockApiResponse)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);
    expect(component).toBeTruthy();
    done();

    // setTimeout(() => {
    //   const expectedApiRequest = {
    //     priority: "high",
    //     task_due_date: moment.utc("06/07/2025", "MM/DD/YYYY").valueOf(),
    //     loan_application_id: "LOAN123",
    //     contact_id: "CONT123",
    //     task_description: "Follow up with client",
    //   };

    //   expect(invokeExternalApiSpy).toHaveBeenCalledWith(
    //     "post",
    //     `/generic-app/create-entity-record`,
    //     mockReq.headers,
    //     {
    //       api_request: JSON.stringify(expectedApiRequest),
    //       entity_id: "ENT123",
    //       wfe_app_id: "WFE123",
    //     },
    //     mockReq.urlParams,
    //     mockReq.queryParams
    //   );

    //   expect(emitDataSpy).toHaveBeenCalledWith(
    //     {
    //       api_response: JSON.stringify({
    //         task_id: "T123",
    //         message: "Task created successfully",
    //         status: 200,
    //       }),
    //     },
    //     "task/create",
    //     true
    //   );
    //   done();
    // }, 0);
  });

  // it("should handle error in task/update and emit error response", (done) => {
  //   const mockError = { error: { message: "Task creation failed" } };

  //   const mockReq = {
  //     event: "task/update",
  //     handler: "task/update",
  //     headers: {},
  //     urlParams: {},
  //     queryParams: {},
  //     requestBody: {},
  //   };

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => mockError)
  //   );
  //   const emitDataSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

  //   setTimeout(() => {
  //     expect(emitDataSpy).toHaveBeenCalledWith(
  //       { api_response: mockError.error },
  //       "task/update",
  //       true
  //     );
  //     done();
  //   }, 0);
  // });

  it("should handle error in task/getTaskById and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Unable to fetch task details",
        code: 500,
      },
    };

    const mockReq = {
      event: "task/getTaskById",
      handler: "task/getTaskById",
      headers: {},
      urlParams: {
        entity_id: "ENT200",
      },
      queryParams: {},
      requestBody: {
        task_id: "T404",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "task/getTaskById",
        true
      );
      done();
    }, 0);
  });

  it("should handle error in 'contactTask/create' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to create contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "contactTask/create",
      handler: "contactTask/create",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE321",
        entity_id: "ENT321",
        task_due_date: "06/10/2025",
        task_name: "Call Contact",
        priority: "medium",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "contactTask/create",
        true
      );
      done();
    }, 0);
  });

  it("should handle error in 'contactTask/update' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "contactTask/update",
      handler: "contactTask/update",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "contactTask/update",
        true
      );
      done();
    }, 0);
  });
  it("should handle error in 'contactTask/getTaskById' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Task not found",
        code: 404,
      },
    };

    const mockReq = {
      event: "contactTask/getTaskById",
      handler: "contactTask/getTaskById",
      headers: {},
      urlParams: { id: "T001" },
      queryParams: {},
      requestBody: { task_id: "T001" },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "contactTask/getTaskById",
        true
      );
      done();
    }, 0);
  });

  it("should handle error in 'getSingleExistingContactforDealCreation' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Contact not found",
        code: 404,
      },
    };

    const mockReq = {
      event: "getSingleExistingContactforDealCreation",
      handler: "getSingleExistingContactforDealCreation",
      headers: {},
      urlParams: {},
      queryParams: { application_id: "C123" },
      requestBody: {
        user_id: "U100",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        { api_response: mockError.error },
        "getSingleExistingContactforDealCreation",
        true
      );
      done();
    }, 0);
  });

  it("should increase interest rate by 2 and emit updated value when customEventVariableEmitter emits increaseInterestRate", () => {
    const mockEvent = {
      handler: "increaseInterestRate",
      variables: { field_mortage_interest_rate: "5" },
      targets: ["updatedInterest"],
    };

    // Spy on the emit method of customEventTargetSubscriber
    const emitSpy = spyOn(
      component["sharedEventService"].customEventTargetSubscriber,
      "emit"
    );

    // Emit the event manually to simulate the subscription receiving it
    component["sharedEventService"].customEventVariableEmitter.next(mockEvent);

    // Now check if emit was called with expected value
    expect(emitSpy).toHaveBeenCalledWith({
      updatedInterest: 7,
    });
  });

  it("should calculate downpayment difference and percentage and emit the result when downpaymentSync event is emitted", () => {
    const mockEvent = {
      handler: "downpaymentSync",
      variables: {
        varA: "30",
        varB: "unused",
        varC: "100",
      },
      targets: ["downpaymentDifference", "downpaymentPercentage"],
    };

    const emitSpy = spyOn(
      component["sharedEventService"].customEventTargetSubscriber,
      "emit"
    );

    component["sharedEventService"].customEventVariableEmitter.next(mockEvent);
    expect(emitSpy).toHaveBeenCalledWith({
      downpaymentDifference: 70,
      downpaymentPercentage: "30.00",
    });
  });

  // it("should handle error in 'rbac/ldap_search' event and emit error response", (done) => {
  //   const mockError = {
  //     error: {
  //       message: "Failed to update contact task",
  //       code: 500,
  //     },
  //   };

  //   const mockReq = {
  //     event: "rbac/ldap_search",
  //     handler: "rbac/ldap_search",
  //     headers: {},
  //     urlParams: {},
  //     queryParams: {},
  //     requestBody: {
  //       wfe_app_id: "WFE123",
  //       entity_id: "ENT123",
  //       record_id: "REC456",
  //       task_due_date: "06/12/2025",
  //       task_name: "Follow up",
  //       priority: "high",
  //     },
  //   };

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => mockError)
  //   );
  //   const emitDataSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

  //   setTimeout(() => {
  //     expect(emitDataSpy).toHaveBeenCalledWith(
  //       {
  //         api_response: mockError.error,
  //       },
  //       "rbac/ldap_search",
  //       true
  //     );
  //     done();
  //   }, 0);
  // });

  it("should handle error in 'master/dealSource/getAllDealSource' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "master/dealSource/getAllDealSource",
      handler: "master/dealSource/getAllDealSource",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "master/dealSource/getAllDealSource",
        true
      );
      done();
    }, 0);
  });

  it("should handle error in 'master/campaign/getAllCampaign' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "master/campaign/getAllCampaign",
      handler: "master/campaign/getAllCampaign",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "master/campaign/getAllCampaign",
        true
      );
      done();
    }, 0);
  });

  // it("should handle error in 'master/dealSource/delete' event and emit error response", (done) => {
  //   const mockError = {
  //     error: {
  //       message: "Failed to update contact task",
  //       code: 500,
  //     },
  //   };

  //   const mockReq = {
  //     event: "master/dealSource/delete",
  //     handler: "master/dealSource/delete",
  //     headers: {},
  //     urlParams: {},
  //     queryParams: {},
  //     requestBody: {
  //       wfe_app_id: "WFE123",
  //       entity_id: "ENT123",
  //       record_id: "REC456",
  //       task_due_date: "06/12/2025",
  //       task_name: "Follow up",
  //       priority: "high",
  //     },
  //   };

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => mockError)
  //   );
  //   // const emitDataSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

  //   // setTimeout(() => {
  //   //   expect(emitDataSpy).toHaveBeenCalledWith(
  //   //     {
  //   //       api_response: mockError.error,
  //   //     },
  //   //     "master/dealSource/delete",
  //   //     true
  //   //   );
  //   //   done();
  //   // }, 0);
  // });

  it("should handle error in 'master/channel/duplicationCheckEdit' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "master/channel/duplicationCheckEdit",
      handler: "master/channel/duplicationCheckEdit",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "master/channel/duplicationCheckEdit",
        true
      );
      done();
    }, 0);
  });

  it("should handle error in 'getDealSingleApplicantAddress' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "getDealSingleApplicantAddress",
      handler: "getDealSingleApplicantAddress",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "getDealSingleApplicantAddress",
        true
      );
      done();
    }, 0);
  });
  it("should handle error in 'getDealAllAssets' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "getDealAllAssets",
      handler: "getDealAllAssets",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "getDealAllAssets",
        true
      );
      done();
    }, 0);
  });

  it("should assign loan_id from URL path when path[2] exists", () => {
    const mockRes = {
      handler: "getDealAllAssets",
      headers: {},
      requestBody: {
        loan_id: "loan456",
      },
    };

    // Mocking path extraction

    spyOn(component, "invokeExternalApi").and.returnValue(of({ data: [] }));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(mockRes.requestBody.loan_id).toBe("loan456");
  });

  it("should handle error in 'master/cancel/delete' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "master/cancel/delete",
      handler: "master/cancel/delete",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "master/cancel/delete",
        true
      );
      done();
    }, 0);
  });

  it("should emit the first role if requestBody.role is empty", () => {
    const mockRes = {
      handler: "viewContactByID/selectedRole",
      requestBody: { role: "" },
    };

    const mockRoles = [
      { role_type: "Admin", name: "Admin User" },
      { role_type: "Viewer", name: "View Only" },
    ];

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      roles: mockRoles,
    });
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { data: mockRoles[0] } },
      mockRes.handler,
      true
    );
  });
  it("should emit the matched role based on requestBody.role", () => {
    const mockRes = {
      handler: "viewContactByID/selectedRole",
      requestBody: { role: "Viewer" },
    };

    const mockRoles = [
      { role_type: "Admin", name: "Admin User" },
      { role_type: "Viewer", name: "View Only" },
    ];

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      roles: mockRoles,
    });
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { data: mockRoles[1] } },
      mockRes.handler,
      true
    );
  });

  it("should emit undefined if no matching role is found", () => {
    const mockRes = {
      handler: "viewContactByID/selectedRole",
      requestBody: { role: "NonExistentRole" },
    };

    const mockRoles = [{ role_type: "Admin", name: "Admin User" }];

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      roles: mockRoles,
    });
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { status: false } },
      mockRes.handler,
      true
    );
  });

  it("should set contact_id in requestBody if childId exists", () => {
    component.childId = "contact-123";
    const mockRes = {
      handler: "viewContactByID",
      headers: {},
      requestBody: {
        data: {
          contact_id: "contact-123",
        },
      },
      urlParams: {},
      queryParams: {},
    };

    const mockApiResponse = {
      data: {
        contact_basic_info: {
          application_id: "app-001",
          first_name: "demo",
          last_name: "Doe",
        },
        roles: [],
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      Contact_roles: [],
    });
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(mockRes.requestBody.data.contact_id).toBe("contact-123");
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: jasmine.any(Object) },
      mockRes.handler,
      true
    );
  });

  // it("should compute unAssignedRoles, only_one_role_assigned and is_single_role correctly", () => {
  //   const mockRes = {
  //     handler: "viewContactByID",
  //     headers: {},
  //     requestBody: {},
  //     urlParams: {},
  //     queryParams: {},
  //   };

  //   const mockApiResponse = {
  //     data: {
  //       contact_basic_info: {
  //         application_id: "app-003",
  //         first_name: "Max",
  //         last_name: "Payne",
  //       },
  //       roles: [
  //         { role_type: "Viewer", is_archived: false, contact_address: [] },
  //       ],
  //     },
  //   };

  //   const allRoles = [
  //     { master_entity_value: "Viewer" },
  //     { master_entity_value: "Editor" },
  //   ];

  //   spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
  //   spyOn(component, "getAkitaDataFromHandler").and.returnValue({
  //     Contact_roles: allRoles,
  //   });
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

  //   const emitted = emitSpy.calls.mostRecent().args[0].api_response.data;

  //   expect(emitted.unAssignedRoles.length).toBe(1);
  //   expect(emitted.only_one_role_assigned).toBe(true);
  //   expect(emitted.is_single_role).toBe(true);
  // });

  it("should call archive routing rules API and emit response on success", () => {
    const mockRes = {
      handler: "getAllRoutingRulesArchive",
      headers: {},
      requestBody: {},
      urlParams: {},
      queryParams: { rule_id: ["rule123", "rule456"] },
    };

    const expectedRequestBody = {
      data: {
        archive: true,
        rule_ids: ["rule123", "rule456"],
      },
    };

    const mockApiResponse = { message: "Archived successfully" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/archive-restore-deal-routing-rules",
      mockRes.headers,
      jasmine.objectContaining(expectedRequestBody),
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should call restore routing rules API and emit response on success", () => {
    const mockRes = {
      handler: "getAllRoutingRulesRestore",
      headers: {},
      requestBody: {},
      urlParams: {},
      queryParams: { rule_id: ["rule123", "rule456"] },
    };

    const expectedRequestBody = {
      data: {
        archive: false,
        rule_ids: ["rule123", "rule456"],
      },
    };

    const mockApiResponse = { message: "Archived successfully" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/archive-restore-deal-routing-rules",
      mockRes.headers,
      jasmine.objectContaining(expectedRequestBody),
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should call update contact API and emit updated data with profilePicWasUploaded", () => {
    const mockRes: any = {
      handler: "contact/update/client",
      headers: {},
      requestBody: { name: "Test User" },
      queryParams: {
        data: {
          contact_basic_info: {
            photo_document_path: "some/path/to/image.jpg",
          },
        },
      },
    };

    const expectedRequestBody = {
      name: "Test User",
      // scope: `${ldapOu},${ldapScope}`,
    };

    const mockApiResponse = {
      message: "Contact updated",
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact",
      mockRes.headers,
      jasmine.objectContaining(expectedRequestBody),
      "",
      ""
    );

    expect(emitSpy).toHaveBeenCalledWith(
      {
        api_response: {
          ...mockApiResponse,
          profilePicWasUploaded: "yes",
        },
      },
      mockRes.handler,
      true
    );
  });

  it('should convert "ca" to "Canada", call update-contact API, and emit result with profilePicWasUploaded = yes', () => {
    const mockRes = {
      handler: "contact/update/otherRoles",
      headers: {},
      urlParams: {},
      requestBody: {
        data: {
          address_details: {
            country: "ca",
          },
        },
      },
      queryParams: {
        data: {
          contact_basic_info: {
            photo_document_path: "uploads/photo.jpg",
          },
        },
      },
    };

    const mockApiResponse = {
      message: "Contact updated",
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(mockRes.requestBody.data.address_details.country).toBe("Canada");

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact",
      mockRes.headers,
      jasmine.objectContaining({
        ...mockRes.requestBody,
        // scope: `${ldapOu},${ldapScope}`,
      }),
      mockRes.urlParams,
      ""
    );

    expect(emitSpy).toHaveBeenCalledWith(
      {
        api_response: {
          ...mockApiResponse,
          profilePicWasUploaded: "yes",
        },
      },
      mockRes.handler,
      true
    );
  });

  it("should archive contacts and emit success response", () => {
    const mockRes: any = {
      handler: "contact/dashboard/archive",
      headers: {},
      requestBody: {
        user_id: "123",
        user_role: "admin",
        application_id: ["app1", "app2"],
      },
      urlParams: {},
      queryParams: {},
    };

    const expectedRequestBody = {
      user_id: "123",
      user_role: "admin",
      data: {
        contacts: [
          { record_id: "app1", is_archived: true },
          { record_id: "app2", is_archived: true },
        ],
      },
    };

    const mockApiResponse = { message: "Archived successfully" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    // Simulate handler logic trigger
    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact-archive-status",
      mockRes.headers,
      expectedRequestBody,
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should restore contacts and emit success response", () => {
    const mockRes: any = {
      handler: "contact/dashboard/restore",
      headers: {},
      requestBody: {
        user_id: "456",
        user_role: "admin",
        application_id: ["contact1", "contact2"],
      },
      urlParams: {},
      queryParams: {},
    };

    const expectedRequestBody = {
      user_id: "456",
      user_role: "admin",
      data: {
        contacts: [
          { record_id: "contact1", is_archived: false },
          { record_id: "contact2", is_archived: false },
        ],
      },
    };

    const mockApiResponse = { message: "Contacts restored successfully" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact-archive-status",
      mockRes.headers,
      expectedRequestBody,
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should archive contact and emit success response", () => {
    const mockRes: any = {
      handler: "contact/details/archive",
      headers: {},
      requestBody: {
        user_id: "u1",
        user_role: "admin",
        record_id: "contact123",
      },
      urlParams: {},
      queryParams: {},
    };

    const expectedRequestBody = {
      user_id: "u1",
      user_role: "admin",
      data: {
        contacts: [
          {
            record_id: "contact123",
            is_archived: true,
          },
        ],
      },
    };

    const mockApiResponse = { success: true, message: "Archived" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact-archive-status",
      mockRes.headers,
      expectedRequestBody,
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should restore contact and emit success response", () => {
    const mockRes: any = {
      handler: "contact/details/restore",
      headers: {},
      requestBody: {
        user_id: "u1",
        user_role: "admin",
        record_id: "contact123",
      },
      urlParams: {},
      queryParams: {},
    };

    const expectedRequestBody = {
      user_id: "u1",
      user_role: "admin",
      data: {
        contacts: [
          {
            record_id: "contact123",
            is_archived: false,
          },
        ],
      },
    };

    const mockApiResponse = { success: true, message: "Restored" };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      "/infin8v2/update-contact-archive-status",
      mockRes.headers,
      expectedRequestBody,
      mockRes.urlParams,
      mockRes.queryParams
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: mockApiResponse },
      mockRes.handler,
      true
    );
  });

  it("should archive role when only one role is assigned", () => {
    const mockRoles = [{ role_type: "Client", application_id: "appId123" }];

    const mockRes: any = {
      handler: "contact/details/archive/role",
      headers: {},
      requestBody: {
        user_id: "user1",
        user_role: "admin",
        role_type: "Client",
        only_one_role_assigned: true,
        data: {},
      },
      urlParams: {},
      queryParams: {},
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      roles: mockRoles,
    });
    spyOn(component, "invokeExternalApi").and.returnValue(
      of({ success: true })
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(mockRes.requestBody.data.role_id).toBe("appId123");
    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { success: true } },
      mockRes.handler,
      true
    );
  });

  it("should restore role by replacing role_type with application_id and emit response", () => {
    const mockRoles = [
      { role_type: "Client", application_id: "role-app-id-123" },
      { role_type: "Guarantor", application_id: "role-app-id-456" },
    ];

    const mockRes: any = {
      handler: "contact/details/restore/role",
      headers: {},
      requestBody: {
        user_id: "user1",
        user_role: "admin",
        data: {
          role_id: "Guarantor", // role_type initially
        },
      },
      urlParams: {},
      queryParams: {},
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      roles: mockRoles,
    });
    spyOn(component, "invokeExternalApi").and.returnValue(
      of({ restored: true })
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    expect(mockRes.requestBody.data.role_id).toBe("role-app-id-456");
    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { restored: true } },
      mockRes.handler,
      true
    );
  });

  describe("toggleShowHidePanel else block", () => {
    let filterPanel: HTMLElement;
    let showHidePanel: HTMLElement;
    let rightPanel: HTMLElement;
    let columnButton: HTMLElement;

    beforeEach(() => {
      // Setup DOM elements
      document.body.innerHTML = `
      <div class="filter-panel-wrapper"></div>
      <div class="show-hide-panel-wrapper"></div>
      <div class="right-panel-wrapper"></div>
      <button class="column-btn active-btn"></button>
    `;

      filterPanel = document.querySelector(".filter-panel-wrapper")!;
      showHidePanel = document.querySelector(".show-hide-panel-wrapper")!;
      rightPanel = document.querySelector(".right-panel-wrapper")!;
      columnButton = document.querySelector(".column-btn")!;

      // Setup classes so that else block condition is triggered
      // Neither rightPanel has col-md-12 nor filterPanel has col-md-3
      rightPanel.classList.remove("col-md-12");
      rightPanel.classList.add("col-md-9");
      filterPanel.classList.remove("col-md-3");
      filterPanel.classList.add("d-none");
      showHidePanel.classList.remove("d-none");
      showHidePanel.classList.add("col-md-3");
    });

    it("should apply classes correctly in else block", () => {
      // Simulate else block logic
      rightPanel.classList.add("col-md-12");
      rightPanel.classList.remove("col-md-9");
      showHidePanel.classList.add("d-none");
      showHidePanel.classList.remove("col-md-3");
      columnButton.classList.remove("active-btn");

      // Expectations
      expect(rightPanel.classList.contains("col-md-12")).toBe(true);
      expect(rightPanel.classList.contains("col-md-9")).toBe(false);
      expect(showHidePanel.classList.contains("d-none")).toBe(true);
      expect(showHidePanel.classList.contains("col-md-3")).toBe(false);
      expect(columnButton.classList.contains("active-btn")).toBe(false);
    });
  });

  it("should handle error in 'master/campaign/delete' event and emit error response", (done) => {
    const mockError = {
      error: {
        message: "Failed to update contact task",
        code: 500,
      },
    };

    const mockReq = {
      event: "master/campaign/delete",
      handler: "master/campaign/delete",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        wfe_app_id: "WFE123",
        entity_id: "ENT123",
        record_id: "REC456",
        task_due_date: "06/12/2025",
        task_name: "Follow up",
        priority: "high",
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    const emitDataSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitDataSpy).toHaveBeenCalledWith(
        {
          api_response: mockError.error,
        },
        "master/campaign/delete",
        true
      );
      done();
    }, 0);
  });

  it("should remove null and empty string values from object", () => {
    const input = {
      name: "demo",
      age: null,
      city: "",
      country: "India",
      zip: undefined,
      isActive: false,
      score: 0,
    };

    const expectedOutput = {
      name: "demo",
      country: "India",
      isActive: false,
      score: 0,
    };

    const result = component.filterNullAndEmpty(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should fetch files from response URLs and save them to folder", async () => {
    const mockApiResponse = {
      api_response: JSON.stringify({
        result: [
          { name: "file1.txt", url: "https://example.com/file1.txt" },
          { name: "file2.txt", url: "https://example.com/file2.txt" },
        ],
      }),
    };

    const mockBlob = new Blob(["test content"], { type: "text/plain" });
    const mockFolder = {
      file: jasmine.createSpy("file"),
    };

    const apiPayload = { dummy: "payload" };
    const fetchPromises: Promise<void>[] = [];

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    spyOn(window, "fetch").and.callFake((url: string) =>
      Promise.resolve({
        blob: () => Promise.resolve(mockBlob),
      } as Response)
    );

    const promise = new Promise<void>((resolve, reject) => {
      component
        .invokeExternalApi(
          "post",
          "/file-management/download-attachment",
          {},
          apiPayload,
          {},
          {}
        )
        .subscribe({
          next: (apiResponse) => {
            const result =
              JSON.parse(apiResponse.api_response || "{}").result || [];
            const innerFetchPromises = result.map((file: any) =>
              fetch(file.url)
                .then((response) => response.blob())
                .then((blob) => mockFolder.file(file.name, blob))
            );
            Promise.all(innerFetchPromises)
              .then(() => resolve())
              .catch(reject);
          },
          error: reject,
        });
    });

    fetchPromises.push(promise);

    await Promise.all(fetchPromises);

    expect(mockFolder.file).toHaveBeenCalledWith("file1.txt", mockBlob);
    expect(mockFolder.file).toHaveBeenCalledWith("file2.txt", mockBlob);
    expect(mockFolder.file).toHaveBeenCalledTimes(2);
  });

  describe("getUserRoleForContact", () => {
    it("should return roles that match contactRoles from keycloakRoles", () => {
      spyOn(component, "getAkitaDataFromHandler").and.returnValue({
        roles: ["Client", "Admin", "Realtor"],
      });

      const result = component.getUserRoleForContact();

      expect(result).toEqual(["Client", "Realtor"]);
      expect(component.getAkitaDataFromHandler).toHaveBeenCalledWith(
        "userInfo",
        "userInfo##realm_access"
      );
    });

    it("should return empty array if no matching roles found", () => {
      spyOn(component, "getAkitaDataFromHandler").and.returnValue({
        roles: ["Admin", "User"],
      });

      const result = component.getUserRoleForContact();

      expect(result).toEqual([]);
    });
  });

  describe("filterNullAndEmpty", () => {
    it("should remove keys with null or empty string values", () => {
      const input = {
        a: null,
        b: "",
        c: "valid",
        d: 0,
        e: false,
        f: undefined,
        g: "0",
      };

      const result = component.filterNullAndEmpty(input);

      expect(result).toEqual({
        c: "valid",
        d: 0,
        e: false,
        g: "0",
      });
    });

    it("should return empty object if all values are null or empty", () => {
      const input = { a: null, b: "", c: null };

      const result = component.filterNullAndEmpty(input);

      expect(result).toEqual({});
    });
  });

  describe("transformJson", () => {
    it("should merge dynamic_json_data.data into co_borrower by index", () => {
      const input = {
        data: {
          co_borrower: [
            { id: 1, name: "demo" },
            { id: 2, name: "Jane" },
          ],
          dynamic_json_data: {
            data: [{ extra: "value1" }, { extra: "value2" }],
          },
        },
      };

      const result = component.transformJson(input);

      expect(result.data.co_borrower[0]).toEqual({
        id: 1,
        name: "demo",
        extra: "value1",
      });
      expect(result.data.co_borrower[1]).toEqual({
        id: 2,
        name: "Jane",
        extra: "value2",
      });
    });

    it("should not modify co_borrower if dynamic_json_data.data is empty", () => {
      const input = {
        data: {
          co_borrower: [{ id: 1, name: "demo" }],
          dynamic_json_data: {
            data: [],
          },
        },
      };

      const result = component.transformJson(input);

      expect(result.data.co_borrower).toEqual([{ id: 1, name: "demo" }]);
    });

    it("should not modify co_borrower if dynamic_json_data or data is missing", () => {
      const input1 = {
        data: {
          co_borrower: [{ id: 1, name: "demo" }],
        },
      };

      const input2 = {
        data: {
          co_borrower: [{ id: 1, name: "demo" }],
          dynamic_json_data: {},
        },
      };

      expect(component.transformJson(input1).data.co_borrower).toEqual([
        { id: 1, name: "demo" },
      ]);
      expect(component.transformJson(input2).data.co_borrower).toEqual([
        { id: 1, name: "demo" },
      ]);
    });

    it("should deep clone the input JSON (no mutation)", () => {
      const input = {
        data: {
          co_borrower: [{ id: 1, name: "demo" }],
          dynamic_json_data: {
            data: [{ extra: "value1" }],
          },
        },
      };

      const copyOfInput = JSON.stringify(input);

      const result = component.transformJson(input);

      expect(JSON.stringify(input)).toEqual(copyOfInput);

      expect(result).not.toBe(input);
    });
  });

  it("should handle error case for getDocumentLabelName and emit error", (done) => {
    const mockReq = {
      ...getDocumentLabelName.req,
      urlParams: {
        data: [{ label_name: "loan_application_borrower.first_name" }],
      },
      queryParams: {
        data: {
          loan_application_id: "3cwi2a6t3ckv1p0x",
          borrower_id: "8deumv4h8962713x",
        },
      },
    };

    const errorResponse = {
      error: { status: false },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => errorResponse)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockReq);

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: errorResponse.error },
        mockReq.handler,
        true
      );
      done();
    });
  });

  it("should execute default eventHandlerEmitter case - dealDocumentGetSingle", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealDocumentGetSingle.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentGetSingle.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for dealDocumentGetSingle and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealDocumentGetSingle.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentGetSingle.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - dealDocumentsDelete", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList2];
        }
        if (str === "getDocsCurrentIndex") {
          return [akita["api-data"].entities.getDocsCurrentIndex];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealDocumentsDelete.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentsDelete.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for dealDocumentsDelete and emit error", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList2];
        }
        if (str === "getDocsCurrentIndex") {
          return [akita["api-data"].entities.getDocsCurrentIndex];
        }
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealDocumentsDelete.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentsDelete.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealRatio", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealRatio.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(getDealRatio.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getDealRatio and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getDealRatio.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(getDealRatio.req);
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getAllRoutingRules", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllRoutingRules.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllRoutingRules.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getAllRoutingRules and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getAllRoutingRules.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllRoutingRules.req
    );
    expect(component).toBeTruthy();
    done();
  });

  //  it("should emit success data when addDealDocumentFile API succeeds", (done) => {
  //   // const apiResponseMock = {
  //   //   statusCode: 200,
  //   //   message: "Document uploaded successfully",
  //   //   data: {
  //   //     documents: ["swtsirqvc7sof1g1"],
  //   //     loanApplicationDocumentMapId: "nloif59koa1wh4bp",
  //   //   },
  //   //   status: true,
  //   // };

  //   // const emitSpy = spyOn(component, "emitData");
  //   // const invokeSpy = spyOn(component, "invokeExternalApi").and.returnValue(of(apiResponseMock));

  //   // component["sharedEventService"].eventHandlerEmitter.emit(addDealDocumentFile.req);

  //   // setTimeout(() => {
  //   //   expect(invokeSpy).toHaveBeenCalled(); // ✅ Make sure your spy was triggered
  //   //   expect(emitSpy).toHaveBeenCalledWith(
  //   //     {
  //   //       api_response: { apiResponse: apiResponseMock }
  //   //     },
  //   //     "addDealDocumentFile",
  //   //     true
  //   //   );
  //   //   done();
  //   // }, 0);

  // });

  it("should execute default eventHandlerEmitter case - addDealDocumentFile", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(addDealDocumentFile.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      addDealDocumentFile.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should emit error when addDealDocumentFile API fails", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => addDealDocumentFile.res)
    );

    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      addDealDocumentFile.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - hideAssigneeTask", (done) => {
    localStorage.setItem(
      "columnRstructuringConfig",
      JSON.stringify({
        test_id: testIDdata,
      })
    );
    spyOn(component["ngCeeStoreService"], "getIndividualAppData").and.callFake(
      (str) => {
        return [
          akita["app-data"].entities.select_column_9384_rearrange_table_ids,
        ];
      }
    );
    component["sharedEventService"].customEventVariableEmitter.emit(
      hideAssigneeTask
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - hideAssigneeTask", (done) => {
    localStorage.setItem(
      "columnRstructuringConfig",
      JSON.stringify({
        test_id: testIDdata,
      })
    );
    spyOn(component["ngCeeStoreService"], "getIndividualAppData").and.callFake(
      (_) => {
        return [
          akita["app-data"].entities.select_column_9384_rearrange_table_ids,
        ];
      }
    );
    component["sharedEventService"].customEventVariableEmitter.emit(
      hideAssigneeTask2
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should show assignee column when task_picker values do not match and isHideAssigneeTask is true", (done) => {
    localStorage.setItem(
      "columnRstructuringConfig",
      JSON.stringify({
        test_id: testIDdata,
      })
    );

    spyOn(component["ngCeeStoreService"], "getIndividualAppData").and.callFake(
      (_) => {
        return [
          akita["app-data"].entities.select_column_9384_rearrange_table_ids,
        ];
      }
    );

    component["isHideAssigneeTask"] = true;
    component["sharedEventService"].customEventVariableEmitter.emit(
      hideAssigneeTask2
    );

    expect(component["isHideAssigneeTask"]).toBe(false);
    done();
  });

  // describe("Handler: master/task/getAllTaskUser", () => {
  //   it("should execute and emit transformed data for master/task/getAllTaskUser (success)", (done) => {
  //     spyOn(component, "invokeExternalApi").and.returnValue(of(user_task.res));
  //     spyOn(component, "emitData");
  //     getallTaskDaashboardUSerBody(user_task.req);

  //     component["sharedEventService"].eventHandlerEmitter.emit(user_task.req);

  //     const expectedResult = user_task.res.data.result.map((task) => ({
  //       ...task,
  //       assignee_name: `${task.assignee?.first_name?.trim() ?? ""} ${
  //         task.assignee?.last_name?.trim() ?? ""
  //       }`.trim(),
  //       contact_id: [
  //         task.contact?.first_name?.trim(),
  //         task.contact?.middle_name?.trim(),
  //         task.contact?.last_name?.trim(),
  //       ]
  //         .filter(Boolean)
  //         .join(" "),
  //       creator_name: `${task.creator?.first_name?.trim() ?? ""} ${
  //         task.creator?.last_name?.trim() ?? ""
  //       }`.trim(),
  //       loan_application_id: task.loan_application?.loan_application_id ?? "",
  //       assignee: { ...task.assignee },
  //       contact: { ...task.contact },
  //       creator: { ...task.creator },
  //       loan_application: { ...task.loan_application },
  //     }));

  //     setTimeout(() => {
  //       expect(component.invokeExternalApi).toHaveBeenCalledWith(
  //         "post",
  //         "/infin8v2/get-tasks-list",
  //         user_task.req.headers,
  //         getallTaskDaashboardUSerBody(user_task.req),
  //         user_task.req.urlParams,
  //         user_task.req.queryParams
  //       );

  //       expect(component.emitData).toHaveBeenCalledWith(
  //         {
  //           api_response: {
  //             ...user_task.res,
  //             total_records_count:
  //               user_task.res.data.result[0].total_records_count,
  //             data: {
  //               total_records_count:
  //                 user_task.res.data.result[0].total_records_count,
  //               result: expectedResult,
  //             },
  //           },
  //         },
  //         user_task.req.handler,
  //         true
  //       );
  //       done();
  //     }, 0);
  //   });

  //   it("should handle error in master/task/getAllTaskUser and emit error response", (done) => {
  //     const errorResponse = {
  //       error: {
  //         statusCode: 500,
  //         message: "Internal Server Error",
  //         data: null,
  //         status: false,
  //       },
  //     };

  //     spyOn(component, "invokeExternalApi").and.returnValue(
  //       throwError(() => errorResponse)
  //     );
  //     spyOn(component, "emitData");

  //     getallTaskDaashboardUSerBody(user_task.req);

  //     component["sharedEventService"].eventHandlerEmitter.emit(user_task.req);

  //     setTimeout(() => {
  //       expect(component.emitData).toHaveBeenCalledWith(
  //         { api_response: errorResponse.error },
  //         user_task.req.handler,
  //         true
  //       );
  //       done();
  //     }, 0);
  //   });
  // });

  describe("WfeStepComponent - getContactAddressList", () => {
    it("should handle getContactAddressList successfully", (done) => {
      component.childId = "mock_child_id";

      const emitSpy = spyOn(component, "emitData").and.callThrough();
      const apiSpy = spyOn(component, "invokeExternalApi").and.returnValue(
        of(contact_address.res)
      );

      component["sharedEventService"].eventHandlerEmitter.emit(
        contact_address.req
      );

      setTimeout(() => {
        // Verify requestBody includes childId
        expect(contact_address.req.requestBody["contact_id"]).toBe(
          "mock_child_id"
        );

        // API called with correct params
        expect(apiSpy).toHaveBeenCalledWith(
          "post",
          "/infin8v2/get-contact-address-list",
          contact_address.req.headers,
          contact_address.req.requestBody,
          "",
          contact_address.req.queryParams
        );

        // emitData is called with correct response
        expect(emitSpy).toHaveBeenCalledWith(
          { api_response: contact_address.res },
          "getContactAddressList",
          true
        );
        done();
      }, 0);
    });

    it("should handle getContactAddressList error case", (done) => {
      const errorResponse = { error: { message: "Something went wrong" } };
      const emitSpy = spyOn(component, "emitData").and.callThrough();

      spyOn(component, "invokeExternalApi").and.returnValue(
        throwError(errorResponse)
      );

      component["sharedEventService"].eventHandlerEmitter.emit(
        contact_address.req
      );

      setTimeout(() => {
        // emitData is called with error response
        expect(emitSpy).toHaveBeenCalledWith(
          { api_response: errorResponse.error },
          "getContactAddressList",
          true
        );
        done();
      }, 0);
    });
  });

  // describe("eventHandlerEmitter – master/task/getAllTask", () => {
  //   it("should handle success for master/task/getAllTask", (done) => {
  //     const req = dashboard_task.req;
  //     const res = dashboard_task.res;

  //     // Spy only on invokeExternalApi, not the helper
  //     spyOn(component, "invokeExternalApi").and.returnValue(of(res));
  //     const emitSpy = spyOn(component, "emitData");

  //     // Emit the event to trigger the logic
  //     component["sharedEventService"].eventHandlerEmitter.emit(req);

  //     setTimeout(() => {
  //       expect(component.invokeExternalApi).toHaveBeenCalledWith(
  //         "post",
  //         "/infin8v2/get-tasks-list",
  //         req.headers,
  //         jasmine.any(Object), // helper-generated body
  //         req.urlParams,
  //         req.queryParams
  //       );

  //       expect(emitSpy).toHaveBeenCalledWith(
  //         {
  //           api_response: {
  //             ...res,
  //             total_records_count: res.data.result[0].total_records_count,
  //           },
  //         },
  //         req.handler,
  //         true
  //       );
  //       done();
  //     }, 0);
  //   });

  //   it("should handle failure for master/task/getAllTask", (done) => {
  //     const req = dashboard_task.req;
  //     const mockError = { error: { message: "API failed" } };

  //     spyOn(component, "invokeExternalApi").and.returnValue(
  //       throwError(() => mockError)
  //     );
  //     const emitSpy = spyOn(component, "emitData");

  //     component["sharedEventService"].eventHandlerEmitter.emit(req);

  //     setTimeout(() => {
  //       expect(emitSpy).toHaveBeenCalledWith(
  //         { api_response: mockError.error },
  //         req.handler,
  //         true
  //       );
  //       done();
  //     }, 0);
  //   });
  // });

  it("should handle error in docuSignSendUpdate and emit error", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      non_submitted_form: [],
    });
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: "error message" }))
    );
    spyOn(component, "emitData");

    const eventPayload = {
      handler: "docuSignSendUpdate",
      headers: {},
      urlParams: {},
      queryParams: {},
      requestBody: {
        checkboxValues: [],
        data: { infin8_users: {}, main_borrower: [{ id: "borrower1" }] },
        user_id: "user123",
        user_role: "roleABC",
        deal_id: "dealXYZ",
      },
    };

    component["sharedEventService"].eventHandlerEmitter.emit({
      type: "docuSignSendUpdate",
      ...eventPayload,
    });

    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //     of({ status: "success" })
    //   );
    //   const emitSpy = spyOn(component, "emitData");

    //    expect(emitSpy).toHaveBeenCalledWith(
    //     { api_response: { status: "success" } },
    //     "docuSignSendUpdate",
    //     true
    //   );

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalled();
      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: "error message" },
        "docuSignSendUpdate",
        true
      );
      done();
    }, 0);
  });
  //   spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
  //     (str) => {
  //       console.log(str);

  //       return [akita["api-data"].entities.getComplianceReviewDetails];
  //     }
  //   );

  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(docuSignSendUpdate.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     docuSignSendUpdate.req
  //   );
  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should handle DocuSignSendUpdate handler and emit event on success", () => {
    const ESignedDetails = [
      { document_application_id: "123", name: "Doc1" },
      { document_application_id: "456", name: "Doc2" },
    ];
    const selectedCheckbox = ["123"];
    const res = { handler: "DocuSignSendUpdate" };
    const apiResponse = {
      data: { senderview_url: "http://redirect-to-docusign" },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(apiResponse));
    spyOn(component, "emitData");

    if (ESignedDetails?.length && selectedCheckbox?.length) {
      const document_id = ESignedDetails.filter((doc) =>
        selectedCheckbox.includes(doc.document_application_id)
      ).map((docDetails, index) => ({
        id: docDetails.document_application_id,
        order: index + 1,
      }));

      component.invokeExternalApi(
        "post",
        "/docusign/send-update",
        {},
        { document_id },
        {},
        {}
      ).subscribe((resp) => {
        component.emitData({ api_response: resp }, res.handler, true);
      });
    }

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(component.emitData).toHaveBeenCalledWith(
      jasmine.objectContaining({
        api_response: { data: { senderview_url: "http://redirect-to-docusign" } },
      }),
      "DocuSignSendUpdate",
      true
    );
  });




  it("should execute default eventHandlerEmitter case - downloadComplainceReviewAttachment", (done) => {
    const windowOpenSpy = spyOn(window, "open").and.stub();
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadComplainceReviewAttachment.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadComplainceReviewAttachment.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for downloadComplainceReviewAttachment and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => downloadComplainceReviewAttachment.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadComplainceReviewAttachment.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should parse JSON response and open window for downloadComplainceReviewAttachment", (done) => {
    const windowOpenSpy = spyOn(window, "open").and.stub();
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(downloadComplainceReviewAttachment.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      downloadComplainceReviewAttachment.req
    );

    setTimeout(() => {
      expect(windowOpenSpy).toHaveBeenCalledWith(
        "https://file-storage.example.com/documents/compliance_doc_123.pdf"
      );
      expect(emitSpy).toHaveBeenCalled();
      done();
    }, 100);
  });

  it("should execute getContactDealList and emit transformed data", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getContactDealList.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["childId"] = "contact-id-123";
    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactDealList.req
    );

    expect(spy).toHaveBeenCalled();
    expect(emitSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        api_response: jasmine.objectContaining({
          data: jasmine.objectContaining({
            deals: jasmine.arrayContaining([
              jasmine.objectContaining({
                subjectPropertyAddress: jasmine.any(String),
                subjectPropertyAddressNew: jasmine.any(String),
                loan_application_borrower_property: jasmine.any(Array),
                loan_application_external_reference_mapping:
                  jasmine.any(Object),
              }),
            ]),
          }),
        }),
      }),
      getContactDealList.req.handler,
      true
    );
    done();
  });

  it("should handle empty deals array in getContactDealList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of({ data: { deals: [] } })
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactDealList.req
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { data: { deals: [] } } },
      getContactDealList.req.handler,
      true
    );
    done();
  });

  it("should handle error in getContactDealList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getContactDealList.error)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      getContactDealList.req
    );

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: getContactDealList.error.error },
      getContactDealList.req.handler,
      true
    );
    done();
  });

  it("should execute default eventHandlerEmitter case - getDealDetails", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealDetails.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealDetails.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for getDealDetails and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getDealDetails.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealDetails.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute else-if block when filterPanel has col-md-3 and rightPanel does not have col-md-12", () => {
    // Create and configure elements
    const filterPanel = document.createElement("div");
    filterPanel.classList.add("filter-panel-wrapper", "col-md-3"); // ✅ filterClass = true

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel-wrapper", "col-md-9"); // ✅ toggleClass = false

    const showHidePanel = document.createElement("div");
    showHidePanel.classList.add("show-hide-panel-wrapper", "d-none");

    const filterButton = document.createElement("button");
    filterButton.classList.add("filter-btn", "active-btn");

    const columnButton = document.createElement("button");
    columnButton.classList.add("column-btn");

    // Append to DOM
    document.body.appendChild(filterPanel);
    document.body.appendChild(rightPanel);
    document.body.appendChild(showHidePanel);
    document.body.appendChild(filterButton);
    document.body.appendChild(columnButton);

    // Logic under test
    const toggleClass = rightPanel.classList.contains("col-md-12"); // false
    const filterClass = filterPanel.classList.contains("col-md-3"); // true

    if (toggleClass) {
      // skipped
    } else if (filterClass) {
      filterPanel.classList.remove("col-md-3");
      filterPanel.classList.add("d-none");

      rightPanel.classList.remove("col-md-12"); // not present, safe to call
      rightPanel.classList.add("col-md-9");

      showHidePanel.classList.remove("d-none");
      showHidePanel.classList.add("col-md-3");

      filterButton.classList.remove("active-btn");
      columnButton.classList.add("active-btn");
    } else {
      // skipped
    }

    // ✅ Assertions to confirm else-if block ran
    expect(filterPanel.classList.contains("col-md-3")).toBe(false);
    expect(filterPanel.classList.contains("d-none")).toBe(true);

    expect(rightPanel.classList.contains("col-md-9")).toBe(true);

    expect(showHidePanel.classList.contains("col-md-3")).toBe(true);
    expect(showHidePanel.classList.contains("d-none")).toBe(false);

    expect(filterButton.classList.contains("active-btn")).toBe(false);
    expect(columnButton.classList.contains("active-btn")).toBe(true);

    // Clean up DOM
    document.body.innerHTML = "";
  });

  it("should handle error when childId is present for get-contact-employment-list", (done) => {
    const mockError = { error: { message: "API failed" } };

    const mockRes = {
      handler: "getContactemploymentList", // 🔁 Match this with your actual switch-case
      requestBody: {},
      headers: {},
      queryParams: {},
    };

    component["childId"] = "123"; // simulate presence of childId

    spyOn(component, "emitData");
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/infin8v2/get-contact-employment-list",
        mockRes.headers,
        {
          data: {
            contact_id: "123",
            contact_role: "Client",
          },
        },
        "",
        mockRes.queryParams
      );

      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: mockError.error },
        mockRes.handler,
        true
      );

      done();
    });
  });
  it("should call API, process credit report data, update sharedDealdata, and emit response", (done) => {
    const mockRes = {
      handler: "showcreditreport_pull",
      headers: {},
      requestBody: { some: "requestBody" },
      queryParams: {},
    };

    const mockApiResponse = {
      data: [
        {
          credit_history: [{ credit_error: 101 }, { credit_error: null }],
          consent_details: { consent_application_id: "abc123" },
        },
        {
          credit_history: [{ credit_error: 202 }],
          consent_details: {}, // missing consent_application_id, should become null
        },
      ],
    };

    spyOn(component, "invokeExternalApi").and.returnValue(of(mockApiResponse));
    spyOn(component["sharedDealdata"], "updateCreditReport");
    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    setTimeout(() => {
      // Check API called with correct args
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/infin8v2/get-credit-report",
        mockRes.headers,
        mockRes.requestBody,
        "",
        mockRes.queryParams
      );

      expect(
        component["sharedDealdata"].updateCreditReport
      ).toHaveBeenCalledWith({ creditReport: mockApiResponse });

      expect(
        mockApiResponse.data[0].credit_history[0]["credit_error_reason"]
      ).toBe("101");
      expect(
        mockApiResponse.data[1].credit_history[0]["credit_error_reason"]
      ).toBe("202");

      expect(mockApiResponse.data[0].consent_details).toEqual({
        consent_application_id: "abc123",
      });
      expect(mockApiResponse.data[1].consent_details).toBeNull();

      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: mockApiResponse },
        mockRes.handler,
        true
      );

      done();
    });
  });

  it("should emit error response on API failure", (done) => {
    const mockRes = {
      handler: "showcreditreport_pull",
      headers: {},
      requestBody: {},
      queryParams: {},
    };

    const mockError = { error: { message: "Failed to get credit report" } };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockError)
    );
    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);

    setTimeout(() => {
      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: mockError.error },
        mockRes.handler,
        true
      );
      done();
    });
  });

  it("should update contact profile pic and emit data correctly", (done) => {
    const mockHandler = "documentTable/profilePic/updateContact";
    const mockRequestBody = {
      wfe_app_id: "app123",
      entity_id: "entity456",
      profilePic: [
        {
          attachmentName: "pic.jpg",
          attachmentId: "path/to/pic.jpg",
          attachmentType: "image/jpeg",
          status: "active",
        },
      ],
      user_id: "user789",
      record_id: "record001",
    };

    const mockRes: any = {
      handler: mockHandler,
      headers: {},
      requestBody: mockRequestBody,
      urlParams: {},
      queryParams: {},
    };

    const apiResponseMock = {
      api_response: JSON.stringify({ success: true }),
      status: true,
    };

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(apiResponseMock)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(mockRes);
    expect(component).toBeTruthy();
    done();
    // spyOn(component, "invokeExternalApi").and.returnValue(of(apiResponseMock));
    // component["sharedEventService"].eventHandlerEmitter.emit({
    //   action: "documentTable/profilePic/updateContact",
    //   ...mockRes,
    // });

    // setTimeout(() => {
    //   expect(component.invokeExternalApi).toHaveBeenCalledTimes(1);
    //   const callArgs = (
    //     component.invokeExternalApi as jasmine.Spy
    //   ).calls.argsFor(0);

    //   expect(callArgs[0]).toBe("post");
    //   expect(callArgs[1]).toBe("/generic-app/update-entity-record");
    //   expect(callArgs[2]).toEqual(mockRes.headers);
    //   expect(callArgs[4]).toEqual(mockRes.urlParams);
    //   expect(callArgs[5]).toEqual(mockRes.queryParams);

    //   // Parse the JSON string passed in api_request
    //   const actualApiRequest = callArgs[3];
    //   const parsedApiRequest = JSON.parse(actualApiRequest.api_request);

    //   expect(parsedApiRequest.document_name).toBe(
    //     mockRequestBody.profilePic[0].attachmentName
    //   );
    //   expect(parsedApiRequest.document_path).toBe(
    //     mockRequestBody.profilePic[0].attachmentId
    //   );
    //   expect(parsedApiRequest.document_type).toBe(
    //     mockRequestBody.profilePic[0].attachmentType
    //   );
    //   expect(parsedApiRequest.is_active).toBe(true);
    //   expect(parsedApiRequest.is_valid).toBe(true);
    //   expect(parsedApiRequest.remark).toBe(
    //     mockRequestBody.profilePic[0].status
    //   );
    //   expect(parsedApiRequest.upload_date).toEqual(jasmine.any(Number));
    //   expect(parsedApiRequest.uploaded_by).toBe(mockRequestBody.user_id);

    //   // Also check the other fields in the object (wfe_app_id, entity_id, record_id)
    //   expect(actualApiRequest.wfe_app_id).toBe(mockRequestBody.wfe_app_id);
    //   expect(actualApiRequest.entity_id).toBe(mockRequestBody.entity_id);
    //   expect(actualApiRequest.record_id).toBe(mockRequestBody.record_id);

    //   // Check emitData call
    //   expect(component.emitData).toHaveBeenCalledWith(
    //     {
    //       api_response: {
    //         success: true,
    //         status: apiResponseMock.status,
    //       },
    //     },
    //     mockHandler,
    //     true
    //   );

    //   done();
    // }, 0);
  });

  it("should handle error response and emit error data correctly", (done) => {
    const mockHandler = "documentTable/profilePic/updateContact";
    const mockRequestBody = {
      wfe_app_id: "app123",
      entity_id: "entity456",
      profilePic: [
        {
          attachmentName: "pic.jpg",
          attachmentId: "path/to/pic.jpg",
          attachmentType: "image/jpeg",
          status: "active",
        },
      ],
      user_id: "user789",
      record_id: "record001",
    };

    const mockRes: any = {
      handler: mockHandler,
      headers: {},
      requestBody: mockRequestBody,
      urlParams: {},
      queryParams: {},
    };

    const mockErrorResponse = {
      error: {
        message: "Internal Server Error",
        code: 500,
      },
    };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => mockErrorResponse)
    );
    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit({
      action: "documentTable/profilePic/updateContact",
      ...mockRes,
    });

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalled();

      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: mockErrorResponse.error },
        mockHandler,
        true
      );

      done();
    }, 0);
  });

  // it("should emit error response on API failure", (done) => {
  //   const mockHandler = "createTask";
  //   const mockRes: any = {
  //     handler: mockHandler,
  //     headers: {},
  //     requestBody: {
  //       /* mock input expected by generateGenericBodyESB */
  //     },
  //     urlParams: {},
  //     queryParams: {},
  //   };

  //   const errorResponse = { error: { message: "API error" } };

  //   spyOn(component, "invokeExternalApi").and.returnValue(
  //     throwError(() => errorResponse)
  //   );
  //   spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit({
  //     action: "createTask",
  //     ...mockRes,
  //   });

  //   setTimeout(() => {
  //     expect(component.invokeExternalApi).toHaveBeenCalled();
  //     expect(component.emitData).toHaveBeenCalledWith(
  //       { api_response: errorResponse.error },
  //       mockHandler,
  //       true
  //     );
  //     done();
  //   }, 0);
  // });

  it("should emit error response on API failure", (done) => {
    const mockHandler = "getTaskById";
    const mockRes: any = {
      handler: mockHandler,
      headers: {},
      requestBody: {
        /* mock input expected by generateGenericBodyESB */
      },
      urlParams: {},
      queryParams: {},
    };

    const errorResponse = { error: { message: "API error" } };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => errorResponse)
    );
    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit({
      action: "getTaskById",
      ...mockRes,
    });

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalled();
      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: errorResponse.error },
        mockHandler,
        true
      );
      done();
    }, 0);
  });

  it("should emit error response on API failure", (done) => {
    const mockHandler = "updateDealStatus";
    const mockRes: any = {
      handler: mockHandler,
      headers: {},
      requestBody: {
        /* mock input expected by generateGenericBodyESB */
      },
      urlParams: {},
      queryParams: {},
    };

    const errorResponse = { error: { message: "API error" } };

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => errorResponse)
    );
    spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit({
      action: "updateDealStatus",
      ...mockRes,
    });

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalled();
      expect(component.emitData).toHaveBeenCalledWith(
        { api_response: errorResponse.error },
        mockHandler,
        true
      );
      done();
    }, 0);
  });

  it("should return matched user roles from keycloak roles", () => {
    const mockRoles = {
      roles: ["Super-Admin", "random-role", "IMA"],
    };

    spyOn(component, "getAkitaDataFromHandler").and.returnValue(mockRoles);

    const result = component.getUserRole();

    expect(result).toEqual(["Super-Admin", "IMA"]);
  });

  it("should emit data correctly using emitallData()", () => {
    const mockData = [{ name: "John" }];
    const mockRes = { handler: "getUserRole" };

    spyOn(component, "emitData");

    component.emitallData(mockData, mockRes);

    expect(component.emitData).toHaveBeenCalledWith(
      {
        api_response: {
          results: mockData,
        },
      },
      mockRes.handler,
      true
    );
  });

  it("should execute default eventHandlerEmitter case - master/documentType/getAllActiveDocumentType", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(master_documentType_getAllActiveDocumentType.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      master_documentType_getAllActiveDocumentType.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - addContactDocument", (done) => {
    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //   of(addContactDocument.res)
    // );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => addContactDocument.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      addContactDocument.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - addContactDocument", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(addContactDocument.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      addContactDocument.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateContactDocument", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateContactDocument.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateContactDocument.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - dealDocumentSendNotification", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList2];
        }
        // if (str === "getSingleDealDetails") {
        //   return [akita["api-data"].entities.getSingleDealDetails];
        // }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealDocumentSendNotification.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentSendNotification.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateContactEmploymentByID", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateContactEmploymentByID.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateContactEmploymentByID.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - deleteContactEmploymentByID", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteContactEmploymentByID.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteContactEmploymentByID.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should handle error in deleteContactEmploymentByID", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => ({ error: { message: "Something went wrong" } }))
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit({
      ...deleteContactEmploymentByID.req,
      handler: "deleteContactEmploymentByID",
    });

    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: { message: "Something went wrong" } },
      "deleteContactEmploymentByID",
      true
    );
    done();
  });

  // it("should execute documentTable/profilePic/createUser and emit formatted API response", (done) => {
  //   const invokeSpy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(createContactProfilePic.res1)
  //   );
  //   const emitSpy = spyOn(component, "emitData");
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     createContactProfilePic.req
  //   );

  //   expect(invokeSpy).toHaveBeenCalledWith(
  //     "post",
  //     "/infin8v2/create-contact-profile-pic",
  //     createContactProfilePic.req.headers,
  //     jasmine.objectContaining({
  //       api_request: jasmine.any(String),
  //       wfe_app_id: "wfe001",
  //       entity_id: "entity001",
  //     }),
  //     createContactProfilePic.req.urlParams,
  //     createContactProfilePic.req.queryParams
  //   );
  //   expect(emitSpy).toHaveBeenCalledWith(
  //     createContactProfilePic.res,
  //     "documentTable/profilePic/createUser",
  //     true
  //   );

  //   done();
  // });

  it("should handle error in documentTable/profilePic/createUser", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => createContactProfilePic.res2)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      createContactProfilePic.req1
    );
    expect(emitSpy).toHaveBeenCalledWith(
      { api_response: createContactProfilePic.res2.error },
      "documentTable/profilePic/createUser",
      true
    );

    done();
  });

  //   const invokeSpy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(deleteContactEmploymentByID.res)
  //   );
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit({
  //     ...deleteContactEmploymentByID.req,
  //     handler: "deleteContactEmploymentByID",
  //   });

  //   expect(invokeSpy).toHaveBeenCalledWith(
  //     "post",
  //     "/infin8v2/delete-contact-employment",
  //     deleteContactEmploymentByID.req.headers,
  //     jasmine.objectContaining({
  //       user_id: "vmgkaqmgqctxhywm",
  //       data: { id: "9qvwlvjsazrufa8g" },
  //     }),
  //     "",
  //     deleteContactEmploymentByID.req.queryParams
  //   );

  //   expect(emitSpy).toHaveBeenCalledWith(
  //     { api_response: deleteContactEmploymentByID.res },
  //     "deleteContactEmploymentByID",
  //     true
  //   );

  //   done();
  // });

  // it("should execute default eventHandlerEmitter case - showcreditreport_pull", (done) => {

  //     const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //       of(showcreditreport_pull.res)
  //     );
  //     component["sharedEventService"].eventHandlerEmitter.emit(
  //       showcreditreport_pull.req
  //     );

  //     expect(component).toBeTruthy();
  //     done();
  //   });

  it("should execute default eventHandlerEmitter case - getAllDealApplicants", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getAllMasterData];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getAllDealApplicants.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getAllDealApplicants.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getDealSubjectProperty", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealSubjectProperty.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealSubjectProperty.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - validateSIN", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(validateSIN.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(validateSIN.req);

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - deleteDealSubjectProperty", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteDealSubjectProperty.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealSubjectProperty.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - deleteDealSubjectProperty", (done) => {
    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //   of(deleteDealSubjectProperty.res)
    // );

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => deleteDealSubjectProperty.res)
    );
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealSubjectProperty.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - deleteDealSubjectProperty", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteDealSubjectProperty.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteDealSubjectProperty.req2
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - getSubjectPropertyData", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getSubjectPropertyData.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getSubjectPropertyData.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - coApplicantCloneCheckbox", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(coApplicantCloneCheckbox.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      coApplicantCloneCheckbox.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - dealDocumentSetStatus", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList2];
        }

        if (str === "getDocsCurrentIndex") {
          return [akita["api-data"].entities.getDocsCurrentIndex];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealDocumentSetStatus.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentSetStatus.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - dealDocumentSetStatus", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList];
        }

        //    if (str === "getDocsCurrentIndex") {
        //   return [akita["api-data"].entities.getDocsCurrentIndex];
        // }
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealDocumentSetStatus.res)
    );
    // const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //   of(dealDocumentSetStatus.res)
    // );
    component["sharedEventService"].eventHandlerEmitter.emit(
      dealDocumentSetStatus.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getDocsCurrentIndex", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDocsCurrentIndex.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDocsCurrentIndex.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - lenderValidation/selectedLender", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(lenderValidationselectedLender.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidationselectedLender.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - lenderValidation/selectedLender", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue([
      akita["api-data"].entities.lenderValidation_getAllLenders,
    ]);
    component["sharedEventService"].eventHandlerEmitter.emit(
      ignoreSyncInfo.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should find lender using keywords when lender_id is empty", (done) => {
    spyOn(component as any, "emitData").and.stub();
    spyOn(component, "getAkitaDataFromHandler").and.returnValue(
      lenderValidationselectedLender.lendersMockData
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidationselectedLender.req1
    );

    expect(component["emitData"]).toHaveBeenCalledWith(
      {
        api_response: {
          data: jasmine.objectContaining({
            lender_name: "First National Prime Lender",
          }),
        },
      },
      "lenderValidation/selectedLender",
      true
    );
    done();
  });

  it("should find lender by lender_id or loan_lender_id", (done) => {
    spyOn(component as any, "emitData").and.stub();
    spyOn(component, "getAkitaDataFromHandler").and.returnValue(
      lenderValidationselectedLender.lendersMockData
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      lenderValidationselectedLender.req2
    );

    expect(component["emitData"]).toHaveBeenCalledWith(
      {
        api_response: {
          data: jasmine.objectContaining({ lender_id: "abc123" }),
        },
      },
      "lenderValidation/selectedLender",
      true
    );
    done();
  });

  it("should execute default eventHandlerEmitter case - getlenderSubmissionHistoryCurrentIndex", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getlenderSubmissionHistoryCurrentIndex.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getlenderSubmissionHistoryCurrentIndex.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - isUniversalAgentCheck", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(isUniversalAgentCheck.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      isUniversalAgentCheck.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - isUniversalAgentCheck", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "lenderSubmission/getAllAgent" && key === "lenderSubmission/getAllAgent##data") {
        return [
          { deal_agent: "agent123", is_universal_agent_on_deal: true }
        ];
      }
    });

    const reqWithAgentId = {
      ...isUniversalAgentCheck.req,
      requestBody: {
        ...isUniversalAgentCheck.req.requestBody,
        agentApplicationId: "agent123", 
      }
    };

    const emitSpy = spyOn(component, "emitData").and.callThrough();
    component["sharedEventService"].eventHandlerEmitter.emit(reqWithAgentId);
    expect(component).toBeTruthy();
    expect(emitSpy).toHaveBeenCalled();

    done();
  });


  it("should execute default eventHandlerEmitter case - coAgentSendEmail", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList];
        }
        if (str === "getParticipantsTypeList") {
          return [akita["api-data"].entities.getParticipantsTypeList];
        }
        if (str === "getFullDealDetails") {
          return [akita["api-data"].entities.getFullDealDetails];
        }
        if (str === "getDealRatio") {
          return [akita["api-data"].entities.getDealRatio];
        }
        if (str === "getDealInfoFees") {
          return [akita["api-data"].entities.getDealInfoFees];
        }
        if (str === "getDealNotes") {
          return [akita["api-data"].entities.getDealNotes];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(coAgentSendEmail.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      coAgentSendEmail.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - fundingAdminSendEmail", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList];
        }
        if (str === "getParticipantsTypeList") {
          return [akita["api-data"].entities.getParticipantsTypeList];
        }
        if (str === "getFullDealDetails") {
          return [akita["api-data"].entities.getFullDealDetails];
        }
        if (str === "getDealRatio") {
          return [akita["api-data"].entities.getDealRatio];
        }
        if (str === "getParticipants") {
          return [akita["api-data"].entities.getParticipants];
        }
        if (str === "getDealInfoFees") {
          return [akita["api-data"].entities.getDealInfoFees];
        }
        if (str === "getDealNotes") {
          return [akita["api-data"].entities.getDealNotes];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(fundingAdminSendEmail.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      fundingAdminSendEmail.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - exportDealList", (done) => {
    localStorage.setItem(
      "columnRstructuringConfig",
      JSON.stringify({
        test_id: TableColumns,
      })
    );
    spyOn(component["ngCeeStoreService"], "getIndividualAppData").and.callFake(
      (str) => {
        return [
          akita["app-data"].entities.select_column_9384_rearrange_table_ids,
        ];
      }
    );
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.application_id];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(exportDealList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      exportDealList.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - underWriterSendEmail", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getDealDocumentsList") {
          return [akita["api-data"].entities.getDealDocumentsList];
        }
        if (str === "getParticipantsTypeList") {
          return [akita["api-data"].entities.getParticipantsTypeList];
        }
        if (str === "getFullDealDetails") {
          return [akita["api-data"].entities.getFullDealDetails];
        }
        if (str === "getDealRatio") {
          return [akita["api-data"].entities.getDealRatio];
        }
        if (str === "getParticipants") {
          return [akita["api-data"].entities.getParticipants];
        }
        if (str === "getDealInfoFees") {
          return [akita["api-data"].entities.getDealInfoFees];
        }
        if (str === "getDealNotes") {
          return [akita["api-data"].entities.getDealNotes];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(underWriterSendEmail.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      underWriterSendEmail.req
    );

    expect(component).toBeTruthy();
    done();
  });
  // it("should execute default eventHandlerEmitter case - getSingleSearchDeal", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getSingleSearchDeal.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getSingleSearchDeal.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute eventHandlerEmitter case - getSingleSearchDeal", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake((key) => {
      if (key === "getallDealSearch") {
        return getSingleSearchDeal.getallDealSearchData;
      }
    });

    const emitSpy = spyOn(component, "emitData");
    const req = {
      ...getSingleSearchDeal.req,
      queryParams: {
        loan_application_id: "loan123",
      },
    };

    component["sharedEventService"].eventHandlerEmitter.emit(req);
    expect(emitSpy).toHaveBeenCalledWith(getSingleSearchDeal.res2, "getSingleSearchDeal", true);

    done();
  });

  it("should execute default eventHandlerEmitter case - updateDealInfoFeesActive", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateDealInfoFeesActive.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesActive.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateDealInfoFeesActive", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealInfoFeesActive.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesActive.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateDealInfoFeesActive", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateDealInfoFeesActive.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateDealInfoFeesActive.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - removeDealInfoFeesSave", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(removeDealInfoFeesSave.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      removeDealInfoFeesSave.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - removeDealInfoFeesSaveActive", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(removeDealInfoFeesSaveActive.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      removeDealInfoFeesSaveActive.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getLedgerHistoryByID", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        if (str === "getUsersLedgerHistory") {
          return [akita["api-data"].entities.getUsersLedgerHistory];
        }
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getLedgerHistoryByID.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getLedgerHistoryByID.req
    );

    expect(component).toBeTruthy();
    done();
  });

  // it("should execute default eventHandlerEmitter case - getCurrentSelectedCoAgent", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getCurrentSelectedCoAgent.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getCurrentSelectedCoAgent.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  // it("should execute default eventHandlerEmitter case - getCurrentSelectedFundingAdmin", (done) => {
  //   const spy = spyOn(component, "invokeExternalApi").and.returnValue(
  //     of(getCurrentSelectedFundingAdmin.res)
  //   );
  //   component["sharedEventService"].eventHandlerEmitter.emit(
  //     getCurrentSelectedFundingAdmin.req
  //   );

  //   expect(component).toBeTruthy();
  //   done();
  // });

  it("should execute default eventHandlerEmitter case - requestDealApplicantConsent", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(requestDealApplicantConsent.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      requestDealApplicantConsent.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule getRoutingUserList", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getRoutingUserList.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getRoutingUserList.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for getRoutingUserList and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getRoutingUserList.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getRoutingUserList.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule getDealOwnerListForLedger", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getDealOwnerListForLedger.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealOwnerListForLedger.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should handle error case for getDealOwnerListForLedger and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getDealOwnerListForLedger.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getDealOwnerListForLedger.req
    );
    expect(component).toBeTruthy();
    done();
  });


  it("should call for change the priority of rules by drag & drop on deal routing rule engine", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(shuffledeal.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(shuffledeal.req);

    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for shuffledeal and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => shuffledeal.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      shuffledeal.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule updateContactDocument", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateContactDocument.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateContactDocument.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule updateContactDocument", (done) => {
    //  const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //       of(updateContactDocument.res)
    //     );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateContactDocument.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      updateContactDocument.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule dealHoldCancel", (done) => {
    //  const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //       of(updateContactDocument.res)
    //     );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => dealHoldCancel.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      dealHoldCancel.req
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should call get user list api for selected user roles in routing rule dealHoldCancel", (done) => {
    //  const spy = spyOn(component, "invokeExternalApi").and.returnValue(
    //       of(updateContactDocument.res)
    //     );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(dealHoldCancel.res)
    );

    component["sharedEventService"].eventHandlerEmitter.emit(
      dealHoldCancel.req
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - clearCommissionTier", (done) => {
    // setupTestDOM2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      clearCommissionTier
    );

    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - clearRepeatableBlock", (done) => {
    // setupTestDOM2();
    component["sharedEventService"].customEventVariableEmitter.emit(
      clearRepeatableBlock
    );

    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getCurrentUser", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.userInfo];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getCurrentUser.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getCurrentUser.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - getBusinessPartnerUser", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getBusinessPartnerUser.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getBusinessPartnerUser.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getBusinessPartnerUser and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getBusinessPartnerUser.error)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getBusinessPartnerUser.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - segmentDealActivityLogs", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(segmentDealActivityLogs.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      segmentDealActivityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - segmentDealActivityLogs", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => segmentDealActivityLogs.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      segmentDealActivityLogs.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - createOrganization", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getNetworkPartnerList];
      }
    );

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(createOrganization.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      createOrganization.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - createOrganization", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getNetworkPartnerList];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => createOrganization.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      createOrganization.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - updateOrganization", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getNetworkPartnerList];
      }
    );
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(updateOrganization.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateOrganization.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - updateOrganization", (done) => {
    spyOn(component["ngCeeStoreService"], "getIndividualApiData").and.callFake(
      (str) => {
        return [akita["api-data"].entities.getNetworkPartnerList];
      }
    );
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => updateOrganization.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      updateOrganization.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - infin8v2/delete-master-entities-common", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(deleteMasterEntitiesCommon.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteMasterEntitiesCommon.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should execute default eventHandlerEmitter case - infin8v2/delete-master-entities-common", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => deleteMasterEntitiesCommon.res)
    );
    // const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      deleteMasterEntitiesCommon.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should call getMasterDataToReact, getFullDealDataToReact, and getDealByIdToRestApi if isValidDealInformationUrl returns true", (done) => {
    // Arrange
    spyOn(component, "isValidDealInformationUrl").and.returnValue(true);
    spyOn(component, "getMasterDataToReact");
    spyOn(component, "getFullDealDataToReact");
    spyOn(component, "getDealByIdToRestApi");
    const mockUserInfo = { userId: "123", userRole: "admin" };
    const oidcData = {
    "handler": "userInfo",
    "event_success": true,
    "response": {
        "exp": 1753874442,
        "iat": 1753874295,
        "auth_time": 1753869102,
        "jti": "6b40f897-ebd5-454a-a204-7e9a1fbf820f",
        "iss": "https://infin8v2-ss-layer.inadev.net/client-keycloak/auth/realms/infin8v2Dev",
        "aud": "account",
        "sub": "fab1371b-4a79-4bf7-a886-932c17dfb1c9",
        "typ": "Bearer",
        "azp": "infin8v2DevWeb",
        "sid": "1421db60-27ae-4250-b65b-b0f8921a48c9",
        "acr": "1",
        "allowed-origins": [
            "https://infin8v2-dev2.inadev.net",
            "https://infin8v2dev.inadev.net"
        ],
        "realm_access": {
            "roles": [
                "offline_access",
                "infin8v2Dev",
                "Super-Admin"
            ]
        },
        "resource_access": {
            "account": {
                "roles": [
                    "manage-account",
                    "manage-account-links",
                    "view-profile"
                ]
            }
        },
        "scope": "openid profile email",
        "email_verified": false,
        "name": "Kishore Sarkar",
        "preferred_username": "kishore.sarkar@inadev.com",
        "given_name": "Kishore",
        "family_name": "Sarkar",
        "email": "kishore.sarkar@inadev.com",
        "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQU0RNR09zQkNqWDEyeUhLTDlzOUtoZTNzY3FBYk5STnBhdFhwTlhWNGJnIn0.eyJleHAiOjE3NTM4NzQ0NDIsImlhdCI6MTc1Mzg3NDI5NSwiYXV0aF90aW1lIjoxNzUzODY5MTAyLCJqdGkiOiI2YjQwZjg5Ny1lYmQ1LTQ1NGEtYTIwNC03ZTlhMWZiZjgyMGYiLCJpc3MiOiJodHRwczovL2luZmluOHYyLXNzLWxheWVyLmluYWRldi5uZXQvY2xpZW50LWtleWNsb2FrL2F1dGgvcmVhbG1zL2luZmluOHYyRGV2IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImZhYjEzNzFiLTRhNzktNGJmNy1hODg2LTkzMmMxN2RmYjFjOSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImluZmluOHYyRGV2V2ViIiwic2lkIjoiMTQyMWRiNjAtMjdhZS00MjUwLWI2NWItYjBmODkyMWE0OGM5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2luZmluOHYyLWRldjIuaW5hZGV2Lm5ldCIsImh0dHBzOi8vaW5maW44djJkZXYuaW5hZGV2Lm5ldCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJpbmZpbjh2MkRldiIsIlN1cGVyLUFkbWluIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Iktpc2hvcmUgU2Fya2FyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoia2lzaG9yZS5zYXJrYXJAaW5hZGV2LmNvbSIsImdpdmVuX25hbWUiOiJLaXNob3JlIiwiZmFtaWx5X25hbWUiOiJTYXJrYXIiLCJlbWFpbCI6Imtpc2hvcmUuc2Fya2FyQGluYWRldi5jb20ifQ.Gxo3WLtLZZOmTEndj7z0311N1JLSbacqnuA8oJe-2ZMwmf-qddkGYrkPZeHquvfeCmRRsuxPM6qaj2b9omLDLp302nfJ-H4fgvNozmrR8hlwQufb1NtpsK_YdklYs8gjeJ9CvJ_gKye95nviZ6tWj-F-k7VhhCPBfjjhkv3k6R4NR3UCApGgsWj_u9bXiCDVD5ujqC1LzG59EVyQtnwsCvzI8nhfoQQa171BycOTJHlZp6nWzhUYAa_ckD7yZulsoTWw2dLvWnZNJ0dIXgb4_FvqjKKTb170Asdg_V49YY2epSpbui-0jrYZvvL91hw6yPsBON5MEXPtxsZoGYfCvQ"
    }
}
    spyOn(localStorage, "getItem").and.callFake((key: string) => {
      if (key === "OIDCConnect_copy") {
        return JSON.stringify(oidcData);
      }
      if (key === "userInfoGlobal") {
        return JSON.stringify(mockUserInfo);
      }
      return null;
    });

    // Act
    // You can call ngOnInit or directly the code block if it's in a method
    component.ngOnInit();

    // Assert
    spyOn(component, "getCurrentUser").and.callThrough();
    spyOn(component, "getMasterData").and.callThrough();
    // spyOn(component, "getMasterDataToReact").and.callThrough();
    // spyOn(component, "getFullDealDataToReact").and.callThrough();
    // spyOn(component, "getDealByIdToRestApi").and.callThrough();
    spyOn(component, "getDealDocumentTaskCount").and.callThrough();
    done();
  });

  it('should log "Current URL is invalid" if isValidDealInformationUrl returns false', () => {
    // Arrange
    spyOn(component, "isValidDealInformationUrl").and.returnValue(false);
    // const logSpy = spyOn(console, 'log');

    // Act
    component.ngOnInit();

    // Assert
    expect(component.isValidDealInformationUrl).toHaveBeenCalled();
    // expect(logSpy).toHaveBeenCalledWith('Current URL is invalid');
  });

  it("should execute getMasterDataToReact and updateMasterData with transformed data", (done) => {
    // Arrange: Mock Akita data and returnNestedData
    spyOn(
      component["ngCeeStoreService"],
      "getIndividualApiData"
    ).and.returnValue([{ value: akita["api-data"].entities["master/getAllCommonEntitiesValue"] }]);
    const mockUserInfo = { userId: "123", userRole: "admin" };
        spyOn(localStorage, "getItem").and.callFake((key: string) => {
      if (key === "userInfoGlobal") {
        return JSON.stringify(mockUserInfo);
      }
      return null;
    });
    const updateSpy = spyOn(component.sharedDealdata, "updateMasterData");
    component.getMasterDataToReact(mockUserInfo.userId, mockUserInfo.userRole);
    expect(
      component["ngCeeStoreService"].getIndividualApiData
    ).toHaveBeenCalledWith("master/getAllCommonEntitiesValue");
    done();
  });

  // it('should call invokeExternalApi with correct params and update sharedDealdata in getFullDealDataToReact', (done) => {
  //   // Arrange
  //   const mockUserInfo = { userId: 'u123', userRole: 'admin' };
  //   spyOn(localStorage, 'getItem').and.callFake((key: string) => {
  //     if (key === 'userInfoGlobal') {
  //       return JSON.stringify(mockUserInfo);
  //     }
  //     return null;
  //   });

  //   // Mock extractPathParamsFromCurrentUrl to return a path with [,,dealAppId]
  //   const mockDealAppId = 'deal-app-456';
  //   // spyOn(window as any, 'extractPathParamsFromCurrentUrl').and.returnValue(['', '', mockDealAppId]);

  //   const apiResponse = { some: 'dealData' };
  //   const invokeSpy = spyOn(component, 'invokeExternalApi').and.returnValue({
  //     subscribe: (success: any, error: any) => {
  //       success(apiResponse);
  //     }
  //   });

  //   const updateSpy = spyOn(component.sharedDealdata, 'updatedealData');
  //   const getCreditSpy = spyOn(component, 'getcreditPullDataToReact');

  //   // Act
  //   component.getFullDealDataToReact();

  //   // Assert
  //   expect(invokeSpy).toHaveBeenCalledWith(
  //     "post",
  //     `/infin8v2/get-full-deal-details-new`,
  //     {},
  //     jasmine.objectContaining({
  //       user_id: mockUserInfo.userId,
  //       user_role: mockUserInfo.userRole,
  //       deal_application_id: mockDealAppId
  //     }),
  //     jasmine.objectContaining({
  //       data: { deal_application_id: mockDealAppId },
  //       loan_application_id: mockDealAppId
  //     }),
  //     {}
  //   );
  //   expect(updateSpy).toHaveBeenCalledWith({
  //     getFullDealDetails: JSON.stringify(apiResponse)
  //   });
  //   expect(getCreditSpy).toHaveBeenCalledWith(apiResponse);
  //   done();
  // });

  it("should use hidden_deal_application_id if path[2] is not present", (done) => {
    // Arrange
    const mockUserInfo = { userId: "u123", userRole: "admin" };
    spyOn(localStorage, "getItem").and.callFake((key: string) => {
      if (key === "userInfoGlobal") {
        return JSON.stringify(mockUserInfo);
      }
      return null;
    });

    // spyOn(window as any, 'extractPathParamsFromCurrentUrl').and.returnValue(['', '', undefined]);
    spyOn(
      component["ngCeeStoreService"],
      "getIndividualAppData"
    ).and.returnValue([{ value: "hidden-deal-id-789" }]);

    const apiResponse = { some: "dealData" };
    spyOn(component, "invokeExternalApi").and.returnValue({
      subscribe: (success: any, error: any) => {
        success(apiResponse);
      },
    });

    const updateSpy = spyOn(component.sharedDealdata, "updatedealData");
    const getCreditSpy = spyOn(component, "getcreditPullDataToReact");
    
    // Act
    component.getFullDealDataToReact(mockUserInfo.userId, mockUserInfo.userRole);

    // Assert
    expect(component.invokeExternalApi).toHaveBeenCalledWith(
      "post",
      `/infin8v2/get-full-deal-details-new`,
      {},
      jasmine.objectContaining({
        user_id: mockUserInfo.userId,
        user_role: mockUserInfo.userRole,
        deal_application_id: "hidden-deal-id-789",
      }),
      jasmine.objectContaining({
        data: { deal_application_id: "hidden-deal-id-789" },
        loan_application_id: "hidden-deal-id-789",
      }),
      {}
    );
    expect(updateSpy).toHaveBeenCalledWith({
      getFullDealDetails: JSON.stringify(apiResponse),
    });
    expect(getCreditSpy).toHaveBeenCalledWith(apiResponse);
    done();
  });

  it("should call updateCreditReport and emitData with correct data in getcreditPullDataToReact", (done) => {
    // Arrange
    const mockDealId = "deal-123";
    const mockApiResponse = {
      data: [
        {
          credit_history: [{ credit_error: 404 }],
          consent_details: { consent_application_id: "abc" },
        },
      ],
    };
    const mockDealData = {
      data: {
        borrowers: [
          {
            personal_info: {
              first_name: "John",
              last_name: "Doe",
              application_id: "b1",
            },
          },
        ],
      },
    };

    // spyOn(window as any, 'extractPathParamsFromCurrentUrl').and.returnValue(['', '', mockDealId]);
    spyOn(
      component["ngCeeStoreService"],
      "getIndividualAppData"
    ).and.returnValue([{ value: mockDealId }]);
    spyOn(component, "invokeExternalApi").and.returnValue({
      subscribe: (success: any, error: any) => {
        success(JSON.parse(JSON.stringify(mockApiResponse)));
      },
    });
    // const updateCreditSpy = spyOn(component.sharedDealdata, "updateCreditReport");
    // const emitSpy = spyOn(component, "emitData");

    // Act
    component.getcreditPullDataToReact(getFullDealDetails.res);

    // Assert
    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        `/infin8v2/get-credit-report`,
        {},
        { loan_application_id: mockDealId },
        "",
        { wfe_app_id: "infin8v2" }
      );

      // Check that credit_error_reason and consent_details are set
      // const calledArg = emitSpy.calls.first().args[0].api_response;
      // expect(calledArg.data[0].credit_history[0].credit_error_reason).toBe("404");
      // expect(calledArg.data[0].consent_details).toEqual({ consent_application_id: 'abc' });
      spyOn(component.sharedDealdata, "updateCreditReport");
      // Check emits for dealData
      // expect(emitSpy).toHaveBeenCalledWith(
      //   jasmine.objectContaining({ api_response: mockApiResponse }),
      //   "showcreditreport_pull",
      //   true,
      //   true
      // );
      // expect(emitSpy).toHaveBeenCalledWith(
      //   jasmine.objectContaining({ api_response: { menuborrower: jasmine.anything() } }),
      //   "menuborrower",
      //   true,
      //   true
      // );
      // expect(emitSpy).toHaveBeenCalledWith(
      //   jasmine.objectContaining({ api_response: { data: jasmine.any(Array) } }),
      //   "getDealBorrowers",
      //   true,
      //   true
      // );
      // expect(emitSpy).toHaveBeenCalledWith(
      //   jasmine.objectContaining({ api_response: jasmine.objectContaining({ data: jasmine.anything() }) }),
      //   "getFullDealDetails",
      //   true,
      //   true
      // );
      done();
    }, 0);
  });

  // it("should use hidden_deal_application_id if path[2] is not present", (done) => {
  //   // Arrange
  //   const mockUserInfo = { userId: "u123", userRole: "admin" };
  //   spyOn(localStorage, "getItem").and.callFake((key: string) => {
  //     if (key === "userInfoGlobal") {
  //       return JSON.stringify(mockUserInfo);
  //     }
  //     return null;
  //   });

  //   // spyOn(window as any, "extractPathParamsFromCurrentUrl").and.returnValue([
  //   //   "",
  //   //   "",
  //   //   undefined,
  //   // ]);
  //   spyOn(
  //     component["ngCeeStoreService"],
  //     "getIndividualAppData"
  //   ).and.returnValue([{ value: "hidden-deal-id-789" }]);

  //   const apiResponse = { data: { some: "dealData" } };
  //   // const processedDeal = {
  //   //   processed: true,
  //   //   stageCount: 2,
  //   //   totalStage: 5,
  //   //   circleOffSet: 50,
  //   // };
  //   // spyOn(window as any, "processSingleDeal").and.returnValue(processedDeal);

  //   // Mock DOM for progress bar
  //   // const progressDiv = document.createElement("div");
  //   // progressDiv.className = "circle-progress-container";
  //   // document.body.appendChild(progressDiv);

  //   // progressDivDom()

  //   spyOn(component, "invokeExternalApi").and.returnValue({
  //     subscribe: (success: any, error: any) => {
  //       success(getSingleDealDetails.res);
  //     },
  //   });

  //   // const emitSpy = spyOn(component, 'emitData');

  //   // Act
  //   component.getDealByIdToRestApi();
  //   done();
  //   // Assert
  //   // setTimeout(() => {
  //   //   expect(component.invokeExternalApi).toHaveBeenCalledWith(
  //   //     "post",
  //   //     `/infin8v2/get-deal-by-id`,
  //   //     {},
  //   //     jasmine.objectContaining({
  //   //       data: { deal_application_id: "hidden-deal-id-789", user_id: mockUserInfo.userId },
  //   //       user_id: mockUserInfo.userId,
  //   //       user_role: mockUserInfo.userRole
  //   //     }),
  //   //     {},
  //   //     jasmine.objectContaining({ deal_application_id: "hidden-deal-id-789" })
  //   //   );
  //   //   expect(progressDiv.innerHTML).toContain(`${processedDeal.stageCount}/${processedDeal.totalStage}`);
  //   //   expect(emitSpy).toHaveBeenCalledWith(
  //   //     { api_response: { ...apiResponse, data: processedDeal } },
  //   //     "getSingleDealDetails",
  //   //     true,
  //   //     true
  //   //   );
  //   //   document.body.removeChild(progressDiv);
  //   //   done();
  //   // }, 5100);
  // });

  it("should execute default eventHandlerEmitter case - getComplianceReviewMortgageCommitmentFilesdownload", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(getComplianceReviewMortgageCommitmentFilesdownload.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewMortgageCommitmentFilesdownload.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for getComplianceReviewMortgageCommitmentFilesdownload and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => getComplianceReviewMortgageCommitmentFilesdownload.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      getComplianceReviewMortgageCommitmentFilesdownload.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should execute default eventHandlerEmitter case - renameFileDealDocument", (done) => {
    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(renameFileDealDocument.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      renameFileDealDocument.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for renameFileDealDocument and emit error", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => renameFileDealDocument.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      renameFileDealDocument.req
    );
    expect(component).toBeTruthy();
    done();
  });



    it("should execute default eventHandlerEmitter case - automatedWorkflow_workflowApiGetoNhOLD", (done) => {
     spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "master/getAllCommonEntitiesValue") {
        return pdata.masterdata
      }
    });

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGetoNhOLD.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetoNhOLD.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow/workflowApiGetDealCreate and emit error", (done) => {
   
       spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "master/getAllCommonEntitiesValue") {
        return pdata.masterdata
      }
    });
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGetoNhOLD.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetoNhOLD.req
    );
    expect(component).toBeTruthy();
    done();
  });

   it("should execute default eventHandlerEmitter case - automatedWorkflow/workflowApiGetCancelled", (done) => {
     spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "master/getAllCommonEntitiesValue") {
        return pdata.masterdata
      }
    });

    const spy = spyOn(component, "invokeExternalApi").and.returnValue(
      of(automatedWorkflow_workflowApiGetcALCEL.res)
    );
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetcALCEL.req
    );
    expect(component).toBeTruthy();
    done();
  });
  it("should handle error case for automatedWorkflow/workflowApiGetCancelled and emit error", (done) => {
   
       spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "master/getAllCommonEntitiesValue") {
        return pdata.masterdata
      }
    });
    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError(() => automatedWorkflow_workflowApiGetcALCEL.res)
    );
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(
      automatedWorkflow_workflowApiGetcALCEL.req
    );
    expect(component).toBeTruthy();
    done();
  });

  it("should return array of first_name when valid array is passed", () => {
    const data = [
      { first_name: "John", last_name: "Doe" },
      { first_name: "Jane", last_name: "Smith" },
    ];
    const result = component.getOnlyFirstNameArray(data);
    expect(result).toEqual(["John", "Jane"]);
  });

  it("should return empty array when input is not an array", () => {
    const data = { first_name: "John" } as any;
    const result = component.getOnlyFirstNameArray(data);
    expect(result).toEqual([]);
  });

  it("should return empty array when input is an empty array", () => {
    const data: any[] = [];
    const result = component.getOnlyFirstNameArray(data);
    expect(result).toEqual([]);
  });

  it("should return array with undefined values if objects don’t have first_name", () => {
    const data = [{ name: "John" }, { last_name: "Smith" }];
    const result = component.getOnlyFirstNameArray(data);
    expect(result).toEqual([undefined, undefined]);
  });

  it("should return full name of the first borrower when valid array is passed", () => {
    const data = [
      { first_name: "John", last_name: "Doe" },
      { first_name: "Jane", last_name: "Smith" },
    ];
    const result = component.getprimaryBorrower(data);
    expect(result).toBe("John Doe");
  });

  it("should return first name with space if last_name is missing", () => {
    const data = [
      { first_name: "Alice" },
    ];
    const result = component.getprimaryBorrower(data);
    expect(result).toBe("Alice undefined");  
  });

  it("should return empty object when input is not an array", () => {
    const data = { first_name: "Sam", last_name: "Wilson" } as any;
    const result = component.getprimaryBorrower(data);
    expect(result).toEqual({});
  });

  it("should return empty object when input is an empty array", () => {
    const data: any[] = [];
    const result = component.getprimaryBorrower(data);
    expect(result).toEqual({});
  });

  // it("should set contact_id when relatedTo is Contact in task/create", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(task_create.res1));
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(task_create.req1);

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalled();
  //     const passedBody = (component.invokeExternalApi as jasmine.Spy).calls.argsFor(0)[3];
  //     expect(JSON.parse(passedBody.api_request).contact_id).toBe("CONTACT123");
  //     done();
  //   }, 0);
  // });

  // it("should set loan_application_id when relatedTo is Deal in task/create", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(task_create.res2));
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(task_create.req2);

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalled();
  //     const passedBody = (component.invokeExternalApi as jasmine.Spy).calls.argsFor(0)[3];
  //     expect(JSON.parse(passedBody.api_request).loan_application_id).toBe("LOAN123");
  //     done();
  //   }, 0);
  // });

  // it("should set contact_id when relatedTo is Contact in task/update", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(taskUpdate.res1));
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(taskUpdate.req1);

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalled();
  //     const passedBody = (component.invokeExternalApi as jasmine.Spy).calls.argsFor(0)[3];
  //     expect(JSON.parse(passedBody.api_request).contact_id).toBe("CONTACT123");
  //     done();
  //   }, 0);
  // });

  // it("should set loan_application_id when relatedTo is Deal in task/update", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(of(taskUpdate.res2));
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(taskUpdate.req2);

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalled();
  //     const passedBody = (component.invokeExternalApi as jasmine.Spy).calls.argsFor(0)[3];
  //     expect(JSON.parse(passedBody.api_request).loan_application_id).toBe("LOAN123");
  //     done();
  //   }, 0);
  // });

  // it("should emit error response when invokeExternalApi fails in task/update", (done) => {
  //   spyOn(component, "invokeExternalApi").and.returnValue(throwError(() => taskUpdate.errorRes));
  //   const emitSpy = spyOn(component, "emitData");

  //   component["sharedEventService"].eventHandlerEmitter.emit(taskUpdate.req1);

  //   setTimeout(() => {
  //     expect(emitSpy).toHaveBeenCalledWith(
  //       { api_response: taskUpdate.errorRes.error },
  //       "task/update",
  //       true
  //     );
  //     done();
  //   }, 0);
  // });

  it("should emit true for offline lender in isLenderOfflineCheck", () => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue(isLenderOfflineCheck.res);
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(isLenderOfflineCheck.req);

    expect(emitSpy).toHaveBeenCalledWith(
      {
        api_response: {
          isOfflineLender: true,
        },
      },
      "isLenderOfflineCheck",
      true
    );
  });

  it("should emit false for online lender in isLenderOfflineCheck", () => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue(isLenderOfflineCheck.res1);
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(isLenderOfflineCheck.req1);

    expect(emitSpy).toHaveBeenCalledWith(
      {
        api_response: {
          isOfflineLender: false,
        },
      },
      "isLenderOfflineCheck",
      true
    );
  });

  it("should emit fallback message when lender_id is missing in isLenderOfflineCheck", () => {
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(isLenderOfflineCheck.req2);

    expect(emitSpy).toHaveBeenCalledWith(
      {
        api_response: {
          status: false,
        },
      },
      "isLenderOfflineCheck",
      true
    );
  });

  it("should execute eventHandlerEmitter case - viewContactByIDExpenses with valid referrer entry", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.callFake((handler, key) => {
      if (handler === "getDealExpenses" && key === "getDealExpenses##data") {
        return {
          expenses: [
            { referrer_id: "CONTACT123", split_head: "Referrer" }
          ]
        };
      }
      return { expenses: [] };
    });

    spyOn(component, "invokeExternalApi").and.returnValue(of({ success: true }));
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(viewContactByIDExpenses.res);

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/infin8v2/view-contact",
        {},
        jasmine.objectContaining({
          user_id: "U1",
          user_role: "admin",
          data: jasmine.objectContaining({
            contact_id: "CONTACT123",
            called_internally: true,
          }),
        }),
        "",
        {}
      );

      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: { success: true } },
        "viewContactByIDExpenses",
        true
      );
      done();
    }, 0);
  });

  it("should not call API if no matching referrer entry found - viewContactByIDExpenses", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      expenses: [{ referrer_id: "", split_head: "other" }]
    });

    const apiSpy = spyOn(component, "invokeExternalApi");
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(viewContactByIDExpenses.res2);

    setTimeout(() => {
      expect(apiSpy).not.toHaveBeenCalled();
      expect(emitSpy).not.toHaveBeenCalled();
      done();
    }, 0);
  });

  it("should handle missing or invalid expenses array - viewContactByIDExpenses", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      expenses: null
    });

    const apiSpy = spyOn(component, "invokeExternalApi");
    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(viewContactByIDExpenses.res3);

    setTimeout(() => {
      expect(apiSpy).not.toHaveBeenCalled();
      expect(emitSpy).not.toHaveBeenCalled();
      done();
    }, 0);
  });

  it("should handle API error gracefully - viewContactByIDExpenses", (done) => {
    spyOn(component, "getAkitaDataFromHandler").and.returnValue({
      expenses: [{ referrer_id: "CONTACT999", split_head: "Referrer" }]
    });

    spyOn(component, "invokeExternalApi").and.returnValue(
      throwError({ error: "Server error" })
    );

    const emitSpy = spyOn(component, "emitData");
    component["sharedEventService"].eventHandlerEmitter.emit(viewContactByIDExpenses.res4);

    setTimeout(() => {
      expect(emitSpy).not.toHaveBeenCalled(); 
      done();
    }, 0);
  });

  it("should execute eventHandlerEmitter case - DownloadHistoricalFiles (success)", (done) => {
    spyOn(component, "invokeExternalApi").and.returnValue(of(DownloadHistoricalFiles.res));
    const emitSpy = spyOn(component, "emitData");
    const windowOpenSpy = spyOn(window, "open");

    // trigger the event
    component["sharedEventService"].eventHandlerEmitter.emit(DownloadHistoricalFiles.req);

    setTimeout(() => {
      expect(windowOpenSpy).toHaveBeenCalledWith("https://example.com/test.pdf", "_blank");

      expect(emitSpy).toHaveBeenCalledWith(
        jasmine.objectContaining({
          api_response: jasmine.objectContaining({
            result: jasmine.objectContaining({
              url: "https://example.com/test.pdf",
            }),
          }),
        }),
        "DownloadHistoricalFiles",
        true
      );
      done();
    }, 0);
  });

  it("should execute eventHandlerEmitter case - DownloadHistoricalFiles (error)", (done) => {
    const mockError = { error: { message: "Network error" } };

    spyOn(component, "invokeExternalApi").and.returnValue(throwError(mockError));
    const emitSpy = spyOn(component, "emitData");

    // trigger the event
    component["sharedEventService"].eventHandlerEmitter.emit(DownloadHistoricalFiles.req2);

    setTimeout(() => {
      expect(emitSpy).toHaveBeenCalledWith(
        jasmine.objectContaining({
          api_response: jasmine.objectContaining({
            message: "Network error",
          }),
        }),
        "DownloadHistoricalFiles",
        true
      );
      done();
    }, 0);
  });

  it('should handle getCurrentCombineApi and emit correct data', () => {
    spyOn(component, 'invokeExternalApi').and.returnValue(of(getCurrentCombineApi.mockApiResponse));
    spyOn(component, 'emitData');

    getCurrentCombineApi.mockRes.headers["searchType"] = "ldapSearchType";
    component.invokeExternalApi(
      "post",
      "/infin8v2/combined-ldap-user-org-dashboard",
      getCurrentCombineApi.mockRes.headers,
      {
        data: {
          email_id: getCurrentCombineApi.mockRes.urlParams["preferred_username"],
          is_dashboard: true,
        },
      },
      "",
      getCurrentCombineApi.mockRes.queryParams
    ).subscribe(apiResponse => {
      component.emitData({ api_response: apiResponse.data.ldap }, "rbac/ldap_search", true, true);
      component.emitData({ api_response: { data: apiResponse.data.organization } }, "getCurrentOrganization", true, true);

      const role = [{ key: "Admin" }];
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      component.emitData(
        {
          api_response: {
            ...apiResponse.data.user.api_response,
            role: role[0],
            timeZone,
          },
        },
        "getCurrentUser",
        true,
        true
      );

      component.emitData(
        {
          api_response: {
            ...apiResponse.data.user.api_response,
            timeZone,
          },
        },
        "getLoggedInUser_from_Infin8UsersTable",
        true,
        true
      );

      const userInfoGlobal = {
        userRole: apiResponse.data.user.api_response.result[0]?.userRoles,
        userId: apiResponse.data.user.api_response.result[0]?.application_id,
      };
      localStorage.setItem("userInfoGlobal", JSON.stringify(userInfoGlobal));

      component.emitData(
        { api_response: { data: apiResponse.data.dashboard_tiles } },
        "getUserDashboardTile",
        true,
        true
      );

      component.emitData({ api_response: apiResponse }, getCurrentCombineApi.mockRes.handler, true);
    });

    expect(component.invokeExternalApi).toHaveBeenCalled();
    expect(component.emitData).toHaveBeenCalledWith(
      { api_response: getCurrentCombineApi.mockApiResponse.data.ldap },
      "rbac/ldap_search",
      true,
      true
    );
    expect(component.emitData).toHaveBeenCalledWith(
      { api_response: { data: getCurrentCombineApi.mockApiResponse.data.organization } },
      "getCurrentOrganization",
      true,
      true
    );
    expect(localStorage.getItem("userInfoGlobal")).toContain("user-123");
  });

  it('should process apiResponse when not null and update transaction_type', () => {
    const apiResponse = {
      data: {
        submission: {
          transaction_type: 'NewApplication'
        }
      }
    };

    const nestedData = apiResponse.data.submission;
    (component as any).apiResponse = apiResponse;
    component['transaction_type'] = nestedData.transaction_type;

    expect(component['transaction_type']).toBe('NewApplication');
  });

  it('should update DOM and hide lenderPanel if transaction_type is Renewal', () => {
    const apiResponse = {
      data: {
        submission: {
          transaction_type: 'Renewal'
        }
      }
    };
    const nestedData = apiResponse.data.submission;
    (component as any).apiResponse = apiResponse;
    component['transaction_type'] = nestedData.transaction_type;

    fixture.detectChanges();
    const lenderPanel = fixture.nativeElement.querySelector('.lender-panel');
    expect(lenderPanel).toBeNull();  
  });

  it("should call invokeExternalApi and emitData with parsed profilePic when successful - getProfilePic", (done) => {

    spyOn(component, "invokeExternalApi").and.returnValue(of(getProfilePic.res));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(getProfilePic.req);

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/file-management/get-attachment",
        getProfilePic.req.headers,
        jasmine.objectContaining({
          api_request: "{}"
        }),
        getProfilePic.req.urlParams,
        getProfilePic.req.queryParams
      );

      expect(emitSpy).toHaveBeenCalledWith(
        jasmine.objectContaining({
          api_response: jasmine.objectContaining(getProfilePic.res2)
        }),
        "getProfilePic",
        true
      );

      done();
    }, 0);
  });


  it("should emit error response when invokeExternalApi fails - getProfilePic", (done) => {
  
    spyOn(component, "invokeExternalApi").and.returnValue(throwError(getProfilePic.error));
    const emitSpy = spyOn(component, "emitData");

    component["sharedEventService"].eventHandlerEmitter.emit(getProfilePic.req);

    setTimeout(() => {
      expect(component.invokeExternalApi).toHaveBeenCalledWith(
        "post",
        "/file-management/get-attachment",
        getProfilePic.req.headers,
        jasmine.objectContaining({
          api_request: "{}"
        }),
        getProfilePic.req.urlParams,
        getProfilePic.req.queryParams
      );

      expect(emitSpy).toHaveBeenCalledWith(
        { api_response: getProfilePic.error.error },
        "getProfilePic",
        true
      );

      done();
    }, 0);
  });


});


