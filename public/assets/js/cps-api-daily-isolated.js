//
// AutoRun is called when page the body is loaded.

function autorun() {
  const lookup = document.getElementById("lookup"); 
  const dataDisplay = document.getElementById("dataOutput");
  const buttons = document.querySelector(".btn");
  const datePicker = document.getElementById("date");
  const dateLabel = document.querySelector("[for='date']");
  const progress = document.getElementById("queryOutput");
  datePicker.style.visibility = "hidden";
  dateLabel.style.visibility = "hidden";
  buttons.style.visibility = "hidden";
  let bySchool = [];
  lookup.addEventListener("click", async () => {
    let populations = await fetch("/assets/data/studentcounts.json" )
    .then(response => response.json())
    //
    // Sending query
    dataDisplay.innerHTML = "<p>The data table will appear here after the query response is returned and processed.</p>";
    const sentQuery = new Date();
    progress.innerText = "Query sent to CPS API at " + sentQuery + ". Response can take a full minute or longer, depending on network traffic.\nAwaiting Response.";
    const fetchURL = `https://api.cps.edu/health/cps/SchoolNoAdmittanceSummary`;
    let counting = setInterval (function() { progress.innerText += "." }, 1000);
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    //
    // Upon query's return
    datePicker.style.visibility = "visible";
    dateLabel.style.visibility = "visible";
    buttons.style.visibility = "visible";
    clearInterval(counting);
    const responseTime = new Date() - sentQuery;
    progress.innerText += `
      Query response returned in ${responseTime/1000} seconds. 
      Processing data for display.
`;
    // 
    // Convert data and render to table
    bySchool = GroupDataBySchool(data,datePicker,populations);
    let selectedDate = datePicker.options[datePicker.selectedIndex];
    let selectedDateValue = selectedDate.value;
    let selectedDateText = selectedDate.text;
    dataDisplay.innerHTML = `<h3>Case Counts for the week ending ${selectedDateText}</h3>`;
    let ordered = orderRows(selectedDateValue,bySchool)
    dataTable = renderTable(ordered);
    dataDisplay.appendChild(dataTable);

    //
    // Activate copy to clipboard
    myClipboard(dataDisplay);
  });
  lookup.click();
  datePicker.addEventListener ( "change", () => {
    const selectedDate = datePicker.options[datePicker.selectedIndex];
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
      name: school.name,
      persons: 0,
      population: 0,
      percent: 0
    }
    let matchDate = school.dates.find( date => date.date === selected );
    if (matchDate) {
      row.persons = matchDate.persons;
      row.population = school.population;
      row.percent = Math.round( 1000 * row.persons / row.population )/10;
      rows.push(row)
    }
  }
  console.log(rows);
  rows.sort( (a,b) => b.percent - a.percent);
  return rows;
}

// Data comes from the API as complete record for each week, including school.
// This groups all the weeks for each school into one object as an item in the array.
function GroupDataBySchool (data,datePicker,populations) {
  let dateSet = new Set();
  let schoolsData = []; // This array is returned after processing.
  for (datum of data) {
    dateSet.add(datum.RecordDate);

    let schoolData = schoolsData.find(school => school.id === datum.SchoolID);
    
    if (schoolData) { // If school is already in the array push this report's data.
      const report = {};
      report.date = datum.RecordDate;
      report.persons = parseInt( datum.PersonTotal );
      schoolData.dates.push(report);

    } else { // If school is not found in the array, create the item.
      const school = {};
      school.id = datum.SchoolID;
      school.name = datum.SchoolShortName;
      const matchedSchool = populations.find(row => row.id.toString() === school.id);
      if (matchedSchool) {
        school.population = matchedSchool.students;
      }
      const report = {};
      report.date = datum.RecordDate;
      report.persons = parseInt( datum.PersonTotal );
      school.dates = [];
      school.dates.push(report);
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
      datePicker.innerHTML += `<option value="${date}">${dateString}</option>`;
    }
  console.log(schoolsData);
  return schoolsData;
}

//
// Creates the table that displays the data in final format.
function renderTable(rows) {
  let table = document.createElement("table");
  table.id="dataDisplay";
  let thead = `
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Quarantined</th>
        <th scope="col">Population</th>
        <th scope="col">Percent Quarantined</th>
      </tr>
    </thead>
  `
  table.innerHTML = thead;
  let tbody = document.createElement("tbody");

  for (row of rows) {
    let tr = document.createElement("tr"); 
    const percent = row.percent.toFixed(1);
    tr.innerHTML  = `<td>${row.name}</td>`;
    tr.innerHTML += `<td>${commify( row.persons )}</td>`
    tr.innerHTML += `<td>${commify( row.population )}</td>`
    tr.innerHTML += `<td>${percent}%</td>`
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
