//
// AutoRun is called when page the body is loaded.

function autorun() {
  const lookup = document.getElementById("lookup"); 
  const dataDisplay = document.getElementById("dataOutput");
  const progress = document.getElementById("queryOutput");
  lookup.addEventListener("click", async () => {
    //
    // Sending query
    const sentQuery = new Date();
    progress.innerText = "Query sent to CPS API at " + sentQuery + ".";
    const fetchURL = `https://api.cps.edu/health/cps/schoolweeklycovidactionable?startdate=2021-08-20`;
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    //
    // Upon query's return
    const responseTime = new Date() - sentQuery;
    progress.innerText += `
      Query response returned in ${responseTime/1000} seconds. 
      Processing data for display.
`;
    // 
    // Convert data and render to table
    const bySchool = GroupDataBySchool(data);
    dataTable = renderTable(bySchool);
    dataDisplay.appendChild(dataTable);
    progress.innerHTML +=`
    <p>
      <button class="btn" data-clipboard-target="#dataOutput" style="display:flex; align-items: center; justify-content:center;">
        <img src="/assets/img/copied.svg" alt="" style="height: 1.6em; margin: 8px;"/>
        <span>Copy table to clipboard</span>
      </button>
      <span id="copiedMsg"></span>
    </p>
    `

    //
    // Activate copy to clipboard
    myClipboard(dataDisplay);
  });
  return false;
}

// Data comes from the API as complete record for each week, including school.
// This groups all the weeks for each school into one object as an item in the array.
function GroupDataBySchool (data) {
  let schoolsData = []; // This array is returned after processing.
  for (datum of data) {
    let schoolData = schoolsData.find(school => school.SchoolID === datum.SchoolID);

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
        <th scope="col">Latest Week End Date</th>
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
    const weeks = datum.Weeks;
    const allCases = datum.Weeks.map( item => item.Cases );
    const allContacts = datum.Weeks.map( item => item.Contacts );
    const sum = (item1, item2) => item1 + item2;
    const YTDcases = allCases.reduce(sum);
    const YTDcontacts = allContacts.reduce(sum);
    weeks.sort( (a,b) => a.End - b.End);
    // console.log(datum);
    let tr = document.createElement("tr"); 
    tr.innerHTML  = `<td>${datum.Name}</td>`;
    tr.innerHTML += `<td>${convertDate(weeks[0].End)}</td>`
    tr.innerHTML += `<td>${commify(weeks[0].Cases)}</td>`
    tr.innerHTML += `<td>${commify(weeks[0].Contacts)}</td>`
    tr.innerHTML += `<td>${commify(weeks.length)}</td>`
    tr.innerHTML += `<td>${commify(YTDcases)}</td>`
    tr.innerHTML += `<td>${commify(YTDcontacts)}</td>`
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

  const formatted = mm + '/' + dd + '/' + yyyy;
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

    sayCopied(dataDisplay);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
}

function sayCopied (dataDisplay) {
  dataDisplay.style.background = "#222299";
  let unhighlight = setTimeout( () => dataDisplay.style.background = "transparent", 300);
  const msgTarget = document.getElementById("copiedMsg");
  msgTarget.innerText = "Table copied to clipboard";
  let disappear = setTimeout( () => msgTarget.innerText = '', 1400);
}
