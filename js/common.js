//common function create for display Data
function displayData(serial, elipseHeader, newtotaleElispseNumber) {
  let tableContainer = document.getElementById("table-container");
  // create tr
  // show table data
  let tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${serial}</td>
        <td>${elipseHeader}</td>
        <td>${newtotaleElispseNumber}cm<sup>2</sup></td>
        <td class="px-2 py-2 rounded-md  bg-[#1090D8]  text-white text-center">convert to m<sup>2</sup></td>
        `;
  tableContainer.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

//disabled button common function
function disabledButton(elementId) {
  document.getElementById(elementId).setAttribute("disabled", true);
}

//clear input using common function
function clearInputField(firstValue, secondValue) {
  firstValue.value = "";
  secondValue.value = "";
}
