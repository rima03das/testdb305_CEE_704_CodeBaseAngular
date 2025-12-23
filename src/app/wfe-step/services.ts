import { EventEmitter } from "@angular/core";
import JSZip from "jszip";
import { saveAs } from "file-saver";
// import { getCode, getName } from 'country-list';

import moment from "moment";
// import { Parser } from 'json2csv';
import jsonToCsvExport from "json-to-csv-export";

// export const getAkitaApiData = (handler) => {
//   let akitadata = JSON.parse(localStorage.getItem('AkitaStores'));
//   let apidata = akitadata['api-data']['entities'][handler]['value'];
//   delete apidata.handler_name;
//   delete apidata[`${handler}##status`];
//   // //console.log(handler, ': ', apidata);
//   return apidata;
// };

export const returnNestedData = (data) => {
  if (Object(data) !== data || Array.isArray(data)) {
    return data;
  }
  const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
  const resultholder = {};
  // tslint:disable-next-line: forin
  for (const p in data) {
    let cur = resultholder;
    let prop = "";
    let m;
    while ((m = regex.exec(p))) {
      cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
      prop = m[2] || m[1];
    }
    cur[prop] = data[p];
  }
  return resultholder[""] || resultholder;
};

// export const returnNestedData = (data) => {
//   if (Object(data) !== data || Array.isArray(data)) {
//     return data;
//   }
//   const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
//   const resultholder = {};
//   for (const key in data) {
//     // Parse the key as is, following the existing rule
//     let cur = resultholder;
//     let prop = '';
//     let match;
//     while ((match = regex.exec(key))) {
//       cur = cur[prop] || (cur[prop] = match[2] ? [] : {});
//       prop = match[2] || match[1];
//     }
//     cur[prop] = data[key];
//   }
//   return resultholder[''] || resultholder;
// };

// export const exportwithExcel = (columnData, data, filename) => {
//   var xlsdata = [];

//   columnData.forEach((element) => {
//     var obj = data(element);
//     xlsdata.push(obj);
//   });

//   const worksheet = XLSX.utils.json_to_sheet(xlsdata);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

//   return XLSX.writeFile(workbook, `${filename}_${Date.now()}.xlsx`);
// };

// export function filterById(recordId, array, id) {
//   return array.find((item) => item[id] === recordId);
// }

// export function getMasterData(array, recordId, id) {
//   if (recordId) {
//     if (Array.isArray(recordId)) {
//       const idsSet = new Set(recordId);
//       const filteredArray = array.filter((item) => idsSet.has(item[id]));
//       return filteredArray;
//     } else if (typeof recordId === 'string') {
//       const result = filterById(recordId, array, id);
//       return result;
//     } else {
//       throw new Error('Invalid input: ids should be either an array or a string');
//     }
//   }
// }

//get access token from cookies

// export const getTokenFromCookie = () => {
//   let headerPayload,
//     signature = '';
//   decodeURIComponent(document.cookie)
//     .split(';')
//     .forEach((item) => {
//       if (item.includes('headerPayload=') || item.includes('signature=')) {
//         if (item.includes('headerPayload=')) {
//           headerPayload = item.replace('headerPayload=', '').trim();
//         }
//         if (item.includes('signature=')) {
//           signature = item.replace('signature=', '').trim();
//         }
//       }
//     });
//   return `${headerPayload}.${signature}`;
// };

// export const returnUniqueCurrentObj = (arrData, key, value) => {
//   const currValue = arrData.find((item) => item[key] == value);
//   return currValue;
// };

// export const PrintSection = () => {
//   const printContents = document.getElementsByClassName('section-nested-body');
//   var printElement = printContents[0].innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printElement;
//   window.print();
//   document.body.innerHTML = originalContents;
// };

export const getOidcClientId = () => {
  const { clientId } = JSON.parse(localStorage.oidc_config);
  return clientId;
};

export const toggleTaskDealsection = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  if (!formPanel.classList.contains("col-lg-6")) {
    // taskPanel.classList.remove("col-md-12");
    taskPanel.classList.remove("d-none");
    formPanel.classList.add("col-lg-6");
    formPanel.classList.add("split-screen-class");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel.classList.add("d-none");
  } else if (
    !notesPanel.classList.contains("d-none") ||
    !ratioPanel.classList.contains("d-none") ||
    (lenderPanel && !lenderPanel.classList.contains("d-none")) ||
    !workflowPanel?.classList?.contains("d-none")
  ) {
    taskPanel.classList.remove("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    workflowPanel?.classList.add("d-none");
  } else {
    formPanel.classList.remove("col-lg-6");
    formPanel.classList.remove("split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel?.classList.add("d-none");
  }
};

export const toggleNotesDealsection = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  var toggleClass = document
    .querySelector(".form-content-wrapper")
    .classList.contains("col-lg-6");

  if (!toggleClass) {
    // taskPanel.classList.remove("col-md-12");
    // formPanel.classList.add('split-screen-class');
    notesPanel.classList.remove("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    taskPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel.classList.add("d-none");
  } else if (
    !taskPanel.classList.contains("d-none") ||
    !ratioPanel.classList.contains("d-none") ||
    (lenderPanel && !lenderPanel.classList.contains("d-none")) ||
    !workflowPanel?.classList?.contains("d-none")
  ) {
    notesPanel.classList.remove("d-none");
    taskPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    workflowPanel?.classList.add("d-none");
  } else {
    formPanel.classList.remove("col-lg-6");
    formPanel.classList.remove("split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel?.classList.add("d-none");
  }
};

export const toggleRatioDealDetails = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  var toggleClass = document
    .querySelector(".form-content-wrapper")
    .classList.contains("col-lg-6");

  if (!toggleClass) {
    ratioPanel.classList.remove("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel.classList.add("d-none");
  } else if (
    !taskPanel.classList.contains("d-none") ||
    !notesPanel.classList.contains("d-none") ||
    (lenderPanel && !lenderPanel.classList.contains("d-none")) ||
    !workflowPanel.classList.contains("d-none")
  ) {
    ratioPanel.classList.remove("d-none");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    workflowPanel.classList.add("d-none");
  } else {
    formPanel.classList.remove("col-lg-6");
    formPanel.classList.remove("split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel.classList.add("d-none");
  }
};

export const toggleLenderDealDetails = (res) => {
  var lenderPanel = document.querySelector(".lender-section-wrapper");

  if (lenderPanel) {
    var formPanel = document.querySelector(".form-content-wrapper");
    var taskPanel = document.querySelector(".task-section-wrapper");
    var notesPanel = document.querySelector(".notes-section-wrapper");
    var ratioPanel = document.querySelector(".ratio-section-wrapper");
    var workflowPanel = document.querySelector(".workflow-section-wrapper");

    var toggleClass = document
      .querySelector(".form-content-wrapper")
      .classList.contains("col-lg-6");
    if (!toggleClass) {
      lenderPanel.classList.remove("d-none");
      formPanel.classList.add("col-lg-6", "split-screen-class");
      taskPanel.classList.add("d-none");
      notesPanel.classList.add("d-none");
      ratioPanel.classList.add("d-none");
      workflowPanel.classList.add("d-none");
    } else if (
      !taskPanel.classList.contains("d-none") ||
      !notesPanel.classList.contains("d-none") ||
      !ratioPanel.classList.contains("d-none") ||
      !workflowPanel.classList.contains("d-none")
    ) {
      lenderPanel.classList.remove("d-none");
      formPanel.classList.add("col-lg-6", "split-screen-class");
      taskPanel.classList.add("d-none");
      notesPanel.classList.add("d-none");
      ratioPanel.classList.add("d-none");
      workflowPanel.classList.add("d-none");
    } else {
      formPanel.classList.remove("col-lg-6");
      formPanel.classList.remove("split-screen-class");
      taskPanel.classList.add("d-none");
      notesPanel.classList.add("d-none");
      ratioPanel.classList.add("d-none");
      lenderPanel.classList.add("d-none");
      workflowPanel.classList.add("d-none");
    }
  }
};

export const openLenderDealDetails = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  lenderPanel.classList.remove("d-none");
  formPanel.classList.add("col-lg-6", "split-screen-class");
  taskPanel.classList.add("d-none");
  notesPanel.classList.add("d-none");
  ratioPanel.classList.add("d-none");
  workflowPanel.classList.add("d-none");
};

export const toggleWorkflowDealDetails = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  var toggleClass = document
    .querySelector(".form-content-wrapper")
    .classList.contains("col-lg-6");

  if (!toggleClass) {
    workflowPanel.classList.remove("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
  } else if (
    !taskPanel.classList.contains("d-none") ||
    !notesPanel.classList.contains("d-none") ||
    !ratioPanel.classList.contains("d-none") ||
    (lenderPanel && !lenderPanel.classList.contains("d-none"))
  ) {
    workflowPanel.classList.remove("d-none");
    formPanel.classList.add("col-lg-6", "split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
  } else {
    formPanel.classList.remove("col-lg-6");
    formPanel.classList.remove("split-screen-class");
    taskPanel.classList.add("d-none");
    notesPanel.classList.add("d-none");
    ratioPanel.classList.add("d-none");
    lenderPanel?.classList.add("d-none");
    workflowPanel.classList.add("d-none");
  }
};

export const openWorkflowDealDetails = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  workflowPanel.classList.remove("d-none");
  formPanel.classList.add("col-lg-6", "split-screen-class");
  taskPanel.classList.add("d-none");
  notesPanel.classList.add("d-none");
  ratioPanel.classList.add("d-none");
  lenderPanel?.classList.add("d-none");
};

export const closeWorkflowDealDetails = (res) => {
  var formPanel = document.querySelector(".form-content-wrapper");
  var taskPanel = document.querySelector(".task-section-wrapper");
  var notesPanel = document.querySelector(".notes-section-wrapper");
  var ratioPanel = document.querySelector(".ratio-section-wrapper");
  var lenderPanel = document.querySelector(".lender-section-wrapper");
  var workflowPanel = document.querySelector(".workflow-section-wrapper");

  formPanel.classList.remove("col-lg-6");
  formPanel.classList.remove("split-screen-class");
  taskPanel.classList.add("d-none");
  notesPanel.classList.add("d-none");
  ratioPanel.classList.add("d-none");
  lenderPanel?.classList.add("d-none");
  workflowPanel.classList.add("d-none");
};

export const columnresizesection = (res) => {
  var filtersection = document.querySelector(".filter-panel-wrapper");
  var tablesection = document.querySelector(".main-table-wrapper");
  var columnShowhide = document.querySelector(".column-resize-panel-wrapper");
  var toggleTable = document
    .querySelector(".main-table-wrapper")
    .classList.contains("col-md-12");
  let togglefilterClass = document
    .querySelector(".filter-panel-wrapper")
    .classList.contains("col-md-3");
  let filterButton = document.querySelector(".filter-btn"); // new added
  let columnButton = document.querySelector(".column-btn"); // new added
  if (toggleTable) {
    filtersection.classList.add("d-none");
    tablesection.classList.remove("col-md-12");
    tablesection.classList.add("col-md-9");
    columnShowhide.classList.remove("d-none");
    columnShowhide.classList.add("col-md-3");
    filterButton.classList.remove("active-btn"); // new added
    columnButton.classList.add("active-btn"); // new added
  } else if (togglefilterClass) {
    // filtersection.classList.add('d-none');
    // filtersection.classList.remove('col-md-3');
    // tablesection.classList.remove('col-md-12');
    // tablesection.classList.add('col-md-9');
    // columnShowhide.classList.remove('d-none');
    // columnShowhide.classList.add('col-md-3');

    filtersection.classList.add("d-none");
    tablesection.classList.remove("col-md-9");
    tablesection.classList.add("col-md-12");
    columnShowhide.classList.add("d-none");
    filterButton.classList.remove("active-btn"); // new added
    columnButton.classList.remove("active-btn"); // new added
  } else {
    filtersection.classList.add("d-none");
    tablesection.classList.remove("col-md-9");
    tablesection.classList.add("col-md-12");
    columnShowhide.classList.add("d-none");
    filterButton.classList.remove("active-btn"); // new added
    columnButton.classList.remove("active-btn"); // new added
  }
};

export const tableFilterSection = (res) => {
  const filterPanel = document.querySelector(".filter-panel-wrapper");
  const tablepanel = document.querySelector(".main-table-wrapper");
  const columnShowPanel = document.querySelector(
    ".column-resize-panel-wrapper"
  );
  let toggleTableClass = document
    .querySelector(".main-table-wrapper")
    .classList.contains("col-md-12");
  let togglecolumnShowClass = document
    .querySelector(".column-resize-panel-wrapper")
    .classList.contains("col-md-3");
  let filterButton = document.querySelector(".filter-btn"); // new added
  let columnButton = document.querySelector(".column-btn"); // new added
  if (toggleTableClass) {
    columnShowPanel.classList.add("d-none");
    tablepanel.classList.remove("col-md-12");
    tablepanel.classList.add("col-md-9");
    filterPanel.classList.remove("d-none");
    filterPanel.classList.add("col-md-3");
    columnButton.classList.remove("active-btn"); // new added
    filterButton.classList.add("active-btn"); // new added
  } else if (togglecolumnShowClass) {
    // columnShowPanel.classList.add('d-none');
    // columnShowPanel.classList.add('col-md-3');
    // tablepanel.classList.remove('col-md-12');
    // tablepanel.classList.add('col-md-9');
    // filterPanel.classList.remove('d-none');
    // filterPanel.classList.add('col-md-3');

    columnShowPanel.classList.add("d-none");
    tablepanel.classList.remove("col-md-9");
    tablepanel.classList.add("col-md-12");
    filterPanel.classList.add("d-none");
    columnButton.classList.remove("active-btn"); // new added
    filterButton.classList.remove("active-btn"); // new added
  } else {
    columnShowPanel.classList.add("d-none");
    tablepanel.classList.remove("col-md-9");
    tablepanel.classList.add("col-md-12");
    filterPanel.classList.add("d-none");
    filterButton.classList.remove("active-btn"); // new added
    columnButton.classList.remove("active-btn"); // new added
  }
};

// export function updatePlaceholders() {
//   // Select all text input fields and select fields inside the select-field class
//   const selectFieldElements = document.querySelectorAll('.picker-data select');
// //console.log(selectFieldElements);

//   selectFieldElements.forEach(element => {
//     //console.log(element);

//     // if (element) {
//     //   if (element.tagName.toLowerCase() === 'input') {
//     //     // For text input fields, set the placeholder to '-'
//     //     element.placeholder = '-';
//     //   } else if (element.tagName.toLowerCase() === 'select') {
//     //     // For select fields, set the first option text to '-' if it's disabled
//     //     if (element.options.length > 0) {
//     //       element.options[0].text = '-';
//     //     }
//     //   }
//     // }

//   })
// }

// Call the function as needed, such as on page load or field updates

export function removeEmptyKeys(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => removeEmptyKeys(item))
      .filter(
        (item) =>
          item !== null &&
          item !== undefined &&
          item !== "" &&
          item !== "Invalid date"
      );
  } else if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [
          key,
          typeof value === "object" && value !== null
            ? removeEmptyKeys(value)
            : value,
        ])
        .filter(
          ([_, value]) =>
            value !== null &&
            value !== undefined &&
            value !== "" &&
            value !== "Invalid date"
        )
    );
  }
  return obj;
}

export function setEmptyKeysToNull(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => setEmptyKeysToNull(item))
      .filter((item) => item !== undefined && item !== "Invalid date");
  } else if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        typeof value === "object" && value !== null
          ? setEmptyKeysToNull(value) // Recursively process nested objects/arrays
          : value === null ||
            value === undefined ||
            value === "" ||
            value === "Invalid date"
          ? null
          : value, // Set to null if empty
      ])
    );
  }
  return obj;
}

// export const getClientRole = (data, handler) =>
//   data[handler]["Contact_roles"].find(
//     (item) => item.master_entity_value === "Client"
//   ).application_id;

export function convertToTimestamp(
  task_due_date,
  task_due_date_atCreate?: any
) {
  // const date = new Date(task_due_date);
  // return moment.utc(task_due_date, "MM/DD/YYYY").valueOf();
  if (task_due_date_atCreate) {
    if (task_due_date === moment(task_due_date_atCreate).format("MM/DD/YYYY")) {
      return task_due_date_atCreate;
    }
  }

  const now = moment();

  const combined = moment(task_due_date, "MM/DD/YYYY").set({
    hour: now.hour(),
    minute: now.minute(),
    second: now.second(),
    millisecond: now.millisecond(),
  });

  return combined.utc().valueOf();
}
export function convertFromTimestamp(timestamp) {
  return moment(timestamp).format("MM/DD/YYYY");
}

// function updatePinnedStatus(givenNotes, givenId) {
//   // //console.log('givenNotes:', givenNotes);

//   givenNotes
//     .filter((item) => item !== undefined)
//     .forEach((note) => {
//       if (note.application_id === givenId) {
//         note.is_pinned = true; // Set is_pinned to true for the matching note
//       } else {
//         note.is_pinned = false; // Set is_pinned to false for all other notes
//       }
//     });
//   return givenNotes; // Return the updated notes array
// }

// export function processPinnedNotes(notes, id) {
//   var currentPin = notes.find((note) => note.is_pinned === "1");
//   var toupdatePin = notes.find((note) => note.application_id === id);
//   const Cnotes = currentPin ? [currentPin, toupdatePin] : [toupdatePin];

//   return updatePinnedStatus(Cnotes, id);
// }

export function calculateTotalAndCount(data, key) {
  const totalIncome = data.reduce((total, item) => total + (item[key] || 0), 0);
  const recordCount = data.length;
  return { totalIncome, recordCount };
}

export function extractPathParamsFromCurrentUrl() {
  const path = window.location.pathname;
  const pathSegments = path.split("/").filter(Boolean);

  console.log(pathSegments);

  return pathSegments;
}

export const getCurrentRepetableIndex = (res) => {
  const parent = res.primaryData?.value?.parentPosition
    ? res.primaryData?.value?.parentPosition
    : 0;
  const child = res.primaryData?.value?.position;

  return {
    parent,
    child,
  };
};

// export function deleteArrayKeys(obj, keysToDelete) {
//   keysToDelete.forEach((key) => {
//     delete obj[key];
//   });
//   return obj;
// }

const updateValues = (array) => {
  return array.map((item) => {
    if (item.is_done === "done") {
      item.valueContent = `<div class="radio-icontext status-${item.is_done} "><span class="material-symbols-outlined check">check_circle</span></div> <div class="item-value">${item.master_entity_display_value}</div> `;
    } else {
      item.valueContent = `<div class="radio-icontext status-${item.is_done} " ><span class="material-symbols-outlined not-check">radio_button_checked</span></div> <div class="item-value">${item.master_entity_display_value}</div>`;
    }
    return item;
  });
};

export function addCurrentState(value, deal_stages) {
  const index = deal_stages.findIndex(
    (status) => status.master_entity_display_value == value
  );

  // if (index === -1) return deal_stages; // If value is not found, return the original array

  const currState = deal_stages.map((status, i) => ({
    ...status,
    is_done: i < index ? "done" : i === index ? "current" : false, // Set done for previous, current for the current, false for others
  }));

  return updateValues(currState);
}

export const isUpToCompliance = (givenValue, statuses) => {
  const complianceIndex = statuses.findIndex(
    (status) => status.value === "Compliance"
  );
  const givenValueIndex = statuses.findIndex(
    (status) => status.value === givenValue
  );

  return givenValueIndex !== -1 && givenValueIndex <= complianceIndex;
};

// export const getCountryCode = (res) => {
//   const c = country.find(
//     (item) => item.name.toLowerCase() === res?.urlParams?.country.toLowerCase()
//   );
//   return c;
// };

function getSyncStatus(data) {
  if (data.length != 0) {
    return data?.some((item) => item.is_sycnced === false) ? false : true;
  }
  return true;
}

export const dealListGenerate = (data) => {
  var newDealArray = [];

  Array.isArray(data?.deals)
    ? data?.deals?.forEach((element) => {
        var obj = {
          ...element,
          // deal_id: element.loan_application_id,
          // deal_owner:
          //   element.application_owner.first_name +
          //   " " +
          //   element.application_owner.last_name,
          applicant_name: setPrimaryBorrowerFirst(
            element.loan_application_borrowers
          ),
          compliance_status:
            element?.compliance_status.find((item) => item.is_latest == true)
              ?.status || "Not Submitted",
          // organization_name: element.organization.organization_name,
          // email_address: element.loan_application_borrowers.find(
          //   (item) => item.is_main_borrower
          // )?.email_id,
          // mobile_no: element.loan_application_borrowers.find(
          //   (item) => item.is_main_borrower
          // )?.cell_phone,
          // province: element.loan_application_borrower_property.find(
          //   (item) => item.is_subject_property
          // )?.province,
          // stage: element.application_state,
          // transaction_type: element.transaction_type,
          channel_source: element.channel_source?.entity_value,
          // lead_created: element.created_time,
          channel_campaign: element.channel_campaign?.entity_value,
          // closing_date: element.closing_date,
          // maturity_date: element.property_mortgage.find((item) => {
          //   item.maturity_date;
          // }),
          // line_of_business: element.property_mortgage.find((item) => {
          //   item.line_of_business;
          // }),

          // maturity_date: element.property_mortgage[0].maturity_date,
          // line_of_business: element.property_mortgage[0].line_of_business,
          // subject_property_address: completeAddress(
          //   element.loan_application_borrower_property.find(
          //     (item) => item.is_subject_property === true
          //   )
          // ),
          // last_opened: element.update_time,
          participant_type: element.participants,
          finmo_id: element?.loan_application_external_reference_mapping.find(
            (item) => item.finmo_id
          ),
          // application_type: element.application_type,
          // referral: element.referral,
          // lender: element.property_mortgage[0].lender,
          // task:getTaskDueText(element.task),
          // task_status: getTaskDueText(element.task).status,
          // task_text: getTaskDueText(element.task).text,
          // task_subject: element.task?.task_subject,
          // due_date: element.task?.due_date,
        };
        obj.applicant_name?.forEach((item) => {
          item["name"] = item.first_name + " " + item.last_name;
          item["id"] = item.borrower_id;
        });

        // obj.can_current_user_access = element.loan_application_borrowers?.find(
        //   (item) => item.is_main_borrower
        // )?.can_current_user_access;

        newDealArray.push(obj);
      })
    : [];

  // newDealArray.forEach((element) => {
  //   // //console.log(element.subject_property_address);
  // });

  return newDealArray;
};

export const dealListGenerateDashboard = (data) => {
  var newDealArray = [];

  data?.deals?.forEach((element) => {
    var obj = {
      ...element,
      // deal_id: element.loan_application_id,
      // deal_owner:
      //   element.application_owner.first_name +
      //   " " +
      //   element.application_owner.last_name,
      applicant_name: element?.loan_application_borrowers,
      compliance_status:
        element?.compliance_status.find((item) => item.is_latest == true)
          ?.status || "Not Submitted",
      // organization_name: element.organization.organization_name,
      // email_address: element.loan_application_borrowers.find(
      //   (item) => item.is_main_borrower
      // )?.email_id,
      // mobile_no: element.loan_application_borrowers.find(
      //   (item) => item.is_main_borrower
      // )?.cell_phone,
      // province: element.loan_application_borrower_property.find(
      //   (item) => item.is_subject_property
      // )?.province,
      // stage: element.application_state,
      // transaction_type: element.transaction_type,
      channel_source: element.channel_source?.entity_value,
      // lead_created: element.created_time,
      channel_campaign: element.channel_campaign?.entity_value,
      // closing_date: element.closing_date,
      // maturity_date: element.property_mortgage.find((item) => {
      //   item.maturity_date;
      // }),
      // line_of_business: element.property_mortgage.find((item) => {
      //   item.line_of_business;
      // }),

      // maturity_date: element.property_mortgage[0].maturity_date,
      // line_of_business: element.property_mortgage[0].line_of_business,
      // subject_property_address: completeAddress(
      //   element.loan_application_borrower_property.find(
      //     (item) => item.is_subject_property === true
      //   )
      // ),
      // last_opened: element.update_time,
      participant_type: element.participants,
      finmo_id: element?.loan_application_external_reference_mapping.find(
        (item) => item.finmo_id
      ),
      // application_type: element.application_type,
      // referral: element.referral,
      // lender: element.property_mortgage[0].lender,
      // task:getTaskDueText(element.task),
      // task_status: getTaskDueText(element.task).status,
      // task_text: getTaskDueText(element.task).text,
      // task_subject: element.task?.task_subject,
      // due_date: element.task?.due_date,
    };
    obj.applicant_name?.forEach((item) => {
      item["name"] = item.first_name + " " + item.last_name;
      item["id"] = item.borrower_id;
    });

    newDealArray.push(obj);
  });

  // newDealArray.forEach((element) => {
  //   // //console.log(element.subject_property_address);
  // });

  return newDealArray;
};

export const completeAddress = (res) => {
  return res?.street_long && res?.city
    ? `${res.street_long}, ${res.street_name}, ${res.street_type}, ${res.city}, ${res.province}, ${res.postal_code}`
    : "-";
};

export const isValidSIN = (sin: string) => {
  // Remove all non-digit characters (e.g., dashes, spaces)

  const sanitizedSIN = sin.replace(/\D/g, "");

  // SIN must be exactly 9 digits

  if (sanitizedSIN.length !== 9) {
    return false;
  }

  if (sanitizedSIN.toString() == "000000000") {
    return true;
  }

  let total = 0;
  // Iterate through each digit

  for (let i = 0; i < sanitizedSIN.length; i++) {
    let digit = parseInt(sanitizedSIN[i], 10);

    // Double every second digit from the left (even indices in 0-based index)

    if (i % 2 === 1) {
      digit *= 2;

      // If the result is two digits, add the digits together

      if (digit > 9) {
        digit = Math.floor(digit / 10) + (digit % 10);
      }
    }

    // Add the processed digit to the total

    total += digit;
  }

  // A valid SIN has a total divisible by 10

  return total % 10 === 0;
};

// export const invalidDate = (date) => {
//   if (date?.toLowerCase() === "invalid date" || date?.toLowerCase() === "") {
//     date = "";
//   }

//   return date;
// };

// export const processNestedDocuments = (response) => {
//   const statuses = [
//     "Required",
//     "Pending Review",
//     "Needs Attention",
//     "Accepted",
//     "Submitted",
//     "Approved",
//     "Suggested",
//   ];

//   const result = {};

//   // Initialize keys for each status
//   statuses.forEach((status) => {
//     const keyBase = status.toLowerCase().replace(/\s+/g, "_");
//     const keyIs = `is_${keyBase}`;
//     const keyDocs = `${keyBase}_docs`;

//     result[keyIs] = false;
//     result[keyDocs] = [];
//   });

//   // Process each borrower's document list
//   response.data.forEach((borrower) => {
//     borrower.document.forEach((doc) => {
//       const status = doc.approval_status;
//       if (statuses.includes(status)) {
//         const keyBase = status.toLowerCase().replace(/\s+/g, "_");
//         result[`is_${keyBase}`] = true;
//         result[`${keyBase}_docs`].push(doc);
//       }
//     });
//   });

//   return result;
// };

// export const

export const processDocuments = (documents) => {
  const statuses = [
    "Suggested",
    "Required",
    "Pending Review",
    "Needs Attention",
    "Accepted",
    "Submitted",
    "Approved",
  ];

  const result = {};
  statuses.forEach((status) => {
    const keyBase = status.toLowerCase().replace(/\s+/g, "_");
    const keyIs = `is_${keyBase}`;
    const keyDocs = `${keyBase}_docs`;

    result[keyIs] = false;
    result[keyDocs] = [];
  });

  documents.forEach((doc) => {
    const status = doc.approval_status;
    //console.log(doc);

    doc["attachments"] = doc["documents"].map((d) => d.document_name);
    if (statuses.includes(status)) {
      const keyBase = status.toLowerCase().replace(/\s+/g, "_");
      result[`is_${keyBase}`] = true;
      result[`${keyBase}_docs`].push(doc);
    }
  });

  return result;
};

export const processedBorrowerDocs = (res) => {
  var b = typeof res?.data == "string" ? [] : res.data;
  // var data = getDocumentDataUnderwriter(res.data)
  var borr = [];

  b?.map((borrower) => {
    borrower = {
      ...borrower,
      ...processDocuments(borrower.document_types),
      document_types_length: borrower.document_types.filter(
        (item) => item["documents"].length > 0
      ).length,
      document_length: borrower.document_types.length,
      communication_label: !borrower.communication_email
        ? borrower.is_main_borrower
          ? "Borrower does not have a Communication Email on file."
          : "Co-Borrower does not have a Communication Email on file."
        : "",
      document_types_file: borrower.document_types.filter(
        (item) => item["documents"].length > 0
      ),
    };
    var obj = { ...borrower, ...processDocuments(borrower.document_types) };

    borr.push(obj);
  });

  return borr;
};

/**
 * Given a task, returns an object with the following properties:
 * - text: A string representation of the task's due date in the format
 *   'X days ago' or 'in X days'.
 * - dueDate: The due date as a string in the format 'MMM,DD'.
 * - status: One of 'today', 'future', or 'yesterday', indicating when the
 *   task is due.
 * If the task has no due date, returns an object with all properties set to
 * null.
 */
export function getTaskDueText(task) {
 if (task) {
   const { today, future, yesterday } = task.task_due_dates;
  const dueDate = future || yesterday;
  const statustext = today || future || yesterday;
  const text = today
    ? "Today"
    : dueDate != today && dueDate
    ? moment(dueDate, "MM/DD/YYYY").format("MMM DD")
    : null;
  const status = statustext
    ? today
      ? "today"
      : future
      ? "future"
      : "yesterday"
    : null;

  return { text, dueDate, status };
 }else{
  return { text: null, dueDate: null, status: null };
 }
}

export const downloadFilesAsZip = async (files, name) => {
  const zip = new JSZip();
  const fetchPromises = [];
  var file_count = files.length;

  console.log("files", files, file_count);

  if (file_count > 1) {
    files.forEach((file) => {
      const fetchPromise = fetch(file.url)
        .then((response) => response.blob())
        .then((blob) => {
          zip.file(file.name, blob);
        })
        .catch((err) => console.error(`Failed to fetch ${file.name}:`, err));
      fetchPromises.push(fetchPromise);
    });

    try {
      await Promise.all(fetchPromises);
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, `${name}_files.zip`);
      });
    } catch (err) {
      console.error("Error while downloading files:", err);
    }
  } else {
    for (const file of files) {
      try {
        const response = await fetch(file.url);
        if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);

        const blob = await response.blob();
        saveAs(blob, file.name); // ✅ this triggers a saves dialog or silent download
      } catch (err) {
        console.error(`Error downloading ${file.name}:`, err);
      }
    }
  }
};

// export const groupParticipantsByTypeUsingFind = (data, participantTypes) => {
//   const groupedResult = {
//     statusCode: 200,
//     message: 'Participants retrieved successfully',
//     status: true,
//     data: [], // an array to hold all filtered participants
//   };

//   const typeSet = new Set(participantTypes.map((type) => type.toLowerCase()));
//   participantTypes?.forEach((type) => {
//     groupedResult[type.toLowerCase()] = {}; // Store each type as an object instead of an array
//   });
//   if (Array.isArray(data)) {
//     data?.forEach((participant) => {
//       const typeKey = participant.participant_type.toLowerCase();

//       if (typeSet.has(typeKey)) {
//         groupedResult?.data.push(participant); // Add to the main list

//         if (!groupedResult[typeKey][participant.id]) {
//           groupedResult[typeKey] = participant;
//         }else{
//           groupedResult[typeKey]= { application_id: '' }
//         }
//       }
//     });
//   }

//   return groupedResult;
// };

export const groupParticipantsByTypeUsingFind = (
  data,
  participantTypes,
  response
) => {
  const groupedResult = {
    statusCode: 200,
    message: "Participants retrieved successfully",
    status: true,
    data: [],
    ...response.data,
  };

  // Create a set of lowercase participant types for comparison
  const typeSet = new Set(participantTypes.map((type) => type.toLowerCase()));

  // Initialize each participant type in the groupedResult as an object
  participantTypes?.forEach((type) => {
    groupedResult[type.toLowerCase()] = {}; // Store as object
  });

  if (Array.isArray(data)) {
    // Iterate over the participants and group them by type
    data?.forEach((participant) => {
      const typeKey = participant.participant_type.toLowerCase();

      if (typeSet.has(typeKey)) {
        groupedResult?.data.push(participant); // Add to the main list

        // Only add the participant to the type if it doesn't already exist
        if (!groupedResult[typeKey][participant.application_id]) {
          groupedResult[typeKey] = participant;
        }
      }
    });
  }

  // Check if any type has no participants and set the value to an object with a blank application_id
  participantTypes.forEach((type) => {
    const typeKey = type.toLowerCase();
    if (
      !groupedResult[typeKey] ||
      Object.keys(groupedResult[typeKey]).length === 0
    ) {
      groupedResult[typeKey] = { application_id: "" }; // Set blank application_id if no participants
    }
  });

  return groupedResult;
};

// Filtering participants by specific participant types
export const participantTypesToFilter = [
  "Underwriter",
  "Funding-Admin",
  "Co-agent",
  "Solicitor",
  "Appraiser",
  "Realtor",
];

// export function convertNotIn(obj) {
//   // Recursively iterate over the object
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // If the value is an object, recurse into it
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         convertNotIn(obj[key]); // Recursive call for nested objects
//       }

//       // If the value is "NOT_IN" (string check), modify it
//       if (obj[key] === "NOT_IN" || obj[key] === "NOT IN") {
//         obj[key] = "NOT IN"; // Change it to a consistent "NOT IN" format
//       }

//       // If the value is an array, check each item in the array
//       if (Array.isArray(obj[key])) {
//         obj[key].forEach((item, index) => {
//           // If item is an object, recursively process it
//           if (typeof item === "object" && item !== null) {
//             convertNotIn(item);
//           }
//           // If the array item is "NOT_IN", change it
//           if (item === "NOT_IN" || item === "NOT IN") {
//             obj[key][index] = "NOT IN"; // Ensure it's "NOT IN"
//           }
//         });
//       }
//     }
//   }
// }

export function hasOnlyOneKeyWithData(obj) {
  const keysWithData = Object.values(obj).filter((value) => {
    return (
      (Array.isArray(value) && value.length > 0) ||
      (typeof value === "string" && value.trim() !== "")
    );
  });
  return keysWithData.length === 1;
}

export function addressProcess(address) {
  return {
    currentAddress: address.find((item) => item.is_current === "current"),
    previousAddresses: address.filter((item) => item.is_current != "current"),
  };
}

export function commissionTierValueIntoNumbers(commission_details) {
  const commission_details_converted = commission_details.map((detail) => {
    let commission_split = []
    if ("commission_split" in detail && Array.isArray(detail.commission_split)){
      commission_split =  detail.commission_split.map((split) => ({
        ...split,
        commission_percentage: Number(split.commission_percentage),
        }))
    }
    return {
      ...detail,
      tier_number: Number(detail.tier_number),
      no_of_deals: Number(detail.no_of_deals),
      eight_twelve_commission: Number(detail.eight_twelve_commission),
      network_partner_commission: Number(detail.network_partner_commission),
      deal_owner_commission: Number(detail.deal_owner_commission),
      fee_full_underwriting: Number(detail.fee_full_underwriting),
      fee_lender_access: Number(detail.fee_lender_access),
      fee_signing_package: Number(detail.fee_signing_package),
      commission_split: commission_split,
    };
  });

  return commission_details_converted;
}

// export const exportToCsvFromJson = (jsonData, columnMapping, filename = "export.csv") => {
//   const fields = Object.entries(columnMapping).map(([label, path]) => ({
//     label,
//     value: path  // dot notation supported, like 'address.city'
//   }));

//   const parser = new Parser({ fields });
//   const csv = parser.parse(jsonData);

//   const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = filename;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export function convertValuesToNumbers(obj: Record<string, any>): Record<string, number | null> {
//   const result: Record<string, number | null> = {};

//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const value = parseFloat(obj[key]);
//       result[key] = isNaN(value) ? null : value;
//     }
//   }

//   return result;
// }

export function parseSafeNumber(value) {
  if (typeof value === "string") {
    value = value.replace(/,/g, ""); // Remove commas
  }
  let num = Number(value);
  return isNaN(num) ? 0 : num;
}

export function calculateTotalCalculateSubjectPServices(res: any): {
  [key: string]: number;
} {
  const vars = { ...res.variables };
  Object.keys(vars).forEach((key) => {
    let value = vars[key];
    if (typeof value === "string") {
      value = value?.replace(/,/g, "");
      if (value.trim() === "") {
        value = 0;
      }
    }
    vars[key] = Number(value);
  });
  console.log(vars);

  if (
    typeof vars.add_text_filed_annual === "number" &&
    !isNaN(vars.add_text_filed_annual)
  ) {
    vars.add_text_filed_annual = vars.add_text_filed_annual / 12;
  }
  const sum = Object.values(vars).reduce(
    (acc, val) => Number(acc) + Number(val),
    0
  );
  const result: { [key: string]: number } = {};
  if (Array.isArray(res.targets) && typeof res.targets[0] === "string") {
    result[res.targets[0]] = Number(sum);
  }
  return result;
}

export function calculateSum(res: any): { [key: string]: number } {
  console.log(res);

  const vars = { ...res.variables };
  const firstKey = Object.keys(vars)[0];
  let value = vars[firstKey];
  Object.keys(vars).forEach((key) => {
    let value = vars[key];
    if (typeof value === "string") {
      value = value?.replace(/,/g, "");
      if (value.trim() === "") {
        value = 0;
      }
    }
    vars[key] = Number(value);
  });
  console.log(vars);

  if (typeof vars[firstKey] === "number" && !isNaN(vars[firstKey])) {
    vars[firstKey] = vars[firstKey] / 12;
  }
  const sum = Object.values(vars).reduce(
    (acc, val) => Number(acc) + Number(val),
    0
  );
  const result: { [key: string]: number } = {};
  if (Array.isArray(res.targets) && typeof res.targets[0] === "string") {
    result[res.targets[0]] = Number(sum);
  }
  return result;
}

export function menuBorrowers(data) {
  var borrowers = data?.data?.borrowers || [];
  borrowers.sort(
    (a, b) =>
      (b.personal_info.is_main_borrower ? 1 : 0) -
      (a.personal_info.is_main_borrower ? 1 : 0)
  );
  let menuborrowers = [];
  let primaryBorrower = "";
  borrowers.map((borrower, index) => {
    menuborrowers.push(borrower.personal_info.first_name);
    if(index === 0){
      primaryBorrower = borrower.personal_info.first_name+ " " +borrower.personal_info.last_name;
    }
  });
  let primaryBorrowerObj = {
    menuborrowers: menuborrowers,
    primaryBorrower: primaryBorrower
  };
  return primaryBorrowerObj;
}

// export function calculateSum(obj) {
//   return Object.values(obj)
//     .map((value) => Number(value))
//     .filter((value) => !isNaN(value))
//     .reduce((sum, value) => sum + value, 0);
// }

// export function  modifyNestedData(
//     data,
//     applicationId,
//     updates = {},
//     operation = "update",
//     newObject = null
//   ) {
//     if (Array.isArray(data)) {
//       for (let i = 0; i < data.length; i++) {
//         if (
//           this.modifyNestedData(
//             data[i],
//             applicationId,
//             updates,
//             operation,
//             newObject
//           )
//         ) {
//           // For "delete" operation, remove the matched object
//           if (
//             operation === "delete" &&
//             data[i].application_id === applicationId
//           ) {
//             data.splice(i, 1);
//           }
//           return true;
//         }
//       }
//     } else if (typeof data === "object" && data !== null) {
//       if (data.application_id === applicationId) {
//         if (operation === "update") {
//           // Apply updates
//           Object.assign(data, updates);
//           this.dataObj = data;
//         } else if (operation === "delete") {
//           // Mark for deletion (handled in the parent array)
//           return true;
//         }
//         return true;
//       }

//       // Insert operation: If we find the right place for the new object
//       if (operation === "insert") {
//         if (
//           Array.isArray(data.borrowerAddress) &&
//           newObject.type === "borrowerAddress"
//         ) {
//           // Check if application_id already exists
//           // if (!data.borrowerAddress.some(addr => addr.application_id === applicationId)) {
//           // data.borrowerAddress.push(newObject.payload);
//           if (!data.borrowerAddress || data.assets.length == 0) {
//             Object.assign(data.borrowerAddress, [newObject.payload]);
//           } else {
//             data.borrowerAddress.push(newObject.payload);
//           }
//           this.dataObj = data;
//           return true;
//           // }
//         } else if (
//           Array.isArray(data.employment) &&
//           newObject.type === "employment"
//         ) {
//           // Check if application_id already exists
//           if (
//             !data.employment.some((emp) => emp.application_id === applicationId)
//           ) {
//             data.employment.push(newObject.payload);
//             this.dataObj = data;
//             return true;
//           }
//         } else if (Array.isArray(data.assets) && newObject.type === "assets") {
//           if (!data.assets || data.assets.length == 0) {
//             Object.assign(data.assets, [newObject.payload]);
//           } else {
//             data.assets.push(newObject.payload);
//           }
//           return true;
//         } else if (
//           Array.isArray(data.liabilities) &&
//           newObject.type === "liabilities"
//         ) {
//           if (!data.liabilities || data.liabilities.length == 0) {
//             Object.assign(data.liabilities, [newObject.payload]);
//           } else {
//             data.liabilities.push(newObject.payload);
//           }
//           return true;
//         } else if (data.mortgage && newObject.type === "mortgage") {
//           // Check if application_id already exists
//           // if (!data.assets.some(emp => emp.application_id === applicationId)) {
//           if (!data.mortgage) {
//             Object.assign(data.mortgage, [newObject.payload]);
//           } else {
//             data.mortgage = newObject.payload;
//           }
//           return true;
//           // }
//         } else if (
//           Array.isArray(data.properties) &&
//           newObject.type === "properties"
//         ) {
//           // Check if application_id already exists
//           // if (!data.assets.some(emp => emp.application_id === applicationId)) {
//           if (!data.properties || data.properties.length == 0) {
//             // setTimeout(() => {
//             Object.assign(data.properties, [newObject.payload]);
//             // }, 2);
//           } else {
//             data.properties.push(newObject.payload);
//           }
//           this.dataObj = data;
//           return true;
//           // }
//         } else if (
//           Array.isArray(data.subjectProperty) &&
//           newObject.type === "subjectProperty"
//         ) {
//           // if (!data.subjectProperty || data.subjectProperty.length == 0) {
//           Object.assign(data.subjectProperty, [newObject.payload]);
//           // } else {
//           // data.assets.push(newObject.payload);
//           // }
//           return true;
//         }
//       }

//       // Recursively traverse nested objects
//       for (const key in data) {
//         if (
//           this.modifyNestedData(
//             data[key],
//             applicationId,
//             updates,
//             operation,
//             newObject
//           )
//         ) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

export const getMasterSingleValueObj = (id, key, data) => {
  return data.find((item) => item[key] === id);
};

export function transformSegmentData(input) {
  const transformed = {
    ...input,
    data: {
      ...input.data,
      updated_by: input?.data?.updated_by
        ?.filter((name) => name !== null)
        ?.map((name, index) => ({
          id: index + 1,
          updated_by: name,
        })),
      segments: input.data?.segments?.map((segment, index) => ({
        id: index + 1,
        segment,
      })),
    },
  };
  return transformed;
}
export function findKeysInResponse(response) {
  if (response?.api_response) {
      response = {...JSON.parse(response.api_response)};
  }



  for (let key of messageTypeKeys) {
    if (key in response) {
      // console.log(response);
      return response[key];
    }
  }
  return "Something went Wrong";
}

export const messageTypeKeys = [
  "message", // General message
  "success_message", // Success message (operation succeeded)
  "error_message", // Error message (operation failed)
  "warning_message", // Warning message (non-critical issue)
  "info_message", // Informational message (general info or guidance)
  "validation_message", // Validation error message (form or data validation)
  "confirmation_message", // Confirmation message (to confirm an action)
  "alert_message", // Alert message (to notify user of critical information)
  "status_message", // Status message (general status update)
  "success_alert", // Alert for a successful operation
  "error_alert", // Alert for an error that needs attention
  "warning_alert", // Alert for a warning condition
  "info_alert", // Informational alert
  "system_message", // System-level message (internal message for users or admins)
  "user_message", // User-specific message (direct message to a user)
  "notification_message", // Notification message (could be system or user notification)
  "response_message", // General message from backend response
  "retry_message", // Message asking the user to retry an operation
  "timeout_message", // Message indicating a timeout condition
  "success_response", // Success response message (often used in RESTful APIs)
  "error_response", // Error response message (for failed operations)
  "failure_message", // Message for failure (often more generic than error_message)
  "maintenance_message", // Message indicating system maintenance or downtime
  "unauthorized_message", // Message for unauthorized access
  "forbidden_message", // Message for forbidden action
  "not_found_message", // Message indicating a resource was not found
  "service_unavailable_message", // Service unavailable (e.g., HTTP 503)
  "quota_exceeded_message", // Message for exceeding a usage quota
  "rate_limit_message", // Message for exceeding rate limits
  "internal_error_message", // Internal server error message (500)
  "deprecation_message", // Message warning about deprecated functionality
  "validation_error_message", // Message indicating validation failure
  "authentication_error_message", // Message for authentication issues
  "authorization_error_message", // Message for authorization failures
  "timeout_error_message", // Message for timeout-related failures
];

function setPrimaryBorrowerFirst(borrowers) {
  const index = borrowers.findIndex((b) => b.is_main_borrower === true);
  if (index > 0) {
    const [primary] = borrowers.splice(index, 1);
    borrowers.unshift(primary);
  }
  return borrowers;
}

export function hitFunction() {
  let hitCount = parseInt(localStorage.getItem("hitCount")) || 0;
  hitCount++;
  localStorage.setItem("hitCount", hitCount.toString());
  return hitCount;
}
