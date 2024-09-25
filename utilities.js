function donate(btnId, cashId) {
  document.getElementById(btnId).addEventListener("click", function (event) {
    event.preventDefault();
    const donation = parseFloat(document.getElementById(cashId).value);
    if (isNaN(donation)) {
      alert("Invalid Input!!");
      document.getElementById(cashId).value = "";
      return;
    }
    if(parseFloat(document.getElementById("balance").innerText) < donation){
      alert("Insufficient balance!!");
      document.getElementById(cashId).value = "";
      return;
    }
    document.getElementById("balance").innerText -= donation;
    const fund = parseFloat(document.getElementById("fund" + cashId).innerText);
    document.getElementById("fund" + cashId).innerText = fund + donation;
    document.getElementById(cashId).value = "";
    my_modal_5.showModal();
  });
}
