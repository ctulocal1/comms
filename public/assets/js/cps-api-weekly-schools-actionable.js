function autorun() {
  let commify = function (numberString) {
    const number = parseInt(numberString);
    const returnString = number.toLocaleString();
    return returnString;
  }
  let convertDate = function (datestring) {
    const date = new Date(datestring);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    const formatted = mm + '/' + dd + '/' + yyyy;
    return formatted;
  } 
  const lookup = document.getElementById("lookup"); 
  const output = document.getElementById("dataOutput");
  lookup.addEventListener("click", async () => {
    const sentQuery = new Date();
    output.innerText = "Query sent to CPS API at " + sentQuery + ".";
    const fetchURL = `https://api.cps.edu/health/cps/schoolweeklycovidactionable?startdate=2021-08-20`;
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    const responseTime = new Date() - sentQuery;
    output.innerText += `
Query response returned in  ${responseTime/1000} seconds. Processing data for display.
`;
    const bySchool = unifySchoolData(data);
    // output.innerText = JSON.stringify(data);
    myClipboard(output);
  });
}

function myClipboard (output) {
  // ClipboardJS loaded with separate call in page body
  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    sayCopied(output);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
}

function sayCopied (output) {
  output.style.background = "#222299";
  let unhighlight = setTimeout( () => output.style.background = "transparent", 300);
  const msgTarget = document.getElementById("copiedMsg");
  msgTarget.innerText = "Table copied to clipboard";
  let disappear = setTimeout( () => msgTarget.innerText = '', 1400);
}
function unifySchoolData (data) {
  let schoolsData = [];
  for (datum of data) {
    let schoolData = schoolsData.find(school => school.SchoolID === datum.SchoolID);
    if (schoolData){
      const week = {};
      week.End = datum.WeekEndDate;
      week.Start = datum.WeekStartDate;
      week.Cases = datum.TotalCaseCount;
      week.Contacts = datum.CloseContactsCount;
      schoolData.Weeks.push(week);

    } else {

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
    }
    //console.log(schoolData.Name,":",schoolData.Weeks[schoolData.Weeks.length - 1].End)
  }
  console.log(schoolsData);
}
