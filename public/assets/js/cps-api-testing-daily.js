function autorun() {
  let commify = function (numberString) {
    const number = parseInt(numberString);
    const returnString = number.toLocaleString();
    return returnString;
  }
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
  const output = document.getElementById("dataTable");
  lookup.addEventListener("click", async () => {
    output.innerText = "Querying CPS API";
    let startDate = start.value;
    let endDate = end.value;
    let fetchURL = `https://api.cps.edu/health/CPS/District2021DailyCOVIDTesting?StartDate=${startDate}&EndDate=${endDate}`;
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    const header = `
  <p>
    <button class="btn" data-clipboard-target="#dataTable" style="display:flex; align-items: center; justify-content:center;">
      <img src="/assets/img/copied.svg" alt="" style="height: 1.6em; margin: 8px;"/>
      <span>Copy table to clipboard</span>
    </button>
    <span id="copiedMsg"></span>
  </p>
  <table>
    <thead>
      <tr><th scope="col">Case Count Date</th><th scope="col">Adult Case Count</th><th scope="col">Child Case Count</th><th scope="col">Total Positive Count</th><th scope="col">Close Contacts Count</th><th scope="col">Total Test Count</th><th scope="col">Tested Positive Count</th><th scope="col">Invalid Test Count</th><th scope="col">Adult Test Count</th><th scope="col">Child Test Count</th></tr>
    </thead>
  <tbody>
`
    let body = ``;
    for (datum of data) {
      const datumRow = `
<tr><td>${convertDate(datum.CaseCountDate)}</td><td>${commify(datum.AdultCaseCount)}</td><td>${commify(datum.ChildCaseCount)}</td><td>${commify(datum.TotalPositiveCount)}</td><td>${commify(datum.CloseContactsCount)}</td><td>${commify(datum.TotalTestCount)}</td><td>${commify(datum.TestedPositiveCount)}</td><td>${commify(datum.InvalidTestCount)}</td><td>${commify(datum.AdultTestCount)}</td><td>${commify(datum.ChildTestCount)}</td></tr>`;
      body += datumRow;
    }
    const footer = "</tbody></table>";
    output.innerHTML = header + body + footer;
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
