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
    let id = cpsid.value;
    let fetchURL = `https://api.cps.edu/health/CPS/District2021DailyCOVIDTesting?StartDate=${start}&EndDate=${end}`;
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    datastring = JSON.stringify(data);
    output.innerHTML = datastring;

  });
}
