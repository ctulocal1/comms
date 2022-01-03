//
// AutoRun is called when page the body is loaded.

function autorun() {
  const lookup = document.getElementById("lookup"); 
  const dataDisplay = document.getElementById("dataOutput");
  const buttons = document.querySelector("#buttons .btn");
  const weekPicker = document.getElementById("weeks");
  const progress = document.getElementById("queryOutput");
  let bySchool = [];
  lookup.addEventListener("click", async () => {
    //
    // Sending query
    dataDisplay.innerHTML = "";
    const sentQuery = new Date();
    progress.innerText = "Query sent to CPS API at " + sentQuery + ". Response can take up to a minute or longer, depending on network traffic.\nAwaiting Response.";
    const fetchURL = `https://api.cps.edu/health/cps/schoolweeklycovidactionable?startdate=2021-08-20`;
    let counting = setInterval (function() { progress.innerText += "." }, 1000);
    buttons.style.visibility = "visible";
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    //
    // Upon query's return
    clearInterval(counting);
    const responseTime = new Date() - sentQuery;
    progress.innerText += `
      Query response returned in ${responseTime/1000} seconds. 
      Processing data for display.
`;
    // 
    // Convert data and render to table
    bySchool = GroupDataBySchool(data,weekPicker);
    let selectedDate = weekPicker.options[weekPicker.selectedIndex];
    let selectedDateValue = selectedDate.value;
    let selectedDateText = selectedDate.text;
    console.log(selectedDate);
    let ordered = orderRows(selectedDateValue,bySchool)
    dataTable = renderTable(ordered);
    dataDisplay.innerHTML = `<h3>Case Counts for the week ending ${selectedDateText}</h3>`;
    dataDisplay.appendChild(dataTable);
    buttons.style.visibility = "visible";

    //
    // Activate copy to clipboard
    myClipboard(dataDisplay);
  });
  lookup.click();
  weekPicker.addEventListener ( "change", () => {
    const selectedDate = weekPicker.options[weekPicker.selectedIndex];
    const selectedDateValue = selectedDate.value;
    const selectedDateText =  selectedDate.text;
    let ordered = orderRows(selectedDateValue,bySchool);
    dataTable = renderTable(ordered);
    dataDisplay.innerHTML = `<h3>Case Counts for the week ending ${selectedDateText}</h3>`;
    dataDisplay.appendChild(dataTable);
  });
  return false;
}

function orderRows (selected,schools) {
  let rows = [];
  for (school of schools) {
    const row = {
      name: school.Name,
      wkCases: 0,
      wkContacts: 0,
      wksReporting: 0,
      YTDcases: 0,
      YTDcontacts:0
    }
    let matchWeek = school.Weeks.find( week => week.End === selected );
    if (matchWeek) {
      console.log(matchWeek);
      row.wkCases = matchWeek.Cases;
      row.wkContacts = matchWeek.Contacts;
    }
    for (week of school.Weeks) {
      if (week.End === selected || week.End < selected) {
        row.YTDcases += week.Cases;
        row.YTDcontacts += week.Contacts;
        row.wksReporting++;
      }
    }
    rows.push(row)
  }
  rows.sort( (a,b) => b.wkCases - a.wkCases);
  console.log(rows);
  return rows;
}

// Data comes from the API as complete record for each week, including school.
// This groups all the weeks for each school into one object as an item in the array.
function GroupDataBySchool (data,weekPicker) {
  let dateSet = new Set();
  let schoolsData = []; // This array is returned after processing.
  for (datum of data) {
    let schoolData = schoolsData.find(school => school.SchoolID === datum.SchoolID);

    dateSet.add(datum.WeekEndDate);

    if (schoolData) { // If school is already in the array push this week's data.
      const week = {};
      week.End = datum.WeekEndDate;
      week.Start = datum.WeekStartDate;
      week.Cases = datum.TotalCaseCount;
      week.Contacts = datum.CloseContactsCount;
      schoolData.Weeks.push(week);

    } else { // If school is not found in the array, create the item.

      let school = {};
      school.SchoolID = datum.SchoolID;
      school.Name = datum.SchoolShortName;
      school.Network = datum.NetworkName;
      school.Weeks = [];
      const week = {};
      week.Start = datum.WeekStartDate;
      week.End = datum.WeekEndDate;
      week.Cases = datum.TotalCaseCount;
      week.Contacts = datum.CloseContactsCount;
      school.Weeks.push(week);
      schoolsData.push(school);
      schoolData = schoolsData[schoolsData.length - 1];
    }// end of else

  } // end of for loop over data
    let dateArray = [...dateSet];
    dateArray = dateArray.sort().reverse();
    let dates = [];
    for (date of dateArray) {
      const dateval = new Date(date);
      const dateString =  new Intl.DateTimeFormat('en-US', {month:"short",day:"2-digit"}).format(dateval).toUpperCase();
      weekPicker.innerHTML += `<option value="${date}">${dateString}</option>`;
    }
  return schoolsData;
  // console.log(schoolsData);
}

//
// Creates the table that displays the data in final format.
function renderTable(data) {
  let table = document.createElement("table");
  table.id="dataDisplay";
  let thead = `
    <thead>
      <tr>
        <th scope="col">School Name</th>
        <th scope="col">Latest Case Count</th>
        <th scope="col">Latest Contact Count</th>
        <th scope="col"># Weeks Reporting</th>
        <th scope="col">YTD Case Count</th>
        <th scope="col">YTD Contact Count</th>
      </tr>
    </thead>
  `
  table.innerHTML = thead;
  let tbody = document.createElement("tbody");

  for (datum of data) {
    let tr = document.createElement("tr"); 
    tr.innerHTML  = `<td>${datum.name}</td>`;
    tr.innerHTML += `<td>${commify(datum.wkCases)}</td>`
    tr.innerHTML += `<td>${commify(datum.wkContacts)}</td>`
    tr.innerHTML += `<td>${commify(datum.wksReporting)}</td>`
    tr.innerHTML += `<td>${commify(datum.YTDcases)}</td>`
    tr.innerHTML += `<td>${commify(datum.YTDcontacts)}</td>`
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}

//
// Number formatting functions
//
function commify (numberString) {
  const number = parseInt(numberString);
  return number.toLocaleString();
}

function convertDate (datestring) {
  const date = new Date(datestring);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const formatted = yyyy + '-' + mm + '-' + dd;
  return formatted;
} 

//
// Functions related to copying table to clipboard 
//
function myClipboard (dataDisplay) {
  // ClipboardJS loaded with separate call in page body
  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    const msgTarget = document.getElementById("copiedMsg");
    msgTarget.innerText = "Table copied to clipboard";

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
}
