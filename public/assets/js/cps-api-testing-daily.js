function autorun() {
  let convertDate = function (datestring) {
    let date = new Date(datestring);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    const formatted = mm + '/' + dd + '/' + yyyy;
    return formatted;
  } 
  const lookup = document.getElementById("lookup"); 
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const output = document.getElementById("stipend");
  lookup.addEventListener("click", async () => {
    let startDate = start.value;
    let endDate = end.value;
    let fetchURL = `https://api.cps.edu/health/CPS/District2021DailyCOVIDTesting?StartDate=${startDate}&EndDate=${endDate}`;
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    const header = `
<table>
  <thead>
    <tr><th scope="col">Adult Case Count</th><th scope="col">Child Case Count</th><th scope="col">Total Positive Count</th><th scope="col">Close Contacts Count</th><th scope="col">Case Count Date</th><th scope="col">Total Test Count</th><th scope="col">Tested Positive Count</th><th scope="col">Invalid Test Count</th><th scope="col">Adult Test Count</th><th scope="col">Child Test Count</th></tr>
  </thead>
<tbody>
`
    let body = ``;
    for (datum of data) {
      const datumRow = `
<tr><td>${datum.AdultCaseCount}</td><td>${datum.ChildCaseCount}</td><td>${datum.TotalPositiveCount}</td><td>${datum.CloseContactsCount}</td><td>${convertDate(datum.CaseCountDate)}</td><td>${datum.TotalTestCount}</td><td>${datum.TestedPositiveCount}</td><td>${datum.InvalidTestCount}</td><td>${datum.AdultTestCount}</td><td>${datum.ChildTestCount}</td></tr>`;
      body += datumRow;
    }
    const footer = "</tbody></table>";
    output.innerHTML = header + body + footer;
  });
}
