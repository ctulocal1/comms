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
  const cpsid = document.getElementById("cpsid");
  const output = document.getElementById("stipend");
  lookup.addEventListener("click", async () => {
    let id = cpsid.value;
    let fetchURL = `/.netlify/functions/sports?id=${id}`;
    let stipends = await fetch(fetchURL).then(
      response => response.json()
    );
    const firstname = stipends[0].firstname,
      lastname = stipends[0].lastname,
      type = stipends[0].class;
    let header = `
   <h2>${stipends.length} stipends found for ${firstname} ${lastname}, ${type}</h2>
   <table id="stipends" border="none" cellspacing = "0" cellpadding="4">
     <thead>
       <tr><th scope="col">Position</th><th scope="col">Amount</th></tr>
     </thead>
     <tbody>
   `;
    let rows = "";
    let stipendText = "";
    for (stipend of stipends) {
      let row = `
     <tr><td>${stipend.type}</td><td>${dollarize(stipend.amount)}</td></tr>
                   `;
      rows += row;
    }
    let footer = `
     </tbody>
   </table>
   `;
    output.innerHTML = header + rows + footer;

  });
}
