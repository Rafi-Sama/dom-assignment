function donate(btnId, cashId) {
  document.getElementById(btnId).addEventListener("click", function (event) {
    event.preventDefault();
    const donation = parseFloat(document.getElementById(cashId).value);
    if (isNaN(donation)) {
      alert("Invalid Input!!");
      document.getElementById(cashId).value = "";
      return;
    }
    if (parseFloat(document.getElementById("balance").innerText) < donation) {
      alert("Insufficient balance!!");
      document.getElementById(cashId).value = "";
      return;
    }
    document.getElementById("balance").innerText -= donation;
    const fund = parseFloat(document.getElementById("fund" + cashId).innerText);
    document.getElementById("fund" + cashId).innerText = fund + donation;
    document.getElementById(cashId).value = "";
    my_modal_5.showModal();

    const donateDiv = document.createElement("div");
    donateDiv.classList.add(
      "rounded-lg",
      "border",
      "border-gray-400",
      "p-4",
      "my-3"
    );

    const h1 = document.createElement("h1");
    h1.classList.add("font-bold", "text-md");
    if (cashId == 1)
      h1.innerText = `${donation} Taka is Donated for Flood Relief in Feni, Bangladesh`;
    if (cashId == 2)
      h1.innerText = `${donation} Taka is Donated for famine-2024 in Feni, Bangladesh`;
    if (cashId == 3)
      h1.innerText = `${donation} Taka is Donated for Quota movement in Feni, Bangladesh`;
    const date = new Date();
    const p = `Date: ${date}`;

    document.getElementById("pre").classList.add("hidden");
    donateDiv.append(h1);
    donateDiv.append(p);
    document.getElementById("history-container").appendChild(donateDiv);
  });
}
