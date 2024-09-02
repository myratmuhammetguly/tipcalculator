document.querySelector(".container").onchange = function () {
  let bill = Number(document.getElementById("amount").value);
  let tip = Number(document.getElementById("tip-range").value);

  document.getElementById("tip-percentage").innerHTML = `${tip}%`;
  //calculate the tip and total bill
  let tipAmount = bill * (tip / 100);
  let totalBill = tipAmount + bill;

  //Show results
  document.querySelector("#tip-amount").innerHTML = `${tipAmount.toFixed(2)}`;
  document.querySelector("#total-bill").innerHTML = `${totalBill.toFixed(2)}`;
};
