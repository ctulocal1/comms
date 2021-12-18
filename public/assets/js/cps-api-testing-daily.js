function autorun() {
  let dollarize = function (amount) {
    let formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    }).format(amount);
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
    <tr><th scope="col">AdultCaseCount</th><th scope="col">ChildCaseCount</th><th scope="col">TotalPositiveCount</th><th scope="col">CloseContactsCount</th><th scope="col">CaseCountDate":"2021-12-16T00:00:00-06:00","TotalTestCount</th><th scope="col">TestedPositiveCount</th><th scope="col">InvalidTestCount</th><th scope="col">AdultTestCount</th><th scope="col">ChildTestCount</th></tr>
  </thead>
<tbody>
`
    let body = ``;
    for (datum of data) {
      const datumRow = `
<tr><td>${datum.AdultCaseCount}</td><td>${datum.ChildCaseCount}</td><td>${datum.TotalPositiveCount}</td><td>${datum.CloseContactsCount}</td><td>${datum.CaseCountDate}</td><td>${datum.TotalTestCount}</td><td>${datum.TestedPositiveCount}</td><td>${datum.InvalidTestCount}</td><td>${datum.AdultTestCount}</td><td>${datum.ChildTestCount}</td></tr>`;
      body += datumRow;
    }
    const footer = "</tbody></table>";
    datastring = JSON.stringify(data);
    output.innerHTML = header + body + footer;
  });
}
